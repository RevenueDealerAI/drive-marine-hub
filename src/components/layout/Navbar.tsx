import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Car, Truck, Anchor, HelpCircle, Mail, Home, Cog, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Cars", href: "/cars", icon: Car },
  { name: "Trucks", href: "/trucks", icon: Truck },
  { name: "Marine", href: "/marine", icon: Anchor },
  { name: "How It Works", href: "/#how-it-works", icon: HelpCircle },
  { name: "Contact", href: "/#contact", icon: Mail },
];

export const Navbar = ({ onOpenQuote }: { onOpenQuote: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href.split("#")[0]);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-secondary/80 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative flex items-center">
              {/* Engine Gear */}
              <div className="relative">
                <Cog className="w-10 h-10 text-primary" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white dark:bg-secondary rounded-full" />
                </div>
              </div>
              {/* Wave for Marine */}
              <Waves className="w-6 h-6 text-secondary dark:text-primary/80 -ml-1" />
            </div>
            <div className="flex flex-col">
              <span className={`text-base md:text-lg font-bold leading-tight tracking-tight ${
                isScrolled ? "text-foreground" : "text-white"
              }`}>
                DiscountAutoParts
              </span>
              <span className="text-xs font-bold text-primary tracking-wider">USA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(item.href) 
                    ? "text-primary" 
                    : isScrolled 
                      ? "text-foreground/80 hover:text-primary"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:888-555-1234"
              className={`flex items-center gap-2 font-bold transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white hover:text-primary"
              }`}
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>(888) 555-1234</span>
            </a>
            <Button variant="hero" size="lg" onClick={onOpenQuote}>
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
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
            className="lg:hidden bg-white/95 dark:bg-secondary/95 backdrop-blur-xl border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <a
                  href="tel:888-555-1234"
                  className="flex items-center justify-center gap-2 p-3 bg-secondary/10 text-foreground rounded-lg font-bold"
                >
                  <Phone className="w-5 h-5 text-primary" />
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
