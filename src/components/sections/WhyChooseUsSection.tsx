import { motion } from "framer-motion";
import { Wrench, BarChart3, Shield, Truck, CheckCircle, Settings } from "lucide-react";

const benefits = [
  {
    icon: Wrench,
    title: "OEM Certified Engines",
    description: "Factory-grade quality you can trust",
  },
  {
    icon: BarChart3,
    title: "Low-Mileage Units",
    description: "Tested & verified under 100K miles",
  },
  {
    icon: Shield,
    title: "Warranty 6-36 Months",
    description: "Comprehensive coverage included",
  },
  {
    icon: Truck,
    title: "Free Nationwide Shipping",
    description: "Direct to your door, shop, or marina",
  },
  {
    icon: CheckCircle,
    title: "VIN/HIN Fitment Guarantee",
    description: "100% match or money back",
  },
  {
    icon: Settings,
    title: "Diesel & Marine Specialists",
    description: "Expert knowledge in all power systems",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Thousands Trust{" "}
            <span className="text-primary">DiscountAutoPartsUSA</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've delivered over 15,000 engines with a 98% satisfaction rate. Here's why customers choose us.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-card-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
