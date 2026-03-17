import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Lock, Zap, Rocket } from "lucide-react";
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

export const QuoteFormSection = () => {
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
        source_page: "homepage",
      });

      if (error) throw error;

      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you within 60 seconds during business hours.",
      });
      
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
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Get an Instant Engine/Transmission Quote
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Free quote in under 60 seconds
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-elevated"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              {/* VIN/HIN */}
              <div className="space-y-2">
                <Label htmlFor="vin">VIN or HIN (Boat Hull ID)</Label>
                <Input
                  id="vin"
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
                  <SelectContent className="bg-popover z-50">
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
                  <SelectContent className="bg-popover z-50 max-h-60">
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
                <Label htmlFor="model">Model</Label>
                <Input
                  id="model"
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
                    <RadioGroupItem value="engine" id="engine" />
                    <Label htmlFor="engine" className="font-normal cursor-pointer">Engine</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="transmission" id="transmission" />
                    <Label htmlFor="transmission" className="font-normal cursor-pointer">Transmission</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both" className="font-normal cursor-pointer">Both</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Notes */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any additional details about your vehicle or requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="min-h-[100px]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
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
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
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
                <span>Or Call (888) 667-9660</span>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
