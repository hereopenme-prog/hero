'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-40">
      <AnimatePresence>
        {hovered && (
          <motion.span
            key="whatsapp-tooltip"
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#0F1923] border border-[#1C2A38] text-[#E8EDF2] rounded-lg px-3 py-1.5 whitespace-nowrap font-body font-medium text-[0.8rem]"
          >
            Chat with us
          </motion.span>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20HERE%20OPEN"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        whileHover={{
          scale: 1.08,
          boxShadow: '0 6px 30px rgba(37, 211, 102, 0.5)',
          transition: { duration: 0.2, ease: 'easeOut' },
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-[52px] h-[52px] rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
      >
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-radar pointer-events-none" />
        <MessageCircle size={24} className="text-white relative z-10" />
      </motion.a>
    </div>
  )
}