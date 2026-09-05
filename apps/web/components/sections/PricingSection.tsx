'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const plans = [
  {
    name: 'Starter',
    price: '299',
    per: 'per month / GST additional',
    features: ['1 shop', '1 HERE OPEN device', 'Real-time OPEN / CLOSED status', 'Basic monitoring alerts', 'WhatsApp support'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '699',
    per: 'per month / GST additional',
    features: ['3 shops', 'Up to 3 HERE OPEN devices', 'Advanced security monitoring', 'Fire & smoke alerts', 'Offers & announcements', 'Priority support'],
    featured: true,
  },
  {
    name: 'Business',
    price: '1,499',
    per: 'per month / GST additional',
    features: ['Unlimited shops', 'Unlimited devices', 'Custom onboarding', 'Dedicated success manager', 'API access'],
    featured: false,
  },
];

export function PricingSection() {
  return (
    <Section id="pricing" className="bg-[var(--section-2)]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent, Owner-Friendly Pricing"
          description="Start small. Scale when your business grows. No hidden fees, cancel anytime."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {plans.map((p) => (
            <motion.div
              key={p.name}
              variants={scaleIn}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                p.featured
                  ? 'border-[var(--a60)] bg-[var(--section)] shadow-[0_0_60px_var(--a20)] lg:-translate-y-3'
                  : 'border-[var(--border)] bg-[var(--section)]'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-4 py-1 font-display font-bold text-[0.65rem] tracking-widest text-[var(--accent-ink)]">
                  MOST POPULAR
                </span>
              )}
              <p className="font-display font-semibold text-[1rem] text-[var(--ink)]">{p.name}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-body text-[0.9rem] text-[var(--ink-muted)]">₹</span>
                <span className="font-display font-bold text-[2.6rem] leading-none tracking-tight text-[var(--ink)]">{p.price}</span>
              </div>
              <p className="mt-2 font-body text-[0.72rem] text-[var(--ink-dim)]">{p.per}</p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 font-body text-[0.86rem] text-[var(--ink-2)]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-1 flex-shrink-0" aria-hidden="true">
                      <circle cx="7" cy="7" r="7" fill="var(--a14)" />
                      <path d="M4.5 7.2L6.3 9L9.5 5.5" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block rounded-xl px-6 py-3.5 text-center font-display font-bold text-[0.85rem] tracking-wide transition-all duration-300 ${
                  p.featured
                    ? 'bg-[var(--accent)] text-[var(--accent-ink)] shadow-[0_0_28px_var(--a40)] hover:brightness-[1.06]'
                    : 'border border-[var(--a50)] text-[var(--accent)] hover:bg-[var(--a14)]'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center font-body text-[0.78rem] text-[var(--ink-dim)]">
          Device hardware available on purchase or rental basis. Contact us for bulk business pricing.
        </p>
      </Container>
    </Section>
  );
}