'use client'

import { useState, useEffect } from 'react'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL
const BUTTON_TEXT = 'Schedule a Strategic Conversation'

/** Gold button styles matching the Button component's gold variant + lg size */
const goldButtonClasses =
  'inline-flex items-center justify-center rounded-sm transition-colors duration-200 bg-gold text-black font-semibold hover:bg-gold-500 px-8 py-4 text-body-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'

export function CalendarBooking() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (!CALENDLY_URL) {
      console.warn(
        'NEXT_PUBLIC_CALENDLY_URL is not set. Calendar booking will be disabled.'
      )
    }
  }, [])

  return (
    <Section background="hunter-green">
      <div className="text-center">
        <SectionHeading
          heading="Prefer to Book Directly?"
          description="Skip the form and schedule a strategic conversation at a time that works for you."
          align="center"
          dark
        />

        <div className="mt-10">
          {!mounted || !CALENDLY_URL ? (
            <button
              disabled={!CALENDLY_URL}
              className={goldButtonClasses}
              aria-label={CALENDLY_URL ? BUTTON_TEXT : 'Booking coming soon'}
            >
              {CALENDLY_URL ? BUTTON_TEXT : 'Booking Coming Soon'}
            </button>
          ) : (
            <CalendlyPopup url={CALENDLY_URL} />
          )}
        </div>
      </div>
    </Section>
  )
}

/** Separated to lazily import react-calendly only on the client after mount */
function CalendlyPopup({ url }: { url: string }) {
  const { PopupButton } = require('react-calendly') as typeof import('react-calendly')

  return (
    <PopupButton
      url={url}
      rootElement={document.getElementById('__next')!}
      text={BUTTON_TEXT}
      className={goldButtonClasses}
    />
  )
}
