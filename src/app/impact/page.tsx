import type { Metadata } from 'next'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { CaseStudyCard } from '@/components/sections/case-study-card'
import { Testimonials } from '@/components/sections/testimonials'
import { CTASection } from '@/components/sections/cta-section'
import { caseStudies } from '@/lib/data/case-studies'

export const metadata: Metadata = {
  title: 'Impact & Case Studies',
  description:
    'See how the Ikigai Architecture Model transforms purpose-driven organizations. Real case studies with measurable results from Ontario nonprofits.',
}

export default function ImpactPage() {
  return (
    <>
      {/* Page header */}
      <Section background="hunter-green" className="py-20 md:py-28">
        <SectionHeading
          tagline="Our Impact"
          heading="Architecture in Action."
          headingAs="h1"
          description="Real organizations. Real challenges. Real results. See how the Ikigai Architecture Model&#8482; transforms purpose-driven organizations from fragile to resilient."
          align="center"
          dark
        />
      </Section>

      {/* Case studies */}
      {caseStudies.map((caseStudy, index) => (
        <CaseStudyCard
          key={caseStudy.slug}
          caseStudy={caseStudy}
          index={index}
        />
      ))}

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTASection
        heading="Let&#8217;s Architect Your Organization."
        description="Every resilient organization starts with a conversation about where you are and where you need to be."
        buttonText="Begin the Conversation"
        buttonHref="/contact"
      />
    </>
  )
}
