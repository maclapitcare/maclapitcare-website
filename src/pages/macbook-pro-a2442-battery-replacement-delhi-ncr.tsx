import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Battery, Calendar, Clock, Shield, Zap, MapPin, Phone, Star, Award, Wrench, Users, MessageCircle, Laptop, ArrowRight } from "lucide-react";
import ModelNavigation from "@/components/layout/model-navigation";

export default function MacBookProA2442BatteryReplacementDelhiNCR() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    issue: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "MacBook Pro A2442 M2 Pro Battery Replacement Delhi NCR | Same Day Service | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MacBook Pro A2442 M2 Pro 2023 battery replacement Delhi NCR. Original 70Wh battery replacement. Same day service, 6 month warranty. Expert M2 Pro technicians. Call 9211720790");
    }
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/b2db4b2aaac184fde6f547d166fd887f", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          service: "MacBook Pro A2442 Battery Replacement",
          model: "A2442 M2 Pro 2023",
          source: "Model Specific Battery Page"
        })
      });

      if (response.ok) {
        alert("Service request submitted successfully! We'll contact you within 2 hours.");
        setFormData({ name: "", phone: "", location: "", issue: "" });
      }
    } catch (error) {
      alert("Something went wrong. Please call us at 9211720790");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Battery className="h-4 w-4 mr-2" />
              MacBook Pro A2442 M2 Pro Specialist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              MacBook Pro A2442 
              <span className="block text-yellow-400">Battery Replacement</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-blue-200">M2 Pro 2023 Model • Delhi NCR</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Specialized battery replacement for MacBook Pro A2442 M2 Pro 2023 with original 70Wh lithium-ion battery. Expert M2 Pro chip technicians, same-day service.
            </p>
            
            <div className="grid grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="bg-green-500 rounded-lg p-3 mb-2 mx-auto w-fit">
                  <Clock className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold">Same Day</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 rounded-lg p-3 mb-2 mx-auto w-fit">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold">6 Months</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 rounded-lg p-3 mb-2 mx-auto w-fit">
                  <Zap className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold">Fast Service</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 rounded-lg p-3 mb-2 mx-auto w-fit">
                  <Star className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold">Original</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 border-0 font-semibold shadow-lg"
                onClick={() => window.open('tel:9211720790', '_self')}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call: 9211720790
              </Button>
              <Button 
                size="lg" 
                className="bg-green-600 text-white hover:bg-green-700 border-0 font-semibold shadow-lg"
                onClick={() => window.open('https://wa.me/919211720790', '_blank')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Model Specifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Pro A2442 M2 Pro 2023 Specifications</h2>
              <p className="text-xl text-muted-foreground">Understanding your MacBook Pro model for precise battery replacement</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Laptop className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                  <CardTitle className="text-lg">Model Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary">MacBook Pro A2442</p>
                  <p className="text-sm text-muted-foreground">M2 Pro Chip • 2023</p>
                  <p className="text-sm text-muted-foreground">14-inch Display</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Battery className="h-8 w-8 mx-auto text-green-600 mb-2" />
                  <CardTitle className="text-lg">Battery Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary">70Wh Li-ion</p>
                  <p className="text-sm text-muted-foreground">Up to 18 hours</p>
                  <p className="text-sm text-muted-foreground">Built-in battery</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Zap className="h-8 w-8 mx-auto text-yellow-600 mb-2" />
                  <CardTitle className="text-lg">Power Specs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary">67W USB-C</p>
                  <p className="text-sm text-muted-foreground">MagSafe 3</p>
                  <p className="text-sm text-muted-foreground">Fast charging</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Award className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                  <CardTitle className="text-lg">Our Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary">Professional</p>
                  <p className="text-sm text-muted-foreground">6 months warranty</p>
                  <p className="text-sm text-muted-foreground">Same day service</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                MacBook Pro A2442 M2 Pro Battery Replacement Service Features
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional battery replacement service with genuine parts and expert M2 Pro technicians
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <Card className="hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <Battery className="h-12 w-12 mx-auto text-green-600 mb-4" />
                  <CardTitle className="text-xl">Original Battery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-center">Genuine 70Wh lithium-ion</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-center">Up to 18 hours battery life</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-center">1000+ charge cycles</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                  <CardTitle className="text-xl">Fast Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-center">Same-day service available</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-center">2-3 hours express option</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-center">Free pickup & delivery</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                  <CardTitle className="text-xl">Warranty</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-center">6 months replacement warranty</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-center">Expert M2 Pro technicians</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-center">Quality assurance testing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Form */}
      <section id="service-request-form" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Book Your MacBook Pro A2442 Battery Service</h2>
              <p className="text-xl text-muted-foreground">Get your M2 Pro MacBook Pro battery replaced by certified technicians</p>
            </div>
            
            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <Input
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Location</label>
                    <Select onValueChange={(value) => setFormData({...formData, location: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="noida">Noida</SelectItem>
                        <SelectItem value="gurgaon">Gurgaon</SelectItem>
                        <SelectItem value="ghaziabad">Ghaziabad</SelectItem>
                        <SelectItem value="faridabad">Faridabad</SelectItem>
                        <SelectItem value="other">Other NCR Location</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Battery Issues (Optional)</label>
                    <Input
                      type="text"
                      placeholder="e.g., drains quickly, not charging, swollen battery"
                      value={formData.issue}
                      onChange={(e) => setFormData({...formData, issue: e.target.value})}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5 mr-2" />
                        Book MacBook Pro A2442 Battery Service
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Google Searches Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular Google Searches</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Battery Issues */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Battery Problems</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Pro A2442 battery replacement cost</li>
                  <li>• A2442 M2 Pro battery draining fast</li>
                  <li>• MacBook Pro 14 inch M2 Pro battery swollen</li>
                  <li>• A2442 battery not charging properly</li>
                  <li>• MacBook Pro 2023 battery replacement</li>
                  <li>• A2442 70Wh battery replacement</li>
                  <li>• MacBook Pro M2 Pro battery repair</li>
                </ul>
              </div>

              {/* Service Keywords */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Related</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Pro A2442 repair Delhi NCR</li>
                  <li>• A2442 M2 Pro service center near me</li>
                  <li>• MacBook Pro M2 Pro battery repair shop</li>
                  <li>• A2442 battery replacement Noida</li>
                  <li>• MacBook Pro 2023 repair service</li>
                  <li>• A2442 battery repair Gurgaon</li>
                  <li>• MacBook M2 Pro repair shop Ghaziabad</li>
                </ul>
              </div>

              {/* Technical Issues */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Issues</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A2442 battery cycle count high</li>
                  <li>• MacBook Pro M2 Pro battery health low</li>
                  <li>• A2442 MagSafe 3 charging issues</li>
                  <li>• MacBook Pro M2 Pro overheating battery</li>
                  <li>• A2442 67W charging problems</li>
                  <li>• MacBook Pro battery service warning</li>
                  <li>• A2442 M2 Pro power management issues</li>
                </ul>
              </div>

              {/* Brand & Model */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Specific</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Apple MacBook Pro A2442 repair</li>
                  <li>• MacBook Pro M2 Pro 2023 service</li>
                  <li>• A2442 battery original replacement</li>
                  <li>• MacBook Pro Apple Silicon M2 Pro</li>
                  <li>• A2442 14-inch battery calibration</li>
                  <li>• MacBook Pro M2 Pro 14-inch battery</li>
                  <li>• A2442 lithium-ion battery genuine</li>
                </ul>
              </div>

              {/* Location Based */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Location Based</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A2442 battery replacement Delhi</li>
                  <li>• MacBook Pro M2 Pro repair Noida</li>
                  <li>• A2442 service center Gurgaon</li>
                  <li>• MacBook battery replacement Faridabad</li>
                  <li>• A2442 M2 Pro repair Ghaziabad</li>
                  <li>• MacBook Pro battery Delhi NCR</li>
                  <li>• A2442 doorstep battery service</li>
                </ul>
              </div>

              {/* Warranty & Quality */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quality & Warranty</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A2442 battery 6 months warranty</li>
                  <li>• MacBook Pro M2 Pro genuine battery</li>
                  <li>• A2442 original quality replacement</li>
                  <li>• MacBook Pro battery same day service</li>
                  <li>• A2442 M2 Pro expert technician</li>
                  <li>• MacBook battery professional repair</li>
                  <li>• A2442 certified battery replacement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Replace Your MacBook Pro A2442 M2 Pro Battery?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get your M2 Pro MacBook Pro battery replaced by Delhi NCR's most trusted M2 Pro specialists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('tel:9211720790', '_self')}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call: 9211720790
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://wa.me/919211720790', '_blank')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Model Navigation Component */}
      <ModelNavigation serviceType="battery" />
    </div>
  );
}