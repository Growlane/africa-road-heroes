import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  Clock,
  Send 
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl font-open-sans text-foreground/80 max-w-3xl mx-auto">
            Ready to keep your fleet moving? Get in touch with our expert team today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-card-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-primary mb-2">Workshop Location</h3>
                    <p className="font-open-sans text-foreground/80">
                      Gaborone, Botswana
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-primary mb-2">Phone</h3>
                    <div className="space-y-1">
                      <p className="font-open-sans text-foreground/80">
                        Primary: +0026771669889
                      </p>
                      <p className="font-open-sans text-foreground/80">
                        Secondary: +0026776550659
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-primary mb-2">Email</h3>
                    <div className="space-y-1">
                      <p className="font-open-sans text-foreground/80">
                        General: enquiries@uts.co.bw
                      </p>
                      <p className="font-open-sans text-foreground/80">
                        Sales: sales@uts.co.bw
                      </p>
                      <p className="font-open-sans text-foreground/80">
                        Operations: modmuzambi@uts.co.bw
                      </p>
                      <p className="font-open-sans text-foreground/80">
                        Director: director@uts.co.bw
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-primary mb-2">Service Area</h3>
                    <p className="font-open-sans text-foreground/80">
                      Botswana & All SADC Transit Routes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-soft">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-primary mb-2">Emergency Support</h3>
                    <p className="font-open-sans text-foreground/80">
                      24/7 Roadside Assistance Available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-card-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-poppins font-semibold text-primary mb-6">
                Get a Quote
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-poppins font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input 
                      placeholder="Your full name"
                      className="font-open-sans"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input 
                      placeholder="Your company"
                      className="font-open-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-poppins font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <Input 
                      placeholder="Your phone number"
                      className="font-open-sans"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="Your email address"
                      className="font-open-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-poppins font-medium text-foreground mb-2">
                    Type of Service Needed
                  </label>
                  <Input 
                    placeholder="e.g., Roadside assistance, Engine rebuild, etc."
                    className="font-open-sans"
                  />
                </div>

                <div>
                  <label className="block font-poppins font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Describe your needs or provide additional details..."
                    rows={5}
                    className="font-open-sans"
                  />
                </div>

                <Button variant="cta" size="lg" className="w-full font-poppins">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;