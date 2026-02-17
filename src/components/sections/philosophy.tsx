import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Card } from '@/components/ui/card'

const philosophyPillars = [
  {
    title: 'Alignment',
    description:
      'Organizations thrive when mission, strategy, and operations move in harmony. We design structures that ensure every level of your organization reinforces the same purpose\u2014so energy flows toward impact, not friction.',
  },
  {
    title: 'Integrity',
    description:
      'Lasting structures are built on honest assessment and ethical foundations. We begin every engagement with the truth of where you are, not where you wish you were\u2014because real transformation requires real clarity.',
  },
  {
    title: 'Human-Centered Leadership',
    description:
      'People are the living systems within every structure. The strongest architecture means nothing without leaders who are supported, developed, and empowered to sustain it. We build for people first.',
  },
  {
    title: 'Structural Excellence',
    description:
      'Good intentions require strong architecture to create lasting impact. We believe that disciplined design\u2014clear roles, robust processes, accountable systems\u2014is what turns aspiration into enduring results.',
  },
]

export function Philosophy() {
  return (
    <Section background="light-green">
      <SectionHeading
        tagline="Our Philosophy"
        heading="Why Ikigai?"
        align="center"
      />
      <p className="text-body-lg text-neutral-600 max-w-[48rem] mx-auto text-center mt-6">
        Ikigai is the Japanese concept of finding purpose at the intersection of
        what you love, what the world needs, what you can be paid for, and what
        you are good at. We believe organizations, like individuals, have an
        ikigai&mdash;and our work is to architect the structures that let that
        purpose flourish.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {philosophyPillars.map((pillar) => (
          <Card key={pillar.title} hover={false}>
            <h3 className="font-serif text-h4 text-neutral-900">
              {pillar.title}
            </h3>
            <div className="mt-3 h-0.5 w-10 bg-gold" />
            <p className="mt-4 text-body text-neutral-600">
              {pillar.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
