'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const phases = [
  {
    years: '2026',
    title: 'MVP Launch & Pilot',
    desc: 'Ship the first HERE OPEN devices and app with trusted pilot merchants.',
    status: 'CURRENT',
  },
  {
    years: '2027',
    title: 'City Expansion',
    desc: 'Scale across cities, onboarding neighbourhood businesses at speed.',
    status: 'NEXT',
  },
  {
    years: '2028',
    title: 'Rapid Growth',
    desc: 'Density in key markets with deeper features and partnerships.',
    status: '',
  },
  {
    years: '2029\u20132030',
    title: 'Market Scale',
    desc: 'Pan-India coverage with multi-language customer experience.',
    status: '',
  },
  {
    years: '2031+',
    title: 'Market Leadership',
    desc: 'Become the standard for local shop visibility and smart monitoring.',
    status: '',
  },
];

export function RoadmapSection() {
  return (
    <Section id="roadmap" className="bg-surface-base">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Roadmap"
          title="From First Pilot To Market Leadership"
          description="A clear, phased plan to make every shop in India visible."
        />

        {/* Desktop horizontal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="hidden md:block relative max-w-6xl mx-auto"
        >
          <div className="absolute top-[14px] left-6 right-6 h-0.5 bg-[var(--border)]" />
          <div className="absolute top-[14px] left-6 w-[24%] h-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--a60)]" />
          <div className="grid grid-cols-5 gap-6">
            {phases.map((ph, i) => (
              <motion.div key={ph.title} variants={scaleIn} className="relative">
                <div
                  className={`relative z-10 mb-5 w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                    i === 0
                      ? 'border-[var(--accent)] bg-[var(--accent)] shadow-[0_0_20px_var(--a60)]'
                      : i === 1
                        ? 'border-[var(--accent)] bg-[var(--bg)]'
                        : 'border-[var(--border)] bg-[var(--section)]'
                  }`}
                >
                  {i === 0 && <span className="w-2 h-2 rounded-full bg-[var(--bg)]" />}
                </div>
                {ph.status && (
                  <span
                    className={`mb-2 inline-block rounded-full px-2.5 py-0.5 font-display font-bold text-[0.6rem] tracking-widest ${
                      i === 0 ? 'bg-[var(--accent)] text-[var(--accent-ink)]' : 'bg-[var(--a14)] text-[var(--accent)] border border-[var(--a40)]'
                    }`}
                  >
                    {ph.status}
                  </span>
                )}
                <p className="font-display font-bold text-[0.95rem] text-[var(--accent)]">{ph.years}</p>
                <h3 className="mt-1.5 font-display font-semibold text-[0.95rem] text-[var(--ink)] leading-snug">{ph.title}</h3>
                <p className="mt-1.5 font-body text-[0.8rem] text-[var(--ink-muted)] leading-relaxed">{ph.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile vertical */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="md:hidden relative max-w-md mx-auto"
        >
          <div className="absolute left-[13px] top-3 bottom-3 w-0.5 bg-[var(--border)]" />
          {phases.map((ph, i) => (
            <motion.div key={ph.title} variants={scaleIn} className="relative flex items-start gap-5 pb-8 last:pb-0">
              <div
                className={`relative z-10 mt-0.5 w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  i === 0
                    ? 'border-[var(--accent)] bg-[var(--accent)] shadow-[0_0_20px_var(--a60)]'
                    : i === 1
                      ? 'border-[var(--accent)] bg-[var(--bg)]'
                      : 'border-[var(--border)] bg-[var(--section)]'
                }`}
              >
                {i === 0 && <span className="w-2 h-2 rounded-full bg-[var(--bg)]" />}
              </div>
              <div>
                {ph.status && (
                  <span
                    className={`mb-1.5 inline-block rounded-full px-2.5 py-0.5 font-display font-bold text-[0.6rem] tracking-widest ${
                      i === 0 ? 'bg-[var(--accent)] text-[var(--accent-ink)]' : 'bg-[var(--a14)] text-[var(--accent)] border border-[var(--a40)]'
                    }`}
                  >
                    {ph.status}
                  </span>
                )}
                <p className="font-display font-bold text-[0.9rem] text-[var(--accent)]">{ph.years}</p>
                <h3 className="mt-1 font-display font-semibold text-[0.98rem] text-[var(--ink)]">{ph.title}</h3>
                <p className="mt-1 font-body text-[0.84rem] text-[var(--ink-muted)] leading-relaxed">{ph.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}