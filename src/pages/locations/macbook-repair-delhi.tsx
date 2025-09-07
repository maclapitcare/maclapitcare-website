import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Shield, Phone, Star, Monitor, Battery, Keyboard, Cpu } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function MacBookRepairDelhi() {
  useEffect(() => {
    document.title = "MacBook Repair Delhi - Best Apple Service Center Near Me | Screen Battery Keyboard Logic Board | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Delhi's #1 MacBook repair service. MacBook Pro Air screen replacement ₹8999, battery ₹6999, keyboard ₹8999, logic board repair ₹12999. Free pickup delivery all Delhi areas. Same day service. Apple certified parts. Call 9211720790");
    }
  }, []);

  const delhiAreas = [
    "Connaught Place", "Karol Bagh", "Lajpat Nagar", "South Extension", "Rajouri Garden",
    "Janakpuri", "Dwarka", "Rohini", "Pitampura", "Model Town", "Civil Lines",
    "Khan Market", "Greater Kailash", "Vasant Kunj", "Nehru Place", "Chandni Chowk",
    "Laxmi Nagar", "Tilak Nagar", "Ashok Vihar", "Preet Vihar", "Mayur Vihar",
    "Kalkaji", "Malviya Nagar", "Saket", "Hauz Khas", "Green Park", "INA Market",
    "Daryaganj", "Paharganj", "Sadar Bazaar", "Azadpur", "Shalimar Bagh",
    "Naraina", "Moti Nagar", "Kirti Nagar", "Punjabi Bagh", "Tagore Garden"
  ];

  const macbookServices = [
    {
      title: "MacBook Screen Replacement",
      icon: Monitor,
      price: "₹8,999+",
      description: "Original quality Retina display replacement for all MacBook models",
      warranty: "3 months"
    },
    {
      title: "MacBook Battery Replacement", 
      icon: Battery,
      price: "₹6,999+",
      description: "Genuine battery replacement with extended lifespan",
      warranty: "6 months"
    },
    {
      title: "MacBook Keyboard Repair",
      icon: Keyboard, 
      price: "₹8,999+",
      description: "Complete keyboard assembly replacement with perfect key response",
      warranty: "90 days"
    },
    {
      title: "MacBook Logic Board Repair",
      icon: Cpu,
      price: "₹12,999+", 
      description: "Component-level repair and microsoldering for liquid damage",
      warranty: "60 days"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4">Delhi's #1 MacBook Repair Service Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MacBook Repair Delhi - Best Apple Service Center Near Me
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Delhi's most trusted MacBook Pro Air repair service center. Screen replacement ₹8999+, battery ₹6999+, keyboard ₹8999+, logic board repair ₹12999+. Free doorstep pickup delivery all Delhi areas. Same day service with Apple certified parts and warranty.
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
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20repair%20in%20Delhi`}
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
              MacBook Repair Coverage in Delhi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide doorstep MacBook repair services across all areas in Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {delhiAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                <p className="text-sm font-medium text-foreground">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MacBook Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MacBook Repair Services in Delhi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete MacBook repair solutions with genuine parts and expert service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {macbookServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-3">
                  <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
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

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Maclap IT Care for MacBook Repair in Delhi?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "Free Doorstep Service",
                description: "Free pickup and delivery across Delhi NCR"
              },
              {
                icon: Star,
                title: "4.9/5 Customer Rating",
                description: "Trusted by 1000+ satisfied customers"
              },
              {
                icon: Clock,
                title: "Same-Day Service",
                description: "Most repairs completed within 2-4 hours"
              },
              {
                icon: Shield,
                title: "Genuine Parts Only",
                description: "Original quality components with warranty"
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

      {/* Comprehensive MacBook Repair Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Complete MacBook Repair Guide for Delhi Customers
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* MacBook Models We Repair */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">MacBook Models We Repair in Delhi</h3>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">MacBook Air Repair Delhi</h4>
                    <p className="text-sm text-muted-foreground">MacBook Air 13-inch (M1, M2, M3), MacBook Air 15-inch (M2, M3), MacBook Air 13-inch (2017-2020), MacBook Air 11-inch (2013-2017)</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">MacBook Pro Repair Delhi</h4>
                    <p className="text-sm text-muted-foreground">MacBook Pro 14-inch (M1 Pro, M2 Pro, M3 Pro), MacBook Pro 16-inch (M1 Pro/Max, M2 Pro/Max, M3 Pro/Max), MacBook Pro 13-inch (M1, M2), MacBook Pro 13/15-inch (2016-2020)</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Legacy MacBook Repair Delhi</h4>
                    <p className="text-sm text-muted-foreground">MacBook Pro 13/15/17-inch (2009-2015), MacBook Air 11/13-inch (2010-2017), MacBook 12-inch (2015-2017)</p>
                  </div>
                </div>
              </div>

              {/* Common Issues */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Common MacBook Issues We Fix in Delhi</h3>
                <div className="space-y-3">
                  {[
                    "MacBook screen black or flickering display repair Delhi",
                    "MacBook battery not charging or draining fast Delhi",
                    "MacBook keyboard not working or stuck keys Delhi", 
                    "MacBook overheating and fan noise issues Delhi",
                    "MacBook liquid damage and water damage repair Delhi",
                    "MacBook not turning on or booting issues Delhi",
                    "MacBook logic board repair and microsoldering Delhi",
                    "MacBook SSD upgrade and data recovery Delhi",
                    "MacBook speaker not working or audio issues Delhi",
                    "MacBook trackpad not responding repair Delhi",
                    "MacBook hinge broken or screen loose Delhi",
                    "MacBook charging port damaged repair Delhi"
                  ].map((issue, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delhi Area-Specific Service Details */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              MacBook Repair Service Areas Across Delhi NCR
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Central Delhi MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional MacBook repair services in Central Delhi including Connaught Place, Khan Market, India Gate, Lodhi Road, and surrounding areas. Same-day pickup and delivery service available.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Connaught Place MacBook Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Khan Market MacBook Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Daryaganj MacBook Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">South Delhi MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Expert MacBook repair in South Delhi covering Greater Kailash, Lajpat Nagar, South Extension, Nehru Place, Saket, and all major markets. Free doorstep service available.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Greater Kailash MacBook Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Nehru Place MacBook Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Saket MacBook Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">West Delhi MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive MacBook repair services in West Delhi including Janakpuri, Rajouri Garden, Dwarka, Tilak Nagar, and nearby residential areas. Quick turnaround guaranteed.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Janakpuri MacBook Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Dwarka MacBook Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Rajouri Garden MacBook Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">North Delhi MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Reliable MacBook repair in North Delhi covering Model Town, Civil Lines, Rohini, Pitampura, and Azadpur. Professional technicians with 10+ years experience.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Model Town MacBook Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Rohini MacBook Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Pitampura MacBook Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">East Delhi MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Quality MacBook repair services in East Delhi including Laxmi Nagar, Preet Vihar, Mayur Vihar, Kalkaji, and adjacent colonies. Affordable pricing with warranty.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Laxmi Nagar MacBook Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Preet Vihar MacBook Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Mayur Vihar MacBook Repair</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-600">New Delhi MacBook Repair</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Premium MacBook repair in New Delhi area covering government quarters, embassy areas, and high-security zones. Trusted service provider with verified credentials.
                </p>
                <div className="text-sm space-y-1">
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Diplomatic Enclave Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />Chanakyapuri MacBook Repair</div>
                  <div className="flex items-center"><MapPin className="h-3 w-3 mr-2 text-blue-500" />RK Puram MacBook Repair</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              MacBook Repair Pricing Delhi - Transparent & Competitive Rates
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">MacBook Screen Replacement Delhi</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span>MacBook Air 13" (2018-2020)</span><span className="font-semibold">₹8,999</span></div>
                  <div className="flex justify-between"><span>MacBook Air 13" (M1/M2)</span><span className="font-semibold">₹12,999</span></div>
                  <div className="flex justify-between"><span>MacBook Pro 13" (2016-2020)</span><span className="font-semibold">₹15,999</span></div>
                  <div className="flex justify-between"><span>MacBook Pro 14" (M1/M2 Pro)</span><span className="font-semibold">₹28,999</span></div>
                  <div className="flex justify-between"><span>MacBook Pro 16" (M1/M2 Pro/Max)</span><span className="font-semibold">₹35,999</span></div>
                </div>
                <div className="mt-4 text-xs text-green-600 font-semibold">✓ 3-month warranty included</div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">MacBook Battery Replacement Delhi</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span>MacBook Air 13" (2018-2020)</span><span className="font-semibold">₹6,999</span></div>
                  <div className="flex justify-between"><span>MacBook Air 13" (M1/M2)</span><span className="font-semibold">₹8,999</span></div>
                  <div className="flex justify-between"><span>MacBook Pro 13" (2016-2020)</span><span className="font-semibold">₹9,999</span></div>
                  <div className="flex justify-between"><span>MacBook Pro 14" (M1/M2 Pro)</span><span className="font-semibold">₹12,999</span></div>
                  <div className="flex justify-between"><span>MacBook Pro 16" (M1/M2 Pro/Max)</span><span className="font-semibold">₹15,999</span></div>
                </div>
                <div className="mt-4 text-xs text-green-600 font-semibold">✓ 6-month warranty included</div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">MacBook Keyboard Repair Delhi</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span>MacBook Air 13" (2018-2020)</span><span className="font-semibold">₹8,999</span></div>
                  <div className="flex justify-between"><span>MacBook Air 13" (M1/M2)</span><span className="font-semibold">₹12,999</span></div>
                  <div className="flex justify-between"><span>MacBook Pro 13" (2016-2020)</span><span className="font-semibold">₹12,999</span></div>
                  <div className="flex justify-between"><span>MacBook Pro 14" (M1/M2 Pro)</span><span className="font-semibold">₹15,999</span></div>
                  <div className="flex justify-between"><span>MacBook Pro 16" (M1/M2 Pro/Max)</span><span className="font-semibold">₹18,999</span></div>
                </div>
                <div className="mt-4 text-xs text-green-600 font-semibold">✓ 90-day warranty included</div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center text-blue-600">Additional MacBook Repair Services Delhi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>MacBook Logic Board Repair</span><span className="font-semibold">₹12,999+</span></div>
                  <div className="flex justify-between"><span>MacBook Liquid Damage Repair</span><span className="font-semibold">₹15,999+</span></div>
                  <div className="flex justify-between"><span>MacBook SSD Upgrade (256GB to 512GB)</span><span className="font-semibold">₹18,999</span></div>
                  <div className="flex justify-between"><span>MacBook RAM Upgrade (8GB to 16GB)</span><span className="font-semibold">₹12,999</span></div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>MacBook Speaker Replacement</span><span className="font-semibold">₹4,999</span></div>
                  <div className="flex justify-between"><span>MacBook Fan Replacement</span><span className="font-semibold">₹3,999</span></div>
                  <div className="flex justify-between"><span>MacBook Data Recovery</span><span className="font-semibold">₹3,999+</span></div>
                  <div className="flex justify-between"><span>MacBook Diagnostic Service</span><span className="font-semibold">Free</span></div>
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
              Frequently Asked Questions - MacBook Repair Delhi
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How much does MacBook screen replacement cost in Delhi?",
                  answer: "MacBook screen replacement cost in Delhi ranges from ₹8,999 to ₹35,999 depending on the model. MacBook Air 13-inch screen replacement costs ₹8,999-₹12,999, MacBook Pro 13-inch costs ₹12,999-₹18,999, MacBook Pro 14-inch costs ₹25,999-₹30,999, and MacBook Pro 16-inch costs ₹30,999-₹35,999. We use only original quality LCD panels with 3-month warranty."
                },
                {
                  question: "Where is the best MacBook repair center in Delhi?",
                  answer: "Maclap IT Care is Delhi's most trusted MacBook repair center with 4.9/5 customer rating. We provide doorstep pickup and delivery service across all Delhi areas including Connaught Place, South Extension, Karol Bagh, Dwarka, and Rohini. Our certified technicians use only genuine Apple parts with warranty coverage."
                },
                {
                  question: "How long does MacBook battery replacement take in Delhi?",
                  answer: "MacBook battery replacement in Delhi typically takes 2-4 hours for most models. MacBook Air battery replacement costs ₹6,999-₹8,999 and MacBook Pro battery replacement costs ₹8,999-₹12,999. We provide free pickup and delivery service across Delhi with 6-month battery warranty and same-day service."
                },
                {
                  question: "Do you repair MacBook liquid damage in Delhi?",
                  answer: "Yes, we specialize in MacBook liquid damage repair in Delhi using advanced ultrasonic cleaning and microsoldering techniques. MacBook liquid damage repair cost starts from ₹12,999 depending on the extent of damage. Our success rate for liquid damage recovery is 85% with 60-day warranty on logic board repairs."
                },
                {
                  question: "Is MacBook keyboard replacement available in Delhi?",
                  answer: "Yes, we provide MacBook keyboard replacement service across Delhi for all models. MacBook keyboard replacement cost ranges from ₹8,999 to ₹15,999 depending on the model and year. We replace complete keyboard assembly including backlight for perfect key response with 90-day warranty."
                },
                {
                  question: "Do you provide MacBook data recovery service in Delhi?",
                  answer: "Yes, we offer professional MacBook data recovery service in Delhi for corrupted SSD, liquid damage, and system failure cases. Our data recovery success rate is 90% with free diagnosis. MacBook data recovery cost starts from ₹3,999 with no data, no charge policy across all Delhi locations."
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

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your MacBook Repaired in Delhi Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional service with doorstep convenience across all Delhi locations
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`tel:+91${CONTACT_INFO.phone1}`}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: {CONTACT_INFO.phone1}
            </a>
            <a
              href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20repair%20in%20Delhi`}
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