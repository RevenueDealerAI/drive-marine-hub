import { motion } from "framer-motion";
import { Car, Truck, Anchor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const vehicleTypes = [
  {
    id: "cars",
    icon: Car,
    title: "Car Engines & Transmissions",
    description: "OEM gasoline, hybrid, turbo, CVT, automatic transmissions for all makes",
    cta: "Browse Car Parts",
    gradient: "from-primary/10 to-primary/5",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    id: "trucks",
    icon: Truck,
    title: "Truck Diesel Engines & Transmissions",
    description: "Cummins, Duramax, Powerstroke, CAT, Detroit Diesel - Built for heavy-duty performance",
    cta: "Browse Truck Parts",
    gradient: "from-secondary/10 to-secondary/5",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    id: "marine",
    icon: Anchor,
    title: "Boat Marine Engines",
    description: "Outboard, inboard, sterndrive motors from Yamaha, Mercury, Volvo Penta, Honda Marine",
    cta: "Browse Marine Parts",
    gradient: "from-navy/10 to-navy/5",
    iconBg: "bg-navy/10",
    iconColor: "text-navy",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const VehicleTypesSection = () => {
  return (
    <section id="vehicles" className="py-20 md:py-32 bg-muted/50">
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
            Engines & Transmissions for{" "}
            <span className="text-primary">Every Vehicle</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From compact cars to heavy-duty trucks and marine vessels, we have the right powertrain for you.
          </p>
        </motion.div>

        {/* Vehicle Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {vehicleTypes.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              id={vehicle.id}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${vehicle.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 ${vehicle.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <vehicle.icon className={`w-8 h-8 ${vehicle.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {vehicle.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {vehicle.description}
                </p>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary/80"
                >
                  {vehicle.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
