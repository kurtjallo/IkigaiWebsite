'use client'

import Link from 'next/link'
import { pillars } from '@/lib/data/pillars'
import {
  FadeIn,
  StaggerWrap,
  StaggerItem,
  BlueprintGridPattern,
  SectionLabel,
  PillLabel,
  RoundedCTACard,
  tokens,
} from '@/lib/shared'

/* ------------------------------------------------------------------ */
/*  PAGE HERO                                                          */
/* ------------------------------------------------------------------ */

function ModelHero() {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: 'clamp(4rem, 8vw, 6rem) 2rem clamp(2rem, 4vw, 3rem)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <PillLabel center>The Ikigai Model</PillLabel>

        <FadeIn delay={0.1}>
          <h1
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: tokens.ink,
              marginBottom: '1.25rem',
            }}
          >
            The Ikigai Architecture Model&trade;
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: tokens.bodyGray,
              maxWidth: '35rem',
              margin: '0 auto',
            }}
          >
            Our proprietary framework moves organizations from assessment through
            sustained transformation. Four phases. Seven pillars. One integrated
            system.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  EDITORIAL STATS BLOCK                                              */
/* ------------------------------------------------------------------ */

function EditorialStats() {
  const stats = [
    {
      value: '85%',
      label: 'Average board attendance after governance work',
    },
    {
      value: '$200K+',
      label: 'Funding secured for clients through program architecture',
    },
    {
      value: '3',
      label: 'Internal successors developed and promoted',
    },
  ]

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '0 2rem clamp(3rem, 6vw, 5rem)',
      }}
    >
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <FadeIn delay={0.1}>
          <div
            className="editorial-stats-row"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              marginBottom: '2rem',
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-instrument-serif)',
                    fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                    fontWeight: 300,
                    lineHeight: 1.1,
                    color: tokens.ink,
                    marginBottom: '0.75rem',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontSize: '0.8125rem',
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: tokens.bodyGray,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{ textAlign: 'center' }}>
            <Link
              href="/impact"
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: tokens.archGoldTextLight,
                textDecoration: 'none',
              }}
            >
              &rarr; See all case studies
            </Link>
          </p>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .editorial-stats-row {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  MODEL DIAGRAM SECTION                                              */
/* ------------------------------------------------------------------ */

function ModelDiagramSection() {
  const phases = ['Blueprint', 'Build', 'Strengthen', 'Sustain']
  const pillarNames = [
    'Strategic',
    'Governance',
    'Operational',
    'Program',
    'Leadership',
    'Accountability',
    'Community',
  ]

  return (
    <section
      style={{
        backgroundColor: tokens.bone,
        padding: 'clamp(4rem, 8vw, 6rem) 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="01 / The Framework" />

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
            The Integrated{' '}
            <em style={{ fontStyle: 'italic' }}>Framework</em>
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
            Four phases of transformation mapped across seven organizational
            pillars. Every cell in this matrix represents a deliberate area of
            focused attention.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div
            style={{
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              marginBottom: '1.5rem',
            }}
          >
            <svg
              role="img"
              aria-label="Ikigai Architecture Model diagram showing 4 phases across 7 organizational pillars"
              viewBox="0 0 900 480"
              style={{
                width: '100%',
                minWidth: '600px',
                height: 'auto',
                display: 'block',
              }}
            >
              {/* Phase labels across the top */}
              {phases.map((phase, i) => {
                const x = 160 + i * 175
                return (
                  <g key={phase}>
                    <text
                      x={x + 70}
                      y={32}
                      textAnchor="middle"
                      style={{
                        fontFamily: 'var(--font-ibm-plex-mono)',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                      }}
                      fill={tokens.archGold}
                    >
                      {`Phase ${String(i + 1).padStart(2, '0')}`}
                    </text>
                    <text
                      x={x + 70}
                      y={52}
                      textAnchor="middle"
                      style={{
                        fontFamily: 'var(--font-instrument-serif)',
                        fontSize: '15px',
                        fontWeight: 400,
                      }}
                      fill={tokens.deepGreen}
                    >
                      {phase}
                    </text>
                    {/* Gold arrow connectors between phases */}
                    {i < phases.length - 1 && (
                      <path
                        d={`M${x + 130} 44 L${x + 155} 44`}
                        fill="none"
                        stroke={tokens.archGold}
                        strokeWidth="1.5"
                        markerEnd="url(#arrowhead)"
                      />
                    )}
                  </g>
                )
              })}

              {/* Arrow marker */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="8"
                  markerHeight="6"
                  refX="8"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L8,3 L0,6" fill={tokens.archGold} />
                </marker>
              </defs>

              {/* Horizontal line below phases */}
              <line
                x1="140"
                y1="70"
                x2="860"
                y2="70"
                stroke={tokens.blueprint}
                strokeWidth="1"
                opacity="0.5"
              />

              {/* Pillar labels down the left side */}
              {pillarNames.map((name, i) => {
                const y = 105 + i * 55
                return (
                  <g key={name}>
                    <text
                      x="130"
                      y={y + 8}
                      textAnchor="end"
                      style={{
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontSize: '12px',
                        fontWeight: 500,
                      }}
                      fill={tokens.deepGreen}
                    >
                      {name}
                    </text>
                    <text
                      x="130"
                      y={y - 8}
                      textAnchor="end"
                      style={{
                        fontFamily: 'var(--font-ibm-plex-mono)',
                        fontSize: '9px',
                        fontWeight: 400,
                        letterSpacing: '0.1em',
                      }}
                      fill={tokens.blueprint}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </text>

                    {/* Horizontal grid line */}
                    <line
                      x1="140"
                      y1={y + 22}
                      x2="860"
                      y2={y + 22}
                      stroke={tokens.blueprint}
                      strokeWidth="0.5"
                      opacity="0.2"
                    />
                  </g>
                )
              })}

              {/* Vertical grid lines for phase columns */}
              {phases.map((_, i) => {
                const x = 160 + i * 175
                return (
                  <g key={`vline-${i}`}>
                    <line
                      x1={x}
                      y1="70"
                      x2={x}
                      y2="470"
                      stroke={tokens.blueprint}
                      strokeWidth="0.5"
                      opacity="0.2"
                    />
                    <line
                      x1={x + 140}
                      y1="70"
                      x2={x + 140}
                      y2="470"
                      stroke={tokens.blueprint}
                      strokeWidth="0.5"
                      opacity="0.2"
                    />
                  </g>
                )
              })}

              {/* Grid nodes -- small indicators at each intersection */}
              {pillarNames.map((_, pIdx) => {
                const y = 105 + pIdx * 55
                return phases.map((_, phIdx) => {
                  const x = 160 + phIdx * 175 + 70
                  return (
                    <g key={`node-${pIdx}-${phIdx}`}>
                      {/* Outer ring */}
                      <circle
                        cx={x}
                        cy={y}
                        r="8"
                        fill="none"
                        stroke={tokens.blueprint}
                        strokeWidth="0.75"
                        opacity="0.35"
                      />
                      {/* Inner dot */}
                      <circle
                        cx={x}
                        cy={y}
                        r="3"
                        fill={
                          phIdx === 0
                            ? tokens.archGold
                            : phIdx === 3
                            ? tokens.deepGreen
                            : tokens.blueprint
                        }
                        opacity={0.6 + phIdx * 0.1}
                      />
                      {/* Horizontal connector to next phase */}
                      {phIdx < phases.length - 1 && (
                        <line
                          x1={x + 8}
                          y1={y}
                          x2={x + 175 - 8}
                          y2={y}
                          stroke={tokens.blueprint}
                          strokeWidth="0.5"
                          opacity="0.15"
                          strokeDasharray="4,3"
                        />
                      )}
                    </g>
                  )
                })
              })}

              {/* Bottom closing line */}
              <line
                x1="140"
                y1="470"
                x2="860"
                y2="470"
                stroke={tokens.blueprint}
                strokeWidth="1"
                opacity="0.5"
              />

              {/* Left closing line */}
              <line
                x1="140"
                y1="70"
                x2="140"
                y2="470"
                stroke={tokens.blueprint}
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-mono)',
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.1em',
              color: tokens.charcoal,
              textAlign: 'center',
              opacity: 0.6,
            }}
          >
            Ikigai Architecture Model&trade;
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '0.9375rem',
              lineHeight: 1.8,
              color: tokens.charcoal,
              maxWidth: '52rem',
              margin: '2.5rem auto 0',
              textAlign: 'center',
            }}
          >
            Each cell in the matrix represents a specific focus area where a
            pillar intersects with a phase. For example, during the Blueprint
            phase, Strategic Architecture involves assessing your current
            strategic alignment and identifying gaps. In the Build phase, it
            means designing a new strategic framework tailored to your mission.
            This ensures every pillar receives focused attention at every stage
            of the engagement.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  FOUR PHASES DEEP DIVE                                              */
/* ------------------------------------------------------------------ */

function PhasesDeepDive() {
  const phases = [
    {
      num: '01',
      name: 'Blueprint',
      description:
        'You get an honest, evidence-based picture of where your organization stands. Through assessments, stakeholder interviews, and document analysis, we diagnose structural gaps and untapped potential.',
    },
    {
      num: '02',
      name: 'Build',
      description:
        'You get the governance frameworks, strategic plans, and operational systems your organization needs \u2014 custom-designed to align with your mission and organizational reality.',
    },
    {
      num: '03',
      name: 'Strengthen',
      description:
        'Your people grow into the new structure through coaching, training, and hands-on support. We refine operations and embed accountability at every level.',
    },
    {
      num: '04',
      name: 'Sustain',
      description:
        'You get continued evaluation, adaptive support, and strategic check-ins to stay resilient as conditions change. We don\u2019t build and leave \u2014 we build to last.',
    },
  ]

  return (
    <section
      style={{
        backgroundColor: tokens.boneDark,
        padding: 'clamp(4rem, 8vw, 6rem) 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <PillLabel>Our Process</PillLabel>
        <SectionLabel label="02 / The Process" />

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
            Blueprint. Build. Strengthen.{' '}
            <em style={{ fontStyle: 'italic' }}>Sustain.</em>
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
            Every engagement follows our proven four-phase methodology, adapted
            to your organization&apos;s unique context and challenges.
          </p>
        </FadeIn>

        <StaggerWrap staggerDelay={0.12}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            {phases.map((phase) => (
              <StaggerItem key={phase.num}>
                <div
                  style={{
                    borderLeft: `2px solid ${tokens.archGold}`,
                    padding: '2rem 2.5rem',
                    backgroundColor: tokens.boneLight,
                  }}
                >
                  <span
                    className="mobile-min-text mobile-tight-tracking"
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
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      fontWeight: 400,
                      color: tokens.deepGreen,
                      marginBottom: '1rem',
                    }}
                  >
                    {phase.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 300,
                      fontSize: '0.9375rem',
                      lineHeight: 1.8,
                      color: tokens.charcoal,
                      maxWidth: '52rem',
                    }}
                  >
                    {phase.description}
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
/*  PILLAR INTEGRATION SECTION                                         */
/* ------------------------------------------------------------------ */

function PillarIntegration() {
  return (
    <section
      style={{
        backgroundColor: tokens.bone,
        padding: 'clamp(4rem, 8vw, 6rem) 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="03 / The Pillars" />

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
            <em style={{ fontStyle: 'italic' }}>Organizational Health</em>
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
            Each pillar addresses a core area of organizational health. No
            organization can thrive with one pillar strong and another crumbling.
            The model works because it addresses all seven simultaneously.
          </p>
        </FadeIn>

        <StaggerWrap staggerDelay={0.07}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fill, minmax(min(100%, 20rem), 1fr))',
              gap: '1px',
              backgroundColor: tokens.structuralLine,
            }}
          >
            {pillars.map((pillar, idx) => (
              <StaggerItem key={pillar.slug}>
                <Link
                  href={`/services#${pillar.slug}`}
                  style={{
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: tokens.boneLight,
                      padding: '2rem',
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
                      className="mobile-min-text mobile-tight-tracking"
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
                      className="mobile-min-text"
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
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerWrap>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  WHY IT WORKS SECTION                                               */
/* ------------------------------------------------------------------ */

function WhyItWorks() {
  const features = [
    {
      title: 'Holistic',
      description:
        'All seven pillars are addressed within a unified framework, eliminating organizational blind spots.',
    },
    {
      title: 'Adaptive',
      description:
        'The model flexes to meet organizations where they are \u2014 whether you need a full organizational overhaul or targeted reinforcement.',
    },
    {
      title: 'Sustainable',
      description:
        'Built-in capacity building and ongoing support ensure transformations endure beyond any single engagement.',
    },
  ]

  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: tokens.deepGreen,
        padding: 'clamp(4rem, 8vw, 6rem) 2rem',
        overflow: 'hidden',
      }}
    >
      <BlueprintGridPattern id="why-grid" />

      <div style={{ position: 'relative', maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="04 / Why It Works" dark />

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: tokens.parchment,
              maxWidth: '36rem',
              marginBottom: '1rem',
            }}
          >
            Integration, Not{' '}
            <em style={{ fontStyle: 'italic' }}>Isolation</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: tokens.boneDark,
              maxWidth: '48rem',
              marginBottom: '3.5rem',
            }}
          >
            Most consulting approaches address one problem at a time. A
            strategic plan here. A governance review there. But organizations are
            interconnected systems. Fixing governance without aligning strategy
            creates new tensions. Building programs without accountability
            structures means impact goes unmeasured.
          </p>
        </FadeIn>

        <StaggerWrap staggerDelay={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(100%, 18rem), 1fr))',
              gap: '2.5rem',
            }}
          >
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-instrument-serif)',
                      fontSize: '1.5rem',
                      fontWeight: 400,
                      color: tokens.archGoldTextDark,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 300,
                      fontSize: '0.9375rem',
                      lineHeight: 1.7,
                      color: tokens.boneDark,
                    }}
                  >
                    {feature.description}
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

export default function ModelPage() {
  return (
    <>
      <ModelHero />
      <EditorialStats />
      <ModelDiagramSection />
      <PhasesDeepDive />
      <PillarIntegration />
      <WhyItWorks />
      <RoundedCTACard
        heading="Ready to apply this model to your organization?"
        description="Book a strategy call to explore how the Ikigai Architecture Model maps to your specific needs."
        buttonText="Book a Strategy Call"
        microcopy="Free 30-minute call with Nilda. For leaders ready to strengthen their organization's foundations."
      />
    </>
  )
}
