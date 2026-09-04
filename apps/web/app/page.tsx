'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Shield, Bell, Eye, Smartphone, Activity, Zap, CheckCircle, ArrowRight,
  Thermometer, Wind, AlertTriangle, Wifi, Cloud, ChevronRight,
  Store, UtensilsCrossed, Pill, Scissors, Wrench, ShoppingBag, Building2, Briefcase
} from 'lucide-react';
import { Container } from './components/Container';
import { SectionHeader } from './components/SectionHeader';

/* ═══════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-surface-0" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[radial-gradient(ellipse,rgba(0,255,102,0.05)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 right-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,102,0.03)_0%,transparent_65%)] pointer-events-none" />

      <Container className="relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div className="space-y-8">
            <div className="eyebrow">
              <span className="w-1.5 h-1.5 bg-neon rounded-full animate-status-pulse" />
              Real-Time Shop Visibility
            </div>

            <h1 className="font-display font-extrabold text-white text-display-xl leading-[1.05] tracking-tight">
              One Tap.
              <br />
              <span className="text-gradient-neon">Know Every Shop</span>
              <br />
              Status Instantly.
            </h1>

            <p className="text-body-lg text-muted-light max-w-[500px] leading-relaxed">
              HERE OPEN connects physical shops to customers in real time through IoT, mobile, and cloud technology. Never waste a trip again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/download"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-neon text-surface-0 text-[15px] font-bold rounded-lg hover:bg-neon-600 transition-all shadow-glow-sm hover:shadow-glow"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/10 text-white text-[15px] font-medium rounded-lg hover:border-white/20 hover:bg-white/[0.03] transition-all"
              >
                See How It Works
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-2">
              {['Real-time Status', '24/7 Monitoring', 'Secure'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-caption text-muted">
                  <CheckCircle className="w-3.5 h-3.5 text-neon" />
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
              <div className="bg-surface-3/80 backdrop-blur-sm border border-white/[0.08] rounded-3xl p-6 shadow-card animate-glow-pulse">
                {/* Device header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-neon/10 rounded-lg flex items-center justify-center">
                      <Wifi className="w-4 h-4 text-neon" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-white">HERE OPEN Device</p>
                      <p className="text-[11px] text-muted">ID: HO-2026-0042</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-neon rounded-full animate-status-pulse" />
                    <span className="text-[11px] font-semibold text-neon">Online</span>
                  </div>
                </div>

                {/* Status panel */}
                <div className="bg-neon/[0.06] border border-neon/15 rounded-2xl p-5 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-muted uppercase tracking-widest mb-1">Shop Status</p>
                      <p className="text-4xl font-extrabold text-neon tracking-tight">OPEN</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-muted uppercase tracking-widest mb-1">Live</p>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neon/10 rounded-full">
                        <span className="w-1.5 h-1.5 bg-neon rounded-full animate-status-pulse" />
                        <span className="text-[11px] font-semibold text-neon">Connected</span>
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
                    <div key={s.label} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3.5">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="text-muted">{s.icon}</span>
                        <span className="text-[10px] text-muted uppercase tracking-wider">{s.label}</span>
                      </div>
                      <p className={`text-[13px] font-semibold ${s.ok ? 'text-white' : 'text-neon'}`}>{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-11 h-11 bg-surface-3 border border-white/[0.08] rounded-xl flex items-center justify-center shadow-card animate-float">
                <Bell className="w-4.5 h-4.5 text-neon" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-11 h-11 bg-surface-3 border border-white/[0.08] rounded-xl flex items-center justify-center shadow-card animate-float" style={{ animationDelay: '1.5s' }}>
                <Smartphone className="w-4.5 h-4.5 text-neon" />
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
    <section className="relative border-y border-white/[0.06] bg-surface-1">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`py-8 lg:py-10 text-center ${i < items.length - 1 ? 'lg:border-r lg:border-white/[0.06]' : ''} ${i === 0 ? '' : 'border-t lg:border-t-0 border-white/[0.06]'} ${i === 1 ? 'lg:border-l lg:border-white/[0.06]' : ''}`}
            >
              <p className="text-display-sm font-extrabold text-neon mb-1">{item.label}</p>
              <p className="text-body-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PROBLEM
   ═══════════════════════════════════════════════════════ */

function ProblemSection() {
  const problems = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Wasted Trips',
      desc: 'Customers travel to shops only to find them closed. No real-time information available. Time and fuel wasted.',
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: 'Missed Customers',
      desc: 'Shops lose footfall because customers don\'t know their status. No visibility means fewer sales.',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Security Concerns',
      desc: 'No monitoring after closing. Break-ins, fire, and smoke go undetected until it\'s too late.',
    },
  ];

  return (
    <section className="section relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="The Problem"
          title="The Problem Is Simple."
          titleAccent="Your Customers Don't Know If You're Open."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="card group">
              <div className="w-11 h-11 bg-neon/8 border border-neon/15 rounded-xl flex items-center justify-center text-neon mb-5 group-hover:shadow-glow-sm transition-shadow">
                {p.icon}
              </div>
              <h3 className="text-display-sm font-bold text-white mb-3">{p.title}</h3>
              <p className="text-body-sm text-muted-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SOLUTION
   ═══════════════════════════════════════════════════════ */

function SolutionSection() {
  return (
    <section className="section relative overflow-hidden">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Device visual */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,102,0.05)_0%,transparent_60%)] pointer-events-none" />
            <div className="bg-surface-3/60 border border-white/[0.08] rounded-3xl p-8">
              {/* Connection flow */}
              <div className="space-y-4">
                {[
                  { icon: <Store className="w-4 h-4" />, label: 'Shop', status: 'OPEN', color: 'text-neon' },
                  { icon: <Smartphone className="w-4 h-4" />, label: 'Owner App', status: 'Connected', color: 'text-neon' },
                  { icon: <Cloud className="w-4 h-4" />, label: 'Cloud Platform', status: 'Syncing', color: 'text-neon' },
                  { icon: <Wifi className="w-4 h-4" />, label: 'IoT Device', status: 'Active', color: 'text-neon' },
                  { icon: <Eye className="w-4 h-4" />, label: 'Customers', status: 'Updated', color: 'text-neon' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.06] rounded-xl px-5 py-4">
                      <div className="w-9 h-9 bg-neon/10 rounded-lg flex items-center justify-center text-neon">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-[13px] font-semibold text-white">{item.label}</p>
                      </div>
                      <span className={`text-[11px] font-semibold ${item.color}`}>{item.status}</span>
                    </div>
                    {i < 4 && (
                      <div className="flex justify-center py-1">
                        <div className="w-px h-4 bg-neon/20" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <div className="eyebrow mb-6">The Solution</div>
            <h2 className="font-display font-extrabold text-white text-display-lg tracking-tight mb-6">
              Meet <span className="text-gradient-neon">HERE OPEN</span>
            </h2>
            <p className="text-body-lg text-muted-light leading-relaxed mb-8 max-w-[480px]">
              A simple, affordable IoT solution that solves both problems simultaneously. One-tap control for owners, real-time visibility for customers.
            </p>
            <div className="space-y-4">
              {[
                { icon: <Eye className="w-4 h-4" />, text: 'Real-Time Visibility' },
                { icon: <Shield className="w-4 h-4" />, text: '24/7 Monitoring' },
                { icon: <Bell className="w-4 h-4" />, text: 'Customer Connection' },
                { icon: <Zap className="w-4 h-4" />, text: 'Smart Security' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-neon/10 rounded-lg flex items-center justify-center text-neon">
                    {f.icon}
                  </div>
                  <span className="text-[15px] font-medium text-white">{f.text}</span>
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
      <div className="absolute inset-0 bg-surface-1" />
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
              ? 'bg-surface-3/80 border border-neon/15 glow-status-open'
              : 'bg-surface-3/80 border border-red-500/15 glow-status-closed'
          }`}>
            {/* Status */}
            <div className="text-center mb-8">
              <p className="text-[10px] text-muted uppercase tracking-widest mb-3">Shop Status</p>
              <div className="flex items-center justify-center gap-3">
                <span className={`w-3 h-3 rounded-full ${isOpen ? 'bg-neon animate-status-pulse' : 'bg-red-500'}`} />
                <p className={`text-5xl font-extrabold tracking-tight ${
                  isOpen ? 'text-neon' : 'text-red-400'
                }`}>
                  {isOpen ? 'OPEN' : 'CLOSED'}
                </p>
              </div>
              {isOpen && (
                <p className="text-[11px] text-neon mt-3 flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-neon rounded-full animate-status-pulse" />
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
            <div className="flex items-center justify-between text-[11px] text-muted mb-6 px-2">
              <span>Last updated: Just Now</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-neon rounded-full" />
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
                    : 'bg-neon text-surface-0 hover:bg-neon-600 shadow-glow-sm hover:shadow-glow'
                }`}
              >
                Tap to Set {isOpen ? 'CLOSED' : 'OPEN'}
              </button>
              <p className="text-[11px] text-muted mt-4">
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
   HOW IT WORKS
   ═══════════════════════════════════════════════════════ */

function HowItWorksSection() {
  const steps = [
    { num: '01', title: 'Owner', desc: 'Tap OPEN or CLOSED in the app', icon: <Smartphone className="w-5 h-5" /> },
    { num: '02', title: 'Device', desc: 'IoT device receives command', icon: <Wifi className="w-5 h-5" /> },
    { num: '03', title: 'Cloud', desc: 'Status syncs instantly', icon: <Cloud className="w-5 h-5" /> },
    { num: '04', title: 'Customers', desc: 'Real-time status visible', icon: <Eye className="w-5 h-5" /> },
  ];

  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="How It Works"
          title="Four Steps."
          titleAccent="Instant Visibility."
        />

        {/* Desktop: horizontal */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="card text-center">
                <div className="w-12 h-12 bg-neon/8 border border-neon/15 rounded-xl flex items-center justify-center text-neon mx-auto mb-4">
                  {s.icon}
                </div>
                <p className="text-[10px] text-neon font-bold uppercase tracking-widest mb-2">Step {s.num}</p>
                <h3 className="text-[15px] font-bold text-white mb-1.5">{s.title}</h3>
                <p className="text-body-sm text-muted">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 z-10 hidden lg:block">
                  <ChevronRight className="w-5 h-5 text-white/10" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-4">
          {steps.map((s, i) => (
            <div key={i} className="card flex items-start gap-4">
              <div className="w-10 h-10 bg-neon/8 border border-neon/15 rounded-lg flex items-center justify-center text-neon flex-shrink-0">
                {s.icon}
              </div>
              <div>
                <p className="text-[10px] text-neon font-bold uppercase tracking-widest mb-1">Step {s.num}</p>
                <h3 className="text-[15px] font-bold text-white">{s.title}</h3>
                <p className="text-body-sm text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
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
      <div className="absolute inset-0 bg-surface-1" />
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
                  <div className="w-8 h-8 bg-neon/8 border border-neon/15 rounded-lg flex items-center justify-center text-neon flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-white">{f.title}</h4>
                    <p className="text-[11px] text-muted">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard */}
          <div className="bg-surface-3/60 border border-white/[0.08] rounded-3xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[13px] font-semibold text-white">System Status</h3>
              <span className="flex items-center gap-1.5 text-[11px] text-neon">
                <span className="w-1.5 h-1.5 bg-neon rounded-full animate-status-pulse" />
                ONLINE
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {monitors.map((m) => (
                <div key={m.label} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-muted">{m.icon}</span>
                    <span className="text-[10px] text-muted uppercase tracking-wider">{m.label}</span>
                  </div>
                  <p className={`text-[13px] font-semibold ${m.ok ? 'text-white' : 'text-neon'}`}>{m.value}</p>
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
   BUSINESS BENEFITS
   ═══════════════════════════════════════════════════════ */

function BenefitsSection() {
  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="For Businesses"
          title="More Sales."
          titleAccent="Less Worry."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Eye className="w-5 h-5" />, title: 'Higher Visibility', desc: 'Customers see your real-time OPEN/CLOSED status. More visibility means more footfall.' },
            { icon: <Bell className="w-5 h-5" />, title: 'Direct Communication', desc: 'Share offers, announcements, and updates directly to your customers\' phones.' },
            { icon: <Shield className="w-5 h-5" />, title: '24/7 Protection', desc: 'When closed, continuous security and fire monitoring protects your shop.' },
            { icon: <Smartphone className="w-5 h-5" />, title: 'Mobile Management', desc: 'Control everything from your phone — status, offers, announcements.' },
            { icon: <Activity className="w-5 h-5" />, title: 'Real-Time Analytics', desc: 'Track shop views, customer engagement, and operational insights.' },
            { icon: <Zap className="w-5 h-5" />, title: 'Instant Updates', desc: 'Push status changes and offers to all followers in real time.' },
          ].map((b, i) => (
            <div key={i} className="card group">
              <div className="w-11 h-11 bg-neon/8 border border-neon/15 rounded-xl flex items-center justify-center text-neon mb-5 group-hover:shadow-glow-sm transition-shadow">
                {b.icon}
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">{b.title}</h3>
              <p className="text-body-sm text-muted-light leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   CUSTOMER EXPERIENCE
   ═══════════════════════════════════════════════════════ */

function CustomerSection() {
  return (
    <section className="section relative">
      <div className="absolute inset-0 bg-surface-1" />
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="For Customers"
              title="Know Before"
              titleAccent="You Go."
              description="Check shop status before leaving home. Never waste a trip again."
              align="left"
            />
            <div className="space-y-4 mt-8">
              {[
                'Real-time OPEN/CLOSED status for any shop',
                'Discover nearby open shops with filters',
                'Get notified about offers and deals',
                'Follow your favorite shops',
                'Free to use with no hidden charges',
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-neon mt-0.5 flex-shrink-0" />
                  <span className="text-body-sm text-muted-light">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile mockup */}
          <div className="flex justify-center">
            <div className="w-[300px] bg-surface-3/80 border border-white/[0.08] rounded-3xl p-5 overflow-hidden">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-neon/10 rounded-xl flex items-center justify-center">
                  <Store className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-white">Sharma General Store</p>
                  <p className="text-[11px] text-muted">0.5 km away · Grocery</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-neon rounded-full animate-status-pulse" />
                <span className="text-[13px] font-bold text-neon">OPEN</span>
                <span className="text-[10px] text-muted ml-auto">Updated just now</span>
              </div>

              <div className="space-y-3">
                <div className="bg-neon/[0.06] border border-neon/15 rounded-xl p-4">
                  <p className="text-[10px] text-neon font-semibold uppercase tracking-wider mb-1">New Offer</p>
                  <p className="text-[13px] font-semibold text-white">10% off on all groceries</p>
                  <p className="text-[11px] text-muted mt-1">Expires in 2 days</p>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
                  <p className="text-[10px] text-muted-light font-semibold uppercase tracking-wider mb-1">Announcement</p>
                  <p className="text-[13px] font-medium text-white">New arrivals every Saturday</p>
                </div>
              </div>

              <div className="flex gap-2 mt-5">
                <button className="flex-1 py-2.5 bg-neon text-surface-0 text-[12px] font-bold rounded-lg">
                  Navigate
                </button>
                <button className="flex-1 py-2.5 border border-white/10 text-white text-[12px] font-medium rounded-lg">
                  Follow
                </button>
              </div>
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
            <div key={i} className="card-static flex flex-col items-center gap-3 py-6 text-center hover:border-white/10 transition-colors">
              <div className="w-10 h-10 bg-neon/8 border border-neon/15 rounded-xl flex items-center justify-center text-neon">
                {c.icon}
              </div>
              <span className="text-[13px] font-medium text-white">{c.name}</span>
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
      <div className="absolute inset-0 bg-surface-1" />
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
                  <div className="w-8 h-8 bg-neon/8 border border-neon/15 rounded-lg flex items-center justify-center text-neon text-[11px] font-bold flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] font-bold text-white">{l.label}</p>
                    <p className="text-[11px] text-muted">{l.sub}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/10" />
                </div>
                {i < layers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-px h-3 bg-neon/15" />
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

/* ═══════════════════════════════════════════════════════
   MARKET OPPORTUNITY
   ═══════════════════════════════════════════════════════ */

function MarketSection() {
  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="Market Opportunity"
          title="Massive Market."
          titleAccent="Massive Potential."
          description="India's 63 million+ small businesses need modern technology solutions. HERE OPEN is positioned to serve this massive market."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { stat: '90+ Cr', label: 'Internet Users in India' },
            { stat: '6.3+ Cr', label: 'Small Businesses / MSMEs' },
            { stat: '₹50K Cr', label: 'Local Retail Market' },
            { stat: '80%', label: 'Shops Without Digital Presence' },
          ].map((item, i) => (
            <div key={i} className="card-static text-center py-8">
              <p className="text-display-md font-extrabold text-neon mb-2">{item.stat}</p>
              <p className="text-body-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[11px] text-muted">
          Figures presented in the HERE OPEN pitch deck. Not independently verified.
        </p>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   ROADMAP
   ═══════════════════════════════════════════════════════ */

function RoadmapSection() {
  const phases = [
    { year: '2026', title: 'MVP + Pilot', status: 'active', items: ['Core platform', 'IoT device pilot', 'Mobile app launch'] },
    { year: '2027', title: 'City Expansion', status: 'upcoming', items: ['Multi-city rollout', 'Business dashboard', 'Analytics v2'] },
    { year: '2028', title: 'Rapid Growth', status: 'upcoming', items: ['National coverage', 'Enterprise features', 'API marketplace'] },
    { year: '2029–30', title: 'Market Scale', status: 'upcoming', items: ['International expansion', 'Smart city integrations', 'AI features'] },
    { year: '2031+', title: 'Market Leadership', status: 'upcoming', items: ['Industry standard', 'Full ecosystem', 'Patent portfolio'] },
  ];

  return (
    <section className="section relative">
      <div className="absolute inset-0 bg-surface-1" />
      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Roadmap"
          title="Where We're"
          titleAccent="Headed"
        />

        {/* Desktop: horizontal */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4">
          {phases.map((p, i) => (
            <div key={i} className="relative">
              <div className={`card-static py-6 ${p.status === 'active' ? 'border-neon/20' : ''}`}>
                <p className="text-[11px] text-neon font-bold uppercase tracking-widest mb-1">{p.year}</p>
                <h3 className="text-[15px] font-bold text-white mb-3">{p.title}</h3>
                <ul className="space-y-2">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${p.status === 'active' ? 'text-neon' : 'text-white/20'}`} />
                      <span className="text-[11px] text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {i < phases.length - 1 && (
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 z-10 hidden xl:block">
                  <ChevronRight className="w-4 h-4 text-white/10" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-4">
          {phases.map((p, i) => (
            <div key={i} className={`card-static ${p.status === 'active' ? 'border-neon/20' : ''}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] text-neon font-bold uppercase tracking-widest">{p.year}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${p.status === 'active' ? 'bg-neon/10 text-neon' : 'bg-white/5 text-muted'}`}>
                  {p.status === 'active' ? 'Active' : 'Planned'}
                </span>
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">{p.title}</h3>
              <ul className="space-y-2">
                {p.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${p.status === 'active' ? 'text-neon' : 'text-white/20'}`} />
                    <span className="text-[11px] text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   IP / INNOVATION
   ═══════════════════════════════════════════════════════ */

function IPSection() {
  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="Innovation"
          title="Patent-Pending"
          titleAccent="Technology"
          description="Our proprietary system combines IoT, real-time data, and smart security into one seamless platform."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Real-Time Intelligence', desc: 'Instant shop status updates with sub-second latency across all connected devices.' },
            { title: 'Smart Security', desc: 'Automated security activation when shops close, with multi-sensor event detection.' },
            { title: 'Low-Cost IoT', desc: 'Affordable hardware with GSM connectivity, designed for Indian market conditions.' },
            { title: 'Customer Connectivity', desc: 'Direct communication channel between businesses and their customers.' },
            { title: 'Scalable Architecture', desc: 'Cloud-native design that scales from single shops to national chains.' },
            { title: 'Patent-Pending System', desc: 'Novel approach to shop status management and real-time customer notification.' },
          ].map((item, i) => (
            <div key={i} className="card group">
              <div className="w-8 h-8 bg-neon/8 border border-neon/15 rounded-lg flex items-center justify-center text-neon mb-4">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">{item.title}</h3>
              <p className="text-body-sm text-muted-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════════════ */

function CTASection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-1" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse,rgba(0,255,102,0.04)_0%,transparent_60%)] pointer-events-none" />
      <Container className="relative z-10 text-center">
        <h2 className="font-display font-extrabold text-white text-display-lg tracking-tight mb-5">
          Ready to Make Your Shop
          <br />
          <span className="text-gradient-neon">Smarter?</span>
        </h2>
        <p className="text-body-lg text-muted-light max-w-[500px] mx-auto mb-10">
          Join thousands of businesses already using HERE OPEN to connect with customers and enhance security.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/download"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-neon text-surface-0 text-[15px] font-bold rounded-lg hover:bg-neon-600 transition-all shadow-glow-sm hover:shadow-glow"
          >
            Get Started Free <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/10 text-white text-[15px] font-medium rounded-lg hover:border-white/20 hover:bg-white/[0.03] transition-all"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN
   ═══════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface-0 relative noise">
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <SolutionSection />
      <DemoSection />
      <HowItWorksSection />
      <MonitoringSection />
      <BenefitsSection />
      <CustomerSection />
      <TargetSection />
      <TechnologySection />
      <MarketSection />
      <RoadmapSection />
      <IPSection />
      <CTASection />
    </main>
  );
}
