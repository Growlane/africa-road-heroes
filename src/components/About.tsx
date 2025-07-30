import { Shield, MapPin, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">
              Your Trusted Truck & Plant Equipment Experts
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg font-open-sans text-foreground/80 mb-6 leading-relaxed">
                Ultimate Trucking Solutions is a Botswana-based, heavy-duty truck and plant service provider 
                serving the entire SADC region. We specialize in fast, reliable, and quality-assured mechanical 
                solutions for on-road and off-road commercial vehicles.
              </p>
              
              <p className="text-lg font-open-sans text-foreground/80 mb-8 leading-relaxed">
                From 24/7 roadside assistance to complete engine rebuilds and oil analysis, we are the partner 
                every logistics business can depend on.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-secondary" />
                  <span className="font-poppins font-semibold text-primary">Mission:</span>
                  <span className="font-open-sans text-foreground/80">
                    To reduce downtime, extend the life of your fleet, and keep Africa's transport industry moving.
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-secondary" />
                  <span className="font-poppins font-semibold text-primary">Coverage:</span>
                  <span className="font-open-sans text-foreground/80">
                    Botswana + SADC Transit Routes
                  </span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-card-soft hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary">24/7 Support</h3>
                </div>
                <p className="font-open-sans text-foreground/80">
                  Round-the-clock emergency assistance across the entire SADC region.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card-soft hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary">Quality Guaranteed</h3>
                </div>
                <p className="font-open-sans text-foreground/80">
                  Certified mechanics and quality-tested solutions for lasting performance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card-soft hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-primary">Regional Coverage</h3>
                </div>
                <p className="font-open-sans text-foreground/80">
                  Comprehensive service network spanning Botswana and SADC transit routes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;