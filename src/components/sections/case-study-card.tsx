import { Section } from '@/components/ui/section'
import { Divider } from '@/components/ui/divider'
import type { CaseStudy } from '@/lib/data/case-studies'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  index?: number
}

export function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
  const background = index % 2 === 0 ? 'white' : 'light-green'

  return (
    <article>
      <Section background={background}>
        {/* Header: sector tag + title */}
        <p className="text-sm font-semibold uppercase tracking-widest text-hunter-green-600">
          {caseStudy.organization} &middot; {caseStudy.sector}
        </p>
        <h3 className="mt-3 font-serif text-h3 text-neutral-900">
          {caseStudy.title}
        </h3>
        <Divider className="mt-4 mb-8" />

        {/* Challenge + Approach: side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h4 className="font-serif text-h4 text-hunter-green-600 mb-2">
              The Challenge
            </h4>
            <p className="text-body leading-relaxed text-neutral-700">
              {caseStudy.challenge}
            </p>
          </div>
          <div>
            <h4 className="font-serif text-h4 text-hunter-green-600 mb-2">
              Our Approach
            </h4>
            <p className="text-body leading-relaxed text-neutral-700">
              {caseStudy.approach}
            </p>
          </div>
        </div>

        {/* Outcome: full width */}
        <div className="mt-8">
          <h4 className="font-serif text-h4 text-hunter-green-600 mb-2">
            The Outcome
          </h4>
          <p className="text-body leading-relaxed text-neutral-700 max-w-[48rem]">
            {caseStudy.outcome}
          </p>
        </div>

        {/* Measurable Results */}
        <div className="mt-8">
          <h4 className="font-serif text-h4 text-hunter-green-600 mb-3">
            Measurable Results
          </h4>
          <ul className="space-y-3">
            {caseStudy.metrics.map((result) => (
              <li key={result} className="flex items-start gap-3">
                <span
                  className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-gold"
                  aria-hidden="true"
                />
                <span className="text-body leading-relaxed text-neutral-700">
                  {result}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </article>
  )
}
