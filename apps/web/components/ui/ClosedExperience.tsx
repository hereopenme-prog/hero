'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, type Variants } from 'framer-motion';
import { PowerOff, RefreshCw, Eye, ShieldAlert, Bell, ArrowDown } from 'lucide-react';
import { HereOpenDevice } from '@/components/ui/HereOpenDevice';

const closedSteps = [
  {
    num: '01',
    icon: <PowerOff size={17} strokeWidth={1.75} />,
    title: 'OWNER TAPS CLOSED',
    caption: 'The owner taps CLOSED on the device.',
  },
  {
    num: '02',
    icon: <RefreshCw size={17} strokeWidth={1.75} />,
    title: 'BUSINESS STATUS UPDATES',
    caption: 'The status switches to CLOSED across the platform.',
  },
  {
    num: '03',
    icon: <Eye size={17} strokeWidth={1.75} />,
    title: 'CUSTOMERS SEE CLOSED',
    caption: 'Customers see the business as CLOSED in real time.',
  },
  {
    num: '04',
    icon: <ShieldAlert size={17} strokeWidth={1.75} />,
    title: 'MONITORING & SAFETY ACTIVATE',
    caption: 'Monitoring and safety features activate where configured.',
  },
  {
    num: '05',
    icon: <Bell size={17} strokeWidth={1.75} />,
    title: 'ALERTS CAN BE GENERATED',
    caption: 'Alerts can be generated for supported events.',
  },
];

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function ClosedTimeline() {
  return (
    <>
      {/* Desktop horizontal */}
      <div className="hidden lg:block relative mx-auto w-full max-w-4xl">
        {/* Progress line */}
        <div className="absolute left-[6%] right-[6%] top-[23px] h-px bg-white/[0.07]" />
        <motion.div
          aria-hidden
          className="absolute left-[6%] right-[6%] top-[23px] h-px origin-left bg-gradient-to-r from-[#45F59A]/10 via-[#45F59A] to-[#45F59A]/10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ staggerChildren: 0.12 }}
          className="relative grid grid-cols-5 gap-5"
        >
          {closedSteps.map((step) => (
            <motion.div key={step.num} variants={stepVariants} className="flex flex-col items-center text-center">
              <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#45F59A]/25 bg-[#0B1012] text-[#45F59A] shadow-[0_0_0_4px_rgba(5,7,8,0.9),0_8px_24px_rgba(0,0,0,0.45)]">
                {step.icon}
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-white/10 bg-[#0B1012]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#45F59A]" />
                </span>
              </div>
              <span className="font-body text-[10px] font-bold tracking-[0.24em] text-white/30">
                STEP {step.num}
              </span>
              <h4 className="mt-1.5 font-display text-[15px] font-bold tracking-tight text-[#E8EDF2] leading-tight">
                {step.title}
              </h4>
              <p className="mt-1.5 font-body text-[13px] text-[#8A9BAE] leading-relaxed">{step.caption}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile / tablet vertical */}
      <div className="lg:hidden mx-auto max-w-md">
        <div className="relative">
          <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/12 to-transparent" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ staggerChildren: 0.1 }}
            className="space-y-5"
          >
            {closedSteps.map((step, i) => (
              <motion.div key={step.num} variants={stepVariants} className="relative flex items-start gap-5">
                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#45F59A]/25 bg-[#0B1012] text-[#45F59A] shadow-[0_0_0_4px_rgba(5,7,8,0.9)]">
                  {step.icon}
                </div>
                {i < closedSteps.length - 1 && (
                  <div className="absolute -bottom-4 left-[51px] z-10 text-[#45F59A]">
                    <ArrowDown size={13} />
                  </div>
                )}
                <div className="pt-1">
                  <span className="font-body text-[10px] font-bold tracking-[0.24em] text-white/30">
                    STEP {step.num}
                  </span>
                  <h4 className="mt-1 font-display text-[15px] font-bold tracking-tight text-[#E8EDF2] leading-tight">
                    {step.title}
                  </h4>
                  <p className="mt-1 font-body text-[13px] text-[#8A9BAE] leading-relaxed">{step.caption}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export function ClosedExperience() {
  const deviceRef = useRef<HTMLDivElement>(null);
  const inView = useInView(deviceRef, { once: true, amount: 0.4 });
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setClosed(true), 1100);
    return () => clearTimeout(t);
  }, [inView]);

  const state = closed ? 'closed' : 'open';

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2.5 rounded-full border border-[#FF6B6B]/25 bg-[#FF6B6B]/10 px-4 py-1.5">
          <span className="status-dot-pulse inline-block h-1.5 w-1.5 rounded-full bg-[#FF6B6B]" />
          <span className="font-body text-xs font-semibold tracking-wide text-[#FFB3B3]">
            WHEN A BUSINESS CLOSES
          </span>
        </span>
        <h3 className="mt-6 font-display text-[2rem] font-bold tracking-tight text-[#E8EDF2] leading-tight sm:text-[2.4rem] lg:text-[3rem]">
          THE CLOSED EXPERIENCE
        </h3>
        <p className="mt-4 font-body text-lg text-[#8A9BAE] leading-relaxed">
          One simple action changes the business state everywhere.
        </p>
      </motion.div>

      {/* Body */}
      <div className="mx-auto mt-14 max-w-6xl lg:mt-16 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-14">
        <div>
          <ClosedTimeline />
        </div>

        {/* Device */}
        <div ref={deviceRef} className="relative mt-14 flex flex-col items-center lg:mt-0">
          <div
            aria-hidden
            className="absolute h-[300px] w-[300px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(255,107,107,0.07) 0%, transparent 55%)' }}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={state}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <HereOpenDevice size="lg" status={state} showRealtime scan={false} float={false} />
            </motion.div>
          </AnimatePresence>

          {/* State transition indicator */}
          <div className="mt-9 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${state === 'open' ? 'bg-[#45F59A] animate-pulse' : 'bg-white/15'}`} />
              <span className={`font-body text-xs font-semibold tracking-wider ${state === 'open' ? 'text-[#45F59A]' : 'text-white/30'}`}>
                OPEN
              </span>
            </div>
            <span className="flex-1 h-px bg-gradient-to-r from-[#45F59A]/40 to-[#FF6B6B]/40" />
            <div className="flex items-center gap-2">
              <span className="font-body text-xs font-semibold tracking-wider text-white/30">CLOSED</span>
              <span className={`h-1.5 w-1.5 rounded-full ${state === 'closed' ? 'bg-[#FF6B6B] animate-pulse' : 'bg-white/15'}`} />
            </div>
          </div>

          <p className="mt-4 max-w-[280px] text-center font-body text-[12px] text-[#5C6B7A] leading-relaxed">
            Monitoring and alerting are designed to be configurable and supported depending on configuration.
          </p>
        </div>
      </div>
    </div>
  );
}