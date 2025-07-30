import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "L. Dintwe",
      title: "Transport Manager",
      company: "Gaborone Logistics",
      rating: 5,
      text: "Our fleet operates across Botswana and Zimbabwe. These guys have saved us thousands in breakdown costs. Fast, reliable and knowledgeable.",
      location: "Gaborone"
    },
    {
      name: "J. Moyo", 
      title: "Owner-Driver",
      company: "SADC Transit",
      rating: 5,
      text: "When our truck broke down in Francistown, they were there in less than 90 minutes. Amazing roadside support.",
      location: "SADC Transit"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl font-open-sans text-foreground/80 max-w-3xl mx-auto">
            Don't just take our word for it — hear from our satisfied clients across the SADC region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-card-soft">
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 text-secondary/20">
                  <Quote className="w-12 h-12" />
                </div>
                
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="font-roboto italic text-lg text-foreground/80 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-poppins font-semibold text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="font-open-sans text-sm text-foreground/60">
                        {testimonial.title}
                      </p>
                      <p className="font-open-sans text-sm font-medium text-secondary">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-open-sans text-sm text-foreground/60">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;