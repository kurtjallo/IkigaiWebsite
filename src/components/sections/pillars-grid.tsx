import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Card } from '@/components/ui/card'
import { PillarIcon } from '@/components/svg/pillar-icons'
import { pillars } from '@/lib/data/pillars'
import { FadeIn } from '@/components/animation/fade-in'
import { StaggerChildren, StaggerItem } from '@/components/animation/stagger-children'

type PillarSlug =
  | 'strategic'
  | 'governance'
  | 'operational'
  | 'program'
  | 'leadership'
  | 'accountability'
  | 'community'

export function PillarsGrid() {
  return (
    <Section background="white">
      <FadeIn>
        <SectionHeading
          tagline="Our Framework"
          heading="The 7 Pillars of Organizational Architecture"
          align="center"
        />
      </FadeIn>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
        {pillars.map((pillar) => (
          <StaggerItem key={pillar.slug}>
          <Card>
            <PillarIcon
              type={pillar.slug as PillarSlug}
              className="h-10 w-10 text-gold"
            />
            <h3 className="mt-4 font-serif text-h4 text-neutral-900">
              {pillar.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-hunter-green-600">
              {pillar.subtitle}
            </p>
            <p className="mt-3 text-body text-neutral-600">
              {pillar.description}
            </p>
            <a
              href={'/services#' + pillar.slug}
              aria-label={`${pillar.ctaText} - ${pillar.title}`}
              className="mt-4 inline-block text-sm font-semibold text-hunter-green transition-colors hover:text-gold-700"
            >
              {pillar.ctaText} &rarr;
            </a>
          </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  )
}
