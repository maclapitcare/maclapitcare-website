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

export default function MacBookAirA2941ScreenReplacement() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MacBook Air A2941 Display Replacement in Delhi NCR | Best Service | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert MacBook Air A2941 Display Replacement in Delhi NCR. MacLap IT Care offers professional M2 15-inch screen replacement with certified technicians, genuine parts & warranty. Call 9211720790");
    }
  }, []);

  const compatibleModels = [
    "MacBook Air 15-inch M2 (2023)",
    "EMC 4109 (2023)",
    "MQKR3 (Midnight, M2, 8GB, 256GB)",
    "MQKW3 (Starlight, M2, 8GB, 256GB)",
    "MQKX3 (Silver, M2, 8GB, 256GB)",
    "MQKY3 (Space Gray, M2, 8GB, 256GB)",
    "MQKU3 (Midnight, M2, 8GB, 512GB)",
    "MQKV3 (Starlight, M2, 8GB, 512GB)"
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
      symptom: "Cracked Liquid Retina Display",
      description: "Visible cracks or damage on large 15-inch M2 MacBook Air display",
      severity: "High",
      urgency: "Immediate replacement needed for largest Air screen"
    },
    {
      symptom: "M2 Graphics Display Issues", 
      description: "Display artifacts related to M2 chip graphics processing",
      severity: "High",
      urgency: "M2-display communication problem"
    },
    {
      symptom: "Large Screen Brightness Issues",
      description: "Uneven brightness or dimming across 15-inch display",
      severity: "Medium",
      urgency: "Large display backlight system problem"
    },
    {
      symptom: "True Tone Calibration Problems",
      description: "Color temperature adjustment not working on large screen",
      severity: "Medium", 
      urgency: "15-inch ambient light sensor issue"
    },
    {
      symptom: "Display Size Scaling Issues",
      description: "Resolution or scaling problems specific to 15-inch Air",
      severity: "Medium",
      urgency: "Large screen scaling calibration problem"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "M2 System Diagnostic",
      description: "Complete A2941 Liquid Retina display and M2 system evaluation"
    },
    {
      step: "2", 
      title: "Large Screen Disassembly",
      description: "Careful removal of 15-inch M2 MacBook Air display assembly"
    },
    {
      step: "3",
      title: "Liquid Retina Removal",
      description: "Professional removal of damaged 15-inch Liquid Retina screen"
    },
    {
      step: "4",
      title: "Quality Component Install",
      description: "Installation of genuine A2941 15-inch Liquid Retina display"
    },
    {
      step: "5",
      title: "M2 Connection",
      description: "Secure connection of large display and True Tone sensor cables"
    },
    {
      step: "6",
      title: "System Calibration",
      description: "Large screen calibration, True Tone verification, M2 graphics compatibility test"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "A2941 Large Screen Experts",
      description: "Extensive experience with 2023 15-inch MacBook Air M2 display repairs"
    },
    {
      icon: Shield,
      title: "Genuine Liquid Retina Parts",
      description: "OEM-grade 15.3-inch Liquid Retina displays for M2 MacBook Air"
    },
    {
      icon: Wrench,
      title: "M2 Air Specialists", 
      description: "Certified technicians experienced with M2 MacBook Air technology"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Most A2941 Liquid Retina screen replacements completed same day"
    },
    {
      icon: Star,
      title: "Up to 3 Month Warranty",
      description: "Comprehensive warranty on large Liquid Retina display and service"
    },
    {
      icon: Zap,
      title: "Largest Air Display",
      description: "Professional service for largest MacBook Air display ever made"
    }
  ];

  const customerReviews = [
    {
      name: "Rajesh Kumar",
      location: "Sector 18, Noida",
      rating: 5,
      review: "My new 15-inch MacBook Air M2 had a large crack across the screen. MacLap IT Care replaced it perfectly with genuine Liquid Retina display. Large screen looks amazing! Professional service.",
      device: "MacBook Air M2 15-inch"
    },
    {
      name: "Sneha Agarwal", 
      location: "Cyber City, Gurgaon",
      rating: 5,
      review: "Had brightness issues across the large 15-inch display. They diagnosed and replaced entire screen professionally. True Tone and color accuracy perfect. Great technical expertise for new model.",
      device: "MacBook Air A2941"
    },
    {
      name: "Vikash Singh",
      location: "Lajpat Nagar, Delhi",
      rating: 4,
      review: "Display scaling issues with M2 graphics on large screen. MacLap IT Care replaced screen and now everything works great. Professional newest MacBook Air repair service.",
      device: "MacBook Air 15-inch 2023"
    }
  ];

  const faqs = [
    {
      question: "What is MacBook Air A2941 and how do I identify it?",
      answer: "A2941 is the model number for MacBook Air 15-inch M2 (2023) - the largest MacBook Air ever made with M2 chip. You can find this number on the bottom of your MacBook or in Apple Menu > About This Mac."
    },
    {
      question: "What's included in A2941 large screen replacement service?",
      answer: "Our A2941 screen replacement includes genuine 15.3-inch Liquid Retina display assembly, M2 graphics compatibility testing, expert installation, quality testing, and 3-month warranty. We also provide free pickup/delivery across Delhi NCR and same-day service."
    },
    {
      question: "Will True Tone work properly on the large A2941 screen?",
      answer: "Yes, our genuine A2941 Liquid Retina display replacements maintain full True Tone functionality across the entire 15-inch display. We test ambient light sensor calibration and color temperature adjustment specific to the large screen format."
    },
    {
      question: "How long does A2941 Liquid Retina screen replacement take?",
      answer: "Most MacBook Air A2941 screen replacements are completed within 4-6 hours. Same-day service is available for urgent cases. We also offer free pickup and delivery across Delhi NCR."
    },
    {
      question: "Is the A2941 screen replacement covered under warranty?",
      answer: "Yes, we provide up to 3-month comprehensive warranty on A2941 screen replacement including large display quality, True Tone functionality, installation workmanship, and M2 graphics compatibility. Complete protection included."
    },
    {
      question: "Do you handle M2 graphics display issues with A2941?",
      answer: "Yes, we diagnose and address M2 chip graphics display compatibility issues during A2941 screen replacement. Our service ensures proper M2-display communication and optimal performance with the large 15-inch Liquid Retina display."
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
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">A2941 Large Screen Specialists</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">M2 15-inch 2023</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">Up to 3 Months Warranty</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Air A2941<br />
                  <span className="text-blue-200">Display Replacement in Delhi NCR</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  MacLap IT Care offers expert MacBook Air A2941 Display Replacement services. Our certified technicians have the expertise to confidently tackle this job with advance tools and technology. We offer professional replacement process using high-quality screen to provide you that same user experience back.
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
                    <span className="relative z-10 text-blue-900 font-semibold">Book A2941 Large Screen Repair</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">A2941 Quick Facts</h3>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Model:</span>
                      <span className="font-semibold text-right">MacBook Air M2 15-inch</span>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Air A2941 Compatible Models</h2>
            <p className="text-xl text-muted-foreground">
              Verify your exact MacBook Air M2 15-inch 2023 model before booking repair service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  All A2941 Model Variants Supported
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
            <h2 className="text-3xl font-bold text-foreground mb-4">A2941 Liquid Retina Display Specifications</h2>
            <p className="text-xl text-muted-foreground">
              Technical details of your M2 15-inch MacBook Air display
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Common A2941 Display Issues</h2>
            <p className="text-xl text-muted-foreground">
              Identify symptoms that indicate M2 15-inch MacBook Air screen replacement is needed
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Our A2941 Replacement Process</h2>
            <p className="text-xl text-muted-foreground">
              Professional 6-step process ensuring quality M2 15-inch MacBook Air results
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose MacLap IT Care for A2941?</h2>
            <p className="text-xl text-muted-foreground">
              Delhi NCR's trusted M2 15-inch MacBook Air repair specialists
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
              Real experiences from A2941 M2 15-inch MacBook Air repair customers
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
              Common questions about A2941 M2 15-inch MacBook Air screen replacement service
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

      {/* MacLap IT Care Service Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">MacLap IT Care A2941 Service Details</h2>
                  <p className="text-xl text-muted-foreground">
                    Comprehensive information about our MacBook Air M2 15-inch screen replacement service
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Expert MacBook Air M2 15-inch A2941 Display Replacement Service in Delhi NCR
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The MacLap IT Care technicians are highly trained and experienced in working with Apple products, 
                    especially the large-screen M2 MacBook Air models. Our expertise in A2941 15.3-inch Liquid Retina replacement 
                    ensures your device receives professional care with genuine components and precise installation.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Get Up to 3 Month Warranty on MacBook Air A2941 Screen Replacement
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We provide rock-solid assurance at MacLap IT Care's MacBook Air M2 15-inch screen replacement service. 
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Common Customer Searches for A2941 M2 15-inch Screen Issues</h2>
            <p className="text-xl text-muted-foreground">
              Popular search terms customers use when looking for MacBook Air M2 15-inch screen replacement
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Screen Damage Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook air m2 15 inch cracked screen</li>
                    <li>• a2941 liquid retina display broken</li>
                    <li>• macbook air 15 2023 screen replacement</li>
                    <li>• m2 15 inch macbook black screen</li>
                    <li>• macbook air 15 screen flickering</li>
                    <li>• a2941 display replacement near me</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Location Based Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook air 15 screen repair delhi ncr</li>
                    <li>• a2941 display replacement noida</li>
                    <li>• macbook air m2 15 screen gurgaon</li>
                    <li>• laptop screen repair ghaziabad</li>
                    <li>• macbook air 15 repair shop near me</li>
                    <li>• apple macbook air 15 screen replacement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Service Related Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook air 15 screen replacement price</li>
                    <li>• a2941 genuine liquid retina parts</li>
                    <li>• macbook air m2 15 screen warranty</li>
                    <li>• apple macbook air 15 display replacement</li>
                    <li>• macbook air 15 display assembly repair</li>
                    <li>• m2 15 inch screen replacement time</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Technical Issue Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook air 15 screen lines vertical</li>
                    <li>• a2941 display color distortion</li>
                    <li>• macbook air 15 backlight not working</li>
                    <li>• m2 15 inch macbook dead pixels</li>
                    <li>• macbook air 15 screen dim problem</li>
                    <li>• a2941 large display brightness issues</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Urgent Repair Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• same day macbook air 15 screen repair</li>
                    <li>• emergency laptop screen fix</li>
                    <li>• urgent macbook air 15 repair delhi</li>
                    <li>• fast macbook air 15 screen replacement</li>
                    <li>• 24 hour laptop repair service</li>
                    <li>• instant macbook air 15 screen fix</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Comparison Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook air 15 repair vs apple store</li>
                    <li>• best macbook air 15 repair shop delhi</li>
                    <li>• cheap macbook air 15 screen replacement</li>
                    <li>• macbook air 15 repair service reviews</li>
                    <li>• authorized macbook air 15 repair center</li>
                    <li>• genuine vs compatible 15 inch display</li>
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
                    we understand exactly what MacBook Air A2941 M2 15-inch users need when their large screen gets damaged.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Fix Your MacBook Air A2941 15-inch Screen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional screen replacement for MacBook Air M2 15-inch 2023 with Liquid Retina technology and 3-month warranty
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
                onClick={() => window.location.href = `https://wa.me/${CONTACT_INFO.phone2}?text=Hi, I need MacBook Air A2941 15-inch screen replacement service`}
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