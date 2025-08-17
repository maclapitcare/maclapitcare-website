import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Laptop, Phone, Shield, Clock, CheckCircle, Star, 
  Wrench, Award, Zap, AlertTriangle, Search, Calculator,
  MessageCircle, MapPin, TrendingDown, Calendar
} from "lucide-react";

import ServiceBookingModal from "@/components/forms/service-booking-modal";
import ModelNavigation from "@/components/layout/model-navigation";
import { CONTACT_INFO } from "@/lib/constants";

export default function MacBookProScreenReplacement() {
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [heroFormData, setHeroFormData] = useState({
    name: "",
    phone: "",
    location: ""
  });
  const [heroFormSubmitting, setHeroFormSubmitting] = useState(false);

  const handleBookService = () => {
    setIsBookingModalOpen(true);
  };

  const handleHeroFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroFormData.name || !heroFormData.phone) {
      alert("Please fill in all required fields");
      return;
    }
    
    setHeroFormSubmitting(true);
    
    try {
      const apiData = {
        name: heroFormData.name,
        phone: heroFormData.phone,
        location: heroFormData.location || "Not specified",
        deviceModel: "MacBook Pro Screen Replacement",
        serviceType: "Screen Replacement",
        issueDescription: "Screen replacement request from hero form",
      };

      const response = await fetch('/api/service-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit request');
      }
      
      alert("Thank you! We'll contact you shortly to schedule your free diagnosis.");
      setHeroFormData({ name: "", phone: "", location: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit request. Please try again or call us directly.');
    } finally {
      setHeroFormSubmitting(false);
    }
  };

  useEffect(() => {
    document.title = "MacBook Pro Screen Replacement ₹3,999+ | Original Display Repair Noida Delhi | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Best MacBook Pro screen replacement Noida, Delhi from ₹3,999+. Original Retina displays, same-day service, 3-month warranty. All MacBook Pro models 2012-2024. Free pickup. Call 9211720790");
    }
  }, []);

  const macBookProModels = [
    {
      category: "MacBook Pro M4 (2024)",
      models: [
        { name: "MacBook Pro 14\" M4 (2024)", model: "A3186", price: "₹29,999", originalPrice: "₹45,999" },
        { name: "MacBook Pro 16\" M4 (2024)", model: "A3401", price: "₹39,999", originalPrice: "₹55,999" },
      ]
    },
    {
      category: "MacBook Pro M3 (2023-2024)",
      models: [
        { name: "MacBook Pro 14\" M3 (2023)", model: "A2918", price: "₹28,999", originalPrice: "₹42,999" },
        { name: "MacBook Pro 16\" M3 (2023)", model: "A2991", price: "₹38,999", originalPrice: "₹52,999" },
      ]
    },
    {
      category: "MacBook Pro M2 (2022-2023)",
      models: [
        { name: "MacBook Pro 13\" M2 (2022)", model: "A2686", price: "₹15,999", originalPrice: "₹22,999" },
        { name: "MacBook Pro 14\" M2 (2023)", model: "A2779", price: "₹27,999", originalPrice: "₹38,999" },
        { name: "MacBook Pro 16\" M2 (2023)", model: "A2780", price: "₹37,999", originalPrice: "₹48,999" },
      ]
    },
    {
      category: "MacBook Pro M1 (2020-2021)",
      models: [
        { name: "MacBook Pro 13\" M1 (2020)", model: "A2338", price: "₹12,999", originalPrice: "₹18,999" },
        { name: "MacBook Pro 14\" M1 Pro/Max (2021)", model: "A2442", price: "₹25,999", originalPrice: "₹35,999" },
        { name: "MacBook Pro 16\" M1 Pro/Max (2021)", model: "A2485", price: "₹35,999", originalPrice: "₹45,999" },
      ]
    },
    {
      category: "MacBook Pro Intel (2016-2020)",
      models: [
        { name: "MacBook Pro 13\" 2020 (Intel)", model: "A2251/A2289", price: "₹11,999", originalPrice: "₹17,999" },
        { name: "MacBook Pro 16\" 2019 (Intel)", model: "A2141", price: "₹22,999", originalPrice: "₹32,999" },
        { name: "MacBook Pro 13\" 2019 (Touch Bar)", model: "A2159", price: "₹11,999", originalPrice: "₹16,999" },
        { name: "MacBook Pro 15\" 2019 (Touch Bar)", model: "A1990", price: "₹19,999", originalPrice: "₹28,999" },
        { name: "MacBook Pro 13\" 2018 (Touch Bar)", model: "A1989", price: "₹10,999", originalPrice: "₹15,999" },
        { name: "MacBook Pro 15\" 2018 (Touch Bar)", model: "A1990", price: "₹18,999", originalPrice: "₹26,999" },
        { name: "MacBook Pro 13\" 2017 (Touch Bar)", model: "A1706", price: "₹9,999", originalPrice: "₹14,999" },
        { name: "MacBook Pro 13\" 2017 (No Touch Bar)", model: "A1708", price: "₹8,999", originalPrice: "₹12,999" },
        { name: "MacBook Pro 13\" 2016 (Touch Bar)", model: "A1706", price: "₹9,499", originalPrice: "₹13,999" },
        { name: "MacBook Pro 15\" 2016 (Touch Bar)", model: "A1707", price: "₹16,999", originalPrice: "₹24,999" },
      ]
    },
    {
      category: "MacBook Pro Legacy (2012-2015)",
      models: [
        { name: "MacBook Pro 15\" 2015 (Mid)", model: "A1398", price: "₹14,999", originalPrice: "₹21,999" },
        { name: "MacBook Pro 13\" 2015 (Early)", model: "A1502", price: "₹11,999", originalPrice: "₹17,999" },
        { name: "MacBook Pro 15\" 2014 (Mid)", model: "A1398", price: "₹13,999", originalPrice: "₹19,999" },
        { name: "MacBook Pro 13\" 2014 (Mid)", model: "A1502", price: "₹10,999", originalPrice: "₹15,999" },
        { name: "MacBook Pro 15\" 2013 (Late)", model: "A1398", price: "₹12,999", originalPrice: "₹18,999" },
        { name: "MacBook Pro 13\" 2013 (Late)", model: "A1502", price: "₹9,999", originalPrice: "₹14,999" },
        { name: "MacBook Pro 15\" 2012 (Mid)", model: "A1398", price: "₹11,999", originalPrice: "₹17,999" },
        { name: "MacBook Pro 13\" 2012 (Mid)", model: "A1278", price: "₹3,999", originalPrice: "₹7,999" },
        { name: "MacBook Pro 15\" 2012 (Mid Non-Retina)", model: "A1286", price: "₹5,999", originalPrice: "₹9,999" },
      ]
    }
  ];

  const screenIssues = [
    { issue: "Cracked or Shattered Screen", description: "Physical damage from drops or impacts" },
    { issue: "Black/Blank Display", description: "Screen turns on but shows no image" },
    { issue: "Flickering Display", description: "Intermittent screen flickering or flashing" },
    { issue: "Dead Pixels", description: "Spots or lines that don't display properly" },
    { issue: "Backlight Issues", description: "Dim screen or no backlight" },
    { issue: "Color Distortion", description: "Wrong colors or rainbow effects" },
    { issue: "Touch Bar Issues", description: "Non-responsive or flickering Touch Bar" },
    { issue: "Flexgate Problem", description: "Stage light effect on bottom of screen" }
  ];

  const repairProcess = [
    { step: 1, title: "Free Diagnosis", description: "Complete assessment of your MacBook Pro screen damage", time: "15 mins" },
    { step: 2, title: "Quote & Approval", description: "Transparent pricing with no hidden charges", time: "5 mins" },
    { step: 3, title: "Parts Sourcing", description: "Original quality display ordered for your specific model", time: "1-2 hours" },
    { step: 4, title: "Professional Repair", description: "Expert technicians perform the screen replacement", time: "45-90 mins" },
    { step: 5, title: "Quality Testing", description: "Comprehensive display and touch functionality testing", time: "15 mins" },
    { step: 6, title: "Warranty & Delivery", description: "3-month warranty and safe delivery to you", time: "30 mins" }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "3-Month Warranty",
      description: "Comprehensive warranty on all screen replacements with free service"
    },
    {
      icon: Zap,
      title: "Same-Day Service",
      description: "Most MacBook Pro screen repairs completed within 2-4 hours"
    },
    {
      icon: Award,
      title: "Original Quality Displays",
      description: "Only genuine and OEM quality displays with perfect color accuracy"
    },
    {
      icon: TrendingDown,
      title: "Up to 40% Savings",
      description: "Significantly cheaper than Apple Store with same quality standards"
    }
  ];

  const faqs = [
    {
      question: "How long does MacBook Pro screen replacement take?",
      answer: "Most MacBook Pro screen replacements are completed within 2-4 hours. For newer models or complex repairs, it may take up to 6-8 hours. We offer same-day service for most models."
    },
    {
      question: "Do you use original Apple screens?",
      answer: "We use high-quality OEM and original screens that match Apple's specifications. Our displays offer the same color accuracy, brightness, and touch sensitivity as original Apple screens."
    },
    {
      question: "What warranty do you provide on screen replacement?",
      answer: "We provide a comprehensive 3-month warranty on all MacBook Pro screen replacements, covering any defects in the display or installation."
    },
    {
      question: "Can you fix Flexgate issues in MacBook Pro?",
      answer: "Yes, we specialize in fixing Flexgate problems (stage light effect) common in 2016-2017 MacBook Pro models. This requires display cable replacement along with the screen."
    },
    {
      question: "How much does MacBook Pro screen replacement cost?",
      answer: "Our MacBook Pro screen replacement starts from ₹3,999 for older models and goes up to ₹38,999 for the latest M3 models. We offer up to 40% savings compared to Apple Store prices."
    },
    {
      question: "Do you provide pickup and delivery service?",
      answer: "Yes, we provide free pickup and delivery service across Delhi NCR, including Noida, Gurgaon, Delhi, and Ghaziabad."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Badge className="bg-white/20 text-white">Expert Service</Badge>
                  <Badge className="bg-white/20 text-white">1-Year Warranty</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Pro Screen<br />
                  <span className="text-blue-200">Replacement from ₹3,999+</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Professional MacBook Pro screen replacement service with original quality displays. 
                  Same-day service, 3-month warranty, and up to 40% savings compared to Apple Store.
                </p>
                
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-8">
                  <a
                    href={`tel:+91${CONTACT_INFO.phone1}`}
                    className="flex items-center justify-center space-x-3 bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call: {CONTACT_INFO.phone1}</span>
                  </a>
                  <a
                    href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20Pro%20screen%20replacement`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <Clock className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-semibold">Same Day</p>
                    <p className="text-xs opacity-90">Service</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <Shield className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-semibold">3 Months</p>
                    <p className="text-xs opacity-90">Warranty</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <Award className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-semibold">Original</p>
                    <p className="text-xs opacity-90">Quality</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <TrendingDown className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-semibold">40% Less</p>
                    <p className="text-xs opacity-90">Than Apple</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <Laptop className="h-16 w-16 mx-auto mb-4 text-blue-200" />
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

      {/* MacBook Pro Models & Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MacBook Pro Screen Replacement Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing for all MacBook Pro models with original quality displays and 3-month warranty
            </p>
          </div>

          <Tabs defaultValue={macBookProModels[0].category} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
              {macBookProModels.map((category) => (
                <TabsTrigger key={category.category} value={category.category} className="text-xs lg:text-sm">
                  {category.category.replace('MacBook Pro ', '')}
                </TabsTrigger>
              ))}
            </TabsList>

            {macBookProModels.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.models.map((model) => (
                    <Card key={model.model} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader className="pb-3">
                        <div className="space-y-2">
                          <div className="flex justify-end">
                            <Badge variant="outline" className="text-xs">{model.model}</Badge>
                          </div>
                          <div className="text-base font-semibold leading-tight text-left w-full">
                            <h3 className="text-foreground">{model.name}</h3>
                          </div>
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
                          
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>Original quality display</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>3-month warranty</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>Same-day service</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>Free pickup & delivery</span>
                            </div>
                          </div>

                          <Button 
                            className="w-full text-sm bg-primary hover:bg-primary/90" 
                            onClick={() => {
                              setSelectedModel(model.name);
                              handleBookService();
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

      {/* Comprehensive Service Information - Human Written Content */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Professional MacBook Pro Screen Replacement Service - Delhi NCR's Most Trusted Repair Center
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Your MacBook Pro is more than just a laptop—it's your creative powerhouse, your business partner, your gateway to productivity. When its stunning Retina display gets damaged, you need a repair service that understands both the technical complexity and the importance of getting it right the first time.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Award className="h-6 w-6 mr-3 text-blue-600" />
                    Premium Display Quality - Better Than Apple Store Standards
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MacBook Pro displays are engineering marvels featuring cutting-edge technology. Our replacement screens exceed Apple's original specifications in several key areas:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>ProMotion 120Hz Support:</strong> Full adaptive refresh rate for 14" and 16" M-series models, smoother scrolling and responsiveness</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>True Tone + Wide Color P3:</strong> Professional-grade color accuracy for photography, video editing, and design work</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>1000+ Nits Brightness:</strong> HDR content support with peak brightness for outdoor visibility</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Anti-Reflective Nano-Texture:</strong> Optional nano-texture coating available for professional environments</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Touch Bar Functionality:</strong> Complete Touch Bar replacement with haptic feedback restoration</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Wrench className="h-6 w-6 mr-3 text-purple-600" />
                    Advanced Technical Expertise for Complex Repairs
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MacBook Pro screen replacement is significantly more complex than other laptops. Our certified technicians specialize in handling these intricate assemblies:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Flexgate Cable Management:</strong> Proper routing to prevent future flexgate issues in 2016-2019 models</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Touch Bar Integration:</strong> Seamless Touch Bar reconnection with full functionality testing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Antenna Assembly Handling:</strong> Careful WiFi/Bluetooth antenna management during lid assembly</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Thermal Management:</strong> Proper heat dissipation verification to prevent display damage</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <TrendingDown className="h-6 w-6 mr-3 text-red-600" />
                    Massive Savings - Up to 40% Less Than Apple Store
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Apple Store screen replacement costs have reached extreme levels, sometimes costing more than a new laptop. Here's how much you can save with our professional service:
                  </p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div>
                        <p className="font-semibold text-foreground mb-2">Apple Store Costs:</p>
                        <ul className="space-y-1 text-red-600">
                          <li>• 16" M4: ₹65,000+</li>
                          <li>• 14" M3: ₹50,000+</li>
                          <li>• 13" M2: ₹38,000+</li>
                          <li>• Touch Bar Models: ₹45,000+</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-green-600 mb-2">Our Professional Service:</p>
                        <ul className="space-y-1 text-green-600">
                          <li>• 16" M4: ₹39,999</li>
                          <li>• 14" M3: ₹28,999</li>
                          <li>• 13" M2: ₹15,999</li>
                          <li>• Touch Bar Models: ₹18,999+</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calculator className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-700 dark:text-green-300">Real Customer Savings Example:</span>
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        MacBook Pro 16" M3 screen replacement: Apple Store ₹55,000 vs Our Service ₹38,999 = <strong>₹16,001 saved!</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Clock className="h-6 w-6 mr-3 text-orange-600" />
                    Professional Service Timeline
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We understand that MacBook Pro users are professionals who can't afford extended downtime. Our streamlined process ensures minimal disruption to your workflow:
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full p-2 text-xs font-bold min-w-[1.5rem] h-6 flex items-center justify-center">1</div>
                      <div>
                        <p className="font-medium text-foreground">Free Pickup (30 mins)</p>
                        <p className="text-muted-foreground">Same-day pickup across Delhi NCR with protective packaging</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <div className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full p-2 text-xs font-bold min-w-[1.5rem] h-6 flex items-center justify-center">2</div>
                      <div>
                        <p className="font-medium text-foreground">Professional Repair (2-4 hours)</p>
                        <p className="text-muted-foreground">Complete screen assembly replacement with quality testing</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full p-2 text-xs font-bold min-w-[1.5rem] h-6 flex items-center justify-center">3</div>
                      <div>
                        <p className="font-medium text-foreground">Safe Return (45 mins)</p>
                        <p className="text-muted-foreground">Careful delivery with 3-month warranty documentation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MacBook Pro Specific Issues */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-8 border border-red-200 dark:border-red-800">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-red-600" />
                Critical MacBook Pro Screen Issues That Need Immediate Attention
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                MacBook Pro displays are sophisticated systems that can develop specific issues. Here are the warning signs that indicate professional repair is needed. Ignoring these symptoms can lead to logic board damage costing thousands more:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-1">Flexgate Issue (2016-2019 Models)</h4>
                    <p className="text-sm text-muted-foreground">Stage light effect along bottom edge of screen. This is a known design flaw in certain MacBook Pro models where display cables are too short, causing them to stretch and fail over time. Requires immediate attention to prevent complete display failure.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-1">Touch Bar Malfunctions</h4>
                    <p className="text-sm text-muted-foreground">Unresponsive Touch Bar, wrong functions displayed, or completely black Touch Bar. Often requires complete top case replacement including screen assembly.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-1">ProMotion Display Stuttering</h4>
                    <p className="text-sm text-muted-foreground">14" and 16" M-series models with 120Hz displays showing refresh rate issues, stuttering, or fixed at 60Hz. Usually indicates display controller failure.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4 py-2">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1">Extreme Color Temperature Shifts</h4>
                    <p className="text-sm text-muted-foreground">Sudden shifts to very warm or cool colors, True Tone malfunction, or P3 color gamut issues affecting professional color accuracy.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-1">Backlight Bleeding or Uneven Brightness</h4>
                    <p className="text-sm text-muted-foreground">Light bleeding around edges, dark spots, or uneven brightness zones across the display. More common in larger 15" and 16" models.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-1">Pink/Purple Screen Tint</h4>
                    <p className="text-sm text-muted-foreground">Display shows pink or purple tint especially in white areas. Common in M1 MacBook Pro models, indicates LCD panel failure requiring immediate replacement.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-1">Partial Display Response</h4>
                    <p className="text-sm text-muted-foreground">Only portion of screen responds to input, dead touch zones, or erratic cursor behavior. Indicates digitizer failure in touch-enabled models.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4 py-2">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1">HDR Content Display Issues</h4>
                    <p className="text-sm text-muted-foreground">HDR videos appear dark, wrong colors, or cause display flickering. Professional displays require precise calibration for HDR workflows.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-1">Complete Black Screen with Audio</h4>
                    <p className="text-sm text-muted-foreground">System boots normally with sound but no display output. Can be display panel failure, logic board issue, or display cable damage.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-1">Geometric Distortion</h4>
                    <p className="text-sm text-muted-foreground">Image appears stretched, compressed, or distorted. Often indicates internal display controller failure requiring professional diagnosis.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800 text-center">
                  <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">🚨 Emergency Service Available</h4>
                  <p className="text-sm text-red-600 dark:text-red-400">Critical business needs? Same-day express repair available for urgent cases. Call {CONTACT_INFO.phone1} for immediate assistance.</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">💡 Free Diagnosis Promise</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Not sure if it's the screen? We provide free comprehensive diagnosis to identify the exact problem before any repair work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen Issues We Fix */}  
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MacBook Pro Screen Issues We Fix
            </h2>
            <p className="text-xl text-muted-foreground">
              From simple cracks to complex display problems, we handle all MacBook Pro screen issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {screenIssues.map((issue, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-red-100 text-red-600 rounded-full p-3 mb-4 mx-auto w-12 h-12 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{issue.issue}</h3>
                  <p className="text-sm text-muted-foreground">{issue.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Screen Replacement Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional 6-step process ensuring perfect screen replacement
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repairProcess.map((step) => (
                <div key={step.step} className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full p-3 font-bold text-lg min-w-[3rem] h-12 flex items-center justify-center">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-2">{step.description}</p>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {step.time}
                      </Badge>
                    </div>
                  </div>
                  {step.step < repairProcess.length && (
                    <div className="hidden lg:block absolute top-12 left-6 w-px h-16 bg-border"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Maclap IT Care?
            </h2>
            <p className="text-xl text-muted-foreground">
              Delhi NCR's most trusted MacBook Pro screen replacement service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 text-primary rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about MacBook Pro screen replacement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Fix Your MacBook Pro Screen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get your MacBook Pro screen replaced today with original quality displays and 3-month warranty
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="flex items-center space-x-3 bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors"
              >
                <Phone className="h-6 w-6" />
                <span>Call: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20Pro%20screen%20replacement`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Model-Specific Navigation */}
      <ModelNavigation serviceType="screen" />

      {/* Service Booking Modal */}
      <ServiceBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceName={selectedModel || "MacBook Pro Screen Replacement"}
      />
    </div>
  );
}