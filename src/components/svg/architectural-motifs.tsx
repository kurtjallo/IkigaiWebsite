import { cn } from '@/lib/utils'

interface CornerAccentProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  className?: string
  size?: number
}

const rotationMap: Record<CornerAccentProps['position'], string> = {
  'top-left': 'rotate(0deg)',
  'top-right': 'rotate(90deg)',
  'bottom-right': 'rotate(180deg)',
  'bottom-left': 'rotate(270deg)',
}

export function CornerAccent({
  position,
  className,
  size = 48,
}: CornerAccentProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(className)}
      style={{ transform: rotationMap[position] }}
      aria-hidden="true"
    >
      {/* L-shaped bracket: vertical line down from top-left, horizontal line right from top-left */}
      <path d="M4 28 L4 4 L28 4" />
      {/* Inner accent line for depth */}
      <path d="M8 20 L8 8 L20 8" />
    </svg>
  )
}

interface BlueprintGridProps {
  className?: string
  opacity?: number
}

export function BlueprintGrid({ className, opacity = 0.05 }: BlueprintGridProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      className={cn(className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="blueprint-grid"
          width={40}
          height={40}
          patternUnits="userSpaceOnUse"
        >
          <line
            x1={0}
            y1={0}
            x2={40}
            y2={0}
            stroke="currentColor"
            strokeWidth={0.5}
          />
          <line
            x1={0}
            y1={0}
            x2={0}
            y2={40}
            stroke="currentColor"
            strokeWidth={0.5}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
    </svg>
  )
}

interface StructuralFrameProps {
  className?: string
  variant?: 'horizontal' | 'vertical'
}

export function StructuralFrame({
  className,
  variant = 'horizontal',
}: StructuralFrameProps) {
  if (variant === 'vertical') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 200"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(className)}
        aria-hidden="true"
      >
        {/* Two long vertical rails */}
        <line x1={6} y1={4} x2={6} y2={196} />
        <line x1={18} y1={4} x2={18} y2={196} />
        {/* Horizontal cross members */}
        <line x1={6} y1={20} x2={18} y2={20} />
        <line x1={6} y1={60} x2={18} y2={60} />
        <line x1={6} y1={100} x2={18} y2={100} />
        <line x1={6} y1={140} x2={18} y2={140} />
        <line x1={6} y1={180} x2={18} y2={180} />
        {/* Diagonal braces */}
        <line x1={6} y1={20} x2={18} y2={40} />
        <line x1={18} y1={60} x2={6} y2={80} />
        <line x1={6} y1={100} x2={18} y2={120} />
        <line x1={18} y1={140} x2={6} y2={160} />
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(className)}
      aria-hidden="true"
    >
      {/* Two long horizontal rails */}
      <line x1={4} y1={6} x2={196} y2={6} />
      <line x1={4} y1={18} x2={196} y2={18} />
      {/* Vertical cross members */}
      <line x1={20} y1={6} x2={20} y2={18} />
      <line x1={60} y1={6} x2={60} y2={18} />
      <line x1={100} y1={6} x2={100} y2={18} />
      <line x1={140} y1={6} x2={140} y2={18} />
      <line x1={180} y1={6} x2={180} y2={18} />
      {/* Diagonal braces */}
      <line x1={20} y1={6} x2={40} y2={18} />
      <line x1={60} y1={18} x2={80} y2={6} />
      <line x1={100} y1={6} x2={120} y2={18} />
      <line x1={140} y1={18} x2={160} y2={6} />
    </svg>
  )
}
