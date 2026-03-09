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
  const leafCount = variant + 1

  const getPositions = (count: number): { tx: number; ty: number; rotation: number; scale: number }[] => {
    if (count === 1) {
      return [{ tx: 0, ty: 0, rotation: 0, scale: 2 }]
    }
    if (count === 2) {
      return [
        { tx: -18, ty: 0, rotation: -15, scale: 1.4 },
        { tx: 18, ty: 0, rotation: 15, scale: 1.4 },
      ]
    }
    // Arrange in a circle for 3+
    const radius = count <= 4 ? 28 : count <= 6 ? 33 : 36
    const scale = count <= 3 ? 1.15 : count <= 5 ? 0.95 : 0.85
    return Array.from({ length: count }, (_, i) => {
      const angle = (i * 360) / count - 90
      const rad = (angle * Math.PI) / 180
      return {
        tx: radius * Math.cos(rad),
        ty: radius * Math.sin(rad),
        rotation: angle + 90,
        scale,
      }
    })
  }

  const positions = getPositions(leafCount)

  return (
    <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 200 200" style={{ opacity: 0.35 }}>
      {positions.map((pos, i) => (
        <g key={i} transform={`translate(${100 + pos.tx},${100 + pos.ty}) rotate(${pos.rotation}) scale(${pos.scale})`}>
          <path
            d="M0,-35 C-13,-15 -19,10 0,35 C19,10 13,-15 0,-35Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <line x1="0" y1="-28" x2="0" y2="30" stroke="currentColor" strokeWidth="0.7" />
          <path d="M-9,-12 Q0,-4 9,-12" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <path d="M-11,6 Q0,14 11,6" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </g>
      ))}
    </svg>
  )
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
  const cardBase: React.CSSProperties = {
    backgroundColor: tokens.cardSurface,
    borderRadius: 'var(--card-radius, 20px)',
    padding: '2rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  }

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
        <div style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
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
            textAlign: 'center',
            marginBottom: '0.75rem',
          }}
        >
          Why choose Ikigai?
        </h2>
      </FadeIn>

      <FadeIn delay={0.25}>
        <p
          style={{
            fontFamily: 'var(--font-ibm-plex-sans)',
            fontWeight: 400,
            fontSize: '1.0625rem',
            lineHeight: 1.65,
            color: tokens.bodyGray,
            textAlign: 'center',
            maxWidth: '36rem',
            margin: '0 auto 3rem',
          }}
        >
          The nonprofit sector is complex. We cut through the noise
          and focus on what strengthens your mission.
        </p>
      </FadeIn>

      {/* Row 1: Deep Sector Expertise (wide) + Measurable Results */}
      <div className="bento-row" style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
        <FadeIn delay={0.1}>
          <div className="bento-card-hover" style={{ ...cardBase, minHeight: '280px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-instrument-serif)', fontSize: '1.5rem', fontWeight: 400, color: tokens.ink, marginBottom: '0.5rem' }}>
                Deep Sector Expertise
              </h3>
              <p style={{ fontFamily: 'var(--font-ibm-plex-sans)', fontSize: '0.9375rem', color: tokens.bodyGray, lineHeight: 1.6 }}>
                Future-proof your organization with two decades of nonprofit knowledge.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <svg width="100%" height="56" viewBox="0 0 400 56" fill="none" aria-hidden="true">
                <line x1="20" y1="18" x2="380" y2="18" stroke={tokens.deepGreen} strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />
                <line x1="20" y1="18" x2="260" y2="18" stroke={tokens.deepGreen} strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="260" cy="18" r="10" fill={tokens.deepGreen} />
                <rect x="254" y="12" width="12" height="12" rx="2" fill="white" />
                <line x1="20" y1="42" x2="380" y2="42" stroke={tokens.deepGreen} strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />
                <line x1="20" y1="42" x2="320" y2="42" stroke={tokens.deepGreen} strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="320" cy="42" r="8" fill={tokens.deepGreen} />
                <rect x="315" y="37" width="10" height="10" rx="2" fill="white" />
              </svg>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="bento-card-hover" style={{ ...cardBase, minHeight: '280px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-instrument-serif)', fontSize: '1.5rem', fontWeight: 400, color: tokens.ink, marginBottom: '0.5rem' }}>
                Measurable Results
              </h3>
              <p style={{ fontFamily: 'var(--font-ibm-plex-sans)', fontSize: '0.9375rem', color: tokens.bodyGray, lineHeight: 1.6 }}>
                Track real outcomes that matter to funders and stakeholders.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
              <svg width="130" height="130" viewBox="0 0 130 130" fill="none" aria-hidden="true" style={{ opacity: 0.8 }}>
                <circle cx="65" cy="65" r="60" stroke={tokens.deepGreen} strokeWidth="1.5" fill="none" />
                <circle cx="65" cy="65" r="44" stroke={tokens.deepGreen} strokeWidth="1.5" fill="none" />
                <circle cx="65" cy="65" r="28" stroke={tokens.deepGreen} strokeWidth="1.5" fill="none" />
                <circle cx="65" cy="65" r="10" fill={tokens.deepGreen} />
              </svg>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Row 2: Full-Cycle Framework + Hands-On Partnership (wide) */}
      <div className="bento-row" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
        <FadeIn delay={0.2}>
          <div className="bento-card-hover" style={{ ...cardBase, minHeight: '240px', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-instrument-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 400, color: tokens.ink, lineHeight: 1.2 }}>
                Full-Cycle<br />Framework
              </h3>
              <p style={{ fontFamily: 'var(--font-ibm-plex-sans)', fontSize: '0.9375rem', color: tokens.bodyGray, lineHeight: 1.6, marginTop: '0.75rem' }}>
                Think of us as your in-house organizational architects.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.25}>
          <div className="bento-card-hover" style={{ ...cardBase, minHeight: '240px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-instrument-serif)', fontSize: '1.5rem', fontWeight: 400, color: tokens.ink, marginBottom: '0.5rem' }}>
                Hands-On Partnership
              </h3>
              <p style={{ fontFamily: 'var(--font-ibm-plex-sans)', fontSize: '0.9375rem', color: tokens.bodyGray, lineHeight: 1.6 }}>
                We work alongside your team to implement lasting change — building capacity so you lead independently.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <svg width="160" height="80" viewBox="0 0 160 80" fill="none" aria-hidden="true" style={{ opacity: 0.8 }}>
                <circle cx="30" cy="28" r="14" stroke={tokens.deepGreen} strokeWidth="1.5" fill="none" />
                <circle cx="80" cy="22" r="17" stroke={tokens.deepGreen} strokeWidth="1.5" fill="none" />
                <circle cx="130" cy="28" r="14" stroke={tokens.deepGreen} strokeWidth="1.5" fill="none" />
                <path d="M30 42 L30 65 Q30 73 38 73 L72 73" stroke={tokens.deepGreen} strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M80 39 L80 60 Q80 73 90 73 L100 73" stroke={tokens.deepGreen} strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M130 42 L130 65 Q130 73 122 73 L100 73" stroke={tokens.deepGreen} strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Row 3: Stats trio */}
      <div className="bento-row-triple" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
        <FadeIn delay={0.3}>
          <div className="bento-card-hover" style={{ ...cardBase, minHeight: '180px', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true" style={{ marginBottom: '0.75rem' }}>
              <path d="M18 10h20v18c0 5.523-4.477 10-10 10s-10-4.477-10-10V10z" stroke={tokens.archGold} strokeWidth="1.5" fill="none" />
              <path d="M18 16H10c0 6.5 3.5 11.5 8 13" stroke={tokens.archGold} strokeWidth="1.5" fill="none" />
              <path d="M38 16h8c0 6.5-3.5 11.5-8 13" stroke={tokens.archGold} strokeWidth="1.5" fill="none" />
              <line x1="28" y1="38" x2="28" y2="46" stroke={tokens.archGold} strokeWidth="1.5" />
              <line x1="20" y1="46" x2="36" y2="46" stroke={tokens.archGold} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span style={{ fontFamily: 'var(--font-instrument-serif)', fontSize: '1.125rem', fontWeight: 400, color: tokens.ink }}>
              Award winning
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={0.35}>
          <div className="bento-card-hover" style={{ ...cardBase, minHeight: '180px', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.375rem' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={tokens.archGold} aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span style={{ fontFamily: 'var(--font-instrument-serif)', fontSize: '2.75rem', fontWeight: 400, color: tokens.ink, lineHeight: 1 }}>
              85%
            </span>
            <span style={{ fontFamily: 'var(--font-ibm-plex-sans)', fontSize: '0.875rem', color: tokens.bodyGray, marginTop: '0.25rem' }}>
              Board attendance
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="bento-card-hover" style={{ ...cardBase, minHeight: '180px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-instrument-serif)', fontSize: '1.375rem', fontWeight: 400, color: tokens.ink, marginBottom: '0.375rem' }}>
                Real impact
              </h3>
              <p style={{ fontFamily: 'var(--font-ibm-plex-sans)', fontSize: '0.875rem', color: tokens.bodyGray, lineHeight: 1.5 }}>
                $200K+ in new funding secured for our clients.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
              <svg width="90" height="60" viewBox="0 0 90 60" fill="none" aria-hidden="true" style={{ opacity: 0.7 }}>
                <circle cx="45" cy="30" r="26" stroke={tokens.deepGreen} strokeWidth="1.5" fill="none" />
                <circle cx="45" cy="30" r="16" stroke={tokens.deepGreen} strokeWidth="1.5" fill="none" opacity="0.6" />
                <circle cx="45" cy="30" r="6" fill={tokens.deepGreen} opacity="0.5" />
              </svg>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  6. WHO WE SERVE                                                    */
/* ------------------------------------------------------------------ */

const audiences = [
  'NGOs & Charities',
  'Social Service Agencies',
  'Faith-Based Organizations',
  'Women-Led & Justice-Centered Initiatives',
  'Boards & Executive Teams',
]

function WhoWeServeSection() {
  return (
    <section
      style={{
        backgroundColor: tokens.deepGreen,
        padding: 'var(--section-gap, 80px) 1.5rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <FadeIn delay={0.1}>
          <div style={{ marginBottom: '1.25rem' }}>
            <PillLabel>Who We Serve</PillLabel>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 400,
              color: tokens.parchment,
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              maxWidth: '36rem',
              marginBottom: '2.5rem',
            }}
          >
            Built for leaders who carry mission.
          </h2>
        </FadeIn>

        <StaggerWrap staggerDelay={0.08}>
          <div
            className="hp-serve-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '1rem',
            }}
          >
            {audiences.map((audience) => (
              <StaggerItem key={audience}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.25rem 1.5rem',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    height: '100%',
                    minHeight: '4.5rem',
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 10l2.5 2.5L13 8"
                      stroke={tokens.archGold}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
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
/*  7. HOW WE WORK                                                     */
/* ------------------------------------------------------------------ */

function HowWeWorkSection() {
  const steps = [
    {
      num: '01',
      title: 'Discovery Call',
      description: 'A free 30-minute conversation to understand your challenges, goals, and organizational context.',
    },
    {
      num: '02',
      title: 'Custom Blueprint',
      description: 'We assess your current state and design a tailored engagement plan aligned to your priorities.',
    },
    {
      num: '03',
      title: 'Hands-On Implementation',
      description: 'We work alongside your team to build the governance, strategy, and operational systems you need.',
    },
    {
      num: '04',
      title: 'Sustained Support',
      description: 'Ongoing check-ins and adaptive support to ensure lasting change. We build to last, not just to launch.',
    },
  ]

  return (
    <section
      style={{
        backgroundColor: tokens.cardSurface,
        padding: 'var(--section-gap, 80px) 1.5rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <FadeIn delay={0.1}>
          <div style={{ marginBottom: '1.25rem' }}>
            <PillLabel>How We Work</PillLabel>
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
              marginBottom: '0.75rem',
            }}
          >
            From conversation to lasting change.
          </h2>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 400,
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              color: tokens.bodyGray,
              marginBottom: '2.5rem',
            }}
          >
            Typical projects run 3–12 months, with milestones at every stage.
          </p>
        </FadeIn>

        <StaggerWrap staggerDelay={0.1}>
          <div
            className="hp-how-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.25rem',
            }}
          >
            {steps.map((step) => (
              <StaggerItem key={step.num}>
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 'var(--card-radius, 20px)',
                    padding: '2rem 1.75rem',
                    height: '100%',
                    borderTop: `3px solid ${tokens.archGold}`,
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-ibm-plex-mono)',
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      color: tokens.archGoldTextLight,
                      marginBottom: '0.75rem',
                    }}
                  >
                    Step {step.num}
                  </span>
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
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontWeight: 400,
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      color: tokens.bodyGray,
                      margin: 0,
                    }}
                  >
                    {step.description}
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
/*  8. TESTIMONIALS                                                    */
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
      <WhoWeServeSection />
      <HowWeWorkSection />
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

        /* How We Work: 2-col tablet, 1-col mobile */
        @media (max-width: 900px) {
          .hp-how-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .hp-how-grid {
            grid-template-columns: 1fr !important;
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
