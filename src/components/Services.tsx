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
  Calendar
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "24/7 Roadside Assistance & Mobile Mechanics",
      description: "Breakdowns don't follow business hours. Our expert mobile mechanics are on standby 24/7/365, ready to dispatch across Gaborone and key transport corridors in Botswana, South Africa, Namibia, and Zambia. Engine diagnostics, trailer repairs, hydraulic servicing, and emergency towing coordination.",
      color: "text-secondary"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Fleet Efficiency Optimization",
      description: "Our fleet solutions are designed to cut operating costs, improve fuel economy, and extend truck lifespan. Preventive maintenance schedules, digital vehicle diagnostics, onboard telematics integration, and cost-per-kilometer (CPK) analysis.",
      color: "text-primary"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Trailer & Plant Equipment Repairs",
      description: "We handle side tippers, sloppers, flatbeds, and construction plant equipment. Whether in your yard or on the road — we come to you. Axle alignment, welding, hydraulic systems, tire & brake replacements, and on-site service for plant hire firms.",
      color: "text-accent"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Workshop Services in Gaborone",
      description: "Visit our fully equipped service center in Gaborone for complete diagnostics, mechanical and electrical repairs. Heavy-duty diagnostics (Volvo, Scania, MAN), parts replacement, brake testing, emission controls, and compliance documentation.",
      color: "text-primary"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Truck Rebuilds & Asset Audits",
      description: "Complete truck rebuilds from chassis to cabin, rebuilt to manufacturer standards. We also provide comprehensive asset audits and fleet inspections to assess vehicle condition and recommend maintenance strategies.",
      color: "text-secondary"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Engine, Transmission & Differential Rebuilds",
      description: "Complete internal system overhauls by skilled technicians using genuine or OEM-spec parts. We ensure long life, peak performance, and warranty coverage for all rebuilt components.",
      color: "text-accent"
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Oil/Fuel Analysis & Engine Health Management",
      description: "Scientific fluid testing detects wear, contamination, and poor lubrication. Our engine health management systems track performance, temperature, vibration, and oil quality to prevent unexpected failures.",
      color: "text-primary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Auto Electrical & Hydraulic Repairs",
      description: "Modern trucks require smart diagnostics. We handle alternators, wiring, sensors, lighting, hydraulic systems, pneumatic repairs, brake systems, and complex electronic control modules.",
      color: "text-secondary"
    },
    {
      icon: <Fuel className="w-8 h-8" />,
      title: "Fuel Savers & Truck Retrofits",
      description: "We install and tune advanced fuel-saving systems and retrofit trucks with modern technology to reduce operational costs, improve efficiency, and minimize environmental impact.",
      color: "text-accent"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Fleet Telemetry & Contract Mechanics",
      description: "Asset & fleet telemetry solutions for real-time monitoring. We also provide contract mechanics for long-term fleet partnerships and driver training programs to ensure safer operations.",
      color: "text-primary"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Fleet Advisory & Driver Training",
      description: "Comprehensive fleet advisory services including maintenance planning, cost optimization strategies, and professional driver training programs to ensure safe and efficient fleet operations.",
      color: "text-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/mobile-unit-action.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-secondary/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 animate-fade-in">
            Expert Fleet Solutions
          </h1>
          <p className="text-xl md:text-2xl font-open-sans mb-8 max-w-4xl mx-auto leading-relaxed">
            24/7 Roadside Support, Rebuilds, Diagnostics & More. Delivered by Certified Technicians Across Botswana & SADC.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="lg" 
              className="font-poppins text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              <Calendar className="w-5 h-5" />
              Request Service
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-poppins text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              onClick={() => window.open('tel:+0026771669889')}
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
            "We don't just repair trucks, we keep Africa moving."
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
            We're just one call away anywhere in Botswana or the SADC region.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="lg" 
              className="font-poppins text-lg px-8 py-4"
              onClick={() => window.open('tel:+0026771669889')}
            >
              <Phone className="w-5 h-5" />
              Call Primary: +267 7166 9889
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-poppins text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20"
              onClick={() => window.open('https://wa.me/0026771669889?text=Hello%2C%20I%20need%20roadside%20assistance%20%28Primary%29%20or%20+0026776550659%20%28Secondary%29')}
            >
              <img src="/lovable-uploads/2bee663b-b5cd-484c-97ad-e6b8d79b0bd6.png" alt="WhatsApp" className="w-5 h-5" />
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