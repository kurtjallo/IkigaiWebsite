# Phase 11 Research: CI + Security + Deployment

**Researched:** 2026-02-16
**Confidence:** HIGH (all sources verified via official documentation)

---

## 1. GitHub Actions CI for Next.js

### Workflow Structure

GitHub Actions workflows live in `.github/workflows/`. For a Next.js static export project, the CI pipeline should:

1. **Checkout** code (`actions/checkout@v5`)
2. **Setup Node.js** (`actions/setup-node@v5` with `node-version: lts/*`)
3. **Cache node_modules** (use `actions/cache@v4` with `node_modules` path keyed on `package-lock.json` hash)
4. **Install dependencies** (`npm ci`)
5. **Run checks** (typecheck, lint, build)

### Caching Strategy

```yaml
- uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

Using `~/.npm` cache (npm's global cache) rather than `node_modules/` directly is recommended -- `npm ci` always deletes `node_modules/` before installing, so caching the npm download cache gives the speed benefit without stale dependency risk.

### Trigger Events

```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```

**Source:** GitHub Actions documentation, actions/setup-node@v5, actions/cache@v4.

---

## 2. Lighthouse CI GitHub Action

### Action Details

- **Action:** `treosh/lighthouse-ci-action@v12`
- **Lighthouse version:** v12.6
- **License:** MIT

### Configuration for Budget Enforcement

Lighthouse CI supports two approaches:

**Approach A: Budget file (resource budgets)**
```json
[{
  "path": "/*",
  "resourceSizes": [
    { "resourceType": "document", "budget": 18 },
    { "resourceType": "total", "budget": 200 }
  ]
}]
```

**Approach B: LHCI assertions (score thresholds) -- RECOMMENDED**

For enforcing Lighthouse scores (Performance 90+, Accessibility 90+, etc.), use the `lighthouserc.json` configuration with assertions:

```json
{
  "ci": {
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.9 }]
      }
    },
    "collect": {
      "staticDistDir": "./out"
    }
  }
}
```

The `staticDistDir` option tells LHCI to serve the static files from `out/` (Next.js static export output) and audit them. No need for a running dev server.

### Workflow Integration

```yaml
- name: Audit with Lighthouse CI
  uses: treosh/lighthouse-ci-action@v12
  with:
    configPath: './lighthouserc.json'
    uploadArtifacts: true
```

**Source:** treosh/lighthouse-ci-action@v12 README, Lighthouse CI documentation.

---

## 3. axe-core Accessibility Check in CI

### Approach: @axe-core/cli with built static site

For a static export, the simplest approach is:

1. Build the site (`npm run build` produces `out/`)
2. Serve the static files locally (`npx serve out/ -l 3000`)
3. Run axe against the served pages (`npx @axe-core/cli http://localhost:3000`)

### Alternative: Playwright + @axe-core/playwright

A more robust approach uses Playwright with axe:

```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage has no accessibility violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
```

This approach is preferred because:
- Runs in real browsers (Chromium)
- Can test JavaScript-rendered content
- Results integrated into Playwright test reports
- Same test runner as the smoke test (CI-05)

**Source:** @axe-core/playwright documentation, Playwright accessibility testing guide.

---

## 4. Playwright Setup for Next.js

### Installation

```bash
npm install -D @playwright/test
npx playwright install --with-deps chromium
```

Only install Chromium (not all browsers) to keep CI fast.

### Configuration (playwright.config.ts)

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npx serve out -l 3000',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
```

Key points:
- `webServer` config automatically starts a static file server before tests
- Uses `npx serve out` to serve the Next.js static export
- `forbidOnly` prevents `.only` from passing in CI
- Single worker in CI for stability

### CI Workflow

```yaml
- name: Install Playwright
  run: npx playwright install --with-deps chromium
- name: Run Playwright tests
  run: npx playwright test
- uses: actions/upload-artifact@v4
  if: ${{ !cancelled() }}
  with:
    name: playwright-report
    path: playwright-report/
    retention-days: 30
```

**Source:** Playwright CI documentation (playwright.dev/docs/ci-intro), verified 2026-02-16.

---

## 5. Content Security Policy for Third-Party Services

### Services to Allowlist

| Service | Domains | Used For |
|---------|---------|----------|
| **Calendly** | `assets.calendly.com`, `calendly.com` | Script loading, iframe embed |
| **Formspree** | `formspree.io` | Form submission API |
| **Vercel Analytics** | `va.vercel-scripts.com`, `vitals.vercel-insights.com` | Analytics script + beacon |

### CSP Directive Breakdown

| Directive | Value | Why |
|-----------|-------|-----|
| `default-src` | `'self'` | Restrict everything to same-origin by default |
| `script-src` | `'self' 'unsafe-inline' https://assets.calendly.com https://va.vercel-scripts.com` | Self scripts, Calendly widget JS, Vercel Analytics. `'unsafe-inline'` needed for Next.js hydration and Calendly inline scripts. |
| `style-src` | `'self' 'unsafe-inline' https://assets.calendly.com` | Self styles, inline styles from Next.js/Tailwind, Calendly widget CSS |
| `img-src` | `'self' data: https://assets.calendly.com` | Self images, data URIs (inline SVGs), Calendly assets |
| `font-src` | `'self'` | Self-hosted fonts only (next/font self-hosts Google Fonts) |
| `connect-src` | `'self' https://formspree.io https://vitals.vercel-insights.com https://va.vercel-scripts.com` | Formspree API, Vercel Analytics beacons |
| `frame-src` | `https://calendly.com` | Calendly inline widget iframe |
| `frame-ancestors` | `'none'` | Prevent this site from being iframed (clickjacking protection) |

### Complete CSP Header Value

```
default-src 'self'; script-src 'self' 'unsafe-inline' https://assets.calendly.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://assets.calendly.com; img-src 'self' data: https://assets.calendly.com; font-src 'self'; connect-src 'self' https://formspree.io https://vitals.vercel-insights.com https://va.vercel-scripts.com; frame-src https://calendly.com; frame-ancestors 'none'
```

**Note on `'unsafe-inline'`:** Next.js requires `'unsafe-inline'` for `script-src` because it injects inline scripts for hydration data. A stricter alternative would use nonce-based CSP, but this requires server-side rendering to inject nonces -- not available with static export. For a static consulting website, `'unsafe-inline'` is an acceptable tradeoff.

**Source:** MDN Content-Security-Policy reference, Calendly embed documentation, Vercel Analytics documentation.

---

## 6. Security Headers Configuration

### Vercel.json Headers Format

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Header-Name", "value": "header-value" }
      ]
    }
  ]
}
```

The `source` pattern `/(.*)"` matches all routes. This works with Next.js static export on Vercel.

**Important:** For static exports (`output: 'export'`), the `headers` property in `next.config.ts` is NOT supported (it requires a Node.js server). Security headers MUST be configured in `vercel.json` instead.

### Required Security Headers

| Header | Value | Purpose |
|--------|-------|---------|
| `Content-Security-Policy` | (see above) | Restrict resource loading to trusted sources |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Force HTTPS for 2 years, include subdomains |
| `X-Frame-Options` | `DENY` | Prevent clickjacking (legacy browsers) |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME type sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Send origin only for cross-origin requests |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), interest-cohort=()` | Disable unused browser features |

**Source:** Vercel project configuration docs (vercel.com/docs/project-configuration/vercel-json), verified 2026-02-16.

---

## 7. Vercel Deployment Configuration

### Static Export on Vercel

Vercel auto-detects Next.js projects and respects `output: 'export'` in `next.config.ts`. The build output goes to `out/` and Vercel serves it from their edge CDN.

**Zero configuration needed** for basic deployment -- Vercel reads the framework settings automatically. However, `vercel.json` is needed for custom headers (security headers).

### vercel.json for This Project

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Content-Security-Policy", "value": "..." },
        { "key": "Strict-Transport-Security", "value": "..." },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(), interest-cohort=()" }
      ]
    }
  ]
}
```

### Deploy Pipeline

```
git push main --> Vercel auto-builds --> Static files on edge CDN
```

Features included:
- Automatic HTTPS (auto-provisioned SSL)
- Global CDN
- Deploy previews on PRs
- Custom domain support
- Free tier: 100GB bandwidth

**Source:** Vercel Next.js documentation (vercel.com/docs/frameworks/nextjs), Vercel project configuration docs, verified 2026-02-16.

---

## 8. Vercel Analytics Setup

### Installation

```bash
npm install @vercel/analytics
```

### Integration (App Router)

```typescript
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

The `<Analytics />` component from `@vercel/analytics/next` handles:
- Page view tracking
- Route change detection
- Privacy-friendly (no cookies needed)
- Only loads on Vercel deployments (no-op locally)

### Dashboard Activation

Analytics must also be enabled in the Vercel dashboard: Project Settings > Analytics > Enable.

**Source:** Vercel Web Analytics documentation (vercel.com/docs/frameworks/nextjs), verified 2026-02-16.

---

## Key Decisions

1. **Security headers in vercel.json, not next.config.ts** -- Static export doesn't support the `headers` config option in next.config.ts.
2. **Lighthouse CI via assertions, not budget file** -- Score-based assertions (90+ all categories) directly map to our requirements.
3. **Playwright for both smoke test and accessibility** -- Single test framework for CI-04 (axe) and CI-05 (contact form smoke test).
4. **`'unsafe-inline'` in CSP script-src** -- Required for Next.js static export hydration. Acceptable tradeoff for a static consulting site.
5. **Chromium-only Playwright** -- No need for cross-browser testing in CI; keeps pipeline fast.

---

## Sources

| Source | Verified | Confidence |
|--------|----------|------------|
| treosh/lighthouse-ci-action@v12 | 2026-02-16 | HIGH |
| Playwright CI docs (playwright.dev) | 2026-02-16 | HIGH |
| Next.js static export docs (v16.1.6) | 2026-02-16 | HIGH |
| Vercel project configuration docs | 2026-02-16 | HIGH |
| Vercel Analytics / Next.js integration | 2026-02-16 | HIGH |
| MDN Content-Security-Policy reference | 2026-02-16 | HIGH |
| Calendly embed domains | Training data | MEDIUM (verify at implementation) |
| Vercel Analytics domains | Training data | MEDIUM (verify at implementation) |
