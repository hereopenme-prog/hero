'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Navigation,
  Bookmark,
  Share2,
  Tag,
  Store,
  Clock,
  Bell,
} from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const appPills = ['Nearby Shops', 'Open Now', 'Offers', 'Shop Details', 'Announcements'];

export function CustomersSection() {
  return (
    <Section id="customers" className="bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,208,132,0.05)_0%,transparent_55%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="For Customers"
          title="KNOW BEFORE YOU GO."
          description="Check the real-time status of any shop before you leave. Every visit becomes informed, intentional — and never wasted."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Mobile mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-[300px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00B4D820_0%,transparent_60%)] pointer-events-none" />
            <div
              className="relative rounded-[40px] border border-[var(--border)] bg-[var(--section)] px-4 pt-4 pb-5"
              style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}
            >
              {/* Notch */}
              <div className="mx-auto mb-4 w-24 h-5 rounded-full bg-[var(--bg)] border border-[var(--border)]" />

              {/* Status bar */}
              <div className="flex items-center justify-between px-2 mb-4">
                <p className="font-display font-semibold text-[0.8rem] text-[var(--ink)]">HERE OPEN</p>
                <span className="status-dot-pulse inline-block w-2 h-2 rounded-full bg-[var(--accent)]" />
              </div>

              {/* Shop card */}
              <div className="rounded-2xl bg-[var(--bg)] border border-[var(--border)] p-4">
                <p className="font-body text-[0.65rem] text-[var(--ink-dim)] uppercase tracking-wider mb-1">500m away</p>
                <p className="font-display font-bold text-[1rem] text-[var(--ink)]">Sharma General Store</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--a14)] border border-[var(--a40)] px-3 py-1">
                    <span className="status-dot-pulse inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    <span className="font-display font-bold text-[0.7rem] text-[var(--accent)] tracking-wider">OPEN</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[var(--accent)] px-2.5 py-1 font-body font-bold text-[0.65rem] text-[var(--accent-ink)]">
                    <Tag size={10} /> 10% OFF
                  </span>
                </div>
                <p className="mt-3 font-body text-[0.72rem] text-[var(--ink-2)]">New arrivals — groceries & daily essentials</p>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { icon: <Navigation size={13} />, label: 'Navigate' },
                    { icon: <Bookmark size={13} />, label: 'Follow' },
                    { icon: <Share2 size={13} />, label: 'Share' },
                  ].map((b) => (
                    <span
                      key={b.label}
                      className="flex flex-col items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--section)] py-2.5 text-[var(--accent)]"
                    >
                      {b.icon}
                      <span className="font-body text-[0.62rem] text-[var(--ink-dim)]">{b.label}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Nearby strip */}
              <div className="mt-4 flex items-center gap-2 overflow-hidden">
                {[
                  { name: 'Green Leaf Pharmacy', st: 'OPEN' },
                  { name: 'First Cup Café', st: 'OPEN' },
                  { name: 'Metro Tailors', st: 'CLOSED' },
                ].map((s) => (
                  <span
                    key={s.name}
                    className="flex-1 min-w-0 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5"
                  >
                    <p className="truncate font-body font-medium text-[0.62rem] text-[var(--ink)]">{s.name}</p>
                    <span className={`font-display font-bold text-[0.6rem] tracking-wider ${s.st === 'OPEN' ? 'text-[var(--accent)]' : 'text-[#FF6B6B]'}`}>
                      ● {s.st}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="absolute -right-8 -bottom-4 float-badge"
            >
              <div className="flex items-center gap-2 rounded-full border border-[var(--a40)] bg-[var(--section)] px-4 py-2">
                <Bell size={14} className="text-[var(--accent)]" />
                <span className="font-body font-semibold text-xs text-[var(--ink)]">Follow to never miss</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="space-y-4"
          >
            {[
              {
                icon: <Store size={18} className="text-[var(--accent)]" strokeWidth={1.5} />,
                title: 'Nearby Shops',
                desc: 'Discover open businesses near you, sorted by distance and live status.',
              },
              {
                icon: <Clock size={18} className="text-[var(--accent)]" strokeWidth={1.5} />,
                title: 'Open Now',
                desc: 'Filter to shops that are genuinely open right now — no wasted trips.',
              },
              {
                icon: <Tag size={18} className="text-[var(--accent)]" strokeWidth={1.5} />,
                title: 'Offers & Announcements',
                desc: 'Offers and updates from the shops you follow, in one place.',
              },
              {
                icon: <MapPin size={18} className="text-[var(--accent)]" strokeWidth={1.5} />,
                title: 'Shop Details',
                desc: 'Status, location, offers and announcements for any connected shop.',
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
                className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--section)] p-6"
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--a1A)', borderRadius: 11, padding: 9, width: 40, height: 40 }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[1rem] text-[var(--ink)] mb-1">{f.title}</h3>
                  <p className="font-body text-[0.88rem] text-[var(--ink-muted)] leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="flex flex-wrap gap-2 pt-1">
              {appPills.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-[var(--border)] bg-[var(--section)] px-3.5 py-1.5 font-body text-[0.72rem] text-[var(--ink-2)]"
                >
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}