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

- **Hero:** "Architecting Purpose-Driven Organizations to Thrive" with gold CTA "Book Your Strategy Call" (75vh mobile, 90vh desktop)
- **Problem Section:** "Strong Missions. Fragile Structures." -- Two-column layout addressing strategic plans on shelves, governance confusion, operational misalignment, program drift, burnout
- **Solution Section:** "We Are Organizational Architects." with Ikigai Architecture Model visual (7 pillars)
- **7 Pillars Grid:** 3x3 or 4+3 layout, each with icon, title, description, "Learn More →" link to `/services#[slug]`, gold hover accent
- **Who We Serve:** "Built for Leaders Who Carry Mission." -- NGOs, social service agencies, faith-based orgs, women-led initiatives, boards
- **Why Ikigai:** Three columns -- Authority, Full-Cycle Architecture, Measurable Impact
- **CTA:** "Let's Transform Your Organization." with "Book Your Strategy Call" button

### 2. About Page ("Credibility & Trust")

- Founder intro with professional photo of Nilda Bastone
- Values: Integrity, Accountability, Social Justice, Excellence, Courageous Leadership (icon row)
- CTA: "Work With Nilda"

### 3. Services Page ("Clarity & Authority")

- One section per pillar: Description + 2 best Outcomes (no "What's Included")
- Alternating backgrounds (white / soft green), gold divider lines
- CTA: "Get a Pillar Assessment"

### 4. The Ikigai Model Page (Thought Leadership)

- Large visual diagram of Ikigai Architecture Model with explanation paragraph below
- Flow explanation: Blueprint > Build > Strengthen > Sustain
- Integration of all pillars, why it works
- CTA: "See How This Applies to You"

### 5. Case Studies / Impact Page

- "Impact in Action." -- Challenge, Approach, Outcome, Measurable Results
- Testimonials embedded in matching case study cards (not a separate section)
- Standalone testimonial for Amara Williams (Peel Region Youth Services) below case studies
- CTA: "Get Results Like These"

### 6. Contact Page

- "Begin the Conversation." -- Fields: Name, Organization, Email, Challenge description
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

### Concept-Merged Redesign (MERGED to main site)

"Architectural Blueprint" design concept merged into main site routes. Shared components in `src/lib/shared.tsx`.

Design system: bone/parchment backgrounds, deep-green/archGold accents, blueprint blue folio numbers, inline CSS styles (not Tailwind), `motion/react` animations

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

### Tech Stack

- Next.js 16 with TypeScript (strict mode), static export (`output: 'export'`)
- Tailwind CSS 4 with CSS-first config (`@theme` in globals.css, no tailwind.config.ts)
- Fonts: Playfair Display (serif headlines) + Inter (sans body) via next/font/google
- Utilities: clsx + tailwind-merge (`cn()` in `src/lib/utils.ts`)
- Icons: lucide-react (Menu, X, Shield, Target, Scale, Award, Compass, Check) + custom SVG pillar icons
- Animation: motion (v12.x, imported from `motion/react`) for scroll reveals, stagger, hover effects
- Integrations: react-calendly (Calendly popup booking), Formspree (contact form backend)
- Dev tools: @axe-core/cli (automated accessibility checking)

### Key Files

- `src/app/globals.css` -- Design tokens: Hunter Green/Gold palettes (50-900), type scale, spacing
- `src/app/layout.tsx` -- Root layout: SkipNav + Navigation + main#main-content + Footer, flex column min-h-screen, Organization + LocalBusiness JSON-LD
- `src/app/page.tsx` -- Homepage composing 7 section components
- `src/app/not-found.tsx` -- Branded 404 page with design system components, noindex metadata
- `src/app/sitemap.ts` -- Auto-generated sitemap.xml with all 7 pages, priorities, change frequencies
- `src/app/robots.ts` -- Auto-generated robots.txt allowing all crawlers, referencing sitemap
- `src/app/icon.tsx` -- 32x32 favicon (ImageResponse, hunter-green bg + gold "I")
- `src/app/apple-icon.tsx` -- 180x180 Apple touch icon (ImageResponse)
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

- **Navigation** -- sticky top bar, "IKIGAI" wordmark, desktop links (lg+), hamburger (below lg), current page gold underline + `aria-current="page"`, `aria-controls="mobile-menu"`, `'use client'`
- **MobileMenu** -- full-screen overlay, Escape to close, body scroll lock, `role="dialog"`, `id="mobile-menu"`, focus management (auto-focus close button, return focus on close), `'use client'`
- **SkipNav** -- sr-only skip link targeting #main-content, visible on focus
- **Footer** -- dark bg (neutral-950), nav links, contact info, copyright, Server Component

### Animation Components (`src/components/animation/`)

- **FadeIn** -- Scroll-triggered fade-up reveal (configurable direction: up/down/left/right, delay), `whileInView` with `viewport={{ once: true }}`, `'use client'`
- **StaggerChildren / StaggerItem** -- Sequential grid animation wrapper using variants + `staggerChildren`, `'use client'`
- **HoverAccent** -- Gold accent line that scales in from left on hover via `scaleX` transform, `'use client'`
- All use `useReducedMotion()` from `motion/react` -- animations disabled when OS prefers reduced motion
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

### Homepage Sections (`src/components/sections/`)

- **HeroSection** -- hunter-green bg, min-h-[80vh], serif heading, gold CTA button
- **ProblemSection** -- white bg, two-column layout (narrative + pain points with gold dashes)
- **SolutionSection** -- light-green bg, Blueprint > Build > Strengthen > Sustain flow, TM symbol
- **PillarsGrid** -- white bg, responsive 1/2/3 col grid, Card + PillarIcon + strategic CTAs
- **WhoWeServe** -- hunter-green bg, 5 audience segments, no gold text
- **WhyIkigai** -- light-green bg, 3 columns (Authority, Full-Cycle, Measurable Impact)
- **CTASection** -- black bg, configurable props, gold button, reusable on other pages

### About Page Sections (`src/components/sections/`)

- **FounderBio** -- white bg, two-column (bio text + gold-bordered blockquote), photo-ready via optional `imageSrc` prop
- **ValuesRow** -- hunter-green bg, 5 values with Lucide icons (gold), responsive 2/3/5 col grid
- Philosophy section removed (Wave 1 UX audit -- merged into Values)

### Services Page Sections (`src/components/sections/`)

- **ServicePillar** -- reusable per-pillar section, two-column (description + included/outcomes lists), alternating bg, anchor ID via slug

### Model Page Sections (`src/components/sections/`)

- **ModelDiagram** -- white bg, inline architectural SVG diagram (7 columns + 4 phase strata), role="img" + aria-label, TM branding
- **ModelFlow** -- 3 sub-sections: 4-phase flow (light-green), pillar integration grid (white), why-it-works (hunter-green) with CTA

### Impact Page Sections (`src/components/sections/`)

- **CaseStudyCard** -- structured article (Challenge + Approach side-by-side, Outcome, Measurable Results with gold dots, embedded testimonial quote), alternating bg
- **StandaloneTestimonial** -- Amara Williams standalone testimonial below case studies (deep-green bg)
- Separate Testimonials section removed (Wave 1 UX audit -- embedded in case study cards)

### Contact Page Sections (`src/components/sections/`)

- **ContactForm** -- 'use client', 4-field form + honeypot (offscreen positioned, aria-hidden, tabindex=-1), Formspree fetch POST, idle/submitting/success/error states, inline validation, `aria-live="polite"` on success message, `aria-describedby` for error association
- **CalendarBooking** -- 'use client', react-calendly PopupButton, hydration-safe mounting, hunter-green bg, graceful env var fallback

### Page Routes

- `src/app/about/page.tsx` -- FounderBio > ValuesRow > CTASection (Philosophy removed)
- `src/app/services/page.tsx` -- hunter-green intro + 7 ServicePillar sections (data-driven from pillars.ts) + CTASection
- `src/app/model/page.tsx` -- ModelDiagram > ModelFlow (thought leadership page)
- `src/app/impact/page.tsx` -- page header + 3 CaseStudyCards (with embedded testimonials) + standalone Amara Williams testimonial + CTASection
- `src/app/contact/page.tsx` -- ContactForm + CalendarBooking + location info
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
