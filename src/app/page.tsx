'use client'

import Link from 'next/link'
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
} from '@/lib/shared'

/* ------------------------------------------------------------------ */
/*  HERO SECTION                                                       */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '75vh',
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
          <Link
            href="/contact"
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
              textDecoration: 'none',
            }}
          >
            Schedule a Strategic Conversation
          </Link>
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
      desc: 'Programs launched with passion but no logic model (a visual map showing how your programs create change). Impact assumed, never measured.',
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
              there. The structure isn&apos;t. Without structural integrity,
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
      desc: 'Assess. Diagnose. Map your organization\u2019s foundations.',
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
      desc: 'Ongoing support, evaluation, and building the ability to adapt and grow.',
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
            Each pillar addresses a core area of organizational health.
            Together, they form a complete integrated framework for lasting
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
                  <Link
                    href={`/services#${pillar.slug}`}
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      color: tokens.archGoldTextLight,
                      textDecoration: 'none',
                      marginTop: '1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    Learn More
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
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
/*  WHO WE SERVE SECTION                                               */
/* ------------------------------------------------------------------ */

function WhoWeServeSection() {
  const audiences = [
    'NGOs & Charities',
    'Social Service Agencies',
    'Faith-Based Organizations',
    'Women-Led & Justice-Centered Initiatives',
    'Boards & Executive Teams',
  ]

  return (
    <section
      style={{
        backgroundColor: tokens.deepGreen,
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="04 / Audience" dark />

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: tokens.parchment,
              maxWidth: '36rem',
              marginBottom: '3rem',
            }}
          >
            Built for Leaders Who Carry{' '}
            <em style={{ fontStyle: 'italic' }}>Mission.</em>
          </h2>
        </FadeIn>

        <StaggerWrap staggerDelay={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 14rem), 1fr))',
              gap: '1.5rem 2rem',
            }}
          >
            {audiences.map((audience) => (
              <StaggerItem key={audience}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    style={{ flexShrink: 0 }}
                  >
                    <path
                      d="M2 8.5L6 12.5L14 3.5"
                      fill="none"
                      stroke={tokens.archGold}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 400,
                      fontSize: '1rem',
                      color: tokens.parchment,
                    }}
                  >
                    {audience}
                  </span>
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
/*  SOCIAL PROOF SECTION                                               */
/* ------------------------------------------------------------------ */

function SocialProofSection() {
  const stats = [
    { value: '85%', label: 'Board Attendance Increase' },
    { value: '$200K', label: 'New Funding Secured' },
    { value: '8', label: 'Programs Restructured' },
  ]

  return (
    <section
      style={{
        backgroundColor: tokens.bone,
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="05 / Proof" />

        {/* Stat bar */}
        <FadeIn delay={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 12rem), 1fr))',
              gap: '2rem',
              marginBottom: '4rem',
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  textAlign: 'center',
                  padding: '1.5rem 1rem',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: 'block',
                    width: '40px',
                    height: '2px',
                    backgroundColor: tokens.archGold,
                    margin: '0 auto 1.25rem',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'var(--font-instrument-serif)',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 400,
                    color: tokens.deepGreen,
                    lineHeight: 1.1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 400,
                    color: tokens.charcoal,
                    letterSpacing: '0.03em',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonial */}
        <FadeIn delay={0.25}>
          <blockquote
            style={{
              maxWidth: '48rem',
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
              padding: '0 1rem',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                fontSize: '5rem',
                lineHeight: 1,
                color: tokens.archGold,
                display: 'block',
                marginBottom: '-1.5rem',
              }}
            >
              &ldquo;
            </span>
            <p
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: tokens.deepGreen,
                marginBottom: '1.5rem',
              }}
            >
              Before working with Ikigai, our board meetings felt like a
              formality. Now our directors arrive prepared, ask strategic
              questions, and actually drive the organization forward.
            </p>
            <footer>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: tokens.deepGreen,
                }}
              >
                Margaret Chen
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 300,
                  color: tokens.charcoal,
                  marginTop: '0.25rem',
                }}
              >
                Board Chair &mdash; Hamilton Community Services Alliance
              </p>
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  WHY IKIGAI SECTION                                                 */
/* ------------------------------------------------------------------ */

function WhyIkigaiSection() {
  const differentiators = [
    {
      title: 'Deep Sector Expertise',
      description:
        "Two decades working exclusively with Ontario\u2019s nonprofit and social service sector. We understand your funding landscape, your governance realities, and the communities you serve.",
    },
    {
      title: 'Full-Cycle Model',
      description:
        "Most consultants deliver a report and leave. Our Blueprint \u2192 Build \u2192 Strengthen \u2192 Sustain model means we stay until the transformation is embedded in your organization\u2019s DNA.",
    },
    {
      title: 'Measurable Results',
      description:
        'Every engagement produces concrete, trackable outcomes. From board attendance rates to funder confidence scores, we measure what matters.',
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
        <SectionLabel label="06 / Differentiation" />

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: tokens.deepGreen,
              maxWidth: '36rem',
              marginBottom: '0.75rem',
            }}
          >
            Why <em style={{ fontStyle: 'italic' }}>Ikigai</em>
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
            What sets us apart from traditional consulting.
          </p>
        </FadeIn>

        <StaggerWrap staggerDelay={0.12}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 18rem), 1fr))',
              gap: '2.5rem',
            }}
          >
            {differentiators.map((item) => (
              <StaggerItem key={item.title}>
                <div>
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'block',
                      width: '40px',
                      height: '2px',
                      backgroundColor: tokens.archGold,
                      marginBottom: '1.25rem',
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: tokens.deepGreen,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 300,
                      fontSize: '0.9375rem',
                      lineHeight: 1.7,
                      color: tokens.charcoal,
                    }}
                  >
                    {item.description}
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
      <style>{`
        @media (min-width: 769px) {
          .hero-section { min-height: 90vh !important; }
        }
      `}</style>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PillarsGrid />
      <WhoWeServeSection />
      <SocialProofSection />
      <WhyIkigaiSection />
      <CTASection buttonText="Book Your Strategy Call" />
    </>
  )
}
