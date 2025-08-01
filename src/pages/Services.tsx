import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import EmergencyCTA from "@/components/EmergencyCTA";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section with Truck Service Images and Blue Shade */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.4), rgba(37, 99, 235, 0.6)), url('/lovable-uploads/53b70c25-0495-4ac5-b6ee-da82a07f3f54.png')`
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold font-poppins mb-4">Our Services</h1>
            <p className="text-xl opacity-90">Professional truck repair and maintenance solutions for your fleet</p>
          </div>
        </div>
      </section>
      <div className="pt-8">
        <Services />
      </div>
      <Footer />
      <EmergencyCTA />
    </div>
  );
};

export default ServicesPage;