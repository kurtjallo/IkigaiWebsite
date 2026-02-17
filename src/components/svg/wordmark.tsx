import { cn } from '@/lib/utils'

interface WordMarkProps {
  variant?: 'dark' | 'light'
  className?: string
  showTagline?: boolean
}

function DotLetter({
  children,
  dotClassName,
}: {
  children: string
  dotClassName: string
}) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden="true"
        className={cn(
          'absolute left-1/2 -translate-x-1/2 rounded-full',
          'h-[0.18em] w-[0.18em] -top-[0.08em]',
          dotClassName
        )}
      />
      {children}
    </span>
  )
}

export function WordMark({
  variant = 'dark',
  className,
  showTagline = false,
}: WordMarkProps) {
  const textColor =
    variant === 'dark' ? 'text-hunter-green' : 'text-white'
  const dotBg =
    variant === 'dark' ? 'bg-hunter-green' : 'bg-hunter-green-300'
  const taglineColor =
    variant === 'dark' ? 'text-neutral-500' : 'text-neutral-400'

  return (
    <span className={cn('inline-flex flex-col', className)}>
      <span
        className={cn(
          'font-serif font-bold tracking-[0.12em]',
          textColor
        )}
      >
        Ik
        <DotLetter dotClassName={dotBg}>i</DotLetter>
        ga
        <DotLetter dotClassName={dotBg}>i</DotLetter>
      </span>
      {showTagline && (
        <span className={cn('mt-1 flex items-center gap-1', taglineColor)}>
          <span className="text-[0.35em] font-sans tracking-[0.25em] uppercase">
            Consulting Group
          </span>
        </span>
      )}
    </span>
  )
}
