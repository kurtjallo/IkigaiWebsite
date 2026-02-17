import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/animation/fade-in'

const phases = [
  { name: 'Blueprint', description: 'Assess and design' },
  { name: 'Build', description: 'Develop and implement' },
  { name: 'Strengthen', description: 'Test and refine' },
  { name: 'Sustain', description: 'Embed and grow' },
]

export function SolutionSection() {
  return (
    <Section background="light-green">
      <FadeIn>
        <SectionHeading
          tagline="The Solution"
          heading="We Are Organizational Architects."
          align="center"
        />
      </FadeIn>
      <FadeIn delay={0.15}>
      <p className="text-body-lg max-w-[48rem] mx-auto text-center mt-6 text-neutral-600">
        Ikigai Consulting Group designs and builds the structural foundations
        that organizations need — not quick fixes or off-the-shelf templates,
        but architectural frameworks built to support the full weight of your
        mission.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 mt-12">
        {phases.map((phase, index) => (
          <div key={phase.name} className="contents">
            <div className="text-center px-6 py-4">
              <p className="font-serif text-h4 text-hunter-green">
                {phase.name}
              </p>
              <p className="text-sm text-neutral-500 mt-1">
                {phase.description}
              </p>
            </div>
            {index < phases.length - 1 && (
              <span className="hidden md:block text-gold text-h3" aria-hidden="true">
                &rarr;
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="text-sm text-neutral-500 text-center mt-8">
        The Ikigai Architecture Model&trade;
      </p>
      </FadeIn>
    </Section>
  )
}
