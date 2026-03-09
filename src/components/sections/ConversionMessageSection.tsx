import { Phone } from "lucide-react";

export const ConversionMessageSection = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <p className="text-lg md:text-xl font-semibold text-foreground mb-3">
          Don't pay dealership prices for engine replacement.
        </p>
        <p className="text-muted-foreground mb-4">
          Call Discount Auto Parts USA today to check availability and receive a competitive quote.
        </p>
        <a
          href="tel:18886679660"
          className="inline-flex items-center gap-2 text-xl font-bold text-primary hover:underline"
        >
          <Phone className="w-5 h-5" />
          (888) 667-9660
        </a>
      </div>
    </section>
  );
};
