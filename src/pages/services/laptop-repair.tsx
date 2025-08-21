import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Laptop, Phone, MessageCircle, Clock, Shield, Wrench, HardDrive, Cpu, Zap } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function LaptopRepair() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "Laptop Repair Service Delhi NCR | Dell HP Lenovo Asus Gaming Laptop Repair | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional laptop repair service in Delhi NCR. Dell, HP, Lenovo, Asus, gaming laptop screen replacement, motherboard repair, data recovery. Up to 3 months warranty. Call 9211720790");
    }
  }, []);

  const laptopBrands = [
    {
      name: "Dell Laptops",
      models: ["Inspiron 15 3000", "Latitude 5520", "XPS 13 9310", "Vostro 15 3000", "Gaming G15 5515"],
      commonIssues: ["Screen flickering", "Overheating issues", "Battery not charging", "Keyboard malfunction"],
      solutions: ["Display cable repair", "Thermal paste replacement", "Charging port fix", "Keyboard replacement"],
      searchKeywords: ["Dell laptop repair Delhi", "Inspiron screen replacement", "Dell overheating fix"]
    },
    {
      name: "HP Laptops", 
      models: ["Pavilion 15", "EliteBook 840", "Envy x360", "ProBook 450", "Omen Gaming"],
      commonIssues: ["BIOS corruption", "Hard drive failure", "WiFi connectivity", "Audio problems"],
      solutions: ["BIOS recovery", "SSD replacement", "WiFi module repair", "Speaker replacement"],
      searchKeywords: ["HP laptop repair Noida", "Pavilion motherboard repair", "HP audio fix"]
    },
    {
      name: "Lenovo Laptops",
      models: ["ThinkPad X1 Carbon", "IdeaPad 3", "Legion 5", "Yoga C940", "ThinkBook 15"],
      commonIssues: ["Screen hinge broken", "Power button stuck", "RAM failure", "Trackpad issues"],
      solutions: ["Hinge replacement", "Power button repair", "Memory upgrade", "Trackpad calibration"],
      searchKeywords: ["Lenovo laptop repair", "ThinkPad screen repair", "Legion cooling fix"]
    },
    {
      name: "Asus Laptops",
      models: ["VivoBook S15", "ROG Strix G15", "ZenBook 14", "TUF Gaming", "ExpertBook"],
      commonIssues: ["Graphics card failure", "Charging issues", "Slow performance", "Blue screen errors"],
      solutions: ["GPU repair service", "Adapter replacement", "Performance optimization", "Windows troubleshooting"],
      searchKeywords: ["Asus laptop repair", "ROG graphics repair", "VivoBook performance"]
    },
    {
      name: "Gaming Laptops",
      models: ["MSI Gaming", "Razer Blade", "Alienware", "ROG Series", "Acer Predator"],
      commonIssues: ["Overheating during gaming", "RGB lighting failure", "Performance throttling", "Graphics artifacts"],
      solutions: ["Advanced cooling solutions", "RGB controller repair", "Thermal management", "GPU troubleshooting"],
      searchKeywords: ["Gaming laptop repair", "MSI overheating fix", "RGB lighting repair"]
    },
    {
      name: "Business Laptops",
      models: ["ThinkPad T Series", "EliteBook", "Latitude", "ProBook", "Surface Book"],
      commonIssues: ["Security chip errors", "Docking station issues", "VPN connectivity", "Enterprise software"],
      solutions: ["TPM chip repair", "Port replacement", "Network configuration", "Software troubleshooting"],
      searchKeywords: ["Business laptop repair", "Corporate laptop service", "Enterprise support"]
    }
  ];

  const services = [
    {
      name: "Screen Replacement",
      description: "Professional laptop screen replacement with quality displays",
      price: "Starting ₹2,499",
      features: ["HD/FHD/4K displays", "Same-day service", "Anti-glare options", "Touch screen support"]
    },
    {
      name: "Motherboard Repair",
      description: "Advanced motherboard and component-level repair",
      price: "Starting ₹1,999",
      features: ["Chip-level repair", "Power circuit fix", "Port replacement", "No fix, no fee"]
    },
    {
      name: "Data Recovery",
      description: "Professional data recovery and storage solutions",
      price: "Starting ₹2,999",
      features: ["HDD/SSD recovery", "Data transfer", "Backup solutions", "Emergency service"]
    },
    {
      name: "Performance Upgrade",
      description: "Hardware upgrades for better performance",
      price: "Starting ₹1,599",
      features: ["RAM upgrade", "SSD installation", "Thermal optimization", "Speed boost"]
    }
  ];

  const commonSearches = [
    "Laptop repair near me Delhi NCR",
    "Dell laptop screen replacement Noida",
    "HP laptop motherboard repair Delhi",
    "Lenovo laptop overheating fix",
    "Asus laptop keyboard repair",
    "Gaming laptop repair service",
    "Laptop data recovery Delhi",
    "Business laptop repair Gurgaon", 
    "Laptop battery replacement service",
    "Laptop virus removal Delhi",
    "Laptop water damage repair",
    "Laptop hard drive replacement",
    "Laptop RAM upgrade service",
    "Laptop hinge repair Delhi NCR",
    "Laptop charging port repair"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20 text-sm">
                <Laptop className="h-4 w-4" />
                Professional Laptop Repair
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Laptop Repair Service
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-400 mt-2">Delhi NCR</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-lg mx-auto lg:mx-0">
                <span className="text-white font-semibold">MacLap IT Care</span> - Expert laptop repair for all brands including Dell, HP, Lenovo, Asus, gaming laptops. Screen replacement, motherboard repair, data recovery with professional service and warranty.
              </p>
              
              <div className="flex flex-col gap-3 max-w-sm mx-auto lg:mx-0">
                <Button 
                  size="lg" 
                  onClick={() => typeof window !== "undefined" && window.open(`tel:${CONTACT_INFO.phone1}`, '_self')}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 w-full text-base"
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Call: {CONTACT_INFO.phone1}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => typeof window !== "undefined" && (window.location.href = `https://wa.me/919211720790?text=Hi, I need laptop repair service in Delhi NCR`)}
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
                      <Laptop className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">All Laptop Brands</h4>
                      <p className="text-xs md:text-sm text-gray-300">Dell, HP, Lenovo, Asus & More</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl border border-white/10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">Same Day Service</h4>
                      <p className="text-xs md:text-sm text-gray-300">Quick Turnaround Time</p>
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

      {/* Laptop Brands Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <Laptop className="h-3 w-3 md:h-4 md:w-4" />
              All Laptop Brands Supported
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              <span className="text-blue-600">MacLap IT Care</span> Laptop Models
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Expert laptop repair for all brands with comprehensive model coverage and professional solutions
            </p>
          </div>

          {/* Scrolling Laptop Brands Container */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-4 md:pb-6">
              <div className="flex gap-4 md:gap-6 min-w-max px-2 md:px-4">
                {laptopBrands.map((brand, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0 w-[320px] md:w-[400px]">
                    <CardContent className="p-4 md:p-8 h-full">
                      <div className="flex items-start justify-between mb-4 md:mb-6">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 truncate">{brand.name}</h3>
                          <div className="text-xs md:text-sm text-gray-600 mb-2">Popular Models:</div>
                          <div className="flex flex-wrap gap-1">
                            {brand.models.slice(0, 3).map((model, idx) => (
                              <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs px-2 py-1">
                                {model}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 ml-2">
                          <Laptop className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        </div>
                      </div>

                      {/* Common Issues */}
                      <div className="mb-4 md:mb-6">
                        <h5 className="font-bold text-xs md:text-sm mb-2 md:mb-3 text-red-600 flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          Common Issues:
                        </h5>
                        <div className="space-y-1 md:space-y-2">
                          {brand.commonIssues.slice(0, 3).map((issue, idx) => (
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
                          {brand.solutions.slice(0, 3).map((solution, idx) => (
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
                          {brand.searchKeywords.slice(0, 2).map((keyword, idx) => (
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
                ← Scroll horizontally to view all laptop brands →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Laptop Repair Services</h2>
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
              Most Searched Laptop Issues
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Common Laptop Searches</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Popular laptop repair searches from customers across Delhi NCR
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
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Need Help with Your Laptop?</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                  Can't find your specific issue? Our expert technicians can diagnose and fix any laptop problem.
                </p>
                <div className="flex flex-col gap-3 max-w-sm mx-auto">
                  <Button 
                    onClick={() => typeof window !== "undefined" && window.open(`tel:${CONTACT_INFO.phone1}`, '_self')}
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
              Get Your Laptop Repaired Today
            </h2>
            <p className="text-base md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
              <span className="text-white font-semibold">MacLap IT Care</span> - Professional laptop repair service for all brands including Dell, HP, Lenovo, Asus, gaming laptops with expert technicians, genuine parts, and up to 3 months warranty protection across Delhi NCR
            </p>
            
            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <Button 
                size="lg" 
                onClick={() => typeof window !== "undefined" && window.open(`tel:${CONTACT_INFO.phone1}`, '_self')}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-0 w-full text-base md:text-lg py-3 md:py-4"
              >
                <Phone className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:animate-pulse" />
                Call: {CONTACT_INFO.phone1}
              </Button>
              <Button 
                size="lg" 
                onClick={() => typeof window !== "undefined" && (window.location.href = `https://wa.me/919211720790?text=Hi, I need laptop repair service in Delhi NCR`)}
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
        serviceName="Laptop Repair Service"
      />
    </div>
  );
}
