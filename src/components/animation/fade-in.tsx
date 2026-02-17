'use client'

import { motion, useReducedMotion } from 'motion/react'
import { type ReactNode, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const offsets: Record<string, { x?: number; y?: number }> = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 30 },
  right: { x: -30 },
}

type RevealMode = 'measure' | 'instant' | 'animated'

const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.12,
  margin: '0px 0px -12% 0px',
} as const

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight

  return rect.top < viewportHeight * 0.92 && rect.bottom > viewportHeight * 0.08
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()
  const measureRef = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<RevealMode>('measure')
  const [forceVisible, setForceVisible] = useState(false)

  useEffect(() => {
    if (shouldReduceMotion) return

    const element = measureRef.current
    if (!element) return

    const frame = window.requestAnimationFrame(() => {
      setMode(isInViewport(element) ? 'instant' : 'animated')
    })

    return () => window.cancelAnimationFrame(frame)
  }, [shouldReduceMotion])

  useEffect(() => {
    if (mode !== 'animated') return

    const timeout = window.setTimeout(() => {
      setForceVisible(true)
    }, 1200)

    return () => window.clearTimeout(timeout)
  }, [mode])

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  if (mode === 'measure') {
    return (
      <div ref={measureRef} className={cn(className)}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={cn(className)}
      initial={
        mode === 'animated' && !forceVisible
          ? { opacity: 0, ...offsets[direction] }
          : false
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
