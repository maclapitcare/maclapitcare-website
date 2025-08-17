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

export default function MacBookAirA1466ScreenReplacement() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MacBook Air A1466 Display Replacement in Delhi NCR | Best Service | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert MacBook Air A1466 Display Replacement in Delhi NCR. MacLap IT Care offers professional 2013-2017 screen replacement with certified technicians, genuine parts & warranty. Call 9211720790");
    }
  }, []);

  const compatibleModels = [
    "MacBook Air 13-inch (Mid 2013)",
    "MacBook Air 13-inch (Early 2014)",
    "MacBook Air 13-inch (Early 2015)",
    "MacBook Air 13-inch (Mid 2017)",
    "EMC 2632 (2013)",
    "EMC 2760 (2014)",
    "EMC 2925 (2015)",
    "EMC 3178 (2017)",
    "MD760 (Silver, 128GB, 2013)",
    "MD761 (Silver, 256GB, 2013)",
    "MJVE2 (Silver, 128GB, 2015)",
    "MJVG2 (Silver, 256GB, 2015)"
  ];

  const screenSpecs = [
    { spec: "Display Size", value: "13.3-inch TN Display" },
    { spec: "Resolution", value: "1440 x 900 pixels (128 PPI)" },
    { spec: "Technology", value: "TN LED-backlit display" },
    { spec: "Color Gamut", value: "Standard sRGB" },
    { spec: "Brightness", value: "300 nits typical" },
    { spec: "Refresh Rate", value: "60Hz standard" }
  ];

  const damageSymptoms = [
    {
      symptom: "Cracked TN Display",
      description: "Visible cracks or damage on classic 13-inch non-Retina display",
      severity: "High",
      urgency: "Immediate replacement needed for legacy model"
    },
    {
      symptom: "Display Lines and Artifacts", 
      description: "Horizontal or vertical lines across TN screen",
      severity: "High",
      urgency: "TN panel degradation issue"
    },
    {
      symptom: "Brightness Control Issues",
      description: "Backlight not adjustable or dim display problems",
      severity: "Medium",
      urgency: "LED backlight controller problem"
    },
    {
      symptom: "Age-Related Display Wear",
      description: "Color fading or uneven brightness from years of use",
      severity: "Medium", 
      urgency: "Natural aging of 2013-2017 TN technology"
    },
    {
      symptom: "Connection Problems",
      description: "Loose display cable causing intermittent issues",
      severity: "Medium",
      urgency: "Display cable connection degradation"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "Legacy System Diagnostic",
      description: "Complete A1466 TN display and vintage system evaluation"
    },
    {
      step: "2", 
      title: "Vintage Disassembly",
      description: "Careful removal of classic A1466 display assembly"
    },
    {
      step: "3",
      title: "TN Display Removal",
      description: "Professional removal of damaged non-Retina TN screen"
    },
    {
      step: "4",
      title: "Quality Component Install",
      description: "Installation of genuine A1466 TN display assembly"
    },
    {
      step: "5",
      title: "Cable Connection",
      description: "Secure connection of display and backlight cables"
    },
    {
      step: "6",
      title: "System Calibration",
      description: "TN display calibration and brightness control verification"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "A1466 Legacy Experts",
      description: "Extensive experience with 2013-2017 MacBook Air TN display repairs"
    },
    {
      icon: Shield,
      title: "Genuine TN Parts",
      description: "OEM-grade 13.3-inch TN displays for classic MacBook Air models"
    },
    {
      icon: Wrench,
      title: "Vintage Repair Specialists", 
      description: "Certified technicians experienced with legacy MacBook Air technology"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Most A1466 TN screen replacements completed same day"
    },
    {
      icon: Star,
      title: "Up to 3 Month Warranty",
      description: "Comprehensive warranty on TN display and installation service"
    },
    {
      icon: Zap,
      title: "Legacy Model Support",
      description: "Professional service for classic non-Retina MacBook Air models"
    }
  ];

  const customerReviews = [
    {
      name: "Rajesh Kumar",
      location: "Sector 18, Noida",
      rating: 5,
      review: "My old 2015 MacBook Air had badly cracked screen. MacLap IT Care found genuine replacement for this vintage model and installed it perfectly. Works like new! Great support for older models.",
      device: "MacBook Air 2015"
    },
    {
      name: "Sneha Agarwal", 
      location: "Cyber City, Gurgaon",
      rating: 5,
      review: "Had display lines and flickering on my 2013 MacBook Air. They diagnosed TN panel failure and replaced it professionally. Amazing they still service these older models with quality parts.",
      device: "MacBook Air A1466"
    },
    {
      name: "Vikash Singh",
      location: "Lajpat Nagar, Delhi",
      rating: 4,
      review: "Backlight issues with my 2017 MacBook Air. MacLap IT Care replaced screen and brightness control works perfectly now. Professional legacy MacBook Air repair service.",
      device: "MacBook Air Mid 2017"
    }
  ];

  const faqs = [
    {
      question: "What is MacBook Air A1466 and how do I identify it?",
      answer: "A1466 is the model number for MacBook Air 13-inch (2013-2017) with TN non-Retina display - the classic MacBook Air models. You can find this number on the bottom of your MacBook or in Apple Menu > About This Mac."
    },
    {
      question: "What's included in A1466 TN screen replacement service?",
      answer: "Our A1466 screen replacement includes genuine TN display assembly, expert installation for vintage models, quality testing, and 3-month warranty. We also provide free pickup/delivery across Delhi NCR and same-day service."
    },
    {
      question: "Do you still service older A1466 MacBook Air models?",
      answer: "Yes, we specialize in legacy MacBook Air repairs and maintain stock of genuine A1466 TN display assemblies. Our technicians are experienced with 2013-2017 MacBook Air models and provide professional service for vintage systems."
    },
    {
      question: "How long does A1466 TN screen replacement take?",
      answer: "Most MacBook Air A1466 screen replacements are completed within 4-6 hours. Same-day service is available for urgent cases. We also offer free pickup and delivery across Delhi NCR."
    },
    {
      question: "Is the A1466 screen replacement covered under warranty?",
      answer: "Yes, we provide up to 3-month comprehensive warranty on A1466 screen replacement including display quality, installation workmanship, and functionality. Full protection for vintage model repairs."
    },
    {
      question: "Can you upgrade A1466 to Retina display?",
      answer: "No, A1466 models use different display technology and connections than Retina models. However, we provide high-quality genuine TN display replacements that restore your MacBook Air to original factory specifications and performance."
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
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">A1466 Legacy Specialists</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">2013-2017 Model</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">Up to 3 Months Warranty</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Air A1466<br />
                  <span className="text-blue-200">Display Replacement in Delhi NCR</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  MacLap IT Care offers expert MacBook Air A1466 Display Replacement services. Our certified technicians have the expertise to confidently tackle this job with advance tools and technology. We offer professional replacement process using high-quality screen to provide you that same user experience back.
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
                    <span className="relative z-10 text-blue-900 font-semibold">Book A1466 Legacy Repair</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">A1466 Quick Facts</h3>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Model:</span>
                      <span className="font-semibold text-right">MacBook Air 2013-2017</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Display:</span>
                      <span className="font-semibold">13.3" TN</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Resolution:</span>
                      <span className="font-semibold">1440x900</span>
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
                  <h2 className="text-3xl font-bold text-foreground mb-4">MacLap IT Care A1466 Service Details</h2>
                  <p className="text-xl text-muted-foreground">
                    Comprehensive information about our MacBook Air legacy screen replacement service
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
                        <span>Genuine A1466 TN displays for vintage models</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Legacy system compatibility guaranteed</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Brightness control functionality verified</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Classic MacBook Air restoration</span>
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
                        <span>Legacy system diagnosis within 1 hour</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>TN display replacement 4-6 hours</span>
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

      {/* MacLap IT Care Service Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">MacLap IT Care A1466 Service Details</h2>
                  <p className="text-xl text-muted-foreground">
                    Comprehensive information about our MacBook Air Legacy screen replacement service
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Expert MacBook Air Legacy A1466 Display Replacement Service in Delhi NCR
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The MacLap IT Care technicians are highly trained and experienced in working with Apple products, 
                    especially the classic MacBook Air models. Our expertise in A1466 screen replacement 
                    ensures your vintage device receives professional care with compatible components and precise installation.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Get Up to 3 Month Warranty on MacBook Air A1466 Screen Replacement
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We provide rock-solid assurance at MacLap IT Care's MacBook Air Legacy screen replacement service. 
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Common Customer Searches for A1466 Legacy Screen Issues</h2>
            <p className="text-xl text-muted-foreground">
              Popular search terms customers use when looking for MacBook Air Legacy screen replacement
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Screen Damage Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook air 2013 cracked screen repair</li>
                    <li>• a1466 display broken fix</li>
                    <li>• macbook air vintage screen replacement cost</li>
                    <li>• legacy macbook air black screen</li>
                    <li>• macbook air 13 inch screen flickering</li>
                    <li>• a1466 tn display replacement near me</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Location Based Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook air screen repair delhi ncr</li>
                    <li>• a1466 display replacement noida</li>
                    <li>• macbook air vintage screen gurgaon</li>
                    <li>• laptop screen repair ghaziabad</li>
                    <li>• macbook air repair shop near me</li>
                    <li>• apple macbook screen replacement delhi</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Service Related Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook air screen replacement price</li>
                    <li>• a1466 compatible display parts</li>
                    <li>• macbook air vintage screen warranty</li>
                    <li>• apple macbook air tn replacement</li>
                    <li>• macbook air display assembly repair</li>
                    <li>• legacy macbook screen replacement time</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Technical Issue Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook air screen lines vertical</li>
                    <li>• a1466 display color distortion</li>
                    <li>• macbook air backlight not working</li>
                    <li>• legacy macbook air dead pixels</li>
                    <li>• macbook air screen dim problem</li>
                    <li>• a1466 brightness not working</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Urgent Repair Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• same day macbook screen repair</li>
                    <li>• emergency laptop screen fix</li>
                    <li>• urgent macbook air repair delhi</li>
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
                    <li>• cheap macbook air screen replacement</li>
                    <li>• macbook repair service reviews</li>
                    <li>• authorized macbook repair center</li>
                    <li>• genuine vs compatible macbook screen</li>
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
                    Whether you're looking for urgent repair, compatible parts, warranty service, or cost-effective solutions - 
                    we understand exactly what MacBook Air A1466 Legacy users need when their screen gets damaged.
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
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Air A1466 FAQ</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about MacBook Air Legacy 2013-2017 screen replacement
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">How much does A1466 screen replacement cost?</h3>
                <p className="text-muted-foreground">MacBook Air A1466 screen replacement typically costs between ₹12,000-18,000 depending on display quality and service location in Delhi NCR.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">How long does Legacy MacBook Air screen repair take?</h3>
                <p className="text-muted-foreground">Standard A1466 screen replacement takes 4-6 hours. We offer same-day service for urgent repairs in Delhi NCR area.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Is A1466 screen compatible with other MacBook models?</h3>
                <p className="text-muted-foreground">No, A1466 uses specific TN panel compatible with 2013-2017 models. Only use compatible A1466 replacement screens for proper functionality.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Do you provide warranty on A1466 screen replacement?</h3>
                <p className="text-muted-foreground">Yes, MacLap IT Care provides up to 3 months warranty on A1466 screen replacement including parts and workmanship.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Can you fix A1466 screen lines and display issues?</h3>
                <p className="text-muted-foreground">Yes, we fix all A1466 display problems including vertical lines, color distortion, backlight issues, and dead pixels.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Do you offer pickup and delivery for A1466 repair?</h3>
                <p className="text-muted-foreground">Yes, we provide free pickup and delivery service across Delhi NCR for A1466 MacBook Air screen replacement.</p>
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
              Ready to Fix Your MacBook Air A1466 Screen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional screen replacement for MacBook Air Legacy 2013-2017 with professional installation and 3-month warranty
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
                onClick={() => window.location.href = `https://wa.me/${CONTACT_INFO.phone2}?text=Hi, I need MacBook Air A1466 screen replacement service`}
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