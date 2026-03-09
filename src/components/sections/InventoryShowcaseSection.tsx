import { motion } from "framer-motion";
import { Phone, Cog, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const inventoryItems = [
  { vehicle: "Toyota Camry", part: "Engine", condition: "Tested / Low Mileage" },
  { vehicle: "Ford F-150", part: "Engine", condition: "Tested / Low Mileage" },
  { vehicle: "Honda Accord", part: "Transmission", condition: "Tested / Low Mileage" },
  { vehicle: "Chevy Silverado", part: "Engine", condition: "Tested / Low Mileage" },
  { vehicle: "Nissan Altima", part: "Engine", condition: "Tested / Low Mileage" },
  { vehicle: "BMW 3 Series", part: "Engine Assembly", condition: "Tested / Low Mileage" },
];

export const InventoryShowcaseSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Recently Supplied Engines & Transmissions
          </h2>
          <p className="text-muted-foreground text-lg">
            Browse a sample of our recent inventory
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {inventoryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.part === "Transmission" ? (
                  <Settings className="w-8 h-8 text-primary" />
                ) : (
                  <Cog className="w-8 h-8 text-primary" />
                )}
                <div>
                  <h3 className="font-bold text-foreground text-lg">{item.vehicle}</h3>
                  <p className="text-sm text-muted-foreground">{item.part}</p>
                </div>
              </div>
              <div className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 inline-block mb-4">
                {item.condition}
              </div>
              <Button variant="default" size="sm" className="w-full" asChild>
                <a href="tel:18886679660">
                  <Phone className="w-4 h-4" />
                  Call for Best Price
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center bg-card rounded-2xl p-6 max-w-xl mx-auto shadow-sm border border-border"
        >
          <p className="text-muted-foreground mb-3">
            Inventory changes frequently. Call now to check availability.
          </p>
          <a
            href="tel:18886679660"
            className="text-xl font-bold text-primary hover:underline flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            (888) 667-9660
          </a>
        </motion.div>
      </div>
    </section>
  );
};
