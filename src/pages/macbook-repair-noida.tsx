import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Apple, 
  Phone, 
  ArrowRight,
  CheckCircle,
  MapPin,
  Clock,
  Shield,
  Star
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import FormSubmitContactForm from "@/components/forms/formsubmit-contact-form";
import ServiceBookingModal from "@/components/forms/service-booking-modal";

export default function MacBookRepairNoida() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  useEffect(() => {
    document.title = "MacBook Repair Noida Sector 121 | MacBook Service Centre Shop 75 | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Best MacBook repair service centre in Noida Sector 121 Shop 75. MacBook Air, Pro screen ₹4999+, logic board ₹6999+, battery ₹3999+. Free doorstep service. Call +91 92117 20790");
    }
  }, []);

  const macBookModels = [
    { model: "MacBook Air M1/M2", services: ["Screen", "Battery", "Keyboard", "Logic Board"] },
    { model: "MacBook Pro 13\" M1/M2", services: ["Display", "Touch Bar", "SSD", "Speakers"] },
    { model: "MacBook Pro 16\" M1/M2", services: ["Retina Display", "Thermal", "Audio", "Ports"] },
    { model: "MacBook Air 2018-2022", services: ["Butterfly Keys", "Screen", "Battery", "I/O"] },
    { model: "MacBook Pro 2016-2019", services: ["Touch Bar", "Flexgate", "Keyboard", "GPU"] },
    { model: "MacBook Pro 2012-2015", services: ["Retina Screen", "SSD", "Battery", "Magsafe"] }
  ];

  const repairServices = [
    {
      service: "MacBook Screen Replacement",
      description: "Original Retina displays for all MacBook models",
      price: "₹4,999+",
      warranty: "Up to 1 Year"
    },
    {
      service: "Logic Board Repair",
      description: "Chip-level repair for liquid damage and power issues", 
      price: "₹6,999+",
      warranty: "1-3 Months"
    },
    {
      service: "Battery Replacement",
      description: "Genuine battery with optimal performance",
      price: "₹3,999+", 
      warranty: "6 Months"
    },
    {
      service: "Keyboard Repair",
      description: "Butterfly and Magic keyboard replacement",
      price: "₹2,999+",
      warranty: "3 Months"
    }
  ];

  const whyChooseUs = [
    "20+ Years MacBook Repair Experience",
    "Genuine Parts with Warranty",
    "Same Day Repair Service",
    "Free Doorstep Pickup & Delivery",
    "Certified Apple Technicians",
    "No Fix No Fee Policy"
  ];

  const serviceAreas = [
    "Sector 121", "Sector 120", "Sector 122", "Sector 123", "Sector 137",
    "Sector 135", "Sector 62", "Sector 63", "Sector 18", "Greater Noida"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-500 text-white mb-4 px-4 py-1">
              MacBook Repair Experts Since 2004
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MacBook Repair Noida - Professional Service Centre
            </h1>
            <p className="text-xl mb-8">
              Expert MacBook repair services in Noida Sector 121. Professional repair for MacBook Air, 
              MacBook Pro with genuine parts and up to 1-year warranty. Free doorstep service across Noida.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => typeof window !== "undefined" && (window.location.href = `tel:${CONTACT_INFO.phone1}`)}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {CONTACT_INFO.phone1}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-blue-900 hover:bg-gray-100 border-white"
                onClick={handleBookService}
              >
                Book Free Diagnosis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">MacBooks Repaired</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24 Hrs</div>
              <div className="text-muted-foreground">Average Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* MacBook Models */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Models We Service</h2>
            <p className="text-xl text-muted-foreground">
              Professional repair for all MacBook Air and MacBook Pro models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {macBookModels.map((macbook, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Apple className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-lg font-bold text-foreground">{macbook.model}</h3>
                  </div>
                  <div className="space-y-2">
                    {macbook.services.map((service, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-muted-foreground text-sm">{service} Repair</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Repair Services & Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Transparent pricing with genuine parts and comprehensive warranty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repairServices.map((repair, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">{repair.service}</h3>
                  <p className="text-muted-foreground mb-4">{repair.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-primary">{repair.price}</div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-muted-foreground">{repair.warranty}</span>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Maclap IT Care?</h2>
            <p className="text-xl text-muted-foreground">
              Noida's most trusted MacBook repair service centre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Star className="h-6 w-6 text-yellow-500" />
                    <span className="text-foreground font-medium">{reason}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Repair Service Areas in Noida</h2>
            <p className="text-xl text-muted-foreground">
              Free doorstep pickup and delivery across all sectors in Noida
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                  <span className="text-foreground text-sm font-medium">{area}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Visit Our MacBook Service Centre
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">{CONTACT_INFO.phone1}</p>
                    <p className="text-muted-foreground">{CONTACT_INFO.phone2}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Working Hours</h3>
                    <p className="text-muted-foreground">{CONTACT_INFO.workingHours}</p>
                    <p className="text-muted-foreground">Sunday: Emergency calls only</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Easy 3-Step Process</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                    <span className="text-muted-foreground">Call us or book online</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                    <span className="text-muted-foreground">Free pickup from your location</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                    <span className="text-muted-foreground">Repair and doorstep delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Book MacBook Repair Service</h3>
                  <FormSubmitContactForm initialData={{ location: "Noida", service: "MacBook Repair" }} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Noida Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Real reviews from satisfied MacBook repair customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Excellent MacBook screen replacement service. Quick turnaround and genuine parts used."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face"
                    alt="Rajesh Kumar"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <p className="font-semibold text-foreground">Rajesh Kumar - Sector 121</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Logic board repair saved my MacBook. Professional service with 6-month warranty."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face"
                    alt="Priya Sharma"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <p className="font-semibold text-foreground">Priya Sharma - Greater Noida</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Best MacBook repair service in Noida. Free pickup and delivery was very convenient."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop&crop=face"
                    alt="Amit Singh"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <p className="font-semibold text-foreground">Amit Singh - Sector 62</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">MacBook Not Working? We Can Fix It!</h2>
          <p className="text-xl mb-8">
            Professional MacBook repair in Noida with same-day service. Call now for free diagnosis.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`tel:${CONTACT_INFO.phone1}`}
              className="flex items-center space-x-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Phone className="h-6 w-6" />
              <span>{CONTACT_INFO.phone1}</span>
            </a>
            <a
              href={`https://wa.me/92${CONTACT_INFO.phone1.replace(/[^0-9]/g, '').slice(2)}`}
              className="flex items-center space-x-3 bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Service Booking Modal */}
      <ServiceBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}