import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Laptop, Phone, MessageCircle, Clock, Shield, Wrench, HardDrive, Cpu, Zap, Monitor, MapPin, Calendar, Award, Settings, Keyboard } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function HPLaptopRepairNoida() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "HP Laptop Repair Noida | Pavilion Envy EliteBook ProBook Omen Repair Service Delhi NCR | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert HP laptop repair in Noida for Pavilion, Envy, EliteBook, ProBook, Omen models. Keyboard replacement, charging port repair, display backlight fix. Same day service, 3 months warranty. Call 9211720790");
    }

    // Add keywords meta tag
    const keywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    keywords.setAttribute('name', 'keywords');
    keywords.setAttribute('content', 'HP laptop repair Noida, Pavilion repair, Envy repair, EliteBook repair, ProBook repair, Omen repair, HP keyboard replacement, HP charging port repair, HP screen replacement, HP hinge repair Noida, HP battery replacement');
    if (!document.head.contains(keywords)) {
      document.head.appendChild(keywords);
    }
  }, []);

  const hpModels = [
    {
      series: "HP Pavilion Series",
      models: ["Pavilion 15", "Pavilion x360", "Pavilion Gaming 15", "Pavilion 14", "Pavilion 13", "Pavilion aero 13"],
      commonIssues: ["Keyboard malfunction", "Charging port loose", "Screen hinge broken", "Audio problems", "Overheating issues"],
      repairTypes: ["Keyboard replacement", "Charging port repair", "Hinge replacement", "Speaker replacement", "Thermal cleaning"],
      searchTerms: ["Pavilion 15 repair Noida", "Pavilion keyboard replacement", "Pavilion charging port fix"],
      priceRange: "Screen ₹3,200+, Battery ₹2,600+, Keyboard ₹1,600+"
    },
    {
      series: "HP Envy Series",
      models: ["Envy x360", "Envy 13", "Envy 15", "Envy 17", "Envy x360 Convert", "Envy Laptop 13"],
      commonIssues: ["Touch screen calibration", "Premium audio failure", "Convertible hinge issues", "Backlight problems", "Performance throttling"],
      repairTypes: ["Touch screen repair", "Audio system fix", "360-degree hinge repair", "Backlight replacement", "Cooling optimization"],
      searchTerms: ["Envy x360 repair Noida", "Envy touch screen repair", "Envy hinge replacement"],
      priceRange: "Screen ₹6,500+, Battery ₹3,800+, Hinge ₹4,200+"
    },
    {
      series: "HP EliteBook Series",
      models: ["EliteBook 840", "EliteBook 850", "EliteBook x360", "EliteBook 1040", "EliteBook 1030", "EliteBook Folio"],
      commonIssues: ["Business security features", "Docking connectivity", "Enterprise software", "Multi-monitor setup", "VPN connectivity"],
      repairTypes: ["Security module repair", "Docking port service", "Enterprise setup", "Display configuration", "Network troubleshooting"],
      searchTerms: ["EliteBook 840 repair", "Business laptop repair Noida", "HP enterprise repair"],
      priceRange: "Screen ₹5,500+, Battery ₹4,200+, Motherboard ₹14,000+"
    },
    {
      series: "HP ProBook Series",
      models: ["ProBook 450", "ProBook 455", "ProBook 650", "ProBook 440", "ProBook 470", "ProBook x360"],
      commonIssues: ["Corporate productivity", "Network adapter failure", "BIOS corruption", "Port connectivity", "Performance issues"],
      repairTypes: ["Network module replacement", "BIOS recovery", "Port repair service", "Performance upgrade", "Software optimization"],
      searchTerms: ["ProBook 450 repair Noida", "HP business repair", "ProBook network fix"],
      priceRange: "Screen ₹4,000+, Battery ₹3,200+, RAM Upgrade ₹2,800+"
    },
    {
      series: "HP Omen Gaming",
      models: ["Omen 15", "Omen 17", "Omen 16", "Omen by HP", "Omen X", "Omen Gaming Hub"],
      commonIssues: ["Gaming performance drop", "RGB keyboard failure", "Graphics overheating", "Gaming display lag", "Cooling system noise"],
      repairTypes: ["Gaming optimization", "RGB keyboard repair", "GPU thermal management", "High refresh display", "Advanced cooling"],
      searchTerms: ["Omen 15 repair Noida", "Gaming laptop repair", "Omen overheating fix"],
      priceRange: "Screen ₹8,500+, GPU Repair ₹22,000+, Cooling ₹6,500+"
    },
    {
      series: "HP Spectre Series",
      models: ["Spectre x360", "Spectre 13", "Spectre 14", "Spectre Folio", "Spectre x2", "Spectre Laptop"],
      commonIssues: ["Premium build quality", "Ultra-thin design issues", "High-end display problems", "Stylus functionality", "Convertible mechanisms"],
      repairTypes: ["Ultra-thin repair", "Premium display service", "Stylus calibration", "Convertible hinge", "Precision engineering"],
      searchTerms: ["Spectre x360 repair", "Premium HP repair Noida", "Spectre touch repair"],
      priceRange: "Screen ₹12,000+, Battery ₹5,500+, Hinge ₹8,000+"
    }
  ];

  const commonRepairIssues = [
    {
      issue: "HP Laptop Keyboard Replacement",
      description: "Professional HP laptop keyboard replacement with genuine parts for all HP models",
      symptoms: ["Keys not working", "Sticky keys", "Missing keys", "Backlight issues", "Liquid damage"],
      solution: "Complete keyboard replacement with backlight setup",
      timeframe: "2-3 hours",
      icon: Keyboard
    },
    {
      issue: "HP Charging Port Repair",
      description: "Expert HP laptop charging port repair and DC jack replacement service",
      symptoms: ["Loose charging connection", "No charging", "Intermittent charging", "Sparking charger", "Broken charging port"],
      solution: "DC jack replacement, charging circuit repair",
      timeframe: "3-4 hours",
      icon: Zap
    },
    {
      issue: "HP Screen Replacement",
      description: "Quality HP laptop screen replacement for LCD, LED, and touch displays",
      symptoms: ["Cracked screen", "Black display", "Lines on screen", "Flickering", "Touch not working"],
      solution: "Professional screen replacement with calibration",
      timeframe: "2-4 hours",
      icon: Monitor
    },
    {
      issue: "HP Hinge Repair",
      description: "Complete HP laptop hinge repair and replacement service for all models",
      symptoms: ["Screen wobbling", "Broken hinge", "Cannot close laptop", "Hinge clicking noise", "Screen falling back"],
      solution: "Hinge replacement, screen alignment, body repair",
      timeframe: "3-5 hours",
      icon: Settings
    },
    {
      issue: "HP Battery Replacement",
      description: "Original HP battery replacement with power calibration and optimization",
      symptoms: ["Battery not charging", "Short battery life", "Battery swelling", "Power issues", "Only works with charger"],
      solution: "Genuine HP battery with power optimization",
      timeframe: "1-2 hours",
      icon: HardDrive
    },
    {
      issue: "HP Overheating Repair",
      description: "Complete thermal management solutions for HP laptops with professional cleaning",
      symptoms: ["Laptop very hot", "Fan noise", "Sudden shutdowns", "Performance slow", "Thermal throttling"],
      solution: "Deep cleaning, thermal paste, fan repair",
      timeframe: "3-4 hours",
      icon: Cpu
    }
  ];

  const noidaServiceAreas = [
    "Sector 16", "Sector 18", "Sector 25", "Sector 27", "Sector 29", "Sector 34",
    "Sector 37", "Sector 41", "Sector 45", "Sector 50", "Sector 51", "Sector 52",
    "Sector 61", "Sector 62", "Sector 63", "Sector 76", "Sector 78", "Sector 104",
    "Sector 125", "Sector 135", "City Centre", "Wave City", "Atta Market",
    "Botanical Garden", "Golf Course", "Film City", "Knowledge Park", "Pari Chowk",
    "Alpha Commercial Belt", "Greater Noida West", "Techzone 4", "Beta Greater Noida"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-900 via-red-800 to-orange-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6 text-lg px-6 py-2">
              Noida's #1 HP Laptop Repair Specialist
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              HP Laptop Repair Noida
              <br />
              <span className="text-orange-300">Pavilion Envy EliteBook ProBook Omen</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Expert HP laptop repair services in Noida Greater Noida. Professional repair for Pavilion, Envy, EliteBook, ProBook, Omen models. Keyboard replacement, charging port repair, screen replacement with same day service and 3 months warranty.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-white text-orange-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center space-x-2 text-lg"
              >
                <Phone className="h-6 w-6" />
                <span>Call: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20HP%20laptop%20repair%20in%20Noida`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                WhatsApp for Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HP Models Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete HP Laptop Models Coverage in Noida
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Expert repair services for all HP laptop series with genuine parts, certified technicians, and comprehensive warranty
              </p>
              <div className="w-24 h-1 bg-orange-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hpModels.map((model, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-orange-600">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-orange-700">{model.series}</CardTitle>
                    <div className="text-sm text-gray-600 mt-2">
                      <strong>Models:</strong> {model.models.slice(0, 3).join(", ")}
                      {model.models.length > 3 && "..."}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">COMMON ISSUES:</h4>
                      <div className="space-y-1">
                        {model.commonIssues.map((issue, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs">
                            <CheckCircle className="h-3 w-3 text-orange-500" />
                            <span>{issue}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">OUR SOLUTIONS:</h4>
                      <div className="space-y-1">
                        {model.repairTypes.map((repair, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs">
                            <Settings className="h-3 w-3 text-green-500" />
                            <span>{repair}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 mt-4">
                      <div className="text-xs text-orange-600 font-semibold mb-1">Starting Prices:</div>
                      <div className="text-xs text-gray-700">{model.priceRange}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common HP Repair Issues */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Most Common HP Laptop Problems We Fix in Noida
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Professional solutions for all HP laptop issues with fast diagnosis, genuine parts, and expert repair service
              </p>
              <div className="w-24 h-1 bg-orange-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonRepairIssues.map((repair, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white border-t-4 border-orange-600">
                  <CardHeader className="text-center pb-4">
                    <repair.icon className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                    <CardTitle className="text-xl text-gray-900">{repair.issue}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{repair.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">SYMPTOMS:</h4>
                      <div className="space-y-1">
                        {repair.symptoms.map((symptom, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs">
                            <ArrowRight className="h-3 w-3 text-red-500" />
                            <span>{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">OUR SOLUTION:</h4>
                      <p className="text-xs text-green-700">{repair.solution}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <span className="text-orange-600 font-semibold">{repair.timeframe}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-green-500" />
                        <span className="text-green-600 font-semibold">3 Months Warranty</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Don't See Your HP Problem Listed?</h3>
                <p className="text-lg mb-6">Our expert technicians can diagnose and fix any HP laptop issue. Contact us for free consultation!</p>
                <a
                  href={`tel:+91${CONTACT_INFO.phone1}`}
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Get Free Diagnosis: {CONTACT_INFO.phone1}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                HP Laptop Repair Service Areas in Noida Greater Noida
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Professional doorstep HP laptop repair services available across all Noida sectors with free pickup and delivery
              </p>
              <div className="w-24 h-1 bg-orange-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {noidaServiceAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <MapPin className="h-5 w-5 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">{area}</p>
                  <p className="text-xs text-gray-600">HP Repair Available</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Free Doorstep HP Laptop Repair Service!</h3>
                <p className="text-lg mb-6">We provide free pickup and delivery service for HP laptop repair across all Noida Greater Noida locations</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-6 w-6" />
                    <span>All Sectors Covered</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="h-6 w-6" />
                    <span>Same Day Service</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="h-6 w-6" />
                    <span>3 Months Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose MacLap IT Care for HP Laptop Repair in Noida?
              </h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Award className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">HP Certified Technicians</h3>
                  <p className="text-gray-600">Expert technicians specialized in HP laptop repair with years of experience</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Clock className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Same Day Service</h3>
                  <p className="text-gray-600">Most HP laptop repairs completed within 2-4 hours with genuine parts</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Shield className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">3 Months Warranty</h3>
                  <p className="text-gray-600">Comprehensive warranty on all HP repair services with quality guarantee</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Star className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">5000+ Happy Customers</h3>
                  <p className="text-gray-600">Trusted by thousands of HP laptop users across Noida Greater Noida</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get Your HP Laptop Fixed Today!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact MacLap IT Care for fast, reliable, and affordable HP laptop repair services in Noida Greater Noida
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors flex items-center space-x-2 text-lg"
              >
                <Phone className="h-6 w-6" />
                <span>Call Now: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20HP%20laptop%20repair%20service%20in%20Noida`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-colors text-lg"
              >
                WhatsApp for Instant Quote
              </a>
            </div>
            <div className="mt-8 text-lg opacity-90">
              <p>📍 Serving all HP models in Noida Greater Noida | 🕒 Available 24/7 | 🚚 Free Pickup & Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Booking Modal */}
      <ServiceBookingModal 
        isOpen={isBookingModalOpen} 
        setIsOpen={setIsBookingModalOpen}
        serviceType="HP Laptop Repair"
      />
    </div>
  );
}