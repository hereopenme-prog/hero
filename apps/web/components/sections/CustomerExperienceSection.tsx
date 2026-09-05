'use client';

import { MapPinOff, Activity, Search } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CustomerJourney } from '@/components/ui/CustomerJourney';

const benefits = [
  {
    icon: <MapPinOff size={20} strokeWidth={1.75} />,
    title: 'NO UNWANTED TRIPS',
    desc: 'Check status before you travel — and avoid closed doors.',
  },
  {
    icon: <Activity size={20} strokeWidth={1.75} />,
    title: 'REAL-TIME STATUS',
    desc: 'OPEN or CLOSED, always current, straight from the device.',
  },
  {
    icon: <Search size={20} strokeWidth={1.75} />,
    title: 'DISCOVER NEARBY BUSINESSES',
    desc: 'Find what is open close to you, in one view.',
  },
];

export function CustomerExperienceSection() {
  return (
    <Section id="customer-experience" className="bg-[var(--bg)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 40% at 50% 8%, rgba(69,245,154,0.05) 0%, transparent 60%)' }}
      />
      <Container className="relative z-10">
        <SectionHeading
          accent="mint"
          size="lg"
          eyebrow="CUSTOMER EXPERIENCE"
          title="KNOW BEFORE YOU GO."
          titleAccent="WEB-FIRST. NO APP NEEDED."
          description="A connected business visibility experience — accessible to anyone, without downloading another app."
        />

        <CustomerJourney />

        {/* Benefit strip */}
        <div className="mx-auto mt-20 max-w-4xl lg:mt-24">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group flex flex-col rounded-2xl border border-[var(--border-soft)] bg-[var(--glass)] p-6 transition-colors duration-300 hover:border-[var(--a2-25)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--a2-20)] bg-[var(--a2-10)] text-[var(--accent-2)] transition-transform duration-300 group-hover:scale-105">
                  {b.icon}
                </span>
                <p className="mt-5 font-display text-[15px] font-bold tracking-tight text-[var(--ink)] leading-snug">
                  {b.title}
                </p>
                <p className="mt-1.5 font-body text-[13.5px] text-[var(--ink-muted)] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-body text-[13px] text-[var(--ink-dim)] leading-relaxed">
            A web-first customer experience — no downloads, no sign-up required.
          </p>
        </div>
      </Container>
    </Section>
  );
}