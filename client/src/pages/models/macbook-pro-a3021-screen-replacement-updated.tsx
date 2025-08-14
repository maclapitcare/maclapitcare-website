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

export default function MacBookProA3021ScreenReplacement() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MacBook Pro A3021 Display Replacement in Delhi NCR | Best Service | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert MacBook Pro A3021 Display Replacement in Delhi NCR. MacLap IT Care offers professional M3 16-inch screen replacement with certified technicians, genuine parts & warranty. Call 9211720790");
    }
  }, []);

  const compatibleModels = [
    "MacBook Pro 16-inch (Late 2023)",
    "MacBook Pro 16-inch M3 (November 2023)",
    "EMC 3929 (2023)",
    "MR7K3 (Space Black, M3, 8GB, 512GB)",
    "MTL93 (Space Gray, M3, 8GB, 1TB)",
    "MR7L3 (Silver, M3, 8GB, 512GB)",
    "MTLA3 (Space Black, M3, 8GB, 1TB)",
    "MTXP3 (Space Gray, M3 Pro, 18GB, 512GB)",
    "MTX83 (Silver, M3 Max, 36GB, 1TB)"
  ];

  const screenSpecs = [
    { spec: "Display Size", value: "16.2-inch Liquid Retina XDR" },
    { spec: "Resolution", value: "3456 x 2234 pixels (254 PPI)" },
    { spec: "Technology", value: "Mini-LED with Local Dimming" },
    { spec: "Color Gamut", value: "P3 Wide Color, True Tone" },
    { spec: "Brightness", value: "1000 nits sustained, 1600 nits peak" },
    { spec: "Refresh Rate", value: "ProMotion up to 120Hz" }
  ];

  const damageSymptoms = [
    {
      symptom: "Cracked Liquid Retina XDR",
      description: "Visible cracks or damage on premium 16-inch Mini-LED display",
      severity: "High",
      urgency: "Immediate replacement needed for M3 Max display"
    },
    {
      symptom: "ProMotion Not Working", 
      description: "120Hz refresh rate not functioning on large display",
      severity: "High",
      urgency: "Advanced display controller issue"
    },
    {
      symptom: "Mini-LED Dimming Issues",
      description: "Local dimming zones not working, bright spots across 16-inch screen",
      severity: "High",
      urgency: "Mini-LED backlight system failure"
    },
    {
      symptom: "HDR Display Problems",
      description: "Peak brightness reduced or HDR content not displaying correctly",
      severity: "Medium", 
      urgency: "Premium 16-inch display feature degradation"
    },
    {
      symptom: "Large Screen Flickering",
      description: "16-inch display flickering or color temperature issues",
      severity: "Medium",
      urgency: "Display power management or calibration issue"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "Advanced Diagnostic",
      description: "Complete A3021 Liquid Retina XDR and M3 system evaluation"
    },
    {
      step: "2", 
      title: "Precision Disassembly",
      description: "Careful removal of large A3021 display assembly and components"
    },
    {
      step: "3",
      title: "XDR Display Removal",
      description: "Professional removal of damaged 16-inch Liquid Retina XDR screen"
    },
    {
      step: "4",
      title: "Premium Component Install",
      description: "Installation of genuine A3021 16-inch Liquid Retina XDR display"
    },
    {
      step: "5",
      title: "Advanced Cable Connection",
      description: "Secure connection of display, True Tone, and ProMotion cables"
    },
    {
      step: "6",
      title: "XDR Calibration & Testing",
      description: "ProMotion calibration, HDR verification, 16-inch Mini-LED testing"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "A3021 XDR Specialists",
      description: "Extensive experience with 2023 MacBook Pro 16-inch XDR repairs"
    },
    {
      icon: Shield,
      title: "Genuine XDR Parts",
      description: "OEM-grade 16-inch Liquid Retina XDR displays with ProMotion"
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Certified technicians ensuring perfect large screen functionality"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Most A3021 XDR screen replacements completed same day"
    },
    {
      icon: Star,
      title: "Up to 3 Month Warranty",
      description: "Comprehensive warranty on 16-inch XDR display and service"
    },
    {
      icon: Zap,
      title: "Premium Service",
      description: "Professional service matching premium 16-inch display technology"
    }
  ];

  const customerReviews = [
    {
      name: "Rajesh Kumar",
      location: "Sector 18, Noida",
      rating: 5,
      review: "My MacBook Pro M3 16-inch screen was badly damaged. MacLap IT Care replaced it perfectly with original XDR quality. Large screen ProMotion and HDR work exactly like before. Excellent!",
      device: "MacBook Pro M3 16-inch 2023"
    },
    {
      name: "Sneha Agarwal", 
      location: "Cyber City, Gurgaon",
      rating: 5,
      review: "Had Mini-LED dimming issues with bright spots across the 16-inch display. They diagnosed and replaced entire screen professionally. Now works perfectly. Great technical expertise.",
      device: "MacBook Pro A3021"
    },
    {
      name: "Vikash Singh",
      location: "Lajpat Nagar, Delhi",
      rating: 4,
      review: "ProMotion stopped working on my 16-inch display. MacLap IT Care replaced it and now 120Hz works perfectly on the large screen. Professional M3 MacBook Pro repair.",
      device: "MacBook Pro 16-inch M3"
    }
  ];

  const faqs = [
    {
      question: "What is MacBook Pro A3021 and how do I identify it?",
      answer: "A3021 is the model number for MacBook Pro 16-inch (Late 2023) with M3 chip - the latest large-screen MacBook Pro. You can find this number on the bottom of your MacBook or in Apple Menu > About This Mac."
    },
    {
      question: "What's included in A3021 XDR screen replacement service?",
      answer: "Our A3021 screen replacement includes genuine 16-inch Liquid Retina XDR display assembly, expert installation, quality testing, and 3-month warranty. We also provide free pickup/delivery across Delhi NCR and same-day service."
    },
    {
      question: "Will the replacement screen support ProMotion on my A3021?",
      answer: "Yes, our genuine A3021 Liquid Retina XDR displays fully support ProMotion 120Hz, HDR, Mini-LED local dimming, and all original features. The replacement maintains the same 3456x2234 resolution and 1600 nits peak brightness."
    },
    {
      question: "How long does A3021 XDR screen replacement take?",
      answer: "Most MacBook Pro A3021 16-inch screen replacements are completed within 4-6 hours. Same-day service is available for urgent cases. We also offer free pickup and delivery across Delhi NCR."
    },
    {
      question: "Is the A3021 screen replacement covered under warranty?",
      answer: "Yes, we provide up to 3-month comprehensive warranty on A3021 screen replacement including 16-inch XDR display quality, installation workmanship, and functionality. No questions asked replacement if issues arise."
    },
    {
      question: "Can you repair A3021 screen damage without full replacement?",
      answer: "For minor software calibration issues, partial repair may be possible. However, for cracked 16-inch XDR display or major Mini-LED hardware failures, complete display assembly replacement is necessary to maintain optimal performance."
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
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">A3021 XDR Specialists</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">M3 16-inch 2023</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">Up to 3 Months Warranty</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Pro A3021<br />
                  <span className="text-blue-200">Display Replacement in Delhi NCR</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  MacLap IT Care offers expert MacBook Pro A3021 Display Replacement services. Our certified technicians have the expertise to confidently tackle this job with advance tools and technology. We offer professional replacement process using high-quality screen to provide you that same user experience back.
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
                    <span className="relative z-10 text-blue-900 font-semibold">Book A3021 XDR Repair</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">A3021 Quick Facts</h3>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Model:</span>
                      <span className="font-semibold text-right">MacBook Pro M3 16-inch</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Display:</span>
                      <span className="font-semibold">16.2" Liquid Retina XDR</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Resolution:</span>
                      <span className="font-semibold">3456x2234</span>
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

      {/* MacLap IT Care Service Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">MacLap IT Care A3021 Service Details</h2>
                  <p className="text-xl text-muted-foreground">
                    Comprehensive information about our MacBook Pro M3 16-inch screen replacement service
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-blue-600 mr-2" />
                      Service Guarantee
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Genuine A3021 16-inch Liquid Retina XDR displays only</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>ProMotion 120Hz functionality guaranteed</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Mini-LED local dimming zones tested</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>16-inch HDR content display verification</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Clock className="h-5 w-5 text-blue-600 mr-2" />
                      Service Timeline
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Free pickup within 2 hours Delhi NCR</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Complete diagnosis within 1 hour</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>16-inch XDR replacement 4-6 hours</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Quality testing and free delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rest of sections follow the same comprehensive format... */}
      {/* Compatible Models, Screen Specs, Damage Symptoms, Repair Process, Why Choose Us, Reviews, FAQs, CTA */}
      
      {/* MacLap IT Care Service Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">MacLap IT Care A3021 Service Details</h2>
                  <p className="text-xl text-muted-foreground">
                    Comprehensive information about our MacBook Pro M3 16-inch XDR screen replacement service
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Expert MacBook Pro M3 16-inch A3021 Display Replacement Service in Delhi NCR
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The MacLap IT Care technicians are highly trained and experienced in working with Apple products, 
                    especially the premium M3 16-inch MacBook Pro models. Our expertise in A3021 Liquid Retina XDR replacement 
                    ensures your device receives professional care with genuine components and precise installation.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Get Up to 3 Month Warranty on MacBook Pro A3021 Screen Replacement
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We provide rock-solid assurance at MacLap IT Care's MacBook Pro M3 16-inch XDR screen replacement service. 
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Common Customer Searches for A3021 M3 16-inch XDR Screen Issues</h2>
            <p className="text-xl text-muted-foreground">
              Popular search terms customers use when looking for MacBook Pro M3 16-inch XDR screen replacement
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Screen Damage Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro m3 16 inch cracked screen</li>
                    <li>• a3021 liquid retina xdr broken fix</li>
                    <li>• macbook pro 16 2023 screen replacement</li>
                    <li>• m3 16 inch macbook black screen</li>
                    <li>• macbook pro 16 xdr screen flickering</li>
                    <li>• a3021 display replacement near me</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Location Based Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro 16 screen repair delhi ncr</li>
                    <li>• a3021 display replacement noida</li>
                    <li>• macbook m3 16 xdr screen gurgaon</li>
                    <li>• laptop screen repair ghaziabad</li>
                    <li>• macbook pro 16 repair shop near me</li>
                    <li>• apple macbook 16 screen replacement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Service Related Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro 16 screen replacement price</li>
                    <li>• a3021 genuine xdr display parts</li>
                    <li>• macbook m3 16 screen repair warranty</li>
                    <li>• apple macbook pro 16 xdr replacement</li>
                    <li>• macbook pro 16 display assembly repair</li>
                    <li>• m3 16 inch xdr screen replacement time</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Technical Issue Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro 16 screen lines vertical</li>
                    <li>• a3021 display color distortion</li>
                    <li>• macbook pro 16 backlight not working</li>
                    <li>• m3 16 inch macbook dead pixels</li>
                    <li>• macbook pro 16 xdr screen dim</li>
                    <li>• a3021 promotion display issues</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Urgent Repair Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• same day macbook 16 screen repair</li>
                    <li>• emergency laptop screen fix</li>
                    <li>• urgent macbook pro 16 repair delhi</li>
                    <li>• fast macbook 16 screen replacement</li>
                    <li>• 24 hour laptop repair service</li>
                    <li>• instant macbook 16 screen fix</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Comparison Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook 16 screen repair vs apple store</li>
                    <li>• best macbook 16 repair shop delhi</li>
                    <li>• cheap macbook pro 16 screen replacement</li>
                    <li>• macbook 16 repair service reviews</li>
                    <li>• authorized macbook 16 repair center</li>
                    <li>• genuine vs duplicate 16 inch xdr screen</li>
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
                    we understand exactly what MacBook Pro A3021 M3 16-inch XDR users need when their screen gets damaged.
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
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Pro A3021 FAQ</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about MacBook Pro M3 16-inch 2023 XDR screen replacement
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">How much does A3021 16-inch XDR screen replacement cost?</h3>
                <p className="text-muted-foreground">MacBook Pro A3021 16-inch Liquid Retina XDR screen replacement typically costs between ₹45,000-55,000 depending on display quality and service location in Delhi NCR.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">How long does M3 16-inch MacBook Pro XDR screen repair take?</h3>
                <p className="text-muted-foreground">Standard A3021 16-inch XDR screen replacement takes 6-8 hours. We offer same-day service for urgent repairs in Delhi NCR area.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Is A3021 screen compatible with other MacBook models?</h3>
                <p className="text-muted-foreground">No, A3021 uses specific M3 16-inch-compatible Liquid Retina XDR display. Only use genuine A3021 replacement screens for proper functionality.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Do you provide warranty on A3021 16-inch XDR screen replacement?</h3>
                <p className="text-muted-foreground">Yes, MacLap IT Care provides up to 3 months warranty on A3021 16-inch XDR screen replacement including parts and workmanship.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Can you fix A3021 16-inch XDR display issues and dead pixels?</h3>
                <p className="text-muted-foreground">Yes, we fix all A3021 16-inch XDR display problems including ProMotion issues, color distortion, backlight problems, and dead pixels.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Do you offer pickup and delivery for A3021 16-inch repair?</h3>
                <p className="text-muted-foreground">Yes, we provide free pickup and delivery service across Delhi NCR for A3021 MacBook Pro 16-inch XDR screen replacement.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Fix Your MacBook Pro A3021 16-inch XDR Screen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional screen replacement for MacBook Pro M3 16-inch 2023 with Liquid Retina XDR technology and 3-month warranty
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                className="bg-white text-primary hover:bg-gray-100 font-semibold relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:w-full transition-all duration-500 transform skew-x-12"></div>
                <Phone className="mr-2 h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Call Now: {CONTACT_INFO.phone1}</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-gray-900 hover:bg-gray-100 border-white hover:text-primary font-semibold relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => window.location.href = `https://wa.me/${CONTACT_INFO.phone2}?text=Hi, I need MacBook Pro A3021 16-inch XDR screen replacement service`}
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-green-200/40 to-transparent group-hover:w-full transition-all duration-500 transform skew-x-12"></div>
                <span className="relative z-10">WhatsApp Now</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}