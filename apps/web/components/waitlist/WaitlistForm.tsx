'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Loader2, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'

const businessTypeOptions = [
  'Select your business type',
  'Kirana / General Store',
  'Restaurant / Café',
  'Medical Store / Pharmacy',
  'Salon / Beauty Parlour',
  'Repair Shop / Service Center',
  'Retail Store',
  'Clinic / Healthcare',
  'Other',
]

const fieldBase =
  'w-full px-4 py-3 rounded-[10px] bg-surface-base border border-surface-border text-text-primary placeholder:text-text-dim font-body text-[0.9rem] transition-all duration-200 focus:outline-none focus:border-[var(--a60)] focus:shadow-[0_0_0_3px_var(--a0F)] disabled:opacity-60 disabled:cursor-not-allowed appearance-none'

const labelBase = 'block font-body font-medium text-[0.8rem] text-text-muted mb-2'

export function WaitlistForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [city, setCity] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [error, setError] = useState('')

  const isLoading = status === 'loading'

  const handleSubmit = async () => {
    if (isLoading) return
    setError('')

    if (!name.trim() || !phone.trim() || !businessType.trim() || !city.trim()) {
      setError('Please fill in all fields.')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          businessType,
          city,
          timestamp: Date.now(),
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
        setStatus('idle')
      }
    } catch {
      setError('Something went wrong. Please try again.')
      setStatus('idle')
    }
  }

  return (
    <div className="bg-surface-card border border-surface-border rounded-[20px] p-8 shadow-[0_0_0_1px_var(--a10),0_24px_60px_rgba(0,0,0,0.5)]">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="text-center py-6"
          >
            <CheckCircle size={48} className="text-[var(--accent)] mx-auto" />
            <h3 className="mt-5 font-display font-bold text-2xl text-[var(--ink)] tracking-[-0.025em]">
              You&apos;re on the list!
            </h3>
            <p className="mt-3 font-body text-[0.9rem] text-text-muted leading-relaxed">
              We&apos;ll notify you when HERE OPEN launches in your city. Check WhatsApp for confirmation.
            </p>
            <a
              href={
                'https://wa.me/919060038229?text=' +
                encodeURIComponent('Join the HERE OPEN early access waitlist — https://hereopen.in')
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 font-medium text-[0.9rem] text-[var(--accent)] hover:text-[var(--a80)] transition-colors"
            >
              Share with a shop owner
              <ArrowRight size={14} />
            </a>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            <div>
              <label htmlFor="wl-name" className={labelBase}>
                Full Name
              </label>
              <input
                id="wl-name"
                type="text"
                placeholder="Your name"
                value={name}
                disabled={isLoading}
                onChange={(e) => setName(e.target.value)}
                className={fieldBase}
              />
            </div>

            <div>
              <label htmlFor="wl-phone" className={labelBase}>
                Mobile Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3.5 py-3 bg-surface-hover border border-surface-border border-r-0 rounded-l-[10px] font-body font-medium text-[0.9rem] text-text-muted">
                  +91
                </span>
                <input
                  id="wl-phone"
                  type="tel"
                  placeholder="98765 43210"
                  value={phone}
                  disabled={isLoading}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`${fieldBase} flex-1 rounded-l-none rounded-r-[10px] w-auto`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="wl-type" className={labelBase}>
                Business Type
              </label>
              <div className="relative">
                <select
                  id="wl-type"
                  value={businessType}
                  disabled={isLoading}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className={fieldBase}
                >
                  {businessTypeOptions.map((opt, i) => (
                    <option key={opt} value={i === 0 ? '' : opt} disabled={i === 0}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--ink-dim)] pointer-events-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="wl-city" className={labelBase}>
                City
              </label>
              <input
                id="wl-city"
                type="text"
                placeholder="e.g. Bengaluru, Hyderabad, Chennai"
                value={city}
                disabled={isLoading}
                onChange={(e) => setCity(e.target.value)}
                className={fieldBase}
              />
            </div>

            <motion.button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.1 }}
              className="w-full py-3.5 rounded-[10px] font-display font-semibold text-base transition-all duration-[220ms] text-[var(--accent-ink)] disabled:opacity-70 disabled:cursor-not-allowed hover:brightness-[1.08] hover:-translate-y-[1px] hover:shadow-[0_8px_32px_var(--a40)]"
              style={{ background: 'linear-gradient(135deg, var(--accent), #00B4D8)' }}
            >
              {isLoading ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Registering...
                </span>
              ) : (
                'Register for Early Access'
              )}
            </motion.button>

            {error && (
              <p className="flex items-center gap-2 text-[0.85rem] text-[#FF4444]">
                <AlertCircle size={16} className="flex-shrink-0" />
                {error}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}