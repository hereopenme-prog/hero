'use client';

import { motion } from 'framer-motion';
import { Package, MousePointerClick, MapPin, Megaphone, Tag, ShieldAlert, Flame, type LucideIcon } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { fadeUp, stagger } from '@/lib/animations';

const capabilities: { icon: LucideIcon; title: string; caption: string }[] = [
  {
    icon: Package,
    title: 'A stronger offering',
    caption: 'Offer useful services beyond payment confirmation.',
  },
  {
    icon: MapPin,
    title: 'Local discovery',
    caption: 'Help nearby customers find your business.',
  },
  {
    icon: Megaphone,
    title: 'Business visibility',
    caption: 'Promote your shop through the Here Open network.',
  },
  {
    icon: Tag,
    title: 'Direct offers',
    caption: 'Share offers and discounts with interested customers.',
  },
  {
    icon: ShieldAlert,
    title: 'Theft-risk alerts',
    caption: 'Stay informed with supported shop-security alerts.',
  },
  {
    icon: Flame,
    title: 'Fire & smoke alerts',
    caption: 'Receive safety notifications where supported.',
  },
];

export function MerchantsSection() {
  return (
    <Section id="merchants" className="bg-[var(--bg)]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 border bg-[var(--a20)]"
            style={{ borderColor: 'var(--a40)' }}
          >
            <span
              className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            <span className="font-body font-semibold text-xs tracking-[0.14em] text-[var(--accent)]">FOR MERCHANTS</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-7 font-display font-bold text-[2rem] leading-[1.08] tracking-[-0.03em] text-[var(--ink)] sm:text-[2.4rem] lg:text-[2.9rem]"
          >
            More value, every day.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6"
        >
          {/* Featured — One-tap shop status */}
          <motion.article
            variants={fadeUp}
            className="md:col-span-3 flex flex-col gap-6 rounded-2xl border p-7 md:flex-row md:items-start lg:p-9"
            style={{ backgroundColor: 'var(--panel)', borderColor: 'var(--a40)' }}
          >
            <div
              className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl"
              style={{ backgroundColor: 'var(--a12)' }}
            >
              <MousePointerClick size={26} strokeWidth={1.75} className="text-[var(--accent)]" />
            </div>
            <div>
              <h3 className="font-display text-[1.1rem] font-bold tracking-tight text-[var(--ink)]">
                One-tap shop status
              </h3>
              <p className="mt-2.5 font-body text-[15.5px] leading-relaxed text-[var(--ink-muted)]">
                Control the device from your mobile.
              </p>
              <p className="mt-1.5 font-body text-[15.5px] leading-relaxed text-[var(--ink-muted)]">
                Share open or closed status on the public app with a confidence score.
              </p>
            </div>
          </motion.article>

          {capabilities.map((c) => (
            <motion.article
              key={c.title}
              variants={fadeUp}
              className="group flex flex-col rounded-2xl border bg-[var(--panel)] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--a40)] lg:p-8"
              style={{ borderColor: 'var(--border)' }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-200"
                style={{ backgroundColor: 'var(--a12)' }}
              >
                <c.icon size={22} strokeWidth={1.75} className="text-[var(--accent)]" />
              </div>
              <h3 className="mt-5 font-display text-[1.05rem] font-bold tracking-tight text-[var(--ink)]">
                {c.title}
              </h3>
              <p className="mt-2.5 font-body text-[14.5px] leading-relaxed text-[var(--ink-muted)]">
                {c.caption}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}