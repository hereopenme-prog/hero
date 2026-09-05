'use client';

import { useState, useRef, type MouseEvent } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Activity, AlertTriangle, Lock } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function DemoSection() {
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

    cardControls.start({ scale: [1, 1.015, 1], transition: { duration: 0.4, ease: 'easeInOut' } });
    setUpdatedAt(Date.now());
    setIsOpen(!isOpen);
    if (isOpen) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3500);
    }
  };

  return (
    <Section id="demo" className="bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.06)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Interactive Demo"
          title="One Tap Changes Everything"
          titleAccent="Try It Yourself"
          description="This is a simulation. In production, only authorized owners can control shop status."
        />

        <div className="max-w-[640px] mx-auto">
          <motion.div
            animate={cardControls}
            className={`rounded-3xl p-8 lg:p-10 border transition-shadow duration-500 ${
              isOpen
                ? 'border-[#00D08450] shadow-[0_0_60px_#00D08420]'
                : 'border-[#FF444440] shadow-[0_0_40px_#FF444414]'
            }`}
            style={{ background: '#0F1923' }}
          >
            {/* Status panel */}
            <motion.div
              animate={{ backgroundColor: isOpen ? '#00D08412' : '#FF444412' }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="rounded-2xl px-6 py-10 mb-8 text-center"
            >
              <p className="font-body text-[10px] text-[#6B7C8E] uppercase tracking-[0.2em] mb-4">Shop Status</p>
              <div className="flex items-center justify-center gap-3">
                <motion.span
                  className="w-3 h-3 rounded-full"
                  animate={{
                    backgroundColor: isOpen ? '#00D084' : '#FF4444',
                    scale: [1, 1.4, 1],
                    opacity: [1, 0.6, 1],
                  }}
                  transition={{
                    backgroundColor: { duration: 0.4, ease: 'easeInOut' },
                    scale: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' },
                    opacity: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' },
                  }}
                />
                <motion.p
                  className="font-display font-extrabold text-5xl tracking-tight"
                  animate={{ color: isOpen ? '#00D084' : '#FF6B6B' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {isOpen ? 'OPEN' : 'CLOSED'}
                </motion.p>
              </div>

              {isOpen ? (
                <p className="font-body text-xs text-[#00D084] mt-4 flex items-center justify-center gap-2">
                  <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[#00D084]" />
                  LIVE — visible to all customers
                </p>
              ) : (
                <div className="mt-5 space-y-2">
                  <p className="font-body text-[13px] text-[#FF6B6B] flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4" /> SECURITY MONITORING ACTIVE
                  </p>
                  <p className="font-body text-[12px] text-[#FF6B6B]/60 flex items-center justify-center gap-2">
                    <Activity className="w-4 h-4" /> FIRE / SMOKE / MOTION SENSORS ON
                  </p>
                </div>
              )}
            </motion.div>

            {/* Meta */}
            <div className="flex items-center justify-between font-body text-xs text-[#6B7C8E] mb-6 px-2">
              <motion.span
                key={updatedAt}
                initial={{ backgroundColor: 'rgba(0, 208, 132, 0.2)', color: '#00D084', y: -2 }}
                animate={{ backgroundColor: 'rgba(0, 208, 132, 0)', color: '#8A9BAE', y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="px-2 py-0.5 rounded-md"
              >
                Last updated: Just Now
              </motion.span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#00D084] rounded-full" />
                Device Online
              </span>
            </div>

            {/* Toggle */}
            <div className="text-center">
              <button
                type="button"
                onClick={toggle}
                aria-pressed={!isOpen}
                className={`relative overflow-hidden rounded-xl px-8 py-4 font-display font-bold text-[14px] tracking-wide transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#FF444410] border border-[#FF444440] text-[#FF6B6B] hover:bg-[#FF444418]'
                    : 'bg-[#00D084] text-[#080C10] shadow-[0_0_32px_#00D08440] hover:brightness-[1.06]'
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
                        ? 'radial-gradient(circle, rgba(255, 68, 68, 0.35) 0%, rgba(255, 68, 68, 0) 65%)'
                        : 'radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 65%)',
                    }}
                  />
                ))}
              </button>
              <p className="font-body text-[11px] text-[#3D4F5E] mt-4">
                Demo only — simulated device, not connected to real hardware
              </p>
            </div>

            {/* Alert */}
            {showAlert && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 bg-[#FF444410] border border-[#FF444430] rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#FF6B6B] flex-shrink-0" />
                  <div>
                    <p className="font-body text-[13px] font-semibold text-[#FF6B6B]">Security Alert</p>
                    <p className="font-body text-[12px] text-[#FF6B6B]/70">
                      Shop status changed to CLOSED — monitoring activated. All customers now see CLOSED.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}