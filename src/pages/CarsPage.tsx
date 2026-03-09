import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, FileText, Car, Shield, Truck, MapPin, Check, Settings, Gauge, Zap, Cog } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";

const brands = [
  "Ford", "Honda", "Toyota", "Nissan", "BMW", "Mercedes", "Audi", 
  "Chevrolet", "Dodge", "Jeep", "Subaru", "Hyundai", "Kia", "Lexus"
];

const engineTypes = [
  { name: "Gasoline", icon: Gauge },
  { name: "Hybrid", icon: Zap },
  { name: "Turbocharged", icon: Settings },
  { name: "V6 / V8", icon: Cog },
  { name: "Automatic Transmissions", icon: Cog },
  { name: "CVT Transmissions", icon: Cog },
  { name: "AWD/FWD/RWD", icon: Car },
];

const benefits = [
  { title: "OEM Car Engines Only", description: "Factory-grade quality from original manufacturers", icon: Settings },
  { title: "Tested & Verified Mileage", description: "All units inspected and mileage confirmed", icon: Check },
  { title: "Warranty Up to 3 Years", description: "Comprehensive coverage for peace of mind", icon: Shield },
  { title: "Free Nationwide Delivery", description: "Direct to your door or shop anywhere in USA", icon: Truck },
  { title: "VIN Fitment Guarantee", description: "100% match guarantee or money back", icon: Car },
  { title: "Lowest Price Guarantee", description: "Best prices on quality used engines", icon: Gauge },
];

const processSteps = [
  { step: 1, title: "Share VIN", description: "Provide your vehicle identification number" },
  { step: 2, title: "We Find Perfect Match", description: "Our experts locate the ideal engine" },
  { step: 3, title: "Pay Securely", description: "Multiple secure payment options" },
  { step: 4, title: "Fast Delivery", description: "Shipped directly to you" },
  { step: 5, title: "Warranty Activation", description: "Coverage begins on installation" },
];

const CarsPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-secondary via-accent to-secondary overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Car className="w-5 h-5 text-primary" />
                <span className="text-white/90 text-sm font-medium">Car Engines & Transmissions</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Buy Tested, Low-Mileage Used{" "}
                <span className="text-primary">Car Engines</span> &{" "}
                <span className="text-primary">Transmissions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-4">
                Nationwide Delivery
              </p>
              
              <p className="text-xl md:text-2xl text-primary font-bold mb-8">
                Save 40–60% vs dealership pricing
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                  <a href="tel:18886679660">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now for Instant Quote
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" className="text-lg px-8 py-6" onClick={() => setIsQuoteModalOpen(true)}>
                  <FileText className="w-5 h-5 mr-2" />
                  Get Free Car Engine Quote
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
                Popular Brands We Cover
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
                Types of Car Engines
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {engineTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col items-center p-4 bg-muted/50 rounded-xl border border-border hover:border-primary transition-colors"
                >
                  <type.icon className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium text-foreground text-center">{type.name}</span>
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
                  className="bg-background p-6 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"
                >
                  <benefit.icon className="w-10 h-10 text-primary mb-4" />
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
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Find Your Perfect Car Engine?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg" asChild>
                <a href="tel:18886679660">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (888) 667-9660
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg bg-white/10 border-white text-white hover:bg-white hover:text-primary" onClick={() => setIsQuoteModalOpen(true)}>
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

export default CarsPage;
