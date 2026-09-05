'use client';

import { useRef, type ReactNode } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, type Variants } from 'framer-motion';
import {
  Store, Users, Eye, Bell, Shield, Smartphone, Zap, ArrowRight,
  AlertTriangle, Wifi, UtensilsCrossed, Scissors, Wrench,
  ShoppingBag, Building2, GraduationCap, MapPin, Cpu, TrendingUp, Network, Cross,
  Lock, Award, Layers, Flame, MessageCircle, MessageSquare, Megaphone, Server, Radio, Plug,
  Workflow, Heart, ToggleRight, BellRing, ShieldCheck, LayoutGrid, BarChart2, ShoppingCart,
  Clock, Compass, Tag, CheckCircle, Map, LineChart, X, Hotel, Package, ArrowDown,
} from 'lucide-react';
import { Container } from './Container';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CountUp } from '@/components/ui/CountUp';
import { slideLeft, slideRight, scaleIn, fadeUp, stagger } from '@/lib/animations';
import { FaqAccordion } from '@/components/faq/FaqAccordion';

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
              <X size={12} className="text-red-400" strokeWidth={2.5} />
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
  { icon: <ToggleRight size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Real-Time OPEN/CLOSED Status', desc: 'Live status visibility for every connected location.' },
  { icon: <BellRing size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Instant Alerts', desc: 'Status changes and important updates delivered in seconds.' },
  { icon: <ShieldCheck size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: '24/7 Safety Monitoring', desc: 'Continuous protection even when your shop is closed.' },
  { icon: <Flame size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Fire Event Detection', desc: 'Temperature and smoke sensing with immediate notification.' },
  { icon: <Smartphone size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Customer Mobile App', desc: 'One tap to know any shop status instantly.' },
  { icon: <MessageSquare size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Direct Customer Communication', desc: 'Talk to your customers without third-party platforms.' },
  { icon: <Megaphone size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Offers & Announcements', desc: 'Publish offers that reach the right people right away.' },
  { icon: <LayoutGrid size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Multi-Shop Management', desc: 'Run many locations from one simple dashboard.' },
  { icon: <Users size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Team & Role Management', desc: 'Assign roles and control who updates what.' },
  { icon: <BarChart2 size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Business Dashboard', desc: 'Operational insight with everything in one place.' },
  { icon: <Cpu size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'IoT Device Management', desc: 'Health, connectivity, and lifecycle for every device.' },
  { icon: <Lock size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Role-Based Security', desc: 'Granular access control across staff and locations.' },
  { icon: <MapPin size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Location Visibility', desc: 'Customers discover open businesses near them.' },
  { icon: <Bell size={22} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Push Notifications', desc: 'Timely updates straight to customer phones.' },
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
                <div
                  className="feature-icon flex items-center justify-center"
                  style={{ background: '#00D0841A', borderRadius: 10, padding: 10, width: 44, height: 44, marginBottom: 16 }}
                >
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
  { icon: <Eye size={20} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Complete Visibility', desc: 'Customers see you are open, and you see every location in real time.' },
  { icon: <TrendingUp size={20} className="text-[#00D084]" strokeWidth={1.5} />, title: 'More Customer Acquisition', desc: 'Open businesses get found. Discoverability drives footfall.' },
  { icon: <ShieldCheck size={20} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Peace of Mind Safety', desc: '24/7 monitoring with instant alerts when anything needs attention.' },
  { icon: <MessageCircle size={20} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Direct Communication', desc: 'Reach your customers with offers and updates — no middlemen.' },
  { icon: <Map size={20} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Multi-Location Management', desc: 'One dashboard for every shop, every device, every status.' },
  { icon: <LineChart size={20} className="text-[#00D084]" strokeWidth={1.5} />, title: 'Operational Insights', desc: 'Understand opening hours, engagement, and alerts at a glance.' },
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
                <div
                  className="flex items-center justify-center"
                  style={{ background: '#00D0841A', borderRadius: 10, padding: 10, width: 40, height: 40, marginBottom: 16 }}
                >
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
  { icon: <Eye size={20} className="text-[#00B4D8]" strokeWidth={1.5} />, title: 'Know Before You Go', desc: 'Check the real-time status of any shop before you leave home.' },
  { icon: <Clock size={20} className="text-[#00B4D8]" strokeWidth={1.5} />, title: 'Save Your Time', desc: 'No more wasted trips to closed businesses.' },
  { icon: <Compass size={20} className="text-[#00B4D8]" strokeWidth={1.5} />, title: 'Discover Open Businesses', desc: 'Find shops that are actually open, near you, right now.' },
  { icon: <MessageCircle size={20} className="text-[#00B4D8]" strokeWidth={1.5} />, title: 'Direct Communication', desc: 'Ask questions and get answers without phone tag.' },
  { icon: <Tag size={20} className="text-[#00B4D8]" strokeWidth={1.5} />, title: 'Never Miss Offers', desc: 'Offers and announcements from the shops you follow.' },
  { icon: <Bell size={20} className="text-[#00B4D8]" strokeWidth={1.5} />, title: 'Helpful Notifications', desc: 'Know when a favorite shop opens or shares fresh updates.' },
  { icon: <CheckCircle size={20} className="text-[#00B4D8]" strokeWidth={1.5} />, title: 'Confidence', desc: 'Every visit is informed, intentional, and worth the trip.' },
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
                <div
                  className="flex items-center justify-center"
                  style={{ background: '#00B4D81A', borderRadius: 10, padding: 10, width: 40, height: 40, marginBottom: 16 }}
                >
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

const marketStats = [
  { to: 63, suffix: 'M+', prefix: '', label: 'Registered MSMEs in India', sub: 'Potential businesses to connect' },
  { to: 500, suffix: 'M+', prefix: '', label: 'Customers shop locally', sub: 'Who need live shop status' },
  { to: 1, suffix: 'T+', prefix: '₹', label: 'Local commerce opportunity', sub: 'Across retail, food, health, services' },
];

const targetMarkets = [
  { icon: <ShoppingBag size={16} strokeWidth={1.5} />, name: 'Retail' },
  { icon: <UtensilsCrossed size={16} strokeWidth={1.5} />, name: 'Restaurants' },
  { icon: <Cross size={16} strokeWidth={1.5} />, name: 'Pharmacies' },
  { icon: <Heart size={16} strokeWidth={1.5} />, name: 'Clinics' },
  { icon: <Scissors size={16} strokeWidth={1.5} />, name: 'Salons' },
  { icon: <Wrench size={16} strokeWidth={1.5} />, name: 'Service Centers' },
  { icon: <ShoppingCart size={16} strokeWidth={1.5} />, name: 'Grocery' },
  { icon: <Building2 size={16} strokeWidth={1.5} />, name: 'Shopping Centers' },
  { icon: <GraduationCap size={16} strokeWidth={1.5} />, name: 'Education' },
  { icon: <Hotel size={16} strokeWidth={1.5} />, name: 'Hospitality' },
  { icon: <Package size={16} strokeWidth={1.5} />, name: 'Warehouses' },
  { icon: <LayoutGrid size={16} strokeWidth={1.5} />, name: 'Multi-Location' },
];

const chipStaggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export function MarketSection() {
  return (
    <section id="market" className="section bg-surface-base relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,208,132,0.05)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-14">
          <div className="text-xs font-medium text-[#00D084] tracking-[0.1em] mb-5">Market Opportunity</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            The Next Layer <span className="text-[#00D084]">Of Physical Commerce</span>
          </h2>
          <p className="mt-5 text-base text-[#6B7C8E] max-w-[520px] mx-auto leading-relaxed">
            Every physical business on the planet runs on one silent question: are you open? HERE OPEN is building the connected answer.
          </p>
        </AnimatedSection>

        <AnimatedSection
          variant={stagger}
          delay={0.1}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14"
        >
          {marketStats.map((s) => (
            <motion.div
              key={s.label}
              variants={scaleIn}
              className="h-full bg-surface-card border border-surface-border border-t-2 border-t-[#00D084] rounded-2xl p-7"
            >
              <CountUp
                to={s.to}
                prefix={s.prefix}
                suffix={s.suffix}
                className="font-display font-bold text-[2.5rem] text-[#00D084] leading-none"
              />
              <p className="font-display font-semibold text-[0.9rem] text-[#E8EDF2] mt-2">{s.label}</p>
              <p className="font-body text-[0.8rem] text-[#6B7C8E] mt-1">{s.sub}</p>
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection
          variant={chipStaggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {targetMarkets.map((m, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="group flex items-center gap-[10px] px-5 py-3 rounded-[10px] bg-surface-card border border-surface-border transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00D08450] hover:bg-surface-hover"
            >
              <span className="text-[#6B7C8E] group-hover:text-[#00D084] transition-colors duration-200 flex-shrink-0">
                {m.icon}
              </span>
              <span className="font-body font-medium text-[0.875rem] text-[#E8EDF2]">{m.name}</span>
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.05} className="mt-14 max-w-[640px] mx-auto">
          <p className="font-body text-[1rem] text-[#6B7C8E] leading-[1.8] text-center">
            The market opportunity lies in connecting large, established industries — retail, food, healthcare, services, hospitality, warehousing, and education — to a real-time digital awareness layer. Wherever people visit a physical location, the need for live status, safety, and direct communication exists.
          </p>
        </AnimatedSection>
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

const growthContainerVar: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const growthCardVar: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

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

        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal progress bar connecting phases 1 through 5 */}
          <div className="hidden md:block absolute left-[8%] right-[8%] top-[19px] h-[3px] rounded-full bg-green-action/15" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="hidden md:block absolute left-[8%] right-[8%] top-[19px] h-[3px] rounded-full bg-green-action origin-left"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={growthContainerVar}
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
          >
            {growthPhases.map((p, i) => (
              <motion.div
                key={i}
                variants={growthCardVar}
                className={`card flex flex-col items-center gap-3 text-center relative ${
                  p.status === 'current' ? 'card phase-current' : ''
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${
                  p.status === 'current' ? 'bg-green-action text-white shadow-green' : 'bg-green-action/8 border border-green-action/15 text-green-action'
                }`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-[11px] text-green-action font-bold uppercase tracking-widest">
                  {p.phase}
                  {p.status === 'current' && <span className="ml-2 bg-green-action/10 text-green-action px-2 py-0.5 rounded-full text-[10px]">Current Focus</span>}
                </p>
                <h3 className="text-[14px] font-bold text-green-forest leading-snug">{p.title}</h3>
                <p className="text-[12px] text-black leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
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
  const tableRef = useRef<HTMLDivElement>(null);
  const inView = useInView(tableRef, { once: true, amount: 0.2 });

  return (
    <section id="why" className="section relative">
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Why HERE OPEN"
          title="The Old Way"
          titleAccent="Vs. The Connected Way"
          description="See the difference when physical businesses move from guesswork to real-time truth."
        />

        <div ref={tableRef} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white max-w-3xl mx-auto">
          <div className="grid grid-cols-2 divide-x divide-neutral-200 bg-neutral-50">
            <div className="px-5 py-4 text-[12px] font-bold text-black uppercase tracking-wider">Traditional Business</div>
            <div className="px-5 py-4 text-[12px] font-bold text-green-action uppercase tracking-wider">With HERE OPEN</div>
          </div>
          {comparisonRows.map((row, i) => (
            <div key={i} className={`grid grid-cols-2 divide-x divide-neutral-200 ${i < comparisonRows.length - 1 ? 'border-b border-neutral-200' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                animate={inView ? { opacity: 1, x: 0 } : undefined}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
                className="px-5 py-4 text-[13px] text-neutral-500 flex items-start gap-2"
              >
                <span className="min-w-[20px] inline-flex items-center justify-center mt-0.5 flex-shrink-0">
                  <X size={16} className="text-[#3D4F5E]" strokeWidth={2} />
                </span>
                <span className="relative inline-block">
                  {row.traditional}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 + i * 0.1 }}
                    className="absolute left-0 right-0 top-1/2 -mt-[0.75px] h-[1.5px] bg-red-400 origin-left rounded-full"
                  />
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                animate={inView ? { opacity: 1, x: 0 } : undefined}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
                className="px-5 py-4 text-[13px] text-black flex items-start gap-2"
              >
                <span className="min-w-[20px] inline-flex items-center justify-center mt-0.5 flex-shrink-0">
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-[#00D084]"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M2.5 8.5 L6 12 L13.5 4"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.45, ease: 'easeInOut', delay: 0.35 + i * 0.1 }}
                    />
                  </motion.svg>
                </span>
                {row.modern}
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   11. FUTURE VISION
   ═══════════════════════════════════════════════════════ */

const visionNodes = [
  {
    key: 'business',
    icon: <Building2 size={24} className="text-[#00D084]" strokeWidth={1.5} />,
    label: 'Physical\nBusinesses',
    variant: slideLeft,
    position: 'absolute left-[10%] top-1/2 -translate-y-1/2 z-10',
  },
  {
    key: 'iot',
    icon: <Cpu size={24} className="text-[#00B4D8]" strokeWidth={1.5} />,
    label: 'IoT\nDevices',
    variant: fadeUp,
    position: 'absolute left-1/2 top-[12%] -translate-x-1/2 -translate-y-1/2 z-10',
  },
  {
    key: 'customers',
    icon: <Users size={24} className="text-[#00D084]" strokeWidth={1.5} />,
    label: 'Customers',
    variant: slideRight,
    position: 'absolute right-[10%] top-1/2 -translate-y-1/2 z-10',
  },
];

const visionConnectors = [
  { id: 'iot', x1: 100, y1: 12, x2: 100, y2: 50, delay: 0 },
  { id: 'business', x1: 20, y1: 50, x2: 100, y2: 50, delay: 0.66 },
  { id: 'customers', x1: 180, y1: 50, x2: 100, y2: 50, delay: 1.33 },
];

function VisionCoreNode() {
  return (
    <div
      className="relative w-[120px] h-[120px] rounded-full flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #00D084, #00B4D8)',
        boxShadow: '0 0 60px #00D08430',
      }}
    >
      <span className="radar-ring" style={{ inset: '-2px' }} />
      <span className="radar-ring" style={{ inset: '-2px', animationDelay: '1s' }} />
      <span className="relative z-10 font-display font-bold text-white text-center whitespace-pre-line leading-tight tracking-[0.08em] text-[0.9rem]">
        {'HERE\nOPEN'}
      </span>
    </div>
  );
}

export function VisionSection() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const inView = useInView(diagramRef, { once: true, amount: 0.2 });

  return (
    <section id="vision" className="section bg-surface-base relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.05)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-14">
          <div className="text-xs font-medium text-[#00D084] tracking-[0.1em] mb-5">Future Vision</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            The Real-Time Digital Layer
            <br />
            <span className="text-[#00D084]">For Physical Commerce</span>
          </h2>
          <p className="mt-5 text-base text-[#6B7C8E] max-w-[560px] mx-auto leading-relaxed">
            HERE OPEN is building a connected layer where physical businesses, IoT infrastructure, and customers move on the same real-time signal — making every shop discoverable, safe, and reachable.
          </p>
        </AnimatedSection>

        <div ref={diagramRef}>
          {/* Desktop diagram */}
          <div className="relative hidden lg:block aspect-[2/1] max-w-[880px] mx-auto">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 200 100"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="visionFlow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00D084" />
                  <stop offset="100%" stopColor="#00B4D8" />
                </linearGradient>
              </defs>
              {visionConnectors.map((c) => (
                <g key={c.id}>
                  <line
                    x1={c.x1}
                    y1={c.y1}
                    x2={c.x2}
                    y2={c.y2}
                    stroke="#1C2A38"
                    strokeWidth={1}
                    strokeDasharray="4 4"
                    vectorEffect="non-scaling-stroke"
                  />
                  <line
                    x1={c.x1}
                    y1={c.y1}
                    x2={c.x2}
                    y2={c.y2}
                    stroke="url(#visionFlow)"
                    strokeWidth={1}
                    strokeDasharray="8 60"
                    vectorEffect="non-scaling-stroke"
                    style={{
                      animation: 'data-flow 2s linear infinite',
                      animationDelay: `${c.delay}s`,
                    }}
                  />
                  <circle r="4" fill="#00D084">
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${c.delay}s`}
                      path={`M ${c.x1} ${c.y1} L ${c.x2} ${c.y2}`}
                    />
                  </circle>
                </g>
              ))}
            </svg>

            {visionNodes.map((n) => (
              <motion.div
                key={n.key}
                variants={n.variant}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: n.key === 'business' || n.key === 'customers' ? 0.1 : 0.15 }}
                className={n.position}
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-[#0F1923] border border-[#1C2A38] flex items-center justify-center">
                    {n.icon}
                  </div>
                  <span className="mt-3 font-body font-medium text-[0.875rem] text-[#E8EDF2] text-center whitespace-pre-line leading-tight">
                    {n.label}
                  </span>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <VisionCoreNode />
            </motion.div>
          </div>

          {/* Mobile diagram: stacked nodes → arrows → center */}
          <div className="lg:hidden">
            <div className="space-y-5 max-w-[400px] mx-auto">
              {visionNodes.map((n, i) => (
                <div key={n.key} className="flex items-center gap-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
                    className="w-20 h-20 rounded-full bg-[#0F1923] border border-[#1C2A38] flex items-center justify-center flex-shrink-0"
                  >
                    {n.icon}
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.1 }}
                    className="flex-1 font-body font-medium text-[0.875rem] text-[#E8EDF2] whitespace-pre-line leading-tight"
                  >
                    {n.label}
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : undefined}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                  >
                    <ArrowRight className="w-6 h-6 text-[#00D084]/60 flex-shrink-0" />
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.35 }}
              className="flex flex-col items-center my-8"
            >
              <span className="h-12 w-px bg-gradient-to-b from-[#00D084]/0 to-[#00D084]/60" />
              <ArrowDown className="w-5 h-5 text-[#00D084] mt-2" />
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <VisionCoreNode />
            </motion.div>
          </div>
        </div>

        <AnimatedSection delay={0.3} className="mt-14 max-w-[580px] mx-auto">
          <p className="text-center font-body text-[1rem] text-[#6B7C8E] leading-[1.8]">
            From a single shop to entire markets, every physical business has the right to be seen, safe, and connected — in real time, everywhere.
          </p>
        </AnimatedSection>
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
      <div className="cta-hue absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,142,60,0.06)_0%,transparent_65%)] pointer-events-none" />
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="#contact"
              className="cta-pulse active:scale-[0.97] inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-action text-white text-[15px] font-bold rounded-lg hover:bg-green-forest transition-all duration-200 shadow-green hover:shadow-green"
            >
              Join Waitlist <ArrowRight size={16} />
            </Link>
            <Link
              href="/#businesses"
              className="active:scale-[0.97] inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-neutral-200 text-black text-[15px] font-medium rounded-lg hover:border-green-action/30 hover:bg-green-light transition-all duration-200"
            >
              For Businesses
            </Link>
            <Link
              href="/#customers"
              className="active:scale-[0.97] inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-neutral-200 text-black text-[15px] font-medium rounded-lg hover:border-green-action/30 hover:bg-green-light transition-all duration-200"
            >
              For Customers
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   12. FAQ
   ═══════════════════════════════════════════════════════ */

const faqItems = [
  {
    question: 'What is the HERE OPEN device?',
    answer:
      'The HERE OPEN device is a compact IoT unit that connects to your shop\u2019s power supply. It monitors your shop\u2019s OPEN/CLOSED status, temperature, smoke, motion, and environment \u2014 and syncs everything to the cloud in real time over 4G GSM. No WiFi needed.',
  },
  {
    question: 'Do I need internet at my shop?',
    answer:
      'No. The HERE OPEN device uses a built-in GSM (mobile data) connection \u2014 the same technology as your phone. As long as there is mobile network coverage at your location, the device works without any WiFi or broadband.',
  },
  {
    question: 'How hard is the setup?',
    answer:
      'Setup takes under 10 minutes. Plug in the device, download the HERE OPEN app, scan the device QR code, and your shop is live. No technician visit required.',
  },
  {
    question: 'Can I manage more than one shop?',
    answer:
      'Yes. The HERE OPEN dashboard supports multi-location management. You can see all your shops, their live status, device health, and alerts from a single screen.',
  },
  {
    question: 'What happens if the device goes offline?',
    answer:
      'If the device loses connectivity, the app shows your shop as \u2018Status Unknown\u2019 and sends you an instant alert. Customers see the last-known status with a timestamp so there is no confusion.',
  },
  {
    question: 'Is the app free for customers?',
    answer:
      'Yes. The HERE OPEN customer app is free to download and use. Customers can check any connected shop\u2019s status, follow their favourite shops, and receive updates at no cost.',
  },
  {
    question: 'What kind of safety alerts does it send?',
    answer:
      'The device monitors temperature (fire risk), smoke, motion (intrusion), and power status. Any abnormal reading triggers an instant push notification and SMS to the registered owner\u2019s number.',
  },
  {
    question: 'Is my shop data secure?',
    answer:
      'All device data is encrypted in transit and at rest. Role-based access control means only authorised staff can change your shop status or view sensitive alerts. HERE OPEN never sells business data to third parties.',
  },
  {
    question: 'What businesses is this built for?',
    answer:
      'Any business with a physical location \u2014 kirana stores, restaurants, pharmacies, salons, repair shops, clinics, retail, and more. If customers visit your space, HERE OPEN adds value.',
  },
  {
    question: 'When will the app be available?',
    answer:
      'We are currently in the early-access phase. Register your interest and we will notify you when HERE OPEN launches in your area. Early registrations get priority onboarding.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section bg-surface-base">
      <Container className="relative z-10">
        <AnimatedSection className="text-center mb-14">
          <div className="text-xs font-medium text-[#00D084] tracking-[0.1em] mb-5">Frequently Asked Questions</div>
          <h2 className="font-display font-bold text-[1.8rem] lg:text-[2.5rem] tracking-[-0.025em] text-[#E8EDF2] leading-tight">
            Answers To Every Question Before You Ask
          </h2>
          <p className="mt-5 text-base text-[#6B7C8E] max-w-[520px] mx-auto leading-relaxed">
            Everything you need to know about HERE OPEN before you sign up.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection variant={slideLeft} delay={0.15}>
            <FaqAccordion items={faqItems.slice(0, 5)} />
          </AnimatedSection>
          <AnimatedSection variant={slideRight} delay={0.25}>
            <FaqAccordion items={faqItems.slice(5, 10)} />
          </AnimatedSection>
        </div>

        <div className="text-center mt-16">
          <p className="text-[0.9rem] text-[#6B7C8E]">Still have questions?</p>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover-x inline-flex items-center gap-2 mt-2 text-[0.9rem] text-[#00D084] font-medium hover:text-[#00D084]/80 transition-colors"
          >
            Talk to us on WhatsApp
            <MessageCircle size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}