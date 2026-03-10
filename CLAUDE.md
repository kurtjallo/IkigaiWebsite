# Ikigai Website -- Project Context

## Project Summary

Website for **Ikigai Consulting Group**, an organizational consulting firm founded by Nilda Bastone. Positioned as "Organizational Architects for Purpose-Driven Organizations" serving Ontario's NGO ecosystem.

## Brand & Tone

- **Positioning:** Organizational Architects for Purpose-Driven Organizations
- **Tone:** Sophisticated, Confident, Structured, Human-Centered
- **Colors:** Hunter Green, Gold, Black, White (generous white space)
- **Typography:** Serif headlines (elegant authority), clean sans-serif body
- **Buttons:** Gold background with black text
- **Visual Motifs:** Architectural line drawings, pillar imagery, structured blocks, no clutter

## Proprietary IP

- **Ikigai Architecture Model** -- Signature framework with flow: Blueprint > Build > Strengthen > Sustain
- **7 Pillars:** Strategic, Governance, Operational, Program, Leadership, Accountability, Community Architecture

## Site Pages & Structure

### 1. Homepage ("Authority + Clarity")

- **Hero:** "Architecting Purpose-Driven Organizations to Thrive" with concrete sub-line ("We help Ontario nonprofits strengthen governance, strategy, and operations — with measurable results"), gold CTA "Book a Strategy Call" (75vh mobile, 90vh desktop), 3-stat credibility strip (20+ yrs, 85% attendance, $200K funding)
- **Problem Section:** "Strong Missions. Fragile Structures." -- Two-column layout, trimmed pain points (~30 words each)
- **Solution Section:** "We Are Organizational Architects." with Ikigai Architecture Model visual (7 pillars)
- **7 Pillars Grid:** 3x3 or 4+3 layout, each with icon, title, description, "Learn More →" link to `/services#[slug]`, gold hover accent
- **Who We Serve:** "Built for Leaders Who Carry Mission." -- 5 audience segments with gold checkmarks on deep green bg
- **Social Proof Bar:** 3 key metrics (85% board attendance, $200K funding, 8 programs) + Margaret Chen testimonial blockquote
- **Why Ikigai:** Three columns -- Deep Sector Expertise, Full-Cycle Model, Measurable Results
- **CTA:** "Let's Build Something That Lasts." with "Book a Strategy Call" button

### 2. About Page ("Credibility & Trust")

- Founder intro with actual photo of Nilda Bastone (`public/images/founder.png`)
- Values: Integrity, Accountability, Social Justice, Excellence, Courageous Leadership (icon row)
- CTA: "Book a Strategy Call"

### 3. Services Page ("Clarity & Authority")

- Accordion UI: 7 pillars as collapsible rows (one open at a time, AnimatePresence animation)
- Expanded view: Description + 2 Outcomes + proof point linking to case study + CTA button
- ARIA: aria-expanded, aria-controls, role="region" on panels
- CTA: "Book a Strategy Call"

### 4. The Ikigai Model Page (Thought Leadership)

- Outcomes proof block at top (3 stats: 85% attendance, $200K funding, 3 successors + "See all case studies →" link)
- Large visual diagram of Ikigai Architecture Model with explanation paragraph below
- Flow explanation: Blueprint > Build > Strengthen > Sustain (trimmed ~30%, "you get" framing)
- Integration of all pillars, why it works
- CTA: "Book a Strategy Call"

### 5. Case Studies / Impact Page

- "Impact in Action." -- Challenge, Approach, Outcome, Measurable Results
- Testimonials embedded in matching case study cards (not a separate section)
- Standalone testimonial for Amara Williams (Peel Region Youth Services) below case studies
- CTA: "Book a Strategy Call"

### 6. Contact Page

- "Begin the Conversation." -- Fields: Name, Organization, Email, Challenge description (optional)
- "Strategic Conversation" defined: free 30-minute call with Nilda
- Calendar booking: "Book a Free 30-Min Call" button
- Form success message includes next steps (calendar link within 2 business days)

## Target Audience

- NGOs & Charities
- Social Service Agencies
- Faith-Based Organizations
- Women-Led & Justice-Centered Initiatives
- Boards & Executive Teams

## Current State

**Phase 1: Project Foundation + Design System -- COMPLETE** (2026-02-16)
**Phase 2: Layout Chrome -- COMPLETE** (2026-02-16)
**Phase 3: Content Data + Brand Assets -- COMPLETE** (2026-02-16)
**Phase 4: Homepage -- COMPLETE** (2026-02-16)
**Phase 5: About + Services Pages -- COMPLETE** (2026-02-16)
**Phase 6: Ikigai Model + Case Studies -- COMPLETE** (2026-02-16)
**Phase 7: Contact + Integrations -- COMPLETE** (2026-02-16)
**Phase 8: Animation Layer -- COMPLETE** (2026-02-17)
**Phase 9: SEO + Structured Data -- COMPLETE** (2026-02-17)
**Phase 10: Accessibility + Performance Audit -- COMPLETE** (2026-02-17)

### v2.0 Greenleaf-Inspired Redesign

**Phase 12: Design System Overhaul -- COMPLETE** (2026-03-07)
**Phase 13: Homepage Redesign -- COMPLETE** (2026-03-07)
**Phase 14: About Page Redesign -- COMPLETE** (2026-03-07)
**Phase 15: Services Page Redesign -- COMPLETE** (2026-03-07)
**Phase 16: Model + Case Studies Redesign -- COMPLETE** (2026-03-07)
**Phase 17: Contact + Policy Redesign -- COMPLETE** (2026-03-07)
**Phase 18: Animation + Polish -- COMPLETE** (2026-03-08)

### Spec Alignment Audit (2026-03-08)

Thorough audit of all pages against CLAUDE.md spec. Fixes applied:
- Impact page: StandaloneTestimonialSection bg changed from white to deepGreen (per spec), CTA qualifier microcopy added
- About page: RoundedCTACard now includes description + microcopy + qualifier (was missing all three)
- Contact page: Added BestFitSection (4 positive-framing cards), CalendarBookingSection (deepGreen, gold CTA), LocationInfoSection (email + GTA location) -- all three were missing from v2.0 redesign
- Homepage: Added WhoWeServeSection (5 audience segments, deepGreen bg, gold checkmarks) and HowWeWorkSection (4-step engagement model with gold-topped cards, 3–12 month timeline) -- both specified in UX audit passes but dropped during v2.0 redesign
- All CTA microcopy unified with qualifier line "For leaders ready to strengthen their organization's foundations."
- CLAUDE.md section descriptions updated to reflect actual current v2.0 component structure

### Concept-Merged Redesign (MERGED to main site)

"Architectural Blueprint" design concept merged into main site routes. Shared components in `src/lib/shared.tsx`.

Design system: bone/parchment backgrounds, deep-green/archGold accents, blueprint blue folio numbers, inline CSS styles (not Tailwind), `motion/react` animations

### UX Audit -- Devil's Advocate Pass #2 Complete (2026-02-19)

9 issues addressed (1 was pre-fixed):
- Hero: concrete sub-line + 3-stat credibility strip above fold
- All CTAs unified to "Book a Strategy Call" (except nav "Book a Call" and form "Send Message")
- Model page: outcomes proof block with 3 stats + case study link at top
- De-jargon: concrete hero copy, trimmed problem/services/model copy ~30%
- Pillar descriptions trimmed and rewritten as deliverable-focused
- Contact form: challenge field made optional with placeholder
- Mobile typography: CSS utility classes enforce 14px minimum, tighter tracking, larger CTA buttons
- CSS classes: `.mobile-min-text`, `.mobile-tight-tracking`, `.mobile-cta-text` in globals.css

### UX Audit -- Wave 1 Complete (2026-02-19)

Per `.planning/UX-AUDIT.md`, Wave 1 (10 items) shipped:
- CTA text varies per page (Homepage/About/Services/Model/Impact each unique)
- "Architecture" metaphor reduced ~50% outside brand tagline + pillar names (rotated to design/build/structure/framework/system)
- "What's Included" removed from Services page; outcomes limited to 2 per pillar
- Philosophy section removed from About page (merged into Values)
- Testimonials embedded in case study cards on Impact page; standalone Amara Williams testimonial
- "Learn More →" links on homepage pillar cards → `/services#[slug]`
- Hero 75vh on mobile, 90vh desktop
- Diagram explanation paragraph on Model page
- "Strategic Conversation" defined on Contact page (free 30-min call)
- De-jargon pass: parentheticals for logic model, environmental scan, 360 feedback, capacity analysis, shared governance; plain-language replacements for worst offenders

### UX Audit -- Wave 2 Complete (2026-02-19)

Per `.planning/UX-AUDIT.md`, Wave 2 (5 items) shipped:
- Homepage: "Who We Serve" section (5 audience segments, gold checkmarks, deep green bg)
- Homepage: Social Proof bar (3 metrics: 85% board attendance, $200K funding, 8 programs + Margaret Chen testimonial)
- Homepage: "Why Ikigai" section (3 differentiator columns: Deep Sector Expertise, Full-Cycle Model, Measurable Results)
- Services page: Accordion UI replacing 7 identical full-width sections (AnimatePresence, one open at a time, ARIA)
- Services page: Proof point per pillar linking to real case study results on Impact page

### UX Audit -- Wave 3 Partial (2026-02-19)

Per `.planning/UX-AUDIT.md`, Wave 3 (partially shipped, rest blocked on client input):
- About page: Founder credentials added (Catholic Community Services of York Region, 37 recommendations)
- Still blocked: specific org count for "Proven with X organizations", 4th case study for Peel Region

### UX Audit -- Devil's Advocate Pass #3 (2026-02-19)

6 items from skeptical buyer lens (10 proposed, 4 rejected as SaaS-funnel thinking):
- Homepage: WhyIkigai section replaced with HowWeWork (4-step engagement model: Discovery Call → Custom Blueprint → Hands-On Implementation → Sustained Support)
- Homepage: Timeline ranges added ("Typical projects run 3–12 months")
- Impact page: Results Snapshot table at top (Organization | Challenge | Key Result), rows anchor-link to case studies, responsive mobile stacking
- Contact page: "Best Fit Organizations" block (4 positive-framing cards, no exclusion language)
- Contact page: "Common Concerns" FAQ accordion (4 objection-handling items, between form and calendar)
- CTA microcopy "Free 30-minute call with Nilda." on booking CTAs only (hero, CTASection, calendar — not form submit or nav)

### UX Audit -- Devil's Advocate Pass #4 (2026-02-19)

1 item from pre-launch risk lens (7 proposed, 6 rejected as already addressed or not worth trade-off):
- Soft qualifier line added to CTA microcopy: "For leaders ready to strengthen their organization's foundations." (second line under "Free 30-minute call with Nilda." on all 3 booking CTAs)

### Brand Logo Update (2026-02-20)

- Nav wordmark replaced with actual Ikigai logo image (`public/images/ikigai-nav.png`, green-dot variant, 42px height)
- Favicon: static `public/images/favicon.ico` (branded serif "I" + green dot, multi-size ICO) -- replaced default Vercel favicon
- Apple touch icon updated to match (transparent bg, serif "I" + green dot + gold accent)
- Explicit `<link rel="icon">` tags in `layout.tsx` `<head>` + `icons` field in metadata
- Deleted `src/app/icon.tsx` (ImageResponse route handler removed in favor of static file)
- Deleted leftover Next.js defaults: `vercel.svg`, `next.svg`, `globe.svg`, `file.svg`, `window.svg`
- Deleted unused logo files: `logo-dark.png`, `logo-original.jpg`, `ikigai.png`, `ikigai-fullword.png`
- Nav hover animations: gold underline slides in from left on links, CTA button lifts with gold shadow
- Structured data logo reference updated to `ikigai-nav.png`

### Tech Stack

- Next.js 16 with TypeScript (strict mode), static export (`output: 'export'`)
- Tailwind CSS 4 with CSS-first config (`@theme` in globals.css, no tailwind.config.ts)
- Fonts: Playfair Display (serif headlines) + Inter (sans body) via next/font/google
- Utilities: clsx + tailwind-merge (`cn()` in `src/lib/utils.ts`)
- Icons: lucide-react (Menu, X, Shield, Target, Scale, Award, Compass, Check) + custom SVG pillar icons
- Animation: motion (v12.x, imported from `motion/react`) for scroll reveals, stagger, hover effects
- Integrations: react-calendly (Calendly popup booking), Formspree (contact form backend)
- CI: GitHub Actions (`.github/workflows/ci.yml`) -- lint + build on push to main and PRs
- Dev tools: @axe-core/cli (automated accessibility checking)

### Key Files

- `src/app/globals.css` -- Design tokens: Hunter Green/Gold palettes (50-900), type scale, spacing
- `src/app/layout.tsx` -- Root layout: SkipNav + Navigation + main#main-content + Footer, flex column min-h-screen, Organization + LocalBusiness JSON-LD
- `src/app/page.tsx` -- Homepage composing 10 section components
- `src/app/not-found.tsx` -- Branded 404 page with design system components, noindex metadata
- `src/app/sitemap.ts` -- Auto-generated sitemap.xml with all 7 pages, priorities, change frequencies
- `src/app/robots.ts` -- Auto-generated robots.txt allowing all crawlers, referencing sitemap
- `public/images/favicon.ico` -- Static favicon (branded "I" + green dot, 16/32/48px multi-size ICO)
- `src/app/apple-icon.tsx` -- 180x180 Apple touch icon (ImageResponse, transparent bg)
- `src/app/opengraph-image.tsx` -- 1200x630 OG image (ImageResponse)
- `src/lib/fonts.ts` -- Font config (exports `playfairDisplay`, `inter`)
- `src/lib/utils.ts` -- `cn()` utility

### UI Primitives (`src/components/ui/`)

- **Button** -- gold/outline/ghost variants, sm/md/lg sizes, Link or button via `href` prop
- **Container** -- max-width wrapper (72rem default, 48rem narrow)
- **SectionHeading** -- serif heading + tagline + gold accent line + description, `dark` prop
- **Card** -- white bg, shadow, optional gold hover border, HoverAccent gold line on hover ('use client')
- **Divider** -- gold horizontal line
- **Section** -- background variants (white/light-green/hunter-green/black), auto text color, wraps Container, optional `ariaLabel` prop

### Layout Chrome (`src/components/layout/`)

- **Navigation** -- sticky top bar, Ikigai logo image (`ikigai-nav.png`, 42px height), desktop links (lg+) with gold underline slide-in hover animation, hamburger (below lg), current page gold underline, "Book a Call" CTA with lift+glow hover, `'use client'`
- **MobileMenu** -- full-screen overlay, Escape to close, body scroll lock, `role="dialog"`, `id="mobile-menu"`, focus management (auto-focus close button, return focus on close), `'use client'`
- **SkipNav** -- sr-only skip link targeting #main-content, visible on focus
- **Footer** -- dark bg (neutral-950), nav links, contact info, copyright, Server Component

### Animation Components (`src/lib/shared.tsx` + `src/components/animation/`)

- **FadeIn** -- Scroll-triggered fade-up reveal (configurable direction: up/down/left/right, delay), `useInView` with `once: true`
- **StaggerWrap / StaggerItem** -- Sequential grid animation wrapper using variants + `staggerChildren`
- **WordReveal** -- Scroll-triggered word opacity animation (words fade from 15% to 100% as user scrolls through), used on homepage About teaser heading
- **HoverAccent** -- Gold accent line that scales in from left on hover via `scaleX` transform
- **BentoCard hover** -- CSS `.bento-card-hover` class adds subtle lift (-3px) + shadow on hover
- **Testimonial card hover** -- CSS `.testimonial-card-hover` class adds subtle lift (-2px) + shadow on hover
- **Floating CTA shadow** -- `.btn-pill-primary` has `--btn-float-shadow` (0 12px 28px dark green blur)
- All use `useReducedMotion()` from `motion/react` -- animations disabled when OS prefers reduced motion
- CSS hover effects also disabled via `@media (prefers-reduced-motion: reduce)` in globals.css
- All animate only `transform` + `opacity` (GPU-composited, no layout shift)

### Content Data (`src/lib/data/`)

- **navigation.ts** -- 6 page links (`NavigationLink[]`) + `ctaNav` object
- **pillars.ts** -- 7 pillars with slug, title, subtitle, description, outcomes, included, icon, ctaText
- **values.ts** -- 5 company values with name, description, icon key
- **case-studies.ts** -- 3 placeholder case studies (Challenge > Approach > Outcome > Metrics)
- **testimonials.ts** -- 4 placeholder testimonials with specific outcomes
- **metadata.ts** -- BASE_URL, siteMetadata (OG, Twitter, robots), pageMetadata per route with Ontario/nonprofit SEO keywords, canonical URLs
- **structured-data.ts** -- JSON-LD schemas: organizationSchema, localBusinessSchema, getServiceSchemas() for 7 pillars

### SVG Components (`src/components/svg/`)

- **Logo** -- SVG wordmark with dark/light variants, showTagline prop, gold accent line
- **PillarIcon** -- 7 custom line-art icons (24x24 viewBox, currentColor stroke, no fill), selected by slug
- **CornerAccent** -- L-shaped decorative bracket for section corners
- **BlueprintGrid** -- subtle repeating grid pattern for backgrounds
- **StructuralFrame** -- beam/truss decorative divider (horizontal/vertical)

### Homepage Sections (inline in `src/app/page.tsx`)

- **HeroSection** -- white bg, 75vh mobile / 90vh desktop, serif heading, dark pill CTA button, PillLabel "Serving Ontario NGOs for 20+ years", microcopy with qualifier
- **GalleryStrip** -- 4-image gallery strip with rounded tops, hidden on mobile, stock photos
- **AboutTeaser** -- white bg, WordReveal heading "We are organizational architects...", link to /about
- **ServicesSection** -- white bg, sticky left panel + scrolling pillar cards (7 cards with SVG tile patterns, deep-green headers, "Learn More →" links to `/services#[slug]`)
- **BenefitsBento** -- white bg, 4-card asymmetric bento grid (Deep Sector Expertise, Full-Cycle Framework, Measurable Results, Hands-On Partnership) with icon boxes
- **WhoWeServeSection** -- deepGreen bg, 5 audience segments with gold checkmark icons in translucent cards
- **HowWeWorkSection** -- cardSurface bg, 4-step engagement model (Discovery Call, Custom Blueprint, Hands-On Implementation, Sustained Support) with gold-topped cards, 3–12 month timeline note
- **TestimonialsSection** -- white bg, 3 testimonial cards with 5-star ratings, quotes truncated at 200 chars
- **FAQSection** -- white bg, 5-item accordion (AnimatePresence, rotating + icon, ARIA)
- **RoundedCTACard** -- cardSurface bg, "Let's Build Something That Lasts." with microcopy + qualifier

### About Page Sections (inline in `src/app/about/page.tsx`)

- **PageHero** -- white bg, centered "The architect behind the work", PillLabel "About us"
- **WhoWeAre** -- 2-column grid (text left, founder photo right with floating badges "20+ Years Experience" / "Ontario Nonprofit Expert"), trust bar placeholders
- **ValuesGrid** -- 5 values as BentoCards with Lucide icons (Shield, Target, Scale, Award, Compass), 2-column grid
- **StatsBar** -- 4 editorial stats (20+, 85%, $200K+, 8 Programs) in 4-column grid
- **FounderProfile** -- 2-column (photo left, bio right) with credentials, 37 recommendations
- **StandaloneTestimonial** -- Margaret Chen testimonial with 5 stars, circle avatar, divider
- **RoundedCTACard** -- "Ready to architect your organization's future?" with description + microcopy + qualifier

### Services Page (inline in `src/app/services/page.tsx`)

- **PageHero** -- white bg, centered "Seven Pillars of Organizational Excellence", PillLabel "Services"
- **Sticky-Scroll Layout** -- 1fr/2fr grid: sticky left sidebar ("Your guide to organizational health" + CTA) with scrolling pillar cards on right
  - **PillarCard** -- 7 cards with deep-green header (unique SVG pattern per pillar), pillar number, arrow link, title, description, 2 outcomes with gold dots, proof point linking to case study, gold CTA button
  - Proof points link to `/impact#[case-study-slug]` with real metrics
  - Mobile: single column, sidebar unsticks
- **RoundedCTACard** -- "Ready to strengthen your organization?"

### Model Page Sections (inline in `src/app/model/page.tsx`)

- **ModelHero** -- white bg, centered "The Ikigai Architecture Model™", PillLabel
- **EditorialStats** -- 3 stats (85%, $200K+, 3 successors) + "See all case studies →" link to /impact
- **ModelDiagramSection** -- bone bg, SectionLabel "01 / The Framework", SVG matrix diagram (4 phases × 7 pillars with nodes/connectors), explanation paragraph below
- **PhasesDeepDive** -- boneDark bg, SectionLabel "02 / The Process", 4 phases with gold left-border cards (Blueprint, Build, Strengthen, Sustain) using "you get" framing
- **PillarIntegration** -- bone bg, SectionLabel "03 / The Pillars", 7-pillar grid linking to `/services#[slug]` with hover gold border
- **WhyItWorks** -- deepGreen bg, SectionLabel "04 / Why It Works", BlueprintGridPattern, 3-column (Holistic, Adaptive, Sustainable)
- **RoundedCTACard** -- "Ready to apply this model to your organization?" with microcopy + qualifier

### Impact Page Sections (inline in `src/app/impact/page.tsx`)

- **ImpactHero** -- white bg, centered "Impact in Action.", PillLabel "Impact"
- **ResultsSnapshot** -- cardSurface bg, SectionLabel "At a Glance", 3 case study rows (org + sector, challenge, key result with gold dot), rows anchor-link to `#[slug]`, gold left-border with hover effect
- **CaseStudySection** -- structured article (Challenge + Approach side-by-side grid, Outcome, Measurable Results with gold dots, embedded testimonial blockquote with quote mark SVG), alternating bg, `id` for anchor linking, gold gradient divider between studies
- **StandaloneTestimonialSection** -- Amara Williams standalone testimonial below case studies (deepGreen bg, gold stars, parchment text, circle avatar with initial)
- **RoundedCTACard** -- "Ready to create your own impact story?" with microcopy + qualifier

### Contact Page Sections (inline in `src/app/contact/page.tsx`)

- **BestFitSection** -- cardSurface bg, PillLabel "Best Fit", 4 positive-framing cards with gold left-border (Growing Beyond Your Founder, Strengthening Governance, Proving Your Impact, Scaling Without Losing Mission), 2-column grid
- **ContactHeroForm** -- white bg, 2-column grid: left (heading "Begin the Conversation." + calendar CTA pill button + microcopy), right (deepGreen form card with Name, Organization (optional), Email, Challenge (optional) + honeypot + Formspree POST + success/error states)
- **FAQSection** -- white bg, 4-item FAQ accordion (aria-expanded, aria-controls, role="region", AnimatePresence), circle ×/+ toggle
- **CalendarBookingSection** -- deepGreen bg, centered "Prefer to book directly?", gold pill CTA "Book a Free 30-Min Call" + microcopy + qualifier
- **LocationInfoSection** -- cardSurface bg, 2-column grid: email link + GTA location info

### Page Routes

- `src/app/page.tsx` -- HeroSection > GalleryStrip > AboutTeaser > ServicesSection > BenefitsBento > WhoWeServeSection > HowWeWorkSection > TestimonialsSection > FAQSection > RoundedCTACard
- `src/app/about/page.tsx` -- PageHero > WhoWeAre > ValuesGrid > StatsBar > FounderProfile > StandaloneTestimonial > RoundedCTACard
- `src/app/services/page.tsx` -- PageHero > Sticky-Scroll (sidebar + 7 PillarCards) > RoundedCTACard
- `src/app/model/page.tsx` -- ModelHero > EditorialStats > ModelDiagramSection > PhasesDeepDive > PillarIntegration > WhyItWorks > RoundedCTACard
- `src/app/impact/page.tsx` -- ImpactHero > ResultsSnapshot > 3 CaseStudySections (with embedded testimonials) > StandaloneTestimonialSection (Amara Williams, deepGreen bg) > RoundedCTACard
- `src/app/contact/page.tsx` -- BestFitSection > ContactHeroForm > FAQSection > CalendarBookingSection > LocationInfoSection
- `src/app/privacy/page.tsx` -- PIPEDA-compliant privacy policy (Server Component, static content)
- `src/app/not-found.tsx` -- Branded 404 page (noindex, gold CTA to homepage)

### Environment Variables (Contact Page)

- `NEXT_PUBLIC_FORMSPREE_ID` -- Formspree form ID for contact form submission
- `NEXT_PUBLIC_CALENDLY_URL` -- Calendly scheduling URL for booking popup

### Design Decisions

- Gold text on dark backgrounds uses `text-gold-200` (#EBD399) for WCAG AA compliance (4.58:1 on hunter-green)
- Gold (#D4A843) is only used as backgrounds, borders, accent lines, and decorative SVG icons on light backgrounds
- Gold text hover on light bg uses `text-gold-700` (#6E561B) for WCAG AA compliance
- Section responsive padding: `py-16 md:py-24` (4rem mobile, 6rem desktop)
- Homepage background rhythm: hunter-green > white > light-green > white > hunter-green > light-green > black
- No stock photography -- use architectural SVGs and geometric motifs for visual identity
- Photo-ready sections: About and Case Studies pages should look complete without photos but have slots that accept real photos (Nilda headshot, team/event shots) when available later
- Favicon uses static ICO file in `public/images/` with explicit `<link>` tags in layout.tsx (not ImageResponse route)
- ImageResponse files need `export const dynamic = 'force-static'` for static export compatibility
- Navigation is a client component (usePathname), layout.tsx stays Server Component
- Animation wrappers are Client Components imported by Server Component sections (correct Next.js pattern -- no need for 'use client' on section files)
- All section components now wrapped with FadeIn/StaggerChildren for scroll reveals
- JSON-LD structured data in layout.tsx (every page) and services/page.tsx (Service schemas)
- sitemap.ts and robots.ts use `export const dynamic = 'force-static'` for static export

## Design Guidelines

- Premium, elevated feel -- no clutter
- Hover effects with gold accent lines on interactive elements
- Two-column layouts for problem/solution sections
- Alternating section backgrounds for visual rhythm
- Subtle architectural line graphics throughout
- Clean, powerful, minimal aesthetic

## Rules

- For every front-end change, use the front-end skill
- Never include "Co-Authored-By: Claude" in any git commits, pushes, or PRs. No Claude attribution in the repo.
- After every git commit, update this CLAUDE.md file to reflect the current state of the project (new files, components, decisions, etc.).

## Plan Mode Rules

When entering plan mode, follow this protocol:

**Before starting:** Ask if I want one of two modes:

1. **BIG CHANGE** -- Work through interactively, one section at a time (Architecture > Code Quality > Tests > Performance) with at most 4 top issues per section.
2. **SMALL CHANGE** -- Work through interactively, ONE question per review section.

**My engineering preferences (use these to guide recommendations):**

- DRY is important -- flag repetition aggressively.
- Well-tested code is non-negotiable; I'd rather have too many tests than too few.
- Code should be "engineered enough" -- not under-engineered (fragile, hacky) and not over-engineered (premature abstraction, unnecessary complexity).
- Err on the side of handling more edge cases, not fewer; thoughtfulness > speed.
- Bias toward explicit over clever.

**Review sections (run in order):**

1. **Architecture review** -- Evaluate: system design and component boundaries, dependency graph and coupling, data flow patterns and bottlenecks, scaling characteristics and single points of failure, security architecture (auth, data access, API boundaries).

2. **Code quality review** -- Evaluate: code organization and module structure, DRY violations (be aggressive), error handling patterns and missing edge cases (call out explicitly), technical debt hotspots, areas that are over/under-engineered relative to my preferences.

3. **Test review** -- Evaluate: test coverage gaps (unit, integration, e2e), test quality and assertion strength, missing edge case coverage (be thorough), untested failure modes and error paths.

4. **Performance review** -- Evaluate: N+1 queries and database access patterns, memory-usage concerns, caching opportunities, slow or high-complexity code paths.

**For each issue found:**

- Describe the problem concretely, with file and line references.
- Present 2-3 options, including "do nothing" where reasonable.
- For each option: specify implementation effort, risk, impact on other code, and maintenance burden.
- Give an opinionated recommended option and why, mapped to my preferences above.
- Explicitly ask whether I agree or want a different direction before proceeding.

**Formatting rules for AskUserQuestion:**

- NUMBER issues (1, 2, 3...) and give LETTERS for options (A, B, C...).
- Each AskUserQuestion option must clearly label the issue NUMBER and option LETTER so I don't get confused.
- The recommended option is always the 1st option.

**Workflow:**

- Do not assume my priorities on timeline or scale.
- After each review section, pause and ask for feedback before moving on.
