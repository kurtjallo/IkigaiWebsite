'use client'

import Link from 'next/link'
import { pillars } from '@/lib/data/pillars'
import {
  FadeIn,
  StaggerWrap,
  StaggerItem,
  PageHeader,
  CTASection,
  SectionLabel,
  tokens,
} from '@/lib/shared'

/* ------------------------------------------------------------------ */
/*  Service Pillar Section                                             */
/* ------------------------------------------------------------------ */

function ServicePillarSection({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number]
  index: number
}) {
  const isEven = index % 2 === 0
  const bgColor = isEven ? tokens.bone : tokens.boneDark
  const number = String(index + 1).padStart(2, '0')
  const labelSlug = pillar.slug.charAt(0).toUpperCase() + pillar.slug.slice(1)

  return (
    <section
      id={pillar.slug}
      style={{
        backgroundColor: bgColor,
        padding: '5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label={`${number} / ${labelSlug}`} />

        <FadeIn delay={0.1}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 28rem), 1fr))',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            {/* Left Column */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: tokens.deepGreen,
                  marginBottom: '0.5rem',
                }}
              >
                {pillar.title}
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: tokens.archGoldTextLight,
                  marginBottom: '1.5rem',
                }}
              >
                {pillar.subtitle}
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  lineHeight: 1.8,
                  color: tokens.charcoal,
                  marginBottom: '2rem',
                }}
              >
                {pillar.description}
              </p>

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
                {pillar.ctaText}
              </Link>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* What's Included */}
              <div
                style={{
                  backgroundColor: tokens.boneLight,
                  padding: '2rem',
                  border: `1px solid ${tokens.structuralLine}`,
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    color: tokens.deepGreen,
                    marginBottom: '1.25rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  What&apos;s Included
                </h3>

                <StaggerWrap staggerDelay={0.06}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.875rem',
                    }}
                  >
                    {pillar.included.map((item) => (
                      <StaggerItem key={item}>
                        <div
                          style={{
                            display: 'flex',
                            gap: '0.875rem',
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
                              marginTop: '0.6rem',
                              flexShrink: 0,
                            }}
                          />
                          <p
                            style={{
                              fontFamily: 'var(--font-ibm-plex-sans)',
                              fontWeight: 300,
                              fontSize: '0.875rem',
                              lineHeight: 1.6,
                              color: tokens.charcoal,
                            }}
                          >
                            {item}
                          </p>
                        </div>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerWrap>
              </div>

              {/* Outcomes */}
              <div
                style={{
                  backgroundColor: tokens.boneLight,
                  padding: '2rem',
                  border: `1px solid ${tokens.structuralLine}`,
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    color: tokens.deepGreen,
                    marginBottom: '1.25rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  Outcomes
                </h3>

                <StaggerWrap staggerDelay={0.06}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.875rem',
                    }}
                  >
                    {pillar.outcomes.map((outcome) => (
                      <StaggerItem key={outcome}>
                        <div
                          style={{
                            display: 'flex',
                            gap: '0.875rem',
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
                              marginTop: '0.4rem',
                              flexShrink: 0,
                            }}
                          />
                          <p
                            style={{
                              fontFamily: 'var(--font-ibm-plex-sans)',
                              fontWeight: 300,
                              fontSize: '0.875rem',
                              lineHeight: 1.6,
                              color: tokens.charcoal,
                            }}
                          >
                            {outcome}
                          </p>
                        </div>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerWrap>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Gold Divider                                                       */
/* ------------------------------------------------------------------ */

function GoldDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0',
      }}
    >
      <span
        style={{
          display: 'block',
          width: '100%',
          maxWidth: '120px',
          height: '1px',
          backgroundColor: tokens.archGold,
        }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        tagline="Our Services"
        heading="Seven Pillars of Organizational Architecture"
        description="Each pillar addresses a critical dimension of organizational health. Together, they form a complete architecture for purpose-driven organizations."
      />

      {pillars.map((pillar, index) => (
        <div key={pillar.slug}>
          <ServicePillarSection pillar={pillar} index={index} />
          {index < pillars.length - 1 && <GoldDivider />}
        </div>
      ))}

      <CTASection
        heading="Ready to Architect Your Organization?"
        description="Every strong organization starts with a conversation about what's possible."
        buttonText="Schedule a Strategic Conversation"
      />
    </>
  )
}
