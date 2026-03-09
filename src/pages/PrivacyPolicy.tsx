import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import { FloatingCTA } from "@/components/FloatingCTA";

const PrivacyPolicy = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const sections = [
    {
      title: "Information We Collect",
      icon: FileText,
      content: [
        "We collect information that you provide directly to us, including:",
        "• Personal identification information (name, email address, phone number, mailing address)",
        "• Vehicle information (VIN, make, model, year)",
        "• Payment information (processed securely through third-party payment processors)",
        "• Communication preferences and customer service interactions",
        "• Information automatically collected when you visit our website, including IP address, browser type, device information, and usage patterns",
        "• Data collected through cookies, web beacons, and tracking technologies including Microsoft Advertising Universal Event Tracking (UET) tags"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        "We use the information we collect to:",
        "• Process and fulfill your orders for engines and parts",
        "• Communicate with you about your orders, products, services, and promotional offers",
        "• Provide customer support and respond to your inquiries",
        "• Improve our website, products, and services",
        "• Measure advertising performance through Microsoft Advertising (Bing Ads) conversion tracking",
        "• Create remarketing audiences to show you relevant ads on the Microsoft Search Network and partner sites",
        "• Detect, prevent, and address technical issues and fraudulent activity",
        "• Comply with legal obligations and enforce our terms and conditions"
      ]
    },
    {
      title: "Microsoft Advertising & Bing Ads Disclosure",
      icon: Eye,
      content: [
        "We use Microsoft Advertising (formerly Bing Ads) services on our website, including:",
        "• Universal Event Tracking (UET): We use Microsoft's UET tag to track website activity after you click on our ads served through the Microsoft Search Network. This helps us measure ad performance and optimize our campaigns.",
        "• Remarketing: We may use Microsoft Advertising remarketing to show targeted ads to users who have previously visited our website. This means you may see our ads on Bing, MSN, and other Microsoft partner websites based on your past interactions with our site.",
        "• Conversion Tracking: We track certain actions on our website (such as form submissions and purchases) to measure the effectiveness of our advertising campaigns.",
        "• Microsoft collects data through cookies and similar technologies placed via the UET tag, including pages visited, time spent on pages, and actions taken. This data is processed by Microsoft in accordance with their privacy policy.",
        "• You can opt out of personalized advertising from Microsoft by visiting: https://account.microsoft.com/privacy/ad-settings",
        "• For more information about Microsoft's data practices, please visit Microsoft's Privacy Statement at: https://privacy.microsoft.com/en-us/privacystatement"
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      icon: Shield,
      content: [
        "We do not sell your personal information. We may share your information only in the following circumstances:",
        "• With service providers who assist us in operating our business (shipping companies, payment processors)",
        "• With advertising partners such as Microsoft Advertising for conversion tracking and remarketing purposes",
        "• When required by law or to protect our rights and safety",
        "• In connection with a business transfer or merger",
        "• With your explicit consent"
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "We implement appropriate technical and organizational security measures to protect your personal information, including:",
        "• SSL encryption for data transmission",
        "• Secure payment processing",
        "• Regular security assessments and updates",
        "• Limited access to personal information on a need-to-know basis",
        "However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
      ]
    },
    {
      title: "Your Rights and Choices",
      icon: Shield,
      content: [
        "You have the right to:",
        "• Access and receive a copy of your personal information",
        "• Correct inaccurate or incomplete information",
        "• Request deletion of your personal information",
        "• Opt-out of marketing communications",
        "• Opt-out of personalized advertising from Microsoft at https://account.microsoft.com/privacy/ad-settings",
        "• Disable cookies through your browser settings",
        "• Use the Network Advertising Initiative opt-out page at https://optout.networkadvertising.org",
        "To exercise these rights, please contact us using the information provided below."
      ]
    },
    {
      title: "Cookies and Tracking Technologies",
      icon: Eye,
      content: [
        "We use cookies and similar tracking technologies to:",
        "• Remember your preferences and settings",
        "• Analyze website traffic and usage patterns",
        "• Track conversions from Microsoft Advertising (Bing Ads) campaigns via UET tags",
        "• Enable remarketing to serve relevant ads across the Microsoft Search Network",
        "• Provide personalized content and advertisements",
        "• Improve website functionality and user experience",
        "Types of cookies we use include: essential cookies, analytics cookies, and advertising cookies (including Microsoft Advertising cookies).",
        "You can control cookies through your browser settings, but this may affect website functionality and ad personalization."
      ]
    },
    {
      title: "Third-Party Links",
      icon: FileText,
      content: [
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit."
      ]
    },
    {
      title: "Children's Privacy",
      icon: Shield,
      content: [
        "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately."
      ]
    },
    {
      title: "Changes to This Privacy Policy",
      icon: FileText,
      content: [
        "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date. We encourage you to review this Privacy Policy periodically."
      ]
    }
  ];

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
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-white/90 text-sm font-medium">Legal Information</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Privacy <span className="text-primary">Policy</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-4">
                Last Updated: December 2025
              </p>
              
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
                At DiscountAutoPartsUSA.com, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-12 p-6 bg-muted/30 rounded-xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <section.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <h2 className="text-2xl font-bold text-foreground m-0">{section.title}</h2>
                  </div>
                  <div className="space-y-2 text-foreground/80">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="m-0 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-primary/10 rounded-xl border border-primary/20"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-foreground/80 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:support@discountautopartusa.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>support@discountautopartusa.com</span>
                </a>
                <a
                  href="tel:18886679660"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>(888) 667-9660</span>
                </a>
                <p className="text-sm text-foreground/60 mt-4">
                  DiscountAutoPartsUSA.com<br />
                  30 N Gould St<br />
                  Ste R<br />
                  Sheridan, WY, 82801, USA
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

export default PrivacyPolicy;

