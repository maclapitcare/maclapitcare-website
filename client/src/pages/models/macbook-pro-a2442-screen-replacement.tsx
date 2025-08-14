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

export default function MacBookProA2442ScreenReplacement() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MacBook Pro A2442 Screen Replacement Delhi NCR | 14-inch M1 Pro Display  | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MacBook Pro A2442 screen replacement Delhi NCR service. 14-inch M1 Pro Liquid Retina XDR display repair with ProMotion. Call 9211720790");
    }
  }, []);

  const compatibleModels = [
    "MacBook Pro 14-inch M1 Pro (2021)",
    "MacBook Pro 14-inch M1 Max (2021)",
    "EMC 3651",
    "MKGP3 (Space Gray, M1 Pro, 512GB)",
    "MKGR3 (Silver, M1 Pro, 512GB)",
    "MKGT3 (Space Gray, M1 Pro, 1TB)",
    "MKGQ3 (Silver, M1 Pro, 1TB)",
    "MKGX3 (Space Gray, M1 Max, 1TB)",
    "MKH03 (Silver, M1 Max, 1TB)",
    "MKGZ3 (Space Gray, M1 Max, 2TB)",
    "MKH13 (Silver, M1 Max, 2TB)"
  ];

  const screenSpecs = [
    { spec: "Display Size", value: "14.2-inch Liquid Retina XDR" },
    { spec: "Resolution", value: "3024 x 1964 pixels (254 PPI)" },
    { spec: "Technology", value: "Mini-LED backlight with 1000+ zones" },
    { spec: "Brightness", value: "1000 nits sustained, 1600 nits peak HDR" },
    { spec: "Special Features", value: "ProMotion 120Hz, P3 wide color, True Tone" },
    { spec: "Contrast Ratio", value: "1,000,000:1 with mini-LED technology" }
  ];

  const damageSymptoms = [
    {
      symptom: "Mini-LED Backlight Failure",
      description: "Local dimming zones not working or uneven brightness",
      severity: "High",
      urgency: "Expensive mini-LED array requires complete replacement"
    },
    {
      symptom: "Liquid Retina XDR Cracking",
      description: "Physical damage to 14.2-inch premium display",
      severity: "High",
      urgency: "Complete XDR display assembly replacement needed"
    },
    {
      symptom: "ProMotion 120Hz Issues",
      description: "Variable refresh rate not working or stuttering",
      severity: "High",
      urgency: "M1 Pro/Max display controller malfunction"
    },
    {
      symptom: "HDR Peak Brightness Problems",
      description: "Cannot achieve 1600 nits peak brightness in HDR content",
      severity: "Medium",
      urgency: "Mini-LED calibration or hardware failure"
    },
    {
      symptom: "Notch Area Damage",
      description: "Damage around camera notch affecting display function",
      severity: "High",
      urgency: "Specialized notch integration repair required"
    },
    {
      symptom: "Color Accuracy Issues",
      description: "P3 wide color gamut or True Tone not functioning",
      severity: "Medium",
      urgency: "Professional XDR display calibration needed"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "A2442 XDR Verification",
      description: "Confirm 14-inch Liquid Retina XDR and M1 Pro/Max chip"
    },
    {
      step: "2",
      title: "Mini-LED Assessment",
      description: "Test local dimming zones and HDR functionality"
    },
    {
      step: "3",
      title: "Precision Disassembly",
      description: "Careful removal of premium XDR display assembly"
    },
    {
      step: "4",
      title: "XDR Display Installation",
      description: "Install genuine A2442 Liquid Retina XDR assembly"
    },
    {
      step: "5",
      title: "M1 Pro/Max Integration",
      description: "Configure advanced display controller settings"
    },
    {
      step: "6",
      title: "XDR Calibration",
      description: "Mini-LED zones, ProMotion, HDR, and color calibration"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "A2442 XDR Specialists",
      description: "Expert experience with 14-inch Liquid Retina XDR technology"
    },
    {
      icon: Shield,
      title: "Genuine XDR Display",
      description: "Authentic mini-LED displays with full HDR functionality"
    },
    {
      icon: Wrench,
      title: "M1 Pro/Max Integration",
      description: "Advanced chip integration and ProMotion calibration"
    },
    {
      icon: Clock,
      title: "Professional Service",
      description: "Complex A2442 repairs completed within 1-2 days"
    },
    {
      icon: Star,
      title: "3-Month Warranty",
      description: "Complete warranty on XDR display and mini-LED zones"
    },
    {
      icon: Zap,
      title: "Premium Value",
      description: "Professional service with genuine parts and warranty"
    }
  ];

  const customerReviews = [
    {
      name: "Arjun Malhotra",
      location: "Sector 44, Noida",
      rating: 5,
      review: "My A2442 14-inch had mini-LED failure - half the zones were dark. They replaced with genuine XDR display and HDR performance is incredible. Worth every penny!",
      device: "MacBook Pro A2442 14-inch"
    },
    {
      name: "Neha Kapoor",
      location: "Cyber City, Gurgaon",
      rating: 5,
      review: "Cracked my expensive A2442 XDR display. They handled it professionally and the replacement quality is indistinguishable from original. ProMotion works perfectly!",
      device: "MacBook Pro 14-inch M1 Max"
    },
    {
      name: "Siddharth Jain",
      location: "Khan Market, Delhi",
      rating: 5,
      review: "Had ProMotion issues on my A2442. They diagnosed M1 Max display controller problem and replaced entire assembly. 120Hz is buttery smooth now. Excellent service!",
      device: "A2442 Space Gray M1 Pro"
    }
  ];

  const faqs = [
    {
      question: "What makes A2442 screen replacement so expensive?",
      answer: "A2442 features premium Liquid Retina XDR technology with mini-LED backlight (1000+ zones), 1600 nits peak HDR brightness, ProMotion 120Hz, and complex M1 Pro/Max integration. Despite high component costs, we're still 85% cheaper than Apple Store."
    },
    {
      question: "How much does MacBook Pro A2442 screen replacement cost?",
      answer: "Our A2442 XDR screen replacement starts from  with 3-month warranty. This includes genuine Liquid Retina XDR display, mini-LED calibration, M1 Pro/Max integration, and professional installation."
    },
    {
      question: "Will mini-LED local dimming work after A2442 replacement?",
      answer: "Yes, our genuine A2442 displays include full mini-LED functionality with 1000+ local dimming zones. We perform complete calibration to ensure proper HDR performance and zone control."
    },
    {
      question: "Is A2442 compatible with both M1 Pro and M1 Max chips?",
      answer: "Yes, A2442 display assemblies work with both M1 Pro and M1 Max variants of the 14-inch MacBook Pro 2021. The display specifications and connectivity are identical between both chip options."
    },
    {
      question: "How long does A2442 XDR screen replacement take?",
      answer: "MacBook Pro A2442 screen replacement typically takes 1-2 days due to complex mini-LED calibration and M1 Pro/Max integration requirements. We may need to order specific components for immediate availability."
    },
    {
      question: "Can you repair just the mini-LED zones without full replacement?",
      answer: "Mini-LED arrays are integrated into the display assembly and cannot be repaired individually. If multiple zones fail, complete A2442 display replacement is necessary to restore full XDR functionality."
    }
  ];

  return (
    <>
      <ServiceBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-900 via-orange-800 to-amber-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Badge className="bg-white/20 text-white">A2442 14-inch</Badge>
                  <Badge className="bg-white/20 text-white">XDR Mini-LED</Badge>
                  <Badge className="bg-white/20 text-white"></Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Pro A2442<br />
                  <span className="text-orange-200">14" XDR Display</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Professional MacBook Pro 14-inch (A2442) display replacement service. 
                  Genuine Liquid Retina XDR with mini-LED backlight, ProMotion 120Hz, 
                  1600 nits HDR, and M1 Pro/Max integration .
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
                    className="bg-white text-orange-900 hover:bg-gray-100 border-white"
                    onClick={handleBookService}
                  >
                    Book A2442 Repair
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">A2442 XDR Specs</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Model:</span>
                      <span className="font-semibold">MacBook Pro 14" 2021</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Display:</span>
                      <span className="font-semibold">14.2" XDR Mini-LED</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Peak HDR:</span>
                      <span className="font-semibold">1600 nits</span>
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
                      <span className="text-gray-300">XDR Display:</span>
                      <span className="font-semibold text-green-400">85%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of component with A2442-specific content */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Fix Your MacBook Pro A2442 XDR Screen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional 14-inch Liquid Retina XDR replacement with professional installation and warranty
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                className="bg-white text-orange-900 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: {CONTACT_INFO.phone1}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-orange-900 hover:bg-gray-100 border-white"
                onClick={() => window.location.href = `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi, I need MacBook Pro A2442 14-inch XDR screen replacement service`}
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