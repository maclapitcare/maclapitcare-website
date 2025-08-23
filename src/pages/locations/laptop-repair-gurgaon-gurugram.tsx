import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Shield, Phone, Star, Monitor, Battery, Keyboard, Cpu, Wrench, HardDrive } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function LaptopRepairGurgaonGurugram() {
  useEffect(() => {
    document.title = "Laptop Repair Gurgaon Gurugram - Dell HP Lenovo Asus Service Center Near Me | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Best laptop repair service in Gurgaon Gurugram. Dell HP Lenovo Asus laptop screen battery keyboard repair. Free pickup delivery DLF Cyber City. Same day service. Expert technicians. Call 9211720790");
    }
  }, []);

  const gurgaonAreas = [
    "DLF Cyber City", "Cyber Hub", "Golf Course Road", "Sector 14", "Sector 15", "Sector 16",
    "Sector 17", "Sector 18", "Sector 22", "Sector 23", "Sector 24", "Sector 25",
    "Sector 26", "Sector 27", "Sector 28", "Sector 29", "Sector 30", "Sector 31",
    "Sector 32", "Sector 33", "Sector 34", "Sector 35", "Sector 37", "Sector 38",
    "Sector 39", "Sector 40", "Sector 41", "Sector 42", "Sector 43", "Sector 44",
    "Sector 45", "Sector 46", "Sector 47", "Sector 48", "Sector 49", "Sector 50",
    "MG Road", "Sohna Road", "Old Gurgaon", "New Gurgaon", "Udyog Vihar",
    "Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5", "Huda City Center",
    "IFFCO Chowk", "Rajiv Chowk", "Sikanderpur", "Galleria Market", "Ambience Mall"
  ];

  const laptopBrands = [
    {
      name: "Dell Laptop Repair",
      models: "Inspiron, XPS, Latitude, Alienware, Vostro",
      specialties: "Screen replacement, battery issues, overheating solutions",
      icon: Monitor
    },
    {
      name: "HP Laptop Repair", 
      models: "Pavilion, Envy, EliteBook, ProBook, Omen",
      specialties: "Keyboard repair, charging port, display issues",
      icon: Keyboard
    },
    {
      name: "Lenovo Laptop Repair",
      models: "ThinkPad, IdeaPad, Legion, Yoga, ThinkBook",
      specialties: "Hinge repair, touchpad, performance optimization",
      icon: Wrench
    },
    {
      name: "ASUS Laptop Repair",
      models: "ZenBook, VivoBook, ROG, TUF Gaming, ExpertBook",
      specialties: "Gaming laptop cooling, graphics card issues",
      icon: Cpu
    },
    {
      name: "Acer Laptop Repair",
      models: "Aspire, Predator, Swift, Spin, Nitro",
      specialties: "Performance upgrades, SSD installation",
      icon: HardDrive
    },
    {
      name: "MSI Laptop Repair",
      models: "Gaming Series, Creator, Modern, Prestige",
      specialties: "Gaming performance, thermal management",
      icon: Battery
    }
  ];

  const laptopServices = [
    {
      title: "Laptop Screen Replacement",
      icon: Monitor,
      description: "Original quality LCD LED display replacement for all laptop brands",
      warranty: "3 months"
    },
    {
      title: "Laptop Battery Replacement", 
      icon: Battery,
      description: "Genuine laptop battery replacement with extended backup",
      warranty: "6 months"
    },
    {
      title: "Laptop Keyboard Repair",
      icon: Keyboard, 
      description: "Complete keyboard replacement with backlight functionality",
      warranty: "90 days"
    },
    {
      title: "Laptop Motherboard Repair",
      icon: Cpu,
      description: "Component-level motherboard repair and chip replacement",
      warranty: "60 days"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">Gurgaon's #1 Laptop Repair Service Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Laptop Repair Gurgaon Gurugram - Best Service Center Near Me
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Gurgaon's most trusted laptop repair service center. Dell HP Lenovo Asus laptop repair with free doorstep pickup delivery DLF Cyber City Golf Course Road areas. Same day service with genuine parts and warranty.
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
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20laptop%20repair%20in%20Gurgaon%20Gurugram`}
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
              Laptop Repair Coverage in Gurgaon Gurugram
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide doorstep laptop repair services across all areas in Gurgaon including DLF Cyber City and Golf Course Road
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
            {gurgaonAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laptop Brand Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Laptop Brands Repair in Gurgaon Gurugram
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert repair services for all major laptop brands with genuine parts and professional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {laptopBrands.map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <brand.icon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <CardTitle className="text-lg">{brand.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm font-semibold text-blue-600 mb-2">{brand.models}</p>
                  <p className="text-muted-foreground text-sm mb-4">{brand.specialties}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-green-600 font-semibold">Warranty included</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Laptop Services */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Laptop Repair Services Gurgaon
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete laptop repair solutions with genuine parts and expert technicians
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {laptopServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
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

      {/* Comprehensive Laptop Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Complete Laptop Repair Guide for Gurgaon Customers
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Laptop Issues We Fix */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Common Laptop Issues We Fix in Gurgaon</h3>
                <div className="space-y-3">
                  {[
                    "Laptop screen black or broken display repair Gurgaon",
                    "Laptop battery not charging or backup issues DLF Cyber City",
                    "Laptop keyboard not working or missing keys Golf Course Road", 
                    "Laptop overheating and fan noise problems Gurgaon",
                    "Laptop liquid damage and water spill repair",
                    "Laptop not turning on or boot failure issues",
                    "Laptop motherboard repair and chip replacement",
                    "Laptop hard drive upgrade and data recovery",
                    "Laptop speaker not working or audio problems",
                    "Laptop touchpad not responding or cursor issues",
                    "Laptop hinge broken or screen flickering",
                    "Laptop charging port damaged or loose connection",
                    "Laptop virus removal and performance optimization",
                    "Laptop RAM upgrade and SSD installation Gurgaon"
                  ].map((issue, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Laptop Repair Process in Gurgaon</h3>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-500" />
                      Step 1: Call or WhatsApp
                    </h4>
                    <p className="text-sm text-muted-foreground">Contact us at 9211720790 for laptop repair in Gurgaon Gurugram. Describe your laptop issue for initial diagnosis.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      Step 2: Free Pickup Service
                    </h4>
                    <p className="text-sm text-muted-foreground">Our technician will pickup your laptop from DLF Cyber City, Golf Course Road, or anywhere in Gurgaon at no extra cost.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Wrench className="h-4 w-4 mr-2 text-blue-500" />
                      Step 3: Professional Diagnosis
                    </h4>
                    <p className="text-sm text-muted-foreground">Free laptop diagnosis to identify exact issues. We provide detailed repair quote before starting work.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-500" />
                      Step 4: Same Day Repair
                    </h4>
                    <p className="text-sm text-muted-foreground">Most laptop repairs completed within 2-4 hours. We use only genuine parts with warranty coverage.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-blue-500" />
                      Step 5: Delivery & Warranty
                    </h4>
                    <p className="text-sm text-muted-foreground">Free delivery back to your location in Gurgaon with complete warranty documentation and service guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area-Specific Service Details */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Laptop Repair Service Areas in Gurgaon District
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">DLF Cyber City Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional laptop repair services in DLF Cyber City including all office complexes and Cyber Hub. Dell HP Lenovo Asus laptop repair with express corporate service for business customers.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />DLF Cyber City Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Cyber Hub Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />DLF Phase 1 Laptop Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Golf Course Road Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Expert laptop repair on Golf Course Road covering all residential and commercial areas. Gaming laptop repair specialists with advanced cooling solutions for high-end systems.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Golf Course Road Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Galleria Market Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Ambience Mall Laptop Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Udyog Vihar Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive laptop repair services in Udyog Vihar Phase 1, 2, 3, 4, and 5. Business laptop repair with priority service for IT companies and corporate offices.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Udyog Vihar Phase 1 Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Udyog Vihar Phase 4 Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Udyog Vihar Phase 5 Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Sector 14-50 Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Quality laptop repair in all Gurgaon sectors from 14 to 50. Home service available with free pickup and delivery across all residential sectors and housing societies.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Sector 14 Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Sector 28 Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Sector 42 Laptop Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">MG Road Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Reliable laptop repair on MG Road, Sohna Road, and connecting areas. Student laptop repair packages with affordable service for colleges and universities nearby.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />MG Road Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Sohna Road Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Old Gurgaon Laptop Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Metro Station Areas</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Premium laptop repair near all metro stations including Huda City Center, IFFCO Chowk, Rajiv Chowk, and Sikanderpur. Express laptop repair service with metro connectivity convenience.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Huda City Center Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />IFFCO Chowk Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Sikanderpur Laptop Repair</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Rich FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions - Laptop Repair Gurgaon
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What laptop screen replacement services are available in Gurgaon DLF Cyber City?",
                  answer: "We provide professional laptop screen replacement services in Gurgaon DLF Cyber City for all major brands including Dell, HP, Lenovo, ASUS, Acer, and MSI. We handle HD, FHD, and gaming laptop screens with same-day service in DLF Cyber City and Golf Course Road areas. All replacements come with 3-month warranty and free pickup delivery service."
                },
                {
                  question: "Where is the best laptop repair center in Gurgaon?",
                  answer: "Maclap IT Care is Gurgaon's most trusted laptop repair center serving DLF Cyber City, Golf Course Road, Udyog Vihar, and all sectors. We provide free pickup delivery service across Gurgaon with 4.9/5 customer rating. Our certified technicians repair Dell HP Lenovo ASUS laptops with genuine parts and warranty coverage."
                },
                {
                  question: "How long does laptop battery replacement take in Golf Course Road?",
                  answer: "Laptop battery replacement in Golf Course Road typically takes 1-2 hours for most brands. We service Dell, HP, Lenovo, and ASUS laptop batteries with free pickup delivery in Golf Course Road, Galleria Market, and surrounding areas. All battery replacements come with 6-month warranty and same-day service guarantee."
                },
                {
                  question: "Do you repair gaming laptops in Gurgaon Cyber City?",
                  answer: "Yes, we specialize in gaming laptop repair in Gurgaon Cyber City including ASUS ROG, MSI Gaming, Acer Predator, HP Omen series. Our services include gaming laptop cooling system repair, graphics card issues, performance optimization, and thermal paste replacement with advanced diagnostic tools and expert technicians."
                },
                {
                  question: "Is laptop keyboard replacement available in Udyog Vihar?",
                  answer: "Yes, we provide comprehensive laptop keyboard replacement service across Udyog Vihar for all brands including Dell, HP, Lenovo, ASUS, and gaming laptops. We offer complete keyboard assembly replacement with backlight functionality and 90-day warranty coverage throughout Udyog Vihar phases."
                },
                {
                  question: "Do you provide laptop data recovery service in Gurgaon?",
                  answer: "Yes, we offer professional laptop data recovery service in Gurgaon for corrupted hard drives, SSD failure, and system crashes. Our data recovery success rate is 95% with free diagnosis and no data, no charge policy across Gurgaon DLF Cyber City Golf Course Road areas."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-blue-600">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Maclap IT Care for Laptop Repair in Gurgaon?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "Free Doorstep Service",
                description: "Free pickup and delivery across Gurgaon DLF Cyber City"
              },
              {
                icon: Star,
                title: "4.9/5 Customer Rating",
                description: "Trusted by 2500+ satisfied customers in Gurgaon"
              },
              {
                icon: Clock,
                title: "Same-Day Service",
                description: "Most laptop repairs completed within 2-4 hours"
              },
              {
                icon: Shield,
                title: "Genuine Parts Only",
                description: "Original quality components with comprehensive warranty"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center bg-white">
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
            Get Your Laptop Repaired in Gurgaon Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional laptop repair service with doorstep convenience across DLF Cyber City Golf Course Road
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`tel:+91${CONTACT_INFO.phone1}`}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: {CONTACT_INFO.phone1}
            </a>
            <a
              href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20laptop%20repair%20in%20Gurgaon%20Gurugram`}
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