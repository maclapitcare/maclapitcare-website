import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Shield, Phone, Star, Monitor, Battery, Keyboard, Cpu, Wrench, HardDrive } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function LaptopRepairDelhiDoorstepService() {
  useEffect(() => {
    document.title = "Laptop Repair Delhi Doorstep Service - Dell HP Lenovo Asus Home Service Near Me | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Best laptop repair Delhi doorstep service. Dell HP Lenovo Asus laptop screen battery keyboard repair at home. Free pickup delivery all Delhi areas. Same day service. Expert technicians. Call 9211720790");
    }
  }, []);

  const delhiAreas = [
    "Connaught Place", "Karol Bagh", "Lajpat Nagar", "South Extension", "Rajouri Garden",
    "Janakpuri", "Dwarka", "Rohini", "Pitampura", "Model Town", "Civil Lines",
    "Khan Market", "Greater Kailash", "Vasant Kunj", "Nehru Place", "Chandni Chowk",
    "Laxmi Nagar", "Tilak Nagar", "Ashok Vihar", "Preet Vihar", "Mayur Vihar",
    "Kalkaji", "Malviya Nagar", "Saket", "Hauz Khas", "Green Park", "INA Market",
    "Daryaganj", "Paharganj", "Sadar Bazaar", "Azadpur", "Shalimar Bagh",
    "Naraina", "Moti Nagar", "Kirti Nagar", "Punjabi Bagh", "Tagore Garden",
    "Vikaspuri", "Uttam Nagar", "Janpath", "Lodhi Road", "Defence Colony",
    "Vasant Vihar", "Chanakyapuri", "RK Puram", "Munirka", "Safdarjung"
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
      description: "Original quality LCD LED display replacement for all laptop brands at your doorstep",
      warranty: "3 months"
    },
    {
      title: "Laptop Battery Replacement", 
      icon: Battery,
      description: "Genuine laptop battery replacement with extended backup delivered to your home",
      warranty: "6 months"
    },
    {
      title: "Laptop Keyboard Repair",
      icon: Keyboard, 
      description: "Complete keyboard replacement with backlight functionality at home service",
      warranty: "90 days"
    },
    {
      title: "Laptop Motherboard Repair",
      icon: Cpu,
      description: "Component-level motherboard repair and chip replacement at your location",
      warranty: "60 days"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">Delhi's #1 Laptop Doorstep Repair Service</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Laptop Repair Delhi Doorstep Service - Home Service Near Me
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Delhi's most trusted laptop doorstep repair service. Dell HP Lenovo Asus laptop repair at your home with free pickup delivery all Delhi areas. Same day service with genuine parts and warranty at your convenience.
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
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20laptop%20doorstep%20repair%20in%20Delhi`}
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
              Laptop Doorstep Service Coverage in Delhi NCR
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide doorstep laptop repair services at your home across all areas in Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {delhiAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doorstep Service Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Laptop Doorstep Service in Delhi?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional laptop repair at your home with convenience and quality assurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Home Service",
                description: "Expert technician visits your home for laptop repair"
              },
              {
                icon: Clock,
                title: "Same Day Service",
                description: "Most repairs completed within 2-4 hours at your doorstep"
              },
              {
                icon: Shield,
                title: "Genuine Parts",
                description: "Only original quality components with warranty"
              },
              {
                icon: CheckCircle,
                title: "Free Diagnosis",
                description: "Complimentary laptop diagnosis at your home"
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

      {/* Laptop Brand Services */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Laptop Brands Doorstep Repair in Delhi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert repair services for all major laptop brands at your home with genuine parts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {laptopBrands.map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="text-center pb-3">
                  <brand.icon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <CardTitle className="text-lg">{brand.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm font-semibold text-blue-600 mb-2">{brand.models}</p>
                  <p className="text-muted-foreground text-sm mb-4">{brand.specialties}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-green-600 font-semibold">Home service available</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Laptop Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Laptop Doorstep Repair Services Delhi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete laptop repair solutions at your home with genuine parts and expert technicians
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {laptopServices.map((service, index) => (
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

      {/* Comprehensive Laptop Information */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Complete Laptop Doorstep Repair Guide for Delhi Customers
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Laptop Issues We Fix */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Common Laptop Issues We Fix at Your Home in Delhi</h3>
                <div className="space-y-3">
                  {[
                    "Laptop screen black or broken display repair at home Delhi",
                    "Laptop battery not charging or backup issues doorstep service",
                    "Laptop keyboard not working or missing keys home repair", 
                    "Laptop overheating and fan noise problems at your location",
                    "Laptop liquid damage and water spill repair home service",
                    "Laptop not turning on or boot failure issues doorstep",
                    "Laptop motherboard repair and chip replacement at home",
                    "Laptop hard drive upgrade and data recovery home service",
                    "Laptop speaker not working or audio problems doorstep",
                    "Laptop touchpad not responding or cursor issues at home",
                    "Laptop hinge broken or screen flickering home repair",
                    "Laptop charging port damaged or loose connection doorstep",
                    "Laptop virus removal and performance optimization at home",
                    "Laptop RAM upgrade and SSD installation doorstep Delhi"
                  ].map((issue, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Doorstep Service Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Laptop Doorstep Service Process in Delhi</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-500" />
                      Step 1: Call or WhatsApp
                    </h4>
                    <p className="text-sm text-muted-foreground">Contact us at 9211720790 for laptop doorstep repair in Delhi. Describe your laptop issue for initial assessment.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      Step 2: Schedule Home Visit
                    </h4>
                    <p className="text-sm text-muted-foreground">Our expert technician will visit your home in Delhi at your convenient time with all necessary tools and spare parts.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Wrench className="h-4 w-4 mr-2 text-blue-500" />
                      Step 3: On-Site Diagnosis
                    </h4>
                    <p className="text-sm text-muted-foreground">Free laptop diagnosis at your home to identify exact issues. We provide detailed repair quote before starting work.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-500" />
                      Step 4: Same Day Repair
                    </h4>
                    <p className="text-sm text-muted-foreground">Most laptop repairs completed at your home within 2-4 hours. We use only genuine parts with warranty coverage.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-blue-500" />
                      Step 5: Testing & Warranty
                    </h4>
                    <p className="text-sm text-muted-foreground">Complete testing at your home with warranty documentation and follow-up support guarantee.</p>
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
              Laptop Doorstep Service Areas Across Delhi
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Central Delhi Home Service</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional laptop doorstep repair in Central Delhi including Connaught Place, Khan Market, India Gate areas. Same-day home service available for urgent laptop repairs.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Connaught Place Home Service</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Khan Market Doorstep Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Daryaganj Home Service</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">South Delhi Home Service</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Expert laptop doorstep repair in South Delhi covering Greater Kailash, Lajpat Nagar, South Extension areas. Gaming laptop specialists with home service convenience.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Greater Kailash Home Service</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Nehru Place Doorstep Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Saket Home Service</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">West Delhi Home Service</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive laptop doorstep repair in West Delhi including Janakpuri, Rajouri Garden, Dwarka areas. Business laptop repair with priority home service.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Janakpuri Home Service</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Dwarka Doorstep Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Rajouri Garden Home Service</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">North Delhi Home Service</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Reliable laptop doorstep repair in North Delhi covering Model Town, Civil Lines, Rohini areas. Professional technicians with 10+ years experience at your home.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Model Town Home Service</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Rohini Doorstep Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Pitampura Home Service</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">East Delhi Home Service</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Quality laptop doorstep repair in East Delhi including Laxmi Nagar, Preet Vihar, Mayur Vihar areas. Student laptop repair packages with affordable home service.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Laxmi Nagar Home Service</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Preet Vihar Doorstep Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Mayur Vihar Home Service</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">New Delhi Home Service</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Premium laptop doorstep repair in New Delhi area covering government quarters and embassy areas. Trusted service provider with verified home service credentials.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Chanakyapuri Home Service</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />RK Puram Doorstep Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Vasant Vihar Home Service</div>
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
              Frequently Asked Questions - Laptop Doorstep Service Delhi
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What laptop doorstep repair services are available in Delhi?",
                  answer: "We provide comprehensive laptop doorstep repair services in Delhi for all major brands including Dell, HP, Lenovo, ASUS, Acer, and MSI. Our home services include screen replacement, battery replacement, keyboard repair, motherboard repair, and data recovery at your location across all Delhi areas with same-day service."
                },
                {
                  question: "Where is the best laptop doorstep service in Delhi?",
                  answer: "Maclap IT Care is Delhi's most trusted laptop doorstep service provider covering all areas including Connaught Place, South Extension, Karol Bagh, Dwarka, and Rohini. We provide free home visit service across Delhi with 4.9/5 customer rating and certified technicians who repair laptops at your convenience."
                },
                {
                  question: "How long does laptop battery replacement take at home in Delhi?",
                  answer: "Laptop battery replacement at your home in Delhi typically takes 1-2 hours for most brands. We service Dell, HP, Lenovo, and ASUS laptop batteries at your doorstep with genuine parts. All battery replacements come with 6-month warranty and same-day home service guarantee across Delhi areas."
                },
                {
                  question: "Do you repair gaming laptops at home in Delhi?",
                  answer: "Yes, we specialize in gaming laptop doorstep repair in Delhi including ASUS ROG, MSI Gaming, Acer Predator, HP Omen series. Our home services include gaming laptop cooling system repair, graphics card issues, performance optimization, and thermal paste replacement with advanced tools at your location."
                },
                {
                  question: "Is laptop screen replacement available at home in Delhi?",
                  answer: "Yes, we provide comprehensive laptop screen replacement service at your home across Delhi for all brands including Dell, HP, Lenovo, ASUS, and gaming laptops. We carry original LCD panels to your location and complete screen replacement at your doorstep with 3-month warranty coverage."
                },
                {
                  question: "Do you provide laptop data recovery service at home in Delhi?",
                  answer: "Yes, we offer professional laptop data recovery service at your home in Delhi for corrupted hard drives, SSD failure, and system crashes. Our data recovery success rate is 95% with free on-site diagnosis and no data, no charge policy across all Delhi areas with doorstep convenience."
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
              Why Choose Maclap IT Care for Laptop Doorstep Service in Delhi?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Complete Home Service",
                description: "Expert technician visits your home across all Delhi areas"
              },
              {
                icon: Star,
                title: "4.9/5 Customer Rating",
                description: "Trusted by 3000+ satisfied customers with home service"
              },
              {
                icon: Clock,
                title: "Same-Day Service",
                description: "Most laptop repairs completed at your home within hours"
              },
              {
                icon: Shield,
                title: "Genuine Parts Only",
                description: "Original quality components with comprehensive warranty"
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
            Get Your Laptop Repaired at Home in Delhi Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional laptop doorstep service with home convenience across all Delhi locations
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`tel:+91${CONTACT_INFO.phone1}`}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: {CONTACT_INFO.phone1}
            </a>
            <a
              href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20laptop%20doorstep%20repair%20in%20Delhi`}
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