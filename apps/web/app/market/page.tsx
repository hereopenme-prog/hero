import { Metadata } from 'next';
import { TrendingUp, Users, Store, MapPin, Check, ArrowUp } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';

export const metadata: Metadata = {
  title: 'Market Opportunity',
  description:
    'India has 63 million+ small businesses, 300M+ local shop customers, and a ₹50,000 Cr local retail market — yet 80% of shops operate without any digital presence. Discover the opportunity.',
  alternates: {
    canonical: 'https://hereopen.in/market',
  },
};

const stats = [
  {
    icon: <Store className="w-7 h-7" />,
    stat: '63M+',
    label: 'Small Businesses in India',
  },
  {
    icon: <Users className="w-7 h-7" />,
    stat: '300M+',
    label: 'Local Shop Customers',
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    stat: '₹50K Cr',
    label: 'Local Retail Market',
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    stat: '80%',
    label: 'Shops Without Digital Presence',
  },
];

const problems = [
  {
    heading: 'For Customers',
    items: [
      'No way to check if a shop is open before traveling',
      'Waste time and effort on closed shops',
      'Miss offers and updates from favourite shops',
      'No direct communication channel with businesses',
    ],
  },
  {
    heading: 'For Businesses',
    items: [
      'Lose customers due to lack of visibility',
      'No direct connection with customers',
      'Security concerns after closing',
      'No way to share offers instantly',
    ],
  },
];

const solutions = [
  {
    icon: <Check className="w-7 h-7 text-green-action" />,
    title: 'Plug & Play',
    desc: 'Simple IoT device that works out of the box — no technical expertise needed.',
  },
  {
    icon: '₹',
    title: 'Affordable',
    desc: 'Starting from ₹499/month for businesses — accessible to every shop owner.',
  },
  {
    icon: <ArrowUp className="w-7 h-7 text-green-action" />,
    title: 'Scalable',
    desc: 'From single shops to chain stores — grows with your business.',
  },
];

export default function MarketPage() {
  return (
    <main className="min-h-screen bg-white relative noise">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="section pt-32 pb-16">
        <Container>
          <SectionHeader
            eyebrow="Market"
            title="Market Opportunity"
            description="India's 63 million+ small businesses need modern technology solutions. HERE OPEN is positioned to serve this massive, largely untapped market with a product built specifically for local retail."
            align="center"
          />
        </Container>
      </section>

      {/* ── Stats Strip ──────────────────────────────────── */}
      <section className="section py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="card-static text-center p-8"
              >
                <div className="bg-green-action/8 border border-green-action/15 rounded-xl w-14 h-14 flex items-center justify-center text-green-action mx-auto mb-5">
                  {item.icon}
                </div>
                <p className="text-display-md font-extrabold text-green-action mb-1">
                  {item.stat}
                </p>
                <p className="text-body-lg text-neutral-500">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Problem We Solve ─────────────────────────────── */}
      <section className="section py-20">
        <Container>
          <SectionHeader
            eyebrow="Pain Points"
            title="The Problem We Solve"
            description="Both customers and businesses face daily friction that existing solutions ignore."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {problems.map((group) => (
              <div key={group.heading} className="card p-8">
                <h3 className="font-display font-extrabold text-green-forest text-xl mb-5">
                  {group.heading}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-body-lg text-neutral-500"
                    >
                      <span className="text-green-action mt-1 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Our Solution ─────────────────────────────────── */}
      <section className="section py-20">
        <Container>
          <SectionHeader
            eyebrow="Solution"
            title="Our Solution"
            description="A simple, affordable IoT solution that solves both problems simultaneously — one-tap control for owners, real-time visibility for customers."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((item) => (
              <div key={item.title} className="card text-center p-8">
                <div className="bg-green-action/8 border border-green-action/15 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-5 text-green-action text-2xl font-bold">
                  {item.icon}
                </div>
                <h3 className="font-display font-extrabold text-green-forest text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-body-lg text-neutral-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section py-24">
        <Container>
          <div className="bg-neutral-50 border border-green-action/20 shadow-green rounded-4xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-green-action/10 blur-3xl rounded-full" />
            <div className="relative z-10">
              <h2 className="font-display font-extrabold text-green-forest text-display-lg tracking-tight mb-5">
                Join the Revolution
              </h2>
              <p className="text-body-lg text-neutral-500 max-w-2xl mx-auto mb-10">
                Be part of the digital transformation of Indian retail. Partner
                with HERE OPEN and help millions of businesses go online.
              </p>
              <a
                href="/#contact"
                className="bg-green-action text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity inline-block"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Disclaimer ───────────────────────────────────── */}
      <section className="section py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-neutral-400/60 leading-relaxed">
              <span className="font-semibold text-neutral-400/80">Disclaimer:</span>{' '}
              The figures and statistics presented on this page are based on
              publicly available data from industry reports, government
              publications, and market research as of 2024. Actual numbers may
              vary. HERE OPEN makes no guarantee of specific market outcomes.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
