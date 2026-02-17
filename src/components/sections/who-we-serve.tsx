import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/animation/fade-in'
import { StaggerChildren, StaggerItem } from '@/components/animation/stagger-children'

const audiences = [
  {
    name: 'NGOs & Charities',
    tagline: 'Organizations turning compassion into systemic change',
  },
  {
    name: 'Social Service Agencies',
    tagline: 'Teams delivering critical programs to communities in need',
  },
  {
    name: 'Faith-Based Organizations',
    tagline: 'Communities grounding their mission in purpose and service',
  },
  {
    name: 'Women-Led & Justice-Centered Initiatives',
    tagline: 'Leaders building equitable systems from the ground up',
  },
  {
    name: 'Boards & Executive Teams',
    tagline: 'Decision-makers seeking clarity, alignment, and impact',
  },
]

export function WhoWeServe() {
  return (
    <Section background="hunter-green">
      <FadeIn>
        <SectionHeading
          tagline="Who We Serve"
          heading="Built for Leaders Who Carry Mission."
          align="center"
          dark
        />
      </FadeIn>
      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {audiences.map((audience) => (
          <StaggerItem key={audience.name}>
          <div
            className="rounded-sm border border-hunter-green-400/20 bg-hunter-green-600/30 p-6"
          >
            <h3 className="font-serif text-h4 text-white">{audience.name}</h3>
            <p className="mt-2 text-body text-neutral-300">
              {audience.tagline}
            </p>
          </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  )
}
