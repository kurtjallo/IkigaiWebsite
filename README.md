# Ikigai Consulting Group — Website

Marketing and service website for **Ikigai Consulting Group**, an organizational consulting firm serving Ontario's NGO ecosystem. Built with Next.js and deployed as a static export.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 4 (CSS-first config via `@theme`) |
| Animation | Motion v12 (`motion/react`) |
| Icons | Lucide React + custom SVGs |
| Forms | Formspree |
| Booking | react-calendly |
| Fonts | Playfair Display + Inter (via `next/font`) |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages + metadata
│   ├── about/
│   ├── contact/
│   ├── impact/
│   ├── model/
│   ├── services/
│   ├── privacy/
│   ├── globals.css         # Design tokens (@theme, CSS variables)
│   └── layout.tsx          # Root layout (Nav, Footer, JSON-LD)
├── components/
│   ├── animation/          # FadeIn, StaggerChildren, HoverAccent
│   ├── layout/             # Navigation, MobileMenu, SkipNav, Footer
│   ├── sections/           # Page-level section components
│   ├── svg/                # Logo, PillarIcon, decorative SVGs
│   └── ui/                 # Button, Card, Container, Section, etc.
└── lib/
    ├── data/               # Content data (pillars, case studies, etc.)
    ├── fonts.ts
    ├── shared.tsx          # Shared section components (CTASection)
    └── utils.ts            # cn() utility (clsx + tailwind-merge)
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage |
| `/about` | Founder bio and company values |
| `/services` | 7-pillar accordion services |
| `/model` | Ikigai Architecture Model explainer |
| `/impact` | Case studies and client results |
| `/contact` | Contact form and Calendly booking |
| `/privacy` | PIPEDA-compliant privacy policy |

---

## Design System

- **Colors:** Hunter Green, Gold, Bone/Parchment, Black
- **Typography:** Playfair Display (headings) + Inter (body)
- **Gold text on dark backgrounds** uses `text-gold-200` (#EBD399) for WCAG AA compliance
- All design tokens are defined in `src/app/globals.css` under `@theme`

---

## Accessibility

- Skip navigation link targeting `#main-content`
- ARIA roles and labels on all interactive components
- Accordion services section uses `aria-expanded` / `aria-controls`
- Animations respect `prefers-reduced-motion`
- Automated checks via `@axe-core/cli`

---

## License

All rights reserved. The Ikigai Architecture Model is proprietary intellectual property of Ikigai Consulting Group.
