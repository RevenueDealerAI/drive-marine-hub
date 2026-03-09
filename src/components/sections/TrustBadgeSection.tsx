import { motion } from "framer-motion";
import { ShieldCheck, Truck, TestTube, HeadphonesIcon, Star } from "lucide-react";

const badges = [
  { icon: TestTube, label: "Tested Used Engines" },
  { icon: ShieldCheck, label: "Warranty Options Available" },
  { icon: Truck, label: "Nationwide Delivery" },
  { icon: HeadphonesIcon, label: "Secure Customer Support" },
];

export const TrustBadgeSection = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 text-center w-36"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">{badge.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary fill-primary" />
            ))}
          </div>
          <p className="text-lg italic text-muted-foreground mb-2">
            "Great service and fast shipping. The engine arrived exactly as described."
          </p>
          <cite className="text-sm text-muted-foreground not-italic">— Verified Customer</cite>
        </motion.blockquote>
      </div>
    </section>
  );
};
