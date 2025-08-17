import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Clock, Shield, Wrench, Star, ArrowRight, CheckCircle, Tablet, Monitor, Keyboard, Zap, Cpu, Settings } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function SurfaceRepair() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Microsoft Surface Repair Delhi NCR | Surface Pro Laptop Book Studio Repair | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional Microsoft Surface repair in Delhi NCR. Surface Pro, Laptop, Book, Studio touch screen, Type Cover, charging port repair. Up to 3 months warranty. Call 9211720790");
    }
  }, []);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  const surfaceModels = [
    {
      name: "Surface Pro Series",
      models: ["Surface Pro 9", "Surface Pro 8", "Surface Pro X", "Surface Pro 7", "Surface Go 3"],
      commonIssues: ["Touch screen unresponsive", "Type Cover connectivity", "Surface Connect charging", "Surface Pen detection"],
      solutions: ["Touch digitizer replacement", "Magnetic connector repair", "Charging port service", "Pen calibration service"],
      searchKeywords: ["Surface Pro repair Delhi", "Surface touch screen fix", "Type Cover repair"]
    },
    {
      name: "Surface Laptop Series",
      models: ["Surface Laptop 5", "Surface Laptop 4", "Surface Laptop Studio", "Surface Laptop Go", "Surface Book"],
      commonIssues: ["Screen hinge problems", "Alcantara fabric damage", "Battery swelling issues", "Keyboard unresponsive"],
      solutions: ["Hinge replacement service", "Fabric restoration", "Battery replacement", "Keyboard matrix repair"],
      searchKeywords: ["Surface Laptop repair", "Surface hinge fix", "Surface battery issue"]
    },
    {
      name: "Surface Book Series",
      models: ["Surface Book 3", "Surface Book 2", "Surface Book 1", "Surface Laptop Studio"],
      commonIssues: ["Detach mechanism failure", "GPU overheating issues", "Screen detachment problems", "Base battery drain"],
      solutions: ["Detach motor repair", "GPU thermal management", "Magnetic lock service", "Battery optimization"],
      searchKeywords: ["Surface Book repair", "Surface detach fix", "Surface GPU repair"]
    },
    {
      name: "Surface Studio & Hub",
      models: ["Surface Studio 2+", "Surface Studio 2", "Surface Hub 2S", "Surface Hub 85"],
      commonIssues: ["PixelSense calibration", "Surface Dial connectivity", "Pen input lag", "Stand adjustment stuck"],
      solutions: ["Display calibration", "Bluetooth troubleshooting", "Pen latency optimization", "Stand mechanism service"],
      searchKeywords: ["Surface Studio repair", "Surface Hub repair", "Surface Dial fix"]
    },
    {
      name: "Surface Accessories",
      models: ["Type Cover", "Surface Pen", "Surface Mouse", "Surface Dock", "Arc Mouse"],
      commonIssues: ["Type Cover not detected", "Pen pressure sensitivity", "Mouse connectivity", "Dock not working"],
      solutions: ["Connector cleaning", "Pen calibration", "Bluetooth reset", "Dock port repair"],
      searchKeywords: ["Surface accessories repair", "Type Cover fix", "Surface Pen repair"]
    },
    {
      name: "Surface Performance Issues",
      models: ["All Surface Models", "Windows on ARM", "Intel Surface", "AMD Surface"],
      commonIssues: ["Slow performance", "Overheating problems", "Windows update errors", "Driver compatibility"],
      solutions: ["Performance optimization", "Thermal management", "System troubleshooting", "Driver updates"],
      searchKeywords: ["Surface performance fix", "Surface optimization", "Surface troubleshooting"]
    }
  ];

  const services = [
    {
      name: "Touch Screen Repair",
      description: "Professional PixelSense touch screen repair for all Surface models",
      price: "Starting ₹8,999",
      features: ["PixelSense repair", "Touch calibration", "LCD replacement", "Digitizer service"]
    },
    {
      name: "Type Cover Repair",
      description: "Keyboard and trackpad repair for Surface Type Cover",
      price: "Starting ₹3,999",
      features: ["Keyboard matrix", "Trackpad service", "Magnetic connector", "Backlight repair"]
    },
    {
      name: "Charging Port Fix",
      description: "Surface Connect and USB-C charging solutions",
      price: "Starting ₹4,999",
      features: ["Surface Connect", "USB-C repair", "Power delivery", "Fast charging"]
    },
    {
      name: "Performance Upgrade",
      description: "Hardware upgrades and optimization services",
      price: "Starting ₹6,999",
      features: ["SSD upgrade", "Memory expansion", "Thermal management", "System optimization"]
    }
  ];

  const commonSearches = [
    "Microsoft Surface repair near me Delhi NCR",
    "Surface Pro touch screen repair Delhi",
    "Surface Laptop hinge repair Noida", 
    "Surface Book detach problem fix",
    "Type Cover not working repair",
    "Surface charging port repair service",
    "Surface Pen not working fix",
    "Surface battery replacement Delhi",
    "Surface screen replacement service",
    "Surface overheating repair",
    "Surface Studio calibration fix",
    "Surface performance optimization",
    "Surface accessories repair",
    "Surface water damage repair",
    "Surface warranty repair service"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 text-sm">
                <Tablet className="h-4 w-4" />
                Microsoft Surface Experts
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Surface Repair Service
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-400 mt-2">Delhi NCR</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-lg mx-auto lg:mx-0">
                <span className="text-white font-semibold">MacLap IT Care</span> - Expert Microsoft Surface repair for Pro, Laptop, Book, Studio models. Touch screen repair, Type Cover service, charging solutions with professional warranty.
              </p>
              
              <div className="flex flex-col gap-3 max-w-sm mx-auto lg:mx-0">
                <Button 
                  size="lg" 
                  onClick={() => typeof window !== "undefined" && (window.location.href = `tel:${CONTACT_INFO.phone1}`)}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 w-full text-base"
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Call: {CONTACT_INFO.phone1}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => typeof window !== "undefined" && (window.location.href = `https://wa.me/919211720790?text=Hi, I need Microsoft Surface repair service in Delhi NCR`)}
                  className="group bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full text-base"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  WhatsApp Now
                </Button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Surface Expertise</h3>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Tablet className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">All Surface Models</h4>
                      <p className="text-xs md:text-sm text-gray-300">Pro, Laptop, Book, Studio</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Monitor className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">PixelSense Specialists</h4>
                      <p className="text-xs md:text-sm text-gray-300">Touch Screen Experts</p>
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

      {/* Surface Models Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <Tablet className="h-3 w-3 md:h-4 md:w-4" />
              All Surface Models Supported
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              <span className="text-blue-600">MacLap IT Care</span> Surface Models
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Expert Microsoft Surface repair for all models with comprehensive coverage and professional solutions
            </p>
          </div>

          {/* Scrolling Surface Models Container */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-4 md:pb-6">
              <div className="flex gap-4 md:gap-6 min-w-max px-2 md:px-4">
                {surfaceModels.map((model, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0 w-[320px] md:w-[400px]">
                    <CardContent className="p-4 md:p-8 h-full">
                      <div className="flex items-start justify-between mb-4 md:mb-6">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 truncate">{model.name}</h3>
                          <div className="text-xs md:text-sm text-gray-600 mb-2">Popular Models:</div>
                          <div className="flex flex-wrap gap-1">
                            {model.models.slice(0, 3).map((modelName, idx) => (
                              <Badge key={idx} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 text-xs px-2 py-1">
                                {modelName}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 ml-2">
                          <Tablet className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        </div>
                      </div>

                      {/* Common Issues */}
                      <div className="mb-4 md:mb-6">
                        <h5 className="font-bold text-xs md:text-sm mb-2 md:mb-3 text-red-600 flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          Common Issues:
                        </h5>
                        <div className="space-y-1 md:space-y-2">
                          {model.commonIssues.slice(0, 3).map((issue, idx) => (
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
                ← Scroll horizontally to view all Surface models →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Surface Repair Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Professional Microsoft Surface repair services with transparent pricing and up to 3 months warranty
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-0 rounded-xl md:rounded-2xl overflow-hidden">
                <CardContent className="p-4 md:p-8 text-center h-full flex flex-col">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <Wrench className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-2xl md:text-3xl font-bold text-purple-600 mb-3 md:mb-4">{service.price}</p>
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
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm md:text-base py-2 md:py-3"
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <Star className="h-3 w-3 md:h-4 md:w-4" />
              Most Searched Surface Issues
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Common Surface Searches</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Popular Microsoft Surface repair searches from customers across Delhi NCR
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {commonSearches.map((search, index) => (
                <div 
                  key={index} 
                  className="group bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs md:text-sm">{index + 1}</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-700 group-hover:text-purple-700 transition-colors leading-relaxed">
                      {search}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-purple-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Need Help with Your Surface?</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                  Can't find your specific Surface issue? Our Microsoft certified technicians can diagnose and fix any Surface problem.
                </p>
                <div className="flex flex-col gap-3 max-w-sm mx-auto">
                  <Button 
                    onClick={() => typeof window !== "undefined" && (window.location.href = `tel:${CONTACT_INFO.phone1}`)}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call for Diagnosis
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleBookService}
                    className="border-purple-300 text-purple-700 hover:bg-purple-50 w-full"
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 mb-6 md:mb-8 text-sm">
              <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-400" />
              4.9/5 Customer Rating - 5000+ Repairs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get Your Surface Repaired Today
            </h2>
            <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
              <span className="text-white font-semibold">MacLap IT Care</span> - Professional Microsoft Surface repair service for Pro, Laptop, Book, Studio models with expert technicians, genuine parts, and up to 3 months warranty protection across Delhi NCR
            </p>
            
            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <Button 
                size="lg" 
                onClick={() => typeof window !== "undefined" && (window.location.href = `tel:${CONTACT_INFO.phone1}`)}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 border-0 w-full text-base md:text-lg py-3 md:py-4"
              >
                <Phone className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:animate-pulse" />
                Call: {CONTACT_INFO.phone1}
              </Button>
              <Button 
                size="lg" 
                onClick={() => typeof window !== "undefined" && (window.location.href = `https://wa.me/919211720790?text=Hi, I need Microsoft Surface repair service in Delhi NCR`)}
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
        serviceName="Microsoft Surface Repair"
      />
    </div>
  );
}