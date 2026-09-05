'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { AlertTriangle, ArrowRight, Bell, Cpu, Flame, Lock, Shield, Thermometer, Wind } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

type Step = 0 | 1 | 2 | 3;

const STORY = ['SHOP CLOSES', 'DEVICE CONNECTED', 'MONITORING ACTIVE', 'EVENT DETECTED', 'ALERT', 'OWNER NOTIFIED'];

const INDICATORS: { key: string; icon: ReactNode; label: string; pos: string }[] = [
  { key: 'fire', icon: <Flame size={11} />, label: 'FIRE', pos: 'left-1/2 top-[3%] -translate-x-1/2' },
  { key: 'security', icon: <Shield size={11} />, label: 'SECURITY', pos: 'left-[6%] top-[24%]' },
  { key: 'smoke', icon: <Wind size={11} />, label: 'SMOKE', pos: 'right-[6%] top-[24%]' },
  { key: 'temperature', icon: <Thermometer size={11} />, label: 'TEMPERATURE', pos: 'left-[5%] top-[66%]' },
  { key: 'device', icon: <Cpu size={11} />, label: 'DEVICE STATUS', pos: 'right-[5%] top-[66%]' },
];

function useEventSequence() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sceneRef, { once: true, amount: 0.4 });
  const [step, setStep] = useState<Step>(0);
  const [runId, setRunId] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    setRunId((r) => r + 1);
  }, [inView]);

  useEffect(() => {
    if (runId === 0) return;
    setStep(0);
    const t1 = window.setTimeout(() => setStep(1), 1400);
    const t2 = window.setTimeout(() => setStep(2), 3400);
    const t3 = window.setTimeout(() => setStep(3), 5200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [runId]);

  const replay = () => setRunId((r) => r + 1);
  return { sceneRef, step, replay };
}

function IndicatorDot({ active, tone = 'green' }: { active: boolean; tone?: 'green' | 'amber' }) {
  return (
    <motion.span
      animate={{
        scale: active ? 1 : 0.9,
        backgroundColor: tone === 'amber' ? '#FFD166' : active ? '#00D084' : '#1F2C39',
        boxShadow: active ? (tone === 'amber' ? '0 0 10px rgba(255,209,102,0.8)' : '0 0 10px rgba(0,208,132,0.7)') : '0 0 0 rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.4 }}
      className="inline-block h-2 w-2 rounded-full"
    />
  );
}

function MonitorLabel({ icon, label, pos, hot = false, active = true }: { icon: ReactNode; label: string; pos: string; hot?: boolean; active?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`absolute z-20 hidden flex-col items-center gap-2 md:flex ${pos}`}
    >
      <motion.span
        animate={{ color: hot ? '#FFD166' : '#00D084', boxShadow: hot ? '0 0 18px rgba(255,209,102,0.35)' : '0 0 0 rgba(0,0,0,0)' }}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1C2A38] bg-[#0F1923]"
      >
        {icon}
      </motion.span>
      <span className="flex items-center gap-1.5 font-body text-[0.56rem] font-bold tracking-[0.22em] text-[#A5B4C4]">
        <IndicatorDot active={active} tone={hot ? 'amber' : 'green'} /> {label}
      </span>
      <span className={`font-body text-[0.5rem] tracking-[0.18em] ${hot ? 'text-[#FFD166]' : 'text-[#3D4F5E]'}`}>
        {hot ? 'HIGH — CHECK' : 'NORMAL'}
      </span>
    </motion.div>
  );
}

function ShopScene({ step, deviceOn }: { step: Step; deviceOn: boolean }) {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[340px] flex-col items-center">
      <motion.div
        animate={{ opacity: deviceOn ? 1 : 0.5 }}
        className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1C2A38] bg-[#0F1923]/90 px-4 py-1.5"
      >
        <Lock size={11} className="text-[#FF6B6B]" />
        <span className="font-display font-extrabold text-[0.7rem] tracking-[0.28em] text-[#E8EDF2]">SHOP CLOSED</span>
      </motion.div>

      <div className="relative w-full">
        {/* glow */}
        <div className="absolute -inset-8 rounded-full bg-[#00D084]/[0.06] blur-3xl" />
        <motion.div
          animate={{ boxShadow: deviceOn ? '0 0 0 14px rgba(0,208,132,0.05), 0 0 46px rgba(0,208,132,0.25)' : '0 0 0 0 rgba(0,208,132,0)' }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden rounded-t-[3rem] border border-[#24323F] bg-gradient-to-b from-[#0F1923] to-[#0A0F14]"
        >
          {/* parapet */}
          <div className="h-4 border-b border-[#24323F] bg-[#0C141C]" />
          {/* signboard */}
          <div className="mx-auto mt-5 flex w-[84%] items-center justify-center rounded-md border border-[#00D08430] bg-[#00D08410] px-3 py-2">
            <span className="text-center font-display font-bold text-[0.72rem] leading-relaxed tracking-[0.12em] text-[#00D084]">
              SHARMA GENERAL <br /> STORE
            </span>
          </div>

          {/* window */}
          <div className="mx-auto mt-5 flex h-20 w-[76%] items-center justify-center rounded-lg border border-[#24323F] bg-[#0A0F14]">
            <span className="font-body text-[0.6rem] tracking-[0.3em] text-[#3D4F5E]">AFTER HOURS</span>
          </div>

          {/* door with CLOSED banner */}
          <div className="relative mx-auto mt-auto mb-0 flex h-28 w-[58%] items-end justify-center rounded-t-2xl border border-[#24323F] bg-[#0C141C]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#FF444440] bg-[#FF444410] px-3 py-1 font-body text-[0.58rem] font-bold tracking-[0.2em] text-[#FF6B6B]">
              CLOSED
            </span>
            <span className="mb-3 inline-block h-2.5 w-20 rounded-full bg-[#1C2A38]" />
          </div>
        </motion.div>

        {/* device at entrance */}
        <motion.div
          animate={{ opacity: 1 }}
          className="absolute -right-5 top-[58%] -translate-y-1/2"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{ boxShadow: deviceOn ? '0 0 0 8px rgba(0,208,132,0.08), 0 0 24px rgba(0,208,132,0.5)' : '0 0 0 0 rgba(0,0,0,0)' }}
              transition={{ duration: 0.8 }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00D08460] bg-[#0F1923]"
            >
              <Cpu size={18} className={deviceOn ? 'text-[#00D084]' : 'text-[#3D4F5E]'} />
            </motion.div>
            <motion.span className="mt-1.5 whitespace-nowrap font-body text-[0.56rem] font-bold tracking-[0.18em] text-[#00D084]">
              HERE OPEN DEVICE
            </motion.span>
            <span className="mt-0.5 flex items-center gap-1 font-body text-[0.54rem] font-semibold tracking-[0.16em] text-[#A5B4C4]">
              <motion.span
                animate={{ opacity: deviceOn ? [1, 0.5, 1] : 0.4 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="h-1 w-1 rounded-full bg-[#00D084]"
              />
              CONNECTED
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function AlertCard({ show, variant = 'desktop' }: { show: boolean; variant?: 'desktop' | 'mobile' }) {
  const cardCls =
    variant === 'desktop'
      ? 'absolute right-[3%] top-[42%] z-30 hidden w-[26%] md:block'
      : 'relative w-full max-w-[340px] md:hidden';
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="alert"
          initial={{ opacity: 0, ...(variant === 'desktop' ? { x: 24 } : { y: 16 }) }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 0, y: 16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`overflow-hidden rounded-xl border border-[#FFD16640] bg-[#111A24]/95 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${cardCls}`}
        >
          <div className="flex items-center justify-between border-b border-[#1C2A38] px-3.5 py-2">
            <span className="font-display font-semibold text-[0.74rem] text-[#E8EDF2]">HERE OPEN</span>
            <span className="inline-flex items-center gap-1 font-body text-[0.6rem] font-bold tracking-widest text-[#FFD166]">
              <AlertTriangle size={11} /> ALERT
            </span>
          </div>
          <div className="px-3.5 py-3">
            <p className="font-body text-[0.92rem] font-semibold text-[#E8EDF2]">Unusual temperature detected.</p>
            <p className="mt-1 font-body text-[0.66rem] text-[#3D4F5E]">10:42 PM · Sharma General Store</p>
            <div className="mt-3 flex items-center justify-between rounded-lg border border-[#1C2A38] bg-[#080C10] px-3 py-2">
              <span className="font-body text-[0.6rem] text-[#A5B4C4]">Simulated event</span>
              <span className="inline-flex items-center gap-1 rounded-md bg-[#FFD166] px-2.5 py-1 font-body text-[0.6rem] font-bold text-[#080C10]">
                VIEW ALERT <ArrowRight size={10} />
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function OwnerCard({ show, variant = 'desktop' }: { show: boolean; variant?: 'desktop' | 'mobile' }) {
  const cardCls =
    variant === 'desktop'
      ? 'absolute left-[3%] top-[42%] z-30 hidden w-[26%] md:block'
      : 'relative w-full max-w-[340px] md:hidden';
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="owner"
          initial={{ opacity: 0, ...(variant === 'desktop' ? { x: -24 } : { y: 16 }) }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 0, y: 16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`overflow-hidden rounded-xl border border-[#00D08440] bg-[#111A24]/95 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${cardCls}`}
        >
          <div className="flex items-center justify-between border-b border-[#1C2A38] px-3.5 py-2">
            <span className="inline-flex items-center gap-1.5 font-body text-[0.6rem] font-bold tracking-[0.18em] text-[#00D084]">
              <Bell size={11} /> BUSINESS OWNER
            </span>
            <span className="font-body text-[0.54rem] text-[#3D4F5E]">10:42 PM</span>
          </div>
          <div className="px-3.5 py-3">
            <p className="font-body text-[0.82rem] font-semibold text-[#E8EDF2]">HERE OPEN Alert</p>
            <p className="mt-1 font-body text-[0.7rem] text-[#8A9BAE]">Your shop requires attention.</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StoryTicker({ step }: { step: Step }) {
  const activeIndex = step === 0 ? 2 : step === 1 ? 3 : step === 2 ? 4 : 5;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2"
    >
      {STORY.map((s, i) => (
        <span key={s} className="flex items-center gap-2">
          <span
            className={`font-body text-[0.58rem] font-bold tracking-[0.22em] transition-colors duration-300 ${
              i <= activeIndex ? 'text-[#E8EDF2]' : 'text-[#3D4F5E]'
            }`}
          >
            {s}
          </span>
          {i < STORY.length - 1 && (
            <ArrowRight size={10} className={`transition-colors duration-300 ${i < activeIndex ? 'text-[#00D084]' : 'text-[#3D4F5E]'}`} />
          )}
        </span>
      ))}
    </motion.div>
  );
}

function MonitoringRail() {
  const items = [
    { icon: <Shield size={12} />, label: 'SECURITY' },
    { icon: <Flame size={12} />, label: 'FIRE' },
    { icon: <Wind size={12} />, label: 'SMOKE' },
    { icon: <Thermometer size={12} />, label: 'TEMPERATURE' },
    { icon: <Cpu size={12} />, label: 'DEVICE STATUS' },
  ];
  return (
    <div className="mt-8 md:hidden" id="monitoring-rail">
      <div className="mx-auto flex max-w-[340px] flex-col gap-2.5">
        {items.map((i) => (
          <div key={i.label} className="flex items-center gap-3 border-b border-[#1C2A38] pb-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#1C2A38] bg-[#0F1923] text-[#00D084]">
              {i.icon}
            </span>
            <span className="flex-1 font-body text-[0.62rem] font-bold tracking-[0.2em] text-[#A5B4C4]">{i.label}</span>
            <span className="flex items-center gap-1.5 font-body text-[0.56rem] text-[#3D4F5E]">
              <IndicatorDot active /> NORMAL
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SecuritySection() {
  const { sceneRef, step, replay } = useEventSequence();
  const eventActive = step >= 1;
  const notifyOwner = step >= 3;
  const deviceOn = true;

  return (
    <Section id="security" className="bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.05)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="24/7 AWARENESS"
          title="WHEN YOUR SHOP CLOSES,"
          titleAccent="DOESN'T JUST DISAPPEAR."
          description="Your shop may be closed, but your connected Here Open system can continue providing visibility into configured safety, security and device events."
        />

        <div ref={sceneRef} className="relative mx-auto mt-4 max-w-6xl">
          {/* demo label + replay */}
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1C2A38] bg-[#0F1923] px-3 py-1.5 font-body text-[0.56rem] font-bold tracking-[0.18em] text-[#8A9BAE]">
              <span className="status-dot-pulse inline-block h-1.5 w-1.5 rounded-full bg-[#FFD166]" /> SIMULATED EVENT · FRONTEND DEMO
            </span>
            <button
              type="button"
              onClick={replay}
              className="rounded-full border border-[#00D08440] bg-[#00D08412] px-3 py-1.5 font-body text-[0.56rem] font-bold tracking-[0.18em] text-[#00D084] transition-colors hover:bg-[#00D0841F]"
            >
              REPLAY
            </button>
          </div>

          {/* monitoring ring + indicators (desktop) */}
          <div className="relative mt-6 hidden items-center justify-center pb-4 md:flex" style={{ minHeight: 560 }}>
            <div
              className="absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                border: '1px dashed rgba(0,208,132,0.22)',
                boxShadow: '0 0 0 40px rgba(0,208,132,0.02), inset 0 0 0 0 rgba(0,0,0,0)',
              }}
            />
            <div className="absolute left-1/2 top-1/2 aspect-square w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ border: '1px solid rgba(0,208,132,0.08)' }} />
            {INDICATORS.map((i) => (
              <MonitorLabel
                key={i.key}
                icon={i.icon}
                label={i.label}
                pos={i.pos}
                hot={i.key === 'temperature' && eventActive}
                active={i.key === 'device' || (i.key === 'temperature' && !eventActive)}
              />
            ))}

            <ShopScene step={step} deviceOn={deviceOn} />
            <AlertCard show={step >= 2} />
            <OwnerCard show={notifyOwner} />

            {/* calibration caption */}
            <motion.div
              animate={{ opacity: step === 0 ? 1 : 0.55 }}
              className="absolute bottom-0 left-1/2 z-20 w-full max-w-md -translate-x-1/2 text-center"
            >
              <p className="font-body text-[0.68rem] text-[#8A9BAE]">
                {step === 0 ? 'Calm state — device connected, supported monitoring active.' : 'Changes shown are a simulated sequence.'}
              </p>
            </motion.div>
          </div>

          {/* mobile scene */}
          <div className="md:hidden">
            <ShopScene step={step} deviceOn={deviceOn} />
            <MonitoringRail />
            <div className="mt-6 flex flex-col items-center gap-4 md:hidden">
              <AlertCard show={step >= 2} variant="mobile" />
              <OwnerCard show={notifyOwner} variant="mobile" />
            </div>
          </div>

          <div className="mt-10 md:mt-14">
            <StoryTicker step={step} />
          </div>
        </div>

        {/* closing statement */}
        <div className="mx-auto mt-20 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55 }}
            className="font-body text-[0.62rem] font-bold tracking-[0.28em] text-[#00D084]"
          >
            THE DIFFERENCE
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-4 font-display font-extrabold text-[1.9rem] lg:text-[2.7rem] leading-tight tracking-[-0.02em] text-[#E8EDF2]"
          >
            CLOSED TO CUSTOMERS.
            <br />
            <span className="text-[#00D084] drop-shadow-[0_0_30px_#00D08450]">CONNECTED TO WHAT MATTERS.</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl font-body text-[1rem] text-[#8A9BAE] leading-relaxed"
          >
            Here Open helps businesses stay informed through connected monitoring and alerts based on their configured system.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            href="#platform"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#00D084] px-9 py-4 font-display font-bold text-[0.9rem] tracking-wide text-[#080C10] shadow-[0_0_36px_rgba(0,208,132,0.4)] transition-all duration-300 hover:brightness-[1.08]"
          >
            EXPLORE THE ECOSYSTEM <ArrowRight size={16} />
          </motion.a>
        </div>
      </Container>
    </Section>
  );
}