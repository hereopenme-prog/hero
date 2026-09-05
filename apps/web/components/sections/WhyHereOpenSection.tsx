'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, stagger } from '@/lib/animations';

const words = ['CONNECTED', 'VISIBLE', 'INFORMED', 'AWARE'];

export function WhyHereOpenSection() {
  return (
    <Section id="why" className="bg-[var(--bg)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.04)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Why Here Open"
          title="WHY STOP AT PAYMENT NOTIFICATIONS?"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-display font-bold text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] leading-tight text-[var(--ink)] mb-8"
          >
            A payment speaker tells you that money arrived.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-body text-base lg:text-lg text-[var(--accent)] mb-12"
          >
            HERE OPEN is designed to help your business stay:
          </motion.p>

          <motion.div variants={stagger} className="space-y-6">
            {words.map((word, i) => (
              <motion.div
                key={word}
                variants={fadeUp}
                className="font-display font-extrabold text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] tracking-[-0.02em] text-[var(--ink)]"
                style={{
                  textShadow: '0 0 60px rgba(0,208,132,0.12)',
                }}
              >
                {word}
                {i < words.length - 1 && (
                  <span className="text-[var(--ink-dim)] ml-2">/</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
