import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Laptop, Phone, MessageCircle, Clock, Shield, Wrench, HardDrive, Cpu, Zap, Monitor, MapPin, Calendar, Award, Settings, Keyboard, Battery } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function MSILaptopRepairNoida() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MSI Laptop Repair Noida | Gaming Creator Modern Prestige Stealth Repair Service Delhi NCR | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert MSI laptop repair in Noida for Gaming Series, Creator, Modern, Prestige, Stealth models. Gaming performance optimization, RGB lighting repair, advanced cooling. Same day service, up to 3 months warranty. Call 9211720790");
    }

    // Add keywords meta tag
    const keywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    keywords.setAttribute('name', 'keywords');
    keywords.setAttribute('content', 'MSI laptop repair Noida, MSI Gaming repair, Creator repair, Modern repair, Prestige repair, Stealth repair, MSI gaming performance, MSI RGB lighting repair, MSI cooling system repair, MSI SteelSeries keyboard repair Noida');
    if (!document.head.contains(keywords)) {
      document.head.appendChild(keywords);
    }
  }, []);

  const msiModels = [
    {
      series: "MSI Gaming Series",
      models: ["GF63 Thin", "GF65 Thin", "GL65 Leopard", "GP66 Leopard", "GE76 Raider", "GT76 Titan"],
      commonIssues: ["Gaming performance drop", "Overheating during gaming", "RGB lighting failure", "SteelSeries keyboard issues", "High refresh display problems"],
      repairTypes: ["Gaming optimization", "Advanced thermal management", "RGB system repair", "SteelSeries keyboard fix", "High-Hz display calibration"],
      searchTerms: ["MSI Gaming laptop repair Noida", "GF63 repair", "GP66 Leopard overheating fix"]
    },
    {
      series: "MSI Creator Series",
      models: ["Creator 15", "Creator 17", "Creator Z16", "Creator M16", "CreatorPro X17", "Creator Z17"],
      commonIssues: ["Color accuracy problems", "Creative software crashes", "Workstation performance", "Professional display issues", "Content creation optimization"],
      repairTypes: ["Color calibration", "Creative software optimization", "Performance tuning", "Professional display service", "Content creation setup"],
      searchTerms: ["MSI Creator 15 repair", "Creative workstation repair Noida", "MSI color accuracy fix"]
    },
    {
      series: "MSI Modern Series",
      models: ["Modern 14", "Modern 15", "Modern Laptop 15", "Summit E13", "Summit E16", "Summit B15"],
      commonIssues: ["Business productivity", "Battery life optimization", "Port connectivity", "Performance upgrades", "Professional appearance"],
      repairTypes: ["Business optimization", "Battery calibration", "Port repair service", "Performance enhancement", "Professional maintenance"],
      searchTerms: ["MSI Modern 14 repair", "Business laptop repair Noida", "MSI productivity optimization"]
    },
    {
      series: "MSI Prestige Series",
      models: ["Prestige 14", "Prestige 15", "Prestige 16", "PS42", "PS63", "P65 Creator"],
      commonIssues: ["Premium build quality", "Ultra-portable design", "Professional performance", "Creative workflows", "Business presentations"],
      repairTypes: ["Premium repair service", "Ultra-portable maintenance", "Professional optimization", "Creative workflow setup", "Business presentation tools"],
      searchTerms: ["MSI Prestige 14 repair", "Premium MSI repair Noida", "Professional laptop service"]
    },
    {
      series: "MSI Stealth Series",
      models: ["Stealth 15M", "Stealth 17M", "GS66 Stealth", "GS76 Stealth", "GS77 Stealth", "Stealth 14"],
      commonIssues: ["Stealth cooling system", "Ultra-thin gaming issues", "Performance vs. portability", "Advanced RGB per-key", "Gaming in thin form"],
      repairTypes: ["Stealth thermal solutions", "Ultra-thin gaming optimization", "Performance balancing", "Per-key RGB repair", "Thin-gaming maintenance"],
      searchTerms: ["MSI Stealth repair Noida", "GS66 Stealth overheating", "Ultra-thin gaming laptop repair"]
    },
    {
      series: "MSI Workstation Series",
      models: ["WS66", "WS76", "WE76", "WT75", "WS63", "WF65"],
      commonIssues: ["Professional GPU issues", "Workstation optimization", "ISV certification", "Professional applications", "Multi-monitor setup"],
      repairTypes: ["Professional GPU repair", "Workstation tuning", "ISV software setup", "Professional app optimization", "Multi-display configuration"],
      searchTerms: ["MSI workstation repair", "Professional MSI repair Noida", "MSI GPU workstation fix"]
    }
  ];

  const commonRepairIssues = [
    {
      issue: "MSI Gaming Performance Optimization",
      description: "Expert gaming performance optimization for MSI gaming laptops with advanced tuning",
      symptoms: ["Low FPS in games", "Gaming lag", "Performance drops", "Thermal throttling", "Unstable frame rates"],
      solution: "Gaming optimization, thermal management, performance tuning",
      timeframe: "3-5 hours",
      icon: Cpu
    },
    {
      issue: "MSI RGB Lighting Repair",
      description: "Professional RGB lighting system repair for SteelSeries keyboards and MSI Mystic Light",
      symptoms: ["RGB not working", "SteelSeries keyboard lighting", "Mystic Light issues", "Per-key RGB failure", "RGB sync problems"],
      solution: "RGB system diagnosis, SteelSeries repair, Mystic Light fix",
      timeframe: "2-4 hours",
      icon: Keyboard
    },
    {
      issue: "MSI Advanced Cooling System",
      description: "Specialized cooling system repair for MSI gaming and creator laptops",
      symptoms: ["Overheating issues", "Fan noise", "Thermal throttling", "Cooler Boost not working", "High temperatures"],
      solution: "Advanced thermal solutions, Cooler Boost repair, fan optimization",
      timeframe: "3-4 hours",
      icon: Zap
    },
    {
      issue: "MSI Screen Replacement",
      description: "Quality MSI laptop screen replacement including high refresh gaming displays",
      symptoms: ["Cracked screen", "High refresh not working", "Color accuracy issues", "Dead pixels", "Flickering display"],
      solution: "Professional screen replacement with gaming display calibration",
      timeframe: "2-4 hours",
      icon: Monitor
    },
    {
      issue: "MSI SteelSeries Keyboard Repair",
      description: "Expert SteelSeries gaming keyboard repair and replacement for MSI laptops",
      symptoms: ["Gaming keys not working", "SteelSeries software issues", "Mechanical key problems", "RGB backlight failure", "Key response delay"],
      solution: "SteelSeries keyboard replacement with gaming setup",
      timeframe: "2-3 hours",
      icon: Settings
    },
    {
      issue: "MSI Hardware Upgrade",
      description: "Professional hardware upgrades for MSI laptops including RAM, SSD, and component enhancement",
      symptoms: ["Slow performance", "Storage full", "RAM limitations", "Need better specs", "Gaming requirements"],
      solution: "Hardware upgrade, SSD installation, RAM expansion",
      timeframe: "1-3 hours",
      icon: HardDrive
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-900 via-orange-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6 text-lg px-6 py-2">
              Noida's #1 MSI Laptop Repair Specialist
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              MSI Laptop Repair Noida
              <br />
              <span className="text-red-300">Gaming Creator Modern Prestige Stealth</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Expert MSI laptop repair services in Noida Greater Noida. Professional repair for Gaming Series, Creator, Modern, Prestige, Stealth models. Gaming performance optimization, RGB lighting repair, advanced cooling with same day service and up to 3 months warranty.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-white text-red-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center space-x-2 text-lg"
              >
                <Phone className="h-6 w-6" />
                <span>Call: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MSI%20laptop%20repair%20in%20Noida`}
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
                MacLap IT Care - <span className="text-red-600">MSI Laptop Repair Specialists</span> in Noida
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
                <strong className="text-red-700">MacLap IT Care</strong> provides comprehensive MSI laptop repair services across all sectors of Noida, Greater Noida, and Delhi NCR. Our expert technicians specialize in repairing all MSI laptop series including <strong>Gaming Series, Creator, Modern, Prestige, Stealth, and Workstation models</strong>. We cover all major MSI laptop problems from <strong>gaming performance optimization and RGB lighting repair to advanced cooling solutions, SteelSeries keyboard repair, hardware upgrades, and screen replacement</strong>. 
                <br /><br />
                With <strong>same-day service availability</strong>, genuine MSI-compatible parts, and up to 3 months warranty, we ensure your MSI laptop gets back to peak performance quickly. Our service areas include major Noida sectors (18, 62, 15, 16, 50, 51, 100, 110, 121, 132), Greater Noida zones (Knowledge Park, Alpha Belt, Techzone), and nearby Delhi NCR locations. Whether it's a gaming MSI, creative Creator series, or professional Prestige model, our certified technicians provide professional diagnosis and repair with transparent pricing and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MSI Models Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete MSI Laptop Models Coverage in Noida
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Expert repair services for all MSI laptop series with genuine parts, certified technicians, and up to 3 months comprehensive warranty
              </p>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {msiModels.map((model, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-600">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-red-700">{model.series}</CardTitle>
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
                            <CheckCircle className="h-3 w-3 text-red-500" />
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
                      <div className="text-xs text-red-600 font-semibold mb-1">Professional Repair:</div>
                      <div className="text-xs text-gray-700">Contact for competitive quote</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common MSI Laptop Issues in Noida */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <Wrench className="h-3 w-3 md:h-4 md:w-4" />
              MSI Repair Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              <span className="text-green-600">Common MSI Laptop</span> Issues in Noida
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Professional solutions for all MSI laptop problems with quick diagnosis and expert repair services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {commonRepairIssues.map((issue, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-2 hover:border-red-200 rounded-xl">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <issue.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-red-700 font-bold">{issue.issue}</CardTitle>
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
                      <Badge className="bg-red-50 text-red-600 text-xs">{issue.timeframe}</Badge>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{issue.solution}</p>
                  </div>

                  <Button 
                    onClick={handleBookService}
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white py-2 text-sm"
                  >
                    Get Repair Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Don't See Your MSI Problem Listed?</h3>
              <p className="text-lg mb-6">Our expert technicians can diagnose and fix any MSI laptop issue. Contact us for free consultation!</p>
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
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
                MSI Laptop Repair Service Areas in Noida Greater Noida
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Professional doorstep MSI laptop repair services available across all Noida sectors with free pickup and delivery
              </p>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {noidaServiceAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <MapPin className="h-5 w-5 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">{area}</p>
                  <p className="text-xs text-gray-600">MSI Repair Available</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Free Doorstep MSI Laptop Repair Service!</h3>
                <p className="text-lg mb-6">We provide free pickup and delivery service for MSI laptop repair across all Noida Greater Noida locations</p>
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
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose MacLap IT Care for MSI Laptop Repair in Noida?
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Award className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">MSI Certified Technicians</h3>
                  <p className="text-gray-600">Expert technicians specialized in MSI laptop repair with years of experience</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Clock className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Same Day Service</h3>
                  <p className="text-gray-600">Most MSI laptop repairs completed within 2-4 hours with genuine parts</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Shield className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Up to 3 Months Warranty</h3>
                  <p className="text-gray-600">Up to 3 months comprehensive warranty on all MSI repair services with quality guarantee</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Star className="h-16 w-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">5000+ Happy Customers</h3>
                  <p className="text-gray-600">Trusted by thousands of MSI laptop users across Noida Greater Noida</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get Your MSI Laptop Fixed Today!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact MacLap IT Care for fast, reliable, and affordable MSI laptop repair services in Noida Greater Noida
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors flex items-center space-x-2 text-lg"
              >
                <Phone className="h-6 w-6" />
                <span>Call Now: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MSI%20laptop%20repair%20service%20in%20Noida`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-colors text-lg"
              >
                WhatsApp for Instant Quote
              </a>
            </div>
            <div className="mt-8 text-lg opacity-90">
              <p>📍 Serving all MSI models in Noida Greater Noida | 🕒 Available 24/7 | 🚚 Free Pickup & Delivery</p>
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