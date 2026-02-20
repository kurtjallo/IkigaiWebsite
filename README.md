# Ikigai Consulting Group Website

Production marketing website for Ikigai Consulting Group, a consulting practice serving Ontario nonprofits and purpose-driven organizations.

## 1) Project Overview

- Framework: Next.js App Router site exported as static files.
- Audience: nonprofit leaders, boards, and mission-driven organizations in Ontario.
- Goal: explain services/model, establish trust, and drive strategy-call bookings.

## 2) Tech Stack

| Area | Tooling |
|---|---|
| Framework | Next.js 16 (`app/` router, `output: 'export'`) |
| Runtime | React 19 |
| Language | TypeScript 5 |
| Styling | Inline style system + shared token object + Tailwind CSS 4 base/theme in `src/app/globals.css` |
| Animation | `motion` (`motion/react`) |
| Fonts | `next/font/google` (Instrument Serif, IBM Plex Sans, IBM Plex Mono) |
| Forms | Formspree (direct `fetch` from Contact page) |
| SEO | Next metadata, sitemap, robots, Open Graph image route, JSON-LD |

## 3) Features (Current)

- Marketing routes: `/`, `/about`, `/services`, `/model`, `/impact`, `/contact`, `/privacy`.
- Sticky top navigation with responsive mobile menu.
- Scroll-reveal/stagger animations with reduced-motion fallback.
- Contact workflow:
  - Form submission to Formspree.
  - Direct external calendar booking link (Calendly URL from env var).
- Structured content from local data files (pillars, case studies, testimonials, values).
- Static export build output in `out/` for static hosting.
- SEO/metadata:
  - Central metadata config.
  - `sitemap.xml` and `robots.txt` routes.
  - JSON-LD for `Organization` and `LocalBusiness`.

## 4) Prerequisites

- Node.js 20+.
- npm 9+.

## 5) Quick Start

```bash
npm ci
touch .env.local
npm run dev
```

Open `http://localhost:3000`.

Production build:

```bash
npm run build
```

Static output is generated in `out/`.

## 6) Environment Variables

Create `.env.local` in the project root.

| Variable | Required | Example | Purpose |
|---|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Yes (production) | `xqkrabcd` | Formspree form ID used by contact form POST endpoint. |
| `NEXT_PUBLIC_CALENDLY_URL` | Recommended | `https://calendly.com/your-handle/strategy-call` | URL opened by the “Open Calendar” button on Contact page. |

Notes:
- If `NEXT_PUBLIC_FORMSPREE_ID` is missing, code falls back to `test` and submissions will not hit a real form.
- If `NEXT_PUBLIC_CALENDLY_URL` is missing, code falls back to `https://calendly.com`.

## 7) Available Scripts

| Script | Command | What It Does |
|---|---|---|
| Dev server | `npm run dev` | Runs Next.js development server (Turbopack). |
| Production build | `npm run build` | Builds static export (`out/`) because `output: 'export'` is enabled. |
| Production start | `npm run start` | Runs `next start`. Not used for static-export deployments. |
| Lint | `npm run lint` | Runs ESLint across the project. |

## 8) Project Structure

```text
src/
  app/
    page.tsx                # Homepage
    about/page.tsx          # About
    services/page.tsx       # Services
    model/page.tsx          # Model
    impact/page.tsx         # Impact / case studies
    contact/page.tsx        # Contact + Formspree + calendar link
    privacy/page.tsx        # Privacy policy
    layout.tsx              # Root layout, nav, JSON-LD injection
    globals.css             # Tailwind import + theme/base styles
    sitemap.ts              # sitemap.xml route
    robots.ts               # robots.txt route
    opengraph-image.tsx     # OG image generation route
    icon.tsx                # favicon/icon route
    apple-icon.tsx          # apple touch icon route
  lib/
    shared.tsx              # Shared UI sections/components + animation helpers + tokens
    fonts.ts                # next/font configuration
    data/
      metadata.ts           # global metadata and page metadata map
      structured-data.ts    # JSON-LD schema objects
      pillars.ts            # Services content model
      case-studies.ts       # Impact case studies
      testimonials.ts       # Testimonials
      values.ts             # About values
```

## 9) Content Editing Guide

| Content Area | Primary File(s) |
|---|---|
| Homepage copy/sections | `src/app/page.tsx` |
| About page copy | `src/app/about/page.tsx` |
| Services page layout | `src/app/services/page.tsx` |
| Services pillar content | `src/lib/data/pillars.ts` |
| Model page copy/diagrams | `src/app/model/page.tsx` |
| Impact page layout | `src/app/impact/page.tsx` |
| Case studies | `src/lib/data/case-studies.ts` |
| Testimonials | `src/lib/data/testimonials.ts` |
| Contact form + calendar copy | `src/app/contact/page.tsx` |
| Privacy/legal copy | `src/app/privacy/page.tsx` |
| Global nav and shared CTA section | `src/lib/shared.tsx` |
| SEO base metadata | `src/lib/data/metadata.ts` |
| Structured data (JSON-LD) | `src/lib/data/structured-data.ts` |

## 10) Design System Notes

- Token source for inline styles: `src/lib/shared.tsx` (`tokens` object).
- Global CSS theme/base rules: `src/app/globals.css`.
- Font variables are defined in `src/lib/fonts.ts` and attached in `src/app/layout.tsx`.
- Shared components in `src/lib/shared.tsx`:
  - `SiteNav`
  - `PageHeader`
  - `CTASection`
  - `SectionLabel`
  - Animation helpers: `FadeIn`, `StaggerWrap`, `StaggerItem`
- Animation behavior:
  - Uses `whileInView` for reveal animations.
  - Respects reduced-motion via `useReducedMotion()`.

## 11) Deployment (Vercel + Production Env Setup)

### Vercel

1. Import the repository into Vercel.
2. In Project Settings -> Environment Variables, add:
   - `NEXT_PUBLIC_FORMSPREE_ID`
   - `NEXT_PUBLIC_CALENDLY_URL`
3. Deploy with default Next.js settings.

Because `next.config.ts` uses `output: 'export'`, build output is static. The generated files are in `out/`.

### Non-Vercel Static Hosting

```bash
npm ci
npm run build
```

Deploy the `out/` directory to your static host/CDN.

## 12) QA Checklist Before Release

- [ ] `npm run lint` passes.
- [ ] `npm run build` succeeds and `out/` is generated.
- [ ] All primary routes load:
  - `/`, `/about`, `/services`, `/model`, `/impact`, `/contact`, `/privacy`
- [ ] Contact form sends successfully with production `NEXT_PUBLIC_FORMSPREE_ID`.
- [ ] Calendar button opens correct `NEXT_PUBLIC_CALENDLY_URL`.
- [ ] Mobile nav opens/closes and links navigate correctly.
- [ ] Hero + section animations appear correctly when navigating directly to each page.
- [ ] `sitemap.xml` and `robots.txt` routes are accessible.
- [ ] Metadata preview (title/description/OG image) is correct for key pages.

## 13) Troubleshooting

### Next.js warns about multiple lockfiles / wrong workspace root

Symptom:

```text
Warning: Next.js inferred your workspace root, but it may not be correct.
Detected additional lockfiles...
```

Fix options:
- Remove unrelated lockfiles outside this repo.
- Or set `turbopack.root` in `next.config.ts` to this project directory.

### Port 3000 is already in use

```bash
lsof -i :3000
kill -9 <PID>
```

Or run on another port:

```bash
npm run dev -- --port 3001
```

### Contact form submissions fail

Check:
- `NEXT_PUBLIC_FORMSPREE_ID` is set in `.env.local` (or Vercel env vars).
- Formspree endpoint is active and accepts requests for that ID.

### Calendar button opens generic Calendly page

Set `NEXT_PUBLIC_CALENDLY_URL` to the actual scheduling link.

### Build works but server-specific features do not

This project is configured for static export (`output: 'export'`). Avoid server-only features that require runtime Node APIs.

## 14) License / Ownership

All rights reserved. Code, content, and brand assets are proprietary to Ikigai Consulting Group unless explicitly stated otherwise.

## Assumptions

- There is no `LICENSE` file currently in the repository; ownership text above reflects current project intent.
- There is no committed `.env.example`; environment variable examples are documented here for onboarding.
- CI pipeline definitions are not present in this repository; QA checklist above is manual.
