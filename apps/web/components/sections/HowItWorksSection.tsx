'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ClosedExperience } from '@/components/ui/ClosedExperience';
import { stagger } from '@/lib/animations';
import type { Variants } from 'framer-motion';

const openSteps = [
  { num: '01', title: 'BUSINESS OPENS', caption: 'Owner taps OPEN.' },
  { num: '02', title: 'THE DEVICE RESPONDS', caption: 'The Here Open device changes its state.' },
  { num: '03', title: 'THE PLATFORM UPDATES', caption: 'The status is synchronized in real time.' },
  { num: '04', title: 'CUSTOMERS KNOW', caption: 'Customers can see that the business is OPEN.' },
  {
    num: '05',
    title: 'BUSINESS STAYS CONNECTED',
    caption: 'Offers, announcements, safety and other supported features can operate through the ecosystem.',
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="bg-[var(--bg-soft)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 40% at 50% 30%, rgba(69,245,154,0.045) 0%, transparent 60%)' }}
      />
      <Container className="relative z-10">
        <SectionHeading
          accent="mint"
          size="lg"
          eyebrow="HOW IT WORKS"
          title="ONE TAP."
          titleAccent="THE WHOLE STORY."
          description="From opening the shop to knowing what happens after it closes — Here Open keeps the business, the device and the customer in sync."
        />

        {/* ====== PART A — THE OPEN EXPERIENCE ====== */}
        <div className="mb-28 lg:mb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 text-center"
          >
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--a2-60)]" />
              <span className="font-display text-[1.3rem] font-bold tracking-tight text-[var(--ink)] lg:text-[1.5rem]">
                THE OPEN EXPERIENCE
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--a2-60)]" />
            </span>
          </motion.div>

          {/* Desktop: horizontal 5-step */}
          <div className="relative mx-auto hidden max-w-5xl lg:block">
            <div className="absolute left-[5%] right-[5%] top-[22px] h-px bg-[var(--glass-2)] pointer-events-none" />
            <div className="absolute left-[5%] right-[5%] top-[22px] h-px bg-gradient-to-r from-transparent via-[var(--a2-25)] to-transparent pointer-events-none" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
              className="grid grid-cols-5 gap-6"
            >
              {openSteps.map((step) => (
                <motion.div key={step.num} variants={itemVariants} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full border border-[var(--a2-30)] bg-[var(--bg-soft)] mb-4">
                    <span className="font-display text-sm font-bold text-[var(--accent-2)]">{step.num}</span>
                  </div>
                  <div className="absolute top-[22px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--accent-2)] shadow-[0_0_10px_var(--accent-2)] z-20" />
                  <h4 className="mt-2 font-display text-[15px] font-bold tracking-wide text-[var(--ink)] leading-snug">
                    {step.title}
                  </h4>
                  <p className="mt-2 font-body text-[13px] text-[var(--ink-muted)] leading-relaxed">{step.caption}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile: vertical 5-step */}
          <div className="relative mx-auto max-w-md lg:hidden">
            <div className="absolute left-[17px] top-2 bottom-2 w-px bg-[var(--glass-2)]" />
            <div className="absolute left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[var(--a2-20)] to-transparent" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {openSteps.map((step) => (
                <motion.div key={step.num} variants={itemVariants} className="relative flex gap-6 pb-8 last:pb-0">
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-[var(--a2-30)] bg-[var(--bg-soft)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-2)] shadow-[0_0_12px_var(--accent-2)]" />
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-[13px] font-bold tracking-[0.16em] text-[var(--accent-2)]">{step.num}</span>
                      <h4 className="font-display text-[15px] font-bold tracking-wide text-[var(--ink)] leading-snug">
                        {step.title}
                      </h4>
                    </div>
                    <p className="mt-1 font-body text-[13px] text-[var(--ink-muted)] leading-relaxed">{step.caption}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ====== PART B — THE CLOSED EXPERIENCE ====== */}
        <div>
          <ClosedExperience />
        </div>
      </Container>
    </Section>
  );
}