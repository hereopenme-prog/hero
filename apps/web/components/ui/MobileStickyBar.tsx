'use client'
import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export function MobileStickyBar() {
  const { scrollY } = useScroll()
  const [show, setShow] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShow(latest > 400)
  })

  const handleJoin = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={false}
      animate={show ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden ${show ? '' : 'pointer-events-none'}`}
      style={{
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderTop: '1px solid var(--border)',
        padding: '12px 20px 20px 20px',
      }}
    >
      <div className="flex items-center gap-3">
        <ThemeToggle className="border-[var(--border)] text-[var(--ink-2)]" />
        <button
          type="button"
          onClick={handleJoin}
          className="flex-1 rounded-[10px] px-4 font-display font-semibold text-[0.9rem] text-[var(--accent-ink)] transition-transform duration-200 active:scale-[0.97]"
          style={{ background: 'linear-gradient(135deg, var(--accent), #00B4D8)', padding: '14px' }}
        >
          Get Started
        </button>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="icon-btn w-[52px] flex-shrink-0 rounded-[10px] bg-[#25D366] flex items-center justify-center"
          style={{ padding: '14px' }}
        >
          <MessageCircle size={24} className="text-[var(--ink)]" />
        </a>
      </div>
    </motion.div>
  )
}