'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

interface AnimatedSectionProps {
  children: React.ReactNode
  variant?: object
  delay?: number
  className?: string
  once?: boolean
  threshold?: number
  as?: keyof JSX.IntrinsicElements
}

export function AnimatedSection({
  children,
  variant = fadeUp,
  delay = 0,
  className,
  once = true,
  threshold = 0.12,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const variantWithDelay = {
    ...variant,
    visible: {
      ...(variant as any).visible,
      transition: {
        ...(variant as any).visible?.transition,
        delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variantWithDelay}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}