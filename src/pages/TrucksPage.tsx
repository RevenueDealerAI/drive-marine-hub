import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, FileText, Truck, Shield, MapPin, Check, Settings, Gauge, Zap, Cog, Wrench } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";

const brands = [
  "Ford Powerstroke", "Chevy Duramax", "Ram Cummins", "GMC", 
  "Freightliner", "CAT", "Detroit Diesel", "Isuzu", "Hino"
];

const engineTypes = [
  { name: "Diesel Engines (Cummins 6.7, 5.9)", icon: Gauge },
  { name: "Duramax 6.6", icon: Cog },
  { name: "Powerstroke 6.0 / 6.4 / 6.7", icon: Settings },
  { name: "CAT Engines", icon: Wrench },
  { name: "Detroit Diesel Engines", icon: Cog },
  { name: "Gas Truck Engines", icon: Zap },
  { name: "Heavy-Duty Transmissions (Allison)", icon: Cog },
];

const benefits = [
  { title: "Heavy-Duty Tested", description: "Rigorous testing for commercial applications", icon: Wrench },
  { title: "Fleet-Quality Units", description: "Engines that meet fleet standards", icon: Truck },
  { title: "Low-Mileage Engines", description: "Verified low mileage for longevity", icon: Gauge },
  { title: "6–36 Months Warranty", description: "Extended coverage options available", icon: Shield },
  { title: "VIN/Engine Code Match", description: "Guaranteed perfect fitment", icon: Check },
  { title: "Free Nationwide Shipping", description: "Delivered to your location", icon: MapPin },
  { title: "Commercial Priority Support", description: "Dedicated support for businesses", icon: Phone },
];

const processSteps = [
  { step: 1, title: "Share Details", description: "Provide your truck information" },
  { step: 2, title: "Diesel Expert Finds Best Match", description: "Specialists locate your engine" },
  { step: 3, title: "Inspection & Verification", description: "Thorough quality check" },
  { step: 4, title: "Express Delivery", description: "Fast shipping nationwide" },
  { step: 5, title: "Warranty Activation", description: "Coverage starts immediately" },
];

const TrucksPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-accent via-secondary to-accent overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-white/90 text-sm font-medium">Truck & Diesel Engines</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Buy Heavy-Duty{" "}
                <span className="text-primary">Truck & Diesel Engines</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-2">
                Cummins, Duramax, Powerstroke & More
              </p>
              
              <p className="text-xl md:text-2xl text-primary font-bold mb-8">
                Commercial-grade engines with warranty & nationwide delivery
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                  <a href="tel:18886679660">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Diesel Specialist
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" className="text-lg px-8 py-6" onClick={() => setIsQuoteModalOpen(true)}>
                  <FileText className="w-5 h-5 mr-2" />
                  Get a Free Truck Engine Quote
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
                Popular Truck Brands
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {brands.map((brand, index) => (
                <motion.span
                  key={brand}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-6 py-3 bg-background rounded-full border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {brand}
                </motion.span>
              ))}
            </motion.div>
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
                Engine Types We Carry
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {engineTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border hover:border-primary transition-colors"
                >
                  <type.icon className="w-8 h-8 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{type.name}</span>
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background p-6 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"
                >
                  <benefit.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
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
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
        <section className="py-16 bg-gradient-to-r from-secondary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Need a Heavy-Duty Diesel Engine?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg" asChild>
                <a href="tel:18886679660">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (888) 667-9660
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

export default TrucksPage;
