'use client';

import { motion } from 'framer-motion';
import { Bell, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/app/components/Reveal';
import { fadeUp, stagger } from '@/lib/animations';

const pillars = [
  {
    icon: Bell,
    title: 'Safety alerts delivered to merchants.',
    desc: 'Connected monitoring is designed to notify merchants about what matters at their shop.',
    accent: '#FF6B6B',
    bg: 'rgba(255,107,107,0.08)',
    border: 'rgba(255,107,107,0.18)',
  },
  {
    icon: ShieldCheck,
    title: 'Safer shops.',
    desc: 'Around-the-clock fire and smoke monitoring, with coverage depending on supported sensors and configuration.',
    accent: '#45F59A',
    bg: 'rgba(69,245,154,0.08)',
    border: 'rgba(69,245,154,0.18)',
  },
  {
    icon: HeartHandshake,
    title: 'Stronger communities.',
    desc: 'When local shops stay protected and reliably connected, the whole neighbourhood benefits.',
    accent: '#45F59A',
    bg: 'rgba(69,245,154,0.08)',
    border: 'rgba(69,245,154,0.18)',
  },
];

export function SafetyStaysConnectedSection() {
  return (
    <Section id="safety" className="relative bg-[#050505] py-28 lg:py-36">
      <Container className="max-w-[1060px]">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4">
              <span className="inline-block h-px w-6 bg-current opacity-40" />
              SAFETY THAT STAYS CONNECTED
              <span className="inline-block h-px w-6 bg-current opacity-40" />
            </span>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-zinc-50 leading-tight">
              24/7 fire and smoke monitoring.
            </h2>
          </Reveal>

          <Reveal>
            <p className="mx-auto mt-5 max-w-2xl text-zinc-400 text-base sm:text-lg leading-relaxed">
              Safety runs in the background — even when the shop is closed.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="rounded-2xl border bg-zinc-900/40 p-7 backdrop-blur-sm transition-colors duration-200 hover:bg-zinc-900/60"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: p.bg, border: `1px solid ${p.border}` }}
              >
                <p.icon size={22} strokeWidth={1.75} style={{ color: p.accent }} />
              </span>
              <h3 className="mt-5 font-display text-[17px] font-bold text-zinc-100 leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 font-body text-[13.5px] leading-relaxed text-zinc-400">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}