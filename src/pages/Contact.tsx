import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EmergencyCTA from "@/components/EmergencyCTA";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
      <EmergencyCTA />
    </div>
  );
};

export default ContactPage;