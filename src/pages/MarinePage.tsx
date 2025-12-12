import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, FileText, Anchor, Shield, Ship, MapPin, Check, Settings, Gauge, Waves, Cog, Wrench } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";

const engineBrands = [
  "Yamaha", "Suzuki", "Mercury", "Honda Marine", "Volvo Penta", "MerCruiser", "Evinrude"
];

const transmissionBrands = [
  "ZF", "Velvet Drive", "Hurth", "Twin Disc"
];

const engineTypes = [
  { name: "Outboard", icon: Waves },
  { name: "Inboard", icon: Cog },
  { name: "Jet Drive", icon: Gauge },
  { name: "Sterndrive", icon: Settings },
  { name: "Marine Diesel Engines", icon: Wrench },
];

const benefits = [
  { title: "Saltwater-Grade Testing", description: "Engines tested for marine conditions", icon: Waves },
  { title: "Corrosion-Protected Engines", description: "Protected against salt and moisture damage", icon: Shield },
  { title: "HIN Fitment Guarantee", description: "100% match to your hull ID number", icon: Check },
  { title: "Warranty Up to 3 Years", description: "Comprehensive marine engine coverage", icon: Shield },
  { title: "Fast Delivery to Marinas", description: "Direct shipping to your marina or dock", icon: Ship },
  { title: "Marine-Specialist Support", description: "Expert advice from marine professionals", icon: Phone },
];

const processSteps = [
  { step: 1, title: "Share HIN/Engine Details", description: "Provide hull identification number" },
  { step: 2, title: "Marine Expert Finds Match", description: "Specialists locate your engine" },
  { step: 3, title: "Testing Report", description: "Full inspection documentation" },
  { step: 4, title: "Fast Delivery", description: "Shipped to your marina" },
  { step: 5, title: "Warranty Activation", description: "Coverage begins on installation" },
];

const MarinePage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-secondary via-[hsl(200,80%,30%)] to-secondary overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Anchor className="w-5 h-5 text-primary" />
                <span className="text-white/90 text-sm font-medium">Boat & Marine Engines</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Buy High-Quality Used{" "}
                <span className="text-primary">Boat & Marine Engines</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-2">
                Outboard, Inboard & Sterndrive
              </p>
              
              <p className="text-xl md:text-2xl text-primary font-bold mb-8">
                Tested marine engines with warranty & nationwide shipping
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                  <a href="tel:888-555-1234">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Marine Specialist
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" className="text-lg px-8 py-6" onClick={() => setIsQuoteModalOpen(true)}>
                  <FileText className="w-5 h-5 mr-2" />
                  Get a Marine Engine Quote
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Marine Brands We Carry
              </h2>
            </motion.div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-center text-muted-foreground mb-4">Engine Brands</h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  {engineBrands.map((brand, index) => (
                    <motion.span
                      key={brand}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-6 py-3 bg-background rounded-full border border-border text-foreground font-medium hover:border-secondary hover:text-secondary transition-colors cursor-default"
                    >
                      {brand}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-center text-muted-foreground mb-4">Marine Transmissions</h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  {transmissionBrands.map((brand, index) => (
                    <motion.span
                      key={brand}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-6 py-3 bg-background rounded-full border border-border text-foreground font-medium hover:border-secondary hover:text-secondary transition-colors cursor-default"
                    >
                      {brand}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Engine Types Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Engine Types
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {engineTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col items-center p-6 bg-muted/50 rounded-xl border border-border hover:border-secondary transition-colors"
                >
                  <type.icon className="w-10 h-10 text-secondary mb-3" />
                  <span className="font-medium text-foreground text-center">{type.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Buy From Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Buy From Us
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background p-6 rounded-xl border border-border hover:border-secondary hover:shadow-lg transition-all"
                >
                  <benefit.icon className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Simple Process
              </h2>
            </motion.div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-1 text-center relative"
                >
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-secondary to-[hsl(200,80%,30%)]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Find Your Marine Engine?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg" asChild>
                <a href="tel:888-555-1234">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (888) 555-1234
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg bg-white/10 border-white text-white hover:bg-white hover:text-secondary" onClick={() => setIsQuoteModalOpen(true)}>
                Get Free Quote
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <FloatingCTA onOpenQuote={() => setIsQuoteModalOpen(true)} />
    </div>
  );
};

export default MarinePage;
