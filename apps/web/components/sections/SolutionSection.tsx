'use client';

import { motion } from 'framer-motion';
import { Eye, ShieldCheck, MessageSquare, Store, Network, Users } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const pillars = [
  {
    icon: <Eye size={22} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Real-Time Visibility',
    desc: 'Customers know the exact OPEN or CLOSED status of your shop — live, from their phone.',
  },
  {
    icon: <ShieldCheck size={22} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Smart Security',
    desc: 'Security, fire and smoke monitoring activate the moment your shop closes, with instant alerts.',
  },
  {
    icon: <MessageSquare size={22} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Customer Connection',
    desc: 'Owners communicate offers, updates and announcements directly to the customers who follow them.',
  },
];

const flow = [
  { icon: <Store size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'Business', sub: 'Your shop, your status' },
  { icon: <Network size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'HERE OPEN', sub: 'The connected platform', center: true },
  { icon: <Users size={22} className="text-[var(--accent)]" strokeWidth={1.5} />, label: 'Customer', sub: 'Real-time clarity' },
];

export function SolutionSection() {
  return (
    <Section id="solution" className="bg-[var(--section-2)]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="The Solution"
          title="MEET HERE OPEN."
          description="One IoT-powered platform that gives every physical shop real-time truth — for owners and customers alike."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: flow visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="relative"
          >
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--a00)] via-[var(--a40)] to-[var(--a00)] hidden lg:block" />
            <div className="space-y-5">
              {flow.map((n, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className={`relative rounded-2xl p-6 border ${
                    n.center
                      ? 'border-[var(--a50)] bg-[var(--a0D)] shadow-[0_0_40px_var(--a12)]'
                      : 'border-[var(--border)] bg-[var(--section)]'
                  }`}
                >
                  {n.center && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] px-3 py-0.5 font-body text-[10px] font-bold text-[var(--accent-ink)] tracking-wider">
                      CORE
                    </span>
                  )}
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--a1A)', borderRadius: 12, padding: 10, width: 46, height: 46 }}
                    >
                      {n.icon}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-[1rem] text-[var(--ink)]">{n.label}</p>
                      <p className="font-body text-[0.85rem] text-[var(--ink-dim)]">{n.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: pillars */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="space-y-5"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={scaleIn}
                className="group rounded-2xl bg-[var(--section)] border border-[var(--border)] p-7 flex gap-5 transition-colors duration-200 hover:border-[var(--a40)]"
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--a1A)', borderRadius: 12, padding: 10, width: 46, height: 46 }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[1rem] text-[var(--ink)] mb-1.5">{p.title}</h3>
                  <p className="font-body text-[0.9rem] text-[var(--ink-muted)] leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--section)] px-5 py-4"
            >
              <span className="status-dot-pulse inline-block w-2 h-2 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />
              <p className="font-body text-[0.8rem] text-[var(--ink-muted)] leading-relaxed">
                Three pillars. One device. From a single tap in the owner app to every customer's screen — in real time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}