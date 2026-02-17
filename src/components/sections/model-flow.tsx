import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Divider } from '@/components/ui/divider'
import { PillarIcon } from '@/components/svg/pillar-icons'
import { pillars } from '@/lib/data/pillars'

type PillarSlug =
  | 'strategic'
  | 'governance'
  | 'operational'
  | 'program'
  | 'leadership'
  | 'accountability'
  | 'community'

const flowPhases = [
  {
    number: '01',
    title: 'Blueprint',
    description:
      'We assess your current structure, identify gaps, and design the architectural plan. Every strong organization begins with an honest understanding of where it stands and a clear vision of where it needs to be.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'We implement foundational systems -- governance, strategy, operations -- with your team. This is not consulting from a distance; we build alongside you, ensuring every system is understood and owned internally.',
  },
  {
    number: '03',
    title: 'Strengthen',
    description:
      'We develop leadership capacity, program excellence, and accountability structures. Architecture without the people to sustain it is just scaffolding. This phase ensures your team can carry the structure forward.',
  },
  {
    number: '04',
    title: 'Sustain',
    description:
      'We embed community architecture and continuous improvement so the structure endures. The goal is not dependency on consultants -- it is organizational resilience that outlasts any single engagement.',
  },
]

const reasons = [
  {
    title: 'Holistic, Not Piecemeal',
    description:
      'Most consultants fix one thing. We architect the whole system. When governance, strategy, operations, programs, leadership, accountability, and community are designed together, the result is exponentially stronger than the sum of its parts.',
  },
  {
    title: 'Built to Last',
    description:
      'Our four-phase flow embeds sustainability from day one. We do not hand you a report and walk away. Every phase builds on the last, and the Sustain phase ensures your organization carries the architecture forward independently.',
  },
  {
    title: 'Purpose-Centered',
    description:
      'Every pillar connects back to your mission. Structure serves purpose, not the other way around. Organizations drift when systems are designed in isolation from mission. The Ikigai Architecture Model\u2122 keeps purpose at the centre of every structural decision.',
  },
]

export function ModelFlow() {
  return (
    <>
      {/* Sub-section 1: The Four Phases */}
      <Section background="light-green">
        <SectionHeading
          tagline="How It Works"
          heading="From Blueprint to Sustain"
          description="The Ikigai Architecture Model&#8482; moves through four deliberate phases. Each phase builds on the last, creating organizational architecture that is not only sound but sustainable."
          align="center"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {flowPhases.map((phase, index) => (
            <div key={phase.number} className="relative">
              {/* Gold connecting line between phases on desktop */}
              {index < flowPhases.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 -right-2 w-4 text-center text-gold text-h4"
                  aria-hidden="true"
                >
                  &#8594;
                </div>
              )}
              <div className="text-center lg:text-left">
                <span className="font-serif text-display text-hunter-green/10 leading-none block">
                  {phase.number}
                </span>
                <h3 className="font-serif text-h3 text-hunter-green -mt-4">
                  {phase.title}
                </h3>
                <Divider className="mt-3 mb-4 w-12 mx-auto lg:mx-0" />
                <p className="text-body text-neutral-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Sub-section 2: Pillar Integration */}
      <Section background="white">
        <SectionHeading
          tagline="Complete Architecture"
          heading="Seven Pillars. One Integrated System."
          description="The pillars of the Ikigai Architecture Model&#8482; are not siloed services. They connect through the Blueprint, Build, Strengthen, and Sustain flow -- each pillar reinforcing the others to create a structure greater than any single intervention."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {pillars.map((pillar) => (
            <Card key={pillar.slug}>
              <PillarIcon
                type={pillar.slug as PillarSlug}
                className="h-8 w-8 text-gold"
              />
              <h3 className="mt-3 font-serif text-h4 text-neutral-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {pillar.description}
              </p>
              <a
                href={`/services#${pillar.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-hunter-green transition-colors hover:text-gold-700"
              >
                Learn more &rarr;
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Sub-section 3: Why It Works */}
      <Section background="hunter-green">
        <SectionHeading
          tagline="The Difference"
          heading="Why the Ikigai Architecture Model&#8482; Works"
          align="center"
          dark
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <h3 className="font-serif text-h4 text-gold-200">
                {reason.title}
              </h3>
              <div className="mt-3 h-0.5 w-10 bg-gold/40" />
              <p className="mt-4 text-body text-neutral-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="gold" size="lg" href="/contact">
            Schedule a Strategic Conversation
          </Button>
        </div>
      </Section>
    </>
  )
}
