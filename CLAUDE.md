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

- **Hero:** "Architecting Purpose-Driven Organizations to Thrive" with gold CTA "Schedule a Strategic Conversation"
- **Problem Section:** "Strong Missions. Fragile Structures." -- Two-column layout addressing strategic plans on shelves, governance confusion, operational misalignment, program drift, burnout
- **Solution Section:** "We Are Organizational Architects." with Ikigai Architecture Model visual (7 pillars)
- **7 Pillars Grid:** 3x3 or 4+3 layout, each with icon, title, description, "Learn More" link, gold hover accent
- **Who We Serve:** "Built for Leaders Who Carry Mission." -- NGOs, social service agencies, faith-based orgs, women-led initiatives, boards
- **Why Ikigai:** Three columns -- Authority, Full-Cycle Architecture, Measurable Impact
- **CTA:** "Let's Architect Your Organization." with "Book Your Strategy Call" button

### 2. About Page ("Credibility & Trust")

- Founder intro with professional photo of Nilda Bastone
- Philosophy section: "Why Ikigai?" -- alignment, integrity, human-centered leadership, structural excellence
- Values: Integrity, Accountability, Social Justice, Excellence, Courageous Leadership (icon row)

### 3. Services Page ("Clarity & Authority")

- One section per pillar: Description, What's Included, Outcomes, CTA
- Alternating backgrounds (white / soft green), gold divider lines

### 4. The Ikigai Model Page (Thought Leadership)

- Large visual diagram of Ikigai Architecture Model
- Flow explanation: Blueprint > Build > Strengthen > Sustain
- Integration of all pillars, why it works

### 5. Case Studies / Impact Page

- "Architecture in Action." -- Challenge, Approach, Outcome, Measurable Results
- Testimonials section

### 6. Contact Page

- "Begin the Conversation." -- Fields: Name, Organization, Email, Challenge description
- Calendar booking integration

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

### Tech Stack

- Next.js 16 with TypeScript (strict mode), static export (`output: 'export'`)
- Tailwind CSS 4 with CSS-first config (`@theme` in globals.css, no tailwind.config.ts)
- Fonts: Playfair Display (serif headlines) + Inter (sans body) via next/font/google
- Utilities: clsx + tailwind-merge (`cn()` in `src/lib/utils.ts`)
- Icons: lucide-react (Menu, X for navigation) + custom SVG pillar icons

### Key Files

- `src/app/globals.css` -- Design tokens: Hunter Green/Gold palettes (50-900), type scale, spacing
- `src/app/layout.tsx` -- Root layout: SkipNav + Navigation + main#main-content + Footer, flex column min-h-screen
- `src/app/page.tsx` -- Homepage composing 7 section components
- `src/app/icon.tsx` -- 32x32 favicon (ImageResponse, hunter-green bg + gold "I")
- `src/app/apple-icon.tsx` -- 180x180 Apple touch icon (ImageResponse)
- `src/app/opengraph-image.tsx` -- 1200x630 OG image (ImageResponse)
- `src/lib/fonts.ts` -- Font config (exports `playfairDisplay`, `inter`)
- `src/lib/utils.ts` -- `cn()` utility

### UI Primitives (`src/components/ui/`)

- **Button** -- gold/outline/ghost variants, sm/md/lg sizes, Link or button via `href` prop
- **Container** -- max-width wrapper (72rem default, 48rem narrow)
- **SectionHeading** -- serif heading + tagline + gold accent line + description, `dark` prop
- **Card** -- white bg, shadow, optional gold hover border
- **Divider** -- gold horizontal line
- **Section** -- background variants (white/light-green/hunter-green/black), auto text color, wraps Container

### Layout Chrome (`src/components/layout/`)

- **Navigation** -- sticky top bar, "IKIGAI" wordmark, desktop links (lg+), hamburger (below lg), current page gold underline, `'use client'`
- **MobileMenu** -- full-screen overlay, Escape to close, body scroll lock, `role="dialog"`, `'use client'`
- **SkipNav** -- sr-only skip link targeting #main-content, visible on focus
- **Footer** -- dark bg (neutral-950), nav links, contact info, copyright, Server Component

### Content Data (`src/lib/data/`)

- **navigation.ts** -- 6 page links (`NavigationLink[]`) + `ctaNav` object
- **pillars.ts** -- 7 pillars with slug, title, subtitle, description, outcomes, included, icon, ctaText
- **values.ts** -- 5 company values with name, description, icon key
- **case-studies.ts** -- 3 placeholder case studies (Challenge > Approach > Outcome > Metrics)
- **testimonials.ts** -- 4 placeholder testimonials with specific outcomes
- **metadata.ts** -- siteMetadata + pageMetadata per route with Ontario/nonprofit SEO keywords

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

## Design Guidelines

- Premium, elevated feel -- no clutter
- Hover effects with gold accent lines on interactive elements
- Two-column layouts for problem/solution sections
- Alternating section backgrounds for visual rhythm
- Subtle architectural line graphics throughout
- Clean, powerful, minimal aesthetic

## Rules

- For every front-end change, use the front-end skill and review with the senior-frontend.
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
