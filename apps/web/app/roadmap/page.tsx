import { Metadata } from 'next';
import { Container } from '../components/Container';
import { SectionHeader } from '../components/SectionHeader';

export const metadata: Metadata = {
  title: 'Product Roadmap - HERE OPEN',
  description:
    'The future of HERE OPEN — upcoming features and improvements.',
};

const phases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    year: '2024',
    status: 'completed' as const,
    items: [
      { name: 'Core platform architecture', status: 'completed' as const },
      { name: 'Database schema design', status: 'completed' as const },
      { name: 'Authentication system', status: 'completed' as const },
      { name: 'IoT abstraction layer', status: 'completed' as const },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Web Platform',
    year: '2025',
    status: 'in-progress' as const,
    items: [
      { name: 'Public website', status: 'completed' as const },
      { name: 'Business dashboard', status: 'in-progress' as const },
      { name: 'Admin panel', status: 'pending' as const },
      { name: 'Real-time updates', status: 'pending' as const },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Mobile App',
    year: '2025',
    status: 'pending' as const,
    items: [
      { name: 'Customer mobile app', status: 'pending' as const },
      { name: 'Push notifications', status: 'pending' as const },
      { name: 'Location services', status: 'pending' as const },
      { name: 'Offline support', status: 'pending' as const },
    ],
  },
  {
    phase: 'Phase 4',
    title: 'IoT Integration',
    year: '2026',
    status: 'pending' as const,
    items: [
      { name: 'Hardware integration', status: 'pending' as const },
      { name: 'MQTT broker setup', status: 'pending' as const },
      { name: 'Device provisioning', status: 'pending' as const },
      { name: 'Firmware updates', status: 'pending' as const },
    ],
  },
  {
    phase: 'Phase 5',
    title: 'Scale',
    year: '2026',
    status: 'pending' as const,
    items: [
      { name: 'Multi-region deployment', status: 'pending' as const },
      { name: 'Analytics dashboard', status: 'pending' as const },
      { name: 'API marketplace', status: 'pending' as const },
      { name: 'Enterprise features', status: 'pending' as const },
    ],
  },
];

function statusBadge(status: 'completed' | 'in-progress' | 'pending') {
  const labels: Record<string, string> = {
    completed: 'Completed',
    'in-progress': 'In Progress',
    pending: 'Planned',
  };

  return (
    <span
      className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
        status === 'completed'
          ? 'bg-green-action/10 text-green-action'
          : status === 'in-progress'
            ? 'bg-green-action/10 text-green-action'
            : 'bg-neutral-100 text-neutral-500'
      }`}
    >
      {labels[status]}
    </span>
  );
}

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-white relative noise">
      {/* Hero */}
      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Roadmap"
            title="Product Roadmap"
            description="Our journey to build the complete IoT platform for Indian businesses."
            align="center"
          />
        </Container>
      </section>

      {/* Timeline */}
      <section className="section pb-8 md:pb-16">
        <Container>
          {/* Horizontal connector (desktop only) */}
          <div className="hidden md:flex items-center mb-12 relative">
            {phases.map((p, i) => (
              <div key={i} className="flex items-center flex-1 last:flex-none">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold ${
                    p.status === 'completed'
                      ? 'bg-green-action/10 text-green-action'
                      : p.status === 'in-progress'
                        ? 'bg-green-action/10 text-green-action'
                        : 'bg-neutral-100 text-neutral-500'
                  }`}
                >
                  {i + 1}
                </div>
                {i < phases.length - 1 && (
                  <div
                    className={`flex-1 h-px mx-3 ${
                      phases[i + 1].status === 'completed'
                        ? 'bg-green-action/40'
                        : 'bg-neutral-100'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Cards — horizontal scroll on desktop, stacked on mobile */}
          <div className="flex flex-col md:flex-row gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x md:snap-none">
            {phases.map((phase, i) => (
              <div key={i} className="min-w-[280px] md:min-w-0 flex-1 snap-start">
                <div className="card-static h-full flex flex-col">
                  {/* Phase dot (mobile only) */}
                  <div className="md:hidden flex items-center gap-3 mb-5">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${
                        phase.status === 'completed'
                          ? 'bg-green-action/10 text-green-action'
                          : phase.status === 'in-progress'
                            ? 'bg-green-action/10 text-green-action'
                            : 'bg-neutral-100 text-neutral-500'
                      }`}
                    >
                      {i + 1}
                    </div>
                    {statusBadge(phase.status)}
                  </div>

                  {/* Year */}
                  <p className="text-[11px] uppercase tracking-widest text-neutral-500 mb-1">
                    {phase.year}
                  </p>

                  {/* Title + badge (desktop) */}
                  <div className="hidden md:flex items-center justify-between mb-4">
                    <h3 className="font-display font-extrabold text-green-forest text-[22px] tracking-tight leading-tight">
                      {phase.title}
                    </h3>
                    {statusBadge(phase.status)}
                  </div>

                  {/* Title (mobile) */}
                  <h3 className="md:hidden font-display font-extrabold text-green-forest text-[22px] tracking-tight leading-tight mb-4">
                    {phase.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-3 mt-auto pt-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span
                          className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                            item.status === 'completed'
                              ? 'bg-green-action'
                              : item.status === 'in-progress'
                                ? 'bg-green-action'
                                : 'bg-neutral-100'
                          }`}
                        />
                        <span
                          className={`text-[14px] leading-snug ${
                            item.status === 'completed'
                              ? 'text-neutral-500'
                              : item.status === 'in-progress'
                                ? 'text-green-action font-medium'
                                : 'text-neutral-500'
                          }`}
                        >
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section">
        <Container>
          <div className="text-center">
            <h2 className="font-display font-extrabold text-green-forest text-display-lg tracking-tight mb-5">
              Stay Updated
            </h2>
            <p className="text-body-lg text-neutral-500 max-w-content mx-auto mb-10">
              Follow our progress and be the first to know when new features
              launch.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-action text-white font-bold rounded-xl hover:bg-green-forest transition-all shadow-green hover:shadow-green text-[15px]"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
