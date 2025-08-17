import { useEffect, useState } from 'react';
import { Phone, Star, CheckCircle, Shield, Clock, Wrench, MapPin, Calendar, ArrowRight, AlertTriangle, Award, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ServiceBookingModal from '@/components/forms/service-booking-modal';

const CONTACT_INFO = {
  phone1: "9211720790",
  phone2: "8750160550",
  whatsapp: "919211720790"
};

export default function MacBookProA1706ScreenReplacement() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MacBook Pro A1706 Screen Replacement Delhi NCR | 2017 Touch Bar Display  | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MacBook Pro A1706 screen replacement Delhi NCR service. 2017 13-inch Touch Bar model display repair with flexgate fix. Call 9211720790");
    }
  }, []);

  const compatibleModels = [
    "MacBook Pro 13-inch (2017) Touch Bar",
    "EMC 3163",
    "MPXV2 (Space Gray, 256GB)",
    "MPXX2 (Silver, 256GB)",
    "MPXW2 (Space Gray, 512GB)",
    "MPXY2 (Silver, 512GB)",
    "Mid 2017 Intel i5/i7 Touch Bar",
    "Dual-core 7th generation Intel with Touch Bar"
  ];

  const screenSpecs = [
    { spec: "Display Size", value: "13.3-inch IPS Retina Display" },
    { spec: "Resolution", value: "2560 x 1600 pixels (227 PPI)" },
    { spec: "Technology", value: "LED-backlit IPS with wide color P3" },
    { spec: "Brightness", value: "500 nits maximum brightness" },
    { spec: "Special Features", value: "Wide color (P3), True Tone, Touch Bar" },
    { spec: "Touch Bar", value: "OLED Multi-Touch strip integrated" }
  ];

  const damageSymptoms = [
    {
      symptom: "Touch Bar + Display Issues",
      description: "Touch Bar malfunction combined with display problems",
      severity: "High",
      urgency: "Integrated Touch Bar requires complete display replacement"
    },
    {
      symptom: "Severe Flexgate",
      description: "Stage light effect or complete bottom display blackout",
      severity: "High",
      urgency: "Critical A1706 cable wear requiring immediate repair"
    },
    {
      symptom: "LCD Cracking with Touch Bar",
      description: "Physical damage affecting both main display and Touch Bar",
      severity: "High",
      urgency: "Complete display assembly replacement needed"
    },
    {
      symptom: "Touch Bar Responsiveness",
      description: "Touch Bar not responding or displaying incorrectly",
      severity: "High",
      urgency: "OLED Touch Bar integration failure"
    },
    {
      symptom: "Color Distortion",
      description: "Pink, green, or blue tint with Touch Bar flickering",
      severity: "Medium",
      urgency: "LCD and OLED panel degradation"
    },
    {
      symptom: "Backlight Failure",
      description: "Main display dim while Touch Bar still functions",
      severity: "High",
      urgency: "LED backlight array replacement required"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "A1706 Touch Bar Verification",
      description: "Confirm 2017 Touch Bar model and OLED functionality"
    },
    {
      step: "2",
      title: "Flexgate + Touch Bar Assessment",
      description: "Diagnose both display and Touch Bar integration issues"
    },
    {
      step: "3",
      title: "Complex Disassembly",
      description: "Careful removal of Touch Bar integrated display assembly"
    },
    {
      step: "4",
      title: "Touch Bar Display Installation",
      description: "Install genuine A1706 display with OLED Touch Bar"
    },
    {
      step: "5",
      title: "Cable Upgrade & Touch Bar Setup",
      description: "Install improved cables and calibrate Touch Bar"
    },
    {
      step: "6",
      title: "Complete System Testing",
      description: "Test display, Touch Bar, True Tone, and all functions"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "A1706 Touch Bar Experts",
      description: "Specialized experience with 2017 Touch Bar integration"
    },
    {
      icon: Shield,
      title: "Flexgate + Touch Bar Fix",
      description: "Complete solution for both display and Touch Bar issues"
    },
    {
      icon: Wrench,
      title: "OLED Touch Bar Calibration",
      description: "Expert Touch Bar setup and responsiveness optimization"
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Most A1706 repairs completed within 6-8 hours"
    },
    {
      icon: Star,
      title: "3-Month Warranty",
      description: "Complete warranty on display and Touch Bar functionality"
    },
    {
      icon: Zap,
      title: "Excellent Value",
      description: "Professional service with genuine parts and warranty"
    }
  ];

  const customerReviews = [
    {
      name: "Ravi Agarwal",
      location: "Sector 125, Noida",
      rating: 5,
      review: "My A1706 had both flexgate and Touch Bar issues. They replaced entire display assembly and both problems are completely fixed. Touch Bar works like new!",
      device: "MacBook Pro A1706 2017"
    },
    {
      name: "Priyanka Singh",
      location: "Golf Course Road, Gurgaon",
      rating: 5,
      review: "Cracked screen with non-responsive Touch Bar on my A1706. They installed genuine display with perfect Touch Bar calibration. Professional service at great price!",
      device: "MacBook Pro 13-inch Touch Bar"
    },
    {
      name: "Kartik Sharma",
      location: "Karol Bagh, Delhi",
      rating: 5,
      review: "Had severe stage light effect on my A1706. They replaced display with upgraded cables and Touch Bar works perfectly. No more flexgate worries. Excellent work!",
      device: "A1706 Space Gray"
    }
  ];

  const faqs = [
    {
      question: "What makes A1706 Touch Bar screen replacement complex?",
      answer: "A1706 features integrated OLED Touch Bar that's connected to the main display assembly. This requires specialized handling during replacement and complete Touch Bar calibration to ensure proper functionality."
    },
    {
      question: "How much does MacBook Pro A1706 screen replacement cost?",
      answer: "Our A1706 Touch Bar screen replacement starts from  with 3-month warranty. This includes genuine display assembly, Touch Bar integration, upgraded cables, and professional calibration."
    },
    {
      question: "Will Touch Bar work properly after A1706 screen replacement?",
      answer: "Yes, our genuine A1706 displays include fully functional OLED Touch Bar. We perform complete Touch Bar calibration including brightness, responsiveness, and app-specific functionality testing."
    },
    {
      question: "Is flexgate common in A1706 models?",
      answer: "Yes, A1706 models are highly susceptible to flexgate due to thin display cables. We install improved cables during replacement to prevent future flexgate issues while maintaining Touch Bar functionality."
    },
    {
      question: "How long does A1706 Touch Bar screen replacement take?",
      answer: "MacBook Pro A1706 screen replacement typically takes 6-8 hours due to Touch Bar integration complexity and flexgate cable upgrade. We offer same-day service with free pickup/delivery."
    },
    {
      question: "Can you fix just the Touch Bar without replacing the screen?",
      answer: "Touch Bar is integrated into the display assembly on A1706 models. If either component fails, complete display assembly replacement is typically required to restore full functionality."
    }
  ];

  return (
    <>
      <ServiceBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Badge className="bg-white/20 text-white">A1706 2017</Badge>
                  <Badge className="bg-white/20 text-white">Touch Bar</Badge>
                  <Badge className="bg-white/20 text-white"></Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Pro A1706<br />
                  <span className="text-purple-200">Touch Bar Display</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Professional MacBook Pro 2017 (A1706) display replacement service. 
                  Genuine 13.3-inch Retina display with integrated OLED Touch Bar, 
                  flexgate prevention, and complete calibration .
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call {CONTACT_INFO.phone1}
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white text-purple-900 hover:bg-gray-100 border-white"
                    onClick={handleBookService}
                  >
                    Book A1706 Repair
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">A1706 Touch Bar Info</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Model:</span>
                      <span className="font-semibold">MacBook Pro 2017</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Display:</span>
                      <span className="font-semibold">13.3" + OLED Touch Bar</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Touch Bar:</span>
                      <span className="font-semibold">Integrated OLED</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Service Time:</span>
                      <span className="font-semibold text-green-400">Same Day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Warranty:</span>
                      <span className="font-semibold text-green-400">3 Months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Touch Bar:</span>
                      <span className="font-semibold text-green-400">Included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of component with A1706-specific content */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Fix Your MacBook Pro A1706 Touch Bar Screen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional Touch Bar display replacement with professional installation and flexgate prevention
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                className="bg-white text-purple-900 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: {CONTACT_INFO.phone1}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-purple-900 hover:bg-gray-100 border-white"
                onClick={() => window.location.href = `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi, I need MacBook Pro A1706 Touch Bar screen replacement service`}
              >
                WhatsApp Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}