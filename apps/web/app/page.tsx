'use client';

import { useState, useEffect, useRef, Fragment, type MouseEvent } from 'react';
import Link from 'next/link';
import {
  Shield, Bell, Eye, Smartphone, Activity, Zap, CheckCircle, ArrowRight,
  Thermometer, Wind, AlertTriangle, Wifi, Cloud, Cpu, Users,
  Store, UtensilsCrossed, Cross, Scissors, Wrench, ShoppingBag, Building2,
} from 'lucide-react';
import { motion, useAnimationControls, useInView, useScroll, MotionConfig, type Variants } from 'framer-motion';
import { Container } from './components/Container';
import { SectionHeader } from './components/SectionHeader';
import {
  ProblemsSection,
  SolutionSection,
  HowItWorksSection,
  FeaturesSection,
  OwnerBenefitsSection,
  CustomerBenefitsSection,
  MarketSection,
  GrowthSection,
  IPSection,
  WhySection,
  VisionSection,
  FinalCTASection,
} from './components/NarrativeSections';

/* ═══════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════ */

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const heroWord: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const heroBadgeContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 1.1 } },
};

const heroBadgeItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const heroWords = [
  { word: 'One', cls: 'text-green-forest' },
  { word: 'Tap.', cls: 'text-green-forest' },
  { word: 'Know', cls: 'text-green-action' },
  { word: 'Every', cls: 'text-green-action' },
  { word: 'Shop', cls: 'text-green-action' },
  { word: 'Status', cls: 'text-green-forest' },
  { word: 'Instantly.', cls: 'text-green-forest' },
];

const heroBadges = ['Real-time Status', '24/7 Monitoring', 'Secure'];

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

function Hero() {
  const temp = useCountUp(24);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-white" />
      <div className="hero-grid absolute inset-0 opacity-60 pointer-events-none" />
      <div className="hero-radial absolute inset-0 pointer-events-none" />

      {/* Floating orbs */}
      <div className="hero-orb w-[280px] h-[280px] top-[-80px] left-[-80px] bg-green-action/25" style={{ animation: 'heroOrbDrift 9s ease-in-out infinite' }} />
      <div className="hero-orb w-[240px] h-[240px] top-[10%] right-[-100px] bg-[#38BDF8]/20" style={{ animation: 'heroOrbDrift 11s ease-in-out 1s infinite' }} />
      <div className="hero-orb w-[200px] h-[200px] bottom-[-60px] left-[30%] bg-green-mid/20" style={{ animation: 'heroOrbDrift 13s ease-in-out 2s infinite' }} />
      <div className="hero-orb w-[220px] h-[220px] bottom-[15%] right-[20%] bg-[#0EA5E9]/15" style={{ animation: 'heroOrbDrift 10s ease-in-out 0.5s infinite' }} />

      <Container className="relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div className="space-y-8">
            <div className="eyebrow">
              <span className="status-dot-pulse inline-block w-1.5 h-1.5 bg-green-action rounded-full" />
              Real-Time Shop Visibility
            </div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={heroContainer}
              className="font-display font-extrabold text-green-forest text-display-xl leading-[1.05] tracking-tight"
            >
              {heroWords.map((w, i) => (
                <motion.span key={i} variants={heroWord} className={`inline-block ${w.cls}`}>
                  {w.word}
                  {i < heroWords.length - 1 ? '\u00A0' : ''}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.9 }}
            >
              <p className="text-body-lg text-black max-w-[500px] leading-relaxed">
                HERE OPEN connects physical shops to customers in real time through IoT, mobile, and cloud technology. Never waste a trip again.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/download"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-action text-white text-[15px] font-bold rounded-lg hover:bg-green-forest hover:-translate-y-0.5 transition-all duration-200 shadow-green hover:shadow-green-lg"
                >
                  Get Started <ArrowRight size={16} />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-neutral-200 text-black text-[15px] font-medium rounded-lg hover:border-green-action/30 hover:bg-green-light hover:-translate-y-0.5 transition-all duration-200"
                >
                  See How It Works
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroBadgeContainer}
              className="flex flex-wrap items-center gap-3 pt-6"
            >
              {heroBadges.map((item) => (
                <motion.span
                  key={item}
                  variants={heroBadgeItem}
                  className="pill-shimmer inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-neutral-50 border border-neutral-200 text-caption text-black"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-green-action" />
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right — Device Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,102,0.06)_0%,transparent_60%)] pointer-events-none" />

            <div className="relative w-full max-w-[420px]">
              {/* Device frame */}
              <div className="float-card bg-white backdrop-blur-sm border border-neutral-200 rounded-3xl p-6 shadow-card">
                {/* Device header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-green-action/10 rounded-lg flex items-center justify-center">
                      <Wifi className="w-4 h-4 text-green-action" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-black">HERE OPEN Device</p>
                      <p className="text-[11px] text-black">ID: HO-2026-0042</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="status-dot-pulse inline-block w-1.5 h-1.5 bg-green-action rounded-full" />
                    <span className="text-[11px] font-semibold text-green-action">Online</span>
                  </div>
                </div>

                {/* Status panel */}
                <div className="bg-green-action/[0.06] border border-green-action/15 rounded-2xl p-5 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-black uppercase tracking-widest mb-1">Shop Status</p>
                      <p className="open-glow inline-block text-4xl font-extrabold text-green-action tracking-tight rounded-lg px-2">OPEN</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-black uppercase tracking-widest mb-1">Live</p>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-action/10 rounded-full">
                        <span className="blink-dot inline-block w-1.5 h-1.5 bg-green-action rounded-full" />
                        <span className="text-[11px] font-semibold text-green-action">Connected</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sensor grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Shield className="w-3.5 h-3.5" />, label: 'Security', value: 'Active', ok: true },
                    { icon: <Thermometer className="w-3.5 h-3.5" />, label: 'Temperature', value: `${temp}\u00B0C`, ok: true },
                    { icon: <Wind className="w-3.5 h-3.5" />, label: 'Smoke', value: 'Normal', ok: true },
                    { icon: <Activity className="w-3.5 h-3.5" />, label: 'Network', value: '4G LTE', ok: true },
                  ].map((s) => (
                    <div key={s.label} className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="text-black">{s.icon}</span>
                        <span className="text-[10px] text-black uppercase tracking-wider">{s.label}</span>
                      </div>
                      <p className={`text-[13px] font-semibold ${s.ok ? 'text-black' : 'text-green-action'}`}>{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="float-soft absolute -top-4 -right-4 w-11 h-11 bg-white border border-neutral-200 rounded-xl flex items-center justify-center shadow-card">
                <Bell className="w-4.5 h-4.5 text-green-action" />
              </div>
              <div className="float-soft absolute -bottom-4 -left-4 w-11 h-11 bg-white border border-neutral-200 rounded-xl flex items-center justify-center shadow-card" style={{ animationDelay: '1.5s' }}>
                <Smartphone className="w-4.5 h-4.5 text-green-action" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TRUST STRIP
   ═══════════════════════════════════════════════════════ */

function TrustStrip() {
  const items = [
    { label: '24/7', desc: 'Connected Monitoring' },
    { label: 'REAL-TIME', desc: 'Shop Status' },
    { label: 'ONE TAP', desc: 'Control' },
    { label: 'SMART', desc: 'Security' },
  ];

  return (
    <section className="relative border-y border-neutral-200 bg-neutral-50">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`py-8 lg:py-10 text-center ${i < items.length - 1 ? 'lg:border-r lg:border-neutral-200' : ''} ${i === 0 ? '' : 'border-t lg:border-t-0 border-neutral-200'} ${i === 1 ? 'lg:border-l lg:border-neutral-200' : ''}`}
            >
              <p className="text-display-sm font-extrabold text-green-action mb-1">{item.label}</p>
              <p className="text-body-sm text-black">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   INTERACTIVE DEMO
   ═══════════════════════════════════════════════════════ */

function DemoSection() {
  const [isOpen, setIsOpen] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [updatedAt, setUpdatedAt] = useState(0);
  const cardControls = useAnimationControls();
  const rippleId = useRef(0);

  const removeRipple = (id: number) => {
    setRipples((rs) => rs.filter((r) => r.id !== id));
  };

  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = ++rippleId.current;
    setRipples((rs) => [...rs, { id, x, y }]);

    cardControls.start({ scale: [1, 1.02, 1], transition: { duration: 0.4, ease: 'easeInOut' } });
    setUpdatedAt(Date.now());
    setIsOpen(!isOpen);
    if (isOpen) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <section className="section relative">
      <div className="absolute inset-0 bg-neutral-50" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Interactive Demo"
          title="Experience"
          titleAccent="HERE OPEN"
          description="This is a demo. In production, only authorized owners can control shop status."
        />

        <div className="max-w-[560px] mx-auto">
          <motion.div
            animate={cardControls}
            className={`rounded-3xl p-8 transition-all duration-500 ${
              isOpen
                ? 'bg-white border border-green-action/15 shadow-green'
                : 'bg-white border border-red-500/15 shadow-card'
            }`}
          >
            {/* Status */}
            <motion.div
              animate={{ backgroundColor: isOpen ? '#E8F5E9' : '#FEE2E2' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="rounded-2xl px-6 py-8 mb-8 text-center"
            >
              <p className="text-[10px] text-black uppercase tracking-widest mb-3">Shop Status</p>
              <div className="flex items-center justify-center gap-3">
                <motion.span
                  className="w-3 h-3 rounded-full"
                  animate={{ backgroundColor: isOpen ? '#388E3C' : '#EF5350', scale: [1, 1.35, 1], opacity: [1, 0.6, 1] }}
                  transition={{
                    backgroundColor: { duration: 0.4, ease: 'easeInOut' },
                    scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
                    opacity: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
                  }}
                />
                <motion.p
                  className="text-5xl font-extrabold tracking-tight"
                  animate={{ color: isOpen ? '#388E3C' : '#EF5350' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {isOpen ? 'OPEN' : 'CLOSED'}
                </motion.p>
              </div>
              {isOpen && (
                <p className="text-[11px] text-green-action mt-3 flex items-center justify-center gap-1.5">
                  <span className="status-dot-pulse inline-block w-1.5 h-1.5 bg-green-action rounded-full" />
                  LIVE
                </p>
              )}
              {!isOpen && (
                <div className="mt-5 space-y-2">
                  <p className="text-[13px] text-red-400 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" /> SECURITY ACTIVE
                  </p>
                  <p className="text-[13px] text-red-400/60 flex items-center justify-center gap-2">
                    <Activity className="w-4 h-4" /> MONITORING ACTIVE
                  </p>
                </div>
              )}
            </motion.div>

            {/* Meta */}
            <div className="flex items-center justify-between text-[11px] text-black mb-6 px-2">
              <motion.span
                key={updatedAt}
                initial={{ backgroundColor: 'rgba(56, 142, 60, 0.28)', color: '#1A6B2E', y: -2 }}
                animate={{ backgroundColor: 'rgba(56, 142, 60, 0)', color: '#212121', y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="px-2 py-0.5 rounded-md"
              >
                Last updated: Just Now
              </motion.span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-action rounded-full" />
                Device Online
              </span>
            </div>

            {/* Toggle */}
            <div className="text-center">
              <button
                type="button"
                onClick={toggle}
                className={`relative overflow-hidden px-8 py-3.5 rounded-lg font-bold text-[13px] transition-all ${
                  isOpen
                    ? 'bg-red-500/10 border border-red-500/25 text-red-400 hover:bg-red-500/15'
                    : 'bg-green-action text-white hover:bg-green-forest shadow-green hover:shadow-green'
                }`}
              >
                <span className="relative z-10">Tap to Set {isOpen ? 'CLOSED' : 'OPEN'}</span>
                {ripples.map((r) => (
                  <motion.span
                    key={r.id}
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    onAnimationComplete={() => removeRipple(r.id)}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      left: r.x - 80,
                      top: r.y - 80,
                      width: 160,
                      height: 160,
                      background: isOpen
                        ? 'radial-gradient(circle, rgba(239, 83, 80, 0.35) 0%, rgba(239, 83, 80, 0) 65%)'
                        : 'radial-gradient(circle, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 65%)',
                    }}
                  />
                ))}
              </button>
              <p className="text-[11px] text-black mt-4">
                Demo only — not connected to real devices
              </p>
            </div>

            {/* Alert */}
            {showAlert && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-5 bg-red-500/8 border border-red-500/15 rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] font-semibold text-red-400">Security Alert</p>
                    <p className="text-[11px] text-red-400/60">Shop status changed to CLOSED — monitoring activated</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   24/7 MONITORING
   ═══════════════════════════════════════════════════════ */

function useMonitorCount(target: number, active: boolean, from: number, duration = 1200) {
  const [value, setValue] = useState(from);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(from + Math.round((target - from) * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, from, duration]);
  return value;
}

function MonitoringSection() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(dashboardRef, { once: true, amount: 0.3 });
  const temp = useMonitorCount(24, inView, 18, 1200);

  const monitors = [
    {
      icon: <Shield size={14} className="text-[#6B7C8E]" strokeWidth={1.5} />,
      label: 'Security',
      value: (
        <span className="flex items-center gap-2">
          <span className="status-dot-pulse inline-block w-1.5 h-1.5 bg-green-action rounded-full" />
          Active
        </span>
      ),
    },
    {
      icon: <Thermometer size={14} className="text-[#6B7C8E]" strokeWidth={1.5} />,
      label: 'Temperature',
      value: <>{`${temp}\u00B0C`}</>,
    },
    {
      icon: <Wind size={14} className="text-[#6B7C8E]" strokeWidth={1.5} />,
      label: 'Smoke',
      value: (
        <span className="flex items-center gap-2">
          <motion.span
            initial={{ opacity: 0.2 }}
            animate={inView ? { opacity: [0.2, 1, 0.2, 1] } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="inline-block w-1.5 h-1.5 rounded-full bg-green-action"
          />
          Normal
        </span>
      ),
    },
    {
      icon: <Wifi size={14} className="text-[#6B7C8E]" strokeWidth={1.5} />,
      label: 'Network',
      value: (
        <span className="flex items-center gap-2">
          Connected
          <svg className="wifi-signal w-4 h-4 text-green-action" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M5 12.5a10 10 0 0 1 14 0" />
            <path d="M8.5 16a5.5 5.5 0 0 1 7 0" />
            <path d="M12 19.5h.01" />
          </svg>
        </span>
      ),
    },
    { icon: <Cpu size={14} className="text-[#6B7C8E]" strokeWidth={1.5} />, label: 'Device', value: 'Healthy' },
    {
      icon: <Bell size={14} className="text-[#6B7C8E]" strokeWidth={1.5} />,
      label: 'Alerts',
      value: (
        <motion.span
          initial={{ backgroundColor: 'rgba(56, 142, 60, 0.28)', color: '#1A6B2E' }}
          animate={inView ? { backgroundColor: 'rgba(56, 142, 60, 0)', color: '#212121' } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="inline-block text-[13px] font-semibold px-1.5 py-0.5 rounded-md"
        >
          None
        </motion.span>
      ),
    },
  ];

  return (
    <section className="section relative">
      <div className="absolute inset-0 bg-neutral-50" />
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="24/7 Monitoring"
              title="Your Shop."
              titleAccent="Always Connected."
              description="When your shop is closed, HERE OPEN keeps watching. Continuous security and safety monitoring with instant alerts."
              align="left"
            />

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: <Shield className="w-4 h-4" />, title: 'Continuous Monitoring', desc: '24/7 when closed' },
                { icon: <Wifi className="w-4 h-4" />, title: 'Device Connectivity', desc: 'Real-time via GSM' },
                { icon: <Thermometer className="w-4 h-4" />, title: 'Fire Detection', desc: 'Temp & smoke sensors' },
                { icon: <Bell className="w-4 h-4" />, title: 'Instant Alerts', desc: 'Push + SMS notifications' },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-action/8 border border-green-action/15 rounded-lg flex items-center justify-center text-green-action flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-green-forest">{f.title}</h4>
                    <p className="text-[11px] text-black">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard */}
          <div ref={dashboardRef} className="relative overflow-hidden bg-white border border-neutral-200 rounded-3xl p-6">
            <span className="scan-line" />
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[13px] font-semibold text-green-forest">System Status</h3>
              <span className="flex items-center gap-1.5 text-[11px] text-green-action">
                <span className="status-dot-pulse inline-block w-1.5 h-1.5 bg-green-action rounded-full" />
                ONLINE
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {monitors.map((m) => (
                <div key={m.label} className="bg-neutral-50 border border-neutral-200 rounded-xl p-4">
                  <div className="flex items-center mb-2">
                    <span className="mr-2 flex items-center">{m.icon}</span>
                    <span className="text-[10px] text-black uppercase tracking-wider">{m.label}</span>
                  </div>
                  <p className="text-[13px] font-semibold text-black">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TARGET BUSINESSES
   ═══════════════════════════════════════════════════════ */

function TargetSection() {
  const categories = [
    { icon: <Store size={16} className="text-[#6B7C8E]" strokeWidth={1.5} />, name: 'Kirana' },
    { icon: <UtensilsCrossed size={16} className="text-[#6B7C8E]" strokeWidth={1.5} />, name: 'Restaurants' },
    { icon: <Cross size={16} className="text-[#6B7C8E]" strokeWidth={1.5} />, name: 'Medical Stores' },
    { icon: <Scissors size={16} className="text-[#6B7C8E]" strokeWidth={1.5} />, name: 'Salons' },
    { icon: <Scissors size={16} className="text-[#6B7C8E]" strokeWidth={1.2} />, name: 'Tailors' },
    { icon: <Wrench size={16} className="text-[#6B7C8E]" strokeWidth={1.5} />, name: 'Repair Shops' },
    { icon: <ShoppingBag size={16} className="text-[#6B7C8E]" strokeWidth={1.5} />, name: 'Retail' },
    { icon: <Building2 size={16} className="text-[#6B7C8E]" strokeWidth={1.5} />, name: 'Small Offices' },
  ];

  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="Who It's For"
          title="Built For Every"
          titleAccent="Local Business"
          description="From kirana stores to clinics, salons to repair shops — any business with physical presence benefits."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {categories.map((c, i) => (
            <div key={i} className="card-static flex items-center justify-center gap-2 py-4 px-5 hover:border-green-action/30 transition-colors">
              {c.icon}
              <span className="text-[13px] font-medium text-black">{c.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TECHNOLOGY
   ═══════════════════════════════════════════════════════ */

const techContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const techNodeVar: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const techArrowVar: Variants = {
  hidden: { strokeDashoffset: 200, opacity: 0 },
  visible: { strokeDashoffset: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
};

function TechnologySection() {
  const layers = [
    { icon: <Store size={24} className="text-[#00D084]" strokeWidth={1.5} />, label: 'SHOP', sub: 'Physical Location' },
    { icon: <Cpu size={24} className="text-[#00D084]" strokeWidth={1.5} />, label: 'HERE OPEN DEVICE', sub: 'IoT Hardware' },
    { icon: <Wifi size={24} className="text-[#00D084]" strokeWidth={1.5} />, label: 'IoT NETWORK', sub: 'GSM / MQTT' },
    { icon: <Cloud size={24} className="text-[#00D084]" strokeWidth={1.5} />, label: 'CLOUD', sub: 'Processing & Sync' },
    { icon: <Smartphone size={24} className="text-[#00D084]" strokeWidth={1.5} />, label: 'MOBILE APP', sub: 'Real-Time Updates' },
    { icon: <Users size={24} className="text-[#00D084]" strokeWidth={1.5} />, label: 'CUSTOMERS', sub: 'Visibility & Alerts' },
  ];

  return (
    <section className="section relative">
      <div className="absolute inset-0 bg-neutral-50" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Technology"
          title="Built On"
          titleAccent="Modern Infrastructure"
          description="A scalable, secure IoT platform connecting physical shops to digital customers."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={techContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Horizontal pipeline (xl+) */}
          <div className="hidden xl:block relative">
            <span className="pipeline-flow" />
            <div className="flex items-center gap-2">
              {layers.map((l, i) => (
                <Fragment key={l.label}>
                  <motion.div
                    variants={techNodeVar}
                    className="node-glow flex-1 min-w-0 bg-white border border-neutral-200 rounded-2xl px-3 py-4 flex flex-col items-center gap-1.5 text-center"
                  >
                    <div className="w-11 h-11 rounded-xl bg-green-action/8 border border-green-action/15 flex items-center justify-center flex-shrink-0">
                      {l.icon}
                    </div>
                    <p className="text-[12px] font-bold text-black leading-tight">{l.label}</p>
                    <p className="text-[10px] text-black leading-tight">{l.sub}</p>
                  </motion.div>
                  {i < layers.length - 1 && (
                    <motion.svg
                      variants={{ hidden: {}, visible: {} }}
                      viewBox="0 0 24 24"
                      className="w-7 h-7 flex-shrink-0 self-center"
                      fill="none"
                      stroke="#388E3C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <motion.path d="M2 12 H17 M11 6 L17 12 L11 18" strokeDasharray="200" variants={techArrowVar} />
                    </motion.svg>
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          {/* Vertical fallback (< xl) */}
          <div className="xl:hidden relative max-w-2xl mx-auto">
            <span className="pipeline-flow-down" />
            <div className="space-y-3">
              {layers.map((l, i) => (
                <Fragment key={l.label}>
                  <motion.div
                    variants={techNodeVar}
                    className="node-glow card-static flex items-center gap-4 py-4 px-6"
                  >
                    <div className="w-10 h-10 bg-green-action/8 border border-green-action/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      {l.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-[13px] font-bold text-black">{l.label}</p>
                      <p className="text-[11px] text-black">{l.sub}</p>
                    </div>
                  </motion.div>
                  {i < layers.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <motion.svg
                        variants={{ hidden: {}, visible: {} }}
                        viewBox="0 0 24 24"
                        className="w-4 h-6"
                        fill="none"
                        stroke="#388E3C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <motion.path d="M12 2 V19 M6 13 L12 19 L18 13" strokeDasharray="200" variants={techArrowVar} />
                      </motion.svg>
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}


/* ══════════════════════════════════════════════════════════════
   MAIN
   ══════════════════════════════════════════════════════════════ */

export default function HomePage() {
  const { scrollYProgress } = useScroll();

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-white relative noise page-fade-in">
        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 right-0 h-[3px] bg-green-action origin-left z-[100]"
          aria-hidden="true"
        />
        <Hero />
        <TrustStrip />
        <ProblemsSection />
        <SolutionSection />
        <DemoSection />
        <HowItWorksSection />
        <MonitoringSection />
        <FeaturesSection />
        <OwnerBenefitsSection />
        <CustomerBenefitsSection />
        <TargetSection />
        <TechnologySection />
        <MarketSection />
        <GrowthSection />
        <IPSection />
        <WhySection />
        <VisionSection />
        <FinalCTASection />
      </main>
    </MotionConfig>
  );
}
