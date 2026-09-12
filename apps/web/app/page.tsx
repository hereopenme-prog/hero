import type { Metadata } from 'next';
import { MotionConfig } from 'framer-motion';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AudiencesSection } from '@/components/sections/AudiencesSection';
import { BanksSection } from '@/components/sections/BanksSection';
import { MsmeSection } from '@/components/sections/MsmeSection';
import { PeopleSection } from '@/components/sections/PeopleSection';
import { FutureSection } from '@/components/sections/FutureSection';
import { MissionBeliefPromiseSection } from '@/components/sections/MissionBeliefPromiseSection';
import { AudienceValueSection } from '@/components/sections/AudienceValueSection';
import { PartnershipCTASection } from '@/components/sections/PartnershipCTASection';

export const metadata: Metadata = {
  title: 'HERE OPEN — Vocal for local. A stronger India.',
  description:
    "Connecting India's local economy. Empowering banks. Supporting merchants. Bringing customers closer.",
};

export default function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <AnnouncementBar />
      <main id="main" className="relative min-h-screen bg-surface-base text-[var(--ink)] overflow-x-hidden">
        <HeroSection />
        <AudiencesSection />
        <BanksSection />
        <MsmeSection />
        <PeopleSection />
        <FutureSection />
        <MissionBeliefPromiseSection />
        <AudienceValueSection />
        <PartnershipCTASection />
      </main>
    </MotionConfig>
  );
}