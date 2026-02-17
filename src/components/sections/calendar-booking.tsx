'use client'

import { useState, useEffect, useRef } from 'react'
import { PopupButton } from 'react-calendly'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/animation/fade-in'

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL
const BUTTON_TEXT = 'Schedule a Strategic Conversation'

export function CalendarBooking() {
  const [mounted, setMounted] = useState(false)
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    rootRef.current = document.getElementById('__next')
    setMounted(true)

    if (!CALENDLY_URL) {
      console.warn(
        'NEXT_PUBLIC_CALENDLY_URL is not set. Calendar booking will be disabled.'
      )
    }
  }, [])

  return (
    <Section background="hunter-green">
      <FadeIn>
      <div className="text-center">
        <SectionHeading
          heading="Prefer to Book Directly?"
          description="Skip the form and schedule a strategic conversation at a time that works for you."
          align="center"
          dark
        />

        <div className="mt-10">
          {mounted && CALENDLY_URL && rootRef.current ? (
            <PopupButton
              url={CALENDLY_URL}
              rootElement={rootRef.current}
              text={BUTTON_TEXT}
              className="inline-flex items-center justify-center rounded-sm transition-colors duration-200 bg-gold text-black font-semibold hover:bg-gold-500 px-8 py-4 text-body-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            />
          ) : (
            <Button variant="gold" size="lg" disabled={!CALENDLY_URL}>
              {CALENDLY_URL ? BUTTON_TEXT : 'Booking Coming Soon'}
            </Button>
          )}
        </div>
      </div>
      </FadeIn>
    </Section>
  )
}
