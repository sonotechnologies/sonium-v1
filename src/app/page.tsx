import { AppPreview } from "@/components/landing/app-preview";
import { CTASection } from "@/components/landing/cta-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { LandingNavbar } from "@/components/landing/navbar";
import { NetworksSection } from "@/components/landing/networks-section";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white">
      <LandingNavbar/>

      <HeroSection/>

      <HowItWorks/>

      <FeaturesSection/>

      <NetworksSection/>

      <AppPreview/>

      <CTASection/>

      <Footer/>
    </main>
  );
}