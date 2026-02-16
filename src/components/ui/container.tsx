import { cn } from '@/lib/utils'

type ContainerSize = 'default' | 'narrow'

interface ContainerProps {
  size?: ContainerSize
  className?: string
  children: React.ReactNode
}

const sizeClasses: Record<ContainerSize, string> = {
  default: 'max-w-[72rem]',
  narrow: 'max-w-[48rem]',
}

/**
 * Max-width container with responsive horizontal padding.
 * Constrains content to prevent edge-to-edge layouts.
 *
 * - `default`: 72rem (1152px) max-width for standard content
 * - `narrow`: 48rem (768px) max-width for text-heavy sections
 */
export function Container({
  size = 'default',
  className,
  children,
}: ContainerProps) {
  return (
    <div className={cn('mx-auto px-6 md:px-8', sizeClasses[size], className)}>
      {children}
    </div>
  )
}
