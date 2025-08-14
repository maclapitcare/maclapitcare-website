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

export default function MacBookProA1708ScreenReplacement() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MacBook Pro A1708 Screen Replacement Delhi NCR | 2017 13-inch Display Service | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MacBook Pro A1708 screen replacement Delhi NCR service. 2017 13-inch Non-Touch Bar model display repair. Expert service. Call 9211720790");
    }
  }, []);

  const compatibleModels = [
    "MacBook Pro 13-inch (2017) Non-Touch Bar",
    "EMC 3164",
    "MPXQ2 (Space Gray, 128GB)",
    "MPXR2 (Silver, 128GB)",
    "MPXT2 (Space Gray, 256GB)", 
    "MPXU2 (Silver, 256GB)",
    "MPXY2 (Space Gray, 512GB)",
    "MPXW2 (Silver, 512GB)",
    "Mid 2017 Intel i5 models",
    "Dual-core 7th generation Intel"
  ];

  const screenSpecs = [
    { spec: "Display Size", value: "13.3-inch IPS Retina Display" },
    { spec: "Resolution", value: "2560 x 1600 pixels (227 PPI)" },
    { spec: "Technology", value: "LED-backlit IPS with wide color P3" },
    { spec: "Brightness", value: "500 nits maximum brightness" },
    { spec: "Special Features", value: "Wide color (P3), True Tone technology" },
    { spec: "Touch Bar", value: "None - Traditional F-key row" }
  ];

  const damageSymptoms = [
    {
      symptom: "LCD Panel Cracking",
      description: "Visible cracks or damage to the 2017 Retina display",
      severity: "High",
      urgency: "Complete LCD replacement required"
    },
    {
      symptom: "Backlight Failure",
      description: "Display appears very dim or completely dark",
      severity: "High",
      urgency: "LED backlight array needs replacement"
    },
    {
      symptom: "Flexgate Display Issues",
      description: "Stage light effect or bottom portion of screen dark",
      severity: "High",
      urgency: "Known A1708 cable wear issue requiring immediate fix"
    },
    {
      symptom: "Color Distortion",
      description: "Pink, green, or blue tint across display",
      severity: "Medium",
      urgency: "LCD panel degradation in 2017 model"
    },
    {
      symptom: "Dead Pixel Clusters",
      description: "Multiple bright or dark spots on display",
      severity: "Medium",
      urgency: "Age-related LCD pixel failure"
    },
    {
      symptom: "Display Flickering",
      description: "Screen flickers or shows intermittent lines",
      severity: "Medium",
      urgency: "Intel graphics driver or LCD connection issue"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "A1708 Model Verification",
      description: "Confirm 2017 Non-Touch Bar model identification"
    },
    {
      step: "2",
      title: "Flexgate Assessment",
      description: "Check for stage light effect and cable wear"
    },
    {
      step: "3",
      title: "Careful Disassembly",
      description: "Remove display assembly with 2017-specific procedure"
    },
    {
      step: "4", 
      title: "Display Replacement",
      description: "Install genuine A1708 compatible display assembly"
    },
    {
      step: "5",
      title: "Cable Upgrade",
      description: "Install improved display cables to prevent flexgate"
    },
    {
      step: "6",
      title: "Quality Testing",
      description: "Test True Tone, color accuracy, and display functionality"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "A1708 Specialists",
      description: "Expert experience with 2017 MacBook Pro display issues"
    },
    {
      icon: Shield,
      title: "Flexgate Prevention",
      description: "Upgraded cables to prevent common A1708 display problems"
    },
    {
      icon: Wrench,
      title: "2017 Model Expertise",
      description: "Specialized knowledge of Intel-based MacBook Pro repairs"
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Most A1708 repairs completed within 4-6 hours"
    },
    {
      icon: Star,
      title: "3-Month Warranty",
      description: "Complete warranty on display and cable upgrades"
    },
    {
      icon: Zap,
      title: "Great Value",
      description: "Professional service with genuine parts and warranty"
    }
  ];

  const customerReviews = [
    {
      name: "Abhishek Verma",
      location: "Sector 62, Noida",
      rating: 5,
      review: "My A1708 had the dreaded stage light effect at bottom. They replaced display with upgraded cables and it's been perfect for 6 months. No more flexgate issues!",
      device: "MacBook Pro A1708 2017"
    },
    {
      name: "Sunita Sharma",
      location: "DLF Phase 1, Gurgaon", 
      rating: 5,
      review: "Cracked my A1708 display badly. They replaced it professionally and True Tone works perfectly. Much better than Apple Store pricing. Highly recommended!",
      device: "MacBook Pro 13-inch 2017"
    },
    {
      name: "Nikhil Jain",
      location: "Lajpat Nagar, Delhi",
      rating: 5,
      review: "Had backlight failure on my A1708. They diagnosed and replaced the display assembly same day. Display quality is excellent and no issues so far. Great service!",
      device: "A1708 Space Gray"
    }
  ];

  const faqs = [
    {
      question: "What is the flexgate issue in MacBook Pro A1708?",
      answer: "Flexgate is a common A1708 problem where display cables wear out, causing a 'stage light' effect at the bottom of screen or complete display failure. We install upgraded cables during replacement to prevent this issue."
    },
    {
      question: "How much does MacBook Pro A1708 screen replacement cost?",
      answer: "Our A1708 screen replacement starts from  with 3-month warranty. This includes genuine display assembly, upgraded cables for flexgate prevention, and professional installation."
    },
    {
      question: "Is A1708 the Non-Touch Bar MacBook Pro model?",
      answer: "Yes, A1708 is the 2017 MacBook Pro 13-inch without Touch Bar, featuring traditional function keys. It has different display specifications and repair requirements compared to Touch Bar models."
    },
    {
      question: "Will True Tone work after A1708 screen replacement?",
      answer: "Yes, our genuine A1708 compatible displays fully support True Tone technology. We perform complete calibration to ensure proper color temperature adjustment functionality."
    },
    {
      question: "How long does A1708 screen replacement take?",
      answer: "MacBook Pro A1708 screen replacement typically takes 4-6 hours including flexgate cable upgrade. We offer same-day service and free pickup/delivery across Delhi NCR."
    },
    {
      question: "Can you prevent flexgate from happening again?",
      answer: "Yes, we install improved display cables with better flex tolerance during A1708 screen replacement. This significantly reduces the risk of future flexgate issues compared to original cables."
    }
  ];

  return (
    <>
      <ServiceBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Badge className="bg-white/20 text-white">A1708 2017</Badge>
                  <Badge className="bg-white/20 text-white">Non-Touch Bar</Badge>
                  <Badge className="bg-white/20 text-white"></Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Pro A1708<br />
                  <span className="text-emerald-200">2017 Screen Repair</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Professional MacBook Pro 2017 (A1708) display replacement service. 
                  Genuine 13.3-inch Retina display with flexgate prevention, True Tone 
                  support, and upgraded cables .
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
                    className="bg-white text-emerald-900 hover:bg-gray-100 border-white"
                    onClick={handleBookService}
                  >
                    Book A1708 Repair
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="lg:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">A1708 2017 Details</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Model:</span>
                      <span className="font-semibold">MacBook Pro 2017</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Display:</span>
                      <span className="font-semibold">13.3" IPS Retina</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Touch Bar:</span>
                      <span className="font-semibold">None (F-keys)</span>
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
                      <span className="text-gray-300">Flexgate Fix:</span>
                      <span className="font-semibold text-green-400">Included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of component with A1708-specific content */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Fix Your MacBook Pro A1708 Screen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional 2017 display replacement with flexgate prevention with professional installation 
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                className="bg-white text-emerald-900 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: {CONTACT_INFO.phone1}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-emerald-900 hover:bg-gray-100 border-white"
                onClick={() => window.location.href = `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hi, I need MacBook Pro A1708 screen replacement service`}
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