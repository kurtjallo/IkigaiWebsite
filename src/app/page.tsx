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
            className="mobile-min-text mobile-tight-tracking"
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
            We help Ontario nonprofits strengthen governance, strategy, and
            operations &mdash; with measurable results.
          </p>
        </FadeIn>

        <FadeIn delay={0.55}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link
              href="/contact"
              className="mobile-cta-text"
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
                alignSelf: 'flex-start',
              }}
            >
              Book a Strategy Call
            </Link>
            <span
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontWeight: 300,
                fontSize: '0.8125rem',
                color: tokens.boneDark,
                opacity: 0.85,
                lineHeight: 1.5,
              }}
            >
              Free 30-minute call with Nilda.
              <br />
              <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                For leaders ready to strengthen their organization&rsquo;s foundations.
              </span>
            </span>
          </div>
        </FadeIn>

        {/* Credibility strip */}
        <FadeIn delay={0.7}>
          <div
            className="hero-credibility-strip"
            style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: `1px solid rgba(255,255,255,0.12)`,
            }}
          >
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '85%', label: 'Board Attendance Increase' },
              { value: '$200K', label: 'New Funding Secured' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                  ...(i > 0
                    ? {
                        borderLeft: `1px solid rgba(255,255,255,0.12)`,
                        paddingLeft: '2rem',
                      }
                    : {}),
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-instrument-serif)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    color: tokens.archGoldTextDark,
                    lineHeight: 1.2,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="mobile-min-text mobile-tight-tracking"
                  style={{
                    fontFamily: 'var(--font-ibm-plex-mono)',
                    fontSize: '0.6875rem',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: tokens.boneDark,
                    opacity: 0.8,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-credibility-strip {
            flex-direction: column !important;
            gap: 1.25rem !important;
          }
          .hero-credibility-strip > div {
            border-left: none !important;
            padding-left: 0 !important;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            padding-bottom: 1.25rem;
            flex-direction: row !important;
            align-items: baseline !important;
            gap: 0.75rem !important;
          }
          .hero-credibility-strip > div:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}</style>
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
      desc: 'Documents that never translate into daily decisions or measurable outcomes.',
    },
    {
      title: 'Governance Confusion',
      desc: "Boards that meet but don't lead. Unclear roles, passive oversight.",
    },
    {
      title: 'Operational Misalignment',
      desc: 'Teams pulling in different directions. Systems built to survive, not sustain.',
    },
    {
      title: 'Program Drift',
      desc: 'Programs launched without clear outcomes. Impact assumed, never measured.',
    },
    {
      title: 'Leadership Burnout',
      desc: 'Founders carrying everything. No succession plan. No pipeline.',
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
              The passion is there. The structure isn&apos;t. Without strong
              governance, clear strategy, and sound operations, even the
              strongest mission cracks under pressure.
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
                <Link
                  href={`/services#${pillar.slug}`}
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
                    textDecoration: 'none',
                    color: 'inherit',
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
                  <span
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      color: tokens.archGoldTextLight,
                      marginTop: '1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    Learn More
                    <span aria-hidden="true">&rarr;</span>
                  </span>
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
                  className="mobile-min-text"
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
/*  HOW WE WORK SECTION                                                */
/* ------------------------------------------------------------------ */

function HowWeWorkSection() {
  const steps = [
    {
      num: '01',
      title: 'Discovery Call',
      desc: 'A free 30-minute conversation to understand your challenges, goals, and organizational context.',
    },
    {
      num: '02',
      title: 'Custom Blueprint',
      desc: 'A tailored assessment and action plan built around your organization\u2019s specific needs \u2014 not a template.',
    },
    {
      num: '03',
      title: 'Hands-On Implementation',
      desc: 'We work alongside your team to build systems, strengthen governance, and embed lasting change.',
    },
    {
      num: '04',
      title: 'Sustained Support',
      desc: 'Ongoing check-ins and evaluation to ensure results hold and your team can lead independently.',
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
        <SectionLabel label="06 / Process" />

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
            How We <em style={{ fontStyle: 'italic' }}>Work</em>
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
            Every engagement follows a clear path. Typical projects run
            3&ndash;12 months depending on scope, with regular milestones
            so you always know where things stand.
          </p>
        </FadeIn>

        <StaggerWrap staggerDelay={0.1}>
          <div
            className="how-we-work-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 14rem), 1fr))',
              gap: '0',
            }}
          >
            {steps.map((step, idx) => (
              <StaggerItem key={step.num}>
                <div
                  style={{
                    padding: '2rem 1.5rem',
                    borderLeft:
                      idx === 0
                        ? `2px solid ${tokens.archGold}`
                        : `1px solid ${tokens.structuralLine}`,
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
                    Step {step.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-instrument-serif)',
                      fontSize: '1.375rem',
                      fontWeight: 400,
                      color: tokens.deepGreen,
                      marginBottom: '0.75rem',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 300,
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                      color: tokens.charcoal,
                    }}
                  >
                    {step.desc}
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
      <HowWeWorkSection />
      <CTASection />
    </>
  )
}
