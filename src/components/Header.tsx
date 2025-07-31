import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <span className="font-montserrat font-bold text-xl text-foreground">Ultimate Trucking Solutions</span>
            <img 
              src="/lovable-uploads/19a2f2d0-b46e-4c73-8327-e0504c5f0ab8.png" 
              alt="Ultimate Trucking Solutions" 
              className="h-10 w-auto hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-poppins text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/services" className="font-poppins text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/about" className="font-poppins text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/contact" className="font-poppins text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              variant="cta" 
              size="default" 
              className="font-poppins"
              onClick={() => window.open('tel:+26771669889')}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="/" className="font-poppins text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/services" className="font-poppins text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="/about" className="font-poppins text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/contact" className="font-poppins text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button 
                variant="cta" 
                size="default" 
                className="font-poppins w-full"
                onClick={() => window.open('tel:+26771669889')}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;