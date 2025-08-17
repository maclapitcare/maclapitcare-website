import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CheckCircle, Monitor, Battery, Keyboard, Cpu, Search, Phone, MessageCircle, IndianRupee, TrendingUp } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ContactForm from "@/components/forms/contact-form";


export default function MacBookComponentPricing() {
  useEffect(() => {
    document.title = "MacBook Component Repair Price Guide - Screen, Battery, Keyboard Pricing Delhi NCR | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get today's best prices for MacBook repairs - Screen, Battery, Keyboard, Logic Board. Market price comparison. Contact MacLap IT Care for instant quotes. Delhi NCR service. Call 9910248555");
    }
  }, []);

  const commonSearches = [
    "MacBook Air screen replacement price Delhi",
    "MacBook Pro battery replacement cost Noida", 
    "MacBook keyboard repair price Gurgaon",
    "M1 MacBook Air display replacement cost",
    "MacBook Pro logic board repair price",
    "MacBook Air 2020 screen price in India",
    "MacBook battery replacement near me",
    "MacBook Pro 16 screen replacement cost",
    "M2 MacBook Air battery price",
    "MacBook keyboard replacement Delhi NCR",
    "MacBook screen repair Ghaziabad price",
    "MacBook logic board repair cost India",
    "MacBook trackpad replacement price",
    "MacBook touchbar replacement cost",
    "MacBook Air M1 repair price Delhi",
    "MacBook Pro 14 screen replacement cost",
    "MacBook battery replacement Ghaziabad",
    "M2 MacBook Pro repair price",
    "MacBook liquid damage repair cost",
    "MacBook keyboard keys replacement price",
    "MacBook charging port repair cost",
    "MacBook speaker replacement price Delhi",
    "MacBook Air 2018 screen replacement",
    "MacBook Pro 2021 battery price",
    "MacBook repair shop near me Delhi",
    "MacBook data recovery cost India",
    "MacBook SSD upgrade price Delhi",
    "MacBook motherboard repair cost",
    "MacBook camera repair price Noida",
    "MacBook water damage repair Delhi",
    "MacBook hinge replacement cost",
    "MacBook fan replacement price",
    "MacBook thermal paste replacement",
    "MacBook display connector repair",
    "MacBook wifi card replacement cost",
    "MacBook bluetooth repair price",
    "MacBook USB port repair cost Delhi",
    "MacBook headphone jack repair",
    "MacBook power button replacement",
    "MacBook volume keys repair price",
    "MacBook hard drive replacement cost",
    "MacBook RAM upgrade price Delhi",
    "MacBook cooling system repair",
    "MacBook bezel replacement cost",
    "MacBook palmrest replacement price",
    "MacBook backup battery replacement",
    "MacBook CMOS battery price",
    "MacBook display cable repair cost"
  ];

  const componentPricing = {
    screen: {
      title: "Screen Replacement",
      icon: Monitor,
      description: "Professional screen replacement with quality displays",
      models: [
        { name: "MacBook Air 13\" (2018-2020)", marketRange: "₹15,000 - ₹25,000", note: "Market rates vary" },
        { name: "MacBook Air 13\" M1/M2 (2020-2024)", marketRange: "₹18,000 - ₹30,000", note: "Market rates vary" },
        { name: "MacBook Pro 13\" (2016-2020)", marketRange: "₹20,000 - ₹35,000", note: "Market rates vary" },
        { name: "MacBook Pro 13\" M1/M2 (2020-2024)", marketRange: "₹22,000 - ₹38,000", note: "Market rates vary" },
        { name: "MacBook Pro 14\" M1 Pro/Max (2021-2024)", marketRange: "₹35,000 - ₹60,000", note: "Market rates vary" },
        { name: "MacBook Pro 16\" (2019-2024)", marketRange: "₹40,000 - ₹70,000", note: "Market rates vary" }
      ],
      warranty: "Up to 3 months screen warranty",
      timeframe: "2-4 hours same day service",
      features: ["Quality display panels", "Perfect color calibration", "Touch sensitivity restored", "Up to 3-month warranty", "Same-day service available"]
    },
    battery: {
      title: "Battery Replacement", 
      icon: Battery,
      description: "Quality batteries with extended lifespan",
      models: [
        { name: "MacBook Air 13\" (2017-2020)", marketRange: "₹8,000 - ₹18,000", note: "Market rates vary" },
        { name: "MacBook Air 13\" M1/M2 (2020-2024)", marketRange: "₹10,000 - ₹20,000", note: "Market rates vary" },
        { name: "MacBook Pro 13\" (2016-2020)", marketRange: "₹12,000 - ₹22,000", note: "Market rates vary" },
        { name: "MacBook Pro 13\" M1/M2 (2020-2024)", marketRange: "₹14,000 - ₹25,000", note: "Market rates vary" },
        { name: "MacBook Pro 14\" M1 Pro/Max (2021-2024)", marketRange: "₹18,000 - ₹32,000", note: "Market rates vary" },
        { name: "MacBook Pro 16\" (2019-2024)", marketRange: "₹20,000 - ₹35,000", note: "Market rates vary" }
      ],
      warranty: "6 months battery warranty",
      timeframe: "1-2 hours replacement", 
      features: ["Quality battery cells", "Extended battery life", "Safe installation", "6-month warranty", "Battery health optimization"]
    },
    keyboard: {
      title: "Keyboard Replacement",
      icon: Keyboard,
      description: "Complete keyboard assembly with perfect key response",
      models: [
        { name: "MacBook Air 13\" (2018-2020)", marketRange: "₹12,000 - ₹25,000", note: "Market rates vary" },
        { name: "MacBook Air 13\" M1/M2 (2020-2024)", marketRange: "₹15,000 - ₹28,000", note: "Market rates vary" },
        { name: "MacBook Pro 13\" (2016-2020)", marketRange: "₹18,000 - ₹32,000", note: "Market rates vary" },
        { name: "MacBook Pro 13\" M1/M2 (2020-2024)", marketRange: "₹20,000 - ₹35,000", note: "Market rates vary" },
        { name: "MacBook Pro 14\" M1 Pro/Max (2021-2024)", marketRange: "₹25,000 - ₹45,000", note: "Market rates vary" },
        { name: "MacBook Pro 16\" (2019-2024)", marketRange: "₹28,000 - ₹50,000", note: "Market rates vary" }
      ],
      warranty: "90 days key mechanism warranty",
      timeframe: "3-5 hours service",
      features: ["Complete top case replacement", "Perfect key travel", "Backlight functionality", "90-day warranty", "Butterfly/scissor mechanism"]
    },
    logicboard: {
      title: "Logic Board Repair",
      icon: Cpu,
      description: "Component-level repair and microsoldering services",
      models: [
        { name: "MacBook Air 13\" Logic Board Issues", marketRange: "₹20,000 - ₹40,000", note: "Market rates vary" },
        { name: "MacBook Air M1/M2 Logic Board Repair", marketRange: "₹25,000 - ₹50,000", note: "Market rates vary" },
        { name: "MacBook Pro 13\" Logic Board Repair", marketRange: "₹22,000 - ₹45,000", note: "Market rates vary" },
        { name: "MacBook Pro M1/M2 Logic Board Issues", marketRange: "₹28,000 - ₹55,000", note: "Market rates vary" },
        { name: "MacBook Pro 14\" Logic Board Repair", marketRange: "₹35,000 - ₹70,000", note: "Market rates vary" },
        { name: "MacBook Pro 16\" Logic Board Issues", marketRange: "₹40,000 - ₹80,000", note: "Market rates vary" }
      ],
      warranty: "60 days component warranty",
      timeframe: "24-48 hours repair",
      features: ["Microsoldering expertise", "Component replacement", "Liquid damage recovery", "60-day warranty", "Advanced diagnostic tools"]
    },
    trackpad: {
      title: "Trackpad Replacement",
      icon: Monitor,
      description: "Professional trackpad replacement with perfect touch sensitivity",
      models: [
        { name: "MacBook Air 13\" (2018-2020)", marketRange: "₹8,000 - ₹15,000", note: "Market rates vary" },
        { name: "MacBook Air 13\" M1/M2 (2020-2024)", marketRange: "₹10,000 - ₹18,000", note: "Market rates vary" },
        { name: "MacBook Pro 13\" (2016-2020)", marketRange: "₹12,000 - ₹20,000", note: "Market rates vary" },
        { name: "MacBook Pro 13\" M1/M2 (2020-2024)", marketRange: "₹14,000 - ₹22,000", note: "Market rates vary" },
        { name: "MacBook Pro 14\" M1 Pro/Max (2021-2024)", marketRange: "₹18,000 - ₹28,000", note: "Market rates vary" },
        { name: "MacBook Pro 16\" (2019-2024)", marketRange: "₹20,000 - ₹32,000", note: "Market rates vary" }
      ],
      warranty: "30 days trackpad warranty",
      timeframe: "2-3 hours replacement",
      features: ["Force Touch technology", "Perfect click response", "Multi-touch gestures", "30-day warranty", "Precision calibration"]
    },
    touchbar: {
      title: "Touchbar Replacement",
      icon: Monitor,
      description: "Touchbar replacement service for MacBook Pro models",
      models: [
        { name: "MacBook Pro 13\" Touchbar (2016-2019)", marketRange: "₹15,000 - ₹25,000", note: "Market rates vary" },
        { name: "MacBook Pro 15\" Touchbar (2016-2019)", marketRange: "₹18,000 - ₹30,000", note: "Market rates vary" },
        { name: "MacBook Pro 16\" Touchbar (2019-2021)", marketRange: "₹20,000 - ₹35,000", note: "Market rates vary" }
      ],
      warranty: "No warranty coverage",
      timeframe: "3-5 hours service",
      features: ["Original touchbar assembly", "OLED display functionality", "Touch ID integration", "Professional installation", "No warranty provided"]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MacBook Repair Price Guide Delhi NCR
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Get today's best prices for MacBook repairs. Contact MacLap IT Care for instant quotes on screen, battery, keyboard & logic board services.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <button
                className="bg-white hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors text-blue-600"
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
              >
                <Phone className="mr-2 h-5 w-5 inline" />
                Call {CONTACT_INFO.phone1}
              </button>
              <button
                className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors text-white"
                onClick={() => window.location.href = `https://wa.me/91${CONTACT_INFO.phone1}?text=Hi, I need MacBook repair quote`}
              >
                <MessageCircle className="mr-2 h-5 w-5 inline" />
                WhatsApp Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Searches Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Price Searches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most searched MacBook repair pricing queries in Delhi NCR
            </p>
          </div>

          <div className="max-h-96 overflow-y-auto bg-gray-50 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {commonSearches.map((search, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 font-medium">{search}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 mb-4">
              Looking for specific model pricing? Contact us for today's best rates!
            </p>
            <Badge variant="outline" className="text-blue-600 border-blue-600 px-6 py-2 text-lg">
              <IndianRupee className="mr-2 h-4 w-4" />
              Contact for Today's Best Price
            </Badge>
          </div>
        </div>
      </section>

      {/* Component Pricing Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Market Price Comparison Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare market rates and contact MacLap IT Care for competitive pricing
            </p>
          </div>

          <Tabs defaultValue="screen" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-6">
              {Object.entries(componentPricing).map(([key, component]) => (
                <TabsTrigger key={key} value={key} className="flex items-center space-x-2">
                  <component.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{component.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(componentPricing).map(([key, component]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="text-center mb-8">
                  <component.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{component.title}</h3>
                  <p className="text-lg text-gray-600">{component.description}</p>
                  
                  <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 mt-6">
                    <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                      <CheckCircle className="h-4 w-4" />
                      <span className="font-semibold">{component.warranty}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                      <span className="font-semibold">{component.timeframe}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {component.models.map((model, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{model.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="text-center">
                            <div className="text-lg font-semibold text-gray-600 mb-2">Market Range</div>
                            <div className="text-xl font-bold text-blue-600">{model.marketRange}</div>
                            <p className="text-sm text-gray-500 mt-1">{model.note}</p>
                          </div>
                          
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
                            <p className="text-sm font-medium text-yellow-800 mb-2">Get Today's Best Price</p>
                            <Button 
                              size="sm" 
                              className="bg-green-600 hover:bg-green-700 text-white"
                              onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                            >
                              <Phone className="mr-1 h-3 w-3" />
                              Call Now
                            </Button>
                          </div>
                          
                          <div className="pt-3 border-t">
                            <div className="space-y-2">
                              {component.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-sm">
                                  <CheckCircle className="h-3 w-3 text-green-500" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">What's Included in {component.title}:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {component.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Your Personalized Quote Today
              </h2>
              <p className="text-xl text-gray-600">
                Contact MacLap IT Care for competitive pricing and professional MacBook repair service
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose MacLap IT Care?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg text-gray-700">Competitive Market Pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg text-gray-700">Quality Components & Parts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg text-gray-700">Same-Day Service Available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg text-gray-700">Free Pickup & Drop Service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg text-gray-700">Comprehensive Warranty Coverage</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call {CONTACT_INFO.phone1}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    onClick={() => window.location.href = `https://wa.me/91${CONTACT_INFO.phone1}?text=Hi, I need MacBook repair quote`}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Quote
                  </Button>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Request Instant Quote</h4>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}