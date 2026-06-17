import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PlatformsSection from '@/components/sections/PlatformsSection';
import FAQSection from '@/components/sections/FAQSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AdBanner from '@/components/ui/AdBanner';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AdBanner slot="1111111111" format="rectangle" height={250} className="max-w-3xl mx-auto px-4 mb-8" />
      <FeaturesSection />
      <AdBanner slot="2222222222" format="leaderboard" height={90} className="max-w-6xl mx-auto px-4 mb-8" />
      <PlatformsSection />
      <TestimonialsSection />
      <AdBanner slot="3333333333" format="rectangle" height={250} className="max-w-3xl mx-auto px-4 mb-8" />
      <FAQSection />
    </>
  );
}
