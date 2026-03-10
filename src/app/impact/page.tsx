'use client'

import { caseStudies } from '@/lib/data/case-studies'
import { testimonials, type Testimonial } from '@/lib/data/testimonials'
import {
  FadeIn,
  StaggerWrap,
  StaggerItem,
  SectionLabel,
  PillLabel,
  RoundedCTACard,
  tokens,
} from '@/lib/shared'

/* ------------------------------------------------------------------ */
/*  Testimonial-to-case-study mapping (by organization name)           */
/* ------------------------------------------------------------------ */

const testimonialByOrg = new Map<string, Testimonial>(
  testimonials.map((t) => [t.organization, t])
)

// Amara Williams (Peel Region Youth Services) has no matching case study
const standaloneTestimonial = testimonials.find(
  (t) => t.organization === 'Peel Region Youth Services'
)!

/* ------------------------------------------------------------------ */
/*  PAGE HERO                                                          */
/* ------------------------------------------------------------------ */

function ImpactHero() {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: 'clamp(4rem, 8vw, 6rem) 2rem clamp(2rem, 4vw, 3rem)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <PillLabel center>Impact</PillLabel>

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
            Impact in Action.
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
            Real organizations. Real challenges. Real results. See how the
            Ikigai Architecture Model&trade; transforms purpose-driven
            organizations from fragile to resilient.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  RESULTS SNAPSHOT                                                   */
/* ------------------------------------------------------------------ */

function ResultsSnapshot() {
  const snapshots = caseStudies.map((study) => ({
    org: study.organization,
    sector: study.sector,
    challenge: study.challenge.split('.')[0] + '.',
    result: study.metrics[0],
    slug: study.slug,
  }))

  return (
    <section
      style={{
        backgroundColor: tokens.cardSurface,
        padding: 'clamp(3rem, 6vw, 5rem) 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          backgroundColor: tokens.cardSurface,
          borderRadius: '1rem',
        }}
      >
        <SectionLabel label="At a Glance" />

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: tokens.deepGreen,
              marginBottom: '2.5rem',
            }}
          >
            Results <em style={{ fontStyle: 'italic' }}>Snapshot</em>
          </h2>
        </FadeIn>

        <StaggerWrap staggerDelay={0.12}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {snapshots.map((row) => (
              <StaggerItem key={row.slug}>
                <a
                  href={`#${row.slug}`}
                  style={{
                    display: 'block',
                    backgroundColor: '#ffffff',
                    borderLeft: `3px solid ${tokens.archGold}`,
                    padding: '1.75rem 2rem',
                    textDecoration: 'none',
                    color: 'inherit',
                    borderRadius: '0.5rem',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderLeftColor = tokens.deepGreen
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderLeftColor = tokens.archGold
                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  }}
                >
                  {/* Top line: org + sector */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.625rem', flexWrap: 'wrap' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontWeight: 500,
                        fontSize: '1rem',
                        color: tokens.deepGreen,
                      }}
                    >
                      {row.org}
                    </p>
                    <span
                      className="mobile-min-text"
                      style={{
                        fontFamily: 'var(--font-ibm-plex-mono)',
                        fontSize: '0.6875rem',
                        fontWeight: 400,
                        letterSpacing: '0.05em',
                        color: tokens.archGoldTextLight,
                      }}
                    >
                      {row.sector}
                    </span>
                  </div>

                  {/* Challenge text */}
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 300,
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      color: tokens.bodyGray,
                      marginBottom: '0.875rem',
                    }}
                  >
                    {row.challenge}
                  </p>

                  {/* Key result — prominent */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: tokens.archGold,
                        flexShrink: 0,
                      }}
                    />
                    <p
                      style={{
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        color: tokens.deepGreen,
                      }}
                    >
                      {row.result}
                    </p>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </div>
        </StaggerWrap>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  CASE STUDY SECTION                                                 */
/* ------------------------------------------------------------------ */

function CaseStudySection({
  study,
  index,
  testimonial,
}: {
  study: (typeof caseStudies)[number]
  index: number
  testimonial?: Testimonial
}) {
  const bgColors = ['#ffffff', tokens.cardSurface, '#ffffff']
  const bg = bgColors[index % bgColors.length]
  const isLast = index === caseStudies.length - 1

  return (
    <section
      id={study.slug}
      style={{
        backgroundColor: bg,
        padding: 'clamp(3.5rem, 7vw, 5rem) 2rem',
        scrollMarginTop: '5rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <PillLabel>{`Case Study ${String(index + 1).padStart(2, '0')}`}</PillLabel>

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: tokens.ink,
              marginBottom: '0.75rem',
            }}
          >
            {study.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-mono)',
              fontSize: '0.8125rem',
              fontWeight: 400,
              letterSpacing: '0.05em',
              color: tokens.bodyGray,
              marginBottom: '2rem',
            }}
          >
            {study.organization} &middot; {study.sector}
          </p>
        </FadeIn>


        {/* Challenge + Approach two-column */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 24rem), 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          <FadeIn delay={0.2}>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: tokens.deepGreen,
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                The Challenge
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontWeight: 300,
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  color: tokens.bodyGray,
                }}
              >
                {study.challenge}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: tokens.deepGreen,
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Our Approach
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontWeight: 300,
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  color: tokens.bodyGray,
                }}
              >
                {study.approach}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Outcome */}
        <FadeIn delay={0.35}>
          <div style={{ marginBottom: '2.5rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: tokens.deepGreen,
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              The Outcome
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontWeight: 300,
                fontSize: '0.9375rem',
                lineHeight: 1.75,
                color: tokens.bodyGray,
                maxWidth: '52rem',
              }}
            >
              {study.outcome}
            </p>
          </div>
        </FadeIn>

        {/* Measurable Results */}
        <FadeIn delay={0.4}>
          <h3
            style={{
              fontFamily: 'var(--font-ibm-plex-mono)',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: tokens.blueprint,
              marginBottom: '1.25rem',
            }}
          >
            Measurable Results
          </h3>
        </FadeIn>

        <StaggerWrap staggerDelay={0.08}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 16rem), 1fr))',
              gap: '1rem',
            }}
          >
            {study.metrics.map((metric) => (
              <StaggerItem key={metric}>
                <div
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: tokens.archGold,
                      marginTop: '0.45rem',
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 500,
                      fontSize: '0.9375rem',
                      lineHeight: 1.5,
                      color: tokens.deepGreen,
                    }}
                  >
                    {metric}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerWrap>

        {/* Embedded testimonial */}
        {testimonial && (
          <FadeIn delay={0.5}>
            <blockquote
              style={{
                marginTop: '3rem',
                padding: '2rem',
                borderLeft: `3px solid ${tokens.archGold}`,
                backgroundColor: index % 2 === 0 ? tokens.cardSurface : '#ffffff',
                borderRadius: '0.5rem',
              }}
            >
              <svg
                aria-hidden="true"
                width="28"
                height="22"
                viewBox="0 0 36 28"
                style={{
                  marginBottom: '0.75rem',
                  flexShrink: 0,
                }}
              >
                <text
                  x="0"
                  y="28"
                  style={{
                    fontFamily: 'var(--font-instrument-serif)',
                    fontSize: '40px',
                    fill: tokens.archGold,
                  }}
                >
                  &ldquo;
                </text>
              </svg>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontWeight: 300,
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  color: tokens.bodyGray,
                  fontStyle: 'italic',
                  marginBottom: '1rem',
                }}
              >
                {testimonial.quote}
              </p>
              <footer>
                <p
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    color: tokens.deepGreen,
                    marginBottom: '0.125rem',
                  }}
                >
                  {testimonial.name}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontWeight: 300,
                    fontSize: '0.8125rem',
                    color: tokens.bodyGray,
                  }}
                >
                  {testimonial.role}, {testimonial.organization}
                </p>
              </footer>
            </blockquote>
          </FadeIn>
        )}

        {/* Gold structural divider (except on last) */}
        {!isLast && (
          <FadeIn delay={0.5}>
            <div
              aria-hidden="true"
              style={{
                marginTop: '4rem',
                height: '1px',
                background: `linear-gradient(to right, ${tokens.archGold}, ${tokens.archGold}40, transparent)`,
                maxWidth: '24rem',
              }}
            />
          </FadeIn>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  STANDALONE TESTIMONIAL SECTION (v2.0 open-format)                  */
/* ------------------------------------------------------------------ */

function StandaloneTestimonialSection({ testimonial }: { testimonial: Testimonial }) {
  return (
    <section
      style={{
        backgroundColor: tokens.deepGreen,
        padding: 'clamp(4rem, 8vw, 5rem) 2rem',
      }}
    >
      <div style={{ maxWidth: '44rem', margin: '0 auto', textAlign: 'center' }}>
        <FadeIn delay={0.1}>
          {/* Five amber stars */}
          <div
            aria-label="5 out of 5 stars"
            style={{
              marginBottom: '1.5rem',
              fontSize: '1.5rem',
              letterSpacing: '0.25em',
              color: tokens.archGold,
            }}
          >
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </div>

          <blockquote style={{ margin: 0 }}>
            <p
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                fontWeight: 400,
                fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                lineHeight: 1.7,
                color: tokens.parchment,
                fontStyle: 'italic',
                marginBottom: '2rem',
                maxWidth: '44rem',
              }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            <footer
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              {/* Circle placeholder avatar */}
              <div
                aria-hidden="true"
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-instrument-serif)',
                    fontSize: '1.125rem',
                    color: tokens.archGoldTextDark,
                    fontWeight: 400,
                  }}
                >
                  {testimonial.name.charAt(0)}
                </span>
              </div>

              {/* Vertical divider */}
              <div
                aria-hidden="true"
                style={{
                  width: '1px',
                  height: '2.5rem',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                }}
              />

              <div style={{ textAlign: 'left' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                    color: '#ffffff',
                    marginBottom: '0.125rem',
                  }}
                >
                  {testimonial.name}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontWeight: 300,
                    fontSize: '0.8125rem',
                    color: tokens.boneDark,
                  }}
                >
                  {testimonial.role}, {testimonial.organization}
                </p>
              </div>
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function ImpactPage() {
  return (
    <>
      <ImpactHero />
      <ResultsSnapshot />

      {caseStudies.map((study, idx) => (
        <CaseStudySection
          key={study.slug}
          study={study}
          index={idx}
          testimonial={testimonialByOrg.get(study.organization)}
        />
      ))}

      <StandaloneTestimonialSection testimonial={standaloneTestimonial} />

      <RoundedCTACard
        heading="Ready to create your own impact story?"
        description="Let's talk about what's possible for your organization."
        buttonText="Book a Strategy Call"
        microcopy="Free 30-minute call with Nilda. For leaders ready to strengthen their organization's foundations."
      />
    </>
  )
}
