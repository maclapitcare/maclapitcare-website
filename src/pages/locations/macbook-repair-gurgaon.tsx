import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Shield, Phone, Star, Monitor, Battery, Keyboard, Cpu, Wrench, HardDrive } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function MacBookRepairGurgaon() {
  useEffect(() => {
    document.title = "MacBook Repair Gurgaon Gurugram - Apple MacBook Pro Air Screen Battery Keyboard Repair Near Me | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Best MacBook repair Gurgaon Gurugram. Apple MacBook Pro Air screen battery keyboard motherboard repair DLF Cyber City Golf Course Road. Same day service doorstep pickup. Call 9211720790");
    }
  }, []);

  const gurgaonAreas = [
    "DLF Cyber City", "Golf Course Road", "MG Road", "Sector 14", "Sector 17",
    "Sector 29", "Sector 31", "Sector 32", "Sector 43", "Sector 44", "Sector 45",
    "Sector 46", "Sector 47", "Sector 48", "Sector 49", "Sector 50", "Sector 51",
    "Sector 52", "Sector 53", "Sector 54", "Sector 55", "Sector 56", "Udyog Vihar",
    "Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5", "Sohna Road",
    "NH-8", "Old Gurgaon", "New Gurgaon", "Manesar", "IMT Manesar",
    "DLF Phase 1", "DLF Phase 2", "DLF Phase 3", "DLF Phase 4", "DLF Phase 5",
    "South City 1", "South City 2", "Nirvana Country", "Palm Springs",
    "Palam Vihar", "Sushant Lok", "Ardee City", "Pioneer Park",
    "Emerald Hills", "Vatika City", "Ireo City", "M3M Woodshire"
  ];

  const macbookModels = [
    {
      category: "MacBook Air (M3, M2, M1, Intel)",
      models: "MacBook Air 13-inch M3 2024, MacBook Air 15-inch M3 2024, MacBook Air M2 2022, MacBook Air M1 2020, MacBook Air Intel 2017-2020",
      commonIssues: "Screen flickering, battery swelling, keyboard malfunctioning, charging port issues",
      icon: Monitor
    },
    {
      category: "MacBook Pro (M3, M2, M1, Intel)",
      models: "MacBook Pro 14-inch M3 2024, MacBook Pro 16-inch M3 2024, MacBook Pro M2 2022-2023, MacBook Pro M1 2020-2021, MacBook Pro Intel 2016-2020",
      commonIssues: "Touch Bar problems, thermal throttling, speaker crackling, logic board failure",
      icon: Cpu
    },
    {
      category: "MacBook Pro Retina Display",
      models: "MacBook Pro 13-inch Retina, MacBook Pro 15-inch Retina, MacBook Pro 16-inch Retina all generations",
      commonIssues: "Retina screen replacement, graphics card failure, keyboard butterfly mechanism",
      icon: Keyboard
    },
    {
      category: "Vintage MacBook Models",
      models: "MacBook Pro 2013-2015, MacBook Air 2013-2017, MacBook 12-inch 2015-2017",
      commonIssues: "Battery replacement, hard drive upgrade to SSD, RAM expansion",
      icon: Battery
    }
  ];

  const repairServices = [
    {
      title: "MacBook Screen Replacement",
      icon: Monitor,
      description: "Original Apple Retina display replacement for all MacBook models in Gurgaon with color accuracy guarantee",
      warranty: "6 months"
    },
    {
      title: "MacBook Battery Replacement", 
      icon: Battery,
      description: "Genuine Apple battery replacement with cycle count reset for extended MacBook life",
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
            <Badge className="bg-white/20 text-white mb-4">Gurgaon's #1 MacBook Repair Service Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MacBook Repair Gurgaon Gurugram - Apple MacBook Pro Air Near Me
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Gurgaon Gurugram's most trusted MacBook repair service center. Apple MacBook Pro Air screen battery keyboard logic board repair DLF Cyber City Golf Course Road. Same day service with genuine Apple parts doorstep pickup delivery available.
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
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20repair%20in%20Gurgaon`}
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
              MacBook Repair Service Coverage in Gurgaon Gurugram
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional MacBook repair services across all areas in Gurgaon Gurugram with doorstep pickup delivery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {gurgaonAreas.map((area, index) => (
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
              Why Choose Our MacBook Repair Service in Gurgaon Gurugram?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Certified Apple technicians with 12+ years experience serving Gurgaon customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Complete Gurgaon Coverage",
                description: "MacBook repair service across DLF Cyber City Golf Course Road"
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
              All MacBook Models Repair Service in Gurgaon Gurugram
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
              Professional MacBook Repair Services Gurgaon Gurugram
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
              Complete MacBook Repair Guide for Gurgaon Gurugram Customers
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* MacBook Issues We Fix */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Common MacBook Issues We Fix in Gurgaon Gurugram</h3>
                <div className="space-y-3">
                  {[
                    "MacBook screen black or broken Retina display replacement Gurgaon",
                    "MacBook battery swelling or not charging issues DLF Cyber City",
                    "MacBook keyboard keys not working butterfly mechanism Golf Course Road", 
                    "MacBook overheating and fan noise problems thermal paste replacement",
                    "MacBook liquid damage and water spill repair component cleaning",
                    "MacBook not turning on or boot failure logic board issues",
                    "MacBook Touch Bar not responding or malfunctioning repair",
                    "MacBook SSD upgrade and data recovery service Gurgaon",
                    "MacBook speaker crackling or no audio output problems",
                    "MacBook trackpad not clicking or gesture issues repair",
                    "MacBook hinge broken or screen wobbling replacement service",
                    "MacBook charging port damaged or MagSafe connector issues",
                    "MacBook performance slow or macOS optimization service",
                    "MacBook graphics card failure and GPU replacement Gurgaon"
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
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Our MacBook Repair Process in Gurgaon Gurugram</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-500" />
                      Step 1: Contact Us
                    </h4>
                    <p className="text-sm text-muted-foreground">Call 9211720790 or WhatsApp for MacBook repair in Gurgaon Gurugram. Free consultation and initial diagnosis over phone.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      Step 2: Free Pickup
                    </h4>
                    <p className="text-sm text-muted-foreground">Free doorstep pickup from any location in Gurgaon Gurugram including DLF Cyber City Golf Course Road areas.</p>
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
                    <p className="text-sm text-muted-foreground">Free delivery to your location in Gurgaon Gurugram with extended warranty and follow-up support guarantee.</p>
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
              MacBook Repair Service Areas Across Gurgaon Gurugram
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">DLF Cyber City MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Premium MacBook repair services in DLF Cyber City for corporate professionals. Express repair service with priority pickup delivery for business MacBooks and urgent repairs.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />DLF Cyber City Phase 1-3</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Corporate Offices</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Business Districts</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Golf Course Road MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Expert MacBook repair services on Golf Course Road covering luxury residential areas. Premium service with home visits available for high-end MacBook models and customized solutions.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Golf Course Extension</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Luxury Residences</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Premium Complexes</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">MG Road MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive MacBook repair services on MG Road Gurgaon. Central location with easy accessibility for all MacBook models with same-day service guarantee.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />MG Road Metro</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Commercial Hub</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Shopping Centers</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Udyog Vihar MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional MacBook repair services in Udyog Vihar industrial area. Specialized service for businesses and manufacturing companies with bulk MacBook repair packages available.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Udyog Vihar Phase 1-5</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Industrial Areas</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Corporate Parks</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">DLF Phases MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Reliable MacBook repair services across all DLF Phases in Gurgaon. Residential area service with doorstep pickup delivery and family MacBook maintenance packages.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />DLF Phase 1-5</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Residential Complexes</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Community Areas</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Sohna Road MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Quality MacBook repair services on Sohna Road covering new residential developments. Modern service approach with latest diagnostic tools and genuine Apple parts inventory.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Sohna Road Corridor</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />New Developments</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Residential Projects</div>
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
              Frequently Asked Questions - MacBook Repair Gurgaon Gurugram
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What MacBook repair services are available in Gurgaon Gurugram?",
                  answer: "We provide comprehensive MacBook repair services in Gurgaon Gurugram for all Apple MacBook models including MacBook Air M3 M2 M1, MacBook Pro 14-inch 16-inch, and vintage MacBook models. Our services include Retina screen replacement, battery replacement, keyboard repair, logic board repair, and data recovery across DLF Cyber City Golf Course Road areas."
                },
                {
                  question: "Which is the best MacBook repair service center in Gurgaon Gurugram?",
                  answer: "Maclap IT Care is the most trusted MacBook repair service center in Gurgaon Gurugram with 4.9/5 customer rating. We serve DLF Cyber City, Golf Course Road, MG Road, Udyog Vihar areas with free pickup delivery, same-day service, and genuine Apple parts with extended warranty coverage."
                },
                {
                  question: "How long does MacBook screen replacement take in Gurgaon Gurugram?",
                  answer: "MacBook screen replacement in Gurgaon Gurugram typically takes 3-5 hours for Retina displays. We repair MacBook Air and MacBook Pro screens with original Apple LCD panels in DLF Cyber City Golf Course Road areas. All screen replacements come with 6-month warranty and same-day service guarantee."
                },
                {
                  question: "Do you repair MacBook logic board in Gurgaon Gurugram?",
                  answer: "Yes, we specialize in MacBook logic board repair in Gurgaon Gurugram including component-level microsoldering for liquid damage, power issues, and GPU failure. Our logic board repair services cover all MacBook models with advanced diagnostic tools and genuine Apple components replacement."
                },
                {
                  question: "Is MacBook doorstep pickup delivery available in all Gurgaon areas?",
                  answer: "Yes, we provide free MacBook doorstep pickup and delivery service across all Gurgaon Gurugram areas including DLF Cyber City, Golf Course Road, MG Road, Udyog Vihar, DLF Phases, and Sohna Road. Our technicians will collect and deliver your MacBook with full insurance coverage."
                },
                {
                  question: "Do you provide MacBook data recovery service in Gurgaon Gurugram?",
                  answer: "Yes, we offer professional MacBook data recovery service in Gurgaon Gurugram for corrupted SSD, hard drive failure, and liquid damage scenarios. Our data recovery success rate is 98% with clean room facilities and no data, no charge policy for all MacBook models."
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
              Why Choose Maclap IT Care for MacBook Repair in Gurgaon Gurugram?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Complete Gurgaon Coverage",
                description: "MacBook repair service across all Gurgaon Gurugram areas"
              },
              {
                icon: Star,
                title: "4.9/5 Customer Rating",
                description: "Trusted by 4000+ satisfied Gurgaon customers"
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
            Get Your MacBook Repaired in Gurgaon Gurugram Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional MacBook repair service with free pickup delivery across all Gurgaon locations
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`tel:+91${CONTACT_INFO.phone1}`}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: {CONTACT_INFO.phone1}
            </a>
            <a
              href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20repair%20in%20Gurgaon`}
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