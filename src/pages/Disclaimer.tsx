import { AlertTriangle, FileText, Info, ShieldCheck } from "lucide-react";
import { LegalPageLayout } from "@/components/LegalPageLayout";

const sections = [
  {
    title: "Independent Supplier",
    icon: ShieldCheck,
    content: [
      "Discount Auto Parts USA LLC is an independent automotive parts supplier specializing in used engines, transmissions, and recycled OEM auto parts.",
      "We are not affiliated with, endorsed by, or authorized by any vehicle manufacturer, including but not limited to Ford, Toyota, Honda, Chevrolet, Nissan, BMW, Mercedes-Benz, Chrysler, Dodge, Jeep, Hyundai, Kia, Subaru, Volkswagen, Audi, or any other brand.",
      "All manufacturer names, logos, and trademarks mentioned on this website belong to their respective owners and are used solely for identification and reference purposes.",
    ],
  },
  {
    title: "Website Information",
    icon: Info,
    content: [
      "The information provided on DiscountAutoPartsUSA.com is for general informational purposes only:",
      "• Product listings, descriptions, and images are for reference and may not represent the exact part you receive",
      "• Availability, pricing, and specifications are subject to change without notice",
      "• All pricing must be confirmed by calling (888) 667-9660 or through an official invoice",
      "• Customers must confirm part compatibility with their vehicle before purchase",
      "We make reasonable efforts to ensure the accuracy of information on our website, but we do not warrant that all information is complete, current, or error-free.",
    ],
  },
  {
    title: "Used Auto Parts Disclaimer",
    icon: AlertTriangle,
    content: [
      "Used auto parts are pre-owned components that have been removed from donor vehicles:",
      "• Condition, mileage, and appearance may vary from part to part",
      "• Parts may show signs of normal wear consistent with their age and mileage",
      "• While we test and inspect parts before listing, we cannot guarantee performance under all conditions",
      "• Installation by a certified or qualified mechanic is strongly recommended",
      "• Customers are responsible for verifying that the part meets their specific vehicle requirements",
    ],
  },
  {
    title: "No Guarantees",
    icon: FileText,
    content: [
      "Discount Auto Parts USA LLC makes no representations or warranties of any kind, express or implied, regarding:",
      "• The suitability of any part for a particular purpose beyond what is stated",
      "• Uninterrupted or error-free website access",
      "• The accuracy of third-party content or links",
      "All products are sold subject to our Warranty Policy and Terms & Conditions, which should be reviewed before purchase.",
    ],
  },
  {
    title: "External Links",
    icon: Info,
    content: [
      "Our website may contain links to third-party websites for your convenience. We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party websites.",
    ],
  },
  {
    title: "Limitation of Liability",
    icon: AlertTriangle,
    content: [
      "To the fullest extent permitted by applicable law, Discount Auto Parts USA LLC shall not be liable for any damages arising from the use of this website or the purchase of any products, including but not limited to direct, indirect, incidental, punitive, or consequential damages.",
    ],
  },
];

const Disclaimer = () => (
  <LegalPageLayout
    badgeIcon={AlertTriangle}
    badgeText="Legal Disclaimer"
    title="Website"
    titleHighlight="Disclaimer"
    lastUpdated="March 2026"
    description="Please read this disclaimer carefully before using DiscountAutoPartsUSA.com. By using this website, you acknowledge and agree to the following terms."
    sections={sections}
  />
);

export default Disclaimer;
