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
} from "lucide-react";

const ServicesPreview = () => {
  const featuredServices = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Truck & Plant Equipment Repairs",
      description: "Expert repairs for commercial trucks, trailers, and heavy plant equipment with certified technicians.",
      color: "text-primary"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "24/7 Roadside Assistance",
      description: "Emergency support across Botswana & SADC routes. We dispatch mobile mechanics fast anywhere, anytime.",
      color: "text-secondary"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Mobile Truck Mechanics",
      description: "Our mobile teams come fully equipped to handle most repairs onsite. Save towing fees and time.",
      color: "text-accent"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Truck Rebuilds",
      description: "Complete truck restoration from chassis to cabin, rebuilt to manufacturer standards.",
      color: "text-primary"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Engine & Transmission Rebuilds",
      description: "Complete internal system overhauls using genuine or OEM-spec parts for long-lasting performance.",
      color: "text-secondary"
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Oil Analysis & Diagnostics",
      description: "Scientific fluid testing to detect wear and contamination before unexpected failures occur.",
      color: "text-accent"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Certified Equipment Sales",
      description: "High-quality, tested trucks and plant equipment inspected and certified by our technical team.",
      color: "text-primary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Auto Electrical Repairs",
      description: "Smart diagnostics for alternators, wiring, sensors, lights, and complex electronic systems.",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl font-open-sans text-foreground/80 max-w-3xl mx-auto mb-8">
            Comprehensive truck repair and maintenance solutions across Botswana & SADC region.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-card-soft">
              <CardContent className="p-6 text-center">
                <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-poppins font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="font-open-sans text-foreground/80 leading-relaxed text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            className="font-poppins text-lg px-8 py-4"
            onClick={() => window.location.href = '/services'}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;