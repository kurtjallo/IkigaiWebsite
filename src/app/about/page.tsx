'use client'

import { Shield, Target, Scale, Award, Compass } from 'lucide-react'
import { values } from '@/lib/data/values'
import { testimonials } from '@/lib/data/testimonials'
import {
  FadeIn,
  StaggerWrap,
  StaggerItem,
  PillLabel,
  BentoCard,
  RoundedCTACard,
  tokens,
} from '@/lib/shared'

/* ------------------------------------------------------------------ */
/*  Icon map                                                           */
/* ------------------------------------------------------------------ */

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  shield: Shield,
  target: Target,
  scale: Scale,
  award: Award,
  compass: Compass,
}

/* ------------------------------------------------------------------ */
/*  Stats data                                                         */
/* ------------------------------------------------------------------ */

const stats = [
  { number: '20+', label: 'Years of Experience' },
  { number: '85%', label: 'Board Attendance Rate' },
  { number: '$200K+', label: 'Funding Secured' },
  { number: '8', label: 'Programs Evaluated' },
]

/* ------------------------------------------------------------------ */
/*  Margaret Chen testimonial                                          */
/* ------------------------------------------------------------------ */

const margaretTestimonial = testimonials.find((t) => t.name === 'Margaret Chen')!

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. PAGE HERO                                                  */}
      {/* ============================================================ */}
      <section
        style={{
          backgroundColor: '#fff',
          paddingTop: '6.25rem',
          paddingBottom: '3rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <FadeIn>
            <PillLabel center>About us</PillLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                fontSize: 'clamp(3rem, 7vw, 5rem)',
                fontWeight: 400,
                lineHeight: 1.08,
                color: tokens.ink,
                marginTop: '1.5rem',
                marginBottom: '1.25rem',
              }}
            >
              The architect behind the work
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '1.0625rem',
                fontWeight: 400,
                lineHeight: 1.6,
                color: tokens.bodyGray,
                maxWidth: '32rem',
                margin: '0 auto',
              }}
            >
              Meet Nilda Bastone, founder of Ikigai Consulting Group.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. WHO WE ARE — 2-column with photo + badges                 */}
      {/* ============================================================ */}
      <section
        style={{
          backgroundColor: '#fff',
          padding: '4rem 1.5rem 5rem',
        }}
      >
        <div
          className="about-who-grid"
          style={{
            maxWidth: '72rem',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '42% 52%',
            gap: '4%',
            alignItems: 'center',
          }}
        >
          {/* LEFT: text */}
          <FadeIn direction="left">
            <div>
              <PillLabel>Who we are</PillLabel>
              <h2
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: tokens.ink,
                  marginTop: '1.25rem',
                  marginBottom: '1.25rem',
                }}
              >
                About Ikigai Consulting Group
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '1rem',
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: tokens.bodyGray,
                  marginBottom: '1.25rem',
                }}
              >
                Ikigai Consulting Group was founded on a simple conviction:
                purpose-driven organizations deserve the same structural excellence
                as any Fortune 500 company. We work exclusively with Ontario&rsquo;s
                nonprofit sector &mdash; helping charities, social service agencies,
                and community organizations strengthen their governance, strategy,
                and operations with measurable results.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '1rem',
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: tokens.bodyGray,
                  marginBottom: '2rem',
                }}
              >
                Our approach combines rigorous organizational methodology with deep
                respect for the communities these organizations serve. Every
                engagement begins with listening &mdash; to staff, to boards, to the
                communities at the heart of the mission.
              </p>

              {/* Trust bar — placeholder logos */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                {[100, 80, 90, 70, 85].map((w, i) => (
                  <div
                    key={i}
                    style={{
                      width: `${w}px`,
                      height: '20px',
                      backgroundColor: '#D1D5DB',
                      borderRadius: '4px',
                      opacity: 0.5,
                    }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: photo with floating badges */}
          <FadeIn direction="right" delay={0.15}>
            <div style={{ position: 'relative' }}>
              <img
                src="/images/founder.jpg"
                alt="Nilda Bastone, Founder of Ikigai Consulting Group"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  display: 'block',
                  objectFit: 'cover',
                  aspectRatio: '4/5',
                }}
              />
              {/* Badge 1: top-left area */}
              <div
                className="about-badge about-badge--1"
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '-1.5rem',
                  backgroundColor: tokens.deepGreenV2,
                  color: '#fff',
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                  whiteSpace: 'nowrap',
                }}
              >
                20+ Years Experience
              </div>
              {/* Badge 2: bottom-right area */}
              <div
                className="about-badge about-badge--2"
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  right: '-1.5rem',
                  backgroundColor: tokens.deepGreenV2,
                  color: '#fff',
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                  whiteSpace: 'nowrap',
                }}
              >
                Ontario Nonprofit Expert
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. VALUES GRID                                                */}
      {/* ============================================================ */}
      <section
        style={{
          backgroundColor: '#fff',
          padding: '4rem 1.5rem 5rem',
        }}
      >
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <FadeIn>
              <PillLabel center>Mission &amp; Values</PillLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: tokens.ink,
                  marginTop: '1.25rem',
                  marginBottom: '0.75rem',
                }}
              >
                We&rsquo;re on a mission
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '1.0625rem',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: tokens.bodyGray,
                  maxWidth: '36rem',
                  margin: '0 auto',
                }}
              >
                ...to strengthen Ontario&rsquo;s nonprofit sector through structural
                excellence, accountability, and courageous leadership.
              </p>
            </FadeIn>
          </div>

          <StaggerWrap staggerDelay={0.08}>
            <div
              className="about-values-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem',
              }}
            >
              {values.map((value) => {
                const Icon = iconMap[value.icon]
                return (
                  <StaggerItem key={value.name}>
                    <BentoCard>
                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          backgroundColor: '#fff',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                          marginBottom: '1rem',
                        }}
                      >
                        {Icon && <Icon size={22} strokeWidth={1.5} />}
                      </div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-instrument-serif)',
                          fontSize: '1.25rem',
                          fontWeight: 400,
                          color: tokens.ink,
                          marginBottom: '0.5rem',
                        }}
                      >
                        {value.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-ibm-plex-sans)',
                          fontSize: '0.9375rem',
                          fontWeight: 400,
                          lineHeight: 1.65,
                          color: tokens.bodyGray,
                          margin: 0,
                        }}
                      >
                        {value.description}
                      </p>
                    </BentoCard>
                  </StaggerItem>
                )
              })}
            </div>
          </StaggerWrap>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. EDITORIAL STATS BAR                                        */}
      {/* ============================================================ */}
      <section
        style={{
          backgroundColor: '#fff',
          padding: '2rem 1.5rem 5rem',
        }}
      >
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <FadeIn>
            <div
              className="about-stats-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '2rem',
                textAlign: 'center',
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-instrument-serif)',
                      fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                      fontWeight: 300,
                      lineHeight: 1,
                      color: tokens.ink,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontSize: '0.8125rem',
                      fontWeight: 400,
                      color: tokens.bodyGray,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. FOUNDER PROFILE — 2-column                                 */}
      {/* ============================================================ */}
      <section
        style={{
          backgroundColor: '#fff',
          padding: '4rem 1.5rem 5rem',
        }}
      >
        <div
          className="about-founder-grid"
          style={{
            maxWidth: '72rem',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* LEFT: photo */}
          <FadeIn direction="left">
            <img
              src="/images/founder.jpg"
              alt="Nilda Bastone"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                display: 'block',
                objectFit: 'cover',
                aspectRatio: '3/4',
              }}
            />
          </FadeIn>

          {/* RIGHT: bio */}
          <FadeIn direction="right" delay={0.15}>
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-instrument-serif)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: tokens.ink,
                  marginBottom: '0.5rem',
                }}
              >
                Nilda Bastone
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '1.125rem',
                  fontWeight: 400,
                  color: tokens.bodyGray,
                  marginBottom: '1.5rem',
                }}
              >
                Founder &amp; Principal Consultant
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '0.9375rem',
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: tokens.bodyGray,
                  marginBottom: '1.25rem',
                }}
              >
                With over two decades of experience in Ontario&rsquo;s nonprofit and
                social services sector &mdash; including executive leadership at
                Catholic Community Services of York Region &mdash; Nilda established
                Ikigai Consulting Group on a simple conviction: purpose-driven
                organizations deserve the same structural excellence as any Fortune
                500 company.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '0.9375rem',
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: tokens.bodyGray,
                  marginBottom: '1.25rem',
                }}
              >
                Her approach combines rigorous organizational methodology with deep
                respect for the communities these organizations serve. Every
                engagement begins with listening &mdash; to staff, to boards, to the
                communities at the heart of the mission.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '0.9375rem',
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: tokens.bodyGray,
                }}
              >
                Nilda&rsquo;s work has earned the trust of leaders across
                Ontario&rsquo;s nonprofit community, recognized by 37 colleagues and
                sector partners as a thoughtful, compassionate leader who builds
                welcoming and empowering organizational environments.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. STANDALONE TESTIMONIAL                                     */}
      {/* ============================================================ */}
      <section
        style={{
          backgroundColor: '#fff',
          padding: '3rem 1.5rem 5rem',
        }}
      >
        <FadeIn>
          <div
            style={{
              maxWidth: '44rem',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            {/* Stars */}
            <div
              style={{
                fontSize: '1.5rem',
                color: '#d97706',
                letterSpacing: '0.15em',
                marginBottom: '1.5rem',
              }}
              aria-label="5 out of 5 stars"
            >
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>

            <blockquote
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                fontWeight: 400,
                lineHeight: 1.6,
                color: tokens.ink,
                fontStyle: 'normal',
                margin: '0 0 2rem',
              }}
            >
              &ldquo;{margaretTestimonial.quote}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
              }}
            >
              {/* Circle placeholder */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: tokens.cardSurface,
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
              {/* Thin divider */}
              <div
                style={{
                  width: '1px',
                  height: '28px',
                  backgroundColor: tokens.bodyGray,
                  opacity: 0.3,
                }}
                aria-hidden="true"
              />
              <div style={{ textAlign: 'left' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: tokens.ink,
                  }}
                >
                  {margaretTestimonial.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontSize: '0.8125rem',
                    fontWeight: 400,
                    color: tokens.bodyGray,
                  }}
                >
                  {margaretTestimonial.role}, {margaretTestimonial.organization}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ============================================================ */}
      {/* 7. ROUNDED CTA CARD                                           */}
      {/* ============================================================ */}
      <RoundedCTACard
        heading="Ready to architect your organization's future?"
        description="Every strong organization starts with a conversation about what's possible."
        buttonText="Book a Strategy Call"
        microcopy="Free 30-minute call with Nilda. For leaders ready to strengthen their organization's foundations."
      />

      {/* ============================================================ */}
      {/* Responsive styles                                             */}
      {/* ============================================================ */}
      <style>{`
        @media (max-width: 768px) {
          .about-who-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-values-grid {
            grid-template-columns: 1fr !important;
          }
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem 1rem !important;
          }
          .about-founder-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .about-badge--1 {
            left: 0.75rem !important;
            top: 1rem !important;
          }
          .about-badge--2 {
            right: 0.75rem !important;
            bottom: 1rem !important;
          }
        }
      `}</style>
    </>
  )
}
