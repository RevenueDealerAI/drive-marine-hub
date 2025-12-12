import { motion } from "framer-motion";
import { FileText, Search, CheckCircle, Package, Shield } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Request a Quote",
    description: "Fill out our simple form or call us",
    number: "01",
  },
  {
    icon: Search,
    title: "We Locate Your Perfect Match",
    description: "Access to 5,000+ engines nationwide",
    number: "02",
  },
  {
    icon: CheckCircle,
    title: "VIN/HIN Verification",
    description: "Guaranteed fitment for your vehicle",
    number: "03",
  },
  {
    icon: Package,
    title: "Fast Shipping",
    description: "Delivered to home, shop, or marina",
    number: "04",
  },
  {
    icon: Shield,
    title: "Warranty Activation",
    description: "Coverage starts on installation",
    number: "05",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-navy-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Get Your Engine in{" "}
            <span className="text-primary">5 Easy Steps</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Our streamlined process ensures you get the right part, fast.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center group"
              >
                {/* Step number and icon */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30 group-hover:bg-primary group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground shadow-glow">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-primary-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm">
                  {step.description}
                </p>

                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-primary/30">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
