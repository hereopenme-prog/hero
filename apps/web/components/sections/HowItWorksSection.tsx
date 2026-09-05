'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowRight, Cpu, Flame, Gauge, Lock, Navigation, Pointer, Search, Shield, Tag, Thermometer, Wind } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const STEP = 1 / 8;
const CLEAR = 72; // fixed navbar height

const PHASES = [
  {
    tag: 'A DAY IN THE LIFE',
    title: 'THE SHOP IS CLOSED',
    sub: 'The business owner is away. No one knows what is happening.',
  },
  {
    tag: '01 · BUSINESS OWNER',
    title: 'OPENS THE SHOP',
    sub: 'One simple action sets the story in motion.',
  },
  {
    tag: '02 · HERE OPEN',
    title: 'WAKES THE DEVICE',
    sub: 'The Here Open device connects in an instant.',
  },
  {
    tag: '02 · HERE OPEN',
    title: 'THE STATUS GOES LIVE',
    sub: 'A green connection carries OPEN to the street.',
  },
  {
    tag: '03 · CUSTOMER',
    title: 'SEES THE SHOP IS OPEN',
    sub: 'The customer sees the shop is OPEN before travelling.',
  },
  {
    tag: '04 · CUSTOMER',
    title: 'DECIDES TO VISIT',
    sub: 'No unnecessary trip. No guessing. Just better information.',
  },
  {
    tag: '05 · THE DAY ENDS',
    title: 'THE SHOP CLOSES',
    sub: 'The status returns to CLOSED.',
  },
  {
    tag: 'SUPPORTED SENSING',
    title: 'SAFETY & SECURITY MONITORING',
    sub: 'When the shop is closed, supported monitoring features can provide visibility into configured safety and security events.',
  },
];

function usePhase() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ['start start', 'end end'] });
  const [idx, setIdx] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(7, Math.max(0, Math.floor(v * 8)));
    if (next !== idx) setIdx(next);
  });
  const devConn = useTransform(scrollYProgress, [3 * STEP, 4 * STEP], [0, 1]);
  const routeProg = useTransform(scrollYProgress, [5 * STEP, 6 * STEP], [0, 1]);
  return { runwayRef, idx, devConn, routeProg };
}

/* ------------------------------ shared atoms ------------------------------ */

function StatusPill({ open }: { open: boolean }) {
  return open ? (
    <motion.span
      key="open"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="inline-flex items-center gap-1.5 rounded-full bg-[#00D084] px-3.5 py-1 font-display font-extrabold text-[0.8rem] tracking-widest text-[#080C10] shadow-[0_0_22px_rgba(0,208,132,0.55)]"
    >
      <span className="status-dot-pulse inline-block h-1.5 w-1.5 rounded-full bg-[#080C10]" /> OPEN
    </motion.span>
  ) : (
    <motion.span
      key="closed"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="inline-flex items-center gap-1.5 rounded-full border border-[#FF444440] bg-[#FF444412] px-3.5 py-1 font-display font-extrabold text-[0.8rem] tracking-widest text-[#FF6B6B]"
    >
      <Lock size={11} /> CLOSED
    </motion.span>
  );
}

function StatusMesh({ open }: { open: boolean }) {
  return (
    <div className="relative">
      <StatusPill open={open} />
    </div>
  );
}

/* ------------------------------ desktop stage ------------------------------ */

function DesktopShop({ open, deviceOn, showing }: { open: boolean; deviceOn: boolean; showing: boolean }) {
  return (
    <div
      className="absolute left-[32.5%] top-[21%] h-[53%] w-[18%]"
      style={{ opacity: showing ? 1 : 0.35, transition: 'opacity 0.6s' }}
    >
      {/* glow ring */}
      <div
        className="absolute -inset-10 rounded-[4rem] bg-[#00D084]/[0.07] blur-3xl transition-opacity duration-1000 pointer-events-none"
        style={{ opacity: open ? 1 : 0 }}
      />
      {/* building */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-t-[2.5rem] border border-[#24323F] bg-gradient-to-b from-[#0F1923] to-[#0A0F14]">
        {/* parapet */}
        <div className="h-3 border-b border-[#24323F] bg-[#0C141C]" />
        {/* signboard */}
        <div className="mx-auto mt-4 flex w-[86%] items-center justify-center rounded-md border border-[#00D08430] bg-[#00D08410] px-2 py-1.5">
          <span className="truncate font-display font-bold text-[0.6rem] tracking-[0.14em] text-[#00D084]">
            SHARMA GENERAL STORE
          </span>
        </div>
        {/* window */}
        <div className="mx-auto mt-4 h-[26%] w-[80%] rounded-md border border-[#24323F] bg-[#0A0F14]" />
        {/* wall strip */}
        <div className="mx-auto mt-auto mb-0 flex h-[34%] w-[94%] items-end rounded-b-[2.5rem]" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,208,132,0.05))' }}>
          <div className="mx-auto mb-0 flex h-[96%] w-[46%] items-end justify-center rounded-t-xl border border-[#24323F] bg-[#0C141C]">
            <span className="mb-3 inline-block h-2 w-16 rounded-full bg-[#232F3A]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopDevice({ on }: { on: boolean }) {
  return (
    <div
      className="absolute z-20 -translate-x-1/2"
      style={{ left: '50%', top: '71%' }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{
            boxShadow: on ? '0 0 0 10px rgba(0,208,132,0.08), 0 0 26px rgba(0,208,132,0.6)' : '0 0 0 0 rgba(0,208,132,0)',
          }}
          transition={{ duration: 0.8 }}
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00D08460] bg-[#0F1923]"
        >
          <Cpu size={22} className={on ? 'text-[#00D084]' : 'text-[#3D4F5E]'} />
        </motion.div>
        <span className="mt-1.5 font-body text-[0.6rem] font-bold tracking-[0.2em] text-[#00D084]">HERE OPEN DEVICE</span>
        <motion.span
          animate={{ opacity: on ? 1 : 0.4, scale: on ? 1 : 0.92 }}
          className="mt-0.5 inline-flex items-center gap-1 font-body text-[0.55rem] font-semibold tracking-[0.18em] text-[#8A9BAE]"
        >
          <span className={`h-1 w-1 rounded-full ${on ? 'bg-[#00D084]' : 'bg-[#3D4F5E]'}`} /> {on ? 'CONNECTED' : 'STANDBY'}
        </motion.span>
      </div>
    </div>
  );
}

function DesktopOwnerCard({ visible, open }: { visible: boolean; open: boolean }) {
  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 14 }}
      transition={{ duration: 0.5 }}
      className="absolute left-[5%] top-[22%] z-20 w-[26%]"
    >
      <div className="rounded-2xl border border-[#24323F] bg-[#0D1520]/90 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 font-body text-[0.62rem] font-bold tracking-[0.22em] text-[#00D084]">
            <Pointer size={13} /> BUSINESS OWNER
          </span>
          <span className="font-body text-[0.55rem] tracking-[0.2em] text-[#3D4F5E]">SHOP STATUS</span>
        </div>

        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF444440] bg-[#FF444412] px-3.5 py-1 font-display font-extrabold text-[0.8rem] tracking-widest text-[#FF6B6B]">
            <Lock size={11} /> CLOSED
          </span>
          <ArrowRight size={15} className="text-[#00D084]" />
          <StatusPill open={open} />
        </div>

        <div className="mt-4 flex items-center justify-center">
          <motion.span
            animate={{ opacity: open ? 1 : 0.55 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#00D08440] bg-[#00D08412] px-3 py-1 font-body text-[0.58rem] font-bold tracking-[0.2em] text-[#00D084]"
          >
            <span className="status-dot-pulse inline-block h-1.5 w-1.5 rounded-full bg-[#00D084]" /> LIVE
          </motion.span>
        </div>

        <p className="mt-3 text-center font-body text-[0.68rem] text-[#8A9BAE]">
          {open ? 'The shop is now visible to customers.' : 'Tap once to open the shop.'}
        </p>
      </div>
    </motion.div>
  );
}

function DesktopCustomerCard({ visible, open }: { visible: boolean; open: boolean }) {
  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 14 }}
      transition={{ duration: 0.5 }}
      className="absolute right-[5%] top-[20%] z-20 w-[27%]"
    >
      <div className="overflow-hidden rounded-2xl border border-[#24323F] bg-[#0D1520]/90 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-2 border-b border-[#24323F] px-4 py-2.5">
          <span className="font-display font-semibold text-[0.8rem] text-[#E8EDF2]">HERE OPEN</span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-[#24323F] px-2.5 py-0.5 font-body text-[0.58rem] text-[#8A9BAE]">
            <Search size={10} className="text-[#00D084]" /> Search shops…
          </span>
        </div>
        <div className="px-5 py-4">
          <p className="font-display font-bold text-[0.98rem] text-[#E8EDF2]">Sharma General Store</p>
          <div className="mt-2 flex items-center gap-2">
            <StatusPill open={open} />
            <span className="font-body text-[0.62rem] font-semibold text-[#A5B4C4]">Open Now</span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-[#00D08440] bg-[#00D08412] px-2.5 py-1 font-body text-[0.56rem] font-bold tracking-wider text-[#00D084]">
              <Tag size={9} /> 10% OFF
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-[#24323F] px-2.5 py-1 font-body text-[0.56rem] font-semibold text-[#A5B4C4]">
              NEW ARRIVALS
            </span>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#00D084] py-2 font-body text-[0.62rem] font-bold text-[#080C10]">
              View Shop
            </span>
            <span className="flex items-center gap-1.5 rounded-lg border border-[#24323F] py-2 pr-2 pl-2.5 font-body text-[0.62rem] font-semibold text-[#A5B4C4]">
              <Navigation size={11} className="text-[#00D084]" /> Directions
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-[#24323F] px-5 py-2">
          <span className="font-body text-[0.58rem] text-[#3D4F5E]">Last updated</span>
          <span className="font-body text-[0.6rem] font-semibold text-[#00D084]">Just now</span>
        </div>
      </div>
    </motion.div>
  );
}

function DesktopVisuals({ idx, devConn, routeProg }: { idx: number; devConn: MotionValue<number>; routeProg: MotionValue<number> }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* device → customer connection */}
      <motion.path
        d="M742 648 C 900 660, 1010 620, 1035 470"
        stroke="#00D084"
        strokeWidth={2}
        strokeLinecap="round"
        style={{ pathLength: devConn, opacity: idx >= 3 ? (idx <= 4 ? 1 : 0.85) : 0, filter: 'drop-shadow(0 0 6px rgba(0,208,132,0.7))' }}
      />
      {/* customer → shop route */}
      <motion.path
        d="M1170 560 C 960 700, 760 700, 610 655"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="6 10"
        stroke="#00D08480"
        style={{ pathLength: routeProg, opacity: idx >= 5 && idx <= 6 ? 1 : 0 }}
      />
      <motion.circle
        cx={1170}
        cy={560}
        r={7}
        fill="#0F1923"
        stroke="#00D084"
        strokeWidth={2}
        animate={{ opacity: idx >= 5 && idx <= 6 ? 1 : 0 }}
      />
      <motion.circle
        cx={610}
        cy={655}
        r={7}
        fill="#0F1923"
        stroke="#00D084"
        strokeWidth={2}
        animate={{ opacity: idx >= 5 && idx <= 6 ? 1 : 0 }}
      />
    </svg>
  );
}

function DesktopMonitoring({ visible }: { visible: boolean }) {
  const items = [
    { icon: <Shield size={10} />, label: 'Security' },
    { icon: <Flame size={10} />, label: 'Fire' },
    { icon: <Wind size={10} />, label: 'Smoke' },
    { icon: <Thermometer size={10} />, label: 'Temperature' },
    { icon: <Gauge size={10} />, label: 'Device' },
  ];
  return (
    <div className="absolute bottom-[7%] left-1/2 z-20 -translate-x-1/2" aria-hidden="true">
      <motion.div
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 rounded-full border border-[#24323F] bg-[#0D1520]/90 py-2 pr-4 pl-3"
      >
        <span className="inline-flex items-center gap-1.5 font-body text-[0.58rem] font-bold tracking-[0.24em] text-[#00D084]">
          <span className="status-dot-pulse inline-block h-1.5 w-1.5 rounded-full bg-[#00D084]" /> MONITORING
        </span>
        {items.map((i) => (
          <span key={i.label} className="inline-flex items-center gap-1 rounded-full border border-[#24323F] bg-[#0F1923] px-2.5 py-1 font-body text-[0.56rem] font-semibold text-[#A5B4C4]">
            <span className="flex items-center text-[#00D084]">{i.icon}</span> {i.label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function DesktopStage({ idx, devConn, routeProg }: { idx: number; devConn: MotionValue<number>; routeProg: MotionValue<number> }) {
  const open = idx >= 1 && idx <= 5;
  const p = PHASES[idx];
  return (
    <div className="absolute inset-0 hidden lg:block">
      {/* backdrop grid + glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(rgba(0,208,132,0.04), rgba(0,208,132,0.04) 1px, transparent 1px, transparent 90px), linear-gradient(90deg, rgba(0,208,132,0.04), rgba(0,208,132,0.04) 1px, transparent 1px, transparent 90px), radial-gradient(ellipse at 50% 78%, rgba(0,208,132,0.09), transparent 60%)',
        }}
      />

      {/* caption */}
      <div className="absolute left-1/2 top-[8%] z-30 w-full max-w-3xl -translate-x-1/2 text-center">
        <motion.p
          animate={{ opacity: idx === 0 ? 1 : 0 }}
          className="font-body text-[0.62rem] font-semibold tracking-[0.3em] text-[#3D4F5E]"
        >
          SCROLL TO WATCH THE DAY UNFOLD
        </motion.p>
        <motion.div key={p.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="mt-3 font-body text-[0.62rem] font-bold tracking-[0.28em] text-[#00D084]">{p.tag}</p>
          <h4 className="mt-1.5 font-display font-bold text-[2.2rem] tracking-[-0.02em] text-[#E8EDF2]">{p.title}</h4>
          <p className="mx-auto mt-2 max-w-xl font-body text-[0.95rem] text-[#8A9BAE]">{p.sub}</p>
        </motion.div>
      </div>

      {/* scene */}
      <DesktopShop open={open} deviceOn={idx >= 2} showing={true} />
      <DesktopOwnerCard visible={idx >= 1 && idx <= 3} open={open} />
      <DesktopCustomerCard visible={idx >= 4 && idx <= 5} open={open} />
      <DesktopDevice on={idx >= 2} />
      <DesktopVisuals idx={idx} devConn={devConn} routeProg={routeProg} />
      <DesktopMonitoring visible={idx === 7} />

      {/* phase rail */}
      <div className="absolute top-1/2 right-4 z-30 flex -translate-y-1/2 flex-col items-center gap-2">
        {PHASES.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${i === idx ? 'bg-[#00D084] shadow-[0_0_10px_#00D084]' : i < idx ? 'bg-[#00D08460]' : 'bg-[#24323F]'}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- mobile stage ------------------------------- */

function MobileShop({ open }: { open: boolean }) {
  return (
    <div className="absolute left-1/2 top-[29%] w-[62%] max-w-[300px] -translate-x-1/2">
      <div
        className="absolute -inset-8 rounded-[3rem] bg-[#00D084]/[0.07] blur-3xl transition-opacity duration-1000 pointer-events-none"
        style={{ opacity: open ? 1 : 0 }}
      />
      <div className="relative flex h-36 flex-col overflow-hidden rounded-t-[2rem] border border-[#24323F] bg-gradient-to-b from-[#0F1923] to-[#0A0F14]">
        <div className="h-2.5 border-b border-[#24323F] bg-[#0C141C]" />
        <div className="mx-auto mt-3 flex w-[86%] items-center justify-center rounded-md border border-[#00D08430] bg-[#00D08410] px-2 py-1">
          <span className="truncate font-display font-bold text-[0.58rem] tracking-[0.12em] text-[#00D084]">SHARMA GENERAL STORE</span>
        </div>
        <div className="mx-auto mt-3 h-[22%] w-[78%] rounded-md border border-[#24323F] bg-[#0A0F14]" />
        <div className="mx-auto mt-auto flex h-[30%] w-[92%] items-end rounded-b-[2rem]">
          <div className="mx-auto mb-0 flex h-[92%] w-[42%] items-end justify-center rounded-t-xl border border-[#24323F] bg-[#0C141C]">
            <span className="mb-2 inline-block h-1.5 w-12 rounded-full bg-[#232F3A]" />
          </div>
        </div>
      </div>
      {/* device */}
      <div className="absolute -right-6 top-[70%] flex flex-col items-center">
        <motion.div
          animate={{ boxShadow: open ? '0 0 0 8px rgba(0,208,132,0.1), 0 0 22px rgba(0,208,132,0.55)' : '0 0 0 0 rgba(0,208,132,0)' }}
          transition={{ duration: 0.8 }}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00D08460] bg-[#0F1923]"
        >
          <Cpu size={17} className={open ? 'text-[#00D084]' : 'text-[#3D4F5E]'} />
        </motion.div>
        <span className="mt-1 whitespace-nowrap font-body text-[0.5rem] font-bold tracking-[0.18em] text-[#00D084]">HERE OPEN DEVICE</span>
        <span className="flex items-center gap-1 font-body text-[0.5rem] font-semibold tracking-[0.16em] text-[#8A9BAE]">
          <span className={`h-1 w-1 rounded-full ${open ? 'bg-[#00D084]' : 'bg-[#3D4F5E]'}`} /> {open ? 'CONNECTED' : 'STANDBY'}
        </span>
      </div>
    </div>
  );
}

function MobileOwnerCard({ visible, open }: { visible: boolean; open: boolean }) {
  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
      transition={{ duration: 0.5 }}
      className="absolute left-5 right-5 top-[56%] z-20 rounded-2xl border border-[#24323F] bg-[#0D1520]/95 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 font-body text-[0.6rem] font-bold tracking-[0.2em] text-[#00D084]">
          <Pointer size={12} /> BUSINESS OWNER
        </span>
        <span className="font-body text-[0.52rem] tracking-[0.2em] text-[#3D4F5E]">SHOP STATUS</span>
      </div>
      <div className="mt-3 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF444440] bg-[#FF444412] px-3 py-1 font-display font-extrabold text-[0.75rem] tracking-widest text-[#FF6B6B]">
          <Lock size={10} /> CLOSED
        </span>
        <ArrowRight size={14} className="text-[#00D084]" />
        <StatusMesh open={open} />
      </div>
      <p className="mt-3 text-center font-body text-[0.66rem] text-[#8A9BAE]">
        {open ? '● OPEN — LIVE. Customers can see it.' : 'Tap once to open the shop.'}
      </p>
    </motion.div>
  );
}

function MobileCustomerCard({ visible, open }: { visible: boolean; open: boolean }) {
  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
      transition={{ duration: 0.5 }}
      className="absolute left-4 right-4 top-[56%] z-20 overflow-hidden rounded-2xl border border-[#24323F] bg-[#0D1520]/95 shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center gap-2 border-b border-[#24323F] px-4 py-2">
        <span className="font-display font-semibold text-[0.8rem] text-[#E8EDF2]">HERE OPEN</span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-[#24323F] px-2.5 py-0.5 font-body text-[0.56rem] text-[#8A9BAE]">
          <Search size={10} className="text-[#00D084]" /> Search shops…
        </span>
      </div>
      <div className="px-4 py-3.5">
        <p className="font-display font-bold text-[0.92rem] text-[#E8EDF2]">Sharma General Store</p>
        <div className="mt-2 flex items-center gap-2">
          <StatusPill open={open} />
          <span className="font-body text-[0.6rem] font-semibold text-[#A5B4C4]">Open Now</span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-[#00D08440] bg-[#00D08412] px-2 py-1 font-body text-[0.54rem] font-bold tracking-wider text-[#00D084]">
            <Tag size={9} /> 10% OFF
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-[#24323F] px-2 py-1 font-body text-[0.54rem] font-semibold text-[#A5B4C4]">NEW ARRIVALS</span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#00D084] py-2 font-body text-[0.6rem] font-bold text-[#080C10]">View Shop</span>
          <span className="flex items-center gap-1.5 rounded-lg border border-[#24323F] py-2 pr-2 pl-2.5 font-body text-[0.6rem] font-semibold text-[#A5B4C4]">
            <Navigation size={10} className="text-[#00D084]" /> Directions
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function MobileMonitoring({ visible }: { visible: boolean }) {
  const items = [
    { icon: <Shield size={9} />, label: 'Security' },
    { icon: <Flame size={9} />, label: 'Fire' },
    { icon: <Wind size={9} />, label: 'Smoke' },
    { icon: <Thermometer size={9} />, label: 'Temp' },
    { icon: <Gauge size={9} />, label: 'Device' },
  ];
  return (
    <div className="absolute bottom-[6%] left-1/2 z-20 w-full max-w-[320px] -translate-x-1/2 px-4 text-center">
      <motion.div animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 14 }} transition={{ duration: 0.6 }}>
        <p className="inline-flex items-center gap-1.5 font-body text-[0.58rem] font-bold tracking-[0.24em] text-[#00D084]">
          <span className="status-dot-pulse inline-block h-1.5 w-1.5 rounded-full bg-[#00D084]" /> MONITORING
        </p>
        <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2">
          {items.map((i) => (
            <span key={i.label} className="inline-flex items-center gap-1 rounded-full border border-[#24323F] bg-[#0F1923] px-2.5 py-1 font-body text-[0.56rem] font-semibold text-[#A5B4C4]">
              <span className="flex items-center text-[#00D084]">{i.icon}</span> {i.label}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function MobileVisit({ visible }: { visible: boolean }) {
  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-[7%] left-1/2 z-20 -translate-x-1/2 text-center"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-[#00D08440] bg-[#0D1520]/90 px-4 py-2 font-body text-[0.62rem] font-bold tracking-[0.18em] text-[#00D084]">
        SEES OPEN <ArrowRight size={11} /> PLANS VISIT <ArrowRight size={11} /> WALKS IN
      </span>
    </motion.div>
  );
}

function MobileStage({ idx, devConn }: { idx: number; devConn: MotionValue<number> }) {
  const open = idx >= 1 && idx <= 5;
  const p = PHASES[idx];
  return (
    <div className="absolute inset-0 lg:hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(rgba(0,208,132,0.04), rgba(0,208,132,0.04) 1px, transparent 1px, transparent 70px), linear-gradient(90deg, rgba(0,208,132,0.04), rgba(0,208,132,0.04) 1px, transparent 1px, transparent 70px), radial-gradient(ellipse at 50% 55%, rgba(0,208,132,0.08), transparent 60%)',
        }}
      />

      {/* caption */}
      <div className="absolute left-1/2 top-[5%] z-30 w-[88%] -translate-x-1/2 text-center">
        <motion.p animate={{ opacity: idx === 0 ? 1 : 0 }} className="font-body text-[0.52rem] font-semibold tracking-[0.26em] text-[#3D4F5E]">
          SCROLL TO WATCH THE DAY UNFOLD
        </motion.p>
        <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="mt-1.5 font-body text-[0.54rem] font-bold tracking-[0.22em] text-[#00D084]">{p.tag}</p>
          <h4 className="mt-0.5 font-display font-bold text-[1.15rem] tracking-[-0.01em] text-[#E8EDF2]">{p.title}</h4>
          <p className="mx-auto mt-1 max-w-sm font-body text-[0.78rem] text-[#8A9BAE]">{p.sub}</p>
        </motion.div>
      </div>

      {/* scene */}
      <MobileShop open={open} />
      <MobileOwnerCard visible={idx >= 1 && idx <= 3} open={open} />
      <MobileCustomerCard visible={idx >= 4 && idx <= 5} open={open} />
      <MobileVisit visible={idx === 5} />
      <MobileMonitoring visible={idx === 7} />

      {/* device → customer connection */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 400 800" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d="M372 378 C 320 390, 245 415, 195 436"
          stroke="#00D084"
          strokeWidth={2}
          strokeLinecap="round"
          style={{ pathLength: devConn, opacity: idx >= 3 && idx <= 4 ? 1 : 0, filter: 'drop-shadow(0 0 5px rgba(0,208,132,0.7))' }}
        />
      </svg>
    </div>
  );
}

/* -------------------------------- main section -------------------------------- */

export function HowItWorksSection() {
  const { runwayRef, idx, devConn, routeProg } = usePhase();

  return (
    <section id="how-it-works" className="relative scroll-mt-[72px] bg-surface-base">
      {/* header */}
      <Container className="relative z-10 pt-28 lg:pt-36">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="ONE TAP."
          titleAccent="EVERYONE KNOWS."
          description="Here Open connects the physical shop with the people who need to know its status."
        />
      </Container>

      {/* cinematic scroll runway */}
      <div ref={runwayRef} className="relative" style={{ height: '560vh' }}>
        <div className="sticky top-[72px] h-[calc(100svh-72px)] overflow-hidden">
          <DesktopStage idx={idx} devConn={devConn} routeProg={routeProg} />
          <MobileStage idx={idx} devConn={devConn} />
        </div>
      </div>

      {/* closing statement */}
      <Container className="relative z-10 py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55 }}
            className="font-body text-[0.62rem] font-bold tracking-[0.28em] text-[#00D084]"
          >
            THE RESULT
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-4 font-display font-extrabold text-[2rem] lg:text-[2.9rem] leading-tight tracking-[-0.02em] text-[#E8EDF2]"
          >
            FROM A SIMPLE STATUS
            <br />
            <span className="text-[#00D084] drop-shadow-[0_0_30px_#00D08450]">TO A SMARTER SHOP EXPERIENCE.</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl font-body text-[1rem] text-[#8A9BAE] leading-relaxed"
          >
            Here Open makes your shop visible when it matters.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            href="#contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#00D084] px-9 py-4 font-display font-bold text-[0.9rem] tracking-wide text-[#080C10] shadow-[0_0_36px_rgba(0,208,132,0.4)] transition-all duration-300 hover:brightness-[1.08]"
          >
            GET HERE OPEN <ArrowRight size={16} />
          </motion.a>
        </div>
      </Container>
    </section>
  );
}