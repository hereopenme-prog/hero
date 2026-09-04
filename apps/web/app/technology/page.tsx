import { Metadata } from 'next';
import { Wifi, Cloud, Shield, Cpu, Database, Smartphone, Globe, Lock } from 'lucide-react';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';

export const metadata: Metadata = {
  title: 'Technology - HERE OPEN',
  description: 'Learn about the IoT technology powering HERE OPEN platform.',
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-surface-0 relative noise">
      {/* Hero */}
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Technology"
            title="The Technology Behind HERE OPEN"
            description="A modern IoT platform built with scalable, secure, and reliable technology."
          />
        </Container>
      </section>

      {/* System Architecture */}
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Architecture"
            title="System Architecture"
            description="Four interconnected layers powering seamless device-to-cloud-to-client communication."
          />
          <div className="card-static p-8">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Cpu, title: 'IoT Device', desc: 'Sensors, GSM connectivity, local processing' },
                { icon: Cloud, title: 'Cloud Service', desc: 'MQTT broker, event processing, APIs' },
                { icon: Database, title: 'Database', desc: 'PostgreSQL, real-time sync, analytics' },
                { icon: Smartphone, title: 'Clients', desc: 'Web dashboard, mobile apps, admin panel' },
              ].map((layer) => (
                <div key={layer.title} className="card text-center">
                  <div className="w-11 h-11 bg-neon/8 border border-neon/15 rounded-xl text-neon flex items-center justify-center mx-auto mb-4">
                    <layer.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-white mb-2">{layer.title}</h3>
                  <p className="text-body-lg text-muted-light">{layer.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center">
              <div className="bg-neon/5 border border-neon/15 rounded-xl px-6 py-3">
                <p className="text-body-lg text-muted-light">
                  IoT Device <span className="text-neon">&rarr;</span> MQTT <span className="text-neon">&rarr;</span> Event Processor <span className="text-neon">&rarr;</span> PostgreSQL <span className="text-neon">&rarr;</span> WebSocket <span className="text-neon">&rarr;</span> Clients
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Technology Stack */}
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Stack"
            title="Technology Stack"
            description="Battle-tested technologies chosen for performance, reliability, and developer experience."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: 'PostgreSQL',
                desc: 'Reliable, scalable database with Prisma ORM',
              },
              {
                icon: Cloud,
                title: 'Node.js + TypeScript',
                desc: 'Type-safe backend with Express framework',
              },
              {
                icon: Smartphone,
                title: 'Next.js',
                desc: 'React framework for web applications',
              },
              {
                icon: Globe,
                title: 'React Native',
                desc: 'Cross-platform mobile applications',
              },
              {
                icon: Wifi,
                title: 'MQTT',
                desc: 'Lightweight IoT messaging protocol',
              },
              {
                icon: Lock,
                title: 'WebSocket',
                desc: 'Real-time bidirectional communication',
              },
            ].map((tech) => (
              <div key={tech.title} className="card hover:border-neon/15 transition-colors">
                <div className="w-11 h-11 bg-neon/8 border border-neon/15 rounded-xl text-neon flex items-center justify-center mb-4">
                  <tech.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-extrabold text-white mb-2">{tech.title}</h3>
                <p className="text-body-lg text-muted-light">{tech.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Enterprise Security */}
      <section className="section">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Security"
                title="Enterprise-Grade Security"
                description="Security is built into every layer of HERE OPEN. From device authentication to data encryption, we ensure your information is protected."
                align="left"
              />
              <ul className="space-y-4">
                {[
                  'JWT-based authentication with refresh tokens',
                  'Role-based access control (RBAC)',
                  'Encrypted device credentials',
                  'Audit logging for all critical actions',
                  'Rate limiting and brute force protection',
                  'Secure WebSocket connections',
                ].map((item) => (
                  <li key={item} className="flex items-start bg-neon/5 border border-neon/15 rounded-xl p-4">
                    <Shield className="w-5 h-5 text-neon mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-body-lg text-muted-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-static p-8">
              <h3 className="font-display font-extrabold text-white text-xl mb-6">Security Layers</h3>
              <div className="space-y-4">
                {[
                  { layer: 'Application', desc: 'Input validation, CORS, CSP' },
                  { layer: 'Authentication', desc: 'JWT, OTP, 2FA-ready' },
                  { layer: 'Authorization', desc: 'RBAC, resource ownership' },
                  { layer: 'Data', desc: 'Encryption at rest and in transit' },
                  { layer: 'Network', desc: 'TLS, rate limiting, DDoS protection' },
                  { layer: 'Device', desc: 'Unique identity, authenticated commands' },
                ].map((item) => (
                  <div key={item.layer} className="flex items-center space-x-4 bg-neon/5 border border-neon/15 rounded-xl p-4">
                    <div className="w-28 text-body-lg text-neon font-medium">{item.layer}</div>
                    <div className="flex-1 h-px bg-border" />
                    <div className="text-body-lg text-muted-light">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
