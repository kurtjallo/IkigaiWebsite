import Image from 'next/image'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { FadeIn } from '@/components/animation/fade-in'

interface FounderBioProps {
  imageSrc?: string
}

export function FounderBio({ imageSrc }: FounderBioProps) {
  return (
    <Section background="white">
      <FadeIn>
        <SectionHeading
          tagline="Our Founder"
          heading="Nilda Bastone"
          headingAs="h1"
        />
      </FadeIn>
      <FadeIn delay={0.15}>
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="space-y-5">
          {imageSrc && (
            <div className="mb-8">
              <Image
                src={imageSrc}
                alt="Nilda Bastone, Founder of Ikigai Consulting Group"
                width={480}
                height={600}
                className="rounded-sm shadow-md w-full max-w-sm"
              />
            </div>
          )}
          <p className="text-body-lg text-neutral-600">
            Nilda Bastone founded Ikigai Consulting Group with a conviction
            that purpose-driven organizations deserve more than good
            intentions&mdash;they deserve strong architecture. With over two
            decades of experience in organizational development and nonprofit
            leadership, she has guided dozens of organizations through
            transformative change.
          </p>
          <p className="text-body-lg text-neutral-600">
            Her career has been defined by a singular focus: building
            sustainable structures that allow mission-driven teams to do their
            best work. From strategic planning and governance design to
            leadership development and community engagement, Nilda brings a
            practitioner&apos;s depth to every engagement.
          </p>
          <p className="text-body-lg text-neutral-600">
            Rooted in Ontario&apos;s nonprofit ecosystem, she understands the
            unique pressures facing charities, social service agencies, and
            faith-based organizations&mdash;and she architects solutions that
            honor both the mission and the people who carry it.
          </p>
        </div>
        <div className="flex items-start">
          <blockquote className="border-l-4 border-gold pl-6 py-4">
            <p className="font-serif text-h3 text-neutral-900 leading-snug">
              &ldquo;Organizations don&apos;t fail because people stop caring.
              They falter because the structures beneath them were never built
              to sustain the weight of their mission.&rdquo;
            </p>
            <footer className="mt-6">
              <p className="text-sm font-semibold text-hunter-green-600 uppercase tracking-widest">
                Nilda Bastone
              </p>
              <p className="text-sm text-neutral-500 mt-1">
                Founder, Ikigai Consulting Group
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
      </FadeIn>
    </Section>
  )
}
