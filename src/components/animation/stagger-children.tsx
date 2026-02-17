'use client'

import { motion, useReducedMotion } from 'motion/react'
import { type ReactNode, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface StaggerChildrenProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

const containerVariants = (staggerDelay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
})

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
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

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className,
}: StaggerChildrenProps) {
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
      initial={mode === 'animated' && !forceVisible ? 'hidden' : false}
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      variants={containerVariants(staggerDelay)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={cn(className)} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
