# Roadmap: Ikigai Consulting Group Website

## Milestones

- ✅ **v1.0 Original Build** — Phases 1–11 (shipped 2026-02-17)
- 🚧 **v2.0 Greenleaf-Inspired Redesign** — Phases 12–19 (in progress)

---

## Phases

<details>
<summary>✅ v1.0 Original Build (Phases 1–11) — SHIPPED 2026-02-17</summary>

### Phase 1: Project Foundation + Design System
**Goal**: Working Next.js project with design tokens, typography, and reusable UI primitives
**Status**: Complete — 2026-02-16

### Phase 2: Layout Chrome
**Goal**: Persistent navigation, mobile hamburger, footer, responsive layout
**Status**: Complete — 2026-02-16

### Phase 3: Content Data + Brand Assets
**Goal**: All content defined as typed data files, logo/favicon created, SVG architectural motifs ready
**Status**: Complete — 2026-02-16

### Phase 4: Homepage
**Goal**: Complete homepage with all 7 sections proving the design system end-to-end
**Status**: Complete — 2026-02-16

### Phase 5: About + Services Pages
**Goal**: Core content pages that visitors check after the homepage
**Status**: Complete — 2026-02-16

### Phase 6: Ikigai Model + Case Studies
**Goal**: Thought-leadership and social proof pages showcasing proprietary framework and impact
**Status**: Complete — 2026-02-16

### Phase 7: Contact + Integrations
**Goal**: Conversion endpoint with form submission, calendar booking, and privacy documentation
**Status**: Complete — 2026-02-16

### Phase 8: Animation Layer
**Goal**: Premium scroll reveals and hover effects layered on all existing pages
**Status**: Complete — 2026-02-17

### Phase 9: SEO + Structured Data
**Goal**: Comprehensive search engine optimization with Ontario local SEO and structured data
**Status**: Complete — 2026-02-17

### Phase 10: Accessibility + Performance Audit
**Goal**: Full accessibility audit, Core Web Vitals verification, and performance optimization
**Status**: Complete — 2026-02-17

### Phase 11: CI + Security + Deployment
**Goal**: Automated quality gates, security hardening, and production deployment
**Status**: Complete — 2026-02-17

</details>

---

### 🚧 v2.0 Greenleaf-Inspired Redesign

**Milestone Goal:** Rebuild the Ikigai site with the Greenleaf template's design language — minimal white-dominant layouts, pill section labels, floating button shadows, bento grids, sticky scroll services, dark overlay form card — while preserving Ikigai's brand identity (Hunter Green, Gold, Playfair Display serif headlines).

Reference analysis documents in `.planning/`: `home.md`, `about.md`, `contact.md`, `policy.md`

**Phase Numbering:** Continues from v1.0. Phases 12–19.

---

- [ ] **Phase 12: Design System + Component Overhaul** — New tokens, pill labels, bento cards, floating button shadow, rounded footer card
- [ ] **Phase 13: Homepage Redesign** — Full restructure: center hero, image gallery, sticky services, bento benefits, 3-col testimonials, FAQ, rounded CTA card
- [ ] **Phase 14: About Page Redesign** — Floating image badges, trust bar, 2x2 values grid, editorial stats, founder profile, standalone testimonial
- [ ] **Phase 15: Services Page Redesign** — Sticky-left intro + scrolling-right pillar cards pattern
- [ ] **Phase 16: Model + Case Studies Redesign** — Greenleaf design language applied to both thought-leadership pages
- [ ] **Phase 17: Contact + Policy Redesign** — Dark overlay form card, inline FAQ, narrow-column policy
- [ ] **Phase 18: Animation + Polish** — Floating shadows, scroll word-opacity reveal, sticky scroll polish, reduced motion

---

## Phase Details

### Phase 12: Design System + Component Overhaul
**Goal**: Update all design tokens and create new shared components needed by the redesigned pages
**Depends on**: Nothing (first redesign phase)
**Requirements**: REDO-08, REDO-09, REDO-10, REDO-11, REDO-12, REDO-13, REDO-14, REDO-15, REDO-16
**Success Criteria** (what must be TRUE):
  1. Design tokens updated: corrected dark green (#13261b), card surface (#f3f6f5), body gray (#5e6b64), pill bg (#f0f0f0)
  2. PillLabel component renders correctly in all sections (gray bordered badge with short label text)
  3. Primary CTA buttons render as fully-rounded pills (border-radius: 9999px) with floating shadow beneath
  4. BentoCard component renders with light gray bg, 20-24px radius, variable widths
  5. Footer redesigned as rounded-top dark green card with Pages + Information columns and social icons
  6. Navigation simplified to clean white bar matching Greenleaf style
**Research**: Unlikely (confirmed values from live site fetch)
**Plans**: TBD

### Phase 13: Homepage Redesign
**Goal**: Complete homepage restructure applying all Greenleaf layout patterns
**Depends on**: Phase 12
**Requirements**: REDO-01
**Success Criteria** (what must be TRUE):
  1. Hero: center-aligned, credibility badge above heading, image gallery strip below fold
  2. About teaser section with large centered heading below gallery
  3. Services section uses sticky-left layout card + scrolling right pillar cards (or simplified equivalent)
  4. Benefits displayed in asymmetric bento grid (not identical-width cards)
  5. Testimonials displayed as 3-column cards (not full-bleed quote blocks)
  6. FAQ accordion section present on homepage
  7. Final CTA renders as rounded light-gray container card (not full-bleed dark section)
  8. All removed sections (Problem, Solution, WhoWeServe, SocialProof, HowWeWork) replaced by new layout
**Research**: Unlikely (analysis complete in home.md)
**Plans**: TBD

### Phase 14: About Page Redesign
**Goal**: Rebuild About page with Greenleaf-inspired layout patterns adapted to Ikigai brand
**Depends on**: Phase 12
**Requirements**: REDO-02
**Success Criteria** (what must be TRUE):
  1. Hero section uses pill label + large page title (same scale as homepage hero)
  2. "Who we are" section: 2-column layout (text left, Nilda photo right) with floating overlay credential badges on photo
  3. Trust bar visible below description ("Organizations we've served" with placeholder logos)
  4. Values displayed in 2×3 grid (5 Ikigai values) or 2×2 with 5th spanning — cards with icon chips, no icon row
  5. Editorial stats bar: 4 key numbers at weight-300 (no card containers, floating on white)
  6. Founder profile: 2-col (photo + bio + socials), no alternating (single founder)
  7. Standalone featured testimonial: large open-format quote (no card container)
  8. Final CTA as rounded card (same as homepage)
**Research**: Unlikely (analysis complete in about.md)
**Plans**: TBD

### Phase 15: Services Page Redesign
**Goal**: Rebuild Services page with sticky-scroll pattern per Greenleaf template
**Depends on**: Phase 12
**Requirements**: REDO-03
**Success Criteria** (what must be TRUE):
  1. Left column contains section intro (sticky while right scrolls): pill label + heading + description
  2. Right column displays pillar cards stacked vertically — each card: large image + pillar name + description + CTA
  3. Pillar cards link to appropriate sections or expanded content
  4. Page renders correctly at tablet and mobile (sticky unsticks, stacks to single column)
  5. PillLabel appears above section heading
**Research**: Unlikely — NOTE: Services page screenshots not yet analyzed. Phase can proceed based on Greenleaf sticky-scroll pattern from home.md. Screenshots should be shared before planning this phase.
**Plans**: TBD

### Phase 16: Model + Case Studies Redesign
**Goal**: Apply Greenleaf design language to Ikigai Model page and Case Studies/Impact page
**Depends on**: Phase 12
**Requirements**: REDO-05, REDO-06
**Success Criteria** (what must be TRUE):
  1. Model page: pill label above heading, editorial stats (3 key metrics), diagram section, flow explanation with Greenleaf typography
  2. Model page: final CTA as rounded card
  3. Case Studies page: results snapshot with Greenleaf-style table/cards, alternating case study layout
  4. Case Studies page: standalone featured testimonial (open format, no card)
  5. Case Studies page: final CTA as rounded card
  6. Both pages: consistent PillLabel usage above all section headings
**Research**: Unlikely (pages inherit redesigned components from Phases 12–14)
**Plans**: TBD

### Phase 17: Contact + Policy Redesign
**Goal**: Contact page with dark overlay form card; Policy page with narrow editorial column
**Depends on**: Phase 12
**Requirements**: REDO-04, REDO-07
**Success Criteria** (what must be TRUE):
  1. Contact: 2-column layout — left (heading + dual-path copy + book button) + right (form card)
  2. Form card: dark semi-transparent overlay on photo/texture background; input fields are light on dark card
  3. Contact: FAQ accordion appears below form section (absorbs Common Concerns content)
  4. Contact: No BestFit cards section, no CalendarBookingSection, no LocationInfoSection — form is the CTA
  5. Policy: Single narrow column (~560px), left-aligned, H2 headings at ~40-44px scale, pill label above title
  6. Policy: Final CTA card at bottom
**Research**: Unlikely (analysis complete in contact.md and policy.md)
**Plans**: TBD

### Phase 18: Animation + Polish
**Goal**: Implement signature Greenleaf animations and polish edge cases across all redesigned pages
**Depends on**: Phases 13, 14, 15, 16, 17 (all pages redesigned)
**Requirements**: REDO-17, REDO-18, REDO-19
**Success Criteria** (what must be TRUE):
  1. All primary CTA buttons have floating shadow effect (blurred dark shadow beneath button)
  2. About teaser heading has scroll-triggered word opacity animation (words "activate" dark as they scroll into view)
  3. Services sticky scroll works correctly (left column stays fixed while right scrolls past)
  4. Bento grid cards have subtle hover effects
  5. All animations respect prefers-reduced-motion
  6. No layout shift introduced by any animation
**Research**: Unlikely (patterns established; floating shadow is CSS-only)
**Plans**: TBD

---

## Progress

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1. Foundation + Design System | v1.0 | 2/2 | Complete | 2026-02-16 |
| 2. Layout Chrome | v1.0 | — | Complete | 2026-02-16 |
| 3. Content Data + Brand Assets | v1.0 | — | Complete | 2026-02-16 |
| 4. Homepage | v1.0 | — | Complete | 2026-02-16 |
| 5. About + Services Pages | v1.0 | — | Complete | 2026-02-16 |
| 6. Ikigai Model + Case Studies | v1.0 | — | Complete | 2026-02-16 |
| 7. Contact + Integrations | v1.0 | — | Complete | 2026-02-16 |
| 8. Animation Layer | v1.0 | — | Complete | 2026-02-17 |
| 9. SEO + Structured Data | v1.0 | — | Complete | 2026-02-17 |
| 10. Accessibility + Performance | v1.0 | — | Complete | 2026-02-17 |
| 11. CI + Security + Deployment | v1.0 | — | Complete | 2026-02-17 |
| 12. Design System Overhaul | v2.0 | 0/TBD | Not started | — |
| 13. Homepage Redesign | v2.0 | 0/TBD | Not started | — |
| 14. About Page Redesign | v2.0 | 0/TBD | Not started | — |
| 15. Services Page Redesign | v2.0 | 0/TBD | Not started | — |
| 16. Model + Case Studies Redesign | v2.0 | 0/TBD | Not started | — |
| 17. Contact + Policy Redesign | v2.0 | 0/TBD | Not started | — |
| 18. Animation + Polish | v2.0 | 0/TBD | Not started | — |
