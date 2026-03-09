import { motion } from "framer-motion";
import { Phone, FileText, Star, Truck, Shield, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export const HeroSection = ({ onOpenQuote }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6 text-center"
          >
            <BadgeCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground/90">America's Trusted Parts Supplier</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-foreground mb-4 leading-tight"
          >
            Buy Quality Used
            <span className="block text-primary">Engines & Transmissions</span>
          </motion.h1>

          {/* Vehicle Types */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/70 font-medium mb-6"
          >
            Cars • Trucks • Boats
          </motion.p>

          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            Save 40–60% with Certified, Low-Mileage, OEM-Tested Units Delivered Nationwide
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() => window.location.href = 'tel:18886679660'}
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              Call Now for Instant Quote
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={onOpenQuote}
            >
              <FileText className="w-5 h-5" />
              Get Free Quote
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70"
          >
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 from 2,500+ customers</span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-primary-foreground/20" />

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-primary" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm">Warranty Included</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-primary" />
                <span className="text-sm">OEM Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
