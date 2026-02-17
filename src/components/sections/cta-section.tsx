import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  heading?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}

export function CTASection({
  heading = "Let\u2019s Architect Your Organization.",
  description = 'Ready to build the structures your mission deserves? Start with a strategic conversation.',
  buttonText = 'Book Your Strategy Call',
  buttonHref = '/contact',
}: CTASectionProps) {
  return (
    <Section background="black">
      <div className="text-center">
        <h2 className="font-serif text-h2 text-white">{heading}</h2>
        <p className="text-body-lg text-neutral-400 max-w-[36rem] mx-auto mt-4">
          {description}
        </p>
        <div className="mt-8">
          <Button variant="gold" size="lg" href={buttonHref}>
            {buttonText}
          </Button>
        </div>
      </div>
    </Section>
  )
}
