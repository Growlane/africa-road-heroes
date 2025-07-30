import { Card, CardContent } from "@/components/ui/card";
import mobileUnitImage from "@/assets/mobile-unit-action.jpg";
import engineRebuildImage from "@/assets/engine-rebuild-before-after.jpg";
import oilAnalysisImage from "@/assets/oil-analysis-results.jpg";

const Gallery = () => {
  const projects = [
    {
      title: "Mobile Unit in Action",
      description: "Our fully equipped mobile units providing roadside assistance across SADC routes",
      image: mobileUnitImage,
      category: "Roadside Service"
    },
    {
      title: "Engine Rebuild Project",
      description: "Before and after comparison of our precision engine rebuild services",
      image: engineRebuildImage,
      category: "Rebuild Services"
    },
    {
      title: "Oil Analysis Results",
      description: "Scientific tribology analysis helping prevent breakdowns before they happen",
      image: oilAnalysisImage,
      category: "Diagnostics"
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