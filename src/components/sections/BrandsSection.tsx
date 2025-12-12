import { motion } from "framer-motion";
import { useState } from "react";

const brandCategories = {
  cars: {
    label: "🚗 Car Brands",
    brands: ["Ford", "Honda", "Toyota", "Chevrolet", "Dodge", "BMW", "Mercedes", "Nissan", "Hyundai", "Kia"],
  },
  trucks: {
    label: "🛻 Truck Diesel Brands",
    brands: ["Cummins", "Duramax", "Powerstroke", "CAT", "Detroit Diesel", "Isuzu", "International"],
  },
  marine: {
    label: "⛵ Marine Engine Brands",
    brands: ["Yamaha", "Suzuki", "Mercury Marine", "Volvo Penta", "MerCruiser", "Honda Marine", "Evinrude"],
  },
};

type CategoryKey = keyof typeof brandCategories;

export const BrandsSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("cars");

  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We Stock Parts for{" "}
            <span className="text-primary">All Major Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access to thousands of OEM-quality engines and transmissions from top manufacturers.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(Object.keys(brandCategories) as CategoryKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
              }`}
            >
              {brandCategories[key].label}
            </button>
          ))}
        </div>

        {/* Brands Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {brandCategories[activeCategory].brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group px-6 py-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 cursor-pointer"
            >
              <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                {brand}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
