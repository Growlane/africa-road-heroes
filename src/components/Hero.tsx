import { Button } from "@/components/ui/button";
import { Phone, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-truck-repair.jpg";
import mobileUnitImage from "@/assets/mobile-unit-action.jpg";
import engineRebuildImage from "@/assets/engine-rebuild-before-after.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    {
      image: heroImage,
      title: '24/7 Truck, Trailer & Plant Equipment Services',
      subtitle: 'in Botswana & the SADC Region',
      description: 'Maximize Fleet Uptime | Reduce Operating Costs | Ensure Safe & Efficient Logistics with expert repairs, roadside assistance, and precision rebuilds.'
    },
    {
      image: mobileUnitImage,
      title: 'Emergency Roadside Assistance',
      subtitle: '2 Hours Dispatch Time',
      description: 'Mobile mechanics on standby 24/7/365 across Gaborone and key transport corridors in Botswana, South Africa, Namibia, and Zambia.'
    },
    {
      image: engineRebuildImage,
      title: 'Fleet Efficiency Optimization',
      subtitle: 'Cut Operating Costs Today',
      description: 'Preventive maintenance schedules, digital diagnostics, and cost-per-kilometer analysis to extend vehicle lifespan and improve fuel economy.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };
  
  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Smooth Transition */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>
      
      {/* Slide Navigation */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 text-center text-white transition-all duration-1000 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-bold mb-6 leading-[1.1] tracking-tight">
            {slides[currentSlide].title}
            <span className="block text-secondary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mt-3 tracking-wide">{slides[currentSlide].subtitle}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-xl font-open-sans mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed font-light">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="emergency" 
              size="xl" 
              className="font-poppins w-full sm:w-auto"
              onClick={() => window.open('tel:+26771669889')}
            >
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

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-secondary' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;