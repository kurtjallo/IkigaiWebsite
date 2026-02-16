# Architecture Research

**Domain:** Premium multi-page static consulting website
**Researched:** 2026-02-16
**Confidence:** HIGH (Next.js static export docs verified via official source v16.1.6; component patterns, Tailwind design system, and animation architecture based on well-established patterns)

---

## Standard Architecture

### System Overview

```
+------------------------------------------------------------------+
|                        DEPLOYMENT                                |
|  Vercel / Netlify / Cloudflare Pages (static hosting + edge)     |
+------------------------------------------------------------------+
         |                    |                    |
    Static HTML          Static CSS/JS        Static Assets
    (per route)          (bundled)             (images/SVGs)
         |                    |                    |
+------------------------------------------------------------------+
|                     BUILD OUTPUT (out/)                           |
|  next build --output export                                      |
|  /index.html  /about.html  /services.html  ...                  |
+------------------------------------------------------------------+
         ^
         | next build
         |
+------------------------------------------------------------------+
|                     NEXT.JS APP ROUTER                           |
|                                                                  |
|  app/                                                            |
|  +-- layout.tsx          (root layout: nav + footer)             |
|  +-- page.tsx            (homepage)                              |
|  +-- about/page.tsx      (about)                                |
|  +-- services/page.tsx   (services)                             |
|  +-- model/page.tsx      (ikigai model)                         |
|  +-- impact/page.tsx     (case studies)                         |
|  +-- contact/page.tsx    (contact)                              |
|                                                                  |
+------------------------------------------------------------------+
         ^                          ^
         |                          |
+--------------------+   +-------------------------+
| DESIGN SYSTEM      |   | CONTENT LAYER           |
| (Tailwind + tokens)|   | (local data files)      |
| CSS variables       |   | TypeScript objects       |
| Component library   |   | No CMS, no API calls    |
+--------------------+   +-------------------------+
         ^
         |
+------------------------------------------------------------------+
|                     COMPONENT TREE                                |
|                                                                  |
|  Layout Components     Section Components     UI Primitives      |
|  - RootLayout          - HeroSection          - Button           |
|  - Navigation          - ProblemSection       - SectionHeading   |
|  - Footer              - PillarsGrid          - Card             |
|  - PageWrapper         - CTASection           - Icon             |
|                        - ServicePillar        - AnimatedElement  |
|                        - FounderBio           - Container        |
|                        - ContactForm          - Badge            |
+------------------------------------------------------------------+
         ^
         |
+------------------------------------------------------------------+
|                     EXTERNAL SERVICES (client-side only)          |
|                                                                  |
|  Contact Form --> Serverless function (Formspree / Netlify Forms |
|                   / Vercel serverless / Resend)                   |
|  Calendar     --> Calendly embed (iframe or popup widget)        |
|  Analytics    --> Google Analytics 4 / Plausible (script tag)    |
+------------------------------------------------------------------+
```

### Component Responsibilities

| Component Layer | Responsibility | Renders On |
|----------------|---------------|------------|
| **Root Layout** | Wraps all pages with Navigation + Footer; sets metadata defaults; loads fonts | Server (build time) |
| **Page Components** | Compose section components for each route; set per-page metadata/SEO | Server (build time) |
| **Section Components** | Self-contained page sections (Hero, Problem, etc.); accept content as props | Server (build time) |
| **UI Primitives** | Reusable atoms (Button, Card, Container, SectionHeading) | Server or Client |
| **Animation Wrappers** | Client Components that add scroll/hover animations around server content | Client |
| **Contact Form** | Client Component with form state, validation, submission to serverless endpoint | Client |
| **Calendar Widget** | Client Component wrapping Calendly embed | Client |

**Key principle:** The vast majority of components are Server Components (rendered at build time to static HTML). Only components requiring browser APIs -- animations, form interactivity, calendar embed -- use `'use client'`.

---

## Recommended Project Structure

```
ikigaiWebsite/
+-- app/
|   +-- layout.tsx                    # Root layout (nav, footer, fonts, metadata)
|   +-- page.tsx                      # Homepage (composes 7 sections)
|   +-- about/
|   |   +-- page.tsx                  # About page
|   +-- services/
|   |   +-- page.tsx                  # Services page (7 pillar sections)
|   +-- model/
|   |   +-- page.tsx                  # Ikigai Model thought leadership page
|   +-- impact/
|   |   +-- page.tsx                  # Case Studies / Impact page
|   +-- contact/
|   |   +-- page.tsx                  # Contact page (form + calendar)
|   +-- globals.css                   # Tailwind imports + CSS custom properties
|   +-- not-found.tsx                 # Custom 404 page
|   +-- sitemap.ts                    # Auto-generated sitemap
|   +-- robots.ts                     # Robots.txt generation
|
+-- components/
|   +-- layout/                       # Structural components
|   |   +-- navigation.tsx            # Main navigation (desktop + mobile)
|   |   +-- mobile-menu.tsx           # Mobile hamburger menu (client component)
|   |   +-- footer.tsx                # Site footer
|   |   +-- page-header.tsx           # Reusable page header with breadcrumb
|   |   +-- container.tsx             # Max-width container wrapper
|   |
|   +-- sections/                     # Page section components (one per section)
|   |   +-- hero.tsx                  # Homepage hero
|   |   +-- problem.tsx               # "Strong Missions. Fragile Structures."
|   |   +-- solution.tsx              # "We Are Organizational Architects."
|   |   +-- pillars-grid.tsx          # 7 Pillars grid layout
|   |   +-- who-we-serve.tsx          # Target audience section
|   |   +-- why-ikigai.tsx            # Three-column differentiators
|   |   +-- cta-section.tsx           # Reusable CTA banner
|   |   +-- founder-bio.tsx           # Nilda Bastone section
|   |   +-- philosophy.tsx            # "Why Ikigai?" philosophy section
|   |   +-- values-row.tsx            # Values icon row
|   |   +-- service-pillar.tsx        # Individual pillar detail (used 7x)
|   |   +-- model-diagram.tsx         # Ikigai Architecture Model visual
|   |   +-- model-flow.tsx            # Blueprint > Build > Strengthen > Sustain
|   |   +-- case-study-card.tsx       # Individual case study
|   |   +-- testimonials.tsx          # Testimonials section
|   |   +-- contact-form.tsx          # Contact form (client component)
|   |   +-- calendar-booking.tsx      # Calendly integration (client component)
|   |
|   +-- ui/                           # Design system primitives
|   |   +-- button.tsx                # Gold CTA button + variants
|   |   +-- section-heading.tsx       # Serif heading with optional gold accent
|   |   +-- card.tsx                  # Card component with hover effects
|   |   +-- icon.tsx                  # SVG icon wrapper
|   |   +-- divider.tsx              # Gold divider line
|   |   +-- badge.tsx                # Small label component
|   |   +-- link.tsx                 # Styled link with hover accent
|   |
|   +-- animation/                    # Animation wrappers (all client components)
|   |   +-- fade-in.tsx              # Scroll-triggered fade-in
|   |   +-- slide-in.tsx             # Scroll-triggered slide from direction
|   |   +-- stagger-children.tsx     # Staggered child animation
|   |   +-- parallax.tsx             # Subtle parallax on scroll
|   |   +-- hover-scale.tsx          # Hover scale/accent effect
|   |
|   +-- svg/                          # Architectural motif SVGs
|       +-- pillar-icon.tsx           # Pillar icon per type
|       +-- line-motif.tsx            # Decorative architectural lines
|       +-- model-visual.tsx          # Ikigai model diagram SVG
|
+-- lib/                              # Utilities and data
|   +-- data/
|   |   +-- pillars.ts               # 7 pillar definitions (title, desc, icon, slug)
|   |   +-- case-studies.ts          # Case study content objects
|   |   +-- testimonials.ts          # Testimonial content
|   |   +-- navigation.ts            # Nav links and structure
|   |   +-- metadata.ts              # SEO metadata per page
|   |   +-- values.ts                # Company values content
|   |
|   +-- utils.ts                      # General utilities (cn() for classnames, etc.)
|   +-- fonts.ts                      # Font loading configuration
|
+-- public/
|   +-- images/                       # Optimized images
|   |   +-- nilda-bastone.webp        # Founder photo
|   |   +-- og-image.png             # Open Graph default image
|   +-- svg/                          # Static SVG assets (if not inline)
|   +-- favicon.ico
|   +-- apple-touch-icon.png
|
+-- tailwind.config.ts                # Tailwind theme: colors, fonts, breakpoints
+-- next.config.ts                    # output: 'export', image config
+-- tsconfig.json
+-- package.json
```

### Why This Structure

**`app/` contains only route files.** Each page.tsx is a thin composition layer that imports and arranges section components. No business logic, no complex JSX. This makes the routing layer scannable at a glance.

**`components/layout/` vs `components/sections/` vs `components/ui/`** maps to a clear hierarchy:
- **layout/** = structural chrome that appears on every page (navigation, footer, container)
- **sections/** = content-heavy components that form page sections (hero, pillars grid, CTA)
- **ui/** = reusable design system atoms that sections compose (button, heading, card)
- **animation/** = client-side animation wrappers that any component can use

**`lib/data/`** centralizes all content as TypeScript objects. This is the "content layer" -- no CMS, no API calls, no markdown parsing. Just typed objects that section components receive as props. When content changes, you edit one file. This is the right call for a 6-page site that changes infrequently.

**`components/svg/`** keeps architectural motif SVGs as React components (not img tags). This allows them to accept Tailwind classes for color theming, be animated with Framer Motion, and be tree-shaken if unused.

---

## Architectural Patterns

### Pattern 1: Server-First with Surgical Client Islands

**What:** Default everything to Server Components. Only add `'use client'` to components that genuinely need browser APIs: animation wrappers, form state, mobile menu toggle, calendar embed.

**Why:** A premium consulting site is fundamentally a document -- it displays content. Server Components render to static HTML at build time with zero JavaScript shipped for those components. This gives you the fastest possible page load, which is critical for "premium feel" and SEO.

**Implementation:**

```typescript
// components/sections/hero.tsx -- SERVER component (no directive needed)
import { FadeIn } from '@/components/animation/fade-in'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-hunter-green">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight">
            Architecting Purpose-Driven<br />
            Organizations to Thrive
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Button href="/contact" variant="gold" size="lg">
            Schedule a Strategic Conversation
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
```

```typescript
// components/animation/fade-in.tsx -- CLIENT component (needs IntersectionObserver)
'use client'

import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function FadeIn({ children, delay = 0, direction = 'up' }: FadeInProps) {
  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
```

**The pattern:** Server Component renders the content. It wraps specific elements in a Client Component animation wrapper. The animation wrapper ships JS; the content itself is static HTML. This keeps the JS bundle minimal while enabling rich interactions.

### Pattern 2: Design Token Architecture via Tailwind + CSS Custom Properties

**What:** Define the brand design system as Tailwind theme extensions backed by CSS custom properties. Colors, typography, spacing, and breakpoints are configured once and used everywhere.

**Why:** A 4-color palette (hunter green, gold, black, white) with specific typography pairing needs to be enforced consistently across 6 pages with 20+ sections. Tailwind's theme system makes this effortless while keeping the design language explicit in every className.

**Implementation:**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'hunter-green': {
          DEFAULT: '#355E3B',
          50: '#F0F5F1',
          100: '#D4E2D6',
          200: '#A8C5AD',
          300: '#7DA884',
          400: '#517B57',
          500: '#355E3B',
          600: '#2A4B2F',
          700: '#1F3823',
          800: '#152618',
          900: '#0A130C',
        },
        gold: {
          DEFAULT: '#D4A843',
          50: '#FBF6EC',
          100: '#F5E9CC',
          200: '#EBD399',
          300: '#E1BD66',
          400: '#D4A843',
          500: '#B8902E',
          600: '#937324',
          700: '#6E561B',
          800: '#493A12',
          900: '#241D09',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Premium type scale -- generous sizing
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h2': ['2.5rem', { lineHeight: '1.2' }],
        'h3': ['1.75rem', { lineHeight: '1.3' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.6' }],
      },
      spacing: {
        'section': '6rem',        // Vertical padding between sections
        'section-sm': '4rem',     // Smaller section padding (mobile)
      },
      maxWidth: {
        'content': '72rem',       // 1152px max content width
        'narrow': '48rem',        // 768px for text-heavy sections
      },
    },
  },
  plugins: [],
}

export default config
```

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-serif: 'Playfair Display', Georgia, serif;
    --font-sans: 'Inter', system-ui, sans-serif;

    /* Section background alternation tokens */
    --bg-primary: #ffffff;
    --bg-secondary: #F0F5F1;       /* hunter-green-50 */
    --bg-dark: #355E3B;            /* hunter-green */
    --bg-black: #111111;

    /* Gold accent for borders, hovers, underlines */
    --accent: #D4A843;
    --accent-hover: #B8902E;
  }
}
```

### Pattern 3: Section Component Composition

**What:** Each page is a flat list of section components. Sections are self-contained: they include their own background, padding, and content layout. Pages compose them vertically.

**Why:** With 7 sections on the homepage alone, each page must be a clean composition. Sections owning their own backgrounds (white / soft green / hunter green / black) enables the alternating-background visual rhythm described in the design spec without any complex layout logic in the page component.

**Implementation:**

```typescript
// app/page.tsx -- Homepage composition
import { HeroSection } from '@/components/sections/hero'
import { ProblemSection } from '@/components/sections/problem'
import { SolutionSection } from '@/components/sections/solution'
import { PillarsGrid } from '@/components/sections/pillars-grid'
import { WhoWeServe } from '@/components/sections/who-we-serve'
import { WhyIkigai } from '@/components/sections/why-ikigai'
import { CTASection } from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PillarsGrid />
      <WhoWeServe />
      <WhyIkigai />
      <CTASection />
    </>
  )
}
```

```typescript
// Generic section wrapper pattern
interface SectionProps {
  children: React.ReactNode
  background?: 'white' | 'light-green' | 'hunter-green' | 'black'
  className?: string
  id?: string
}

export function Section({
  children,
  background = 'white',
  className,
  id,
}: SectionProps) {
  const bgClasses = {
    'white': 'bg-white text-black',
    'light-green': 'bg-hunter-green-50 text-black',
    'hunter-green': 'bg-hunter-green text-white',
    'black': 'bg-neutral-950 text-white',
  }

  return (
    <section id={id} className={cn(
      'py-section px-6',      // section = 6rem vertical padding
      'md:py-section',
      bgClasses[background],
      className,
    )}>
      <div className="mx-auto max-w-content">
        {children}
      </div>
    </section>
  )
}
```

### Pattern 4: Content as Typed Data

**What:** All site content lives in TypeScript files under `lib/data/`. Components receive content as props or import it directly. No CMS, no API calls, no markdown.

**Why:** For a 6-page consulting site that updates maybe quarterly, a CMS is over-engineering. TypeScript data files give you:
- Full type safety (catch missing fields at build time)
- Zero runtime overhead (no API calls, no parsing)
- Single source of truth for content
- Easy to find and edit

**Implementation:**

```typescript
// lib/data/pillars.ts
export interface Pillar {
  slug: string
  title: string
  subtitle: string
  description: string
  outcomes: string[]
  included: string[]
  icon: string  // references SVG component key
}

export const pillars: Pillar[] = [
  {
    slug: 'strategic',
    title: 'Strategic Architecture',
    subtitle: 'Vision-to-Action Alignment',
    description: 'We design the strategic scaffolding...',
    outcomes: ['Aligned strategic plan', 'Clear 3-year roadmap', '...'],
    included: ['Strategic assessment', 'Stakeholder interviews', '...'],
    icon: 'strategic',
  },
  // ... 6 more pillars
]
```

```typescript
// lib/data/metadata.ts
import type { Metadata } from 'next'

const baseUrl = 'https://ikigaiconsulting.ca' // or actual domain

export const siteMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Ikigai Consulting Group | Organizational Architects',
    template: '%s | Ikigai Consulting Group',
  },
  description: 'Organizational Architects for Purpose-Driven Organizations...',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: baseUrl,
    siteName: 'Ikigai Consulting Group',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
}

export const pageMetadata: Record<string, Metadata> = {
  home: { /* ... */ },
  about: {
    title: 'About',
    description: 'Meet Nilda Bastone, founder of Ikigai Consulting Group...',
  },
  services: {
    title: 'Services',
    description: 'Seven pillars of organizational architecture...',
  },
  // ... etc
}
```

### Pattern 5: Animation Architecture -- Wrapper Components with Framer Motion

**What:** Create a small set of reusable animation wrapper components (FadeIn, SlideIn, StaggerChildren) that any Server Component can use. All animation wrappers are Client Components. The animated content itself remains server-rendered.

**Why:** Premium feel requires animations -- scroll-triggered reveals, hover accents, subtle parallax. But shipping Framer Motion JS for every component is wasteful. The wrapper pattern means:
- Animation JS is loaded once, shared across all uses
- Content remains static HTML (SEO-friendly, fast initial paint)
- Animation effects are consistent and centrally configurable
- Easy to disable animations for reduced-motion preferences

**Critical design decisions:**

1. **Use Framer Motion, not GSAP.** Framer Motion is React-native, tree-shakeable, and works naturally with React component lifecycle. GSAP requires imperative DOM manipulation that fights React's declarative model. For a Next.js site, Framer Motion is the clear choice.

2. **`whileInView` with `viewport={{ once: true }}`** for scroll reveals. Elements animate in once as they enter the viewport, then stay. No re-triggering on scroll back. This feels premium, not gimmicky.

3. **`prefers-reduced-motion` respect.** Wrap all animations in a media query check. Users who prefer reduced motion see content without animation delays.

**Implementation:**

```typescript
// components/animation/stagger-children.tsx
'use client'

import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface StaggerChildrenProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
```

Usage in a Server Component:

```typescript
// components/sections/pillars-grid.tsx (Server Component)
import { StaggerChildren, StaggerItem } from '@/components/animation/stagger-children'
import { Card } from '@/components/ui/card'
import { pillars } from '@/lib/data/pillars'

export function PillarsGrid() {
  return (
    <Section background="white">
      <SectionHeading>The 7 Pillars of Organizational Architecture</SectionHeading>
      <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {pillars.map((pillar) => (
          <StaggerItem key={pillar.slug}>
            <Card
              title={pillar.title}
              description={pillar.subtitle}
              href={`/services#${pillar.slug}`}
            />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  )
}
```

### Pattern 6: Responsive Strategy -- Mobile-First with 4 Breakpoints

**What:** Use Tailwind's mobile-first responsive utilities with a deliberate breakpoint strategy tuned for this type of content-heavy layout.

**Breakpoints:**

| Token | Width | Target | Key Layout Changes |
|-------|-------|--------|--------------------|
| (base) | 0-639px | Phone portrait | Single column, stacked sections, hamburger nav |
| `sm` | 640px+ | Phone landscape / small tablet | Minor spacing adjustments |
| `md` | 768px+ | Tablet portrait | Two-column layouts activate, grid columns expand |
| `lg` | 1024px+ | Tablet landscape / laptop | Full navigation visible, 3-column grids |
| `xl` | 1280px+ | Desktop | Maximum content width, generous whitespace |

**Why these breakpoints matter for this project:**
- The 7 Pillars grid needs to collapse from 3 columns (lg) to 2 columns (md) to 1 column (base)
- Two-column problem/solution layouts need a stack breakpoint at md
- The navigation must switch from hamburger to full links at lg
- Premium whitespace only works at xl+ widths; on mobile, tighten spacing to avoid wasted screen

### Pattern 7: Image and Asset Pipeline

**What:** Use Next.js `<Image>` component for raster images (founder photo, OG images) and inline React SVG components for architectural motifs and icons.

**For static export:** Configure a custom image loader or use `unoptimized: true` in next.config.ts since the default Next.js image optimizer requires a server. For a premium site with only a handful of images, pre-optimize images manually (WebP format, multiple sizes) and use `unoptimized: true`.

**SVG Strategy:**
- Architectural line motifs = React components (can accept className for theming, can be animated)
- Pillar icons = React components (one per pillar, colored via Tailwind)
- Ikigai Model diagram = React SVG component (can animate individual paths)
- No SVG sprites or img tags for decorative elements

**Implementation:**

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Pre-optimize images manually for static export
  },
  // trailingSlash: true,  // Depends on hosting provider
}

export default nextConfig
```

### Pattern 8: Contact Form -- Client Component with Serverless Backend

**What:** Contact form is a Client Component (`'use client'`) that handles form state locally and submits to an external serverless endpoint. No Next.js API routes (not available with static export).

**Options for form backend (pick one):**

| Service | Complexity | Cost | Why Consider |
|---------|-----------|------|-------------|
| **Formspree** | Lowest | Free tier (50 submissions/mo) | Zero backend code, just POST to their endpoint |
| **Netlify Forms** | Low | Free with Netlify hosting | Auto-detected from HTML, no config needed if on Netlify |
| **Resend + Vercel Edge Function** | Medium | Free tier generous | Most control, can customize email templates |
| **EmailJS** | Low | Free tier (200 emails/mo) | Client-side only, no backend needed |

**Recommendation:** Use **Formspree** for simplicity. It requires zero backend code -- you POST form data to a Formspree endpoint and they handle email delivery. For a consulting site that might get 5-20 form submissions per month, the free tier is more than sufficient. If the site is deployed to Netlify, use Netlify Forms instead (even simpler).

**Implementation sketch:**

```typescript
// components/sections/contact-form.tsx
'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-narrow">
      {/* Name, Organization, Email, Challenge fields */}
      <Button type="submit" variant="gold" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
      {status === 'success' && (
        <p className="text-hunter-green font-medium">
          Thank you. We will be in touch within 24 hours.
        </p>
      )}
    </form>
  )
}
```

### Pattern 9: Calendar Booking -- Calendly Embed

**What:** Embed Calendly as an inline widget or popup on the contact page and as a popup trigger from CTA buttons across the site.

**Why Calendly:** It is the dominant booking tool for consultants. It handles timezone detection, availability, confirmations, and calendar sync. Building a custom booking system would be massive over-engineering for a consulting firm.

**Implementation approach:**
- **Contact page:** Inline Calendly embed (shows full calendar)
- **CTA buttons:** Open Calendly popup widget on click
- Load Calendly script only on pages that use it (dynamic import)

```typescript
// components/sections/calendar-booking.tsx
'use client'

import { useEffect } from 'react'

export function CalendarBooking() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/ikigai-consulting/strategy-call"
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}
```

### Pattern 10: SEO Structure

**What:** Use Next.js App Router's built-in metadata API for per-page SEO, plus sitemap.ts and robots.ts for search engine configuration.

**Implementation:**

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import { siteMetadata } from '@/lib/data/metadata'

export const metadata: Metadata = siteMetadata

// app/services/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Seven pillars of organizational architecture for purpose-driven organizations.',
  openGraph: {
    title: 'Our Services | Ikigai Consulting Group',
    description: 'Strategic, Governance, Operational, Program, Leadership, Accountability, and Community Architecture.',
  },
}
```

```typescript
// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ikigaiconsulting.ca'

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/model`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/impact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
  ]
}
```

**Semantic HTML structure per page:**
- One `<h1>` per page (in the hero/header section)
- `<h2>` for section headings
- `<h3>` for sub-sections (pillar titles, card headings)
- `<nav>` for navigation
- `<main>` wrapping page content (in layout)
- `<footer>` for footer
- `<article>` for case studies
- Proper `alt` text on all images
- JSON-LD structured data for Organization and LocalBusiness schemas

---

## Data Flow

### Build-Time Data Flow (primary)

```
lib/data/*.ts  -->  Section Components  -->  next build  -->  Static HTML
(typed content)     (import data,            (renders to       (deployed)
                     render JSX)              out/ folder)
```

This is the dominant flow. Content is authored as TypeScript, imported by components, and rendered to HTML at build time. No runtime data fetching for any page content.

### Client-Side Data Flow (contact form only)

```
User fills form  -->  ContactForm state  -->  POST to Formspree  -->  Success/Error UI
                      (React useState)       (external API)           (local state update)
```

### Client-Side Script Loading (calendar, analytics)

```
Page mount  -->  useEffect loads script  -->  Third-party widget renders
                 (Calendly, GA4)              (inside designated container)
```

### Navigation Flow

```
User clicks link  -->  Next.js client router  -->  Prefetched static page loads
                       (next/link)                  (instant, no server round-trip)
```

Next.js prefetches linked pages in the viewport, so navigation between the 6 pages feels instant even on the static export.

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: Over-Animating

**What:** Adding animation to every element, parallax on every section, page transitions between routes.

**Why bad:** On a premium consulting site targeting nonprofit leaders (often on mid-range hardware and varied network speeds), excessive animation:
- Increases JS bundle size (Framer Motion is ~30KB gzipped; more animation = more code)
- Causes jank on lower-powered devices
- Distracts from the content (the authority message)
- Triggers motion sickness for some users

**Instead:** Animate selectively. Headings fade in. Cards stagger in. Buttons have hover effects. That is all. No page transitions. No parallax (or very subtle, CSS-only parallax if any). No animated backgrounds. Respect `prefers-reduced-motion`.

### Anti-Pattern 2: CMS for Static Content

**What:** Adding Contentful, Sanity, Strapi, or any headless CMS for a 6-page site.

**Why bad:** Adds massive complexity (API calls at build time, webhook-triggered rebuilds, CMS schema management, API keys, rate limits) for content that changes maybe 4 times a year. The CMS becomes a maintenance burden, a potential failure point, and a monthly cost for zero benefit.

**Instead:** Content as TypeScript files in `lib/data/`. When content changes, edit the file and redeploy. If the client later needs to edit content themselves, add a CMS then. Do not pre-optimize for a problem that does not exist yet.

### Anti-Pattern 3: Component Over-Abstraction

**What:** Creating a `<DynamicSection>` that takes 15 props to configure any section type, or building a `<FlexibleGrid>` that handles every possible grid layout.

**Why bad:** With only 6 pages and ~20 sections total, generic abstractions save no time and make the code harder to read. Each section has specific design requirements (the Problem section has a two-column layout; the Pillars Grid has a 3x3 grid; the CTA has centered text with a button). Trying to unify these into generic containers creates a mess of conditional rendering.

**Instead:** Make each section component specific and self-contained. Share UI primitives (Button, SectionHeading, Card) but not section layouts. It is OK if two sections have similar but not identical structures -- duplication is better than the wrong abstraction.

### Anti-Pattern 4: Client-Side Routing Tricks

**What:** Using `'use client'` page components for page transitions, or implementing a custom router for animation between pages.

**Why bad:** Breaks static export (pages must be server-renderable). Increases JS bundle. Delays initial page load. Hurts SEO (search engines see a loading spinner instead of content).

**Instead:** Use standard Next.js `<Link>` component. The static export generates per-route HTML files that load instantly. Client-side navigation between pages is already fast because Next.js prefetches linked routes. Page transitions are unnecessary when page loads are near-instant.

### Anti-Pattern 5: Putting Content in Components

**What:** Hardcoding strings, descriptions, and content directly in JSX.

**Why bad:** When the client says "change the hero headline," you have to find it buried in JSX. When you want to reuse pillar data in both the homepage grid and the services page, you duplicate it. Content and presentation should be separated even without a CMS.

**Instead:** All content in `lib/data/`. Components import what they need. This creates a clear boundary: designers/developers own components, the client's words live in data files.

### Anti-Pattern 6: Image Tag Soup for SVGs

**What:** Using `<img src="/icons/pillar-strategic.svg">` for architectural motifs and icons.

**Why bad:** Cannot style with CSS (no color theming). Cannot animate with Framer Motion. Creates extra HTTP requests. No tree-shaking.

**Instead:** Inline SVGs as React components. They accept className for Tailwind color classes, can be wrapped in Framer Motion for animation, and are bundled directly in the HTML output.

---

## Integration Points

### 1. Font Loading (Google Fonts via next/font)

```typescript
// lib/fonts.ts
import { Playfair_Display, Inter } from 'next/font/google'

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})
```

```typescript
// app/layout.tsx
import { playfairDisplay, inter } from '@/lib/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

`next/font` automatically self-hosts the fonts (no Google Fonts CDN request at runtime), optimizes loading, and prevents layout shift via `font-display: swap`.

### 2. Vercel Deployment (recommended)

```
git push main --> Vercel builds --> Static files deployed to edge CDN
```

- Zero configuration for Next.js projects
- Automatic HTTPS
- Global CDN (fast for Ontario-based audience and beyond)
- Preview deployments on PRs
- Free tier is generous for a consulting site

**Alternative:** Netlify (same capabilities, also excellent for static sites). If using Netlify, consider Netlify Forms instead of Formspree -- it auto-detects forms in the HTML and handles submissions with zero configuration.

### 3. Analytics

- **Recommended:** Vercel Analytics (built-in, zero config) or Plausible (privacy-focused, no cookie banner needed)
- **Alternative:** Google Analytics 4 (more features, but requires cookie consent banner for GDPR compliance if any EU visitors)
- Load analytics script via `next/script` with `strategy="afterInteractive"` to avoid blocking page render

### 4. Structured Data (JSON-LD)

```typescript
// app/layout.tsx -- Organization schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ikigai Consulting Group',
  description: 'Organizational Architects for Purpose-Driven Organizations',
  url: 'https://ikigaiconsulting.ca',
  founder: {
    '@type': 'Person',
    name: 'Nilda Bastone',
  },
  areaServed: {
    '@type': 'Province',
    name: 'Ontario',
  },
  serviceType: 'Organizational Consulting',
}

// Render in layout:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
```

---

## Build Order (Dependencies Between Components)

This section is critical for phase structure in the roadmap.

```
PHASE 1: Foundation (must be first -- everything depends on this)
+---------------------------------------------------------------+
| 1. Project scaffolding (Next.js, Tailwind, TypeScript)        |
| 2. tailwind.config.ts (colors, fonts, type scale, spacing)    |
| 3. globals.css (CSS custom properties, base styles)           |
| 4. lib/fonts.ts (font loading)                                |
| 5. next.config.ts (output: 'export', image config)            |
| 6. lib/utils.ts (cn() helper)                                 |
+---------------------------------------------------------------+
        |
        v
PHASE 2: Design System Primitives (sections depend on these)
+---------------------------------------------------------------+
| 1. components/ui/button.tsx                                   |
| 2. components/ui/section-heading.tsx                          |
| 3. components/ui/container.tsx (or Section wrapper)            |
| 4. components/ui/card.tsx                                     |
| 5. components/ui/divider.tsx                                  |
| 6. components/ui/link.tsx                                     |
+---------------------------------------------------------------+
        |
        v
PHASE 3: Layout Chrome (pages need navigation + footer)
+---------------------------------------------------------------+
| 1. components/layout/navigation.tsx (desktop)                 |
| 2. components/layout/mobile-menu.tsx (responsive nav)         |
| 3. components/layout/footer.tsx                               |
| 4. app/layout.tsx (root layout composing nav + footer)        |
| 5. lib/data/navigation.ts (nav link definitions)              |
+---------------------------------------------------------------+
        |
        v
PHASE 4: Animation System (sections use animation wrappers)
+---------------------------------------------------------------+
| 1. components/animation/fade-in.tsx                           |
| 2. components/animation/slide-in.tsx                          |
| 3. components/animation/stagger-children.tsx                  |
| 4. components/animation/hover-scale.tsx                       |
+---------------------------------------------------------------+
        |
        v
PHASE 5: Content Data + SVG Assets (sections need content + icons)
+---------------------------------------------------------------+
| 1. lib/data/pillars.ts                                        |
| 2. lib/data/metadata.ts                                       |
| 3. lib/data/values.ts                                         |
| 4. lib/data/case-studies.ts                                   |
| 5. lib/data/testimonials.ts                                   |
| 6. components/svg/ (pillar icons, line motifs, model diagram) |
+---------------------------------------------------------------+
        |
        v
PHASE 6: Page Sections + Pages (can now compose everything)
+---------------------------------------------------------------+
| Build sections in page order:                                 |
|                                                               |
| Homepage sections (7):                                        |
|   hero, problem, solution, pillars-grid,                      |
|   who-we-serve, why-ikigai, cta-section                       |
| --> app/page.tsx                                              |
|                                                               |
| About sections (3):                                           |
|   founder-bio, philosophy, values-row                         |
| --> app/about/page.tsx                                        |
|                                                               |
| Services sections:                                            |
|   service-pillar (x7, data-driven)                            |
| --> app/services/page.tsx                                     |
|                                                               |
| Model sections:                                               |
|   model-diagram, model-flow                                   |
| --> app/model/page.tsx                                        |
|                                                               |
| Impact sections:                                              |
|   case-study-card, testimonials                               |
| --> app/impact/page.tsx                                       |
|                                                               |
| Contact sections:                                             |
|   contact-form, calendar-booking                              |
| --> app/contact/page.tsx                                      |
+---------------------------------------------------------------+
        |
        v
PHASE 7: SEO + Polish
+---------------------------------------------------------------+
| 1. app/sitemap.ts                                             |
| 2. app/robots.ts                                              |
| 3. app/not-found.tsx (custom 404)                             |
| 4. JSON-LD structured data                                    |
| 5. Per-page metadata finalization                             |
| 6. Performance audit (Lighthouse)                             |
| 7. Accessibility audit                                        |
| 8. prefers-reduced-motion support                             |
+---------------------------------------------------------------+
        |
        v
PHASE 8: External Integrations + Deployment
+---------------------------------------------------------------+
| 1. Formspree setup (or chosen form backend)                   |
| 2. Calendly account + embed configuration                     |
| 3. Analytics setup                                            |
| 4. Domain + DNS configuration                                 |
| 5. Vercel/Netlify deployment                                  |
| 6. SSL + performance verification                             |
+---------------------------------------------------------------+
```

**Key dependency insight:** Phases 1-3 are strictly sequential (each depends on the prior). Phases 4 and 5 can be done in parallel (animations and content data are independent). Phase 6 is the bulk of the work and depends on everything above. Phases 7 and 8 are polish/integration that come last.

**Within Phase 6:** Build the homepage first. It exercises every UI primitive, multiple section types, and the full layout. Once the homepage is solid, the other pages go fast because they reuse the same primitives and patterns. The services page is largely data-driven (one `ServicePillar` component rendered 7 times with different data). The contact page is the most unique (form + calendar) but also the smallest.

---

## Sources

- **Next.js Static Exports (v16.1.6, verified 2026-02-11):** Official documentation confirming `output: 'export'` configuration, supported features (Server Components, Client Components, Image Optimization with custom loader, Route Handlers with GET), and unsupported features (dynamic routes without generateStaticParams, cookies, headers, rewrites, redirects, Server Actions, ISR). Confidence: HIGH.
- **Next.js Cache Components / Partial Prerendering (v16.1.6, verified 2026-02-11):** Confirmed but NOT needed for this project. Cache Components requires a server; static export is the right choice here. Documented for completeness. Confidence: HIGH.
- **Framer Motion API (scroll animations, whileInView, viewport):** Based on training data. The whileInView, viewport, and stagger patterns are well-established in the Framer Motion API. Confidence: HIGH (stable API, widely used).
- **Tailwind CSS theme configuration:** Based on training data. Theme extension with custom colors, fontFamily via CSS variables, and responsive breakpoints are core Tailwind features that have been stable across versions. Confidence: HIGH.
- **next/font for font loading:** Based on training data + consistent with verified Next.js docs structure. Self-hosting Google Fonts via next/font/google is a stable Next.js feature. Confidence: HIGH.
- **Formspree, Calendly, Netlify Forms:** Based on training data. These are established services. Specific API details should be verified at implementation time. Confidence: MEDIUM (services exist and work as described, but pricing/API may have changed).
- **Component structure patterns (sections/, ui/, animation/ separation):** Based on established React architecture patterns and Next.js App Router conventions. Confidence: HIGH (well-established patterns).
