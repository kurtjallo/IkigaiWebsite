// @ts-nocheck
'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { pillars } from '@/lib/data/pillars'
import { fraunces, sourceSans3, newsreader } from './fonts'

/* ─── Color Tokens ─── */
const C = {
  forest: '#2D5F3F',
  forestDark: '#1B3926',
  forestHover: '#244C32',
  cream: '#FFFDF5',
  sage: '#8FAE8B',
  sage50: '#F4F8F3',
  sage100: '#E4EDE2',
  amber: '#DAA520',
  lightGold: '#F0DDA0',
  bark: '#3B2F2F',
  terracotta: '#B87333',
} as const

/* ─── Font helpers ─── */
const fontFraunces = fraunces.variable
const fontSourceSans = sourceSans3.variable
const fontNewsreader = newsreader.variable

const ff = {
  display: `${fraunces.style.fontFamily}, Georgia, serif`,
  body: `${sourceSans3.style.fontFamily}, system-ui, sans-serif`,
  accent: `${newsreader.style.fontFamily}, Georgia, serif`,
}

/* ─── Shared animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

/* ─── SVG Components ─── */

function WavyDivider({ color = C.cream, flip = false }: { color?: string; flip?: boolean }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '60px',
        marginTop: flip ? 0 : '-1px',
        marginBottom: flip ? '-1px' : 0,
        transform: flip ? 'scaleY(-1)' : undefined,
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <path
          d="M0,20 C240,50 480,0 720,30 C960,60 1200,10 1440,25 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

function LeafFlourish({ color = C.amber, size = 24 }: { color?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path
        d="M12 2C8 6 4 10 4 14c0 4 3 6 8 8 5-2 8-4 8-8 0-4-4-8-8-12z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M12 6v14" stroke={color} strokeWidth="1" opacity="0.5" />
      <path d="M8 10c2 1 4 2 4 4" stroke={color} strokeWidth="0.8" opacity="0.4" />
      <path d="M16 10c-2 1-4 2-4 4" stroke={color} strokeWidth="0.8" opacity="0.4" />
    </svg>
  )
}

function OrganicVine({ color = C.amber }: { color?: string }) {
  return (
    <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
      <path
        d="M0,15 C20,5 40,25 60,15 C80,5 100,25 120,15"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="30" cy="10" r="2" fill={color} opacity="0.4" />
      <circle cx="60" cy="15" r="2.5" fill={color} opacity="0.5" />
      <circle cx="90" cy="10" r="2" fill={color} opacity="0.4" />
    </svg>
  )
}

function LeafVenationTexture() {
  return (
    <svg
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.04,
        pointerEvents: 'none',
      }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="venation" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <path d="M100,0 C100,60 100,140 100,200" stroke={C.lightGold} strokeWidth="0.8" fill="none" />
          <path d="M100,40 C130,50 160,40 200,60" stroke={C.lightGold} strokeWidth="0.5" fill="none" />
          <path d="M100,40 C70,50 40,40 0,60" stroke={C.lightGold} strokeWidth="0.5" fill="none" />
          <path d="M100,80 C140,90 170,80 200,100" stroke={C.lightGold} strokeWidth="0.5" fill="none" />
          <path d="M100,80 C60,90 30,80 0,100" stroke={C.lightGold} strokeWidth="0.5" fill="none" />
          <path d="M100,120 C125,130 155,125 200,140" stroke={C.lightGold} strokeWidth="0.5" fill="none" />
          <path d="M100,120 C75,130 45,125 0,140" stroke={C.lightGold} strokeWidth="0.5" fill="none" />
          <path d="M100,160 C135,170 165,165 200,180" stroke={C.lightGold} strokeWidth="0.5" fill="none" />
          <path d="M100,160 C65,170 35,165 0,180" stroke={C.lightGold} strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#venation)" />
    </svg>
  )
}

/* ─── Mycelium Network ─── */
function MyceliumNetwork({ reducedMotion }: { reducedMotion: boolean }) {
  const branches = [
    { x1: 200, y1: 200, cx1: 120, cy1: 100, cx2: 60, cy2: 80, x2: 30, y2: 40 },
    { x1: 200, y1: 200, cx1: 280, cy1: 100, cx2: 340, cy2: 60, x2: 370, y2: 30 },
    { x1: 200, y1: 200, cx1: 100, cy1: 250, cx2: 40, cy2: 300, x2: 20, y2: 360 },
    { x1: 200, y1: 200, cx1: 300, cy1: 250, cx2: 360, cy2: 300, x2: 380, y2: 360 },
    { x1: 200, y1: 200, cx1: 200, cy1: 100, cx2: 200, cy2: 40, x2: 200, y2: 10 },
    { x1: 200, y1: 200, cx1: 200, cy1: 300, cx2: 200, cy2: 360, x2: 200, y2: 390 },
    { x1: 200, y1: 200, cx1: 100, cy1: 180, cx2: 40, cy2: 170, x2: 10, y2: 190 },
    { x1: 200, y1: 200, cx1: 300, cy1: 220, cx2: 360, cy2: 230, x2: 390, y2: 210 },
  ]

  const nodes = [
    { cx: 100, cy: 120, r: 4 },
    { cx: 310, cy: 90, r: 5 },
    { cx: 70, cy: 280, r: 4 },
    { cx: 330, cy: 310, r: 5 },
    { cx: 200, cy: 60, r: 4 },
    { cx: 200, cy: 340, r: 4 },
    { cx: 60, cy: 185, r: 3 },
    { cx: 340, cy: 215, r: 3 },
    { cx: 150, cy: 150, r: 3 },
    { cx: 260, cy: 150, r: 3 },
    { cx: 150, cy: 270, r: 3 },
    { cx: 260, cy: 270, r: 3 },
  ]

  return (
    <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={C.amber} stopOpacity="0.6" />
          <stop offset="100%" stopColor={C.amber} stopOpacity="0" />
        </radialGradient>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Center glow */}
      <circle cx="200" cy="200" r="60" fill="url(#glow)" />

      {/* Branches */}
      {branches.map((b, i) => (
        <motion.path
          key={i}
          d={`M${b.x1},${b.y1} C${b.cx1},${b.cy1} ${b.cx2},${b.cy2} ${b.x2},${b.y2}`}
          stroke={C.lightGold}
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          initial={reducedMotion ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
        />
      ))}

      {/* Sub-branches */}
      {branches.map((b, i) => (
        <motion.path
          key={`sub-${i}`}
          d={`M${b.cx1},${b.cy1} C${b.cx1 + (Math.random() - 0.5) * 40},${b.cy1 + (Math.random() - 0.5) * 40} ${b.cx2 + (Math.random() - 0.5) * 30},${b.cy2 + (Math.random() - 0.5) * 30} ${(b.cx2 + b.x2) / 2},${(b.cy2 + b.y2) / 2}`}
          stroke={C.sage}
          strokeWidth="0.6"
          fill="none"
          opacity="0.3"
          strokeLinecap="round"
          initial={reducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 + i * 0.1, ease: 'easeOut' }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill={C.amber}
          filter="url(#nodeGlow)"
          initial={reducedMotion ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5 + i * 0.08, ease: 'easeOut' }}
        />
      ))}

      {/* Center node */}
      <motion.circle
        cx="200"
        cy="200"
        r="8"
        fill={C.amber}
        filter="url(#nodeGlow)"
        initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      />

      {/* Dotted connections between nodes */}
      {[
        [0, 8],
        [1, 9],
        [2, 10],
        [3, 11],
        [8, 9],
        [10, 11],
      ].map(([a, b], i) => (
        <motion.line
          key={`conn-${i}`}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke={C.lightGold}
          strokeWidth="0.5"
          strokeDasharray="3 4"
          opacity="0.3"
          initial={reducedMotion ? { opacity: 0.3 } : { opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.8, delay: 2 + i * 0.1 }}
        />
      ))}
    </svg>
  )
}

/* ─── Growth Ring Model SVG ─── */
function GrowthRingModel({ reducedMotion }: { reducedMotion: boolean }) {
  const rings = [
    { label: 'Blueprint', radius: 60, color: C.sage },
    { label: 'Build', radius: 110, color: '#6E9B6A' },
    { label: 'Strengthen', radius: 160, color: C.forest },
    { label: 'Sustain', radius: 210, color: C.forestDark },
  ]

  const pillarBranches = [
    { label: 'Strategic', angle: 0 },
    { label: 'Governance', angle: 51.4 },
    { label: 'Operational', angle: 102.8 },
    { label: 'Program', angle: 154.3 },
    { label: 'Leadership', angle: 205.7 },
    { label: 'Accountability', angle: 257.1 },
    { label: 'Community', angle: 308.5 },
  ]

  const cx = 300
  const cy = 300

  function polarToCart(angle: number, r: number) {
    const rad = (angle - 90) * (Math.PI / 180)
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
  }

  // Generate slightly wobbly ring paths
  function wobblyCircle(radius: number, seed: number) {
    const points: string[] = []
    const segments = 60
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      const wobble = Math.sin(angle * 3 + seed) * (radius * 0.02) + Math.cos(angle * 5 + seed * 2) * (radius * 0.015)
      const r = radius + wobble
      const x = cx + r * Math.cos(angle)
      const y = cy + r * Math.sin(angle)
      if (i === 0) points.push(`M${x},${y}`)
      else points.push(`L${x},${y}`)
    }
    return points.join(' ') + ' Z'
  }

  return (
    <svg viewBox="0 0 600 600" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} role="img" aria-label="Growth Ring Model showing the Ikigai Architecture framework with 4 phases and 7 pillars radiating from a central purpose">
      <defs>
        <filter id="ringGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Concentric rings */}
      {rings.map((ring, i) => (
        <motion.path
          key={ring.label}
          d={wobblyCircle(ring.radius, i * 1.5)}
          fill="none"
          stroke={ring.color}
          strokeWidth={i === 3 ? 2.5 : 1.5}
          opacity={0.4 + i * 0.15}
          initial={reducedMotion ? {} : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 + i * 0.15 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.5, delay: i * 0.3, ease: 'easeOut' }}
        />
      ))}

      {/* Ring labels */}
      {rings.map((ring, i) => {
        const labelPos = polarToCart(315, ring.radius)
        return (
          <motion.text
            key={`label-${ring.label}`}
            x={labelPos.x + 6}
            y={labelPos.y - 6}
            fill={C.sage}
            fontSize="10"
            fontFamily={ff.accent}
            fontStyle="italic"
            opacity="0.7"
            initial={reducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + i * 0.2 }}
          >
            {ring.label}
          </motion.text>
        )
      })}

      {/* Center */}
      <motion.circle
        cx={cx}
        cy={cy}
        r="28"
        fill={C.forest}
        stroke={C.amber}
        strokeWidth="2"
        initial={reducedMotion ? {} : { scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      />
      <text
        x={cx}
        y={cy + 1}
        textAnchor="middle"
        dominantBaseline="central"
        fill={C.cream}
        fontSize="10"
        fontFamily={ff.display}
        fontWeight="700"
      >
        Purpose
      </text>

      {/* Pillar branches */}
      {pillarBranches.map((pb, i) => {
        const inner = polarToCart(pb.angle, 30)
        const outer = polarToCart(pb.angle, 230)
        const mid1 = polarToCart(pb.angle + (i % 2 === 0 ? 3 : -3), 100)
        const mid2 = polarToCart(pb.angle + (i % 2 === 0 ? -2 : 2), 170)
        const labelPt = polarToCart(pb.angle, 248)

        // Nodes where branch crosses rings
        const ringNodes = rings.map((ring) => polarToCart(pb.angle, ring.radius))

        return (
          <g key={pb.label}>
            <motion.path
              d={`M${inner.x},${inner.y} C${mid1.x},${mid1.y} ${mid2.x},${mid2.y} ${outer.x},${outer.y}`}
              stroke={C.amber}
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
              initial={reducedMotion ? {} : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8 + i * 0.1, ease: 'easeOut' }}
            />

            {/* Ring intersection nodes */}
            {ringNodes.map((node, j) => (
              <motion.circle
                key={`node-${i}-${j}`}
                cx={node.x}
                cy={node.y}
                r="3.5"
                fill={C.amber}
                opacity="0.6"
                initial={reducedMotion ? {} : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.5 + i * 0.08 + j * 0.05 }}
              />
            ))}

            {/* Label */}
            <motion.text
              x={labelPt.x}
              y={labelPt.y}
              textAnchor="middle"
              dominantBaseline="central"
              fill={C.bark}
              fontSize="11"
              fontFamily={ff.body}
              fontWeight="600"
              initial={reducedMotion ? {} : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2 + i * 0.1 }}
              style={{
                transform: `rotate(${pb.angle > 90 && pb.angle < 270 ? pb.angle + 180 : pb.angle}deg)`,
                transformOrigin: `${labelPt.x}px ${labelPt.y}px`,
              }}
            >
              {pb.label}
            </motion.text>
          </g>
        )
      })}

      {/* Mycelium connections between adjacent branches */}
      {pillarBranches.map((pb, i) => {
        const next = pillarBranches[(i + 1) % pillarBranches.length]
        const pt1 = polarToCart(pb.angle, 130)
        const pt2 = polarToCart(next.angle, 130)
        const midAngle = (pb.angle + next.angle) / 2
        const ctrl = polarToCart(midAngle, 100)
        return (
          <motion.path
            key={`myc-${i}`}
            d={`M${pt1.x},${pt1.y} Q${ctrl.x},${ctrl.y} ${pt2.x},${pt2.y}`}
            stroke={C.sage}
            strokeWidth="0.6"
            strokeDasharray="2 4"
            fill="none"
            opacity="0.3"
            initial={reducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ delay: 2.5 + i * 0.05 }}
          />
        )
      })}
    </svg>
  )
}

/* ─── Pillar Icon ─── */
function PillarIconCircle({ slug }: { slug: string }) {
  const icons: Record<string, React.ReactElement> = {
    strategic: (
      <path d="M12 2l3 6 6.5 1-4.7 4.6 1.1 6.4L12 17l-5.9 3 1.1-6.4L2.5 9l6.5-1z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    ),
    governance: (
      <>
        <path d="M3 21h18M5 21V11l7-7 7 7v10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="7" stroke="currentColor" strokeWidth="1.2" fill="none" rx="1" />
      </>
    ),
    operational: (
      <>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
    program: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="1.2" />
      </>
    ),
    leadership: (
      <>
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M5.5 21c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </>
    ),
    accountability: (
      <>
        <path d="M3 20h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="5" y="12" width="3" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <rect x="10.5" y="7" width="3" height="13" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <rect x="16" y="3" width="3" height="17" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </>
    ),
    community: (
      <>
        <circle cx="8" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M2 20c0-2.8 2.7-5 6-5 1.2 0 2.3.3 3.2.7M12.8 15.7c.9-.4 2-.7 3.2-.7 3.3 0 6 2.2 6 5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      </>
    ),
  }

  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        backgroundColor: C.sage100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: C.forest,
        flexShrink: 0,
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {icons[slug] || icons.strategic}
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   Section Components
   ═══════════════════════════════════════════════════ */

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['About', 'Services', 'The Model', 'Impact', 'Contact']

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(255,253,245,0.92)' : C.cream,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? `1px solid ${C.sage100}` : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              fontFamily: ff.display,
              fontWeight: 700,
              fontSize: '1.5rem',
              color: C.forest,
              letterSpacing: '0.08em',
              fontVariationSettings: "'WONK' 1",
            }}
          >
            IKIGAI
          </span>
          <LeafFlourish color={C.sage} size={18} />
        </div>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="concept2-desktop-nav"
        >
          {links.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: ff.body,
                fontSize: '0.8rem',
                fontWeight: 500,
                color: C.bark,
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.forest)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.bark)}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            style={{
              fontFamily: ff.body,
              fontSize: '0.8rem',
              fontWeight: 600,
              color: C.bark,
              backgroundColor: C.amber,
              padding: '0.5rem 1.5rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              transition: 'background-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#C89620'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = C.amber
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="concept2-mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: C.forest,
          }}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="concept2-mobile-menu"
          style={{
            backgroundColor: C.cream,
            borderTop: `1px solid ${C.sage100}`,
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: ff.body,
                fontSize: '1rem',
                fontWeight: 500,
                color: C.bark,
                textDecoration: 'none',
                padding: '0.5rem 0',
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            style={{
              fontFamily: ff.body,
              fontSize: '0.9rem',
              fontWeight: 600,
              color: C.bark,
              backgroundColor: C.amber,
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: '0.5rem',
            }}
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </nav>
  )
}

/* ─── Hero ─── */
function HeroSection({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section
      style={{
        minHeight: '85vh',
        background: `linear-gradient(135deg, ${C.forest} 0%, ${C.forestDark} 100%)`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '72px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '4rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          width: '100%',
          position: 'relative',
          zIndex: 2,
        }}
        className="concept2-hero-inner"
      >
        {/* Left content */}
        <div style={{ flex: '0 0 60%', maxWidth: '60%' }} className="concept2-hero-left">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: ff.accent,
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: C.lightGold,
              marginBottom: '1rem',
              letterSpacing: '0.02em',
            }}
          >
            Organizational Architects
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            style={{
              fontFamily: ff.display,
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.1,
              color: C.cream,
              marginBottom: '1.5rem',
              fontVariationSettings: "'WONK' 1, 'SOFT' 50",
            }}
          >
            Growing Purpose-Driven
            <br />
            Organizations to{' '}
            <span style={{ color: C.lightGold }}>Thrive</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: ff.body,
              fontSize: '1.15rem',
              lineHeight: 1.7,
              color: C.sage100,
              maxWidth: '520px',
              marginBottom: '2rem',
            }}
          >
            Like a living ecosystem, your organization needs strong roots, interconnected
            systems, and the right conditions to flourish. We architect the structures
            that let your mission grow.
          </motion.p>
          <motion.a
            href="#"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
            whileHover={reducedMotion ? {} : { scale: 1.03, y: -2 }}
            whileTap={reducedMotion ? {} : { scale: 0.98 }}
            style={{
              display: 'inline-block',
              fontFamily: ff.body,
              fontSize: '0.9rem',
              fontWeight: 600,
              color: C.bark,
              backgroundColor: C.amber,
              padding: '0.85rem 2.25rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              boxShadow: `0 4px 20px rgba(59, 47, 47, 0.3)`,
            }}
          >
            Schedule a Strategic Conversation
          </motion.a>
        </div>

        {/* Right: mycelium */}
        <div style={{ flex: '0 0 40%', maxWidth: '40%' }} className="concept2-hero-right">
          <MyceliumNetwork reducedMotion={reducedMotion} />
        </div>
      </div>

      {/* Wavy divider at bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3 }}>
        <WavyDivider color={C.cream} />
      </div>
    </section>
  )
}

/* ─── Problem ─── */
function ProblemSection({ reducedMotion }: { reducedMotion: boolean }) {
  const painPoints = [
    'Strategic plans gathering dust on shelves',
    'Governance confusion and passive boards',
    'Operational burnout and misalignment',
    'Programs drifting without measurable impact',
    'Leadership stretched thin, succession gaps widening',
  ]

  return (
    <section style={{ backgroundColor: C.cream, padding: '6rem 0' }}>
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeIn} style={{ marginBottom: '1.5rem' }}>
            <OrganicVine color={C.amber} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: ff.display,
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: C.bark,
              marginBottom: '1rem',
              fontVariationSettings: "'WONK' 1, 'SOFT' 50",
            }}
          >
            Strong Missions.{' '}
            <span style={{ color: C.forest }}>Fragile Structures.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: ff.body,
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: C.bark,
              maxWidth: '640px',
              marginBottom: '3rem',
              opacity: 0.85,
            }}
          >
            Too many purpose-driven organizations are held together by heroic effort
            rather than sustainable systems. The mission is clear, but the infrastructure
            to deliver on it is cracking under pressure.
          </motion.p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
              maxWidth: '640px',
            }}
          >
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontFamily: ff.body,
                  fontSize: '1rem',
                  color: C.bark,
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '24px',
                    height: '2px',
                    backgroundColor: C.amber,
                    flexShrink: 0,
                    borderRadius: '1px',
                  }}
                />
                {point}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Solution ─── */
function SolutionSection({ reducedMotion }: { reducedMotion: boolean }) {
  const phases = [
    {
      name: 'Blueprint',
      icon: '🌱',
      description: 'Plant the seeds. Assess, align, and design the foundation.',
    },
    {
      name: 'Build',
      icon: '🌿',
      description: 'Grow the roots. Develop systems, structures, and capacity.',
    },
    {
      name: 'Strengthen',
      icon: '🌳',
      description: 'Deepen the canopy. Refine, integrate, and mature.',
    },
    {
      name: 'Sustain',
      icon: '🌲',
      description: 'Evergreen resilience. Monitor, adapt, and thrive.',
    },
  ]

  return (
    <section style={{ backgroundColor: C.sage50, padding: '6rem 0', position: 'relative' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeIn} style={{ marginBottom: '1.5rem' }}>
            <OrganicVine color={C.terracotta} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: ff.display,
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: C.bark,
              marginBottom: '0.5rem',
              fontVariationSettings: "'WONK' 1, 'SOFT' 50",
            }}
          >
            We Are Organizational Architects.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: ff.accent,
              fontStyle: 'italic',
              fontSize: '1.05rem',
              color: C.forest,
              marginBottom: '3rem',
            }}
          >
            The Ikigai Architecture Model&trade; &mdash; from seed to canopy.
          </motion.p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              position: 'relative',
            }}
            className="concept2-phases-grid"
          >
            {/* Connecting vine */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: '12.5%',
                right: '12.5%',
                height: '2px',
                zIndex: 0,
              }}
              className="concept2-phase-line"
            >
              <svg width="100%" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path
                  d="M0,4 C25,1 50,7 75,3 C87.5,1 100,5 100,4"
                  stroke={C.sage}
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {phases.map((phase, i) => (
              <motion.div
                key={phase.name}
                variants={fadeUp}
                style={{
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    border: `2px solid ${C.sage}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.5rem',
                    boxShadow: `0 4px 12px rgba(59, 47, 47, 0.08)`,
                  }}
                >
                  {phase.icon}
                </div>
                <h3
                  style={{
                    fontFamily: ff.display,
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    color: C.forest,
                    marginBottom: '0.5rem',
                  }}
                >
                  {phase.name}
                </h3>
                <p
                  style={{
                    fontFamily: ff.body,
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: C.bark,
                    opacity: 0.8,
                  }}
                >
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Pillars Grid ─── */
function PillarsGridSection({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section style={{ backgroundColor: C.cream, padding: '6rem 0' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div
            variants={fadeIn}
            style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          >
            <OrganicVine color={C.amber} />
            <h2
              style={{
                fontFamily: ff.display,
                fontWeight: 700,
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: C.bark,
                marginTop: '1rem',
                marginBottom: '0.5rem',
                fontVariationSettings: "'WONK' 1, 'SOFT' 50",
              }}
            >
              Seven Pillars of Architecture
            </h2>
            <p
              style={{
                fontFamily: ff.accent,
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: C.forest,
              }}
            >
              An interconnected ecosystem of organizational strength.
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
            }}
            className="concept2-pillars-grid"
          >
            {pillars.map((pillar, i) => (
              <PillarCard key={pillar.slug} pillar={pillar} index={i} reducedMotion={reducedMotion} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PillarCard({
  pillar,
  index,
  reducedMotion,
}: {
  pillar: (typeof pillars)[0]
  index: number
  reducedMotion: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '2rem',
        border: `1px solid ${C.sage100}`,
        boxShadow: hovered
          ? `0 8px 32px rgba(59, 47, 47, 0.12)`
          : `0 2px 12px rgba(59, 47, 47, 0.06)`,
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        transform: hovered && !reducedMotion ? 'translateY(-4px)' : 'translateY(0)',
        overflow: 'hidden',
        gridColumn: index >= 4 ? undefined : undefined,
      }}
    >
      {/* Vine hover accent */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '1rem',
          bottom: '1rem',
          width: '3px',
          backgroundColor: C.amber,
          borderRadius: '0 3px 3px 0',
          transform: hovered ? 'scaleY(1)' : 'scaleY(0)',
          transition: 'transform 0.3s ease',
          transformOrigin: 'top',
        }}
      />

      <PillarIconCircle slug={pillar.slug} />
      <h4
        style={{
          fontFamily: ff.display,
          fontWeight: 700,
          fontSize: '1.15rem',
          color: C.bark,
          marginTop: '1rem',
          marginBottom: '0.25rem',
        }}
      >
        {pillar.title}
      </h4>
      <p
        style={{
          fontFamily: ff.accent,
          fontStyle: 'italic',
          fontSize: '0.9rem',
          color: C.forest,
          marginBottom: '0.75rem',
        }}
      >
        {pillar.subtitle}
      </p>
      <p
        style={{
          fontFamily: ff.body,
          fontSize: '0.9rem',
          lineHeight: 1.65,
          color: C.bark,
          opacity: 0.8,
        }}
      >
        {pillar.description.slice(0, 120)}...
      </p>
      <a
        href="#"
        style={{
          display: 'inline-block',
          fontFamily: ff.body,
          fontSize: '0.8rem',
          fontWeight: 600,
          color: C.forest,
          marginTop: '1rem',
          textDecoration: 'none',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = C.amber)}
        onMouseLeave={(e) => (e.currentTarget.style.color = C.forest)}
      >
        Learn More &rarr;
      </a>
    </motion.div>
  )
}

/* ─── Growth Ring Model Section ─── */
function GrowthRingSection({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section style={{ backgroundColor: C.sage50, padding: '6rem 0', position: 'relative' }}>
      {/* Wavy top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, transform: 'translateY(-99%)' }}>
        <WavyDivider color={C.sage50} />
      </div>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          style={{ textAlign: 'center' }}
        >
          <motion.div variants={fadeIn} style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <OrganicVine color={C.terracotta} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: ff.display,
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: C.bark,
              marginBottom: '0.5rem',
              fontVariationSettings: "'WONK' 1, 'SOFT' 50",
            }}
          >
            The Growth Ring Model
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: ff.accent,
              fontStyle: 'italic',
              fontSize: '1.05rem',
              color: C.forest,
              marginBottom: '3rem',
              maxWidth: '560px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Like rings of a tree, each phase builds upon the last &mdash; strengthening the whole
            from core to canopy.
          </motion.p>

          <motion.div variants={fadeIn} style={{ display: 'flex', justifyContent: 'center' }}>
            <GrowthRingModel reducedMotion={reducedMotion} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTASection({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <section
      style={{
        backgroundColor: C.forestDark,
        position: 'relative',
        padding: '6rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Wavy top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, transform: 'translateY(-99%)', zIndex: 2 }}>
        <WavyDivider color={C.forestDark} />
      </div>

      {/* Leaf venation texture */}
      <LeafVenationTexture />

      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: ff.accent,
              fontStyle: 'italic',
              fontSize: '1.05rem',
              color: C.lightGold,
              marginBottom: '1rem',
            }}
          >
            Ready to take root?
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: ff.display,
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: C.cream,
              marginBottom: '1.25rem',
              fontVariationSettings: "'WONK' 1, 'SOFT' 50",
            }}
          >
            Let&apos;s Architect Your Organization.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: ff.body,
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: C.sage100,
              marginBottom: '2.5rem',
              maxWidth: '480px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Every thriving ecosystem begins with a single conversation. Let&apos;s
            explore how to grow your organization from the roots up.
          </motion.p>
          <motion.a
            href="#"
            variants={fadeUp}
            whileHover={reducedMotion ? {} : { scale: 1.03, y: -2 }}
            whileTap={reducedMotion ? {} : { scale: 0.98 }}
            style={{
              display: 'inline-block',
              fontFamily: ff.body,
              fontSize: '0.9rem',
              fontWeight: 600,
              color: C.bark,
              backgroundColor: C.amber,
              padding: '1rem 2.5rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              boxShadow: `0 4px 24px rgba(59, 47, 47, 0.3)`,
            }}
          >
            Book Your Strategy Call
          </motion.a>
        </motion.div>
      </div>

      {/* Wavy bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2 }}>
        <WavyDivider color={C.bark} />
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: C.bark,
        padding: '3rem 0 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              fontFamily: ff.display,
              fontWeight: 700,
              fontSize: '1.25rem',
              color: C.cream,
              letterSpacing: '0.08em',
            }}
          >
            IKIGAI
          </span>
          <LeafFlourish color={C.sage} size={16} />
        </div>
        <p
          style={{
            fontFamily: ff.body,
            fontSize: '0.8rem',
            color: C.sage,
          }}
        >
          &copy; {new Date().getFullYear()} Ikigai Consulting Group. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════════════
   Page Component
   ═══════════════════════════════════════════════════ */

export default function Concept2Page() {
  const prefersReducedMotion = useReducedMotion()
  const reducedMotion = prefersReducedMotion ?? false

  return (
    <div
      className={`${fontFraunces} ${fontSourceSans} ${fontNewsreader}`}
      style={{
        minHeight: '100vh',
        backgroundColor: C.cream,
        color: C.bark,
      }}
    >
      <style>{`
        /* Responsive overrides */
        @media (max-width: 1024px) {
          .concept2-desktop-nav { display: none !important; }
          .concept2-mobile-menu-btn { display: block !important; }
          .concept2-hero-inner { flex-direction: column !important; }
          .concept2-hero-left { flex: 1 1 100% !important; max-width: 100% !important; }
          .concept2-hero-right { flex: 1 1 100% !important; max-width: 320px !important; margin: 0 auto; }
          .concept2-pillars-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .concept2-phases-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .concept2-phase-line { display: none !important; }
        }
        @media (max-width: 640px) {
          .concept2-pillars-grid { grid-template-columns: 1fr !important; }
          .concept2-phases-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Nav />
      <HeroSection reducedMotion={reducedMotion} />
      <ProblemSection reducedMotion={reducedMotion} />
      <SolutionSection reducedMotion={reducedMotion} />
      <PillarsGridSection reducedMotion={reducedMotion} />
      <GrowthRingSection reducedMotion={reducedMotion} />
      <CTASection reducedMotion={reducedMotion} />
      <Footer />
    </div>
  )
}
