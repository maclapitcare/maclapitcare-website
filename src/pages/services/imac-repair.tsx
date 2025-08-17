import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Phone, MessageCircle, Clock, Shield, Wrench, Star, ArrowRight, CheckCircle, Monitor, Cpu, HardDrive, Search, Award, Users, MapPin, Zap } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ServiceBookingModal from "@/components/forms/service-booking-modal";
import ServiceRequestForm from "@/components/forms/service-request-form";

export default function iMacRepair() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  useEffect(() => {
    document.title = "iMac Repair Service Delhi NCR | Screen, Logic Board, SSD Upgrade - MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert iMac repair service in Delhi NCR by MacLap IT Care. Display replacement ₹8,999, logic board repair ₹5,499, SSD upgrade ₹3,999. M1/M3 chip support, up to 3 months warranty, 6-8 hours service. Call +91 92117 20790");
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "MacLap IT Care",
      "description": "Professional iMac repair service in Delhi NCR with 15+ years expertise",
      "url": "https://maclapitcare.com/imac-repair-service-delhi-ncr",
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
      "priceRange": "₹₹",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "5000"
      },
      "areaServed": [
        "Delhi NCR", "Noida", "Gurgaon", "Ghaziabad", "Delhi"
      ],
      "serviceType": "iMac Repair Service"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent && script.textContent.includes('iMac Repair Service')) {
          script.remove();
        }
      });
    };
  }, []);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  const imacModels = [
    // Latest Apple Silicon iMac Models (2021-2024)
    { name: "iMac 24-inch M3", model: "A2873", year: "2023-2024", chip: "M3", screen: "24-inch 4.5K Retina" },
    { name: "iMac 24-inch M1", model: "A2438", year: "2021", chip: "M1", screen: "24-inch 4.5K Retina" },
    
    // Intel iMac Models (2009-2020)
    { name: "iMac 27-inch 5K", model: "A2115", year: "2020", chip: "Intel i5/i7/i9", screen: "27-inch 5K Retina" },
    { name: "iMac 21.5-inch 4K", model: "A1418", year: "2019", chip: "Intel i3/i5/i7", screen: "21.5-inch 4K Retina" },
    { name: "iMac 27-inch 5K", model: "A2115", year: "2019", chip: "Intel i5/i9", screen: "27-inch 5K Retina" },
    { name: "iMac 21.5-inch", model: "A1418", year: "2017", chip: "Intel i5", screen: "21.5-inch Full HD" },
    { name: "iMac 27-inch 5K", model: "A1419", year: "2017", chip: "Intel i5/i7", screen: "27-inch 5K Retina" },
    { name: "iMac 21.5-inch 4K", model: "A1418", year: "2015", chip: "Intel i5/i7", screen: "21.5-inch 4K Retina" },
    { name: "iMac 27-inch 5K", model: "A1419", year: "2014-2015", chip: "Intel i5/i7", screen: "27-inch 5K Retina" },
    { name: "iMac 21.5-inch", model: "A1311", year: "2012-2013", chip: "Intel i5/i7", screen: "21.5-inch Full HD" },
    { name: "iMac 27-inch", model: "A1312", year: "2012-2013", chip: "Intel i5/i7", screen: "27-inch QHD" },
    { name: "iMac 21.5-inch", model: "A1311", year: "2011", chip: "Intel i5/i7", screen: "21.5-inch Full HD" },
    { name: "iMac 27-inch", model: "A1312", year: "2011", chip: "Intel i5/i7", screen: "27-inch QHD" },
    { name: "iMac 21.5-inch", model: "A1311", year: "2010", chip: "Intel Core i3/i5", screen: "21.5-inch Full HD" },
    { name: "iMac 27-inch", model: "A1312", year: "2009-2010", chip: "Intel Core i5/i7", screen: "27-inch QHD" }
  ];

  const quickStats = [
    { icon: Clock, title: "6-8 Hours", description: "Average repair time", gradient: "from-blue-500 to-indigo-600" },
    { icon: Shield, title: "Up to 3 Months", description: "Comprehensive warranty", gradient: "from-green-500 to-emerald-600" },
    { icon: Users, title: "5,000+", description: "Happy customers", gradient: "from-purple-500 to-pink-600" },
    { icon: Award, title: "15+ Years", description: "Repair expertise", gradient: "from-orange-500 to-red-600" }
  ];

  const testimonials = [
    {
      name: "Arjun Patel",
      rating: 5,
      comment: "MacLap IT Care fixed my iMac 27-inch 5K display perfectly. The color calibration is amazing now. Professional service with genuine parts.",
      location: "Noida Sector 121",
      service: "Display Repair",
      device: "iMac 27-inch 5K"
    },
    {
      name: "Kavya Sharma", 
      rating: 5,
      comment: "SSD upgrade transformed my old iMac completely. Now it boots in seconds! MacLap IT Care team did excellent work with data migration.",
      location: "Delhi",
      service: "SSD Upgrade",
      device: "iMac 21.5-inch 2017"
    },
    {
      name: "Rohit Kumar",
      rating: 5,
      comment: "Logic board repair saved my iMac M1 from complete failure. MacLap IT Care's component-level repair skills are impressive!",
      location: "Gurgaon",
      service: "Logic Board Repair",
      device: "iMac 24-inch M1"
    },
    {
      name: "Meera Gupta",
      rating: 5,
      comment: "Memory upgrade from 8GB to 32GB made my iMac super fast for video editing. Professional installation and testing by MacLap IT Care.",
      location: "Ghaziabad",
      service: "Memory Upgrade",
      device: "iMac 27-inch 2020"
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Authorized Service Quality",
      description: "15+ years expertise with Apple-trained technicians providing authorized service center quality iMac repairs."
    },
    {
      icon: Zap,
      title: "Same-Day Service",
      description: "Most iMac repairs completed within 2-4 hours. Emergency repair services available for urgent business needs."
    },
    {
      icon: Award,
      title: "Genuine Parts Guarantee",
      description: "Original Apple parts and high-quality OEM alternatives with transparent part selection process for all iMac models."
    },
    {
      icon: MapPin,
      title: "Doorstep Convenience",
      description: "Free pickup and delivery service across Delhi NCR. Professional packaging for safe iMac transportation."
    }
  ];

  const services = [
    {
      title: "iMac Display Repair",
      description: "Professional iMac display repair for all screen issues including 4.5K and 5K Retina displays",
      price: "Starting from ₹8,999",
      features: ["4.5K/5K Retina display repair", "Backlight replacement", "Color calibration", "Touch ID repair", "Glass panel replacement"]
    },
    {
      title: "iMac SSD Upgrade",
      description: "Transform your iMac performance with high-speed SSD upgrade and data migration",
      price: "Starting from ₹3,999",
      features: ["NVMe SSD installation", "Complete data migration", "Performance optimization", "Up to 3 months warranty"]
    },
    {
      title: "iMac Memory Upgrade",
      description: "Expand iMac RAM from 8GB to 128GB for professional workloads and multitasking",
      price: "Starting from ₹3,999",
      features: ["8GB to 128GB capacity", "DDR4/DDR5 memory", "Professional installation", "Performance testing"]
    },
    {
      title: "iMac Logic Board Repair",
      description: "Advanced component-level logic board repair for all iMac models including M1/M3 chips",
      price: "Starting from ₹5,499",
      features: ["Microsoldering expertise", "GPU repair", "Port replacement", "No fix, no fee guarantee"]
    },
    {
      title: "iMac Thermal Management",
      description: "Fix overheating issues with professional thermal paste and cooling system repair",
      price: "Starting from ₹2,999",
      features: ["Thermal paste replacement", "Fan cleaning/replacement", "Heat sink repair", "Temperature monitoring"]
    }
  ];

  const filteredModels = imacModels.filter(model => 
    model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    model.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    model.chip.toLowerCase().includes(searchTerm.toLowerCase()) ||
    model.screen.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                iMac Repair Specialists
              </Badge>
              <div className="mb-6">
                <Badge className="mb-4 bg-white/20 text-white border-white/30 text-sm px-4 py-2 rounded-full backdrop-blur-sm">
                  🏆 Delhi NCR's #1 iMac Repair Specialists
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-2 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  MacLap IT Care
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-100 opacity-95">
                  Professional iMac Repair Service Delhi NCR
                </h2>
              </div>
              <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed font-medium">
                MacLap IT Care provides expert iMac repair services for all models. Display repair, SSD upgrade, memory expansion, and logic board repair with genuine parts and warranty.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 text-sm opacity-90">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">5000+ Happy Customers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Same Day Service</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
                {/* Primary CTA - Call Button */}
                <div className="relative group flex-1">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <Button 
                    size="lg" 
                    onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                    className="relative w-full bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 text-white border-0 hover:from-green-600 hover:via-emerald-700 hover:to-green-800 shadow-2xl font-bold text-lg px-8 py-6 rounded-2xl group transition-all duration-300 hover:shadow-green-500/25"
                  >
                    <div className="flex items-center justify-center space-x-4">
                      <div className="relative">
                        <Phone className="h-7 w-7 group-hover:animate-pulse" />
                        <div className="absolute -top-1 -right-1 h-3 w-3 bg-white rounded-full animate-ping opacity-75"></div>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium opacity-95 uppercase tracking-wide">Instant Support</span>
                        <span className="text-xl font-black tracking-tight">{CONTACT_INFO.phone1}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Button>
                </div>

                {/* Secondary CTA - Book Service Button */}
                <div className="relative group flex-1">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <Button 
                    size="lg" 
                    onClick={handleBookService}
                    className="relative w-full bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white border-0 hover:from-blue-700 hover:via-indigo-800 hover:to-purple-800 shadow-2xl font-bold text-lg px-8 py-6 rounded-2xl group transition-all duration-300 hover:shadow-blue-500/25"
                  >
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium opacity-95 uppercase tracking-wide">Book Repair</span>
                        <span className="text-xl font-black tracking-tight">Schedule Now</span>
                      </div>
                      <div className="relative">
                        <ArrowRight className="h-7 w-7 group-hover:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="inline-block bg-white/15 backdrop-blur-md rounded-3xl p-8 border-2 border-white/30 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">Service Highlights</h3>
                <div className="space-y-5 text-left">
                  <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className="bg-green-400/20 p-2 rounded-full">
                      <Monitor className="h-6 w-6 text-green-300" />
                    </div>
                    <span className="text-lg font-medium">All iMac Models Supported</span>
                  </div>
                  <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className="bg-blue-400/20 p-2 rounded-full">
                      <Clock className="h-6 w-6 text-blue-300" />
                    </div>
                    <span className="text-lg font-medium">6-8 Hours Service Time</span>
                  </div>
                  <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className="bg-purple-400/20 p-2 rounded-full">
                      <Shield className="h-6 w-6 text-purple-300" />
                    </div>
                    <span className="text-lg font-medium">Up to 3 Months Warranty</span>
                  </div>
                  <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className="bg-orange-400/20 p-2 rounded-full">
                      <Wrench className="h-6 w-6 text-orange-300" />
                    </div>
                    <span className="text-lg font-medium">Certified Technicians</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MacLap IT Care iMac Repair Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MacLap IT Care offers comprehensive repair solutions for all iMac models with professional service and genuine parts
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                  <p className="text-xl md:text-2xl font-bold text-blue-600">{service.price}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{service.description}</p>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center relative overflow-hidden">
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.gradient} text-white mb-4`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* iMac Models Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete iMac Model Database
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Search for your iMac model to get specific repair information and pricing
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search iMac model (e.g., A2438, M3, 5K Retina)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full border-2 border-gray-300 focus:border-primary rounded-lg text-lg"
                />
              </div>
              {searchTerm && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setSearchTerm("")}
                    className="h-8 w-8 p-0"
                  >
                    ×
                  </Button>
                </div>
              )}
            </div>

            {/* Model Count Display */}
            <div className="text-center mt-4">
              <p className="text-gray-600">
                {searchTerm ? `Found ${filteredModels.length} models` : `Showing all ${imacModels.length} iMac models`}
              </p>
            </div>
          </div>

          {/* iMac Models Scrollable Grid */}
          <div className="relative">
            {/* Category Filters */}
            <div className="flex justify-center mb-6">
              <div className="flex flex-wrap gap-2 bg-gray-100 p-2 rounded-lg max-w-full overflow-x-auto">
                <Button
                  size="sm"
                  variant={searchTerm === "" ? "default" : "ghost"}
                  onClick={() => setSearchTerm("")}
                  className="rounded-md whitespace-nowrap"
                >
                  All Models
                </Button>
                <Button
                  size="sm"
                  variant={searchTerm === "M3" ? "default" : "ghost"}
                  onClick={() => setSearchTerm("M3")}
                  className="rounded-md whitespace-nowrap"
                >
                  M3 Chip
                </Button>
                <Button
                  size="sm"
                  variant={searchTerm === "M1" ? "default" : "ghost"}
                  onClick={() => setSearchTerm("M1")}
                  className="rounded-md whitespace-nowrap"
                >
                  M1 Chip
                </Button>
                <Button
                  size="sm"
                  variant={searchTerm === "5K" ? "default" : "ghost"}
                  onClick={() => setSearchTerm("5K")}
                  className="rounded-md whitespace-nowrap"
                >
                  5K Retina
                </Button>
                <Button
                  size="sm"
                  variant={searchTerm === "Intel" ? "default" : "ghost"}
                  onClick={() => setSearchTerm("Intel")}
                  className="rounded-md whitespace-nowrap"
                >
                  Intel
                </Button>
              </div>
            </div>

            {/* Scrollable Container */}
            <div 
              className="overflow-x-auto pb-4 scroll-smooth" 
              style={{ 
                scrollbarWidth: 'thin',
                scrollbarColor: '#6366f1 #e5e7eb'
              }}
            >
              <div className="flex space-x-6" style={{ width: 'max-content' }}>
                {filteredModels.map((model, index) => (
                  <Card 
                    key={index} 
                    className="flex-shrink-0 w-80 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-gray-900 text-lg leading-tight">{model.name}</h3>
                        <Badge 
                          variant="secondary" 
                          className={`ml-2 flex-shrink-0 ${
                            model.chip.includes('M3') ? 'bg-purple-100 text-purple-800' :
                            model.chip.includes('M1') ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {model.chip}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <p className="text-gray-600">
                          <span className="font-semibold">Model:</span> {model.model}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-semibold">Year:</span> {model.year}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-semibold">Display:</span> {model.screen}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Button 
                          size="sm" 
                          className="w-full bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
                          onClick={() => window.open(`tel:${CONTACT_INFO.phone1}`, '_self')}
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Call for Quote
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-full bg-green-50 hover:bg-green-100 border-green-200 text-green-700 hover:text-green-800 transform hover:scale-105 transition-all duration-200"
                          onClick={() => window.open(`https://wa.me/${CONTACT_INFO.phone1.replace(/\s+/g, '')}?text=Hi! I need repair quote for ${model.name} (${model.model})`, '_blank')}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          WhatsApp Quote
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Scroll Indicators and Navigation */}
            {filteredModels.length > 4 && (
              <div className="flex justify-center items-center mt-6 space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <ArrowRight className="h-4 w-4 mr-1" />
                  Scroll horizontally to see more models
                </div>
                <div className="text-sm text-gray-500">
                  {filteredModels.length} models available
                </div>
              </div>
            )}

            {/* Quick Stats for Filtered Models */}
            {searchTerm && filteredModels.length > 0 && (
              <div className="mt-6 bg-primary/5 rounded-lg p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">{filteredModels.length}</p>
                    <p className="text-sm text-gray-600">Models Found</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">
                      {new Set(filteredModels.map(m => m.chip.split(' ')[0])).size}
                    </p>
                    <p className="text-sm text-gray-600">Chip Types</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">
                      {Math.min(...filteredModels.map(m => parseInt(m.year.split('-')[0])))} - {Math.max(...filteredModels.map(m => parseInt(m.year.split('-')[1] || m.year.split('-')[0])))}
                    </p>
                    <p className="text-sm text-gray-600">Year Range</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">6-8 hrs</p>
                    <p className="text-sm text-gray-600">Avg Repair Time</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {filteredModels.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No models found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any iMac models matching "{searchTerm}". Try searching with different terms like model number, year, or chip type.
                </p>
                <Button 
                  onClick={() => setSearchTerm("")} 
                  className="bg-primary hover:bg-primary/90"
                >
                  View All {imacModels.length} Models
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Verified Customer Reviews
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from satisfied iMac repair customers across Delhi NCR
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-current" />
                      ))}
                    </div>
                    <Badge className="ml-auto bg-green-100 text-green-800 text-xs">
                      Verified
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4 text-xs md:text-sm italic">"{testimonial.comment}"</p>
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.location}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.service}</p>
                    <p className="text-xs text-gray-500">{testimonial.device}</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full bg-green-50 hover:bg-green-100 border-green-200 text-green-700 hover:text-green-800 transform hover:scale-105 transition-all duration-200"
                      onClick={() => window.open(`https://wa.me/${CONTACT_INFO.phone1.replace(/\s+/g, '')}?text=Hi! I want iMac repair like ${testimonial.name} got`, '_blank')}
                    >
                      <MessageCircle className="mr-2 h-3 w-3" />
                      <span className="text-xs">Get Same Service</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Search Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular iMac Repair Searches
            </h2>
            <p className="text-xl text-gray-600">
              Common search terms customers use to find MacLap IT Care iMac repair services
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  category: "Display Issues",
                  searches: ["iMac screen repair Delhi", "5K display replacement", "iMac black screen fix", "display flickering repair"]
                },
                {
                  category: "Performance Upgrades", 
                  searches: ["iMac SSD upgrade", "RAM expansion service", "speed optimization", "storage upgrade cost"]
                },
                {
                  category: "Hardware Problems",
                  searches: ["iMac logic board repair", "overheating fix", "power issues", "port not working"]
                },
                {
                  category: "Model Specific",
                  searches: ["24-inch M1 repair", "27-inch 5K service", "Intel iMac fix", "Apple Silicon repair"]
                },
                {
                  category: "Location Based",
                  searches: ["iMac repair Noida", "Delhi NCR service", "Gurgaon repair center", "home pickup service"]
                },
                {
                  category: "Service Types",
                  searches: ["data recovery iMac", "liquid damage repair", "component replacement", "diagnostic service"]
                }
              ].map((group, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-bold text-base md:text-lg mb-4 text-primary">{group.category}</h3>
                    <div className="space-y-2">
                      {group.searches.map((search, idx) => (
                        <Button
                          key={idx}
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-left text-gray-600 hover:text-primary hover:bg-primary/10 text-xs md:text-sm p-2 md:p-3 h-auto"
                          onClick={() => setSearchTerm(search.split(' ')[0])}
                        >
                          <Search className="mr-2 h-3 w-3 flex-shrink-0" />
                          <span className="break-words">{search}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose MacLap IT Care for iMac Repair?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference of professional iMac repair service with genuine commitment to quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <feature.icon className="h-12 w-12 text-primary mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your iMac Repaired Today by MacLap IT Care
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional iMac repair service with genuine parts, expert technicians, and warranty protection
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                className="bg-white text-blue-900 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                <span className="hidden sm:inline">Call Now: {CONTACT_INFO.phone1}</span>
                <span className="sm:hidden">Call: {CONTACT_INFO.phone1}</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-green-500 text-white hover:bg-green-600 border-green-500 transform hover:scale-105 transition-all duration-300 hover:shadow-xl group w-full sm:w-auto"
                onClick={() => window.location.href = `https://wa.me/919211720790?text=Hi, I need iMac repair service in Delhi NCR`}
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:bounce" />
                WhatsApp Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Booking Modal */}
      <ServiceBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceName="iMac Repair"
      />
    </div>
  );
}