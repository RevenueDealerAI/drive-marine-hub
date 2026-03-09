import { motion } from "framer-motion";
import { Phone, FileText, ShieldCheck, Truck, TestTube, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustPoints = [
  { icon: TestTube, text: "Low Mileage Tested Engines" },
  { icon: ShieldCheck, text: "Warranty Options Available" },
  { icon: Truck, text: "Nationwide Shipping Across the US" },
  { icon: HeadphonesIcon, text: "Friendly Parts Specialists Ready to Assist" },
];

interface ClosingCTASectionProps {
  onOpenQuote: () => void;
}

export const ClosingCTASection = ({ onOpenQuote }: ClosingCTASectionProps) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-secondary via-accent to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(4_76%_48%/0.15),transparent_60%)]" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-foreground mb-4 leading-tight">
            Need an Engine or Transmission Today?
          </h2>
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-10">
            Speak with a parts specialist now and get the best discounted deal available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="cta" size="xl" asChild>
              <a href="tel:18886679660" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now – (888) 667-9660
              </a>
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={onOpenQuote}
            >
              <FileText className="w-5 h-5" />
              Get a Free Price Quote
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {trustPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3 bg-secondary-foreground/5 rounded-xl px-4 py-3 backdrop-blur-sm"
              >
                <point.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-secondary-foreground">{point.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
