import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const EmergencyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-cta text-white shadow-2xl border-t-4 border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-montserrat font-bold text-lg mb-1">
              🛠️ Need Roadside Help or Emergency Repairs?
            </h3>
            <p className="font-open-sans text-white/90 text-sm">
              Primary: +267 7166 9889 | Secondary: +267 7655 0659
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="default" 
              className="bg-white text-secondary border-white hover:bg-white/90 font-poppins font-semibold"
              onClick={() => window.open('tel:+0026771669889')}
            >
              <Phone className="w-4 h-4" />
              Call: +267 7166 9889
            </Button>
            
            <Button 
              variant="outline" 
              size="default" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-poppins"
              onClick={() => window.open('https://wa.me/0026771669889?text=Hello%2C%20I%20need%20roadside%20assistance%20%28Primary%29%20or%20+0026776550659%20%28Secondary%29')}
            >
              <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCTA;