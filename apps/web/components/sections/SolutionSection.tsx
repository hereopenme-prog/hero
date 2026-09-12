'use client';

import { useEffect, useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/app/components/Container';
import { Reveal } from '@/app/components/Reveal';
import {
  Eye,
  ShieldAlert,
  Smartphone,
  Home,
  Activity,
  Settings,
  Flame,
  Bell,
  Zap,
  Wifi,
  Signal,
  BatteryFull,
  ArrowDown,
  Users,
  Lock,
} from 'lucide-react';

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ─── Smart device status visual (dark, fixed palette) ─── */
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
        SMART DEVICE
      </text>
      <rect x="16" y="72" width="72" height="40" rx="8" fill="#0D1117" stroke="#1E293B" strokeWidth="0.75" />
      <rect x="28" y="96" width="8" height="4" rx="2" fill="#00D084" fillOpacity="0.4" />
      <rect x="40" y="90" width="8" height="10" rx="2" fill="#00D084" fillOpacity="0.7" />
      <rect x="52" y="94" width="8" height="6" rx="2" fill="#00D084" fillOpacity="0.55" />
      <text x="78" y="98" textAnchor="middle" fill="#00D084" fontSize="7.5" fontFamily="monospace" fontWeight="bold" letterSpacing="0.12em">
        OPEN
      </text>
      <text x="52" y="130" textAnchor="middle" fill="#64748B" fontSize="6" fontFamily="monospace">
        SMART MERCHANT
      </text>
      <text x="52" y="140" textAnchor="middle" fill="#00D084" fontSize="6" fontFamily="monospace" letterSpacing="0.08em">
        DEVICE
      </text>
    </svg>
  );
}

/* ─── Live confidence score (subtle, reduced-motion aware) ─── */
function ConfidenceScore({ className = '' }: { className?: string }) {
  const [score, setScore] = useState(87);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      setScore((s) => (s >= 94 ? 87 : s + 1));
    }, 1800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={className}>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-[10px] text-zinc-400">Confidence score</span>
        <span className="font-mono text-[11px] font-bold text-teal-300">{score}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-1000 ease-out"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

/* ─── Merchant app mockup ─── */
function MerchantPhone() {
  return (
    <div className="relative mx-auto w-[252px] sm:w-[280px]">
      <div className="relative rounded-[2.4rem] border border-zinc-700/60 bg-[#0B1118] shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden pt-2 pb-4">
        <div className="px-4 pb-1">
          <div className="flex items-center justify-between text-[9px] text-zinc-500">
            <span className="font-mono">9:41</span>
            <span className="flex items-center gap-1">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <BatteryFull className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        <div className="px-4">
          <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-emerald-400/70">Merchant app</span>
          <p className="font-display font-bold text-[15px] text-zinc-50 mt-0.5">Your shop. In your hands.</p>

          <div className="mt-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-zinc-500">
                Control your connected device
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-semibold text-emerald-300 tracking-wide">LIVE</span>
              </span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[11px] font-medium text-zinc-300">Shop status</span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-display font-bold text-[12px] text-emerald-300 tracking-[0.1em]">OPEN</span>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <span className="rounded-xl bg-emerald-500 text-[#05130C] text-[11px] font-bold py-2.5 text-center">Open shop</span>
              <span className="rounded-xl border border-zinc-600/70 text-zinc-300 text-[11px] font-semibold py-2.5 text-center">Close shop</span>
            </div>
          </div>

          <div className="mt-2.5 rounded-2xl border border-zinc-700/50 bg-white/[0.03] p-3 flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10 shrink-0">
              <Bell className="w-3.5 h-3.5 text-emerald-400" />
            </span>
            <div>
              <span className="text-[10px] font-semibold text-zinc-200 block">Merchant alerts</span>
              <span className="text-[9px] text-zinc-500">Safety &amp; status notifications</span>
            </div>
          </div>

          <div className="flex items-center justify-around mt-3 border-t border-zinc-800/80 pt-2.5">
            <span className="flex flex-col items-center gap-1 text-emerald-400">
              <Home className="w-4 h-4" />
              <span className="text-[8px] font-semibold tracking-wide uppercase">Home</span>
            </span>
            <span className="flex flex-col items-center gap-1 text-zinc-500">
              <Activity className="w-4 h-4" />
              <span className="text-[8px] font-semibold tracking-wide uppercase">Activity</span>
            </span>
            <span className="flex flex-col items-center gap-1 text-zinc-500">
              <Settings className="w-4 h-4" />
              <span className="text-[8px] font-semibold tracking-wide uppercase">Settings</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Public app mockup ─── */
function PublicPhone() {
  return (
    <div className="relative mx-auto w-[252px] sm:w-[280px]">
      <div className="relative rounded-[2.4rem] border border-teal-600/40 bg-[#0B1118] shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden pt-2 pb-4">
        <div className="px-4 pb-1">
          <div className="flex items-center justify-between text-[9px] text-zinc-500">
            <span className="font-mono">9:41</span>
            <span className="flex items-center gap-1">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <BatteryFull className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        <div className="px-4">
          <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-teal-400/70">Public app</span>
          <p className="font-display font-bold text-[15px] text-zinc-50 mt-0.5">HERE OPEN</p>

          <div className="mt-3 rounded-2xl border border-teal-500/25 bg-teal-500/5 p-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium text-zinc-300">Shop is open</span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-teal-500/30 bg-teal-500/15 px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                <span className="font-display font-bold text-[12px] text-teal-300 tracking-[0.1em]">OPEN</span>
              </span>
            </div>
            <div className="mt-3 h-24 rounded-xl bg-white/[0.02] border border-zinc-800/60 p-3">
              <ConfidenceScore />
            </div>
          </div>

          <div className="mt-2.5 rounded-2xl border border-zinc-700/50 bg-white/[0.03] p-3 flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 shrink-0">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
            </span>
            <div>
              <span className="text-[10px] font-semibold text-zinc-200 block">Motion 2 minutes ago</span>
              <span className="text-[9px] text-zinc-500">Recent activity detected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Animated connectors ─── */
function FlowConnector({ label, accent = 'emerald' }: { label?: string; accent?: 'emerald' | 'teal' }) {
  const color = accent === 'teal' ? 'bg-teal-400/70' : 'bg-emerald-400/70';
  return (
    <div className="relative flex flex-col items-center py-1" aria-hidden>
      <div className="h-8 w-px bg-emerald-500/15" />
      <span className={`flow-dot absolute top-1 w-1.5 h-1.5 rounded-full ${color}`} />
      {label && <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-emerald-400/50 mt-1">{label}</span>}
    </div>
  );
}

function FlowHLine({ accent = 'emerald' }: { accent?: 'emerald' | 'teal' }) {
  const color = accent === 'teal' ? 'bg-teal-400/70' : 'bg-emerald-400/70';
  return (
    <div className="relative flex-1 h-px bg-emerald-500/20" aria-hidden>
      <span className={`flow-h-dot absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${color}`} />
    </div>
  );
}

/* ─── Band 1: HOW IT WORKS ─── */
function HowItWorksBand() {
  const benefits = [
    { icon: Eye, text: 'Instant open/closed status to the public.' },
    { icon: ShieldAlert, text: 'Safety and security alerts to merchants.' },
    { icon: Smartphone, text: 'Merchant control.' },
  ];

  const highlights = [
    { icon: Eye, label: 'Public shop status' },
    { icon: Zap, label: 'Confidence score' },
    { icon: ShieldAlert, label: 'Merchant alerts' },
  ];

  return (
    <Section id="solution" className="relative bg-[#050505] pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <Container>
        <Reveal>
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-emerald-400 mb-4">
            <span className="inline-block h-px w-6 bg-emerald-400 opacity-40" />
            How it works
          </span>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-zinc-50 leading-tight max-w-3xl mb-6">
            Our solution goes beyond{' '}
            <span className="text-emerald-400">payment confirmation.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-2xl mb-10">
            A connected smart device for local shops — one tap in a mobile app, one response across shop status, safety and trust.
          </p>
        </Reveal>

        {/* Core benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 mb-14 lg:mb-20">
          {benefits.map((b, i) => (
            <Reveal key={i}>
              <div className="group h-full rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm p-5 sm:p-6 hover:border-emerald-500/25 transition-colors">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-500/10 mb-4">
                  <b.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-zinc-100 leading-snug">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Connected system */}
        <Reveal>
          <div className="rounded-3xl border border-zinc-800/60 bg-[#0A0F14] px-5 py-10 sm:px-10 lg:px-14">
            <div className="flex flex-col items-center text-center mb-8">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400/70 mb-2">From one mobile app</p>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-50">
                Manage your connected device with a <span className="text-emerald-400">tap.</span>
              </h3>
            </div>

            {/* Desktop: app → device → public */}
            <div className="hidden lg:flex items-center justify-center gap-0 mb-8">
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-4">
                <Smartphone className="w-6 h-6 text-emerald-400" />
                <span className="text-xs font-semibold text-zinc-200 tracking-wide">MOBILE APP</span>
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider">Merchant control</span>
              </div>
              <FlowHLine />
              <div className="rounded-2xl bg-[#06100A] border border-emerald-500/30 shadow-[0_0_60px_#00D08410] p-4 w-[112px]">
                <DeviceSVG className="w-full h-auto" />
              </div>
              <FlowHLine accent="teal" />
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-teal-500/20 bg-teal-500/5 px-6 py-4">
                <Users className="w-6 h-6 text-teal-400" />
                <span className="text-xs font-semibold text-zinc-200 tracking-wide">PUBLIC APP</span>
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider">Shop status</span>
              </div>
            </div>

            {/* Mobile: app → device → public */}
            <div className="flex flex-col items-center lg:hidden mb-8">
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-3">
                <Smartphone className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-semibold text-zinc-200">MOBILE APP</span>
              </div>
              <FlowConnector />
              <div className="rounded-2xl bg-[#06100A] border border-emerald-500/30 shadow-[0_0_40px_#00D08410] p-3 w-[104px]">
                <DeviceSVG className="w-full h-auto" />
              </div>
              <FlowConnector accent="teal" />
              <div className="flex items-center gap-3 rounded-2xl border border-teal-500/20 bg-teal-500/5 px-5 py-3">
                <Users className="w-5 h-5 text-teal-400" />
                <span className="text-sm font-semibold text-zinc-200">PUBLIC APP</span>
              </div>
            </div>

            {/* Highlight chips */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2"
                >
                  <h.icon className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-zinc-200">{h.label}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ─── Band 2: Merchant + Public app ─── */
function AppsBand() {
  return (
    <Section className="relative bg-[#0A0F14] py-20 lg:py-28">
      <Container>
        <Reveal>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400/60 mb-3 block">One tap. Two modes.</span>
        </Reveal>
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-50 mb-10">
            Two apps. <span className="text-emerald-400">One connected device.</span>
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-center">
          {/* Merchant app */}
          <Reveal>
            <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm p-6 sm:p-8">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-emerald-400/70">Merchant app</span>
              <h4 className="text-xl sm:text-2xl font-display font-bold text-zinc-50 mt-1 mb-6">Your shop. In your hands.</h4>
              <MerchantPhone />
            </div>
          </Reveal>

          {/* Center device (lg) */}
          <Reveal>
            <div className="flex items-center justify-center flex-col gap-4">
              <div className="hidden lg:flex flex-col items-center gap-3">
                <div className="rounded-2xl bg-[#06100A] border border-emerald-500/30 shadow-[0_0_50px_#00D08410] p-4 w-[112px]">
                  <DeviceSVG className="w-full h-auto" />
                </div>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-emerald-500/30 bg-emerald-500/10">
                  <Zap className="w-4 h-4 text-emerald-400" />
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-emerald-400/50">One device</span>
              </div>
              <div className="lg:hidden text-emerald-400/40">
                <ArrowDown className="w-5 h-5" />
              </div>
            </div>
          </Reveal>

          {/* Public app */}
          <Reveal>
            <div className="rounded-3xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm p-6 sm:p-8">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal-400/70">Public app</span>
              <h4 className="text-xl sm:text-2xl font-display font-bold text-zinc-50 mt-1 mb-6">Know before you go.</h4>
              <PublicPhone />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="text-center font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-500 mt-10">
            Illustrative app screens
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ─── Band 3: ONE TAP. TWO MODES. ─── */
function ModeFlow({ items, accent }: { items: { label: string; alert?: boolean }[]; accent: 'open' | 'closed' }) {
  const isClosed = accent === 'closed';
  return (
    <div className="flex flex-col items-center">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center w-full">
          <Reveal>
            <div
              className={`flex items-center gap-2.5 rounded-2xl border px-4 py-2.5 w-full justify-center ${
                isClosed && item.alert
                  ? 'border-red-500/25 bg-red-500/5'
                  : isClosed
                    ? 'border-zinc-700/60 bg-zinc-900/50'
                    : 'border-emerald-500/15 bg-emerald-500/5'
              }`}
            >
              {isClosed && item.alert && <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse shrink-0" />}
              <span className="text-xs sm:text-sm font-semibold text-zinc-100">{item.label}</span>
            </div>
          </Reveal>
          {i < items.length - 1 && <FlowConnector />}
        </div>
      ))}
    </div>
  );
}

function ModeCard({
  mode,
  focused,
  onFocus,
}: {
  mode: 'open' | 'closed';
  focused: boolean;
  onFocus: () => void;
}) {
  const isOpen = mode === 'open';

  const openFlow: { label: string; alert?: boolean }[] = [
    { label: 'Mobile app' },
    { label: 'Merchant taps OPEN' },
    { label: 'Smart device' },
    { label: 'Business mode' },
    { label: 'Public app' },
    { label: 'OPEN + confidence' },
  ];
  const closedFlow: { label: string; alert?: boolean }[] = [
    { label: 'Mobile app' },
    { label: 'Merchant taps CLOSED' },
    { label: 'Smart device' },
    { label: 'Security mode' },
    { label: 'Status + alerts', alert: true },
    { label: 'CLOSED + monitoring', alert: true },
  ];

  const steps = isOpen
    ? [
        'Tap Open shop in the mobile app.',
        'The connected device switches to Business Mode.',
        'Customers see the shop as OPEN in the public app.',
        'Movement updates contribute to a live confidence score.',
      ]
    : [
        'Tap Close shop in the mobile app.',
        'The connected device switches to Security Mode.',
        'Customers see the shop as CLOSED in the public app.',
        'Detected intrusion, motion or tampering triggers an alert to the merchant.',
      ];

  return (
    <button
      type="button"
      onClick={onFocus}
      aria-pressed={focused}
      className={`text-left rounded-3xl border p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 group w-full ${
        isOpen ? 'border-emerald-500/20 bg-zinc-900/40' : 'border-zinc-700/60 bg-zinc-900/40'
      } ${
        focused
          ? 'border-emerald-500/40 shadow-[0_0_60px_#00D08410] -translate-y-1'
          : 'hover:border-emerald-500/30 hover:-translate-y-0.5'
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <span className={`font-mono text-[10px] tracking-[0.2em] uppercase ${focused ? 'text-emerald-400' : 'text-zinc-500'}`}>
          MODE {isOpen ? '1' : '2'} · {isOpen ? 'OPEN' : 'CLOSED'}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 ${
            isOpen ? 'bg-emerald-500/10 border border-emerald-500/25' : 'bg-zinc-800/80 border border-zinc-600/50'
          }`}
        >
          {isOpen ? <Zap className="w-3.5 h-3.5 text-emerald-400" /> : <Lock className="w-3.5 h-3.5 text-zinc-400" />}
          <span className={`text-[10px] font-semibold ${isOpen ? 'text-emerald-300' : 'text-zinc-400'}`}>
            {isOpen ? 'Merchant chooses OPEN' : 'Merchant chooses CLOSED'}
          </span>
        </span>
      </div>

      <p className="text-sm text-zinc-400 mb-8">
        {isOpen ? 'Business mode + confidence score' : 'Security mode activates'}
      </p>

      <ModeFlow items={isOpen ? openFlow : closedFlow} accent={mode} />

      {/* Numbered steps */}
      <div className="mt-8 pt-6 border-t border-zinc-800/60 space-y-3">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="font-mono text-[10px] tracking-[0.1em] text-emerald-400/70 mt-0.5 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{step}</p>
          </div>
        ))}
      </div>
    </button>
  );
}

function ModesBand() {
  const [focus, setFocus] = useState<'open' | 'closed' | null>(null);

  return (
    <Section className="relative bg-[#050505] py-20 lg:py-28">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-emerald-400 mb-3 block">One tap. Two modes.</span>
          </Reveal>
          <Reveal>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-zinc-50 mb-4">
              ONE TAP. <span className="text-emerald-400">TWO MODES.</span>
            </h3>
          </Reveal>
          <Reveal>
            <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-2">
              A simple action. A connected response.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-zinc-500 text-sm max-w-2xl mx-auto">
              Merchants control the device. Customers see shop status. Merchants stay informed about safety and security.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3rem_1fr] gap-8 lg:gap-6 items-stretch">
          <Reveal>
            <ModeCard mode="open" focused={focus === 'open'} onFocus={() => setFocus(focus === 'open' ? null : 'open')} />
          </Reveal>

          {/* Center divider */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-4" aria-hidden>
            <div className="h-24 w-px bg-emerald-500/20 relative">
              <span className="flow-dot absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
            </div>
            <span className="flex flex-col items-center gap-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500/30 bg-emerald-500/10">
                <Zap className="w-4 h-4 text-emerald-400" />
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-emerald-400/50">Tap</span>
            </span>
            <div className="h-24 w-px bg-emerald-500/20 relative">
              <span className="flow-dot absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
            </div>
          </div>

          <Reveal>
            <ModeCard mode="closed" focused={focus === 'closed'} onFocus={() => setFocus(focus === 'closed' ? null : 'closed')} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ─── Band 4: SAFETY THAT STAYS CONNECTED ─── */
function SafetyBand() {
  return (
    <Section className="relative bg-[#0A0F14] py-20 lg:py-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-emerald-400 mb-4">
                <span className="inline-block h-px w-6 bg-emerald-400 opacity-40" />
                Safety that stays connected
              </span>
            </Reveal>
            <Reveal>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-zinc-50 leading-tight mb-4">
                24/7 fire and smoke monitoring.
              </h3>
            </Reveal>
            <Reveal>
              <p className="text-zinc-400 text-base lg:text-lg leading-relaxed mb-8">
                Safety alerts delivered to merchants.
              </p>
            </Reveal>
            <Reveal>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
                  <Flame className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-zinc-200">Fire &amp; smoke monitoring</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
                  <Bell className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-zinc-200">Safety alerts</span>
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative flex items-center justify-center py-8" aria-hidden>
              <div className="absolute w-[260px] h-[260px] rounded-full border border-emerald-400/10" />
              <div className="absolute w-[300px] h-[300px] rounded-full border border-emerald-400/5" />
              <div className="ring-pulse absolute w-[260px] h-[260px] rounded-full border border-emerald-400/20" />
              <div className="rounded-2xl bg-[#06100A] border border-emerald-500/30 shadow-[0_0_60px_#00D08414] p-4 w-[112px]">
                <DeviceSVG className="w-full h-auto" />
              </div>
              <span className="absolute left-[8%] top-[30%] inline-flex items-center gap-2 rounded-full bg-[#0A0F14] border border-emerald-500/25 px-3 py-1.5">
                <Flame className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] font-semibold text-zinc-200">24/7</span>
              </span>
              <span className="absolute right-[8%] bottom-[28%] inline-flex items-center gap-2 rounded-full bg-[#0A0F14] border border-emerald-500/25 px-3 py-1.5">
                <Bell className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] font-semibold text-zinc-200">Alerts</span>
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 lg:mt-20 pt-10 border-t border-zinc-800/60 text-center">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-emerald-400/70 mb-2">Connected by one device</p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-zinc-50">
              Safer shops. <span className="text-emerald-400">Stronger communities.</span>
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ─── Band 5: Disclaimer ─── */
function DisclaimerBand() {
  return (
    <Section className="relative bg-[#050505] pb-20 lg:pb-28">
      <Container>
        <Reveal>
          <p className="mx-auto max-w-2xl text-center text-xs text-zinc-600 leading-relaxed">
            Monitoring and alerts require supported sensors, power, connectivity and configuration. Confidence scores reflect available activity signals.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ─── Main ─── */
export function SolutionSection() {
  return (
    <div className="relative">
      <style>{`
        @keyframes flow-dot {
          0% { transform: translateY(0); opacity: 0.95; }
          100% { transform: translateY(26px); opacity: 0.1; }
        }
        .flow-dot { animation: flow-dot 1.8s ease-in-out infinite; }
        @keyframes flow-h-dot {
          0% { left: 0; opacity: 0.9; }
          100% { left: calc(100% - 8px); opacity: 0.15; }
        }
        .flow-h-dot { animation: flow-h-dot 2.2s ease-in-out infinite; }
        @keyframes ring-pulse {
          0% { transform: scale(0.92); opacity: 0.6; }
          100% { transform: scale(1.25); opacity: 0; }
        }
        .ring-pulse { animation: ring-pulse 3.2s ease-out infinite; }
      `}</style>
      <HowItWorksBand />
      <AppsBand />
      <ModesBand />
      <SafetyBand />
      <DisclaimerBand />
    </div>
  );
}