import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/container'

type SectionBackground = 'white' | 'light-green' | 'hunter-green' | 'black'
type SectionPadding = 'default' | 'none'

interface SectionProps {
  background?: SectionBackground
  padding?: SectionPadding
  id?: string
  className?: string
  children: React.ReactNode
}

const backgroundClasses: Record<SectionBackground, string> = {
  white: 'bg-white text-neutral-900',
  'light-green': 'bg-hunter-green-50 text-neutral-900',
  'hunter-green': 'bg-hunter-green text-white',
  black: 'bg-neutral-950 text-white',
}

/**
 * Section wrapper with background alternation and vertical padding.
 *
 * Wraps children in a Container automatically. Use the `background` prop
 * to set the section's color scheme. Text colors are set automatically
 * based on the background.
 *
 * Background options:
 * - `white`: White background, dark text (default)
 * - `light-green`: Hunter green 50 background, dark text
 * - `hunter-green`: Hunter green background, white text
 * - `black`: Near-black background, white text
 */
export function Section({
  background = 'white',
  padding = 'default',
  id,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        padding === 'default' && 'py-16 md:py-24',
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  )
}
