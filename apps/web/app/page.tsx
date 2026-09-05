import type { Metadata } from 'next';
import { MotionConfig } from 'framer-motion';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { MonitoringSection } from '@/components/sections/MonitoringSection';
import { SecuritySection } from '@/components/sections/SecuritySection';
import { FireSafetySection } from '@/components/sections/FireSafetySection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { BusinessSection } from '@/components/sections/BusinessSection';
import { CustomersSection } from '@/components/sections/CustomersSection';
import { TargetSection } from '@/components/sections/TargetSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { MarketSection } from '@/components/sections/MarketSection';
import { InnovationSection } from '@/components/sections/InnovationSection';
import { PatentSection } from '@/components/sections/PatentSection';
import { RoadmapSection } from '@/components/sections/RoadmapSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CTASection } from '@/components/sections/CTASection';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'HERE OPEN — Real-Time Shop Visibility',
  description:
    'HERE OPEN makes every shop visible. Real-time OPEN/CLOSED status, smart security, and 24/7 monitoring for local businesses across India.',
};

export default function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <main id="main" className="relative min-h-screen bg-surface-base text-[#E8EDF2] overflow-x-hidden">
        <HeroSection />
        <TrustStrip />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <MonitoringSection />
        <SecuritySection />
        <FireSafetySection />
        <FeaturesSection />
        <BusinessSection />
        <CustomersSection />
        <TargetSection />
        <TechnologySection />
        <MarketSection />
        <InnovationSection />
        <PatentSection />
        <RoadmapSection />
        <PricingSection />
        <FaqSection />
        <CTASection />
        <ContactSection />
      </main>
    </MotionConfig>
  );
}