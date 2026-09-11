'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/app/components/Container';
import { Reveal } from '@/app/components/Reveal';
import {
  Store,
  Users,
  Building2,
  Smartphone,
  Eye,
  Lock,
  TrendingUp,
  Sparkles,
  Check,
  ArrowDown,
  ArrowRight,
  ArrowLeft,
  CircleDot,
  Zap,
  ShieldCheck,
  Activity,
  MapPin,
} from 'lucide-react';

/* ─── Device visual (dark, fixed palette) ─── */
function DeviceSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 104 160"
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden
    >
      <rect x="0.5" y="0.5" width="103" height="159" rx="16" fill="#0A0F14" stroke="#00D084" strokeWidth="1.5" />
      <rect x="8" y="8" width="88" height="52" rx="8" fill="#00D084" fillOpacity="0.07" stroke="#00D084" strokeWidth="0.75" strokeOpacity="0.35" />
      <text x="52" y="30" textAnchor="middle" fill="#00D084" fontSize="7" fontFamily="monospace" letterSpacing="0.08em" opacity="0.9">
        HERE OPEN
      </text>
      <text x="52" y="43" textAnchor="middle" fill="#8898AA" fontSize="6.5" fontFamily="monospace">
        PAYMENT
      </text>
      <rect x="16" y="72" width="72" height="40" rx="8" fill="#0D1117" stroke="#1E293B" strokeWidth="0.75" />
      <circle cx="52" cy="92" r="12" fill="#0A0F14" stroke="#00D084" strokeWidth="1" />
      <circle cx="52" cy="92" r="6" fill="#00D084" fillOpacity="0.18" />
      <path d="M52 86v12M46 92h12" stroke="#00D084" strokeWidth="1" strokeLinecap="round" />
      <text x="52" y="130" textAnchor="middle" fill="#64748B" fontSize="6" fontFamily="monospace">
        SMART MERCHANT
      </text>
      <text x="52" y="140" textAnchor="middle" fill="#00D084" fontSize="6" fontFamily="monospace" letterSpacing="0.08em">
        DEVICE
      </text>
    </svg>
  );
}

/* ─── Hero: device centered with Bank above, Merchant left, Customer right ─── */
function HeroBand() {
  const steps = [
    { num: '01', label: 'OPEN', desc: 'Plug-and-play — no technician needed' },
    { num: '02', label: 'CONNECT', desc: 'Your bank powers the device directly' },
    { num: '03', label: 'PROTECT', desc: 'Built-in security for every transaction' },
    { num: '04', label: 'GROW', desc: 'Smart insights powered by real-time data' },
  ];

  return (
    <Section id="solution" className="relative bg-[#050505] pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <Container>
        {/* Mobile vertical flow */}
        <div className="block lg:hidden">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-emerald-400 mb-4">
              <span className="inline-block h-px w-6 bg-emerald-400 opacity-40" />
              THE SOLUTION
            </span>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-zinc-50 leading-tight mb-4">
              One device. <span className="text-emerald-400">Three relationships.</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-lg">
              The smart merchant device that connects banks, merchants and customers in one simple experience.
            </p>
          </Reveal>

          {/* Mobile flow: Bank → Device → Merchant → Customer */}
          <div className="flex flex-col items-center gap-0">
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-3">
              <Building2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-semibold text-zinc-200">BANK</span>
            </div>
            <ArrowDown className="w-5 h-5 text-emerald-400/50 my-2" />
            <div className="flex items-center justify-center rounded-2xl bg-[#06100A] border border-emerald-500/30 shadow-[0_0_40px_#00D08410] p-3 w-[120px]">
              <DeviceSVG className="w-full h-auto" />
            </div>
            <ArrowDown className="w-5 h-5 text-emerald-400/50 my-2" />
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-3">
              <Store className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-semibold text-zinc-200">MERCHANT</span>
            </div>
            <ArrowDown className="w-5 h-5 text-emerald-400/50 my-2" />
            <div className="flex items-center gap-3 rounded-2xl border border-teal-500/20 bg-teal-500/5 px-5 py-3">
              <Users className="w-5 h-5 text-teal-400" />
              <span className="text-sm font-semibold text-zinc-200">CUSTOMER</span>
            </div>
          </div>
        </div>

        {/* Desktop diagram: Bank top, Merchant left, Device center, Customer right */}
        <div className="hidden lg:flex flex-col items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-emerald-400 mb-4">
              <span className="inline-block h-px w-6 bg-emerald-400 opacity-40" />
              THE SOLUTION
            </span>
          </Reveal>
          <Reveal>
            <h2 className="text-4xl xl:text-5xl font-display font-bold text-zinc-50 leading-tight mb-3 text-center">
              One device. <span className="text-emerald-400">Three relationships.</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-zinc-400 text-base lg:text-lg leading-relaxed mb-10 max-w-xl text-center">
              The smart merchant device that connects banks, merchants and customers in one simple experience.
            </p>
          </Reveal>

          <Reveal>
            <div className="relative w-[880px] h-[420px]">
              <svg viewBox="0 0 880 420" className="absolute inset-0 w-full h-full" aria-hidden>
                <defs>
                  <marker id="arrowDown" viewBox="0 0 10 10" refX="5" refY="10" markerWidth="8" markerHeight="8" orient="auto">
                    <path d="M0 0 L5 10 L10 0" fill="#00D084" fillOpacity="0.6" />
                  </marker>
                  <marker id="arrowLeft" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                    <path d="M10 0 L0 5 L10 10" fill="#00D084" fillOpacity="0.6" />
                  </marker>
                  <marker id="arrowRight" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                    <path d="M0 0 L10 5 L0 10" fill="#00D084" fillOpacity="0.6" />
                  </marker>
                </defs>
                {/* Bank → Device (down) */}
                <line x1="440" y1="118" x2="440" y2="195" stroke="#00D084" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 4" markerEnd="url(#arrowDown)">
                  <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>
                {/* Device → Merchant (left) */}
                <line x1="375" y1="280" x2="155" y2="280" stroke="#00D084" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 4" markerEnd="url(#arrowLeft)">
                  <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>
                {/* Device → Customer (right) */}
                <line x1="505" y1="280" x2="725" y2="280" stroke="#00D084" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 4" markerEnd="url(#arrowRight)">
                  <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
                </line>
              </svg>

              {/* Bank (top center) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm px-6 py-3">
                <Building2 className="w-6 h-6 text-emerald-400" />
                <span className="text-xs font-semibold text-zinc-200 tracking-wide">BANK</span>
              </div>

              {/* Device (center) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#06100A] border border-emerald-500/30 shadow-[0_0_60px_#00D08410] p-4 w-[120px]">
                <DeviceSVG className="w-full h-auto" />
              </div>

              {/* Merchant (left) */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm px-5 py-3">
                <Store className="w-5 h-5 text-emerald-400" />
                <span className="text-[11px] font-semibold text-zinc-200">MERCHANT</span>
              </div>

              {/* Customer (right) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 rounded-2xl border border-teal-500/20 bg-teal-500/5 backdrop-blur-sm px-5 py-3">
                <Users className="w-5 h-5 text-teal-400" />
                <span className="text-[11px] font-semibold text-zinc-200">CUSTOMER</span>
              </div>
            </div>
          </Reveal>

          {/* Steps below diagram */}
          <div className="grid grid-cols-4 gap-6 mt-10 max-w-3xl w-full">
            {steps.map((step, i) => (
              <Reveal key={i}>
                <div className="flex flex-col items-center text-center gap-2">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-emerald-400/60">{step.num}</span>
                  <span className="text-sm font-bold text-zinc-100">{step.label}</span>
                  <span className="text-xs text-zinc-500 leading-relaxed">{step.desc}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ─── The Idea Is Simple ─── */
function IdeaBand() {
  const sides = [
    { icon: Building2, label: 'BANK', desc: 'Issues the device to its merchants', color: 'emerald' },
    { icon: Store, label: 'MERCHANT', desc: 'Runs business through the device', color: 'emerald' },
    { icon: Users, label: 'CUSTOMER', desc: 'Discovers, connects and trusts through the device', color: 'teal' },
  ];

  return (
    <Section className="relative bg-[#0A0F14] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400/60 mb-3">THE IDEA IS SIMPLE</p>
        </Reveal>
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-50 mb-2">
            One device connects <span className="text-emerald-400">three sides</span>
          </h3>
        </Reveal>
        <Reveal>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mb-10">
            Bank issues it. Merchant uses it. Customer benefits from it. One simple cycle.
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          {/* Three side cards */}
          <div className="flex flex-col gap-4 flex-1 w-full">
            {sides.map((side, i) => (
              <Reveal key={i}>
                <div className="flex items-center gap-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm p-4 sm:p-5 hover:border-emerald-500/20 transition-colors">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-500/10 shrink-0">
                    <side.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-zinc-100 block">{side.label}</span>
                    <span className="text-xs text-zinc-400">{side.desc}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400/40 ml-auto shrink-0 hidden sm:block" />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex flex-col items-center gap-1 text-emerald-400/40 shrink-0">
            <ArrowDown className="w-5 h-5 rotate-[-90deg]" />
            <span className="font-mono text-[9px] tracking-wider uppercase">feeds into</span>
          </div>
          <div className="lg:hidden text-emerald-400/40">
            <ArrowDown className="w-5 h-5" />
          </div>

          {/* Device card */}
          <Reveal>
            <div className="rounded-3xl bg-[#06100A] border border-emerald-500/25 shadow-[0_0_60px_#00D08408] p-6 sm:p-8 w-full lg:w-[280px] flex flex-col items-center text-center shrink-0">
              <DeviceSVG className="w-[100px] h-auto mb-4" />
              <span className="text-sm font-bold text-zinc-100 mb-1">SMART MERCHANT DEVICE</span>
              <span className="text-xs text-zinc-400">One device. Three relationships. Six strengths.</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ─── What Does the Device Do? ─── */
function CapabilitiesBand() {
  const capabilities = [
    {
      icon: Eye,
      eyebrow: 'KNOW',
      title: 'Live merchant presence',
      desc: 'Banks and customers see whether the business is open, active and serving right now.',
    },
    {
      icon: Sparkles,
      eyebrow: 'CONNECT',
      title: 'Merchant-to-customer connection',
      desc: 'One simple channel for offers, updates and nearby discovery without extra apps.',
    },
    {
      icon: ShieldCheck,
      eyebrow: 'PROTECT',
      title: 'Trusted transaction layer',
      desc: 'Built-in security that protects payments and strengthens merchant credibility.',
    },
    {
      icon: TrendingUp,
      eyebrow: 'GROW',
      title: 'Merchant growth engine',
      desc: 'Real-time insights that help banks support merchants and help merchants earn more.',
    },
  ];

  return (
    <Section className="relative bg-[#050505] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400/60 mb-3">WHAT DOES THE DEVICE DO?</p>
        </Reveal>
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-50 mb-10">
            One connected experience.
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {capabilities.map((cap, i) => (
            <Reveal key={i}>
              <div className="group rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm p-5 sm:p-6 hover:border-emerald-500/25 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10">
                    <cap.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-emerald-400/60">
                    {cap.eyebrow}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-zinc-100 mb-1.5">{cap.title}</h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{cap.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── How It Works ─── */
function HowItWorksBand() {
  const steps = [
    {
      num: '01',
      title: 'BANK PROVIDES DEVICE',
      desc: 'The bank gives the smart device to the merchant — free of extra hardware cost.',
    },
    {
      num: '02',
      title: 'MERCHANT GOES LIVE',
      desc: 'Merchant plugs in, connects to the internet and starts accepting payments immediately.',
    },
    {
      num: '03',
      title: 'CUSTOMER CONNECTS',
      desc: 'Nearby customers discover the merchant, see live status and connect in real time.',
    },
    {
      num: '04',
      title: 'ECOSYSTEM GROWS',
      desc: 'Bank, merchant and customer stay connected — generating data, trust and repeat business.',
    },
  ];

  return (
    <Section className="relative bg-[#0A0F14] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400/60 mb-3">HOW IT WORKS</p>
        </Reveal>
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-50 mb-10">
            From setup to ecosystem in <span className="text-emerald-400">four steps</span>.
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {steps.map((step, i) => (
            <Reveal key={i}>
              <div className="relative rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm p-5 sm:p-6 hover:border-emerald-500/25 transition-colors group">
                <span className="font-mono text-[10px] tracking-[0.2em] text-emerald-400/50 block mb-3">
                  STEP {step.num}
                </span>
                <h4 className="text-sm sm:text-base font-semibold text-zinc-100 mb-2 leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
                {/* Connector line (between cards) */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-5 border-t border-dashed border-emerald-500/20" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── For Banks ─── */
function BanksBand() {
  const benefits = [
    {
      icon: Eye,
      title: 'See the merchant clearly',
      desc: 'Real-time visibility into merchant activity, footfall and transaction patterns.',
    },
    {
      icon: Zap,
      title: 'Activate dormant merchants',
      desc: 'Bring inactive merchant accounts back to life with a connected device.',
    },
    {
      icon: TrendingUp,
      title: 'Grow transaction revenue',
      desc: 'More transactions flow through a device that merchants actually use every day.',
    },
    {
      icon: ShieldCheck,
      title: 'Reduce fraud exposure',
      desc: 'Built-in security and live monitoring reduce risk at the merchant level.',
    },
    {
      icon: Sparkles,
      title: 'Build merchant loyalty',
      desc: 'When the bank is part of daily operations, switching costs rise naturally.',
    },
  ];

  return (
    <Section className="relative bg-[#050505] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400/60 mb-3">FOR BANKS</p>
        </Reveal>
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-50 mb-2">
            More than a payment terminal.
          </h3>
        </Reveal>
        <Reveal>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mb-8">
            A connected device that gives banks real data, real relevance and real merchant loyalty.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((b, i) => (
            <Reveal key={i}>
              <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-5 hover:border-emerald-500/30 transition-colors h-full">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 mb-3">
                  <b.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-sm font-semibold text-zinc-100 mb-1.5">{b.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── For Merchants ─── */
function MerchantsBand() {
  const benefits = [
    { icon: Store, title: 'Accept payments instantly', desc: 'No complicated setup. Plug in and start receiving payments the same day.' },
    { icon: Eye, title: 'Get discovered locally', desc: 'Nearby customers can find your shop, see your offers and know you are open.' },
    { icon: Sparkles, title: 'Share offers directly', desc: 'Push deals, updates and announcements to people nearby — no social media needed.' },
    { icon: ShieldCheck, title: 'Build trust with customers', desc: 'A verified merchant presence makes people feel safe to visit and buy.' },
    { icon: TrendingUp, title: 'Track your growth', desc: 'See how your business is performing with simple, real-time insights.' },
    { icon: Activity, title: 'Stay connected every day', desc: 'A merchant dashboard that keeps you in touch with your customers, every single day.' },
  ];

  return (
    <Section className="relative bg-[#0A0F14] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400/60 mb-3">FOR MERCHANTS</p>
        </Reveal>
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-50 mb-2">
            Your business deserves more than a sound box.
          </h3>
        </Reveal>
        <Reveal>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mb-8">
            Payments are just the start. This device helps you get found, stay trusted and grow.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {benefits.map((b, i) => (
            <Reveal key={i}>
              <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm p-5 sm:p-6 hover:border-emerald-500/25 transition-colors h-full">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 mb-3">
                  <b.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-sm font-semibold text-zinc-100 mb-1.5">{b.title}</h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── For Customers ─── */
function CustomersBand() {
  const benefits = [
    { icon: CircleDot, title: 'Live merchant status', desc: 'Know instantly whether a shop is open, busy or closed — right now.' },
    { icon: MapPin, title: 'Find nearby businesses', desc: 'Discover shops around you that are active and ready to serve.' },
    { icon: Sparkles, title: 'Get relevant offers', desc: 'Receive deals from merchants nearby — not random spam from far away.' },
    { icon: ShieldCheck, title: 'Shop with confidence', desc: 'Verified merchants mean you know who you are dealing with.' },
    { icon: Smartphone, title: 'No app download needed', desc: 'Everything works from your phone browser — no extra installs.' },
  ];

  return (
    <Section className="relative bg-[#050505] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal-400/60 mb-3">FOR CUSTOMERS</p>
        </Reveal>
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-50 mb-2">
            Know before you go.
          </h3>
        </Reveal>
        <Reveal>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mb-8">
            Real information. Real offers. Real trust — before you leave home.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((b, i) => (
            <Reveal key={i}>
              <div className="rounded-2xl border border-teal-500/15 bg-teal-500/5 p-5 hover:border-teal-500/30 transition-colors h-full">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/10 mb-3">
                  <b.icon className="w-5 h-5 text-teal-400" />
                </div>
                <h4 className="text-sm font-semibold text-zinc-100 mb-1.5">{b.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── Real-Life Scenario ─── */
function ScenarioBand() {
  const flow = [
    { label: 'CUSTOMER', desc: 'Wants to visit a nearby shop', color: 'border-teal-500/20 bg-teal-500/5', icon: Users },
    { label: '"Is it open?"', desc: 'Customer wonders about shop status', color: 'border-zinc-700 bg-zinc-900/60', icon: null },
    { label: 'SMART DEVICE', desc: 'Responds instantly — "YES, OPEN"', color: 'border-emerald-500/25 bg-[#06100A]', icon: Smartphone },
    { label: 'CUSTOMER VISITS', desc: 'Walks in with confidence', color: 'border-teal-500/20 bg-teal-500/5', icon: Users },
    { label: 'MERCHANT GETS BUSINESS', desc: 'Revenue from a nearby customer', color: 'border-emerald-500/20 bg-emerald-500/5', icon: Store },
  ];

  return (
    <Section className="relative bg-[#0A0F14] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400/60 mb-3">REAL-LIFE SCENARIO</p>
        </Reveal>
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-50 mb-2">
            Watch how it works <span className="text-emerald-400">in real life</span>.
          </h3>
        </Reveal>
        <Reveal>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mb-10">
            A customer walks by. The device does the rest.
          </p>
        </Reveal>

        {/* Flow */}
        <div className="flex flex-col items-center gap-0 max-w-md mx-auto">
          {flow.map((step, i) => (
            <div key={i} className="flex flex-col items-center w-full">
              <Reveal>
                <div className={`flex items-center gap-3 rounded-2xl border ${step.color} px-5 py-3 w-full`}>
                  {step.icon && <step.icon className="w-5 h-5 text-emerald-400 shrink-0" />}
                  <div>
                    <span className="text-sm font-semibold text-zinc-100 block">{step.label}</span>
                    <span className="text-xs text-zinc-400">{step.desc}</span>
                  </div>
                </div>
              </Reveal>
              {i < flow.length - 1 && (
                <div className="flex flex-col items-center my-2">
                  <div className="w-px h-4 bg-emerald-500/20" />
                  <svg width="10" height="6" viewBox="0 0 10 6" className="text-emerald-400/40">
                    <path d="M0 0 L5 6 L10 0" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── Before vs After ─── */
function ComparisonBand() {
  return (
    <Section className="relative bg-[#050505] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400/60 mb-3">BEFORE vs AFTER</p>
        </Reveal>
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-50 mb-10">
            From disconnected to <span className="text-emerald-400">connected</span>.
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* BEFORE */}
          <Reveal>
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 sm:p-8">
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-zinc-500 block mb-4">BEFORE</span>
              <div className="space-y-4">
                {[
                  { label: 'BANK', desc: 'Issues a payment device', muted: true },
                  { label: 'PAYMENT DEVICE', desc: 'Accepts payment only — nothing else', muted: true },
                  { label: 'MERCHANT', desc: 'Gets paid, but stays invisible to nearby customers', muted: true },
                  { label: 'CUSTOMER', desc: 'Has no way to find, connect or trust the merchant', muted: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-zinc-600 mt-1.5 shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-zinc-400 block">{item.label}</span>
                      <span className="text-xs text-zinc-500">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/40">
                <span className="text-xs text-zinc-500">No data. No discovery. No relationship.</span>
              </div>
            </div>
          </Reveal>

          {/* AFTER */}
          <Reveal>
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-8 relative overflow-hidden">
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-emerald-400 block mb-4">AFTER</span>
              <div className="space-y-4">
                {[
                  { label: 'BANK', desc: 'Sees live merchant data and earns more from transactions', icon: Building2 },
                  { label: 'SMART DEVICE', desc: 'Connects payments, presence, discovery and trust in one', icon: Smartphone },
                  { label: 'MERCHANT', desc: 'Gets discovered, stays trusted and grows daily', icon: Store },
                  { label: 'CUSTOMER', desc: 'Finds nearby shops, gets real offers and shops with confidence', icon: Users },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-zinc-100 block">{item.label}</span>
                      <span className="text-xs text-zinc-400">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-emerald-500/15">
                <span className="text-xs text-emerald-400/70">Real data. Real discovery. Real relationship.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ─── More Than a Payment Device ─── */
function SoundBoxBand() {
  const rows = [
    { feature: 'Accept payments', soundbox: true, smart: true },
    { feature: 'Live merchant status', soundbox: false, smart: true },
    { feature: 'Nearby customer discovery', soundbox: false, smart: true },
    { feature: 'Direct offers to customers', soundbox: false, smart: true },
    { feature: 'Bank sees merchant activity', soundbox: false, smart: true },
    { feature: 'Merchant trust signals', soundbox: false, smart: true },
    { feature: 'Built-in security monitoring', soundbox: true, smart: true },
    { feature: 'Growth insights', soundbox: false, smart: true },
  ];

  return (
    <Section className="relative bg-[#0A0F14] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400/60 mb-3">MORE THAN A PAYMENT DEVICE</p>
        </Reveal>
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-50 mb-10">
            Sound box vs <span className="text-emerald-400">Smart Merchant Device</span>
          </h3>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm overflow-hidden max-w-2xl">
            {/* Header */}
            <div className="grid grid-cols-3 gap-0 border-b border-zinc-800/60">
              <div className="p-4 text-xs font-semibold text-zinc-400">FEATURE</div>
              <div className="p-4 text-xs font-semibold text-zinc-500 text-center border-x border-zinc-800/60">NORMAL SOUND BOX</div>
              <div className="p-4 text-xs font-semibold text-emerald-400 text-center">SMART MERCHANT DEVICE</div>
            </div>
            {/* Rows */}
            {rows.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 gap-0 ${i < rows.length - 1 ? 'border-b border-zinc-800/40' : ''}`}>
                <div className="p-4 text-xs text-zinc-300">{row.feature}</div>
                <div className="p-4 text-center border-x border-zinc-800/40">
                  {row.soundbox ? (
                    <Check className="w-4 h-4 text-zinc-500 mx-auto" />
                  ) : (
                    <span className="text-zinc-700">—</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  {row.smart ? (
                    <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                  ) : (
                    <span className="text-zinc-700">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ─── Three Sides, One Device (summary) ─── */
function SummaryBand() {
  return (
    <Section className="relative bg-[#050505] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400/60 mb-3">THREE SIDES, ONE DEVICE</p>
        </Reveal>
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-50 mb-8">
            One connected experience.
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 mb-10">
          {[
            { icon: Building2, label: 'BANK', desc: 'Issues the device, sees live data, earns more.', box: 'border-emerald-500/15 bg-emerald-500/5', iconCls: 'text-emerald-400' },
            { icon: Store, label: 'MERCHANT', desc: 'Gets discovered, accepts payments, grows daily.', box: 'border-emerald-500/15 bg-emerald-500/5', iconCls: 'text-emerald-400' },
            { icon: Users, label: 'CUSTOMER', desc: 'Finds shops, connects directly, shops with trust.', box: 'border-teal-500/15 bg-teal-500/5', iconCls: 'text-teal-400' },
          ].map((item, i) => (
            <Reveal key={i}>
              <div className={`rounded-2xl border ${item.box} p-6 text-center`}>
                <item.icon className={`w-8 h-8 ${item.iconCls} mx-auto mb-3`} />
                <span className="text-sm font-bold text-zinc-100 block mb-1">{item.label}</span>
                <span className="text-xs text-zinc-400 leading-relaxed">{item.desc}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── Final Statement + CTA ─── */
function FinalBand() {
  return (
    <Section className="relative bg-[#0A0F14] py-24 lg:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400/60 mb-4">THE VISION</p>
        </Reveal>
        <Reveal>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-zinc-50 leading-tight mb-6 max-w-3xl">
            One device.{' '}
            <span className="text-emerald-400">Three relationships.</span>{' '}
            <span className="text-zinc-400">Six strengths.</span>
          </h3>
        </Reveal>
        <Reveal>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            The smart merchant device that connects banks, merchants and customers in one simple, real-time experience — no extra apps, no complex setup, no compromise.
          </p>
        </Reveal>
        <Reveal>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-500 text-white font-semibold text-sm tracking-wide hover:bg-emerald-400 transition-colors"
          >
            Get Early Access
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-px">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ─── Main ─── */
export function SolutionSection() {
  return (
    <div className="relative">
      <HeroBand />
      <IdeaBand />
      <CapabilitiesBand />
      <HowItWorksBand />
      <BanksBand />
      <MerchantsBand />
      <CustomersBand />
      <ScenarioBand />
      <ComparisonBand />
      <SoundBoxBand />
      <SummaryBand />
      <FinalBand />
    </div>
  );
}
