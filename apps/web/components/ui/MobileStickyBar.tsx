'use client'
import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function MobileStickyBar() {
  const { scrollY } = useScroll()
  const [show, setShow] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShow(latest > 400)
  })

  const handleJoin = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={false}
      animate={show ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden ${show ? '' : 'pointer-events-none'}`}
      style={{
        background: 'rgba(8, 12, 16, 0.95)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderTop: '1px solid #1C2A38',
        padding: '12px 20px 20px 20px',
      }}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleJoin}
          className="flex-1 rounded-[10px] px-4 font-display font-semibold text-[0.9rem] text-[#080C10] transition-transform duration-200 active:scale-[0.98]"
          style={{ background: 'linear-gradient(135deg, #00D084, #00B4D8)', padding: '14px' }}
        >
          Join Waitlist
        </button>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-[52px] flex-shrink-0 rounded-[10px] bg-[#25D366] flex items-center justify-center"
          style={{ padding: '14px' }}
        >
          <MessageCircle size={24} className="text-white" />
        </a>
      </div>
    </motion.div>
  )
}