'use client';

import { motion } from 'framer-motion';
import { Search, Store, MapPin, Tag, Bell } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const benefits = [
  { icon: <Search size={18} />, label: 'KNOW BEFORE YOU GO' },
  { icon: <Store size={18} />, label: 'SEE SHOP STATUS' },
  { icon: <MapPin size={18} />, label: 'DISCOVER LOCAL BUSINESSES' },
  { icon: <Tag size={18} />, label: 'FIND OFFERS' },
  { icon: <Bell size={18} />, label: 'GET BUSINESS UPDATES' },
];

export function CustomerBenefitsSection() {
  return (
    <Section id="customers" className="bg-[var(--section-2)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.03)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="FOR CUSTOMERS"
          title="BUILT FOR THE PEOPLE"
          titleAccent="WALKING THROUGH YOUR DOOR."
        />

        <div className="mx-auto mt-8 max-w-xl">
          <div className="flex flex-col gap-0">
            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 py-5"
                style={{
                  borderBottom: i < benefits.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--section)] text-[var(--accent)] flex-shrink-0">
                  {b.icon}
                </span>
                <span className="font-display font-semibold text-[0.9rem] tracking-wide text-[var(--ink)]">
                  {b.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
