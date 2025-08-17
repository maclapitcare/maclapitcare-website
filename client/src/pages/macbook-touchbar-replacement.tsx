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
  MessageCircle, MapPin, Wind, Calendar, Settings, TouchpadIcon as Touch
} from "lucide-react";

import ServiceBookingModal from "@/components/forms/service-booking-modal";
import { CONTACT_INFO } from "@/lib/constants";

export default function MacBookTouchBarReplacement() {
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
        device: "MacBook Touch Bar Replacement",
        service: "Touch Bar Replacement",
        message: "Touch Bar replacement request from hero form",
        _subject: "New MacBook Touch Bar Replacement Request - MacLap IT Care",
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
    document.title = "MacBook Touch Bar Replacement Delhi NCR | Professional Touch Bar Repair | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook Touch Bar replacement Delhi NCR. Expert repair for unresponsive, flickering, or damaged Touch Bar. All MacBook Pro models 2016-2019. Free diagnosis. Call 9211720790");
    }
  }, []);

  const touchBarModels = [
    {
      category: "MacBook Pro 13\" Touch Bar Models",
      models: [
        { 
          name: "MacBook Pro 13\" 2020 (Intel)", 
          model: "A2251/A2289", 
          features: ["Magic Keyboard integration", "Advanced haptic feedback", "10th Gen Intel processors", "Thunderbolt 3 ports"],
          complexity: "Advanced",
          commonIssues: ["Touch Bar freezing", "Unresponsive strips", "Display artifacts", "Siri button failure"]
        },
        { 
          name: "MacBook Pro 13\" 2019", 
          model: "A2159", 
          features: ["8th Gen Intel processors", "True Tone display", "Touch ID integration", "Butterfly keyboard"],
          complexity: "Advanced",
          commonIssues: ["Black Touch Bar", "Partial responsiveness", "Heat-related failures", "Software glitches"]
        },
        { 
          name: "MacBook Pro 13\" 2018", 
          model: "A1989", 
          features: ["8th Gen Intel processors", "True Tone display", "Improved butterfly keyboard", "T2 Security Chip"],
          complexity: "Expert",
          commonIssues: ["Touch Bar cable issues", "Display corruption", "Function key problems", "System integration errors"]
        },
        { 
          name: "MacBook Pro 13\" 2017", 
          model: "A1706", 
          features: ["7th Gen Intel processors", "Kaby Lake architecture", "Thunderbolt 3", "Improved Touch Bar"],
          complexity: "Expert",
          commonIssues: ["Flexgate-related issues", "Touch Bar separation", "Backlight problems", "Connectivity failures"]
        },
        { 
          name: "MacBook Pro 13\" 2016", 
          model: "A1706", 
          features: ["6th Gen Intel processors", "First-generation Touch Bar", "USB-C only design", "Butterfly keyboard"],
          complexity: "Expert",
          commonIssues: ["Pioneer model issues", "Cable degradation", "Touch Bar detachment", "Hardware incompatibilities"]
        },
      ]
    },
    {
      category: "MacBook Pro 15\" Touch Bar Models",
      models: [
        { 
          name: "MacBook Pro 15\" 2019", 
          model: "A1990", 
          features: ["9th Gen Intel processors", "Radeon Pro graphics", "Advanced thermal design", "Six-speaker system"],
          complexity: "Expert",
          commonIssues: ["Graphics-related Touch Bar issues", "Thermal throttling effects", "Complex disassembly", "Multiple component integration"]
        },
        { 
          name: "MacBook Pro 15\" 2018", 
          model: "A1990", 
          features: ["8th Gen Intel processors", "Radeon Pro 555X/560X", "True Tone display", "T2 Security Chip"],
          complexity: "Expert",
          commonIssues: ["Dedicated GPU interference", "Touch Bar artifacts", "System-wide freezing", "Hardware acceleration problems"]
        },
        { 
          name: "MacBook Pro 15\" 2017", 
          model: "A1707", 
          features: ["7th Gen Intel processors", "Radeon Pro graphics", "Kaby Lake architecture", "Touch Bar refinements"],
          complexity: "Expert",
          commonIssues: ["GPU-Touch Bar conflicts", "Display cable stress", "Touch Bar flickering", "Performance-related failures"]
        },
        { 
          name: "MacBook Pro 15\" 2016", 
          model: "A1707", 
          features: ["6th Gen Intel processors", "First 15\" Touch Bar", "Radeon Pro 450/455/460", "Revolutionary design"],
          complexity: "Expert",
          commonIssues: ["First-gen reliability issues", "Touch Bar calibration", "Hardware-software integration", "Design-related failures"]
        },
      ]
    },
    {
      category: "MacBook Pro 16\" Touch Bar Model",
      models: [
        { 
          name: "MacBook Pro 16\" 2019-2020", 
          model: "A2141", 
          features: ["9th Gen Intel processors", "Advanced thermal architecture", "Radeon Pro 5000M series", "Improved keyboard design"],
          complexity: "Expert",
          commonIssues: ["Advanced thermal management", "Complex internal layout", "Multiple display systems", "Professional-grade components"],
          specialNotes: "Most sophisticated Touch Bar implementation with advanced integration"
        },
      ]
    }
  ];

  const touchBarIssues = [
    { 
      issue: "Completely Black Touch Bar", 
      description: "Touch Bar display shows no content but MacBook functions normally",
      severity: "High",
      urgency: "Complete functionality loss",
      techDetails: "Usually indicates LCD panel failure or display controller malfunction"
    },
    { 
      issue: "Unresponsive Touch Bar", 
      description: "Display shows content but doesn't respond to touch inputs",
      severity: "High",
      urgency: "Touch sensitivity failure",
      techDetails: "Touch sensor layer damage or digitizer controller issues"
    },
    { 
      issue: "Flickering or Corrupted Display", 
      description: "Touch Bar shows distorted graphics, wrong colors, or intermittent display",
      severity: "High",
      urgency: "Display system degradation",
      techDetails: "LCD panel degradation or display cable connectivity problems"
    },
    { 
      issue: "Partial Touch Bar Response", 
      description: "Only certain areas of Touch Bar respond to touch",
      severity: "Medium",
      urgency: "Partial functionality loss",
      techDetails: "Localized touch sensor damage or partial digitizer failure"
    },
    { 
      issue: "Touch Bar Freezing", 
      description: "Touch Bar display freezes and doesn't update with app changes",
      severity: "Medium",
      urgency: "Software integration failure",
      techDetails: "T2 chip communication issues or system-level software conflicts"
    },
    { 
      issue: "Wrong Functions Displayed", 
      description: "Touch Bar shows incorrect buttons or functions for current app",
      severity: "Medium",
      urgency: "Context awareness failure",
      techDetails: "Application integration problems or Touch Bar software corruption"
    },
    { 
      issue: "Touch ID Not Working", 
      description: "Touch ID sensor within Touch Bar assembly not functioning",
      severity: "High",
      urgency: "Security feature compromise",
      techDetails: "Touch ID sensor failure or secure enclave communication issues"
    },
    { 
      issue: "Physical Damage to Touch Bar", 
      description: "Cracks, scratches, or physical separation from MacBook body",
      severity: "High",
      urgency: "Structural integrity compromised",
      techDetails: "Impact damage requiring complete Touch Bar assembly replacement"
    }
  ];

  const repairProcess = [
    { 
      step: 1, 
      title: "Advanced Diagnosis", 
      description: "Comprehensive Touch Bar system analysis and testing", 
      time: "30 mins",
      details: "We test Touch Bar display, touch sensitivity, Touch ID, and system integration using specialized diagnostic tools"
    },
    { 
      step: 2, 
      title: "Compatibility Verification", 
      description: "Exact model identification and parts compatibility check", 
      time: "15 mins",
      details: "Touch Bar components vary significantly between models and years - precise identification is critical"
    },
    { 
      step: 3, 
      title: "System Preparation", 
      description: "Complete system backup and component isolation", 
      time: "45 mins",
      details: "Touch Bar is integrated with security systems - careful preparation prevents data loss"
    },
    { 
      step: 4, 
      title: "Precision Disassembly", 
      description: "Expert removal of top case and Touch Bar assembly", 
      time: "90 mins",
      details: "Touch Bar replacement requires complete top case removal - extremely delicate process"
    },
    { 
      step: 5, 
      title: "Touch Bar Installation", 
      description: "Professional installation of new Touch Bar assembly", 
      time: "60 mins",
      details: "New Touch Bar carefully installed with proper cable routing and adhesive application"
    },
    { 
      step: 6, 
      title: "System Integration", 
      description: "Touch Bar calibration and software integration", 
      time: "45 mins",
      details: "Touch Bar requires system-level calibration and Touch ID re-enrollment if applicable"
    },
    { 
      step: 7, 
      title: "Comprehensive Testing", 
      description: "Complete Touch Bar functionality verification", 
      time: "30 mins",
      details: "Testing all touch functions, displays, Touch ID, and app integration across multiple applications"
    },
    { 
      step: 8, 
      title: "Final Validation", 
      description: "Quality assurance and warranty documentation", 
      time: "15 mins",
      details: "Final inspection ensuring perfect Touch Bar operation and system stability"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Touch Bar Specialists",
      description: "Deep expertise in Touch Bar technology and integration complexities"
    },
    {
      icon: Wrench,
      title: "Advanced Tools",
      description: "Specialized equipment for Touch Bar diagnosis, removal, and installation"
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Secure handling of Touch ID and T2 chip components during replacement"
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "Complete software calibration and Touch ID re-enrollment service"
    },
    {
      icon: Clock,
      title: "Expert Service",
      description: "Professional Touch Bar replacement typically completed within 6-8 hours"
    },
    {
      icon: Star,
      title: "Quality Guarantee",
      description: "Original Touch Bar assemblies with full functionality restoration"
    }
  ];

  const faqs = [
    {
      question: "What is the MacBook Touch Bar and why might it need replacement?",
      answer: "The Touch Bar is a dynamic OLED strip that replaced function keys on MacBook Pro models from 2016-2019. It displays contextual controls and integrates Touch ID. It may need replacement due to display failure, touch unresponsiveness, physical damage, or system integration issues that can't be resolved through software."
    },
    {
      question: "Is Touch Bar replacement more complex than regular screen replacement?",
      answer: "Yes, Touch Bar replacement is significantly more complex. It requires complete top case removal, involves security components like Touch ID and T2 chip integration, and demands specialized calibration. The process requires expert-level technical skills and advanced diagnostic equipment."
    },
    {
      question: "Can you replace just the Touch Bar or is the entire top case needed?",
      answer: "In most cases, the entire top case assembly needs replacement because the Touch Bar is integrated into the keyboard assembly. This includes the keyboard, Touch Bar, Touch ID, speakers, and other components. Attempting to replace only the Touch Bar often results in poor fit and functionality issues."
    },
    {
      question: "Will my Touch ID work after Touch Bar replacement?",
      answer: "Touch ID functionality can be restored, but it requires complete re-enrollment of all fingerprints after replacement. The Touch ID sensor is part of the Touch Bar assembly, and the security pairing with the T2 chip needs to be re-established during our calibration process."
    },
    {
      question: "How long does MacBook Touch Bar replacement take?",
      answer: "Professional Touch Bar replacement typically takes 6-8 hours due to the complexity of the procedure. This includes disassembly, installation, system integration, calibration, and comprehensive testing to ensure all Touch Bar functions work perfectly."
    },
    {
      question: "Do you use original Apple Touch Bar assemblies?",
      answer: "We use high-quality OEM Touch Bar assemblies that match Apple's specifications for display quality, touch sensitivity, and system integration. These components provide the same functionality and reliability as original Apple parts."
    },
    {
      question: "What happens to my data during Touch Bar replacement?",
      answer: "Your data remains safe during Touch Bar replacement. However, Touch ID fingerprints will need to be re-enrolled after the service since the Touch ID sensor is replaced. We recommend backing up your system before service as a precautionary measure."
    },
    {
      question: "Can Touch Bar issues be fixed with software updates instead of replacement?",
      answer: "Some Touch Bar issues are software-related and can be resolved through system updates, driver reinstallation, or SMC/PRAM resets. We always perform comprehensive software troubleshooting first. Hardware replacement is only recommended when physical damage or component failure is confirmed."
    },
    {
      question: "Is Touch Bar replacement worth it for older MacBook Pro models?",
      answer: "For 2016-2019 MacBook Pro models in good overall condition, Touch Bar replacement can be worthwhile as it restores full functionality and maintains the laptop's intended user experience. We provide cost-benefit analysis based on your specific model and overall system condition."
    },
    {
      question: "What warranty do you provide on Touch Bar replacement?",
      answer: "We provide a comprehensive 3-month warranty on Touch Bar replacement, covering the Touch Bar assembly, Touch ID functionality, and our installation workmanship. This ensures your MacBook's Touch Bar system works reliably after our service."
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
                  <Badge className="bg-white/20 text-white">Touch Bar Experts</Badge>
                  <Badge className="bg-white/20 text-white">Advanced Integration</Badge>
                  <Badge className="bg-white/20 text-white">Touch ID Restoration</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  MacBook Touch Bar<br />
                  <span className="text-blue-200">Replacement Service</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed">
                  Professional MacBook Touch Bar replacement service for unresponsive, flickering, or damaged 
                  Touch Bar displays. Expert installation with complete system integration, Touch ID restoration, 
                  and advanced calibration for perfect functionality.
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
                    href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20Touch%20Bar%20replacement`}
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
                    <Touch className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-semibold">Touch ID</p>
                    <p className="text-xs opacity-90">Restoration</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <Shield className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-semibold">3 Months</p>
                    <p className="text-xs opacity-90">Warranty</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <Award className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-semibold">OEM Grade</p>
                    <p className="text-xs opacity-90">Quality</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <Clock className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-semibold">6-8 Hours</p>
                    <p className="text-xs opacity-90">Expert Service</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <Touch className="h-16 w-16 mx-auto mb-4 text-blue-200" />
                    <h3 className="text-2xl font-bold mb-2">Get Expert Diagnosis</h3>
                    <p className="opacity-90">Free assessment • Touch Bar specialists</p>
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

      {/* MacBook Touch Bar Models */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MacBook Touch Bar Replacement for All Models (2016-2019)
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional Touch Bar replacement service for all MacBook Pro models with Touch Bar technology, 
              including complete system integration and Touch ID restoration
            </p>
          </div>

          <Tabs defaultValue={touchBarModels[0].category} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 lg:grid-cols-3 mb-8 h-auto">
              {touchBarModels.map((category) => (
                <TabsTrigger 
                  key={category.category} 
                  value={category.category}
                  className="text-sm whitespace-normal h-auto py-3 px-2"
                >
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {touchBarModels.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.models.map((model, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Laptop className="h-5 w-5 text-primary" />
                              <span className="text-sm text-muted-foreground">{model.model}</span>
                            </div>
                            <h3 className="text-foreground font-semibold mb-2">{model.name}</h3>
                            {'specialNotes' in model && model.specialNotes && (
                              <p className="text-xs text-blue-600 dark:text-blue-400 mb-2">{model.specialNotes}</p>
                            )}
                          </div>
                          <Badge 
                            variant={
                              model.complexity === 'Expert' ? 'destructive' :
                              model.complexity === 'Advanced' ? 'default' : 'secondary'
                            }
                            className="text-xs"
                          >
                            {model.complexity}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">Features:</h4>
                            <div className="space-y-1 text-sm">
                              {model.features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <CheckCircle className="h-3 w-3 text-green-500" />
                                  <span className="text-muted-foreground text-xs">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">Common Issues:</h4>
                            <div className="space-y-1 text-sm">
                              {model.commonIssues.map((issue, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <AlertTriangle className="h-3 w-3 text-orange-500" />
                                  <span className="text-muted-foreground text-xs">{issue}</span>
                                </div>
                              ))}
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
                            Get Diagnosis
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
                Professional MacBook Touch Bar Replacement - Advanced Technology Restoration
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The MacBook Touch Bar represents one of Apple's most sophisticated user interface innovations—a dynamic OLED display that adapts to your workflow. When it fails, it affects not just convenience but the entire user experience. Our specialized Touch Bar replacement service restores this advanced technology to perfect working condition.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Award className="h-6 w-6 mr-3 text-blue-600" />
                    Advanced OLED Technology Understanding
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    MacBook Touch Bar utilizes sophisticated OLED technology integrated with advanced touch sensors and security components. Our replacement service addresses all aspects of this complex system:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Retina OLED Display:</strong> 2170×60 resolution display with P3 wide color gamut and 500 nits brightness</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Capacitive Touch Sensors:</strong> Multi-touch capability with haptic feedback integration</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Touch ID Integration:</strong> Secure Enclave pairing with T1/T2 security chips</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>System Integration:</strong> Deep macOS integration with real-time app context awareness</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Wrench className="h-6 w-6 mr-3 text-purple-600" />
                    Expert-Level Technical Complexity
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Touch Bar replacement is among the most technically challenging MacBook repairs, requiring specialized expertise and equipment:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Complete Top Case Replacement:</strong> Touch Bar is integrated into keyboard assembly requiring full disassembly</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Security Component Handling:</strong> T2 chip and Touch ID require specialized protocols</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>System Calibration:</strong> Complex software integration and hardware validation required</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-3 text-green-600" />
                    Security and Data Protection
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Touch Bar replacement involves security-critical components that require careful handling to protect your data and system integrity:
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">🔐 Security Measures:</h4>
                      <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                        <li>• Complete data backup before service</li>
                        <li>• Secure handling of T2 chip components</li>
                        <li>• Touch ID sensor replacement protocols</li>
                        <li>• System security validation post-repair</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🔄 Re-enrollment Required:</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Touch ID fingerprints will need complete re-enrollment after replacement as the sensor is part of the Touch Bar assembly.
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
                    Touch Bar replacement requires extended service time due to the complexity of the procedure and integration requirements:
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <div className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full p-2 text-xs font-bold min-w-[1.5rem] h-6 flex items-center justify-center">1</div>
                      <div>
                        <p className="font-medium text-foreground">Diagnosis & Preparation (1-2 hours)</p>
                        <p className="text-muted-foreground">Complete system analysis and backup creation</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <div className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full p-2 text-xs font-bold min-w-[1.5rem] h-6 flex items-center justify-center">2</div>
                      <div>
                        <p className="font-medium text-foreground">Expert Replacement (4-5 hours)</p>
                        <p className="text-muted-foreground">Complete top case replacement with Touch Bar integration</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full p-2 text-xs font-bold min-w-[1.5rem] h-6 flex items-center justify-center">3</div>
                      <div>
                        <p className="font-medium text-foreground">Integration & Testing (1-2 hours)</p>
                        <p className="text-muted-foreground">System calibration and comprehensive functionality verification</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Touch Bar Issues Warning Section */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-8 border border-red-200 dark:border-red-800">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-red-600" />
                Critical Touch Bar Issues Requiring Professional Intervention
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Touch Bar problems can range from minor software glitches to complete hardware failure. Understanding the symptoms helps determine when professional replacement is necessary versus software troubleshooting:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {touchBarIssues.slice(0, 4).map((issue, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4 py-3 bg-red-50 dark:bg-red-900/20 rounded-r-lg">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-1">{issue.issue}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{issue.description}</p>
                    <p className="text-xs text-red-600 dark:text-red-400 font-medium mb-1">{issue.urgency}</p>
                    <p className="text-xs text-muted-foreground italic">{issue.techDetails}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">💡 Free Software Diagnosis</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">We always attempt software solutions first - SMC reset, PRAM reset, and system updates before recommending hardware replacement.</p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800 text-center">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">🚨 Expert Assessment</h4>
                  <p className="text-sm text-orange-600 dark:text-orange-400">Complex Touch Bar issues require expert diagnosis - call {CONTACT_INFO.phone1} for immediate professional evaluation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Touch Bar Issues Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Touch Bar Issues We Diagnose and Repair
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive diagnosis and professional repair for all Touch Bar problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {touchBarIssues.map((issue, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`rounded-full p-3 mb-4 mx-auto w-12 h-12 flex items-center justify-center ${
                    issue.severity === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{issue.issue}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{issue.description}</p>
                  <Badge variant={issue.severity === 'High' ? 'destructive' : 'secondary'} className="text-xs mb-2">
                    {issue.severity} Priority
                  </Badge>
                  <p className="text-xs text-muted-foreground italic">{issue.techDetails}</p>
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
              Why Choose Our Touch Bar Replacement Service?
            </h2>
            <p className="text-xl text-muted-foreground">
              Delhi NCR's most experienced Touch Bar specialists with advanced technical expertise
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
              Our Professional Touch Bar Replacement Process
            </h2>
            <p className="text-xl text-muted-foreground">
              8-step expert process ensuring perfect Touch Bar functionality and system integration
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about MacBook Touch Bar replacement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
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
              Ready to Restore Your MacBook Touch Bar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get your MacBook Touch Bar replaced today with expert installation and complete system integration
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
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20Touch%20Bar%20replacement`}
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
        serviceName={selectedModel || "MacBook Touch Bar Replacement"}
      />
    </div>
  );
}