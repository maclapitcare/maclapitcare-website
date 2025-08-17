import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, CheckCircle, Search, ChevronLeft, ChevronRight } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function Ghaziabad() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    document.title = "MacBook & Laptop Repair Services in Ghaziabad - Expert Technicians | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook and laptop repair services in Ghaziabad and surrounding areas. Screen replacement ₹2499+, motherboard ₹1499+, performance upgrade ₹1499+. Expert technicians, genuine parts, free doorstep service.");
    }
  }, []);

  const serviceAreas = [
    "Vaishali", "Indirapuram", "Kaushambi", "Vasundhara", "Raj Nagar",
    "Crossings Republik", "Loni", "Mohan Nagar", "Sahibabad", "Govindpuram",
    "Shakti Khand", "Kavi Nagar", "Shipra Suncity", "Hindon Vihar", "Shastri Nagar", "Dilshad Garden"
  ];

  const services = [
    { name: "MacBook Pro Repair", price: "Starting ₹3,499", popular: true },
    { name: "Laptop Screen Replacement", price: "Starting ₹2,499" },
    { name: "MacBook Air Battery", price: "Starting ₹3,999", popular: true },
    { name: "Motherboard Repair", price: "Starting ₹1,499" },
    { name: "Performance Upgrade", price: "Starting ₹1,499" },
    { name: "SSD Data Recovery", price: "Starting ₹3,999" }
  ];

  const whyChooseUs = [
    "Free doorstep pickup and delivery across Ghaziabad",
    "Certified technicians with 10+ years experience",
    "Genuine parts with manufacturer warranty",
    "Same-day service for common repairs",
    "Transparent pricing with no hidden charges",
    "90-day warranty on all repairs"
  ];

  const commonSearches = [
    "MacBook repair Ghaziabad Vaishali", "Laptop repair Indirapuram", "MacBook screen replacement Ghaziabad",
    "Laptop motherboard repair Kaushambi", "MacBook battery replacement Ghaziabad", "Data recovery Ghaziabad",
    "Laptop repair Raj Nagar", "MacBook logic board repair", "SSD upgrade Ghaziabad", "Gaming laptop repair",
    "MacBook trackpad repair", "Laptop charging port repair", "MacBook speaker repair", "HP laptop repair Ghaziabad",
    "Dell laptop service Ghaziabad", "Lenovo laptop repair center", "MacBook keyboard replacement Ghaziabad", "ASUS laptop repair",
    "Laptop hinge repair Ghaziabad", "MacBook water damage recovery", "Surface Pro repair service", "MacBook Air M1 repair",
    "Gaming laptop cooling Ghaziabad", "Corporate laptop service", "ThinkPad repair Ghaziabad", "Laptop virus removal",
    "MacBook SSD data recovery", "Laptop RAM upgrade service", "MacBook Pro Touch Bar repair", "Ultrabook repair Ghaziabad",
    "MacBook camera repair service", "Laptop WiFi connectivity fix", "MacBook charging port replacement", "Gaming laptop GPU issues"
  ];

  const reviews = [
    {
      name: "Sanjay Gupta",
      location: "Vaishali, Ghaziabad",
      review: "Excellent MacBook repair service in Vaishali! Fixed my MacBook Air's logic board issue perfectly. Professional doorstep service with genuine parts."
    },
    {
      name: "Meera Singh", 
      location: "Indirapuram, Ghaziabad",
      review: "Best laptop repair service in Indirapuram! They repaired my HP laptop's screen at home. Quick service and transparent pricing. Highly recommended!"
    },
    {
      name: "Ravi Sharma",
      location: "Kaushambi, Ghaziabad", 
      review: "Outstanding MacBook battery replacement service. Same-day service with Apple certified parts. Great experience for Ghaziabad customers!"
    },
    {
      name: "Anjali Verma",
      location: "Raj Nagar, Ghaziabad",
      review: "Professional laptop motherboard repair service. Fixed my Dell laptop perfectly at doorstep. Excellent technical knowledge and customer service."
    },
    {
      name: "Deepak Kumar",
      location: "Crossings Republik, Ghaziabad",
      review: "Reliable MacBook water damage recovery service. They saved all my important data and laptop works like new. Transparent pricing and honest service."
    },
    {
      name: "Shweta Jain",
      location: "Vasundhara, Ghaziabad",
      review: "Excellent gaming laptop repair service. Fixed overheating and performance issues with quality components. Professional and affordable service in Ghaziabad."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MacBook & Laptop Repair Services in Ghaziabad
            </h1>
            <p className="text-xl mb-8">
              Professional repair services for MacBook, Dell, HP, Lenovo laptops in Ghaziabad. 
              Covering Vaishali, Indirapuram, Kaushambi, and all major areas with doorstep convenience.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Free Doorstep Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Same Day Repair</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>90 Days Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Service Areas in Ghaziabad</h2>
            <p className="text-muted-foreground">We provide doorstep laptop repair services across all major areas in Ghaziabad</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area) => (
              <span key={area} className="bg-background px-4 py-2 rounded-lg border text-sm font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Popular Laptop Repair Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive repair solutions with transparent pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.name} className={`hover:shadow-lg transition-shadow ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    {service.name}
                    {service.popular && (
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
                        Popular
                      </span>
                    )}
                  </CardTitle>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" onClick={() => setIsModalOpen(true)}>
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Maclap IT Care</h2>
              <p className="text-xl text-muted-foreground">
                Trusted by thousands of customers across Ghaziabad
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {whyChooseUs.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
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
              <h2 className="text-3xl font-bold text-foreground">Popular Searches in Ghaziabad</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">What Ghaziabad Customers Say</h2>
            <p className="text-xl text-muted-foreground">Real feedback from satisfied customers across Ghaziabad</p>
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

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Get Your Laptop Repaired Today</h2>
              <p className="text-xl text-muted-foreground">
                Quick response time across all Ghaziabad locations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Service Location</h3>
                    <p className="text-muted-foreground">
                      Shop 75, Sector 121, Noida - 201301<br />
                      (Serving all Ghaziabad areas with doorstep service)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Contact Numbers</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+919211720790" className="hover:text-primary">9211720790</a><br />
                      <a href="tel:+918750160550" className="hover:text-primary">8750160550</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Service Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: 11:00 AM - 5:00 PM<br />
                      Emergency service available 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Schedule Repair Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
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