'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={item.question}
            style={{ borderBottom: isOpen ? '1px solid #00D08430' : '1px solid #1C2A38' }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 text-left group"
              style={{ padding: '20px 0' }}
            >
              <span
                className={`font-display font-semibold text-base transition-colors duration-200 ${
                  isOpen ? 'text-[#00D084]' : 'text-[#E8EDF2] group-hover:text-[#00D084]'
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 transition-colors duration-200 ${
                  isOpen ? 'text-[#00D084]' : 'text-[#6B7C8E] group-hover:text-[#00D084]'
                }`}
              >
                <ChevronDown
                  size={18}
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 250ms ease',
                  }}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.2 },
                  }}
                  className="overflow-hidden"
                >
                  <p
                    className="font-body font-normal"
                    style={{
                      fontSize: '0.9rem',
                      color: '#6B7C8E',
                      padding: '4px 0 20px 0',
                      lineHeight: 1.7,
                      maxWidth: 640,
                    }}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}