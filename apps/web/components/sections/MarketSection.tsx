'use client';

import { motion } from 'framer-motion';
import { Users, Store } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

export function MarketSection() {
  return (
    <Section id="market" className="bg-[#0A0F14]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Market Opportunity"
          title="A Massive, Underserved Market"
          description="Every offline shop is a potential HERE OPEN customer. The demand for local business discovery and security has never been higher."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[
            {
              icon: <Users size={26} className="text-[#00D084]" strokeWidth={1.5} />,
              value: '90+ Crore',
              label: 'Internet Users in India',
              note: 'Bharat&apos;s online consumers have nowhere to confirm a local shop is open.',
            },
            {
              icon: <Store size={26} className="text-[#00D084]" strokeWidth={1.5} />,
              value: '6.3+ Crore',
              label: 'Small Businesses & MSMEs',
              note: 'The vast majority have no real-time visibility or smart monitoring.',
            },
          ].map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-[#1C2A38] bg-[#0F1923] p-8"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D08450] to-transparent" />
              <div className="flex items-center justify-between mb-6">
                <div
                  className="flex items-center justify-center"
                  style={{ background: '#00D0841A', borderRadius: 12, padding: 11, width: 48, height: 48 }}
                >
                  {s.icon}
                </div>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
                  <circle cx="17" cy="17" r="16" stroke="#00D08430" strokeWidth="1" />
                  <circle cx="17" cy="17" r="10" stroke="#00D08440" strokeWidth="1" />
                  <circle cx="17" cy="17" r="4" fill="#00D084" />
                </svg>
              </div>
              <p className="font-display font-bold text-[2.6rem] leading-none text-[#E8EDF2]">{s.value}</p>
              <p className="mt-2 font-display font-semibold text-[1rem] text-[#00D084]">{s.label}</p>
              <p className="mt-3 font-body text-[0.85rem] text-[#8A9BAE] leading-relaxed">{s.note}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-center font-body text-[0.72rem] text-[#3D4F5E]">
          Figures presented in the Here Open pitch deck.
        </p>
      </Container>
    </Section>
  );
}