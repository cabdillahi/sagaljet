import { HeroSection } from "./home/hero-section";
import { PortfolioGrid } from "./home/portfolio-grid";

export default function HeroPage() {
  return (
    <main className="min-h-screen bg-background px-6">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12  items-center">
          <HeroSection />
          <PortfolioGrid />
        </div>
      </div>
    </main>
  );
}
