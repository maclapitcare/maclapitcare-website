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

export default function MacBookAirA2337ScreenReplacement() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MacBook Air A2337 Display Replacement in Delhi | Best Service | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert MacBook Air A2337 Display Replacement in Delhi NCR. MacLap IT Care offers professional M1 screen replacement with certified technicians, genuine parts & warranty. Call 9211720790");
    }
  }, []);

  const compatibleModels = [
    "MacBook Air 13-inch M1 (2020)",
    "EMC 3598",
    "MGN63 (Space Gray, 256GB)",
    "MGN93 (Silver, 256GB)", 
    "MGND3 (Gold, 256GB)",
    "MGN73 (Space Gray, 512GB)",
    "MGNA3 (Silver, 512GB)",
    "MGNE3 (Gold, 512GB)"
  ];

  const screenSpecs = [
    { spec: "Display Size", value: "13.3-inch Retina Display" },
    { spec: "Resolution", value: "2560 x 1600 pixels (227 PPI)" },
    { spec: "Technology", value: "IPS LED-backlit display" },
    { spec: "Color Gamut", value: "Wide color (P3), True Tone" },
    { spec: "Brightness", value: "400 nits typical" },
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
      description: "Permanent bright or dark spots on screen",
      severity: "Low",
      urgency: "Cosmetic but may spread"
    },
    {
      symptom: "Backlight Failure",
      description: "Dim display, visible only with flashlight",
      severity: "High",
      urgency: "Backlight replacement required"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "A2337 Model Verification",
      description: "Confirm exact model number and display compatibility"
    },
    {
      step: "2", 
      title: "Complete Disassembly",
      description: "Careful removal of bottom case, battery, and display cables"
    },
    {
      step: "3",
      title: "Display Assembly Removal", 
      description: "Precise removal of damaged 13.3-inch Retina display"
    },
    {
      step: "4",
      title: "Quality Component Install",
      description: "Installation of genuine A2337-compatible display assembly"
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
      title: "A2337 Specialists",
      description: "Extensive experience with MacBook Air M1 2020 display replacements"
    },
    {
      icon: Shield,
      title: "Genuine Display Parts",
      description: "OEM-grade 13.3-inch Retina displays with True Tone compatibility"
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Certified technicians ensuring perfect fit and functionality"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Most A2337 screen replacements completed same day"
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
      review: "Dropped my MacBook and screen cracked completely. These guys fixed it in same day. Display looks exactly like before - True Tone and everything working fine. Fair price too.",
      device: "MacBook Air M1"
    },
    {
      name: "Sneha Agarwal", 
      location: "Cyber City, Gurgaon",
      rating: 5,
      review: "Had weird green lines on screen for weeks. Thought laptop was done for. But they replaced the display and now it's perfect. Really happy with their work.",
      device: "MacBook Air 2020"
    },
    {
      name: "Vikash Singh",
      location: "Lajpat Nagar, Delhi",
      rating: 4,
      review: "Screen went black suddenly during work. Took to MacLap IT Care and they diagnosed LCD issue quickly. Replacement was done in few hours. Only wish warranty was longer but overall good experience.",
      device: "MacBook Air M1"
    }
  ];

  const faqs = [
    {
      question: "What is MacBook Air A2337 and how do I identify it?",
      answer: "A2337 is the model number for MacBook Air 13-inch M1 (2020). You can find this number on the bottom of your MacBook or in Apple Menu > About This Mac. It includes all M1 MacBook Air variants released in late 2020."
    },
    {
      question: "What's included in A2337 screen replacement service?",
      answer: "Our A2337 screen replacement includes genuine display assembly, expert installation, quality testing, and 3-month warranty. We also provide free pickup/delivery across Delhi NCR and same-day service for urgent cases."
    },
    {
      question: "Will the replacement screen support True Tone on my A2337?",
      answer: "Yes, our genuine A2337 display assemblies fully support True Tone, P3 wide color gamut, and all original features. The replacement maintains the same 2560x1600 resolution and 400 nits brightness as original."
    },
    {
      question: "How long does A2337 screen replacement take?",
      answer: "Most MacBook Air A2337 screen replacements are completed within 4-6 hours. Same-day service is available for urgent cases. We also offer free pickup and delivery across Delhi NCR."
    },
    {
      question: "Is the A2337 screen replacement covered under warranty?",
      answer: "Yes, we provide up to 3-month comprehensive warranty on A2337 screen replacement including display quality, installation workmanship, and functionality. No questions asked replacement if any issues arise."
    },
    {
      question: "Can you repair A2337 screen damage without full replacement?",
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
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">A2337 Specialists</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">M1 2020 Model</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">Up to 3 Months Warranty</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Air A2337<br />
                  <span className="text-blue-200">Display Replacement in Delhi NCR</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  MacLap IT Care offers expert MacBook Air A2337 Display Replacement services. Our certified technicians have the expertise to confidently tackle this job with advance tools and technology. We offer professional replacement process using high-quality screen to provide you that same user experience back.
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
                    <span className="relative z-10 text-blue-900 font-semibold">Book A2337 Screen Repair</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">A2337 Quick Facts</h3>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Model:</span>
                      <span className="font-semibold text-right">MacBook Air M1 2020</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Display:</span>
                      <span className="font-semibold">13.3" Retina</span>
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

      {/* Compatible Models */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Air A2337 Compatible Models</h2>
            <p className="text-xl text-muted-foreground">
              Verify your exact MacBook Air M1 2020 model before booking repair service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  All A2337 Model Variants Supported
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

            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6">
              <h4 className="text-lg font-bold text-foreground mb-4 text-center">How to Find Your Model Number</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-muted-foreground mb-3">
                    Check the bottom of your MacBook Air or go to <strong>Apple Menu → About This Mac</strong> to confirm A2337 model number
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Look for the model number printed on the bottom case of your MacBook, as shown in the example image.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={appleModelNumberImage} 
                    alt="Apple MacBook model number location - shows where to find model number A1990 on the bottom of MacBook with red circle highlighting the location"
                    className="max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Display Specifications */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">A2337 Display Technical Specifications</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Detailed specs of your MacBook Air M1 2020 Retina display
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {screenSpecs.map((spec, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 px-4 bg-muted/30 rounded-lg">
                      <span className="font-medium text-muted-foreground text-sm lg:text-base mb-1 sm:mb-0">{spec.spec}:</span>
                      <span className="font-bold text-foreground text-sm lg:text-base sm:text-right">{spec.value}</span>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Common A2337 Display Problems</h2>
            <p className="text-xl text-muted-foreground">
              Recognize these symptoms that indicate your A2337 needs screen replacement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {damageSymptoms.map((damage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <AlertTriangle className={`h-6 w-6 mt-1 flex-shrink-0 ${
                      damage.severity === 'High' ? 'text-red-500' : 
                      damage.severity === 'Medium' ? 'text-orange-500' : 'text-yellow-500'
                    }`} />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{damage.symptom}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{damage.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant={damage.severity === 'High' ? 'destructive' : 'secondary'}>
                          {damage.severity} Priority
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 italic">{damage.urgency}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">A2337 Screen Replacement Process</h2>
            <p className="text-xl text-muted-foreground">
              Professional 6-step process for MacBook Air M1 2020 display replacement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {repairProcess.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us for A2337 Repair?</h2>
            <p className="text-xl text-muted-foreground">
              Delhi NCR's most trusted MacBook Air M1 2020 screen replacement specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">A2337 Customer Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real reviews from MacBook Air M1 2020 screen replacement customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {customerReviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                      <p className="text-xs text-primary font-medium">{review.device}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm italic">"{review.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details & Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">MacLap IT Care A2337 Service Details</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive information about our MacBook Air M1 screen replacement service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Service Information for A2337 Display Replacement
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-4 px-6 font-semibold text-foreground bg-muted/50">Compatible Display for</td>
                        <td className="py-4 px-6 text-foreground font-medium">MacBook Air M1 A2337 (2020)</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-4 px-6 font-semibold text-foreground bg-muted/50">Warranty</td>
                        <td className="py-4 px-6 text-green-600 font-medium">Up To 3 Months</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-4 px-6 font-semibold text-foreground bg-muted/50">At Store Service Time</td>
                        <td className="py-4 px-6 text-foreground font-medium">4-6 Hours</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-4 px-6 font-semibold text-foreground bg-muted/50">Home Pick & Drop</td>
                        <td className="py-4 px-6 text-green-600 font-medium">Free in Delhi NCR</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-4 px-6 font-semibold text-foreground bg-muted/50">Same Day Service</td>
                        <td className="py-4 px-6 text-green-600 font-medium">Available for Urgent Cases</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-semibold text-foreground bg-muted/50">Service Guarantee</td>
                        <td className="py-4 px-6 text-green-600 font-medium">No Fix, No Fee Policy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 text-center">
              <h4 className="text-lg font-bold text-foreground mb-2">Note:</h4>
              <p className="text-muted-foreground">
                Above mentioned service details may vary based on specific model requirements and current service availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Service Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Expert MacBook Air M1 A2337 Display Replacement Service in Delhi NCR</h2>
            <p className="text-xl text-muted-foreground">
              The MacLap IT Care technicians are highly trained and experienced in working with Apple products
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Get Up to 3 Month Warranty on MacBook Air A2337 Screen Replacement
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We provide rock-solid assurance at MacLap IT Care's MacBook Air M1 screen replacement service. 
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Common Customer Searches for A2337 Screen Issues</h2>
            <p className="text-xl text-muted-foreground">
              Popular search terms customers use when looking for MacBook Air M1 screen replacement
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Screen Damage Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook air m1 cracked screen repair</li>
                    <li>• a2337 display broken fix</li>
                    <li>• macbook air 2020 screen replacement cost</li>
                    <li>• m1 macbook air black screen problem</li>
                    <li>• macbook air screen flickering repair</li>
                    <li>• a2337 lcd replacement near me</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Location Based Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook air screen repair delhi ncr</li>
                    <li>• a2337 display replacement noida</li>
                    <li>• macbook m1 screen fix gurgaon</li>
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
                    <li>• a2337 genuine display parts</li>
                    <li>• macbook m1 screen repair warranty</li>
                    <li>• apple macbook air lcd replacement</li>
                    <li>• macbook air retina display repair</li>
                    <li>• m1 macbook screen replacement time</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Technical Issue Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook air screen lines vertical</li>
                    <li>• a2337 display color distortion</li>
                    <li>• macbook air backlight not working</li>
                    <li>• m1 macbook dead pixels fix</li>
                    <li>• macbook air screen dim problem</li>
                    <li>• a2337 true tone not working</li>
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
                    we understand exactly what MacBook Air A2337 users need when their screen gets damaged.
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
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Air A2337 FAQ</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about MacBook Air M1 2020 screen replacement
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Fix Your MacBook Air A2337 Screen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional screen replacement for MacBook Air M1 2020 with professional installation and 3-month warranty
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
                onClick={() => window.location.href = `https://wa.me/${CONTACT_INFO.phone2}?text=Hi, I need MacBook Air A2337 screen replacement service`}
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