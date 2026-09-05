'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Lightbulb,
  TrendingUp,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { Container } from '../components/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { fadeUp, scaleIn, slideLeft, slideRight, stagger } from '@/lib/animations';

/* ═══════════════════════════════════════════════════════
   1. PAGE HERO
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
  { word: 'Built', cls: 'text-[#E8EDF2]' },
  { word: 'To', cls: 'text-[#E8EDF2]' },
  { word: 'Keep', cls: 'text-[#E8EDF2]' },
  { word: 'Every', cls: 'text-[#E8EDF2]' },
  { word: 'Shop', cls: 'text-[#E8EDF2]' },
  { word: 'Connected', cls: 'text-[#00D084]' },
  { word: 'and', cls: 'text-[#E8EDF2]' },
  { word: 'Safe', cls: 'text-[#00D084]' },
];

function PageHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#080C10', padding: '120px 0 80px' }}>
      <div className="hero-grid absolute inset-0 opacity-60 pointer-events-none" />
      <div className="hero-radial absolute inset-0 pointer-events-none" />
      <div className="hero-orb w-[280px] h-[280px] top-[-100px] left-[-80px] bg-[#00D084]/15" style={{ animation: 'heroOrbDrift 9s ease-in-out infinite' }} />
      <div className="hero-orb w-[240px] h-[240px] top-[10%] right-[-120px] bg-[#00B4D8]/15" style={{ animation: 'heroOrbDrift 11s ease-in-out 1s infinite' }} />
      <div className="hero-orb w-[200px] h-[200px] bottom-[-80px] left-[30%] bg-[#00D084]/10" style={{ animation: 'heroOrbDrift 13s ease-in-out 2s infinite' }} />

      <Container className="relative z-10">
        <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 bg-[#00D08420] border border-[#00D08440]">
          <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
          <span className="font-body font-semibold text-xs text-[#00D084] tracking-wide">About HERE OPEN</span>
        </div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="mt-6 font-display font-bold text-[2rem] lg:text-[3.5rem] tracking-[-0.03em] leading-[1.1]"
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
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.9 }}
          className="mt-6 font-body text-[1.125rem] text-[#6B7C8E] max-w-[520px] leading-relaxed"
        >
          HERE OPEN started with one question: why do customers waste trips to closed shops? The answer became a platform.
        </motion.p>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   2. MISSION STATEMENT
   ═══════════════════════════════════════════════════════ */

function MissionSection() {
  return (
    <section
      className="relative"
      style={{
        background: '#0F1923',
        borderTop: '1px solid #1C2A38',
        borderBottom: '1px solid #1C2A38',
        padding: '60px 0',
      }}
    >
      <Container>
        <AnimatedSection variant={scaleIn} className="relative max-w-[700px] mx-auto">
          <span
            aria-hidden="true"
            className="absolute top-[-20px] left-0 font-display text-[6rem] text-[#00D08420] select-none pointer-events-none"
            style={{ lineHeight: 0 }}
          >
            &ldquo;
          </span>
          <p className="font-display font-semibold text-[1.1rem] lg:text-[1.5rem] text-[#E8EDF2] leading-[1.5] text-center">
            Every physical business deserves to be seen, safe, and reachable — in real time, everywhere.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   3. THE PROBLEM WE'RE SOLVING
   ═══════════════════════════════════════════════════════ */

const originStats = [
  { number: '63M+', label: 'MSMEs in India' },
  { number: '₹0', label: 'Current real-time visibility tools built for them' },
  { number: '1 tap', label: 'Is all it takes with HERE OPEN' },
];

function ProblemSection() {
  return (
    <section className="relative" style={{ background: '#080C10', padding: '80px 0' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(0,208,132,0.05)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection variant={slideLeft}>
            <h2 className="font-display font-bold text-[1.6rem] lg:text-[2rem] text-[#E8EDF2] tracking-[-0.025em]">
              Why HERE OPEN Exists
            </h2>
            <p className="mt-6 font-body text-[1rem] text-[#6B7C8E] leading-[1.8] mb-6">
              Every day, millions of customers in India make unnecessary trips to shops that are closed. Shop owners lose footfall they never even knew about. Safety incidents go undetected for hours. HERE OPEN exists to close this gap — with IoT, mobile, and real-time data.
            </p>
            <p className="font-body text-[1rem] text-[#6B7C8E] leading-[1.8]">
              We started by talking to kirana owners in Hyderabad. The same story kept coming up: customers would call, not get through, assume the shop was open, and show up to a locked door. HERE OPEN is the real-time answer to that problem.
            </p>
          </AnimatedSection>

          <AnimatedSection variant={slideRight} className="space-y-5">
            {originStats.map((s) => (
              <div key={s.label} className="bg-surface-card border border-surface-border border-t-2 border-t-[#00D084] rounded-2xl p-7">
                <p className="font-display font-bold text-[2.5rem] text-[#00D084] leading-none">{s.number}</p>
                <p className="font-display font-semibold text-[0.9rem] text-[#E8EDF2] mt-2">{s.label}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   4. FOUNDER SECTION
   ═══════════════════════════════════════════════════════ */
/* TODO: Replace placeholder founder details below with the founder's
   real name, bio, social links, and photo before deploying. */

const socialLinks = [
  { icon: <Linkedin size={18} className="text-[#6B7C8E] group-hover:text-[#00D084] transition-colors duration-200" />, href: '#', label: 'LinkedIn' },
  { icon: <Twitter size={18} className="text-[#6B7C8E] group-hover:text-[#00D084] transition-colors duration-200" />, href: '#', label: 'Twitter / X' },
];

function FounderSection() {
  return (
    <section className="relative" style={{ background: '#080C10', padding: '80px 0' }}>
      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="text-xs font-medium text-[#00D084] tracking-[0.1em] mb-5">The Team</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            Who&apos;s Building This
          </h2>
        </AnimatedSection>

        <AnimatedSection variant={scaleIn} delay={0.15} className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 bg-surface-card border border-surface-border rounded-[20px] p-8 md:p-10 shadow-[0_0_0_1px_#00D08410,0_24px_60px_rgba(0,0,0,0.4)]">
            <div
              className="w-[180px] h-[180px] rounded-[20px] flex-shrink-0 flex items-center justify-center"
              style={{
                background: '#0F1923',
                border: '2px solid #00D08440',
                boxShadow: '0 0 40px #00D0840F',
              }}
            >
              <span className="font-display font-bold text-[3rem] text-[#00D084]">FN</span>
            </div>

            <div className="text-center md:text-left">
              <h3 className="font-display font-bold text-[1.5rem] text-[#E8EDF2]">Founder Name</h3>
              <p className="mt-1 font-body font-medium text-[0.9rem] text-[#00D084]">Founder, HERE OPEN</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                <span className="rounded-full bg-[#0F1923] border border-[#1C2A38] px-3 py-1 font-body font-medium text-[0.75rem] text-[#6B7C8E]">
                  B.Tech Computer Science
                </span>
                <span className="rounded-full bg-[#0F1923] border border-[#1C2A38] px-3 py-1 font-body font-medium text-[0.75rem] text-[#6B7C8E]">
                  Presidency University, Bengaluru
                </span>
              </div>

              <p className="mt-5 font-body text-[0.95rem] text-[#6B7C8E] leading-[1.7]">
                I&apos;m a Computer Science student and web developer who saw a real problem in Indian local commerce and decided to build the solution. HERE OPEN is the product I wished existed for every shop I walked past.
              </p>

              <div className="flex justify-center md:justify-start gap-3 mt-6">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="group w-9 h-9 rounded-[10px] bg-[#0F1923] border border-[#1C2A38] flex items-center justify-center hover:border-[#00D08460] hover:bg-[#16232F] transition-all duration-200 hover:-translate-y-0.5"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   5. VALUES (4 CARDS)
   ═══════════════════════════════════════════════════════ */

const values = [
  {
    icon: <ShieldCheck size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Trust',
    desc: 'Building confidence in local businesses through transparent, real-time status updates.',
  },
  {
    icon: <Users size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Community',
    desc: 'Connecting neighbors with local shops, strengthening the fabric of every neighborhood.',
  },
  {
    icon: <Lightbulb size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Innovation',
    desc: 'Applying IoT technology to everyday problems that matter to millions of Indians.',
  },
  {
    icon: <TrendingUp size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Impact',
    desc: 'Empowering Indian SMBs to compete, grow, and thrive in the digital age.',
  },
];

function ValuesSection() {
  return (
    <section
      className="relative"
      style={{ background: '#080C10', borderTop: '1px solid #1C2A38', padding: '80px 0' }}
    >
      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="text-xs font-medium text-[#00D084] tracking-[0.1em] mb-5">What We Stand For</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            The Values Behind HERE OPEN
          </h2>
        </AnimatedSection>

        <AnimatedSection variant={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {values.map((v) => (
            <motion.div key={v.title} variants={scaleIn} className="h-full">
              <div className="feature-card card-shimmer relative overflow-hidden h-full rounded-2xl p-7 bg-surface-card border border-surface-border">
                <div
                  className="flex items-center justify-center"
                  style={{ background: '#00D0841A', borderRadius: 10, padding: 10, width: 44, height: 44, marginBottom: 16 }}
                >
                  {v.icon}
                </div>
                <h3 className="font-display font-semibold text-[0.95rem] text-[#E8EDF2] mb-1.5">{v.title}</h3>
                <p className="font-body text-[0.9rem] text-[#6B7C8E] leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   6. ROADMAP PREVIEW (CONDENSED)
   ═══════════════════════════════════════════════════════ */

const roadmapPreview = [
  { phase: 'Phase 1', title: 'Local Businesses', status: 'current' },
  { phase: 'Phase 2', title: 'IoT Expansion', status: null },
  { phase: 'Phase 3', title: 'Multi-Location Networks', status: null },
  { phase: 'Phase 4', title: 'Business Intelligence', status: null },
  { phase: 'Phase 5', title: 'HERE OPEN Ecosystem', status: null },
];

function RoadmapPreviewSection() {
  return (
    <section
      className="relative"
      style={{
        background: '#0F1923',
        borderTop: '1px solid #1C2A38',
        borderBottom: '1px solid #1C2A38',
        padding: '60px 0',
      }}
    >
      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-10">
          <div className="text-xs font-medium text-[#00D084] tracking-[0.1em] mb-5">Roadmap</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            Where We&apos;re Going Next
          </h2>
        </AnimatedSection>

        <AnimatedSection variant={stagger} className="grid grid-cols-1 sm:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {roadmapPreview.map((r) => (
            <motion.div
              key={r.phase}
              variants={scaleIn}
              className={`rounded-xl p-4 text-center border ${
                r.status === 'current'
                  ? 'bg-[#00D0840D] border-[#00D08440]'
                  : 'bg-[#080C10] border-[#1C2A38]'
              }`}
            >
              <p className="font-display font-bold text-[0.75rem] text-[#00D084] uppercase tracking-widest">
                {r.phase}
              </p>
              <p className="mt-2 font-body font-medium text-[0.8rem] text-[#E8EDF2] leading-tight">{r.title}</p>
              {r.status === 'current' && (
                <span className="inline-block mt-2 rounded-full bg-[#00D084]/15 border border-[#00D084/30] px-2 py-0.5 text-[0.65rem] font-medium text-[#00D084]">
                  Now
                </span>
              )}
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection className="text-center mt-8">
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 font-body font-medium text-[0.9rem] text-[#00D084] hover:text-[#00D084]/80 transition-colors"
          >
            See the full roadmap
            <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   7. CTA
   ═══════════════════════════════════════════════════════ */

function CtaSection() {
  return (
    <section className="relative" style={{ background: '#080C10', padding: '80px 0' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.06)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10 text-center">
        <AnimatedSection>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            Be Part Of The Story
          </h2>
          <p className="mt-5 font-body text-[1rem] text-[#6B7C8E] max-w-[520px] mx-auto leading-relaxed">
            Whether you&apos;re a business owner or a customer tired of wasted trips — HERE OPEN is built for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-9">
            <Link
              href="/download"
              className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 font-display font-semibold text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_#00D08440]"
              style={{ background: 'linear-gradient(135deg, #00D084, #00B4D8)', color: '#080C10' }}
            >
              Join Waitlist <ArrowRight className="ml-2" size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 border border-[#1C2A38] font-body font-medium text-[15px] text-[#E8EDF2] transition-all duration-200 hover:border-[#00D084]/50 hover:bg-[#16232F] hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageHero />
      <MissionSection />
      <ProblemSection />
      <FounderSection />
      <ValuesSection />
      <RoadmapPreviewSection />
      <CtaSection />
    </main>
  );
}