import Header from "@/components/Header";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import EmergencyCTA from "@/components/EmergencyCTA";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <About />
        <WhyChooseUs />
      </div>
      <Footer />
      <EmergencyCTA />
    </div>
  );
};

export default AboutPage;