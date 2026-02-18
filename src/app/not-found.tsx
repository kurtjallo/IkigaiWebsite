import type { Metadata } from 'next'
import Link from 'next/link'
import { tokens } from '@/lib/shared'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section
      style={{
        backgroundColor: tokens.parchment,
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '36rem' }}>
        <p
          style={{
            fontFamily: 'var(--font-ibm-plex-mono)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase' as const,
            color: tokens.archGold,
            marginBottom: '1.5rem',
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-instrument-serif)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: tokens.deepGreen,
            marginBottom: '1rem',
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-ibm-plex-sans)',
            fontWeight: 300,
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            color: tokens.charcoal,
            marginBottom: '2.5rem',
          }}
        >
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-ibm-plex-sans)',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            padding: '0.875rem 2.5rem',
            backgroundColor: tokens.archGold,
            color: tokens.ink,
            borderRadius: '1px',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          Return to Homepage
        </Link>
      </div>
    </section>
  )
}
