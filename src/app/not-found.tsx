import type { Metadata } from 'next'
import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <Section background="white">
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <SectionHeading
          heading="Page Not Found"
          headingAs="h1"
          description="The page you're looking for doesn't exist or has been moved."
          align="center"
        />
        <div className="mt-10">
          <Button variant="gold" size="lg" href="/">
            Return to Homepage
          </Button>
        </div>
      </div>
    </Section>
  )
}
