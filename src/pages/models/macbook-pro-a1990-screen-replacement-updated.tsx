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

export default function MacBookProA1990ScreenReplacement() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MacBook Pro A1990 Display Replacement in Delhi NCR | Best Service | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert MacBook Pro A1990 Display Replacement in Delhi NCR. MacLap IT Care offers professional 2018-2019 15-inch screen replacement with certified technicians, genuine parts & warranty. Call 9211720790");
    }
  }, []);

  const compatibleModels = [
    "MacBook Pro 15-inch (Mid 2018)",
    "MacBook Pro 15-inch (Mid 2019)",
    "EMC 3215 (2018)",
    "EMC 3359 (2019)",
    "MR932 (Space Gray, 256GB, Radeon Pro 555X)",
    "MR942 (Silver, 256GB, Radeon Pro 555X)",
    "MR962 (Space Gray, 512GB, Radeon Pro 560X)",
    "MR972 (Silver, 512GB, Radeon Pro 560X)",
    "MV902 (Space Gray, 256GB, Radeon Pro 560X)",
    "MV912 (Silver, 256GB, Radeon Pro 560X)"
  ];

  const screenSpecs = [
    { spec: "Display Size", value: "15.4-inch Retina Display" },
    { spec: "Resolution", value: "2880 x 1800 pixels (220 PPI)" },
    { spec: "Technology", value: "IPS LED-backlit display" },
    { spec: "Color Gamut", value: "Wide color (P3), True Tone" },
    { spec: "Brightness", value: "500 nits typical" },
    { spec: "Refresh Rate", value: "60Hz standard" }
  ];

  const damageSymptoms = [
    {
      symptom: "Cracked Retina Display",
      description: "Visible cracks or spider web patterns on large 15-inch display",
      severity: "High",
      urgency: "Immediate replacement needed for professional workflow"
    },
    {
      symptom: "Flexgate Display Issue", 
      description: "Stage light effect at bottom or display cable problems",
      severity: "High",
      urgency: "Known A1990 flex cable issue requiring repair"
    },
    {
      symptom: "Graphics Distortion",
      description: "Display artifacts related to Radeon Pro GPU issues",
      severity: "High",
      urgency: "GPU-display communication problem"
    },
    {
      symptom: "TouchBar Integration Issues",
      description: "Display problems affecting TouchBar functionality",
      severity: "Medium", 
      urgency: "TouchBar-display coordination problem"
    },
    {
      symptom: "True Tone Malfunction",
      description: "Color temperature adjustment not working properly",
      severity: "Medium",
      urgency: "Display sensor calibration issue"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "Comprehensive Diagnostic",
      description: "Complete A1990 Retina display and Flexgate evaluation"
    },
    {
      step: "2", 
      title: "Professional Disassembly",
      description: "Careful removal of A1990 display assembly and TouchBar"
    },
    {
      step: "3",
      title: "Display & Cable Removal",
      description: "Professional removal of damaged screen and flex cables"
    },
    {
      step: "4",
      title: "Quality Component Install",
      description: "Installation of genuine A1990 Retina display with improved cables"
    },
    {
      step: "5",
      title: "Advanced Connection",
      description: "Secure connection of display, True Tone, and TouchBar cables"
    },
    {
      step: "6",
      title: "System Calibration",
      description: "Retina calibration, True Tone verification, TouchBar sync testing"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "A1990 Flexgate Experts",
      description: "Extensive experience with 2018-2019 MacBook Pro display issues"
    },
    {
      icon: Shield,
      title: "Genuine Retina Parts",
      description: "OEM-grade 15.4-inch Retina displays with improved flex cables"
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Certified technicians preventing future Flexgate issues"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Most A1990 Retina screen replacements completed same day"
    },
    {
      icon: Star,
      title: "Up to 3 Month Warranty",
      description: "Comprehensive warranty on Retina display and installation"
    },
    {
      icon: Zap,
      title: "Flexgate Prevention",
      description: "Advanced cable routing to prevent future flex cable issues"
    }
  ];

  const customerReviews = [
    {
      name: "Rajesh Kumar",
      location: "Sector 18, Noida",
      rating: 5,
      review: "My MacBook Pro 2018 had terrible Flexgate stage light effect. MacLap IT Care fixed it perfectly with improved cables. No more display issues! Excellent technical knowledge.",
      device: "MacBook Pro 2018 15-inch"
    },
    {
      name: "Sneha Agarwal", 
      location: "Cyber City, Gurgaon",
      rating: 5,
      review: "Large crack across 15-inch screen from drop. They replaced entire display professionally and now works like new. TouchBar integration perfect. Great service quality.",
      device: "MacBook Pro A1990"
    },
    {
      name: "Vikash Singh",
      location: "Lajpat Nagar, Delhi",
      rating: 4,
      review: "Had graphics distortion and True Tone issues. MacLap IT Care diagnosed display problem and replaced it properly. Professional 2018-2019 MacBook Pro repair service.",
      device: "MacBook Pro Mid 2019"
    }
  ];

  const faqs = [
    {
      question: "What is MacBook Pro A1990 and how do I identify it?",
      answer: "A1990 is the model number for MacBook Pro 15-inch (Mid 2018-2019) with TouchBar - known for Flexgate display cable issues. You can find this number on the bottom of your MacBook or in Apple Menu > About This Mac."
    },
    {
      question: "What's included in A1990 Retina screen replacement service?",
      answer: "Our A1990 screen replacement includes genuine Retina display assembly, improved flex cables, expert installation, quality testing, and 3-month warranty. We also provide free pickup/delivery across Delhi NCR and same-day service."
    },
    {
      question: "Do you fix the Flexgate issue when replacing A1990 screen?",
      answer: "Yes, our A1990 Retina display replacements include improved flex cables and proper routing to prevent future Flexgate issues. We address the root cause while replacing the screen for long-term reliability."
    },
    {
      question: "How long does A1990 Retina screen replacement take?",
      answer: "Most MacBook Pro A1990 screen replacements are completed within 4-6 hours. Same-day service is available for urgent cases. We also offer free pickup and delivery across Delhi NCR."
    },
    {
      question: "Is the A1990 screen replacement covered under warranty?",
      answer: "Yes, we provide up to 3-month comprehensive warranty on A1990 screen replacement including display quality, Flexgate prevention, installation workmanship, and functionality. Complete protection included."
    },
    {
      question: "Can you repair A1990 Flexgate without full screen replacement?",
      answer: "For early-stage Flexgate issues, cable repair may be possible. However, for cracked Retina display or severe flex cable damage, complete display assembly replacement with improved cables is recommended for best results."
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
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">A1990 Flexgate Specialists</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">2018-2019 Model</Badge>
                  <Badge className="bg-white/20 text-white text-xs px-3 py-1">Up to 3 Months Warranty</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Pro A1990<br />
                  <span className="text-blue-200">Display Replacement in Delhi NCR</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  MacLap IT Care offers expert MacBook Pro A1990 Display Replacement services. Our certified technicians have the expertise to confidently tackle this job with advance tools and technology. We offer professional replacement process using high-quality screen to provide you that same user experience back.
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
                    <span className="relative z-10 text-blue-900 font-semibold">Book A1990 Repair</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-2 group-hover:rotate-12 transition-transform duration-300" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">A1990 Quick Facts</h3>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Model:</span>
                      <span className="font-semibold text-right">MacBook Pro 2018-2019</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Display:</span>
                      <span className="font-semibold">15.4" Retina</span>
                    </div>
                    <div className="flex justify-between items-center text-sm lg:text-base">
                      <span className="text-gray-300">Resolution:</span>
                      <span className="font-semibold">2880x1800</span>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Pro A1990 Compatible Models</h2>
            <p className="text-xl text-muted-foreground">
              Verify your exact MacBook Pro 15-inch model before booking Flexgate repair service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  All A1990 Model Variants Supported
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
                    Check the bottom of your MacBook Pro or go to <strong>Apple Menu → About This Mac</strong> to confirm A1990 model number
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

      {/* Compatible Models */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Pro A1990 Compatible Models</h2>
            <p className="text-xl text-muted-foreground">
              Verify your exact MacBook Pro 15-inch TouchBar model before booking Flexgate repair service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  All A1990 Model Variants Supported
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
                    Check the bottom of your MacBook Pro or go to <strong>Apple Menu → About This Mac</strong> to confirm A1990 model number
                  </p>
                  <p className="text-muted-foreground">
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">A1990 Display Technical Specifications</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Detailed specs of your MacBook Pro 15-inch TouchBar 2018-2019 Retina display
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Common A1990 Display & Flexgate Problems</h2>
            <p className="text-xl text-muted-foreground">
              Recognize these symptoms that indicate your A1990 needs screen replacement or Flexgate repair
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
            <h2 className="text-3xl font-bold text-foreground mb-4">A1990 Screen & Flexgate Repair Process</h2>
            <p className="text-xl text-muted-foreground">
              Professional 6-step process for MacBook Pro 15-inch TouchBar display replacement with Flexgate prevention
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose MacLap IT Care for A1990 Flexgate Repair?</h2>
            <p className="text-xl text-muted-foreground">
              Delhi NCR's most trusted MacBook Pro 15-inch TouchBar screen replacement & Flexgate prevention specialists
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
            <h2 className="text-3xl font-bold text-foreground mb-4">A1990 Customer Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real reviews from MacBook Pro 15-inch TouchBar screen replacement & Flexgate repair customers
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
            <h2 className="text-3xl font-bold text-foreground mb-4">MacLap IT Care A1990 Service Details</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive information about our MacBook Pro 15-inch TouchBar screen replacement service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Service Information for A1990 Flexgate & Display Replacement
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-4 px-6 font-semibold text-foreground bg-muted/50">Compatible Display for</td>
                        <td className="py-4 px-6 text-foreground font-medium">MacBook Pro 15-inch A1990 (2018-2019)</td>
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
                        <td className="py-4 px-6 text-green-600 font-medium">Available for Urgent Flexgate Cases</td>
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
                Above mentioned service details may vary based on specific A1990 model requirements and current Flexgate repair availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Service Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Expert MacBook Pro 15-inch A1990 Flexgate & Display Replacement Service in Delhi NCR</h2>
            <p className="text-xl text-muted-foreground">
              The MacLap IT Care technicians are highly trained and experienced in working with Apple products, especially TouchBar models
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Get Up to 3 Month Warranty on MacBook Pro A1990 Screen Replacement
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We provide rock-solid assurance at MacLap IT Care's MacBook Pro A1990 TouchBar screen replacement service. 
                      A comprehensive warranty for up to 3 months with Flexgate prevention guarantee. If unforeseen issues or defects arise with your 
                      replaced screen within the warranty period, we will take care of it efficiently.
                    </p>
                    <p className="text-muted-foreground">
                      Our Warranty covers the quality of the replacement screen, improved flex cables, TouchBar functionality, and our workmanship, giving you 
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
                          <span className="text-muted-foreground">Visit Store: State-of-the-art TouchBar repair facilities</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">Same-Day Service: For urgent Flexgate repair</span>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Common Customer Searches for A1990 TouchBar Screen Issues</h2>
            <p className="text-xl text-muted-foreground">
              Popular search terms customers use when looking for MacBook Pro A1990 TouchBar screen replacement
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Flexgate Issue Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro a1990 flexgate repair</li>
                    <li>• 2018 2019 macbook pro screen cable issue</li>
                    <li>• macbook pro 15 inch stage light problem</li>
                    <li>• a1990 display cable replacement</li>
                    <li>• macbook pro touchbar flexgate fix</li>
                    <li>• 15 inch macbook pro black screen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">TouchBar Specific Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro touchbar screen replacement</li>
                    <li>• a1990 retina display repair</li>
                    <li>• 15 inch touchbar macbook screen</li>
                    <li>• macbook pro touchbar display assembly</li>
                    <li>• intel macbook pro 15 screen repair</li>
                    <li>• touchbar macbook pro cracked screen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Location Based Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro a1990 repair delhi ncr</li>
                    <li>• flexgate repair service noida</li>
                    <li>• macbook pro 15 screen gurgaon</li>
                    <li>• touchbar macbook repair ghaziabad</li>
                    <li>• macbook pro a1990 repair shop near me</li>
                    <li>• macbook pro 15 2018 2019 repair delhi</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Technical Issue Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro a1990 vertical lines</li>
                    <li>• stage light effect macbook screen</li>
                    <li>• macbook pro 15 backlight bleeding</li>
                    <li>• touchbar macbook display flickering</li>
                    <li>• a1990 screen brightness issue</li>
                    <li>• macbook pro 15 color distortion</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Urgent Repair Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• same day macbook pro flexgate repair</li>
                    <li>• emergency touchbar macbook screen fix</li>
                    <li>• urgent macbook pro a1990 repair delhi</li>
                    <li>• fast flexgate problem solution</li>
                    <li>• 24 hour macbook pro 15 repair</li>
                    <li>• instant touchbar screen replacement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Service Comparison Searches</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• macbook pro flexgate repair vs apple</li>
                    <li>• best a1990 repair shop delhi</li>
                    <li>• cheap touchbar macbook screen fix</li>
                    <li>• macbook pro 15 repair reviews</li>
                    <li>• authorized flexgate repair center</li>
                    <li>• genuine vs compatible 15 inch display</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Whatever You Search For, MacLap IT Care Has the Flexgate Solution
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Whether you're dealing with stage light effect, vertical lines, black screen, or complete TouchBar display failure - 
                    we understand exactly what MacBook Pro A1990 users face with Flexgate issues and provide permanent solutions.
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
                      <span className="relative z-10 text-white font-bold">Get Flexgate Quote: {CONTACT_INFO.phone2}</span>
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
                      <span className="relative z-10 text-white font-bold">Book Flexgate Repair</span>
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Pro A1990 Flexgate FAQ</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about MacBook Pro 15-inch TouchBar screen replacement & Flexgate repair
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
              Ready to Fix Your MacBook Pro A1990 Flexgate & Screen Issues?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional Flexgate repair & screen replacement for MacBook Pro 15-inch TouchBar 2018-2019 with improved cables and 3-month warranty
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
                onClick={() => window.location.href = `https://wa.me/${CONTACT_INFO.phone2}?text=Hi, I need MacBook Pro A1990 Flexgate repair and screen replacement service`}
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