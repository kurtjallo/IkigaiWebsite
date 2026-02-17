import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/data/metadata'
import { HeroSection } from '@/components/sections/hero'
import { ProblemSection } from '@/components/sections/problem'
import { SolutionSection } from '@/components/sections/solution'
import { PillarsGrid } from '@/components/sections/pillars-grid'
import { WhoWeServe } from '@/components/sections/who-we-serve'
import { WhyIkigai } from '@/components/sections/why-ikigai'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = pageMetadata.home

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PillarsGrid />
      <WhoWeServe />
      <WhyIkigai />
      <CTASection />
    </>
  )
}
