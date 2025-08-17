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

export default function MacBookProA2251ScreenReplacement() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MacBook Pro A2251 Display Replacement in Delhi NCR | Best Service | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert MacBook Pro A2251 Display Replacement in Delhi NCR. MacLap IT Care offers professional 2020 13-inch screen replacement with certified technicians, genuine parts & warranty. Call 9211720790");
    }
  }, []);

  const compatibleModels = [
    "MacBook Pro 13-inch (Early 2020)",
    "EMC 3348",
    "MWP22 (Space Gray, 256GB, 8GB RAM)",
    "MWP32 (Silver, 256GB, 8GB RAM)",
    "MWP52 (Space Gray, 512GB, 8GB RAM)",
    "MWP62 (Silver, 512GB, 8GB RAM)",
    "MWP72 (Space Gray, 1TB, 16GB RAM)",
    "MWP82 (Silver, 1TB, 16GB RAM)"
  ];

  const screenSpecs = [
    { spec: "Display Size", value: "13.3-inch Retina Display" },
    { spec: "Resolution", value: "2560 x 1600 pixels (227 PPI)" },
    { spec: "Technology", value: "IPS LED-backlit display" },
    { spec: "Color Gamut", value: "Wide color (P3), True Tone" },
    { spec: "Brightness", value: "500 nits typical" },
    { spec: "Refresh Rate", value: "60Hz standard" }
  ];

  const damageSymptoms = [
    {
      symptom: "Cracked Retina Display",
      description: "Visible cracks or damage on 13-inch non-TouchBar model display",
      severity: "High",
      urgency: "Immediate replacement needed for function key model"
    },
    {
      symptom: "Function Key Display Integration", 
      description: "Main display problems affecting function key functionality",
      severity: "High",
      urgency: "Function key-display coordination problem"
    },
    {
      symptom: "10th Gen Intel Graphics Issues",
      description: "Display artifacts related to Intel Iris Plus Graphics",
      severity: "High",
      urgency: "Graphics-display communication issue"
    },
    {
      symptom: "COVID Remote Work Damage",
      description: "Increased usage damage from 2020 remote work period",
      severity: "Medium", 
      urgency: "Heavy usage wear and tear"
    },
    {
      symptom: "True Tone Sensor Problems",
      description: "Color temperature adjustment not working properly",
      severity: "Medium",
      urgency: "Ambient light sensor calibration issue"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "Comprehensive Diagnostic",
      description: "Complete A2251 Retina display and function key system evaluation"
    },
    {
      step: "2", 
      title: "Professional Disassembly",
      description: "Careful removal of 2020 function key and display assembly"
    },
    {
      step: "3",
      title: "Display Removal",
      description: "Professional removal of damaged screen components"
    },
    {
      step: "4",
      title: "Quality Component Install",
      description: "Installation of genuine A2251 Retina display assembly"
    },
    {
      step: "5",
      title: "Function Key Connection",
      description: "Secure connection of display and function key cables"
    },
    {
      step: "6",
      title: "System Calibration",
      description: "Retina calibration, function key sync, Intel graphics compatibility test"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "A2251 Function Key Experts",
      description: "Extensive experience with 2020 13-inch function key MacBook Pro repairs"
    },
    {
      icon: Shield,
      title: "Genuine Retina Parts",
      description: "OEM-grade 13.3-inch Retina displays with function key compatibility"
    },
    {
      icon: Wrench,
      title: "Expert Installation", 
      description: "Certified technicians ensuring perfect function key integration"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Most A2251 Retina screen replacements completed same day"
    },
    {
      icon: Star,
      title: "Up to 3 Month Warranty",
      description: "Comprehensive warranty on Retina display and function key service"
    },
    {
      icon: Zap,
      title: "Non-TouchBar Specialists",
      description: "Professional service for traditional function key MacBook Pro"
    }
  ];

  const customerReviews = [
    {
      name: "Rajesh Kumar",
      location: "Sector 18, Noida",
      rating: 5,
      review: "My 2020 MacBook Pro 13-inch non-TouchBar had cracked screen. MacLap IT Care replaced it perfectly maintaining function key functionality. Intel graphics work great. Professional service!",
      device: "MacBook Pro 2020 13-inch"
    },
    {
      name: "Sneha Agarwal", 
      location: "Cyber City, Gurgaon",
      rating: 5,
      review: "Had display issues during remote work sessions. They diagnosed and replaced entire screen professionally. Function keys and True Tone work perfectly. Great technical expertise for 2020 model.",
      device: "MacBook Pro A2251"
    },
    {
      name: "Vikash Singh",
      location: "Lajpat Nagar, Delhi",
      rating: 4,
      review: "Graphics display issues with Intel Iris Plus. MacLap IT Care replaced screen and now everything works great. Professional function key MacBook Pro repair service.",
      device: "MacBook Pro Early 2020"
    }
  ];

  const faqs = [
    {
      question: "What is MacBook Pro A2251 and how do I identify it?",
      answer: "A2251 is the model number for MacBook Pro 13-inch (Early 2020) with function keys - the non-TouchBar model from 2020. You can find this number on the bottom of your MacBook or in Apple Menu > About This Mac."
    },
    {
      question: "What's included in A2251 function key screen replacement service?",
      answer: "Our A2251 screen replacement includes genuine Retina display assembly, function key integration testing, expert installation, quality testing, and 3-month warranty. We also provide free pickup/delivery across Delhi NCR and same-day service."
    },
    {
      question: "Will the function keys work properly after A2251 screen replacement?",
      answer: "Yes, our genuine A2251 Retina display replacements maintain full function key functionality. We test all function key features including brightness adjustment, volume control, and app-specific functions for the 2020 13-inch model."
    },
    {
      question: "How long does A2251 Retina screen replacement take?",
      answer: "Most MacBook Pro A2251 screen replacements are completed within 4-6 hours. Same-day service is available for urgent cases. We also offer free pickup and delivery across Delhi NCR."
    },
    {
      question: "Is the A2251 screen replacement covered under warranty?",
      answer: "Yes, we provide up to 3-month comprehensive warranty on A2251 screen replacement including display quality, function key functionality, installation workmanship, and Intel graphics compatibility. Complete protection included."
    },
    {
      question: "Do you handle Intel graphics display issues with A2251?",
      answer: "Yes, we diagnose and address Intel Iris Plus Graphics display compatibility issues during A2251 screen replacement. Our service ensures proper graphics-display communication and optimal performance with Intel 10th generation processors."
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
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">A2251 Function Key Specialists</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">2020 Intel Model</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">Up to 3 Months Warranty</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Pro A2251<br />
                  <span className="text-blue-200">Display Replacement in Delhi NCR</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  MacLap IT Care offers expert MacBook Pro A2251 Display Replacement services. Our certified technicians have the expertise to confidently tackle this job with advance tools and technology. We offer professional replacement process using high-quality screen to provide you that same user experience back.
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
                    <span className="relative z-10 text-blue-900 font-semibold">Book A2251 Function Key Repair</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">A2251 Quick Facts</h3>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Model:</span>
                      <span className="font-semibold text-right">MacBook Pro 2020 Intel</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Display:</span>
                      <span className="font-semibold">13.3" Retina Function Keys</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Resolution:</span>
                      <span className="font-semibold">2560x1600</span>
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
                  <h2 className="text-3xl font-bold text-foreground mb-4">MacLap IT Care A2251 Service Details</h2>
                  <p className="text-xl text-muted-foreground">
                    Comprehensive information about our MacBook Pro 2020 function key screen replacement service
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
                        <span>Genuine A2251 Retina displays with function key compatibility</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Function key functionality guaranteed</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Intel graphics compatibility verified</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>True Tone calibration tested</span>
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
                        <span>Function key diagnosis within 1 hour</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Retina replacement completed 4-6 hours</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Function key testing and free delivery</span>
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
                  <h2 className="text-3xl font-bold text-foreground mb-4">MacLap IT Care A2251 Service Details</h2>
                  <p className="text-xl text-muted-foreground">
                    Comprehensive information about our MacBook Pro Intel Function Key screen replacement service
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Expert MacBook Pro Intel A2251 Display Replacement Service in Delhi NCR
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The MacLap IT Care technicians are highly trained and experienced in working with Apple products, 
                    especially the Intel Function Key MacBook Pro models. Our expertise in A2251 screen replacement 
                    ensures your device receives professional care with genuine components and precise installation.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Get Up to 3 Month Warranty on MacBook Pro A2251 Screen Replacement
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We provide rock-solid assurance at MacLap IT Care's MacBook Pro Intel Function Key screen replacement service. 
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Common Customer Searches for A2251 Intel Function Key Screen Issues</h2>
            <p className="text-xl text-muted-foreground">
              Popular search terms customers use when looking for MacBook Pro Intel Function Key screen replacement
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Screen Damage Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro intel function key cracked screen</li>
                    <li>• a2251 display broken fix</li>
                    <li>• macbook pro 2020 screen replacement cost</li>
                    <li>• intel function key macbook black screen</li>
                    <li>• macbook pro screen flickering repair</li>
                    <li>• a2251 retina replacement near me</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Location Based Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro screen repair delhi ncr</li>
                    <li>• a2251 display replacement noida</li>
                    <li>• macbook intel function key screen gurgaon</li>
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
                    <li>• a2251 genuine display parts</li>
                    <li>• macbook intel screen repair warranty</li>
                    <li>• apple macbook pro retina replacement</li>
                    <li>• macbook pro display assembly repair</li>
                    <li>• intel function key screen replacement time</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Technical Issue Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro screen lines vertical</li>
                    <li>• a2251 display color distortion</li>
                    <li>• macbook pro backlight not working</li>
                    <li>• intel function key macbook dead pixels</li>
                    <li>• macbook pro screen dim problem</li>
                    <li>• a2251 true tone not working</li>
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
                    we understand exactly what MacBook Pro A2251 Intel Function Key users need when their screen gets damaged.
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
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Pro A2251 FAQ</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about MacBook Pro Intel Function Key 2020 screen replacement
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">How much does A2251 screen replacement cost?</h3>
                <p className="text-muted-foreground">MacBook Pro A2251 screen replacement typically costs between ₹18,000-28,000 depending on display quality and service location in Delhi NCR.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">How long does Intel Function Key MacBook screen repair take?</h3>
                <p className="text-muted-foreground">Standard A2251 screen replacement takes 4-6 hours. We offer same-day service for urgent repairs in Delhi NCR area.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Is A2251 screen compatible with other MacBook models?</h3>
                <p className="text-muted-foreground">No, A2251 uses specific Intel Function Key-compatible Retina display. Only use genuine A2251 replacement screens for proper functionality.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Do you provide warranty on A2251 screen replacement?</h3>
                <p className="text-muted-foreground">Yes, MacLap IT Care provides up to 3 months warranty on A2251 screen replacement including parts and workmanship.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Can you fix A2251 screen lines and display issues?</h3>
                <p className="text-muted-foreground">Yes, we fix all A2251 display problems including vertical lines, color distortion, backlight issues, and dead pixels.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">Do you offer pickup and delivery for A2251 repair?</h3>
                <p className="text-muted-foreground">Yes, we provide free pickup and delivery service across Delhi NCR for A2251 MacBook Pro screen replacement.</p>
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
              Ready to Fix Your MacBook Pro A2251 Screen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional screen replacement for MacBook Pro Intel Function Key 2020 with professional installation and 3-month warranty
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
                onClick={() => window.location.href = `https://wa.me/${CONTACT_INFO.phone2}?text=Hi, I need MacBook Pro A2251 screen replacement service`}
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