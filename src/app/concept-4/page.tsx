// @ts-nocheck
'use client'

import { useId, useRef } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion, useInView } from 'motion/react'
import { pillars } from '@/lib/data/pillars'
import { spaceGrotesk, dmSans, jetbrainsMono } from './fonts'

/* ─── COLOR TOKENS ──────────────────────────────────────────────── */
const C = {
  emerald: '#2E6B4F',
  teal: '#1A535C',
  gold: '#C8A951',
  goldLight: '#EDD9A3',
  white: '#FFFFFF',
  ice: '#F4F7F5',
  slate700: '#334155',
  slate500: '#64748B',
  slate300: '#CBD5E1',
  slate100: '#F1F5F9',
  charcoal: '#1E293B',
}

const PILLAR_COLORS = [
  '#2E6B4F', // Strategic  - hexagon
  '#1A535C', // Governance - octagon
  '#5B6E3A', // Operational - square
  '#8B6914', // Program    - triangle
  '#6B3A5B', // Leadership - diamond
  '#3A5B6B', // Accountability - pentagon
  '#6B4F2E', // Community  - circle
]

const PILLAR_SHAPES = [
  'hexagon',
  'octagon',
  'square',
  'triangle',
  'diamond',
  'pentagon',
  'circle',
] as const

const PILLAR_LABELS = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7']

const HOVER_ROTATIONS = [30, 22.5, 45, 60, 45, 36, 360]

/* ─── GEOMETRIC SHAPE SVGs ──────────────────────────────────────── */
function GeometricShape({
  shape,
  color,
  size = 40,
}: {
  shape: (typeof PILLAR_SHAPES)[number]
  color: string
  size?: number
}) {
  const vb = '0 0 40 40'
  const sw = 2
  const common = { fill: 'none', stroke: color, strokeWidth: sw, strokeLinejoin: 'round' as const }

  switch (shape) {
    case 'hexagon':
      return (
        <svg width={size} height={size} viewBox={vb} aria-hidden="true">
          <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" {...common} />
        </svg>
      )
    case 'octagon':
      return (
        <svg width={size} height={size} viewBox={vb} aria-hidden="true">
          <polygon points="13,2 27,2 38,13 38,27 27,38 13,38 2,13 2,27" {...common} />
        </svg>
      )
    case 'square':
      return (
        <svg width={size} height={size} viewBox={vb} aria-hidden="true">
          <rect x="4" y="4" width="32" height="32" {...common} />
        </svg>
      )
    case 'triangle':
      return (
        <svg width={size} height={size} viewBox={vb} aria-hidden="true">
          <polygon points="20,3 38,37 2,37" {...common} />
        </svg>
      )
    case 'diamond':
      return (
        <svg width={size} height={size} viewBox={vb} aria-hidden="true">
          <polygon points="20,2 38,20 20,38 2,20" {...common} />
        </svg>
      )
    case 'pentagon':
      return (
        <svg width={size} height={size} viewBox={vb} aria-hidden="true">
          <polygon points="20,2 38,14 31,36 9,36 2,14" {...common} />
        </svg>
      )
    case 'circle':
      return (
        <svg width={size} height={size} viewBox={vb} aria-hidden="true">
          <circle cx="20" cy="20" r="17" {...common} />
        </svg>
      )
  }
}

/* ─── BACKGROUND PATTERNS ───────────────────────────────────────── */
function DotGrid() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    >
      <defs>
        <pattern id="dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="0.75" fill={C.slate300} opacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-grid)" />
    </svg>
  )
}

function HexTessellation({ opacity = 0.04 }: { opacity?: number }) {
  const rawId = useId()
  const patternId = `hex-${rawId.replace(/:/g, '')}`
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="56"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="28,2 52,14 52,34 28,46 4,34 4,14"
            fill="none"
            stroke={C.slate700}
            strokeWidth="0.5"
            opacity={opacity}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}

/* ─── FADE IN WRAPPER ───────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const offsets = { up: [0, 24], down: [0, -24], left: [24, 0], right: [-24, 0] }
  const [x, y] = offsets[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? false : { opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ─── ISOMETRIC BLOCK ILLUSTRATION (Hero) ───────────────────────── */
function IsometricBlocks() {
  // 7 colored blocks arranged in an isometric cluster
  const blocks = [
    { x: 200, y: 260, color: PILLAR_COLORS[0] },
    { x: 260, y: 230, color: PILLAR_COLORS[1] },
    { x: 140, y: 230, color: PILLAR_COLORS[2] },
    { x: 200, y: 200, color: PILLAR_COLORS[3] },
    { x: 260, y: 170, color: PILLAR_COLORS[4] },
    { x: 140, y: 170, color: PILLAR_COLORS[5] },
    { x: 200, y: 140, color: PILLAR_COLORS[6] },
  ]

  function IsoBlock({ x, y, color }: { x: number; y: number; color: string }) {
    const w = 50
    const h = 30
    // top face
    const top = `${x},${y - h} ${x + w},${y - h + w / 2} ${x},${y} ${x - w},${y - h + w / 2}`
    // left face
    const left = `${x - w},${y - h + w / 2} ${x},${y} ${x},${y + h} ${x - w},${y - h + w / 2 + h}`
    // right face
    const right = `${x + w},${y - h + w / 2} ${x},${y} ${x},${y + h} ${x + w},${y - h + w / 2 + h}`

    return (
      <g>
        <polygon points={top} fill={color} opacity="0.9" />
        <polygon points={left} fill={color} opacity="0.65" />
        <polygon points={right} fill={color} opacity="0.45" />
      </g>
    )
  }

  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
      {blocks.map((b, i) => (
        <IsoBlock key={i} {...b} />
      ))}
    </svg>
  )
}

/* ─── GOLDEN SPIRAL ─────────────────────────────────────────────── */
function GoldenSpiral() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      style={{ opacity: 0.2 }}
    >
      <path
        d="M 200 200 A 80 80 0 0 1 280 200 A 50 50 0 0 1 280 250 A 30 30 0 0 1 250 250 A 20 20 0 0 1 250 230 A 12 12 0 0 1 262 230 A 8 8 0 0 1 262 238"
        fill="none"
        stroke={C.gold}
        strokeWidth="1"
      />
    </svg>
  )
}

/* ─── CONSTRUCTION LINE BRACKETS ────────────────────────────────── */
function ConstructionBrackets() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    >
      {/* Top-left bracket */}
      <line x1="5%" y1="8%" x2="5%" y2="18%" stroke={C.gold} strokeWidth="1" opacity="0.4" />
      <line x1="5%" y1="8%" x2="15%" y2="8%" stroke={C.gold} strokeWidth="1" opacity="0.4" />
      {/* Bottom-right bracket */}
      <line x1="95%" y1="92%" x2="95%" y2="82%" stroke={C.gold} strokeWidth="1" opacity="0.4" />
      <line x1="95%" y1="92%" x2="85%" y2="92%" stroke={C.gold} strokeWidth="1" opacity="0.4" />
      {/* Top-right tick */}
      <line x1="92%" y1="10%" x2="96%" y2="10%" stroke={C.gold} strokeWidth="0.5" opacity="0.3" />
      <line x1="94%" y1="8%" x2="94%" y2="12%" stroke={C.gold} strokeWidth="0.5" opacity="0.3" />
    </svg>
  )
}

/* ─── GEOMETRIC ROSETTE ─────────────────────────────────────────── */
function GeometricRosette() {
  const shapes = PILLAR_SHAPES
  const radius = 80
  return (
    <svg viewBox="0 0 200 200" className="w-48 h-48 mx-auto" aria-hidden="true">
      {shapes.map((shape, i) => {
        const angle = (i * 360) / 7 - 90
        const rad = (angle * Math.PI) / 180
        const cx = 100 + radius * Math.cos(rad)
        const cy = 100 + radius * Math.sin(rad)
        return (
          <g key={i} transform={`translate(${cx - 12}, ${cy - 12}) scale(0.6)`}>
            <GeometricShape shape={shape} color={PILLAR_COLORS[i]} size={40} />
          </g>
        )
      })}
      {/* Center hexagon */}
      <polygon
        points="100,72 124,86 124,114 100,128 76,114 76,86"
        fill="none"
        stroke={C.gold}
        strokeWidth="1.5"
      />
      <text
        x="100"
        y="104"
        textAnchor="middle"
        fill={C.gold}
        fontSize="10"
        fontFamily="var(--font-space-grotesk)"
        fontWeight="700"
      >
        IKIGAI
      </text>
    </svg>
  )
}

/* ─── ISOMETRIC MODEL DIAGRAM ───────────────────────────────────── */
function IsometricModelDiagram() {
  const colWidth = 90
  const startX = 80
  const phases = ['BLUEPRINT', 'BUILD', 'STRENGTHEN', 'SUSTAIN']
  const phaseY = [460, 360, 260, 160]

  function HexPrism({
    cx,
    cy,
    color,
    label,
  }: {
    cx: number
    cy: number
    color: string
    label: string
  }) {
    const r = 32
    const h = 60
    const hexPoints = (offsetY: number) => {
      const pts = []
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6
        pts.push(`${cx + r * Math.cos(angle)},${cy + offsetY + r * Math.sin(angle)}`)
      }
      return pts.join(' ')
    }

    // Build side faces connecting top and bottom hex
    const sides = []
    for (let i = 0; i < 6; i++) {
      const angle1 = (Math.PI / 3) * i - Math.PI / 6
      const angle2 = (Math.PI / 3) * ((i + 1) % 6) - Math.PI / 6
      const x1 = cx + r * Math.cos(angle1)
      const y1top = cy - h / 2 + r * Math.sin(angle1)
      const y1bot = cy + h / 2 + r * Math.sin(angle1)
      const x2 = cx + r * Math.cos(angle2)
      const y2top = cy - h / 2 + r * Math.sin(angle2)
      const y2bot = cy + h / 2 + r * Math.sin(angle2)
      if (i >= 1 && i <= 4) {
        sides.push(
          <polygon
            key={`side-${i}`}
            points={`${x1},${y1top} ${x2},${y2top} ${x2},${y2bot} ${x1},${y1bot}`}
            fill={color}
            opacity="0.35"
            stroke={color}
            strokeWidth="0.5"
          />
        )
      }
    }

    return (
      <g>
        {sides}
        <polygon points={hexPoints(h / 2)} fill={color} opacity="0.5" stroke={color} strokeWidth="0.5" />
        <polygon points={hexPoints(-h / 2)} fill={color} opacity="0.85" stroke={color} strokeWidth="0.5" />
        <text
          x={cx}
          y={cy - h / 2 + 4}
          textAnchor="middle"
          fill={C.white}
          fontSize="9"
          fontFamily="var(--font-jetbrains-mono)"
          fontWeight="500"
        >
          {label}
        </text>
      </g>
    )
  }

  return (
    <svg viewBox="0 0 800 560" className="w-full max-w-4xl mx-auto" role="img" aria-label="Isometric model diagram showing the 7 pillars of the Ikigai Architecture Model arranged as hexagonal prisms across four phases: Blueprint, Build, Strengthen, and Sustain.">
      {/* Phase strata layers */}
      {phases.map((phase, i) => (
        <g key={phase}>
          <rect
            x="40"
            y={phaseY[i] - 40}
            width="720"
            height="80"
            fill={i % 2 === 0 ? C.ice : C.white}
            opacity="0.5"
            rx="0"
          />
          <text
            x="56"
            y={phaseY[i] + 4}
            fill={C.slate500}
            fontSize="10"
            fontFamily="var(--font-jetbrains-mono)"
            fontWeight="500"
            letterSpacing="0.1em"
          >
            {phase}
          </text>
        </g>
      ))}

      {/* 7 hexagonal prisms */}
      {pillars.map((p, i) => {
        const cx = startX + i * colWidth
        const cy = 310
        return (
          <HexPrism
            key={p.slug}
            cx={cx}
            cy={cy}
            color={PILLAR_COLORS[i]}
            label={PILLAR_LABELS[i]}
          />
        )
      })}

      {/* Center golden hexagon */}
      <g>
        <polygon
          points="400,280 430,297 430,333 400,350 370,333 370,297"
          fill="none"
          stroke={C.gold}
          strokeWidth="2"
        />
        <text
          x="400"
          y="320"
          textAnchor="middle"
          fill={C.gold}
          fontSize="12"
          fontFamily="var(--font-space-grotesk)"
          fontWeight="700"
        >
          IKIGAI
        </text>
      </g>

      {/* Connection lines from center to each pillar */}
      {pillars.map((_, i) => {
        const cx = startX + i * colWidth
        return (
          <line
            key={`conn-${i}`}
            x1="400"
            y1="315"
            x2={cx}
            y2="310"
            stroke={PILLAR_COLORS[i]}
            strokeWidth="0.75"
            opacity="0.4"
            strokeDasharray="4 3"
          />
        )
      })}
    </svg>
  )
}

/* ─── PHASE FLOW ICONS ──────────────────────────────────────────── */
function PhaseIcon({ phase }: { phase: string }) {
  const size = 32
  const vb = '0 0 32 32'
  const sw = 1.5
  switch (phase) {
    case 'Blueprint':
      return (
        <svg width={size} height={size} viewBox={vb} aria-hidden="true">
          <rect x="4" y="4" width="24" height="24" fill="none" stroke={C.emerald} strokeWidth={sw} />
          <line x1="4" y1="12" x2="28" y2="12" stroke={C.emerald} strokeWidth={sw * 0.5} opacity="0.5" />
          <line x1="4" y1="20" x2="28" y2="20" stroke={C.emerald} strokeWidth={sw * 0.5} opacity="0.5" />
          <line x1="16" y1="4" x2="16" y2="28" stroke={C.emerald} strokeWidth={sw * 0.5} opacity="0.5" />
        </svg>
      )
    case 'Build':
      return (
        <svg width={size} height={size} viewBox={vb} aria-hidden="true">
          <polygon points="16,4 28,28 4,28" fill="none" stroke={C.emerald} strokeWidth={sw} />
          <line x1="10" y1="20" x2="22" y2="20" stroke={C.emerald} strokeWidth={sw * 0.5} opacity="0.5" />
        </svg>
      )
    case 'Strengthen':
      return (
        <svg width={size} height={size} viewBox={vb} aria-hidden="true">
          <polygon points="16,2 30,16 16,30 2,16" fill="none" stroke={C.emerald} strokeWidth={sw} />
        </svg>
      )
    case 'Sustain':
      return (
        <svg width={size} height={size} viewBox={vb} aria-hidden="true">
          <circle cx="16" cy="16" r="12" fill="none" stroke={C.emerald} strokeWidth={sw} />
          <circle cx="16" cy="16" r="5" fill="none" stroke={C.emerald} strokeWidth={sw * 0.5} opacity="0.5" />
        </svg>
      )
    default:
      return null
  }
}

/* ─── NAV ───────────────────────────────────────────────────────── */
function Nav() {
  const links = ['About', 'Services', 'The Model', 'Impact', 'Contact']

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.slate300}`,
        fontFamily: 'var(--font-dm-sans)',
      }}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between" style={{ padding: '16px 24px' }}>
        {/* Logo */}
        <Link href="/concept-4" className="flex items-center" style={{ gap: '8px' }}>
          <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true">
            <polygon points="7,0 14,4 14,12 7,16 0,12 0,4" fill={C.gold} />
          </svg>
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: '20px',
              letterSpacing: '0.12em',
              color: C.charcoal,
            }}
          >
            IKIGAI
          </span>
        </Link>

        {/* Links */}
        <div className="hidden lg:flex items-center" style={{ gap: '32px' }}>
          {links.map((link) => (
            <span
              key={link}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 500,
                fontSize: '13px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: C.slate700,
                cursor: 'pointer',
              }}
            >
              {link}
            </span>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 500,
              fontSize: '13px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: C.charcoal,
              background: C.gold,
              padding: '10px 24px',
              borderRadius: '0',
              display: 'inline-block',
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}

/* ─── HERO SECTION ──────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative flex"
      style={{ minHeight: '90vh' }}
    >
      {/* Left panel: gradient */}
      <div
        className="relative flex flex-col justify-center"
        style={{
          width: '62%',
          background: `linear-gradient(135deg, ${C.emerald} 0%, ${C.teal} 100%)`,
          padding: '80px 64px',
        }}
      >
        <ConstructionBrackets />

        <FadeIn delay={0.1}>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontWeight: 400,
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: C.goldLight,
              display: 'block',
              marginBottom: '24px',
            }}
          >
            Organizational Architects
          </span>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
              lineHeight: 1.1,
              color: C.white,
              marginBottom: '24px',
              maxWidth: '560px',
            }}
          >
            Architecting Purpose-Driven Organizations to Thrive
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 400,
              fontSize: '17px',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '480px',
              marginBottom: '40px',
            }}
          >
            Ikigai Consulting Group provides the structural frameworks NGOs and
            nonprofits need to align mission with measurable impact.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 500,
              fontSize: '14px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: C.charcoal,
              background: C.gold,
              padding: '14px 32px',
              borderRadius: '0',
            }}
          >
            Schedule a Strategic Conversation
          </Link>
        </FadeIn>
      </div>

      {/* Right panel: white with patterns */}
      <div className="relative hidden md:flex items-center justify-center" style={{ width: '38%', background: C.white }}>
        <HexTessellation opacity={0.04} />
        <GoldenSpiral />
        <div className="relative z-10" style={{ width: '80%', maxWidth: '320px' }}>
          <IsometricBlocks />
        </div>
      </div>
    </section>
  )
}

/* ─── PROBLEM SECTION ───────────────────────────────────────────── */
function ProblemSection() {
  const problems = [
    'Strategic plans that gather dust on shelves',
    'Governance confusion and role ambiguity',
    'Operational systems held together by heroics',
    'Programs without measurable outcomes',
    'Leadership burnout and succession gaps',
  ]

  return (
    <section className="relative" style={{ background: C.white, padding: '96px 0' }}>
      <DotGrid />
      <div className="relative z-10 max-w-[1200px] mx-auto" style={{ padding: '0 24px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '64px' }}>
          {/* Left: heading */}
          <FadeIn>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: C.slate500,
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                01.
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  lineHeight: 1.15,
                  color: C.charcoal,
                  marginBottom: '24px',
                }}
              >
                Strong Missions.
                <br />
                Fragile Structures.
              </h2>
              <div
                style={{
                  width: '48px',
                  height: '3px',
                  background: C.gold,
                  marginBottom: '24px',
                }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: C.slate700,
                  maxWidth: '480px',
                }}
              >
                Too many purpose-driven organizations are held together by the
                sheer will of their people, not by the strength of their
                structures. When the structures fail, the mission falters.
              </p>
            </div>
          </FadeIn>

          {/* Right: problems list */}
          <div className="flex flex-col" style={{ gap: '20px', justifyContent: 'center' }}>
            {problems.map((p, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="flex items-start" style={{ gap: '16px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono)',
                      fontWeight: 500,
                      fontSize: '12px',
                      color: C.gold,
                      marginTop: '3px',
                      flexShrink: 0,
                    }}
                  >
                    //
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontWeight: 400,
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: C.slate700,
                    }}
                  >
                    {p}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── SOLUTION SECTION ──────────────────────────────────────────── */
function SolutionSection() {
  const phases = [
    { name: 'Blueprint', desc: 'Assess and align your organizational foundations.' },
    { name: 'Build', desc: 'Design systems, structures, and governance frameworks.' },
    { name: 'Strengthen', desc: 'Develop leadership and embed accountability.' },
    { name: 'Sustain', desc: 'Ensure long-term resilience and community impact.' },
  ]

  return (
    <section className="relative" style={{ background: C.ice, padding: '96px 0' }}>
      <HexTessellation opacity={0.03} />
      <div className="relative z-10 max-w-[1200px] mx-auto" style={{ padding: '0 24px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span
              style={{
                fontFamily: 'var(--font-jetbrains-mono)',
                fontWeight: 500,
                fontSize: '14px',
                color: C.slate500,
                display: 'block',
                marginBottom: '16px',
              }}
            >
              02.
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                lineHeight: 1.15,
                color: C.charcoal,
                marginBottom: '16px',
              }}
            >
              We Are Organizational Architects.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.7,
                color: C.slate500,
                maxWidth: '560px',
                margin: '0 auto',
              }}
            >
              The Ikigai Architecture Model&trade; provides a structured path from assessment to sustained impact.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '24px' }}>
          {phases.map((phase, i) => (
            <FadeIn key={phase.name} delay={0.1 * i}>
              <div
                style={{
                  background: C.white,
                  padding: '32px 24px',
                  borderRadius: '0',
                  boxShadow: '4px 4px 0 rgba(30,41,59,0.08)',
                  borderTop: `3px solid ${C.emerald}`,
                }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <PhaseIcon phase={phase.name} />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontWeight: 500,
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    color: C.slate500,
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Phase {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 600,
                    fontSize: '18px',
                    color: C.charcoal,
                    marginBottom: '8px',
                  }}
                >
                  {phase.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: C.slate500,
                  }}
                >
                  {phase.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PILLARS GRID ──────────────────────────────────────────────── */
function PillarsGrid() {
  const reduced = useReducedMotion()

  return (
    <section style={{ background: C.white, padding: '96px 0' }}>
      <div className="max-w-[1200px] mx-auto" style={{ padding: '0 24px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span
              style={{
                fontFamily: 'var(--font-jetbrains-mono)',
                fontWeight: 500,
                fontSize: '14px',
                color: C.slate500,
                display: 'block',
                marginBottom: '16px',
              }}
            >
              03.
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                lineHeight: 1.15,
                color: C.charcoal,
                marginBottom: '16px',
              }}
            >
              7 Pillars of Architecture
            </h2>
            <div
              style={{
                width: '48px',
                height: '3px',
                background: C.gold,
                margin: '0 auto 16px',
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.7,
                color: C.slate500,
                maxWidth: '520px',
                margin: '0 auto',
              }}
            >
              Each pillar addresses a critical dimension of organizational structure, together forming a complete architectural framework.
            </p>
          </div>
        </FadeIn>

        {/* Top row: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '24px', marginBottom: '24px' }}>
          {pillars.slice(0, 4).map((pillar, i) => (
            <FadeIn key={pillar.slug} delay={0.08 * i}>
              <PillarCard pillar={pillar} index={i} reduced={reduced} />
            </FadeIn>
          ))}
        </div>

        {/* Bottom row: 3 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '24px', maxWidth: '912px', margin: '0 auto' }}>
          {pillars.slice(4).map((pillar, i) => (
            <FadeIn key={pillar.slug} delay={0.08 * (i + 4)}>
              <PillarCard pillar={pillar} index={i + 4} reduced={reduced} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarCard({
  pillar,
  index,
  reduced,
}: {
  pillar: (typeof pillars)[number]
  index: number
  reduced: boolean | null
}) {
  const color = PILLAR_COLORS[index]
  const shape = PILLAR_SHAPES[index]
  const label = PILLAR_LABELS[index]
  const hoverRotation = HOVER_ROTATIONS[index]

  return (
    <motion.div
      style={{
        background: C.white,
        padding: '32px 24px',
        borderRadius: '0',
        boxShadow: '4px 4px 0 rgba(30,41,59,0.12)',
        borderTop: `3px solid ${color}`,
        cursor: 'pointer',
        height: '100%',
      }}
      whileHover={
        reduced
          ? undefined
          : {
              boxShadow: '6px 6px 0 rgba(30,41,59,0.18)',
              y: -2,
            }
      }
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between" style={{ marginBottom: '20px' }}>
        <motion.div
          whileHover={reduced ? undefined : { rotate: hoverRotation }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <GeometricShape shape={shape} color={color} size={40} />
        </motion.div>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: C.slate500,
          }}
        >
          {label}
        </span>
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 600,
          fontSize: '16px',
          color: C.charcoal,
          marginBottom: '4px',
        }}
      >
        {pillar.title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 400,
          fontSize: '13px',
          lineHeight: 1.5,
          color: C.slate500,
          marginBottom: '16px',
        }}
      >
        {pillar.subtitle}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {pillar.outcomes.slice(0, 2).map((outcome, oi) => (
          <span
            key={oi}
            style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '10px',
              color: C.slate500,
              background: C.slate100,
              padding: '4px 8px',
              borderRadius: '0',
            }}
          >
            {outcome.length > 30 ? outcome.substring(0, 30) + '...' : outcome}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── ISOMETRIC MODEL SECTION ───────────────────────────────────── */
function ModelSection() {
  return (
    <section className="relative" style={{ background: C.ice, padding: '96px 0' }}>
      <HexTessellation opacity={0.03} />
      <div className="relative z-10 max-w-[1200px] mx-auto" style={{ padding: '0 24px' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span
              style={{
                fontFamily: 'var(--font-jetbrains-mono)',
                fontWeight: 500,
                fontSize: '14px',
                color: C.slate500,
                display: 'block',
                marginBottom: '16px',
              }}
            >
              04.
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                lineHeight: 1.15,
                color: C.charcoal,
                marginBottom: '16px',
              }}
            >
              The Ikigai Architecture Model&trade;
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.7,
                color: C.slate500,
                maxWidth: '520px',
                margin: '0 auto',
              }}
            >
              Seven interconnected pillars spanning four phases of organizational transformation.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <IsometricModelDiagram />
        </FadeIn>

        {/* Legend */}
        <FadeIn delay={0.3}>
          <div
            className="flex flex-wrap justify-center"
            style={{ gap: '16px', marginTop: '40px' }}
          >
            {pillars.map((p, i) => (
              <div key={p.slug} className="flex items-center" style={{ gap: '8px' }}>
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    background: PILLAR_COLORS[i],
                    borderRadius: '0',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '11px',
                    color: C.slate500,
                  }}
                >
                  {p.title.replace(' Architecture', '')}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── CTA SECTION ───────────────────────────────────────────────── */
function CTASection() {
  const reduced = useReducedMotion()
  return (
    <section className="relative" style={{ background: C.charcoal, padding: '96px 0' }}>
      <HexTessellation opacity={0.03} />
      <div className="relative z-10 max-w-[1200px] mx-auto" style={{ padding: '0 24px', textAlign: 'center' }}>
        <FadeIn>
          <GeometricRosette />
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              lineHeight: 1.15,
              color: C.white,
              marginTop: '40px',
              marginBottom: '16px',
            }}
          >
            Let&apos;s Architect Your Organization.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '480px',
              margin: '0 auto 40px',
            }}
          >
            Start with a strategic conversation. We will assess where you are, define where you need to go, and architect the path to get there.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <motion.div
            style={{ display: 'inline-block' }}
            whileHover={reduced ? undefined : { y: -2 }}
          >
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 500,
                fontSize: '14px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: C.charcoal,
                background: C.gold,
                padding: '16px 40px',
                borderRadius: '0',
                boxShadow: '0 0 0 rgba(200,169,81,0)',
                transition: 'box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `4px 4px 0 ${C.gold}40`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 rgba(200,169,81,0)'
              }}
            >
              Book Your Strategy Call
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─── FOOTER ────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer
      style={{
        background: '#0F172A',
        padding: '48px 24px',
        textAlign: 'center',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-center" style={{ gap: '8px', marginBottom: '16px' }}>
          <svg width="10" height="12" viewBox="0 0 14 16" aria-hidden="true">
            <polygon points="7,0 14,4 14,12 7,16 0,12 0,4" fill={C.gold} />
          </svg>
          <span
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.12em',
              color: C.white,
            }}
          >
            IKIGAI
          </span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '12px',
            color: C.slate500,
          }}
        >
          &copy; {new Date().getFullYear()} Ikigai Consulting Group. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

/* ─── PAGE ──────────────────────────────────────────────────────── */
export default function Concept4Page() {
  return (
    <div
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      style={{
        fontFamily: 'var(--font-dm-sans)',
        color: C.slate700,
      }}
    >
      <Nav />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PillarsGrid />
        <ModelSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
