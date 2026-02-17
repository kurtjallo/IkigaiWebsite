import type { Metadata } from 'next'
import { pillars } from '@/lib/data/pillars'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { ServicePillar } from '@/components/sections/service-pillar'
import { Divider } from '@/components/ui/divider'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'Services \u2013 The 7 Pillars of Organizational Architecture',
  description:
    'From strategic planning to community engagement, our 7 pillars of organizational architecture give Ontario nonprofits and NGOs the structure they need to sustain and scale their impact.',
}

export default function ServicesPage() {
  return (
    <>
      <Section background="hunter-green">
        <SectionHeading
          tagline="Our Services"
          heading="Seven Pillars of Organizational Architecture"
          description="Each pillar addresses a critical dimension of organizational health. Together, they form a complete architecture for purpose-driven organizations that don\u2019t just survive\u2014they thrive."
          align="center"
          headingAs="h1"
          dark
        />
      </Section>

      {pillars.map((pillar, index) => (
        <div key={pillar.slug}>
          <ServicePillar
            pillar={pillar}
            background={index % 2 === 0 ? 'white' : 'light-green'}
            index={index}
          />
          {index < pillars.length - 1 && <Divider />}
        </div>
      ))}

      <CTASection
        heading="Ready to Architect Your Organization?"
        description="Every strong organization starts with a conversation about what\u2019s possible."
        buttonText="Schedule a Strategic Conversation"
      />
    </>
  )
}
