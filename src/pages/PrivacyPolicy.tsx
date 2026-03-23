import { Shield, Lock, Eye, FileText } from "lucide-react";
import { LegalPageLayout } from "@/components/LegalPageLayout";

const sections = [
  {
    title: "Information We Collect",
    icon: FileText,
    content: [
      "We collect information that you provide directly to us, including:",
      "• Name, phone number, and email address",
      "• Vehicle information (year, make, model, VIN number)",
      "• Requested auto part details (engine, transmission, or other parts)",
      "• Communication preferences and customer service interactions",
      "• Information automatically collected when you visit our website, including IP address, browser type, device information, and usage patterns",
      "• Data collected through cookies, web beacons, and tracking technologies including Microsoft Advertising Universal Event Tracking (UET) tags and Google Analytics",
    ],
  },
  {
    title: "How We Use Your Information",
    icon: Eye,
    content: [
      "We use the information we collect to:",
      "• Respond to quote requests and check part availability",
      "• Provide customer service communication and support",
      "• Process orders and arrange shipping",
      "• Provide warranty support",
      "• Improve our website, products, and services",
      "• Measure advertising performance through Microsoft Advertising and Google Ads conversion tracking",
      "• Create remarketing audiences to show you relevant ads",
      "• Detect, prevent, and address technical issues and fraudulent activity",
      "• Comply with legal obligations",
    ],
  },
  {
    title: "Microsoft Advertising & Google Ads Disclosure",
    icon: Eye,
    content: [
      "We use Microsoft Advertising and Google Ads services on our website, including:",
      "• Universal Event Tracking (UET): We use Microsoft's UET tag to track website activity after you click on our ads. This helps us measure ad performance and optimize campaigns.",
      "• Google Ads Conversion Tracking: We use Google conversion tracking to measure the effectiveness of our Google advertising campaigns.",
      "• Remarketing: We may use remarketing to show targeted ads to users who have previously visited our website across search networks and partner websites.",
      "• You can opt out of personalized advertising from Microsoft at: https://account.microsoft.com/privacy/ad-settings",
      "• You can opt out of Google Ads personalization at: https://adssettings.google.com",
      "• For more information, visit Microsoft's Privacy Statement at https://privacy.microsoft.com and Google's Privacy Policy at https://policies.google.com/privacy",
    ],
  },
  {
    title: "Information Sharing and Disclosure",
    icon: Shield,
    content: [
      "We do not sell your personal information to third parties. We may share your information only:",
      "• With service providers who assist in operating our business (shipping companies, payment processors)",
      "• With advertising partners such as Microsoft and Google for conversion tracking and remarketing",
      "• When required by law or to protect our rights and safety",
      "• In connection with a business transfer or merger",
      "• With your explicit consent",
    ],
  },
  {
    title: "Data Security",
    icon: Lock,
    content: [
      "We implement appropriate technical and organizational security measures to protect your personal information, including:",
      "• SSL encryption for data transmission",
      "• Secure payment processing through third-party processors",
      "• Regular security assessments and updates",
      "• Limited access to personal information on a need-to-know basis",
      "However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Cookie Usage",
    icon: Eye,
    content: [
      "We use cookies and similar tracking technologies to:",
      "• Remember your preferences and settings",
      "• Analyze website traffic and usage patterns",
      "• Track conversions from Microsoft Advertising and Google Ads campaigns",
      "• Enable remarketing to serve relevant ads",
      "• Improve website functionality and user experience",
      "Types of cookies we use include: essential cookies, analytics cookies, and advertising cookies.",
      "You can control cookies through your browser settings, but this may affect website functionality.",
    ],
  },
  {
    title: "Website Analytics",
    icon: FileText,
    content: [
      "We use analytics tools including Google Analytics and Microsoft Clarity to understand how visitors interact with our website. These tools collect anonymized data about page visits, time on site, and user interactions to help us improve our services.",
    ],
  },
  {
    title: "Your Rights and Choices",
    icon: Shield,
    content: [
      "You have the right to:",
      "• Access and receive a copy of your personal information",
      "• Correct inaccurate or incomplete information",
      "• Request deletion of your personal information",
      "• Opt out of marketing communications",
      "• Opt out of personalized advertising",
      "• Disable cookies through your browser settings",
      "To exercise these rights, please contact us at support@discountautopartsusa.com or call (888) 667-9660.",
      "We comply with applicable United States privacy regulations.",
    ],
  },
  {
    title: "Third-Party Links",
    icon: FileText,
    content: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    title: "Children's Privacy",
    icon: Shield,
    content: [
      "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    icon: FileText,
    content: [
      "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
    ],
  },
];

const PrivacyPolicy = () => (
  <LegalPageLayout
    badgeIcon={Shield}
    badgeText="Legal Information"
    title="Privacy"
    titleHighlight="Policy"
    lastUpdated="March 2026"
    description="At Discount Auto Parts USA LLC, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information."
    sections={sections}
    seoTitle="Privacy Policy - DiscountAutoPartsUSA"
    seoDescription="Read the Privacy Policy of Discount Auto Parts USA LLC. Learn how we collect, use, and protect your personal information when you use our website and services."
    canonical="/privacy-policy"
  />
);

export default PrivacyPolicy;
