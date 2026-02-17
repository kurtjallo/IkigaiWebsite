import type { Metadata } from 'next'
import { FounderBio } from '@/components/sections/founder-bio'
import { Philosophy } from '@/components/sections/philosophy'
import { ValuesRow } from '@/components/sections/values-row'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'About Ikigai Consulting Group',
  description:
    'Founded by Nilda Bastone, Ikigai Consulting Group brings deep nonprofit expertise to Ontario\u2019s purpose-driven organizations. Learn about our values, philosophy, and commitment to impact.',
}

export default function AboutPage() {
  return (
    <>
      <FounderBio />
      <Philosophy />
      <ValuesRow />
      <CTASection
        heading="Ready to Build Together?"
        description="Let\u2019s start a conversation about what your organization needs to thrive."
        buttonText="Schedule a Strategic Conversation"
      />
    </>
  )
}
