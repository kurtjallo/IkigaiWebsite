import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/data/metadata'
import { FounderBio } from '@/components/sections/founder-bio'
import { Philosophy } from '@/components/sections/philosophy'
import { ValuesRow } from '@/components/sections/values-row'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = pageMetadata.about

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
