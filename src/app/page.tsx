import { AppPreview } from "@/components/landing/app-preview";
import { NetworksSection } from "@/components/landing/networks-section";

import { LandingNavbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { StatsSection } from "@/components/landing/stats-section";
import { WalletSection } from "@/components/landing/wallet-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { FaqSection } from "@/components/landing/faq-section";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white">
      <LandingNavbar />
      <HeroSection />
      <StatsSection />
      <WalletSection />
      <NetworksSection/>
      <FeaturesSection />
      <HowItWorks />
      <FaqSection />
      <CTASection />
      <Footer />
    </main>
  );
}
