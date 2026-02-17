import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <Section background="hunter-green">
      <div className="min-h-[80vh] flex items-center">
        <div>
          <h1 className="font-serif text-h1 md:text-display text-white max-w-[52rem]">
            Architecting Purpose-Driven Organizations to Thrive
          </h1>
          <p className="text-body-lg text-neutral-300 mt-6 max-w-[48rem]">
            We design the structural foundations that transform mission-driven
            organizations from fragile to resilient.
          </p>
          <div className="mt-10">
            <Button variant="gold" size="lg" href="/contact">
              Schedule a Strategic Conversation
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
