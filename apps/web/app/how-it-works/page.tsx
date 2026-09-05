import { Metadata } from 'next';
import { Smartphone, Wifi, Cloud, Eye, Shield, Bell, Zap, CheckCircle, Store, UtensilsCrossed, Cross, Scissors, Wrench, ShoppingBag, Building2 } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';
import { SolutionSection, FeaturesSection } from '../components/NarrativeSections';

export const metadata: Metadata = {
  title: 'How It Works - HERE OPEN',
  description: 'Learn how HERE OPEN IoT platform provides real-time shop visibility and 24/7 safety monitoring.',
};

const flowSteps = [
  { icon: Smartphone, label: 'Owner App' },
  { icon: Cloud, label: 'Cloud API' },
  { icon: Wifi, label: 'IoT Device' },
  { icon: Eye, label: 'Customer App' },
];

const openingSteps = [
  'Open the HERE OPEN app on your phone',
  'Tap the "OPEN" button',
  'Command sent to IoT device via cloud',
  'Device acknowledges the command',
  'Shop status updated to OPEN',
  'All customers see OPEN status instantly',
];

const closingSteps = [
  'Open the HERE OPEN app on your phone',
  'Tap the "CLOSED" button',
  'Device switches to CLOSED state',
  'Security monitoring activates',
  'Fire/smoke sensors become active',
  'All customers see CLOSED status',
];

const securityFeatures = [
  {
    icon: Shield,
    title: 'Security Monitoring',
    desc: 'Motion detection, door/window sensors, vibration alerts',
  },
  {
    icon: Zap,
    title: 'Fire Detection',
    desc: 'Temperature monitoring, smoke detection, heat alerts',
  },
  {
    icon: Bell,
    title: 'Instant Alerts',
    desc: 'Push notifications, SMS alerts, real-time dashboard updates',
  },
];

const iotFeatures = [
  'Plug-and-play hardware',
  'GSM/SIM connectivity',
  'Multiple sensor inputs',
  'Secure device identity',
  'Remote firmware updates',
];

const cloudFeatures = [
  'Real-time synchronization',
  'WebSocket push updates',
  'Event-driven architecture',
  'Scalable microservices',
  'Enterprise security',
];

const providerCategories = [
  { icon: <Store size={16} className="text-[#6B7C8E]" strokeWidth={1.5} />, name: 'Kirana' },
  { icon: <UtensilsCrossed size={16} className="text-[#6B7C8E]" strokeWidth={1.5} />, name: 'Restaurants' },
  { icon: <Cross size={16} className="text-[#6B7C8E]" strokeWidth={1.5} />, name: 'Medical Stores' },
  { icon: <Scissors size={16} className="text-[#6B7C8E]" strokeWidth={1.5} />, name: 'Salons' },
  { icon: <Scissors size={16} className="text-[#6B7C8E]" strokeWidth={1.2} />, name: 'Tailors' },
  { icon: <Wrench size={16} className="text-[#6B7C8E]" strokeWidth={1.5} />, name: 'Repair Shops' },
  { icon: <ShoppingBag size={16} className="text-[#6B7C8E]" strokeWidth={1.5} />, name: 'Retail' },
  { icon: <Building2 size={16} className="text-[#6B7C8E]" strokeWidth={1.5} />, name: 'Small Offices' },
];

function ProvidersSection() {
  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="Solution Providers"
          title="Built For Every"
          titleAccent="Local Service Provider"
          description="From kirana stores to clinics, salons to repair shops — any business with physical presence benefits from HERE OPEN."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {providerCategories.map((c, i) => (
            <div key={i} className="card-static flex items-center justify-center gap-2 py-4 px-5 hover:border-green-action/30 transition-colors">
              {c.icon}
              <span className="text-[13px] font-medium text-black">{c.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white relative noise">
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="How It Works"
            title="How HERE OPEN Works"
            description="Simple one-tap control with instant real-time updates across our IoT platform."
            align="left"
          />
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Complete Flow"
            title="The Complete Flow"
            description="From owner's tap to customer's screen - everything happens in real-time"
          />

          <div className="card-static p-8 mb-16">
            <div className="flex items-center justify-center flex-wrap gap-4">
              {flowSteps.map((step, i) => (
                <div key={i} className="flex items-center">
                  <div className="bg-green-action/8 border border-green-action/15 text-green-action px-5 py-3 rounded-2xl flex items-center space-x-3">
                    <step.icon className="w-6 h-6" />
                    <span className="font-medium">{step.label}</span>
                  </div>
                  {i < 3 && (
                    <div className="w-8 h-0.5 bg-neutral-300 mx-2 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold tracking-tight text-green-forest mb-8">
                For Shop Owners
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-static p-8 border-green-500/20">
                  <h4 className="text-xl font-bold text-green-forest mb-6 flex items-center">
                    <span className="w-8 h-8 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center text-sm mr-3 border border-green-500/20">
                      1
                    </span>
                    Opening Your Shop
                  </h4>
                  <ol className="space-y-4 text-black">
                    {openingSteps.map((step, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="card-static p-8 border-red-500/20">
                  <h4 className="text-xl font-bold text-green-forest mb-6 flex items-center">
                    <span className="w-8 h-8 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center text-sm mr-3 border border-red-500/20">
                      2
                    </span>
                    Closing Your Shop
                  </h4>
                  <ol className="space-y-4 text-black">
                    {closingSteps.map((step, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold tracking-tight text-green-forest mb-8">
                24/7 Security Monitoring
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {securityFeatures.map((feature, i) => (
                  <div key={i} className="card p-6">
                    <div className="w-11 h-11 bg-green-action/8 border border-green-action/15 rounded-xl flex items-center justify-center text-green-action mb-4">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-green-forest mb-2">{feature.title}</h4>
                    <p className="text-black text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold tracking-tight text-green-forest mb-8">
                The Technology
              </h3>
              <div className="card-static p-8 grid-bg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-xl mb-4">IoT Device</h4>
                    <ul className="space-y-3 text-black">
                      {iotFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-green-action rounded-full mr-3 mt-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-4">Cloud Platform</h4>
                    <ul className="space-y-3 text-black">
                      {cloudFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-green-action rounded-full mr-3 mt-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SolutionSection />
      <ProvidersSection />
      <FeaturesSection />
    </main>
  );
}