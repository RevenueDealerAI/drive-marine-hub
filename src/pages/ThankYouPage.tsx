import { motion } from "framer-motion";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useState } from "react";
import { QuoteModal } from "@/components/QuoteModal";
import { SEOHead } from "@/components/SEOHead";

const ThankYouPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />

      <main className="flex-1 flex items-center justify-center py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8"
            >
              <CheckCircle className="w-10 h-10 text-green-600" />
            </motion.div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Thank You!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Your quote request has been submitted successfully.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              One of our parts specialists will get back to you within <strong className="text-foreground">60 seconds</strong> during business hours. For immediate assistance, call us directly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:18886679660">
                  <Phone className="w-5 h-5" />
                  Call (888) 667-9660
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">
                  <ArrowLeft className="w-5 h-5" />
                  Back to Home
                </Link>
              </Button>
            </div>

            <div className="p-6 bg-muted/30 rounded-2xl border border-border">
              <h3 className="font-bold text-foreground mb-2">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday – Saturday, 9:00 AM – 6:00 PM (EST)
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default ThankYouPage;
