'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Mail,
  MapPin,
  ChevronDown,
  Loader2,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { Container } from '../components/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { slideLeft, slideRight } from '@/lib/animations';

const WHATSAPP_URL = 'https://wa.me/91XXXXXXXXXX';

const subjectOptions = [
  'Select a topic',
  'I want to register my business',
  'I have a question about the product',
  "I'm interested in partnering",
  'Press / Media enquiry',
  'Something else',
];

const fieldBase =
  'w-full px-4 py-3 rounded-[10px] bg-surface-base border border-surface-border text-text-primary placeholder:text-text-dim font-body text-[0.9rem] transition-all duration-200 focus:outline-none focus:border-[#00D084]/60 focus:shadow-[0_0_0_3px_#00D0840F] disabled:opacity-60 disabled:cursor-not-allowed appearance-none';

const labelBase = 'block font-body font-medium text-[0.8rem] text-text-muted mb-2';

function ContactInfo() {
  return (
    <AnimatedSection variant={slideLeft}>
      <h1 className="font-display font-bold text-[2rem] lg:text-[2.5rem] text-[#E8EDF2] tracking-[-0.025em] leading-tight">
        Get In Touch
      </h1>
      <p className="mt-4 font-body text-[1rem] text-[#6B7C8E] leading-relaxed">
        Have a question, want a demo, or thinking about partnering with HERE OPEN? We respond within 24 hours.
      </p>

      <div className="mt-10 space-y-8">
        {/* WhatsApp */}
        <div className="flex items-start gap-4">
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-xl"
            style={{ width: 44, height: 44, background: '#25D36620', border: '1px solid #25D36640' }}
          >
            <MessageCircle size={20} className="text-[#25D366]" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-display font-semibold text-[0.9rem] text-[#E8EDF2]">WhatsApp</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[0.9rem] text-[#6B7C8E] hover:text-[#00D084] transition-colors"
            >
              +91 XXXXXXXXXX
            </a>
            <p className="font-body text-[0.75rem] text-[#3D4F5E]">
              Fastest response — usually within 2 hours
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-xl"
            style={{ width: 44, height: 44, background: '#00D0841A', border: '1px solid #00D08430' }}
          >
            <Mail size={20} className="text-[#00D084]" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-display font-semibold text-[0.9rem] text-[#E8EDF2]">Email</p>
            <a
              href="mailto:hello@hereopen.in"
              className="font-body text-[0.9rem] text-[#6B7C8E] hover:text-[#00D084] transition-colors"
            >
              hello@hereopen.in
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-xl"
            style={{ width: 44, height: 44, background: '#00B4D81A', border: '1px solid #00B4D830' }}
          >
            <MapPin size={20} className="text-[#00B4D8]" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-display font-semibold text-[0.9rem] text-[#E8EDF2]">Based In</p>
            <p className="font-body text-[0.9rem] text-[#6B7C8E]">Bengaluru, Karnataka, India</p>
          </div>
        </div>
      </div>

      <div className="my-8 h-px bg-[#1C2A38]" />

      <div
        className="rounded-[10px] px-5 py-4"
        style={{ background: '#0F1923', border: '1px solid #1C2A38', borderLeft: '3px solid #00D084' }}
      >
        <p className="font-body text-[0.875rem] text-[#6B7C8E] leading-[1.6]">
          We typically respond within 24 hours on weekdays. For urgent queries, WhatsApp is fastest.
        </p>
      </div>
    </AnimatedSection>
  );
}

function ContactForm() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState('');

  const isLoading = status === 'loading';

  const handleSubmit = async () => {
    if (isLoading) return
    setError('')

    if (!name.trim() || !contact.trim() || !subject.trim() || !message.trim()) {
      setError('Please fill in all fields.')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          contact,
          subject,
          message,
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
    <div className="bg-surface-card border border-surface-border rounded-[20px] p-8 shadow-[0_0_0_1px_#00D08410,0_24px_60px_rgba(0,0,0,0.5)]">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="text-center py-10"
          >
            <CheckCircle size={48} className="text-[#00D084] mx-auto" />
            <h3 className="mt-5 font-display font-bold text-2xl text-[#E8EDF2] tracking-[-0.025em]">
              Message sent!
            </h3>
            <p className="mt-3 font-body text-[0.9rem] text-text-muted leading-relaxed max-w-[320px] mx-auto">
              We&apos;ll get back to you within 24 hours. Check WhatsApp for our reply.
            </p>
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
              <label htmlFor="ct-name" className={labelBase}>
                Name
              </label>
              <input
                id="ct-name"
                type="text"
                placeholder="Your name"
                value={name}
                disabled={isLoading}
                onChange={(e) => setName(e.target.value)}
                className={fieldBase}
              />
            </div>

            <div>
              <label htmlFor="ct-contact" className={labelBase}>
                Email or Phone
              </label>
              <input
                id="ct-contact"
                type="text"
                placeholder="Email or WhatsApp number"
                value={contact}
                disabled={isLoading}
                onChange={(e) => setContact(e.target.value)}
                className={fieldBase}
              />
            </div>

            <div>
              <label htmlFor="ct-subject" className={labelBase}>
                Subject
              </label>
              <div className="relative">
                <select
                  id="ct-subject"
                  value={subject}
                  disabled={isLoading}
                  onChange={(e) => setSubject(e.target.value)}
                  className={fieldBase}
                >
                  {subjectOptions.map((opt, i) => (
                    <option key={opt} value={i === 0 ? '' : opt} disabled={i === 0}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7C8E] pointer-events-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="ct-message" className={labelBase}>
                Message
              </label>
              <textarea
                id="ct-message"
                rows={5}
                placeholder="Tell us more..."
                value={message}
                disabled={isLoading}
                onChange={(e) => setMessage(e.target.value)}
                className={`${fieldBase} resize-y min-h-[120px]`}
              />
            </div>

            <motion.button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.1 }}
              className="w-full py-3.5 rounded-[10px] font-display font-semibold text-base transition-all duration-[220ms] text-[#080C10] disabled:opacity-70 disabled:cursor-not-allowed hover:brightness-[1.08] hover:-translate-y-[1px] hover:shadow-[0_8px_32px_#00D08440]"
              style={{ background: 'linear-gradient(135deg, #00D084, #00B4D8)' }}
            >
              {isLoading ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </span>
              ) : (
                'Send Message'
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
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: '#080C10', padding: '96px 0 100px' }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ContactInfo />
          <AnimatedSection variant={slideRight}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </Container>
    </main>
  );
}