import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, CheckCircle, Search, ChevronLeft, ChevronRight } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function Gurgaon() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    document.title = "MacBook & Laptop Repair Services in Gurgaon - Expert Technicians | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook and laptop repair services in Gurgaon and surrounding areas. Covering DLF, Cyber City, Golf Course Road. Expert technicians, genuine parts, free doorstep service.");
    }
  }, []);

  const reviews = [
    {
      name: "Rajesh Agarwal",
      location: "Cyber City, Gurgaon",
      review: "Excellent MacBook repair service for corporate professionals! Fixed my MacBook Pro's logic board issue during lunch break. Perfect service for busy schedules."
    },
    {
      name: "Priya Malhotra", 
      location: "DLF Phase 1, Gurgaon",
      review: "Best laptop repair service in Gurgaon! They repaired my HP laptop's motherboard at home. Professional technicians and transparent pricing throughout."
    },
    {
      name: "Amit Verma",
      location: "Sector 14, Gurgaon", 
      review: "Outstanding MacBook battery replacement service. Same-day doorstep service with genuine Apple parts. Great experience for Gurgaon customers!"
    },
    {
      name: "Neha Kapoor",
      location: "MG Road, Gurgaon",
      review: "Professional laptop screen repair service. They replaced my Dell laptop screen perfectly at office. Quick turnaround and excellent quality work."
    },
    {
      name: "Vikrant Sharma",
      location: "DLF Phase 2, Gurgaon",
      review: "Reliable MacBook water damage recovery service. Saved my important presentations and restored laptop completely. Highly recommend their expertise!"
    },
    {
      name: "Sunita Jain",
      location: "Sohna Road, Gurgaon",
      review: "Amazing laptop hinge repair service! They fixed my HP laptop's broken hinge perfectly at doorstep. Professional service with warranty coverage."
    }
  ];

  // Auto-scroll reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const serviceAreas = [
    "DLF Phase 1", "DLF Phase 2", "DLF Phase 3", "DLF Phase 4", "DLF Phase 5",
    "Cyber City", "Golf Course Road", "MG Road", "Sohna Road", "Old Gurgaon",
    "New Gurgaon", "Udyog Vihar", "Sector 14", "Sector 29", "Huda City Centre", "Manesar"
  ];

  const services = [
    { name: "MacBook Pro Repair", price: "Starting ₹3,499", popular: true },
    { name: "Laptop Screen Replacement", price: "Starting ₹2,499" },
    { name: "MacBook Air Battery", price: "Starting ₹3,999", popular: true },
    { name: "Gaming Laptop Repair", price: "Starting ₹3,499" },
    { name: "Corporate Laptop Service", price: "Starting ₹2,999" },
    { name: "SSD Data Recovery", price: "Starting ₹3,999" }
  ];

  const corporateClients = [
    "TCS", "Infosys", "Wipro", "HCL", "IBM", "Microsoft", "Google", "Amazon"
  ];

  const commonSearches = [
    "MacBook repair Gurgaon Cyber City", "Laptop repair DLF Phase 1", "MacBook screen replacement Gurgaon",
    "Laptop motherboard repair MG Road", "MacBook battery replacement Gurgaon", "Data recovery Gurgaon",
    "Laptop repair Sector 14", "MacBook logic board repair", "SSD upgrade Gurgaon", "Gaming laptop repair",
    "MacBook trackpad repair", "Laptop charging port repair", "MacBook speaker repair Gurgaon", "HP laptop repair",
    "Dell laptop repair Gurgaon", "Lenovo laptop repair service", "MacBook keyboard replacement Gurgaon",
    "Laptop hinge repair DLF", "MacBook water damage Gurgaon", "Laptop overheating fix", "ASUS laptop repair",
    "MacBook Pro 16 inch repair", "Laptop fan replacement", "MacBook SSD upgrade Gurgaon", "Surface Pro repair",
    "MacBook Air M1 repair", "Gaming laptop cooling service", "Corporate laptop AMC Gurgaon", "Laptop virus removal",
    "MacBook logic board replacement", "Laptop RAM upgrade service", "ThinkPad repair Gurgaon", "MacBook TouchBar repair"
  ];



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
              MacBook & Laptop Repair Services in Gurgaon
            </h1>
            <p className="text-xl mb-8">
              Premier MacBook and laptop repair services in Gurgaon's corporate hub. 
              Serving DLF, Cyber City, and all major areas with expert technicians and genuine parts.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Corporate Pickup Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Express Repair</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>1 Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">We Cover All Areas in Gurgaon</h2>
            <p className="text-xl text-muted-foreground">
              Professional repair services across Gurgaon's business districts and residential areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {serviceAreas.map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-foreground text-sm">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Corporate Laptop Repair Services</h2>
            <p className="text-xl text-muted-foreground">
              Specialized services for Gurgaon's corporate sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Bulk Repair Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Special pricing for corporate clients with multiple devices
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Volume discounts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Priority service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Dedicated account manager</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">On-Site Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Technicians visit your office for immediate repair services
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">No downtime</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Same-day service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Flexible scheduling</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">AMC Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Annual maintenance contracts for corporate laptop fleets
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Preventive maintenance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Cost-effective</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Extended warranty</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Trusted by Leading Companies</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {corporateClients.map((client) => (
                <div key={client} className="bg-muted/50 px-4 py-2 rounded-lg">
                  <span className="font-semibold text-foreground">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Popular Services in Gurgaon</h2>
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
                      <span className="text-sm">Free diagnosis & quote</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Genuine replacement parts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Express service available</span>
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

      {/* Why Choose Us in Gurgaon */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Gurgaon Professionals Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Strategic Location</h3>
              <p className="text-muted-foreground">Close to major corporate hubs like Cyber City and DLF</p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Express Service</h3>
              <p className="text-muted-foreground">Understanding the fast-paced corporate environment</p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Professional Service</h3>
              <p className="text-muted-foreground">Tailored for corporate and professional needs</p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Round-the-clock support for urgent repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Gurgaon Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-foreground mb-4">
                  "Excellent corporate service! They picked up our office laptops from Cyber City and delivered them back within 24 hours. Very professional and reliable."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Amit Kumar</p>
                  <p className="text-muted-foreground text-sm">IT Manager, DLF Cyber City</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-foreground mb-4">
                  "Great MacBook Pro repair service. They understand the urgency of corporate requirements and delivered my laptop on the same day. Highly recommended!"
                </p>
                <div>
                  <p className="font-semibold text-foreground">Sneha Patel</p>
                  <p className="text-muted-foreground text-sm">Software Engineer, Golf Course Road</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Searches */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Popular Searches in Gurgaon</h2>
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

      {/* Enhanced Reviews Section with Auto-Scroll */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Gurgaon Customers Say</h2>
            <p className="text-xl text-muted-foreground">Real feedback from satisfied customers across Gurgaon</p>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Repair Service in Gurgaon</h2>
              <p className="text-xl text-muted-foreground">
                Schedule pickup and delivery for your MacBook or laptop repair
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <ContactForm initialData={{ location: "gurgaon" }} />
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
                <p className="font-semibold">Call for Gurgaon Service</p>
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
                <p>All Gurgaon Areas</p>
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
