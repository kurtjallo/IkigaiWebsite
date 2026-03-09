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

function PillarSVGPattern({ slug }: { slug: string }) {
  const gold = tokens.archGoldTextDark

  switch (slug) {
    case 'strategic':
      // Compass rose on blueprint grid
      return (
        <svg viewBox="0 0 480 200" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* Blueprint grid */}
          <defs>
            <pattern id="bp-strategic" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={gold} strokeWidth="0.3" opacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bp-strategic)" />
          {/* Compass rose */}
          <g transform="translate(360, 100)" opacity="0.35">
            <circle r="50" fill="none" stroke={gold} strokeWidth="1" />
            <circle r="35" fill="none" stroke={gold} strokeWidth="0.5" />
            <line x1="0" y1="-55" x2="0" y2="55" stroke={gold} strokeWidth="0.7" />
            <line x1="-55" y1="0" x2="55" y2="0" stroke={gold} strokeWidth="0.7" />
            <line x1="-40" y1="-40" x2="40" y2="40" stroke={gold} strokeWidth="0.4" />
            <line x1="40" y1="-40" x2="-40" y2="40" stroke={gold} strokeWidth="0.4" />
            <polygon points="0,-52 -4,-40 4,-40" fill={gold} opacity="0.6" />
            <polygon points="0,52 -4,40 4,40" fill={gold} opacity="0.4" />
            <polygon points="-52,0 -40,-4 -40,4" fill={gold} opacity="0.4" />
            <polygon points="52,0 40,-4 40,4" fill={gold} opacity="0.4" />
          </g>
          {/* Radiating dashes */}
          <g opacity="0.15">
            <line x1="60" y1="40" x2="140" y2="40" stroke={gold} strokeWidth="0.5" strokeDasharray="4 6" />
            <line x1="60" y1="80" x2="200" y2="80" stroke={gold} strokeWidth="0.5" strokeDasharray="4 6" />
            <line x1="60" y1="120" x2="160" y2="120" stroke={gold} strokeWidth="0.5" strokeDasharray="4 6" />
            <line x1="60" y1="160" x2="180" y2="160" stroke={gold} strokeWidth="0.5" strokeDasharray="4 6" />
          </g>
        </svg>
      )

    case 'governance':
      // Classical columns with entablature
      return (
        <svg viewBox="0 0 480 200" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* Entablature */}
          <rect x="260" y="30" width="180" height="6" fill="none" stroke={gold} strokeWidth="0.8" opacity="0.3" />
          <rect x="255" y="24" width="190" height="6" fill="none" stroke={gold} strokeWidth="0.5" opacity="0.2" />
          {/* Columns */}
          {[280, 320, 360, 400, 420].map((x, i) => (
            <g key={i} opacity={0.25 - i * 0.02}>
              <rect x={x} y="36" width="8" height="130" fill="none" stroke={gold} strokeWidth="0.8" />
              <ellipse cx={x + 4} cy="36" rx="6" ry="3" fill="none" stroke={gold} strokeWidth="0.5" />
              <rect x={x - 2} y="166" width="12" height="6" fill="none" stroke={gold} strokeWidth="0.5" />
            </g>
          ))}
          {/* Base line */}
          <line x1="250" y1="172" x2="450" y2="172" stroke={gold} strokeWidth="0.8" opacity="0.3" />
          {/* Decorative triangular pediment */}
          <path d="M260 24 L350 8 L440 24" fill="none" stroke={gold} strokeWidth="0.6" opacity="0.2" />
        </svg>
      )

    case 'operational':
      // Interconnected nodes network
      return (
        <svg viewBox="0 0 480 200" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* Connections */}
          <g stroke={gold} strokeWidth="0.5" opacity="0.2">
            <line x1="320" y1="50" x2="400" y2="80" />
            <line x1="400" y1="80" x2="380" y2="140" />
            <line x1="380" y1="140" x2="300" y2="160" />
            <line x1="300" y1="160" x2="320" y2="50" />
            <line x1="400" y1="80" x2="450" y2="50" />
            <line x1="380" y1="140" x2="440" y2="160" />
            <line x1="320" y1="50" x2="260" y2="80" />
            <line x1="300" y1="160" x2="240" y2="130" />
            <line x1="260" y1="80" x2="240" y2="130" />
            <line x1="450" y1="50" x2="440" y2="160" />
          </g>
          {/* Nodes */}
          {[
            [320, 50], [400, 80], [380, 140], [300, 160],
            [450, 50], [440, 160], [260, 80], [240, 130],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r={i < 4 ? 8 : 5} fill="none" stroke={gold} strokeWidth="0.8" opacity={0.3 - i * 0.02} />
              <circle cx={cx} cy={cy} r="2" fill={gold} opacity={0.25 - i * 0.02} />
            </g>
          ))}
          {/* Dotted grid lines */}
          <g opacity="0.08">
            <line x1="200" y1="100" x2="480" y2="100" stroke={gold} strokeWidth="0.5" strokeDasharray="2 8" />
            <line x1="350" y1="0" x2="350" y2="200" stroke={gold} strokeWidth="0.5" strokeDasharray="2 8" />
          </g>
        </svg>
      )

    case 'program':
      // Logic model rectangles with arrows
      return (
        <svg viewBox="0 0 480 200" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* Flow rectangles */}
          {[
            { x: 240, y: 40, w: 60, h: 35 },
            { x: 320, y: 40, w: 60, h: 35 },
            { x: 400, y: 40, w: 60, h: 35 },
            { x: 240, y: 120, w: 60, h: 35 },
            { x: 320, y: 120, w: 60, h: 35 },
            { x: 400, y: 120, w: 60, h: 35 },
          ].map((r, i) => (
            <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} fill="none" stroke={gold} strokeWidth="0.7" opacity={0.25} rx="3" />
          ))}
          {/* Arrows between boxes */}
          <g stroke={gold} strokeWidth="0.5" opacity="0.2" markerEnd="url(#arrow-program)">
            <defs>
              <marker id="arrow-program" viewBox="0 0 6 6" refX="6" refY="3" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,0 L6,3 L0,6" fill="none" stroke={gold} strokeWidth="0.8" />
              </marker>
            </defs>
            <line x1="300" y1="57" x2="316" y2="57" />
            <line x1="380" y1="57" x2="396" y2="57" />
            <line x1="270" y1="75" x2="270" y2="116" />
            <line x1="350" y1="75" x2="350" y2="116" />
            <line x1="430" y1="75" x2="430" y2="116" />
            <line x1="300" y1="137" x2="316" y2="137" />
            <line x1="380" y1="137" x2="396" y2="137" />
          </g>
          {/* Labels hint lines */}
          <g opacity="0.1">
            <line x1="240" y1="90" x2="460" y2="90" stroke={gold} strokeWidth="0.3" strokeDasharray="3 5" />
          </g>
        </svg>
      )

    case 'leadership':
      // Org chart tree structure
      return (
        <svg viewBox="0 0 480 200" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* Tree lines */}
          <g stroke={gold} strokeWidth="0.6" opacity="0.2">
            <line x1="370" y1="55" x2="370" y2="80" />
            <line x1="310" y1="80" x2="430" y2="80" />
            <line x1="310" y1="80" x2="310" y2="100" />
            <line x1="370" y1="80" x2="370" y2="100" />
            <line x1="430" y1="80" x2="430" y2="100" />
            <line x1="310" y1="130" x2="310" y2="145" />
            <line x1="280" y1="145" x2="340" y2="145" />
            <line x1="280" y1="145" x2="280" y2="155" />
            <line x1="340" y1="145" x2="340" y2="155" />
          </g>
          {/* Nodes */}
          {[
            { cx: 370, cy: 42, r: 14 },
            { cx: 310, cy: 114, r: 11 },
            { cx: 370, cy: 114, r: 11 },
            { cx: 430, cy: 114, r: 11 },
            { cx: 280, cy: 168, r: 8 },
            { cx: 340, cy: 168, r: 8 },
          ].map((n, i) => (
            <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill="none" stroke={gold} strokeWidth="0.8" opacity={0.3 - i * 0.02} />
          ))}
          {/* Person icon in top node */}
          <g transform="translate(370, 42)" opacity="0.25">
            <circle r="4" fill="none" stroke={gold} strokeWidth="0.6" cy="-2" />
            <path d="M-5,5 Q-5,2 0,2 Q5,2 5,5" fill="none" stroke={gold} strokeWidth="0.6" />
          </g>
        </svg>
      )

    case 'accountability':
      // Rising bar chart with data points
      return (
        <svg viewBox="0 0 480 200" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* Axis */}
          <line x1="270" y1="170" x2="460" y2="170" stroke={gold} strokeWidth="0.6" opacity="0.25" />
          <line x1="270" y1="30" x2="270" y2="170" stroke={gold} strokeWidth="0.6" opacity="0.25" />
          {/* Grid lines */}
          {[60, 90, 120, 150].map((y) => (
            <line key={y} x1="270" y1={y} x2="460" y2={y} stroke={gold} strokeWidth="0.3" opacity="0.1" strokeDasharray="3 5" />
          ))}
          {/* Bars */}
          {[
            { x: 290, h: 40 },
            { x: 320, h: 65 },
            { x: 350, h: 55 },
            { x: 380, h: 90 },
            { x: 410, h: 110 },
            { x: 440, h: 130 },
          ].map((bar, i) => (
            <rect key={i} x={bar.x} y={170 - bar.h} width="18" height={bar.h} fill={gold} opacity={0.12 + i * 0.02} rx="1" />
          ))}
          {/* Trend line */}
          <polyline
            points="299,130 329,105 359,115 389,80 419,60 449,40"
            fill="none"
            stroke={gold}
            strokeWidth="1"
            opacity="0.3"
          />
          {/* Data points */}
          {[
            [299, 130], [329, 105], [359, 115], [389, 80], [419, 60], [449, 40],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3" fill={gold} opacity="0.35" />
          ))}
        </svg>
      )

    case 'community':
      // Overlapping circles (Venn-like)
      return (
        <svg viewBox="0 0 480 200" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {/* Large overlapping circles */}
          <circle cx="340" cy="90" r="55" fill="none" stroke={gold} strokeWidth="0.8" opacity="0.25" />
          <circle cx="390" cy="90" r="55" fill="none" stroke={gold} strokeWidth="0.8" opacity="0.2" />
          <circle cx="365" cy="130" r="55" fill="none" stroke={gold} strokeWidth="0.8" opacity="0.15" />
          {/* Smaller accent circles */}
          <circle cx="365" cy="100" r="15" fill={gold} opacity="0.06" />
          <circle cx="280" cy="60" r="20" fill="none" stroke={gold} strokeWidth="0.4" opacity="0.15" />
          <circle cx="440" cy="150" r="18" fill="none" stroke={gold} strokeWidth="0.4" opacity="0.12" />
          {/* Connecting lines */}
          <g stroke={gold} strokeWidth="0.3" opacity="0.12">
            <line x1="300" y1="60" x2="340" y2="90" strokeDasharray="3 4" />
            <line x1="440" y1="150" x2="400" y2="130" strokeDasharray="3 4" />
          </g>
        </svg>
      )

    default:
      return null
  }
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
                className="services-sidebar-cta"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-ibm-plex-sans)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  padding: '0.75rem 1.75rem',
                  backgroundColor: tokens.deepGreen,
                  color: tokens.parchment,
                  borderRadius: '100px',
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
