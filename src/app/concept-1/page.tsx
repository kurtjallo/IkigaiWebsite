// @ts-nocheck
'use client'

import { motion, useReducedMotion } from 'motion/react'
import { instrumentSerif, ibmPlexSans, ibmPlexMono } from './fonts'
import { pillars } from '@/lib/data/pillars'

/* ------------------------------------------------------------------ */
/*  Shared animation helpers                                          */
/* ------------------------------------------------------------------ */

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
  const shouldReduceMotion = useReducedMotion()
  const offsets: Record<string, { x?: number; y?: number }> = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  }

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function StaggerWrap({
  children,
  className = '',
  staggerDelay = 0.1,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' as const },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  SVG Patterns                                                      */
/* ------------------------------------------------------------------ */

function BlueprintGridPattern({ id = 'blueprint-grid' }: { id?: string }) {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.08,
        pointerEvents: 'none',
      }}
    >
      <defs>
        <pattern
          id={id}
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M 30 0 L 30 60 M 0 30 L 60 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

function CornerBrackets() {
  const bracketStyle: React.CSSProperties = {
    position: 'absolute',
    width: '60px',
    height: '60px',
    opacity: 0.15,
    pointerEvents: 'none',
  }

  return (
    <>
      {/* Top-left */}
      <svg style={{ ...bracketStyle, top: '2rem', left: '2rem' }} viewBox="0 0 60 60" aria-hidden="true">
        <path d="M 0 60 L 0 0 L 60 0" fill="none" stroke="var(--arch-gold)" strokeWidth="1.5" />
      </svg>
      {/* Top-right */}
      <svg style={{ ...bracketStyle, top: '2rem', right: '2rem' }} viewBox="0 0 60 60" aria-hidden="true">
        <path d="M 0 0 L 60 0 L 60 60" fill="none" stroke="var(--arch-gold)" strokeWidth="1.5" />
      </svg>
      {/* Bottom-left */}
      <svg style={{ ...bracketStyle, bottom: '2rem', left: '2rem' }} viewBox="0 0 60 60" aria-hidden="true">
        <path d="M 0 0 L 0 60 L 60 60" fill="none" stroke="var(--arch-gold)" strokeWidth="1.5" />
      </svg>
      {/* Bottom-right */}
      <svg style={{ ...bracketStyle, bottom: '2rem', right: '2rem' }} viewBox="0 0 60 60" aria-hidden="true">
        <path d="M 60 0 L 60 60 L 0 60" fill="none" stroke="var(--arch-gold)" strokeWidth="1.5" />
      </svg>
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Section label helper                                              */
/* ------------------------------------------------------------------ */

function SectionLabel({ label }: { label: string }) {
  return (
    <FadeIn>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-ibm-plex-mono)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--arch-gold)',
          }}
        >
          {label}
        </span>
        <span
          aria-hidden="true"
          style={{
            flex: 1,
            height: '1px',
            backgroundColor: 'var(--arch-gold)',
            maxWidth: '120px',
          }}
        />
      </div>
    </FadeIn>
  )
}

/* ------------------------------------------------------------------ */
/*  1. CONCEPT NAV                                                    */
/* ------------------------------------------------------------------ */

function ConceptNav() {
  const navLinks = ['About', 'Services', 'Model', 'Impact', 'Contact']

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--bone)',
        borderBottom: '2px solid var(--charcoal)',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-instrument-serif)',
            fontSize: '1.5rem',
            color: 'var(--deep-green)',
            letterSpacing: '0.08em',
          }}
        >
          IKIGAI
        </span>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {navLinks.map((link) => (
            <span
              key={link}
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--charcoal)',
                cursor: 'pointer',
              }}
            >
              {link}
            </span>
          ))}
          <span
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.5rem 1.25rem',
              backgroundColor: 'var(--arch-gold)',
              color: 'var(--ink)',
              borderRadius: '1px',
              cursor: 'pointer',
            }}
          >
            Book a Call
          </span>
        </div>
      </div>
    </nav>
  )
}

/* ------------------------------------------------------------------ */
/*  2. HERO SECTION                                                   */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--deep-green)',
        color: 'var(--parchment)',
        overflow: 'hidden',
      }}
    >
      <BlueprintGridPattern id="hero-grid" />
      <CornerBrackets />

      <div
        style={{
          position: 'relative',
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '6rem 2rem',
          width: '100%',
        }}
      >
        <FadeIn delay={0.1}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-mono)',
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--arch-gold-text-dark)',
              marginBottom: '1.5rem',
            }}
          >
            Organizational Architects
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <h1
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: 'var(--parchment)',
              maxWidth: '50rem',
              marginBottom: '2rem',
            }}
          >
            Architecting Purpose-Driven Organizations{' '}
            <em style={{ fontStyle: 'italic' }}>to Thrive</em>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--bone-dark)',
              maxWidth: '38rem',
              marginBottom: '2.5rem',
            }}
          >
            We design the structural foundations that turn mission-driven
            organizations into enduring institutions. Strategy. Governance.
            Operations. Leadership. Built to last.
          </p>
        </FadeIn>

        <FadeIn delay={0.55}>
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.875rem 2rem',
              backgroundColor: 'var(--arch-gold)',
              color: 'var(--ink)',
              borderRadius: '1px',
              cursor: 'pointer',
            }}
          >
            Schedule a Strategic Conversation
          </span>
        </FadeIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  3. PROBLEM SECTION                                                */
/* ------------------------------------------------------------------ */

function ProblemSection() {
  const painPoints = [
    {
      title: 'Strategic Plans on Shelves',
      desc: 'Beautifully bound documents that never translate into daily decisions or measurable outcomes.',
    },
    {
      title: 'Governance Confusion',
      desc: 'Boards that meet but don\'t lead. Unclear roles, outdated policies, passive oversight.',
    },
    {
      title: 'Operational Misalignment',
      desc: 'Teams working hard but pulling in different directions. Systems built to survive, not to sustain.',
    },
    {
      title: 'Program Drift',
      desc: 'Programs launched with passion but no logic model. Impact assumed, never measured.',
    },
    {
      title: 'Leadership Burnout',
      desc: 'Founders carrying organizations on their backs. No succession. No pipeline. No sustainability.',
    },
  ]

  return (
    <section
      style={{
        backgroundColor: 'var(--bone)',
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="01 / Problem" />

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'var(--deep-green)',
              maxWidth: '36rem',
              marginBottom: '3rem',
            }}
          >
            Strong Missions.{' '}
            <em style={{ fontStyle: 'italic' }}>Fragile Structures.</em>
          </h2>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 28rem), 1fr))',
            gap: '3rem',
          }}
        >
          <FadeIn delay={0.2}>
            <p
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontWeight: 300,
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: 'var(--charcoal)',
              }}
            >
              Purpose-driven organizations are built on powerful missions -- but
              too often, they operate on fragile infrastructure. The passion is
              there. The structure isn&apos;t. Without architectural integrity,
              even the strongest mission cracks under pressure.
            </p>
          </FadeIn>

          <StaggerWrap staggerDelay={0.08}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {painPoints.map((point) => (
                <StaggerItem key={point.title}>
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-block',
                        width: '20px',
                        height: '2px',
                        backgroundColor: 'var(--arch-gold)',
                        marginTop: '0.7rem',
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontFamily: 'var(--font-ibm-plex-sans)',
                          fontWeight: 500,
                          fontSize: '0.9375rem',
                          color: 'var(--deep-green)',
                          marginBottom: '0.25rem',
                        }}
                      >
                        {point.title}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-ibm-plex-sans)',
                          fontWeight: 300,
                          fontSize: '0.875rem',
                          lineHeight: 1.6,
                          color: 'var(--charcoal)',
                        }}
                      >
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerWrap>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  4. SOLUTION SECTION                                               */
/* ------------------------------------------------------------------ */

function SolutionSection() {
  const phases = [
    {
      num: '01',
      name: 'Blueprint',
      desc: 'Assess. Diagnose. Map your organizational architecture.',
    },
    {
      num: '02',
      name: 'Build',
      desc: 'Design systems, structures, and frameworks that align with mission.',
    },
    {
      num: '03',
      name: 'Strengthen',
      desc: 'Develop leadership, refine operations, embed accountability.',
    },
    {
      num: '04',
      name: 'Sustain',
      desc: 'Ongoing support, evaluation, and adaptive capacity building.',
    },
  ]

  return (
    <section
      style={{
        backgroundColor: 'var(--bone-dark)',
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="02 / Solution" />

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'var(--deep-green)',
              maxWidth: '36rem',
              marginBottom: '1rem',
            }}
          >
            We Are{' '}
            <em style={{ fontStyle: 'italic' }}>Organizational Architects.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: 'var(--charcoal)',
              maxWidth: '40rem',
              marginBottom: '3.5rem',
            }}
          >
            The Ikigai Architecture Model&trade; is a full-cycle framework that
            moves organizations from assessment through sustained transformation.
          </p>
        </FadeIn>

        <StaggerWrap staggerDelay={0.12}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 14rem), 1fr))',
              gap: '0',
              position: 'relative',
            }}
          >
            {phases.map((phase, idx) => (
              <StaggerItem key={phase.num}>
                <div
                  style={{
                    padding: '2rem 1.5rem',
                    borderLeft:
                      idx === 0
                        ? '2px solid var(--arch-gold)'
                        : '1px solid var(--structural-line)',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-ibm-plex-mono)',
                      fontSize: '0.6875rem',
                      fontWeight: 400,
                      letterSpacing: '0.15em',
                      color: 'var(--blueprint)',
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Phase {phase.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-instrument-serif)',
                      fontSize: '1.5rem',
                      fontWeight: 400,
                      color: 'var(--deep-green)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {phase.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 300,
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      color: 'var(--charcoal)',
                    }}
                  >
                    {phase.desc}
                  </p>

                  {/* Connecting arrow */}
                  {idx < phases.length - 1 && (
                    <svg
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        right: '-12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '24px',
                        height: '24px',
                        zIndex: 2,
                      }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M8 4 L16 12 L8 20"
                        fill="none"
                        stroke="var(--arch-gold)"
                        strokeWidth="1.5"
                      />
                    </svg>
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerWrap>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  5. PILLARS GRID                                                   */
/* ------------------------------------------------------------------ */

function PillarsGrid() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bone)',
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="03 / Pillars" />

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'var(--deep-green)',
              maxWidth: '36rem',
              marginBottom: '1rem',
            }}
          >
            Seven Pillars of{' '}
            <em style={{ fontStyle: 'italic' }}>Organizational Architecture</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: 'var(--charcoal)',
              maxWidth: '40rem',
              marginBottom: '3rem',
            }}
          >
            Each pillar represents a critical structural element. Together, they
            form a complete architectural framework for organizational
            excellence.
          </p>
        </FadeIn>

        <StaggerWrap staggerDelay={0.07}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 20rem), 1fr))',
              gap: '1px',
              backgroundColor: 'var(--structural-line)',
            }}
          >
            {pillars.map((pillar, idx) => (
              <StaggerItem key={pillar.slug}>
                <div
                  style={{
                    backgroundColor: 'var(--bone-light)',
                    padding: '2rem',
                    borderRadius: '0',
                    borderLeft: '3px solid transparent',
                    transition: 'border-color 0.25s ease',
                    cursor: 'pointer',
                    minHeight: '12rem',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderLeftColor =
                      'var(--arch-gold)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderLeftColor =
                      'transparent'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-ibm-plex-mono)',
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      color: 'var(--blueprint)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-instrument-serif)',
                      fontSize: '1.375rem',
                      fontWeight: 400,
                      color: 'var(--deep-green)',
                      marginBottom: '0.375rem',
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-mono)',
                      fontSize: '0.6875rem',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                      color: 'var(--arch-gold-text-light)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {pillar.subtitle}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 300,
                      fontSize: '0.8125rem',
                      lineHeight: 1.65,
                      color: 'var(--charcoal)',
                      flex: 1,
                    }}
                  >
                    {pillar.description.slice(0, 140)}...
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerWrap>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  6. IKIGAI MODEL SVG                                               */
/* ------------------------------------------------------------------ */

function IkigaiModelSection() {
  const pillarNames = [
    'Strategic',
    'Governance',
    'Operational',
    'Program',
    'Leadership',
    'Accountability',
    'Community',
  ]
  const columnHeights = [280, 320, 300, 340, 320, 290, 310]
  const colWidth = 80
  const gap = 16
  const totalWidth = 7 * colWidth + 6 * gap
  const marginLeft = 80
  const marginRight = 40
  const svgWidth = totalWidth + marginLeft + marginRight
  const baselineY = 440
  const entablatureY = 60
  const phaseLabels = [
    { name: 'Blueprint', y: 380, style: 'dashed' as const },
    { name: 'Build', y: 300, style: 'solid' as const },
    { name: 'Strengthen', y: 220, style: 'hatched' as const },
    { name: 'Sustain', y: 140, style: 'double' as const },
  ]

  return (
    <section
      style={{
        backgroundColor: 'var(--bone)',
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="04 / The Model" />

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'var(--deep-green)',
              maxWidth: '36rem',
              marginBottom: '3rem',
            }}
          >
            The Ikigai Architecture{' '}
            <em style={{ fontStyle: 'italic' }}>Model&trade;</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div
            style={{
              width: '100%',
              overflowX: 'auto',
              padding: '1rem 0',
            }}
          >
            <svg
              viewBox={`0 0 ${svgWidth} 520`}
              style={{
                width: '100%',
                maxWidth: '56rem',
                margin: '0 auto',
                display: 'block',
              }}
              role="img"
              aria-label="Ikigai Architecture Model -- An architectural elevation diagram showing seven pillars representing organizational architecture areas, with four horizontal phases: Blueprint, Build, Strengthen, and Sustain."
            >
              <defs>
                <pattern
                  id="hatch"
                  width="6"
                  height="6"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="6"
                    stroke="var(--deep-green)"
                    strokeWidth="0.75"
                    opacity="0.35"
                  />
                </pattern>
              </defs>

              {/* Foundation baseline */}
              <line
                x1={marginLeft - 20}
                y1={baselineY}
                x2={marginLeft + totalWidth + 20}
                y2={baselineY}
                stroke="var(--deep-green)"
                strokeWidth="3"
              />
              <text
                x={marginLeft + totalWidth / 2}
                y={baselineY + 28}
                textAnchor="middle"
                style={{
                  fontFamily: 'var(--font-ibm-plex-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  fill: 'var(--deep-green)',
                }}
              >
                MISSION
              </text>

              {/* Entablature beam */}
              <rect
                x={marginLeft - 20}
                y={entablatureY}
                width={totalWidth + 40}
                height={8}
                fill="var(--deep-green)"
                opacity="0.9"
              />
              <line
                x1={marginLeft - 20}
                y1={entablatureY + 12}
                x2={marginLeft + totalWidth + 20}
                y2={entablatureY + 12}
                stroke="var(--deep-green)"
                strokeWidth="1"
              />
              <text
                x={marginLeft + totalWidth / 2}
                y={entablatureY - 18}
                textAnchor="middle"
                style={{
                  fontFamily: 'var(--font-ibm-plex-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  fill: 'var(--deep-green)',
                }}
              >
                PURPOSE
              </text>
              <text
                x={marginLeft + totalWidth / 2}
                y={entablatureY - 36}
                textAnchor="middle"
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  fill: 'var(--arch-gold-text-light)',
                }}
              >
                Ikigai Architecture Model&trade;
              </text>

              {/* 7 Columns */}
              {pillarNames.map((name, i) => {
                const x = marginLeft + i * (colWidth + gap)
                const colTop = baselineY - columnHeights[i]

                return (
                  <g key={name}>
                    {/* Column rectangle */}
                    <rect
                      x={x}
                      y={colTop}
                      width={colWidth}
                      height={columnHeights[i]}
                      fill="none"
                      stroke="var(--deep-green)"
                      strokeWidth="1.5"
                      opacity="0.7"
                    />
                    {/* Column fill pattern */}
                    <rect
                      x={x + 1}
                      y={colTop + 1}
                      width={colWidth - 2}
                      height={columnHeights[i] - 2}
                      fill="var(--deep-green)"
                      opacity="0.04"
                    />
                    {/* Pillar name (rotated) */}
                    <text
                      x={x + colWidth / 2}
                      y={baselineY - 20}
                      textAnchor="middle"
                      transform={`rotate(-90, ${x + colWidth / 2}, ${baselineY - 20})`}
                      style={{
                        fontFamily: 'var(--font-ibm-plex-mono)',
                        fontSize: '9px',
                        fontWeight: 400,
                        letterSpacing: '0.12em',
                        fill: 'var(--deep-green)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {name}
                    </text>
                    {/* Capital detail (small rectangle at top) */}
                    <rect
                      x={x - 3}
                      y={colTop}
                      width={colWidth + 6}
                      height={6}
                      fill="var(--deep-green)"
                      opacity="0.25"
                    />
                    {/* Base detail */}
                    <rect
                      x={x - 2}
                      y={baselineY - 6}
                      width={colWidth + 4}
                      height={6}
                      fill="var(--deep-green)"
                      opacity="0.2"
                    />
                  </g>
                )
              })}

              {/* 4 Phase strata */}
              {phaseLabels.map((phase) => {
                const x1 = marginLeft - 20
                const x2 = marginLeft + totalWidth + 20

                return (
                  <g key={phase.name}>
                    {phase.style === 'dashed' && (
                      <line
                        x1={x1}
                        y1={phase.y}
                        x2={x2}
                        y2={phase.y}
                        stroke="var(--deep-green)"
                        strokeWidth="1"
                        strokeDasharray="8 4"
                        opacity="0.4"
                      />
                    )}
                    {phase.style === 'solid' && (
                      <line
                        x1={x1}
                        y1={phase.y}
                        x2={x2}
                        y2={phase.y}
                        stroke="var(--deep-green)"
                        strokeWidth="2"
                        opacity="0.4"
                      />
                    )}
                    {phase.style === 'hatched' && (
                      <>
                        <rect
                          x={x1}
                          y={phase.y - 3}
                          width={x2 - x1}
                          height={6}
                          fill="url(#hatch)"
                          opacity="0.6"
                        />
                        <line
                          x1={x1}
                          y1={phase.y}
                          x2={x2}
                          y2={phase.y}
                          stroke="var(--deep-green)"
                          strokeWidth="0.75"
                          opacity="0.3"
                        />
                      </>
                    )}
                    {phase.style === 'double' && (
                      <>
                        <line
                          x1={x1}
                          y1={phase.y - 2}
                          x2={x2}
                          y2={phase.y - 2}
                          stroke="var(--deep-green)"
                          strokeWidth="1"
                          opacity="0.4"
                        />
                        <line
                          x1={x1}
                          y1={phase.y + 2}
                          x2={x2}
                          y2={phase.y + 2}
                          stroke="var(--deep-green)"
                          strokeWidth="1"
                          opacity="0.4"
                        />
                      </>
                    )}

                    {/* Phase label */}
                    <text
                      x={marginLeft - 26}
                      y={phase.y + 4}
                      textAnchor="end"
                      style={{
                        fontFamily: 'var(--font-ibm-plex-mono)',
                        fontSize: '8px',
                        fontWeight: 400,
                        letterSpacing: '0.1em',
                        fill: 'var(--blueprint)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {phase.name}
                    </text>
                  </g>
                )
              })}

              {/* Dimension annotations */}
              {/* "7 PILLARS" */}
              <g>
                <line
                  x1={marginLeft}
                  y1={baselineY + 50}
                  x2={marginLeft + totalWidth}
                  y2={baselineY + 50}
                  stroke="var(--blueprint)"
                  strokeWidth="0.75"
                />
                <line
                  x1={marginLeft}
                  y1={baselineY + 44}
                  x2={marginLeft}
                  y2={baselineY + 56}
                  stroke="var(--blueprint)"
                  strokeWidth="0.75"
                />
                <line
                  x1={marginLeft + totalWidth}
                  y1={baselineY + 44}
                  x2={marginLeft + totalWidth}
                  y2={baselineY + 56}
                  stroke="var(--blueprint)"
                  strokeWidth="0.75"
                />
                <text
                  x={marginLeft + totalWidth / 2}
                  y={baselineY + 68}
                  textAnchor="middle"
                  style={{
                    fontFamily: 'var(--font-ibm-plex-mono)',
                    fontSize: '9px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    fill: 'var(--blueprint)',
                  }}
                >
                  7 PILLARS
                </text>
              </g>

              {/* "4 PHASES" */}
              <g>
                <line
                  x1={marginLeft + totalWidth + 35}
                  y1={phaseLabels[0].y}
                  x2={marginLeft + totalWidth + 35}
                  y2={phaseLabels[3].y}
                  stroke="var(--blueprint)"
                  strokeWidth="0.75"
                />
                <line
                  x1={marginLeft + totalWidth + 29}
                  y1={phaseLabels[0].y}
                  x2={marginLeft + totalWidth + 41}
                  y2={phaseLabels[0].y}
                  stroke="var(--blueprint)"
                  strokeWidth="0.75"
                />
                <line
                  x1={marginLeft + totalWidth + 29}
                  y1={phaseLabels[3].y}
                  x2={marginLeft + totalWidth + 41}
                  y2={phaseLabels[3].y}
                  stroke="var(--blueprint)"
                  strokeWidth="0.75"
                />
                <text
                  x={marginLeft + totalWidth + 38}
                  y={(phaseLabels[0].y + phaseLabels[3].y) / 2}
                  textAnchor="middle"
                  transform={`rotate(90, ${marginLeft + totalWidth + 38}, ${(phaseLabels[0].y + phaseLabels[3].y) / 2})`}
                  style={{
                    fontFamily: 'var(--font-ibm-plex-mono)',
                    fontSize: '9px',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    fill: 'var(--blueprint)',
                  }}
                >
                  4 PHASES
                </text>
              </g>

              {/* "1 MODEL" at top-right */}
              <text
                x={marginLeft + totalWidth + 20}
                y={entablatureY - 8}
                textAnchor="start"
                style={{
                  fontFamily: 'var(--font-ibm-plex-mono)',
                  fontSize: '9px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  fill: 'var(--blueprint)',
                }}
              >
                1 MODEL
              </text>
            </svg>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  7. CTA SECTION                                                    */
/* ------------------------------------------------------------------ */

function CTASection() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: 'var(--deep-green-950)',
        padding: '6rem 2rem',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <BlueprintGridPattern id="cta-grid" />

      <div
        style={{
          position: 'relative',
          maxWidth: '48rem',
          margin: '0 auto',
        }}
      >
        <FadeIn delay={0.1}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: '3rem',
                height: '1px',
                backgroundColor: 'var(--arch-gold)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-ibm-plex-mono)',
                fontSize: '0.75rem',
                fontWeight: 400,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--arch-gold-text-dark)',
              }}
            >
              Begin the Conversation
            </span>
            <span
              aria-hidden="true"
              style={{
                width: '3rem',
                height: '1px',
                backgroundColor: 'var(--arch-gold)',
              }}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'var(--parchment)',
              marginBottom: '1.5rem',
            }}
          >
            Let&apos;s Architect{' '}
            <em style={{ fontStyle: 'italic' }}>Your Organization.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: 'var(--bone-dark)',
              marginBottom: '2.5rem',
            }}
          >
            Whether you&apos;re building from the ground up or strengthening
            existing structures, we&apos;re ready to listen, assess, and design.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.875rem 2.5rem',
              backgroundColor: 'var(--arch-gold)',
              color: 'var(--ink)',
              borderRadius: '1px',
              cursor: 'pointer',
            }}
          >
            Book Your Strategy Call
          </span>
        </FadeIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                    */
/* ------------------------------------------------------------------ */

export default function Concept1Page() {
  return (
    <div
      className={`${instrumentSerif.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
      style={
        {
          /* ---- Design Tokens ---- */
          '--bone': '#F5F0E8',
          '--bone-dark': '#EBE4D8',
          '--bone-light': '#FAF8F3',
          '--parchment': '#FFFDF8',

          '--deep-green': '#1B3A2A',
          '--deep-green-950': '#0D1F14',

          '--arch-gold': '#C9A84C',
          '--arch-gold-text-dark': '#E8D5A3',
          '--arch-gold-text-light': '#7A5C16',

          '--blueprint': '#4A6FA5',
          '--charcoal': '#2C2C2C',
          '--ink': '#1A1A1A',

          '--structural-line': '#D5CFC4',

          '--font-instrument-serif': instrumentSerif.style.fontFamily,
          '--font-ibm-plex-sans': ibmPlexSans.style.fontFamily,
          '--font-ibm-plex-mono': ibmPlexMono.style.fontFamily,

          /* Reset */
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        } as React.CSSProperties
      }
    >
      <ConceptNav />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PillarsGrid />
      <IkigaiModelSection />
      <CTASection />
    </div>
  )
}
