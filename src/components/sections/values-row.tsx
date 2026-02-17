import { Section } from '@/components/ui/section'
import { SectionHeading } from '@/components/ui/section-heading'
import { values } from '@/lib/data/values'
import { Shield, Target, Scale, Award, Flame } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  target: Target,
  scale: Scale,
  award: Award,
  flame: Flame,
}

export function ValuesRow() {
  return (
    <Section background="hunter-green">
      <SectionHeading
        heading="Our Values"
        align="center"
        dark
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 mt-12">
        {values.map((value) => {
          const Icon = iconMap[value.icon]
          return (
            <div
              key={value.name}
              className="flex flex-col items-center text-center"
            >
              {Icon && (
                <Icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
              )}
              <h3 className="text-body font-semibold text-white mt-3">
                {value.name}
              </h3>
              <p className="text-sm text-neutral-300 mt-2 max-w-[12rem]">
                {value.description}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
