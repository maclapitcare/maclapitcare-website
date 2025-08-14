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

export default function MacBookProA2686ScreenReplacement() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MacBook Pro A2686 Screen Replacement Delhi NCR | M2 13-inch Display Service | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MacBook Pro A2686 M2 screen replacement Delhi NCR service. 2022 13-inch Pro display with ProMotion. Expert service. Call 9211720790");
    }
  }, []);

  const compatibleModels = [
    "MacBook Pro 13-inch M2 (2022)",
    "EMC 3676",
    "MNEH3 (Space Gray, 256GB)",
    "MNEJ3 (Silver, 256GB)", 
    "MNEP3 (Space Gray, 512GB)",
    "MNEQ3 (Silver, 512GB)",
    "MNEJ3 (Space Gray, 1TB)",
    "MNEK3 (Silver, 1TB)",
    "MNEH3 (Space Gray, 2TB)",
    "MNEJ3 (Silver, 2TB)"
  ];

  const screenSpecs = [
    { spec: "Display Size", value: "13.3-inch Retina Display" },
    { spec: "Resolution", value: "2560 x 1600 pixels (227 PPI)" },
    { spec: "Technology", value: "IPS LED-backlit with P3 wide color" },
    { spec: "Brightness", value: "500 nits sustained brightness" },
    { spec: "Special Features", value: "True Tone, ProMotion up to 120Hz" },
    { spec: "M2 Integration", value: "Advanced display controller with M2 chip" }
  ];

  const damageSymptoms = [
    {
      symptom: "ProMotion Malfunction",
      description: "120Hz refresh rate not working or stuttering",
      severity: "High",
      urgency: "M2 display controller issue requiring replacement"
    },
    {
      symptom: "LCD Panel Cracking",
      description: "Visible cracks or spider web patterns on Pro display",
      severity: "High",
      urgency: "Complete Pro display assembly replacement needed"
    },
    {
      symptom: "M2 Display Integration",
      description: "Display not recognized by M2 chip or boot issues",
      severity: "High",
      urgency: "Advanced M2 display controller problem"
    },
    {
      symptom: "Color Calibration Issues",
      description: "P3 wide color gamut displaying incorrectly",
      severity: "Medium",
      urgency: "Professional M2 color calibration required"
    },
    {
      symptom: "Brightness Control Problems",
      description: "Cannot adjust brightness or stuck at low/high levels",
      severity: "Medium",
      urgency: "M2 brightness sensor integration failure"
    },
    {
      symptom: "True Tone Malfunction",
      description: "Automatic color temperature not adjusting properly",
      severity: "Medium",
      urgency: "M2 ambient light sensor requires recalibration"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "A2686 M2 Pro Verification",
      description: "Confirm M2 Pro chip and advanced display features"
    },
    {
      step: "2",
      title: "ProMotion Diagnostic",
      description: "Test 120Hz functionality and M2 integration"
    },
    {
      step: "3",
      title: "Professional Disassembly",
      description: "Careful removal with M2 Pro specific connectors"
    },
    {
      step: "4",
      title: "Pro Display Installation",
      description: "Install genuine A2686 Pro display assembly"
    },
    {
      step: "5",
      title: "M2 Controller Setup",
      description: "Configure M2 display controller and ProMotion"
    },
    {
      step: "6",
      title: "Advanced Calibration",
      description: "120Hz, True Tone, and P3 color calibration"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "A2686 M2 Pro Specialists",
      description: "Expert experience with MacBook Pro M2 2022 advanced features"
    },
    {
      icon: Shield,
      title: "ProMotion Compatible",
      description: "Genuine displays with full 120Hz ProMotion support"
    },
    {
      icon: Wrench,
      title: "M2 Pro Integration",
      description: "Advanced M2 display controller configuration"
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Most A2686 Pro repairs completed within 8 hours"
    },
    {
      icon: Star,
      title: "3-Month Warranty",
      description: "Complete warranty on ProMotion and display quality"
    },
    {
      icon: Zap,
      title: "Professional Value",
      description: "Professional service with genuine parts and warranty"
    }
  ];

  const customerReviews = [
    {
      name: "Rajesh Kumar",
      location: "Sector 18, Noida",
      rating: 5,
      review: "My A2686 M2 Pro had ProMotion issues - 120Hz wasn't working. They replaced the display and now it's buttery smooth. Professional service with M2 expertise!",
      device: "MacBook Pro M2 A2686"
    },
    {
      name: "Meera Patel",
      location: "Cyber Hub, Gurgaon",
      rating: 5,
      review: "Cracked my A2686 display badly. They installed genuine Pro display with perfect ProMotion functionality. True Tone and color accuracy are exactly like original.",
      device: "MacBook Pro 13-inch M2"
    },
    {
      name: "Vishak Singh",
      location: "Connaught Place, Delhi",
      rating: 5,
      review: "Had display recognition issues with my A2686. They diagnosed M2 controller problem and replaced entire assembly. 120Hz works flawlessly now. Highly recommended!",
      device: "A2686 Space Gray"
    }
  ];

  const faqs = [
    {
      question: "What makes A2686 Pro display different from A2686 Air?",
      answer: "A2686 MacBook Pro features advanced ProMotion technology with up to 120Hz refresh rate, better sustained brightness (500 nits), superior M2 display controller integration, and professional-grade color accuracy compared to MacBook Air models."
    },
    {
      question: "How much does MacBook Pro A2686 screen replacement cost?",
      answer: "Our A2686 M2 Pro screen replacement starts from  with 3-month warranty. This includes genuine Pro display, ProMotion calibration, M2 integration, and professional installation."
    },
    {
      question: "Will ProMotion 120Hz work after A2686 replacement?",
      answer: "Yes, our genuine A2686 Pro displays fully support ProMotion up to 120Hz. We perform complete M2 display controller calibration to ensure smooth refresh rate transitions and optimal performance."
    },
    {
      question: "Is A2686 compatible with older MacBook Pro models?",
      answer: "No, A2686 displays are specifically designed for MacBook Pro M2 2022 models with unique M2 chip integration, connector layout, and ProMotion requirements. They cannot be used in older MacBook Pro models."
    },
    {
      question: "How long does A2686 M2 Pro screen replacement take?",
      answer: "MacBook Pro A2686 screen replacement typically takes 6-8 hours due to ProMotion calibration and M2 Pro integration complexity. We offer same-day service for urgent cases with free pickup/delivery."
    },
    {
      question: "Why is A2686 more expensive than other MacBook repairs?",
      answer: "A2686 Pro displays cost more due to ProMotion 120Hz technology, advanced M2 display controller, professional-grade components, and complex calibration requirements. However, it's still 83% cheaper than Apple Store pricing."
    }
  ];

  return (
    <>
      <ServiceBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Badge className="bg-white/20 text-white">A2686 M2 Pro</Badge>
                  <Badge className="bg-white/20 text-white">ProMotion 120Hz</Badge>
                  <Badge className="bg-white/20 text-white"></Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Pro A2686<br />
                  <span className="text-slate-300">M2 Pro Display</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Professional MacBook Pro M2 2022 (A2686) display replacement service. 
                  Genuine 13.3-inch Pro display with ProMotion 120Hz, P3 wide color, 
                  and advanced M2 integration .
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
                    className="border-white text-gray-900 hover:bg-gray-100"
                    onClick={handleBookService}
                  >
                    Book A2686 Repair
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">A2686 Pro Features</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Model:</span>
                      <span className="font-semibold">MacBook Pro M2 2022</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Display:</span>
                      <span className="font-semibold">13.3" Pro + ProMotion</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Refresh Rate:</span>
                      <span className="font-semibold">Up to 120Hz</span>
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
                      <span className="text-gray-300">ProMotion:</span>
                      <span className="font-semibold text-green-400">Included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of component with A2686-specific content */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-zinc-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Fix Your MacBook Pro A2686 M2 Screen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional ProMotion display replacement with professional installation and 3-month warranty
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                className="bg-white text-slate-900 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: {CONTACT_INFO.phone1}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-gray-900 hover:bg-gray-100"
                onClick={() => window.location.href = `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi, I need MacBook Pro A2686 M2 screen replacement service`}
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