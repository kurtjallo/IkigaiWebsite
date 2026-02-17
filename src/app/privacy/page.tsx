import type { Metadata } from 'next'
import Link from 'next/link'
import { Section } from '@/components/ui/section'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'

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
    <div className="mb-12">
      <h2 className="font-serif text-h3 font-semibold text-neutral-900 mb-4">
        {title}
      </h2>
      {children}
    </div>
  )
}

function ExternalLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-hunter-green-600 underline underline-offset-4 decoration-gold/50 hover:decoration-gold transition-colors"
    >
      {children}
    </a>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <Section background="white">
        <Container size="narrow">
          {/* Header */}
          <div className="mb-16">
            <SectionHeading
              heading="Privacy Policy"
              headingAs="h1"
              align="center"
            />
            <p className="mt-4 text-center text-sm text-neutral-500 font-sans">
              Effective: February 2026
            </p>
          </div>

          {/* Legal disclaimer */}
          <div className="mb-12 rounded-sm border border-gold/30 bg-gold-50 px-5 py-4">
            <p className="text-sm text-neutral-600 leading-relaxed">
              This privacy policy is provided for informational purposes. We
              recommend consulting with a legal professional to ensure full
              compliance with applicable privacy laws.
            </p>
          </div>

          {/* 1. Introduction */}
          <PolicySection title="Introduction">
            <p className="text-body leading-relaxed text-neutral-700 mb-4">
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
            <p className="text-body leading-relaxed text-neutral-700 mb-4">
              When you use our contact form, we collect the following personal
              information:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4 ml-4">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your organization name (if provided)</li>
              <li>A description of your organizational challenge</li>
            </ul>
            <p className="text-body leading-relaxed text-neutral-700">
              When you use our calendar booking feature, Calendly (a third-party
              service) may collect additional information such as your name,
              email address, and scheduling preferences.
            </p>
          </PolicySection>

          {/* 3. How We Collect Information */}
          <PolicySection title="How We Collect Information">
            <p className="text-body leading-relaxed text-neutral-700 mb-4">
              We collect personal information directly from you when you:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4 ml-4">
              <li>Submit an inquiry through our contact form</li>
              <li>
                Schedule a consultation through our Calendly booking widget
              </li>
            </ul>
            <p className="text-body leading-relaxed text-neutral-700">
              We do not collect information through cookies, tracking pixels, or
              automated means on this website.
            </p>
          </PolicySection>

          {/* 4. Purpose of Collection */}
          <PolicySection title="Purpose of Collection">
            <p className="text-body leading-relaxed text-neutral-700 mb-4">
              We collect your personal information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4 ml-4">
              <li>
                To respond to your inquiries about our consulting services
              </li>
              <li>To schedule and conduct consultations</li>
              <li>To communicate with you about our services</li>
              <li>To maintain records of client interactions</li>
            </ul>
            <p className="text-body leading-relaxed text-neutral-700">
              We will not use your personal information for any purpose other
              than those stated above without your consent.
            </p>
          </PolicySection>

          {/* 5. Third-Party Service Providers */}
          <PolicySection title="Third-Party Service Providers">
            <p className="text-body leading-relaxed text-neutral-700 mb-4">
              We use the following third-party services to process your
              information:
            </p>
            <div className="mb-6">
              <p className="text-body leading-relaxed text-neutral-700 mb-2">
                <strong className="font-semibold text-neutral-900">
                  Formspree
                </strong>{' '}
                &mdash; Our contact form submissions are processed by Formspree,
                which temporarily stores your form data to deliver it to us via
                email. Formspree&rsquo;s privacy policy is available at{' '}
                <ExternalLink href="https://formspree.io/legal/privacy-policy">
                  formspree.io/legal/privacy-policy
                </ExternalLink>
                .
              </p>
            </div>
            <div className="mb-6">
              <p className="text-body leading-relaxed text-neutral-700 mb-2">
                <strong className="font-semibold text-neutral-900">
                  Calendly
                </strong>{' '}
                &mdash; Our booking widget is provided by Calendly, which
                processes your scheduling information. Calendly&rsquo;s privacy
                policy is available at{' '}
                <ExternalLink href="https://calendly.com/privacy">
                  calendly.com/privacy
                </ExternalLink>
                .
              </p>
            </div>
            <p className="text-body leading-relaxed text-neutral-700">
              These service providers are bound by their own privacy policies and
              are only used to facilitate the services described above.
            </p>
          </PolicySection>

          {/* 6. Data Retention */}
          <PolicySection title="Data Retention">
            <p className="text-body leading-relaxed text-neutral-700 mb-4">
              We retain your personal information only for as long as necessary
              to fulfill the purposes for which it was collected:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4 ml-4">
              <li>
                Contact form submissions: retained for the duration of any
                resulting business relationship, plus two (2) years
              </li>
              <li>
                Calendly booking data: managed according to Calendly&rsquo;s
                retention policies
              </li>
            </ul>
            <p className="text-body leading-relaxed text-neutral-700">
              When your information is no longer needed, it will be securely
              deleted or anonymized.
            </p>
          </PolicySection>

          {/* 7. Data Security */}
          <PolicySection title="Data Security">
            <p className="text-body leading-relaxed text-neutral-700 mb-4">
              We protect your personal information through:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 ml-4">
              <li>
                Encrypted data transmission (HTTPS/TLS) for all website
                interactions
              </li>
              <li>
                Secure third-party processors with their own security measures
              </li>
              <li>
                Limited access to personal information on a need-to-know basis
              </li>
            </ul>
          </PolicySection>

          {/* 8. Your Rights Under PIPEDA */}
          <PolicySection title="Your Rights Under PIPEDA">
            <p className="text-body leading-relaxed text-neutral-700 mb-4">
              Under PIPEDA, you have the right to:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-2 mb-4 ml-4">
              <li>
                <strong className="font-semibold text-neutral-900">
                  Access
                </strong>{' '}
                your personal information held by us
              </li>
              <li>
                <strong className="font-semibold text-neutral-900">
                  Correct
                </strong>{' '}
                any inaccurate personal information
              </li>
              <li>
                <strong className="font-semibold text-neutral-900">
                  Withdraw consent
                </strong>{' '}
                for the use of your personal information
              </li>
              <li>
                <strong className="font-semibold text-neutral-900">
                  File a complaint
                </strong>{' '}
                with the Office of the Privacy Commissioner of Canada if you
                believe your privacy rights have been violated
              </li>
            </ul>
            <p className="text-body leading-relaxed text-neutral-700">
              To exercise any of these rights, please contact us using the
              information below.
            </p>
          </PolicySection>

          {/* 9. Contact Us */}
          <PolicySection title="Contact Us">
            <p className="text-body leading-relaxed text-neutral-700 mb-4">
              If you have questions about this Privacy Policy or wish to exercise
              your privacy rights, please contact:
            </p>
            <address className="not-italic text-body leading-relaxed text-neutral-700">
              <strong className="font-semibold text-neutral-900">
                Ikigai Consulting Group
              </strong>
              <br />
              Email:{' '}
              <a
                href="mailto:privacy@ikigaiconsulting.ca"
                className="text-hunter-green-600 underline underline-offset-4 decoration-gold/50 hover:decoration-gold transition-colors"
              >
                privacy@ikigaiconsulting.ca
              </a>
            </address>
          </PolicySection>

          {/* 10. Changes to This Policy */}
          <PolicySection title="Changes to This Policy">
            <p className="text-body leading-relaxed text-neutral-700">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date.
            </p>
          </PolicySection>

          {/* Footer metadata + back link */}
          <div className="mt-16 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-500 mb-6">
              Last updated: February 2026
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-body font-semibold text-hunter-green-600 transition-colors hover:text-hunter-green-700"
            >
              &larr; Return to Contact
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
