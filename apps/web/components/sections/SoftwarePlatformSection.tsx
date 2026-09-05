'use client';

import { Smartphone, Users, Store, Bell, Megaphone, ShieldCheck, BarChart3 } from 'lucide-react';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PlatformArchitecture } from '@/components/ui/PlatformArchitecture';

const capabilities = [
  { icon: Smartphone, label: 'DEVICE MANAGEMENT', desc: 'Provision, monitor and manage devices.' },
  { icon: Users, label: 'BUSINESS MANAGEMENT', desc: 'Onboard and manage business profiles.' },
  { icon: Store, label: 'SHOP STATUS', desc: 'OPEN / CLOSED visibility in real time.' },
  { icon: Bell, label: 'ALERTS', desc: 'Configured alert delivery for supported events.' },
  { icon: Megaphone, label: 'COMMUNICATION', desc: 'Offers and announcements.' },
  { icon: ShieldCheck, label: 'SAFETY & SECURITY', desc: 'Designed to support configured monitoring.' },
  { icon: BarChart3, label: 'ANALYTICS', desc: 'Platform-level insights where supported.' },
];

export function SoftwarePlatformSection() {
  return (
    <Section id="platform" className="bg-[#050708]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 45% at 50% 40%, rgba(69,245,154,0.05) 0%, transparent 60%)' }}
      />
      <Container className="relative z-10">
        <SectionHeading
          accent="mint"
          size="lg"
          eyebrow="THE CONNECTED PLATFORM"
          title="ONE PLATFORM."
          titleAccent="EVERY CONNECTION."
          description="A physical business becomes visible in real time. The platform connects the shop, the business owner and the customer into one live ecosystem."
        />

        <PlatformArchitecture />

        {/* Platform capabilities */}
        <div className="mx-auto mt-16 max-w-4xl lg:mt-20">
          <p className="text-center font-body text-[11px] font-semibold tracking-[0.24em] text-white/30 uppercase">
            Platform Capabilities
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="group flex flex-col items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-4 text-center transition-colors duration-300 hover:border-[#45F59A]/25"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-[#45F59A]/15 bg-[#45F59A]/10 text-[#45F59A]">
                  <cap.icon size={15} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-display text-[11px] font-bold tracking-wide text-[#E8EDF2] leading-tight">
                    {cap.label}
                  </p>
                  <p className="mt-1 font-body text-[11px] text-[#8A9BAE] leading-snug">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center font-body text-[13px] text-[#5C6B7A] leading-relaxed max-w-2xl mx-auto">
            Banks and financial institutions can also connect as partners and platform operators. Capabilities are
            designed to be configurable depending on integration.
          </p>
        </div>
      </Container>
    </Section>
  );
}