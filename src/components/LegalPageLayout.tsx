import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { LucideIcon, Mail, Phone, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import { FloatingCTA } from "@/components/FloatingCTA";
import { SEOHead } from "@/components/SEOHead";

interface LegalSection {
  title: string;
  icon: LucideIcon;
  content: string[];
}

interface LegalPageLayoutProps {
  badgeIcon: LucideIcon;
  badgeText: string;
  title: string;
  titleHighlight: string;
  lastUpdated: string;
  description: string;
  sections: LegalSection[];
  children?: ReactNode;
  seoTitle: string;
  seoDescription: string;
  canonical: string;
}

export const LegalPageLayout = ({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  titleHighlight,
  lastUpdated,
  description,
  sections,
  children,
}: LegalPageLayoutProps) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />

      <main>
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
                <BadgeIcon className="w-5 h-5 text-primary" />
                <span className="text-white/90 text-sm font-medium">{badgeText}</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {title} <span className="text-primary">{titleHighlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-4">Last Updated: {lastUpdated}</p>
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">{description}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title + index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="mb-12 p-6 bg-muted/30 rounded-xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <section.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <h2 className="text-2xl font-bold text-foreground m-0">{section.title}</h2>
                  </div>
                  <div className="space-y-2 text-foreground/80">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="m-0 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {children}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-primary/10 rounded-xl border border-primary/20"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-foreground/80 mb-4">
                If you have any questions, please contact us:
              </p>
              <div className="space-y-3">
                <a href="mailto:support@discountautopartsusa.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>support@discountautopartsusa.com</span>
                </a>
                <a href="tel:18886679660" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>(888) 667-9660</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-foreground/60 mt-4">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Discount Auto Parts USA LLC<br />
                    30 N Gould St, Ste R<br />
                    Sheridan, WY 82801, United States
                  </span>
                </div>
                <p className="text-sm text-foreground/60">
                  Customer Service Hours: Monday – Saturday, 9:00 AM – 6:00 PM (EST)
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <FloatingCTA onOpenQuote={() => setIsQuoteModalOpen(true)} />
    </div>
  );
};
