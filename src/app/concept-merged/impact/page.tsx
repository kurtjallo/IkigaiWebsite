'use client'

import { caseStudies } from '@/lib/data/case-studies'
import { testimonials } from '@/lib/data/testimonials'
import {
  FadeIn,
  StaggerWrap,
  StaggerItem,
  SectionLabel,
  PageHeader,
  CTASection,
  tokens,
} from '../shared'

/* ------------------------------------------------------------------ */
/*  CASE STUDY SECTION                                                 */
/* ------------------------------------------------------------------ */

function CaseStudySection({
  study,
  index,
}: {
  study: (typeof caseStudies)[number]
  index: number
}) {
  const bgColors = [tokens.bone, tokens.boneDark, tokens.bone]
  const bg = bgColors[index % bgColors.length]
  const isLast = index === caseStudies.length - 1

  return (
    <section
      style={{
        backgroundColor: bg,
        padding: '5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label={`Case Study ${String(index + 1).padStart(2, '0')}`} />

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: tokens.deepGreen,
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
              color: tokens.archGoldTextLight,
              marginBottom: '3rem',
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
                  color: tokens.charcoal,
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
                  color: tokens.charcoal,
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
                color: tokens.charcoal,
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
/*  TESTIMONIALS SECTION                                               */
/* ------------------------------------------------------------------ */

function TestimonialsSection() {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: tokens.deepGreen,
        padding: '6rem 2rem',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="What Our Clients Say" dark />

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: tokens.parchment,
              marginBottom: '3.5rem',
            }}
          >
            Voices of <em style={{ fontStyle: 'italic' }}>Transformation</em>
          </h2>
        </FadeIn>

        <StaggerWrap staggerDelay={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))',
              gap: '1.5rem',
            }}
          >
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <blockquote
                  style={{
                    position: 'relative',
                    backgroundColor: 'rgba(27, 58, 42, 0.5)',
                    border: `1px solid ${tokens.structuralLine}25`,
                    padding: '2.5rem 2rem 2rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 0,
                  }}
                >
                  {/* Decorative gold quotation mark */}
                  <svg
                    aria-hidden="true"
                    width="36"
                    height="28"
                    viewBox="0 0 36 28"
                    style={{
                      marginBottom: '1.25rem',
                      flexShrink: 0,
                    }}
                  >
                    <text
                      x="0"
                      y="28"
                      style={{
                        fontFamily: 'var(--font-instrument-serif)',
                        fontSize: '48px',
                        fill: tokens.archGoldTextDark,
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
                      color: tokens.parchment,
                      flex: 1,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {t.quote}
                  </p>

                  <footer>
                    <p
                      style={{
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        color: tokens.parchment,
                        marginBottom: '0.25rem',
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontWeight: 300,
                        fontSize: '0.8125rem',
                        color: tokens.boneDark,
                      }}
                    >
                      {t.role}, {t.organization}
                    </p>
                  </footer>
                </blockquote>
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

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        tagline="Our Impact"
        heading="Architecture in Action."
        description="Real organizations. Real challenges. Real results. See how the Ikigai Architecture Model&trade; transforms purpose-driven organizations from fragile to resilient."
      />

      {caseStudies.map((study, idx) => (
        <CaseStudySection key={study.slug} study={study} index={idx} />
      ))}

      <TestimonialsSection />

      <CTASection
        heading="Let&rsquo;s Architect Your Organization."
        description="Every resilient organization starts with a conversation about where you are and where you need to be."
        buttonText="Begin the Conversation"
      />
    </>
  )
}
