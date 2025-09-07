import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Laptop, Phone, MessageCircle, Clock, Shield, Wrench, HardDrive, Cpu, Zap, Monitor, MapPin, Calendar, Award, Settings } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function DellLaptopRepairNoida() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "Dell Laptop Repair Noida | Inspiron XPS Latitude Alienware Repair Service Delhi NCR | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert Dell laptop repair in Noida for Inspiron, XPS, Latitude, Alienware models. Screen replacement, overheating fix, motherboard repair. Same day service, 3 months warranty. Call 9211720790");
    }

    // Add keywords meta tag
    const keywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    keywords.setAttribute('name', 'keywords');
    keywords.setAttribute('content', 'Dell laptop repair Noida, Inspiron repair, XPS repair, Latitude repair, Alienware repair, Dell screen replacement, Dell overheating fix, Dell motherboard repair, Dell charging port repair, Dell keyboard replacement, Dell hinge repair Noida');
    if (!document.head.contains(keywords)) {
      document.head.appendChild(keywords);
    }
  }, []);

  const dellModels = [
    {
      series: "Dell Inspiron Series",
      models: ["Inspiron 15 3000", "Inspiron 15 5000", "Inspiron 15 7000", "Inspiron 14 3000", "Inspiron 13 5000", "Inspiron 17 3000"],
      commonIssues: ["Screen flickering", "Overheating problems", "Battery not charging", "Keyboard malfunction", "Slow boot time"],
      repairTypes: ["LCD/LED screen replacement", "Thermal paste replacement", "Charging port repair", "Keyboard replacement", "SSD upgrade"],
      searchTerms: ["Inspiron 15 repair Noida", "Inspiron screen replacement", "Inspiron overheating fix"],
      priceRange: "Screen ₹3,500+, Battery ₹2,800+, Keyboard ₹1,800+"
    },
    {
      series: "Dell XPS Series",
      models: ["XPS 13 9310", "XPS 13 9300", "XPS 15 9500", "XPS 17 9700", "XPS 13 Plus", "XPS 15 OLED"],
      commonIssues: ["Touch screen not working", "USB-C port issues", "Premium display problems", "Thermal throttling", "Coil whine noise"],
      repairTypes: ["Touch screen calibration", "USB-C port replacement", "4K/OLED display repair", "Advanced cooling solutions", "Audio system repair"],
      searchTerms: ["XPS 13 repair Noida", "XPS touch screen repair", "XPS USB-C port fix"],
      priceRange: "Screen ₹8,500+, Battery ₹4,200+, Motherboard ₹15,000+"
    },
    {
      series: "Dell Latitude Series",
      models: ["Latitude 5520", "Latitude 7420", "Latitude 9520", "Latitude 3520", "Latitude 5420", "Latitude E7470"],
      commonIssues: ["Business security features", "Docking station problems", "TPM chip errors", "Enterprise connectivity", "BIOS corruption"],
      repairTypes: ["TPM module repair", "Docking port replacement", "BIOS recovery", "Enterprise software setup", "Security chip programming"],
      searchTerms: ["Latitude 5520 repair", "Business laptop repair Noida", "Dell corporate repair"],
      priceRange: "Screen ₹4,200+, Battery ₹3,500+, Motherboard ₹12,000+"
    },
    {
      series: "Dell Alienware Gaming",
      models: ["Alienware m15 R6", "Alienware x15", "Alienware x17", "Alienware m17 R4", "Alienware Aurora", "Alienware Area-51m"],
      commonIssues: ["Graphics card overheating", "RGB lighting failure", "Gaming performance drop", "Liquid cooling leaks", "High-end display issues"],
      repairTypes: ["GPU thermal management", "RGB controller repair", "Performance optimization", "Liquid cooling system", "Gaming display calibration"],
      searchTerms: ["Alienware repair Noida", "Gaming laptop repair", "Alienware overheating fix"],
      priceRange: "Screen ₹15,000+, GPU Repair ₹25,000+, Cooling ₹8,000+"
    },
    {
      series: "Dell Vostro Series",
      models: ["Vostro 15 3000", "Vostro 14 5000", "Vostro 13 5000", "Vostro 15 5000", "Vostro 3400", "Vostro 3500"],
      commonIssues: ["Business productivity issues", "Multiple port failures", "Network connectivity", "Performance degradation", "Storage problems"],
      repairTypes: ["Port replacement service", "Network module repair", "Performance upgrade", "Storage solutions", "Business software setup"],
      searchTerms: ["Vostro repair Noida", "Dell business laptop repair", "Vostro performance fix"],
      priceRange: "Screen ₹3,800+, Battery ₹2,900+, RAM Upgrade ₹2,500+"
    },
    {
      series: "Dell Precision Workstation",
      models: ["Precision 5560", "Precision 7760", "Precision 3560", "Precision 5760", "Precision 7560", "Precision 3561"],
      commonIssues: ["CAD software crashes", "Professional GPU issues", "Workstation performance", "Multi-monitor setup", "Professional applications"],
      repairTypes: ["Professional GPU repair", "Workstation optimization", "Multi-display setup", "Professional software", "High-performance cooling"],
      searchTerms: ["Precision workstation repair", "CAD laptop repair Noida", "Professional Dell repair"],
      priceRange: "Screen ₹12,000+, GPU Repair ₹35,000+, Upgrade ₹15,000+"
    }
  ];

  const commonRepairIssues = [
    {
      issue: "Dell Laptop Screen Replacement",
      description: "Expert replacement for cracked, flickering, or dead Dell laptop screens with genuine Dell parts",
      symptoms: ["Black screen", "Cracked display", "Lines on screen", "Flickering display", "Dead pixels"],
      solution: "Professional screen replacement with 3-month warranty",
      timeframe: "2-4 hours",
      icon: Monitor
    },
    {
      issue: "Dell Laptop Overheating Repair",
      description: "Complete thermal management solutions for Dell laptops with cleaning and thermal paste replacement",
      symptoms: ["Laptop very hot", "Fan running constantly", "Sudden shutdowns", "Performance throttling", "Blue screen errors"],
      solution: "Deep cleaning, thermal paste replacement, fan repair",
      timeframe: "3-5 hours",
      icon: Cpu
    },
    {
      issue: "Dell Motherboard Repair",
      description: "Advanced chip-level motherboard repair for Dell laptops with diagnostic and component replacement",
      symptoms: ["No power", "Boot failure", "USB ports not working", "Charging issues", "Random crashes"],
      solution: "Component-level repair, chip replacement, circuit fixes",
      timeframe: "1-3 days",
      icon: Settings
    },
    {
      issue: "Dell Battery Replacement",
      description: "Original Dell battery replacement service with calibration and power optimization",
      symptoms: ["Battery not charging", "Very short battery life", "Laptop only works on charger", "Battery swelling"],
      solution: "Genuine Dell battery replacement with optimization",
      timeframe: "1-2 hours",
      icon: Zap
    },
    {
      issue: "Dell Keyboard Repair",
      description: "Professional Dell laptop keyboard replacement and key repair services",
      symptoms: ["Keys not working", "Sticky keys", "Missing keys", "Backlight not working", "Water damage"],
      solution: "Complete keyboard replacement or key repair",
      timeframe: "2-3 hours",
      icon: Wrench
    },
    {
      issue: "Dell Broken Body & Hinge Repair",
      description: "Expert repair for cracked laptop body, broken hinges, and structural damage issues",
      symptoms: ["Cracked laptop body", "Broken hinges", "Loose screen", "Structural damage", "Damaged casing"],
      solution: "Body casing replacement, hinge repair & replacement, structural reinforcement",
      timeframe: "1-3 days",
      icon: HardDrive
    }
  ];

  const noidaAreas = [
    { area: "Sector 18 Noida", details: "Dell repair near Atta Market, DLF Mall of India" },
    { area: "Sector 62 Noida", details: "Dell service in IT hub, Electronic City" },
    { area: "Sector 15 Noida", details: "Dell repair near Metro Station, residential area" },
    { area: "Sector 16 Noida", details: "Dell service in commercial district" },
    { area: "Sector 50 Noida", details: "Dell repair near residential complexes" },
    { area: "Sector 51 Noida", details: "Dell service for corporate offices" },
    { area: "Sector 100 Noida", details: "Dell repair in new Noida extension" },
    { area: "Sector 110 Noida", details: "Dell service near residential areas" },
    { area: "Sector 70 Noida", details: "Dell repair near business district" },
    { area: "Sector 78 Noida", details: "Dell service in IT corporate zone" },
    { area: "Sector 121 Noida", details: "Dell repair near Advant IT Park" },
    { area: "Sector 132 Noida", details: "Dell service in Jaypee Greens area" },
    { area: "Knowledge Park Greater Noida", details: "Dell repair for educational institutions" },
    { area: "Alpha Commercial Belt", details: "Dell service in commercial area" },
    { area: "Greater Noida West", details: "Dell repair in residential township" }
  ];

  const popularSearches = [
    "Dell laptop repair near me Noida",
    "Inspiron screen replacement Noida",
    "Dell laptop overheating fix Noida",
    "XPS repair service Noida",
    "Dell charging port repair Noida",
    "Latitude laptop repair Delhi NCR",
    "Alienware repair center Noida",
    "Dell motherboard repair Noida",
    "Dell keyboard replacement Noida",
    "Dell hinge repair service Noida",
    "Dell laptop slow performance fix",
    "Dell BIOS recovery Noida",
    "Dell Wi-Fi not working repair",
    "Dell blue screen error fix",
    "Dell laptop water damage repair"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 text-sm">
                <Laptop className="h-4 w-4" />
                Professional Dell Laptop Repair
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-blue-400">Dell Laptop Repair</span>
                <br />
                <span className="text-white">Service in Noida</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Expert Dell laptop repair for Inspiron, XPS, Latitude, Alienware models in Noida. 
                Same day service with genuine Dell parts and up to 3 months warranty.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 pt-4">
                <a
                  href={`tel:+91${CONTACT_INFO.phone1}`}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-4 rounded-lg md:rounded-xl lg:rounded-2xl font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                  <span>Call: {CONTACT_INFO.phone1}</span>
                </a>
                <a
                  href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20Dell%20laptop%20repair%20quote%20in%20Noida`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-4 rounded-lg md:rounded-xl lg:rounded-2xl font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 pt-6 md:pt-8">
                <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 p-2 md:p-3 lg:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                  <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-xs md:text-sm lg:text-base">Expert Technicians</h4>
                    <p className="text-xs md:text-sm text-gray-300">Professional Service</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm md:text-base">Same Day Service</h4>
                    <p className="text-xs md:text-sm text-gray-300">Quick Turnaround</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm md:text-base">Up to 3 Months Warranty</h4>
                    <p className="text-xs md:text-sm text-gray-300">Quality Guarantee</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm md:text-base">5000+ Repairs</h4>
                    <p className="text-xs md:text-sm text-gray-300">Experience Counts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl absolute -top-10 -right-10"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20">
                  <div className="text-center space-y-4 md:space-y-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto">
                      <Laptop className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Dell Repair Expertise</h3>
                    <div className="grid grid-cols-2 gap-3 md:gap-4 text-sm md:text-base">
                      <div className="text-center p-2 md:p-3 bg-white/5 rounded-lg md:rounded-xl">
                        <div className="font-bold text-blue-400">Inspiron</div>
                        <div className="text-gray-300">Series</div>
                      </div>
                      <div className="text-center p-2 md:p-3 bg-white/5 rounded-lg md:rounded-xl">
                        <div className="font-bold text-green-400">XPS</div>
                        <div className="text-gray-300">Premium</div>
                      </div>
                      <div className="text-center p-2 md:p-3 bg-white/5 rounded-lg md:rounded-xl">
                        <div className="font-bold text-purple-400">Latitude</div>
                        <div className="text-gray-300">Business</div>
                      </div>
                      <div className="text-center p-2 md:p-3 bg-white/5 rounded-lg md:rounded-xl">
                        <div className="font-bold text-red-400">Alienware</div>
                        <div className="text-gray-300">Gaming</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                MacLap IT Care - <span className="text-blue-600">Dell Laptop Repair Specialists</span> in Noida
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
                <strong className="text-blue-700">MacLap IT Care</strong> provides comprehensive Dell laptop repair services across all sectors of Noida, Greater Noida, and Delhi NCR. Our expert technicians specialize in repairing all Dell laptop series including <strong>Inspiron, XPS, Latitude, Alienware, Vostro, and Precision workstations</strong>. We cover all major Dell laptop problems from <strong>screen replacement and motherboard repair to overheating issues, charging port problems, keyboard malfunctions, broken hinges, and body damage</strong>. 
                <br /><br />
                With <strong>same-day service availability</strong>, genuine Dell-compatible parts, and up to 3 months warranty, we ensure your Dell laptop gets back to peak performance quickly. Our service areas include major Noida sectors (18, 62, 15, 16, 50, 51, 100, 110, 121, 132), Greater Noida zones (Knowledge Park, Alpha Belt, Techzone), and nearby Delhi NCR locations. Whether it's a business laptop, gaming Alienware, or premium XPS model, our certified technicians provide professional diagnosis and repair with transparent pricing and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dell Models Coverage Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <Laptop className="h-3 w-3 md:h-4 md:w-4" />
              Complete Dell Model Coverage
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Dell Laptop <span className="text-blue-600">Models We Repair</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Expert repair services for all Dell laptop series with model-specific solutions and genuine Dell parts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {dellModels.map((series, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 rounded-xl md:rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg md:text-xl font-bold text-blue-700">{series.series}</CardTitle>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                      <Laptop className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Models */}
                  <div>
                    <h4 className="font-semibold text-sm text-blue-600 mb-3">POPULAR MODELS:</h4>
                    <div className="flex flex-wrap gap-2">
                      {series.models.map((model, idx) => (
                        <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs px-2 py-1">
                          {model}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Common Issues */}
                  <div>
                    <h4 className="font-semibold text-sm text-red-600 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      COMMON ISSUES:
                    </h4>
                    <div className="space-y-2">
                      {series.commonIssues.map((issue, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-2 bg-red-50/50 rounded-lg text-sm">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Repair Types */}
                  <div>
                    <h4 className="font-semibold text-sm text-green-600 mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      OUR SOLUTIONS:
                    </h4>
                    <div className="space-y-2">
                      {series.repairTypes.map((repair, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-2 bg-green-50/50 rounded-lg text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{repair}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">Professional Repair:</p>
                        <p className="text-xs text-gray-600 break-words">Contact for competitive quote</p>
                      </div>
                      <Button 
                        onClick={handleBookService}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm w-full sm:w-auto"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Repair Issues Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <Wrench className="h-3 w-3 md:h-4 md:w-4" />
              Dell Repair Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              <span className="text-green-600">Common Dell Laptop</span> Repair Issues
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Professional solutions for all Dell laptop problems with quick diagnosis and expert repair
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {commonRepairIssues.map((issue, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-2 hover:border-blue-200 rounded-xl">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2 text-sm"
                  >
                    Get Repair Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Area-wise Dell Repair Coverage */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <MapPin className="h-3 w-3 md:h-4 md:w-4" />
              Area-wise Dell Repair Coverage
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              <span className="text-purple-600">Dell Laptop Repair</span> Across Noida
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Comprehensive Dell laptop repair services available in all major sectors and areas of Noida and Greater Noida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {noidaAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-purple-300 rounded-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1">{area.area}</h4>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{area.details}</p>
                      <div className="mt-2">
                        <span className="text-xs text-purple-600 font-semibold">Same day Dell repair available</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Dell Laptop Repair in Your Area
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Can't find your area? We provide Dell laptop repair services across all sectors of Noida, Greater Noida, and nearby areas in Delhi NCR.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 lg:gap-6">
                <a
                  href={`tel:+91${CONTACT_INFO.phone1}`}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 md:px-6 lg:px-8 py-2.5 md:py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 text-sm md:text-base lg:text-lg w-full sm:w-auto justify-center"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                  <span>Call: {CONTACT_INFO.phone1}</span>
                </a>
                <a
                  href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20Dell%20laptop%20repair%20in%20my%20area%20in%20Noida`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 lg:px-8 py-2.5 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base lg:text-lg w-full sm:w-auto justify-center flex items-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                  <span>WhatsApp Location</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dell Searches Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <Star className="h-3 w-3 md:h-4 md:w-4" />
              Popular Dell Repair Searches
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Common <span className="text-gray-600">Dell Laptop Issues</span> in Noida
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Most searched Dell laptop repair problems and solutions by customers in Noida and Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-12">
            {popularSearches.map((search, index) => (
              <div key={index} className="bg-white p-3 md:p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors group cursor-pointer">
                <div className="flex items-start space-x-2 md:space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 group-hover:text-blue-600 transition-colors leading-relaxed">{search}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Don't See Your Dell Laptop Problem?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Our Dell laptop repair experts can diagnose and fix any issue. Contact us for a free consultation and quote.
              </p>
              <Button 
                onClick={handleBookService}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-xl"
              >
                Book Free Diagnosis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Dell Repair */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Why Choose MacLap IT Care for <span className="text-blue-400">Dell Repair?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              India's most trusted Dell laptop repair service with certified technicians and genuine Dell parts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                icon: Award,
                title: "Dell Certified Technicians",
                description: "Trained and certified Dell repair specialists with years of experience"
              },
              {
                icon: Shield,
                title: "Genuine Dell Parts",
                description: "Only authentic Dell components used for all repairs with quality guarantee"
              },
              {
                icon: Clock,
                title: "Same Day Service",
                description: "Quick turnaround time with most repairs completed within 24 hours"
              },
              {
                icon: Star,
                title: "3 Months Warranty",
                description: "Comprehensive warranty on all Dell laptop repairs and replacement parts"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Fix Your Dell Laptop?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Get expert Dell laptop repair in Noida with free pickup, diagnosis, and competitive quotes
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                <a
                  href={`tel:+91${CONTACT_INFO.phone1}`}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all flex items-center space-x-2 text-lg"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now: {CONTACT_INFO.phone1}</span>
                </a>
                <Button 
                  onClick={handleBookService}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold text-lg"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Service
                </Button>
              </div>
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