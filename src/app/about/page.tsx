'use client'

import { values } from '@/lib/data/values'
import {
  FadeIn,
  StaggerWrap,
  StaggerItem,
  SectionLabel,
  PageHeader,
  CTASection,
  tokens,
} from '@/lib/shared'

/* ------------------------------------------------------------------ */
/*  Value Icons (simple line-art SVGs)                                 */
/* ------------------------------------------------------------------ */

function ValueIcon({ icon }: { icon: string }) {
  const size = 40
  const stroke = tokens.archGoldTextDark
  const strokeWidth = 1.5

  switch (icon) {
    case 'shield':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'target':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="12" cy="12" r="6" stroke={stroke} strokeWidth={strokeWidth} />
          <circle cx="12" cy="12" r="2" stroke={stroke} strokeWidth={strokeWidth} />
        </svg>
      )
    case 'scale':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2v20M2 7h20M5 7L2 14c0 1.66 1.34 3 3 3s3-1.34 3-3L5 7zM19 7l-3 7c0 1.66 1.34 3 3 3s3-1.34 3-3L19 7z"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'award':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="9" r="7" stroke={stroke} strokeWidth={strokeWidth} />
          <path
            d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'compass':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke={stroke} strokeWidth={strokeWidth} />
          <polygon
            points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke={stroke} strokeWidth={strokeWidth} />
        </svg>
      )
  }
}

/* ------------------------------------------------------------------ */
/*  FOUNDER BIO SECTION                                                */
/* ------------------------------------------------------------------ */

function FounderBioSection() {
  return (
    <section
      style={{
        backgroundColor: tokens.bone,
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="01 / Our Founder" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 24rem), 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left column: Bio text */}
          <FadeIn delay={0.1}>
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: tokens.deepGreen,
                  marginBottom: '0.5rem',
                }}
              >
                Nilda Bastone
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: tokens.archGoldTextLight,
                  marginBottom: '2rem',
                }}
              >
                Founder & Principal Consultant
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  lineHeight: 1.8,
                  color: tokens.charcoal,
                  marginBottom: '1.5rem',
                }}
              >
                With over two decades of experience in Ontario&rsquo;s nonprofit
                and social services sector &mdash; including leadership at
                Catholic Community Services of York Region &mdash; Nilda
                Bastone founded Ikigai Consulting Group on a simple
                conviction: purpose-driven organizations deserve the same
                structural excellence as any Fortune 500 company.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  lineHeight: 1.8,
                  color: tokens.charcoal,
                }}
              >
                Her approach combines rigorous organizational methodology with
                deep respect for the communities these organizations serve.
                Every engagement begins with listening &mdash; to staff, to
                boards, to the communities at the heart of the mission.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  lineHeight: 1.8,
                  color: tokens.charcoal,
                  marginTop: '1.5rem',
                }}
              >
                Nilda&rsquo;s work has earned the trust of leaders across
                Ontario&rsquo;s nonprofit community, with 37 professional
                recommendations from colleagues and sector partners who
                describe her as a thoughtful, compassionate leader who
                builds welcoming and empowering organizational environments.
              </p>
            </div>
          </FadeIn>

          {/* Right column: Founder photo */}
          <FadeIn delay={0.25}>
            <div
              style={{
                overflow: 'hidden',
                border: `2px solid ${tokens.archGold}`,
                maxWidth: '24rem',
              }}
            >
              <img
                src="/images/founder.jpg"
                alt="Nilda Bastone, Founder & Principal Consultant at Ikigai Consulting Group"
                style={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  VALUES ROW SECTION                                                 */
/* ------------------------------------------------------------------ */

function ValuesSection() {
  return (
    <section
      style={{
        backgroundColor: tokens.deepGreen,
        padding: '6rem 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="02 / Values" dark />

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
            What We Stand For
          </h2>
        </FadeIn>

        <StaggerWrap staggerDelay={0.08}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 12rem), 1fr))',
              gap: '2rem',
            }}
          >
            {values.map((value) => (
              <StaggerItem key={value.name}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <ValueIcon icon={value.icon} />
                  <h3
                    style={{
                      fontFamily: 'var(--font-instrument-serif)',
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: tokens.parchment,
                    }}
                  >
                    {value.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 300,
                      fontSize: '0.8125rem',
                      lineHeight: 1.65,
                      color: tokens.boneDark,
                    }}
                  >
                    {value.description}
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

export default function AboutPage() {
  return (
    <>
      <PageHeader
        tagline="About Ikigai"
        heading="Organizational Architects for Purpose-Driven Organizations"
        description="Founded on the belief that every mission-driven organization deserves structural excellence."
      />
      <FounderBioSection />
      <ValuesSection />
      <CTASection
        heading="Ready to Build Together?"
        description="Let's start a conversation about what your organization needs to thrive."
        buttonText="Book a Strategy Call"
      />
    </>
  )
}
