import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, CheckCircle, Search, ChevronLeft, ChevronRight } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function Delhi() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    document.title = "MacBook & Laptop Repair Services in Delhi - Doorstep Service | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook and laptop repair services in Delhi. Covering all areas including CP, Nehru Place, Lajpat Nagar, Karol Bagh. Free pickup and delivery.");
    }
  }, []);

  const serviceAreas = [
    "Connaught Place", "Nehru Place", "Lajpat Nagar", "Karol Bagh", "Rajouri Garden",
    "Janakpuri", "Dwarka", "Rohini", "Pitampura", "Laxmi Nagar", "Preet Vihar",
    "Mayur Vihar", "Vasant Kunj", "Saket", "Greater Kailash", "Defence Colony"
  ];

  const services = [
    { name: "MacBook Repair", price: "Starting ₹3,999", popular: true },
    { name: "Laptop Screen Replacement", price: "Starting ₹2,999" },
    { name: "Battery Replacement", price: "Starting ₹2,499", popular: true },
    { name: "Keyboard Repair", price: "Starting ₹1,999" },
    { name: "Data Recovery", price: "Starting ₹2,999" },
    { name: "Motherboard Repair", price: "Starting ₹5,999" }
  ];

  const commonSearches = [
    "MacBook repair Delhi CP", "Laptop repair Nehru Place", "MacBook screen replacement Delhi",
    "Laptop motherboard repair Karol Bagh", "MacBook battery replacement Delhi", "Data recovery Delhi",
    "Laptop repair Lajpat Nagar", "MacBook logic board repair", "SSD upgrade Delhi", "Laptop water damage Delhi",
    "MacBook trackpad repair", "Laptop charging port repair", "MacBook speaker repair Delhi", "Gaming laptop repair",
    "Dell laptop service Delhi", "Lenovo laptop repair center", "MacBook keyboard replacement Delhi", "ASUS laptop repair",
    "Laptop hinge repair Delhi", "MacBook water damage recovery", "Surface Pro repair service", "MacBook Air M1 repair",
    "Gaming laptop cooling Delhi", "Corporate laptop AMC", "ThinkPad repair service", "Laptop virus removal Delhi",
    "MacBook SSD upgrade service", "Laptop RAM expansion", "MacBook Pro Touch Bar fix", "Ultrabook repair Delhi",
    "MacBook camera not working", "Laptop WiFi repair service", "MacBook charging port fix", "Gaming laptop GPU repair"
  ];

  const reviews = [
    {
      name: "Arjun Mehta",
      location: "Connaught Place, Delhi",
      review: "Excellent MacBook repair service at CP! They diagnosed the logic board issue quickly and fixed it within 3 days. Professional service and fair pricing."
    },
    {
      name: "Kavita Sharma", 
      location: "Nehru Place, Delhi",
      review: "Best laptop repair shop in Nehru Place! Fixed my Dell laptop's motherboard perfectly. Free pickup from office made it very convenient."
    },
    {
      name: "Vikash Singh",
      location: "Lajpat Nagar, Delhi", 
      review: "MacBook screen replacement done professionally at my doorstep. Quick service and excellent quality parts. Highly recommend for Delhi customers!"
    },
    {
      name: "Pooja Gupta",
      location: "Karol Bagh, Delhi",
      review: "Outstanding service for laptop battery replacement. They came to my home, fixed it in 2 hours, and provided 6 months warranty. Great experience!"
    },
    {
      name: "Rohit Kumar",
      location: "Rajouri Garden, Delhi",
      review: "Professional MacBook water damage recovery service. They saved all my data and laptop works perfectly now. Transparent pricing and excellent communication."
    },
    {
      name: "Anita Jain",
      location: "Defence Colony, Delhi",
      review: "Reliable laptop keyboard repair service in Delhi. They replaced the entire keyboard with genuine parts. Fast doorstep service and reasonable rates."
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
              MacBook & Laptop Repair Services in Delhi
            </h1>
            <p className="text-xl mb-8">
              Professional doorstep repair services across all areas of Delhi. Expert technicians, 
              genuine parts, and same-day service for MacBook and laptop repairs.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Free Pickup & Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Same Day Service</span>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Service Areas in Delhi</h2>
            <p className="text-xl text-muted-foreground">
              We provide doorstep repair services across all major areas in Delhi
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

      {/* Services & Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Repair Services & Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Transparent pricing for all repair services in Delhi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-4">{service.price}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Free diagnosis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Genuine parts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm">Warranty included</span>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => setIsModalOpen(true)}>Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in Delhi */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us in Delhi?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Local Presence</h3>
              <p className="text-muted-foreground">Established presence in Delhi with local technicians</p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Quick Service</h3>
              <p className="text-muted-foreground">Same-day service available for most repairs</p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Customer support available round the clock</p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">100% quality guarantee with warranty</p>
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
              <h2 className="text-3xl font-bold text-foreground">Popular Searches in Delhi</h2>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">What Delhi Customers Say</h2>
            <p className="text-xl text-muted-foreground">Real feedback from satisfied customers across Delhi</p>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Repair Service in Delhi</h2>
              <p className="text-xl text-muted-foreground">
                Fill the form below and our team will contact you for free pickup
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <ContactForm initialData={{ location: "delhi" }} />
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
                <p className="font-semibold">Call Now</p>
                <p>9211720790</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6" />
              <div>
                <p className="font-semibold">Working Hours</p>
                <p>Mon-Sat: 9 AM - 8 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6" />
              <div>
                <p className="font-semibold">Service Area</p>
                <p>All Delhi Areas</p>
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
