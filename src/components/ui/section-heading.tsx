import { cn } from '@/lib/utils'

type HeadingLevel = 'h1' | 'h2' | 'h3'
type HeadingAlign = 'left' | 'center'

interface SectionHeadingProps {
  heading: string
  tagline?: string
  description?: string
  align?: HeadingAlign
  accentLine?: boolean
  headingAs?: HeadingLevel
  dark?: boolean
  className?: string
  children?: React.ReactNode
}

const headingSizeClasses: Record<HeadingLevel, string> = {
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
}

/**
 * Section heading component with optional tagline, gold accent underline, and description.
 *
 * Handles dark/light mode text colors:
 * - Light mode: tagline is hunter-green-600 (NOT gold -- fails WCAG on light backgrounds)
 * - Dark mode: tagline is gold (safe on dark backgrounds)
 *
 * Heading renders in Playfair Display (font-serif) at the appropriate size.
 */
export function SectionHeading({
  heading,
  tagline,
  description,
  align = 'left',
  accentLine = true,
  headingAs: Tag = 'h2',
  dark = false,
  className,
  children,
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        isCenter && 'text-center',
        className
      )}
    >
      {tagline && (
        <p
          className={cn(
            'mb-3 font-sans text-sm font-semibold uppercase tracking-widest',
            dark ? 'text-gold' : 'text-hunter-green-600'
          )}
        >
          {tagline}
        </p>
      )}

      <Tag
        className={cn(
          'font-serif',
          headingSizeClasses[Tag],
          dark ? 'text-white' : 'text-neutral-900'
        )}
      >
        {heading}
      </Tag>

      {accentLine && (
        <div
          className={cn(
            'mt-4 h-0.5 w-16 bg-gold',
            isCenter && 'mx-auto'
          )}
        />
      )}

      {description && (
        <p
          className={cn(
            'mt-4 max-w-[48rem] text-body-lg',
            dark ? 'text-neutral-300' : 'text-neutral-600',
            isCenter && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  )
}
