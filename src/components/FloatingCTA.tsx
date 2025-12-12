import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface FloatingCTAProps {
  onOpenQuote: () => void;
}

export const FloatingCTA = ({ onOpenQuote }: FloatingCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Button
            variant="hero"
            size="lg"
            onClick={onOpenQuote}
            className="rounded-full shadow-elevated"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="hidden sm:inline">Get Quote</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
