'use client';

import { useState, type ReactNode, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Store,
  Users,
  Search,
  Tag,
  MapPin,
  Navigation,
  ArrowRight,
  Shield,
  Flame,
  Wind,
  Thermometer,
  Gauge,
  Bell,
} from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

/* ---------------------------------- shared atoms ---------------------------------- */

function DevicePane() {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <p className="font-display font-bold text-[0.72rem] tracking-[0.25em] text-[#E8EDF2] mb-6">HERE OPEN DEVICE</p>
      <div className="relative">
        <div className="absolute inset-4 rounded-[28px] bg-[#00D08430] blur-2xl" aria-hidden="true" />
        <motion.div
          animate={{ scale: [1, 1.015, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-52 h-64 rounded-[28px] border border-[#00D08440] bg-gradient-to-b from-[#0F1923] to-[#0A0F14] flex flex-col items-center justify-center shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
        >
          {/* antenna */}
          <div className="absolute -top-6 w-1.5 h-6 bg-[#1C2A38] rounded-t" />
          <div className="absolute -top-9 w-5 h-3 bg-[#00D08460] rounded-sm" />
          {/* face */}
          <div className="status-dot-pulse w-3 h-3 rounded-full bg-[#00D084]" />
          <span className="mt-4 font-display font-bold text-[1.05rem] text-[#E8EDF2]">HERE OPEN</span>
          <span className="mt-1 font-body text-[0.65rem] tracking-[0.2em] text-[#6B7C8E]">SMART SHOP DEVICE</span>
        </motion.div>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#00D08440] bg-[#00D08414] px-4 py-1.5 font-body font-semibold text-[0.75rem] text-[#00D084]">
        <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
        CONNECTED
      </span>
    </div>
  );
}

function ShopSetupPane() {
  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-6">
        <div className="flex items-center justify-between mb-5">
          <p className="font-display font-semibold text-[0.8rem] text-[#E8EDF2] tracking-wide">SHOP PROFILE</p>
          <span className="rounded-full border border-[#00D08440] bg-[#00D08414] px-3 py-0.5 font-body text-[0.6rem] font-bold text-[#00D084]">
            OWNER VIEW
          </span>
        </div>
        <div className="flex items-center gap-4 mb-6">
          <div
            className="flex items-center justify-center w-14 h-14 rounded-2xl font-display font-bold text-[#080C10]"
            style={{ background: 'linear-gradient(135deg, #00D084, #00B4D8)' }}
          >
            S
          </div>
          <div>
            <p className="font-display font-semibold text-[0.95rem] text-[#E8EDF2]">Sharma General Store</p>
            <p className="font-body text-[0.75rem] text-[#6B7C8E]">Grocery · New Delhi</p>
          </div>
        </div>
        {[
          { label: 'SHOP NAME', value: 'Sharma General Store' },
          { label: 'BUSINESS CATEGORY', value: 'Grocery' },
          { label: 'LOCATION', value: 'New Delhi' },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between border-b border-[#1C2A38] py-3 last:border-b-0">
            <span className="font-body text-[0.65rem] tracking-wider text-[#6B7C8E]">{row.label}</span>
            <span className="font-body font-medium text-[0.8rem] text-[#E8EDF2]">{row.value}</span>
          </div>
        ))}
        <div className="mt-4 flex items-center justify-between">
          <span className="font-body text-[0.65rem] tracking-wider text-[#6B7C8E]">STATUS</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00D08440] bg-[#00D08414] px-3 py-0.5 font-body text-[0.7rem] font-bold text-[#00D084]">
            <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
            READY
          </span>
        </div>
      </div>
    </div>
  );
}

function StatusPill({ open }: { open: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-display font-bold text-[0.65rem] tracking-widest ${
        open ? 'bg-[#00D084] text-[#080C10] shadow-[0_0_20px_#00D08450]' : 'bg-[#FF444410] text-[#FF6B6B] border border-[#FF444440]'
      }`}
    >
      <span className={`inline-block w-1.5 h-1.5 rounded-full ${open ? 'bg-[#080C10]' : 'bg-[#FF6B6B]'}`} />
      {open ? 'OPEN' : 'CLOSED'}
    </span>
  );
}

function StatusControlPane({ open, onToggle }: { open: boolean; onToggle: (v: boolean) => void }) {
  const [updatedAt, setUpdatedAt] = useState(0);
  const change = (v: boolean) => (e: MouseEvent<HTMLButtonElement>) => {
    setUpdatedAt(Date.now());
    onToggle(v);
  };
  return (
    <div className="mx-auto max-w-md">
      <motion.div
        animate={{ boxShadow: open ? '0 0 60px rgba(0,208,132,0.18)' : '0 0 44px rgba(255,68,68,0.10)' }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-6 lg:p-7"
      >
        <div className="flex items-center justify-between mb-5">
          <p className="font-display font-semibold text-[0.8rem] text-[#E8EDF2] tracking-wide">HERE OPEN</p>
          <span className="font-body text-[0.65rem] tracking-wider text-[#6B7C8E]">SHOP STATUS</span>
        </div>

        <motion.div
          animate={{ backgroundColor: open ? 'rgba(0,208,132,0.08)' : 'rgba(255,68,68,0.08)' }}
          transition={{ duration: 0.45 }}
          className="rounded-xl px-6 py-8 text-center mb-5"
        >
          <motion.p
            className="font-display font-extrabold text-4xl tracking-tight"
            animate={{ color: open ? '#00D084' : '#FF6B6B' }}
            transition={{ duration: 0.4 }}
          >
            {open ? 'OPEN' : 'CLOSED'}
          </motion.p>
          <p className="mt-3 flex items-center justify-center gap-2 font-body text-[0.8rem] text-[#A5B4C4]">
            <span className={`status-dot-pulse inline-block w-1.5 h-1.5 rounded-full ${open ? 'bg-[#00D084]' : 'bg-[#FF6B6B]'}`} />
            {open ? 'LIVE' : 'SECURITY MODE'}
          </p>
          {open ? (
            <p className="mt-2 font-body text-[0.78rem] text-[#00D084]">CUSTOMERS CAN SEE YOUR SHOP IS OPEN</p>
          ) : (
            <>
              <p className="mt-2 font-body text-[0.78rem] text-[#FF6B6B]">MONITORING ACTIVE</p>
              <p className="mt-3 font-body text-[0.7rem] text-[#6B7C8E] leading-relaxed">
                Supported monitoring features can remain active while the shop is closed.
              </p>
            </>
          )}
        </motion.div>

        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={change(true)}
            aria-pressed={open}
            className={`rounded-xl px-6 py-3 font-display font-bold text-[0.85rem] tracking-wide transition-all duration-300 ${
              open ? 'bg-[#00D084] text-[#080C10] shadow-[0_0_24px_#00D08440]' : 'border border-[#1C2A38] text-[#6B7C8E] hover:border-[#00D08450]'
            }`}
          >
            OPEN
          </button>
          <button
            type="button"
            onClick={change(false)}
            aria-pressed={!open}
            className={`rounded-xl px-6 py-3 font-display font-bold text-[0.85rem] tracking-wide transition-all duration-300 ${
              !open ? 'bg-[#FF4444] text-white shadow-[0_0_24px_#FF444450]' : 'border border-[#1C2A38] text-[#6B7C8E] hover:border-[#FF444460]'
            }`}
          >
            CLOSED
          </button>
        </div>

        <div className="mt-5 flex items-center justify-between font-body text-[0.7rem] text-[#3D4F5E] px-2">
          <span>Last Updated</span>
          <motion.span
            key={updatedAt}
            initial={{ color: '#00D084', y: -2 }}
            animate={{ color: '#3D4F5E', y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Just now
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}

function ShopListingPane() {
  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="font-body text-[0.65rem] text-[#6B7C8E] uppercase tracking-wider mb-1">Nearby · 500m</p>
            <p className="font-display font-bold text-[1.1rem] text-[#E8EDF2]">Sharma General Store</p>
          </div>
          <StatusPill open />
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#00D084] px-2.5 py-1 font-body font-bold text-[0.65rem] text-[#080C10]">
            <Tag size={10} /> 10% OFF
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#00D08414] border border-[#00D08440] px-2.5 py-1 font-body font-bold text-[0.65rem] text-[#00D084]">
            NEW ARRIVALS
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#0F1923] border border-[#1C2A38] px-2.5 py-1 font-body font-bold text-[0.65rem] text-[#8A9BAE]">
            <Bell size={10} /> 42 FOLLOWERS
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <span className="flex items-center justify-center gap-2 rounded-xl border border-[#1C2A38] bg-[#080C10] px-4 py-3 font-body font-semibold text-[0.78rem] text-[#E8EDF2] hover:border-[#00D08440]">
            <Search size={13} className="text-[#00D084]" /> View Shop
          </span>
          <span className="flex items-center justify-center gap-2 rounded-xl border border-[#1C2A38] bg-[#080C10] px-4 py-3 font-body font-semibold text-[0.78rem] text-[#E8EDF2] hover:border-[#00D08440]">
            <Navigation size={13} className="text-[#00D084]" /> Directions
          </span>
        </div>
      </div>
    </div>
  );
}

function DiscoverPane() {
  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-6">
        <div className="flex items-center gap-3 rounded-xl border border-[#1C2A38] bg-[#080C10] px-4 py-3 mb-5">
          <Search size={14} className="text-[#00D084]" />
          <span className="font-body text-[0.8rem] text-[#3D4F5E]">Search shops, categories…</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {['Nearby Shops', 'Categories', 'Offers', 'Open Now'].map((c) => (
            <span key={c} className="rounded-full border border-[#00D08440] bg-[#00D08414] px-3 py-1 font-body text-[0.7rem] font-semibold text-[#00D084]">
              {c}
            </span>
          ))}
        </div>
        <div className="space-y-2.5">
          {[
            { name: 'Sharma General Store', sub: 'Grocery · 500m', st: 'OPEN' },
            { name: 'Green Leaf Pharmacy', sub: 'Medical · 800m', st: 'OPEN' },
            { name: 'First Cup Café', sub: 'Café · 1.2km', st: 'CLOSED' },
          ].map((s) => (
            <div key={s.name} className="flex items-center justify-between rounded-xl border border-[#1C2A38] bg-[#080C10] px-4 py-3">
              <div>
                <p className="font-body font-medium text-[0.82rem] text-[#E8EDF2]">{s.name}</p>
                <p className="font-body text-[0.68rem] text-[#6B7C8E]">{s.sub}</p>
              </div>
              <span className={`font-display font-bold text-[0.68rem] tracking-wider ${s.st === 'OPEN' ? 'text-[#00D084]' : 'text-[#6B7C8E]'}`}>
                ● {s.st}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckPane() {
  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-2xl border border-[#00D08440] bg-[#0F1923] p-6 text-center shadow-[0_0_44px_rgba(0,208,132,0.14)]">
        <p className="font-body text-[0.68rem] text-[#6B7C8E] uppercase tracking-wider mb-2">Your destination</p>
        <p className="font-display font-bold text-[1.3rem] text-[#E8EDF2]">Sharma General Store</p>
        <div className="my-6 flex items-center justify-center gap-2">
          <span className="status-dot-pulse inline-block w-2.5 h-2.5 rounded-full bg-[#00D084]" />
          <motion.span
            className="font-display font-extrabold text-5xl tracking-tight text-[#00D084] drop-shadow-[0_0_24px_#00D08460]"
            animate={{ opacity: [1, 0.75, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            OPEN
          </motion.span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00D08440] bg-[#00D08414] px-4 py-1.5 font-body font-semibold text-[0.78rem] text-[#00D084]">
          <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
          Open Now
        </span>
      </div>
    </div>
  );
}

function ExplorePane() {
  const tabs = ['Offers', 'Announcements', 'New Arrivals', 'Shop Info'];
  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-6">
        <div className="flex gap-1.5 mb-5 flex-wrap">
          {tabs.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full bg-[#00D084] px-3.5 py-1 font-body text-[0.7rem] font-bold text-[#080C10]">
              {t}
            </span>
          ))}
          <span className="rounded-full border border-[#1C2A38] px-3.5 py-1 font-body text-[0.7rem] font-medium text-[#6B7C8E]">
            Shop Info
          </span>
        </div>
        <div className="space-y-2.5">
          {[
            { icon: <Tag size={13} className="text-[#00D084]" />, label: '10% OFF on all groceries this weekend' },
            { icon: <Bell size={13} className="text-[#00D084]" />, label: 'Fresh vegetables arriving every morning' },
            { icon: <MapPin size={13} className="text-[#00D084]" />, label: 'New stock of daily essentials added' },
          ].map((i) => (
            <div key={i.label} className="flex items-center gap-3 rounded-xl border border-[#1C2A38] bg-[#080C10] px-4 py-3">
              {i.icon}
              <span className="font-body text-[0.78rem] text-[#A5B4C4]">{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DecidePane() {
  return (
    <div className="mx-auto max-w-md text-center">
      <div className="rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-6 mb-4">
        <StatusPill open />
        <p className="mt-3 font-display font-bold text-[1.1rem] text-[#E8EDF2]">Sharma General Store</p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#00D084] px-2.5 py-1 font-body font-bold text-[0.65rem] text-[#080C10]">
            <Tag size={10} /> 10% OFF
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#00D08414] border border-[#00D08440] px-2.5 py-1 font-body font-bold text-[0.65rem] text-[#00D084]">
            OPEN NOW
          </span>
        </div>
        <span className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#00D084] px-8 py-3.5 font-display font-bold text-[0.85rem] tracking-wide text-[#080C10] shadow-[0_0_28px_#00D08440]">
          VISIT SHOP <ArrowRight size={15} />
        </span>
      </div>
      <p className="font-display font-semibold text-[0.95rem] tracking-wide text-[#00D084]">KNOW BEFORE YOU GO.</p>
    </div>
  );
}

/* ---------------------------------- journeys ---------------------------------- */

interface Step {
  num: string;
  title: string;
  desc: string;
  visual: ReactNode;
}

function JourneyTabs({ active, onChange }: { active: 'business' | 'customer'; onChange: (t: 'business' | 'customer') => void }) {
  const tabs = [
    { id: 'business' as const, icon: <Store size={16} strokeWidth={1.6} />, label: 'FOR BUSINESS OWNERS' },
    { id: 'customer' as const, icon: <Users size={16} strokeWidth={1.6} />, label: 'FOR CUSTOMERS' },
  ];
  return (
    <div className="mx-auto mb-12 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-3">
      {tabs.map((t) => {
        const isActive = active === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onChange(t.id)}
            aria-pressed={isActive}
            className={`flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 font-display font-bold text-[0.85rem] tracking-wide transition-all duration-300 ${
              isActive
                ? 'bg-[#00D084] text-[#080C10] shadow-[0_0_32px_#00D08440]'
                : 'border border-[#1C2A38] bg-[#0F1923] text-[#A5B4C4] hover:border-[#00D08440] hover:text-[#E8EDF2]'
            }`}
          >
            {t.icon}
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

function StepList({ steps, active, onSelect }: { steps: Step[]; active: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex flex-col gap-3">
      {steps.map((s, i) => {
        const isActive = active === i;
        return (
          <button
            key={s.num}
            type="button"
            onClick={() => onSelect(i)}
            className={`group text-left rounded-2xl border p-5 transition-all duration-300 ${
              isActive
                ? 'border-[#00D08450] bg-[#0F1923] shadow-[0_0_28px_rgba(0,208,132,0.10)]'
                : 'border-[#1C2A38] bg-[#0F1923]/60 hover:border-[#00D08430]'
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl font-display font-bold text-[0.8rem] transition-colors duration-300 ${
                  isActive ? 'bg-[#00D084] text-[#080C10]' : 'bg-[#00D08414] text-[#00D084]'
                }`}
              >
                {s.num}
              </span>
              <div>
                <h4 className={`font-display font-semibold text-[0.98rem] transition-colors duration-300 ${isActive ? 'text-[#E8EDF2]' : 'text-[#A5B4C4] group-hover:text-[#E8EDF2]'}`}>
                  {s.title}
                </h4>
                <p className="mt-0.5 font-body text-[0.8rem] text-[#6B7C8E] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function JourneyVisual({ step }: { step: Step }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#00D08412_0%,transparent_65%)] pointer-events-none" />
      <AnimatePresence mode="wait">
        <motion.div
          key={step.num}
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {step.visual}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------------------------------- owner vs customer demo ---------------------------------- */

function OneStatusDemo() {
  const [open, setOpen] = useState(true);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {/* Owner control */}
      <motion.div
        animate={{ borderColor: open ? 'rgba(0,208,132,0.4)' : 'rgba(255,68,68,0.4)' }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border bg-[#0F1923] p-6"
      >
        <div className="flex items-center justify-between mb-5">
          <p className="font-display font-semibold text-[0.82rem] text-[#E8EDF2]">BUSINESS OWNER</p>
          <span className="rounded-full border border-[#1C2A38] bg-[#080C10] px-2.5 py-0.5 font-body text-[0.6rem] font-bold text-[#6B7C8E]">
            CONTROL
          </span>
        </div>
        <div className="flex items-center justify-center gap-3 mb-5">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-pressed={open}
            className={`rounded-xl px-6 py-3 font-display font-bold text-[0.85rem] transition-all duration-300 ${
              open ? 'bg-[#00D084] text-[#080C10] shadow-[0_0_20px_#00D08440]' : 'border border-[#1C2A38] text-[#6B7C8E]'
            }`}
          >
            OPEN
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-pressed={!open}
            className={`rounded-xl px-6 py-3 font-display font-bold text-[0.85rem] transition-all duration-300 ${
              !open ? 'bg-[#FF4444] text-white shadow-[0_0_20px_#FF444450]' : 'border border-[#1C2A38] text-[#6B7C8E]'
            }`}
          >
            CLOSED
          </button>
        </div>
        <p className="flex items-center justify-center gap-2 font-body text-[0.78rem] text-[#A5B4C4]">
          <span className={`status-dot-pulse inline-block w-1.5 h-1.5 rounded-full ${open ? 'bg-[#00D084]' : 'bg-[#FF6B6B]'}`} />
          Status: <span className={open ? 'text-[#00D084] font-semibold' : 'text-[#FF6B6B] font-semibold'}>
            {open ? 'SHOP OPEN' : 'SHOP CLOSED'}
          </span>
        </p>
      </motion.div>

      {/* Customer view */}
      <motion.div
        animate={{ borderColor: open ? 'rgba(0,208,132,0.4)' : 'rgba(255,68,68,0.4)' }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border bg-[#0F1923] p-6"
      >
        <div className="flex items-center justify-between mb-5">
          <p className="font-display font-semibold text-[0.82rem] text-[#E8EDF2]">CUSTOMER VIEW</p>
          <span className="rounded-full border border-[#1C2A38] bg-[#080C10] px-2.5 py-0.5 font-body text-[0.6rem] font-bold text-[#6B7C8E]">
            PLATFORM
          </span>
        </div>
        <p className="font-display font-bold text-[1.05rem] text-[#E8EDF2] mb-1">Sharma General Store</p>
        <div className="mb-4 flex items-center gap-2">
          <StatusPill open />
          {open && (
            <motion.span initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className="font-body text-[0.75rem] text-[#00D084]">
              Open Now
            </motion.span>
          )}
          {!open && (
            <motion.span initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className="font-body text-[0.75rem] text-[#6B7C8E]">
              Last updated just now
            </motion.span>
          )}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={open ? 'open' : 'closed'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap gap-2"
          >
            {open ? (
              <>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#00D084] px-2.5 py-1 font-body font-bold text-[0.65rem] text-[#080C10]">
                  <Tag size={10} /> 10% OFF
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#00D08414] border border-[#00D08440] px-2.5 py-1 font-body font-bold text-[0.65rem] text-[#00D084]">
                  NEW ARRIVALS
                </span>
              </>
            ) : (
              <span className="rounded-full border border-[#FF444440] bg-[#FF444410] px-2.5 py-1 font-body font-bold text-[0.65rem] text-[#FF6B6B]">
                SECURITY MODE
              </span>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/* ---------------------------------- main section ---------------------------------- */

export function HowItWorksSection() {
  const [tab, setTab] = useState<'business' | 'customer'>('business');
  const [step, setStep] = useState(0);
  const [statusOpen, setStatusOpen] = useState(true);

  const businessSteps: Step[] = [
    {
      num: '01',
      title: 'Get Your Here Open Device',
      desc: 'Get the Here Open device and the software/service required to connect your business to the platform.',
      visual: <DevicePane />,
    },
    {
      num: '02',
      title: 'Set Up Your Shop',
      desc: 'Set up your shop information so customers can discover the business and its current information.',
      visual: <ShopSetupPane />,
    },
    {
      num: '03',
      title: 'Update Your Status',
      desc: 'One tap sets OPEN or CLOSED. Supported monitoring features can remain active while the shop is closed.',
      visual: <StatusControlPane open={statusOpen} onToggle={setStatusOpen} />,
    },
    {
      num: '04',
      title: 'Connect With Customers',
      desc: 'Customers can see your shop status and available updates before deciding to visit.',
      visual: <ShopListingPane />,
    },
  ];

  const customerSteps: Step[] = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Search or discover participating shops through the Here Open platform.',
      visual: <DiscoverPane />,
    },
    {
      num: '02',
      title: 'Check',
      desc: 'See whether the shop is open — before making the trip.',
      visual: <CheckPane />,
    },
    {
      num: '03',
      title: 'Explore',
      desc: 'Browse offers, announcements, new arrivals and shop information.',
      visual: <ExplorePane />,
    },
    {
      num: '04',
      title: 'Decide',
      desc: 'Know whether it makes sense to visit — and go with confidence.',
      visual: <DecidePane />,
    },
  ];

  const steps = tab === 'business' ? businessSteps : customerSteps;

  return (
    <Section id="how-it-works" className="bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.05)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="FROM ONE TAP"
          titleAccent="TO CUSTOMER CONFIDENCE."
          description="Here Open connects your shop, your connected device and your customers so everyone knows what's happening in real time."
        />

        <JourneyTabs active={tab} onChange={(t) => { setTab(t); setStep(0); }} />

        {/* Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start max-w-6xl mx-auto">
          <StepList steps={steps} active={step} onSelect={setStep} />
          <JourneyVisual step={steps[step]} />
        </div>

        {/* Before vs After */}
        <div className="mt-24 max-w-6xl mx-auto">
          <h3 className="text-center font-display font-bold text-[1.5rem] lg:text-[2rem] tracking-tight text-[#E8EDF2] mb-10">
            A SMALL CHANGE. <span className="text-[#00D084]">A BIG DIFFERENCE.</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Without */}
            <div className="rounded-3xl border border-[#2A2E34] bg-[#101317] p-8">
              <p className="font-display font-bold text-[0.75rem] tracking-[0.25em] text-[#8A9BAE] mb-6">WITHOUT HERE OPEN</p>
              <ul className="space-y-4">
                {['“Is the shop open?”', 'Travels to the shop', 'Shop is closed', 'Wasted time and effort'].map((t, i) => (
                  <li key={t} className="flex items-center gap-4">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[#3A3F46] font-body text-[0.62rem] text-[#8A9BAE]">
                      {i + 1}
                    </span>
                    <span className={i === 3 ? 'font-body text-[0.85rem] font-semibold text-[#FF6B6B]' : 'font-body text-[0.85rem] text-[#C7CDD3]'}>
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* With */}
            <div className="relative overflow-hidden rounded-3xl border border-[#00D08440] bg-[#0F1923] p-8">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D08460] to-transparent" />
              <p className="font-display font-bold text-[0.75rem] tracking-[0.25em] text-[#00D084] mb-6">WITH HERE OPEN</p>
              <ul className="space-y-4">
                {['“Is the shop open?”', 'Checks shop status', 'Sees: ● OPEN', 'Plans the visit'].map((t, i) => (
                  <li key={t} className="flex items-center gap-4">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#00D084] font-body text-[0.62rem] font-bold text-[#080C10]">
                      {i + 1}
                    </span>
                    <span className={i === 3 ? 'font-body text-[0.85rem] font-semibold text-[#00D084]' : 'font-body text-[0.85rem] text-[#C7CDD3]'}>
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* One Status demo */}
        <div className="mt-24">
          <div className="mb-8 text-center">
            <h3 className="font-display font-bold text-[1.5rem] lg:text-[2rem] tracking-tight text-[#E8EDF2]">
              ONE STATUS. <span className="text-[#00D084]">EVERYONE KNOWS.</span>
            </h3>
            <span className="mt-3 inline-block rounded-full border border-[#FFD16640] bg-[#FFD16614] px-3 py-1 font-body text-[0.6rem] font-bold tracking-widest text-[#FFD166]">
              INTERACTIVE DEMO — FRONTEND ONLY
            </span>
          </div>
          <OneStatusDemo />
        </div>

        {/* Security & safety */}
        <div className="mt-24 max-w-6xl mx-auto">
          <h3 className="text-center font-display font-bold text-[1.5rem] lg:text-[2rem] tracking-tight text-[#E8EDF2] mb-3">
            WHEN YOUR SHOP CLOSES,
            <br />
            <span className="text-[#00D084]">HERE OPEN DOESN&apos;T JUST DISAPPEAR.</span>
          </h3>
          <div className="mx-auto mt-8 mb-6 flex flex-col items-center gap-1 font-body text-[0.8rem] text-[#6B7C8E]">
            <span className="rounded-full border border-[#1C2A38] bg-[#0F1923] px-4 py-1.5">SHOP CLOSED</span>
            <span className="text-[#00D084]"><ArrowRight size={14} className="rotate-90" /></span>
            <span className="rounded-full border border-[#00D08440] bg-[#00D08414] px-4 py-1.5 text-[#00D084]">MONITORING</span>
            <span className="text-[#00D084]"><ArrowRight size={14} className="rotate-90" /></span>
            <span className="rounded-full border border-[#FFD16640] bg-[#FFD16614] px-4 py-1.5 text-[#FFD166]">ALERT</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { icon: <Shield size={16} className="text-[#00D084]" strokeWidth={1.6} />, label: 'SECURITY' },
              { icon: <Flame size={16} className="text-[#00D084]" strokeWidth={1.6} />, label: 'FIRE' },
              { icon: <Wind size={16} className="text-[#00D084]" strokeWidth={1.6} />, label: 'SMOKE' },
              { icon: <Thermometer size={16} className="text-[#00D084]" strokeWidth={1.6} />, label: 'TEMPERATURE' },
              { icon: <Gauge size={16} className="text-[#00D084]" strokeWidth={1.6} />, label: 'DEVICE STATUS' },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-2.5 rounded-xl border border-[#1C2A38] bg-[#0F1923] px-4 py-3.5">
                {c.icon}
                <span className="font-body text-[0.7rem] font-semibold tracking-wider text-[#A5B4C4]">{c.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center font-body text-[0.78rem] text-[#3D4F5E] max-w-2xl mx-auto">
            The platform can support monitoring and alerts based on the connected hardware and configured features.
          </p>
        </div>

        {/* Who benefits */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: <Store size={18} className="text-[#00D084]" strokeWidth={1.6} />,
              title: 'BUSINESS OWNER',
              points: ['Know your shop status', 'Connect with customers', 'Share updates'],
            },
            {
              icon: <Users size={18} className="text-[#00D084]" strokeWidth={1.6} />,
              title: 'CUSTOMER',
              points: ['Know before you go', 'Avoid unnecessary trips', 'Discover shop information'],
            },
            {
              icon: <Cpu size={18} className="text-[#00D084]" strokeWidth={1.6} />,
              title: 'SYSTEM',
              points: ['Connected device', 'Real-time status', 'Supported safety monitoring'],
            },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-7">
              <div
                className="mb-5 flex items-center justify-center"
                style={{ background: '#00D0841A', borderRadius: 11, padding: 10, width: 40, height: 40 }}
              >
                {b.icon}
              </div>
              <h4 className="font-display font-bold text-[0.82rem] tracking-[0.2em] text-[#E8EDF2] mb-4">{b.title}</h4>
              <ul className="space-y-2">
                {b.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 font-body text-[0.82rem] text-[#8A9BAE]">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00D084]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Final statement */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <p className="font-display font-bold text-[1.6rem] lg:text-[2.1rem] tracking-tight leading-snug text-[#E8EDF2]">
            FROM THE MOMENT A SHOP OPENS
            <br />
            TO THE MOMENT A CUSTOMER WALKS IN,
          </p>
          <p className="mt-3 font-display font-bold text-[1.3rem] lg:text-[1.7rem] tracking-tight text-[#00D084] drop-shadow-[0_0_24px_#00D08440]">
            HERE OPEN KEEPS EVERYONE INFORMED.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#00D084] px-8 py-4 font-display font-bold text-[0.9rem] tracking-wide text-[#080C10] shadow-[0_0_36px_#00D08440] transition-all duration-300 hover:brightness-[1.08]"
          >
            GET HERE OPEN <ArrowRight size={16} />
          </a>
        </div>
      </Container>
    </Section>
  );
}
