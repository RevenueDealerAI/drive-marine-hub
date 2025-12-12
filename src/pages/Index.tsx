import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { VehicleTypesSection } from "@/components/sections/VehicleTypesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { QuoteFormSection } from "@/components/sections/QuoteFormSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { Footer } from "@/components/sections/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenQuote={openQuoteModal} />
      
      <main>
        <HeroSection onOpenQuote={openQuoteModal} />
        <VehicleTypesSection />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <BrandsSection />
        <StatsSection />
        <QuoteFormSection />
        <AboutSection />
      </main>

      <Footer />

      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
      <FloatingCTA onOpenQuote={openQuoteModal} />
    </div>
  );
};

export default Index;
