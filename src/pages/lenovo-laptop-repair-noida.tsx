import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Laptop, Phone, MessageCircle, Clock, Shield, Wrench, HardDrive, Cpu, Zap, Monitor, MapPin, Calendar, Award, Settings, Keyboard } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function LenovoLaptopRepairNoida() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "Lenovo Laptop Repair Noida | ThinkPad IdeaPad Legion Yoga ThinkBook Repair Service Delhi NCR | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert Lenovo laptop repair in Noida for ThinkPad, IdeaPad, Legion, Yoga, ThinkBook models. Keyboard replacement, motherboard repair, screen replacement. Same day service, up to 3 months warranty. Call 9211720790");
    }

    // Add keywords meta tag
    const keywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    keywords.setAttribute('name', 'keywords');
    keywords.setAttribute('content', 'Lenovo laptop repair Noida, ThinkPad repair, IdeaPad repair, Legion repair, Yoga repair, ThinkBook repair, Lenovo keyboard replacement, Lenovo motherboard repair, Lenovo screen replacement, Lenovo hinge repair Noida');
    if (!document.head.contains(keywords)) {
      document.head.appendChild(keywords);
    }
  }, []);

  const lenovoModels = [
    {
      series: "Lenovo ThinkPad Series",
      models: ["ThinkPad X1 Carbon", "ThinkPad T14", "ThinkPad E15", "ThinkPad L15", "ThinkPad P1", "ThinkPad X13"],
      commonIssues: ["TrackPoint malfunction", "Keyboard backlight failure", "Docking station issues", "BIOS password", "Business connectivity"],
      repairTypes: ["TrackPoint replacement", "Keyboard backlight repair", "Docking port service", "BIOS recovery", "Enterprise setup"],
      searchTerms: ["ThinkPad X1 repair Noida", "ThinkPad keyboard replacement", "ThinkPad docking issues"]
    },
    {
      series: "Lenovo IdeaPad Series",
      models: ["IdeaPad 3", "IdeaPad 5", "IdeaPad Slim 3", "IdeaPad Gaming 3", "IdeaPad Flex 5", "IdeaPad S145"],
      commonIssues: ["Slow performance", "Battery draining fast", "Overheating problems", "Audio not working", "Wi-Fi connectivity"],
      repairTypes: ["Performance optimization", "Battery replacement", "Thermal cleaning", "Audio driver fix", "Wi-Fi module repair"],
      searchTerms: ["IdeaPad 3 repair Noida", "IdeaPad slow performance fix", "IdeaPad battery replacement"]
    },
    {
      series: "Lenovo Legion Gaming",
      models: ["Legion 5", "Legion 7", "Legion Y540", "Legion Y740", "Legion Slim 7", "Legion 5 Pro"],
      commonIssues: ["Gaming performance drop", "RGB lighting failure", "Thermal throttling", "Graphics issues", "High-end cooling problems"],
      repairTypes: ["Gaming optimization", "RGB system repair", "Advanced cooling", "GPU troubleshooting", "Performance tuning"],
      searchTerms: ["Legion 5 repair Noida", "Gaming laptop repair", "Legion overheating fix"]
    },
    {
      series: "Lenovo Yoga Series",
      models: ["Yoga 9i", "Yoga 7i", "Yoga Slim 7", "Yoga C940", "Yoga 6", "Yoga Book"],
      commonIssues: ["Touch screen calibration", "360-degree hinge problems", "Stylus not working", "Convertible mode issues", "Premium display problems"],
      repairTypes: ["Touch screen repair", "Hinge mechanism service", "Stylus calibration", "Mode switching fix", "Premium display service"],
      searchTerms: ["Yoga 9i repair Noida", "Yoga touch screen repair", "Yoga hinge replacement"]
    },
    {
      series: "Lenovo ThinkBook Series",
      models: ["ThinkBook 15", "ThinkBook 14", "ThinkBook 13s", "ThinkBook 16p", "ThinkBook Plus", "ThinkBook 13x"],
      commonIssues: ["Modern design issues", "USB-C connectivity", "Performance optimization", "Business productivity", "Multi-tasking problems"],
      repairTypes: ["Modern port repair", "USB-C service", "Performance upgrade", "Productivity setup", "Multi-tasking optimization"],
      searchTerms: ["ThinkBook 15 repair", "Business laptop repair Noida", "ThinkBook performance fix"]
    },
    {
      series: "Lenovo V Series",
      models: ["V15", "V14", "V130", "V145", "V330", "V320"],
      commonIssues: ["Budget laptop limitations", "Performance upgrades", "Storage problems", "Basic connectivity", "Value optimization"],
      repairTypes: ["Performance enhancement", "Storage upgrade", "Memory expansion", "Connectivity improvement", "Value engineering"],
      searchTerms: ["Lenovo V15 repair", "Budget laptop repair Noida", "Lenovo V series upgrade"]
    }
  ];

  const commonRepairIssues = [
    {
      issue: "Lenovo Keyboard Replacement",
      description: "Professional Lenovo laptop keyboard replacement with genuine parts for all ThinkPad and IdeaPad models",
      symptoms: ["Keys not responding", "Sticky keys", "Backlight not working", "Missing keys", "Water damage"],
      solution: "Complete keyboard replacement with TrackPoint setup",
      timeframe: "2-3 hours",
      icon: Keyboard
    },
    {
      issue: "Lenovo Motherboard Repair",
      description: "Advanced chip-level motherboard repair for Lenovo laptops with component replacement",
      symptoms: ["No power", "Boot failure", "USB ports dead", "Charging problems", "Random shutdowns"],
      solution: "Component-level repair, chip replacement, circuit fixes",
      timeframe: "1-3 days",
      icon: Settings
    },
    {
      issue: "Lenovo Screen Replacement",
      description: "Quality Lenovo laptop screen replacement for LCD, LED, and touch displays",
      symptoms: ["Cracked screen", "Black display", "Dead pixels", "Flickering screen", "Lines on display"],
      solution: "Professional screen replacement with calibration",
      timeframe: "2-4 hours",
      icon: Monitor
    },
    {
      issue: "Lenovo Overheating Repair",
      description: "Complete thermal management solutions for Lenovo laptops with professional cleaning",
      symptoms: ["Laptop very hot", "Fan running loud", "Sudden shutdowns", "Performance throttling", "Blue screen errors"],
      solution: "Deep cleaning, thermal paste, fan replacement",
      timeframe: "3-4 hours",
      icon: Cpu
    },
    {
      issue: "Lenovo Battery Replacement",
      description: "Original Lenovo battery replacement with power calibration and optimization",
      symptoms: ["Battery not charging", "Very short battery life", "Battery swelling", "Power issues", "Only works with adapter"],
      solution: "Genuine Lenovo battery with optimization",
      timeframe: "1-2 hours",
      icon: HardDrive
    },
    {
      issue: "Lenovo Hinge Repair",
      description: "Complete Lenovo laptop hinge repair and replacement service for all models",
      symptoms: ["Screen wobbling", "Broken hinge", "Cannot open/close", "Hinge clicking", "Screen falling back"],
      solution: "Hinge replacement, screen alignment, body repair",
      timeframe: "3-5 hours",
      icon: Wrench
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6 text-lg px-6 py-2">
              Noida's #1 Lenovo Laptop Repair Specialist
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Lenovo Laptop Repair Noida
              <br />
              <span className="text-blue-300">ThinkPad IdeaPad Legion Yoga ThinkBook</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Expert Lenovo laptop repair services in Noida Greater Noida. Professional repair for ThinkPad, IdeaPad, Legion, Yoga, ThinkBook models. Keyboard replacement, motherboard repair, screen replacement with same day service and up to 3 months warranty.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center space-x-2 text-lg"
              >
                <Phone className="h-6 w-6" />
                <span>Call: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20Lenovo%20laptop%20repair%20in%20Noida`}
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

      {/* MacLap IT Care Introduction Section */}
      <section className="py-8 md:py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                MacLap IT Care - <span className="text-blue-600">Lenovo Laptop Repair Specialists</span> in Noida
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
                <strong className="text-blue-700">MacLap IT Care</strong> provides comprehensive Lenovo laptop repair services across all sectors of Noida, Greater Noida, and Delhi NCR. Our expert technicians specialize in repairing all Lenovo laptop series including <strong>ThinkPad, IdeaPad, Legion, Yoga, ThinkBook, and V Series</strong>. We cover all major Lenovo laptop problems from <strong>keyboard replacement and motherboard repair to screen replacement, hinge repair, battery replacement, and overheating solutions</strong>. 
                <br /><br />
                With <strong>same-day service availability</strong>, genuine Lenovo-compatible parts, and up to 3 months warranty, we ensure your Lenovo laptop gets back to peak performance quickly. Our service areas include major Noida sectors (18, 62, 15, 16, 50, 51, 100, 110, 121, 132), Greater Noida zones (Knowledge Park, Alpha Belt, Techzone), and nearby Delhi NCR locations. Whether it's a business ThinkPad, gaming Legion, or convertible Yoga model, our certified technicians provide professional diagnosis and repair with transparent pricing and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lenovo Models Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Lenovo Laptop Models Coverage in Noida
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Expert repair services for all Lenovo laptop series with genuine parts, certified technicians, and up to 3 months comprehensive warranty
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lenovoModels.map((model, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-blue-700">{model.series}</CardTitle>
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
                            <CheckCircle className="h-3 w-3 text-blue-500" />
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
                      <div className="text-xs text-blue-600 font-semibold mb-1">Professional Repair:</div>
                      <div className="text-xs text-gray-700">Contact for competitive quote</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Lenovo Repair Issues */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Most Common Lenovo Laptop Problems We Fix in Noida
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Professional solutions for all Lenovo laptop issues with fast diagnosis, genuine parts, and expert repair service
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonRepairIssues.map((repair, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white border-t-4 border-blue-600">
                  <CardHeader className="text-center pb-4">
                    <repair.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
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
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span className="text-blue-600 font-semibold">{repair.timeframe}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-green-500" />
                        <span className="text-green-600 font-semibold">Up to 3 Months Warranty</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Don't See Your Lenovo Problem Listed?</h3>
                <p className="text-lg mb-6">Our expert technicians can diagnose and fix any Lenovo laptop issue. Contact us for free consultation!</p>
                <a
                  href={`tel:+91${CONTACT_INFO.phone1}`}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Get Free Diagnosis: {CONTACT_INFO.phone1}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Lenovo Laptop Issues in Noida */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <Wrench className="h-3 w-3 md:h-4 md:w-4" />
              Lenovo Repair Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              <span className="text-green-600">Common Lenovo Laptop</span> Issues in Noida
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Professional solutions for all Lenovo laptop problems with quick diagnosis and expert repair services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {commonRepairIssues.map((issue, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-2 hover:border-blue-200 rounded-xl">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <issue.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-blue-700 font-bold">{issue.issue}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{issue.description}</p>
                  
                  <div>
                    <p className="text-xs font-semibold text-red-600 mb-2">SYMPTOMS:</p>
                    <div className="space-y-1">
                      {issue.symptoms.map((symptom, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600">{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-semibold text-green-600">SOLUTION:</p>
                      <Badge className="bg-blue-50 text-blue-600 text-xs">{issue.timeframe}</Badge>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{issue.solution}</p>
                  </div>

                  <Button 
                    onClick={handleBookService}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 text-sm"
                  >
                    Get Repair Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Don't See Your Lenovo Problem Listed?</h3>
              <p className="text-lg mb-6">Our expert technicians can diagnose and fix any Lenovo laptop issue. Contact us for free consultation!</p>
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Get Free Diagnosis: {CONTACT_INFO.phone1}</span>
              </a>
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
                Lenovo Laptop Repair Service Areas in Noida Greater Noida
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Professional doorstep Lenovo laptop repair services available across all Noida sectors with free pickup and delivery
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {noidaServiceAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">{area}</p>
                  <p className="text-xs text-gray-600">Lenovo Repair Available</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Free Doorstep Lenovo Laptop Repair Service!</h3>
                <p className="text-lg mb-6">We provide free pickup and delivery service for Lenovo laptop repair across all Noida Greater Noida locations</p>
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
                    <span>Up to 3 Months Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose MacLap IT Care for Lenovo Laptop Repair in Noida?
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Lenovo Certified Technicians</h3>
                  <p className="text-gray-600">Expert technicians specialized in Lenovo laptop repair with years of experience</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Clock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Same Day Service</h3>
                  <p className="text-gray-600">Most Lenovo laptop repairs completed within 2-4 hours with genuine parts</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Up to 3 Months Warranty</h3>
                  <p className="text-gray-600">Up to 3 months comprehensive warranty on all Lenovo repair services with quality guarantee</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Star className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">5000+ Happy Customers</h3>
                  <p className="text-gray-600">Trusted by thousands of Lenovo laptop users across Noida Greater Noida</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get Your Lenovo Laptop Fixed Today!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact MacLap IT Care for fast, reliable, and affordable Lenovo laptop repair services in Noida Greater Noida
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors flex items-center space-x-2 text-lg"
              >
                <Phone className="h-6 w-6" />
                <span>Call Now: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20Lenovo%20laptop%20repair%20service%20in%20Noida`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-colors text-lg"
              >
                WhatsApp for Instant Quote
              </a>
            </div>
            <div className="mt-8 text-lg opacity-90">
              <p>📍 Serving all Lenovo models in Noida Greater Noida | 🕒 Available 24/7 | 🚚 Free Pickup & Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Booking Modal */}
      <ServiceBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}