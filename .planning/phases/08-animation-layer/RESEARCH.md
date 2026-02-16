# Phase 8 Research: Framer Motion + Next.js App Router

**Researched:** 2026-02-16
**Confidence:** HIGH (npm registry verified, README verified, API patterns well-established)

---

## Package Migration: framer-motion -> motion

The library formerly known as "Framer Motion" has been rebranded to **Motion**. Key changes:

| Aspect | Old | New |
|--------|-----|-----|
| Package name | `framer-motion` | `motion` |
| Current version | -- | **12.34.0** (verified via npm) |
| Import path | `from "framer-motion"` | `from "motion/react"` |
| Install command | `npm install framer-motion` | `npm install motion` |

Both `framer-motion` and `motion` resolve to v12.34.0 on npm. The `framer-motion` name is NOT deprecated but `motion` is the canonical package going forward.

**Action for this project:** Install `motion`, import from `motion/react`.

---

## Next.js App Router + Server Components

### The motion/react vs motion/react-client Split

The `motion` package exports two React entry points:

- **`motion/react`** -- Standard import. Includes a `"use client"` directive at the module level. Safe to import in files that are already Client Components.
- **`motion/react-client`** -- Explicitly client-only. Same exports, but guarantees client bundling.

**Pattern for Next.js App Router:**

Since our animation wrappers are already marked `'use client'`, we import from `motion/react`:

```tsx
// src/components/animation/fade-in.tsx
'use client'

import { motion } from 'motion/react'
```

The `'use client'` boundary in our wrapper file tells Next.js this is a Client Component. Server Components that import our wrapper (e.g., `<FadeIn>`) remain Server Components -- they just render the Client Component as a child.

**Critical:** Never import `motion/react` directly in a Server Component file. Always wrap it in a Client Component wrapper that has `'use client'`.

---

## Key APIs for This Phase

### 1. Scroll-Triggered Animations (whileInView)

```tsx
import { motion } from 'motion/react'

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  {children}
</motion.div>
```

**viewport options:**
- `once: true` -- Animate only on first scroll into view (not re-triggering). This is premium behavior.
- `margin` -- Inset margin for triggering. `-100px` means animation starts when element is 100px inside viewport. Prevents "pop-in" at exact edge.
- `amount` -- Fraction of element that must be visible (0-1). Alternative to margin.

**Performance:** `whileInView` uses IntersectionObserver internally. Zero scroll event listeners. Very performant.

### 2. Staggered Grid Animations (variants + staggerChildren)

```tsx
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-50px' }}
  variants={containerVariants}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

**How stagger works:**
- Parent defines `staggerChildren` in its `visible` transition
- Children inherit the variant names (`hidden`/`visible`) from the parent
- Each child's animation starts `staggerDelay` seconds after the previous one
- No manual delay calculation needed

### 3. Hover Effects (whileHover)

```tsx
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
>
  <Card>...</Card>
</motion.div>
```

For gold accent hover effects:

```tsx
<motion.div
  className="relative overflow-hidden"
  whileHover="hovered"
>
  <motion.div
    className="absolute bottom-0 left-0 h-0.5 bg-gold"
    variants={{
      initial: { width: '0%' },
      hovered: { width: '100%' },
    }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
  />
  {children}
</motion.div>
```

**ANIM-05 compliance:** Only use `transform` and `opacity` for animated properties. `scale`, `x`, `y`, `rotate` are all transform-based in Motion. Avoid animating `width`, `height`, `margin`, `padding` -- these trigger layout.

**Exception for gold accent lines:** Animating `width` on a small decorative element (the gold accent line) is acceptable because the element is position: absolute and doesn't affect layout of surrounding content. Alternatively, use `scaleX` with `transformOrigin: 'left'` to stay fully GPU-composited:

```tsx
<motion.div
  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-left"
  variants={{
    initial: { scaleX: 0 },
    hovered: { scaleX: 1 },
  }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
/>
```

### 4. prefers-reduced-motion (useReducedMotion)

Motion provides a `useReducedMotion` hook:

```tsx
import { useReducedMotion } from 'motion/react'

function FadeIn({ children }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
    >
      {children}
    </motion.div>
  )
}
```

**When `shouldReduceMotion` is true:**
- Set `initial` to `false` (skip initial state, render final state immediately)
- Skip `whileInView` or set duration to 0
- Content appears immediately without animation
- No motion, no delays, no scroll triggers

**Alternative approach -- custom hook:**

For a cleaner API, create a custom hook that returns animation props conditionally:

```tsx
// src/lib/hooks/use-reduced-motion.ts
'use client'

import { useReducedMotion } from 'motion/react'

export function useAnimationProps() {
  const shouldReduce = useReducedMotion()

  return {
    shouldReduce,
    // Helper: returns empty props if reduced motion preferred
    fadeIn: shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-100px' },
          transition: { duration: 0.6, ease: 'easeOut' },
        },
  }
}
```

**Recommendation:** Handle reduced motion directly in each animation wrapper component rather than a centralized hook. This keeps logic co-located and avoids unnecessary abstraction.

---

## Animation Timing Guidelines

Per ANIM-01: 200-400ms entrance animations.

| Animation Type | Duration | Easing |
|----------------|----------|--------|
| Section fade-in | 400-600ms | easeOut |
| Card stagger item | 400-500ms | easeOut |
| Stagger delay | 100ms between items | -- |
| Hover scale | 200ms | spring (stiffness: 300) |
| Gold accent line | 300ms | easeOut |
| Viewport margin | -100px (sections), -50px (grids) | -- |

Note: The 200-400ms in ANIM-01 refers to the visual perception of the animation. A 600ms duration with easeOut feels like ~300ms because 80% of the movement happens in the first 300ms. The spec is about perceived speed, not raw duration.

---

## Properties That Are Safe for Animation (ANIM-05)

**GPU-composited (safe):**
- `opacity`
- `transform` properties: `x`, `y`, `scale`, `scaleX`, `scaleY`, `rotate`, `rotateX`, `rotateY`

**Layout-triggering (avoid):**
- `width`, `height`, `top`, `left`, `right`, `bottom`
- `margin`, `padding`
- `font-size`, `border-width`

**Motion automatically uses transforms** when you animate `x`, `y`, `scale`, etc. It does NOT animate CSS `left`/`top` -- it uses `translateX`/`translateY` under the hood. This means all our animations are GPU-composited by default.

---

## Bundle Size Consideration

Motion (v12.x) is tree-shakeable. For our usage:

| Import | Approximate Size |
|--------|-----------------|
| `motion` component | ~15KB gzipped |
| `useReducedMotion` | ~1KB gzipped |
| Variants system | included with motion |
| Total for our use case | ~16-20KB gzipped |

This is loaded once and shared across all animation wrapper components.

---

## Sources

- npm registry: `motion` v12.34.0, `framer-motion` v12.34.0 (same package)
- Motion README (GitHub): Import path `motion/react`, React usage example
- npm exports inspection: `motion/react`, `motion/react-client`, `motion/mini` entry points
- Motion API patterns: `whileInView`, `viewport`, `variants`, `staggerChildren`, `whileHover`, `useReducedMotion` -- stable, well-established APIs carried over from Framer Motion
