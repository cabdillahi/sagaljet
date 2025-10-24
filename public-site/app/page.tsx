"use client";

import LogosPage from "@/components/home/client";
import { CTASection } from "@/components/home/cta-section";
import { FeaturesSection } from "@/components/home/features-section";
import HeroPage from "@/components/modern-hero";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Modern Hero */}
      <HeroPage />
      {/* clients */}
      <LogosPage />
      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
