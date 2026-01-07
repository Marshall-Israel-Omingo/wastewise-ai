import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Dessmi Ltd Logo" className="h-14 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Leading waste management solutions in Mombasa, Kenya. Committed to environmental sustainability and community welfare.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Our Services</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Waste Collection</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Fumigation Services</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Recycling Programs</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">Environmental Consulting</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:0725929621" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4" />
                0725 929621
              </a>
              <a href="mailto:dessmilimited@yahoo.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4" />
                dessmilimited@yahoo.com
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Bamburi, Mombasa, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dessmi Ltd. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Partnering with WWF Kenya for environmental conservation
          </p>
        </div>
      </div>
    </footer>
  );
}
