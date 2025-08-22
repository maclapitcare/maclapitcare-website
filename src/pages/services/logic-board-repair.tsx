import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  Clock, 
  Shield, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  AlertTriangle,
  Wrench,
  Zap,
  HardDrive,
  Search,
  TrendingUp,
  Laptop
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function LogicBoardRepair() {
  useEffect(() => {
    document.title = "MacBook Logic Board Repair Chip Level Delhi NCR | Motherboard Microsoldering Noida Gurgaon ₹1499+ | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert MacBook logic board chip-level repair Delhi NCR from ₹1499+. Liquid damage recovery, power issues, motherboard microsoldering. 90% success rate. Same-day service Noida Gurgaon. Call 9211720790");
    }
    

  }, []);

  const commonLogicBoardSearches = [
    "MacBook logic board repair price Delhi",
    "MacBook motherboard repair cost Noida",
    "MacBook liquid damage repair Gurgaon", 
    "MacBook not turning on repair Delhi NCR",
    "MacBook chip level repair Noida",
    "MacBook water damage repair cost",
    "MacBook power issue repair Ghaziabad",
    "MacBook microsoldering service Delhi",
    "MacBook logic board replacement price",
    "MacBook dead repair service Noida",
    "MacBook corrosion repair Delhi NCR",
    "MacBook GPU repair chip level",
    "MacBook CPU repair microsoldering",
    "MacBook power IC repair cost",
    "MacBook charging circuit repair",
    "MacBook USB port repair Delhi",
    "MacBook wifi not working repair",
    "MacBook Bluetooth repair service",
    "MacBook audio not working fix",
    "MacBook keyboard trackpad dead",
    "MacBook display no backlight repair",
    "MacBook overheating logic board fix",
    "MacBook random shutdown repair",
    "MacBook graphics card repair Delhi",
    "MacBook component level repair Noida",
    "MacBook board repair near me",
    "MacBook liquid spill repair cost",
    "MacBook coffee damage repair",
    "MacBook tea spill logic board",
    "MacBook short circuit repair Delhi",
    "MacBook capacitor replacement cost",
    "MacBook resistor repair service",
    "MacBook IC replacement microsoldering",
    "MacBook BIOS chip repair Delhi",
    "MacBook firmware corruption fix",
    "MacBook power management repair",
    "MacBook SMC reset not working",
    "MacBook PRAM battery replacement",
    "MacBook logic board diagnostic Delhi",
    "MacBook motherboard testing service",
    "MacBook component failure repair",
    "MacBook electronic repair Noida",
    "MacBook circuit board repair cost",
    "MacBook advanced repair service",
    "MacBook professional repair Delhi NCR",
    "MacBook expert technician Noida",
    "MacBook specialized repair Gurgaon",
    "MacBook precision repair service"
  ];

  const logicBoardIssues = [
    "MacBook not turning on",
    "Liquid damage to logic board", 
    "No display but power LED on",
    "Overheating and random shutdowns",
    "USB ports not working",
    "WiFi/Bluetooth not functioning",
    "Charging port issues",
    "Graphics card failures",
    "Audio not working",
    "Keyboard/trackpad unresponsive"
  ];

  const repairServices = [
    {
      issue: "Liquid Damage Repair",
      description: "Complete cleaning and component repair for liquid spills",
      price: "₹8,999+",
      time: "2-3 days"
    },
    {
      issue: "Power Management Issues", 
      description: "Fixing power IC, charging circuits, and power delivery",
      price: "₹1,499+",
      time: "1-2 days"
    },
    {
      issue: "GPU Repair",
      description: "Graphics card chip reballing and replacement",
      price: "₹12,999+", 
      time: "3-4 days"
    },
    {
      issue: "CPU Issues",
      description: "Processor and related component repair",
      price: "₹15,999+",
      time: "3-5 days"
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "Micro Diagnosis",
      description: "Component-level testing using advanced diagnostic tools"
    },
    {
      step: "2", 
      title: "Schematic Analysis",
      description: "Circuit analysis using official Apple schematics"
    },
    {
      step: "3",
      title: "Chip Level Repair", 
      description: "Micro-soldering and component replacement"
    },
    {
      step: "4",
      title: "Quality Testing",
      description: "Comprehensive functionality and stress testing"
    }
  ];

  const macBookModels = [
    "MacBook Air 11\" (2010-2017)",
    "MacBook Air 13\" (2010-2024)", 
    "MacBook Pro 13\" (2009-2024)",
    "MacBook Pro 15\" (2008-2019)",
    "MacBook Pro 16\" (2019-2024)",
    "MacBook 12\" Retina (2015-2017)"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-red-500 text-white mb-4 px-4 py-1">
              Logic Board Specialists
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MacBook Logic Board Repair Chip Level Delhi NCR
            </h1>
            <p className="text-xl mb-8">
              Expert MacBook motherboard repair & microsoldering service Delhi NCR. Professional chip-level logic board repair for liquid damage, power issues, GPU failures & component-level repairs in Noida Gurgaon Ghaziabad.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => typeof window !== "undefined" && (window.location.href = `tel:${CONTACT_INFO.phone1}`)}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {CONTACT_INFO.phone1}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-blue-900 hover:bg-gray-100 border-white"
                onClick={() => typeof window !== "undefined" && (window.location.href = '/contact')}
              >
                Free Logic Board Diagnosis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Logic Board Searches Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Logic Board Repair Searches Delhi NCR
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most searched MacBook logic board & motherboard repair queries in Delhi, Noida, Gurgaon, Ghaziabad
            </p>
          </div>

          <div className="max-h-96 overflow-y-auto bg-gray-50 rounded-lg p-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {commonLogicBoardSearches.map((search, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 font-medium text-sm">{search}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              Need chip-level logic board repair? Contact MacLap IT Care for expert microsoldering service!
            </p>
            <Badge variant="outline" className="text-blue-600 border-blue-600 px-6 py-2 text-lg">
              <Cpu className="mr-2 h-4 w-4" />
              Expert Logic Board Repair Delhi NCR
            </Badge>
          </div>
        </div>
      </section>

      {/* Logic Board Issues */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Logic Board Problems We Fix Delhi NCR</h2>
            <p className="text-xl text-muted-foreground">
              Complete MacBook motherboard repair & microsoldering for liquid damage, power issues, component failures Noida Gurgaon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {logicBoardIssues.map((issue, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-foreground">{issue}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services & Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Logic Board Repair Services & Pricing Delhi NCR</h2>
            <p className="text-xl text-muted-foreground">
              Professional MacBook motherboard microsoldering services with transparent pricing Noida Gurgaon Ghaziabad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {repairServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Cpu className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.issue}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                        <div className="text-sm text-muted-foreground">{service.time}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Models */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Models Logic Board Repair Delhi NCR</h2>
            <p className="text-xl text-muted-foreground">
              Expert MacBook motherboard repair for all generations - Air, Pro, M1, M2, Intel models Noida Gurgaon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {macBookModels.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{model}</h3>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-muted-foreground text-sm">Full Support</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">MacBook Logic Board Microsoldering Process Delhi NCR</h2>
            <p className="text-xl text-muted-foreground">
              Advanced MacBook motherboard chip-level repair with precision microsoldering equipment Noida Gurgaon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairProcess.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Expertise */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Logic Board Service?</h2>
            <p className="text-xl text-muted-foreground">
              Advanced equipment and certified micro-soldering expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Micro-Soldering</h3>
                <p className="text-muted-foreground">
                  Advanced micro-soldering equipment for component-level repairs
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <HardDrive className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Apple Schematics</h3>
                <p className="text-muted-foreground">
                  Official Apple board schematics for accurate diagnosis
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Same Day Service</h3>
                <p className="text-muted-foreground">
                  Most logic board repairs completed within 24-48 hours
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">90% Success Rate</h3>
                <p className="text-muted-foreground">
                  High success rate even for complex liquid damage cases
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">1-3 Months Warranty</h3>
                <p className="text-muted-foreground">
                  Warranty on logic board repairs based on repair complexity
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">No Fix No Fee</h3>
                <p className="text-muted-foreground">
                  You only pay if we successfully repair your logic board
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Liquid Damage Specialist Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Liquid Damage Specialists</h2>
            <p className="text-xl mb-8">
              Don't lose hope! We can recover most liquid-damaged MacBooks with our specialized process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white text-primary text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Water Damage</h3>
                <p className="text-sm">Clean water spills with immediate professional cleaning</p>
                <div className="text-2xl font-bold mt-2 text-green-600">95% Success</div>
              </CardContent>
            </Card>

            <Card className="bg-white text-primary text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Coffee/Tea Spills</h3>
                <p className="text-sm">Sugary liquids requiring thorough component cleaning</p>
                <div className="text-2xl font-bold mt-2 text-yellow-600">85% Success</div>
              </CardContent>
            </Card>

            <Card className="bg-white text-primary text-center">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Severe Corrosion</h3>
                <p className="text-sm">Advanced damage requiring component replacement</p>
                <div className="text-2xl font-bold mt-2 text-orange-600">70% Success</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg mb-4">
              <strong>Time is critical!</strong> Bring your liquid-damaged MacBook within 24 hours for best results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">MacBook Logic Board Repair Delhi NCR - Expert Microsoldering Service</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Professional MacBook motherboard chip-level repair Delhi NCR. Don't replace - repair with our microsoldering experts. Same-day service Noida Gurgaon Ghaziabad.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`tel:${CONTACT_INFO.phone1}`}
              className="flex items-center space-x-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Phone className="h-6 w-6" />
              <span>{CONTACT_INFO.phone1}</span>
            </a>
            <a
              href={`https://wa.me/92${CONTACT_INFO.phone1.replace(/[^0-9]/g, '').slice(2)}`}
              className="flex items-center space-x-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}