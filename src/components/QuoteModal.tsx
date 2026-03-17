import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Lock, Zap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

const makes = [
  "Ford", "Chevrolet", "Toyota", "Honda", "Dodge", "Ram", "GMC", "Nissan", 
  "BMW", "Mercedes-Benz", "Jeep", "Subaru", "Hyundai", "Kia", "Lexus",
  "Cummins", "Duramax", "Powerstroke", "CAT", "Detroit Diesel",
  "Yamaha Marine", "Mercury Marine", "Volvo Penta", "MerCruiser", "Honda Marine"
];

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourcePage?: string;
}

export const QuoteModal = ({ isOpen, onClose, sourcePage = "modal" }: QuoteModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vin: "",
    year: "",
    make: "",
    model: "",
    partNeeded: "engine",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from("quote_requests").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        vin: formData.vin || null,
        year: formData.year || null,
        make: formData.make || null,
        model: formData.model || null,
        part_type: formData.partNeeded,
        message: formData.notes || null,
        source_page: sourcePage,
      });

      if (error) throw error;

      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you within 60 seconds during business hours.",
      });
      
      onClose();
      setFormData({
        name: "",
        phone: "",
        email: "",
        vin: "",
        year: "",
        make: "",
        model: "",
        partNeeded: "engine",
        notes: "",
      });
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast({
        title: "Error",
        description: "Failed to submit quote. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-elevated"
          >
            {/* Header */}
            <div className="sticky top-0 bg-card z-10 p-6 border-b border-border flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-card-foreground">
                  Get Your Free Quote
                </h2>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below for an instant quote
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="modal-name">Name *</Label>
                  <Input
                    id="modal-name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="modal-phone">Phone *</Label>
                  <Input
                    id="modal-phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="modal-email">Email *</Label>
                  <Input
                    id="modal-email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {/* VIN/HIN */}
                <div className="space-y-2">
                  <Label htmlFor="modal-vin">VIN or HIN</Label>
                  <Input
                    id="modal-vin"
                    placeholder="1HGBH41JXMN109186"
                    value={formData.vin}
                    onChange={(e) => setFormData({ ...formData, vin: e.target.value })}
                  />
                </div>

                {/* Year */}
                <div className="space-y-2">
                  <Label>Year</Label>
                  <Select value={formData.year} onValueChange={(value) => setFormData({ ...formData, year: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-[60]">
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Make */}
                <div className="space-y-2">
                  <Label>Make</Label>
                  <Select value={formData.make} onValueChange={(value) => setFormData({ ...formData, make: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select make" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-[60] max-h-60">
                      {makes.map((make) => (
                        <SelectItem key={make} value={make}>
                          {make}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Model */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="modal-model">Model</Label>
                  <Input
                    id="modal-model"
                    placeholder="e.g., F-150, Camry, Silverado"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  />
                </div>

                {/* Part Needed */}
                <div className="space-y-3 md:col-span-2">
                  <Label>Part Needed</Label>
                  <RadioGroup
                    value={formData.partNeeded}
                    onValueChange={(value) => setFormData({ ...formData, partNeeded: value })}
                    className="flex flex-wrap gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="engine" id="modal-engine" />
                      <Label htmlFor="modal-engine" className="font-normal cursor-pointer">Engine</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="transmission" id="modal-transmission" />
                      <Label htmlFor="modal-transmission" className="font-normal cursor-pointer">Transmission</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="modal-both" />
                      <Label htmlFor="modal-both" className="font-normal cursor-pointer">Both</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Notes */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="modal-notes">Additional Notes</Label>
                  <Textarea
                    id="modal-notes"
                    placeholder="Any additional details..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="min-h-[80px]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Rocket className="w-5 h-5" />
                      Get My Free Quote
                    </span>
                  )}
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4" />
                  <span>Secure Form</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  <span>Instant Response</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  <span>(888) 667-9660</span>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
