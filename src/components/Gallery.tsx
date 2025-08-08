import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const projects = [
    {
      title: "Precision Bearing Assembly",
      description: "Advanced bearing assembly and precision measurement with professional tools",
      image: "/lovable-uploads/a0f0360a-3c07-4450-8bb2-8bdb12301073.png",
      category: "Component Repair"
    },
    {
      title: "Transmission & Differential Work",
      description: "Professional transmission parts measurement and rebuilding services",
      image: "/lovable-uploads/829d9807-1875-4c03-b352-32c0d1b8cb94.png",
      category: "Rebuild Services"
    },
    {
      title: "Fleet Operations",
      description: "Professional truck and container handling at our facility",
      image: "/lovable-uploads/18e34cd2-4804-497c-8c5c-2ea8b500151e.png",
      category: "Fleet Management"
    },
    {
      title: "SADC Transport Operations",
      description: "Long-haul transport services across SADC region routes",
      image: "/lovable-uploads/acecb768-cd0c-41ac-a2e8-e7b61443b568.png",
      category: "Transport Services"
    },
    {
      title: "Roadside Assistance",
      description: "24/7 mobile repair services wherever you are across Botswana and SADC",
      image: "/lovable-uploads/2e0b5a1b-f8bc-440d-9b37-b8b39e2b9d2f.png",
      category: "Roadside Service"
    },
    {
      title: "Complete Engine Rebuild",
      description: "Fully rebuilt engines ready for installation - like brand new performance",
      image: "/lovable-uploads/8786edb3-13bb-4304-bf6f-2f366dbaaa11.png",
      category: "Engine Rebuild"
    },
    {
      title: "Differential & Gear Systems",
      description: "Precision repair and rebuilding of differential components and gear systems",
      image: "/lovable-uploads/007c33b9-9d1d-43e3-bd82-b9829ff5acb1.png",
      category: "Component Repair"
    },
    {
      title: "Truck Cab Maintenance",
      description: "Complete truck cab servicing and hydraulic system maintenance",
      image: "/lovable-uploads/568b3159-12ef-48ff-baad-8f1417ede020.png",
      category: "Fleet Management"
    },
    {
      title: "Plant Equipment Service",
      description: "Professional loader and construction equipment maintenance and repairs",
      image: "/lovable-uploads/1f0b8789-b21e-4f17-873c-28a25b53724b.png",
      category: "Plant Equipment"
    },
    {
      title: "Hydraulic Systems",
      description: "Advanced hydraulic equipment repair and hose replacement services",
      image: "/lovable-uploads/7dcafcf7-33ef-4f21-98ac-127f7e1bc577.png",
      category: "Hydraulic Service"
    },
    {
      title: "Heavy Trailer Solutions",
      description: "Multi-axle trailer maintenance and transport solutions for heavy loads",
      image: "/lovable-uploads/0aef9ac8-b718-4a36-9055-783ad6990d31.png",
      category: "Transport Services"
    },
    {
      title: "Transmission Rebuilds",
      description: "Complete transmission and gearbox rebuilding with precision engineering",
      image: "/lovable-uploads/f97b9ed6-037e-4c09-a650-43b4f843f4a9.png",
      category: "Rebuild Services"
    },
    {
      title: "Commercial Tire Solutions",
      description: "Premium truck and trailer tire inventory for all fleet requirements",
      image: "/lovable-uploads/bde71a20-a287-4113-a087-aa602d0a4e3c.png",
      category: "Tire Services"
    },
    {
      title: "Engine Bearing Specialists",
      description: "Precision engine bearings and bushings for optimal performance and longevity",
      image: "/lovable-uploads/45cceb34-04a9-48ec-b023-7e28c5e88ee5.png",
      category: "Component Repair"
    },
    {
      title: "Municipal Fleet Services",
      description: "Specialized maintenance for municipal and environmental health vehicles",
      image: "/lovable-uploads/ce3b5ead-b873-4726-b269-4b51e78115a3.png",
      category: "Fleet Management"
    },
    {
      title: "Agricultural Equipment",
      description: "Professional tractor and farming equipment maintenance and repair services",
      image: "/lovable-uploads/98816239-f179-4689-8fec-1ab5bfff0b45.png",
      category: "Plant Equipment"
    },
    {
      title: "Waste Management Fleet",
      description: "Specialized services for waste collection and refuse truck maintenance",
      image: "/lovable-uploads/16ab2224-f3f2-4bc0-9a56-0980f31ea39a.png",
      category: "Fleet Management"
    },
    {
      title: "Sewage & Septic Services",
      description: "Professional sewage truck maintenance and septic system vehicle repairs",
      image: "/lovable-uploads/d6124d52-9c61-46c1-a271-fafb542a70d4.png",
      category: "Specialized Services"
    },
    {
      title: "Control Office Operations",
      description: "Professional management center coordinating all fleet services and client communications",
      image: "/lovable-uploads/a742f70e-3921-4e00-aa81-3769b187e7c4.png",
      category: "Operations Center"
    },
    {
      title: "Workshop Service Bay",
      description: "Professional workshop facilities with expert technicians servicing heavy-duty vehicles",
      image: "/lovable-uploads/c6aee9e0-1bca-4bfc-8c27-95bd21f04038.png",
      category: "Workshop Services"
    },
    {
      title: "Fleet Maintenance Services",
      description: "Comprehensive vehicle maintenance including buses and commercial fleet servicing",
      image: "/lovable-uploads/fde8084e-1ef0-45eb-a188-99931ccdf106.png",
      category: "Fleet Management"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">
            Gallery & Projects
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl font-open-sans text-foreground/80 max-w-3xl mx-auto">
            See our expertise in action through real projects and professional service delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-700 hover:-translate-y-2 animate-fade-in"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-contain bg-muted/30 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-poppins font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <CardContent className="p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-poppins font-semibold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-open-sans text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;