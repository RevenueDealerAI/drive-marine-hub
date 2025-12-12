import { Link } from "react-router-dom";
import { Cog, Waves, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "Car Engines", href: "/cars" },
    { name: "Truck Engines", href: "/trucks" },
    { name: "Marine Engines", href: "/marine" },
    { name: "Transmissions", href: "/trucks" },
  ],
  // support: [

  // ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy", isRoute: true },
    { name: "Terms & Conditions", href: "/terms-and-conditions", isRoute: true }
  ],
};

const socialLinks = [

];

export const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 mb-4">
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
                <span className="text-base md:text-lg font-bold leading-tight tracking-tight">
                  DiscountAutoParts
                </span>
                <span className="text-xs font-bold text-primary tracking-wider">USA</span>
              </div>
            </a>
            <p className="text-primary-foreground/60 text-sm mb-4">
              Quality Engines. Guaranteed Fitment. Nationwide Delivery.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

           {/* Support */}
           <div>
            <h4 className="font-bold mb-4"></h4>
            {/* <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
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

         

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:888-555-1234"
                  className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (888) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@discountautopartsusa.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@discountautopartsusa.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Auto Drive<br />Detroit, MI 48201</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © 2024 DiscountAutoPartsUSA.com | All Rights Reserved
            </p>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/50">
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
