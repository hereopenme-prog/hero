'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function CountUp({
  from = 0,
  to,
  duration = 1400,
  suffix = '',
  prefix = '',
  className,
}: CountUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!isInView) return
    const start = performance.now()
    const raf = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(from + (to - from) * eased))
      if (progress < 1) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [isInView])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}