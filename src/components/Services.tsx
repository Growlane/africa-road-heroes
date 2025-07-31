import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  Phone,
  Truck,
  RefreshCw,
  Cog,
  FlaskConical,
  ShieldCheck,
  Zap,
  Gauge,
  Fuel,
  Activity,
  MessageCircle,
  Calendar
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Truck & Plant Equipment Repairs",
      description: "We specialize in expert repairs for commercial trucks, trailers, and heavy plant equipment. Our certified technicians deliver fast and efficient service to reduce downtime.",
      color: "text-primary"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Roadside Assistance (Botswana & SADC)",
      description: "Breakdowns can happen anytime. Our 24/7 in-transit support covers major SADC routes. We dispatch mobile mechanics fast — anywhere, anytime.",
      color: "text-secondary"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Mobile Truck Mechanics (Botswana Only)",
      description: "Our mobile teams come fully equipped to handle most repairs onsite. Save towing fees and time with our reliable mobile solutions.",
      color: "text-accent"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Truck Rebuilds",
      description: "We bring damaged, worn-out trucks back to life. From the chassis to the cabin, we rebuild everything to manufacturer standards.",
      color: "text-primary"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Engine, Transmission & Differential Rebuilds",
      description: "Complete internal system overhauls done by skilled technicians. We use genuine or OEM-spec parts to ensure long life and performance.",
      color: "text-secondary"
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Tribology / Oil Analysis",
      description: "Scientific fluid testing helps detect wear, contamination, or poor lubrication. Avoid unexpected failures by knowing your truck's health in advance.",
      color: "text-accent"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Certified Trucks, Trailers & Equipment",
      description: "We offer high-quality, tested trucks and plant equipment. Every unit is inspected and certified by our technical team before sale or lease.",
      color: "text-primary"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Pneumatic & Hydraulic System Repairs",
      description: "Air or fluid power systems acting up? We fix brakes, lifts, and compressors with precision tools and experience.",
      color: "text-secondary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Auto Electrical Repairs",
      description: "Modern trucks need smart diagnostics. We handle alternators, wiring, sensors, lights, and complex electronic systems.",
      color: "text-accent"
    },
    {
      icon: <Fuel className="w-8 h-8" />,
      title: "Fuel Savers",
      description: "We install and tune advanced fuel-saving systems to help you reduce operational costs and environmental impact.",
      color: "text-primary"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Engine & Component Health Management",
      description: "Track the performance, temperature, vibration, and oil quality of every component. We help you plan maintenance before breakdowns happen.",
      color: "text-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/90 to-secondary/90 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/mobile-unit-action.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
            Trusted Fleet Repair Experts Across Botswana & SADC
          </h1>
          <p className="text-xl md:text-2xl font-open-sans mb-8 max-w-4xl mx-auto">
            24/7 Roadside Support, Rebuilds, Diagnostics & More — Delivered by Certified Technicians.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="lg" 
              className="font-poppins text-lg px-8 py-4"
              onClick={() => window.location.href = '/contact'}
            >
              <Calendar className="w-5 h-5" />
              Request Service
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-poppins text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20"
              onClick={() => window.open('tel:+26771669889')}
            >
              <Phone className="w-5 h-5" />
              Talk to a Technician
            </Button>
          </div>
        </div>
      </section>

      {/* Services Header */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl font-open-sans text-foreground/80 max-w-3xl mx-auto">
              Reliable, Fast & Professional Solutions For Your Fleet Across Botswana & SADC.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-card-soft">
                <CardContent className="p-6">
                  <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="font-open-sans text-foreground/80 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page Banner */}
      <section className="relative py-20 bg-gradient-to-r from-primary/80 to-secondary/80 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/hero-truck-repair.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-primary/60" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4">
            "We don't just repair trucks — we keep Africa moving."
          </h2>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/90 to-primary/90 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/mobile-unit-action.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4">
            Need Emergency Roadside Help?
          </h2>
          <p className="text-xl md:text-2xl font-open-sans mb-8 max-w-4xl mx-auto">
            We're just one call away — anywhere in Botswana or the SADC region.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="lg" 
              className="font-poppins text-lg px-8 py-4"
              onClick={() => window.open('tel:+26771669889')}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-poppins text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20"
              onClick={() => window.open('https://wa.me/26771669889?text=Hello%2C%20I%20need%20roadside%20assistance')}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-poppins text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20"
              onClick={() => window.location.href = '/contact'}
            >
              <Calendar className="w-5 h-5" />
              Book Repair
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;