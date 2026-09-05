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
            borderColor: '#00D08460',
            backgroundColor: '#16232F',
            transition: { duration: 0.2, ease: 'easeOut' },
          }}
          className="group fixed bottom-24 left-4 sm:bottom-6 sm:left-6 z-40 w-[44px] h-[44px] bg-[#0F1923] border border-[#1C2A38] rounded-xl flex items-center justify-center"
        >
          <ArrowUp size={18} className="text-[#6B7C8E] group-hover:text-[#00D084] transition-colors duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}