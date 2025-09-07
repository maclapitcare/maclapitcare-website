import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Shield, Phone, Star, Monitor, Battery, Keyboard, Cpu, Wrench, HardDrive } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function LaptopRepairNoidaGreaterNoida() {
  useEffect(() => {
    document.title = "Laptop Repair Noida Greater Noida - Dell HP Lenovo Asus Screen Battery Keyboard Repair Near Me | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Best laptop repair Noida Greater Noida. Dell HP Lenovo Asus laptop screen battery keyboard motherboard repair. Same day service all sectors. Expert technicians doorstep service. Call 9211720790");
    }
  }, []);

  const noidaAreas = [
    "Sector 16", "Sector 18", "Sector 25", "Sector 27", "Sector 29", "Sector 34",
    "Sector 37", "Sector 41", "Sector 45", "Sector 50", "Sector 51", "Sector 52",
    "Sector 61", "Sector 62", "Sector 63", "Sector 76", "Sector 78", "Sector 104",
    "Sector 125", "Sector 135", "City Centre", "Wave City", "Atta Market",
    "Botanical Garden", "Golf Course", "Film City", "Logix City Center",
    "Mall of India", "DLF Mall", "Great India Place", "Gardens Galleria",
    "Brahmaputra Market", "Sector 18 Market", "Hajipur", "Mamura",
    "Expressway", "Metro Station", "Knowledge Park", "Pari Chowk",
    "Alpha Commercial Belt", "Beta Greater Noida", "Gamma Greater Noida",
    "Delta Greater Noida", "Eta Greater Noida", "Zeta Greater Noida",
    "Techzone 4", "Institutional Area", "Industrial Area", "IT Park"
  ];

  const laptopBrands = [
    {
      name: "Dell Laptop Repair",
      models: "Inspiron, XPS, Latitude, Alienware, Vostro, Precision",
      specialties: "Screen replacement, battery issues, overheating, motherboard repair",
      icon: Monitor
    },
    {
      name: "HP Laptop Repair", 
      models: "Pavilion, Envy, EliteBook, ProBook, Omen, Spectre",
      specialties: "Keyboard repair, charging port, display backlight, hinge problems",
      icon: Keyboard
    },
    {
      name: "Lenovo Laptop Repair",
      models: "ThinkPad, IdeaPad, Legion, Yoga, ThinkBook, LOQ",
      specialties: "Hinge repair, touchpad issues, performance optimization, cooling",
      icon: Wrench
    },
    {
      name: "ASUS Laptop Repair",
      models: "ZenBook, VivoBook, ROG, TUF Gaming, ExpertBook, ProArt",
      specialties: "Gaming laptop repair, graphics card, thermal management",
      icon: Cpu
    },
    {
      name: "Acer Laptop Repair",
      models: "Aspire, Predator, Swift, Spin, Nitro, ConceptD",
      specialties: "Performance upgrades, SSD installation, RAM upgrade",
      icon: HardDrive
    },
    {
      name: "MSI Laptop Repair",
      models: "Gaming Series, Creator, Modern, Prestige, Stealth",
      specialties: "Gaming performance, RGB lighting, advanced cooling systems",
      icon: Battery
    }
  ];

  const laptopServices = [
    {
      title: "Laptop Screen Replacement",
      icon: Monitor,
      description: "Original quality LCD LED display replacement for all laptop brands in Noida Greater Noida",
      warranty: "3 months"
    },
    {
      title: "Laptop Battery Replacement", 
      icon: Battery,
      description: "Genuine laptop battery replacement with extended backup for Noida customers",
      warranty: "6 months"
    },
    {
      title: "Laptop Keyboard Repair",
      icon: Keyboard, 
      description: "Complete keyboard replacement with backlight functionality across all Noida sectors",
      warranty: "90 days"
    },
    {
      title: "Laptop Motherboard Repair",
      icon: Cpu,
      description: "Component-level motherboard repair and chip replacement in Greater Noida",
      warranty: "60 days"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">Noida's #1 Laptop Repair Service Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Laptop Repair Noida Greater Noida - Dell HP Lenovo Asus Near Me
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Noida Greater Noida's most trusted laptop repair service center. Dell HP Lenovo Asus laptop screen battery keyboard motherboard repair across all sectors. Same day service with genuine parts doorstep pickup delivery available.
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
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20laptop%20repair%20in%20Noida%20Greater%20Noida`}
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
              Laptop Repair Service Coverage in Noida Greater Noida
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional laptop repair services across all sectors in Noida and Greater Noida with doorstep pickup delivery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {noidaAreas.map((area, index) => (
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
              Why Choose Our Laptop Repair Service in Noida Greater Noida?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert laptop repair technicians with 10+ years experience serving Noida customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "All Sectors Coverage",
                description: "Laptop repair service across all Noida Greater Noida sectors"
              },
              {
                icon: Clock,
                title: "Same Day Service",
                description: "Most laptop repairs completed within 4-6 hours"
              },
              {
                icon: Shield,
                title: "Genuine Parts",
                description: "Only original quality components with warranty"
              },
              {
                icon: CheckCircle,
                title: "Free Pickup Delivery",
                description: "Complimentary doorstep pickup and delivery service"
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

      {/* Brand-Wise Laptop Repair Services */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Brand-Wise Laptop Repair Services in Noida
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert repair services for all major laptop brands in Noida Greater Noida with genuine parts and comprehensive warranty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                name: "Dell Laptop Repair in Noida",
                icon: Monitor,
                description: "Expert Dell laptop repair services in Noida for Inspiron, XPS, Latitude, Alienware models",
                features: ["Screen replacement", "Battery issues", "Overheating repair", "Motherboard service"]
              },
              {
                name: "HP Laptop Repair in Noida", 
                icon: Keyboard,
                description: "Professional HP laptop repair in Noida for Pavilion, Envy, EliteBook, ProBook series",
                features: ["Keyboard replacement", "Charging port repair", "Display backlight", "Hinge problems"]
              },
              {
                name: "ASUS Laptop Repair in Noida",
                icon: Cpu,
                description: "Specialized ASUS laptop repair in Noida for ZenBook, VivoBook, ROG gaming laptops",
                features: ["Gaming repair", "Graphics card", "Thermal management", "Performance optimization"]
              },
              {
                name: "Lenovo Laptop Repair in Noida",
                icon: Wrench,
                description: "Expert Lenovo laptop repair in Noida for ThinkPad, IdeaPad, Legion, Yoga models",
                features: ["Hinge repair", "Touchpad issues", "Performance upgrade", "Cooling system"]
              },
              {
                name: "MSI Laptop Repair in Noida",
                icon: Battery,
                description: "Professional MSI laptop repair in Noida for Gaming, Creator, Modern, Prestige series",
                features: ["Gaming performance", "RGB lighting", "Advanced cooling", "Hardware upgrade"]
              },
              {
                name: "Acer Laptop Repair in Noida",
                icon: HardDrive,
                description: "Quality Acer laptop repair in Noida for Aspire, Predator, Swift, Spin, Nitro models",
                features: ["Performance upgrades", "SSD installation", "RAM upgrade", "System optimization"]
              }
            ].map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white border-2 hover:border-blue-200">
                <CardHeader className="text-center pb-3">
                  <brand.icon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <CardTitle className="text-lg text-blue-700">{brand.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm mb-4">{brand.description}</p>
                  <div className="space-y-2 mb-4">
                    {brand.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-green-600 font-semibold">Same day service available</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action for Brand Services */}
          <div className="text-center bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Brand-Specific Laptop Repair in Noida?
            </h3>
            <p className="text-gray-600 mb-6">
              Our certified technicians specialize in all major laptop brands with genuine parts and warranty
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call for Quote: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20laptop%20repair%20quote%20in%20Noida`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                WhatsApp for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Laptop Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Laptop Repair Services Noida Greater Noida
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete laptop repair solutions with genuine parts and expert technicians
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
              Complete Laptop Repair Guide for Noida Greater Noida Customers
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Laptop Issues We Fix */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Common Laptop Issues We Fix in Noida Greater Noida</h3>
                <div className="space-y-3">
                  {[
                    "Laptop screen black or broken display replacement Noida sectors",
                    "Laptop battery not charging or backup issues Greater Noida",
                    "Laptop keyboard not working or missing keys repair Noida", 
                    "Laptop overheating and fan noise problems all sectors",
                    "Laptop liquid damage and water spill repair Greater Noida",
                    "Laptop not turning on or boot failure issues Noida",
                    "Laptop motherboard repair and chip replacement service",
                    "Laptop hard drive upgrade and data recovery Noida",
                    "Laptop speaker not working or audio problems repair",
                    "Laptop touchpad not responding or cursor issues fix",
                    "Laptop hinge broken or screen flickering repair Noida",
                    "Laptop charging port damaged or loose connection fix",
                    "Laptop virus removal and performance optimization service",
                    "Laptop RAM upgrade and SSD installation Greater Noida"
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
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Laptop Repair Process in Noida Greater Noida</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-500" />
                      Step 1: Contact Us
                    </h4>
                    <p className="text-sm text-muted-foreground">Call 9211720790 or WhatsApp for laptop repair in Noida Greater Noida. Free consultation and initial diagnosis over phone.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      Step 2: Free Pickup
                    </h4>
                    <p className="text-sm text-muted-foreground">Free doorstep pickup from any location in Noida Greater Noida. Our technician will collect your laptop at your convenience.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Wrench className="h-4 w-4 mr-2 text-blue-500" />
                      Step 3: Expert Diagnosis
                    </h4>
                    <p className="text-sm text-muted-foreground">Comprehensive laptop diagnosis at our service center. We identify all issues and provide detailed repair quote.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-500" />
                      Step 4: Same Day Repair
                    </h4>
                    <p className="text-sm text-muted-foreground">Most laptop repairs completed same day with genuine parts. We use only original quality components with warranty.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-blue-500" />
                      Step 5: Delivery & Warranty
                    </h4>
                    <p className="text-sm text-muted-foreground">Free delivery to your location in Noida Greater Noida with comprehensive warranty and follow-up support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector-Specific Service Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Laptop Repair Service Areas Across Noida Greater Noida
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Central Noida Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional laptop repair services in Central Noida including Sector 18, City Centre, and Atta Market areas. Gaming laptop specialists with advanced diagnostic tools.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Sector 18 Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />City Centre Service</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Atta Market Repair</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Sector 62-63 Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Expert laptop repair services in Noida Sector 62-63 IT hub area. Business laptop repair with priority service for corporate clients and IT professionals.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Sector 62 IT Hub</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Sector 63 Corporate</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Fortis Hospital Area</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Greater Noida Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive laptop repair services in Greater Noida including Knowledge Park, Pari Chowk, and Techzone areas. Student laptop repair packages available.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Knowledge Park Service</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Pari Chowk Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Techzone 4 Service</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Noida Extension Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Quality laptop repair services in Noida Extension including residential sectors. Home service available with doorstep pickup and delivery convenience.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Residential Sectors</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Extension Markets</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Metro Connectivity</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Sector 125-135 Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Premium laptop repair services in Noida Sector 125-135 area. Advanced gaming laptop repair with specialized cooling solutions and performance optimization.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Sector 125 Premium</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Sector 135 Service</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Residential Complexes</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Film City Greater Noida</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Specialized laptop repair services near Film City Greater Noida. Creative professional laptop repair with high-performance upgrades and optimization.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Film City Area</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Creative Hubs</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Media Professionals</div>
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
              Frequently Asked Questions - Laptop Repair Noida Greater Noida
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What laptop repair services are available in Noida Greater Noida?",
                  answer: "We provide comprehensive laptop repair services in Noida Greater Noida for all major brands including Dell, HP, Lenovo, ASUS, Acer, and MSI. Our services include screen replacement, battery replacement, keyboard repair, motherboard repair, data recovery, and performance upgrades across all sectors in Noida and Greater Noida."
                },
                {
                  question: "Which is the best laptop repair service center in Noida Greater Noida?",
                  answer: "Maclap IT Care is the most trusted laptop repair service center in Noida Greater Noida with 4.9/5 customer rating. We serve all sectors including Sector 18, 62, 63, 125, and Greater Noida areas with free pickup delivery, same-day service, and genuine parts warranty."
                },
                {
                  question: "How long does laptop screen replacement take in Noida Greater Noida?",
                  answer: "Laptop screen replacement in Noida Greater Noida typically takes 2-4 hours depending on the model. We repair Dell, HP, Lenovo, ASUS laptop screens with original LCD panels. All screen replacements come with 3-month warranty and same-day service guarantee across Noida sectors."
                },
                {
                  question: "Do you repair gaming laptops in Noida Greater Noida?",
                  answer: "Yes, we specialize in gaming laptop repair in Noida Greater Noida including ASUS ROG, MSI Gaming, HP Omen, Acer Predator series. Our gaming laptop services include cooling system repair, graphics card issues, performance optimization, and RGB lighting repair with advanced diagnostic tools."
                },
                {
                  question: "Is doorstep laptop pickup delivery available in all Noida sectors?",
                  answer: "Yes, we provide free doorstep laptop pickup and delivery service across all Noida Greater Noida sectors including Sector 16, 18, 25, 62, 63, 125, 135, and Greater Noida areas. Our technicians will collect your laptop from your location and deliver after repair with full warranty."
                },
                {
                  question: "Do you provide laptop data recovery service in Noida Greater Noida?",
                  answer: "Yes, we offer professional laptop data recovery service in Noida Greater Noida for corrupted hard drives, SSD failure, and system crashes. Our data recovery success rate is 95% with free diagnosis and no data, no charge policy across all Noida sectors."
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
              Why Choose Maclap IT Care for Laptop Repair in Noida Greater Noida?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "All Sectors Coverage",
                description: "Laptop repair service across all Noida Greater Noida areas"
              },
              {
                icon: Star,
                title: "4.9/5 Customer Rating",
                description: "Trusted by 5000+ satisfied Noida customers"
              },
              {
                icon: Clock,
                title: "Same-Day Service",
                description: "Most laptop repairs completed within hours"
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
            Get Your Laptop Repaired in Noida Greater Noida Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional laptop repair service with free pickup delivery across all sectors
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`tel:+91${CONTACT_INFO.phone1}`}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: {CONTACT_INFO.phone1}
            </a>
            <a
              href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20laptop%20repair%20in%20Noida%20Greater%20Noida`}
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