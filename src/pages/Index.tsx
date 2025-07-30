import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EmergencyCTA from "@/components/EmergencyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <EmergencyCTA />
    </div>
  );
};

export default Index;
