import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { PillarIcon } from '@/components/svg/pillar-icons'
import { FadeIn } from '@/components/animation/fade-in'
import type { Pillar } from '@/lib/data/pillars'

interface ServicePillarProps {
  pillar: Pillar
  background: 'white' | 'light-green'
  index: number
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
          <span className="text-body text-neutral-700">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ServicePillar({ pillar, background, index }: ServicePillarProps) {
  return (
    <Section background={background} id={pillar.slug}>
      <FadeIn>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <PillarIcon
            type={pillar.slug as Parameters<typeof PillarIcon>[0]['type']}
            size={40}
            className="text-hunter-green-600 mb-6"
          />
          <SectionHeading
            tagline={`Pillar ${index + 1} of 7`}
            heading={pillar.title}
            headingAs="h2"
          />
          <p className="text-body-lg text-neutral-700 mt-6">
            {pillar.description}
          </p>
          <div className="mt-8 h-px w-full bg-gold/40" />
        </div>
        <div>
          <h3 className="font-serif text-h4 text-neutral-900 mb-4">
            What&apos;s Included
          </h3>
          <BulletList items={pillar.included} />

          <h3 className="font-serif text-h4 text-neutral-900 mb-4 mt-8">
            Outcomes
          </h3>
          <BulletList items={pillar.outcomes} />

          <div className="mt-8">
            <Button href="/contact" variant="gold">
              Schedule a Strategic Conversation
            </Button>
          </div>
        </div>
      </div>
      </FadeIn>
    </Section>
  )
}
