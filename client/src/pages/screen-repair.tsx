import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Monitor, Phone, Shield, Clock, CheckCircle, Star, 
  Wrench, Award, Zap, AlertTriangle, Search, Smartphone,
  MessageCircle, MapPin, Wind, Calendar, Settings, 
  ChevronLeft, ChevronRight, Laptop, Eye, Home, Users
} from "lucide-react";


import ServiceBookingModal from "@/components/forms/service-booking-modal";
import { CONTACT_INFO } from "@/lib/constants";

export default function ScreenRepair() {
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [heroFormData, setHeroFormData] = useState({
    name: "",
    phone: "",
    location: ""
  });
  const [heroFormSubmitting, setHeroFormSubmitting] = useState(false);
  const [currentMacBookIndex, setCurrentMacBookIndex] = useState(0);
  const [currentLaptopIndex, setCurrentLaptopIndex] = useState(0);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  const handleHeroFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroFormData.name || !heroFormData.phone) {
      alert("Please fill in all required fields");
      return;
    }
    
    setHeroFormSubmitting(true);
    
    try {
      const apiData = {
        name: heroFormData.name,
        phone: heroFormData.phone,
        location: heroFormData.location || "Noida",
        deviceModel: "MacBook/Laptop Screen Replacement",
        serviceType: "Screen Replacement",
        issueDescription: "Screen replacement request from Noida page",
      };

      const response = await fetch('/api/service-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit request');
      }
      
      alert("Thank you! We'll contact you shortly for screen diagnosis in Noida.");
      setHeroFormData({ name: "", phone: "", location: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit request. Please try again or call us directly.');
    } finally {
      setHeroFormSubmitting(false);
    }
  };

  useEffect(() => {
    document.title = "MacBook Laptop Screen Replacement Noida | MacLap IT Care | Expert Display Repair Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook & laptop screen replacement in Noida. Cracked display repair, LCD replacement, dead pixels fix. Same-day service, 3-month warranty. Call 9211720790");
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "MacLap IT Care - Screen Replacement Noida",
      "description": "Professional MacBook and laptop screen replacement service in Noida with expert diagnosis",
      "url": "https://maclapitcare.com/macbook-laptop-screen-replacement-noida",
      "telephone": "+919211720790",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 121",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201307",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.5706",
        "longitude": "77.3272"
      },
      "openingHours": "Mo-Su 10:00-19:00",
      "priceRange": "₹₹₹",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "5000"
      },
      "areaServed": [
        "Noida", "Delhi NCR", "Gurgaon", "Ghaziabad", "Delhi"
      ],
      "serviceType": "Screen Replacement Service"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent && script.textContent.includes('MacLap IT Care')) {
          script.remove();
        }
      });
    };
  }, []);

  // MacBook search terms with scrolling
  const macBookSearchTerms = [
    "MacBook Pro M3 screen replacement Noida",
    "MacBook Air M2 display repair Sector 121",
    "MacBook Pro 16 inch screen replacement cost",
    "MacBook Air 13 inch LCD replacement Noida",
    "MacBook Pro M1 cracked screen repair",
    "MacBook Air display replacement near me",
    "MacBook Pro screen replacement price Noida",
    "MacBook Air M3 screen repair service",
    "MacBook Pro 14 inch display replacement",
    "MacBook screen flickering repair Noida",
    "MacBook Pro Touch Bar screen replacement",
    "MacBook Air broken screen repair cost",
    "MacBook Pro M2 screen replacement Sector 121",
    "MacBook display assembly replacement Noida",
    "MacBook Pro 13 inch screen repair service",
    "MacBook Air dead pixels repair Noida",
    "MacBook Pro Retina screen replacement",
    "MacBook Air M1 display repair cost",
    "MacBook Pro screen bleeding repair",
    "MacBook screen replacement same day Noida",
    "MacBook Air screen replacement warranty",
    "MacBook Pro liquid damage screen repair",
    "MacBook screen replacement genuine parts",
    "MacBook display calibration after replacement",
    "MacBook Pro screen replacement time Noida"
  ];

  // Laptop search terms with scrolling
  const laptopSearchTerms = [
    "Dell laptop screen replacement Noida",
    "HP laptop display repair Sector 121",
    "Lenovo laptop screen replacement cost",
    "Asus laptop LCD replacement Noida",
    "Acer laptop cracked screen repair",
    "MSI gaming laptop screen replacement",
    "Toshiba laptop display repair Noida",
    "Sony laptop screen replacement price",
    "Samsung laptop LCD repair service",
    "Fujitsu laptop screen replacement Noida",
    "LG laptop display assembly replacement",
    "Alienware laptop screen repair cost",
    "Surface laptop screen replacement Noida",
    "Razer laptop display repair service",
    "Gigabyte laptop screen replacement",
    "VAIO laptop screen repair Noida",
    "Gaming laptop screen replacement cost",
    "Business laptop display repair Sector 121",
    "Ultrabook screen replacement Noida",
    "Laptop screen replacement same day",
    "Touch screen laptop repair Noida",
    "4K laptop display replacement cost",
    "OLED laptop screen repair service",
    "Laptop screen replacement warranty Noida",
    "Professional laptop display calibration"
  ];

  const nextMacBook = () => {
    setCurrentMacBookIndex((prev) => (prev + 5) % macBookSearchTerms.length);
  };

  const prevMacBook = () => {
    setCurrentMacBookIndex((prev) => (prev - 5 + macBookSearchTerms.length) % macBookSearchTerms.length);
  };

  const nextLaptop = () => {
    setCurrentLaptopIndex((prev) => (prev + 5) % laptopSearchTerms.length);
  };

  const prevLaptop = () => {
    setCurrentLaptopIndex((prev) => (prev - 5 + laptopSearchTerms.length) % laptopSearchTerms.length);
  };

  return (
    <div>
      
      {/* Advanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-16 sm:py-20 lg:py-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400 rounded-full blur-lg animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                {/* Premium badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-3 py-1 text-xs sm:text-sm font-semibold">
                    <Shield className="w-3 h-3 mr-1" />
                    Noida's #1 Screen Experts
                  </Badge>
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 text-xs sm:text-sm font-semibold">
                    <Star className="w-3 h-3 mr-1" />
                    4.9/5 Rating
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-3 py-1 text-xs sm:text-sm font-semibold">
                    <Clock className="w-3 h-3 mr-1" />
                    Same Day Service
                  </Badge>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  MacBook & Laptop
                  <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    Screen Replacement
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl text-blue-200 mt-2">
                    Noida Sector 121
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  Professional screen replacement service by MacLap IT Care. Cracked displays, LCD damage, 
                  dead pixels repair with <span className="font-bold text-cyan-300">genuine parts</span> and 
                  <span className="font-bold text-green-300"> 3-month warranty</span>. Same-day service available in Noida.
                </p>

                {/* Advanced stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl sm:text-3xl font-bold text-cyan-300">5000+</div>
                    <div className="text-xs sm:text-sm text-blue-200">Screens Fixed</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl sm:text-3xl font-bold text-green-300">2-4hrs</div>
                    <div className="text-xs sm:text-sm text-blue-200">Avg Time</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-300">15+</div>
                    <div className="text-xs sm:text-sm text-blue-200">Years Exp</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-300">98%</div>
                    <div className="text-xs sm:text-sm text-blue-200">Success Rate</div>
                  </div>
                </div>

                {/* Advanced CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a
                    href={`tel:+91${CONTACT_INFO.phone1}`}
                    className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-3">
                      <Phone className="w-5 h-5 animate-pulse" />
                      <span className="text-lg">Call: {CONTACT_INFO.phone1}</span>
                    </div>
                  </a>
                  
                  <a
                    href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20screen%20replacement%20in%20Noida`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-3">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-lg">WhatsApp Expert</span>
                    </div>
                  </a>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center gap-4 pt-4 text-sm text-blue-200">
                  <div className="flex items-center space-x-2">
                    <Home className="w-4 h-4" />
                    <span>Free Pickup Noida</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Genuine Parts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Expert Technicians</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced booking form */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-4">
                      <Monitor className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Get Free Screen Diagnosis</h3>
                    <p className="text-blue-100">Expert assessment in Noida • No hidden charges</p>
                  </div>
                  
                  <form onSubmit={handleHeroFormSubmit} className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Your full name"
                      value={heroFormData.name}
                      onChange={(e) => setHeroFormData({...heroFormData, name: e.target.value})}
                      required
                      className="bg-white/90 text-black border-0 h-12 text-lg placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-400"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone number (10 digits)"
                      value={heroFormData.phone}
                      onChange={(e) => setHeroFormData({...heroFormData, phone: e.target.value})}
                      required
                      className="bg-white/90 text-black border-0 h-12 text-lg placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-400"
                    />
                    <Select onValueChange={(value) => setHeroFormData({...heroFormData, location: value})}>
                      <SelectTrigger className="bg-white/90 text-black border-0 h-12 text-lg focus:ring-2 focus:ring-cyan-400">
                        <SelectValue placeholder="Select your location in Noida" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border shadow-xl z-50">
                        <SelectItem value="sector-121">Sector 121</SelectItem>
                        <SelectItem value="sector-122">Sector 122</SelectItem>
                        <SelectItem value="sector-125">Sector 125</SelectItem>
                        <SelectItem value="sector-126">Sector 126</SelectItem>
                        <SelectItem value="sector-128">Sector 128</SelectItem>
                        <SelectItem value="greater-noida">Greater Noida</SelectItem>
                        <SelectItem value="noida-extension">Noida Extension</SelectItem>
                        <SelectItem value="other-noida">Other Noida Area</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg rounded-xl transform transition-all duration-300 hover:scale-105"
                      disabled={heroFormSubmitting}
                    >
                      {heroFormSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Calendar className="mr-2 h-5 w-5" />
                          Book Free Diagnosis Now
                        </>
                      )}
                    </Button>
                  </form>
                  
                  <div className="mt-6 text-center text-xs text-blue-200">
                    <p>✅ No advance payment • ✅ Free pickup in Noida • ✅ Expert diagnosis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete MacBook Screen Repair Services by MacLap IT Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert screen replacement for all MacBook models with genuine quality parts and professional installation.
            </p>
          </div>

          {/* Screen Issues We Fix */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common Screen Issues We Repair</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <AlertTriangle className="h-12 w-12 text-red-500 mb-4 mx-auto" />
                <h4 className="font-bold text-gray-900 mb-2">Cracked Display</h4>
                <p className="text-gray-600">Physical damage from drops or impact</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <Eye className="h-12 w-12 text-red-500 mb-4 mx-auto" />
                <h4 className="font-bold text-gray-900 mb-2">Dead Pixels</h4>
                <p className="text-gray-600">Permanent bright or dark spots</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <Monitor className="h-12 w-12 text-red-500 mb-4 mx-auto" />
                <h4 className="font-bold text-gray-900 mb-2">Black Screen</h4>
                <p className="text-gray-600">No display output or backlight</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <Settings className="h-12 w-12 text-red-500 mb-4 mx-auto" />
                <h4 className="font-bold text-gray-900 mb-2">Color Issues</h4>
                <p className="text-gray-600">Wrong colors or display tinting</p>
              </div>
            </div>
          </div>

          {/* MacBook Models We Service */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">MacBook Models We Service</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">MacBook Air Models</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2337 (M1, 2020)</span>
                    <span className="font-semibold text-blue-600">Professional Service</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2681 (M2, 2022)</span>
                    <span className="font-semibold text-blue-600">Same Day Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">A3240 (M3, 2024)</span>
                    <span className="font-semibold text-blue-600">Latest Models</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">MacBook Pro 13"</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2338 (M1, 2020)</span>
                    <span className="font-semibold text-green-600">Expert Repair</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Intel Models</span>
                    <span className="font-semibold text-green-600">All Generations</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Touch Bar Models</span>
                    <span className="font-semibold text-green-600">Specialized Service</span>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">MacBook Pro 14"/16"</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2442 (14", 2021)</span>
                    <span className="font-semibold text-purple-600">Premium Service</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2485 (16", 2021)</span>
                    <span className="font-semibold text-purple-600">Professional Grade</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">M3 Pro/Max (2023)</span>
                    <span className="font-semibold text-purple-600">Latest Technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Search Sections with Scrolling */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Search className="h-4 w-4" />
              Most Searched Terms in Noida
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Popular Screen Replacement Searches</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common MacBook and laptop screen replacement searches from customers in Noida and Delhi NCR
            </p>
          </div>

          <Tabs defaultValue="macbook" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white shadow-lg">
              <TabsTrigger value="macbook" className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Monitor className="h-4 w-4" />
                MacBook Searches
              </TabsTrigger>
              <TabsTrigger value="laptop" className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Laptop className="h-4 w-4" />
                Laptop Searches
              </TabsTrigger>
            </TabsList>

            <TabsContent value="macbook" className="space-y-6">
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">MacBook Screen Replacement Searches</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevMacBook}
                      className="h-10 w-10 p-0"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextMacBook}
                      className="h-10 w-10 p-0"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                  {macBookSearchTerms.slice(currentMacBookIndex, currentMacBookIndex + 5).map((search, index) => (
                    <div 
                      key={index} 
                      className="group bg-white hover:bg-blue-50 p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-xs">{currentMacBookIndex + index + 1}</span>
                        </div>
                        <p className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors leading-relaxed">
                          {search}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">MacBook Screen Issues? We Fix Them All!</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Cracked screens, dead pixels, LCD damage, or display flickering - our MacBook screen experts in Noida provide 
                      professional diagnosis and replacement with genuine quality parts.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                      <a
                        href={`tel:+91${CONTACT_INFO.phone1}`}
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call MacBook Expert
                      </a>
                      <a
                        href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20screen%20replacement%20in%20Noida`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp MacBook Help
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="laptop" className="space-y-6">
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Laptop Screen Replacement Searches</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevLaptop}
                      className="h-10 w-10 p-0"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextLaptop}
                      className="h-10 w-10 p-0"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                  {laptopSearchTerms.slice(currentLaptopIndex, currentLaptopIndex + 5).map((search, index) => (
                    <div 
                      key={index} 
                      className="group bg-white hover:bg-green-50 p-4 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-xs">{currentLaptopIndex + index + 1}</span>
                        </div>
                        <p className="text-sm text-gray-700 group-hover:text-green-600 transition-colors leading-relaxed">
                          {search}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">All Laptop Brands Screen Replacement!</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Dell, HP, Lenovo, Asus, Acer - we repair all laptop brands with quality LCD screens and professional installation. 
                      Same-day service available in Noida with pickup facility.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                      <a
                        href={`tel:+91${CONTACT_INFO.phone1}`}
                        className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call Laptop Expert
                      </a>
                      <a
                        href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20laptop%20screen%20replacement%20in%20Noida`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Laptop Help
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose MacLap IT Care Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MacLap IT Care for Screen Replacement in Noida?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15+ years of screen replacement expertise with 5000+ satisfied customers across Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Genuine Quality Parts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Only genuine quality LCD screens with original color accuracy and brightness. No cheap aftermarket displays.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Same Day Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fast screen replacement in 2-4 hours for most models. Emergency same-day service available in Noida.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3 Month Warranty</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive warranty on screen replacement covering defects, color issues, and installation problems.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Pickup Noida</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complimentary doorstep pickup and delivery service across all Noida sectors. No transportation hassle.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Diagnosis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Free comprehensive screen diagnosis including backlight, LCD panel, and digitizer functionality testing.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">5000+ Happy Customers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Trusted by thousands of customers in Delhi NCR with 4.9/5 rating for screen replacement services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Fix Your Screen in Noida?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get professional MacBook and laptop screen replacement with free diagnosis and pickup service
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center"
              >
                <Phone className="h-6 w-6" />
                <span>Call: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20screen%20replacement%20service%20in%20Noida`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors w-full sm:w-auto justify-center"
              >
                <MessageCircle className="h-6 w-6" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Booking Modal */}
      <ServiceBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceName={selectedModel || "Screen Replacement"}
      />
    </div>
  );
}