import { Metadata } from 'next';
import { Shield, Lock, Eye, AlertTriangle, Thermometer, Wind } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';

export const metadata: Metadata = {
  title: 'Security & Safety - HERE OPEN',
  description: '24/7 security monitoring, fire detection, and instant alerts with HERE OPEN IoT platform.',
};

const features = [
  {
    icon: Shield,
    title: 'Security Monitoring',
    desc: 'Motion detection, door/window sensors, and vibration alerts protect your shop 24/7.',
  },
  {
    icon: Thermometer,
    title: 'Fire Detection',
    desc: 'Temperature sensors monitor for abnormal heat levels that could indicate fire risk.',
  },
  {
    icon: Wind,
    title: 'Smoke Detection',
    desc: 'Smoke sensors provide early warning of potential fire hazards.',
  },
  {
    icon: AlertTriangle,
    title: 'Instant Alerts',
    desc: 'Push notifications and SMS alerts for any security or safety events.',
  },
  {
    icon: Eye,
    title: 'Real-Time Dashboard',
    desc: 'View all sensor data and alerts in real-time on your dashboard.',
  },
  {
    icon: Lock,
    title: 'Secure Communication',
    desc: 'All device communication is encrypted and authenticated.',
  },
];

const steps = [
  {
    step: '01',
    title: 'Shop Closes',
    desc: 'Owner taps CLOSED in the app, activating security monitoring.',
  },
  {
    step: '02',
    title: 'Sensors Activate',
    desc: 'Motion, temperature, and smoke sensors begin continuous monitoring.',
  },
  {
    step: '03',
    title: 'Event Detected',
    desc: 'IoT device detects an anomaly (motion, temperature spike, etc.).',
  },
  {
    step: '04',
    title: 'Alert Generated',
    desc: 'System creates an alert with severity level and details.',
  },
  {
    step: '05',
    title: 'Owner Notified',
    desc: 'Push notification and SMS sent to shop owner immediately.',
  },
];

const disclaimers = [
  'HERE OPEN provides monitoring and alert services',
  'Alerts are sent to shop owners and designated contacts',
  'Emergency services should be contacted directly for immediate threats',
  'System capabilities can be expanded with additional integrations',
  'All sensor data is clearly labeled as demonstration data in development',
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-surface-0 relative noise">
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Security & Safety"
            title="24/7 Security & Safety Monitoring"
            description="When your shop is closed, HERE OPEN keeps watching. Our IoT device provides continuous security and safety monitoring with instant alerts."
            align="left"
          />
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="card p-8">
                  <div className="w-11 h-11 bg-neon/8 border border-neon/15 rounded-xl flex items-center justify-center mb-6 text-neon">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-extrabold text-white text-display-lg tracking-tight mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-body-lg text-muted-light">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="How It Works"
            title="How Security Monitoring Works"
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((item, i) => (
                <div key={i} className="card-static p-6 flex items-start space-x-6">
                  <div className="w-10 h-10 bg-neon/8 border border-neon/15 rounded-lg flex items-center justify-center text-neon font-bold text-[11px] flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-white text-display-lg tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-body-lg text-muted-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="card-static p-8 border-red-500/15">
            <h3 className="font-display font-extrabold text-red-400 text-display-lg tracking-tight mb-4">
              Important Information
            </h3>
            <ul className="space-y-3 text-red-400 text-body-lg">
              {disclaimers.map((item, i) => (
                <li key={i}>&#x2022; {item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
