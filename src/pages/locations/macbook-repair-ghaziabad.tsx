import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Shield, Phone, Star, Monitor, Battery, Keyboard, Cpu, Wrench, HardDrive } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function MacBookRepairGhaziabad() {
  useEffect(() => {
    document.title = "MacBook Repair Ghaziabad Vaishali Indirapuram - Apple MacBook Pro Air Screen Battery Repair Near Me | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Best MacBook repair Ghaziabad Vaishali Indirapuram. Apple MacBook Pro Air screen battery keyboard logic board repair Crossings Republik. Same day service doorstep pickup delivery. Call 9211720790");
    }
  }, []);

  const ghaziabadAreas = [
    "Vaishali", "Indirapuram", "Raj Nagar", "Kaushambi", "Shipra Mall", "Crossings Republik",
    "Loni", "Sahibabad", "Vijay Nagar", "Govindpuram", "Nehru Nagar", "Mohan Nagar",
    "Ghanta Ghar", "Raj Nagar Extension", "Nyay Khand", "Ahinsa Khand", "Shakti Khand",
    "Vasundhara", "Maliwara", "Ghantaghar", "Shalimar Garden", "Shastri Nagar",
    "Lal Kuan", "Railway Road", "GT Road", "NH-24", "Hindon Nagar", "Rajinder Nagar",
    "Pratap Vihar", "Shakti Khand 1", "Shakti Khand 2", "Shakti Khand 3", "Shakti Khand 4",
    "Nyay Khand 1", "Nyay Khand 2", "Ahinsa Khand 1", "Ahinsa Khand 2", "Indira Nagar",
    "Sanjay Nagar", "Kavi Nagar", "Dilshad Colony", "Seemapuri Border", "Anand Vihar Border"
  ];

  const macbookModels = [
    {
      category: "MacBook Air (M3, M2, M1, Intel)",
      models: "MacBook Air 13-inch M3 2024, MacBook Air 15-inch M3 2024, MacBook Air M2 2022, MacBook Air M1 2020, MacBook Air Intel 2017-2020",
      commonIssues: "Screen cracking, battery swelling, keyboard sticking, charging port damage",
      icon: Monitor
    },
    {
      category: "MacBook Pro (M3, M2, M1, Intel)",
      models: "MacBook Pro 14-inch M3 2024, MacBook Pro 16-inch M3 2024, MacBook Pro M2 2022-2023, MacBook Pro M1 2020-2021, MacBook Pro Intel 2016-2020",
      commonIssues: "Touch Bar malfunction, overheating, speaker problems, logic board failure",
      icon: Cpu
    },
    {
      category: "MacBook Pro Retina Display",
      models: "MacBook Pro 13-inch Retina, MacBook Pro 15-inch Retina, MacBook Pro 16-inch Retina all generations",
      commonIssues: "Retina display problems, GPU failure, keyboard butterfly switch issues",
      icon: Keyboard
    },
    {
      category: "Vintage MacBook Models",
      models: "MacBook Pro 2013-2015, MacBook Air 2013-2017, MacBook 12-inch 2015-2017",
      commonIssues: "Battery degradation, SSD upgrade needs, RAM expansion requirements",
      icon: Battery
    }
  ];

  const repairServices = [
    {
      title: "MacBook Screen Replacement",
      icon: Monitor,
      description: "Original Apple Retina display replacement for all MacBook models in Ghaziabad with color accuracy guarantee",
      warranty: "6 months"
    },
    {
      title: "MacBook Battery Replacement", 
      icon: Battery,
      description: "Genuine Apple battery replacement with cycle count reset for extended MacBook performance",
      warranty: "1 year"
    },
    {
      title: "MacBook Keyboard Repair",
      icon: Keyboard, 
      description: "Complete keyboard mechanism repair including butterfly and scissor switch replacement",
      warranty: "6 months"
    },
    {
      title: "MacBook Logic Board Repair",
      icon: Cpu,
      description: "Component-level logic board repair and microsoldering for liquid damage and power issues",
      warranty: "3 months"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">Ghaziabad's #1 MacBook Repair Service Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MacBook Repair Ghaziabad Vaishali Indirapuram - Apple MacBook Pro Air Near Me
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Ghaziabad Vaishali Indirapuram's most trusted MacBook repair service center. Apple MacBook Pro Air screen battery keyboard logic board repair Crossings Republik. Same day service with genuine Apple parts doorstep pickup delivery available.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20repair%20in%20Ghaziabad`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MacBook Repair Service Coverage in Ghaziabad Vaishali Indirapuram
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional MacBook repair services across all areas in Ghaziabad with doorstep pickup delivery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {ghaziabadAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our MacBook Repair Service in Ghaziabad Vaishali Indirapuram?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Certified Apple technicians with 12+ years experience serving Ghaziabad customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Complete Ghaziabad Coverage",
                description: "MacBook repair service across Vaishali Indirapuram Crossings"
              },
              {
                icon: Clock,
                title: "Same Day Service",
                description: "Most MacBook repairs completed within 4-6 hours"
              },
              {
                icon: Shield,
                title: "Genuine Apple Parts",
                description: "Only original Apple components with extended warranty"
              },
              {
                icon: CheckCircle,
                title: "Free Diagnosis",
                description: "Complimentary MacBook diagnosis and pickup delivery"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MacBook Models */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All MacBook Models Repair Service in Ghaziabad Vaishali Indirapuram
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert repair services for all MacBook generations with genuine Apple parts and comprehensive warranty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {macbookModels.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="pb-3">
                  <model.icon className="h-12 w-12 text-blue-600 mb-3" />
                  <CardTitle className="text-lg">{model.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-blue-600 mb-2">{model.models}</p>
                  <p className="text-muted-foreground text-sm mb-4">{model.commonIssues}</p>
                  <div className="flex items-center space-x-2 text-sm">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-green-600 font-semibold">Warranty included</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional MacBook Repair Services Ghaziabad Vaishali Indirapuram
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete MacBook repair solutions with genuine Apple parts and certified technicians
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-green-600 font-semibold">{service.warranty} warranty</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive MacBook Information */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Complete MacBook Repair Guide for Ghaziabad Vaishali Indirapuram Customers
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* MacBook Issues We Fix */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Common MacBook Issues We Fix in Ghaziabad Vaishali Indirapuram</h3>
                <div className="space-y-3">
                  {[
                    "MacBook screen black or broken Retina display replacement Ghaziabad",
                    "MacBook battery swelling or not charging issues Vaishali",
                    "MacBook keyboard keys not working butterfly mechanism Indirapuram", 
                    "MacBook overheating and fan noise problems thermal paste replacement",
                    "MacBook liquid damage and water spill repair component cleaning",
                    "MacBook not turning on or boot failure logic board issues",
                    "MacBook Touch Bar not responding or malfunctioning repair",
                    "MacBook SSD upgrade and data recovery service Ghaziabad",
                    "MacBook speaker crackling or no audio output problems",
                    "MacBook trackpad not clicking or gesture issues repair",
                    "MacBook hinge broken or screen wobbling replacement service",
                    "MacBook charging port damaged or MagSafe connector issues",
                    "MacBook performance slow or macOS optimization service",
                    "MacBook graphics card failure and GPU replacement Ghaziabad"
                  ].map((issue, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Repair Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Our MacBook Repair Process in Ghaziabad Vaishali Indirapuram</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-500" />
                      Step 1: Contact Us
                    </h4>
                    <p className="text-sm text-muted-foreground">Call 9211720790 or WhatsApp for MacBook repair in Ghaziabad Vaishali Indirapuram. Free consultation and initial diagnosis over phone.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      Step 2: Free Pickup
                    </h4>
                    <p className="text-sm text-muted-foreground">Free doorstep pickup from any location in Ghaziabad Vaishali Indirapuram including Crossings Republik areas.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Wrench className="h-4 w-4 mr-2 text-blue-500" />
                      Step 3: Expert Diagnosis
                    </h4>
                    <p className="text-sm text-muted-foreground">Comprehensive MacBook diagnosis using Apple diagnostic tools. We identify all hardware and software issues.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-500" />
                      Step 4: Same Day Repair
                    </h4>
                    <p className="text-sm text-muted-foreground">Most MacBook repairs completed same day with genuine Apple parts. Express service available for urgent repairs.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-blue-500" />
                      Step 5: Delivery & Warranty
                    </h4>
                    <p className="text-sm text-muted-foreground">Free delivery to your location in Ghaziabad Vaishali Indirapuram with extended warranty and follow-up support guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area-Specific Service Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              MacBook Repair Service Areas Across Ghaziabad Vaishali Indirapuram
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Vaishali MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Premium MacBook repair services in Vaishali sector for residential customers. Home service available with priority pickup delivery for all MacBook models with advanced diagnostic tools.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Vaishali Sector 1-6</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Residential Complexes</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Commercial Areas</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Indirapuram MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Expert MacBook repair services in Indirapuram covering all habitats and sectors. Business MacBook repair with corporate packages and priority service for professionals.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Indirapuram Habitats</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Corporate Offices</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Shopping Centers</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Crossings Republik MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive MacBook repair services in Crossings Republik township. Modern service approach with latest diagnostic equipment and genuine Apple parts inventory.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Republic Towers</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Township Areas</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Commercial Hub</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Raj Nagar MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Reliable MacBook repair services in Raj Nagar and extension areas. Student MacBook repair packages with affordable service options and flexible payment terms.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Raj Nagar Extension</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Educational Institutions</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Student Areas</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Kaushambi MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Quality MacBook repair services in Kaushambi metro area. Metro connectivity advantage with easy access for MacBook pickup delivery and emergency repair services.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Kaushambi Metro</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Transit Areas</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Commercial Centers</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Shipra Mall Area MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Specialized MacBook repair services near Shipra Mall covering surrounding residential and commercial areas. Express service available for shopping center visitors.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Shipra Mall</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Shopping Areas</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Entertainment Hub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Rich FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions - MacBook Repair Ghaziabad Vaishali Indirapuram
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What MacBook repair services are available in Ghaziabad Vaishali Indirapuram?",
                  answer: "We provide comprehensive MacBook repair services in Ghaziabad Vaishali Indirapuram for all Apple MacBook models including MacBook Air M3 M2 M1, MacBook Pro 14-inch 16-inch, and vintage MacBook models. Our services include Retina screen replacement, battery replacement, keyboard repair, logic board repair, and data recovery across Crossings Republik areas."
                },
                {
                  question: "Which is the best MacBook repair service center in Ghaziabad Vaishali Indirapuram?",
                  answer: "Maclap IT Care is the most trusted MacBook repair service center in Ghaziabad Vaishali Indirapuram with 4.9/5 customer rating. We serve Vaishali, Indirapuram, Crossings Republik, Kaushambi areas with free pickup delivery, same-day service, and genuine Apple parts with extended warranty coverage."
                },
                {
                  question: "How long does MacBook screen replacement take in Ghaziabad Vaishali Indirapuram?",
                  answer: "MacBook screen replacement in Ghaziabad Vaishali Indirapuram typically takes 3-5 hours for Retina displays. We repair MacBook Air and MacBook Pro screens with original Apple LCD panels in Vaishali Indirapuram Crossings areas. All screen replacements come with 6-month warranty and same-day service guarantee."
                },
                {
                  question: "Do you repair MacBook logic board in Ghaziabad Vaishali Indirapuram?",
                  answer: "Yes, we specialize in MacBook logic board repair in Ghaziabad Vaishali Indirapuram including component-level microsoldering for liquid damage, power issues, and GPU failure. Our logic board repair services cover all MacBook models with advanced diagnostic tools and genuine Apple components replacement."
                },
                {
                  question: "Is MacBook doorstep pickup delivery available in all Ghaziabad areas?",
                  answer: "Yes, we provide free MacBook doorstep pickup and delivery service across all Ghaziabad areas including Vaishali, Indirapuram, Crossings Republik, Kaushambi, Raj Nagar, and surrounding areas. Our technicians will collect and deliver your MacBook with full insurance coverage."
                },
                {
                  question: "Do you provide MacBook data recovery service in Ghaziabad Vaishali Indirapuram?",
                  answer: "Yes, we offer professional MacBook data recovery service in Ghaziabad Vaishali Indirapuram for corrupted SSD, hard drive failure, and liquid damage scenarios. Our data recovery success rate is 98% with clean room facilities and no data, no charge policy for all MacBook models."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-3 text-blue-600">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Maclap IT Care for MacBook Repair in Ghaziabad Vaishali Indirapuram?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Complete Ghaziabad Coverage",
                description: "MacBook repair service across all Ghaziabad areas"
              },
              {
                icon: Star,
                title: "4.9/5 Customer Rating",
                description: "Trusted by 3500+ satisfied Ghaziabad customers"
              },
              {
                icon: Clock,
                title: "Same-Day Service",
                description: "Most MacBook repairs completed within hours"
              },
              {
                icon: Shield,
                title: "Genuine Apple Parts",
                description: "Original Apple components with extended warranty"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your MacBook Repaired in Ghaziabad Vaishali Indirapuram Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional MacBook repair service with free pickup delivery across all Ghaziabad locations
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`tel:+91${CONTACT_INFO.phone1}`}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: {CONTACT_INFO.phone1}
            </a>
            <a
              href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20repair%20in%20Ghaziabad`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              WhatsApp Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}