# Phase 3 Research: Content Data + Brand Assets

**Researched:** 2026-02-16
**Confidence:** HIGH (Next.js favicon/OG docs verified via official v16.1.6 docs; SVG techniques are well-established)

---

## SVG Wordmark Logo (Programmatic)

**Approach: React SVG component using `<text>` elements**

For a text-based wordmark (no pictorial mark), the cleanest approach is an SVG React component that renders `<text>` elements with the brand fonts. This avoids rasterization issues and scales perfectly at any size.

Key techniques:
- Use `<svg>` with `viewBox` for responsive scaling
- Use `<text>` elements with `fontFamily` matching brand fonts (Playfair Display for "IKIGAI", Inter for "CONSULTING GROUP")
- Include a decorative gold accent element (line, pillar, or geometric shape)
- Accept `className` prop for Tailwind color theming
- The SVG component can render in navigation, footer, and favicon contexts

**Why not a raster logo:** The wordmark needs to render at various sizes (navigation ~40px height, footer, OG images). SVG scales perfectly. A raster PNG would need multiple sizes and look blurry on high-DPI displays.

**Font embedding caveat:** SVG `<text>` elements using web fonts require the font to be loaded. Since we're using next/font which self-hosts and sets CSS variables, the SVG text will use the font when rendered in-browser. For the OG image (rendered via `next/og` ImageResponse), we'll load the font file directly.

---

## Favicon Strategy (Next.js App Router)

**Verified against Next.js v16.1.6 official docs.**

Next.js App Router uses file conventions for favicons and icons:

| File | Location | Purpose |
|------|----------|---------|
| `favicon.ico` | `src/app/favicon.ico` | Classic favicon for browser tabs |
| `icon.tsx` | `src/app/icon.tsx` | Programmatic icon generation (32x32 PNG) |
| `apple-icon.tsx` | `src/app/apple-icon.tsx` | Apple touch icon (180x180 PNG) |

**Recommended approach: Programmatic generation via `ImageResponse`**

Using `next/og`'s `ImageResponse` to generate icons programmatically:
- No need to maintain separate image files
- Brand colors are defined once in the generation code
- Icons update automatically if brand changes
- Generated at build time and cached (static optimization)

**Sizes needed:**
- favicon.ico: 48x48 (covers 16x16, 32x32, 48x48 -- modern browsers downscale)
- icon.png: 32x32 (via `icon.tsx`)
- apple-touch-icon: 180x180 (via `apple-icon.tsx`)

**Design for favicon:** A simple "I" letterform in Playfair Display on a hunter green background with a subtle gold accent. Favicons must be recognizable at 16x16, so keep it minimal -- a single letter or simple geometric mark.

---

## Open Graph Image Strategy

**Verified against Next.js v16.1.6 official docs.**

Using `opengraph-image.tsx` file convention with `ImageResponse` from `next/og`:

- Place `opengraph-image.tsx` in `src/app/` for the default OG image
- Size: 1200x630 pixels (standard OG image dimensions)
- Generated at build time, cached as static
- Can load custom fonts via `readFile` from the filesystem

**Design:** Hunter green background, gold accent line, "Ikigai Consulting Group" wordmark text, "Organizational Architects for Purpose-Driven Organizations" tagline. Clean, minimal -- matches brand aesthetic.

**Font loading for OG generation:** The `ImageResponse` renderer (Satori) requires font files to be loaded explicitly. Download the Playfair Display and Inter font files and load them via `readFile` at generation time. These can be placed in an `assets/fonts/` directory.

**IMPORTANT for static export:** `opengraph-image.tsx` and `icon.tsx` are special Route Handlers. They work with `output: 'export'` because they're statically optimized at build time (no dynamic data). Verified: these file conventions generate static files during `next build`.

---

## Architectural Line Drawing SVG Patterns

**Approach: React SVG components with geometric line art**

Architectural line drawings for this project should evoke:
- Blueprint grid lines and construction geometry
- Column/pillar outlines
- Structural frameworks and scaffolding
- Clean geometric patterns (not organic/flowing)

**SVG techniques for architectural motifs:**

1. **Line patterns:** `<line>` and `<polyline>` elements with `stroke` and no `fill`. Thin strokes (1-2px) for elegance.

2. **Grid/blueprint patterns:** `<pattern>` element for repeating grid backgrounds. Subtle, low-opacity grid lines suggest architectural blueprints.

3. **Pillar/column shapes:** Simple geometric columns using `<rect>` with optional `<line>` details for fluting. Each pillar icon represents one of the 7 organizational pillars.

4. **Structural frameworks:** Connected lines forming triangulated structures (trusses, frameworks) using `<path>` with `d` attribute.

5. **Corner accents:** L-shaped bracket decorations at section corners using `<path>` elements.

**Color strategy:**
- On light backgrounds: `stroke` in hunter-green-200 or gold/30 (very subtle)
- On dark backgrounds: `stroke` in white/10 or gold/20
- Always decorative, never competing with content
- Accept `className` for Tailwind color control

**7 Pillar Icons -- Design Direction:**

Each icon should be a minimal line-art representation of its concept:

| Pillar | Icon Concept | SVG Elements |
|--------|-------------|--------------|
| Strategic | Compass/direction arrows | Intersecting lines with arrowheads |
| Governance | Balanced scale or gavel outline | Simple geometric balance |
| Operational | Interlocking gears (2-3, minimal) | Circles with tooth outlines |
| Program | Flowchart/connected nodes | Circles connected by lines |
| Leadership | Star/north star | Geometric star with radiating lines |
| Accountability | Target/crosshair | Concentric circles with crosshair |
| Community | Connected people/network | Nodes in a network pattern |

All icons: 24x24 viewBox, consistent 1.5-2px stroke width, `currentColor` for stroke to inherit text color via Tailwind.

---

## Sources

| Source | Verified | Confidence |
|--------|----------|------------|
| Next.js favicon/icon docs (v16.1.6) | 2026-02-16 via WebFetch | HIGH |
| Next.js opengraph-image docs (v16.1.6) | 2026-02-16 via WebFetch | HIGH |
| SVG architectural patterns | Training data (well-established techniques) | HIGH |
| `next/og` ImageResponse API | Consistent with verified Next.js docs | HIGH |
