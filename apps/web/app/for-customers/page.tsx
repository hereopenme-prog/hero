'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Eye,
  Clock,
  Compass,
  MessageCircle,
  Tag,
  Bell,
  CheckCircle,
  X,
  Smartphone,
  Loader2,
  ArrowRight,
} from 'lucide-react';
import { Container } from '../components/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { fadeUp, scaleIn, stagger } from '@/lib/animations';

/* ═══════════════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════════════ */

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const heroWord: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const heroWords = [
  { word: 'HERE', cls: 'text-[#E8EDF2]' },
  { word: 'OPEN', cls: 'text-[#E8EDF2]' },
  { word: 'For', cls: 'text-[#E8EDF2]' },
  { word: 'Customers', cls: 'text-[#00B4D8]' },
];

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#080C10', padding: '80px 0 100px' }}>
      <div className="hero-grid absolute inset-0 opacity-60 pointer-events-none" />
      <div className="hero-radial absolute inset-0 pointer-events-none" />
      <div className="hero-orb w-[280px] h-[280px] top-[-100px] left-[20%] bg-[#00B4D8]/15" style={{ animation: 'heroOrbDrift 9s ease-in-out infinite' }} />
      <div className="hero-orb w-[240px] h-[240px] top-[20%] right-[10%] bg-[#00D084]/15" style={{ animation: 'heroOrbDrift 11s ease-in-out 1s infinite' }} />

      <Container className="relative z-10 text-center">
        <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 bg-[#00B4D81A] border border-[#00B4D840]">
          <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00B4D8]" />
          <span className="font-body font-semibold text-xs text-[#00B4D8] tracking-wide">For Customers</span>
        </div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="mt-6 font-display font-bold text-[2.2rem] lg:text-[3.5rem] tracking-[-0.03em] leading-[1.1]"
        >
          {heroWords.map((w, i) => (
            <motion.span key={i} variants={heroWord} className={`inline-block ${w.cls}`}>
              {w.word}
              {i < heroWords.length - 1 ? '\u00A0' : ''}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
          className="mt-6 font-body text-[1.125rem] text-[#6B7C8E] max-w-[520px] mx-auto leading-relaxed"
        >
          Know before you go. No more wasted trips. Real-time shop status in your pocket.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.9 }}
          className="mt-9"
        >
          <Link
            href="/download"
            className="active:scale-[0.97] inline-flex items-center justify-center rounded-lg px-7 py-3.5 font-display font-semibold text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_#00B4D840]"
            style={{ background: 'linear-gradient(135deg, #00D084, #00B4D8)', color: '#080C10' }}
          >
            Download App (Coming Soon) <ArrowRight className="ml-2" size={16} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   2. CUSTOMER PAIN POINTS
   ═══════════════════════════════════════════════════════ */

const customerPains = [
  'Wasted trips to closed businesses',
  'Uncertain opening status before visiting',
  'Difficult communication with shops',
  'Missed offers and announcements',
  'Uncertainty before every visit',
  'No reliable way to find shops open right now',
  'Calling shops to ask "are you open?" and getting no answer',
];

function PainPointsSection() {
  return (
    <section
      className="relative"
      style={{
        background: '#0F1923',
        borderTop: '1px solid #1C2A38',
        borderBottom: '1px solid #1C2A38',
        padding: '80px 0',
      }}
    >
      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="text-xs font-medium text-[#00B4D8] tracking-[0.1em] mb-5">The Problem</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            Every Trip Is A Gamble Right Now
          </h2>
          <p className="mt-5 font-body text-base text-[#6B7C8E] max-w-[520px] mx-auto leading-relaxed">
            You walk to a shop. The board says open. The lock says closed. There has to be a better way.
          </p>
        </AnimatedSection>

        <AnimatedSection variant={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {customerPains.map((p) => (
            <motion.div
              key={p}
              variants={scaleIn}
              className="flex items-start gap-3 rounded-xl bg-[#080C10] border border-[#1C2A38] p-5 h-full"
            >
              <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mt-0.5 flex-shrink-0">
                <X size={12} className="text-red-400" strokeWidth={2.5} />
              </div>
              <span className="font-body text-[0.9rem] text-[#E8EDF2] leading-relaxed">{p}</span>
            </motion.div>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   3. HOW IT WORKS FOR CUSTOMERS
   ═══════════════════════════════════════════════════════ */

const customerSteps = [
  {
    icon: <Smartphone size={22} className="text-[#00B4D8]" strokeWidth={1.5} />,
    title: 'Download',
    desc: 'Get the HERE OPEN app from the App Store or Google Play when it launches. Free to use, no hidden charges.',
  },
  {
    icon: <CheckCircle size={22} className="text-[#00B4D8]" strokeWidth={1.5} />,
    title: 'Follow Shops',
    desc: 'Follow your favorite shops and discover open businesses near you on a live map.',
  },
  {
    icon: <Eye size={22} className="text-[#00B4D8]" strokeWidth={1.5} />,
    title: 'Know Before You Go',
    desc: 'Check real-time status before you leave. Every visit is informed, intentional, and worth the trip.',
  },
];

function HowItWorksSection() {
  return (
    <section className="relative" style={{ background: '#080C10', padding: '80px 0' }}>
      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="text-xs font-medium text-[#00B4D8] tracking-[0.1em] mb-5">How It Works For You</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            Never Leave Home Uncertain Again
          </h2>
        </AnimatedSection>

        <AnimatedSection variant={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {customerSteps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={scaleIn}
              className="relative h-full rounded-2xl p-8 bg-surface-card border border-surface-border feature-card card-shimmer overflow-hidden"
            >
              <span className="absolute top-6 right-7 font-display font-bold text-[2.5rem] text-[#E8EDF2]/10">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div
                className="flex items-center justify-center"
                style={{ background: '#00B4D81A', borderRadius: 10, padding: 10, width: 44, height: 44, marginBottom: 16 }}
              >
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-[1rem] text-[#E8EDF2] mb-2">{s.title}</h3>
              <p className="font-body text-[0.875rem] text-[#6B7C8E] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   4. FEATURES FOR CUSTOMERS
   ═══════════════════════════════════════════════════════ */

const customerFeatures = [
  { icon: <Eye size={22} className="text-[#00B4D8]" strokeWidth={1.5} />, title: 'Know Before You Go', desc: 'Check the real-time status of any shop before you leave home.' },
  { icon: <Clock size={22} className="text-[#00B4D8]" strokeWidth={1.5} />, title: 'Save Your Time', desc: 'No more wasted trips to closed businesses.' },
  { icon: <Compass size={22} className="text-[#00B4D8]" strokeWidth={1.5} />, title: 'Discover Open Businesses', desc: 'Find shops that are actually open, near you, right now.' },
  { icon: <MessageCircle size={22} className="text-[#00B4D8]" strokeWidth={1.5} />, title: 'Direct Communication', desc: 'Ask questions and get answers without phone tag.' },
  { icon: <Tag size={22} className="text-[#00B4D8]" strokeWidth={1.5} />, title: 'Never Miss Offers', desc: 'Offers and announcements from the shops you follow.' },
  { icon: <Bell size={22} className="text-[#00B4D8]" strokeWidth={1.5} />, title: 'Helpful Notifications', desc: 'Know when a favorite shop opens or shares fresh updates.' },
  { icon: <CheckCircle size={22} className="text-[#00B4D8]" strokeWidth={1.5} />, title: 'Confidence', desc: 'Every visit is informed, intentional, and worth the trip.' },
];

function FeaturesSection() {
  return (
    <section
      className="relative"
      style={{
        background: '#0F1923',
        borderTop: '1px solid #1C2A38',
        borderBottom: '1px solid #1C2A38',
        padding: '80px 0',
      }}
    >
      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="text-xs font-medium text-[#00B4D8] tracking-[0.1em] mb-5">Built For You</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            Visit With Confidence, Every Single Time
          </h2>
        </AnimatedSection>

        <AnimatedSection variant={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {customerFeatures.map((f) => (
            <motion.div key={f.title} variants={scaleIn} className="h-full">
              <div className="feature-card card-shimmer relative overflow-hidden h-full rounded-2xl p-7 bg-surface-card border border-surface-border">
                <div
                  className="flex items-center justify-center"
                  style={{ background: '#00B4D81A', borderRadius: 10, padding: 10, width: 44, height: 44, marginBottom: 16 }}
                >
                  {f.icon}
                </div>
                <h3 className="font-display font-semibold text-[0.95rem] text-[#E8EDF2] mb-1.5">{f.title}</h3>
                <p className="font-body text-[0.9rem] text-[#6B7C8E] leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   5. APP PREVIEW MOCKUP
   ═══════════════════════════════════════════════════════ */

function AppPreviewSection() {
  return (
    <section
      className="relative"
      style={{
        background: '#080C10',
        borderTop: '1px solid #1C2A38',
        padding: '80px 0',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,0.05)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="text-xs font-medium text-[#00B4D8] tracking-[0.1em] mb-5">The App</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            Your Pocket Guide To Every Shop
          </h2>
        </AnimatedSection>

        <AnimatedSection variant={fadeUp}>
          <div className="flex justify-center">
            <div
              className="flex flex-col items-center justify-center text-center"
              style={{
                width: '16rem',
                height: '34rem',
                borderRadius: 40,
                border: '8px solid #1C2A38',
                background: '#0F1923',
                boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
              }}
            >
              <Smartphone size={32} className="text-[#1C2A38] mb-4" strokeWidth={1.5} />
              <p className="font-body text-[0.8rem] text-[#3D4F5E] max-w-[150px] leading-relaxed">
                App screenshots coming soon
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center mt-8">
          <p className="font-body text-[0.85rem] text-[#6B7C8E]">
            HERE OPEN for iOS and Android — launching soon.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   6. NOTIFY FORM
   ═══════════════════════════════════════════════════════ */

const fieldBase =
  'w-full px-4 py-3 rounded-[10px] bg-surface-base border border-surface-border text-text-primary placeholder:text-text-dim font-body text-[0.9rem] transition-all duration-200 focus:outline-none focus:border-[#00B4D8]/60 focus:shadow-[0_0_0_3px_#00B4D80F] disabled:opacity-60 disabled:cursor-not-allowed appearance-none';

const labelBase = 'block font-body font-medium text-[0.8rem] text-text-muted mb-2';

function NotifyForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState('');

  const isLoading = status === 'loading';

  const handleSubmit = async () => {
    if (isLoading) return;
    setError('');

    if (!name.trim() || !phone.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, timestamp: Date.now() }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
        setStatus('idle');
      }
    } catch {
      setError('Something went wrong. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <div
      className="rounded-[20px] p-8 max-w-md mx-auto"
      style={{ background: '#0F1923', border: '1px solid #1C2A38', boxShadow: '0 0 0 1px #00D08410, 0 24px 60px rgba(0,0,0,0.5)' }}
    >
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
            <CheckCircle size={48} className="text-[#00D084] mx-auto" />
            <h3 className="mt-5 font-display font-bold text-2xl text-[#E8EDF2] tracking-[-0.025em]">
              You&apos;re on the list!
            </h3>
            <p className="mt-3 font-body text-[0.9rem] text-text-muted leading-relaxed">
              We&apos;ll notify you on your phone the moment the app launches.
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
              <label htmlFor="nt-name" className={labelBase}>
                Name
              </label>
              <input
                id="nt-name"
                type="text"
                placeholder="Your name"
                value={name}
                disabled={isLoading}
                onChange={(e) => setName(e.target.value)}
                className={fieldBase}
              />
            </div>

            <div>
              <label htmlFor="nt-phone" className={labelBase}>
                Phone Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3.5 py-3 bg-surface-hover border border-surface-border border-r-0 rounded-l-[10px] font-body font-medium text-[0.9rem] text-text-muted">
                  +91
                </span>
                <input
                  id="nt-phone"
                  type="tel"
                  placeholder="98765 43210"
                  value={phone}
                  disabled={isLoading}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`${fieldBase} flex-1 rounded-l-none rounded-r-[10px] w-auto`}
                />
              </div>
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
                  Saving...
                </span>
              ) : (
                'Notify me when the app launches'
              )}
            </motion.button>

            {error && (
              <p className="flex items-center gap-2 text-[0.85rem] text-[#FF4444]">
                {error}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NotifySection() {
  return (
    <section
      className="relative"
      style={{
        background: '#080C10',
        borderTop: '1px solid #1C2A38',
        padding: '80px 0',
      }}
    >
      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="text-xs font-medium text-[#00B4D8] tracking-[0.1em] mb-5">Get Notified</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            Be First To Know When We Launch
          </h2>
          <p className="mt-5 font-body text-base text-[#6B7C8E] max-w-[520px] mx-auto leading-relaxed">
            Drop your name and number. We&apos;ll ping you the day the app goes live in your city.
          </p>
        </AnimatedSection>

        <AnimatedSection variant={fadeUp}>
          <NotifyForm />
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */

export default function ForCustomersPage() {
  return (
    <main className="min-h-screen" style={{ background: '#080C10' }}>
      <Hero />
      <PainPointsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <AppPreviewSection />
      <NotifySection />
    </main>
  );
}