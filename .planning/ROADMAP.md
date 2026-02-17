# Roadmap: Ikigai Consulting Group Website

## Overview

Build a premium 6-page static website that positions Ikigai Consulting Group as the go-to organizational architect for Ontario's NGO ecosystem. Starting from project scaffold and design system, through page-by-page content delivery, to animation polish, SEO, and deployment. Every phase delivers a coherent, verifiable capability — design tokens before components, components before pages, pages before polish.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Project Foundation + Design System** - Next.js scaffold with Tailwind tokens, typography, and UI primitives
- [ ] **Phase 2: Layout Chrome** - Persistent navigation, mobile hamburger, footer, responsive layout
- [ ] **Phase 3: Content Data + Brand Assets** - Typed content files, logo, favicon, SVG motifs, OG images
- [ ] **Phase 4: Homepage** - All 7 homepage sections composed from design system + content data
- [ ] **Phase 5: About + Services Pages** - Founder bio, philosophy, values; 7 pillar service sections
- [ ] **Phase 6: Ikigai Model + Case Studies** - Framework diagram page and structured impact stories
- [ ] **Phase 7: Contact + Integrations** - Contact form, Calendly, Formspree, privacy policy
- [ ] **Phase 8: Animation Layer** - Framer Motion scroll reveals, stagger, hover effects, reduced motion
- [ ] **Phase 9: SEO + Structured Data** - Meta tags, sitemap, canonical URLs, JSON-LD schemas
- [ ] **Phase 10: Accessibility + Performance Audit** - Screen reader audit, Core Web Vitals, Lighthouse 90+, 404 page
- [ ] **Phase 11: CI + Security + Deployment** - Quality gates, security headers, Vercel hosting, analytics

## Phase Details

### Phase 1: Project Foundation + Design System
**Goal**: Working Next.js project with design tokens, typography, and reusable UI primitives
**Depends on**: Nothing (first phase)
**Requirements**: TECH-01, TECH-02, TECH-03, DSGN-01, DSGN-02, DSGN-05, DSGN-08, DSGN-09, A11Y-01, A11Y-07
**Success Criteria** (what must be TRUE):
  1. `npm run dev` starts a working Next.js development server with TypeScript
  2. Design tokens (colors, typography, spacing) are defined in Tailwind config and render correctly
  3. UI primitive components (Button, Container, SectionHeading, Card, Divider) render with correct styling
  4. Gold on dark backgrounds passes WCAG AA contrast (4.5:1); gold never used as text on light backgrounds
  5. Body text renders at 16px+ with Playfair Display headlines and Inter body text
**Research**: Unlikely (standard Next.js + Tailwind setup)
**Plans**: TBD

### Phase 2: Layout Chrome
**Goal**: Persistent navigation and footer that wrap every page with full responsive behavior
**Depends on**: Phase 1
**Requirements**: DSGN-03, DSGN-04, A11Y-02, A11Y-04, A11Y-05
**Success Criteria** (what must be TRUE):
  1. Desktop navigation displays all page links with logo linking home and current page indicated
  2. Mobile hamburger menu opens/closes with all page links accessible
  3. All navigation elements are fully keyboard-navigable with visible focus indicators
  4. Skip navigation link is present and functional
  5. Layout renders correctly across desktop, tablet, and mobile breakpoints
**Research**: Unlikely (standard navigation patterns)
**Plans**: TBD

### Phase 3: Content Data + Brand Assets
**Goal**: All content defined as typed data files, logo/favicon created, SVG architectural motifs ready
**Depends on**: Phase 1 (can run parallel with Phase 2)
**Requirements**: TECH-06, DSGN-07, DSGN-10, DSGN-11, LOGO-01, LOGO-02, LOGO-03, LOGO-04
**Success Criteria** (what must be TRUE):
  1. All content data (pillars, case studies, testimonials, metadata) defined as typed TypeScript files
  2. Logo/wordmark, favicon (multiple sizes), and Apple touch icons created and rendering
  3. Architectural line drawing SVGs and pillar icons created and ready for use
  4. Open Graph preview images created for social sharing
  5. Content uses nonprofit sector language and strategic CTA phrasing throughout
**Research**: Likely (SVG motif design, logo creation, architectural style references)
**Plans**: TBD

### Phase 4: Homepage
**Goal**: Complete homepage with all 7 sections proving the design system works end-to-end
**Depends on**: Phases 2, 3
**Requirements**: PAGE-01
**Success Criteria** (what must be TRUE):
  1. Homepage renders all 7 sections: Hero, Problem, Solution, 7 Pillars Grid, Who We Serve, Why Ikigai, CTA
  2. Hero section displays value proposition with gold CTA button
  3. 7 Pillars Grid renders all pillar cards with icons, titles, and descriptions
  4. Problem/Solution uses two-column layout with correct content
  5. Page renders correctly on desktop, tablet, and mobile
**Research**: Unlikely (component composition from existing primitives)
**Plans**: TBD

### Phase 5: About + Services Pages
**Goal**: Core content pages that visitors check after the homepage
**Depends on**: Phases 2, 3
**Requirements**: PAGE-02, PAGE-03, DSGN-06
**Success Criteria** (what must be TRUE):
  1. About page displays founder bio, "Why Ikigai?" philosophy, and values icon row
  2. Services page renders all 7 pillar sections with description, included items, outcomes, and CTA
  3. Services page uses alternating white/soft green section backgrounds with gold divider lines
  4. Both pages render correctly on desktop, tablet, and mobile
**Research**: Unlikely (page composition from existing components)
**Plans**: TBD

### Phase 6: Ikigai Model + Case Studies
**Goal**: Thought-leadership and social proof pages showcasing proprietary framework and impact
**Depends on**: Phases 2, 3
**Requirements**: PAGE-04, PAGE-05, A11Y-06
**Success Criteria** (what must be TRUE):
  1. Ikigai Model page displays large SVG diagram with TM symbol on model name
  2. Model page explains Blueprint > Build > Strengthen > Sustain flow with pillar integration
  3. Case Studies page renders structured entries (Challenge > Approach > Outcome > Measurable Results)
  4. Testimonials section displays with proper attribution
  5. SVG diagram has comprehensive aria-label for screen readers
**Research**: Unlikely (page composition; SVG created in Phase 3)
**Plans**: TBD

### Phase 7: Contact + Integrations
**Goal**: Conversion endpoint with form submission, calendar booking, and privacy documentation
**Depends on**: Phases 2, 3
**Requirements**: PAGE-06, PAGE-07, INTG-01, INTG-02, INTG-03, INTG-04
**Success Criteria** (what must be TRUE):
  1. Contact form submits successfully via Formspree with honeypot spam protection
  2. Calendly popup widget opens and displays booking calendar
  3. Form success confirmation displays with response time expectation
  4. Privacy policy page documents data collection practices (PIPEDA compliance)
**Research**: Likely (Calendly embed patterns, Formspree current API)
**Plans**: TBD

### Phase 8: Animation Layer
**Goal**: Premium scroll reveals and hover effects layered on all existing pages
**Depends on**: Phases 4, 5, 6, 7 (all pages built)
**Requirements**: TECH-04, ANIM-01, ANIM-02, ANIM-03, ANIM-04, ANIM-05
**Success Criteria** (what must be TRUE):
  1. Sections fade in on scroll with 200-400ms entrance animations
  2. Pillar grids and card layouts animate with staggered timing
  3. Gold accent animations appear on hover for interactive elements
  4. All animations disabled when user prefers reduced motion
  5. All animations use CSS transforms and opacity only (no layout-triggering properties)
**Research**: Likely (Framer Motion + Next.js Server/Client Component integration)
**Plans**: TBD

### Phase 9: SEO + Structured Data
**Goal**: Comprehensive search engine optimization with Ontario local SEO and structured data
**Depends on**: Phase 8 (all content and animations finalized)
**Requirements**: SEO-01, SEO-02, SEO-03, SEO-04, SEO-05, SEO-06, SEO-07, SEO-08, SEO-09
**Success Criteria** (what must be TRUE):
  1. Each page has unique title tag and meta description with Ontario/nonprofit keywords
  2. Semantic HTML with proper heading hierarchy and alt text on all images
  3. Sitemap.xml, robots.txt, and canonical URLs are auto-generated
  4. Open Graph tags render correct preview cards for LinkedIn/social sharing
  5. JSON-LD structured data (Organization, LocalBusiness, Service) validates without errors
**Research**: Unlikely (standard SEO patterns)
**Plans**: TBD

### Phase 10: Accessibility + Performance Audit
**Goal**: Full accessibility audit, Core Web Vitals verification, and performance optimization
**Depends on**: Phase 9 (all content and metadata in place)
**Requirements**: A11Y-03, PERF-01, PERF-02, PERF-03, PERF-04, PERF-05, PERF-06, PAGE-08
**Success Criteria** (what must be TRUE):
  1. Screen readers can navigate all pages with proper aria labels and roles
  2. Lighthouse scores 90+ across Performance, Accessibility, Best Practices, and SEO
  3. Core Web Vitals pass (FCP < 1.5s, LCP < 2.5s, CLS < 0.1)
  4. Images use modern formats (WebP/AVIF) with lazy loading for below-fold content
  5. Custom 404 page displays with consistent site branding
**Research**: Unlikely (standard audit and optimization)
**Plans**: TBD

### Phase 11: CI + Security + Deployment
**Goal**: Automated quality gates, security hardening, and production deployment
**Depends on**: Phase 10 (site is complete and audited)
**Requirements**: CI-01, CI-02, CI-03, CI-04, CI-05, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, TECH-05, INTG-05
**Success Criteria** (what must be TRUE):
  1. CI pipeline passes: TypeScript typecheck, ESLint, Lighthouse budget, axe accessibility check
  2. Playwright smoke test verifies contact form submission flow
  3. Security headers (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy) configured
  4. Site deployed on Vercel with custom domain, CDN, and auto-HTTPS
  5. Vercel Analytics tracks visits and conversions
**Research**: Likely (CI pipeline config, CSP allowlists for Calendly/Formspree/Vercel)
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 (parallel with 2) → 4 → 5 (parallel with 4, 6, 7) → 6 → 7 → 8 → 9 → 10 → 11

| Phase | Plans Complete | Status | Completed |
|-------|---------------|--------|-----------|
| 1. Foundation + Design System | 2/2 | Complete | 2026-02-16 |
| 2. Layout Chrome | 0/TBD | Not started | - |
| 3. Content Data + Brand Assets | 0/TBD | Not started | - |
| 4. Homepage | 0/TBD | Not started | - |
| 5. About + Services Pages | 0/TBD | Not started | - |
| 6. Ikigai Model + Case Studies | 0/TBD | Not started | - |
| 7. Contact + Integrations | 0/TBD | Not started | - |
| 8. Animation Layer | 0/TBD | Not started | - |
| 9. SEO + Structured Data | 0/TBD | Not started | - |
| 10. Accessibility + Performance | 0/TBD | Not started | - |
| 11. CI + Security + Deployment | 0/TBD | Not started | - |
