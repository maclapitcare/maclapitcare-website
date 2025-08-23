import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Battery, Calendar, Clock, Shield, Zap, MapPin, Phone, Star, Award, Wrench, Users, MessageCircle, Laptop, ArrowRight } from "lucide-react";
import ModelNavigation from "@/components/layout/model-navigation";

export default function MacBookProA2159BatteryReplacementDelhiNCR() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    issue: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "MacBook Pro A2159 Intel Battery Replacement Delhi NCR | Same Day Service | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MacBook Pro A2159 Intel 2019 battery replacement Delhi NCR. Original 58Wh battery replacement. Same day service, 6 month warranty. Expert Intel technicians. Call 9211720790");
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
          service: "MacBook Pro A2159 Battery Replacement",
          model: "A2159 Intel 2019",
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
              MacBook Pro A2159 Intel Specialist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              MacBook Pro A2159 
              <span className="block text-yellow-400">Battery Replacement</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-blue-200">Intel 2019 Model • Delhi NCR</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Specialized battery replacement for MacBook Pro A2159 Intel 2019 with original 58Wh lithium-ion battery. Expert Intel MacBook technicians, same-day service.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                <span className="text-sm font-medium">6 Month Warranty</span>
              </div>
              <div className="flex items-center bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-sm font-medium">Same Day Service</span>
              </div>
              <div className="flex items-center bg-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
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

      {/* Quick Service Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your A2159 Battery Service</h2>
              <p className="text-lg text-gray-600">Quick 2-minute form • Free pickup & delivery • Expert Intel technicians</p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Location</label>
                    <Select value={formData.location} onValueChange={(value) => setFormData({ ...formData, location: value })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="noida">Noida</SelectItem>
                        <SelectItem value="gurgaon">Gurgaon</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="ghaziabad">Ghaziabad</SelectItem>
                        <SelectItem value="faridabad">Faridabad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Battery Issue Description</label>
                    <Input
                      type="text"
                      placeholder="e.g., Battery drains quickly, Won't charge, Overheating"
                      value={formData.issue}
                      onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="h-5 w-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Battery className="h-5 w-5 mr-2" />
                        Book A2159 Battery Service
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* A2159 Specific Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">MacBook Pro A2159 Intel Battery Specs</h2>
              <p className="text-lg text-gray-600">Understanding your Intel 2019 MacBook Pro battery requirements</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Battery className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Original Specs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Capacity:</span>
                      <span className="font-semibold">58Wh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Chemistry:</span>
                      <span className="font-semibold">Li-ion</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cells:</span>
                      <span className="font-semibold">6-cell</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Voltage:</span>
                      <span className="font-semibold">11.4V</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Intel Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processor:</span>
                      <span className="font-semibold">Intel Core</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fast Charge:</span>
                      <span className="font-semibold">61W</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Touch Bar:</span>
                      <span className="font-semibold">Yes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Usage Time:</span>
                      <span className="font-semibold">10 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Our Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Warranty:</span>
                      <span className="font-semibold">6 Months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Time:</span>
                      <span className="font-semibold">Same Day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quality:</span>
                      <span className="font-semibold">Original</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Support:</span>
                      <span className="font-semibold">24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* MacBook Battery Replacement by Model */}
      <ModelNavigation serviceType="battery" />

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Replace Your A2159 Battery?</h2>
            <p className="text-xl mb-8 opacity-90">Expert Intel MacBook Pro technicians • Same day service • 6 month warranty</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-semibold px-8 py-3 rounded-full">
                <Phone className="h-5 w-5 mr-2" />
                Call 9211720790
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}