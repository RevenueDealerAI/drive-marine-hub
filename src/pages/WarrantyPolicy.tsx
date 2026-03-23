import { ShieldCheck, FileText, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { LegalPageLayout } from "@/components/LegalPageLayout";

const sections = [
  {
    title: "Warranty Coverage Overview",
    icon: ShieldCheck,
    content: [
      "Discount Auto Parts USA LLC offers limited warranty options on select used engines and transmissions. Warranty coverage varies by part type and is confirmed at the time of purchase.",
      "Warranty terms, duration, and conditions are specified on your invoice or order confirmation. Please review your specific warranty details carefully.",
    ],
  },
  {
    title: "Engines & Transmissions",
    icon: CheckCircle,
    content: [
      "Used engines and transmissions may include limited warranty options covering:",
      "• Internal mechanical failure due to defects present at the time of sale",
      "• Coverage periods vary — typically 30 days to 6 months depending on the part and purchase agreement",
      "• Warranty begins on the date of delivery, not the date of installation",
      "• Extended warranty options may be available for an additional cost — ask your parts specialist for details",
    ],
  },
  {
    title: "Installation Requirements",
    icon: AlertCircle,
    content: [
      "To maintain warranty coverage, the following requirements must be met:",
      "• Installation must be performed by a certified or qualified mechanic at a licensed repair facility",
      "• All fluids must be changed and filters replaced prior to initial startup",
      "• Proper installation procedures must be followed according to manufacturer specifications",
      "• Proof of professional installation may be required for warranty claims",
    ],
  },
  {
    title: "Warranty Exclusions",
    icon: XCircle,
    content: [
      "Warranty does not cover:",
      "• Damage caused by improper installation, misuse, neglect, or abuse",
      "• External components and accessories (sensors, wiring, hoses, gaskets, seals, etc.)",
      "• Damage from overheating, lack of lubrication, or contaminated fluids",
      "• Labor costs for removal or reinstallation",
      "• Damage caused during shipping (separate freight claim procedures apply)",
      "• Parts modified or altered after delivery",
      "• Normal wear and tear",
      "• Consequential or incidental damages",
    ],
  },
  {
    title: "Warranty Claim Procedure",
    icon: FileText,
    content: [
      "To file a warranty claim:",
      "1. Contact our customer support team at (888) 667-9660 within the warranty period",
      "2. Provide your order number and describe the issue in detail",
      "3. A parts specialist will review your claim and may request diagnostic information",
      "4. If approved, we will arrange for a replacement part or issue a refund at our discretion",
      "5. The defective part must be returned for inspection before a replacement is shipped",
      "Claims must be submitted within the warranty period. Late claims may not be eligible for coverage.",
    ],
  },
  {
    title: "Replacement or Refund",
    icon: CheckCircle,
    content: [
      "If a warranty claim is approved:",
      "• We will provide a replacement part of equal or comparable quality when available",
      "• If a suitable replacement is not available, a refund may be issued",
      "• Refunds are limited to the purchase price of the part — labor, shipping, and incidental costs are not covered",
      "• Replacement parts carry the remainder of the original warranty period",
    ],
  },
];

const WarrantyPolicy = () => (
  <LegalPageLayout
    badgeIcon={ShieldCheck}
    badgeText="Warranty Information"
    title="Warranty"
    titleHighlight="Policy"
    lastUpdated="March 2026"
    description="Discount Auto Parts USA LLC stands behind the quality of our used engines and transmissions. Warranty coverage varies by part type and is subject to the terms outlined below."
    sections={sections}
    seoTitle="Warranty Policy - Used Engines & Transmissions | DiscountAutoPartsUSA"
    seoDescription="Warranty coverage details for used engines and transmissions from Discount Auto Parts USA. Up to 3 years coverage, claim procedures, and installation requirements."
    canonical="/warranty-policy"
  />
);

export default WarrantyPolicy;
