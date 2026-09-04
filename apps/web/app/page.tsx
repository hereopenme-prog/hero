'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Shield, Bell, Eye, Smartphone, Activity, Zap, CheckCircle, ArrowRight,
  Thermometer, Wind, AlertTriangle, Wifi, ChevronRight,
  Store, UtensilsCrossed, Pill, Scissors, Wrench, ShoppingBag, Building2, Briefcase
} from 'lucide-react';
import { Container } from './components/Container';
import { SectionHeader } from './components/SectionHeader';
import {
  ProblemsSection,
  SolutionSection,
  HowItWorksSection,
  FeaturesSection,
  OwnerBenefitsSection,
  CustomerBenefitsSection,
  MarketSection,
  GrowthSection,
  IPSection,
  WhySection,
  VisionSection,
  FinalCTASection,
} from './components/NarrativeSections';

/* ═══════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[radial-gradient(ellipse,rgba(0,255,102,0.05)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 right-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,102,0.03)_0%,transparent_65%)] pointer-events-none" />

      <Container className="relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div className="space-y-8">
            <div className="eyebrow">
              <span className="w-1.5 h-1.5 bg-green-action rounded-full animate-status-pulse" />
              Real-Time Shop Visibility
            </div>

            <h1 className="font-display font-extrabold text-green-forest text-display-xl leading-[1.05] tracking-tight">
              One Tap.
              <br />
              <span className="text-green-action">Know Every Shop</span>
              <br />
              Status Instantly.
            </h1>

            <p className="text-body-lg text-neutral-500 max-w-[500px] leading-relaxed">
              HERE OPEN connects physical shops to customers in real time through IoT, mobile, and cloud technology. Never waste a trip again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/download"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-action text-white text-[15px] font-bold rounded-lg hover:bg-green-forest transition-all shadow-green hover:shadow-green"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-neutral-200 text-black text-[15px] font-medium rounded-lg hover:border-green-action/30 hover:bg-green-light transition-all"
              >
                See How It Works
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-2">
              {['Real-time Status', '24/7 Monitoring', 'Secure'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-caption text-neutral-500">
                  <CheckCircle className="w-3.5 h-3.5 text-green-action" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Device Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,102,0.06)_0%,transparent_60%)] pointer-events-none" />

            <div className="relative w-full max-w-[420px]">
              {/* Device frame */}
              <div className="bg-white backdrop-blur-sm border border-neutral-200 rounded-3xl p-6 shadow-card animate-glow-pulse">
                {/* Device header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-green-action/10 rounded-lg flex items-center justify-center">
                      <Wifi className="w-4 h-4 text-green-action" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-black">HERE OPEN Device</p>
                      <p className="text-[11px] text-neutral-500">ID: HO-2026-0042</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-action rounded-full animate-status-pulse" />
                    <span className="text-[11px] font-semibold text-green-action">Online</span>
                  </div>
                </div>

                {/* Status panel */}
                <div className="bg-green-action/[0.06] border border-green-action/15 rounded-2xl p-5 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Shop Status</p>
                      <p className="text-4xl font-extrabold text-green-action tracking-tight">OPEN</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Live</p>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-action/10 rounded-full">
                        <span className="w-1.5 h-1.5 bg-green-action rounded-full animate-status-pulse" />
                        <span className="text-[11px] font-semibold text-green-action">Connected</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sensor grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Shield className="w-3.5 h-3.5" />, label: 'Security', value: 'Active', ok: true },
                    { icon: <Thermometer className="w-3.5 h-3.5" />, label: 'Temperature', value: '24°C', ok: true },
                    { icon: <Wind className="w-3.5 h-3.5" />, label: 'Smoke', value: 'Normal', ok: true },
                    { icon: <Activity className="w-3.5 h-3.5" />, label: 'Network', value: '4G LTE', ok: true },
                  ].map((s) => (
                    <div key={s.label} className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="text-neutral-500">{s.icon}</span>
                        <span className="text-[10px] text-neutral-500 uppercase tracking-wider">{s.label}</span>
                      </div>
                      <p className={`text-[13px] font-semibold ${s.ok ? 'text-black' : 'text-green-action'}`}>{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-11 h-11 bg-white border border-neutral-200 rounded-xl flex items-center justify-center shadow-card animate-float">
                <Bell className="w-4.5 h-4.5 text-green-action" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-11 h-11 bg-white border border-neutral-200 rounded-xl flex items-center justify-center shadow-card animate-float" style={{ animationDelay: '1.5s' }}>
                <Smartphone className="w-4.5 h-4.5 text-green-action" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TRUST STRIP
   ═══════════════════════════════════════════════════════ */

function TrustStrip() {
  const items = [
    { label: '24/7', desc: 'Connected Monitoring' },
    { label: 'REAL-TIME', desc: 'Shop Status' },
    { label: 'ONE TAP', desc: 'Control' },
    { label: 'SMART', desc: 'Security' },
  ];

  return (
    <section className="relative border-y border-neutral-200 bg-neutral-50">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`py-8 lg:py-10 text-center ${i < items.length - 1 ? 'lg:border-r lg:border-neutral-200' : ''} ${i === 0 ? '' : 'border-t lg:border-t-0 border-neutral-200'} ${i === 1 ? 'lg:border-l lg:border-neutral-200' : ''}`}
            >
              <p className="text-display-sm font-extrabold text-green-action mb-1">{item.label}</p>
              <p className="text-body-sm text-neutral-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   INTERACTIVE DEMO
   ═══════════════════════════════════════════════════════ */

function DemoSection() {
  const [isOpen, setIsOpen] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <section className="section relative">
      <div className="absolute inset-0 bg-neutral-50" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Interactive Demo"
          title="Experience"
          titleAccent="HERE OPEN"
          description="This is a demo. In production, only authorized owners can control shop status."
        />

        <div className="max-w-[560px] mx-auto">
          <div className={`rounded-3xl p-8 transition-all duration-500 ${
            isOpen
              ? 'bg-white border border-green-action/15 shadow-green'
              : 'bg-white border border-red-500/15 shadow-card'
          }`}>
            {/* Status */}
            <div className="text-center mb-8">
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-3">Shop Status</p>
              <div className="flex items-center justify-center gap-3">
                <span className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-action animate-status-pulse' : 'bg-red-500'}`} />
                <p className={`text-5xl font-extrabold tracking-tight ${
                  isOpen ? 'text-green-action' : 'text-red-400'
                }`}>
                  {isOpen ? 'OPEN' : 'CLOSED'}
                </p>
              </div>
              {isOpen && (
                <p className="text-[11px] text-green-action mt-3 flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-action rounded-full animate-status-pulse" />
                  LIVE
                </p>
              )}
              {!isOpen && (
                <div className="mt-5 space-y-2">
                  <p className="text-[13px] text-red-400 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" /> SECURITY ACTIVE
                  </p>
                  <p className="text-[13px] text-red-400/60 flex items-center justify-center gap-2">
                    <Activity className="w-4 h-4" /> MONITORING ACTIVE
                  </p>
                </div>
              )}
            </div>

            {/* Meta */}
            <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-6 px-2">
              <span>Last updated: Just Now</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-action rounded-full" />
                Device Online
              </span>
            </div>

            {/* Toggle */}
            <div className="text-center">
              <button
                onClick={toggle}
                className={`px-8 py-3.5 rounded-lg font-bold text-[13px] transition-all ${
                  isOpen
                    ? 'bg-red-500/10 border border-red-500/25 text-red-400 hover:bg-red-500/15'
                    : 'bg-green-action text-white hover:bg-green-forest shadow-green hover:shadow-green'
                }`}
              >
                Tap to Set {isOpen ? 'CLOSED' : 'OPEN'}
              </button>
              <p className="text-[11px] text-neutral-500 mt-4">
                Demo only — not connected to real devices
              </p>
            </div>

            {/* Alert */}
            {showAlert && (
              <div className="mt-5 bg-red-500/8 border border-red-500/15 rounded-xl p-4 animate-fade-in">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] font-semibold text-red-400">Security Alert</p>
                    <p className="text-[11px] text-red-400/60">Shop status changed to CLOSED — monitoring activated</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   24/7 MONITORING
   ═══════════════════════════════════════════════════════ */

function MonitoringSection() {
  const monitors = [
    { icon: <Shield className="w-4 h-4" />, label: 'Security', value: 'Active', ok: true },
    { icon: <Thermometer className="w-4 h-4" />, label: 'Temperature', value: '24°C', ok: true },
    { icon: <Wind className="w-4 h-4" />, label: 'Smoke', value: 'Normal', ok: true },
    { icon: <Activity className="w-4 h-4" />, label: 'Network', value: 'Connected', ok: true },
    { icon: <Wifi className="w-4 h-4" />, label: 'Device', value: 'Healthy', ok: true },
    { icon: <Bell className="w-4 h-4" />, label: 'Alerts', value: 'None', ok: true },
  ];

  return (
    <section className="section relative">
      <div className="absolute inset-0 bg-neutral-50" />
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="24/7 Monitoring"
              title="Your Shop."
              titleAccent="Always Connected."
              description="When your shop is closed, HERE OPEN keeps watching. Continuous security and safety monitoring with instant alerts."
              align="left"
            />

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: <Shield className="w-4 h-4" />, title: 'Continuous Monitoring', desc: '24/7 when closed' },
                { icon: <Wifi className="w-4 h-4" />, title: 'Device Connectivity', desc: 'Real-time via GSM' },
                { icon: <Thermometer className="w-4 h-4" />, title: 'Fire Detection', desc: 'Temp & smoke sensors' },
                { icon: <Bell className="w-4 h-4" />, title: 'Instant Alerts', desc: 'Push + SMS notifications' },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-action/8 border border-green-action/15 rounded-lg flex items-center justify-center text-green-action flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-green-forest">{f.title}</h4>
                    <p className="text-[11px] text-neutral-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard */}
          <div className="bg-white border border-neutral-200 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[13px] font-semibold text-green-forest">System Status</h3>
              <span className="flex items-center gap-1.5 text-[11px] text-green-action">
                <span className="w-1.5 h-1.5 bg-green-action rounded-full animate-status-pulse" />
                ONLINE
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {monitors.map((m) => (
                <div key={m.label} className="bg-neutral-50 border border-neutral-200 rounded-xl p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-neutral-500">{m.icon}</span>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider">{m.label}</span>
                  </div>
                  <p className={`text-[13px] font-semibold ${m.ok ? 'text-black' : 'text-green-action'}`}>{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TARGET BUSINESSES
   ═══════════════════════════════════════════════════════ */

function TargetSection() {
  const categories = [
    { icon: <Store className="w-5 h-5" />, name: 'Kirana' },
    { icon: <UtensilsCrossed className="w-5 h-5" />, name: 'Restaurants' },
    { icon: <Pill className="w-5 h-5" />, name: 'Medical Stores' },
    { icon: <Scissors className="w-5 h-5" />, name: 'Salons' },
    { icon: <Briefcase className="w-5 h-5" />, name: 'Tailors' },
    { icon: <Wrench className="w-5 h-5" />, name: 'Repair Shops' },
    { icon: <ShoppingBag className="w-5 h-5" />, name: 'Retail' },
    { icon: <Building2 className="w-5 h-5" />, name: 'Small Offices' },
  ];

  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="Who It's For"
          title="Built For Every"
          titleAccent="Local Business"
          description="From kirana stores to clinics, salons to repair shops — any business with physical presence benefits."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {categories.map((c, i) => (
            <div key={i} className="card-static flex flex-col items-center gap-3 py-6 text-center hover:border-green-action/30 transition-colors">
              <div className="w-10 h-10 bg-green-action/8 border border-green-action/15 rounded-xl flex items-center justify-center text-green-action">
                {c.icon}
              </div>
              <span className="text-[13px] font-medium text-black">{c.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TECHNOLOGY
   ═══════════════════════════════════════════════════════ */

function TechnologySection() {
  const layers = [
    { label: 'SHOP', sub: 'Physical Location' },
    { label: 'HERE OPEN DEVICE', sub: 'IoT Hardware' },
    { label: 'IoT NETWORK', sub: 'GSM / MQTT' },
    { label: 'CLOUD', sub: 'Processing & Sync' },
    { label: 'MOBILE APP', sub: 'Real-Time Updates' },
    { label: 'CUSTOMERS', sub: 'Visibility & Alerts' },
  ];

  return (
    <section className="section relative">
      <div className="absolute inset-0 bg-neutral-50" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Technology"
          title="Built On"
          titleAccent="Modern Infrastructure"
          description="A scalable, secure IoT platform connecting physical shops to digital customers."
        />

        <div className="max-w-2xl mx-auto">
          <div className="space-y-3">
            {layers.map((l, i) => (
              <div key={i}>
                <div className="card-static flex items-center gap-4 py-4 px-6">
                  <div className="w-8 h-8 bg-green-action/8 border border-green-action/15 rounded-lg flex items-center justify-center text-green-action text-[11px] font-bold flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] font-bold text-black">{l.label}</p>
                    <p className="text-[11px] text-neutral-500">{l.sub}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-neutral-300" />
                </div>
                {i < layers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-px h-3 bg-green-action/15" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


/* ══════════════════════════════════════════════════════════════
   MAIN
   ══════════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white relative noise">
      <Hero />
      <TrustStrip />
      <ProblemsSection />
      <SolutionSection />
      <DemoSection />
      <HowItWorksSection />
      <MonitoringSection />
      <FeaturesSection />
      <OwnerBenefitsSection />
      <CustomerBenefitsSection />
      <TargetSection />
      <TechnologySection />
      <MarketSection />
      <GrowthSection />
      <IPSection />
      <WhySection />
      <VisionSection />
      <FinalCTASection />
    </main>
  );
}
