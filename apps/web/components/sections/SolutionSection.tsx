'use client';

import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/app/components/Container';
import { Reveal } from '@/app/components/Reveal';
import { PNodeBadges, PNumberedRows } from '@/components/sections/partnerLook';
import { DeviceVisual } from '@/components/ui/DeviceVisual';
import {
  Building2,
  Smartphone,
  Store,
  Users,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

/* ─── Intro: the three-sided HERE OPEN ecosystem ─── */
function IntroBand() {
  return (
    <Section id="solution" className="relative bg-[var(--sol-band)] pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <Container>
        <Reveal>
          <span className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase mb-4">
            <span className="inline-block h-px w-6 bg-[var(--sol-accent)] opacity-40" />
            <span className="text-[var(--sol-accent)]">The Solution</span>
            <span className="text-[var(--sol-faint)]">/</span>
            <span className="text-[var(--ink-2)]">Here Open</span>
          </span>
        </Reveal>
        <SectionHeading
          eyebrow="THE SOLUTION"
          title="One device."
          titleAccent="Three stronger relationships."
          description="Connect banks, local businesses and customers through a bank-branded smart device."
        />
        <PNodeBadges
          nodes={[
            { icon: <Building2 size={20} className="text-[var(--sol-accent)]" />, label: 'BANKS', caption: 'Grow together.' },
            { icon: <Smartphone size={20} className="text-[var(--sol-accent)]" />, label: 'SMART MERCHANT DEVICE', caption: 'Bank-Branded Experience' },
            { icon: <Store size={20} className="text-[var(--sol-accent)]" />, label: 'LOCAL BUSINESSES', caption: 'More value, every day.' },
            { icon: <Users size={20} className="text-[var(--sol-teal)]" />, label: 'CUSTOMERS', caption: 'Smarter choices. Easier visits.' },
          ]}
        />
      </Container>
    </Section>
  );
}

/* ─── For Banks ─── */
function BanksBand() {
  const capabilities = [
    { title: 'Merchant acquisition', desc: 'Give local businesses more reasons to choose your bank.' },
    { title: 'Daily transactions', desc: 'Build relationships around everyday payment activity.' },
    { title: 'Merchant lending', desc: 'Connect eligible merchants with suitable bank-led credit.' },
    { title: 'Cash-credit opportunities', desc: 'Give loans directly without brokerage fees to fintechs or other intermediaries.' },
    { title: 'Direct relationships', desc: 'Build trust through ongoing merchant engagement.' },
    { title: 'CASA growth potential', desc: 'Deepen account relationships and deposit engagement.' },
  ];

  return (
    <Section className="relative bg-[var(--sol-band2)] py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="For Banks" title="Grow together." />
        <PNumberedRows
          items={capabilities.map((cap) => ({ title: cap.title, caption: cap.desc }))}
        />
      </Container>
    </Section>
  );
}

/* ─── For Merchants ─── */
function MerchantsBand() {
  const benefits = [
    { title: 'One-tap shop status', desc: 'Control the device from your mobile. Share open or closed status on the public app with a confidence score.' },
    { title: 'Local discovery', desc: 'Help nearby customers find your business.' },
    { title: 'Business visibility', desc: 'Promote your shop through the Here Open network.' },
    { title: 'Direct offers', desc: 'Share offers and discounts with interested customers.' },
    { title: 'Theft-risk alerts', desc: 'Stay informed with supported shop-security alerts.' },
    { title: 'Fire & smoke alerts', desc: 'Receive safety notifications where supported.' },
  ];

  return (
    <Section className="relative bg-[var(--sol-band)] py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="For Merchants" title="More value," titleAccent="every day." />

        {/* Featured positioning card */}
        <Reveal>
          <div className="rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-6 sm:p-8 mb-4 lg:mb-5 flex items-center gap-5 max-w-3xl mx-auto">
            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/15 shrink-0">
              <Sparkles className="w-6 h-6 text-[var(--sol-accent)]" />
            </span>
            <div className="min-w-0">
              <h4 className="text-lg sm:text-xl font-display font-bold text-[var(--ink)] mb-1">A stronger offering</h4>
              <p className="text-sm sm:text-base text-[var(--ink-2)] leading-relaxed">Offer useful services beyond payment confirmation.</p>
            </div>
          </div>
        </Reveal>

        <PNumberedRows
          items={benefits.map((b) => ({ title: b.title, caption: b.desc }))}
        />
      </Container>
    </Section>
  );
}

/* ─── Smart Merchant Device (bank-branded showcase) ─── */
function DeviceBand() {
  return (
    <Section className="relative bg-[var(--sol-band2)] py-20 lg:py-28 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--sol-accent)] mb-3">Bank-Branded Experience</p>
          </Reveal>
          <Reveal>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--ink)] mb-3">
              Smart Merchant Device
            </h3>
          </Reveal>
          <Reveal>
            <p className="text-[var(--ink-muted)] font-mono text-xs tracking-[0.2em] uppercase mb-12 lg:mb-16">
              Illustrative device design
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative mx-auto w-fit">
            <div className="absolute inset-0 -z-10 m-auto w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-[var(--sol-tile)] blur-3xl" aria-hidden />
            <div className="absolute inset-0 -z-10 m-auto rounded-full border border-emerald-500/10 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]" aria-hidden />
            <div className="device-float">
              <DeviceVisual size="lg" className="mx-auto" />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ─── For Customers ─── */
function CustomersBand() {
  const benefits = [
    { title: 'Live shop status', desc: "Check a shop's reported status before travelling." },
    { title: 'Relevant offers', desc: 'Discover offers from the businesses you follow.' },
    { title: 'Smarter journeys', desc: 'Plan visits to help save time, fuel and effort.' },
    { title: 'More confident visits', desc: 'Make everyday shopping easier with timely updates.' },
  ];

  return (
    <Section className="relative bg-[var(--sol-band)] py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="For Customers" title="Smarter choices." titleAccent="Easier visits." />
        <PNumberedRows
          items={benefits.map((b) => ({ title: b.title, caption: b.desc }))}
        />
      </Container>
    </Section>
  );
}

/* ─── Disclaimer ─── */
function DisclaimerBand() {
  return (
    <Section className="relative bg-[var(--sol-band)] pb-6 lg:pb-10">
      <Container>
        <div className="border-t border-[var(--sol-card-border)] pt-8 lg:pt-10">
          <Reveal>
            <p className="mx-auto max-w-2xl text-center text-xs text-[var(--sol-faint)] leading-relaxed">
              Credit is subject to bank eligibility and approval. Monitoring requires supported hardware, connectivity and configuration.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ─── Closing brand message + CTA ─── */
function ClosingBand() {
  return (
    <Section className="relative bg-[var(--sol-band3)] py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[680px] h-[360px] rounded-full bg-[var(--sol-tile)] blur-[120px]" />
      </div>
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[var(--sol-accent)] mb-6">
              People. Payments. Progress.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-[var(--ink)] leading-snug mb-10 lg:mb-14">
              Built for banks.<br />
              <span className="text-[var(--sol-accent)]">Designed around local business.</span>
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base lg:text-lg text-[var(--ink-2)] max-w-xl mb-10">
              Build the next merchant experience with Here Open.
            </p>
          </Reveal>
          <Reveal>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-emerald-500 text-[#06100A] font-bold text-sm tracking-wide hover:bg-emerald-400 transition-colors duration-200 shadow-[0_0_40px_#00D08440]"
            >
              Discuss a bank partnership
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ─── Main ─── */
export function SolutionSection() {
  return (
    <div className="relative">
      <style>{`
        @keyframes device-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .device-float { animation: device-float 7s ease-in-out infinite; }
      `}</style>
      <IntroBand />
      <BanksBand />
      <MerchantsBand />
      <DeviceBand />
      <CustomersBand />
      <DisclaimerBand />
      <ClosingBand />
    </div>
  );
}