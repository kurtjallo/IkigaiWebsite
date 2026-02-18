// @ts-nocheck
'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { pillars } from '@/lib/data/pillars'
import { lora, nunitoSans, caveat } from './fonts'
import {
  motion,
  useReducedMotion,
  useInView,
} from 'motion/react'

/* ──────────────────────────────────────────────
   COLORS
   ────────────────────────────────────────────── */
const C = {
  moss: '#4A6741',
  forestFloor: '#2D4028',
  sage: '#6B8F62',
  saffron: '#D4A24E',
  lightGold: '#F2DFA6',
  amber: '#E8C06A',
  turmeric: '#A67B2E',
  linen: '#FAF6F0',
  sand: '#EDE4D4',
  parchment: '#F5EDE0',
  espresso: '#2C1810',
  cocoa: '#5C4033',
  driftwood: '#8B7355',
  terracotta: '#C4754B',
  indigo: '#3D4F7C',
} as const

/* Thread colors per pillar */
const THREAD_COLORS = [
  C.moss,
  C.sage,
  C.terracotta,
  C.indigo,
  C.saffron,
  C.cocoa,
  C.driftwood,
]

/* ──────────────────────────────────────────────
   TEXTURE SVG DATA URIs
   ────────────────────────────────────────────── */
const LINEN_TEXTURE = `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10h20M10 0v20' stroke='%238B7355' stroke-width='0.3' opacity='0.4'/%3E%3C/svg%3E")`

const CANVAS_TEXTURE = `url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 8h16M8 0v16M0 4h16M4 0v16M0 12h16M12 0v16' stroke='%238B7355' stroke-width='0.2' opacity='0.3'/%3E%3C/svg%3E")`

const BASKET_WEAVE = `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='12' height='6' fill='%23FAF6F0' opacity='0.06'/%3E%3Crect x='12' y='6' width='12' height='6' fill='%23FAF6F0' opacity='0.06'/%3E%3Crect x='0' y='12' width='6' height='12' fill='%23FAF6F0' opacity='0.04'/%3E%3Crect x='6' y='12' width='6' height='12' fill='%23FAF6F0' opacity='0.06'/%3E%3C/svg%3E")`

/* ──────────────────────────────────────────────
   WARM SHADOW
   ────────────────────────────────────────────── */
const warmShadow = '0 4px 24px rgba(44,24,16,0.10), 0 1px 4px rgba(44,24,16,0.06)'
const warmShadowLg = '0 8px 40px rgba(44,24,16,0.14), 0 2px 8px rgba(44,24,16,0.08)'
const warmShadowXl = '0 12px 56px rgba(44,24,16,0.18), 0 4px 12px rgba(44,24,16,0.10)'

/* ──────────────────────────────────────────────
   FONT CLASSES
   ────────────────────────────────────────────── */
const fontVars = `${lora.variable} ${nunitoSans.variable} ${caveat.variable}`
const fLora = lora.style.fontFamily ?? 'var(--font-lora), Georgia, serif'
const fNunito = nunitoSans.style.fontFamily ?? 'var(--font-nunito-sans), system-ui, sans-serif'
const fCaveat = caveat.style.fontFamily ?? 'var(--font-caveat), cursive'

/* ──────────────────────────────────────────────
   ANIMATION HELPERS
   ────────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  y = 24,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function StaggerWrap({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={
        prefersReduced
          ? { hidden: {}, visible: {} }
          : {
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }
      }
    >
      {children}
    </motion.div>
  )
}

function StaggerCard({
  children,
  className = '',
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      style={style}
      variants={
        prefersReduced
          ? { hidden: {}, visible: {} }
          : {
              hidden: { opacity: 0, y: 20, rotate: 0 },
              visible: { opacity: 1, y: 0, rotate: 0 },
            }
      }
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ──────────────────────────────────────────────
   SVG HELPERS
   ────────────────────────────────────────────── */

/** Woven knot ornament */
function WovenKnot({ size = 28, color = C.saffron }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 4C10 4 4 8 4 14s6 10 10 10 10-4 10-10S18 4 14 4z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M14 8c-3 0-6 2.5-6 6s3 6 6 6 6-2.5 6-6-3-6-6-6z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M8 14h12M14 8v12" stroke={color} strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

/** Fabric-edge SVG divider */
function FabricEdge({ color = C.sand, bgColor = C.linen }: { color?: string; bgColor?: string }) {
  return (
    <div style={{ position: 'relative', height: 32, overflow: 'hidden' }}>
      <svg
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        style={{ width: '100%', height: 32, display: 'block' }}
        aria-hidden="true"
      >
        <path
          d="M0 16 Q30 8 60 16 Q90 24 120 16 Q150 8 180 16 Q210 24 240 16 Q270 8 300 16 Q330 24 360 16 Q390 8 420 16 Q450 24 480 16 Q510 8 540 16 Q570 24 600 16 Q630 8 660 16 Q690 24 720 16 Q750 8 780 16 Q810 24 840 16 Q870 8 900 16 Q930 24 960 16 Q990 8 1020 16 Q1050 24 1080 16 Q1110 8 1140 16 Q1170 24 1200 16 V32 H0Z"
          fill={bgColor}
        />
        <path
          d="M0 16 Q30 8 60 16 Q90 24 120 16 Q150 8 180 16 Q210 24 240 16 Q270 8 300 16 Q330 24 360 16 Q390 8 420 16 Q450 24 480 16 Q510 8 540 16 Q570 24 600 16 Q630 8 660 16 Q690 24 720 16 Q750 8 780 16 Q810 24 840 16 Q870 8 900 16 Q930 24 960 16 Q990 8 1020 16 Q1050 24 1080 16 Q1110 8 1140 16 Q1170 24 1200 16"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      </svg>
    </div>
  )
}

/** Woven thread divider (two intertwined lines) */
function WovenThreadDivider() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '32px 0',
      }}
    >
      <svg width="240" height="24" viewBox="0 0 240 24" fill="none" aria-hidden="true">
        <path
          d="M0 12 Q20 4 40 12 Q60 20 80 12 Q100 4 120 12 Q140 20 160 12 Q180 4 200 12 Q220 20 240 12"
          stroke={C.moss}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0 12 Q20 20 40 12 Q60 4 80 12 Q100 20 120 12 Q140 4 160 12 Q180 20 200 12 Q220 4 240 12"
          stroke={C.saffron}
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  )
}

/** Corner knot ornament for CTA section */
function CornerKnot({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const rotate = {
    tl: '0',
    tr: '90',
    bl: '270',
    br: '180',
  }[position]

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      style={{
        position: 'absolute',
        ...(position.includes('t') ? { top: -1 } : { bottom: -1 }),
        ...(position.includes('l') ? { left: -1 } : { right: -1 }),
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <path d="M4 4h16M4 4v16" stroke={C.saffron} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="4" cy="4" r="3" fill={C.saffron} />
    </svg>
  )
}

/* ──────────────────────────────────────────────
   NAVIGATION
   ────────────────────────────────────────────── */
function Nav() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'The Model', href: '/model' },
    { label: 'Impact', href: '/impact' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      style={{
        background: C.linen,
        backgroundImage: LINEN_TEXTURE,
        borderBottom: `2px dashed ${C.saffron}`,
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
      aria-label="Main navigation"
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/concept-5"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
          }}
        >
          <WovenKnot size={32} />
          <span
            style={{
              fontFamily: fLora,
              fontWeight: 600,
              fontSize: '1.5rem',
              color: C.espresso,
              letterSpacing: '0.08em',
            }}
          >
            IKIGAI
          </span>
        </Link>

        {/* Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 28,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: fNunito,
                fontSize: '0.875rem',
                fontWeight: 500,
                color: C.cocoa,
                textDecoration: 'none',
                position: 'relative',
                paddingBottom: 4,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.color = C.moss
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.color = C.cocoa
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: fNunito,
              fontWeight: 600,
              fontSize: '0.875rem',
              color: C.espresso,
              background: C.amber,
              padding: '10px 24px',
              borderRadius: 999,
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s',
              boxShadow: warmShadow,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C.saffron
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = C.amber
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Schedule a Conversation
          </Link>
        </div>
      </div>
    </nav>
  )
}

/* ──────────────────────────────────────────────
   HERO SECTION
   ────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      style={{
        background: C.moss,
        backgroundImage: BASKET_WEAVE,
        position: 'relative',
        overflow: 'hidden',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '80px 24px',
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {/* Sand rectangle behind card (rotated) */}
        <FadeIn delay={0.1}>
          <div
            style={{
              position: 'absolute',
              top: 40,
              right: 0,
              width: '60%',
              maxWidth: 680,
              height: '90%',
              background: C.sand,
              borderRadius: 28,
              transform: 'rotate(2deg)',
              opacity: 0.35,
              zIndex: 0,
            }}
          />
        </FadeIn>

        {/* Main linen card */}
        <FadeIn delay={0.2}>
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              background: C.linen,
              backgroundImage: LINEN_TEXTURE,
              borderRadius: 24,
              border: `2px dashed ${C.saffron}`,
              padding: '56px 48px',
              maxWidth: 640,
              boxShadow: warmShadowXl,
            }}
          >
            <h1
              style={{
                fontFamily: fLora,
                fontWeight: 600,
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                lineHeight: 1.15,
                color: C.espresso,
                marginBottom: 20,
              }}
            >
              Architecting Purpose-Driven
              <br />
              Organizations to Thrive
            </h1>

            <p
              style={{
                fontFamily: fNunito,
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: C.cocoa,
                marginBottom: 8,
                maxWidth: 500,
              }}
            >
              We design the structural foundations that transform strong
              missions into lasting impact.
            </p>

            {/* Caveat annotation */}
            <p
              style={{
                fontFamily: fCaveat,
                fontSize: '1.35rem',
                color: C.saffron,
                transform: 'rotate(-2deg)',
                marginBottom: 32,
                display: 'inline-block',
              }}
            >
              thread by thread
            </p>

            <div>
              <Link
                href="/contact"
                style={{
                  display: 'inline-block',
                  fontFamily: fNunito,
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: C.espresso,
                  background: C.amber,
                  padding: '14px 36px',
                  borderRadius: 999,
                  textDecoration: 'none',
                  boxShadow: warmShadow,
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.saffron
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.amber
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Schedule a Strategic Conversation
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Fabric-edge divider at bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <FabricEdge color={C.saffron} bgColor={C.linen} />
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   PROBLEM SECTION
   ────────────────────────────────────────────── */
function ProblemSection() {
  const painPoints = [
    'Strategic plans gathering dust on shelves',
    'Governance confusion and board disengagement',
    'Operational systems cracking under growth',
    'Programs drifting from their original purpose',
    'Leaders carrying everything on their shoulders',
  ]

  return (
    <section
      style={{
        background: C.linen,
        backgroundImage: LINEN_TEXTURE,
        padding: '96px 0',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <p
              style={{
                fontFamily: fNunito,
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: C.turmeric,
                marginBottom: 12,
              }}
            >
              The Challenge
            </p>
            <h2
              style={{
                fontFamily: fLora,
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: C.espresso,
                marginBottom: 8,
              }}
            >
              Strong Missions. Fragile Structures.
            </h2>
            <div
              style={{
                width: 60,
                height: 3,
                background: C.saffron,
                borderRadius: 2,
                margin: '0 auto',
              }}
            />
          </div>
        </FadeIn>

        <WovenThreadDivider />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'start',
            maxWidth: '56rem',
            margin: '0 auto',
          }}
        >
          <FadeIn delay={0.1}>
            <div>
              <p
                style={{
                  fontFamily: fNunito,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: C.cocoa,
                }}
              >
                Too many purpose-driven organizations operate with passion but
                without the structural integrity to sustain their impact. They
                run on dedication alone, and eventually, even the most committed
                teams begin to fray.
              </p>
              <p
                style={{
                  fontFamily: fNunito,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: C.cocoa,
                  marginTop: 20,
                }}
              >
                The work demands more than good intentions. It demands
                architecture -- thoughtful, human-centered design that
                holds everything together.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {painPoints.map((point, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 14,
                    marginBottom: 20,
                    fontFamily: fNunito,
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: C.espresso,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: 24,
                      height: 2,
                      background: C.saffron,
                      borderRadius: 1,
                      marginTop: 10,
                      flexShrink: 0,
                    }}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   SOLUTION SECTION
   ────────────────────────────────────────────── */
function SolutionSection() {
  const phases = [
    {
      name: 'Blueprint',
      desc: 'Laying the warp -- assessing, aligning, designing the structural threads.',
    },
    {
      name: 'Build',
      desc: 'Weaving the weft -- implementing systems, processes, and frameworks.',
    },
    {
      name: 'Strengthen',
      desc: 'Tightening the weave -- refining, coaching, and building capacity.',
    },
    {
      name: 'Sustain',
      desc: 'Protecting the fabric -- embedding accountability and continuous improvement.',
    },
  ]

  return (
    <section
      style={{
        background: C.sand,
        backgroundImage: CANVAS_TEXTURE,
        padding: '96px 0',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p
              style={{
                fontFamily: fNunito,
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: C.turmeric,
                marginBottom: 12,
              }}
            >
              Our Approach
            </p>
            <h2
              style={{
                fontFamily: fLora,
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: C.espresso,
                marginBottom: 8,
              }}
            >
              We Are Organizational Architects.
            </h2>
            <div
              style={{
                width: 60,
                height: 3,
                background: C.saffron,
                borderRadius: 2,
                margin: '0 auto 24px',
              }}
            />
            <p
              style={{
                fontFamily: fNunito,
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: C.cocoa,
                maxWidth: '36rem',
                margin: '0 auto',
              }}
            >
              The Ikigai Architecture Model{'\u2122'} weaves together seven pillars
              through a four-phase process -- like threads on a loom,
              creating fabric strong enough to hold your mission.
            </p>
          </div>
        </FadeIn>

        <StaggerWrap
          className=""
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 24,
              maxWidth: '56rem',
              margin: '0 auto',
            }}
          >
            {phases.map((phase, i) => (
              <StaggerCard key={phase.name}>
                <div
                  style={{
                    background: C.linen,
                    backgroundImage: LINEN_TEXTURE,
                    borderRadius: 16,
                    border: `2px dashed ${C.saffron}`,
                    padding: '32px 24px',
                    textAlign: 'center',
                    position: 'relative',
                    boxShadow: warmShadow,
                  }}
                >
                  {/* Phase number */}
                  <div
                    style={{
                      fontFamily: fLora,
                      fontWeight: 700,
                      fontSize: '2.5rem',
                      color: C.saffron,
                      opacity: 0.25,
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3
                    style={{
                      fontFamily: fLora,
                      fontWeight: 600,
                      fontSize: '1.25rem',
                      color: C.espresso,
                      marginBottom: 10,
                    }}
                  >
                    {phase.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: fNunito,
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      color: C.cocoa,
                    }}
                  >
                    {phase.desc}
                  </p>
                </div>
              </StaggerCard>
            ))}
          </div>
        </StaggerWrap>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   PILLARS GRID (QUILTED LAYOUT)
   ────────────────────────────────────────────── */
function PillarsGrid() {
  return (
    <section
      style={{
        background: C.parchment,
        backgroundImage: LINEN_TEXTURE,
        padding: '96px 0',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p
              style={{
                fontFamily: fNunito,
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: C.turmeric,
                marginBottom: 12,
              }}
            >
              The Seven Pillars
            </p>
            <h2
              style={{
                fontFamily: fLora,
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: C.espresso,
                marginBottom: 8,
              }}
            >
              The Threads of Organizational Strength
            </h2>
            <div
              style={{
                width: 60,
                height: 3,
                background: C.saffron,
                borderRadius: 2,
                margin: '0 auto',
              }}
            />
          </div>
        </FadeIn>

        <StaggerWrap>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
              maxWidth: '64rem',
              margin: '0 auto',
            }}
          >
            {pillars.map((pillar, i) => {
              const threadColor = THREAD_COLORS[i % THREAD_COLORS.length]
              const rotation = i % 2 === 0 ? 0.5 : -0.5

              return (
                <StaggerCard
                  key={pillar.slug}
                  style={{
                    marginTop: i % 2 !== 0 ? -8 : 0,
                  }}
                >
                  <motion.div
                    style={{
                      background: C.parchment,
                      borderRadius: 16,
                      border: `2px dashed ${C.saffron}`,
                      padding: '28px 24px',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: warmShadow,
                      cursor: 'pointer',
                      transform: `rotate(${rotation}deg)`,
                      transition: 'box-shadow 0.3s, transform 0.3s, border-color 0.3s',
                    }}
                    whileHover={{
                      y: -4,
                      rotate: 0,
                      transition: { duration: 0.25 },
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.boxShadow = warmShadowLg
                      el.style.borderColor = C.terracotta
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.boxShadow = warmShadow
                      el.style.borderColor = C.saffron
                    }}
                  >
                    {/* Colored thread line on left edge */}
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 12,
                        bottom: 12,
                        width: 4,
                        background: threadColor,
                        borderRadius: '0 4px 4px 0',
                      }}
                    />

                    <h3
                      style={{
                        fontFamily: fLora,
                        fontWeight: 600,
                        fontSize: '1.15rem',
                        color: C.espresso,
                        marginBottom: 6,
                        paddingLeft: 8,
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: fNunito,
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: C.turmeric,
                        marginBottom: 10,
                        paddingLeft: 8,
                      }}
                    >
                      {pillar.subtitle}
                    </p>
                    <p
                      style={{
                        fontFamily: fNunito,
                        fontSize: '0.85rem',
                        lineHeight: 1.6,
                        color: C.cocoa,
                        paddingLeft: 8,
                      }}
                    >
                      {pillar.description.length > 120
                        ? pillar.description.slice(0, 120) + '...'
                        : pillar.description}
                    </p>

                    {/* Learn more */}
                    <div style={{ paddingLeft: 8, marginTop: 16 }}>
                      <span
                        style={{
                          fontFamily: fNunito,
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: C.turmeric,
                          borderBottom: `1px dashed ${C.saffron}`,
                          paddingBottom: 2,
                        }}
                      >
                        Learn more &rarr;
                      </span>
                    </div>
                  </motion.div>
                </StaggerCard>
              )
            })}
          </div>
        </StaggerWrap>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   LOOM DIAGRAM
   ────────────────────────────────────────────── */
function LoomDiagram() {
  const pillarNames = pillars.map((p) => p.title.replace(' Architecture', ''))
  const phases = ['Blueprint', 'Build', 'Strengthen', 'Sustain']
  const weftColors = [C.lightGold, C.amber, C.saffron, C.turmeric]

  // Layout constants
  const svgW = 900
  const svgH = 520
  const frameLeft = 60
  const frameRight = svgW - 60
  const frameTop = 60
  const frameBottom = svgH - 70
  const colSpacing = (frameRight - frameLeft) / (pillarNames.length + 1)
  const rowSpacing = (frameBottom - frameTop) / (phases.length + 1)

  // Warp X positions
  const warpXs = pillarNames.map((_, i) => frameLeft + colSpacing * (i + 1))
  // Weft Y positions
  const weftYs = phases.map((_, i) => frameTop + rowSpacing * (i + 1))

  return (
    <section
      style={{
        background: C.linen,
        backgroundImage: LINEN_TEXTURE,
        padding: '96px 0',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p
              style={{
                fontFamily: fNunito,
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: C.turmeric,
                marginBottom: 12,
              }}
            >
              The Framework
            </p>
            <h2
              style={{
                fontFamily: fLora,
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: C.espresso,
                marginBottom: 8,
              }}
            >
              Woven on the Loom of Purpose
            </h2>
            <div
              style={{
                width: 60,
                height: 3,
                background: C.saffron,
                borderRadius: 2,
                margin: '0 auto',
              }}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              overflow: 'auto',
            }}
          >
            <svg
              viewBox={`0 0 ${svgW} ${svgH}`}
              style={{ width: '100%', maxWidth: 850 }}
              role="img"
              aria-label="Ikigai Architecture Model loom diagram showing seven pillar threads woven through four phases: Blueprint, Build, Strengthen, and Sustain."
            >
              {/* Loom frame (warm brown beams) */}
              <rect
                x={frameLeft - 12}
                y={frameTop - 12}
                width={frameRight - frameLeft + 24}
                height={frameBottom - frameTop + 24}
                rx={8}
                fill="none"
                stroke={C.cocoa}
                strokeWidth={6}
              />
              {/* Top beam */}
              <rect
                x={frameLeft - 16}
                y={frameTop - 16}
                width={frameRight - frameLeft + 32}
                height={12}
                rx={3}
                fill={C.driftwood}
              />
              {/* Bottom beam */}
              <rect
                x={frameLeft - 16}
                y={frameBottom + 4}
                width={frameRight - frameLeft + 32}
                height={12}
                rx={3}
                fill={C.driftwood}
              />
              {/* Left beam */}
              <rect
                x={frameLeft - 16}
                y={frameTop - 16}
                width={12}
                height={frameBottom - frameTop + 32}
                rx={3}
                fill={C.driftwood}
              />
              {/* Right beam */}
              <rect
                x={frameRight + 4}
                y={frameTop - 16}
                width={12}
                height={frameBottom - frameTop + 32}
                rx={3}
                fill={C.driftwood}
              />

              {/* Warp threads (vertical, per pillar) */}
              {warpXs.map((x, i) => (
                <line
                  key={`warp-${i}`}
                  x1={x}
                  y1={frameTop}
                  x2={x}
                  y2={frameBottom}
                  stroke={THREAD_COLORS[i]}
                  strokeWidth={3}
                  opacity={0.7}
                />
              ))}

              {/* Weft threads (horizontal, per phase) -- weave over and under */}
              {weftYs.map((y, phaseIdx) => {
                // Build a bezier path that goes over and under warp threads
                const amplitude = 14
                let pathD = `M ${frameLeft} ${y}`

                warpXs.forEach((x, warpIdx) => {
                  const isOver = (phaseIdx + warpIdx) % 2 === 0
                  const prevX = warpIdx === 0 ? frameLeft : warpXs[warpIdx - 1]
                  const midX = (prevX + x) / 2
                  const curveY = isOver ? y - amplitude : y + amplitude

                  pathD += ` Q ${midX} ${curveY} ${x} ${y}`
                })

                // Finish to frame right
                const lastX = warpXs[warpXs.length - 1]
                pathD += ` L ${frameRight} ${y}`

                return (
                  <path
                    key={`weft-${phaseIdx}`}
                    d={pathD}
                    fill="none"
                    stroke={weftColors[phaseIdx]}
                    strokeWidth={3}
                    strokeLinecap="round"
                  />
                )
              })}

              {/* Intersection nodes (small circles) */}
              {weftYs.map((y, pi) =>
                warpXs.map((x, wi) => (
                  <circle
                    key={`node-${pi}-${wi}`}
                    cx={x}
                    cy={y}
                    r={4}
                    fill={(pi + wi) % 2 === 0 ? weftColors[pi] : THREAD_COLORS[wi]}
                    stroke={C.linen}
                    strokeWidth={1.5}
                  />
                ))
              )}

              {/* Pillar labels (bottom) */}
              {warpXs.map((x, i) => (
                <text
                  key={`plbl-${i}`}
                  x={x}
                  y={frameBottom + 40}
                  textAnchor="middle"
                  style={{
                    fontFamily: fNunito,
                    fontSize: 10,
                    fontWeight: 600,
                    fill: C.cocoa,
                  }}
                >
                  {pillarNames[i]}
                </text>
              ))}

              {/* Phase labels (left, Caveat, rotated) */}
              {weftYs.map((y, i) => (
                <text
                  key={`phlbl-${i}`}
                  x={frameLeft - 28}
                  y={y + 4}
                  textAnchor="end"
                  style={{
                    fontFamily: fCaveat,
                    fontSize: 15,
                    fontWeight: 600,
                    fill: weftColors[i],
                  }}
                  transform={`rotate(-5, ${frameLeft - 28}, ${y})`}
                >
                  {phases[i]}
                </text>
              ))}
            </svg>
          </div>

          {/* Model title below */}
          <p
            style={{
              textAlign: 'center',
              fontFamily: fLora,
              fontStyle: 'italic',
              fontSize: '1rem',
              color: C.cocoa,
              marginTop: 24,
            }}
          >
            Ikigai Architecture Model{'\u2122'}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   WHO WE SERVE SECTION
   ────────────────────────────────────────────── */
function WhoWeServe() {
  const audiences = [
    { name: 'NGOs & Charities', desc: 'Building structures that match the scale of your mission.' },
    { name: 'Social Service Agencies', desc: 'Operational architecture for consistent, quality care.' },
    { name: 'Faith-Based Organizations', desc: 'Governance and accountability rooted in shared values.' },
    { name: 'Women-Led Initiatives', desc: 'Amplifying leadership and organizational capacity.' },
    { name: 'Boards & Executive Teams', desc: 'From passive oversight to active, strategic leadership.' },
  ]

  return (
    <section
      style={{
        background: C.moss,
        backgroundImage: BASKET_WEAVE,
        padding: '96px 0',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p
              style={{
                fontFamily: fNunito,
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: C.lightGold,
                marginBottom: 12,
              }}
            >
              Who We Serve
            </p>
            <h2
              style={{
                fontFamily: fLora,
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: C.linen,
                marginBottom: 8,
              }}
            >
              Built for Leaders Who Carry Mission.
            </h2>
            <div
              style={{
                width: 60,
                height: 3,
                background: C.saffron,
                borderRadius: 2,
                margin: '0 auto',
              }}
            />
          </div>
        </FadeIn>

        <StaggerWrap>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: 20,
              maxWidth: '60rem',
              margin: '0 auto',
            }}
          >
            {audiences.map((aud) => (
              <StaggerCard key={aud.name}>
                <div
                  style={{
                    textAlign: 'center',
                    padding: '24px 16px',
                  }}
                >
                  <WovenKnot size={24} color={C.lightGold} />
                  <h3
                    style={{
                      fontFamily: fLora,
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: C.linen,
                      marginTop: 12,
                      marginBottom: 8,
                    }}
                  >
                    {aud.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: fNunito,
                      fontSize: '0.8rem',
                      lineHeight: 1.6,
                      color: C.lightGold,
                    }}
                  >
                    {aud.desc}
                  </p>
                </div>
              </StaggerCard>
            ))}
          </div>
        </StaggerWrap>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   WHY IKIGAI
   ────────────────────────────────────────────── */
function WhyIkigai() {
  const reasons = [
    {
      title: 'Depth of Authority',
      desc: 'Over 20 years of nonprofit leadership, governance, and organizational design experience across Ontario\'s NGO ecosystem.',
    },
    {
      title: 'Full-Cycle Architecture',
      desc: 'From strategic planning to community engagement, we design every thread of organizational infrastructure -- not just one piece.',
    },
    {
      title: 'Measurable Impact',
      desc: 'We build accountability systems alongside strategy, ensuring your progress is visible, trackable, and meaningful to funders and communities.',
    },
  ]

  return (
    <section
      style={{
        background: C.sand,
        backgroundImage: CANVAS_TEXTURE,
        padding: '96px 0',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p
              style={{
                fontFamily: fNunito,
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: C.turmeric,
                marginBottom: 12,
              }}
            >
              Why Ikigai
            </p>
            <h2
              style={{
                fontFamily: fLora,
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: C.espresso,
              }}
            >
              Why Organizations Choose Us
            </h2>
            <div
              style={{
                width: 60,
                height: 3,
                background: C.saffron,
                borderRadius: 2,
                margin: '16px auto 0',
              }}
            />
          </div>
        </FadeIn>

        <StaggerWrap>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 28,
              maxWidth: '60rem',
              margin: '0 auto',
            }}
          >
            {reasons.map((reason) => (
              <StaggerCard key={reason.title}>
                <div
                  style={{
                    background: C.linen,
                    backgroundImage: LINEN_TEXTURE,
                    borderRadius: 16,
                    border: `2px dashed ${C.saffron}`,
                    padding: '32px 24px',
                    boxShadow: warmShadow,
                    height: '100%',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: fLora,
                      fontWeight: 600,
                      fontSize: '1.15rem',
                      color: C.espresso,
                      marginBottom: 12,
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: fNunito,
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      color: C.cocoa,
                    }}
                  >
                    {reason.desc}
                  </p>
                </div>
              </StaggerCard>
            ))}
          </div>
        </StaggerWrap>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   CTA SECTION
   ────────────────────────────────────────────── */
function CTASection() {
  return (
    <section
      style={{
        background: C.forestFloor,
        backgroundImage: BASKET_WEAVE,
        padding: '96px 0',
      }}
    >
      <div
        style={{
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <FadeIn>
          <div
            style={{
              position: 'relative',
              border: `2px dashed ${C.saffron}`,
              borderRadius: 20,
              padding: '56px 48px',
              textAlign: 'center',
            }}
          >
            {/* Corner knots */}
            <CornerKnot position="tl" />
            <CornerKnot position="tr" />
            <CornerKnot position="bl" />
            <CornerKnot position="br" />

            <h2
              style={{
                fontFamily: fLora,
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: C.linen,
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              Let&apos;s Architect Your Organization.
            </h2>

            <p
              style={{
                fontFamily: fNunito,
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: C.lightGold,
                marginBottom: 8,
                maxWidth: '28rem',
                margin: '0 auto 8px',
              }}
            >
              Every strong organization starts with a conversation about
              what you&apos;re building and why it matters.
            </p>

            {/* Caveat annotation */}
            <p
              style={{
                fontFamily: fCaveat,
                fontSize: '1.3rem',
                color: C.saffron,
                transform: 'rotate(-2deg)',
                marginBottom: 32,
                display: 'inline-block',
              }}
            >
              your mission deserves this.
            </p>

            <div>
              <Link
                href="/contact"
                style={{
                  display: 'inline-block',
                  fontFamily: fNunito,
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: C.espresso,
                  background: C.amber,
                  padding: '16px 40px',
                  borderRadius: 999,
                  textDecoration: 'none',
                  boxShadow: warmShadow,
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.saffron
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.amber
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Book Your Strategy Call
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   FOOTER
   ────────────────────────────────────────────── */
function Footer() {
  return (
    <footer
      style={{
        background: C.espresso,
        padding: '48px 0',
        borderTop: `2px dashed ${C.saffron}`,
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <WovenKnot size={24} color={C.saffron} />
          <span
            style={{
              fontFamily: fLora,
              fontWeight: 600,
              fontSize: '1.1rem',
              color: C.linen,
              letterSpacing: '0.08em',
            }}
          >
            IKIGAI
          </span>
        </div>
        <p
          style={{
            fontFamily: fNunito,
            fontSize: '0.8rem',
            color: C.driftwood,
          }}
        >
          &copy; {new Date().getFullYear()} Ikigai Consulting Group. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

/* ──────────────────────────────────────────────
   PAGE COMPOSITION
   ────────────────────────────────────────────── */
export default function WovenWarmthPage() {
  return (
    <div className={fontVars} style={{ background: C.linen }}>
      <Nav />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PillarsGrid />
        <LoomDiagram />
        <WhoWeServe />
        <WhyIkigai />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
