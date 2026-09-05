'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import {
  Eye,
  TrendingUp,
  ShieldCheck,
  MessageCircle,
  Map,
  LineChart,
  Plug,
  Radio,
  X,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Container } from '../components/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { DeviceVisual } from '@/components/DeviceVisual';
import { WaitlistSection } from '@/components/waitlist/WaitlistSection';
import { scaleIn, stagger } from '@/lib/animations';

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
  { word: 'Business', cls: 'text-[#00D084]' },
  { word: 'Owners', cls: 'text-[#00D084]' },
];

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#080C10', padding: '80px 0 120px' }}>
      <div className="hero-grid absolute inset-0 opacity-60 pointer-events-none" />
      <div className="hero-radial absolute inset-0 pointer-events-none" />
      <div className="hero-orb w-[280px] h-[280px] top-[-100px] left-[-80px] bg-[#00D084]/15" style={{ animation: 'heroOrbDrift 9s ease-in-out infinite' }} />
      <div className="hero-orb w-[240px] h-[240px] top-[10%] right-[-120px] bg-[#00B4D8]/15" style={{ animation: 'heroOrbDrift 11s ease-in-out 1s infinite' }} />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 bg-[#00D08420] border border-[#00D08440]">
              <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
              <span className="font-body font-semibold text-xs text-[#00D084] tracking-wide">For Business Owners</span>
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
              className="mt-6 font-body text-[1.125rem] text-[#6B7C8E] max-w-[500px] leading-relaxed"
            >
              Real-time visibility. 24/7 safety. Direct customer connection. All in one device.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.9 }}
              className="mt-9"
            >
              <Link
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-lg px-7 py-3.5 font-display font-semibold text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_#00D08440]"
                style={{ background: 'linear-gradient(135deg, #00D084, #00B4D8)', color: '#080C10' }}
              >
                Register Your Business <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <DeviceVisual theme="dark" />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   2. PAIN POINTS
   ═══════════════════════════════════════════════════════ */

const ownerPains = [
  'Customers don\u2019t know whether the shop is actually open',
  'Missed customers and lost footfall',
  'Limited visibility across multiple locations',
  'Safety and security concerns after hours',
  'Fragmented customer communication',
  'Lack of real-time operational visibility',
  'No way to share offers with nearby customers',
  'Late detection of fire, smoke, or security events',
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
          <div className="text-xs font-medium text-[#00D084] tracking-[0.1em] mb-5">The Problem</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            These Pains Are Eating Your Footfall
          </h2>
          <p className="mt-5 font-body text-base text-[#6B7C8E] max-w-[520px] mx-auto leading-relaxed">
            When customers can&apos;t see the truth about your shop in real time, everyone loses — time, money, and confidence.
          </p>
        </AnimatedSection>

        <AnimatedSection variant={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {ownerPains.map((p) => (
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
   3. HOW IT WORKS FOR OWNERS
   ═══════════════════════════════════════════════════════ */

const ownerSteps = [
  {
    icon: <Plug size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Install',
    desc: 'Plug the HERE OPEN device into your shop. Connect to power and network in minutes — no complex setup, no expensive infrastructure.',
  },
  {
    icon: <Radio size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Go Live',
    desc: 'Your shop appears with real-time OPEN/CLOSED status. Customers see it instantly, and 24/7 safety monitoring starts right away.',
  },
  {
    icon: <TrendingUp size={22} className="text-[#00D084]" strokeWidth={1.5} />,
    title: 'Grow',
    desc: 'Share offers, message customers directly, and use insights to bring them back again and again.',
  },
];

function HowItWorksSection() {
  return (
    <section className="relative" style={{ background: '#080C10', padding: '80px 0' }}>
      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="text-xs font-medium text-[#00D084] tracking-[0.1em] mb-5">How It Works For You</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            Three Steps To A Visible Business
          </h2>
        </AnimatedSection>

        <AnimatedSection variant={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {ownerSteps.map((s, i) => (
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
                style={{ background: '#00D0841A', borderRadius: 10, padding: 10, width: 44, height: 44, marginBottom: 16 }}
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
   4. FEATURES FOR OWNERS
   ═══════════════════════════════════════════════════════ */

const ownerFeatures = [
  { icon: <Eye size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Complete Visibility', desc: 'Customers see you are open, and you see every location in real time.' },
  { icon: <TrendingUp size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'More Customer Acquisition', desc: 'Open businesses get found. Discoverability drives footfall.' },
  { icon: <ShieldCheck size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Peace of Mind Safety', desc: '24/7 monitoring with instant alerts when anything needs attention.' },
  { icon: <MessageCircle size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Direct Communication', desc: 'Reach your customers with offers and updates — no middlemen.' },
  { icon: <Map size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Multi-Location Management', desc: 'One dashboard for every shop, every device, every status.' },
  { icon: <LineChart size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Operational Insights', desc: 'Understand opening hours, engagement, and alerts at a glance.' },
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
          <div className="text-xs font-medium text-[#00D084] tracking-[0.1em] mb-5">Built For Owners</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            Everything Your Business Needs
          </h2>
        </AnimatedSection>

        <AnimatedSection variant={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {ownerFeatures.map((f) => (
            <motion.div key={f.title} variants={scaleIn} className="h-full">
              <div className="feature-card card-shimmer relative overflow-hidden h-full rounded-2xl p-7 bg-surface-card border border-surface-border">
                <div
                  className="flex items-center justify-center"
                  style={{ background: '#00D0841A', borderRadius: 10, padding: 10, width: 44, height: 44, marginBottom: 16 }}
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
   5. PRICING
   ═══════════════════════════════════════════════════════ */

const starterFeatures = [
  'Real-time OPEN/CLOSED status',
  '24/7 safety monitoring',
  'Mobile app for owner',
  'Customer-facing status page',
  'Push + SMS alerts',
  'Email support',
];

const growthFeatures = [
  ...starterFeatures,
  'Multi-shop dashboard (up to 3)',
  'Offers & announcements',
  'Team & role management',
  'Direct customer messaging',
  'Priority support',
];

const businessFeatures = [
  ...growthFeatures,
  'Unlimited locations',
  'Custom integrations',
  'Dedicated account manager',
  'SLA support',
  'Business intelligence dashboard',
];

function PricingSection() {
  const tiers = [
    {
      name: 'Starter',
      range: 'One shop',
      price: '₹299/mo',
      priceCls: 'text-[#E8EDF2]',
      priceSize: 'text-[2rem]',
      sub: '+ device cost (one time)',
      features: starterFeatures,
      featured: false,
      badge: null,
      cta: (
        <Link
          href="/download"
          className="block text-center rounded-lg px-6 py-3 border border-[#1C2A38] font-body font-medium text-[0.9rem] text-[#E8EDF2] transition-all duration-200 hover:border-[#00D084]/50 hover:bg-[#16232F]"
        >
          Join Waitlist
        </Link>
      ),
    },
    {
      name: 'Growth',
      range: '1–3 shops',
      price: '₹699/mo',
      priceCls: 'text-[#00D084]',
      priceSize: 'text-[2rem]',
      sub: '+ devices (one time, per shop)',
      features: growthFeatures,
      featured: true,
      badge: 'Most Popular',
      cta: (
        <Link
          href="/download"
          className="block text-center rounded-lg px-6 py-3 font-display font-semibold text-[0.95rem] text-[#080C10] transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_8px_32px_#00D08440]"
          style={{ background: 'linear-gradient(135deg, #00D084, #00B4D8)' }}
        >
          Join Waitlist
        </Link>
      ),
    },
    {
      name: 'Business',
      range: '4+ shops',
      price: 'Contact Us',
      priceCls: 'text-[#00B4D8]',
      priceSize: 'text-[1.5rem]',
      sub: 'Custom pricing for chains & groups',
      features: businessFeatures,
      featured: false,
      badge: null,
      cta: (
        <Link
          href="/contact"
          className="block text-center rounded-lg px-6 py-3 border border-[#00B4D840] font-body font-medium text-[0.9rem] text-[#00B4D8] transition-all duration-200 hover:border-[#00B4D8] hover:bg-[#00B4D80A]"
        >
          Talk To Us
        </Link>
      ),
    },
  ];

  return (
    <section className="relative" style={{ background: '#080C10', padding: '80px 0' }}>
      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-12">
          <div className="text-xs font-medium text-[#00D084] tracking-[0.1em] mb-5">Pricing</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            Simple, Honest Pricing
          </h2>
          <p className="mt-5 font-body text-base text-[#6B7C8E] max-w-[520px] mx-auto leading-relaxed">
            Launching soon. Early access registrations get locked-in pricing.
          </p>
        </AnimatedSection>

        <AnimatedSection variant={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              variants={scaleIn}
              className="relative flex flex-col rounded-3xl p-8 h-full"
              style={
                t.featured
                  ? {
                      border: '1px solid #00D08460',
                      background: 'linear-gradient(145deg, #00D0840A, #0F1923)',
                      boxShadow: '0 0 40px #00D0840A',
                    }
                  : { border: '1px solid #1C2A38', background: '#0F1923' }
              }
            >
              {t.badge && (
                <span className="absolute top-5 right-5 rounded-full bg-[#00D084]/15 border border-[#00D08440] px-2.5 py-1 text-[0.65rem] font-semibold text-[#00D084]">
                  {t.badge}
                </span>
              )}

              <h3 className="font-display font-semibold text-[1.05rem] text-[#E8EDF2]">{t.name}</h3>
              <p className="mt-0.5 font-body text-[0.8rem] text-[#6B7C8E]">{t.range}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className={`font-display font-bold ${t.priceSize} ${t.priceCls} tracking-[-0.02em]`}>{t.price}</span>
              </div>
              <p className="mt-1 font-body text-[0.8rem] text-[#6B7C8E]">{t.sub}</p>

              <ul className="mt-7 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle size={14} className="text-[#00D084] flex-shrink-0 mt-1" />
                    <span className="font-body text-[0.875rem] text-[#A5B4C4] leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">{t.cta}</div>
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection className="text-center mt-8">
          <p className="font-body text-[0.8rem] text-[#3D4F5E]">
            Prices indicative for early-access phase. Final pricing announced at launch.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */

export default function ForBusinessesPage() {
  return (
    <main className="min-h-screen" style={{ background: '#080C10' }}>
      <Hero />
      <PainPointsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PricingSection />
      <WaitlistSection />
    </main>
  );
}