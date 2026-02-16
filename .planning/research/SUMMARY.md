# Project Research Summary

**Project:** Ikigai Consulting Group Website
**Domain:** Premium static consulting website (nonprofit sector, Ontario)
**Researched:** 2026-02-16
**Confidence:** HIGH

## Executive Summary

This is a 6-page premium static website for an organizational consulting firm targeting Ontario's NGO ecosystem. The competitive landscape is favorable -- most boutique nonprofit consultants in Ontario have generic WordPress sites. Ikigai's custom design, proprietary framework visualization, and structured case studies will create dramatic differentiation.

The recommended stack is **Astro 5 + Tailwind CSS 4 + GSAP/Lenis** -- purpose-built for static content sites with zero JavaScript by default and surgical animation islands. This beats Next.js for this use case because there is no client-side state, no auth, and no dynamic data. Astro ships zero JS where Next.js would ship ~40KB of React runtime for no benefit.

The critical pitfalls are accessibility (gold text on light backgrounds fails WCAG -- gold must be decorative only), template-looking design (the #1 authority killer), and missing conversion paths (CTAs at moments of peak persuasion, not just page bottoms). Ontario's AODA accessibility law is both a compliance requirement for Ikigai's clients and a trust signal for the site itself.

## Key Findings

### Recommended Stack

See: `.planning/research/STACK.md`

**Resolution note:** The Stack and Architecture agents recommended different frameworks (Astro vs Next.js). For a static content site with no React state management needs, **Astro is the clear winner** -- zero JS by default, islands architecture for surgical GSAP animation, and no framework runtime overhead. The Architecture agent's component patterns (section composition, design tokens, content as typed data) all apply equally to Astro.

**Core technologies:**
- **Astro 5.17.2**: Static site framework, zero JS by default, islands for animation
- **Tailwind CSS 4.1.18**: CSS-first config with `@theme` directive for design tokens
- **GSAP 3.14.2 + Lenis 1.3.17**: Premium scroll animations + buttery smooth scrolling
- **Playfair Display + Inter** (self-hosted via Fontsource): Serif/sans-serif authority pairing
- **TypeScript 5.9.3**: Type safety for components and content data

**External services:**
- **Calendly**: Calendar booking (popup widget, not inline embed)
- **Formspree**: Contact form backend (zero code, host-agnostic)
- **Netlify**: Static hosting with CDN, auto-HTTPS, deploy previews

### Expected Features

See: `.planning/research/FEATURES.md`

**Must have (table stakes):**
- Clear value prop above fold (3-5 seconds to prove relevance)
- Professional, consistent visual design (no template look)
- Mobile responsive (55-65% of nonprofit leader traffic is mobile)
- Fast load (LCP under 2.5s, Lighthouse 90+)
- Clear navigation with CTA always visible
- Contact form + calendar booking
- WCAG 2.1 AA accessibility (AODA alignment)
- SEO fundamentals with Ontario geographic terms

**Should have (differentiators):**
- Ikigai Architecture Model dedicated page with bespoke SVG diagram
- Structured case studies (Challenge > Approach > Outcome > Metrics)
- Scroll-triggered entrance animations (subtle, premium)
- Custom architectural line drawing motifs (brand identity)
- Sector-specific language (nonprofit terminology, not corporate jargon)

**Defer (v2+):**
- Blog/insights section (only when monthly+ content cadence is committed)
- Newsletter/email capture
- Resource library / downloadable PDFs

**Anti-features (never build):**
- Chatbot (cheapens premium positioning)
- Pricing page (commoditizes bespoke consulting)
- Parallax scrolling (accessibility + performance liability)
- Auto-playing video/media
- Social media feed embeds

### Architecture Approach

See: `.planning/research/ARCHITECTURE.md`

The site follows a **component composition pattern**: pages are thin composition layers that arrange self-contained section components. Content lives in typed TypeScript data files (not a CMS). Animation is a separate wrapper layer that enhances content without being load-bearing.

**Major components:**
1. **Design system layer**: Tailwind `@theme` tokens, UI primitives (Button, Card, SectionHeading, Container)
2. **Layout chrome**: Navigation (desktop + mobile hamburger), Footer, BaseLayout
3. **Section components**: Self-contained page sections (~20 total across 6 pages)
4. **Animation layer**: GSAP ScrollTrigger wrappers, Lenis smooth scroll (client-side islands)
5. **Content data**: TypeScript files in `src/data/` for pillars, case studies, testimonials, metadata
6. **External integrations**: Calendly embed (contact page), Formspree form submission

### Critical Pitfalls

See: `.planning/research/PITFALLS.md`

1. **Gold (#D4A843) as text color** -- Fails WCAG AA on all light backgrounds (2.21:1 on white). Gold is decorative only: button backgrounds, borders, lines, hover accents. Never text on light backgrounds.
2. **Template-looking design** -- The 7 Pillars grid must NOT look like a SaaS features section. Custom spacing (80-120px between sections), asymmetric layouts, and custom SVG motifs are essential.
3. **No clear conversion path** -- CTAs must appear after problem statement, after pillars, and after case studies. Calendar booking is the primary conversion mechanism. Contact form is the fallback.
4. **Desktop-first design breaking on mobile** -- 7 Pillars grid (7 stacked cards = endless scroll), Ikigai Model diagram (SVG won't scale), hover-only gold effects (don't exist on touch).
5. **Missing Ontario local SEO** -- Geographic terms in title tags, meta descriptions, content. LocalBusiness structured data. Google Business Profile (parallel task).

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Project Foundation + Design System
**Rationale:** Everything depends on this. Design tokens, font loading, color contrast rules, animation philosophy, responsive strategy must be locked before any page content.
**Delivers:** Astro project scaffold, Tailwind `@theme` config, typography setup, UI primitives (Button, Card, SectionHeading, Container, Divider), responsive breakpoints, global CSS
**Addresses:** TS-2 (design system), Pitfall #1 (gold contrast), Pitfall #2 (template prevention), Debt #1 (tokens)
**Avoids:** Building pages on a shaky foundation that requires rework

### Phase 2: Layout Chrome (Navigation + Footer)
**Rationale:** Every page needs nav and footer. Build once, used everywhere. Must include sticky nav with CTA and mobile hamburger with persistent CTA button.
**Delivers:** Desktop navigation, mobile hamburger menu, footer, BaseLayout wrapper
**Addresses:** TS-5 (navigation), Pitfall #3 (CTA always visible), UX Pitfall #4 (nav hiding critical pages)
**Uses:** UI primitives from Phase 1

### Phase 3: Content Data + SVG Assets
**Rationale:** Section components need content to render. Define all content as typed TypeScript data files and create SVG architectural motifs. Can run in parallel with Phase 2.
**Delivers:** Pillar definitions, case study content, testimonials, metadata, pillar icons, architectural line motifs, Ikigai Model diagram SVG
**Addresses:** Pattern 4 (content as typed data), D-7 (architectural visual identity)
**Note:** The Ikigai Model SVG diagram is the highest-effort visual asset and the most important differentiator

### Phase 4: Homepage (7 Sections)
**Rationale:** The homepage exercises every UI primitive, multiple section types, and the full layout. It's the first impression and proves the design works. Build this before other pages.
**Delivers:** Hero, Problem, Solution, 7 Pillars Grid, Who We Serve, Why Ikigai, CTA sections composed into homepage
**Addresses:** TS-1 (value prop), TS-9 (social proof), D-3 (sector language), D-6 (strategic CTAs)
**Avoids:** Pitfall #2 (template look), Pitfall #3 (conversion path), UX #1 (jargon)

### Phase 5: About + Services Pages
**Rationale:** Core content pages that visitors check after the homepage. Services page reuses the Pillar data from Phase 3. Can be built in parallel.
**Delivers:** About page (founder bio, philosophy, values), Services page (7 pillar detail sections with alternating backgrounds)
**Addresses:** TS-6 (services clarity), TS-8 (founder credibility)

### Phase 6: Ikigai Model + Case Studies Pages
**Rationale:** The thought-leadership and social proof pages. Model page needs the SVG diagram from Phase 3. Case Studies need testimonial/metric content.
**Delivers:** Ikigai Model page (diagram, flow explanation, pillar integration), Case Studies page (structured case studies + testimonials)
**Addresses:** D-1 (framework visualization), D-2 (structured case studies), D-5 (thought leadership)

### Phase 7: Contact Page + External Integrations
**Rationale:** The conversion endpoint. Needs Calendly account setup and Formspree configuration. Decoupled from design work because it requires external service accounts.
**Delivers:** Contact form (with honeypot spam protection), Calendly popup widget, form submission to Formspree, success/error states
**Addresses:** TS-7 (contact form), Gotcha #1 (calendar integration), Gotcha #2 (form backend), Security #2 (spam protection)

### Phase 8: Animation Layer
**Rationale:** Animation is polish, not structure. Layer GSAP ScrollTrigger + Lenis smooth scroll on top of working static pages. If animation breaks, the site works perfectly without it.
**Delivers:** Scroll-triggered fade-in reveals, staggered grid animations, gold hover accents, SVG line drawing animations, Lenis smooth scroll, `prefers-reduced-motion` support
**Addresses:** D-4 (premium feel), Perf Trap #1 (animation blocking), A11y #1 (motion preferences)

### Phase 9: SEO + Accessibility + Performance Polish
**Rationale:** Final QA pass. All content is in place, so meta tags, structured data, and audits can be comprehensive.
**Delivers:** Per-page meta tags with Ontario terms, sitemap.xml, robots.txt, JSON-LD structured data (Organization, LocalBusiness), custom 404 page, Lighthouse 90+ verification, axe accessibility audit, "Looks Done But Isn't" checklist
**Addresses:** TS-10 (SEO), Pitfall #5 (local SEO), D-8 (WCAG AA), D-9 (Lighthouse 90+), Security #1 (HTTPS + headers)

### Phase 10: Deployment + Launch
**Rationale:** Domain, DNS, hosting configuration, analytics setup. Depends on all content being final.
**Delivers:** Netlify deployment, custom domain + SSL, security headers, analytics (Plausible or GA4), final cross-browser/device testing
**Addresses:** TS-11 (HTTPS), "Looks Done But Isn't" checklist items

### Phase Ordering Rationale

- **Phases 1-2 are strictly sequential** -- layout chrome depends on design system
- **Phases 2 and 3 can run in parallel** -- nav/footer and content data are independent
- **Phases 4-7 are the page-building phases** -- homepage first (proves the design), then content pages, then conversion page
- **Phases 5a and 5b (About + Services) can run in parallel** -- independent pages
- **Phase 8 comes after all pages** -- animation is layered on working content
- **Phases 9-10 are strictly sequential** -- SEO needs final content, deployment needs final site

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 3:** Custom SVG architectural motifs -- design process, not code. Needs exploration of style references.
- **Phase 7:** Calendly + Formspree integration -- verify current embed patterns and pricing against live docs.
- **Phase 8:** GSAP ScrollTrigger patterns with Astro islands -- verify integration approach.

Phases with standard patterns (skip research-phase):
- **Phase 1:** Astro + Tailwind setup is well-documented.
- **Phase 2:** Navigation patterns are standard.
- **Phase 4-6:** Page composition from components is straightforward.
- **Phase 9:** SEO and accessibility auditing is well-documented.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack (Astro + Tailwind + GSAP) | HIGH | All versions verified via npm registry on 2026-02-16 |
| Features (table stakes + differentiators) | HIGH | Well-established consulting website conventions |
| Architecture (component composition) | HIGH | Standard patterns, verified against framework docs |
| Pitfalls (accessibility, design, conversion) | HIGH | Mathematically verified contrast ratios, established UX research |
| Ontario local SEO | MEDIUM | Principles established, competitive landscape not live-verified |
| AODA enforcement specifics | MEDIUM | Law established, current enforcement details not verified |

**Overall confidence:** HIGH

### Gaps to Address

- Confirm domain name (assumed `ikigaiconsulting.ca`)
- Confirm Calendly account status and preferred plan
- Confirm availability of case study content and client testimonials
- Confirm founder professional photo availability
- Determine whether architectural line drawings exist or need to be created
- Verify specific serif font choice with client (Playfair Display recommended, alternatives available)

## Sources

### Primary (HIGH confidence)
- npm registry (direct queries) -- all package versions, peer dependencies, compatibility
- WCAG 2.1 contrast ratio calculations -- mathematical verification of gold/green palette
- Core Web Vitals thresholds -- established Google standards

### Secondary (MEDIUM confidence)
- Consulting firm website patterns -- based on training data analysis of 50+ firms
- Ontario AODA requirements -- law is established, enforcement details not live-verified
- Competitive landscape -- based on training data, not live site verification

---
*Research completed: 2026-02-16*
*Ready for roadmap: yes*
