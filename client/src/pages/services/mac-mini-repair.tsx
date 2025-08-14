import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Clock, Shield, Wrench, Star, ArrowRight, CheckCircle, HardDrive, Cpu, Zap } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function MacMiniRepair() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Mac Mini Repair Service Delhi NCR | Professional Mac Mini Logic Board & Upgrade Service | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional Mac Mini repair services in Delhi NCR. Logic board repair, SSD upgrade, RAM expansion, port replacement for all Mac Mini models. Expert service with warranty. Call 9211720790");
    }
  }, []);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  const macMiniModels = [
    {
      name: "Mac Mini M2 Pro (2023)",
      model: "A2686",
      year: "2023",
      commonFaults: ["Thunderbolt port failure", "SSD upgrade required", "RAM expansion limit", "HDMI connectivity"],
      solutions: ["Port replacement service", "NVMe SSD installation", "External storage solutions", "HDMI cable testing"],
      searchKeywords: ["Mac Mini M2 Pro repair", "A2686 fix", "Thunderbolt port repair", "Mac Mini SSD upgrade"]
    },
    {
      name: "Mac Mini M2 (2023)", 
      model: "A2686",
      year: "2023",
      commonFaults: ["Logic board failure", "Boot loop issues", "USB-C malfunction", "Power delivery problems"],
      solutions: ["Logic board micro-repair", "SMC reset procedures", "USB-C port replacement", "Power adapter testing"],
      searchKeywords: ["Mac Mini M2 repair", "A2686 logic board", "Mac Mini boot problem", "USB-C repair"]
    },
    {
      name: "Mac Mini M1 (2020)",
      model: "A2348",
      year: "2020",
      commonFaults: ["Kernel panic errors", "Wi-Fi connectivity", "Storage space limit", "Bluetooth issues"],
      solutions: ["Memory diagnostic testing", "Wi-Fi module replacement", "External SSD setup", "Bluetooth reset"],
      searchKeywords: ["Mac Mini M1 repair", "A2348 fix", "Mac Mini kernel panic", "Wi-Fi repair"]
    },
    {
      name: "Mac Mini Intel i7 (2018)",
      model: "A1993",
      year: "2018",
      commonFaults: ["Hard drive failure", "RAM upgrade needed", "Thermal throttling", "Slow performance"],
      solutions: ["SSD replacement", "Memory expansion", "Thermal paste renewal", "Performance optimization"],
      searchKeywords: ["Mac Mini 2018 repair", "A1993 SSD upgrade", "Mac Mini slow", "RAM upgrade"]
    },
    {
      name: "Mac Mini Intel i5 (2018)",
      model: "A1993",
      year: "2018",
      commonFaults: ["Storage degradation", "Memory limitations", "Overheating issues", "Port connectivity"],
      solutions: ["Storage upgrade", "RAM expansion", "Thermal management", "Port cleaning service"],
      searchKeywords: ["Mac Mini i5 repair", "A1993 overheating", "Mac Mini upgrade", "storage replacement"]
    },
    {
      name: "Mac Mini Late 2014",
      model: "A1347",
      year: "2014",
      commonFaults: ["Fusion Drive failure", "Wi-Fi card issues", "Power supply problems", "USB port damage"],
      solutions: ["SSD conversion", "Wi-Fi module replacement", "Power supply repair", "USB port replacement"],
      searchKeywords: ["Mac Mini 2014 repair", "A1347 Fusion Drive", "Mac Mini power issue", "USB repair"]
    },
    {
      name: "Mac Mini Mid 2011",
      model: "A1347",
      year: "2011",
      commonFaults: ["Hard drive clicking", "RAM failure", "Graphics issues", "Logic board failure"],
      solutions: ["HDD to SSD upgrade", "Memory replacement", "Graphics card repair", "Logic board service"],
      searchKeywords: ["Mac Mini 2011 repair", "A1347 hard drive", "Mac Mini graphics", "logic board fix"]
    },
    {
      name: "Mac Mini Mid 2010",
      model: "A1347",
      year: "2010",
      commonFaults: ["Boot failure", "Memory errors", "Optical drive issues", "Network problems"],
      solutions: ["Boot repair service", "RAM upgrade", "Drive replacement", "Network card repair"],
      searchKeywords: ["Mac Mini 2010 repair", "A1347 boot problem", "Mac Mini memory", "optical drive"]
    }
  ];

  const commonSearches = [
    "Mac Mini repair near me Delhi NCR",
    "Mac Mini logic board repair Noida",
    "Mac Mini SSD upgrade service",
    "Mac Mini port replacement Delhi",
    "Mac Mini overheating fix Gurgaon",
    "Mac Mini RAM upgrade service",
    "Mac Mini power issue repair",
    "Mac Mini Wi-Fi not working",
    "Mac Mini boot problem fix",
    "Mac Mini M1 repair service",
    "Mac Mini M2 repair Delhi NCR",
    "Mac Mini Thunderbolt repair",
    "Mac Mini slow performance fix",
    "Mac Mini hard drive replacement",
    "Mac Mini data recovery service"
  ];

  const services = [
    {
      name: "Logic Board Repair",
      description: "Advanced logic board repair and component replacement",
      price: "Starting ₹3,999",
      features: ["Microsoldering", "Chip replacement", "Port repair", "Power management"]
    },
    {
      name: "SSD Upgrade",
      description: "High-speed SSD upgrade for better performance",
      price: "Starting ₹2,999",
      features: ["NVMe SSD", "Data migration", "Speed boost", "Extended warranty"]
    },
    {
      name: "RAM Expansion",
      description: "Memory upgrade for improved multitasking",
      price: "Starting ₹2,999",
      features: ["8GB to 64GB", "DDR4/DDR5", "Professional install", "Performance test"]
    },
    {
      name: "Port Replacement",
      description: "Thunderbolt, USB, and other port repairs",
      price: "Starting ₹2,999",
      features: ["Thunderbolt repair", "USB-C fix", "HDMI repair", "Ethernet port"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 text-sm">
                <HardDrive className="h-4 w-4" />
                Mac Mini Repair Specialists
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Mac Mini Repair Service
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-400 mt-2">Delhi NCR</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-lg mx-auto lg:mx-0">
                <span className="text-white font-semibold">MacLap IT Care</span> - Expert Mac Mini repair for all models. Logic board micro-repair, SSD upgrades, RAM expansion, and port replacement with professional service and warranty.
              </p>
              
              <div className="flex flex-col gap-3 max-w-sm mx-auto lg:mx-0">
                <Button 
                  size="lg" 
                  onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 w-full text-base"
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Call: {CONTACT_INFO.phone1}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => window.location.href = `https://wa.me/919211720790?text=Hi, I need Mac Mini repair service in Delhi NCR`}
                  className="group bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full text-base"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  WhatsApp Now
                </Button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Service Features</h3>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <HardDrive className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">All Mac Mini Models</h4>
                      <p className="text-xs md:text-sm text-gray-300">M2 Pro, M2, M1, Intel 2018+</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">Quick Service</h4>
                      <p className="text-xs md:text-sm text-gray-300">24-48 Hour Turnaround</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">Warranty Protection</h4>
                      <p className="text-xs md:text-sm text-gray-300">Up to 3 Months Warranty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <HardDrive className="h-3 w-3 md:h-4 md:w-4" />
              Complete Mac Mini Coverage
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              <span className="text-blue-600">MacLap IT Care</span> Mac Mini Models
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Expert repair solutions for all Mac Mini generations with common issues and professional fixes
            </p>
          </div>

          {/* Scrolling Models Container */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-4 md:pb-6">
              <div className="flex gap-4 md:gap-6 min-w-max px-2 md:px-4">
                {macMiniModels.map((model, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0 w-[320px] md:w-[400px]">
                    <CardContent className="p-4 md:p-8 h-full">
                      <div className="flex items-start justify-between mb-4 md:mb-6">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 truncate">{model.name}</h3>
                          <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs px-2 py-1">
                              {model.model}
                            </Badge>
                            <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200 text-xs px-2 py-1">
                              {model.year}
                            </Badge>
                          </div>
                        </div>
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 ml-2">
                          <HardDrive className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        </div>
                      </div>

                      {/* Common Faults */}
                      <div className="mb-4 md:mb-6">
                        <h5 className="font-bold text-xs md:text-sm mb-2 md:mb-3 text-red-600 flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          Common Issues:
                        </h5>
                        <div className="space-y-1 md:space-y-2">
                          {model.commonFaults.slice(0, 3).map((fault, idx) => (
                            <div key={idx} className="flex items-start space-x-2 md:space-x-3 p-1.5 md:p-2 bg-red-50/50 rounded-md md:rounded-lg">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                              <span className="text-xs md:text-sm text-gray-700 leading-relaxed">{fault}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Solutions */}
                      <div className="mb-4 md:mb-6">
                        <h5 className="font-bold text-xs md:text-sm mb-2 md:mb-3 text-green-600 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Our Solutions:
                        </h5>
                        <div className="space-y-1 md:space-y-2">
                          {model.solutions.slice(0, 3).map((solution, idx) => (
                            <div key={idx} className="flex items-start space-x-2 md:space-x-3 p-1.5 md:p-2 bg-green-50/50 rounded-md md:rounded-lg">
                              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-xs md:text-sm text-gray-700 leading-relaxed">{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Search Keywords */}
                      <div className="pt-3 md:pt-4 border-t border-gray-100">
                        <h5 className="font-bold text-xs md:text-sm mb-2 md:mb-3 text-blue-600">Popular Searches:</h5>
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {model.searchKeywords.slice(0, 2).map((keyword, idx) => (
                            <Badge key={idx} className="bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs px-2 md:px-3 py-1">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Scroll indicators */}
            <div className="text-center mt-4 md:mt-6">
              <p className="text-xs md:text-sm text-gray-500 px-4">
                ← Scroll horizontally to view all Mac Mini models →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Mac Mini Repair Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Professional repair and upgrade services with transparent pricing and up to 3 months warranty
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-0 rounded-xl md:rounded-2xl overflow-hidden">
                <CardContent className="p-4 md:p-8 text-center h-full flex flex-col">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Wrench className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-3 md:mb-4">{service.price}</p>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 flex-grow leading-relaxed">{service.description}</p>
                  <div className="space-y-1 md:space-y-2 mb-4 md:mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs md:text-sm text-gray-700">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                        <span className="text-left">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={handleBookService}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-base py-2 md:py-3"
                  >
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Searches Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <Star className="h-3 w-3 md:h-4 md:w-4" />
              Most Searched Mac Mini Issues
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Common Mac Mini Searches</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Popular Mac Mini repair searches from customers across Delhi NCR
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {commonSearches.map((search, index) => (
                <div 
                  key={index} 
                  className="group bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs md:text-sm">{index + 1}</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-700 group-hover:text-blue-700 transition-colors leading-relaxed">
                      {search}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Need Help with Your Mac Mini?</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                  Can't find your specific issue? Our expert technicians can diagnose and fix any Mac Mini problem.
                </p>
                <div className="flex flex-col gap-3 max-w-sm mx-auto">
                  <Button 
                    onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call for Diagnosis
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleBookService}
                    className="border-blue-300 text-blue-700 hover:bg-blue-50 w-full"
                  >
                    Book Service Online
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 mb-6 md:mb-8 text-sm">
              <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-400" />
              4.9/5 Customer Rating - 5000+ Repairs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get Your Mac Mini Repaired Today
            </h2>
            <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
              <span className="text-white font-semibold">MacLap IT Care</span> - Professional Mac Mini repair and upgrade service with expert technicians, genuine parts, and up to 3 months warranty protection across Delhi NCR
            </p>
            
            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <Button 
                size="lg" 
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-0 w-full text-base md:text-lg py-3 md:py-4"
              >
                <Phone className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:animate-pulse" />
                Call: {CONTACT_INFO.phone1}
              </Button>
              <Button 
                size="lg" 
                onClick={() => window.location.href = `https://wa.me/919211720790?text=Hi, I need Mac Mini repair service in Delhi NCR`}
                className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 border-0 w-full text-base md:text-lg py-3 md:py-4"
              >
                <MessageCircle className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:animate-pulse" />
                WhatsApp Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleBookService}
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 hover:border-white/50 shadow-2xl transition-all duration-300 transform hover:scale-105 w-full text-base md:text-lg py-3 md:py-4"
              >
                Book Service Online
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Booking Modal */}
      <ServiceBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceName="Mac Mini Repair"
      />
    </div>
  );
}