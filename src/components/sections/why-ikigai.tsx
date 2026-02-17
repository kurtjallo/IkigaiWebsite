import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/animation/fade-in'
import { StaggerChildren, StaggerItem } from '@/components/animation/stagger-children'

const differentiators = [
  {
    name: 'Authority',
    subtitle: 'Deep Expertise, Not Generic Advice',
    description:
      'Over two decades of hands-on experience designing organizational structures for purpose-driven organizations. We don\u2019t consult from textbooks \u2014 we architect from the trenches.',
  },
  {
    name: 'Full-Cycle Architecture',
    subtitle: 'Blueprint to Sustain',
    description:
      'Most consultants deliver a report and leave. We design, build, strengthen, and sustain \u2014 walking alongside you through every phase of transformation.',
  },
  {
    name: 'Measurable Impact',
    subtitle: 'Results You Can See',
    description:
      'Every engagement produces tangible, measurable outcomes. From governance clarity to operational efficiency, our impact shows up in your numbers and your culture.',
  },
]

export function WhyIkigai() {
  return (
    <Section background="light-green">
      <FadeIn>
        <SectionHeading
          tagline="Why Ikigai"
          heading="What Sets Us Apart"
          align="center"
        />
      </FadeIn>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
        {differentiators.map((item) => (
          <StaggerItem key={item.name}>
            <div className="h-1 w-12 bg-gold" />
            <h3 className="mt-6 font-serif text-h3 text-neutral-900">
              {item.name}
            </h3>
            <p className="mt-2 text-sm font-semibold text-hunter-green-600">
              {item.subtitle}
            </p>
            <p className="mt-4 text-body text-neutral-600">
              {item.description}
            </p>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  )
}
