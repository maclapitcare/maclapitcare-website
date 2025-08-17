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

export default function MacBookProA2918ScreenReplacement() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MacBook Pro A2918 Display Replacement in Delhi NCR | Best Service | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert MacBook Pro A2918 Display Replacement in Delhi NCR. MacLap IT Care offers professional M3 Pro 14-inch screen replacement with certified technicians, genuine parts & warranty. Call 9211720790");
    }
  }, []);

  const compatibleModels = [
    "MacBook Pro 14-inch M3 Pro (2023)",
    "EMC 4077",
    "MTL73 (Space Black, 18GB, 512GB)",
    "MTL83 (Silver, 18GB, 512GB)", 
    "MTL93 (Space Black, 18GB, 1TB)",
    "MTLA3 (Silver, 18GB, 1TB)",
    "MTLB3 (Space Black, 36GB, 1TB)",
    "MTLC3 (Silver, 36GB, 1TB)",
    "MTLD3 (Space Black, 36GB, 2TB)",
    "MTLE3 (Silver, 36GB, 2TB)"
  ];

  const screenSpecs = [
    { spec: "Display Size", value: "14.2-inch Liquid Retina XDR Display" },
    { spec: "Resolution", value: "3024 x 1964 pixels (254 PPI)" },
    { spec: "Technology", value: "Mini-LED backlit Liquid Retina XDR" },
    { spec: "Color Gamut", value: "Wide color (P3), True Tone" },
    { spec: "Brightness", value: "1000 nits sustained, 1600 nits peak HDR" },
    { spec: "Refresh Rate", value: "ProMotion up to 120Hz" }
  ];

  const damageSymptoms = [
    {
      symptom: "Cracked Liquid Retina XDR",
      description: "Visible cracks or spider web patterns on premium XDR display surface",
      severity: "High",
      urgency: "Immediate replacement needed for expensive display"
    },
    {
      symptom: "Black Screen Issues", 
      description: "Display remains black but MacBook powers on",
      severity: "High",
      urgency: "Complete XDR display failure"
    },
    {
      symptom: "Mini-LED Backlight Failure",
      description: "Uneven brightness or local dimming zones not working",
      severity: "High",
      urgency: "Mini-LED array malfunction"
    },
    {
      symptom: "ProMotion Flickering",
      description: "Screen flickers during variable refresh rate changes",
      severity: "Medium", 
      urgency: "ProMotion controller issue"
    },
    {
      symptom: "HDR Display Issues",
      description: "HDR content not displaying correctly or peak brightness low",
      severity: "Medium",
      urgency: "XDR calibration or hardware failure"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "Diagnostic Assessment",
      description: "Complete A2918 XDR display and M3 Pro system evaluation"
    },
    {
      step: "2", 
      title: "Safe Disassembly",
      description: "Careful removal of A2918 premium display assembly"
    },
    {
      step: "3",
      title: "XDR Display Removal",
      description: "Professional removal of damaged Liquid Retina XDR screen"
    },
    {
      step: "4",
      title: "Premium Component Install",
      description: "Installation of genuine A2918 Liquid Retina XDR assembly"
    },
    {
      step: "5",
      title: "Cable Connection & Testing",
      description: "Secure connection of XDR display and sensor cables"
    },
    {
      step: "6",
      title: "Calibration & Quality Check",
      description: "XDR calibration, ProMotion verification, HDR testing"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "A2918 XDR Specialists",
      description: "Extensive experience with MacBook Pro M3 Pro 14-inch XDR display replacements"
    },
    {
      icon: Shield,
      title: "Genuine XDR Parts",
      description: "OEM-grade Liquid Retina XDR displays with Mini-LED and ProMotion"
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Certified technicians ensuring perfect fit and functionality"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Most A2918 XDR screen replacements completed same day"
    },
    {
      icon: Star,
      title: "Up to 3 Month Warranty",
      description: "Comprehensive warranty on XDR display and installation service"
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
      review: "Dropped my MacBook Pro M3 Pro and XDR screen cracked completely. These guys fixed it in same day. Display looks exactly like before - HDR and ProMotion working perfectly. Great service.",
      device: "MacBook Pro M3 Pro 14-inch"
    },
    {
      name: "Sneha Agarwal", 
      location: "Cyber City, Gurgaon",
      rating: 5,
      review: "Had mini-LED backlight issues with dark zones. MacLap IT Care replaced the XDR display professionally. Now HDR content looks amazing again. Excellent work on expensive laptop.",
      device: "MacBook Pro 2023"
    },
    {
      name: "Vikash Singh",
      location: "Lajpat Nagar, Delhi",
      rating: 4,
      review: "ProMotion was flickering badly during design work. They diagnosed XDR controller failure and replaced entire display. Fixed all issues. Professional service worth the cost.",
      device: "MacBook Pro M3 Pro"
    }
  ];

  const faqs = [
    {
      question: "What is MacBook Pro A2918 and how do I identify it?",
      answer: "A2918 is the model number for MacBook Pro 14-inch M3 Pro (2023). You can find this number on the bottom of your MacBook or in Apple Menu > About This Mac. It includes all M3 Pro MacBook Pro 14-inch variants released in late 2023."
    },
    {
      question: "What's included in A2918 XDR screen replacement service?",
      answer: "Our A2918 screen replacement includes genuine Liquid Retina XDR display assembly, expert installation, quality testing, and 3-month warranty. We also provide free pickup/delivery across Delhi NCR and same-day service for urgent cases."
    },
    {
      question: "Will the replacement XDR screen support all features on my A2918?",
      answer: "Yes, our genuine A2918 XDR display assemblies fully support Mini-LED, ProMotion up to 120Hz, HDR with 1600 nits peak brightness, P3 wide color gamut, and True Tone. All original premium features maintained."
    },
    {
      question: "How long does A2918 XDR screen replacement take?",
      answer: "Most MacBook Pro A2918 XDR screen replacements are completed within 5-6 hours due to complexity. Same-day service is available for urgent cases. We also offer free pickup and delivery across Delhi NCR."
    },
    {
      question: "Is the A2918 XDR screen replacement covered under warranty?",
      answer: "Yes, we provide up to 3-month comprehensive warranty on A2918 XDR screen replacement including display quality, installation workmanship, and functionality. No questions asked replacement if any issues arise."
    },
    {
      question: "Can you repair A2918 XDR screen damage without full replacement?",
      answer: "For minor software calibration issues, partial repair may be possible. However, for cracked XDR display or Mini-LED failures, complete display assembly replacement is necessary to maintain premium performance and appearance."
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
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">A2918 XDR Specialists</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">M3 Pro 14-inch</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">Up to 3 Months Warranty</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Pro A2918<br />
                  <span className="text-blue-200">Display Replacement in Delhi NCR</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  MacLap IT Care offers expert MacBook Pro A2918 Display Replacement services. Our certified technicians have the expertise to confidently tackle this job with advance tools and technology. We offer professional replacement process using high-quality screen to provide you that same user experience back.
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
                    <span className="relative z-10 text-blue-900 font-semibold">Book A2918 XDR Repair</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">A2918 Quick Facts</h3>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Model:</span>
                      <span className="font-semibold text-right">MacBook Pro M3 Pro</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Display:</span>
                      <span className="font-semibold">14.2" Liquid Retina XDR</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Resolution:</span>
                      <span className="font-semibold">3024x1964</span>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Pro A2918 Compatible Models</h2>
            <p className="text-xl text-muted-foreground">
              Verify your exact MacBook Pro M3 Pro 14-inch model before booking repair service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  All A2918 Model Variants Supported
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
                Find your exact model number on the bottom of your MacBook Pro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screen Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">A2918 XDR Display Specifications</h2>
            <p className="text-xl text-muted-foreground">
              Technical details of your MacBook Pro M3 Pro Liquid Retina XDR display
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Common A2918 XDR Display Issues</h2>
            <p className="text-xl text-muted-foreground">
              Identify symptoms that indicate XDR screen replacement is needed
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Our A2918 XDR Screen Replacement Process</h2>
            <p className="text-xl text-muted-foreground">
              Professional 6-step process ensuring quality results for premium displays
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose MacLap IT Care for A2918?</h2>
            <p className="text-xl text-muted-foreground">
              Delhi NCR's trusted MacBook Pro XDR repair specialists
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
              Real experiences from A2918 XDR repair customers
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

      {/* MacLap IT Care Service Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">MacLap IT Care A2918 Service Details</h2>
                  <p className="text-xl text-muted-foreground">
                    Comprehensive information about our MacBook Pro M3 Pro screen replacement service
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Expert MacBook Pro M3 Pro A2918 Display Replacement Service in Delhi NCR
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The MacLap IT Care technicians are highly trained and experienced in working with Apple products, 
                    especially the latest M3 Pro MacBook Pro models. Our expertise in A2918 XDR screen replacement 
                    ensures your device receives professional care with genuine components and precise installation.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Get Up to 3 Month Warranty on MacBook Pro A2918 Screen Replacement
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We provide rock-solid assurance at MacLap IT Care's MacBook Pro M3 Pro screen replacement service. 
                      A comprehensive warranty for up to 3 months. If unforeseen issues or defects arise with your 
                      replaced screen within the warranty period, we will take care of it efficiently.
                    </p>
                    <p className="text-muted-foreground">
                      Our Warranty covers the quality of the replacement screen and our workmanship, giving you 
                      peace of mind and confidence in our service.
                    </p>
                  </div>
                  <div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-foreground mb-4">Service Options Available:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">At your Doorstep: Free pickup & delivery</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">Visit Store: State-of-the-art facilities</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">Same-Day Service: For urgent requirements</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Searches Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Common Customer Searches for A2918 M3 Pro Screen Issues</h2>
            <p className="text-xl text-muted-foreground">
              Popular search terms customers use when looking for MacBook Pro M3 Pro screen replacement
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Screen Damage Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro m3 cracked screen repair</li>
                    <li>• a2918 display broken fix</li>
                    <li>• macbook pro 2023 screen replacement cost</li>
                    <li>• m3 pro macbook black screen problem</li>
                    <li>• macbook pro screen flickering repair</li>
                    <li>• a2918 xdr replacement near me</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Location Based Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro screen repair delhi ncr</li>
                    <li>• a2918 display replacement noida</li>
                    <li>• macbook m3 screen fix gurgaon</li>
                    <li>• laptop screen repair ghaziabad</li>
                    <li>• macbook pro repair shop near me</li>
                    <li>• apple macbook screen replacement delhi</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Service Related Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro screen replacement price</li>
                    <li>• a2918 genuine display parts</li>
                    <li>• macbook m3 screen repair warranty</li>
                    <li>• apple macbook pro xdr replacement</li>
                    <li>• macbook pro liquid retina repair</li>
                    <li>• m3 pro macbook screen replacement time</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Technical Issue Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro screen lines vertical</li>
                    <li>• a2918 display color distortion</li>
                    <li>• macbook pro backlight not working</li>
                    <li>• m3 pro macbook dead pixels fix</li>
                    <li>• macbook pro screen dim problem</li>
                    <li>• a2918 true tone not working</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Urgent Repair Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• same day macbook screen repair</li>
                    <li>• emergency laptop screen fix</li>
                    <li>• urgent macbook pro repair delhi</li>
                    <li>• fast macbook screen replacement</li>
                    <li>• 24 hour laptop repair service</li>
                    <li>• instant macbook screen fix</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Comparison Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook screen repair vs apple store</li>
                    <li>• best macbook repair shop delhi</li>
                    <li>• cheap macbook pro screen replacement</li>
                    <li>• macbook repair service reviews</li>
                    <li>• authorized macbook repair center</li>
                    <li>• genuine vs duplicate macbook screen</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Whatever You Search For, MacLap IT Care Has the Solution
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Whether you're looking for urgent repair, genuine parts, warranty service, or cost-effective solutions - 
                    we understand exactly what MacBook Pro A2918 M3 Pro users need when their screen gets damaged.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl border-0"
                      onClick={() => window.location.href = `tel:${CONTACT_INFO.phone2}`}
                      style={{
                        background: 'linear-gradient(90deg, hsl(142, 76%, 36%) 30%, hsl(142, 76%, 46%) 50%, hsl(142, 76%, 36%) 70%)',
                        backgroundSize: '300% 100%',
                        animation: 'autoShine 8s infinite'
                      }}
                    >
                      <div className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:w-full transition-all duration-500 transform skew-x-12"></div>
                      <Phone className="mr-2 h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="relative z-10 text-white font-bold">Get Instant Quote: {CONTACT_INFO.phone2}</span>
                    </Button>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl border-0"
                      onClick={handleBookService}
                      style={{
                        background: 'linear-gradient(90deg, hsl(217, 91%, 60%) 30%, hsl(231, 91%, 60%) 50%, hsl(217, 91%, 60%) 70%)',
                        backgroundSize: '300% 100%',
                        animation: 'autoShine 9s infinite 1s'
                      }}
                    >
                      <div className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:w-full transition-all duration-500 transform skew-x-12"></div>
                      <span className="relative z-10 text-white font-bold">Book Service Online</span>
                      <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Pro A2918 FAQ</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about MacBook Pro M3 Pro 2023 screen replacement
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">How much does A2918 screen replacement cost?</h3>
                <p className="text-muted-foreground">MacBook Pro A2918 screen replacement typically costs between ₹25,000-35,000 depending on display quality and service location in Delhi NCR.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">How long does M3 Pro MacBook screen repair take?</h3>
                <p className="text-muted-foreground">Standard A2918 screen replacement takes 4-6 hours. We offer same-day service for urgent repairs in Delhi NCR area.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Is A2918 screen compatible with other MacBook models?</h3>
                <p className="text-muted-foreground">No, A2918 uses specific M3 Pro-compatible Liquid Retina XDR display. Only use genuine A2918 replacement screens for proper functionality.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Do you provide warranty on A2918 screen replacement?</h3>
                <p className="text-muted-foreground">Yes, MacLap IT Care provides up to 3 months warranty on A2918 screen replacement including parts and workmanship.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Can you fix A2918 screen lines and display issues?</h3>
                <p className="text-muted-foreground">Yes, we fix all A2918 display problems including vertical lines, color distortion, backlight issues, and dead pixels.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Do you offer pickup and delivery for A2918 repair?</h3>
                <p className="text-muted-foreground">Yes, we provide free pickup and delivery service across Delhi NCR for A2918 MacBook Pro screen replacement.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Fix Your MacBook Pro A2918 XDR Screen?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get professional XDR screen replacement service with same-day turnaround and comprehensive warranty
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
              className="bg-white text-blue-900 border-white hover:bg-blue-100 hover:text-blue-900 font-semibold"
              onClick={handleBookService}
            >
              <span className="text-blue-900 font-semibold">Book A2918 XDR Repair Service</span>
              <ArrowRight className="ml-2 h-5 w-5 text-blue-900" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}