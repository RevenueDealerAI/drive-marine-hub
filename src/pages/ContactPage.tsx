import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Headphones, Cog, Waves, Truck, ShieldCheck, HelpCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";

const supportTopics = [
  { icon: Cog, label: "Engine Availability" },
  { icon: Waves, label: "Transmission Pricing" },
  { icon: HelpCircle, label: "Compatibility Verification" },
  { icon: Truck, label: "Shipping Information" },
  { icon: ShieldCheck, label: "Warranty Questions" },
];

const ContactPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />

      <main>
        {/* Hero */}
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
                <Headphones className="w-5 h-5 text-primary" />
                <span className="text-white/90 text-sm font-medium">Customer Support</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
                Our parts specialists are ready to help you find the right engine or transmission for your vehicle. Call us for the fastest assistance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left - Details */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-5 bg-muted/30 rounded-xl border border-border">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Phone</h3>
                        <a href="tel:18886679660" className="text-lg font-semibold text-primary hover:underline">
                          (888) 667-9660
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Call for fastest assistance</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-muted/30 rounded-xl border border-border">
                      <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Email</h3>
                        <a href="mailto:support@discountautopartsusa.com" className="text-primary hover:underline break-all">
                          support@discountautopartsusa.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">We respond within 1 business day</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-muted/30 rounded-xl border border-border">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Business Address</h3>
                        <p className="text-foreground/80">
                          Discount Auto Parts USA LLC<br />
                          30 N Gould St, Ste R<br />
                          Sheridan, WY 82801<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-5 bg-muted/30 rounded-xl border border-border">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Business Hours</h3>
                        <p className="text-foreground/80">
                          Monday – Saturday<br />
                          9:00 AM – 6:00 PM (EST)
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">Closed on Sundays and major holidays</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right - CTA + Topics */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-primary/10 rounded-2xl border border-primary/20"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-3">Speak with a Parts Specialist</h2>
                  <p className="text-muted-foreground mb-6">
                    For the fastest response, call us directly. Our team can check availability, verify compatibility, and provide pricing instantly.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button variant="cta" size="lg" asChild>
                      <a href="tel:18886679660">
                        <Phone className="w-5 h-5" />
                        Call (888) 667-9660
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => setIsQuoteModalOpen(true)}>
                      <Mail className="w-5 h-5" />
                      Request a Quote Online
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">We Can Help With</h3>
                  <div className="space-y-3">
                    {supportTopics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border">
                        <topic.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-medium text-foreground">{topic.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
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

export default ContactPage;
