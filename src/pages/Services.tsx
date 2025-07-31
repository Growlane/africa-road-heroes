import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import EmergencyCTA from "@/components/EmergencyCTA";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <Services />
      </div>
      <Footer />
      <EmergencyCTA />
    </div>
  );
};

export default ServicesPage;