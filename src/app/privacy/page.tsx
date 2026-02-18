import type { Metadata } from 'next'
import Link from 'next/link'
import { tokens } from '@/lib/shared'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Ikigai Consulting Group collects, uses, and protects your personal information under PIPEDA.',
}

function PolicySection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2
        style={{
          fontFamily: 'var(--font-instrument-serif)',
          fontSize: '1.5rem',
          fontWeight: 400,
          color: tokens.deepGreen,
          marginBottom: '1rem',
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  )
}

const bodyTextStyle: React.CSSProperties = {
  fontFamily: 'var(--font-ibm-plex-sans)',
  fontWeight: 300,
  fontSize: '1rem',
  lineHeight: 1.75,
  color: tokens.charcoal,
  marginBottom: '1rem',
}

const listStyle: React.CSSProperties = {
  fontFamily: 'var(--font-ibm-plex-sans)',
  fontWeight: 300,
  fontSize: '1rem',
  lineHeight: 1.75,
  color: tokens.charcoal,
  marginBottom: '1rem',
  paddingLeft: '1.5rem',
  listStyleType: 'disc',
}

const listItemStyle: React.CSSProperties = {
  marginBottom: '0.5rem',
}

const linkStyle: React.CSSProperties = {
  color: tokens.deepGreen,
  textDecoration: 'underline',
  textUnderlineOffset: '4px',
}

export default function PrivacyPage() {
  return (
    <section
      style={{
        backgroundColor: tokens.parchment,
        padding: '4rem 2rem',
      }}
    >
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-mono)',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: tokens.archGold,
              marginBottom: '1.5rem',
            }}
          >
            Legal
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
            Privacy Policy
          </h1>
          <span
            aria-hidden="true"
            style={{
              display: 'inline-block',
              width: '3rem',
              height: '2px',
              backgroundColor: tokens.archGold,
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '0.875rem',
              color: tokens.charcoal,
              marginTop: '1rem',
            }}
          >
            Effective: February 2026
          </p>
        </div>

        {/* Legal disclaimer */}
        <div
          style={{
            marginBottom: '3rem',
            border: `1px solid ${tokens.structuralLine}`,
            backgroundColor: tokens.bone,
            padding: '1.25rem',
            borderRadius: '2px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '0.875rem',
              lineHeight: 1.7,
              color: tokens.charcoal,
            }}
          >
            This privacy policy is provided for informational purposes. We
            recommend consulting with a legal professional to ensure full
            compliance with applicable privacy laws.
          </p>
        </div>

        {/* 1. Introduction */}
        <PolicySection title="Introduction">
          <p style={bodyTextStyle}>
            Ikigai Consulting Group (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) is committed to protecting the privacy of
            individuals who interact with our website. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your personal
            information in accordance with the Personal Information Protection
            and Electronic Documents Act (PIPEDA).
          </p>
        </PolicySection>

        {/* 2. Information We Collect */}
        <PolicySection title="Information We Collect">
          <p style={bodyTextStyle}>
            When you use our contact form, we collect the following personal
            information:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Your name</li>
            <li style={listItemStyle}>Your email address</li>
            <li style={listItemStyle}>Your organization name (if provided)</li>
            <li style={listItemStyle}>A description of your organizational challenge</li>
          </ul>
          <p style={bodyTextStyle}>
            When you use our calendar booking feature, Calendly (a third-party
            service) may collect additional information such as your name,
            email address, and scheduling preferences.
          </p>
        </PolicySection>

        {/* 3. How We Collect Information */}
        <PolicySection title="How We Collect Information">
          <p style={bodyTextStyle}>
            We collect personal information directly from you when you:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Submit an inquiry through our contact form</li>
            <li style={listItemStyle}>
              Schedule a consultation through our Calendly booking widget
            </li>
          </ul>
          <p style={bodyTextStyle}>
            We do not collect information through cookies, tracking pixels, or
            automated means on this website.
          </p>
        </PolicySection>

        {/* 4. Purpose of Collection */}
        <PolicySection title="Purpose of Collection">
          <p style={bodyTextStyle}>
            We collect your personal information for the following purposes:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              To respond to your inquiries about our consulting services
            </li>
            <li style={listItemStyle}>To schedule and conduct consultations</li>
            <li style={listItemStyle}>To communicate with you about our services</li>
            <li style={listItemStyle}>To maintain records of client interactions</li>
          </ul>
          <p style={bodyTextStyle}>
            We will not use your personal information for any purpose other
            than those stated above without your consent.
          </p>
        </PolicySection>

        {/* 5. Third-Party Service Providers */}
        <PolicySection title="Third-Party Service Providers">
          <p style={bodyTextStyle}>
            We use the following third-party services to process your
            information:
          </p>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={bodyTextStyle}>
              <strong style={{ fontWeight: 600, color: tokens.ink }}>
                Formspree
              </strong>{' '}
              &mdash; Our contact form submissions are processed by Formspree,
              which temporarily stores your form data to deliver it to us via
              email. Formspree&rsquo;s privacy policy is available at{' '}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                formspree.io/legal/privacy-policy
              </a>
              .
            </p>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={bodyTextStyle}>
              <strong style={{ fontWeight: 600, color: tokens.ink }}>
                Calendly
              </strong>{' '}
              &mdash; Our booking widget is provided by Calendly, which
              processes your scheduling information. Calendly&rsquo;s privacy
              policy is available at{' '}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                calendly.com/privacy
              </a>
              .
            </p>
          </div>
          <p style={bodyTextStyle}>
            These service providers are bound by their own privacy policies and
            are only used to facilitate the services described above.
          </p>
        </PolicySection>

        {/* 6. Data Retention */}
        <PolicySection title="Data Retention">
          <p style={bodyTextStyle}>
            We retain your personal information only for as long as necessary
            to fulfill the purposes for which it was collected:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              Contact form submissions: retained for the duration of any
              resulting business relationship, plus two (2) years
            </li>
            <li style={listItemStyle}>
              Calendly booking data: managed according to Calendly&rsquo;s
              retention policies
            </li>
          </ul>
          <p style={bodyTextStyle}>
            When your information is no longer needed, it will be securely
            deleted or anonymized.
          </p>
        </PolicySection>

        {/* 7. Data Security */}
        <PolicySection title="Data Security">
          <p style={bodyTextStyle}>
            We protect your personal information through:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              Encrypted data transmission (HTTPS/TLS) for all website
              interactions
            </li>
            <li style={listItemStyle}>
              Secure third-party processors with their own security measures
            </li>
            <li style={listItemStyle}>
              Limited access to personal information on a need-to-know basis
            </li>
          </ul>
        </PolicySection>

        {/* 8. Your Rights Under PIPEDA */}
        <PolicySection title="Your Rights Under PIPEDA">
          <p style={bodyTextStyle}>
            Under PIPEDA, you have the right to:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <strong style={{ fontWeight: 600, color: tokens.ink }}>
                Access
              </strong>{' '}
              your personal information held by us
            </li>
            <li style={listItemStyle}>
              <strong style={{ fontWeight: 600, color: tokens.ink }}>
                Correct
              </strong>{' '}
              any inaccurate personal information
            </li>
            <li style={listItemStyle}>
              <strong style={{ fontWeight: 600, color: tokens.ink }}>
                Withdraw consent
              </strong>{' '}
              for the use of your personal information
            </li>
            <li style={listItemStyle}>
              <strong style={{ fontWeight: 600, color: tokens.ink }}>
                File a complaint
              </strong>{' '}
              with the Office of the Privacy Commissioner of Canada if you
              believe your privacy rights have been violated
            </li>
          </ul>
          <p style={bodyTextStyle}>
            To exercise any of these rights, please contact us using the
            information below.
          </p>
        </PolicySection>

        {/* 9. Contact Us */}
        <PolicySection title="Contact Us">
          <p style={bodyTextStyle}>
            If you have questions about this Privacy Policy or wish to exercise
            your privacy rights, please contact:
          </p>
          <address
            style={{
              fontStyle: 'normal',
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '1rem',
              lineHeight: 1.75,
              color: tokens.charcoal,
            }}
          >
            <strong style={{ fontWeight: 600, color: tokens.ink }}>
              Ikigai Consulting Group
            </strong>
            <br />
            Email:{' '}
            <a
              href="mailto:privacy@ikigaiconsulting.ca"
              style={linkStyle}
            >
              privacy@ikigaiconsulting.ca
            </a>
          </address>
        </PolicySection>

        {/* 10. Changes to This Policy */}
        <PolicySection title="Changes to This Policy">
          <p style={{ ...bodyTextStyle, marginBottom: 0 }}>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date.
          </p>
        </PolicySection>

        {/* Footer metadata + back link */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: `1px solid ${tokens.structuralLine}`,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 300,
              fontSize: '0.875rem',
              color: tokens.charcoal,
              marginBottom: '1.5rem',
            }}
          >
            Last updated: February 2026
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--font-ibm-plex-sans)',
              fontWeight: 500,
              fontSize: '1rem',
              color: tokens.deepGreen,
              textDecoration: 'none',
            }}
          >
            &larr; Return to Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
