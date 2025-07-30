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
  Activity
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Truck & Plant Equipment Repairs",
      description: "Expert repairs for trucks, trailers, and plant machinery. Quality guaranteed.",
      color: "text-blue-600"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "24/7 Roadside Assistance",
      description: "Breakdown? We'll get to you fast! 24/7 mobile roadside assistance across SADC.",
      color: "text-red-600"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Mobile Truck Mechanics",
      description: "Fully equipped mobile units ready to fix your truck wherever you are in Botswana.",
      color: "text-orange-600"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Truck Rebuilds",
      description: "We restore trucks from the ground up — performance like brand new.",
      color: "text-green-600"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Engine, Transmission & Differential Rebuilds",
      description: "Precision rebuilds that bring powertrains back to life.",
      color: "text-purple-600"
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Tribology & Oil Analysis",
      description: "Avoid breakdowns before they happen. Monitor wear and fluid health scientifically.",
      color: "text-teal-600"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Quality-Tested Equipment",
      description: "Buy or lease pre-tested and certified trucks, trailers & equipment ready for work.",
      color: "text-indigo-600"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Pneumatic & Hydraulic Repairs",
      description: "Specialists in fluid power systems. From brakes to lifters, we handle it all.",
      color: "text-cyan-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Auto Electrical Repairs",
      description: "Modern diagnostic and electrical repair services for all truck models.",
      color: "text-yellow-600"
    },
    {
      icon: <Fuel className="w-8 h-8" />,
      title: "Fuel Savers",
      description: "Install smart solutions that reduce your fuel costs and emissions.",
      color: "text-emerald-600"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Engine & Component Health Management",
      description: "Get detailed reports on the state of your engines and components — before it's too late.",
      color: "text-rose-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl font-open-sans text-foreground/80 max-w-3xl mx-auto">
            Comprehensive truck and plant equipment solutions designed to keep your fleet moving across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

        <div className="text-center">
          <Button variant="cta" size="lg" className="font-poppins">
            <Phone className="w-5 h-5" />
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;