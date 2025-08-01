import { Shield, MapPin, Clock, CheckCircle, Users, Wrench, Zap, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import aboutHeroImage from "@/assets/about-hero-team.jpg";

const About = () => {
  const coreValues = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We do honest work with full transparency."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Speed",
      description: "Time is money. We get you back on the road fast."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Reliability",
      description: "You can count on us, day or night."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "We use modern tools, diagnostics, and best practices."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "Your business is our business. We're in it together."
    }
  ];

  const teamMembers = [
    { title: "Head Technician", icon: <Wrench className="w-8 h-8" /> },
    { title: "Mobile Response Team", icon: <Users className="w-8 h-8" /> },
    { title: "Oil & Tribology Expert", icon: <Shield className="w-8 h-8" /> },
    { title: "Electrical Systems Engineer", icon: <Zap className="w-8 h-8" /> },
    { title: "Customer Support Lead", icon: <Heart className="w-8 h-8" /> }
  ];

  const trustPoints = [
    "Trusted by logistics fleets",
    "24/7 emergency response",
    "Fully mobile-equipped vans",
    "Real-time progress updates",
    "100% satisfaction guarantee"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${aboutHeroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6">
              Driven by Trust. Built on Expertise.
            </h1>
            <p className="text-xl md:text-2xl font-open-sans mb-8 text-white/90">
              Your go-to truck and plant service partner in Botswana & the SADC region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="font-poppins text-lg">
                Meet Our Team
              </Button>
              <Button variant="outline" size="lg" className="font-poppins text-lg border-white text-blue-500 hover:bg-blue-500 hover:text-white">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-8 text-center">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>
            <div className="text-lg font-open-sans text-foreground/80 leading-relaxed space-y-6">
              <p>
                Ultimate Trucking Solutions (UTS) is Botswana's premier truck, trailer, and plant equipment service hub, based in Gaborone. We are trusted by regional and local logistics companies for our cutting-edge roadside assistance, mobile mechanics, fleet efficiency solutions, and commitment to safer transport operations.
              </p>
              <p>
                Our mission is to empower transport operators with the tools, services, and technologies needed to reduce cost per kilometer, improve vehicle safety, and eliminate downtime.
              </p>
              <p>
                Whether your fleet moves within Botswana or across the SADC region, UTS is your partner in delivering smart, efficient, and safe fleet operations 24/7/365.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-8">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>
            <blockquote className="text-2xl md:text-3xl font-poppins font-semibold text-primary italic leading-relaxed">
              "To reduce fleet downtime, extend vehicle lifespan, and provide reliable, expert mechanical support to every trucker and transport company in the region."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-8 text-center">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-16"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-card-soft">
                  <CardContent className="p-8 text-center">
                    <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                      {value.title}
                    </h3>
                    <p className="font-open-sans text-foreground/80 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-8 text-center">
              Meet the Team
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>
            <p className="text-lg font-open-sans text-foreground/80 text-center mb-16 max-w-3xl mx-auto">
              Our team is made up of certified professionals with decades of combined experience in truck repair, engine diagnostics, and field support.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                    <div className="text-secondary">
                      {member.icon}
                    </div>
                  </div>
                  <h3 className="font-poppins font-semibold text-primary text-sm">
                    {member.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-8 text-center">
              Where We Work
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-16"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-poppins font-semibold text-primary mb-2">Workshop Location</h3>
                      <p className="font-open-sans text-foreground/80">Gaborone, Botswana</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-poppins font-semibold text-primary mb-2">Service Coverage</h3>
                      <p className="font-open-sans text-foreground/80">
                        We service Gaborone, Francistown, Lobatse, Palapye, Selebi Phikwe, Charles Hill, Ghanzi, Maun, Mahalapye, Martins Drift Border, Ramokgwebana Border, Kazungula Border and cross-border routes into South Africa, Namibia, Zambia, and Zimbabwe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-8 text-center">
                <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
                <p className="font-open-sans text-foreground/80">
                  Interactive service coverage map coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-8 text-center">
              Why Clients Trust Us
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-16"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="font-open-sans text-lg text-foreground/80">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Banner */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <blockquote className="text-2xl md:text-3xl font-poppins italic leading-relaxed mb-8">
              "Ultimate Trucking Solutions has kept our fleet running smoothly for over 3 years. They are more than a repair service, they are partners."
            </blockquote>
            <cite className="text-lg font-open-sans text-white/90">
              - Tebogo M., Fleet Supervisor, Francistown
            </cite>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-6">
              Need a dependable mechanical partner for your fleet?
            </h2>
            <p className="text-xl font-open-sans text-foreground/80 mb-8">
              Let's talk. We're ready to support your business, 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="font-poppins text-lg">
                Contact Us Today
              </Button>
              <Button variant="outline" size="lg" className="font-poppins text-lg">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;