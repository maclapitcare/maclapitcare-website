import { useEffect, useState } from 'react';
import { Phone, Star, CheckCircle, Shield, Clock, Wrench, MapPin, Calendar, ArrowRight, AlertTriangle, Award, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ServiceBookingModal from '@/components/forms/service-booking-modal';
const appleModelNumberImage = "/apple_model_number_1754367071187.jpg";

const CONTACT_INFO = {
  phone1: "9211720790",
  phone2: "8750160550",
  whatsapp: "919211720790"
};

export default function MacBookAirA3115ScreenReplacement() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MacBook Air A3115 Display Replacement in Delhi NCR | Best Service | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert MacBook Air A3115 Display Replacement in Delhi NCR. MacLap IT Care offers professional M3 15-inch screen replacement with certified technicians, genuine parts & warranty. Call 9211720790");
    }
  }, []);

  const compatibleModels = [
    "MacBook Air 15-inch M3 (2024)",
    "EMC 3683",
    "MRYP3 (Midnight, 256GB)",
    "MRYL3 (Starlight, 256GB)", 
    "MRYX3 (Space Gray, 256GB)",
    "MRYF3 (Silver, 256GB)",
    "MRYT3 (Midnight, 512GB)",
    "MRYM3 (Starlight, 512GB)",
    "MRYY3 (Space Gray, 512GB)",
    "MRYG3 (Silver, 512GB)"
  ];

  const screenSpecs = [
    { spec: "Display Size", value: "15.3-inch Liquid Retina Display" },
    { spec: "Resolution", value: "2880 x 1864 pixels (224 PPI)" },
    { spec: "Technology", value: "IPS LED-backlit display" },
    { spec: "Color Gamut", value: "Wide color (P3), True Tone" },
    { spec: "Brightness", value: "500 nits typical" },
    { spec: "Refresh Rate", value: "60Hz standard" }
  ];

  const damageSymptoms = [
    {
      symptom: "Cracked LCD Screen",
      description: "Visible cracks or spider web patterns on display surface",
      severity: "High",
      urgency: "Immediate replacement needed"
    },
    {
      symptom: "Black Screen Issues", 
      description: "Display remains black but MacBook powers on",
      severity: "High",
      urgency: "Complete display failure"
    },
    {
      symptom: "Color Distortion",
      description: "Pink, green, or blue tint across display",
      severity: "Medium",
      urgency: "LCD panel degradation"
    },
    {
      symptom: "Flickering Display",
      description: "Screen flickers, strobes, or shows intermittent lines",
      severity: "Medium", 
      urgency: "Progressive failure pattern"
    },
    {
      symptom: "Dead Pixels",
      description: "Permanent black or bright spots on screen",
      severity: "Low",
      urgency: "Cosmetic issue affecting user experience"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "Diagnostic Assessment",
      description: "Complete A3115 display and system functionality evaluation"
    },
    {
      step: "2", 
      title: "Safe Disassembly",
      description: "Careful removal of A3115 display assembly and components"
    },
    {
      step: "3",
      title: "Display Removal",
      description: "Professional removal of damaged screen from A3115 unit"
    },
    {
      step: "4",
      title: "Quality Component Install",
      description: "Installation of genuine A3115-compatible display assembly"
    },
    {
      step: "5",
      title: "Cable Connection & Testing",
      description: "Secure connection of display and sensor cables"
    },
    {
      step: "6",
      title: "Calibration & Quality Check",
      description: "Display calibration, True Tone verification, color accuracy test"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "A3115 Specialists",
      description: "Extensive experience with MacBook Air M3 15-inch display replacements"
    },
    {
      icon: Shield,
      title: "Genuine Display Parts",
      description: "OEM-grade 15.3-inch Liquid Retina displays with True Tone compatibility"
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Certified technicians ensuring perfect fit and functionality"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Most A3115 screen replacements completed same day"
    },
    {
      icon: Star,
      title: "Up to 3 Month Warranty",
      description: "Comprehensive warranty on display and installation service"
    },
    {
      icon: Zap,
      title: "Cost-Effective",
      description: "Professional service with genuine parts and warranty"
    }
  ];

  const customerReviews = [
    {
      name: "Rajesh Kumar",
      location: "Sector 18, Noida",
      rating: 5,
      review: "Dropped my MacBook Air M3 15-inch and screen cracked completely. These guys fixed it in same day. Display looks exactly like before - True Tone and everything working fine. Fair price too.",
      device: "MacBook Air M3 15-inch"
    },
    {
      name: "Sneha Agarwal", 
      location: "Cyber City, Gurgaon",
      rating: 5,
      review: "Had weird green lines on screen for weeks. Thought laptop was done for. But they replaced the display and now it's perfect. Really happy with their work.",
      device: "MacBook Air 2024"
    },
    {
      name: "Vikash Singh",
      location: "Lajpat Nagar, Delhi",
      rating: 4,
      review: "Screen went black suddenly during work. Took to MacLap IT Care and they diagnosed LCD issue quickly. Replacement was done in few hours. Only wish warranty was longer but overall good experience.",
      device: "MacBook Air M3"
    }
  ];

  const faqs = [
    {
      question: "What is MacBook Air A3115 and how do I identify it?",
      answer: "A3115 is the model number for MacBook Air 15-inch M3 (2024). You can find this number on the bottom of your MacBook or in Apple Menu > About This Mac. It includes all M3 MacBook Air 15-inch variants released in 2024."
    },
    {
      question: "What's included in A3115 screen replacement service?",
      answer: "Our A3115 screen replacement includes genuine display assembly, expert installation, quality testing, and 3-month warranty. We also provide free pickup/delivery across Delhi NCR and same-day service for urgent cases."
    },
    {
      question: "Will the replacement screen support True Tone on my A3115?",
      answer: "Yes, our genuine A3115 display assemblies fully support True Tone, P3 wide color gamut, and all original features. The replacement maintains the same 2880x1864 resolution and 500 nits brightness as original."
    },
    {
      question: "How long does A3115 screen replacement take?",
      answer: "Most MacBook Air A3115 screen replacements are completed within 4-6 hours. Same-day service is available for urgent cases. We also offer free pickup and delivery across Delhi NCR."
    },
    {
      question: "Is the A3115 screen replacement covered under warranty?",
      answer: "Yes, we provide up to 3-month comprehensive warranty on A3115 screen replacement including display quality, installation workmanship, and functionality. No questions asked replacement if any issues arise."
    },
    {
      question: "Can you repair A3115 screen damage without full replacement?",
      answer: "For minor issues like dead pixels or backlight problems, partial repair may be possible. However, for cracked LCD, complete display assembly replacement is necessary to ensure optimal performance and appearance."
    }
  ];

  return (
    <>
      <ServiceBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 mb-6">
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">A3115 Specialists</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">M3 15-inch Model</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">Up to 3 Months Warranty</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Air A3115<br />
                  <span className="text-blue-200">Display Replacement in Delhi NCR</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  MacLap IT Care offers expert MacBook Air A3115 Display Replacement services. Our certified technicians have the expertise to confidently tackle this job with advance tools and technology. We offer professional replacement process using high-quality screen to provide you that same user experience back.
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <Button 
                    size="lg" 
                    className="text-white font-semibold relative overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-lg"
                    onClick={() => window.location.href = `tel:${CONTACT_INFO.phone2}`}
                    style={{
                      background: 'linear-gradient(90deg, hsl(142, 76%, 36%) 30%, hsl(142, 76%, 46%) 50%, hsl(142, 76%, 36%) 70%)',
                      backgroundSize: '300% 100%',
                      animation: 'autoShine 6s infinite'
                    }}
                  >
                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:w-full transition-all duration-500 transform skew-x-12"></div>
                    <Phone className="mr-2 h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10 text-white font-semibold">Call {CONTACT_INFO.phone2}</span>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-blue-900 hover:text-blue-800 hover:scale-105 border-white relative overflow-hidden group transition-all duration-300 shadow-lg font-semibold"
                    onClick={handleBookService}
                    style={{
                      background: 'linear-gradient(90deg, white 30%, #f0f9ff 50%, white 70%)',
                      backgroundSize: '300% 100%',
                      animation: 'autoShine 7s infinite 2s'
                    }}
                  >
                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent group-hover:w-full transition-all duration-500 transform skew-x-12"></div>
                    <span className="relative z-10 text-blue-900 font-semibold">Book A3115 Screen Repair</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">A3115 Quick Facts</h3>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Model:</span>
                      <span className="font-semibold text-right">MacBook Air M3 15-inch</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Display:</span>
                      <span className="font-semibold">15.3" Liquid Retina</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Resolution:</span>
                      <span className="font-semibold">2880x1864</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Service Time:</span>
                      <span className="font-semibold text-green-400">Same Day</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Warranty:</span>
                      <span className="font-semibold text-green-400">Up to 3 Months</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Pickup/Drop:</span>
                      <span className="font-semibold text-green-400">Free Delhi NCR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Models */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Air A3115 Compatible Models</h2>
            <p className="text-xl text-muted-foreground">
              Verify your exact MacBook Air M3 15-inch model before booking repair service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  All A3115 Model Variants Supported
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {compatibleModels.map((model, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium">{model}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <img 
                src={appleModelNumberImage} 
                alt="Find your MacBook model number location" 
                className="mx-auto rounded-lg shadow-lg max-w-md w-full"
              />
              <p className="text-sm text-muted-foreground mt-4">
                Find your exact model number on the bottom of your MacBook Air
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screen Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">A3115 Display Specifications</h2>
            <p className="text-xl text-muted-foreground">
              Technical details of your MacBook Air M3 15-inch display
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {screenSpecs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                      <span className="font-medium text-foreground">{spec.spec}:</span>
                      <span className="text-muted-foreground font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Damage Symptoms */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Common A3115 Display Issues</h2>
            <p className="text-xl text-muted-foreground">
              Identify symptoms that indicate screen replacement is needed
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {damageSymptoms.map((symptom, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <AlertTriangle className={`h-6 w-6 flex-shrink-0 mt-1 ${
                        symptom.severity === 'High' ? 'text-red-500' : 
                        symptom.severity === 'Medium' ? 'text-yellow-500' : 'text-blue-500'
                      }`} />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{symptom.symptom}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{symptom.description}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant={symptom.severity === 'High' ? 'destructive' : 'secondary'} className="text-xs">
                            {symptom.severity} Priority
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 italic">{symptom.urgency}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our A3115 Screen Replacement Process</h2>
            <p className="text-xl text-muted-foreground">
              Professional 6-step process ensuring quality results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repairProcess.map((process, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-lg mb-4">
                        {process.step}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{process.title}</h3>
                      <p className="text-sm text-muted-foreground">{process.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose MacLap IT Care for A3115?</h2>
            <p className="text-xl text-muted-foreground">
              Delhi NCR's trusted MacBook Air repair specialists
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Customer Reviews</h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from A3115 repair customers
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customerReviews.map((review, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-muted-foreground">({review.rating}/5)</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">"{review.review}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                      <p className="text-xs text-blue-600 font-medium">{review.device}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about A3115 screen replacement service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Fix Your MacBook Air A3115 Screen?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get professional screen replacement service with same-day turnaround and comprehensive warranty
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Button 
              size="lg" 
              className="text-white font-semibold relative overflow-hidden group hover:scale-105 transition-transform duration-300"
              onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
              style={{
                background: 'linear-gradient(90deg, hsl(142, 76%, 36%) 30%, hsl(142, 76%, 46%) 50%, hsl(142, 76%, 36%) 70%)',
                backgroundSize: '300% 100%',
                animation: 'autoShine 6s infinite'
              }}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call {CONTACT_INFO.phone1}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold"
              onClick={handleBookService}
            >
              Book A3115 Repair Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}