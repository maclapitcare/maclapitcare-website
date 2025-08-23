import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, CheckCircle, Search, ChevronLeft, ChevronRight, Shield, Star, Truck } from "lucide-react";
import FormSubmitContactForm from "@/components/forms/formsubmit-contact-form";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function Noida() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    document.title = "MacBook Repair Near Me Noida | Laptop Repair Service Sector 121 Greater Noida | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MacBook laptop repair near me in Noida Sector 121, Greater Noida. Screen replacement ₹4999+, battery ₹3999+, motherboard ₹1499+. Free doorstep pickup all Noida sectors. Call +91 92117 20790");
    }
  }, []);

  const serviceAreas = [
    "Sector 15", "Sector 18", "Sector 62", "Sector 63", "Sector 135", "Sector 137",
    "Sector 16", "Sector 41", "Sector 44", "Sector 45", "Sector 61", "Sector 104",
    "Greater Noida", "Noida Extension", "Alpha Commercial Belt", "Film City"
  ];

  const services = [
    { name: "MacBook Screen Repair", price: "Starting ₹4,999", popular: true },
    { name: "Laptop Motherboard Repair", price: "Starting ₹1,499" },
    { name: "MacBook Battery Replacement", price: "Starting ₹3,999", popular: true },
    { name: "SSD Upgrade", price: "Starting ₹1,599" },
    { name: "Keyboard Replacement", price: "Starting ₹2,999" },
    { name: "Data Recovery", price: "Starting ₹2,999" }
  ];

  const commonSearches = [
    "MacBook screen repair near me", "Laptop repair Noida Sector 62", "MacBook battery replacement Noida",
    "Laptop motherboard repair Greater Noida", "MacBook keyboard repair Sector 18", "Data recovery service Noida",
    "Laptop screen replacement Noida", "MacBook logic board repair", "SSD upgrade Noida", "Laptop water damage repair",
    "MacBook trackpad repair", "Laptop charging port repair", "MacBook speaker repair Noida", "Gaming laptop repair",
    "HP laptop repair Noida", "Dell laptop service center", "Lenovo laptop repair Sector 135", "ASUS laptop repair",
    "MacBook hinge repair Noida", "Laptop overheating solution", "MacBook Pro 14 repair", "Surface laptop repair",
    "MacBook Air screen replacement", "Gaming laptop thermal paste", "Corporate laptop service Noida", "Laptop RAM upgrade",
    "ThinkPad repair service", "MacBook SSD data recovery", "Laptop virus cleaning", "MacBook TouchBar replacement",
    "Ultrabook repair Noida", "MacBook M2 chip repair", "Laptop display backlight fix", "MacBook camera repair"
  ];

  const reviews = [
    {
      name: "Rohit Sharma",
      location: "Sector 62, Noida",
      review: "Excellent MacBook repair service in Sector 62. They picked up my laptop from office and delivered it back in 2 days. Screen replacement was perfect!"
    },
    {
      name: "Priya Agarwal", 
      location: "Greater Noida",
      review: "Very professional service for laptop motherboard repair. The technician was knowledgeable and the pricing was transparent. Highly recommended!"
    },
    {
      name: "Amit Gupta",
      location: "Sector 135, Noida", 
      review: "MacBook battery replacement done professionally. Quick doorstep service and excellent customer support. My laptop is working like new!"
    },
    {
      name: "Sneha Verma",
      location: "Sector 18, Noida",
      review: "Amazing service quality! They fixed my MacBook water damage issue perfectly. Free pickup and delivery service made it so convenient."
    },
    {
      name: "Rajesh Kumar",
      location: "Alpha Commercial Belt",
      review: "Best laptop repair service in Noida! Fixed my gaming laptop's overheating issue with quality thermal paste. Excellent workmanship."
    },
    {
      name: "Neha Singh",
      location: "Film City, Noida",
      review: "Outstanding MacBook keyboard repair service. They replaced the entire keyboard within 24 hours. Professional and reliable service."
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-16 w-16 mr-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MacBook Repair Near Me | Laptop Repair Service Noida
            </h1>
            <p className="text-xl mb-8">
              Expert MacBook laptop repair services in Noida Sector 121, Greater Noida, all sectors. 
              Free doorstep pickup & delivery, certified technicians, genuine parts with 1-year warranty.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Free Doorstep Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Certified Technicians</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>90 Days Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Cover All Areas - Comprehensive Service Coverage */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">We Cover All Areas in Noida & Greater Noida</h2>
            <p className="text-xl text-gray-600 mb-4">
              Professional MacBook repair services across Noida, Greater Noida, and surrounding areas
            </p>
            <p className="text-lg text-blue-600 font-medium">
              Free doorstep pickup & delivery • Same-day service • Expert technicians
            </p>
          </div>

          {/* Tier 1 Priority Areas - Commercial Hubs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">💼 Prime Commercial & IT Hubs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 rounded-full p-3 w-fit mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">MacBook Repair Sector 18</h4>
                  <p className="text-sm text-gray-600 mb-3">Main Commercial Hub • DLF Mall • Wave Mall</p>
                  <a 
                    href="/macbook-repair-sector-18-noida" 
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline"
                  >
                    View Services →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 rounded-full p-3 w-fit mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">MacBook Repair Sector 62</h4>
                  <p className="text-sm text-gray-600 mb-3">IT Hub • HCL • Tech Mahindra • Microsoft</p>
                  <a 
                    href="/macbook-repair-sector-62-noida" 
                    className="text-green-600 hover:text-green-700 font-medium text-sm hover:underline"
                  >
                    View Services →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 rounded-full p-3 w-fit mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">MacBook Repair Sector 132</h4>
                  <p className="text-sm text-gray-600 mb-3">Expanding Commercial • Expressway Access</p>
                  <a 
                    href="/macbook-repair-sector-132-noida" 
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm hover:underline"
                  >
                    View Services →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-100 rounded-full p-3 w-fit mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">MacBook Repair Knowledge Park</h4>
                  <p className="text-sm text-gray-600 mb-3">Greater Noida • Educational Hub • Corporate</p>
                  <a 
                    href="/macbook-repair-knowledge-park-greater-noida" 
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline"
                  >
                    View Services →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tier 2 Premium Residential Areas */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">🏠 Premium Residential Sectors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300">
                <CardContent className="p-5 text-center">
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">MacBook Repair Sector 137</h4>
                  <p className="text-xs text-gray-600 mb-2">Premium • Metro Connectivity</p>
                  <a href="/macbook-repair-sector-137-noida" className="text-blue-600 text-xs hover:underline">View Services →</a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300">
                <CardContent className="p-5 text-center">
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">MacBook Repair Sector 128</h4>
                  <p className="text-xs text-gray-600 mb-2">Jaypee Wishtown • Golf Course</p>
                  <a href="/macbook-repair-sector-128-noida" className="text-blue-600 text-xs hover:underline">View Services →</a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300">
                <CardContent className="p-5 text-center">
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">MacBook Repair Sector 150</h4>
                  <p className="text-xs text-gray-600 mb-2">Premium Developments • Sports</p>
                  <a href="/macbook-repair-sector-150-noida" className="text-blue-600 text-xs hover:underline">View Services →</a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300">
                <CardContent className="p-5 text-center">
                  <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">MacBook Repair Greater Noida West</h4>
                  <p className="text-xs text-gray-600 mb-2">Tech Hub • Growing Population</p>
                  <a href="/macbook-repair-greater-noida-west" className="text-blue-600 text-xs hover:underline">View Services →</a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tier 3 Growing Areas */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">📈 Growing Commercial & Mixed Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Sector 75", desc: "Central Noida • Metro", url: "/macbook-repair-sector-75-noida" },
                { name: "Sector 94", desc: "Near Expressway", url: "/macbook-repair-sector-94-noida" },
                { name: "Sector 129", desc: "Adobe Offices", url: "/macbook-repair-sector-129-noida" },
                { name: "Techzone 4", desc: "Greater Noida", url: "/macbook-repair-techzone-4-greater-noida" },
                { name: "Sector 142", desc: "Commercial Hub", url: "/macbook-repair-sector-142-noida" },
                { name: "Sector 90", desc: "Highway Access", url: "/macbook-repair-sector-90-noida" }
              ].map((area, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow border border-gray-100 hover:border-gray-300">
                  <CardContent className="p-3 text-center">
                    <MapPin className="h-4 w-4 text-gray-500 mx-auto mb-2" />
                    <h5 className="text-sm font-medium text-gray-900 mb-1">{area.name}</h5>
                    <p className="text-xs text-gray-500 mb-2">{area.desc}</p>
                    <a href={area.url} className="text-blue-600 text-xs hover:underline">Services →</a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Additional Areas */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">🌟 Additional Service Areas</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3">
              {[
                { name: "Sector 36", url: "/macbook-repair-sector-36-greater-noida" },
                { name: "Sector 72", url: "/macbook-repair-sector-72-noida" },
                { name: "Sector 110", url: "/macbook-repair-sector-110-noida" },
                { name: "Pari Chowk", url: "/macbook-repair-pari-chowk-greater-noida" },
                { name: "Sector 1 GN", url: "/macbook-repair-sector-1-greater-noida" },
                { name: "Sector 16B", url: "/macbook-repair-sector-16b-greater-noida" },
                { name: "Sector 121", url: "/macbook-repair-sector-121-noida" },
                { name: "Sector 125", url: "/macbook-repair-sector-125-noida" }
              ].map((area, index) => (
                <Card key={index} className="hover:shadow-sm transition-shadow border border-gray-50 hover:border-gray-200">
                  <CardContent className="p-2 text-center">
                    <h6 className="text-xs font-medium text-gray-800 mb-1">{area.name}</h6>
                    <a href={area.url} className="text-blue-600 text-xs hover:underline">Service →</a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Service Promise */}
          <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Our Service Promise</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-3 w-fit mx-auto mb-3">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Same Day Service</h4>
                <p className="text-sm text-gray-600">Most repairs completed within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-3 w-fit mx-auto mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">6 Month Warranty</h4>
                <p className="text-sm text-gray-600">Comprehensive warranty on all repairs</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-3 w-fit mx-auto mb-3">
                  <Truck className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Free Pickup</h4>
                <p className="text-sm text-gray-600">Doorstep collection & delivery</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-3 w-fit mx-auto mb-3">
                  <Star className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Expert Technicians</h4>
                <p className="text-sm text-gray-600">Apple-certified professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Searches */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Popular Searches in Noida</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              What customers are looking for in your area
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 min-w-max px-4">
              {commonSearches.map((search, index) => (
                <div key={index} className="flex-shrink-0 bg-muted/50 rounded-full px-6 py-3 border border-border hover:bg-muted hover:shadow-md transition-all cursor-pointer">
                  <p className="text-sm font-medium text-foreground whitespace-nowrap">{search}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              Can't find what you're looking for? <Button variant="link" className="p-0 h-auto text-primary" onClick={() => setIsModalOpen(true)}>Book a consultation</Button>
            </p>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Popular Repair Services in Noida</h2>
            <p className="text-xl text-muted-foreground">
              Most requested repair services with transparent pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.name} className={`hover:shadow-lg transition-shadow ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    {service.name}
                    {service.popular && (
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-4">{service.price}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Free pickup from your location</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Genuine replacement parts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">90 days warranty</span>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => setIsModalOpen(true)}>
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Advantages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Noida Customers Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Quick Response</h3>
              <p className="text-muted-foreground">Same-day pickup available across all Noida sectors</p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Local Expertise</h3>
              <p className="text-muted-foreground">Familiar with Noida's corporate and residential areas</p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Trusted Service</h3>
              <p className="text-muted-foreground">Serving Noida customers for over 5 years</p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Easy Communication</h3>
              <p className="text-muted-foreground">Direct contact with local technicians</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Reviews Section with Auto-Scroll */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Noida Customers Say</h2>
            <p className="text-xl text-muted-foreground">Real feedback from satisfied customers across Noida</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md"
              onClick={() => setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm" 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md"
              onClick={() => setCurrentReviewIndex((prev) => (prev + 1) % reviews.length)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Reviews Container */}
            <div className="overflow-hidden mx-12">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="mx-auto max-w-2xl">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="flex text-yellow-400 text-lg">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>⭐</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-foreground mb-6 text-lg leading-relaxed">
                          "{review.review}"
                        </p>
                        <div className="border-t pt-4">
                          <p className="font-semibold text-foreground text-lg">{review.name}</p>
                          <p className="text-muted-foreground">{review.location}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentReviewIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentReviewIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Repair Service in Noida</h2>
              <p className="text-xl text-muted-foreground">
                Schedule free pickup and delivery for your MacBook or laptop repair
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <FormSubmitContactForm initialData={{ location: "noida" }} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6" />
              <div>
                <p className="font-semibold">Call for Noida Service</p>
                <p>9211720790</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6" />
              <div>
                <p className="font-semibold">Service Hours</p>
                <p>Mon-Sat: 9 AM - 8 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6" />
              <div>
                <p className="font-semibold">Coverage Area</p>
                <p>All Noida & Greater Noida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Booking Modal */}
      <ServiceBookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
