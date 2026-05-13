import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { VehicleTypesSection } from "@/components/sections/VehicleTypesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { QuoteFormSection } from "@/components/sections/QuoteFormSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { InventoryShowcaseSection } from "@/components/sections/InventoryShowcaseSection";
import { ClosingCTASection } from "@/components/sections/ClosingCTASection";
import { TrustBadgeSection } from "@/components/sections/TrustBadgeSection";
import { ConversionMessageSection } from "@/components/sections/ConversionMessageSection";
import { Footer } from "@/components/sections/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import { FloatingCTA } from "@/components/FloatingCTA";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { TimedDiscountPopup } from "@/components/TimedDiscountPopup";

const Index = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="DiscountAutoPartUSA - Quality Used Engines & Transmissions"
        description="Save 40-60% on certified, low-mileage OEM engines and transmissions. Free nationwide shipping, warranty included. Cars, trucks, and marine engines. Call 866-420-8266."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AutoPartsStore",
          "name": "Discount Auto Parts USA LLC",
          "url": "https://discountautopartusa.com",
          "logo": "https://discountautopartusa.com/og-image.png",
          "description": "Quality used engines and transmissions for cars, trucks, and boats. Save 40-60% with free nationwide shipping and warranty options.",
          "telephone": "+1-866-420-8266",
          "email": "support@discountautopartusa.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10301 Northwest Fwy",
            "addressLocality": "Houston",
            "addressRegion": "TX",
            "postalCode": "77092",
            "addressCountry": "US"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          "areaServed": { "@type": "Country", "name": "United States" },
          "priceRange": "$$"
        }}
      />
      <Navbar onOpenQuote={openQuoteModal} />
      
      <main>
        <HeroSection onOpenQuote={openQuoteModal} />
        <VehicleTypesSection />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <BrandsSection />
        <StatsSection />
        <InventoryShowcaseSection />
        <QuoteFormSection />
        <AboutSection />
        <ClosingCTASection onOpenQuote={openQuoteModal} />
        <TrustBadgeSection />
        <ConversionMessageSection />
      </main>

      <Footer />

      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
      <FloatingCTA onOpenQuote={openQuoteModal} />
      <ExitIntentPopup onOpenQuote={openQuoteModal} />
      <TimedDiscountPopup onOpenQuote={openQuoteModal} />
    </div>
  );
};

export default Index;
