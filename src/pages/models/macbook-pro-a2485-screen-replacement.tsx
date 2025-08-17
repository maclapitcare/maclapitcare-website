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

export default function MacBookProA2485ScreenReplacement() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MacBook Pro A2485 Screen Replacement Delhi NCR | 16-inch M1 Pro/Max XDR  | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MacBook Pro A2485 screen replacement Delhi NCR. 16-inch M1 Pro/Max Liquid Retina XDR display repair with mini-LED technology. Expert service. Call 9211720790");
    }
  }, []);

  const compatibleModels = [
    "MacBook Pro 16-inch M1 Pro (2021)",
    "MacBook Pro 16-inch M1 Max (2021)",
    "EMC 3652",
    "MK183 (Space Gray, M1 Pro, 512GB)",
    "MK193 (Silver, M1 Pro, 512GB)",
    "MK1A3 (Space Gray, M1 Pro, 1TB)",
    "MK1E3 (Silver, M1 Pro, 1TB)",
    "MK1F3 (Space Gray, M1 Max, 1TB)",
    "MK1H3 (Silver, M1 Max, 1TB)",
    "MK233 (Space Gray, M1 Max, 2TB)",
    "MK263 (Silver, M1 Max, 2TB)",
    "MK2A3 (Space Gray, M1 Max, 4TB)",
    "MK2H3 (Silver, M1 Max, 4TB)"
  ];

  const screenSpecs = [
    { spec: "Display Size", value: "16.2-inch Liquid Retina XDR" },
    { spec: "Resolution", value: "3456 x 2234 pixels (254 PPI)" },
    { spec: "Technology", value: "Mini-LED backlight with 2500+ zones" },
    { spec: "Brightness", value: "1000 nits sustained, 1600 nits peak HDR" },
    { spec: "Special Features", value: "ProMotion 120Hz, P3 wide color, True Tone" },
    { spec: "Contrast Ratio", value: "1,000,000:1 with advanced mini-LED" }
  ];

  const damageSymptoms = [
    {
      symptom: "Advanced Mini-LED Failure",
      description: "Multiple local dimming zones not functioning properly",
      severity: "High",
      urgency: "Premium 2500+ zone mini-LED array requires replacement"
    },
    {
      symptom: "16-inch XDR Cracking",
      description: "Physical damage to large 16.2-inch premium display",
      severity: "High",
      urgency: "Complete XDR display assembly replacement needed"
    },
    {
      symptom: "ProMotion Performance Issues",
      description: "120Hz variable refresh rate stuttering or not working",
      severity: "High",
      urgency: "M1 Pro/Max advanced display controller malfunction"
    },
    {
      symptom: "HDR Content Problems",
      description: "Cannot display proper HDR content or peak brightness",
      severity: "High",
      urgency: "Mini-LED calibration or hardware failure"
    },
    {
      symptom: "Large Screen Uniformity",
      description: "Uneven brightness or color across 16-inch display",
      severity: "Medium",
      urgency: "Professional large display calibration required"
    },
    {
      symptom: "Notch Integration Issues",
      description: "Camera notch area affecting display functionality",
      severity: "High",
      urgency: "Complex 16-inch notch integration repair needed"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "A2485 16-inch Verification",
      description: "Confirm 16.2-inch XDR display and M1 Pro/Max variant"
    },
    {
      step: "2",
      title: "Advanced Mini-LED Testing",
      description: "Test 2500+ local dimming zones and HDR performance"
    },
    {
      step: "3",
      title: "Large Display Disassembly",
      description: "Specialized removal of 16-inch XDR display assembly"
    },
    {
      step: "4",
      title: "16-inch XDR Installation",
      description: "Install genuine A2485 large format XDR display"
    },
    {
      step: "5",
      title: "M1 Pro/Max Configuration",
      description: "Advanced chip integration for 16-inch display"
    },
    {
      step: "6",
      title: "Professional XDR Calibration",
      description: "2500+ zones, ProMotion, HDR, and color calibration"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "A2485 16-inch Experts",
      description: "Specialized experience with large format XDR technology"
    },
    {
      icon: Shield,
      title: "Genuine 16-inch XDR",
      description: "Authentic large displays with 2500+ mini-LED zones"
    },
    {
      icon: Wrench,
      title: "Advanced M1 Integration",
      description: "Expert M1 Pro/Max chip and large display configuration"
    },
    {
      icon: Clock,
      title: "Professional Timeline",
      description: "Complex A2485 repairs completed within 2-3 days"
    },
    {
      icon: Star,
      title: "3-Month Warranty",
      description: "Complete warranty on large XDR display and zones"
    },
    {
      icon: Zap,
      title: "Premium Savings",
      description: "Professional service with genuine parts and warranty"
    }
  ];

  const customerReviews = [
    {
      name: "Rajesh Gupta",
      location: "Sector 18, Noida",
      rating: 5,
      review: "My A2485 16-inch had massive mini-LED failure - entire sections were dark. They replaced with genuine XDR display and the HDR performance is incredible. Professional service!",
      device: "MacBook Pro A2485 16-inch"
    },
    {
      name: "Anita Sharma",
      location: "DLF Phase 3, Gurgaon",
      rating: 5,
      review: "Cracked my expensive A2485 XDR display during travel. They handled the large 16-inch replacement professionally and quality is indistinguishable from original. Worth it!",
      device: "MacBook Pro 16-inch M1 Max"
    },
    {
      name: "Karan Singh",
      location: "Lodhi Road, Delhi",
      rating: 5,
      review: "Had ProMotion issues on my A2485 16-inch. They diagnosed M1 Max display controller problem and replaced entire assembly. 120Hz works perfectly now. Excellent work!",
      device: "A2485 Space Gray M1 Pro"
    }
  ];

  const faqs = [
    {
      question: "Why is A2485 16-inch screen replacement the most expensive?",
      answer: "A2485 features the largest and most advanced Liquid Retina XDR display with 2500+ mini-LED zones, 16.2-inch size, 1600 nits peak HDR, and complex M1 Pro/Max integration. Despite premium costs, we're still 87% cheaper than Apple Store pricing."
    },
    {
      question: "How much does MacBook Pro A2485 screen replacement cost?",
      answer: "Our A2485 16-inch XDR screen replacement starts from  with 3-month warranty. This includes genuine large format XDR display, advanced mini-LED calibration, M1 Pro/Max integration, and professional installation."
    },
    {
      question: "Will all 2500+ mini-LED zones work after A2485 replacement?",
      answer: "Yes, our genuine A2485 displays include full 2500+ zone mini-LED functionality with complete local dimming control. We perform extensive calibration to ensure proper HDR performance across the large 16-inch screen."
    },
    {
      question: "Is A2485 compatible with both M1 Pro and M1 Max configurations?",
      answer: "Yes, A2485 display assemblies work with all M1 Pro and M1 Max variants of the 16-inch MacBook Pro 2021, including 32-core and 64-core GPU configurations. Display specifications are identical across all chip variants."
    },
    {
      question: "How long does A2485 16-inch screen replacement take?",
      answer: "MacBook Pro A2485 screen replacement typically takes 2-3 days due to complex large display handling, 2500+ zone calibration, and M1 Pro/Max integration. We may need special ordering for immediate component availability."
    },
    {
      question: "Can you repair individual mini-LED zones in A2485?",
      answer: "Mini-LED arrays are fully integrated into the A2485 display assembly and cannot be repaired individually. If significant zones fail, complete 16-inch XDR display replacement is necessary to restore full functionality."
    }
  ];

  return (
    <>
      <ServiceBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Badge className="bg-white/20 text-white">A2485 16-inch</Badge>
                  <Badge className="bg-white/20 text-white">XDR 2500+ Zones</Badge>
                  <Badge className="bg-white/20 text-white"></Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Pro A2485<br />
                  <span className="text-purple-200">16" XDR Display</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Professional MacBook Pro 16-inch (A2485) display replacement service. 
                  Genuine Liquid Retina XDR with 2500+ mini-LED zones, ProMotion 120Hz, 
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
                    className="bg-white text-purple-900 hover:bg-gray-100 border-white"
                    onClick={handleBookService}
                  >
                    Book A2485 Repair
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">A2485 16-inch Specs</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Model:</span>
                      <span className="font-semibold">MacBook Pro 16" 2021</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Display:</span>
                      <span className="font-semibold">16.2" XDR Mini-LED</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Zones:</span>
                      <span className="font-semibold">2500+ Mini-LED</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Service Time:</span>
                      <span className="font-semibold text-green-400">6-8 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Mini-LED:</span>
                      <span className="font-semibold text-green-400">Included</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Warranty:</span>
                      <span className="font-semibold text-green-400">3 Months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of component with A2485-specific content */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Fix Your MacBook Pro A2485 16-inch XDR Screen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional 16-inch Liquid Retina XDR replacement with expert installation and warranty
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
                onClick={() => window.location.href = `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi, I need MacBook Pro A2485 16-inch XDR screen replacement service`}
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