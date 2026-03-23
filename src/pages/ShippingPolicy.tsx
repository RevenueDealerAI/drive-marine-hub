import { Truck, FileText, CheckCircle, AlertCircle, Clock, Package } from "lucide-react";
import { LegalPageLayout } from "@/components/LegalPageLayout";

const sections = [
  {
    title: "Nationwide Shipping",
    icon: Truck,
    content: [
      "Discount Auto Parts USA LLC ships used engines, transmissions, and auto parts to all 50 states across the United States.",
      "We work with reputable freight carriers and shipping companies to ensure safe and timely delivery of your parts.",
    ],
  },
  {
    title: "Freight Delivery for Large Parts",
    icon: Package,
    content: [
      "Engines and transmissions are shipped via freight carriers due to their size and weight:",
      "• Shipments are palletized and secured for safe transport",
      "• Freight deliveries are typically curbside — the carrier will deliver to the nearest accessible point",
      "• Liftgate service may be available at an additional cost if needed",
      "• A valid phone number is required for delivery scheduling",
      "• Someone must be present to accept and inspect the delivery",
    ],
  },
  {
    title: "Estimated Delivery Timeframes",
    icon: Clock,
    content: [
      "Delivery times vary based on location, part availability, and carrier schedules:",
      "• Most orders ship within 1–3 business days after payment confirmation",
      "• Standard delivery typically takes 5–10 business days depending on your location",
      "• Remote or rural areas may require additional time",
      "• Delivery timeframes are estimates and are not guaranteed",
      "• Delays may occur due to weather, carrier issues, or other circumstances beyond our control",
      "Your parts specialist will provide an estimated delivery window when you place your order.",
    ],
  },
  {
    title: "Inspection Upon Delivery",
    icon: CheckCircle,
    content: [
      "It is critical that you inspect your shipment upon delivery:",
      "• Check the packaging for external damage before signing for the delivery",
      "• Note any damage on the carrier's delivery receipt (Bill of Lading)",
      "• Photograph any damage to the packaging or part immediately",
      "• Contact us within 48 hours of delivery to report any issues at (888) 667-9660",
      "Signing for a delivery without noting damage may limit your ability to file a freight claim.",
    ],
  },
  {
    title: "Damage Reporting Procedures",
    icon: AlertCircle,
    content: [
      "If your shipment arrives damaged:",
      "1. Do NOT refuse the delivery — accept it and note damage on the carrier's paperwork",
      "2. Take clear photographs of all damage (packaging and part)",
      "3. Contact us immediately at (888) 667-9660 or email support@discountautopartsusa.com",
      "4. Keep all original packaging materials for potential carrier inspection",
      "5. We will work with the carrier to file a freight claim and arrange a resolution",
      "Damage claims must be reported within 48 hours of delivery.",
    ],
  },
  {
    title: "Customer Responsibilities",
    icon: FileText,
    content: [
      "To ensure smooth delivery:",
      "• Provide accurate and complete shipping address information",
      "• Provide a valid phone number for delivery scheduling",
      "• Ensure someone is available to receive and inspect the delivery",
      "• Provide accurate vehicle information (year, make, model, VIN) to ensure the correct part is shipped",
      "• Verify part compatibility with our specialists before ordering by calling (888) 667-9660",
      "Incorrect shipping information may result in delivery delays or additional charges.",
    ],
  },
  {
    title: "Shipping Costs",
    icon: Package,
    content: [
      "Shipping costs are determined based on the size, weight, and destination of your order:",
      "• Shipping quotes are provided at the time of purchase",
      "• Some orders may qualify for free or discounted shipping — ask your parts specialist",
      "• Additional charges may apply for liftgate service, residential delivery, or re-delivery attempts",
    ],
  },
];

const ShippingPolicy = () => (
  <LegalPageLayout
    badgeIcon={Truck}
    badgeText="Shipping Information"
    title="Shipping &"
    titleHighlight="Delivery Policy"
    lastUpdated="March 2026"
    description="We ship used engines, transmissions, and auto parts nationwide across the United States. Please review our shipping procedures and delivery expectations below."
    sections={sections}
    seoTitle="Shipping & Delivery Policy - Free Nationwide Shipping | DiscountAutoPartsUSA"
    seoDescription="Shipping policy for used engines and transmissions. Free nationwide delivery, freight shipping details, estimated delivery times, and damage reporting procedures."
    canonical="/shipping-policy"
  />
);

export default ShippingPolicy;
