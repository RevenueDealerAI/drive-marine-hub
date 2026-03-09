import { RotateCcw, FileText, CheckCircle, XCircle, AlertCircle, Clock } from "lucide-react";
import { LegalPageLayout } from "@/components/LegalPageLayout";

const sections = [
  {
    title: "Return Eligibility",
    icon: CheckCircle,
    content: [
      "Discount Auto Parts USA LLC accepts returns under the following conditions:",
      "• The return request is made within 30 days of delivery",
      "• The part has not been installed, modified, or altered",
      "• The part is in the same condition as when it was received",
      "• You have contacted our customer support team and received a Return Authorization (RA) number",
      "• The part is returned in its original packaging or equivalent protective packaging",
    ],
  },
  {
    title: "Non-Returnable Conditions",
    icon: XCircle,
    content: [
      "Returns may not be accepted if:",
      "• The part has been installed, even partially",
      "• The part has been damaged due to improper handling or storage",
      "• The return request is made after the 30-day return period",
      "• The part was purchased as a special order or custom procurement",
      "• The customer failed to verify compatibility before purchase",
      "• The part was damaged during customer-arranged shipping",
    ],
  },
  {
    title: "Customer Responsibility",
    icon: AlertCircle,
    content: [
      "Before purchasing, customers are responsible for:",
      "• Verifying part compatibility with their vehicle (year, make, model, engine size)",
      "• Providing accurate VIN information when requested",
      "• Confirming all specifications with our parts specialists by calling (888) 667-9660",
      "• Inspecting the part immediately upon delivery and reporting any damage or discrepancies within 48 hours",
    ],
  },
  {
    title: "Inspection Upon Delivery",
    icon: FileText,
    content: [
      "When your part arrives:",
      "• Inspect the shipment for external damage before signing for delivery",
      "• Note any visible damage on the carrier's delivery receipt",
      "• Photograph any damage immediately",
      "• Contact us within 48 hours of delivery to report any issues",
      "• Failure to report damage within 48 hours may affect your eligibility for a return or refund",
    ],
  },
  {
    title: "Refund Processing",
    icon: Clock,
    content: [
      "Once we receive and inspect the returned part:",
      "• Refunds are processed within 7–10 business days",
      "• Refunds are issued to the original payment method",
      "• The refund amount is limited to the purchase price of the part",
      "• Original shipping costs are non-refundable unless the return is due to our error",
      "• Return shipping costs are the customer's responsibility unless the part was incorrect or defective",
    ],
  },
  {
    title: "Restocking Fees",
    icon: AlertCircle,
    content: [
      "A restocking fee of up to 25% may apply in the following situations:",
      "• The customer ordered the wrong part",
      "• The customer changed their mind after purchase",
      "• The part is returned without a Return Authorization (RA) number",
      "Restocking fees do not apply when the return is due to our error or a defective part.",
    ],
  },
  {
    title: "How to Initiate a Return",
    icon: FileText,
    content: [
      "To start a return:",
      "1. Call our customer support at (888) 667-9660 or email support@discountautopartsusa.com",
      "2. Provide your order number and reason for return",
      "3. Receive a Return Authorization (RA) number",
      "4. Ship the part back using a trackable shipping method",
      "5. Include the RA number with the shipment",
      "Parts returned without an RA number may be refused or delayed.",
    ],
  },
];

const RefundPolicy = () => (
  <LegalPageLayout
    badgeIcon={RotateCcw}
    badgeText="Return Information"
    title="Refund & Return"
    titleHighlight="Policy"
    lastUpdated="March 2026"
    description="We want you to be satisfied with your purchase. Please review our return and refund procedures below. All returns must be authorized before shipping."
    sections={sections}
  />
);

export default RefundPolicy;
