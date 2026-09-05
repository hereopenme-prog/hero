'use client'
import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const { scrollY } = useScroll()
  const [show, setShow] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShow(latest > 600)
  })

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          whileHover={{
            y: -2,
            rotate: 5,
            borderColor: 'var(--a60)',
            backgroundColor: 'var(--panel-2)',
            transition: { duration: 0.15, ease: 'easeOut' },
          }}
          whileTap={{ scale: 0.92 }}
          className="group fixed bottom-24 left-4 sm:bottom-6 sm:left-6 z-40 w-[44px] h-[44px] bg-[var(--section)] border border-[var(--border)] rounded-xl flex items-center justify-center"
        >
          <ArrowUp size={18} className="text-[var(--ink-dim)] group-hover:text-[var(--accent)] transition-colors duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}