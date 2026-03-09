'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { pillars } from '@/lib/data/pillars'
import { testimonials } from '@/lib/data/testimonials'
import {
  FadeIn,
  StaggerWrap,
  StaggerItem,
  PillLabel,
  RoundedCTACard,
  BentoCard,
  WordReveal,
  tokens,
} from '@/lib/shared'

/* ------------------------------------------------------------------ */
/*  Calendly                                                           */
/* ------------------------------------------------------------------ */

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com'

function openCalendly() {
  window.open(CALENDLY_URL, '_blank')
}

/* ------------------------------------------------------------------ */
/*  SVG Pattern for gallery tiles                                      */
/* ------------------------------------------------------------------ */

function TilePattern({ variant }: { variant: number }) {
  const patterns = [
    // Concentric circles
    <svg key="p1" aria-hidden="true" width="100%" height="100%" viewBox="0 0 200 200" style={{ opacity: 0.12 }}>
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>,
    // Grid with diagonals
    <svg key="p2" aria-hidden="true" width="100%" height="100%" viewBox="0 0 200 200" style={{ opacity: 0.12 }}>
      <path d="M0 0L200 200M200 0L0 200" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M100 0V200M0 100H200" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <rect x="50" y="50" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>,
    // Leaf/organic
    <svg key="p3" aria-hidden="true" width="100%" height="100%" viewBox="0 0 200 200" style={{ opacity: 0.12 }}>
      <path d="M100 20C60 60 30 100 100 180C170 100 140 60 100 20Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M100 50V160" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M70 80Q100 100 130 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M65 110Q100 130 135 110" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>,
    // Hexagonal
    <svg key="p4" aria-hidden="true" width="100%" height="100%" viewBox="0 0 200 200" style={{ opacity: 0.12 }}>
      <polygon points="100,20 170,55 170,125 100,160 30,125 30,55" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <polygon points="100,50 140,70 140,110 100,130 60,110 60,70" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <line x1="100" y1="20" x2="100" y2="160" stroke="currentColor" strokeWidth="0.3" />
      <line x1="30" y1="55" x2="170" y2="125" stroke="currentColor" strokeWidth="0.3" />
      <line x1="170" y1="55" x2="30" y2="125" stroke="currentColor" strokeWidth="0.3" />
    </svg>,
  ]
  return patterns[variant % patterns.length]
}

/* ------------------------------------------------------------------ */
/*  1. HERO SECTION                                                    */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section
      className="hp-hero"
      style={{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'clamp(4rem, 10vw, 7rem) 1.5rem clamp(3rem, 8vw, 5rem)',
      }}
    >
      <FadeIn delay={0.1}>
        <div style={{ marginBottom: '1.5rem' }}>
          <PillLabel>Serving Ontario NGOs for 20+ years</PillLabel>
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <h1
          style={{
            fontFamily: 'var(--font-instrument-serif)',
            fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
            fontWeight: 400,
            color: '#111111',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            maxWidth: '54rem',
            marginBottom: '1.5rem',
          }}
        >
          Architecting Purpose-Driven Organizations to Thrive
        </h1>
      </FadeIn>

      <FadeIn delay={0.4}>
        <p
          style={{
            fontFamily: 'var(--font-ibm-plex-sans)',
            fontWeight: 400,
            fontSize: '1.0625rem',
            lineHeight: 1.65,
            color: tokens.bodyGray,
            maxWidth: '520px',
            marginBottom: '2rem',
          }}
        >
          We help Ontario nonprofits strengthen governance, strategy, and
          operations — with measurable results.
        </p>
      </FadeIn>

      <FadeIn delay={0.55}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <button
            type="button"
            onClick={openCalendly}
            className="btn-pill btn-pill-primary"
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: '0.9375rem',
              fontWeight: 600,
              padding: '0.875rem 2.25rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Book a Strategy Call
          </button>
          <span
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 400,
              fontSize: '0.8125rem',
              color: tokens.bodyGray,
              lineHeight: 1.5,
              textAlign: 'center',
            }}
          >
            Free 30-minute call with Nilda.
            <br />
            <span style={{ fontSize: '0.75rem', opacity: 0.75 }}>
              For leaders ready to strengthen their organization&rsquo;s foundations.
            </span>
          </span>
        </div>
      </FadeIn>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  2. IMAGE GALLERY STRIP                                             */
/* ------------------------------------------------------------------ */

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Governance workshop session' },
  { src: '/images/gallery-2.jpg', alt: 'Strategic planning session' },
  { src: '/images/gallery-3.jpg', alt: 'Community building event' },
  { src: '/images/gallery-4.jpg', alt: 'Leadership development program' },
]

function GalleryStrip() {
  return (
    <section
      className="hp-gallery-strip"
      style={{
        padding: '0 1.5rem',
        maxWidth: '72rem',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
        }}
      >
        {galleryImages.map((img, i) => (
          <div
            key={i}
            style={{
              borderRadius: '16px 16px 0 0',
              aspectRatio: '4 / 3',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  3. ABOUT TEASER                                                    */
/* ------------------------------------------------------------------ */

function AboutTeaser() {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'var(--section-gap, 80px) 1.5rem',
        maxWidth: '72rem',
        margin: '0 auto',
      }}
    >
      <FadeIn delay={0.1}>
        <div style={{ marginBottom: '1.25rem' }}>
          <PillLabel>About</PillLabel>
        </div>
      </FadeIn>

      <h2
        style={{
          fontFamily: 'var(--font-instrument-serif)',
          fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
          fontWeight: 400,
          color: tokens.ink,
          lineHeight: 1.15,
          maxWidth: '36rem',
          marginBottom: '1.5rem',
          letterSpacing: '-0.01em',
        }}
      >
        <WordReveal text="We are organizational architects for purpose-driven organizations." />
      </h2>

      <FadeIn delay={0.3}>
        <p
          style={{
            fontFamily: 'var(--font-ibm-plex-sans)',
            fontWeight: 400,
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            color: tokens.bodyGray,
            maxWidth: '40rem',
            marginBottom: '2rem',
          }}
        >
          Founded by Nilda Bastone, Ikigai Consulting Group brings 20+ years
          of expertise in governance, strategy, and capacity building to
          Ontario&rsquo;s nonprofit sector. We don&rsquo;t just advise — we
          build alongside you.
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <Link
          href="/about"
          style={{
            fontFamily: 'var(--font-ibm-plex-sans)',
            fontSize: '0.9375rem',
            fontWeight: 500,
            color: tokens.deepGreen,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'gap 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.gap = '0.75rem' }}
          onMouseLeave={(e) => { e.currentTarget.style.gap = '0.5rem' }}
        >
          Learn about our approach
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </FadeIn>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  4. SERVICES STICKY-SCROLL                                          */
/* ------------------------------------------------------------------ */

function ServicesSection() {
  return (
    <section
      className="hp-services"
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'var(--section-gap, 80px) 1.5rem',
        maxWidth: '72rem',
        margin: '0 auto',
      }}
    >
      <div
        className="hp-services-inner"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}
      >
        {/* Left panel — sticky */}
        <div
          className="hp-services-sticky"
          style={{
            position: 'sticky',
            top: '7rem',
          }}
        >
          <FadeIn delay={0.1}>
            <div style={{ marginBottom: '1.25rem' }}>
              <PillLabel>Services</PillLabel>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2
              style={{
                fontFamily: 'var(--font-instrument-serif)',
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                fontWeight: 400,
                color: tokens.ink,
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                marginBottom: '1.25rem',
              }}
            >
              Seven pillars of organizational strength.
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontWeight: 400,
                fontSize: '1.0625rem',
                lineHeight: 1.7,
                color: tokens.bodyGray,
                maxWidth: '28rem',
                marginBottom: '2rem',
              }}
            >
              Each pillar addresses a core area of organizational health.
              Together, they form a complete framework for lasting excellence.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Link
              href="/services"
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: tokens.deepGreen,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'gap 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.gap = '0.75rem' }}
              onMouseLeave={(e) => { e.currentTarget.style.gap = '0.5rem' }}
            >
              View all services
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </FadeIn>
        </div>

        {/* Right panel — scrolling cards */}
        <StaggerWrap staggerDelay={0.08}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.slug}>
                <Link
                  href={`/services#${pillar.slug}`}
                  className="hp-pillar-card"
                  style={{
                    display: 'block',
                    borderRadius: 'var(--card-radius, 20px)',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* SVG header */}
                  <div
                    style={{
                      backgroundColor: tokens.deepGreen,
                      height: '200px',
                      position: 'relative',
                      overflow: 'hidden',
                      color: tokens.archGoldTextDark,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TilePattern variant={pillars.indexOf(pillar)} />
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: '1.25rem',
                        fontFamily: 'var(--font-ibm-plex-mono)',
                        fontSize: '0.6875rem',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: tokens.archGoldTextDark,
                        opacity: 0.7,
                      }}
                    >
                      {String(pillars.indexOf(pillar) + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Card body */}
                  <div
                    style={{
                      backgroundColor: tokens.cardSurface,
                      padding: '1.5rem 1.25rem',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-instrument-serif)',
                        fontSize: '1.25rem',
                        fontWeight: 400,
                        color: tokens.ink,
                        marginBottom: '0.5rem',
                        lineHeight: 1.25,
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-ibm-plex-sans)',
                        fontWeight: 400,
                        fontSize: '0.875rem',
                        lineHeight: 1.6,
                        color: tokens.bodyGray,
                      }}
                    >
                      {pillar.description.slice(0, 120)}...
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
/*  5. BENEFITS BENTO GRID                                             */
/* ------------------------------------------------------------------ */

function BenefitsBento() {
  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: 'Deep Sector Expertise',
      description: 'Two decades embedded in Ontario\u2019s nonprofit ecosystem. We know the regulations, the funders, and the challenges unique to mission-driven organizations.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Full-Cycle Framework',
      description: 'Blueprint to sustained outcomes. Our Ikigai Architecture Model covers every dimension of organizational health — no gaps, no guesswork.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: 'Measurable Results',
      description: '85% board attendance increases, $200K in new funding secured, and 3 leadership successors developed. We measure what matters.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Hands-On Partnership',
      description: 'We don\u2019t hand over a report and walk away. We work alongside your team to implement lasting change — building capacity so you can lead independently.',
    },
  ]

  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'var(--section-gap, 80px) 1.5rem',
        maxWidth: '72rem',
        margin: '0 auto',
      }}
    >
      <FadeIn delay={0.1}>
        <div style={{ marginBottom: '1.25rem' }}>
          <PillLabel>Why Ikigai</PillLabel>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2
          style={{
            fontFamily: 'var(--font-instrument-serif)',
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            fontWeight: 400,
            color: tokens.ink,
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            maxWidth: '36rem',
            marginBottom: '2.5rem',
          }}
        >
          Built for leaders who carry mission.
        </h2>
      </FadeIn>

      <div
        className="hp-bento-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '1.25rem',
        }}
      >
        <StaggerWrap staggerDelay={0.1}>
          <div style={{ display: 'contents' }}>
            {/* Row 1: 2/3 + 1/3 */}
            <StaggerItem>
              <BentoCard
                icon={benefits[0].icon}
                title={benefits[0].title}
                description={benefits[0].description}
              />
            </StaggerItem>
            <StaggerItem>
              <BentoCard
                icon={benefits[1].icon}
                title={benefits[1].title}
                description={benefits[1].description}
                style={{ height: '100%' }}
              />
            </StaggerItem>
            {/* Row 2: 1/3 + 2/3 */}
            <StaggerItem>
              <BentoCard
                icon={benefits[2].icon}
                title={benefits[2].title}
                description={benefits[2].description}
                style={{ gridColumn: '1 / 2' }}
              />
            </StaggerItem>
            <StaggerItem>
              <BentoCard
                icon={benefits[3].icon}
                title={benefits[3].title}
                description={benefits[3].description}
                style={{ gridColumn: '2 / 3' }}
              />
            </StaggerItem>
          </div>
        </StaggerWrap>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  6. TESTIMONIALS                                                    */
/* ------------------------------------------------------------------ */

function TestimonialsSection() {
  const displayTestimonials = testimonials.slice(0, 3)

  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'var(--section-gap, 80px) 1.5rem',
        maxWidth: '72rem',
        margin: '0 auto',
      }}
    >
      <FadeIn delay={0.1}>
        <div style={{ marginBottom: '1.25rem' }}>
          <PillLabel>Testimonials</PillLabel>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2
          style={{
            fontFamily: 'var(--font-instrument-serif)',
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            fontWeight: 400,
            color: tokens.ink,
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            maxWidth: '36rem',
            marginBottom: '2.5rem',
          }}
        >
          Trusted by leaders across Ontario.
        </h2>
      </FadeIn>

      <StaggerWrap staggerDelay={0.1}>
        <div
          className="hp-testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
        >
          {displayTestimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div
                className="testimonial-card-hover"
                style={{
                  backgroundColor: tokens.cardSurface,
                  borderRadius: 'var(--card-radius, 20px)',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* 5 stars */}
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill={tokens.archGold}
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontWeight: 400,
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                    color: tokens.ink,
                    flex: 1,
                    margin: 0,
                  }}
                >
                  &ldquo;{t.quote.length > 200 ? t.quote.slice(0, 200) + '...' : t.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: tokens.ink,
                      marginBottom: '0.125rem',
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontSize: '0.8125rem',
                      fontWeight: 400,
                      color: tokens.bodyGray,
                    }}
                  >
                    {t.role}, {t.organization}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerWrap>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  7. FAQ ACCORDION                                                   */
/* ------------------------------------------------------------------ */

const faqItems = [
  {
    question: 'What types of organizations do you work with?',
    answer: 'We specialize in Ontario\u2019s nonprofit sector: NGOs, charities, social service agencies, faith-based organizations, and women-led or justice-centered initiatives. If you\u2019re mission-driven and looking to strengthen your foundations, we\u2019re a great fit.',
  },
  {
    question: 'How long does a typical engagement last?',
    answer: 'Most projects run 3\u201312 months depending on scope, with regular milestones so you always know where things stand. We\u2019ll scope the timeline together during your free discovery call.',
  },
  {
    question: 'Do you only work in Ontario?',
    answer: 'Our deepest roots are in Ontario\u2019s NGO ecosystem, but we\u2019ve supported organizations across Canada. The frameworks and methodologies we use are applicable across contexts.',
  },
  {
    question: 'What makes your approach different from other consultants?',
    answer: 'We don\u2019t hand over a report and walk away. Our Ikigai Architecture Model is a full-cycle framework \u2014 from assessment through sustained implementation. We build alongside your team, transferring capacity so you can lead independently.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Every engagement is scoped to your needs and budget. We offer flexible arrangements and understand the financial realities of nonprofit work. The best next step is a free 30-minute call to discuss your situation.',
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'var(--section-gap, 80px) 1.5rem',
        maxWidth: '72rem',
        margin: '0 auto',
      }}
    >
      <FadeIn delay={0.1}>
        <div style={{ marginBottom: '1.25rem' }}>
          <PillLabel>FAQ</PillLabel>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2
          style={{
            fontFamily: 'var(--font-instrument-serif)',
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            fontWeight: 400,
            color: tokens.ink,
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
            maxWidth: '36rem',
            marginBottom: '2.5rem',
          }}
        >
          Common questions.
        </h2>
      </FadeIn>

      <div
        style={{
          maxWidth: '48rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {faqItems.map((item, idx) => {
          const isOpen = openIndex === idx
          const panelId = `faq-panel-${idx}`
          const buttonId = `faq-button-${idx}`

          return (
            <FadeIn key={idx} delay={0.1 + idx * 0.05}>
              <div
                style={{
                  borderBottom: `1px solid ${tokens.pillBorder}`,
                }}
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '1.25rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: tokens.ink,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontSize: '1.5rem',
                      fontWeight: 300,
                      color: tokens.bodyGray,
                      lineHeight: 1,
                      flexShrink: 0,
                      transition: 'transform 0.3s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      display: 'inline-block',
                      width: '24px',
                      textAlign: 'center',
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-ibm-plex-sans)',
                          fontWeight: 400,
                          fontSize: '0.9375rem',
                          lineHeight: 1.7,
                          color: tokens.bodyGray,
                          paddingBottom: '1.25rem',
                          maxWidth: '36rem',
                        }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GalleryStrip />
      <AboutTeaser />
      <ServicesSection />
      <BenefitsBento />
      <TestimonialsSection />
      <FAQSection />
      <RoundedCTACard
        heading="Let's Build Something That Lasts."
        description="Every strong organization starts with a conversation about what's possible."
        buttonText="Book a Strategy Call"
        microcopy="Free 30-minute call with Nilda. For leaders ready to strengthen their organization's foundations."
      />

      <style>{`
        /* Hero height */
        .hp-hero {
          min-height: 75vh;
        }
        @media (min-width: 769px) {
          .hp-hero {
            min-height: 90vh;
          }
        }

        /* Gallery strip: hidden on mobile */
        @media (max-width: 768px) {
          .hp-gallery-strip {
            display: none !important;
          }
        }

        /* Services: single column on mobile, unstick */
        @media (max-width: 768px) {
          .hp-services-inner {
            grid-template-columns: 1fr !important;
          }
          .hp-services-sticky {
            position: static !important;
          }
        }

        /* Bento grid: single column on mobile */
        @media (max-width: 768px) {
          .hp-bento-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Bento row 2 asymmetry */
        @media (min-width: 769px) {
          .hp-bento-grid {
            grid-template-columns: 2fr 1fr;
          }
          .hp-bento-grid > div:nth-child(3) {
            grid-column: 1 / 2;
          }
          .hp-bento-grid > div:nth-child(4) {
            grid-column: 2 / 3;
          }
        }

        /* Testimonials: single column on mobile */
        @media (max-width: 768px) {
          .hp-testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* CSS variables for spacing/radii */
        :root {
          --section-gap: 80px;
          --card-radius: 20px;
          --card-radius-lg: 24px;
          --card-radius-img: 16px;
        }
        @media (min-width: 768px) {
          :root {
            --section-gap: 120px;
          }
        }
        @media (min-width: 1024px) {
          :root {
            --section-gap: 160px;
          }
        }

        /* Pill button hover */
        .btn-pill-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(27, 58, 42, 0.2);
        }
      `}</style>
    </>
  )
}
