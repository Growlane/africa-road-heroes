import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import EmergencyCTA from "@/components/EmergencyCTA";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const truckImages = [
    '/lovable-uploads/db39e485-f31e-4aed-9bf2-fec7df88815a.png',
    '/lovable-uploads/d500c6f8-d9de-47ca-bf9e-a6295e0d2dc6.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % truckImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % truckImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + truckImages.length) % truckImages.length);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Expert Fleet Solutions Banner with Truck Service Images */}
      <section className="relative h-96 overflow-hidden">
        {/* Background Image with Transition */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${truckImages[currentSlide]})` }}
        >
          {/* Blue shade overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/70"></div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4 leading-tight">Expert Fleet Solutions</h1>
            <p className="text-lg md:text-xl opacity-95 font-open-sans leading-relaxed">Professional truck repair and maintenance solutions for your fleet</p>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {truckImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-secondary' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>
      <div className="pt-8">
        <Services />
      </div>
      <Footer />
      <EmergencyCTA />
    </div>
  );
};

export default ServicesPage;