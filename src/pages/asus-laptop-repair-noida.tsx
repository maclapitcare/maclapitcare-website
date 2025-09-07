import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Laptop, Phone, MessageCircle, Clock, Shield, Wrench, HardDrive, Cpu, Zap, Monitor, MapPin, Calendar, Award, Settings, Keyboard } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function ASUSLaptopRepairNoida() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "ASUS Laptop Repair Noida | ZenBook VivoBook ROG TUF ExpertBook ProArt Repair Service Delhi NCR | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert ASUS laptop repair in Noida for ZenBook, VivoBook, ROG, TUF Gaming, ExpertBook, ProArt models. Gaming laptop repair, graphics issues, thermal management. Same day service, up to 3 months warranty. Call 9211720790");
    }

    // Add keywords meta tag
    const keywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    keywords.setAttribute('name', 'keywords');
    keywords.setAttribute('content', 'ASUS laptop repair Noida, ZenBook repair, VivoBook repair, ROG repair, TUF Gaming repair, ExpertBook repair, ProArt repair, ASUS gaming laptop repair, ASUS graphics card repair, ASUS thermal management, ASUS screen replacement Noida');
    if (!document.head.contains(keywords)) {
      document.head.appendChild(keywords);
    }
  }, []);

  const asusModels = [
    {
      series: "ASUS ZenBook Series",
      models: ["ZenBook 14", "ZenBook 13", "ZenBook Pro 15", "ZenBook Flip", "ZenBook S13", "ZenBook UX425"],
      commonIssues: ["Ultra-thin design issues", "Premium display problems", "OLED screen burn-in", "USB-C connectivity", "Precision touchpad issues"],
      repairTypes: ["Ultra-thin repair", "OLED display service", "Burn-in prevention", "USB-C port repair", "Precision touchpad calibration"],
      searchTerms: ["ZenBook 14 repair Noida", "ZenBook OLED screen repair", "ZenBook USB-C port fix"]
    },
    {
      series: "ASUS VivoBook Series",
      models: ["VivoBook 15", "VivoBook S14", "VivoBook Pro 16", "VivoBook Flip 14", "VivoBook Go", "VivoBook S15"],
      commonIssues: ["Performance optimization", "Storage upgrade needs", "Battery life issues", "Audio problems", "Wi-Fi connectivity"],
      repairTypes: ["Performance tuning", "SSD upgrade", "Battery replacement", "Audio driver fix", "Wi-Fi module repair"],
      searchTerms: ["VivoBook 15 repair Noida", "VivoBook slow performance fix", "VivoBook SSD upgrade"]
    },
    {
      series: "ASUS ROG Gaming",
      models: ["ROG Strix", "ROG Zephyrus", "ROG Flow", "ROG Scar", "ROG Phone", "ROG Ally"],
      commonIssues: ["Gaming performance drop", "GPU overheating", "RGB lighting failure", "High refresh display", "Liquid cooling leaks"],
      repairTypes: ["Gaming optimization", "GPU thermal management", "RGB system repair", "High-Hz display calibration", "Liquid cooling service"],
      searchTerms: ["ROG Strix repair Noida", "Gaming laptop repair", "ROG overheating fix"]
    },
    {
      series: "ASUS TUF Gaming",
      models: ["TUF Gaming A15", "TUF Gaming F15", "TUF Dash F15", "TUF Gaming A17", "TUF Gaming FX505", "TUF Gaming F17"],
      commonIssues: ["Military-grade durability", "Gaming thermal issues", "Keyboard backlight", "Performance throttling", "Dual fan cooling"],
      repairTypes: ["Durability testing", "Gaming thermal solutions", "Backlight repair", "Performance optimization", "Dual fan service"],
      searchTerms: ["TUF Gaming A15 repair", "TUF thermal management", "TUF keyboard backlight fix"]
    },
    {
      series: "ASUS ExpertBook Series",
      models: ["ExpertBook B9", "ExpertBook B5", "ExpertBook B3", "ExpertBook P5", "ExpertBook BR1100", "ExpertBook B1500"],
      commonIssues: ["Business productivity", "Enterprise security", "Docking station issues", "Multi-monitor setup", "VPN connectivity"],
      repairTypes: ["Business optimization", "Security module repair", "Docking port service", "Multi-display setup", "Network troubleshooting"],
      searchTerms: ["ExpertBook B9 repair", "Business laptop repair Noida", "ASUS enterprise repair"]
    },
    {
      series: "ASUS ProArt Series",
      models: ["ProArt StudioBook", "ProArt Display", "ProArt Station", "ProArt CreatorHub", "ProArt Studiobook 16", "ProArt Studiobook Pro"],
      commonIssues: ["Professional creative work", "Color accuracy problems", "Workstation performance", "Creative software crashes", "Professional GPU issues"],
      repairTypes: ["Creative optimization", "Color calibration", "Workstation tuning", "Software troubleshooting", "Professional GPU repair"],
      searchTerms: ["ProArt StudioBook repair", "Creative workstation repair Noida", "Professional ASUS repair"]
    }
  ];

  const commonRepairIssues = [
    {
      issue: "ASUS Gaming Laptop Repair",
      description: "Specialized gaming laptop repair for ROG and TUF series with advanced thermal management",
      symptoms: ["Gaming performance drop", "GPU overheating", "Frame rate issues", "RGB lighting failure", "Thermal throttling"],
      solution: "Gaming optimization, GPU thermal management, RGB repair",
      timeframe: "3-5 hours",
      icon: Cpu
    },
    {
      issue: "ASUS Graphics Card Issues",
      description: "Expert GPU troubleshooting and repair for ASUS laptops with dedicated graphics",
      symptoms: ["Graphics artifacts", "Display driver crashes", "No external display", "GPU not detected", "Gaming crashes"],
      solution: "GPU diagnosis, thermal paste, driver optimization",
      timeframe: "4-6 hours",
      icon: Monitor
    },
    {
      issue: "ASUS Screen Replacement",
      description: "Quality ASUS laptop screen replacement including OLED, 4K, and gaming displays",
      symptoms: ["Cracked screen", "OLED burn-in", "Dead pixels", "Flickering display", "No backlight"],
      solution: "Professional screen replacement with calibration",
      timeframe: "2-4 hours",
      icon: Settings
    },
    {
      issue: "ASUS Thermal Management",
      description: "Advanced cooling solutions for ASUS gaming and professional laptops",
      symptoms: ["Laptop very hot", "Fan noise", "Sudden shutdowns", "Performance throttling", "Overheating warnings"],
      solution: "Deep cleaning, thermal paste, fan optimization",
      timeframe: "3-4 hours",
      icon: Zap
    },
    {
      issue: "ASUS Keyboard Repair",
      description: "Professional ASUS laptop keyboard replacement including RGB gaming keyboards",
      symptoms: ["Keys not working", "RGB backlight issues", "Sticky keys", "Gaming keys failure", "Liquid damage"],
      solution: "Complete keyboard replacement with RGB setup",
      timeframe: "2-3 hours",
      icon: Keyboard
    },
    {
      issue: "ASUS Motherboard Repair",
      description: "Advanced chip-level motherboard repair for ASUS laptops with component replacement",
      symptoms: ["No power", "Boot failure", "USB ports dead", "Charging problems", "Random crashes"],
      solution: "Component-level repair, chip replacement, circuit fixes",
      timeframe: "1-3 days",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6 text-lg px-6 py-2">
              Noida's #1 ASUS Laptop Repair Specialist
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ASUS Laptop Repair Noida
              <br />
              <span className="text-gray-300">ZenBook VivoBook ROG TUF ExpertBook ProArt</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Expert ASUS laptop repair services in Noida Greater Noida. Professional repair for ZenBook, VivoBook, ROG, TUF Gaming, ExpertBook, ProArt models. Gaming laptop repair, graphics issues, thermal management with same day service and up to 3 months warranty.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center space-x-2 text-lg"
              >
                <Phone className="h-6 w-6" />
                <span>Call: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20ASUS%20laptop%20repair%20in%20Noida`}
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
                MacLap IT Care - <span className="text-gray-600">ASUS Laptop Repair Specialists</span> in Noida
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
                <strong className="text-gray-700">MacLap IT Care</strong> provides comprehensive ASUS laptop repair services across all sectors of Noida, Greater Noida, and Delhi NCR. Our expert technicians specialize in repairing all ASUS laptop series including <strong>ZenBook, VivoBook, ROG Gaming, TUF Gaming, ExpertBook, and ProArt workstations</strong>. We cover all major ASUS laptop problems from <strong>gaming laptop repair and graphics card issues to thermal management, screen replacement, keyboard repair, and motherboard repair</strong>. 
                <br /><br />
                With <strong>same-day service availability</strong>, genuine ASUS-compatible parts, and up to 3 months warranty, we ensure your ASUS laptop gets back to peak performance quickly. Our service areas include major Noida sectors (18, 62, 15, 16, 50, 51, 100, 110, 121, 132), Greater Noida zones (Knowledge Park, Alpha Belt, Techzone), and nearby Delhi NCR locations. Whether it's a gaming ROG, professional ProArt, or business ExpertBook model, our certified technicians provide professional diagnosis and repair with transparent pricing and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ASUS Models Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete ASUS Laptop Models Coverage in Noida
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Expert repair services for all ASUS laptop series with genuine parts, certified technicians, and up to 3 months comprehensive warranty
              </p>
              <div className="w-24 h-1 bg-gray-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {asusModels.map((model, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-slate-50 border-l-4 border-gray-600">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-gray-700">{model.series}</CardTitle>
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
                            <CheckCircle className="h-3 w-3 text-gray-500" />
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
                      <div className="text-xs text-gray-600 font-semibold mb-1">Professional Repair:</div>
                      <div className="text-xs text-gray-700">Contact for competitive quote</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common ASUS Laptop Issues in Noida */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <Wrench className="h-3 w-3 md:h-4 md:w-4" />
              ASUS Repair Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              <span className="text-green-600">Common ASUS Laptop</span> Issues in Noida
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Professional solutions for all ASUS laptop problems with quick diagnosis and expert repair services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {commonRepairIssues.map((issue, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-2 hover:border-gray-200 rounded-xl">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-600 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <issue.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-gray-700 font-bold">{issue.issue}</CardTitle>
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
                      <Badge className="bg-gray-50 text-gray-600 text-xs">{issue.timeframe}</Badge>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{issue.solution}</p>
                  </div>

                  <Button 
                    onClick={handleBookService}
                    className="w-full bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white py-2 text-sm"
                  >
                    Get Repair Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-gray-600 to-slate-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Don't See Your ASUS Problem Listed?</h3>
              <p className="text-lg mb-6">Our expert technicians can diagnose and fix any ASUS laptop issue. Contact us for free consultation!</p>
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-white text-gray-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
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
                ASUS Laptop Repair Service Areas in Noida Greater Noida
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Professional doorstep ASUS laptop repair services available across all Noida sectors with free pickup and delivery
              </p>
              <div className="w-24 h-1 bg-gray-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {noidaServiceAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <MapPin className="h-5 w-5 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">{area}</p>
                  <p className="text-xs text-gray-600">ASUS Repair Available</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-gray-600 to-slate-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Free Doorstep ASUS Laptop Repair Service!</h3>
                <p className="text-lg mb-6">We provide free pickup and delivery service for ASUS laptop repair across all Noida Greater Noida locations</p>
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose MacLap IT Care for ASUS Laptop Repair in Noida?
              </h2>
              <div className="w-24 h-1 bg-gray-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Award className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">ASUS Certified Technicians</h3>
                  <p className="text-gray-600">Expert technicians specialized in ASUS laptop repair with years of experience</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Clock className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Same Day Service</h3>
                  <p className="text-gray-600">Most ASUS laptop repairs completed within 2-4 hours with genuine parts</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Shield className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Up to 3 Months Warranty</h3>
                  <p className="text-gray-600">Up to 3 months comprehensive warranty on all ASUS repair services with quality guarantee</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Star className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">5000+ Happy Customers</h3>
                  <p className="text-gray-600">Trusted by thousands of ASUS laptop users across Noida Greater Noida</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-gray-600 to-slate-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Get Your ASUS Laptop Fixed Today!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact MacLap IT Care for fast, reliable, and affordable ASUS laptop repair services in Noida Greater Noida
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-white text-gray-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors flex items-center space-x-2 text-lg"
              >
                <Phone className="h-6 w-6" />
                <span>Call Now: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20ASUS%20laptop%20repair%20service%20in%20Noida`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-colors text-lg"
              >
                WhatsApp for Instant Quote
              </a>
            </div>
            <div className="mt-8 text-lg opacity-90">
              <p>📍 Serving all ASUS models in Noida Greater Noida | 🕒 Available 24/7 | 🚚 Free Pickup & Delivery</p>
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