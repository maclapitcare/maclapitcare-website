import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Laptop, Phone, Shield, Clock, CheckCircle, Star, 
  Wrench, Award, Zap, AlertTriangle, Search, Smartphone,
  MessageCircle, MapPin, Wind, Calendar, Settings, Maximize
} from "lucide-react";

import ServiceBookingModal from "@/components/forms/service-booking-modal";
import { CONTACT_INFO } from "@/lib/constants";

export default function MacBookBezelReplacement() {
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
        device: "MacBook Bezel Replacement",
        service: "Bezel Replacement",
        message: "Bezel replacement request from hero form",
        _subject: "New MacBook Bezel Replacement Request - MacLap IT Care",
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
    document.title = "MacBook Glass Bezel Replacement Delhi NCR | Bottom Screen Strip Repair | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook glass bezel replacement Delhi NCR. Fix cracked bottom screen strip with Apple logo. All MacBook Pro/Air models. Starting ₹3999. Call 9211720790");
    }
  }, []);

  const macBookBezelModels = [
    {
      category: "MacBook Pro M4/M3/M2 (2022-2024)",
      models: [
        { 
          name: "MacBook Pro 16\" M4 (2024)", 
          model: "A3186/A3401", 
          features: ["Glass bezel with Apple logo", "MacBook Pro text", "Perfect fit guarantee", "Genuine glass material"],
          complexity: "Moderate",
          price: "₹4,999"
        },
        { 
          name: "MacBook Pro 14\" M3/M4 (2023-2024)", 
          model: "A2918/A3186", 
          features: ["Glass bezel with MacBook Pro text", "Apple logo display", "Precision fit installation", "High-quality glass material"],
          complexity: "Moderate",
          price: "₹4,699"
        },
        { 
          name: "MacBook Pro 13\" M2 (2022)", 
          model: "A2686", 
          features: ["Bottom glass strip replacement", "MacBook Pro logo text", "Professional installation", "Genuine glass parts"],
          complexity: "Basic",
          price: "₹3,999"
        },
      ]
    },
    {
      category: "MacBook Pro M1 (2020-2021)",
      models: [
        { 
          name: "MacBook Pro 16\" M1 Pro/Max (2021)", 
          model: "A2485", 
          features: ["Mini-LED frame design", "Advanced thermal management", "Camera housing integration", "Premium finish"],
          complexity: "Advanced"
        },
        { 
          name: "MacBook Pro 14\" M1 Pro/Max (2021)", 
          model: "A2442", 
          features: ["Compact frame design", "Notch integration", "Precision engineering", "Color-matched finish"],
          complexity: "Advanced"
        },
        { 
          name: "MacBook Pro 13\" M1 (2020)", 
          model: "A2338", 
          features: ["Traditional design frame", "Touch Bar housing", "Reliable construction", "Easy maintenance"],
          complexity: "Moderate"
        },
      ]
    },
    {
      category: "MacBook Air M3/M2/M1 (2020-2024)",
      models: [
        { 
          name: "MacBook Air 15\" M3/M2 (2023-2024)", 
          model: "A3114/A2941", 
          features: ["Large frame assembly", "Ultra-thin profile", "Precision fit", "Elegant design"],
          complexity: "Advanced"
        },
        { 
          name: "MacBook Air 13\" M3/M2 (2022-2024)", 
          model: "A3113/A2681", 
          features: ["Redesigned frame", "Magsafe integration", "Camera bump housing", "Modern aesthetics"],
          complexity: "Moderate"
        },
        { 
          name: "MacBook Air 13\" M1 (2020)", 
          model: "A2337", 
          features: ["Classic frame design", "Wedge profile support", "Reliable fit", "Standard finish"],
          complexity: "Moderate"
        },
      ]
    },
    {
      category: "MacBook Pro Intel Touch Bar (2016-2020)",
      models: [
        { 
          name: "MacBook Pro 16\" 2019-2020", 
          model: "A2141", 
          features: ["Large display frame", "Touch Bar integration", "Speaker grille alignment", "Thermal considerations"],
          complexity: "Advanced"
        },
        { 
          name: "MacBook Pro 15\" 2016-2019", 
          model: "A1707/A1990", 
          features: ["Touch Bar housing", "Complex assembly", "Precision alignment", "Multiple variants"],
          complexity: "Expert"
        },
        { 
          name: "MacBook Pro 13\" 2016-2020", 
          model: "A1706/A1708/A1989/A2159/A2251/A2289", 
          features: ["Compact frame", "Touch Bar variants", "Multiple generations", "Varied complexity"],
          complexity: "Advanced"
        },
      ]
    },
    {
      category: "MacBook Air Intel (2018-2020)",
      models: [
        { 
          name: "MacBook Air 13\" 2018-2020", 
          model: "A1932/A2179", 
          features: ["Retina display frame", "Thin profile design", "Gold/Silver/Space Gray", "Modern construction"],
          complexity: "Moderate"
        },
      ]
    },
    {
      category: "MacBook Legacy Models (2010-2017)",
      models: [
        { 
          name: "MacBook Pro 15\" 2012-2015", 
          model: "A1398/A1286", 
          features: ["Classic aluminum frame", "Retina/Non-Retina variants", "Robust construction", "Traditional design"],
          complexity: "Moderate"
        },
        { 
          name: "MacBook Pro 13\" 2012-2015", 
          model: "A1502/A1278", 
          features: ["Standard frame design", "Multiple generations", "Reliable build", "Cost-effective repair"],
          complexity: "Basic"
        },
        { 
          name: "MacBook Air 13\" 2010-2017", 
          model: "A1466/A1369", 
          features: ["Wedge profile frame", "Classic design", "Durable construction", "Simple assembly"],
          complexity: "Basic"
        },
        { 
          name: "MacBook Air 11\" 2010-2015", 
          model: "A1465/A1370", 
          features: ["Compact frame", "Ultra-portable design", "Lightweight construction", "Vintage appeal"],
          complexity: "Basic"
        },
      ]
    }
  ];

  const bezelIssues = [
    { 
      issue: "Cracked Glass Strip", 
      description: "Horizontal or vertical cracks in the bottom glass bezel where MacBook text is displayed",
      severity: "Medium",
      urgency: "Cosmetic issue that can worsen over time",
      commonCause: "Closing laptop with objects on keyboard"
    },
    { 
      issue: "Shattered Bezel Glass", 
      description: "Multiple cracks or completely broken glass strip at bottom of screen",
      severity: "High",
      urgency: "Glass shards can damage cables underneath",
      commonCause: "Impact damage or excessive pressure"
    },
    { 
      issue: "Text/Logo Damage", 
      description: "MacBook Pro/Air text becoming illegible or Apple logo scratched",
      severity: "Low",
      urgency: "Purely cosmetic but affects brand appearance",
      commonCause: "Normal wear and cleaning attempts"
    },
    { 
      issue: "Glass Strip Separation", 
      description: "Bottom glass bezel coming loose from display assembly",
      severity: "Medium",
      urgency: "May fall off completely and get lost",
      commonCause: "Adhesive failure over time"
    },
    { 
      issue: "Stress Cracks", 
      description: "Small cracks appearing without obvious damage",
      severity: "Medium",
      urgency: "Can spread across entire bezel length",
      commonCause: "Thermal expansion or manufacturing defect"
    },
    { 
      issue: "Deep Scratches", 
      description: "Visible scratches across the glass surface affecting readability",
      severity: "Low",
      urgency: "Cosmetic issue affecting professional appearance",
      commonCause: "Cleaning with abrasive materials"
    },
    { 
      issue: "Missing Bezel", 
      description: "Glass strip completely broken off and lost",
      severity: "High",
      urgency: "Exposes display cables and affects laptop closure",
      commonCause: "Previous damage or poor repair attempt"
    },
    { 
      issue: "Cloudy/Foggy Appearance", 
      description: "Glass appears cloudy or has internal fogging",
      severity: "Low",
      urgency: "Affects text visibility and professional look",
      commonCause: "Age, humidity, or adhesive degradation"
    }
  ];

  const repairProcess = [
    { 
      step: 1, 
      title: "Precision Assessment", 
      description: "Detailed analysis of bezel damage and model identification", 
      time: "20 mins",
      details: "We examine frame integrity, measure dimensions, and identify exact MacBook variant"
    },
    { 
      step: 2, 
      title: "Screen Protection", 
      description: "Careful screen removal and protective packaging", 
      time: "30 mins",
      details: "Display assembly safely removed and stored to prevent any damage during bezel work"
    },
    { 
      step: 3, 
      title: "Frame Disassembly", 
      description: "Professional separation of damaged bezel components", 
      time: "45 mins",
      details: "Specialized tools used to remove damaged frame without affecting internal components"
    },
    { 
      step: 4, 
      title: "Precision Fitting", 
      description: "Custom alignment and mounting of replacement bezel", 
      time: "60 mins",
      details: "New aluminum frame precisely fitted with perfect color matching and finish"
    },
    { 
      step: 5, 
      title: "Screen Reassembly", 
      description: "Careful reinstallation of display with perfect alignment", 
      time: "40 mins",
      details: "Display mounted with exact positioning ensuring no gaps or misalignment"
    },
    { 
      step: 6, 
      title: "Quality Control", 
      description: "Comprehensive testing of fit, finish, and functionality", 
      time: "25 mins",
      details: "Thorough inspection of frame integrity, screen alignment, and overall aesthetics"
    },
    { 
      step: 7, 
      title: "Final Inspection", 
      description: "Complete system test and cosmetic verification", 
      time: "15 mins",
      details: "Final quality check ensuring perfect appearance and structural integrity"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Genuine Glass Parts",
      description: "High-quality glass bezels with perfect Apple logo and text reproduction"
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Careful removal and installation to avoid damaging delicate display cables"
    },
    {
      icon: Shield,
      title: "Cable Protection",
      description: "Professional technique ensuring no damage to underlying ribbon cables"
    },
    {
      icon: Zap,
      title: "Perfect Text Clarity",
      description: "Crystal clear MacBook Pro/Air text with proper font and spacing"
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Most glass bezel replacements completed within 2-3 hours"
    },
    {
      icon: Star,
      title: "Cost-Effective Solution", 
      description: "Affordable repair compared to ₹25,000+ full display replacement"
    }
  ];

  const faqs = [
    {
      question: "What is the MacBook glass bezel and why does it crack so easily?",
      answer: "The glass bezel is the thin glass strip at the bottom of your MacBook screen that displays 'MacBook Pro' or 'MacBook Air' text with the Apple logo. It's only 2-3mm thick and cracks easily because people close their laptops with objects on the keyboard (phones, earbuds, crumbs) which creates pressure between the keyboard and bezel."
    },
    {
      question: "Can you replace the glass bezel without damaging the screen or cables underneath?",
      answer: "Yes, our expert technicians use specialized heating and removal techniques to safely replace the glass bezel. The biggest risk is damaging the thin ribbon cables that run directly underneath, but our professionals use proper tools and techniques to avoid cable damage that could cost ₹25,000+ in screen replacement."
    },
    {
      question: "Do you use original Apple glass bezels or aftermarket parts?",
      answer: "We use high-quality OEM-grade glass bezels that match Apple's exact specifications. These include the correct font, text spacing, and Apple logo reproduction. While Apple doesn't sell bezel-only parts (they require full ₹25,000+ display replacement), our parts provide identical appearance and quality."
    },
    {
      question: "How long does MacBook glass bezel replacement take?",
      answer: "Most MacBook glass bezel replacements are completed within 2-3 hours. The process involves carefully heating the old adhesive, removing the damaged bezel without damaging cables, cleaning all glass fragments, and installing the new bezel with proper alignment."
    },
    {
      question: "Will the replacement bezel exactly match my MacBook's color?",
      answer: "Yes, we source bezels that precisely match your MacBook's original color - whether it's Space Gray, Silver, Gold, or any special edition color. Our color matching process ensures the replacement frame is indistinguishable from the original finish."
    },
    {
      question: "Is bezel replacement worth it for older MacBook models?",
      answer: "Absolutely! Bezel replacement can dramatically improve the appearance and resale value of older MacBooks. It's particularly worthwhile for models with otherwise good functionality but cosmetic damage that affects their professional appearance."
    },
    {
      question: "Can you repair small dents or scratches instead of full replacement?",
      answer: "For minor cosmetic issues, we can sometimes perform localized repairs or refinishing. However, significant damage, cracks, or structural issues typically require full bezel replacement to ensure proper protection and appearance."
    },
    {
      question: "What warranty do you provide on bezel replacement?",
      answer: "We provide a comprehensive 3-month warranty on all bezel replacements, covering both the aluminum frame and our installation workmanship. This ensures your MacBook maintains its perfect appearance and structural integrity."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
                  <Badge className="bg-white/20 text-white text-xs sm:text-sm">Glass Strip Experts</Badge>
                  <Badge className="bg-white/20 text-white text-xs sm:text-sm">Starting ₹3999</Badge>
                  <Badge className="bg-white/20 text-white text-xs sm:text-sm">Cable Protection</Badge>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  MacBook Glass Bezel<br />
                  <span className="text-blue-200">Replacement Service</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
                  Professional MacBook glass bezel replacement service. We repair the cracked or damaged glass strip 
                  at the bottom of your MacBook screen that displays "MacBook Pro" or "MacBook Air" text. Expert 
                  replacement with genuine glass parts and precise installation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                  <a
                    href={`tel:+91${CONTACT_INFO.phone1}`}
                    className="flex items-center justify-center space-x-2 sm:space-x-3 bg-white text-primary px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg hover:bg-white/90 transition-colors"
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Call: </span>
                    <span>{CONTACT_INFO.phone1}</span>
                  </a>
                  <a
                    href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20bezel%20replacement`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 sm:space-x-3 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <Maximize className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mx-auto mb-1 sm:mb-2" />
                    <p className="text-xs sm:text-sm font-semibold leading-tight">Perfect Fit</p>
                    <p className="text-xs opacity-90">Guarantee</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mx-auto mb-1 sm:mb-2" />
                    <p className="text-xs sm:text-sm font-semibold leading-tight">3 Months</p>
                    <p className="text-xs opacity-90">Warranty</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mx-auto mb-1 sm:mb-2" />
                    <p className="text-xs sm:text-sm font-semibold leading-tight">OEM Grade</p>
                    <p className="text-xs opacity-90">Quality</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mx-auto mb-1 sm:mb-2" />
                    <p className="text-xs sm:text-sm font-semibold leading-tight">4-6 Hours</p>
                    <p className="text-xs opacity-90">Service</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <Maximize className="h-16 w-16 mx-auto mb-4 text-blue-200" />
                    <h3 className="text-2xl font-bold mb-2">Get Expert Assessment</h3>
                    <p className="opacity-90">Free diagnosis • Precision aluminum work</p>
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

      {/* MacBook Models Support */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MacBook Bezel Replacement for All Models
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional aluminum frame replacement service for every MacBook model from 2010-2024, 
              including the latest M4 MacBook Pro and MacBook Air models
            </p>
          </div>

          <Tabs defaultValue={macBookBezelModels[0].category} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8 h-auto">
              {macBookBezelModels.map((category, index) => (
                <TabsTrigger 
                  key={category.category} 
                  value={category.category}
                  className="text-xs lg:text-sm whitespace-normal h-auto py-3 px-2"
                >
                  {category.category.split(' (')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {macBookBezelModels.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.models.map((model, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Laptop className="h-5 w-5 text-primary" />
                              <span className="text-sm text-muted-foreground">{model.model}</span>
                            </div>
                            <h3 className="text-foreground font-semibold">{model.name}</h3>
                          </div>
                          <Badge 
                            variant={
                              model.complexity === 'Expert' ? 'destructive' :
                              model.complexity === 'Advanced' ? 'default' :
                              model.complexity === 'Moderate' ? 'secondary' : 'outline'
                            }
                            className="text-xs"
                          >
                            {model.complexity}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2 text-sm">
                            {model.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <Button 
                            className="w-full bg-primary hover:bg-primary/90" 
                            onClick={() => {
                              setSelectedModel(model.name);
                              handleBookService();
                            }}
                          >
                            <Calendar className="h-4 w-4 mr-2" />
                            Get Quote
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

      {/* Comprehensive Service Information */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Professional MacBook Glass Bezel Replacement - Restoring Your Screen's Identity
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The MacBook glass bezel is the thin glass strip at the bottom of your screen displaying "MacBook Pro" or "MacBook Air" text with the Apple logo. This delicate component often cracks from closing the laptop with objects on the keyboard or minor impacts. Our specialized replacement service restores this critical aesthetic element affordably.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Award className="h-6 w-6 mr-3 text-blue-600" />
                    Understanding MacBook Glass Bezel Construction
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The MacBook glass bezel is a thin, delicate glass strip that sits at the bottom of your display assembly. Understanding its construction helps explain why it's vulnerable and why professional replacement is recommended:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Ultra-Thin Glass:</strong> Only 2-3mm thick making it extremely vulnerable to pressure and impact</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Printed Text/Logo:</strong> MacBook Pro/Air text and Apple logo are permanently printed onto the glass</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Adhesive Mounting:</strong> Secured with specialized 4mm double-sided tape around perimeter</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Cable Proximity:</strong> Thin ribbon cables run directly beneath, requiring expert handling</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Wrench className="h-6 w-6 mr-3 text-purple-600" />
                    Advanced Installation Techniques
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bezel replacement requires specialized expertise to avoid damage to the delicate display assembly. Our technicians employ advanced techniques:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Display Protection Protocol:</strong> Complete screen isolation during frame replacement process</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Precision Adhesive Application:</strong> Professional-grade bonding agents for permanent installation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Thermal Considerations:</strong> Proper heat management during installation process</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Star className="h-6 w-6 mr-3 text-yellow-600" />
                    Color Matching Excellence
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Perfect color coordination is crucial for maintaining your MacBook's premium appearance. Our color matching process ensures seamless integration:
                  </p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-foreground mb-2">Available Colors:</p>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Space Gray (All generations)</li>
                          <li>• Silver (Classic finish)</li>
                          <li>• Gold (MacBook Air/12")</li>
                          <li>• Rose Gold (Special editions)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-2">Finish Quality:</p>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Anodized aluminum</li>
                          <li>• Scratch-resistant coating</li>
                          <li>• Anti-fingerprint treatment</li>
                          <li>• UV-stable coloring</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Clock className="h-6 w-6 mr-3 text-orange-600" />
                    Professional Service Timeline
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our efficient workflow ensures minimal downtime while maintaining the highest quality standards:
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full p-2 text-xs font-bold min-w-[1.5rem] h-6 flex items-center justify-center">1</div>
                      <div>
                        <p className="font-medium text-foreground">Assessment & Disassembly (1-2 hours)</p>
                        <p className="text-muted-foreground">Careful evaluation and professional screen removal</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <div className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full p-2 text-xs font-bold min-w-[1.5rem] h-6 flex items-center justify-center">2</div>
                      <div>
                        <p className="font-medium text-foreground">Precision Installation (2-3 hours)</p>
                        <p className="text-muted-foreground">Professional bezel replacement with exact alignment</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full p-2 text-xs font-bold min-w-[1.5rem] h-6 flex items-center justify-center">3</div>
                      <div>
                        <p className="font-medium text-foreground">Quality Testing (1 hour)</p>
                        <p className="text-muted-foreground">Comprehensive inspection and final adjustments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Signs Section */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-8 border border-orange-200 dark:border-orange-800">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-orange-600" />
                Signs Your MacBook Bezel Needs Professional Replacement
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Don't let bezel damage compromise your MacBook's structural integrity and aesthetic appeal. These warning signs indicate when professional bezel replacement is necessary:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {bezelIssues.slice(0, 4).map((issue, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full p-1">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{issue.issue}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{issue.description}</p>
                      <p className="text-xs text-red-600 dark:text-red-400 font-medium">{issue.urgency}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
                <p className="text-blue-700 dark:text-blue-300 font-medium">
                  💡 Professional Assessment: Free diagnosis to determine if repair or replacement is the best solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bezel Issues Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common MacBook Bezel Issues We Repair
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional diagnosis and repair for all types of aluminum frame damage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {bezelIssues.map((issue, index) => (
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

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our MacBook Bezel Replacement Service?
            </h2>
            <p className="text-xl text-muted-foreground">
              Delhi NCR's most trusted aluminum frame restoration specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      {/* Repair Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Professional Bezel Replacement Process
            </h2>
            <p className="text-xl text-muted-foreground">
              7-step precision process ensuring perfect aluminum frame restoration
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Common MacBook Bezel Searches Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <Search className="h-3 w-3 sm:h-4 sm:w-4" />
              Most Searched Bezel Issues
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Common MacBook Bezel Search Terms</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Popular MacBook bezel replacement searches from customers across Delhi NCR
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                "MacBook glass bezel replacement Delhi",
                "MacBook Pro bottom glass strip repair",
                "MacBook Air aluminum frame replacement",
                "Cracked MacBook bezel fix Noida",
                "MacBook screen border replacement cost",
                "MacBook Pro text glass replacement",
                "Broken MacBook bezel repair Delhi NCR",
                "MacBook aluminum frame restoration",
                "MacBook Pro logo glass replacement",
                "Damaged MacBook bezel strip repair",
                "MacBook Air frame assembly replacement",
                "MacBook glass strip adhesive repair",
                "MacBook bezel replacement near me",
                "Professional MacBook frame repair",
                "MacBook aluminum bezel restoration"
              ].map((search, index) => (
                <div 
                  key={index} 
                  className="group bg-gray-50 hover:bg-primary/5 p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-xs">{index + 1}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 group-hover:text-primary transition-colors leading-relaxed">
                      {search}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 sm:p-6 md:p-8 border border-primary/20">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Need MacBook Bezel Replacement?</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed px-2">
                  Cracked glass strip affecting your MacBook's appearance? Our bezel specialists restore aluminum frame excellence with precision engineering and perfect color matching.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:items-center sm:gap-4 max-w-md mx-auto">
                  <a
                    href={`tel:+91${CONTACT_INFO.phone1}`}
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-colors text-sm sm:text-base"
                  >
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Call for Assessment
                  </a>
                  <a
                    href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20bezel%20replacement`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition-colors text-sm sm:text-base"
                  >
                    <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    WhatsApp Expert
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Everything you need to know about MacBook bezel replacement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="font-bold text-foreground mb-3 text-sm sm:text-base leading-tight">{faq.question}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
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
              Ready to Restore Your MacBook's Aluminum Excellence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get your MacBook bezel replaced today with precision-engineered aluminum frames and perfect color matching
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
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20bezel%20replacement`}
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

      {/* Service Booking Modal */}
      <ServiceBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceName={selectedModel || "MacBook Bezel Replacement"}
      />
    </div>
  );
}