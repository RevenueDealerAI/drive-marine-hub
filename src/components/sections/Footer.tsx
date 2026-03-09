import { Link } from "react-router-dom";
import { Cog, Waves, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "Car Engines", href: "/cars" },
    { name: "Truck Engines", href: "/trucks" },
    { name: "Marine Engines", href: "/marine" },
    { name: "Transmissions", href: "/trucks" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy", isRoute: true },
    { name: "Terms & Conditions", href: "/terms-and-conditions", isRoute: true }
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Cog className="w-8 h-8 text-primary" />
                <Waves className="w-6 h-6 text-secondary-glow" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight">
                  DiscountAutoParts
                </span>
                <span className="text-xs text-primary font-semibold">USA</span>
              </div>
            </Link>
            <p className="text-primary-foreground/60 text-sm mb-4">
              Quality Engines. Guaranteed Fitment. Nationwide Delivery.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:18886679660"
                  className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (888) 667-9660
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@discountautopartsusa.com"
                  className="flex items-start gap-2 text-sm text-primary-foreground/60 hover:text-primary transition-colors break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="break-all">info@discountautopartsusa.com</span>
                </a>
              </li>
              {/* <li className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Auto Drive<br />Detroit, MI 48201</span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} DiscountAutoPartsUSA.com | All Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-primary-foreground/50">
              <span className="flex items-center gap-1">🔒 SSL Secure</span>
              <span>•</span>
              <span>BBB Accredited</span>
              <span>•</span>
              <span>Verified Supplier</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
