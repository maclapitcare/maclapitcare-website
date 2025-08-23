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
  MessageCircle, MapPin, TrendingDown, Wind, Calendar
} from "lucide-react";

import ServiceBookingModal from "@/components/forms/service-booking-modal";
import ModelNavigation from "@/components/layout/model-navigation";
import { CONTACT_INFO } from "@/lib/constants";

export default function MacBookAirScreenReplacement() {
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
      const formSubmitData = {
        name: heroFormData.name,
        phone: heroFormData.phone,
        location: heroFormData.location || "Not specified",
        device: "MacBook Air Screen Replacement",
        service: "Screen Replacement",
        message: "Screen replacement request from hero form",
        _subject: "New MacBook Air Screen Replacement Request - MacLap IT Care",
        _captcha: "false"
      };

      const response = await fetch('https://formsubmit.co/ajax/maclapitcare@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formSubmitData),
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
    document.title = "MacBook Air Screen Replacement ₹3,499+ | Original Retina Display Repair Delhi NCR | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Best MacBook Air screen replacement Delhi NCR from ₹3,499+. Original Retina displays, same-day service, 3-month warranty. All MacBook Air models 2010-2024 M3/M2/M1. Free pickup. Call 9211720790");
    }
  }, []);

  const macBookAirModels = [
    {
      category: "MacBook Air M3 (2024)",
      models: [
        { name: "MacBook Air 13\" M3 (2024)", model: "A3113", price: "₹18,999", originalPrice: "₹24,999", features: ["Liquid Retina Display", "True Tone", "P3 Wide Color"] },
        { name: "MacBook Air 15\" M3 (2024)", model: "A3114", price: "₹24,999", originalPrice: "₹32,999", features: ["15.3-inch Display", "500 nits Brightness", "Fingerprint Resistant"] },
      ]
    },
    {
      category: "MacBook Air M2 (2022-2023)",
      models: [
        { name: "MacBook Air 13\" M2 (2022)", model: "A2681", price: "₹16,999", originalPrice: "₹22,999", features: ["Liquid Retina Display", "True Tone", "1 Billion Colors"] },
        { name: "MacBook Air 15\" M2 (2023)", model: "A2941", price: "₹22,999", originalPrice: "₹29,999", features: ["15.3-inch Display", "500 nits Brightness", "Wide Color P3"] },
      ]
    },
    {
      category: "MacBook Air M1 (2020-2021)",
      models: [
        { name: "MacBook Air 13\" M1 (2020)", model: "A2337", price: "₹14,999", originalPrice: "₹19,999", features: ["Retina Display", "True Tone", "IPS Technology"] },
      ]
    },
    {
      category: "MacBook Air Intel (2018-2020)",
      models: [
        { name: "MacBook Air 13\" 2020 (Intel)", model: "A2179", price: "₹12,999", originalPrice: "₹17,999", features: ["Retina Display", "True Tone", "400 nits"] },
        { name: "MacBook Air 13\" 2019", model: "A1932", price: "₹11,999", originalPrice: "₹16,999", features: ["Retina Display", "IPS Panel", "sRGB Color"] },
        { name: "MacBook Air 13\" 2018", model: "A1932", price: "₹10,999", originalPrice: "₹15,999", features: ["Retina Display", "LED Backlight", "True Tone"] },
      ]
    },
    {
      category: "MacBook Air Legacy (2010-2017)",  
      models: [
        { name: "MacBook Air 13\" 2017", model: "A1466", price: "₹8,999", originalPrice: "₹12,999", features: ["LED Backlight", "TN Panel", "Standard Resolution"] },
        { name: "MacBook Air 11\" 2015", model: "A1465", price: "₹7,999", originalPrice: "₹11,999", features: ["LED Backlight", "11.6-inch", "Compact Design"] },
        { name: "MacBook Air 13\" 2015", model: "A1466", price: "₹8,499", originalPrice: "₹12,499", features: ["LED Backlight", "13.3-inch", "Standard Resolution"] },
        { name: "MacBook Air 11\" 2014", model: "A1465", price: "₹7,499", originalPrice: "₹11,499", features: ["LED Backlight", "TN Panel", "Energy Efficient"] },
        { name: "MacBook Air 13\" 2014", model: "A1466", price: "₹7,999", originalPrice: "₹11,999", features: ["LED Backlight", "Anti-Glare", "Wide Viewing"] },
        { name: "MacBook Air 11\" 2013", model: "A1465", price: "₹6,999", originalPrice: "₹10,999", features: ["LED Backlight", "Glossy Finish", "Portable"] },
        { name: "MacBook Air 13\" 2013", model: "A1466", price: "₹7,499", originalPrice: "₹11,499", features: ["LED Backlight", "Matte Finish", "Durable"] },
        { name: "MacBook Air 11\" 2012", model: "A1465", price: "₹6,499", originalPrice: "₹10,499", features: ["LED Backlight", "Basic Panel", "Cost Effective"] },
        { name: "MacBook Air 13\" 2012", model: "A1466", price: "₹6,999", originalPrice: "₹10,999", features: ["LED Backlight", "Standard Panel", "Reliable"] },
        { name: "MacBook Air 11\" 2011", model: "A1370", price: "₹5,999", originalPrice: "₹9,999", features: ["LED Backlight", "Basic Display", "Budget Friendly"] },
        { name: "MacBook Air 13\" 2011", model: "A1369", price: "₹6,499", originalPrice: "₹10,499", features: ["LED Backlight", "Standard Display", "Value Option"] },
        { name: "MacBook Air 11\" 2010", model: "A1370", price: "₹4,999", originalPrice: "₹8,999", features: ["LED Backlight", "First Gen", "Classic Design"] },
        { name: "MacBook Air 13\" 2010", model: "A1369", price: "₹5,499", originalPrice: "₹9,499", features: ["LED Backlight", "First Gen", "Larger Screen"] },
      ]
    }
  ];

  const screenIssues = [
    { issue: "Cracked Screen", description: "Visible cracks or spider web damage", severity: "High" },
    { issue: "Black/Blank Display", description: "Screen powers on but shows nothing", severity: "High" },
    { issue: "LCD Bleeding", description: "Light leakage around screen edges", severity: "Medium" },
    { issue: "Dead Pixels", description: "Stuck or dead pixels on display", severity: "Medium" },
    { issue: "Flickering Screen", description: "Intermittent display flickering", severity: "High" },
    { issue: "Dim Display", description: "Backlight issues causing dim screen", severity: "Medium" },
    { issue: "Color Issues", description: "Wrong colors or color distortion", severity: "Medium" },
    { issue: "Lines on Screen", description: "Horizontal or vertical lines", severity: "High" }
  ];

  const repairAdvantages = [
    {
      icon: TrendingDown,
      title: "45% Cheaper Than Apple",
      description: "Save thousands compared to Apple Store pricing while maintaining quality"
    },
    {
      icon: Clock,
      title: "2-4 Hour Service",
      description: "Most MacBook Air screen repairs completed same day"
    },
    {
      icon: Shield,
      title: "3-Month Warranty",
      description: "Comprehensive warranty covering screen and installation defects"
    },
    {
      icon: Award,
      title: "Original Quality Displays",
      description: "OEM quality screens with same brightness and color accuracy"
    },
    {
      icon: Wind,
      title: "Ultra-Thin Design",
      description: "Specialized tools and expertise for MacBook Air's thin profile"
    },
    {
      icon: Zap,
      title: "Free Pickup & Delivery",
      description: "Convenient doorstep service across Delhi NCR"
    }
  ];

  const qualityFeatures = [
    "✅ Original Retina display quality with True Tone support",
    "✅ Perfect color accuracy matching Apple specifications", 
    "✅ 500 nits brightness for M2/M3 models",
    "✅ P3 Wide Color gamut support for latest models",
    "✅ Anti-reflective coating for better visibility",
    "✅ Oleophobic coating to resist fingerprints",
    "✅ Edge-to-edge glass with precise fitment",
    "✅ Full touch and gesture support restoration"
  ];

  const repairProcess = [
    { 
      step: 1, 
      title: "Free Diagnosis", 
      description: "Complete MacBook Air assessment including display testing", 
      time: "15 mins",
      details: "We test LCD panel, backlight, touch response, and check for other issues"
    },
    { 
      step: 2, 
      title: "Model Identification", 
      description: "Precise model verification for correct screen sourcing", 
      time: "5 mins",
      details: "Using model number and year to ensure 100% compatible display"
    },
    { 
      step: 3, 
      title: "Quote & Approval", 
      description: "Transparent pricing with detailed breakdown", 
      time: "10 mins",
      details: "No hidden costs, clear warranty terms, and repair timeline"
    },
    { 
      step: 4, 
      title: "Screen Sourcing", 
      description: "Original quality display ordered for your specific model", 
      time: "1-3 hours",
      details: "We stock most common models, special orders for rare variants"
    },
    { 
      step: 5, 
      title: "Careful Disassembly", 
      description: "Professional MacBook Air opening with specialized tools", 
      time: "30 mins",
      details: "Ultra-thin design requires precision tools and expert handling"
    },
    { 
      step: 6, 
      title: "Screen Installation", 
      description: "Precise screen replacement with calibration", 
      time: "45-60 mins",
      details: "Clean installation with proper cable routing and alignment"
    },
    { 
      step: 7, 
      title: "Quality Testing", 
      description: "Comprehensive display and system functionality testing", 
      time: "20 mins",
      details: "Color accuracy, touch response, brightness, and system stability test"
    },
    { 
      step: 8, 
      title: "Final Delivery", 
      description: "Warranty documentation and safe delivery", 
      time: "15 mins",
      details: "3-month warranty certificate and care instructions provided"
    }
  ];

  const faqs = [
    {
      question: "How much does MacBook Air screen replacement cost?",
      answer: "MacBook Air screen replacement starts from ₹3,499 for older models (2010-2013) and goes up to ₹24,999 for the latest M3 15-inch models. We offer up to 45% savings compared to Apple Store prices."
    },
    {
      question: "Do you use original Apple screens for MacBook Air?",
      answer: "We use high-quality OEM screens that match Apple's exact specifications for color accuracy, brightness, and touch response. These displays offer the same visual experience as original Apple screens."
    },
    {
      question: "How long does MacBook Air screen replacement take?",
      answer: "Most MacBook Air screen replacements are completed in 2-4 hours. The ultra-thin design requires careful handling, but our expert technicians ensure quick yet precise repairs."
    },
    {
      question: "What warranty do you provide on MacBook Air screen replacement?",
      answer: "We provide a comprehensive 3-month warranty on all MacBook Air screen replacements, covering both the display panel and installation workmanship."
    },
    {
      question: "Can you repair MacBook Air with Retina display?",
      answer: "Yes, we specialize in both non-Retina (2010-2017) and Retina display (2018-2024) MacBook Air models. We have expertise in handling the complex Retina display assemblies."
    },
    {
      question: "Do you support the new 15-inch MacBook Air?",
      answer: "Yes, we fully support the new 15-inch MacBook Air M2 (2023) and M3 (2024) models with specialized large screen replacement service and original quality displays."
    },
    {
      question: "What if my MacBook Air screen is completely black?",
      answer: "A black screen can be caused by display failure, backlight issues, or logic board problems. We perform free diagnosis to identify the exact cause and provide appropriate repair solutions."
    },
    {
      question: "Can you fix MacBook Air screen flickering issues?",
      answer: "Yes, screen flickering is often caused by loose display cables or backlight issues. Our technicians can diagnose and fix these problems during the screen replacement process."
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
                  <Badge className="bg-white/20 text-white">Original Quality</Badge>
                  <Badge className="bg-white/20 text-white">Ultra-Thin Expert</Badge>
                  <Badge className="bg-white/20 text-white">1-Year Warranty</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Air Screen<br />
                  <span className="text-blue-200">Replacement from ₹3,499+</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Expert MacBook Air screen replacement service with original Retina displays. 
                  Same-day service, 3-month warranty, and up to 45% savings compared to Apple Store.
                  Specialized in ultra-thin MacBook Air design.
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
                    href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20Air%20screen%20replacement`}
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
                    <p className="text-sm font-semibold">2-4 Hours</p>
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
                    <p className="text-sm font-semibold">45% Less</p>
                    <p className="text-xs opacity-90">Than Apple</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <Wind className="h-16 w-16 mx-auto mb-4 text-blue-200" />
                    <h3 className="text-2xl font-bold mb-2">Get Instant Quote</h3>
                    <p className="opacity-90">Free diagnosis • MacBook Air specialist</p>
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

      {/* MacBook Air Models & Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MacBook Air Screen Replacement Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing for all MacBook Air models from 2010-2024 with original quality displays and 3-month warranty
            </p>
          </div>

          <Tabs defaultValue={macBookAirModels[0].category} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              {macBookAirModels.map((category) => (
                <TabsTrigger key={category.category} value={category.category} className="text-xs lg:text-sm">
                  {category.category.split(' ').slice(0, 3).join(' ')}
                </TabsTrigger>
              ))}
            </TabsList>

            {macBookAirModels.map((category) => (
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
                          
                          <div className="space-y-2 text-sm text-muted-foreground border-t pt-3">
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
                            className="w-full bg-primary hover:bg-primary/90" 
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

      {/* Detailed Service Information - Like LappyMaker */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                MacBook Air Screen Replacement Service Details - Why We're Delhi NCR's #1 Choice
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                When your MacBook Air screen gets damaged, you need more than just a quick fix. You need expertise, quality parts, and service you can trust. Here's why thousands of customers across Delhi, Noida, Gurgaon, and Ghaziabad choose Maclap IT Care for their MacBook Air screen replacement needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Award className="h-6 w-6 mr-3 text-blue-600" />
                    Original Quality Displays That Match Apple Standards
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We understand that your MacBook Air's screen is not just a display—it's your window to creativity, productivity, and entertainment. That's why we source only OEM-grade displays that meet Apple's exact specifications. Every screen we install delivers:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>True Retina Quality:</strong> Crisp 2560×1600 resolution for M-series models, maintaining every pixel of clarity you expect</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Perfect Color Accuracy:</strong> P3 wide color gamut support ensuring professional-grade color reproduction</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>True Tone Technology:</strong> Automatic white balance adjustment that adapts to your environment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>500 Nits Brightness:</strong> Full brightness support for outdoor visibility and HDR content</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Wind className="h-6 w-6 mr-3 text-purple-600" />
                    Specialized Expertise for Ultra-Thin Design
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MacBook Air's incredibly thin profile requires specialized knowledge and tools. Our technicians have years of experience working with these delicate machines. We handle the complex assembly process with precision, ensuring:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>No Damage to Internal Components:</strong> Careful disassembly protecting logic board, battery, and speakers</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Perfect Display Cable Routing:</strong> Proper cable management preventing future flexgate issues</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Precise Lid Alignment:</strong> Ensuring perfect closure and hinge tension like new</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <TrendingDown className="h-6 w-6 mr-3 text-red-600" />
                    Transparent Pricing - Up to 45% Less Than Apple Store
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Apple Store charges premium prices for screen replacements, often costing more than what many people paid for their MacBook Air. We believe quality repair shouldn't break the bank. Here's how we save you money:
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Apple Store Pricing:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• M3 15": ₹45,000+</li>
                        <li>• M2 13": ₹35,000+</li>
                        <li>• M1 13": ₹28,000+</li>
                        <li>• Intel Models: ₹25,000+</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-green-600">Our Pricing:</p>
                      <ul className="space-y-1 text-green-600">
                        <li>• M3 15": ₹24,999</li>
                        <li>• M2 13": ₹16,999</li>
                        <li>• M1 13": ₹14,999</li>
                        <li>• Intel Models: ₹8,999+</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                      💡 Average savings: ₹15,000-20,000 per repair while maintaining the same quality standards
                    </p>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Clock className="h-6 w-6 mr-3 text-orange-600" />
                    Same-Day Service Across Delhi NCR
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We know how much you depend on your MacBook Air for work, studies, or business. That's why we've streamlined our process to get you back up and running quickly:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Free Pickup from Your Location:</strong> Delhi, Noida, Gurgaon, Ghaziabad - anywhere in NCR</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>2-4 Hour Repair Window:</strong> Most screen replacements completed same day</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Safe Delivery Back to You:</strong> Careful packaging and prompt return</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Real-Time Updates:</strong> WhatsApp updates throughout the repair process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Warning Signs Section */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-8 border border-orange-200 dark:border-orange-800">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-orange-600" />
                Signs Your MacBook Air Screen Needs Immediate Replacement
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Don't wait until it's too late. These symptoms indicate your MacBook Air screen requires professional attention. Delaying repair can lead to more expensive damage to internal components:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full p-1">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Visible Cracks or Shattered Glass</h4>
                      <p className="text-sm text-muted-foreground">Even small cracks can spread quickly and damage the LCD panel underneath, making repair more expensive.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full p-1">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Black or Completely Blank Screen</h4>
                      <p className="text-sm text-muted-foreground">System turns on but display shows nothing - usually indicates LCD panel failure requiring immediate replacement.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full p-1">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Flickering or Unstable Display</h4>
                      <p className="text-sm text-muted-foreground">Screen flickers, flashes, or intermittently goes black - often a sign of failing display cables or panel.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full p-1">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Dead Pixels or Bright Spots</h4>
                      <p className="text-sm text-muted-foreground">Cluster of pixels that stay black or bright white - indicates LCD panel degradation.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full p-1">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Color Distortion or Rainbow Effects</h4>
                      <p className="text-sm text-muted-foreground">Wrong colors, pink/green tints, or rainbow patterns - usually means LCD panel is failing.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full p-1">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Dim or No Backlight</h4>
                      <p className="text-sm text-muted-foreground">Screen is very dim or completely dark but you can faintly see content - backlight system needs replacement.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full p-1">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Stage Light Effect (Bottom Edge Lighting)</h4>
                      <p className="text-sm text-muted-foreground">Bright light bleeding from bottom edge - common flexgate issue in 2016-2017 models requiring immediate attention.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full p-1">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Horizontal or Vertical Lines</h4>
                      <p className="text-sm text-muted-foreground">Permanent lines across the screen - indicates LCD panel damage that won't resolve on its own.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
                <p className="text-blue-700 dark:text-blue-300 font-medium">
                  ⚡ Emergency Repair Available: Same-day service for urgent business needs • Call {CONTACT_INFO.phone1} now
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen Issues Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MacBook Air Screen Issues We Fix
            </h2>
            <p className="text-xl text-muted-foreground">
              Expert diagnosis and repair for all MacBook Air display problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {screenIssues.map((issue, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`rounded-full p-3 mb-4 mx-auto w-12 h-12 flex items-center justify-center ${
                    issue.severity === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{issue.issue}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{issue.description}</p>
                  <Badge variant={issue.severity === 'High' ? 'destructive' : 'secondary'} className="text-xs">
                    {issue.severity} Priority
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Original Quality Display Features
            </h2>
            <p className="text-xl text-muted-foreground">
              We use only the highest quality displays that match Apple's exact specifications
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {qualityFeatures.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <p className="text-foreground">{feature.replace('✅ ', '')}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {qualityFeatures.slice(4).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <p className="text-foreground">{feature.replace('✅ ', '')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us for MacBook Air Screen Replacement?
            </h2>
            <p className="text-xl text-muted-foreground">
              Delhi NCR's most trusted MacBook Air repair specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {repairAdvantages.map((feature, index) => (
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

      {/* Repair Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our MacBook Air Screen Replacement Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional 8-step process designed for MacBook Air's ultra-thin design
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {repairProcess.map((step) => (
                <Card key={step.step} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-primary text-primary-foreground rounded-full p-2 font-bold text-sm min-w-[2rem] h-8 flex items-center justify-center">
                        {step.step}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {step.time}
                      </Badge>
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                    <p className="text-xs text-muted-foreground/80">{step.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about MacBook Air screen replacement
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
              Ready to Fix Your MacBook Air Screen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get your MacBook Air screen replaced today with original quality displays and 3-month warranty
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
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20Air%20screen%20replacement`}
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
        serviceName={selectedModel || "MacBook Air Screen Replacement"}
      />
    </div>
  );
}