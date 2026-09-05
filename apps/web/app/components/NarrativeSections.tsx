'use client';

import { useRef, type ReactNode } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, type Variants } from 'framer-motion';
import {
  Store, Users, Eye, Bell, Shield, Smartphone, Zap, CheckCircle, ArrowRight,
  AlertTriangle, Wifi, UtensilsCrossed, Pill, Scissors, Wrench,
  ShoppingBag, Building2, GraduationCap, Bed, Warehouse, MapPin, Cpu, TrendingUp, Network,
  Lock, LayoutDashboard, Award, Layers, BadgeCheck,
  Flame, Gauge, Timer, DoorOpen, MessageCircle, Megaphone, Server, Radio, Plug,
  Workflow, Heart,
} from 'lucide-react';
import { Container } from './Container';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

/* ═══════════════════════════════════════════════════════
   1. PROBLEMS FACED BY BUSINESS OWNERS AND CUSTOMERS
   ═══════════════════════════════════════════════════════ */

const ownerProblems = [
  'Customers don\u2019t know whether the shop is actually open',
  'Missed customers and lost footfall',
  'Limited visibility across multiple locations',
  'Safety and security concerns after hours',
  'Fragmented customer communication',
  'Lack of real-time operational visibility',
];

const customerProblems = [
  'Wasted trips to closed businesses',
  'Uncertain opening status before visiting',
  'Difficult communication with shops',
  'Missed offers and announcements',
  'Uncertainty before every visit',
];

function ProblemColumn({
  title,
  icon,
  items,
  from,
}: {
  title: string;
  icon: ReactNode;
  items: string[];
  from: 'left' | 'right';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, boxShadow: '0 0 0 rgba(56, 142, 60, 0)' }}
      animate={
        inView
          ? { opacity: 1, y: 0, boxShadow: '0 0 26px rgba(56, 142, 60, 0.14), 0 6px 18px rgba(56, 142, 60, 0.06)' }
          : undefined
      }
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="card h-full"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 bg-green-action/8 border border-green-action/15 rounded-xl flex items-center justify-center text-green-action">
          {icon}
        </div>
        <h3 className="text-display-sm font-bold text-green-forest">{title}</h3>
      </div>
      <ul className="space-y-3.5">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: from === 'left' ? -24 : 24 }}
            animate={inView ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 + i * 0.08 }}
            className="flex items-start gap-3"
          >
            <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mt-0.5 flex-shrink-0">
              <span className="text-[10px] font-bold">✕</span>
            </div>
            <span className="text-body-sm text-black leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ProblemsSection() {
  return (
    <section id="problems" className="section relative">
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="The Problem"
          title="Real Businesses Face"
          titleAccent="Real Problems Every Day"
          description="When owners and customers can't see the truth in real time, everyone loses — time, money, and confidence."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <ProblemColumn
            title="Business Owners"
            icon={<Store className="w-5 h-5" />}
            items={ownerProblems}
            from="left"
          />
          <ProblemColumn
            title="Customers"
            icon={<Users className="w-5 h-5" />}
            items={customerProblems}
            from="right"
          />
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   2. SOLUTION
   ═══════════════════════════════════════════════════════ */

const solutionHighlights = [
  { icon: <Eye className="w-4 h-4" />, text: 'Real-time OPEN / CLOSED visibility' },
  { icon: <Shield className="w-4 h-4" />, text: '24/7 safety monitoring' },
  { icon: <Bell className="w-4 h-4" />, text: 'Instant alerts & notifications' },
  { icon: <MessageCircle className="w-4 h-4" />, text: 'Direct owner\u2013customer communication' },
  { icon: <Megaphone className="w-4 h-4" />, text: 'Offers & announcements' },
  { icon: <Wifi className="w-4 h-4" />, text: 'All connected through HERE OPEN IoT' },
];

const solutionFlowContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const solutionNodeVar: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const solutionDashVar: Variants = {
  hidden: { strokeDashoffset: 0 },
  visible: {
    strokeDashoffset: [0, -11],
    transition: { duration: 1.4, ease: 'linear', repeat: Infinity },
  },
};

export function SolutionSection() {
  return (
    <section id="solution" className="section relative overflow-hidden">
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="The Solution"
          title="One Connected Platform"
          titleAccent="For Every Physical Business"
          description="HERE OPEN is the real-time digital layer that connects businesses, customers, and IoT infrastructure."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={solutionFlowContainer}
          className="relative max-w-4xl mx-auto mb-10"
        >
          {/* Animated dashed connector */}
          <motion.svg
            variants={{ hidden: {}, visible: {} }}
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <motion.line
              x1="4"
              y1="50"
              x2="96"
              y2="50"
              stroke="#388E3C"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="6 5"
              variants={solutionDashVar}
            />
          </motion.svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {[
              { icon: <Store className="w-6 h-6" />, label: 'Business', sub: 'Your shop, your status', center: false },
              { icon: <Network className="w-6 h-6" />, label: 'HERE OPEN', sub: 'The connected platform', center: true },
              { icon: <Users className="w-6 h-6" />, label: 'Customer', sub: 'Real-time clarity', center: false },
            ].map((n, i) => (
              <motion.div
                key={i}
                variants={solutionNodeVar}
                className={`relative flex items-center gap-4 border-2 rounded-2xl p-5 ${
                  n.center ? 'border-green-action/35 shadow-green bg-white' : 'border-neutral-200 bg-white'
                }`}
              >
                <div className="relative w-12 h-12 bg-green-action/10 rounded-xl flex items-center justify-center text-green-action flex-shrink-0">
                  {n.center && <span className="radar-ping absolute inset-0 rounded-full border-[3px] border-green-action/40" />}
                  {n.icon}
                </div>
                <div>
                  <p className="text-[15px] font-bold text-green-forest">{n.label}</p>
                  <p className="text-[12px] text-black">{n.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Reveal>
          <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 md:p-8 mb-10">
            <div className="flex items-center justify-center gap-4 flex-wrap text-[13px] font-semibold text-green-forest mb-6">
              <span className="inline-flex items-center gap-1.5"><Store className="w-4 h-4 text-green-action" /> Business</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
              <span className="inline-flex items-center gap-1.5"><Network className="w-4 h-4 text-green-action" /> HERE OPEN</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
              <span className="inline-flex items-center gap-1.5"><Users className="w-4 h-4 text-green-action" /> Customer</span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`h-1.5 rounded-full ${i < 4 ? 'bg-green-action' : 'bg-neutral-200'}`} style={{ width: i < 4 ? '24px' : '12px' }} />
              ))}
            </div>
            <p className="text-[12px] text-black text-center max-w-[640px] mx-auto leading-relaxed">
              One connected flow: your business truth flows from the shop, through the HERE OPEN platform and IoT infrastructure, to your customers in real time.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutionHighlights.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="card group h-full">
                <div className="w-9 h-9 bg-green-action/8 border border-green-action/15 rounded-lg flex items-center justify-center text-green-action mb-4 group-hover:shadow-green transition-shadow">
                  {f.icon}
                </div>
                <p className="text-[14px] font-semibold text-black leading-snug">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   3. HOW IT WORKS
   ═══════════════════════════════════════════════════════ */

const steps = [
  { icon: <Plug className="w-5 h-5" />, title: 'Connect', desc: 'The HERE OPEN IoT device connects to your shop — no complex setup, no expensive infrastructure.' },
  { icon: <Radio className="w-5 h-5" />, title: 'Detect', desc: 'Sensors detect status, temperature, smoke, motion, and environment changes continuously.' },
  { icon: <Eye className="w-5 h-5" />, title: 'Monitor', desc: 'The platform monitors your shop around the clock and syncs to the cloud in real time.' },
  { icon: <Users className="w-5 h-5" />, title: 'Connect', desc: 'Customers see live status, and you stay connected with direct communication tools.' },
  { icon: <Zap className="w-5 h-5" />, title: 'Respond', desc: 'Act instantly — change status, broadcast offers, or respond to safety alerts from your phone.' },
];

const stepsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepNumberVar: Variants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -90 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 75%', 'end 60%'],
  });

  return (
    <section id="how-it-works" ref={sectionRef} className="section relative">
      <div className="absolute inset-0 bg-neutral-50" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="How It Works"
          title="From Connection"
          titleAccent="To Response In Five Steps"
          description="A simple, visible loop that puts your business truth in every customer's pocket."
        />

        <div className="relative max-w-3xl mx-auto pb-2">
          {/* Static track */}
          <div className="absolute left-[20px] top-2 bottom-2 w-[2px] bg-green-action/15 rounded-full" />
          {/* Growing fill, drawn downward on scroll */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[20px] top-2 bottom-2 w-[2px] bg-green-action rounded-full origin-top"
          />
          {/* Flowing connector dot */}
          <span className="timeline-flow" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stepsContainer}
          >
            {steps.map((s, i) => (
              <div key={i} className="relative flex items-start gap-6 pb-8 last:pb-2">
                <motion.div
                  variants={stepNumberVar}
                  className="relative z-10 w-11 h-11 rounded-full bg-white border-2 border-green-action text-green-action text-[13px] font-extrabold flex items-center justify-center shadow-card flex-shrink-0"
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.div>
                <div className="card group flex-1 transition-all duration-200 hover:-translate-y-1 hover:shadow-green hover:border-green-action/25">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 bg-green-action/8 border border-green-action/15 rounded-xl flex items-center justify-center text-green-action group-hover:shadow-green transition-shadow flex-shrink-0">
                      {s.icon}
                    </div>
                    <h3 className="text-[15px] font-bold text-green-forest">{s.title}</h3>
                  </div>
                  <p className="text-body-sm text-black leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <Reveal className="mt-8">
          <div className="inline-flex items-start gap-2.5 bg-green-action/8 border border-green-action/15 rounded-xl px-5 py-3.5 text-left">
            <AlertTriangle className="w-4 h-4 text-green-action mt-0.5 flex-shrink-0" />
            <p className="text-[12px] text-black leading-relaxed">
              Platform demonstrations may use simulated IoT data. Production hardware integrations will be connected through the HERE OPEN IoT abstraction layer.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   4. FEATURES
   ═══════════════════════════════════════════════════════ */

const features = [
  { icon: <Eye className="w-5 h-5" />, title: 'Real-Time OPEN/CLOSED Status', desc: 'Live status visibility for every connected location.' },
  { icon: <Bell className="w-5 h-5" />, title: 'Instant Alerts', desc: 'Status changes and important updates delivered in seconds.' },
  { icon: <Shield className="w-5 h-5" />, title: '24/7 Safety Monitoring', desc: 'Continuous protection even when your shop is closed.' },
  { icon: <Flame className="w-5 h-5" />, title: 'Fire Event Detection', desc: 'Temperature and smoke sensing with immediate notification.' },
  { icon: <Smartphone className="w-5 h-5" />, title: 'Customer Mobile App', desc: 'One tap to know any shop status instantly.' },
  { icon: <MessageCircle className="w-5 h-5" />, title: 'Direct Customer Communication', desc: 'Talk to your customers without third-party platforms.' },
  { icon: <Megaphone className="w-5 h-5" />, title: 'Offers & Announcements', desc: 'Publish offers that reach the right people right away.' },
  { icon: <Building2 className="w-5 h-5" />, title: 'Multi-Shop Management', desc: 'Run many locations from one simple dashboard.' },
  { icon: <Users className="w-5 h-5" />, title: 'Team & Role Management', desc: 'Assign roles and control who updates what.' },
  { icon: <LayoutDashboard className="w-5 h-5" />, title: 'Business Dashboard', desc: 'Operational insight with everything in one place.' },
  { icon: <Cpu className="w-5 h-5" />, title: 'IoT Device Management', desc: 'Health, connectivity, and lifecycle for every device.' },
  { icon: <Lock className="w-5 h-5" />, title: 'Role-Based Security', desc: 'Granular access control across staff and locations.' },
  { icon: <MapPin className="w-5 h-5" />, title: 'Location Visibility', desc: 'Customers discover open businesses near them.' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Push Notifications', desc: 'Timely updates straight to customer phones.' },
];

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="features" className="section relative">
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Features"
          title="Everything You Need"
          titleAccent="To Run A Visible Business"
          description="Purpose-built tools for owners, staff, and customers — designed together, not patched together."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.45, ease: 'easeOut', delay: Math.floor(i / 4) * 0.3 + (i % 4) * 0.1 }}
              className="h-full"
            >
              <div className="card feature-card card-shimmer relative overflow-hidden h-full">
                <div className="feature-icon w-10 h-10 bg-green-action/8 border border-green-action/15 rounded-lg flex items-center justify-center text-green-action mb-4">
                  {f.icon}
                </div>
                <h3 className="text-[14px] font-bold text-green-forest mb-1.5 leading-snug">{f.title}</h3>
                <p className="text-body-sm text-black leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   5. BENEFITS FOR BUSINESS OWNERS
   ═══════════════════════════════════════════════════════ */

const ownerBenefits = [
  { icon: <Eye className="w-5 h-5" />, title: 'Complete Visibility', desc: 'Customers see you are open, and you see every location in real time.' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'More Customer Acquisition', desc: 'Open businesses get found. Discoverability drives footfall.' },
  { icon: <Shield className="w-5 h-5" />, title: 'Peace of Mind Safety', desc: '24/7 monitoring with instant alerts when anything needs attention.' },
  { icon: <MessageCircle className="w-5 h-5" />, title: 'Direct Communication', desc: 'Reach your customers with offers and updates — no middlemen.' },
  { icon: <Building2 className="w-5 h-5" />, title: 'Multi-Location Management', desc: 'One dashboard for every shop, every device, every status.' },
  { icon: <Gauge className="w-5 h-5" />, title: 'Operational Insights', desc: 'Understand opening hours, engagement, and alerts at a glance.' },
];

export function OwnerBenefitsSection() {
  return (
    <section id="business-benefits" className="section relative">
      <div className="absolute inset-0 bg-neutral-50" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="For Business Owners"
          title="Grow Your Business"
          titleAccent="With Total Confidence"
          description="HERE OPEN makes your business easier to find, safer to run, and simpler to manage."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ownerBenefits.map((b, i) => (
            <Reveal key={i} delay={(i % 3) * 80} className="h-full">
              <div className="card group h-full">
                <div className="w-11 h-11 bg-green-action/8 border border-green-action/15 rounded-xl flex items-center justify-center text-green-action mb-5 group-hover:shadow-green transition-shadow">
                  {b.icon}
                </div>
                <h3 className="text-[15px] font-bold text-green-forest mb-2">{b.title}</h3>
                <p className="text-body-sm text-black leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   6. BENEFITS FOR CUSTOMERS
   ═══════════════════════════════════════════════════════ */

const customerBenefits = [
  { icon: <DoorOpen className="w-5 h-5" />, title: 'Know Before You Go', desc: 'Check the real-time status of any shop before you leave home.' },
  { icon: <Timer className="w-5 h-5" />, title: 'Save Your Time', desc: 'No more wasted trips to closed businesses.' },
  { icon: <MapPin className="w-5 h-5" />, title: 'Discover Open Businesses', desc: 'Find shops that are actually open, near you, right now.' },
  { icon: <MessageCircle className="w-5 h-5" />, title: 'Direct Communication', desc: 'Ask questions and get answers without phone tag.' },
  { icon: <Megaphone className="w-5 h-5" />, title: 'Never Miss Offers', desc: 'Offers and announcements from the shops you follow.' },
  { icon: <Bell className="w-5 h-5" />, title: 'Helpful Notifications', desc: 'Know when a favorite shop opens or shares fresh updates.' },
  { icon: <BadgeCheck className="w-5 h-5" />, title: 'Confidence', desc: 'Every visit is informed, intentional, and worth the trip.' },
];

export function CustomerBenefitsSection() {
  return (
    <section id="customer-benefits" className="section relative">
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="For Customers"
          title="Visit With Confidence"
          titleAccent="Every Single Time"
          description="HERE OPEN turns uncertain trips into confident, well-timed visits."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {customerBenefits.map((b, i) => (
            <Reveal key={i} delay={(i % 4) * 60} className="h-full">
              <div className="card group h-full">
                <div className="w-10 h-10 bg-green-action/8 border border-green-action/15 rounded-lg flex items-center justify-center text-green-action mb-4 group-hover:shadow-green transition-shadow">
                  {b.icon}
                </div>
                <h3 className="text-[14px] font-bold text-green-forest mb-1.5 leading-snug">{b.title}</h3>
                <p className="text-body-sm text-black leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   7. MARKET OPPORTUNITY
   ═══════════════════════════════════════════════════════ */

const targetMarkets = [
  { icon: <ShoppingBag className="w-5 h-5" />, name: 'Retail' },
  { icon: <UtensilsCrossed className="w-5 h-5" />, name: 'Restaurants' },
  { icon: <Pill className="w-5 h-5" />, name: 'Pharmacies' },
  { icon: <Heart className="w-5 h-5" />, name: 'Clinics' },
  { icon: <Scissors className="w-5 h-5" />, name: 'Salons' },
  { icon: <Wrench className="w-5 h-5" />, name: 'Service Centers' },
  { icon: <ShoppingBag className="w-5 h-5" />, name: 'Grocery' },
  { icon: <Building2 className="w-5 h-5" />, name: 'Shopping Centers' },
  { icon: <GraduationCap className="w-5 h-5" />, name: 'Education' },
  { icon: <Bed className="w-5 h-5" />, name: 'Hospitality' },
  { icon: <Warehouse className="w-5 h-5" />, name: 'Warehouses' },
  { icon: <Building2 className="w-5 h-5" />, name: 'Multi-Location Businesses' },
];

export function MarketSection() {
  return (
    <section id="market" className="section relative">
      <div className="absolute inset-0 bg-neutral-50" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Market Opportunity"
          title="The Next Layer"
          titleAccent="Of Physical Commerce"
          description="Every physical business on the planet runs on one silent question: are you open? HERE OPEN is building the connected answer."
        />

        <Reveal>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-body-lg text-black leading-relaxed text-center">
              The market opportunity lies in connecting large, established industries — retail, food, healthcare, services, hospitality, warehousing, and education — to a real-time digital awareness layer. Wherever people visit a physical location, the need for live status, safety, and direct communication exists. HERE OPEN is positioned to serve this infrastructure across every vertical, without relying on a single geography or industry.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {targetMarkets.map((m, i) => (
            <Reveal key={i} delay={(i % 4) * 60} className="h-full">
              <div className="card-static flex items-center gap-3 py-4 px-5 h-full hover:border-green-action/30 transition-colors">
                <div className="w-9 h-9 bg-green-action/8 border border-green-action/15 rounded-lg flex items-center justify-center text-green-action flex-shrink-0">
                  {m.icon}
                </div>
                <span className="text-[13px] font-medium text-black">{m.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   8. GROWTH OPPORTUNITY
   ═══════════════════════════════════════════════════════ */

const growthPhases = [
  { phase: 'Phase 1', title: 'Local Businesses', desc: 'Win single-location shops with simple visibility and safety tools.', status: 'current' },
  { phase: 'Phase 2', title: 'IoT Expansion', desc: 'Deepen device ecosystem and sensor intelligence across industries.' },
  { phase: 'Phase 3', title: 'Multi-Location Networks', desc: 'Serve chains and groups managing many shops from one platform.' },
  { phase: 'Phase 4', title: 'Business Intelligence', desc: 'Turn real-time operational data into actionable insight.' },
  { phase: 'Phase 5', title: 'HERE OPEN Ecosystem', desc: 'A full digital layer connecting businesses, devices, and customers.' },
];

export function GrowthSection() {
  return (
    <section id="growth" className="section relative">
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Growth Opportunity"
          title="A Clear Path"
          titleAccent="To Scale"
          description="A staged roadmap that compounds: one shop today, an ecosystem tomorrow."
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {growthPhases.map((p, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className={`card flex items-start gap-5 ${p.status === 'current' ? 'border-green-action/25' : ''}`}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-[11px] font-bold ${
                    p.status === 'current' ? 'bg-green-action text-white shadow-green' : 'bg-green-action/8 border border-green-action/15 text-green-action'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {i < growthPhases.length - 1 && (
                    <div className="w-px flex-1 bg-green-action/20 my-1" />
                  )}
                </div>
                <div className="pb-1">
                  <p className="text-[11px] text-green-action font-bold uppercase tracking-widest mb-1">
                    {p.phase}
                    {p.status === 'current' && <span className="ml-2 bg-green-action/10 text-green-action px-2 py-0.5 rounded-full text-[10px]">Current Focus</span>}
                  </p>
                  <h3 className="text-display-sm font-bold text-green-forest mb-1.5">{p.title}</h3>
                  <p className="text-body-sm text-black leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   9. PATENT / IP PROTECTION
   ═══════════════════════════════════════════════════════ */

const ipPillars = [
  { icon: <Layers className="w-5 h-5" />, title: 'Proprietary Architecture', desc: 'A purpose-built, layered platform designed for real-time physical commerce.' },
  { icon: <Workflow className="w-5 h-5" />, title: 'Unique Workflows', desc: 'Status, alert, and communication flows engineered around real shop operations.' },
  { icon: <Server className="w-5 h-5" />, title: 'Software Systems', desc: 'Custom-built software for visibility, safety, and connection across locations.' },
  { icon: <Cpu className="w-5 h-5" />, title: 'IoT Integration Approach', desc: 'An abstraction layer designed to connect heterogeneous hardware cleanly.' },
];

export function IPSection() {
  return (
    <section id="ip" className="section relative">
      <div className="absolute inset-0 bg-neutral-50" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Intellectual Property"
          title="Built for Innovation."
          titleAccent="Designed for Protection."
          description="HERE OPEN develops proprietary technology with an eye toward protecting what makes it original."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ipPillars.map((p, i) => (
            <Reveal key={i} delay={(i % 4) * 60} className="h-full">
              <div className="card group h-full">
                <div className="w-10 h-10 bg-green-action/8 border border-green-action/15 rounded-lg flex items-center justify-center text-green-action mb-4 group-hover:shadow-green transition-shadow">
                  {p.icon}
                </div>
                <h3 className="text-[14px] font-bold text-green-forest mb-1.5 leading-snug">{p.title}</h3>
                <p className="text-body-sm text-black leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="inline-flex items-start gap-2.5 bg-white border border-neutral-200 rounded-xl px-5 py-3.5 text-left max-w-[820px]">
            <Award className="w-4 h-4 text-green-action mt-0.5 flex-shrink-0" />
            <p className="text-[12px] text-black leading-relaxed">
              HERE OPEN\u2019s proprietary architecture, workflows, software systems, and IoT integration approaches may be evaluated for appropriate intellectual-property protection as the platform evolves.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   10. WHY HERE OPEN
   ═══════════════════════════════════════════════════════ */

const comparisonRows = [
  { traditional: 'Customers guess if you\u2019re open', modern: 'Live, real-time status' },
  { traditional: 'After-hours incidents go unnoticed', modern: '24/7 safety monitoring with alerts' },
  { traditional: 'No direct channel to customers', modern: 'Direct communication & offers' },
  { traditional: 'Each location managed separately', modern: 'Multi-shop management, one dashboard' },
  { traditional: 'No operational visibility', modern: 'Real-time business insights' },
];

export function WhySection() {
  return (
    <section id="why" className="section relative">
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Why HERE OPEN"
          title="The Old Way"
          titleAccent="Vs. The Connected Way"
          description="See the difference when physical businesses move from guesswork to real-time truth."
        />

        <Reveal className="max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            <div className="grid grid-cols-2 divide-x divide-neutral-200 bg-neutral-50">
              <div className="px-5 py-4 text-[12px] font-bold text-black uppercase tracking-wider">Traditional Business</div>
              <div className="px-5 py-4 text-[12px] font-bold text-green-action uppercase tracking-wider">With HERE OPEN</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={i} className={`grid grid-cols-2 divide-x divide-neutral-200 ${i < comparisonRows.length - 1 ? 'border-b border-neutral-200' : ''}`}>
                <div className="px-5 py-4 text-[13px] text-black flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 text-[12px]">✕</span> {row.traditional}
                </div>
                <div className="px-5 py-4 text-[13px] text-black flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-action mt-0.5 flex-shrink-0" /> {row.modern}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   11. FUTURE VISION
   ═══════════════════════════════════════════════════════ */

const visionLayers = [
  { icon: <Building2 className="w-5 h-5" />, label: 'Physical Businesses' },
  { icon: <Cpu className="w-5 h-5" />, label: 'IoT Devices' },
  { icon: <Smartphone className="w-5 h-5" />, label: 'Customers' },
];

export function VisionSection() {
  return (
    <section id="vision" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-neutral-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse,rgba(0,255,102,0.04)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center mb-10">
          <div className="eyebrow mx-auto mb-6">Future Vision</div>
          <h2 className="font-display font-extrabold text-green-forest text-display-lg tracking-tight mb-5">
            The Real-Time Digital Layer
            <br />
            <span className="text-green-action">For Physical Commerce</span>
          </h2>
          <p className="text-body-lg text-black max-w-[560px] mx-auto leading-relaxed">
            HERE OPEN is building a connected layer where physical businesses, IoT infrastructure, and customers move on the same real-time signal — making every shop discoverable, safe, and reachable.
          </p>
        </div>

        <Reveal className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {visionLayers.map((v, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2 bg-white border border-neutral-200 rounded-2xl px-6 py-5 shadow-card">
                  <div className="w-12 h-12 bg-green-action/10 rounded-xl flex items-center justify-center text-green-action">
                    {v.icon}
                  </div>
                  <span className="text-[13px] font-semibold text-black text-center leading-tight">{v.label}</span>
                </div>
                {i < visionLayers.length - 1 && <ArrowRight className="w-5 h-5 text-neutral-300 hidden sm:block" />}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <p className="text-center text-body-md text-black max-w-[640px] mx-auto leading-relaxed">
            From a single shop to entire markets, every physical business has the right to be seen, safe, and connected — in real time, everywhere.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   12. FINAL CTA
   ═══════════════════════════════════════════════════════ */

export function FinalCTASection() {
  return (
    <section id="cta" className="section relative overflow-hidden">
      <Container className="relative z-10 text-center">
        <Reveal>
          <h2 className="font-display font-extrabold text-green-forest text-display-lg tracking-tight mb-5">
            Make Your Business
            <br />
            <span className="text-green-action">Visible. Connected. Ready.</span>
          </h2>
          <p className="text-body-lg text-black max-w-[520px] mx-auto mb-10 leading-relaxed">
            Whether you own a business or love supporting local shops, HERE OPEN keeps you connected to what's open, safe, and ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/for-businesses"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-action text-white text-[15px] font-bold rounded-lg hover:bg-green-forest transition-all shadow-green hover:shadow-green"
            >
              For Businesses <ArrowRight size={16} />
            </Link>
            <Link
              href="/for-customers"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-neutral-200 text-black text-[15px] font-medium rounded-lg hover:border-green-action/30 hover:bg-green-light transition-all"
            >
              For Customers
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}