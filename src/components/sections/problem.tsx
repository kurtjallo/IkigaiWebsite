import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'

const painPoints = [
  'Strategic plans that gather dust on shelves',
  'Governance confusion that paralyzes decision-making',
  'Operational misalignment that drains resources',
  'Program drift that dilutes impact',
  'Leadership burnout from carrying the weight alone',
]

export function ProblemSection() {
  return (
    <Section background="white">
      <SectionHeading
        tagline="The Challenge"
        heading="Strong Missions. Fragile Structures."
        align="center"
      />
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="space-y-5">
          <p className="text-body-lg text-neutral-600">
            You started with a mission that mattered. But somewhere between the
            strategic plan and the daily grind, the structures that should
            support your work started to crack.
          </p>
          <p className="text-body-lg text-neutral-600">
            Boards meet but don&apos;t lead. Programs grow but can&apos;t
            measure their impact. Staff carry the weight of the mission on
            systems built for an organization half your size.
          </p>
          <p className="text-body-lg text-neutral-600">
            It&apos;s not a failure of commitment. It&apos;s a failure of
            architecture.
          </p>
        </div>
        <div className="space-y-6">
          {painPoints.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <span className="mt-2.5 h-0.5 w-4 shrink-0 bg-gold" />
              <p className="text-body-lg text-neutral-700">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
