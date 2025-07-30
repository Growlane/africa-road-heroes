import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 mb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Ultimate Trucking Solutions
            </h3>
            <p className="font-open-sans text-white/80 mb-4 leading-relaxed">
              Powering Africa's roads with expert truck repairs, 24/7 roadside support, 
              and precision rebuilds across Botswana and the SADC region.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="font-open-sans text-sm text-white/80">Gaborone, Botswana</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-secondary" />
                <span className="font-open-sans text-sm text-white/80">SADC Region Coverage</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="font-open-sans text-white/80 hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="font-open-sans text-white/80 hover:text-secondary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="font-open-sans text-white/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="font-open-sans text-white/80 hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Emergency Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-poppins font-medium">24/7 Emergency Line</p>
                  <p className="font-open-sans text-white/80">+267 7166 9889</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-poppins font-medium">Email Support</p>
                  <p className="font-open-sans text-white/80">info@ultimatetruckingsolutions.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-open-sans text-white/60">
            © 2025 Ultimate Trucking Solutions. All rights reserved. | Powering Africa's Roads, One Truck at a Time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;