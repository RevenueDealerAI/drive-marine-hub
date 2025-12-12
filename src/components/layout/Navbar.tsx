import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Settings, Car, Truck, Anchor, HelpCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home", icon: Settings },
  { name: "Cars", href: "#cars", icon: Car },
  { name: "Trucks", href: "#trucks", icon: Truck },
  { name: "Marine", href: "#marine", icon: Anchor },
  { name: "How It Works", href: "#how-it-works", icon: HelpCircle },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const Navbar = ({ onOpenQuote }: { onOpenQuote: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Settings className="w-8 h-8 text-primary" />
              <Anchor className="w-6 h-6 text-secondary" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm md:text-base font-bold text-foreground leading-tight">
                DiscountAutoParts
              </span>
              <span className="text-xs text-primary font-semibold">USA</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:888-555-1234"
              className="flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(888) 555-1234</span>
            </a>
            <Button variant="hero" size="lg" onClick={onOpenQuote}>
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg text-foreground hover:bg-primary/10 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <a
                  href="tel:888-555-1234"
                  className="flex items-center justify-center gap-2 p-3 bg-secondary text-secondary-foreground rounded-lg font-bold"
                >
                  <Phone className="w-5 h-5" />
                  <span>(888) 555-1234</span>
                </a>
                <Button variant="hero" size="lg" onClick={() => { onOpenQuote(); setIsMobileMenuOpen(false); }} className="w-full">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
