'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Key, UserCheck, Activity, ClipboardList } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { stagger, scaleIn } from '@/lib/animations';

const features = [
  {
    icon: <Shield size={20} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Secure device identity',
    desc: 'Each device has a unique cryptographic identity.',
  },
  {
    icon: <Key size={20} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Authenticated access',
    desc: 'Only authorized users can manage the device and business.',
  },
  {
    icon: <Lock size={20} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Protected communications',
    desc: 'Data transmitted between device and platform is secured.',
  },
  {
    icon: <UserCheck size={20} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Owner-controlled access',
    desc: 'Business owners control who can access their information.',
  },
  {
    icon: <Activity size={20} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Activity monitoring',
    desc: 'Track device activity and system events.',
  },
  {
    icon: <ClipboardList size={20} className="text-[var(--accent)]" strokeWidth={1.5} />,
    title: 'Auditability',
    desc: 'Maintain a record of important system actions.',
  },
];

export function SecurityTrustSection() {
  return (
    <Section id="security-trust" className="bg-[var(--bg)]">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="SECURITY"
          title="BUILT WITH SECURITY IN MIND."
          description="From device identity to activity logs, security is woven into every layer of the platform."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={scaleIn}
              className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--section)] p-5 transition-colors duration-200 hover:border-[var(--a40)]"
            >
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{ background: 'var(--a1A)', borderRadius: 10, padding: 10, width: 40, height: 40 }}
              >
                {f.icon}
              </div>
              <div>
                <p className="font-display font-semibold text-[0.9rem] text-[var(--ink)] leading-snug">{f.title}</p>
                <p className="mt-1 font-body text-[0.8rem] text-[var(--ink-muted)] leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
