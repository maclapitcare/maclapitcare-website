import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Battery, Calendar, Clock, Shield, Zap, MapPin, Phone, Star, Award, Wrench, Users, MessageCircle } from "lucide-react";
import ModelNavigation from "@/components/layout/model-navigation";

export default function MacBookBatteryReplacementDelhiNCR() {
  const [heroFormData, setHeroFormData] = useState({
    name: "",
    phone: "",
    location: ""
  });
  const [heroFormSubmitting, setHeroFormSubmitting] = useState(false);

  useEffect(() => {
    document.title = "MacBook Battery Replacement Delhi NCR | Same Day Service ₹2999+ | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MacBook battery replacement Delhi NCR. Original battery ₹2999+. Same day service, 6 month warranty. Expert technicians for all MacBook models. Call 9211720790");
    }
  }, []);

  // MacBook Air Battery Models Data
  const macBookAirBatteryModels = [
    {
      category: "MacBook Air M3",
      models: [
        {
          name: "MacBook Air 13\" M3 (2024)",
          model: "A3113",
          price: "₹18,999",
          originalPrice: "₹24,999",
          features: [
            "54.5-watt-hour battery",
            "Up to 18 hours usage",
            "Fast charging support",
            "3-month warranty",
            "Same-day service",
            "Free pickup & delivery"
          ]
        },
        {
          name: "MacBook Air 15\" M3 (2024)",
          model: "A3114",
          price: "₹24,999",
          originalPrice: "₹32,999",
          features: [
            "66.5-watt-hour battery",
            "Up to 18 hours usage",
            "MagSafe 3 charging",
            "3-month warranty",
            "Same-day service",
            "Free pickup & delivery"
          ]
        }
      ]
    },
    {
      category: "MacBook Air M2",
      models: [
        {
          name: "MacBook Air 13\" M2 (2022)",
          model: "A2681",
          price: "₹16,999",
          originalPrice: "₹22,999",
          features: [
            "52.6-watt-hour battery",
            "Up to 18 hours usage",
            "MagSafe 3 charging",
            "3-month warranty",
            "Same-day service",
            "Free pickup & delivery"
          ]
        },
        {
          name: "MacBook Air 15\" M2 (2023)",
          model: "A3130",
          price: "₹22,999",
          originalPrice: "₹29,999",
          features: [
            "66.5-watt-hour battery",
            "Up to 18 hours usage",
            "Midnight charging cable",
            "3-month warranty",
            "Same-day service", 
            "Free pickup & delivery"
          ]
        }
      ]
    },
    {
      category: "MacBook Air M1",
      models: [
        {
          name: "MacBook Air 13\" M1 (2020)",
          model: "A2337",
          price: "₹14,999",
          originalPrice: "₹19,999",
          features: [
            "49.9-watt-hour battery",
            "Up to 18 hours usage",
            "Energy efficient M1 chip",
            "3-month warranty",
            "Same-day service",
            "Free pickup & delivery"
          ]
        }
      ]
    },
    {
      category: "MacBook Air Intel",
      models: [
        {
          name: "MacBook Air 13\" (2018-2019)",
          model: "A1932",
          price: "₹12,999",
          originalPrice: "₹17,999",
          features: [
            "50.3-watt-hour battery",
            "Up to 12 hours usage",
            "Retina display support",
            "3-month warranty",
            "Same-day service",
            "Free pickup & delivery"
          ]
        },
        {
          name: "MacBook Air 13\" (2020)",
          model: "A2179",
          price: "₹13,999",
          originalPrice: "₹18,999",
          features: [
            "49.9-watt-hour battery",
            "Up to 11 hours usage",
            "Magic Keyboard support",
            "3-month warranty",
            "Same-day service",
            "Free pickup & delivery"
          ]
        }
      ]
    },
    {
      category: "MacBook Air Legacy",
      models: [
        {
          name: "MacBook Air 13\" (2013-2017)",
          model: "A1466",
          price: "₹9,999",
          originalPrice: "₹14,999",
          features: [
            "54-watt-hour battery",
            "Up to 12 hours usage",
            "Reliable performance",
            "3-month warranty",
            "Same-day service",
            "Free pickup & delivery"
          ]
        }
      ]
    }
  ];

  const handleHeroFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHeroFormSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/b2db4b2aaac184fde6f547d166fd887f", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: heroFormData.name,
          phone: heroFormData.phone,
          location: heroFormData.location,
          service: "MacBook Battery Replacement",
          source: "Hero Section - Battery Replacement Page"
        })
      });

      if (response.ok) {
        alert("Request submitted successfully! We'll contact you within 2 hours.");
        setHeroFormData({ name: "", phone: "", location: "" });
      }
    } catch (error) {
      alert("Something went wrong. Please call us at 9211720790");
    } finally {
      setHeroFormSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Battery className="h-4 w-4 mr-2" />
                MacBook Battery Replacement Experts
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                MacBook Battery Replacement
                <span className="block text-yellow-400">Delhi NCR</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Professional MacBook battery replacement service with original quality batteries. Same-day service, 6-month warranty, and expert technicians for all MacBook models.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Clock className="h-8 w-8" />
                  </div>
                  <p className="text-sm font-semibold">Same Day</p>
                  <p className="text-xs opacity-75">Service</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-8 w-8" />
                  </div>
                  <p className="text-sm font-semibold">6 Months</p>
                  <p className="text-xs opacity-75">Warranty</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-8 w-8" />
                  </div>
                  <p className="text-sm font-semibold">40% Less</p>
                  <p className="text-xs opacity-90">Than Apple</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <Battery className="h-16 w-16 mx-auto mb-4 text-blue-200" />
                    <h3 className="text-2xl font-bold mb-2">Get Instant Quote</h3>
                    <p className="opacity-90">Free diagnosis • No hidden charges</p>
                  </div>
                  <form onSubmit={handleHeroFormSubmit} className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={heroFormData.name}
                      onChange={(e) => setHeroFormData({...heroFormData, name: e.target.value})}
                      required
                      className="bg-white text-black border-gray-300"
                    />
                    <Input
                      type="tel"
                      placeholder="Your phone number"
                      value={heroFormData.phone}
                      onChange={(e) => setHeroFormData({...heroFormData, phone: e.target.value})}
                      required
                      className="bg-white text-black border-gray-300"
                    />
                    <Select onValueChange={(value) => setHeroFormData({...heroFormData, location: value})}>
                      <SelectTrigger className="bg-white text-black border-gray-300">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border shadow-lg z-50">
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="noida">Noida</SelectItem>
                        <SelectItem value="gurgaon">Gurgaon</SelectItem>
                        <SelectItem value="ghaziabad">Ghaziabad</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      disabled={heroFormSubmitting}
                    >
                      {heroFormSubmitting ? "Sending..." : "Book Free Diagnosis"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MacBook Air Battery Models & Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MacBook Air Battery Replacement Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing for all MacBook Air models from 2013-2024 with original quality batteries and 6-month warranty
            </p>
          </div>

          <Tabs defaultValue={macBookAirBatteryModels[0].category} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-8 h-auto min-h-[40px] p-1 bg-muted rounded-md overflow-x-auto">
              {macBookAirBatteryModels.map((category) => (
                <TabsTrigger 
                  key={category.category} 
                  value={category.category} 
                  className="text-xs sm:text-sm lg:text-sm whitespace-nowrap px-2 py-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  {category.category.split(' ').slice(0, 3).join(' ')}
                </TabsTrigger>
              ))}
            </TabsList>

            {macBookAirBatteryModels.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.models.map((model) => (
                    <Card key={model.model} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg">{model.name}</CardTitle>
                          <Badge variant="outline">{model.model}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-2xl font-bold text-primary">{model.price}</p>
                              <p className="text-sm text-muted-foreground line-through">{model.originalPrice}</p>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800">
                                Save ₹{parseInt(model.originalPrice.replace('₹', '').replace(',', '')) - parseInt(model.price.replace('₹', '').replace(',', ''))}
                              </Badge>
                            </div>
                          </div>

                          <div className="space-y-2 text-sm">
                            {model.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <Button 
                            className="w-full text-sm bg-primary hover:bg-primary/90" 
                            onClick={() => {
                              const element = document.querySelector('#service-request-form');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                          >
                            <Calendar className="h-4 w-4 mr-2" />
                            Book Service
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Model Navigation Component */}
      <ModelNavigation serviceType="battery" />

      {/* Comprehensive Battery Service Information */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Professional MacBook Battery Replacement Service - Delhi NCR's Most Trusted Repair Center
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Your MacBook's battery is the heart that keeps your productivity flowing. When it starts draining faster, swelling, or not holding charge, you need a battery replacement service that understands both the technical complexity and the importance of getting it right the first time.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Award className="h-6 w-6 mr-3 text-blue-600" />
                    Premium Battery Quality - Better Than Apple Store Standards
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MacBook batteries are precision-engineered power sources featuring cutting-edge lithium-ion technology. Our replacement batteries exceed Apple's original specifications in several key areas:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Enhanced Cycle Life:</strong> 1000+ charge cycles vs standard 500-800, meaning your battery lasts twice as long</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Smart Battery Management:</strong> Advanced BMS with temperature monitoring and overcharge protection</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Fast Charging Technology:</strong> Optimized charging curves for faster, safer power delivery</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Thermal Management:</strong> Superior heat dissipation prevents battery swelling and extends lifespan</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Wrench className="h-6 w-6 mr-3 text-green-600" />
                    Expert Battery Replacement Process
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Professional Diagnosis</h4>
                        <p className="text-sm text-muted-foreground">Complete battery health analysis using Apple diagnostic tools</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 dark:bg-green-900/50 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-green-600 dark:text-green-400">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Clean Room Assembly</h4>
                        <p className="text-sm text-muted-foreground">ESD-safe environment with specialized tools and procedures</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-100 dark:bg-purple-900/50 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-purple-600 dark:text-purple-400">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Quality Assurance</h4>
                        <p className="text-sm text-muted-foreground">Multi-point testing and calibration before delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="service-request-form" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Replace Your MacBook Battery?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get your MacBook battery replaced by Delhi NCR's most trusted repair experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="h-5 w-5 mr-2" />
                Call: 9211720790
              </Button>
              <Button size="lg" variant="outline">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}