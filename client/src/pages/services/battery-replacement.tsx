import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Battery, Phone, Shield, Clock, CheckCircle, Star, 
  Zap, Award, AlertTriangle, Search, Smartphone,
  MessageCircle, MapPin, Calendar, Settings, 
  ChevronLeft, ChevronRight, Laptop, Gauge, Home, Users
} from "lucide-react";

import ServiceBookingModal from "@/components/forms/service-booking-modal";
import { CONTACT_INFO } from "@/lib/constants";

export default function BatteryReplacement() {
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
        location: heroFormData.location || "Delhi NCR",
        deviceModel: "MacBook/Laptop Battery Replacement",
        serviceType: "Battery Replacement",
        issueDescription: "Battery replacement request from Delhi NCR page",
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
      
      alert("Thank you! We'll contact you shortly for battery diagnosis in Delhi NCR.");
      setHeroFormData({ name: "", phone: "", location: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit request. Please try again or call us directly.');
    } finally {
      setHeroFormSubmitting(false);
    }
  };

  useEffect(() => {
    document.title = "MacBook Laptop Battery Replacement Delhi NCR | MacLap IT Care | Expert Battery Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook & laptop battery replacement in Delhi NCR. Original batteries, swollen battery repair, fast charging issues. Same-day service, 6-month warranty. Call 9211720790");
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "MacLap IT Care - Battery Replacement Delhi NCR",
      "description": "Professional MacBook and laptop battery replacement service in Delhi NCR with expert diagnosis",
      "url": "https://maclapitcare.com/macbook-laptop-battery-replacement-delhi-ncr",
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
        "Delhi", "Noida", "Gurgaon", "Ghaziabad", "Delhi NCR"
      ],
      "serviceType": "Battery Replacement Service"
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

  // MacBook battery search terms with scrolling
  const macBookBatteryTerms = [
    "MacBook Pro M3 battery replacement Delhi",
    "MacBook Air M2 battery swollen repair",
    "MacBook Pro 16 inch battery replacement cost",
    "MacBook Air 13 inch battery health service",
    "MacBook Pro M1 battery not charging",
    "MacBook Air battery replacement near me",
    "MacBook Pro battery draining fast Delhi",
    "MacBook Air M3 battery service repair",
    "MacBook Pro 14 inch battery replacement",
    "MacBook battery service warning fix",
    "MacBook Pro Touch Bar battery issues",
    "MacBook Air battery cycle count high",
    "MacBook Pro M2 battery replacement Delhi",
    "MacBook battery calibration service NCR",
    "MacBook Pro 13 inch battery repair cost",
    "MacBook Air dead battery replacement",
    "MacBook Pro Retina battery swelling",
    "MacBook Air M1 battery service battery",
    "MacBook Pro battery replacement genuine",
    "MacBook battery replacement same day Delhi",
    "MacBook Air battery warranty replacement",
    "MacBook Pro liquid damage battery repair",
    "MacBook battery replacement original parts",
    "MacBook battery health check diagnosis",
    "MacBook Pro battery replacement time Delhi"
  ];

  // Laptop battery search terms with scrolling
  const laptopBatteryTerms = [
    "Dell laptop battery replacement Delhi NCR",
    "HP laptop battery not charging repair",
    "Lenovo laptop battery replacement cost",
    "Asus laptop battery swollen repair",
    "Acer laptop battery draining fast",
    "MSI gaming laptop battery replacement",
    "Toshiba laptop battery service Delhi",
    "Sony laptop battery replacement price",
    "Samsung laptop battery repair service",
    "Fujitsu laptop battery replacement NCR",
    "LG laptop battery not holding charge",
    "Alienware laptop battery replacement",
    "Surface laptop battery replacement Delhi",
    "Razer laptop battery service repair",
    "Gigabyte laptop battery replacement",
    "VAIO laptop battery repair Delhi NCR",
    "Gaming laptop battery replacement cost",
    "Business laptop battery service Delhi",
    "Ultrabook battery replacement NCR",
    "Laptop battery replacement same day",
    "Touch screen laptop battery repair",
    "4K laptop battery drainage issue",
    "OLED laptop battery service Delhi",
    "Laptop battery replacement warranty",
    "Professional laptop battery calibration"
  ];

  const nextMacBook = () => {
    setCurrentMacBookIndex((prev) => (prev + 5) % macBookBatteryTerms.length);
  };

  const prevMacBook = () => {
    setCurrentMacBookIndex((prev) => (prev - 5 + macBookBatteryTerms.length) % macBookBatteryTerms.length);
  };

  const nextLaptop = () => {
    setCurrentLaptopIndex((prev) => (prev + 5) % laptopBatteryTerms.length);
  };

  const prevLaptop = () => {
    setCurrentLaptopIndex((prev) => (prev - 5 + laptopBatteryTerms.length) % laptopBatteryTerms.length);
  };

  return (
    <div>
      {/* Advanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 text-white py-16 sm:py-20 lg:py-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-green-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-lime-400 rounded-full blur-lg animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                {/* Premium badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge className="bg-gradient-to-r from-green-400 to-emerald-400 text-white px-3 py-1 text-xs sm:text-sm font-semibold">
                    <Shield className="w-3 h-3 mr-1" />
                    Delhi NCR's #1 Battery Experts
                  </Badge>
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 text-xs sm:text-sm font-semibold">
                    <Star className="w-3 h-3 mr-1" />
                    4.9/5 Rating
                  </Badge>
                  <Badge className="bg-gradient-to-r from-lime-400 to-green-400 text-black px-3 py-1 text-xs sm:text-sm font-semibold">
                    <Clock className="w-3 h-3 mr-1" />
                    6 Month Warranty
                  </Badge>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  MacBook & Laptop
                  <span className="block bg-gradient-to-r from-lime-300 to-green-300 bg-clip-text text-transparent">
                    Battery Replacement
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl text-green-200 mt-2">
                    Delhi NCR Service
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-green-100 leading-relaxed max-w-2xl">
                  Professional battery replacement service by MacLap IT Care. Swollen batteries, charging issues, 
                  fast draining repair with <span className="font-bold text-lime-300">genuine batteries</span> and 
                  <span className="font-bold text-yellow-300"> 6-month warranty</span>. Same-day service in Delhi NCR.
                </p>

                {/* Advanced stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl sm:text-3xl font-bold text-lime-300">5000+</div>
                    <div className="text-xs sm:text-sm text-green-200">Batteries Fixed</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-300">1-3hrs</div>
                    <div className="text-xs sm:text-sm text-green-200">Avg Time</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-300">15+</div>
                    <div className="text-xs sm:text-sm text-green-200">Years Exp</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl sm:text-3xl font-bold text-green-300">98%</div>
                    <div className="text-xs sm:text-sm text-green-200">Success Rate</div>
                  </div>
                </div>

                {/* Advanced CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a
                    href={`tel:+91${CONTACT_INFO.phone1}`}
                    className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-3">
                      <Phone className="w-5 h-5 animate-pulse" />
                      <span className="text-lg">Call: {CONTACT_INFO.phone1}</span>
                    </div>
                  </a>
                  
                  <a
                    href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20battery%20replacement%20in%20Delhi%20NCR`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-3">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-lg">WhatsApp Expert</span>
                    </div>
                  </a>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center gap-4 pt-4 text-sm text-green-200">
                  <div className="flex items-center space-x-2">
                    <Home className="w-4 h-4" />
                    <span>Free Pickup Delhi NCR</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Genuine Batteries</span>
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
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-lime-400 to-green-500 rounded-full mb-4">
                      <Battery className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Get Free Battery Diagnosis</h3>
                    <p className="text-green-100">Expert battery health check in Delhi NCR • No hidden charges</p>
                  </div>
                  
                  <form onSubmit={handleHeroFormSubmit} className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Your full name"
                      value={heroFormData.name}
                      onChange={(e) => setHeroFormData({...heroFormData, name: e.target.value})}
                      required
                      className="bg-white/90 text-black border-0 h-12 text-lg placeholder:text-gray-500 focus:ring-2 focus:ring-lime-400"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone number (10 digits)"
                      value={heroFormData.phone}
                      onChange={(e) => setHeroFormData({...heroFormData, phone: e.target.value})}
                      required
                      className="bg-white/90 text-black border-0 h-12 text-lg placeholder:text-gray-500 focus:ring-2 focus:ring-lime-400"
                    />
                    <Select onValueChange={(value) => setHeroFormData({...heroFormData, location: value})}>
                      <SelectTrigger className="bg-white/90 text-black border-0 h-12 text-lg focus:ring-2 focus:ring-lime-400">
                        <SelectValue placeholder="Select your location in Delhi NCR" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border shadow-xl z-50">
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="noida">Noida</SelectItem>
                        <SelectItem value="gurgaon">Gurgaon</SelectItem>
                        <SelectItem value="ghaziabad">Ghaziabad</SelectItem>
                        <SelectItem value="faridabad">Faridabad</SelectItem>
                        <SelectItem value="greater-noida">Greater Noida</SelectItem>
                        <SelectItem value="other-delhi-ncr">Other Delhi NCR</SelectItem>
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
                          Book Free Battery Check Now
                        </>
                      )}
                    </Button>
                  </form>
                  
                  <div className="mt-6 text-center text-xs text-green-200">
                    <p>✅ No advance payment • ✅ Free pickup Delhi NCR • ✅ Expert diagnosis</p>
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
              Complete MacBook Battery Replacement Services by MacLap IT Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert battery replacement for all MacBook and laptop models with genuine quality batteries and professional installation.
            </p>
          </div>

          {/* Battery Issues We Fix */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common Battery Issues We Repair</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <Battery className="h-12 w-12 text-red-500 mb-4 mx-auto" />
                <h4 className="font-bold text-gray-900 mb-2">Fast Draining</h4>
                <p className="text-gray-600">Battery drains quickly or lasts less than 2 hours</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <Zap className="h-12 w-12 text-red-500 mb-4 mx-auto" />
                <h4 className="font-bold text-gray-900 mb-2">Not Charging</h4>
                <p className="text-gray-600">Battery won't charge or charges very slowly</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <AlertTriangle className="h-12 w-12 text-red-500 mb-4 mx-auto" />
                <h4 className="font-bold text-gray-900 mb-2">Swollen Battery</h4>
                <p className="text-gray-600">Physical expansion causing trackpad/keyboard issues</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <Gauge className="h-12 w-12 text-red-500 mb-4 mx-auto" />
                <h4 className="font-bold text-gray-900 mb-2">Service Battery</h4>
                <p className="text-gray-600">"Service Battery" warning or poor health status</p>
              </div>
            </div>
          </div>

          {/* Model-Wise Battery Service with Links */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">MacBook Model-Wise Battery Replacement Services</h3>
            <p className="text-center text-gray-600 mb-8">Click on your MacBook model for detailed battery replacement information and pricing</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* MacBook Air Models */}
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Battery className="w-6 h-6 text-green-600 mr-2" />
                  MacBook Air Models
                </h4>
                <div className="space-y-3">
                  <a href="/macbook-air-a2337-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-green-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2337 (M1, 13", 2020)</span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-air-a2681-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-green-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2681 (M2, 13", 2022)</span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-air-a3240-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-green-100 transition-colors">
                    <span className="text-gray-700 font-medium">A3240 (M3, 13", 2024)</span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-air-a3130-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-green-100 transition-colors">
                    <span className="text-gray-700 font-medium">A3130 (15", M2, 2023)</span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-air-a3131-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-green-100 transition-colors">
                    <span className="text-gray-700 font-medium">A3131 (15", M2, 2023)</span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-air-a1466-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-green-100 transition-colors">
                    <span className="text-gray-700 font-medium">A1466 (13", 2013-2017)</span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-air-a1932-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-green-100 transition-colors">
                    <span className="text-gray-700 font-medium">A1932 (13", 2018-2019)</span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-air-a2179-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-green-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2179 (13", 2020)</span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-air-a3114-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-green-100 transition-colors">
                    <span className="text-gray-700 font-medium">A3114 (13", M3, 2024)</span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-air-a3115-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-green-100 transition-colors">
                    <span className="text-gray-700 font-medium">A3115 (15", M3, 2024)</span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-air-a2941-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-green-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2941 (15", M2, 2023)</span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                </div>
              </div>

              {/* MacBook Pro 13" Models */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Battery className="w-6 h-6 text-blue-600 mr-2" />
                  MacBook Pro 13"
                </h4>
                <div className="space-y-3">
                  <a href="/macbook-pro-a2338-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-blue-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2338 (M1, 13", 2020)</span>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a2251-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-blue-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2251 (13", 2020)</span>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a2289-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-blue-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2289 (13", 2020)</span>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a2159-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-blue-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2159 (13", 2019)</span>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a1708-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-blue-100 transition-colors">
                    <span className="text-gray-700 font-medium">A1708 (13", 2016-2017)</span>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a1706-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-blue-100 transition-colors">
                    <span className="text-gray-700 font-medium">A1706 (13", Touch Bar)</span>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a2686-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-blue-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2686 (13", M2, 2022)</span>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                </div>
              </div>

              {/* MacBook Pro 14"/16" Models */}
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Battery className="w-6 h-6 text-purple-600 mr-2" />
                  MacBook Pro 14"/16"
                </h4>
                <div className="space-y-3">
                  <a href="/macbook-pro-a2992-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-purple-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2992 (16", M3 Max, 2023)</span>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a2918-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-purple-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2918 (14", M3 Pro, 2023)</span>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a2991-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-purple-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2991 (14", M3, 2023)</span>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a3021-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-purple-100 transition-colors">
                    <span className="text-gray-700 font-medium">A3021 (16", M3, 2023)</span>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a2442-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-purple-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2442 (14", M1 Pro, 2021)</span>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a2485-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-purple-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2485 (16", M1 Pro, 2021)</span>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a2779-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-purple-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2779 (14", M2 Pro, 2023)</span>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a2780-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-purple-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2780 (16", M2 Pro, 2023)</span>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a2141-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-purple-100 transition-colors">
                    <span className="text-gray-700 font-medium">A2141 (16", Intel, 2019)</span>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a1990-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-purple-100 transition-colors">
                    <span className="text-gray-700 font-medium">A1990 (15", Intel, 2018)</span>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                  <a href="/macbook-pro-a1707-battery-replacement-delhi-ncr" className="flex justify-between items-center p-2 rounded hover:bg-purple-100 transition-colors">
                    <span className="text-gray-700 font-medium">A1707 (15", Touch Bar)</span>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">View Details</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-xl p-6 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Can't Find Your MacBook Model?</h4>
                <p className="text-gray-600 mb-4">
                  We service all MacBook models from 2009 to 2024. Contact our battery experts for model identification and replacement service.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                  <a
                    href={`tel:+91${CONTACT_INFO.phone1}`}
                    className="inline-flex items-center bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call for Model Help
                  </a>
                  <Button
                    onClick={handleBookService}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full"
                  >
                    <Battery className="mr-2 h-4 w-4" />
                    Book Battery Service
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Search Sections with Scrolling */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-green-600/10 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Search className="h-4 w-4" />
              Most Searched Battery Terms in Delhi NCR
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Popular Battery Replacement Searches</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common MacBook and laptop battery replacement searches from customers across Delhi NCR
            </p>
          </div>

          <Tabs defaultValue="macbook" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white shadow-lg">
              <TabsTrigger value="macbook" className="flex items-center gap-2 data-[state=active]:bg-green-600 data-[state=active]:text-white">
                <Battery className="h-4 w-4" />
                MacBook Battery
              </TabsTrigger>
              <TabsTrigger value="laptop" className="flex items-center gap-2 data-[state=active]:bg-green-600 data-[state=active]:text-white">
                <Laptop className="h-4 w-4" />
                Laptop Battery
              </TabsTrigger>
            </TabsList>

            <TabsContent value="macbook" className="space-y-6">
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">MacBook Battery Replacement Searches</h3>
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
                  {macBookBatteryTerms.slice(currentMacBookIndex, currentMacBookIndex + 5).map((search, index) => (
                    <div 
                      key={index} 
                      className="group bg-white hover:bg-green-50 p-4 rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-xs">{currentMacBookIndex + index + 1}</span>
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
                    <h4 className="text-xl font-bold text-gray-900 mb-3">MacBook Battery Issues? We Fix Them All!</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Swollen batteries, fast draining, charging problems, or service battery warnings - our MacBook battery experts in Delhi NCR provide 
                      professional diagnosis and replacement with genuine quality batteries.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                      <a
                        href={`tel:+91${CONTACT_INFO.phone1}`}
                        className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call Battery Expert
                      </a>
                      <a
                        href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20battery%20replacement%20in%20Delhi%20NCR`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Battery Help
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="laptop" className="space-y-6">
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Laptop Battery Replacement Searches</h3>
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
                  {laptopBatteryTerms.slice(currentLaptopIndex, currentLaptopIndex + 5).map((search, index) => (
                    <div 
                      key={index} 
                      className="group bg-white hover:bg-blue-50 p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white font-bold text-xs">{currentLaptopIndex + index + 1}</span>
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
                    <h4 className="text-xl font-bold text-gray-900 mb-3">All Laptop Brands Battery Replacement!</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Dell, HP, Lenovo, Asus, Acer - we replace batteries for all laptop brands with quality cells and professional installation. 
                      Same-day service available in Delhi NCR with pickup facility.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                      <a
                        href={`tel:+91${CONTACT_INFO.phone1}`}
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call Laptop Expert
                      </a>
                      <a
                        href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20laptop%20battery%20replacement%20in%20Delhi%20NCR`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
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
              Why Choose MacLap IT Care for Battery Replacement in Delhi NCR?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15+ years of battery replacement expertise with 5000+ satisfied customers across Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Battery className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Genuine Quality Batteries</h3>
                <p className="text-gray-600 leading-relaxed">
                  Only genuine quality battery cells with original capacity and safety standards. No cheap aftermarket batteries.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Same Day Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fast battery replacement in 1-3 hours for most models. Emergency same-day service available in Delhi NCR.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">6 Month Warranty</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive warranty on battery replacement covering capacity, charging issues, and installation problems.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Pickup Delhi NCR</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complimentary doorstep pickup and delivery service across all Delhi NCR areas. No transportation hassle.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Gauge className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Diagnosis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Free comprehensive battery health analysis including cycle count, capacity testing, and charging assessment.
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
                  Trusted by thousands of customers in Delhi NCR with 4.9/5 rating for battery replacement services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Fix Your Battery in Delhi NCR?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get professional MacBook and laptop battery replacement with free diagnosis and pickup service
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="flex items-center space-x-3 bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center"
              >
                <Phone className="h-6 w-6" />
                <span>Call: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20battery%20replacement%20service%20in%20Delhi%20NCR`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors w-full sm:w-auto justify-center"
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
        serviceName="Battery Replacement"
      />
    </div>
  );
}