import { cn } from '@/lib/utils'

interface DividerProps {
  className?: string
}

/**
 * Gold horizontal divider line.
 * Used between sections for visual separation per the design system.
 */
export function Divider({ className }: DividerProps) {
  return <hr className={cn('h-px w-full border-0 bg-gold/40', className)} />
}
