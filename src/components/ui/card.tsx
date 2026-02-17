'use client'

import { cn } from '@/lib/utils'
import { HoverAccent } from '@/components/animation/hover-accent'

interface CardProps {
  hover?: boolean
  className?: string
  children: React.ReactNode
}

/**
 * Card component with white background, subtle shadow, and optional gold hover accent.
 *
 * Gold is only used on the hover border -- never as text. Safe on all backgrounds.
 */
export function Card({ hover = true, className, children }: CardProps) {
  const cardContent = (
    <div
      className={cn(
        'rounded-sm bg-white p-6 shadow-sm md:p-8',
        hover &&
          'border border-transparent transition-all duration-300 hover:border-gold/30 hover:shadow-md',
        !hover && 'border border-transparent',
        className
      )}
    >
      {children}
    </div>
  )

  if (hover) {
    return <HoverAccent>{cardContent}</HoverAccent>
  }

  return cardContent
}
