# Stack Research

**Domain:** Premium static consulting website (organizational consulting, authority positioning)
**Researched:** 2026-02-16
**Confidence:** HIGH (all versions verified via npm registry; recommendations based on established, stable tools)

---

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| **Astro** | 5.17.2 (latest stable) | Static site framework | Purpose-built for content-heavy static sites. Zero JS by default = instant page loads. Islands architecture lets us add GSAP animations only where needed without bloating every page. Built-in image optimization, sitemap generation, view transitions. No React/Vue runtime overhead for a site that is fundamentally static HTML + CSS with sprinkled animation. |
| **TypeScript** | 5.9.3 | Type safety | Astro has first-class TS support. Catches bugs in component props, layout data, and configuration. No runtime cost since it compiles away. |

**Why Astro over alternatives:**

- **vs Next.js:** Next.js is a React framework. This site has no client-side state, no user authentication, no dynamic data fetching. Next.js ships React runtime (~40KB) to every page for zero benefit here. Astro ships zero JS by default.
- **vs Gatsby:** Gatsby is effectively dead. The company (Netlify acquired it) stopped active development. Community has migrated away.
- **vs Hugo/11ty:** These are excellent static generators but lack Astro's component model, scoped CSS, image pipeline, and Vite-powered DX. For a site with custom animations and complex layouts, Astro's `.astro` component syntax is far more ergonomic than templating languages.
- **vs plain HTML/CSS:** Six pages with shared layouts, nav, footer, design system tokens, and responsive breakpoints would mean massive duplication. Astro gives us components and layouts without framework overhead.
- **vs Astro 6 beta:** v6 is still in beta (6.0.0-beta.12). Not appropriate for a client deliverable. Stick with 5.x stable.

### Styling

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| **Tailwind CSS** | 4.1.18 (latest stable) | Utility-first CSS framework | v4 is a ground-up rewrite: CSS-first configuration (no more `tailwind.config.js`), automatic content detection, native `@theme` directive for design tokens. Perfect for encoding the brand's hunter green/gold/black/white palette as first-class theme variables. The utility approach prevents CSS bloat across 6 pages with many sections. |
| **@tailwindcss/vite** | 4.1.18 | Vite integration for Tailwind v4 | Tailwind v4 uses a Vite plugin directly instead of PostCSS. Since Astro runs on Vite, this is the cleanest integration path. Do NOT use `@astrojs/tailwind` -- that package only supports Tailwind v3. |

**Why Tailwind v4, not v3:**

- v4 was released stable in January 2025 and is now at 4.1.18 -- battle-tested and stable
- CSS-first config means design tokens live in CSS `@theme` blocks, not JavaScript config files
- Automatic content detection eliminates the `content: [...]` configuration that v3 required
- Native cascade layers (`@layer`) for cleaner specificity management
- Significantly faster build times (Rust-based engine)

**Tailwind plugin note:** `@tailwindcss/typography` (0.5.19) and `@tailwindcss/forms` (0.5.11) both declare compatibility with Tailwind v4 in their peer dependencies. However, for this project:
- **Typography plugin:** SKIP. We want full control over typographic hierarchy for the premium serif/sans-serif pairing. The prose styles would fight our custom type scale.
- **Forms plugin:** SKIP. We have exactly one form (contact page). Custom-styling a single form with Tailwind utilities is trivial and gives us full control over the premium aesthetic.

### Animation

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| **GSAP** | 3.14.2 (latest stable) | Animation engine | The industry standard for premium web animation. ScrollTrigger for scroll-driven reveals, timeline sequencing for hero animations, SVG path animation for the architectural line motifs. No-charge license covers non-commercial and most commercial use. Nothing else comes close for the "high-end architectural firm" feel. |
| **Lenis** | 1.3.17 | Smooth scrolling | Buttery-smooth scroll behavior that transforms the browsing feel from "website" to "experience." Works standalone (no React/Vue dependency required). Integrates cleanly with GSAP ScrollTrigger. This is what separates premium sites from template sites. |

**GSAP modules to use (all included in the free npm package):**
- `gsap` -- core tween engine
- `ScrollTrigger` -- scroll-driven animations (section reveals, parallax, pinning)
- `DrawSVGPlugin` -- animate architectural line drawings as SVG strokes (NOTE: this is a Club plugin, may need the free alternative `MotionPathPlugin` or CSS stroke-dashoffset approach)
- `SplitText` -- headline text reveal animations (NOTE: Club plugin; can achieve similar with manual span wrapping)

**GSAP licensing clarification:** The standard "no charge" license (https://gsap.com/standard-license) covers this consulting website. Premium Club plugins (DrawSVGPlugin, SplitText, MorphSVGPlugin) require a paid license. For the free tier, we can achieve architectural line drawing animations using CSS `stroke-dasharray`/`stroke-dashoffset` animated by GSAP core, and text reveals using manual character/word wrapping.

**Why GSAP, not alternatives:**

- **vs Framer Motion (motion):** React-only. We are not using React. Even if we were, Framer Motion is designed for UI state transitions, not cinematic scroll-driven sequences.
- **vs CSS animations only:** CSS `@keyframes` and `scroll-timeline` cannot do: staggered timeline sequences, SVG path morphing, scroll-scrubbing with easing, or the level of choreography this design demands. CSS animations are fine for hovers and simple reveals; GSAP handles the premium motion design.
- **vs Anime.js:** Less powerful ScrollTrigger equivalent, smaller ecosystem, fewer examples for premium sites. GSAP is the professional standard.
- **vs Motion One (now "motion"):** Promising but the ecosystem and documentation for complex scroll animations do not match GSAP's maturity.

### Typography

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| **@fontsource-variable/playfair-display** | 5.2.8 | Serif headlines | Playfair Display is a high-contrast transitional serif that reads as sophisticated and authoritative -- perfect for "Organizational Architects." Variable font means one file covers all weights (400-900) with smaller total payload than loading multiple static weights. Self-hosted via Fontsource eliminates Google Fonts privacy concerns and GDPR exposure, removes render-blocking external requests. |
| **@fontsource-variable/inter** | 5.2.8 | Sans-serif body text | Inter is the gold standard for screen-optimized sans-serif: exceptional readability at body sizes, extensive OpenType features, professional but warm. Pairs beautifully with Playfair Display (high-contrast serif + geometric sans is a classic premium pairing). Variable font, self-hosted. |

**Typography pairing rationale:**

The Playfair Display + Inter pairing achieves the "architectural firm, not template" feel because:
1. **Playfair Display** brings editorial authority (think Architectural Digest, not Squarespace)
2. **Inter** provides clean readability without the "tech startup" vibe of system fonts
3. The contrast between ornate serif headlines and clean geometric body creates visual hierarchy that signals premium positioning
4. Both are variable fonts, so total font payload is ~200KB for unlimited weight flexibility

**Alternative serif options considered:**

| Font | Verdict | Reason |
|------|---------|--------|
| Cormorant Garamond | Runner-up | More delicate/literary. Would work for a fine art gallery, slightly too light for "architect" positioning. Available as `@fontsource-variable/cormorant-garamond` (5.2.6). |
| Libre Baskerville | Too traditional | Reads as "law firm" rather than "organizational architect." Also not available as variable font via Fontsource. |
| Lora | Too soft | Beautiful but leans editorial/magazine. Not enough structural authority. |
| Crimson Pro | Too academic | Reads as "university press." Not commercial enough. |
| EB Garamond | Too classical | Old-style serifs feel historical, not modern-premium. Available as `@fontsource-variable/eb-garamond` (5.2.7). |

### Image Optimization

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| **sharp** | 0.34.5 | Image processing | Astro's built-in `<Image />` and `<Picture />` components use sharp under the hood for automatic WebP/AVIF conversion, responsive srcsets, and lazy loading. No additional configuration needed -- just install sharp and Astro handles the rest. Essential for page load performance (Core Web Vitals). |

### Icons

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| **astro-icon** | 1.1.5 | Icon component for Astro | Provides a clean `<Icon />` component that works with Iconify icon sets. Inline SVG output (no external requests, fully styleable with CSS). |
| **@iconify-json/lucide** | 1.2.90 | Icon set | Lucide icons are clean, minimal, and professional. Match the architectural/structured aesthetic. Covers all needs: navigation, social links, pillar icons, contact form icons. |

**Why not custom SVG icons for everything:** The 7 pillar icons and architectural motifs SHOULD be custom SVGs (brand assets). But utility icons (menu, close, arrow, phone, email, external link) should come from a consistent icon set. Lucide provides this without design overhead.

### SEO & Meta

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| **@astrojs/sitemap** | 3.7.0 | Auto-generated sitemap.xml | Official Astro integration. Generates sitemap automatically from pages. Zero-config for a static site. Essential for Google indexing. |
| **astro-robots-txt** | 1.0.0 | Robots.txt generation | Generates robots.txt with sitemap reference. Small but important for SEO hygiene. |
| **astro-seo** | 1.1.0 | SEO meta tags component | Provides a clean `<SEO />` component for Open Graph, Twitter Cards, canonical URLs, structured data. Prevents the tedious manual `<meta>` tag management across 6 pages. |

### Development Tools

| Tool | Version | Purpose | Notes |
|------|---------|---------|-------|
| **@astrojs/check** | 0.9.6 | Astro template type checking | Catches type errors in `.astro` files. Runs alongside TypeScript. |
| **Prettier** | 3.8.1 | Code formatting | Consistent formatting across the team/project. |
| **prettier-plugin-astro** | 0.14.1 | Astro file formatting | Formats `.astro` files correctly (HTML + frontmatter). |
| **prettier-plugin-tailwindcss** | 0.7.2 | Tailwind class sorting | Automatically sorts Tailwind classes in consistent order. Eliminates bikeshedding about class order. |

---

## Complete Installation

```bash
# Initialize Astro project
npm create astro@latest -- --template minimal --typescript strict

# Core framework (Astro already installed by create command)
npm install astro@5.17.2

# Styling -- Tailwind CSS v4 with Vite plugin
npm install tailwindcss@4.1.18 @tailwindcss/vite@4.1.18

# Animation
npm install gsap@3.14.2 lenis@1.3.17

# Typography (self-hosted variable fonts)
npm install @fontsource-variable/playfair-display@5.2.8 @fontsource-variable/inter@5.2.8

# Image processing
npm install sharp@0.34.5

# Icons
npm install astro-icon@1.1.5 @iconify-json/lucide@1.2.90

# SEO
npm install @astrojs/sitemap@3.7.0 astro-seo@1.1.0 astro-robots-txt@1.0.0

# Dev tools
npm install -D @astrojs/check@0.9.6 typescript@5.9.3 prettier@3.8.1 prettier-plugin-astro@0.14.1 prettier-plugin-tailwindcss@0.7.2
```

### Astro Configuration Skeleton

```typescript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://ikigaiconsulting.com', // Update with real domain
  integrations: [
    sitemap(),
    robotsTxt(),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### Tailwind v4 Theme Configuration

```css
/* src/styles/global.css */
@import "tailwindcss";
@import "@fontsource-variable/playfair-display";
@import "@fontsource-variable/inter";

@theme {
  /* Brand Colors */
  --color-hunter-green: #355E3B;
  --color-hunter-green-light: #4A7C52;
  --color-hunter-green-dark: #2A4B2F;
  --color-gold: #D4A843;
  --color-gold-light: #E0BD6A;
  --color-gold-dark: #B8912E;
  --color-black: #1A1A1A;
  --color-white: #FFFFFF;
  --color-soft-green: #F5F9F6;  /* Alternating section bg */

  /* Typography */
  --font-serif: 'Playfair Display Variable', 'Georgia', serif;
  --font-sans: 'Inter Variable', 'system-ui', sans-serif;

  /* Spacing scale tuned for generous whitespace */
  --spacing-section: 6rem;
  --spacing-section-mobile: 3rem;
}
```

---

## Alternatives Considered

| Category | Recommended | Alternative | Why Not Alternative |
|----------|-------------|-------------|---------------------|
| Framework | Astro 5.17.2 | Next.js 15 | Ships React runtime (~40KB) to every page for zero benefit on a static content site. SSR/ISR capabilities are unnecessary. Over-engineered for this use case. |
| Framework | Astro 5.17.2 | Hugo | Blazing fast builds but Go templating is painful for complex component layouts. No scoped CSS. No Vite-powered HMR. |
| Framework | Astro 5.17.2 | 11ty (Eleventy) | Excellent static generator but lacks component model. Complex layouts with shared design tokens require manual wiring. No built-in image optimization. |
| Styling | Tailwind CSS 4.1.18 | Vanilla CSS / CSS Modules | Works fine but slower development velocity for responsive layouts. Tailwind's utility classes + `@theme` tokens give us a design system "for free." For 6 pages with 30+ sections, utility classes prevent CSS entropy. |
| Styling | Tailwind CSS 4.1.18 | Sass/SCSS | Adds a compilation layer that Tailwind eliminates. Nesting is now native CSS. Variables are now CSS custom properties. Sass has no remaining advantage for this project. |
| Styling | Tailwind CSS 4.1.18 | Styled Components / CSS-in-JS | React-specific. Not compatible with Astro's `.astro` component model. |
| Animation | GSAP 3.14.2 | Framer Motion | React-only. Cannot be used in Astro components without wrapping everything in React islands (defeating the purpose of Astro). |
| Animation | GSAP 3.14.2 | CSS-only animations | Cannot achieve: choreographed scroll-driven sequences, staggered text reveals, SVG line drawing animations, scroll scrubbing. CSS `scroll-timeline` is still limited in Safari support and expressiveness. |
| Animation | GSAP 3.14.2 | Anime.js | Smaller community, weaker scroll integration, fewer production examples for premium sites. GSAP is the industry standard for a reason. |
| Smooth scroll | Lenis 1.3.17 | Locomotive Scroll | Locomotive Scroll v5 is a rewrite that's less mature. Lenis is lighter, simpler to integrate, and plays better with GSAP ScrollTrigger. |
| Smooth scroll | Lenis 1.3.17 | Native CSS `scroll-behavior: smooth` | Only handles anchor link scrolling. Does not provide the inertial, buttery momentum scrolling that creates the premium feel. Night-and-day difference in perceived quality. |
| Fonts | Fontsource self-hosted | Google Fonts CDN | External network request is render-blocking. Privacy/GDPR concerns (Google tracks font requests). Self-hosting via Fontsource is faster, private, and reliable. |
| Fonts | Playfair Display | Any system serif (Georgia) | Georgia is a fine serif but reads as "1990s web design." Playfair Display has the high-contrast elegance that signals premium positioning. |
| Icons | Lucide via astro-icon | Heroicons | Both are excellent. Lucide has slightly more icons and a cleaner architectural feel. Either works. |
| Icons | Lucide via astro-icon | Font Awesome | Heavier, more opinionated style, and the free tier icons look dated. SVG icons via astro-icon are more flexible and performant. |

---

## What NOT to Use

| Technology | Why NOT |
|------------|---------|
| **React / Vue / Svelte (as full framework)** | This is a static content site. No client-side state management, no interactive forms beyond a contact form, no real-time data. A frontend framework adds 30-100KB of runtime JavaScript for zero benefit. Astro's islands architecture lets us add interactivity surgically (e.g., mobile menu toggle) without a framework dependency. |
| **@astrojs/tailwind** | This is the Astro integration for Tailwind v3. It does NOT support Tailwind v4. With Tailwind v4, use `@tailwindcss/vite` directly in the Astro Vite config. Using the old integration will silently install Tailwind v3 and cause confusion. |
| **@tailwindcss/typography** | The `prose` classes impose opinionated typographic styles that will conflict with our custom serif/sans-serif hierarchy. We want explicit control over every heading, paragraph, and list style to maintain the premium feel. Writing our own type scale is 30 minutes of work and eliminates fighting the plugin's defaults. |
| **@tailwindcss/forms** | One form on one page. The plugin's reset styles would affect every `input` and `textarea` globally. Easier to style the contact form directly with Tailwind utilities. |
| **Gatsby** | Effectively abandoned. Netlify acquired and sunsetted active development. Community has migrated to Astro/Next.js. |
| **WordPress / any CMS** | Explicitly out of scope. Static site is simpler, faster, cheaper to host, and more secure. Content changes are infrequent enough (consulting firm, not a blog) that editing source files and redeploying is perfectly fine. |
| **jQuery** | No. Just no. GSAP provides everything jQuery was ever used for in animation, and Astro provides everything else. |
| **Animate.css** | Pre-built animation classes produce the "template" feel we are explicitly avoiding. Every animation should be bespoke and tuned to the content. |
| **Bootstrap / Foundation** | Utility framework conflict with Tailwind. Also, their component styles scream "template." |
| **Three.js / WebGL** | Overkill. The architectural motifs are 2D line drawings, not 3D scenes. WebGL would bloat bundle size and hurt mobile performance for no visual benefit. |
| **Astro 6 beta** | v6 is at 6.0.0-beta.12. Not appropriate for a client deliverable. Breaking changes are still possible. Stick with the stable 5.x line. |
| **@astrojs/prefetch** | Deprecated. Astro has built-in prefetch support (the `prefetch` config option) since Astro 3.5. No extra package needed. |

---

## Stack Patterns by Variant

### Calendar Booking Integration

**Recommendation: Calendly embed (inline or popup)**

The contact page needs calendar booking. Options:

| Option | Approach | Pros | Cons |
|--------|----------|------|------|
| **Calendly inline embed** | `<script>` tag + container div | Industry standard for consulting, free tier available, handles timezone/availability, sends confirmations | External dependency, slight branding on free tier |
| Cal.com embed | `<script>` tag embed | Open source, self-hostable, no branding on paid tier | Smaller ecosystem, fewer integrations than Calendly |
| Acuity Scheduling | Similar embed approach | Good Squarespace integration | Less known in consulting space |

**Recommended: Calendly.** It is the de facto standard for consulting firms. Prospects expect it. The embed is a simple `<script>` tag + container `<div>` -- no npm package needed. Use the inline embed style (not popup) for the contact page to avoid the "click and wait" friction.

Implementation pattern:
```html
<!-- No npm package needed -- just the embed script -->
<div class="calendly-inline-widget"
     data-url="https://calendly.com/ikigai-consulting/strategy-call"
     style="min-width:320px;height:700px;">
</div>
<script type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async>
</script>
```

### Contact Form Backend

**Recommendation: Formspree or Netlify Forms (depending on hosting)**

A static site has no backend. Contact form submissions need a service.

| Option | Cost | Approach |
|--------|------|----------|
| **Formspree** | Free (50 submissions/mo) | `<form action="https://formspree.io/f/xxxxx" method="POST">`. Zero JavaScript. Works with any host. |
| **Netlify Forms** | Free (100 submissions/mo) | Add `netlify` attribute to `<form>`. Only works on Netlify. |
| **Vercel + serverless function** | Free tier | Requires writing a serverless endpoint. Over-engineered for one form. |
| **EmailJS** | Free (200 emails/mo) | Client-side JS sends email directly. No backend needed. |

**Recommended: Formspree.** Host-agnostic (works whether deployed to Netlify, Vercel, Cloudflare Pages, or a static host). Zero JavaScript required for basic submission. Free tier is sufficient for a consulting firm's inquiry volume. Can upgrade later if needed.

### Hosting / Deployment

**Recommendation: Netlify or Vercel (either works; lean Netlify for simplicity)**

| Host | Free Tier | Static Support | Why Consider |
|------|-----------|----------------|--------------|
| **Netlify** | 100GB bandwidth, 300 build min/mo | Excellent | Built for static sites. Form handling built-in. Deploy previews. Custom domains + SSL. Simplest path. |
| **Vercel** | 100GB bandwidth | Excellent | Similar to Netlify. Slightly more developer-focused. Both work perfectly for Astro static output. |
| **Cloudflare Pages** | Unlimited bandwidth | Excellent | Best free tier (unlimited bandwidth). Slightly more setup but excellent performance via Cloudflare CDN. |
| **GitHub Pages** | Unlimited for public repos | Basic | Free but no deploy previews, no form handling, no build pipeline. More manual. |

**Recommended: Netlify.** If the client wants Netlify Forms (built-in), it simplifies the form backend. If using Formspree, any host works. The deploy pipeline is: push to GitHub -> Netlify auto-builds -> site live in ~30 seconds.

### SVG Architectural Motifs

**Approach: Custom SVG files with GSAP animation**

The architectural line drawing motifs are a core brand element. These should be:
1. **Hand-crafted SVG files** -- designed in Figma/Illustrator, exported as optimized SVG
2. **Placed as inline SVG** in Astro components (not `<img>` tags) so they are CSS/JS-styleable
3. **Animated with GSAP** using `stroke-dasharray` and `stroke-dashoffset` for line-drawing reveal effects
4. **Color-controlled via CSS custom properties** so they respond to the brand palette

No library needed for this -- just clean SVG markup + GSAP core tweens.

---

## Version Compatibility Matrix

| Package | Version | Node Requirement | Astro Compatibility | Notes |
|---------|---------|------------------|---------------------|-------|
| astro | 5.17.2 | 18.20.8, ^20.3.0, >=22.0.0 | -- | Latest stable. Local Node v25.2.1 exceeds requirement. |
| tailwindcss | 4.1.18 | -- | Via `@tailwindcss/vite` in Vite config | v4 does NOT use `@astrojs/tailwind`. |
| @tailwindcss/vite | 4.1.18 | -- | Vite ^5.2.0 or ^6 or ^7 | Astro 5 uses Vite 6. Compatible. |
| gsap | 3.14.2 | -- | Framework-agnostic | Import in `<script>` tags in Astro components. |
| lenis | 1.3.17 | -- | Framework-agnostic | Optional React/Vue/Nuxt peer deps (not needed). |
| sharp | 0.34.5 | ^18.17.0 or ^20.3.0 or >=21.0.0 | Used by Astro's image pipeline | Auto-detected. Just install it. |
| @fontsource-variable/* | 5.2.8 | -- | CSS import in global stylesheet | Self-hosted font files. |
| @astrojs/sitemap | 3.7.0 | -- | Astro ^3.0.0 or ^4.0.0 or ^5.0.0 | Official integration. |
| astro-icon | 1.1.5 | -- | Astro integration | Needs an Iconify JSON package. |
| @astrojs/check | 0.9.6 | -- | TypeScript ^5.0.0 | Dev dependency only. |
| prettier-plugin-astro | 0.14.1 | -- | -- | Dev dependency only. |
| prettier-plugin-tailwindcss | 0.7.2 | -- | -- | Dev dependency only. |
| typescript | 5.9.3 | -- | -- | Astro supports TS natively. |

**All packages verified compatible with Node v25.2.1 (local environment) and with each other as of 2026-02-16.**

---

## Project Structure (Recommended)

```
ikigaiWebsite/
  src/
    components/         # Reusable UI components
      layout/           # Header, Footer, Navigation
      sections/         # Page section components (Hero, Pillars, etc.)
      ui/               # Small reusable bits (Button, Card, SectionHeading)
      icons/            # Custom SVG icon components
    layouts/
      BaseLayout.astro  # HTML shell, fonts, global CSS, Lenis init
    pages/
      index.astro       # Homepage
      about.astro       # About page
      services.astro    # Services page
      ikigai-model.astro # Thought leadership page
      case-studies.astro # Case studies / impact
      contact.astro     # Contact form + Calendly
    styles/
      global.css        # Tailwind imports, @theme, base styles
    assets/
      images/           # Optimized images (Astro processes these)
      svg/              # Architectural line motifs, brand SVGs
    data/               # Static data (pillar definitions, testimonials, etc.)
  public/
    favicon.ico
    og-image.png        # Social sharing image
  astro.config.mjs
  tsconfig.json
  .prettierrc
```

---

## Sources

All version numbers verified via npm registry (`npm view [package] version`) on 2026-02-16. No version is assumed from training data.

| Source | What Was Verified | Confidence |
|--------|-------------------|------------|
| npm registry (direct query) | All package versions, peer dependencies, engine requirements, deprecation status | HIGH |
| npm `dist-tags` query | Astro latest=5.17.2, beta=6.0.0-beta.12; Tailwind latest=4.1.18; GSAP latest=3.14.2 | HIGH |
| npm `peerDependencies` query | @tailwindcss/vite requires Vite ^5.2.0 or ^6 or ^7; @astrojs/tailwind requires tailwindcss ^3.0.24 (confirming incompatibility with v4) | HIGH |
| npm `deprecated` query | @astrojs/prefetch is deprecated in favor of built-in prefetch; @studio-freight/lenis renamed to lenis | HIGH |
| GSAP license field | Standard "no charge" license: https://gsap.com/standard-license | HIGH |
| Astro engines field | Node 18.20.8, ^20.3.0, >=22.0.0 | HIGH |
| Tailwind v4 architecture (CSS-first config, Vite plugin) | MEDIUM -- based on training data from v4 launch (Jan 2025), versions confirmed via npm but specific API patterns not re-verified against current docs | MEDIUM |
| Typography pairing recommendations | MEDIUM -- based on design expertise in training data, not empirical A/B testing | MEDIUM |
| Calendly embed pattern | MEDIUM -- standard pattern from training data, embed URL format should be verified against current Calendly docs | MEDIUM |
| GSAP Club plugin availability (DrawSVGPlugin, SplitText) | MEDIUM -- Club plugin status based on training data, may have changed | MEDIUM |

---

## Key Decisions for Roadmap

1. **Astro 5 + Tailwind 4 + GSAP is the stack.** This combination is opinionated, modern, and purpose-built for this use case. No framework debates needed downstream.

2. **Zero JavaScript by default, islands for interactivity.** Only the mobile menu toggle, GSAP animations, and Lenis smooth scroll need JS. Everything else is pure HTML + CSS.

3. **Self-hosted fonts eliminate external dependencies.** No Google Fonts CDN means no GDPR concerns, no render-blocking requests, and full control over font loading strategy.

4. **Calendly for booking, Formspree for contact form.** Both are proven, free-tier-compatible, and require zero backend code. Can be swapped later without architectural changes.

5. **Custom SVG motifs, not a library.** The architectural line drawings are brand identity. They must be hand-crafted, not pulled from an icon library. Budget design time for this in the roadmap.

6. **Tailwind v4 `@theme` for design tokens.** The hunter green/gold/black/white palette and the serif/sans-serif pairing are encoded once in CSS and available everywhere. This prevents color/font drift across 6 pages with 30+ sections.
