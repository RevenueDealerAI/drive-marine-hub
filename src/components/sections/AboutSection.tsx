import { motion } from "framer-motion";
import { Award, Users, MapPin, Wrench } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              America's Trusted{" "}
              <span className="text-primary">Engine & Transmission</span>{" "}
              Supplier
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over a decade, DiscountAutoPartsUSA has been the go-to source for quality used engines and transmissions. Our family-owned business has grown from a small operation to serving customers in all 50 states.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We specialize in hard-to-find diesel engines and marine powertrains, with a team of experts who understand the unique requirements of heavy-duty trucks and boats. Every unit we sell is thoroughly tested and backed by our comprehensive warranty.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                <Award className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium">Family-Owned Since 2010</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                <Users className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium">Expert Support Team</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium">USA-Based Operations</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                <Wrench className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium">Diesel & Marine Specialists</span>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-navy-dark to-secondary rounded-2xl overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-xl flex items-center justify-center"
                    >
                      <Wrench className="w-8 h-8 text-primary/50" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Overlay text */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent flex items-end p-8">
                <div>
                  <p className="text-4xl font-bold text-primary-foreground mb-2">15+ Years</p>
                  <p className="text-primary-foreground/70">of trusted service</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-elevated">
              <p className="text-2xl font-bold">15,000+</p>
              <p className="text-sm opacity-90">Engines Sold</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
