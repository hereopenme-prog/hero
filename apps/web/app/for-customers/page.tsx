import { Metadata } from 'next';
import Link from 'next/link';
import { Eye, Bell, MapPin, Clock, Star, ArrowRight, CheckCircle, Store, Smartphone, Play } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';

export const metadata: Metadata = {
  title: 'For Customers - HERE OPEN',
  description: 'Never waste a trip again. Know shop status, get offers, and discover local businesses.',
};

const features = [
  {
    icon: Eye,
    title: 'See Shop Status',
    desc: 'Real-time OPEN/CLOSED status for any shop',
  },
  {
    icon: MapPin,
    title: 'Find Nearby Shops',
    desc: 'Discover shops near you with filters',
  },
  {
    icon: Bell,
    title: 'Get Notifications',
    desc: 'Offers, updates, and new arrivals',
  },
  {
    icon: Star,
    title: 'Follow Shops',
    desc: 'Save favorites and stay updated',
  },
];

const benefits = [
  'Save time by checking shop status before traveling',
  'Never miss offers and deals from your favorite shops',
  'Discover new local businesses in your area',
  'Get instant notifications when shops update their status',
  'Free to use with no hidden charges',
  'Works offline with cached status data',
];

export default function ForCustomersPage() {
  return (
    <main className="min-h-screen bg-white relative noise">
      {/* Hero */}
      <section className="section relative">
        <Container>
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">For Customers</div>
            <h1 className="font-display font-extrabold text-green-forest text-display-lg tracking-tight mb-6">
              Never Waste a Trip Again
            </h1>
            <p className="text-body-lg text-neutral-500 mb-8">
              Know if your favorite shop is open before you leave home.
              Get offers, discover new shops, and stay connected with local businesses.
            </p>
            <Link
              href="/download"
              className="inline-flex items-center bg-green-action text-white px-7 py-3.5 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Get Early Access
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </Container>
      </section>

      {/* What You Can Do */}
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Features"
            title="What You Can Do"
            description="Everything you need to stay connected with your local shops."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Why Customers Love */}
      <section className="section">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Benefits"
                title="Why Customers Love"
                titleAccent="HERE OPEN"
                description="Join thousands of smart shoppers who never waste a trip."
                align="left"
                className="mb-10"
              />
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-action mr-3 mt-0.5 shrink-0" />
                    <span className="text-body-lg text-neutral-500">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-static rounded-2xl p-8">
              <div className="bg-neutral-100 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-action/10 rounded-full flex items-center justify-center">
                    <Store className="w-6 h-6 text-green-action" />
                  </div>
                  <div>
                    <h4 className="font-extrabold tracking-tight text-green-forest">Sharma General Store</h4>
                    <p className="text-sm text-green-action flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 shadow-green"></span>
                      OPEN
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 mb-4">0.5 km away • Grocery</p>
                <div className="bg-green-action/10 border border-green-action/20 rounded-xl p-4">
                  <p className="text-xs text-green-action font-medium mb-1">New Offer</p>
                  <p className="text-sm font-medium text-black">10% off on all groceries</p>
                  <p className="text-xs text-neutral-500 mt-1">Expires in 2 days</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Download */}
      <section className="section">
        <Container className="text-center">
          <SectionHeader
            eyebrow="Download"
            title="Get the App"
            description="Available on iOS and Android. Start discovering local shops today."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="card-static px-8 py-4 rounded-lg font-bold text-black hover:bg-green-light transition-colors inline-flex items-center justify-center"
            >
              <Smartphone className="w-6 h-6 text-green-action mr-3" />
              App Store
            </Link>
            <Link
              href="#"
              className="card-static px-8 py-4 rounded-lg font-bold text-black hover:bg-green-light transition-colors inline-flex items-center justify-center"
            >
              <Play className="w-6 h-6 text-green-action mr-3" />
              Google Play
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
