import type { Metadata } from 'next';
import { MotionConfig } from 'framer-motion';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { MerchantGrowthOsSection } from '@/components/sections/MerchantGrowthOsSection';
import { BankOpportunitySection } from '@/components/sections/BankOpportunitySection';
import { BankBrandedSection } from '@/components/sections/BankBrandedSection';
import { BankPartnershipSection } from '@/components/sections/BankPartnershipSection';
import { VisionSection } from '@/components/sections/VisionSection';
import { BusinessOwnerBenefitsSection } from '@/components/sections/BusinessOwnerBenefitsSection';
import { DeviceShowcaseSection } from '@/components/sections/DeviceShowcaseSection';
import { MoreThanStatusSection } from '@/components/sections/MoreThanStatusSection';
import { TargetSection } from '@/components/sections/TargetSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { MerchantValueSection } from '@/components/sections/MerchantValueSection';
import { MarketSection } from '@/components/sections/MarketSection';
import { InnovationSection } from '@/components/sections/InnovationSection';
import { CTASection } from '@/components/sections/CTASection';
import { PatentSection } from '@/components/sections/PatentSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'HERE OPEN — Connected Smart Business Ecosystem',
  description:
    'Here Open connects businesses, customers and smart devices in real time — bringing visibility, communication, safety and intelligent business connectivity to local businesses across India.',
};

export default function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <AnnouncementBar />
      <main id="main" className="relative min-h-screen bg-surface-base text-[var(--ink)] overflow-x-hidden">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <MerchantGrowthOsSection />
        <BankOpportunitySection />
        <BankBrandedSection />
        <BankPartnershipSection />
        <VisionSection />
        <BusinessOwnerBenefitsSection />
        <DeviceShowcaseSection />
        <MoreThanStatusSection />
        <TargetSection />
        <TechnologySection />
        <MerchantValueSection />
        <MarketSection />
        <InnovationSection />
        <CTASection />
        <PatentSection />
        <FaqSection />
        <ContactSection />
      </main>
    </MotionConfig>
  );
}