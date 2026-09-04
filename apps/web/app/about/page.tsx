import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Users, Target, Heart, ArrowRight } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';

export const metadata: Metadata = {
  title: 'About',
  description: 'About HERE OPEN — IoT platform for real-time shop visibility and 24/7 safety monitoring.',
};

const values = [
  {
    icon: Shield,
    title: 'Trust',
    desc: 'Building confidence in local businesses through transparent, real-time status updates.',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'Connecting neighbors with local shops, strengthening the fabric of every neighborhood.',
  },
  {
    icon: Target,
    title: 'Innovation',
    desc: 'Applying IoT technology to everyday problems that matter to millions of Indians.',
  },
  {
    icon: Heart,
    title: 'Impact',
    desc: 'Empowering Indian SMBs to compete, grow, and thrive in the digital age.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white relative noise">
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,102,0.04)_0%,transparent_60%)] pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">About</div>
            <h1 className="font-display font-extrabold text-green-forest text-display-lg tracking-tight mb-6">
              About HERE OPEN
            </h1>
            <p className="text-body-lg text-neutral-500 leading-relaxed">
              We&apos;re on a mission to connect every shop with its customers through
              real-time visibility, smart IoT technology, and a commitment to
              empowering local businesses across India.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Mission"
                title="Our Mission"
                description="HERE OPEN aims to bridge the gap between local businesses and their customers through IoT technology. We believe every shop deserves real-time visibility, and every customer deserves to know shop status before traveling."
                align="left"
                className="mb-0"
              />
              <p className="text-body-lg text-neutral-500 leading-relaxed mt-6">
                Our plug-and-play IoT device and mobile platform provide instant
                OPEN/CLOSED status, 24/7 security monitoring, and direct customer
                communication channels — all built for the unique needs of Indian businesses.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {values.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="card-static rounded-2xl p-6">
                    <div className="w-11 h-11 bg-green-action/8 border border-green-action/15 rounded-xl flex items-center justify-center text-green-action mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-extrabold text-green-forest tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-body-lg text-neutral-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Built for India */}
      <section className="section relative overflow-hidden bg-neutral-50">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,102,0.04)_0%,transparent_60%)] pointer-events-none" />
        <Container className="relative z-10 text-center">
          <SectionHeader
            eyebrow="India First"
            title="Built for India"
            titleAccent="Designed for Local Business"
            description="HERE OPEN is designed specifically for Indian small and medium businesses. Our IoT device works with GSM/SIM connectivity, making it accessible even in areas with limited internet infrastructure."
          />
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-8">
            {[
              'GSM/SIM Connectivity',
              'No WiFi Required',
              'Hindi & Regional Languages',
              'Affordable Pricing',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-green-action/15 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-action" />
                </span>
                <span className="text-body-lg text-neutral-500">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,102,0.06)_0%,transparent_60%)] pointer-events-none" />
        <Container className="relative z-10 text-center">
          <SectionHeader
            eyebrow="Join Us"
            title="Join the HERE OPEN Community"
            description="Whether you're a business owner looking to connect with customers, or a customer tired of wasted trips — HERE OPEN is for you."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="inline-flex items-center justify-center bg-green-action text-white px-7 py-3.5 rounded-lg font-bold text-[15px] hover:bg-green-forest transition-all shadow-green"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-neutral-200 text-black px-7 py-3.5 rounded-lg font-medium hover:border-green-action/30 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
