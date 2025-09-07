import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Shield, Phone, Star, Monitor, Battery, Keyboard, Cpu, Wrench, HardDrive, ArrowRight, Search, Settings, Users, Award, Zap, ThumbsUp } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { Link } from "wouter";

export default function LaptopRepairNoidaGreaterNoida() {
  useEffect(() => {
    document.title = "Laptop Repair Noida Greater Noida - Dell HP Lenovo Asus Screen Battery Keyboard Repair Near Me | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Best laptop repair Noida Greater Noida. Dell HP Lenovo Asus laptop screen battery keyboard motherboard repair. Same day service all sectors. Expert technicians doorstep service. Call 9211720790");
    }

    // Add keywords meta tag for SEO
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'laptop repair noida, laptop repair greater noida, dell laptop repair noida, hp laptop repair noida, lenovo laptop repair noida, asus laptop repair noida, laptop screen replacement noida, laptop battery replacement noida, laptop service center noida, laptop repair near me noida, macbook repair noida, laptop keyboard repair noida, laptop motherboard repair noida, gaming laptop repair noida, laptop hinge repair noida, laptop charging port repair noida, laptop data recovery noida, laptop virus removal noida, laptop upgrade noida, same day laptop repair noida');
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

  const commonProblems = [
    "Laptop screen cracked or black display",
    "Laptop not turning on or startup issues", 
    "Laptop battery not charging or draining fast",
    "Laptop keyboard keys not working",
    "Laptop overheating and fan noise",
    "Laptop running slow or hanging",
    "Laptop hinge broken or loose",
    "Laptop charging port damaged",
    "Laptop speaker or audio not working",
    "Laptop touchpad not responding",
    "Laptop hard drive crash or data loss",
    "Laptop virus or malware infection"
  ];

  const commonSearches = [
    "laptop repair near me noida",
    "laptop screen replacement noida",
    "laptop battery replacement noida", 
    "dell laptop repair noida",
    "hp laptop repair noida",
    "lenovo laptop repair noida",
    "asus laptop repair noida",
    "laptop service center noida",
    "laptop motherboard repair noida",
    "gaming laptop repair noida",
    "laptop keyboard repair noida",
    "laptop hinge repair noida"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-6 text-lg px-6 py-2">Noida's #1 Laptop Repair Service Center</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Laptop Repair Noida Greater Noida
              <br />
              <span className="text-blue-300">Dell HP Lenovo Asus Near Me</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Professional laptop repair services across all Noida Greater Noida sectors. Expert technicians for Dell, HP, Lenovo, Asus laptop screen, battery, keyboard, motherboard repair with same day service and doorstep pickup delivery.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center space-x-2 text-lg"
              >
                <Phone className="h-6 w-6" />
                <span>Call: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20laptop%20repair%20in%20Noida%20Greater%20Noida`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                WhatsApp for Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MacLap IT Care Service Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional Laptop Repair Services by MacLap IT Care
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  MacLap IT Care is Noida Greater Noida's most trusted and reliable laptop repair service center, specializing in comprehensive repair solutions for all major laptop brands. With over 10 years of experience serving customers across all Noida sectors, we have built a reputation for excellence, reliability, and customer satisfaction.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our team of certified technicians provides expert laptop repair services for Dell, HP, Lenovo, Asus, MSI, and Acer laptops with genuine parts, comprehensive warranty, and same-day service. We understand the importance of your laptop in today's digital world and ensure quick, efficient, and affordable repair solutions.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  From simple screen replacements to complex motherboard repairs, MacLap IT Care offers complete laptop repair services with free doorstep pickup and delivery across all Noida Greater Noida areas. Our commitment to quality service and customer satisfaction has made us the preferred choice for thousands of satisfied customers.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-semibold">10+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-semibold">Certified Technicians</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-semibold">Genuine Parts Only</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-semibold">Same Day Service</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Why Choose MacLap IT Care?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Technicians</h4>
                      <p className="text-sm text-gray-600">Highly skilled and certified laptop repair specialists</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Comprehensive Warranty</h4>
                      <p className="text-sm text-gray-600">Up to 3 months warranty on all repair services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Fast Turnaround</h4>
                      <p className="text-sm text-gray-600">Most repairs completed within 4-6 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Doorstep Service</h4>
                      <p className="text-sm text-gray-600">Free pickup and delivery across all Noida areas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand-Wise Laptop Repair Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Brand-Wise Laptop Repair Services in Noida Greater Noida
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Expert repair services for all major laptop brands with genuine parts, certified technicians, and comprehensive warranty
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Dell Laptop Repair */}
              <Link href="/dell-laptop-repair-noida">
                <Card className="hover:shadow-xl transition-all duration-300 bg-white border-2 hover:border-blue-400 cursor-pointer hover:-translate-y-1 transform h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="relative">
                      <Monitor className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <ArrowRight className="absolute top-0 right-2 h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-blue-700">Dell Laptop Repair in Noida</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm mb-4">
                      Professional Dell laptop repair services for Inspiron, XPS, Latitude, Alienware, Vostro, and Precision models
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Screen replacement & display repair</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Battery replacement & charging issues</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Motherboard repair & overheating</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Keyboard & hinge repair</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm mb-3">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="text-green-600 font-semibold">Same day service available</span>
                    </div>
                    <div className="text-xs text-blue-600 font-semibold flex items-center justify-center gap-1">
                      View dedicated page <ArrowRight className="h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* HP Laptop Repair */}
              <Link href="/hp-laptop-repair-noida">
                <Card className="hover:shadow-xl transition-all duration-300 bg-white border-2 hover:border-blue-400 cursor-pointer hover:-translate-y-1 transform h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="relative">
                      <Keyboard className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <ArrowRight className="absolute top-0 right-2 h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-blue-700">HP Laptop Repair in Noida</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm mb-4">
                      Expert HP laptop repair services for Pavilion, Envy, EliteBook, ProBook, Omen, and Spectre series
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Keyboard replacement & key repair</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Charging port repair & power issues</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Display backlight & screen repair</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Hinge problems & body repair</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm mb-3">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="text-green-600 font-semibold">Same day service available</span>
                    </div>
                    <div className="text-xs text-blue-600 font-semibold flex items-center justify-center gap-1">
                      View dedicated page <ArrowRight className="h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Lenovo Laptop Repair */}
              <Link href="/lenovo-laptop-repair-noida">
                <Card className="hover:shadow-xl transition-all duration-300 bg-white border-2 hover:border-blue-400 cursor-pointer hover:-translate-y-1 transform h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="relative">
                      <Wrench className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <ArrowRight className="absolute top-0 right-2 h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-blue-700">Lenovo Laptop Repair in Noida</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm mb-4">
                      Professional Lenovo laptop repair for ThinkPad, IdeaPad, Legion, Yoga, ThinkBook, and LOQ models
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Hinge repair & screen alignment</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Touchpad issues & trackpoint</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Performance optimization & upgrades</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Cooling system & fan repair</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm mb-3">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="text-green-600 font-semibold">Same day service available</span>
                    </div>
                    <div className="text-xs text-blue-600 font-semibold flex items-center justify-center gap-1">
                      View dedicated page <ArrowRight className="h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* ASUS Laptop Repair */}
              <Card className="hover:shadow-xl transition-all duration-300 bg-white border-2 hover:border-blue-200 h-full">
                <CardHeader className="text-center pb-4">
                  <Cpu className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-blue-700">ASUS Laptop Repair in Noida</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    Specialized ASUS laptop repair for ZenBook, VivoBook, ROG, TUF Gaming, ExpertBook, and ProArt series
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Gaming laptop specialized repair</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Graphics card & GPU issues</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Thermal management & overheating</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>RGB lighting & gaming features</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-green-600 font-semibold">Same day service available</span>
                  </div>
                </CardContent>
              </Card>

              {/* MSI Laptop Repair */}
              <Card className="hover:shadow-xl transition-all duration-300 bg-white border-2 hover:border-blue-200 h-full">
                <CardHeader className="text-center pb-4">
                  <Battery className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-blue-700">MSI Laptop Repair in Noida</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    Expert MSI laptop repair for Gaming Series, Creator, Modern, Prestige, and Stealth models
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Gaming performance optimization</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>RGB lighting & steelseries keyboard</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Advanced cooling system repair</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Hardware upgrade & enhancement</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-green-600 font-semibold">Same day service available</span>
                  </div>
                </CardContent>
              </Card>

              {/* Acer Laptop Repair */}
              <Card className="hover:shadow-xl transition-all duration-300 bg-white border-2 hover:border-blue-200 h-full">
                <CardHeader className="text-center pb-4">
                  <HardDrive className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-blue-700">Acer Laptop Repair in Noida</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    Quality Acer laptop repair for Aspire, Predator, Swift, Spin, Nitro, and ConceptD models
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Performance upgrades & tuning</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>SSD installation & migration</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>RAM upgrade & memory issues</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>System optimization & speed boost</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span className="text-green-600 font-semibold">Same day service available</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Expert Laptop Repair Quote for Your Brand in Noida Greater Noida
              </h3>
              <p className="text-gray-600 mb-6">
                Professional repair services for all laptop brands with genuine parts, expert technicians, and comprehensive warranty
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
        </div>
      </section>

      {/* Common Laptop Problems Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Common Laptop Problems We Fix in Noida Greater Noida
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Expert solutions for all types of laptop issues with fast diagnosis, genuine parts, and professional repair service
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonProblems.map((problem, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Settings className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{problem}</h3>
                        <p className="text-sm text-gray-600">Professional diagnosis and repair with genuine parts and warranty</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Don't See Your Problem Listed?</h3>
                <p className="text-lg mb-6">Our expert technicians can diagnose and fix any laptop issue. Contact us for free consultation!</p>
                <a
                  href={`tel:+91${CONTACT_INFO.phone1}`}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Get Free Diagnosis: {CONTACT_INFO.phone1}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Search Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Popular Laptop Repair Searches in Noida Greater Noida
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Find exactly what you're looking for with our comprehensive laptop repair services across all Noida sectors
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonSearches.map((search, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-600">
                  <div className="flex items-center space-x-3">
                    <Search className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-900 capitalize">{search}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Can't Find What You're Looking For?
                </h3>
                <p className="text-gray-600 mb-6">
                  We offer comprehensive laptop repair services for all brands and models. Contact us directly for personalized assistance!
                </p>
                <a
                  href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20help%20with%20laptop%20repair%20in%20Noida`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
                >
                  <Search className="h-5 w-5" />
                  <span>Ask Our Experts on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Laptop Repair Service Coverage Across Noida Greater Noida
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Professional doorstep laptop repair services available in all sectors and areas with free pickup and delivery
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {noidaAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                  <MapPin className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs font-medium text-gray-900">{area}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Free Doorstep Service Across All Areas!</h3>
                <p className="text-lg mb-6">We provide free pickup and delivery service for laptop repair across all Noida Greater Noida locations</p>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex items-center space-x-2 text-lg">
                    <MapPin className="h-6 w-6" />
                    <span>All Sectors Covered</span>
                  </div>
                  <div className="flex items-center space-x-2 text-lg">
                    <Clock className="h-6 w-6" />
                    <span>Same Day Service</span>
                  </div>
                  <div className="flex items-center space-x-2 text-lg">
                    <Shield className="h-6 w-6" />
                    <span>100% Safe & Secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Why MacLap IT Care is Noida's #1 Choice for Laptop Repair
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Thousands of satisfied customers trust us for reliable, affordable, and professional laptop repair services
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">10,000+ Happy Customers</h3>
                  <p className="text-gray-600">Trusted by thousands across Noida Greater Noida for reliable laptop repair services</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Clock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Same Day Service</h3>
                  <p className="text-gray-600">Most laptop repairs completed within 4-6 hours with genuine parts and warranty</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">3 Months Warranty</h3>
                  <p className="text-gray-600">Comprehensive warranty on all repair services with 100% quality guarantee</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <ThumbsUp className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">99% Success Rate</h3>
                  <p className="text-gray-600">Highest repair success rate in Noida with expert technicians and advanced tools</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Fix Your Laptop Today?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact MacLap IT Care for fast, reliable, and affordable laptop repair services in Noida Greater Noida
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors flex items-center space-x-2 text-lg"
              >
                <Phone className="h-6 w-6" />
                <span>Call Now: {CONTACT_INFO.phone1}</span>
              </a>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20laptop%20repair%20service%20in%20Noida%20Greater%20Noida`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-colors text-lg"
              >
                WhatsApp for Instant Quote
              </a>
            </div>
            <div className="mt-8 text-lg opacity-90">
              <p>📍 Serving all sectors in Noida Greater Noida | 🕒 Available 24/7 | 🚚 Free Pickup & Delivery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}