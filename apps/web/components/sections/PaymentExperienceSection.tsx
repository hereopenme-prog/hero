'use client';

import { motion } from 'framer-motion';
import { Volume2 } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DeviceVisual } from '@/components/ui/DeviceVisual';

const stripItems = [
  { label: 'PAYMENT', caption: 'Instant confirmation.' },
  { label: 'SHOP', caption: 'Visible status.' },
  { label: 'CUSTOMER', caption: 'Connected.' },
  { label: 'SMART SERVICES', caption: "Designed for what's next." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function PaymentExperienceSection() {
  return (
    <Section id="payment-experience" className="bg-[#080C10]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.06)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="PAYMENT EXPERIENCE"
          title="THE PAYMENT SOUNDBOX YOU ALREADY KNOW."
          titleAccent="REIMAGINED."
          description="Familiar, instant payment confirmation — designed as the foundation for a broader merchant device."
        />

        {/* Device */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 -m-16 bg-[radial-gradient(circle,rgba(0,208,132,0.10)_0%,transparent_60%)] pointer-events-none" />
            <DeviceVisual
              size="lg"
              showNotif
              amount="₹1,250"
              notifLabel="PAYMENT RECEIVED"
              online
              className="relative"
            />
          </div>

          {/* Spoken confirmation mimic */}
          <div className="mt-6 flex items-center gap-2">
            <Volume2 size={15} className="text-[#00D084]" />
            <span className="font-body text-[0.8rem] text-[#A5B4C4]">Payment received.</span>
          </div>
        </motion.div>

        {/* Transition strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-20 lg:mt-24"
        >
          <div className="flex items-stretch justify-center gap-4 lg:gap-8">
            {stripItems.map((item, i) => (
              <div key={item.label} className="flex items-center gap-4 lg:gap-8">
                <div className="flex flex-col items-start">
                  <span className="font-display font-bold text-base lg:text-xl tracking-tight text-[#E8EDF2]">
                    {item.label}
                  </span>
                  <span className="mt-1 font-body text-[0.72rem] text-[#8A9BAE]">{item.caption}</span>
                </div>
                {i < stripItems.length - 1 && (
                  <div className="hidden sm:flex flex-col items-center justify-center self-center">
                    <span className="w-px h-4 bg-[#00D084] block" />
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-[#00D084]">
                      <path d="M0 0L5 5L10 0" stroke="currentColor" strokeWidth="1.2" fill="none" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile separators */}
          <div className="sm:hidden mt-4 flex justify-center items-center gap-8">
            {stripItems.slice(0, -1).map((item, i) => (
              <div key={item.label} className="flex items-center gap-8">
                <span className="w-8 h-px bg-[#00D084]" />
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-[#00D084]">
                  <path d="M0 0L5 5L10 0" stroke="currentColor" strokeWidth="1.2" fill="none" />
                </svg>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
