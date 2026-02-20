# Ikigai Consulting Group

Marketing website for **Ikigai Consulting Group**, an organizational consulting firm serving Ontario's nonprofit ecosystem.

## Tech Stack

| Area | Tooling |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript 5 |
| Styling | Inline styles + Tailwind CSS 4 theme |
| Animation | Motion (motion/react) |
| Fonts | Instrument Serif, IBM Plex Sans, IBM Plex Mono |
| Forms | Formspree |
| SEO | Sitemap, robots.txt, Open Graph, JSON-LD |

## Getting Started

```bash
npm ci
cp .env.example .env.local   # then fill in values
npm run dev
```

## Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Contact form submission endpoint |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendar booking link |

## Deployment

Static export -- deploy the `out/` directory to any static host.

```bash
npm run build
```

On Vercel, add the environment variables above in Project Settings and deploy with defaults.

## License

All rights reserved. Code, content, and brand assets are proprietary to Ikigai Consulting Group.
