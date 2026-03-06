# Requirements: Ikigai Consulting Group Website

**Defined:** 2026-02-16
**Core Value:** When a nonprofit leader or board member lands on this site, they must immediately feel: "These people are serious, credible, and exactly who I need." Authority positioning above all else.

## Requirements

### Pages & Content

- [ ] **PAGE-01**: Homepage with 7 sections: Hero, Problem, Solution, 7 Pillars Grid, Who We Serve, Why Ikigai, CTA
- [ ] **PAGE-02**: About page with founder bio (photo-ready: optional image slot, looks complete without photo), philosophy ("Why Ikigai?"), and values icon row (Integrity, Accountability, Social Justice, Excellence, Courageous Leadership)
- [ ] **PAGE-03**: Services page with one section per pillar: description, what's included, outcomes, CTA -- alternating backgrounds (white / soft green) with gold divider lines
- [ ] **PAGE-04**: Ikigai Model page with large SVG diagram, flow explanation (Blueprint > Build > Strengthen > Sustain), pillar integration, TM symbol on model name
- [ ] **PAGE-05**: Case Studies / Impact page with Challenge > Approach > Outcome > Measurable Results structure, plus testimonials section (placeholder content, real structure)
- [ ] **PAGE-06**: Contact page with form (Name, Organization, Email, Challenge) and calendar booking integration
- [ ] **PAGE-07**: Privacy policy page covering data collection via contact form (PIPEDA compliance)
- [ ] **PAGE-08**: Custom branded 404 page consistent with site design

### Design System & Brand

- [ ] **DSGN-01**: Color palette: Hunter Green (#355E3B), Gold (#D4A843), Black, White -- with gold used as decorative only (never as text on light backgrounds)
- [ ] **DSGN-02**: Typography: Playfair Display (serif) for headlines, Inter (sans-serif) for body text, self-hosted via Fontsource
- [ ] **DSGN-03**: Responsive design with premium feel on desktop, tablet, and mobile
- [ ] **DSGN-04**: Persistent top navigation with all pages, logo links home, current page indicated, mobile hamburger menu
- [ ] **DSGN-05**: Gold CTA buttons with black text, gold hover effects on interactive elements
- [ ] **DSGN-06**: Alternating section backgrounds (white / soft green) for visual rhythm
- [ ] **DSGN-07**: Architectural line drawing motifs, pillar imagery, structured blocks as visual identity (no stock photography)
- [ ] **DSGN-08**: Generous white space -- clean, powerful, minimal aesthetic
- [ ] **DSGN-09**: Two-column layouts for problem/solution sections
- [ ] **DSGN-10**: Sector-specific language throughout (nonprofit terminology, not corporate jargon)
- [ ] **DSGN-11**: Strategic CTA language: "Schedule a Strategic Conversation," "Let's Architect Your Organization," "Begin the Conversation" -- never generic "Contact Us" or "Submit"

### Logo & Brand Assets

- [ ] **LOGO-01**: Design a wordmark/logo for Ikigai Consulting Group as part of the project
- [ ] **LOGO-02**: Favicon derived from logo (multiple sizes for browser tabs, bookmarks)
- [ ] **LOGO-03**: Apple touch icons for iOS home screen
- [ ] **LOGO-04**: Open Graph images per page for social sharing (LinkedIn preview cards)

### Animations & Interactions

- [ ] **ANIM-01**: Scroll-triggered entrance animations on sections (fade-up reveals, 200-400ms)
- [ ] **ANIM-02**: Staggered grid animations for pillar grids and card layouts
- [ ] **ANIM-03**: Gold accent line animations on hover for interactive elements
- [ ] **ANIM-04**: Respect `prefers-reduced-motion` -- disable all animations when user prefers reduced motion
- [ ] **ANIM-05**: All animations use CSS transforms and opacity only (GPU-composited, no layout-triggering)

### SEO & Discoverability

- [ ] **SEO-01**: Unique title tags per page: "[Page Name] | Ikigai Consulting Group"
- [ ] **SEO-02**: Unique meta descriptions per page (150-160 chars) with Ontario geographic + nonprofit sector keywords
- [ ] **SEO-03**: Semantic HTML with proper heading hierarchy (single H1 per page, logical H2/H3 nesting)
- [ ] **SEO-04**: Alt text on all images with relevant keywords
- [ ] **SEO-05**: Auto-generated sitemap.xml and robots.txt
- [ ] **SEO-06**: Open Graph tags per page for social sharing
- [ ] **SEO-07**: Self-referencing canonical URLs on all pages
- [ ] **SEO-08**: Ontario local SEO: geographic terms in metadata, LocalBusiness structured data, Organization schema
- [ ] **SEO-09**: Structured data markup: Organization, LocalBusiness, Service schema per pillar

### Accessibility

- [ ] **A11Y-01**: WCAG 2.1 AA color contrast (4.5:1 body text, 3:1 large text) -- gold never used as text on light backgrounds
- [ ] **A11Y-02**: Full keyboard navigation across all pages and interactive elements
- [ ] **A11Y-03**: Screen reader compatibility with proper aria labels and roles
- [ ] **A11Y-04**: Visible focus indicators on all interactive elements
- [ ] **A11Y-05**: Skip navigation link
- [ ] **A11Y-06**: Proper aria labels on SVG diagrams (Ikigai Model diagram has comprehensive aria-label)
- [ ] **A11Y-07**: Readable font sizes (16px+ body text)

### Performance

- [ ] **PERF-01**: First Contentful Paint under 1.5s
- [ ] **PERF-02**: Largest Contentful Paint under 2.5s
- [ ] **PERF-03**: Cumulative Layout Shift under 0.1
- [ ] **PERF-04**: Lighthouse 90+ across Performance, Accessibility, Best Practices, SEO
- [ ] **PERF-05**: Optimized images (WebP/AVIF with fallbacks, lazy loading for below-fold content)
- [ ] **PERF-06**: Minimal JavaScript bundle -- static where possible

### External Integrations

- [ ] **INTG-01**: Calendly popup widget on Contact page for calendar booking
- [ ] **INTG-02**: Formspree backend for contact form submission
- [ ] **INTG-03**: Honeypot anti-spam field on contact form (invisible to users, no CAPTCHA)
- [ ] **INTG-04**: Form success confirmation with response time expectation ("We'll respond within 2 business days")
- [ ] **INTG-05**: Vercel Analytics for tracking visits and conversions

### Security

- [ ] **SEC-01**: Content Security Policy (CSP) header -- allowlist only required third parties (Calendly, Formspree, Vercel Analytics)
- [ ] **SEC-02**: HSTS header -- force HTTPS-only connections
- [ ] **SEC-03**: X-Frame-Options header -- prevent clickjacking by blocking hostile iframe embedding
- [ ] **SEC-04**: Referrer-Policy header -- control URL data sent to external sites
- [ ] **SEC-05**: Permissions-Policy header -- disable unused browser features (camera, mic, geolocation)

### CI Quality Gates

- [ ] **CI-01**: TypeScript typecheck must pass before PR can merge
- [ ] **CI-02**: ESLint must pass before PR can merge
- [ ] **CI-03**: Lighthouse CI budget enforcement (Performance 90+, Accessibility 90+, SEO 90+, Best Practices 90+)
- [ ] **CI-04**: Automated accessibility check (axe-core) must pass before PR can merge
- [ ] **CI-05**: One Playwright smoke test for contact form submission flow

### Technical Infrastructure

- [ ] **TECH-01**: Next.js with static export
- [ ] **TECH-02**: Tailwind CSS 4 with @theme directive for design tokens
- [ ] **TECH-03**: TypeScript for type safety
- [ ] **TECH-04**: Framer Motion for animations
- [ ] **TECH-05**: Vercel hosting with CDN, auto-HTTPS, deploy previews
- [ ] **TECH-06**: Content as typed TypeScript data files (pillars, case studies, testimonials, metadata)

## v2.0 Redesign Requirements (Greenleaf-Inspired)

### Design System Updates

- [ ] **REDO-08**: Update design tokens to confirmed Greenleaf values: dark green #13261b (buttons/footer), card surface #f3f6f5, body gray #5e6b64, pill bg #f0f0f0, section gap 160px desktop / 120px tablet / 80px mobile
- [ ] **REDO-09**: PillLabel component — small pill badge (gray bg, thin border, ~13px text) used above every section heading across all pages
- [ ] **REDO-10**: Floating button shadow — blurred dark shadow directly beneath all primary CTA buttons (~20-28px blur, ~30-40px wide, ~8-14px below, 25-35% opacity) creating "hovering" illusion
- [ ] **REDO-11**: Primary CTA buttons redesigned as fully-rounded pills (border-radius: 9999px), white text on dark green bg
- [ ] **REDO-12**: Section spacing updated to 160px desktop / 120px tablet / 80px mobile (up from 80-96px current)
- [ ] **REDO-13**: BentoCard component — light gray bg (#f3f6f5), 20-24px border-radius, generous internal padding, no border/shadow, supports variable widths via grid spanning
- [ ] **REDO-14**: CTASection redesigned as rounded container card — light gray bg (#f3f6f5), 24px border-radius, left text column + right 2×3 image collage, not full-bleed dark section
- [ ] **REDO-15**: Footer redesigned as rounded-top dark green card — rounded corners top only (~24px), Pages + Information nav columns, social icons (X/Instagram/LinkedIn), tagline, bottom copyright bar
- [ ] **REDO-16**: Navigation simplified — white bg, clean minimal links, no heavy box shadows or gradient backgrounds

### Homepage

- [ ] **REDO-01**: Homepage full restructure with Greenleaf layout patterns — center-aligned hero with credibility badge, 4-col full-bleed image gallery, about teaser with large centered heading, sticky-left services section, bento benefits grid, 3-col testimonial cards, FAQ accordion, rounded final CTA card. Removes: Problem section, Solution section, WhoWeServe section, SocialProof section, HowWeWork section.

### About Page

- [ ] **REDO-02**: About page rebuilt with Greenleaf patterns — pill label + "Our story so far" style hero, 2-col intro (text + photo) with floating overlay credential badges on Nilda's photo ("20+ Years" / "Ontario Nonprofit Expert"), organizations trust bar, mission heading with ellipsis sentence split, 2×3 values card grid with icon chips (replaces current icon row), editorial stats bar (4 numbers at weight-300, no containers), founder 2-col profile (photo + bio + social links), standalone open-format testimonial, rounded final CTA card

### Services Page

- [ ] **REDO-03**: Services page rebuilt with sticky-scroll pattern — left column (sticky): pill label + heading + description; right column (scrolling): each pillar as a card with large image + title + description + CTA link. Stacks to single column on mobile/tablet.

### Contact Page

- [ ] **REDO-04**: Contact page rebuilt — 2-col layout (heading + dual-path copy + book button LEFT, dark overlay form card RIGHT). Form card: photo/texture background with dark semi-transparent overlay, light input fields on dark card, full-width submit button. FAQ accordion absorbs Common Concerns. Removes: BestFit cards, CalendarBookingSection, LocationInfoSection.

### Ikigai Model Page

- [ ] **REDO-05**: Model page updated with Greenleaf design language — pill labels above all section headings, editorial stats (3 metrics at weight-300), Greenleaf-style typography and spacing, rounded final CTA card

### Case Studies / Impact Page

- [ ] **REDO-06**: Impact page updated with Greenleaf design language — results snapshot styled consistently, alternating case study layout with Greenleaf patterns, standalone open-format testimonial, rounded final CTA card

### Policy Page

- [ ] **REDO-07**: Policy page rebuilt with narrow editorial column — ~560px max-width, left-aligned, H2 section headings at ~40-44px scale (same type scale as site headings), pill label above page title, rounded final CTA card at bottom

### Animation

- [ ] **REDO-17**: Floating button shadow implemented on all primary CTA buttons site-wide (CSS box-shadow or pseudo-element technique, GPU-composited, reduced motion compliant)
- [ ] **REDO-18**: Scroll-triggered word opacity animation on About teaser heading — words transition from light gray to near-black as they enter viewport (individual word/span opacity via Framer Motion or Intersection Observer)
- [ ] **REDO-19**: Services sticky scroll implementation — CSS position:sticky on left column, right column scrolls normally, correct unstick behavior on mobile

## Out of Scope

| Feature | Reason |
|---------|--------|
| Blog / content publishing | Not part of initial build -- add when monthly+ publishing cadence exists |
| E-commerce / payments | Lead-gen consulting site, not a store |
| Client portal / login | No authenticated areas needed |
| Multi-language support | English only |
| CMS / admin panel | Static site, content in code |
| Chatbot / live chat | Cheapens premium positioning |
| Pricing page / packages | Commoditizes bespoke consulting |
| Newsletter signup popup | Interrupts authority experience, requires content commitment |
| Video backgrounds / autoplay | Performance killer, conflicts with architectural aesthetic |
| Parallax scrolling | Accessibility + performance liability |
| Social media feed embeds | Performance killer, uncontrolled visual aesthetic |
| Auto-rotating carousels | Near-zero engagement, accessibility issues |
| Complex multi-step forms | Every field reduces completion -- 4 fields max |
| Nilda headshot on About page | Not available for initial build -- section is photo-ready (optional image prop) so photo can drop in later |

## v2.0 Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| REDO-08 | Phase 12 | Pending |
| REDO-09 | Phase 12 | Pending |
| REDO-10 | Phase 12 | Pending |
| REDO-11 | Phase 12 | Pending |
| REDO-12 | Phase 12 | Pending |
| REDO-13 | Phase 12 | Pending |
| REDO-14 | Phase 12 | Pending |
| REDO-15 | Phase 12 | Pending |
| REDO-16 | Phase 12 | Pending |
| REDO-01 | Phase 13 | Pending |
| REDO-02 | Phase 14 | Pending |
| REDO-03 | Phase 15 | Pending |
| REDO-04 | Phase 17 | Pending |
| REDO-05 | Phase 16 | Pending |
| REDO-06 | Phase 16 | Pending |
| REDO-07 | Phase 17 | Pending |
| REDO-17 | Phase 18 | Pending |
| REDO-18 | Phase 18 | Pending |
| REDO-19 | Phase 18 | Pending |

**v2.0 Coverage:**
- v2.0 requirements: 19 total
- Mapped to phases: 19
- Unmapped: 0 ✓

## v1.0 Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| PAGE-01 | Phase 4 | Pending |
| PAGE-02 | Phase 5 | Pending |
| PAGE-03 | Phase 5 | Pending |
| PAGE-04 | Phase 6 | Pending |
| PAGE-05 | Phase 6 | Pending |
| PAGE-06 | Phase 7 | Pending |
| PAGE-07 | Phase 7 | Pending |
| PAGE-08 | Phase 10 | Pending |
| DSGN-01 | Phase 1 | Complete |
| DSGN-02 | Phase 1 | Complete |
| DSGN-03 | Phase 2 | Pending |
| DSGN-04 | Phase 2 | Pending |
| DSGN-05 | Phase 1 | Complete |
| DSGN-06 | Phase 5 | Pending |
| DSGN-07 | Phase 3 | Pending |
| DSGN-08 | Phase 1 | Complete |
| DSGN-09 | Phase 1 | Complete |
| DSGN-10 | Phase 3 | Pending |
| DSGN-11 | Phase 3 | Pending |
| LOGO-01 | Phase 3 | Pending |
| LOGO-02 | Phase 3 | Pending |
| LOGO-03 | Phase 3 | Pending |
| LOGO-04 | Phase 3 | Pending |
| ANIM-01 | Phase 8 | Pending |
| ANIM-02 | Phase 8 | Pending |
| ANIM-03 | Phase 8 | Pending |
| ANIM-04 | Phase 8 | Pending |
| ANIM-05 | Phase 8 | Pending |
| SEO-01 | Phase 9 | Pending |
| SEO-02 | Phase 9 | Pending |
| SEO-03 | Phase 9 | Pending |
| SEO-04 | Phase 9 | Pending |
| SEO-05 | Phase 9 | Pending |
| SEO-06 | Phase 9 | Pending |
| SEO-07 | Phase 9 | Pending |
| SEO-08 | Phase 9 | Pending |
| SEO-09 | Phase 9 | Pending |
| A11Y-01 | Phase 1 | Complete |
| A11Y-02 | Phase 2 | Pending |
| A11Y-03 | Phase 10 | Pending |
| A11Y-04 | Phase 2 | Pending |
| A11Y-05 | Phase 2 | Pending |
| A11Y-06 | Phase 6 | Pending |
| A11Y-07 | Phase 1 | Complete |
| PERF-01 | Phase 10 | Pending |
| PERF-02 | Phase 10 | Pending |
| PERF-03 | Phase 10 | Pending |
| PERF-04 | Phase 10 | Pending |
| PERF-05 | Phase 10 | Pending |
| PERF-06 | Phase 10 | Pending |
| INTG-01 | Phase 7 | Pending |
| INTG-02 | Phase 7 | Pending |
| INTG-03 | Phase 7 | Pending |
| INTG-04 | Phase 7 | Pending |
| INTG-05 | Phase 11 | Pending |
| SEC-01 | Phase 11 | Pending |
| SEC-02 | Phase 11 | Pending |
| SEC-03 | Phase 11 | Pending |
| SEC-04 | Phase 11 | Pending |
| SEC-05 | Phase 11 | Pending |
| CI-01 | Phase 11 | Pending |
| CI-02 | Phase 11 | Pending |
| CI-03 | Phase 11 | Pending |
| CI-04 | Phase 11 | Pending |
| CI-05 | Phase 11 | Pending |
| TECH-01 | Phase 1 | Complete |
| TECH-02 | Phase 1 | Complete |
| TECH-03 | Phase 1 | Complete |
| TECH-04 | Phase 8 | Pending |
| TECH-05 | Phase 11 | Pending |
| TECH-06 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 71 total
- Mapped to phases: 71
- Unmapped: 0 ✓

---
*Requirements defined: 2026-02-16*
*Last updated: 2026-02-16 — all 71 requirements mapped to 11 phases*
