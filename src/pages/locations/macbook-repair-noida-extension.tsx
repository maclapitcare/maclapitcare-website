import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, CheckCircle, Search, Star, Shield, Truck, Wrench } from "lucide-react";
import FormSubmitContactForm from "@/components/forms/formsubmit-contact-form";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function MacBookRepairNoidaExtension() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "MacBook Repair Noida Extension | Extended Area | Expansion Zone | Suburban Region | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MacBook repair Noida Extension extended area expansion zone suburban region. Screen replacement ₹4999+, battery ₹3999+, motherboard ₹1499+. Free doorstep pickup. Call +91 92117 20790");
    }
  }, []);

  const services = [
    { name: "MacBook Screen Replacement", price: "Starting ₹4,999", popular: true },
    { name: "MacBook Battery Replacement", price: "Starting ₹3,999", popular: true },
    { name: "MacBook Motherboard Repair", price: "Starting ₹1,499" },
    { name: "MacBook Keyboard Replacement", price: "Starting ₹2,999" },
    { name: "MacBook SSD Upgrade", price: "Starting ₹1,599" },
    { name: "MacBook Data Recovery", price: "Starting ₹2,999" }
  ];

  const commonSearches = [
    "MacBook repair Noida Extension", "Laptop repair extended area", "MacBook screen replacement expansion zone",
    "MacBook battery replacement suburban region", "MacBook repair extension", "Laptop repair suburban",
    "MacBook Pro repair Noida Extension", "MacBook Air repair extended", "MacBook logic board repair expansion",
    "MacBook keyboard repair suburban", "MacBook trackpad repair Noida Extension", "MacBook speaker repair extended",
    "MacBook charging port repair expansion", "MacBook water damage repair Noida Extension", "MacBook hinge repair suburban",
    "MacBook overheating solution extended", "MacBook TouchBar replacement Noida Extension", "MacBook camera repair expansion",
    "MacBook SSD upgrade suburban region", "MacBook RAM upgrade Noida Extension", "MacBook display repair extended",
    "MacBook thermal paste expansion zone", "MacBook fan replacement Noida Extension", "MacBook power button repair suburban"
  ];

  const nearbyLandmarks = [
    "Extended Areas", "Expansion Zones", "Suburban Regions", "Peripheral Areas",
    "Extended Communities", "Outer Developments", "Suburban Colonies", "Extension Sectors"
  ];

  const reviews = [
    {
      name: "Rajesh Yadav",
      location: "Extended Area, Noida Extension",
      review: "Excellent MacBook repair service in Noida Extension extended area. They provide reliable service to expansion zones and suburban regions. Great coverage for extension areas!"
    },
    {
      name: "Sunita Gupta", 
      location: "Expansion Zone, Noida Extension",
      review: "Outstanding MacBook battery replacement service in suburban region. Perfect for extended area residents who need trusted service. Quick expansion zone coverage!"
    },
    {
      name: "Manoj Kumar",
      location: "Suburban Region, Noida Extension",
      review: "MacBook motherboard repair done expertly in Noida Extension. Great service for extended areas and expansion zones. They understand suburban region needs perfectly!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-16 w-16 mr-4 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MacBook Repair Noida Extension | Extended Area | Expansion Zone
            </h1>
            <p className="text-xl mb-8">
              Expert MacBook repair services in Noida Extension extended area with expansion zones and suburban regions. 
              Free doorstep pickup & delivery, certified technicians, genuine parts with warranty.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Extended Area</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Expansion Zone</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Suburban Region</span>
              </div>
            </div>
            <div className="mt-8">
              <Button 
                onClick={() => setIsModalOpen(true)} 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg mr-4 font-semibold shadow-lg"
              >
                Book Repair Now
              </Button>
              <Button className="bg-white hover:bg-green-600 text-green-600 hover:text-white border-2 border-green-600 px-8 py-4 text-lg font-semibold shadow-lg transition-all">
                <Phone className="h-5 w-5 mr-2" />
                Call +91 92117 20790
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Repair Services for Extension Areas</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive repair services for expansion zones and suburban regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Wrench className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="font-bold text-lg">{service.name}</h3>
                      {service.popular && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Popular</span>
                      )}
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-4">
                    <li>✓ Free pickup from location</li>
                    <li>✓ Extension area service</li>
                    <li>✓ Expert technicians</li>
                    <li>✓ Same day service</li>
                  </ul>
                  <Button 
                    onClick={() => setIsModalOpen(true)} 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                  >
                    Book This Service
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose MacLap IT Care in Noida Extension?</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by residents in extended areas and suburban regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-fit mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Same Day Service</h3>
              <p className="text-gray-600">Most repairs completed within 24 hours for extension areas</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">6 Month Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty on all MacBook repairs</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-fit mx-auto mb-4">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Extended Pickup</h3>
              <p className="text-gray-600">Convenient pickup from extension and suburban areas</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-fit mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Suburban Focus</h3>
              <p className="text-gray-600">Service designed for extension and expansion needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">We Serve Near These Locations in Noida Extension</h2>
            <p className="text-xl text-muted-foreground">
              Convenient pickup and delivery across extended areas and expansion zones
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="font-medium text-foreground text-sm">{landmark}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Searches */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Popular MacBook Repair Searches in Noida Extension</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              What residents search for in extended areas and suburban regions
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex flex-wrap justify-center gap-3">
              {commonSearches.map((search, index) => (
                <div key={index} className="bg-white rounded-full px-4 py-2 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer">
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

      {/* Customer Reviews */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Customer Reviews - Extended Area Noida Extension</h2>
            <p className="text-xl text-muted-foreground">
              What residents say about our MacBook repair service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.review}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact MacBook Repair Service in Extended Area</h2>
              <p className="text-xl text-muted-foreground">
                Get your MacBook repaired by experts in expansion zones and suburban regions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">Call Now</p>
                      <p className="text-blue-600">+91 92117 20790</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p>Noida Extension, Extended Area, Expansion Zone, Suburban Region</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">Service Hours</p>
                      <p>Mon-Sun: 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button 
                    onClick={() => setIsModalOpen(true)} 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                  >
                    Book Free Pickup Now
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                <FormSubmitContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceBookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}