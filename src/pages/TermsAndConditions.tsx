import { Scale, FileText, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { LegalPageLayout } from "@/components/LegalPageLayout";

const sections = [
  {
    title: "Acceptance of Terms",
    icon: CheckCircle,
    content: [
      "By accessing and using DiscountAutoPartsUSA.com, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.",
      "We reserve the right to modify these terms at any time. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.",
    ],
  },
  {
    title: "Use of Website",
    icon: FileText,
    content: [
      "This website is provided for informational purposes. Product listings, descriptions, and availability are subject to change without notice.",
      "You agree not to:",
      "• Use the website in any way that violates applicable federal, state, local, or international law",
      "• Transmit any malicious code, viruses, or harmful materials",
      "• Attempt to gain unauthorized access to any portion of the website",
      "• Use automated systems to access the website without permission",
    ],
  },
  {
    title: "Product Information and Pricing",
    icon: AlertCircle,
    content: [
      "Discount Auto Parts USA LLC supplies used engines, transmissions, and recycled OEM auto parts. Important notes:",
      "• Used auto parts may vary in condition based on age, mileage, and prior use",
      "• Product images are for illustrative purposes and may not reflect the exact appearance of the part you receive",
      "• All pricing is confirmed via phone or invoice — website listings are informational only",
      "• Prices are subject to change without notice and are quoted in USD",
      "• Availability must be confirmed by calling (888) 667-9660",
      "• It is the customer's responsibility to verify compatibility before purchase",
    ],
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
      "• Payment must be received before shipment",
    ],
  },
  {
    title: "Advertising and Tracking",
    icon: AlertCircle,
    content: [
      "Our website uses advertising and tracking technologies, including Microsoft Advertising (Bing Ads) and Google Ads:",
      "• We use tracking tags to measure ad performance and track conversions",
      "• We may use remarketing features to display targeted advertisements on search networks and partner sites",
      "• By using this website, you acknowledge that cookies and tracking pixels may be placed on your device",
      "• You may opt out of personalized advertising through Microsoft and Google ad settings",
    ],
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
      "• Some jurisdictions do not allow limitations of liability, so some of these limitations may not apply to you",
    ],
  },
  {
    title: "Intellectual Property",
    icon: FileText,
    content: [
      "All content on this website, including text, graphics, logos, images, and software, is the property of Discount Auto Parts USA LLC or its content suppliers and is protected by copyright and trademark laws.",
      "You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.",
    ],
  },
  {
    title: "Dispute Resolution",
    icon: Scale,
    content: [
      "If a dispute arises from your use of our website or services, we encourage you to contact us first at support@discountautopartsusa.com to attempt resolution.",
      "If a dispute cannot be resolved informally, it shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.",
    ],
  },
  {
    title: "Governing Law",
    icon: Scale,
    content: [
      "These Terms and Conditions shall be governed by and construed in accordance with the laws of the United States and the State of Wyoming, without regard to its conflict of law provisions.",
    ],
  },
];

const TermsAndConditions = () => (
  <LegalPageLayout
    badgeIcon={Scale}
    badgeText="Legal Information"
    title="Terms &"
    titleHighlight="Conditions"
    lastUpdated="March 2026"
    description="Please read these Terms and Conditions carefully before using DiscountAutoPartsUSA.com. These terms govern your access to and use of our website and services."
    sections={sections}
  />
);

export default TermsAndConditions;
