import { Metadata } from 'next';
import Link from 'next/link';
import { Eye, Bell, Shield, BarChart3, Smartphone, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';

export const metadata: Metadata = {
  title: 'For Businesses - HERE OPEN',
  description: 'Grow your business with real-time shop visibility, 24/7 security, and direct customer communication.',
};

const features = [
  {
    icon: Eye,
    title: 'Real-Time Visibility',
    desc: 'Customers see your OPEN/CLOSED status instantly. No more wasted trips means happier customers.',
  },
  {
    icon: Bell,
    title: 'Direct Communication',
    desc: "Share offers, announcements, and updates directly to your customers' phones.",
  },
  {
    icon: Shield,
    title: '24/7 Security',
    desc: 'When closed, our IoT device monitors for security breaches, fire, and smoke.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Track shop views, customer engagement, and operational insights.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Management',
    desc: 'Control everything from your phone - status, offers, announcements.',
  },
  {
    icon: Users,
    title: 'Customer Insights',
    desc: 'Know your customers, their preferences, and engagement patterns.',
  },
];

const dashboardFeatures = [
  'One-tap OPEN/CLOSED control',
  'Real-time device status',
  'Offer and announcement management',
  'Customer engagement metrics',
  'Security and fire alerts',
  'Team member access',
];

const plans = [
  {
    name: 'Free',
    price: '₹0',
    period: '/month',
    features: ['1 shop', 'Basic status', 'Limited offers'],
    popular: false,
  },
  {
    name: 'Starter',
    price: '₹499',
    period: '/month',
    features: ['3 shops', 'Real-time status', '20 offers', 'Security alerts'],
    popular: true,
  },
  {
    name: 'Professional',
    price: '₹1,499',
    period: '/month',
    features: ['10 shops', 'Full analytics', 'Priority support', 'IoT monitoring'],
    popular: false,
  },
];

export default function ForBusinessesPage() {
  return (
    <main className="min-h-screen bg-white relative noise">
      {/* Hero */}
      <section className="section relative">
        <Container>
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">For Businesses</div>
            <h1 className="font-display font-extrabold text-green-forest text-display-lg tracking-tight mb-6">
              Grow Your Business with{' '}
              <span className="text-green-action">HERE OPEN</span>
            </h1>
            <p className="text-body-lg text-neutral-500 mb-8">
              Connect with customers, enhance security, and gain insights with our
              IoT-powered platform designed for Indian businesses.
            </p>
            <Link
              href="/download"
              className="inline-flex items-center bg-green-action text-white px-7 py-3.5 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Start Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Everything You Need */}
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Features"
            title="Everything You Need"
            description="A complete platform to manage, secure, and grow your business."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="card group">
                <div className="w-11 h-11 bg-green-action/8 border border-green-action/15 rounded-xl flex items-center justify-center text-green-action mb-5">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-extrabold text-green-forest text-xl tracking-tight mb-3">
                  {feature.title}
                </h3>
                <p className="text-body-lg text-neutral-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Powerful Dashboard */}
      <section className="section">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Dashboard"
                title="Powerful Dashboard"
                titleAccent="Management"
                description="Manage your shop from anywhere with our professional dashboard. Control status, manage offers, view analytics, and respond to alerts."
                align="left"
                className="mb-10"
              />
              <ul className="space-y-4">
                {dashboardFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-action mr-3 mt-0.5 shrink-0" />
                    <span className="text-body-lg text-neutral-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-static rounded-2xl p-8 shadow-green">
              <div className="bg-neutral-100 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-semibold text-black">Shop Dashboard</span>
                  <span className="text-green-action text-sm font-medium">Live</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-action/10 border border-green-action/20 rounded-xl p-4">
                    <p className="text-xs text-neutral-500">Status</p>
                    <p className="text-xl font-bold text-green-action">OPEN</p>
                  </div>
                  <div className="bg-neutral-100 border border-neutral-300 rounded-xl p-4">
                    <p className="text-xs text-neutral-500">Views Today</p>
                    <p className="text-xl font-bold text-black">127</p>
                  </div>
                  <div className="bg-neutral-100 border border-neutral-300 rounded-xl p-4">
                    <p className="text-xs text-neutral-500">Followers</p>
                    <p className="text-xl font-bold text-black">1,234</p>
                  </div>
                  <div className="bg-green-action/10 border border-green-action/20 rounded-xl p-4">
                    <p className="text-xs text-neutral-500">Active Offers</p>
                    <p className="text-xl font-bold text-black">3</p>
                  </div>
                </div>
                <button className="w-full bg-green-action text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
                  Manage Shop
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Simple Pricing */}
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Pricing"
            title="Simple, Transparent Pricing"
            description="Start free and scale as you grow. No hidden fees."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-green-action/10 border border-green-action/20 shadow-green relative'
                    : 'card'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-action text-white text-xs font-bold px-4 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <h3
                  className={`font-display font-extrabold text-xl tracking-tight ${
                    plan.popular ? 'text-green-action' : 'text-black'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-black tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-neutral-500">{plan.period}</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-body-lg text-neutral-500">
                      <CheckCircle className="w-5 h-5 text-green-action mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/download"
                  className={`block mt-8 py-3 rounded-lg font-bold text-center transition-opacity hover:opacity-90 ${
                    plan.popular
                      ? 'bg-green-action text-white'
                      : 'border border-neutral-300 text-black hover:bg-green-light'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section">
        <Container className="text-center">
          <SectionHeader
            eyebrow="Get Started"
            title="Ready to Transform Your Business?"
            description="Join hundreds of Indian businesses already using HERE OPEN to connect with their customers."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="inline-flex items-center justify-center bg-green-action text-white px-7 py-3.5 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Start Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-neutral-300 text-black px-7 py-3.5 rounded-lg font-bold hover:bg-green-light transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
