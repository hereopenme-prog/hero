'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/app/components/Container';
import { Reveal } from '@/app/components/Reveal';
import { DeviceVisual } from '@/components/ui/DeviceVisual';
import {
  Building2,
  Smartphone,
  Store,
  Users,
  UserPlus,
  Repeat,
  Banknote,
  Coins,
  Link2,
  PiggyBank,
  Sparkles,
  MapPin,
  Eye,
  Megaphone,
  ShieldAlert,
  Flame,
  Star,
  Navigation,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

/* ─── Intro: the three-sided HERE OPEN ecosystem ─── */
function IntroBand() {
  const chain = [
    { icon: Building2, label: 'Banks', tone: 'emerald' },
    { icon: Smartphone, label: 'Smart Merchant Device', tone: 'emerald' },
    { icon: Store, label: 'Local Businesses', tone: 'emerald' },
    { icon: Users, label: 'Customers', tone: 'teal' },
  ];

  return (
    <Section id="solution" className="relative bg-[var(--sol-band)] pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <Container>
        <Reveal>
          <span className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase mb-4">
            <span className="inline-block h-px w-6 bg-emerald-400 opacity-40" />
            <span className="text-[var(--sol-accent)]">The Solution</span>
            <span className="text-[var(--sol-faint)]">/</span>
            <span className="text-[var(--ink-2)]">Here Open</span>
          </span>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--ink)] leading-tight max-w-3xl mb-5">
            One device. <span className="text-[var(--sol-accent)]">Three stronger relationships.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-[var(--ink-2)] text-base lg:text-lg leading-relaxed max-w-2xl mb-14 lg:mb-20">
            Connect banks, local businesses and customers through a bank-branded smart device.
          </p>
        </Reveal>

        {/* Desktop: linear ecosystem flow */}
        <Reveal>
          <div className="hidden lg:flex items-center">
            {chain.map((node, i) => (
              <div key={node.label} className="flex items-center flex-1">
                <div
                  className={`flex flex-col items-center gap-3 rounded-2xl border px-6 py-5 w-full ${
                    node.tone === 'teal'
                      ? 'border-[var(--sol-tealnode-border)] bg-[var(--sol-tealnode-bg)]'
                      : node.label === 'Smart Merchant Device'
                        ? 'border-emerald-500/30 bg-[var(--sol-band3)] shadow-[0_0_50px_#00D08410]'
                        : 'border-[var(--sol-node-border)] bg-[var(--sol-node-bg)]'
                  }`}
                >
                  <node.icon className={`w-6 h-6 ${node.tone === 'teal' ? 'text-[var(--sol-teal)]' : 'text-[var(--sol-accent)]'}`} />
                  <span className="text-xs font-semibold text-[var(--ink)] text-center leading-snug">{node.label}</span>
                </div>
                {i < chain.length - 1 && (
                  <div className="relative flex-1 h-px bg-emerald-500/20 mx-2" aria-hidden>
                    <span className="flow-h-dot absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile / tablet: vertical ecosystem flow */}
        <div className="flex flex-col items-center lg:hidden">
          {chain.map((node, i) => (
            <div key={node.label} className="flex flex-col items-center">
              <Reveal>
                <div
                  className={`flex items-center gap-3 rounded-2xl border px-5 py-3.5 ${
                    node.tone === 'teal'
                      ? 'border-[var(--sol-tealnode-border)] bg-[var(--sol-tealnode-bg)]'
                      : node.label === 'Smart Merchant Device'
                        ? 'border-emerald-500/30 bg-[var(--sol-band3)] shadow-[0_0_40px_#00D08410]'
                        : 'border-[var(--sol-node-border)] bg-[var(--sol-node-bg)]'
                  }`}
                >
                  <node.icon className={`w-5 h-5 ${node.tone === 'teal' ? 'text-[var(--sol-teal)]' : 'text-[var(--sol-accent)]'}`} />
                  <span className="text-sm font-semibold text-[var(--ink)]">{node.label}</span>
                </div>
              </Reveal>
              {i < chain.length - 1 && (
                <div className="relative flex flex-col items-center py-2" aria-hidden>
                  <div className="h-8 w-px bg-emerald-500/20" />
                  <span className="flow-dot absolute top-2 w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── For Banks ─── */
function BanksBand() {
  const capabilities = [
    { icon: UserPlus, title: 'Merchant acquisition', desc: 'Give local businesses more reasons to choose your bank.' },
    { icon: Repeat, title: 'Daily transactions', desc: 'Build relationships around everyday payment activity.' },
    { icon: Banknote, title: 'Merchant lending', desc: 'Connect eligible merchants with suitable bank-led credit.' },
    { icon: Coins, title: 'Cash-credit opportunities', desc: 'Give loans directly without brokerage fees to fintechs or other intermediaries.' },
    { icon: Link2, title: 'Direct relationships', desc: 'Build trust through ongoing merchant engagement.' },
    { icon: PiggyBank, title: 'CASA growth potential', desc: 'Deepen account relationships and deposit engagement.' },
  ];

  return (
    <Section className="relative bg-[var(--sol-band2)] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--sol-accent)] mb-3">For Banks</p>
        </Reveal>
        <Reveal>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-[var(--ink)]">
            Grow together.
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mt-10 lg:mt-14">
          {capabilities.map((cap, i) => (
            <Reveal key={i} delay={(i % 3) * 60}>
              <div className="group h-full rounded-2xl border border-[var(--sol-card-border)] bg-[var(--sol-card)] backdrop-blur-sm p-5 sm:p-6 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--sol-tile)] mb-4 transition-transform duration-300 group-hover:scale-105">
                  <cap.icon className="w-5 h-5 text-[var(--sol-accent)]" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-[var(--ink)] mb-2 leading-snug">{cap.title}</h4>
                <p className="text-xs sm:text-sm text-[var(--ink-2)] leading-relaxed">{cap.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── For Merchants ─── */
function MerchantsBand() {
  const benefits = [
    { icon: Smartphone, title: 'One-tap shop status', desc: 'Control the device from your mobile. Share open or closed status on the public app with a confidence score.' },
    { icon: MapPin, title: 'Local discovery', desc: 'Help nearby customers find your business.' },
    { icon: Eye, title: 'Business visibility', desc: 'Promote your shop through the Here Open network.' },
    { icon: Megaphone, title: 'Direct offers', desc: 'Share offers and discounts with interested customers.' },
    { icon: ShieldAlert, title: 'Theft-risk alerts', desc: 'Stay informed with supported shop-security alerts.' },
    { icon: Flame, title: 'Fire & smoke alerts', desc: 'Receive safety notifications where supported.' },
  ];

  return (
    <Section className="relative bg-[var(--sol-band)] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--sol-accent)] mb-3">For Merchants</p>
        </Reveal>
        <Reveal>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-[var(--ink)] mb-10 lg:mb-14">
            More value, <span className="text-[var(--sol-accent)]">every day.</span>
          </h3>
        </Reveal>

        {/* Featured positioning card */}
        <Reveal>
          <div className="rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-6 sm:p-8 mb-4 lg:mb-5 flex items-center gap-5">
            <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/15 shrink-0">
              <Sparkles className="w-6 h-6 text-[var(--sol-accent)]" />
            </span>
            <div className="min-w-0">
              <h4 className="text-lg sm:text-xl font-display font-bold text-[var(--ink)] mb-1">A stronger offering</h4>
              <p className="text-sm sm:text-base text-[var(--ink-2)] leading-relaxed">Offer useful services beyond payment confirmation.</p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {benefits.map((b, i) => (
            <Reveal key={i} delay={(i % 3) * 60}>
              <div className="group h-full rounded-2xl border border-[var(--sol-card-border)] bg-[var(--sol-card)] backdrop-blur-sm p-5 sm:p-6 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--sol-tile)] mb-4 transition-transform duration-300 group-hover:scale-105">
                  <b.icon className="w-5 h-5 text-[var(--sol-accent)]" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-[var(--ink)] mb-2 leading-snug">{b.title}</h4>
                <p className="text-xs sm:text-sm text-[var(--ink-2)] leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
    { icon: Eye, title: 'Live shop status', desc: "Check a shop's reported status before travelling." },
    { icon: Star, title: 'Relevant offers', desc: 'Discover offers from the businesses you follow.' },
    { icon: Navigation, title: 'Smarter journeys', desc: 'Plan visits to help save time, fuel and effort.' },
    { icon: CheckCircle2, title: 'More confident visits', desc: 'Make everyday shopping easier with timely updates.' },
  ];

  return (
    <Section className="relative bg-[var(--sol-band)] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--sol-teal)] mb-3">For Customers</p>
        </Reveal>
        <Reveal>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-[var(--ink)] mb-10 lg:mb-14">
            Smarter choices. <span className="text-[var(--sol-teal)]">Easier visits.</span>
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {benefits.map((b, i) => (
            <Reveal key={i} delay={(i % 4) * 60}>
              <div className="group h-full rounded-2xl border border-[var(--sol-card-border)] bg-[var(--sol-card)] backdrop-blur-sm p-5 sm:p-6 hover:border-teal-500/30 transition-all duration-300">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--sol-tealbg)] mb-4 transition-transform duration-300 group-hover:scale-105">
                  <b.icon className="w-5 h-5 text-[var(--sol-teal)]" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-[var(--ink)] mb-2 leading-snug">{b.title}</h4>
                <p className="text-xs sm:text-sm text-[var(--ink-2)] leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
        @keyframes flow-dot {
          0% { transform: translateY(0); opacity: 0.95; }
          100% { transform: translateY(26px); opacity: 0.1; }
        }
        .flow-dot { animation: flow-dot 1.8s ease-in-out infinite; }
        @keyframes flow-h-dot {
          0% { left: 0; opacity: 0.9; }
          100% { left: calc(100% - 8px); opacity: 0.15; }
        }
        .flow-h-dot { animation: flow-h-dot 2.2s ease-in-out infinite; }
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