import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/data/metadata'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { ContactForm } from '@/components/sections/contact-form'
import { CalendarBooking } from '@/components/sections/calendar-booking'

export const metadata: Metadata = pageMetadata.contact

export default function ContactPage() {
  return (
    <>
      {/* Hero heading + Contact form */}
      <Section background="white">
        <div className="mb-12 md:mb-16">
          <SectionHeading
            heading="Begin the Conversation."
            headingAs="h1"
            tagline="GET IN TOUCH"
            description="Ready to architect a stronger organization? Tell us about your challenge and we'll respond within 2 business days."
            align="center"
          />
        </div>

        <ContactForm />
      </Section>

      {/* Calendar booking -- hunter-green section (built into CalendarBooking) */}
      <CalendarBooking />

      {/* Location info */}
      <Section background="light-green">
        <div className="text-center">
          <h2 className="font-serif text-h3 text-neutral-900">
            Serving purpose-driven organizations across Ontario
          </h2>
          <div className="mt-4 h-0.5 w-16 bg-gold mx-auto" aria-hidden="true" />
          <p className="mt-6 text-body-lg text-neutral-600">
            Have a quick question? Email us directly at{' '}
            <a
              href="mailto:hello@ikigaiconsulting.ca"
              className="text-hunter-green-600 underline underline-offset-4 decoration-gold/50 hover:decoration-gold transition-colors"
            >
              hello@ikigaiconsulting.ca
            </a>
          </p>
        </div>
      </Section>
    </>
  )
}
