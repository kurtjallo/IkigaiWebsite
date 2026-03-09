'use client'

import { motion, useInView, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState, useMemo } from 'react'

/* ------------------------------------------------------------------ */
/*  Calendly URL                                                       */
/* ------------------------------------------------------------------ */

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com'

function openCalendly() {
  window.open(CALENDLY_URL, '_blank')
}

/* ------------------------------------------------------------------ */
/*  Design Token Object (for reuse in inline styles)                   */
/* ------------------------------------------------------------------ */

export const tokens = {
  bone: '#F5F0E8',
  boneDark: '#EBE4D8',
  boneLight: '#FAF8F3',
  parchment: '#FFFDF8',
  deepGreen: '#1B3A2A',
  deepGreen950: '#0D1F14',
  archGold: '#C9A84C',
  archGoldTextDark: '#E8D5A3',
  archGoldTextLight: '#7A5C16',
  blueprint: '#4A6FA5',
  charcoal: '#2C2C2C',
  ink: '#1A1A1A',
  structuralLine: '#D5CFC4',
  // v2.0 tokens
  cardSurface: '#F3F6F5',
  bodyGray: '#5E6B64',
  pillBg: '#F0F0F0',
  pillBorder: '#D4D4D4',
  deepGreenV2: '#13261B',
} as const

/* ------------------------------------------------------------------ */
/*  Animation Helpers                                                  */
/* ------------------------------------------------------------------ */

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const offsets: Record<string, { x?: number; y?: number }> = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  }

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerWrap({
  children,
  className = '',
  staggerDelay = 0.1,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' as const },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Word Opacity Reveal (scroll-triggered, words activate as visible)  */
/* ------------------------------------------------------------------ */

export function WordReveal({
  text,
  className = '',
  style = {},
}: {
  text: string
  className?: string
  style?: React.CSSProperties
}) {
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLSpanElement>(null)
  const [progress, setProgress] = useState(0)

  const words = useMemo(() => text.split(/\s+/), [text])

  useEffect(() => {
    if (shouldReduceMotion || !containerRef.current) return

    const el = containerRef.current

    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // Start when element enters bottom 80% of viewport, complete at 30%
      const start = vh * 0.8
      const end = vh * 0.3
      const rawProgress = (start - rect.top) / (start - end)
      setProgress(Math.max(0, Math.min(1, rawProgress)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [shouldReduceMotion])

  if (shouldReduceMotion) {
    return <span className={className} style={style}>{text}</span>
  }

  return (
    <span ref={containerRef} className={className} style={{ ...style, display: 'inline' }}>
      {words.map((word, i) => {
        // Each word activates at a different progress threshold
        const wordProgress = i / words.length
        const opacity = progress > wordProgress
          ? Math.min(1, 0.15 + (progress - wordProgress) * (words.length / 1.5) * 0.85)
          : 0.15
        return (
          <span
            key={i}
            style={{
              opacity,
              transition: 'opacity 0.3s ease',
              display: 'inline',
            }}
          >
            {word}{i < words.length - 1 ? ' ' : ''}
          </span>
        )
      })}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  SVG Patterns                                                       */
/* ------------------------------------------------------------------ */

export function BlueprintGridPattern({ id = 'blueprint-grid' }: { id?: string }) {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.08,
        pointerEvents: 'none',
      }}
    >
      <defs>
        <pattern
          id={id}
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M 30 0 L 30 60 M 0 30 L 60 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

export function CornerBrackets() {
  const bracketStyle: React.CSSProperties = {
    position: 'absolute',
    width: '60px',
    height: '60px',
    opacity: 0.15,
    pointerEvents: 'none',
  }

  return (
    <>
      <svg style={{ ...bracketStyle, top: '2rem', left: '2rem' }} viewBox="0 0 60 60" aria-hidden="true">
        <path d="M 0 60 L 0 0 L 60 0" fill="none" stroke="var(--arch-gold)" strokeWidth="1.5" />
      </svg>
      <svg style={{ ...bracketStyle, top: '2rem', right: '2rem' }} viewBox="0 0 60 60" aria-hidden="true">
        <path d="M 0 0 L 60 0 L 60 60" fill="none" stroke="var(--arch-gold)" strokeWidth="1.5" />
      </svg>
      <svg style={{ ...bracketStyle, bottom: '2rem', left: '2rem' }} viewBox="0 0 60 60" aria-hidden="true">
        <path d="M 0 0 L 0 60 L 60 60" fill="none" stroke="var(--arch-gold)" strokeWidth="1.5" />
      </svg>
      <svg style={{ ...bracketStyle, bottom: '2rem', right: '2rem' }} viewBox="0 0 60 60" aria-hidden="true">
        <path d="M 60 0 L 60 60 L 0 60" fill="none" stroke="var(--arch-gold)" strokeWidth="1.5" />
      </svg>
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Section Label                                                      */
/* ------------------------------------------------------------------ */

export function SectionLabel({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <FadeIn>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <span
          className="mobile-min-text mobile-tight-tracking"
          style={{
            fontFamily: 'var(--font-ibm-plex-mono)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: dark ? tokens.archGoldTextDark : tokens.archGold,
          }}
        >
          {label}
        </span>
        <span
          aria-hidden="true"
          style={{
            flex: 1,
            height: '1px',
            backgroundColor: tokens.archGold,
            maxWidth: '120px',
          }}
        />
      </div>
    </FadeIn>
  )
}

/* ------------------------------------------------------------------ */
/*  Pill Label (v2.0 section badge above headings)                    */
/* ------------------------------------------------------------------ */

export function PillLabel({
  label,
  children,
  centered = false,
  center = false,
}: {
  label?: string
  children?: React.ReactNode
  centered?: boolean
  center?: boolean
}) {
  const isCentered = centered || center
  const text = label || children
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: isCentered ? 'center' : 'flex-start',
        width: isCentered ? '100%' : 'auto',
        marginBottom: '1rem',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          padding: '0.375rem 0.875rem',
          backgroundColor: tokens.pillBg,
          border: `1px solid ${tokens.pillBorder}`,
          borderRadius: '9999px',
          fontFamily: 'var(--font-ibm-plex-sans)',
          fontSize: '0.8125rem',
          fontWeight: 500,
          color: tokens.charcoal,
          letterSpacing: '0.01em',
        }}
      >
        {text}
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Page Header (reusable hero-like header for inner pages)            */
/* ------------------------------------------------------------------ */

export function PageHeader({
  tagline,
  heading,
  description,
}: {
  tagline: string
  heading: string
  description: string
}) {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: tokens.deepGreen,
        color: tokens.parchment,
        overflow: 'hidden',
        padding: '6rem 2rem 5rem',
      }}
    >
      <BlueprintGridPattern id="header-grid" />
      <CornerBrackets />

      <div
        style={{
          position: 'relative',
          maxWidth: '72rem',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <FadeIn delay={0.1}>
          <p
            className="mobile-min-text mobile-tight-tracking"
            style={{
              fontFamily: 'var(--font-ibm-plex-mono)',
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: tokens.archGoldTextDark,
              marginBottom: '1.5rem',
            }}
          >
            {tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: tokens.parchment,
              marginBottom: '1.5rem',
            }}
          >
            {heading}
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: tokens.boneDark,
              maxWidth: '40rem',
              margin: '0 auto',
            }}
          >
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  CTA Section                                                        */
/* ------------------------------------------------------------------ */

export function CTASection({
  tagline = 'Begin the Conversation',
  heading = "Let\u2019s Build Something That Lasts.",
  description = "Whether you\u2019re starting from scratch or strengthening what exists, it begins with a conversation.",
  buttonText = 'Book a Strategy Call',
}: {
  tagline?: string
  heading?: string
  description?: string
  buttonText?: string
}) {
  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: tokens.deepGreen950,
        padding: '6rem 2rem',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <BlueprintGridPattern id="cta-grid" />

      <div
        style={{
          position: 'relative',
          maxWidth: '48rem',
          margin: '0 auto',
        }}
      >
        <FadeIn delay={0.1}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: '3rem',
                height: '1px',
                backgroundColor: tokens.archGold,
              }}
            />
            <span
              className="mobile-min-text mobile-tight-tracking"
              style={{
                fontFamily: 'var(--font-ibm-plex-mono)',
                fontSize: '0.75rem',
                fontWeight: 400,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: tokens.archGoldTextDark,
              }}
            >
              {tagline}
            </span>
            <span
              aria-hidden="true"
              style={{
                width: '3rem',
                height: '1px',
                backgroundColor: tokens.archGold,
              }}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: tokens.parchment,
              marginBottom: '1.5rem',
            }}
          >
            {heading}
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: tokens.boneDark,
              marginBottom: '2.5rem',
            }}
          >
            {description}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.625rem' }}>
            <button
              type="button"
              onClick={openCalendly}
              className="mobile-cta-text btn-pill btn-pill-primary"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.875rem 2.5rem',
                backgroundColor: tokens.archGold,
                color: tokens.ink,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {buttonText}
            </button>
            <span
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontWeight: 300,
                fontSize: '0.8125rem',
                color: tokens.boneDark,
                opacity: 0.85,
                textAlign: 'center',
                lineHeight: 1.5,
              }}
            >
              Free 30-minute strategy call.
              <br />
              <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                For leaders ready to strengthen their organization&rsquo;s foundations.
              </span>
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Site Navigation                                                    */
/* ------------------------------------------------------------------ */

export function SiteNav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Model', href: '/model' },
    { label: 'Impact', href: '/impact' },
    { label: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => pathname === href

  // Scroll detection for border
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Body scroll lock + Escape to close
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileOpen(false)
      }
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#ffffff',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
        transition: 'border-color 0.3s ease',
        overflow: 'visible',
      }}
    >
      <div
        className="concept-nav-container"
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '5rem',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <img
            src="/images/ikigai-nav.png"
            alt="Ikigai Consulting Group"
            className="nav-logo"
            style={{
              height: '8rem',
              width: 'auto',
              marginTop: '1.25rem',
            }}
          />
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="concept-nav-desktop"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="nav-link-v2"
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '0.9375rem',
                fontWeight: isActive(link.href) ? 600 : 500,
                color: '#111111',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={openCalendly}
            className="btn-pill btn-pill-primary"
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: '0.8125rem',
              padding: '0.625rem 1.5rem',
            }}
          >
            Book a Call
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="concept-nav-mobile-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Navigation menu"
          className="concept-nav-mobile-menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            padding: '1rem 1.5rem 1.5rem',
            gap: '0.75rem',
            borderTop: '1px solid rgba(0,0,0,0.06)',
            backgroundColor: '#ffffff',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '0.9375rem',
                fontWeight: isActive(link.href) ? 600 : 500,
                color: '#111111',
                textDecoration: 'none',
                padding: '0.625rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => { setMobileOpen(false); openCalendly() }}
            className="btn-pill btn-pill-primary"
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: '0.9375rem',
              textAlign: 'center',
              justifyContent: 'center',
              marginTop: '0.5rem',
            }}
          >
            Book a Call
          </button>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        .nav-link-v2 {
          transition: opacity 0.2s ease;
        }
        .nav-link-v2:hover {
          opacity: 0.65;
        }
        @media (max-width: 768px) {
          .concept-nav-desktop { display: none !important; }
          .concept-nav-mobile-btn { display: block !important; }
          .concept-nav-mobile-menu { display: flex !important; }
          .concept-nav-container { height: 5rem !important; }
          .nav-logo { height: 4.5rem !important; }
        }
      `}</style>
    </nav>
  )
}

/* ------------------------------------------------------------------ */
/*  Site Footer (v2.0 rounded-top dark green card)                     */
/* ------------------------------------------------------------------ */

export function SiteFooter() {
  const footerLinks = {
    pages: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'The Ikigai Model', href: '/model' },
      { label: 'Impact', href: '/impact' },
      { label: 'Contact', href: '/contact' },
    ],
    information: [
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  }

  return (
    <footer style={{ backgroundColor: '#ffffff', padding: '0 1rem' }}>
      <div
        style={{
          maxWidth: '76rem',
          margin: '0 auto',
          backgroundColor: tokens.deepGreenV2,
          borderRadius: '24px 24px 0 0',
          padding: 'clamp(2.5rem, 5vw, 4rem) clamp(2rem, 4vw, 4rem)',
        }}
      >
        {/* Row 1: Logo + Nav columns */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 0.8fr',
            gap: '3rem',
            paddingBottom: '2.5rem',
          }}
        >
          {/* Logo area */}
          <div>
            <img
              src="/images/ikigai-nav.png"
              alt="Ikigai Consulting Group"
              style={{ height: '52px', width: 'auto', marginBottom: '1rem', filter: 'brightness(10)' }}
            />
            <p
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.6,
                maxWidth: '280px',
              }}
            >
              Organizational Architects for Purpose-Driven Organizations
            </p>
          </div>

          {/* Pages column */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}
            >
              Pages
            </h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link"
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information column */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}
            >
              Information
            </h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {footerLinks.information.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link"
                    style={{
                      fontFamily: 'var(--font-ibm-plex-sans)',
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={openCalendly}
                  className="footer-link"
                  style={{
                    fontFamily: 'var(--font-ibm-plex-sans)',
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left',
                  }}
                >
                  Book a Strategy Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2: Copyright bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.45)',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Ikigai Consulting Group. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.45)',
              margin: 0,
            }}
          >
            Serving Ontario&rsquo;s Nonprofit Sector
          </p>
        </div>
      </div>

      {/* Footer responsive + hover styles */}
      <style>{`
        .footer-link:hover {
          color: rgba(255,255,255,1) !important;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/*  RoundedCTACard (v2.0 final CTA for all redesigned pages)          */
/* ------------------------------------------------------------------ */

export function RoundedCTACard({
  heading,
  description,
  buttonText = 'Book a Strategy Call',
  microcopy,
}: {
  heading: string
  description?: string
  buttonText?: string
  microcopy?: string
}) {
  return (
    <section
      style={{
        padding: `0 2rem var(--section-gap)`,
        backgroundColor: '#ffffff',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          backgroundColor: tokens.cardSurface,
          borderRadius: 'var(--card-radius-lg)',
          padding: 'clamp(2.5rem, 5vw, 4rem)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 400,
              color: tokens.ink,
              lineHeight: 1.2,
              marginBottom: description ? '0.75rem' : 0,
            }}
          >
            {heading}
          </h2>
          {description && (
            <p
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '1rem',
                color: tokens.bodyGray,
                lineHeight: 1.65,
                maxWidth: '480px',
              }}
            >
              {description}
            </p>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
          <button
            type="button"
            onClick={openCalendly}
            className="btn-pill btn-pill-primary"
          >
            {buttonText} →
          </button>
          {microcopy && (
            <p style={{ fontSize: '0.8125rem', color: tokens.bodyGray, paddingLeft: '0.25rem', margin: 0 }}>
              {microcopy}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  BentoCard (v2.0 asymmetric card for benefits/features grids)      */
/* ------------------------------------------------------------------ */

export function BentoCard({
  children,
  icon,
  title,
  description,
  className = '',
  style = {},
}: {
  children?: React.ReactNode
  icon?: React.ReactNode
  title?: string
  description?: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className={`bento-card-hover ${className}`}
      style={{
        backgroundColor: tokens.cardSurface,
        borderRadius: 'var(--card-radius)',
        padding: '2rem 2.5rem',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ...style,
      }}
    >
      {children || (
        <>
          {icon && (
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}>
              {icon}
            </div>
          )}
          {title && (
            <h3 style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontSize: '1.375rem',
              fontWeight: 400,
              color: tokens.ink,
              marginBottom: '0.5rem',
            }}>
              {title}
            </h3>
          )}
          {description && (
            <p style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: '0.9375rem',
              color: tokens.bodyGray,
              lineHeight: 1.6,
            }}>
              {description}
            </p>
          )}
        </>
      )}
    </div>
  )
}
