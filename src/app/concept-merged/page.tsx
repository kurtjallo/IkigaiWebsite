'use client'

import { pillars } from '@/lib/data/pillars'
import {
  FadeIn,
  StaggerWrap,
  StaggerItem,
  BlueprintGridPattern,
  CornerBrackets,
  SectionLabel,
  CTASection,
  tokens,
} from './shared'

/* ------------------------------------------------------------------ */
/*  HERO SECTION                                                       */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: tokens.deepGreen,
        color: tokens.parchment,
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
              color: tokens.archGoldTextDark,
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
              color: tokens.parchment,
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
              color: tokens.boneDark,
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
              backgroundColor: tokens.archGold,
              color: tokens.ink,
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
/*  PROBLEM SECTION                                                    */
/* ------------------------------------------------------------------ */

function ProblemSection() {
  const painPoints = [
    {
      title: 'Strategic Plans on Shelves',
      desc: 'Beautifully bound documents that never translate into daily decisions or measurable outcomes.',
    },
    {
      title: 'Governance Confusion',
      desc: "Boards that meet but don't lead. Unclear roles, outdated policies, passive oversight.",
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
        backgroundColor: tokens.bone,
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
              color: tokens.deepGreen,
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
                color: tokens.charcoal,
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
                        backgroundColor: tokens.archGold,
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
                          color: tokens.deepGreen,
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
                          color: tokens.charcoal,
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
/*  SOLUTION SECTION                                                   */
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
        backgroundColor: tokens.boneDark,
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
              color: tokens.deepGreen,
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
              color: tokens.charcoal,
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
                        ? `2px solid ${tokens.archGold}`
                        : `1px solid ${tokens.structuralLine}`,
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-ibm-plex-mono)',
                      fontSize: '0.6875rem',
                      fontWeight: 400,
                      letterSpacing: '0.15em',
                      color: tokens.blueprint,
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
                      color: tokens.deepGreen,
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
                      color: tokens.charcoal,
                    }}
                  >
                    {phase.desc}
                  </p>

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
                        stroke={tokens.archGold}
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
/*  PILLARS GRID                                                       */
/* ------------------------------------------------------------------ */

function PillarsGrid() {
  return (
    <section
      style={{
        backgroundColor: tokens.bone,
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
              color: tokens.deepGreen,
              maxWidth: '36rem',
              marginBottom: '1rem',
            }}
          >
            Seven Pillars of{' '}
            <em style={{ fontStyle: 'italic' }}>Ikigai</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: tokens.charcoal,
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
              backgroundColor: tokens.structuralLine,
            }}
          >
            {pillars.map((pillar, idx) => (
              <StaggerItem key={pillar.slug}>
                <div
                  style={{
                    backgroundColor: tokens.boneLight,
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
                      tokens.archGold
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
                      color: tokens.blueprint,
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
                      color: tokens.deepGreen,
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
                      color: tokens.archGoldTextLight,
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
                      color: tokens.charcoal,
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
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function ConceptMergedPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PillarsGrid />
      <CTASection />
    </>
  )
}
