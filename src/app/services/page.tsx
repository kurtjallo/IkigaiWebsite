'use client'

import Link from 'next/link'
import { pillars } from '@/lib/data/pillars'
import {
  FadeIn,
  PillLabel,
  RoundedCTACard,
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
/*  Proof Points Data                                                  */
/* ------------------------------------------------------------------ */

const proofPoints: Record<string, { text: string; href: string }> = {
  strategic: {
    text: 'Board attendance rose to 85% after strategic alignment work',
    href: '/impact#rebuilding-governance-for-growth',
  },
  governance: {
    text: 'Board moved from crisis-mode to proactive governance in 6 months',
    href: '/impact#rebuilding-governance-for-growth',
  },
  operational: {
    text: '$200K+ secured through restructured funding strategy',
    href: '/impact#scaling-programs-without-losing-mission',
  },
  program: {
    text: '8 programs restructured with clear outcome metrics',
    href: '/impact#scaling-programs-without-losing-mission',
  },
  leadership: {
    text: '3 internal successors identified and promoted within 18 months',
    href: '/impact#developing-leaders-from-within',
  },
  accountability: {
    text: 'Real-time dashboards replaced quarterly guesswork',
    href: '/impact#scaling-programs-without-losing-mission',
  },
  community: {
    text: 'Cross-sector partnerships doubled community reach',
    href: '/impact#scaling-programs-without-losing-mission',
  },
}

/* ------------------------------------------------------------------ */
/*  SVG Patterns — one unique pattern per pillar                       */
/* ------------------------------------------------------------------ */

const pillarSlugs = ['strategic', 'governance', 'operational', 'program', 'leadership', 'accountability', 'community']

function PillarSVGPattern({ slug }: { slug: string }) {
  const gold = tokens.archGoldTextDark
  const leafCount = pillarSlugs.indexOf(slug) + 1 || 1

  const getPositions = (count: number): { tx: number; ty: number; rotation: number; scale: number }[] => {
    if (count === 1) {
      return [{ tx: 0, ty: 0, rotation: 0, scale: 2.4 }]
    }
    if (count === 2) {
      return [
        { tx: -22, ty: 0, rotation: -15, scale: 1.7 },
        { tx: 22, ty: 0, rotation: 15, scale: 1.7 },
      ]
    }
    const radius = count <= 4 ? 34 : count <= 6 ? 40 : 44
    const scale = count <= 3 ? 1.4 : count <= 5 ? 1.15 : 1.0
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
    <svg viewBox="0 0 480 200" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <g transform="translate(360, 100)" opacity="0.35">
        {positions.map((pos, i) => (
          <g key={i} transform={`translate(${pos.tx},${pos.ty}) rotate(${pos.rotation}) scale(${pos.scale})`}>
            <path
              d="M0,-35 C-13,-15 -19,10 0,35 C19,10 13,-15 0,-35Z"
              fill="none"
              stroke={gold}
              strokeWidth="1.2"
            />
            <line x1="0" y1="-28" x2="0" y2="30" stroke={gold} strokeWidth="0.7" />
            <path d="M-9,-12 Q0,-4 9,-12" fill="none" stroke={gold} strokeWidth="0.6" />
            <path d="M-11,6 Q0,14 11,6" fill="none" stroke={gold} strokeWidth="0.6" />
          </g>
        ))}
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Arrow-up-right icon for card header                                */
/* ------------------------------------------------------------------ */

function ArrowUpRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M6 14L14 6M14 6H7M14 6V13" stroke={tokens.archGoldTextDark} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Pillar Card                                                        */
/* ------------------------------------------------------------------ */

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number]
  index: number
}) {
  const number = String(index + 1).padStart(2, '0')
  const proof = proofPoints[pillar.slug]

  return (
    <FadeIn delay={index * 0.08}>
      <article
        id={pillar.slug}
        style={{
          border: `1px solid ${tokens.structuralLine}`,
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#fff',
        }}
      >
        {/* Card Header — deep green with unique SVG pattern */}
        <div
          style={{
            position: 'relative',
            height: '200px',
            backgroundColor: tokens.deepGreen,
            overflow: 'hidden',
          }}
        >
          <PillarSVGPattern slug={pillar.slug} />

          {/* Pillar number — bottom-left */}
          <span
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '1.5rem',
              fontFamily: 'var(--font-ibm-plex-mono)',
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: tokens.archGoldTextDark,
              opacity: 0.7,
            }}
          >
            {number}
          </span>

          {/* Arrow link — top-right */}
          <Link
            href={`/services#${pillar.slug}`}
            aria-label={`View ${pillar.title}`}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: `1px solid rgba(232,213,163,0.25)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(27,58,42,0.5)',
              textDecoration: 'none',
            }}
          >
            <ArrowUpRightIcon />
          </Link>
        </div>

        {/* Card Body */}
        <div style={{ padding: '1.5rem 2rem 2rem' }}>
          {/* Title */}
          <h3
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: '1.5rem',
              fontWeight: 400,
              lineHeight: 1.3,
              color: tokens.ink,
              marginBottom: '0.75rem',
            }}
          >
            {pillar.title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '0.9375rem',
              lineHeight: 1.7,
              color: tokens.bodyGray,
              marginBottom: '1.5rem',
            }}
          >
            {pillar.description}
          </p>

          {/* Outcomes */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.625rem',
              marginBottom: '1.5rem',
            }}
          >
            {pillar.outcomes.slice(0, 2).map((outcome) => (
              <div
                key={outcome}
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
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: tokens.archGold,
                    marginTop: '0.45rem',
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    color: tokens.charcoal,
                  }}
                >
                  {outcome}
                </p>
              </div>
            ))}
          </div>

          {/* Proof Point */}
          {proof && (
            <div
              style={{
                borderLeft: `2px solid ${tokens.archGold}`,
                paddingLeft: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontWeight: 300,
                  fontSize: '0.875rem',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: tokens.charcoal,
                  marginBottom: '0.375rem',
                }}
              >
                {proof.text}
              </p>
              <Link
                href={proof.href}
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  color: tokens.archGoldTextLight,
                  textDecoration: 'none',
                }}
              >
                Read the case study &rarr;
              </Link>
            </div>
          )}

          {/* CTA Button */}
          <button
            type="button"
            onClick={openCalendly}
            className="mobile-cta-text services-card-cta"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.75rem 1.75rem',
              backgroundColor: tokens.archGold,
              color: tokens.ink,
              borderRadius: '1px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {pillar.ctaText}
          </button>
        </div>
      </article>
    </FadeIn>
  )
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <>
      {/* ---- Page Hero ---- */}
      <section
        style={{
          backgroundColor: '#fff',
          paddingTop: '5rem',
          paddingBottom: '3rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 2rem' }}>
          <FadeIn delay={0.05}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <PillLabel>Services</PillLabel>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
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
              Seven Pillars of Organizational Excellence
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
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
              Each pillar addresses a critical dimension of organizational health.
              Together, they form a comprehensive architecture for purpose-driven organizations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ---- Sticky-Scroll Services ---- */}
      <section
        style={{
          backgroundColor: '#fff',
          padding: '2rem 2rem 5rem',
        }}
      >
        <div
          className="services-grid-layout"
          style={{
            maxWidth: '72rem',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* LEFT — Sticky sidebar */}
          <div
            className="services-sticky-sidebar"
            style={{
              position: 'sticky',
              top: '5.5rem',
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
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: tokens.ink,
                  marginBottom: '1rem',
                }}
              >
                Your guide to organizational health
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontWeight: 300,
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: tokens.bodyGray,
                  marginBottom: '2rem',
                }}
              >
                We work across seven interconnected pillars to build organizations
                that don&rsquo;t just survive — they thrive. Explore each pillar to
                see how we can strengthen your foundation.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <button
                type="button"
                onClick={openCalendly}
                className="btn-pill btn-pill-primary services-sidebar-cta"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  padding: '0.75rem 1.75rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Start with a conversation
                <span aria-hidden="true" style={{ fontSize: '1rem' }}>&rarr;</span>
              </button>
            </FadeIn>
          </div>

          {/* RIGHT — Scrolling pillar cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            {pillars.map((pillar, index) => (
              <PillarCard key={pillar.slug} pillar={pillar} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA Card ---- */}
      <section
        style={{
          backgroundColor: '#fff',
          padding: '0 2rem 5rem',
        }}
      >
        <RoundedCTACard
          heading="Ready to strengthen your organization?"
          buttonText="Book a Strategy Call"
          description="Every strong organization starts with a conversation about what's possible."
        />
      </section>

      {/* ---- Responsive styles ---- */}
      <style>{`
        @media (max-width: 900px) {
          .services-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .services-sticky-sidebar {
            position: static !important;
          }
        }
        .services-card-cta {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .services-card-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(201, 168, 76, 0.3);
        }
        .services-sidebar-cta {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .services-sidebar-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(27, 58, 42, 0.25);
        }
      `}</style>
    </>
  )
}
