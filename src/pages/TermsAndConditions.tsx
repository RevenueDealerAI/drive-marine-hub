import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, CheckCircle, XCircle, Mail, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import { FloatingCTA } from "@/components/FloatingCTA";

const TermsAndConditions = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: [
        "By accessing and using DiscountAutoPartsUSA.com, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.",
        "We reserve the right to modify these terms at any time. Your continued use of the website after changes are posted constitutes your acceptance of the modified terms."
      ]
    },
    {
      title: "Use of Website",
      icon: FileText,
      content: [
        "You agree to use our website only for lawful purposes and in accordance with these Terms and Conditions. You agree not to:",
        "• Use the website in any way that violates any applicable federal, state, local, or international law or regulation",
        "• Transmit any malicious code, viruses, or harmful materials",
        "• Attempt to gain unauthorized access to any portion of the website",
        "• Use automated systems to access the website without permission",
        "• Impersonate or attempt to impersonate the company, employees, or other users"
      ]
    },
    {
      title: "Product Information and Pricing",
      icon: AlertCircle,
      content: [
        "We strive to provide accurate product descriptions, images, and pricing information. However:",
        "• Product images are for illustrative purposes and may not reflect the exact appearance",
        "• We reserve the right to correct any errors in pricing or product information",
        "• Prices are subject to change without notice",
        "• All prices are in USD unless otherwise stated",
        "• We are not responsible for typographical errors or omissions"
      ]
    },
    {
      title: "Orders and Payment",
      icon: CheckCircle,
      content: [
        "When you place an order:",
        "• You represent that all information provided is accurate and complete",
        "• You authorize us to charge your payment method for the total amount",
        "• We reserve the right to refuse or cancel any order for any reason",
        "• Orders are subject to product availability",
        "• We may require additional verification for large orders",
        "• Payment must be received before shipment"
      ]
    },
    {
      title: "Shipping and Delivery",
      icon: CheckCircle,
      content: [
        "Shipping terms:",
        "• Delivery times are estimates and not guaranteed",
        "• Shipping costs are calculated at checkout",
        "• Risk of loss passes to you upon delivery",
        "• You are responsible for providing accurate shipping addresses",
        "• We are not liable for delays caused by carriers or customs",
        "• Signature may be required for delivery"
      ]
    },
    {
      title: "Warranty and Returns",
      icon: Scale,
      content: [
        "Warranty terms:",
        "• All engines and parts come with our standard warranty as specified at time of purchase",
        "• Warranty coverage begins upon installation by a qualified mechanic",
        "• Warranty is void if the product is modified, misused, or improperly installed",
        "• Returns must be requested within the specified return period",
        "• Returned items must be in original condition and packaging",
        "• Return shipping costs may apply unless the item is defective or incorrect"
      ]
    },
    {
      title: "VIN Fitment Guarantee",
      icon: CheckCircle,
      content: [
        "Our VIN Fitment Guarantee:",
        "• We guarantee that the engine will match your vehicle's VIN",
        "• If the engine does not fit due to our error, we will provide a full refund or replacement",
        "• You must provide accurate VIN information at time of order",
        "• Fitment issues must be reported within 30 days of delivery",
        "• Professional installation is recommended to ensure proper fitment"
      ]
    },
    {
      title: "Limitation of Liability",
      icon: XCircle,
      content: [
        "To the maximum extent permitted by law:",
        "• Our total liability for any claim shall not exceed the purchase price of the product",
        "• We are not liable for indirect, incidental, or consequential damages",
        "• We are not responsible for damages resulting from improper installation or use",
        "• We are not liable for delays in delivery beyond our reasonable control",
        "• Some jurisdictions do not allow limitations of liability, so some of these limitations may not apply to you"
      ]
    },
    {
      title: "Intellectual Property",
      icon: FileText,
      content: [
        "All content on this website, including text, graphics, logos, images, and software, is the property of DiscountAutoPartsUSA.com or its content suppliers and is protected by copyright and trademark laws.",
        "You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission."
      ]
    },
    {
      title: "Indemnification",
      icon: Scale,
      content: [
        "You agree to indemnify and hold harmless DiscountAutoPartsUSA.com, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:",
        "• Your use of the website or services",
        "• Your violation of these Terms and Conditions",
        "• Your violation of any rights of another party",
        "• Any product you purchase that is installed or used improperly"
      ]
    },
    {
      title: "Governing Law",
      icon: Scale,
      content: [
        "These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Michigan, United States, without regard to its conflict of law provisions.",
        "Any disputes arising from these terms or your use of the website shall be resolved in the state or federal courts located in Michigan."
      ]
    },
    {
      title: "Contact Information",
      icon: Mail,
      content: [
        "If you have any questions about these Terms and Conditions, please contact us:",
        "Email: legal@discountautopartsusa.com",
        "Phone: (888) 667-9660",
        "Address: 30 N Gould St, Ste R, Sheridan, WY, 82801, USA"
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
                <Scale className="w-5 h-5 text-primary" />
                <span className="text-white/90 text-sm font-medium">Legal Information</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Terms & <span className="text-primary">Conditions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-4">
                Last Updated: December 2025
              </p>
              
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
                Please read these Terms and Conditions carefully before using DiscountAutoPartsUSA.com. These terms govern your access to and use of our website and services.
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions About These Terms?</h2>
              <p className="text-foreground/80 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:legal@discountautopartsusa.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>legal@discountautopartsusa.com</span>
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

export default TermsAndConditions;

