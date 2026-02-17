import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { testimonials } from '@/lib/data/testimonials'

export function Testimonials() {
  return (
    <Section background="hunter-green">
      <SectionHeading
        tagline="What Leaders Say"
        heading="Voices of Impact"
        align="center"
        dark
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.name} className="relative">
            {/* Decorative quotation mark */}
            <span
              className="block font-serif text-6xl leading-none text-gold-200/30 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Quote text */}
            <p className="mt-2 text-body-lg italic leading-relaxed text-white/90">
              {testimonial.quote}
            </p>

            {/* Short gold divider */}
            <div className="mt-6 h-0.5 w-12 bg-gold/40" />

            {/* Attribution */}
            <footer className="mt-4">
              <p className="font-semibold text-white">
                {testimonial.name}
              </p>
              <p className="text-sm text-white/70">
                {testimonial.role}, {testimonial.organization}
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  )
}
