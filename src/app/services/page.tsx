'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
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
/*  Proof Points Data                                                  */
/* ------------------------------------------------------------------ */

const proofPoints: Record<string, { text: string; href: string }> = {
  strategic: {
    text: 'Hamilton Community Services Alliance adopted a 3-year strategic plan unanimously after working with us.',
    href: '/impact#rebuilding-governance-for-growth',
  },
  governance: {
    text: 'Board attendance at Hamilton Community Services Alliance rose from 45% to 85% within 12 months.',
    href: '/impact#rebuilding-governance-for-growth',
  },
  operational: {
    text: 'Ottawa Women\u2019s Shelter Network created a complete operational manual for all core processes.',
    href: '/impact#building-leadership-beyond-the-founder',
  },
  program: {
    text: 'Toronto Neighbourhood Health Collective developed logic models for all 8 programs, restructuring 2 based on evidence.',
    href: '/impact#from-program-drift-to-impact-clarity',
  },
  leadership: {
    text: 'Three internal successors identified and enrolled in structured development at Ottawa Women\u2019s Shelter Network.',
    href: '/impact#building-leadership-beyond-the-founder',
  },
  accountability: {
    text: 'Funder reporting quality improved by 60% at Toronto Neighbourhood Health Collective.',
    href: '/impact#from-program-drift-to-impact-clarity',
  },
  community: {
    text: 'Ottawa Women\u2019s Shelter Network saw a 30% increase in formalized community partnership agreements.',
    href: '/impact#building-leadership-beyond-the-founder',
  },
}

/* ------------------------------------------------------------------ */
/*  Chevron Icon                                                       */
/* ------------------------------------------------------------------ */

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      style={{
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
        flexShrink: 0,
      }}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke={tokens.charcoal}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Accordion Services Section                                         */
/* ------------------------------------------------------------------ */

function AccordionServicesSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section
      style={{
        backgroundColor: tokens.bone,
        padding: '5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionLabel label="01 / Services" />

        <FadeIn delay={0.1}>
          <div
            style={{
              border: `1px solid ${tokens.structuralLine}`,
              borderRadius: '2px',
              overflow: 'hidden',
              backgroundColor: tokens.boneLight,
            }}
          >
            {pillars.map((pillar, index) => {
              const isOpen = openIndex === index
              const number = String(index + 1).padStart(2, '0')
              const proof = proofPoints[pillar.slug]

              return (
                <div
                  key={pillar.slug}
                  id={pillar.slug}
                  style={{
                    borderBottom:
                      index < pillars.length - 1
                        ? `1px solid ${tokens.structuralLine}`
                        : undefined,
                  }}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${pillar.slug}`}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: '1.5rem 2rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderLeft: isOpen
                        ? `3px solid ${tokens.archGold}`
                        : '3px solid transparent',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'border-color 0.3s ease',
                    }}
                  >
                    {/* Pillar Number */}
                    <span
                      style={{
                        fontFamily: 'var(--font-ibm-plex-mono)',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: tokens.blueprint,
                        flexShrink: 0,
                        minWidth: '1.75rem',
                      }}
                    >
                      {number}
                    </span>

                    {/* Title + Subtitle */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-instrument-serif)',
                          fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                          fontWeight: 400,
                          color: tokens.deepGreen,
                          display: 'block',
                          lineHeight: 1.3,
                        }}
                      >
                        {pillar.title}
                      </span>
                      <span
                        className="mobile-min-text mobile-tight-tracking"
                        style={{
                          fontFamily: 'var(--font-ibm-plex-mono)',
                          fontSize: '0.6875rem',
                          fontWeight: 500,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: tokens.archGoldTextLight,
                          display: 'block',
                          marginTop: '0.25rem',
                        }}
                      >
                        {pillar.subtitle}
                      </span>
                    </div>

                    {/* Chevron */}
                    <ChevronIcon isOpen={isOpen} />
                  </button>

                  {/* Accordion Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`panel-${pillar.slug}`}
                        role="region"
                        aria-labelledby={pillar.slug}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          style={{
                            padding: '0 2rem 2rem',
                            paddingLeft: 'calc(2rem + 3px)',
                          }}
                        >
                          {/* Two-column layout */}
                          <div
                            className="services-accordion-grid"
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '1fr 1fr',
                              gap: '3rem',
                              alignItems: 'start',
                            }}
                          >
                            {/* Left: Description + CTA */}
                            <div>
                              <p
                                style={{
                                  fontFamily: 'var(--font-ibm-plex-sans)',
                                  fontWeight: 300,
                                  fontSize: '1rem',
                                  lineHeight: 1.8,
                                  color: tokens.charcoal,
                                  marginBottom: '2rem',
                                }}
                              >
                                {pillar.description}
                              </p>

                              <button
                                type="button"
                                onClick={() => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com', '_blank')}
                                className="mobile-cta-text"
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

                            {/* Right: Outcomes + Proof Point */}
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                              }}
                            >
                              {/* Outcomes Box */}
                              <div
                                style={{
                                  backgroundColor: tokens.bone,
                                  padding: '1.5rem',
                                  border: `1px solid ${tokens.structuralLine}`,
                                }}
                              >
                                <h3
                                  style={{
                                    fontFamily: 'var(--font-ibm-plex-sans)',
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    color: tokens.deepGreen,
                                    marginBottom: '1rem',
                                    letterSpacing: '0.02em',
                                  }}
                                >
                                  Outcomes
                                </h3>

                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem',
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
                                  ))}
                                </div>
                              </div>

                              {/* Proof Point */}
                              {proof && (
                                <div
                                  style={{
                                    borderLeft: `2px solid ${tokens.archGold}`,
                                    paddingLeft: '1rem',
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
                                      marginBottom: '0.5rem',
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
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </FadeIn>

        {/* Responsive styles for accordion grid */}
        <style>{`
          @media (max-width: 768px) {
            .services-accordion-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </div>
    </section>
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
        heading="Seven Pillars of Organizational Excellence"
        description="Each pillar addresses a critical dimension of organizational health. Together, they form a comprehensive system for purpose-driven organizations."
      />

      <AccordionServicesSection />

      <CTASection
        heading="Ready to Strengthen Your Organization?"
        description="Every strong organization starts with a conversation about what's possible."
        buttonText="Book a Strategy Call"
      />
    </>
  )
}
