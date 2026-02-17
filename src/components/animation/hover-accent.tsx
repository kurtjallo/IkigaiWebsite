'use client'

import { motion, useReducedMotion } from 'motion/react'
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HoverAccentProps {
  children: ReactNode
  className?: string
  position?: 'bottom' | 'top'
}

export function HoverAccent({
  children,
  className,
  position = 'bottom',
}: HoverAccentProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <div className={cn('relative', className)}>
        {children}
        <div
          className={cn(
            'absolute left-0 right-0 h-0.5 bg-gold',
            position === 'bottom' ? 'bottom-0' : 'top-0'
          )}
        />
      </div>
    )
  }

  return (
    <motion.div
      className={cn('relative overflow-hidden', className)}
      initial="initial"
      whileHover="hovered"
    >
      {children}
      <motion.div
        className={cn(
          'absolute left-0 right-0 h-0.5 origin-left bg-gold',
          position === 'bottom' ? 'bottom-0' : 'top-0'
        )}
        variants={{
          initial: { scaleX: 0 },
          hovered: { scaleX: 1 },
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </motion.div>
  )
}
