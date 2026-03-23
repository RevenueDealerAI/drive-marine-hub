import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface FloatingCTAProps {
  onOpenQuote: () => void;
}

export const FloatingCTA = ({ onOpenQuote }: FloatingCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile fixed bottom bar */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.3)]">
          <a
            href="tel:18886679660"
            className="flex items-center justify-center gap-2 text-primary-foreground font-bold text-lg"
          >
            <Phone className="w-5 h-5 animate-pulse" />
            Call Now - (888) 667-9660
          </a>
        </div>
      )}

      {/* Desktop floating quote button removed - Crisp chatbot occupies this space */}
    </>
  );
};
