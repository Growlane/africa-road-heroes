import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    "24/7 Support Across SADC",
    "Certified Mechanics & Technicians", 
    "Fast Turnaround Time",
    "Mobile Services",
    "Long-Term Fleet Partnerships",
    "Transparent Pricing"
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 transform skew-x-12 translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="font-poppins font-medium text-white">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;