'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeUp, stagger } from '@/lib/animations';

const kpiRow1 = [
  { label: 'SHOPS', value: '9,420' },
  { label: 'DEVICES', value: '12,850' },
  { label: 'ONLINE', value: '11,204' },
  { label: 'OFFLINE', value: '1,646' },
];

const kpiRow2 = [
  { label: 'ALERTS', value: '384' },
  { label: 'DEVICE HEALTH', value: '96%' },
  { label: 'STATUS UPDATES', value: '18,200' },
  { label: 'CITIES / REGIONS', value: '24' },
];

const managementChips = [
  'DEVICE MANAGEMENT',
  'BUSINESS MANAGEMENT',
  'ACTIVATION',
  'DEVICE HEALTH',
  'UPDATES',
  'REPORTS',
  'ANALYTICS',
  'ALERTS',
];

function KpiTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col rounded-lg border border-[#1C2A38] bg-[#0A0F14] px-4 py-3">
      <span className="font-body text-[10px] text-[#8A9BAE] tracking-wide uppercase">{label}</span>
      <span className="mt-1 font-display font-bold text-lg text-[#E8EDF2] tracking-tight">{value}</span>
    </div>
  );
}

export function BusinessDashboardSection() {
  return (
    <Section id="platform-network" className="bg-[#080C10]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,132,0.04)_0%,transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="ECOSYSTEM VIEW"
          title="THE WHOLE NETWORK."
          titleAccent="ONE PLATFORM VIEW."
          description="A conceptual view of the connected device network as seen by platform operations."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-10 max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp}>
            {/* Dashboard chrome */}
            <div className="rounded-2xl border border-[#1C2A38] bg-[#0F1923] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
              {/* Window title bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#1C2A38]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3D4F5E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3D4F5E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3D4F5E]" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-[11px] font-bold tracking-[0.12em] text-[#8A9BAE]">
                    HERE OPEN · ECOSYSTEM
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[#00D08440] bg-[#00D08414] px-2.5 py-0.5">
                    <span className="font-body text-[9px] font-bold tracking-wider text-[#00D084]">
                      DEMO DATA
                    </span>
                  </span>
                </div>
                <div className="w-16" />
              </div>

              {/* Dashboard body */}
              <div className="p-5 space-y-4">
                {/* KPI Row 1 */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {kpiRow1.map((kpi) => (
                    <KpiTile key={kpi.label} label={kpi.label} value={kpi.value} />
                  ))}
                </div>

                {/* KPI Row 2 */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {kpiRow2.map((kpi) => (
                    <KpiTile key={kpi.label} label={kpi.label} value={kpi.value} />
                  ))}
                </div>

                {/* Management chips */}
                <div className="pt-2 border-t border-[#1C2A38]">
                  <p className="font-body text-[10px] text-[#8A9BAE] tracking-wide uppercase mb-3">
                    Management
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {managementChips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center rounded-lg border border-[#1C2A38] bg-[#0A0F14] px-3 py-1.5 font-display text-[10px] font-bold tracking-[0.08em] text-[#A5B4C4]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <p className="mt-8 text-center font-body text-[11px] text-[#3D4F5E]">
            Illustrative demo data — not real deployments.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
