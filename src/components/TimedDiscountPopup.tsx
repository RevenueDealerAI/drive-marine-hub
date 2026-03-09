import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, FileText, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimedDiscountPopupProps {
  onOpenQuote: () => void;
  delaySeconds?: number;
}

export const TimedDiscountPopup = ({ onOpenQuote, delaySeconds = 20 }: TimedDiscountPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("timedPopupShown");
    if (hasShown) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem("timedPopupShown", "true");
    }, delaySeconds * 1000);

    return () => clearTimeout(timer);
  }, [delaySeconds]);

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
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Limited Inventory Available
            </h3>
            <p className="text-muted-foreground mb-2">
              Used engines and transmissions sell quickly.
            </p>
            <p className="text-muted-foreground mb-6">
              Call now to check availability and secure the best deal.
            </p>
            <div className="flex flex-col gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:18886679660">
                  <Phone className="w-5 h-5" />
                  Call Now
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
                Get Price Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
