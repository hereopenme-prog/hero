'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, CheckCircle, Radio, ShieldCheck, Wifi } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { DeviceVisual } from '@/components/DeviceVisual';
import { btnPrimary, btnSecondary } from '@/components/ui/buttonStyles';

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const heroWord: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const heroWords: { word: string; cls: string }[] = [
  { word: 'ONE', cls: 'text-[#E8EDF2]' },
  { word: 'TAP.', cls: 'text-[#00D084] [text-shadow:0_0_40px_#00D08460]' },
  { word: 'KNOW', cls: 'text-[#E8EDF2]' },
  { word: 'EVERY', cls: 'text-[#E8EDF2]' },
  { word: 'SHOP', cls: 'text-[#E8EDF2]' },
  { word: 'STATUS', cls: 'text-[#E8EDF2]' },
  { word: 'INSTANTLY.', cls: 'text-[#00D084] [text-shadow:0_0_40px_#00D08460]' },
];

const heroBadges = [
  { icon: <CheckCircle size={14} strokeWidth={2.2} />, label: 'Real-Time Status' },
  { icon: <ShieldCheck size={14} strokeWidth={2.2} />, label: '24/7 Monitoring' },
  { icon: <Wifi size={14} strokeWidth={2.2} />, label: 'No Wi-Fi Needed' },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-72px)] flex items-center overflow-hidden pt-28 lg:pt-32 pb-16 lg:pb-20"
      style={{ background: '#080C10' }}
    >
      {/* Background layers */}
      <div className="hero-grid absolute inset-0 opacity-40 pointer-events-none" />
      <div className="hero-radial absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.10)_0%,transparent_55%)] pointer-events-none" />

      <div className="hero-orb w-[320px] h-[320px] top-[-140px] left-[-100px] bg-[#00D084]/15" style={{ animation: 'heroOrbDrift 9s ease-in-out infinite' }} />
      <div className="hero-orb w-[260px] h-[260px] top-[15%] right-[-130px] bg-[#00D084]/10" style={{ animation: 'heroOrbDrift 11s ease-in-out 1s infinite' }} />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 bg-[#00D08420] border border-[#00D08440]">
              <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
              <span className="font-body font-semibold text-xs text-[#00D084] tracking-[0.14em]">
                REAL-TIME SHOP VISIBILITY
              </span>
            </div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={heroContainer}
              className="mt-8 font-display font-extrabold text-[2.6rem] sm:text-[3.25rem] lg:text-[4rem] xl:text-[4.6rem] leading-[1.04] tracking-[-0.03em]"
            >
              {heroWords.map((w, i) => (
                <motion.span key={i} variants={heroWord} className={`inline-block whitespace-pre ${w.cls}`}>
                  {w.word}
                  {i < heroWords.length - 1 ? '\u00A0' : ''}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
              className="mt-7 font-body text-[1.125rem] lg:text-[1.1875rem] text-[#8A9BAE] max-w-[520px] leading-relaxed"
            >
              HERE OPEN connects physical shops to customers in real time through IoT, mobile and cloud
              technology. Know which shop is open, secure, and ready — before you leave home.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <Link href="#contact" className={btnPrimary}>
                Get Started <ArrowRight size={16} />
              </Link>
              <Link href="#how-it-works" className={btnSecondary}>
                See How It Works
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3 pt-9"
            >
              {heroBadges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 border border-[#1C2A38] bg-[#0F1923] text-[#A5B4C4]"
                >
                  <span className="text-[#00D084]">{b.icon}</span>
                  <span className="font-body font-medium text-xs">{b.label}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end px-2 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 80px #00D08425, 0 32px 80px rgba(0,0,0,0.7)',
              }}
              className="relative rounded-3xl"
            >
              <DeviceVisual theme="dark" />

              {/* Floating chips */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
                className="absolute -left-3 sm:-left-6 top-10 float-soft"
              >
                <div className="flex items-center gap-2 rounded-full px-4 py-2 border border-[#00D08440] bg-[#0F1923]/90 backdrop-blur-sm">
                  <span className="status-dot-pulse inline-block w-2 h-2 rounded-full bg-[#00D084]" />
                  <span className="font-body font-semibold text-xs text-[#E8EDF2]">LIVE</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.15, ease: 'easeOut' }}
                className="absolute -right-2 sm:-right-5 bottom-24 float-badge"
              >
                <div className="flex items-center gap-2 rounded-full px-4 py-2 border border-[#1C2A38] bg-[#0F1923]/90 backdrop-blur-sm">
                  <Radio size={13} className="text-[#00D084]" />
                  <span className="font-body font-semibold text-xs text-[#A5B4C4]">CONNECTED</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3, ease: 'easeOut' }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2"
              >
                <div className="flex items-center gap-2 rounded-full px-5 py-2 border border-[#00D08450] bg-[#0F1923]/95 shadow-[0_0_24px_#00D08430]">
                  <span className="status-dot-pulse inline-block w-2 h-2 rounded-full bg-[#00D084]" />
                  <span className="font-body font-bold text-sm text-[#00D084] tracking-wide">OPEN</span>
                  <span className="font-body text-xs text-[#6B7C8E]">·</span>
                  <span className="font-body font-semibold text-xs text-[#A5B4C4]">24/7</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}