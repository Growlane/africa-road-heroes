import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-truck-repair.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 leading-tight animate-fade-in">
            Powering Africa's Roads
            <span className="block text-secondary">One Truck at a Time!</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-open-sans mb-8 text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From Botswana to the SADC region, we keep your trucks running with expert repairs, 
            24/7 roadside support, and precision rebuilds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="emergency" size="xl" className="font-poppins w-full sm:w-auto">
              <Phone className="w-5 h-5" />
              Get Roadside Help Now
            </Button>
            <Button variant="hero" size="xl" className="font-poppins w-full sm:w-auto">
              <Calendar className="w-5 h-5" />
              Book a Repair
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;