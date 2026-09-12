'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Container } from '@/app/components/Container';
import { Reveal } from '@/app/components/Reveal';
import { fadeUp, stagger } from '@/lib/animations';
import {
  Building2,
  Store,
  Users,
  Globe,
  Shield,
  AlertTriangle,
  Eye,
  Heart,
  Smartphone,
  PhoneOff,
  TrendingDown,
  Megaphone,
  UserCheck,
  MapPin,
  Accessibility,
  Star,
  Search,
  Package,
  Lock,
  Ticket,
  Repeat,
  UserX,
} from 'lucide-react';

const dimensions = [
  {
    eyebrow: 'DIMENSION 01',
    title: 'Information Blindness',
    subtitle:
      'Banks have trust, customers, infrastructure and financial power — but limited visibility and engagement at the merchant\u2019s everyday point of business.',
    color: 'green',
    accentClass: 'text-emerald-400',
    bgClass: 'bg-emerald-500/5',
    ringClass: 'ring-emerald-500/20',
    borderClass: 'border-emerald-500/20',
    dotClass: 'bg-emerald-400',
    Icon: Building2,
    problems: [
      {
        icon: Globe,
        title: 'No real-time merchant data',
        desc: 'Banks cannot see daily sales, foot traffic, or transaction patterns as they happen.',
      },
      {
        icon: TrendingDown,
        title: 'Merchant churn',
        desc: 'Without daily relevance, banks become background utilities\u2019not partners in growth.',
      },
      {
        icon: Shield,
        title: 'High-cost infrastructure',
        desc: 'POS systems, QR stacks and separate apps cost more and deliver less than one connected device.',
      },
      {
        icon: Smartphone,
        title: 'App fatigue',
        desc: 'Customers ignore bank apps when daily spending happens through merchant-side channels.',
      },
    ],
    secondary: [
      {
        icon: Eye,
        title: 'Low visibility at merchant point',
        desc: 'Banks do not see what happens after the terminal is installed.',
      },
      {
        icon: Megaphone,
        title: 'Low engagement',
        desc: 'Communication outside the transaction moment is weak.',
      },
      {
        icon: Package,
        title: 'Limited product insight',
        desc: 'No real understanding of merchant inventory, demand, or seasonal patterns.',
      },
      {
        icon: Repeat,
        title: 'No merchant loyalty loop',
        desc: 'Banks are replaced when fees drop\u2019not when value rises.',
      },
      {
        icon: Lock,
        title: 'Old infrastructure dependency',
        desc: 'Legacy POS, separate QR apps and third-party gateways create fragile systems.',
      },
      {
        icon: AlertTriangle,
        title: 'Missed early risk signals',
        desc: 'Declining merchant health or irregular activity goes unnoticed until it is late.',
      },
      {
        icon: UserCheck,
        title: 'Weak merchant-bank feedback loop',
        desc: 'Product and underwriting teams lack real merchant operational data.',
      },
      {
        icon: Search,
        title: 'No organic discovery path',
        desc: 'Banks cannot become part of everyday customer merchant discovery.',
      },
    ],
  },
  {
    eyebrow: 'DIMENSION 02',
    title: 'Relationship Breakdown',
    subtitle:
      'Customers may not know when a shop is open, merchants struggle to reach nearby customers, and important risks can go unnoticed.',
    color: 'emerald',
    accentClass: 'text-emerald-400',
    bgClass: 'bg-emerald-500/5',
    ringClass: 'ring-emerald-500/20',
    borderClass: 'border-emerald-500/20',
    dotClass: 'bg-emerald-400',
    Icon: Store,
    problems: [
      {
        icon: Megaphone,
        title: 'Poor merchant visibility',
        desc: 'Local merchants have no affordable way to appear in nearby daily demand.',
      },
      {
        icon: PhoneOff,
        title: 'No simple communication channel',
        desc: 'There is no natural, everyday way for a merchant to stay in touch with nearby buyers.',
      },
      {
        icon: MapPin,
        title: 'Local discovery is broken',
        desc: 'Customers rely on old listings, not live merchant status.',
      },
      {
        icon: TrendingDown,
        title: 'Declining repeat visits',
        desc: 'Without ongoing connection, customers forget and move on.',
      },
    ],
    secondary: [
      {
        icon: UserX,
        title: 'No owned customer channel',
        desc: 'Merchants depend on word of mouth, foot traffic, or costly ads.',
      },
      {
        icon: Smartphone,
        title: 'Fragmented digital tools',
        desc: 'WhatsApp, social media and listings do not combine into one merchant system.',
      },
      {
        icon: Globe,
        title: 'No discovery system',
        desc: 'Local customers cannot easily find which nearby shops are open, active or offering something relevant.',
      },
      {
        icon: Heart,
        title: 'Relationships stay shallow',
        desc: 'Without ongoing communication, merchant and customer stay strangers.',
      },
      {
        icon: Accessibility,
        title: 'Access barriers',
        desc: 'Many merchants struggle with English-heavy digital tools that are not designed for local use.',
      },
      {
        icon: AlertTriangle,
        title: 'No fraud buffer',
        desc: 'Merchants become exposed once relationships and transaction trust are unclear.',
      },
      {
        icon: Ticket,
        title: 'Offering leakage',
        desc: 'Discounts, updates and offers lose value if they do not reach nearby customers in time.',
      },
      {
        icon: MapPin,
        title: 'Location relevance ignored',
        desc: 'Physical proximity is not matched by digital relevance.',
      },
    ],
  },
  {
    eyebrow: 'DIMENSION 03',
    title: 'Trust Erosion',
    subtitle:
      'Customers want certainty, convenience and an easier way to discover nearby businesses.',
    color: 'teal',
    accentClass: 'text-teal-400',
    bgClass: 'bg-teal-500/5',
    ringClass: 'ring-teal-500/20',
    borderClass: 'border-teal-500/20',
    dotClass: 'bg-teal-400',
    Icon: Users,
    problems: [
      {
        icon: Shield,
        title: 'No trust anchor',
        desc: 'Customers want a clear way to know the business is safe, active and worth visiting.',
      },
      {
        icon: Eye,
        title: 'Inconsistent experiences',
        desc: 'Different shops use different systems, creating confusion and friction.',
      },
      {
        icon: Heart,
        title: 'Discoverability gap',
        desc: 'Good nearby businesses remain invisible to people actually looking for them.',
      },
      {
        icon: Globe,
        title: 'Convenience expectation',
        desc: 'Customers expect fast, local and simple\u2019not another login, download or unfamiliar flow.',
      },
    ],
    secondary: [
      {
        icon: Lock,
        title: 'No trust system',
        desc: 'Customers need repeated positive experience before trusting a merchant\u2019s online presence.',
      },
      {
        icon: Search,
        title: 'Search is impersonal',
        desc: 'Generic platforms do not reflect the live, local nature of nearby shopping.',
      },
      {
        icon: Repeat,
        title: 'Low repeat discovery',
        desc: 'Customers do not naturally return unless the merchant creates ongoing presence.',
      },
      {
        icon: Ticket,
        title: 'Offer fatigue',
        desc: 'Generic promotions feel noisy rather than useful.',
      },
      {
        icon: Smartphone,
        title: 'Device dependency',
        desc: 'Customers want phone-based convenience without unwanted app installs.',
      },
      {
        icon: UserX,
        title: 'Relationship disconnection',
        desc: 'No simple shared layer keeps customer and merchant connected.',
      },
      {
        icon: Star,
        title: 'Weak reputation transfer',
        desc: 'Trust built offline does not easily travel into digital awareness.',
      },
      {
        icon: Accessibility,
        title: 'Accessibility neglect',
        desc: 'Many local experiences still fail basic convenience and accessibility standards.',
      },
    ],
  },
];

const DimensionHeader = ({
  dimension,
  index,
}: {
  dimension: (typeof dimensions)[number];
  index: number;
}) => {
  const Icon = dimension.Icon;
  return (
    <div className="mb-8">
      <Reveal>
        <span className={`inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase ${dimension.accentClass} mb-4`}>
          <span className="inline-block h-px w-6 bg-current opacity-40" />
          {dimension.eyebrow}
        </span>
      </Reveal>
      <Reveal>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-50 mb-3 leading-tight">
          {dimension.title}
        </h3>
      </Reveal>
      <Reveal>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
          {dimension.subtitle}
        </p>
      </Reveal>
    </div>
  );
};

export function ProblemSection() {
  return (
    <Section id="challenge" className="relative bg-[#050505] py-28 lg:py-40">
      <Container className="max-w-[1060px]">
        {/* ── Hero ── */}
        <Reveal>
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4">
            <span className="inline-block h-px w-6 bg-current opacity-40" />
            THE PROBLEM
          </span>
        </Reveal>

        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-zinc-50 leading-tight mb-4">
            The Problem — <span className="text-zinc-400">Three Dimensions</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
            Today, banks, merchants and customers face different problems because they are not
            connected in one simple, real-time experience.
          </p>
        </Reveal>

        {/* Visual indicators */}
        <Reveal>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-16 max-w-3xl">
            {[
              { label: 'BANKS', sub: 'Information Blindness', color: 'bg-emerald-400', Icon: Building2 },
              { label: 'MERCHANTS', sub: 'Relationship Breakdown', color: 'bg-emerald-400', Icon: Store },
              { label: 'CUSTOMERS', sub: 'Trust Erosion', color: 'bg-teal-400', Icon: Users },
            ].map((item, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm p-4 sm:p-5"
              >
                <div className={`w-2 h-2 rounded-full ${item.color} mb-3`} />
                <div className="flex items-center gap-2 mb-1">
                  <item.Icon className="w-4 h-4 text-zinc-500" />
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-zinc-500">
                    {item.label}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-zinc-300 font-medium">{item.sub}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Dimensions ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-20"
        >
          {dimensions.map((dimension, i) => (
            <motion.div key={i} variants={fadeUp}>
              <DimensionHeader dimension={dimension} index={i} />
              <div className="space-y-10">
                {/* Primary grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {dimension.problems.map((problem, pi) => {
                    const PIcon = problem.icon;
                    return (
                      <div
                        key={pi}
                        className={`rounded-2xl border ${dimension.borderClass} ${dimension.bgClass} p-5 transition hover:border-zinc-600/40 ${
                          pi === 0
                            ? 'lg:col-span-2 lg:row-span-2 flex flex-col justify-between min-h-[260px]'
                            : ''
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <div
                              className={`flex items-center justify-center w-10 h-10 rounded-xl ${dimension.bgClass}`}
                            >
                              <PIcon className={`w-5 h-5 ${dimension.accentClass}`} />
                            </div>
                            {pi === 0 && (
                              <span
                                className={`inline-block w-2 h-2 rounded-full ${dimension.dotClass} animate-pulse`}
                              />
                            )}
                          </div>
                          <h4 className="text-sm sm:text-base font-semibold text-zinc-100 mb-1.5 leading-snug">
                            {problem.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                            {problem.desc}
                          </p>
                        </div>
                        {pi === 0 && (
                          <div className="mt-6 pt-4 border-t border-zinc-800/40">
                            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-zinc-500">
                              <span className="text-zinc-300 font-medium">OPEN</span> device creates
                              a direct real-time view
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Secondary grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {dimension.secondary.map((problem, si) => {
                    const SIcon = problem.icon;
                    return (
                      <div
                        key={si}
                        className={`rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm p-4 sm:p-5 hover:bg-zinc-900/60 transition-colors`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-800/60">
                            <SIcon className="w-4 h-4 text-zinc-400" />
                          </div>
                          <h4 className="text-sm font-semibold text-zinc-200 leading-snug">
                            {problem.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pl-12">
                          {problem.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Transition ── */}
        <div className="mt-24 text-center">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 mb-3">
              THE REAL PROBLEM
            </p>
          </Reveal>
          <Reveal>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-50 mb-4">
              Banks, Merchants and Customers
              <span className="block text-zinc-400 mt-1">are disconnected.</span>
            </h3>
          </Reveal>

          <Reveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 my-8 text-sm text-zinc-400 font-medium">
              <span className="px-4 py-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                BANKS
              </span>
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-zinc-600 hidden sm:block shrink-0">
                <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.4" />
              </svg>
              <span className="text-zinc-700 font-mono text-xs hidden sm:block">DISCONNECTED</span>
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-zinc-600 hidden sm:block shrink-0">
                <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.4" />
              </svg>
              <span className="px-4 py-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                MERCHANTS
              </span>
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-zinc-600 hidden sm:block shrink-0">
                <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.4" />
              </svg>
              <span className="text-zinc-700 font-mono text-xs hidden sm:block">DISCONNECTED</span>
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-zinc-600 hidden sm:block shrink-0">
                <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.4" />
              </svg>
              <span className="px-4 py-2 rounded-xl border border-teal-500/20 bg-teal-500/5">
                CUSTOMERS
              </span>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-zinc-300 text-lg sm:text-xl font-display font-semibold mb-8">
              What if one device connected them all?
            </p>
          </Reveal>
          <Reveal>
            <a
              href="#solution"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-500 text-white font-semibold text-sm tracking-wide hover:bg-emerald-400 transition-colors"
            >
              See the Solution
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-px">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
