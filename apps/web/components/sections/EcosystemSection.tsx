'use client';

import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EcosystemMap } from '@/components/ui/EcosystemMap';

export function EcosystemSection() {
  return (
    <Section id="ecosystem" className="bg-[var(--bg)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(69,245,154,0.045) 0%, transparent 60%)' }}
      />
      <Container className="relative z-10">
        <SectionHeading
          accent="mint"
          size="lg"
          eyebrow="ECOSYSTEM"
          title="THE HERE OPEN ECOSYSTEM"
          description="A connected platform designed to support every aspect of your business."
        />

        <EcosystemMap />

        <p className="mx-auto mt-10 max-w-2xl text-center font-body text-[13px] text-[var(--ink-dim)] leading-relaxed">
          Every node is designed to be configurable and available depending on integration. The platform grows as
          supported capabilities are added.
        </p>
      </Container>
    </Section>
  );
}