import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, FileText, X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExitIntentPopupProps {
  onOpenQuote: () => void;
}

export const ExitIntentPopup = ({ onOpenQuote }: ExitIntentPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("exitIntentShown");
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        setIsVisible(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
        onClick={() => setIsVisible(false)}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
          className="bg-card rounded-2xl p-6 md:p-8 max-w-md w-full shadow-elevated relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <AlertTriangle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Wait! Looking for a Used Engine?
            </h3>
            <p className="text-muted-foreground mb-6">
              Call now and speak with a parts specialist to get the best price available today.
            </p>
            <div className="flex flex-col gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:18886679660">
                  <Phone className="w-5 h-5" />
                  Call (888) 667-9660
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setIsVisible(false);
                  onOpenQuote();
                }}
              >
                <FileText className="w-5 h-5" />
                Request a Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
