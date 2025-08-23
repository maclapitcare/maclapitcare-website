import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Shield, Phone, Star, Monitor, Battery, Keyboard, Cpu, Wrench, HardDrive } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function LaptopRepairGhaziabadVaishaliIndirapuram() {
  useEffect(() => {
    document.title = "Laptop Repair Ghaziabad Vaishali Indirapuram - Dell HP Lenovo Asus Service Center Near Me | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Best laptop repair service in Ghaziabad Vaishali Indirapuram. Dell HP Lenovo Asus laptop screen battery keyboard repair. Free pickup delivery. Same day service. Expert technicians. Call 9211720790");
    }
  }, []);

  const ghaziabadAreas = [
    "Vaishali Sector 1", "Vaishali Sector 2", "Vaishali Sector 3", "Vaishali Sector 4", "Vaishali Sector 5",
    "Vaishali Sector 6", "Indirapuram Habitat", "Indirapuram Ahinsa Khand 1", "Indirapuram Ahinsa Khand 2",
    "Indirapuram Vasundhara", "Kaushambi", "Raj Nagar", "Raj Nagar Extension", "Crossings Republik",
    "Loni", "Sahibabad", "Mohan Nagar", "Shastri Nagar", "Govindpuram", "Vijay Nagar",
    "Kavi Nagar", "Shalimar Garden", "Rajendra Nagar", "Nandgram", "Masuri", "Muradnagar",
    "Tronica City", "NH-24 Ghaziabad", "Ghaziabad Railway Station", "Bus Stand Ghaziabad"
  ];

  const laptopBrands = [
    {
      name: "Dell Laptop Repair",
      models: "Inspiron, XPS, Latitude, Alienware, Vostro",
      specialties: "Screen replacement, battery issues, overheating",
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
      specialties: "Gaming laptop cooling, graphics issues",
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
            <Badge className="bg-white/20 text-white mb-4">Ghaziabad's #1 Laptop Repair Service Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Laptop Repair Ghaziabad Vaishali Indirapuram - Best Service Center Near Me
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Ghaziabad's most trusted laptop repair service center. Dell HP Lenovo Asus laptop repair with free doorstep pickup delivery Vaishali Indirapuram areas. Same day service with genuine parts and warranty.
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
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20laptop%20repair%20in%20Ghaziabad%20Vaishali%20Indirapuram`}
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
              Laptop Repair Coverage in Ghaziabad Vaishali Indirapuram
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide doorstep laptop repair services across all areas in Ghaziabad including Vaishali and Indirapuram
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

      {/* Laptop Brand Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Laptop Brands Repair in Ghaziabad Vaishali Indirapuram
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
              Professional Laptop Repair Services Ghaziabad
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
              Complete Laptop Repair Guide for Ghaziabad Customers
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Laptop Issues We Fix */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Common Laptop Issues We Fix in Ghaziabad</h3>
                <div className="space-y-3">
                  {[
                    "Laptop screen black or broken display repair Ghaziabad",
                    "Laptop battery not charging or backup issues Vaishali",
                    "Laptop keyboard not working or missing keys Indirapuram", 
                    "Laptop overheating and fan noise problems Ghaziabad",
                    "Laptop liquid damage and water spill repair",
                    "Laptop not turning on or boot failure issues",
                    "Laptop motherboard repair and chip replacement",
                    "Laptop hard drive upgrade and data recovery",
                    "Laptop speaker not working or audio problems",
                    "Laptop touchpad not responding or cursor issues",
                    "Laptop hinge broken or screen flickering",
                    "Laptop charging port damaged or loose connection",
                    "Laptop virus removal and performance optimization",
                    "Laptop RAM upgrade and SSD installation Ghaziabad"
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
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Our Laptop Repair Process in Ghaziabad</h3>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-500" />
                      Step 1: Call or WhatsApp
                    </h4>
                    <p className="text-sm text-muted-foreground">Contact us at 9211720790 for laptop repair in Ghaziabad Vaishali Indirapuram. Describe your laptop issue for initial diagnosis.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      Step 2: Free Pickup Service
                    </h4>
                    <p className="text-sm text-muted-foreground">Our technician will pickup your laptop from Vaishali, Indirapuram, or anywhere in Ghaziabad at no extra cost.</p>
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
                    <p className="text-sm text-muted-foreground">Free delivery back to your location in Ghaziabad with complete warranty documentation and service guarantee.</p>
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
              Laptop Repair Service Areas in Ghaziabad District
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Vaishali Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional laptop repair services in all Vaishali sectors including Sector 1, 2, 3, 4, 5, and 6. Dell HP Lenovo Asus laptop repair with same-day service guarantee.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Vaishali Sector 1 Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Vaishali Sector 3 Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Vaishali Sector 5 Laptop Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Indirapuram Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Expert laptop repair in Indirapuram covering Habitat, Ahinsa Khand 1 & 2, Vasundhara areas. Gaming laptop repair specialists with advanced cooling solutions.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Indirapuram Habitat Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Ahinsa Khand Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Vasundhara Laptop Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Kaushambi Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive laptop repair services in Kaushambi, Raj Nagar, and Raj Nagar Extension. Business laptop repair with priority service for corporate customers.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Kaushambi Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Raj Nagar Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Raj Nagar Extension Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Crossings Republik Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Quality laptop repair in Crossings Republik, Loni, and Sahibabad areas. Student laptop repair packages with affordable pricing and flexible payment options.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Crossings Republik Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Loni Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Sahibabad Laptop Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Govindpuram Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Reliable laptop repair in Govindpuram, Vijay Nagar, and Kavi Nagar. Home service available with free pickup and delivery across all residential areas.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Govindpuram Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Vijay Nagar Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Kavi Nagar Laptop Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Shalimar Garden Laptop Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Premium laptop repair in Shalimar Garden, Shastri Nagar, and Mohan Nagar. Express laptop repair service with 24-hour turnaround for urgent requirements.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Shalimar Garden Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Shastri Nagar Laptop Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Mohan Nagar Laptop Repair</div>
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
              Frequently Asked Questions - Laptop Repair Ghaziabad
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What laptop screen replacement services are available in Ghaziabad Vaishali?",
                  answer: "We provide professional laptop screen replacement services in Ghaziabad Vaishali for all major brands including Dell, HP, Lenovo, ASUS, Acer, and MSI. We handle HD, FHD, and gaming laptop screens with same-day service in Vaishali Indirapuram areas. All replacements come with 3-month warranty and free pickup delivery service."
                },
                {
                  question: "Where is the best laptop repair center in Ghaziabad?",
                  answer: "Maclap IT Care is Ghaziabad's most trusted laptop repair center serving Vaishali, Indirapuram, Kaushambi, and all areas. We provide free pickup delivery service across Ghaziabad with 4.9/5 customer rating. Our certified technicians repair Dell HP Lenovo ASUS laptops with genuine parts and warranty coverage."
                },
                {
                  question: "How long does laptop battery replacement take in Indirapuram?",
                  answer: "Laptop battery replacement in Indirapuram typically takes 1-2 hours for most brands. We service Dell, HP, Lenovo, and ASUS laptop batteries with free pickup delivery in Indirapuram Habitat, Ahinsa Khand. All battery replacements come with 6-month warranty and same-day service guarantee."
                },
                {
                  question: "Do you repair gaming laptops in Ghaziabad?",
                  answer: "Yes, we specialize in gaming laptop repair in Ghaziabad including ASUS ROG, MSI Gaming, Acer Predator, HP Omen series. Our services include gaming laptop cooling system repair, graphics card issues, performance optimization, and thermal paste replacement with advanced diagnostic tools and expert technicians."
                },
                {
                  question: "Is laptop keyboard replacement available in Vaishali?",
                  answer: "Yes, we provide comprehensive laptop keyboard replacement service across Vaishali for all brands including Dell, HP, Lenovo, ASUS, and gaming laptops. We offer complete keyboard assembly replacement with backlight functionality and 90-day warranty coverage throughout Vaishali areas."
                },
                {
                  question: "Do you provide laptop data recovery service in Ghaziabad?",
                  answer: "Yes, we offer professional laptop data recovery service in Ghaziabad for corrupted hard drives, SSD failure, and system crashes. Our data recovery success rate is 95% with free diagnosis and no data, no charge policy across Ghaziabad Vaishali Indirapuram areas."
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
              Why Choose Maclap IT Care for Laptop Repair in Ghaziabad?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "Free Doorstep Service",
                description: "Free pickup and delivery across Ghaziabad Vaishali Indirapuram"
              },
              {
                icon: Star,
                title: "4.9/5 Customer Rating",
                description: "Trusted by 2000+ satisfied customers in Ghaziabad"
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
            Get Your Laptop Repaired in Ghaziabad Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional laptop repair service with doorstep convenience across Vaishali Indirapuram
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`tel:+91${CONTACT_INFO.phone1}`}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: {CONTACT_INFO.phone1}
            </a>
            <a
              href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20laptop%20repair%20in%20Ghaziabad%20Vaishali%20Indirapuram`}
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