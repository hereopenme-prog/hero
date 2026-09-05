'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, Phone, Navigation, Tag, Sparkles } from 'lucide-react';
import { BrowserExperience } from '@/components/ui/BrowserExperience';

const steps = [
  { num: '01', label: 'DISCOVER' },
  { num: '02', label: 'SEE STATUS' },
  { num: '03', label: 'CHECK DETAILS' },
  { num: '04', label: 'VISIT' },
];

function PanelBody({ i }: { i: number }) {
  if (i === 0) {
    return (
      <div>
        <div className="flex items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.03] px-4 py-3">
          <Search size={16} className="text-white/35" />
          <span className="font-body text-sm text-white/45">Search for shops near you…</span>
        </div>
        <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.03] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-display text-[1.05rem] font-bold tracking-tight text-[#E8EDF2]">
                  Sharma General Store
                </h4>
              </div>
              <p className="mt-1 font-body text-[13px] text-[#8A9BAE]">
                Convenience store · <span className="text-[#45F59A]">Near you</span>
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#45F59A]/30 bg-[#45F59A]/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#45F59A] animate-pulse" />
              <span className="font-body text-[11px] font-bold tracking-widest text-[#45F59A]">OPEN</span>
            </span>
          </div>
          <div className="mt-4 flex items-center gap-4 border-t border-white/[0.06] pt-3">
            <span className="flex items-center gap-1.5 font-body text-[12px] text-[#8A9BAE]">
              <MapPin size={12} className="text-white/35" /> 0.5 km
            </span>
            <span className="flex items-center gap-1.5 font-body text-[12px] text-[#8A9BAE]">
              <Clock size={12} className="text-white/35" /> Open since 9:00 AM
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (i === 1) {
    return (
      <div>
        <div className="rounded-xl border border-[#45F59A]/25 bg-[#45F59A]/[0.06] p-6 text-center">
          <span className="inline-flex items-center justify-center h-3 w-3 rounded-full bg-[#45F59A] animate-pulse shadow-[0_0_12px_#45F59A]" />
          <p className="mt-3 font-display text-[2.2rem] font-bold tracking-tight text-[#45F59A]">OPEN</p>
          <p className="font-display text-sm font-medium tracking-wide text-[#E8EDF2]">Open Now</p>
          <p className="mt-2 font-body text-[12px] text-[#8A9BAE]">
            Updated just now · straight from the business device
          </p>
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-5 py-3.5">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#45F59A]/20 bg-[#45F59A]/10 text-[#45F59A]">
            <Sparkles size={15} strokeWidth={1.75} />
          </span>
          <div className="flex-1">
            <p className="font-display text-[13px] font-bold text-[#E8EDF2]">Live status</p>
            <p className="font-body text-[12px] text-[#8A9BAE]">Refresh happens in real time — no manual updates.</p>
          </div>
          <span className="h-1.5 w-1.5 rounded-full bg-[#45F59A] animate-pulse" />
        </div>
      </div>
    );
  }

  if (i === 2) {
    return (
      <div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#45F59A]/30 bg-[#45F59A]/10 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#45F59A]" />
            <span className="font-body text-[11px] font-bold tracking-widest text-[#45F59A]">OPEN</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-white/[0.03] px-3 py-1.5">
            <Tag size={12} className="text-[#45F59A]" />
            <span className="font-body text-[11px] font-bold tracking-widest text-[#E8EDF2]">NEW OFFERS</span>
          </span>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[#45F59A]/20 bg-white/[0.03] p-4">
            <span className="font-display text-[1.4rem] font-bold tracking-tight text-[#45F59A]">10% OFF</span>
            <p className="mt-1 font-body text-[12px] text-[#8A9BAE]">Evening deals · on fresh produce</p>
          </div>
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
            <span className="font-display text-[1.4rem] font-bold tracking-tight text-[#E8EDF2]">New arrivals</span>
            <p className="mt-1 font-body text-[12px] text-[#8A9BAE]">Fresh stock available this week</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-5 py-3.5">
          <Clock size={15} className="text-white/35" />
          <p className="font-body text-[13px] text-[#A5B4C4]">
            Business hours: <span className="text-[#E8EDF2]">9:00 AM – 9:00 PM</span> · Available now
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="rounded-xl border border-[#45F59A]/25 bg-[#45F59A]/[0.06] p-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#45F59A] animate-pulse" />
          <p className="font-display text-[1.15rem] font-bold tracking-tight text-[#45F59A]">OPEN NOW</p>
        </div>
        <p className="mt-1.5 font-body text-[13px] text-[#A5B4C4]">
          Sharma General Store — 45, Market Road, Delhi
        </p>
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          <div className="flex items-center gap-2.5 rounded-lg border border-white/[0.07] bg-[#0B1012] px-3.5 py-2.5">
            <Clock size={15} className="text-[#45F59A]" />
            <span className="font-body text-[12px] font-medium text-[#E8EDF2]">Business Hours</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-lg border border-white/[0.07] bg-[#0B1012] px-3.5 py-2.5">
            <Navigation size={15} className="text-[#45F59A]" />
            <span className="font-body text-[12px] font-medium text-[#E8EDF2]">Directions</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-lg border border-white/[0.07] bg-[#0B1012] px-3.5 py-2.5">
            <Phone size={15} className="text-[#45F59A]" />
            <span className="font-body text-[12px] font-medium text-[#E8EDF2]">Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CustomerJourney() {
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx);
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0 },
    );
    const els = panelRefs.current;
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const urls = [
    'hereopen.in/discover',
    'hereopen.in/shop/sharma-general-store',
    'hereopen.in/shop/sharma-general-store/offers',
    'hereopen.in/shop/sharma-general-store/visit',
  ];

  const scrollToPanel = (i: number) => {
    const el = panelRefs.current[i];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const contentBlocks = [0, 1, 2, 3];

  return (
    <div className="mx-auto max-w-4xl">
      {/* Step indicator */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-y-3 lg:mb-14">
        {steps.map((step, i) => (
          <div key={step.num} className="flex items-center">
            <button
              type="button"
              onClick={() => scrollToPanel(i)}
              aria-current={active === i ? 'step' : undefined}
              className={`group flex items-center gap-2 rounded-full border px-3.5 py-2 transition-all duration-300 ${
                active === i
                  ? 'border-[#45F59A]/40 bg-[#45F59A]/10'
                  : 'border-white/[0.07] bg-white/[0.02] hover:border-white/15'
              }`}
            >
              <span
                className={`font-display text-[11px] font-bold tracking-wider transition-colors duration-300 ${
                  active === i ? 'text-[#45F59A]' : 'text-white/25 group-hover:text-white/45'
                }`}
              >
                {step.num}
              </span>
              <span
                className={`hidden sm:inline font-body text-[11px] font-semibold tracking-[0.14em] transition-colors duration-300 ${
                  active === i ? 'text-[#E8EDF2]' : 'text-white/35 group-hover:text-white/60'
                }`}
              >
                {step.label}
              </span>
            </button>
            {i < steps.length - 1 && <span className="mx-1 h-px w-2 bg-white/10 sm:w-6 lg:w-8" />}
          </div>
        ))}
      </div>

      {/* Panels */}
      <div className="space-y-16 lg:space-y-20">
        {contentBlocks.map((block, i) => (
          <motion.div
            key={block}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            data-idx={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:grid lg:grid-cols-[64px_minmax(0,1fr)] lg:items-center lg:gap-8"
          >
            {/* Rail node */}
            <div className="absolute -left-2 hidden top-1/2 -translate-y-1/2 lg:flex flex-col items-center">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full border font-display text-xs font-bold transition-colors duration-300 ${
                  active === i
                    ? 'border-[#45F59A]/50 bg-[#45F59A]/15 text-[#45F59A] shadow-[0_0_20px_rgba(69,245,154,0.3)]'
                    : 'border-white/[0.1] bg-[#0B1012] text-white/35'
                }`}
              >
                {steps[i].num}
              </span>
              {i < contentBlocks.length - 1 && (
                <span className="mt-2 w-px flex-1 min-h-[80px] bg-gradient-to-b from-white/15 to-white/[0.04]" />
              )}
            </div>

            <div className="lg:ml-2">
              <BrowserExperience
                index={steps[i].num}
                eyebrow={steps[i].label}
                url={urls[i]}
                active={active === i}
              >
                <PanelBody i={i} />
              </BrowserExperience>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}