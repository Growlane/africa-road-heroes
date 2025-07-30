import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const projects = [
    {
      title: "Precision Bearing Repair",
      description: "Expert mechanical component repairs with precision tools and techniques",
      image: "/lovable-uploads/524bba7c-ed1e-4f17-ba48-78dab039828a.png",
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
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-poppins font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-poppins font-semibold text-primary mb-3">
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