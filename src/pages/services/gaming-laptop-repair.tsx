import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Clock, Shield, Wrench, Star, ArrowRight, CheckCircle, Gamepad2, Cpu, Zap, Monitor, Flame, Target } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function GamingLaptopRepair() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Gaming Laptop Repair Delhi NCR | ROG MSI Alienware Predator Gaming Laptop Repair | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional gaming laptop repair in Delhi NCR. ROG, MSI, Alienware, Predator GPU repair, cooling optimization, RGB fix. Up to 3 months warranty. Call 9211720790");
    }
  }, []);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  const gamingBrands = [
    {
      name: "ASUS ROG Gaming",
      models: ["ROG Strix G15", "ROG Zephyrus G14", "ROG Flow X13", "ROG Strix SCAR", "TUF Gaming"],
      commonIssues: ["GPU overheating issues", "RGB Aura Sync failures", "Performance throttling", "Fan noise problems"],
      solutions: ["Advanced thermal management", "RGB controller repair", "Power limit optimization", "Fan replacement service"],
      searchKeywords: ["ROG laptop repair Delhi", "ASUS gaming overheating", "ROG RGB lighting fix"]
    },
    {
      name: "MSI Gaming Laptops",
      models: ["MSI GE76 Raider", "GS66 Stealth", "GP66 Leopard", "Katana GF76", "Alpha 15"],
      commonIssues: ["Dragon Center crashes", "SteelSeries RGB malfunction", "Battery fast drain", "Display artifacts"],
      solutions: ["Software reinstallation", "RGB controller repair", "Battery optimization", "GPU troubleshooting"],
      searchKeywords: ["MSI gaming repair", "Dragon Center fix", "MSI GPU repair"]
    },
    {
      name: "Alienware Gaming",
      models: ["Alienware m15 R7", "m17 R5", "x14", "x15", "x17"],
      commonIssues: ["Liquid cooling leaks", "Alien LED failures", "Power delivery problems", "Graphics artifacts"],
      solutions: ["Cooling system service", "LED controller repair", "Power circuit fix", "GPU chip repair"],
      searchKeywords: ["Alienware repair Delhi", "m15 cooling fix", "Alien LED repair"]
    },
    {
      name: "Acer Predator Gaming",
      models: ["Predator Helios 300", "Triton 500", "Nitro 5", "Predator Orion", "ConceptD"],
      commonIssues: ["PredatorSense errors", "3D AeroBlade fan failure", "RAM compatibility", "Storage upgrade"],
      solutions: ["Software debugging", "Fan motor replacement", "Memory configuration", "NVMe SSD installation"],
      searchKeywords: ["Predator repair", "Nitro 5 fix", "Acer gaming laptop"]
    },
    {
      name: "Razer Gaming Laptops",
      models: ["Razer Blade 15", "Blade 17", "Blade Stealth", "Blade Pro", "Book 13"],
      commonIssues: ["Razer Synapse crashes", "Battery swelling issues", "Chroma RGB problems", "Trackpad failures"],
      solutions: ["Software troubleshooting", "Battery replacement", "RGB system repair", "Trackpad replacement"],
      searchKeywords: ["Razer Blade repair", "Synapse fix", "Razer battery issue"]
    },
    {
      name: "Gaming Performance Issues",
      models: ["All Gaming Brands", "High-End Gaming", "RTX Series", "Custom Gaming", "Esports Laptops"],
      commonIssues: ["Low FPS problems", "Graphics stuttering", "Temperature throttling", "Game compatibility"],
      solutions: ["Performance optimization", "Graphics driver update", "Thermal management", "Game configuration"],
      searchKeywords: ["Gaming laptop performance", "FPS optimization", "Gaming repair service"]
    }
  ];

  const services = [
    {
      name: "GPU Repair",
      description: "Graphics card repair and replacement for gaming performance",
      price: "Starting ₹8,999",
      features: ["RTX/GTX repair", "VRAM replacement", "GPU reballing", "Performance testing"]
    },
    {
      name: "Cooling Optimization",
      description: "Advanced thermal management and cooling system repair",
      price: "Starting ₹2,499",
      features: ["Thermal paste", "Fan replacement", "Heat sink repair", "Liquid cooling"]
    },
    {
      name: "Performance Upgrade",
      description: "Hardware upgrades for enhanced gaming performance",
      price: "Starting ₹4,999",
      features: ["RAM upgrade", "SSD installation", "CPU upgrade", "Overclocking"]
    },
    {
      name: "Display Repair",
      description: "High refresh rate and 4K gaming display repair",
      price: "Starting ₹3,999",
      features: ["144Hz/240Hz panels", "4K resolution", "G-Sync/FreeSync", "Color calibration"]
    }
  ];

  const commonSearches = [
    "Gaming laptop repair near me Delhi NCR",
    "ROG laptop overheating fix Delhi",
    "MSI gaming laptop repair Noida",
    "Alienware cooling system repair",
    "Predator laptop RGB lighting fix",
    "Gaming laptop GPU repair service",
    "Razer Blade battery replacement",
    "Gaming laptop performance upgrade",
    "High refresh rate screen repair",
    "Gaming laptop fan noise fix",
    "RTX graphics card repair Delhi",
    "Gaming laptop power issues",
    "Esports laptop optimization",
    "Gaming laptop virus removal",
    "RGB keyboard backlight repair"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.3),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 text-sm">
                <Gamepad2 className="h-4 w-4" />
                Gaming Laptop Specialists
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Gaming Laptop Repair
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-red-400 mt-2">Delhi NCR</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-lg mx-auto lg:mx-0">
                <span className="text-white font-semibold">MacLap IT Care</span> - Expert gaming laptop repair for ROG, Alienware, MSI, Predator. GPU repair, cooling optimization, RGB fix, performance upgrades with professional warranty.
              </p>
              
              <div className="flex flex-col gap-3 max-w-sm mx-auto lg:mx-0">
                <Button 
                  size="lg" 
                  onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                  className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 w-full text-base"
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Call: {CONTACT_INFO.phone1}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => window.location.href = `https://wa.me/919211720790?text=Hi, I need gaming laptop repair service in Delhi NCR`}
                  className="group bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full text-base"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  WhatsApp Now
                </Button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Gaming Expertise</h3>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Gamepad2 className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">All Gaming Brands</h4>
                      <p className="text-xs md:text-sm text-gray-300">ROG, MSI, Alienware, Predator</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">Performance Optimization</h4>
                      <p className="text-xs md:text-sm text-gray-300">GPU & Gaming Tuning</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">Gaming Warranty</h4>
                      <p className="text-xs md:text-sm text-gray-300">Up to 3 Months Protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Brands Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <Gamepad2 className="h-3 w-3 md:h-4 md:w-4" />
              All Gaming Brands Supported
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              <span className="text-red-600">MacLap IT Care</span> Gaming Laptop Models
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Expert gaming laptop repair for all brands with comprehensive coverage and professional gaming solutions
            </p>
          </div>

          {/* Scrolling Gaming Brands Container */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-4 md:pb-6">
              <div className="flex gap-4 md:gap-6 min-w-max px-2 md:px-4">
                {gamingBrands.map((brand, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0 w-[320px] md:w-[400px]">
                    <CardContent className="p-4 md:p-8 h-full">
                      <div className="flex items-start justify-between mb-4 md:mb-6">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 truncate">{brand.name}</h3>
                          <div className="text-xs md:text-sm text-gray-600 mb-2">Popular Models:</div>
                          <div className="flex flex-wrap gap-1">
                            {(brand.models || []).slice(0, 3).map((modelName: string, idx: number) => (
                              <Badge key={idx} variant="outline" className="bg-red-50 text-red-700 border-red-200 text-xs px-2 py-1">
                                {modelName}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 ml-2">
                          <Gamepad2 className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        </div>
                      </div>

                      {/* Common Issues */}
                      <div className="mb-4 md:mb-6">
                        <h5 className="font-bold text-xs md:text-sm mb-2 md:mb-3 text-red-600 flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          Common Issues:
                        </h5>
                        <div className="space-y-1 md:space-y-2">
                          {(brand.commonIssues || []).slice(0, 3).map((issue: string, idx: number) => (
                            <div key={idx} className="flex items-start space-x-2 md:space-x-3 p-1.5 md:p-2 bg-red-50/50 rounded-md md:rounded-lg">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                              <span className="text-xs md:text-sm text-gray-700 leading-relaxed">{issue}</span>
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
                          {(brand.solutions || []).slice(0, 3).map((solution: string, idx: number) => (
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
                          {(brand.searchKeywords || []).slice(0, 2).map((keyword: string, idx: number) => (
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
                ← Scroll horizontally to view all gaming laptop brands →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Gaming Laptop Repair Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Professional gaming laptop repair services with transparent pricing and up to 3 months warranty
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-0 rounded-xl md:rounded-2xl overflow-hidden">
                <CardContent className="p-4 md:p-8 text-center h-full flex flex-col">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Wrench className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-2xl md:text-3xl font-bold text-red-600 mb-3 md:mb-4">{service.price}</p>
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
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white text-sm md:text-base py-2 md:py-3"
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <Star className="h-3 w-3 md:h-4 md:w-4" />
              Most Searched Gaming Issues
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Common Gaming Searches</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Popular gaming laptop repair searches from customers across Delhi NCR
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {commonSearches.map((search, index) => (
                <div 
                  key={index} 
                  className="group bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl border border-red-100 hover:border-red-300 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-red-500 to-orange-600 rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs md:text-sm">{index + 1}</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-700 group-hover:text-red-700 transition-colors leading-relaxed">
                      {search}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-red-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Need Help with Your Gaming Laptop?</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                  Can't find your specific gaming issue? Our gaming specialists can diagnose and optimize any gaming laptop for peak performance.
                </p>
                <div className="flex flex-col gap-3 max-w-sm mx-auto">
                  <Button 
                    onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white w-full"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call for Diagnosis
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleBookService}
                    className="border-red-300 text-red-700 hover:bg-red-50 w-full"
                  >
                    Book Gaming Service
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(239,68,68,0.3),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 mb-6 md:mb-8 text-sm">
              <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-400" />
              4.9/5 Gaming Rating - 5000+ Repairs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Boost Your Gaming Performance Today
            </h2>
            <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
              <span className="text-white font-semibold">MacLap IT Care</span> - Professional gaming laptop repair and optimization for ROG, Alienware, MSI, Predator with expert gaming technicians, performance tuning, and up to 3 months warranty protection across Delhi NCR
            </p>
            
            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <Button 
                size="lg" 
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 border-0 w-full text-base md:text-lg py-3 md:py-4"
              >
                <Phone className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:animate-pulse" />
                Call: {CONTACT_INFO.phone1}
              </Button>
              <Button 
                size="lg" 
                onClick={() => window.location.href = `https://wa.me/919211720790?text=Hi, I need gaming laptop repair service in Delhi NCR`}
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
                Book Gaming Service
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
        serviceName="Gaming Laptop Repair"
      />
    </div>
  );
}