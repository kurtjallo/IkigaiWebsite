'use client'

import { motion, useInView, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

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
  heading = "Let\u2019s Transform Your Organization.",
  description = "Whether you\u2019re building from the ground up or strengthening existing structures, we\u2019re ready to listen, assess, and design.",
  buttonText = 'Book Your Strategy Call',
  buttonHref = '/contact',
}: {
  tagline?: string
  heading?: string
  description?: string
  buttonText?: string
  buttonHref?: string
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
          <Link
            href={buttonHref}
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
              borderRadius: '1px',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            {buttonText}
          </Link>
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

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Model', href: '/model' },
    { label: 'Impact', href: '/impact' },
    { label: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => pathname === href

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
        backgroundColor: tokens.bone,
        borderBottom: `2px solid ${tokens.charcoal}`,
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4rem',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-instrument-serif)',
            fontSize: '1.5rem',
            color: tokens.deepGreen,
            letterSpacing: '0.08em',
            textDecoration: 'none',
          }}
        >
          IKIGAI
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
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isActive(link.href) ? tokens.deepGreen : tokens.charcoal,
                textDecoration: 'none',
                borderBottom: isActive(link.href) ? `2px solid ${tokens.archGold}` : '2px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.5rem 1.25rem',
              backgroundColor: tokens.archGold,
              color: tokens.ink,
              borderRadius: '1px',
              textDecoration: 'none',
            }}
          >
            Book a Call
          </Link>
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={tokens.charcoal} strokeWidth="2">
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
            borderTop: `1px solid ${tokens.structuralLine}`,
            backgroundColor: tokens.bone,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-ibm-plex-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: isActive(link.href) ? tokens.deepGreen : tokens.charcoal,
                textDecoration: 'none',
                padding: '0.5rem 0',
                borderBottom: `1px solid ${tokens.structuralLine}`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.75rem 1.25rem',
              backgroundColor: tokens.archGold,
              color: tokens.ink,
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: '0.5rem',
            }}
          >
            Book a Call
          </Link>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .concept-nav-desktop { display: none !important; }
          .concept-nav-mobile-btn { display: block !important; }
          .concept-nav-mobile-menu { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
