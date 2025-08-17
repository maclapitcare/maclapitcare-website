import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Clock, 
  Shield, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Smartphone,
  AlertTriangle,
  Wrench
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function ScreenReplacement() {
  useEffect(() => {
    document.title = "MacBook Laptop Screen Replacement Noida | MacLap IT Care - Display Repair ₹2499+";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MacLap IT Care - Best MacBook laptop screen replacement in Noida, Delhi. Original displays from ₹2499+. Same-day service, 1-year warranty, free pickup. MacBook Pro, Air, Dell, HP. Call 9211720790");
    }
  }, []);

  const screenIssues = [
    "Cracked or broken screen",
    "Black or blank display",
    "Flickering or distorted image", 
    "Lines or spots on screen",
    "Backlight not working",
    "Touch screen not responding",
    "Color distortion or fading",
    "Screen showing strange patterns"
  ];

  const supportedDevices = [
    { 
      brand: "Apple MacBook", 
      models: [
        "MacBook Air 13\" (2013-2024)",
        "MacBook Pro 13\" (2012-2024)", 
        "MacBook Pro 15\" (2012-2019)",
        "MacBook Pro 16\" (2019-2024)"
      ] 
    },
    { 
      brand: "Dell Laptops", 
      models: [
        "XPS 13/15/17 Series",
        "Inspiron 14/15/17 Series", 
        "Latitude Business Series",
        "Alienware Gaming Series"
      ] 
    },
    { 
      brand: "HP Laptops", 
      models: [
        "Pavilion 14/15/17 Series",
        "Envy 13/15/17 Series",
        "EliteBook Business Series", 
        "Omen Gaming Series"
      ] 
    },
    { 
      brand: "Lenovo Laptops", 
      models: [
        "ThinkPad Series",
        "IdeaPad 14/15 Series",
        "Legion Gaming Series",
        "Yoga Convertible Series"
      ] 
    }
  ];

  const repairProcess = [
    {
      step: "1",
      title: "Screen Assessment",
      description: "Free diagnosis to determine exact screen issue and replacement needed"
    },
    {
      step: "2", 
      title: "Cost Estimate",
      description: "Transparent pricing based on device model and screen type"
    },
    {
      step: "3",
      title: "Screen Replacement", 
      description: "Professional installation of original/compatible screen"
    },
    {
      step: "4",
      title: "Quality Testing",
      description: "Complete testing for display quality, touch, and backlight"
    }
  ];

  const screenTypes = [
    {
      type: "HD Display",
      resolution: "1366x768",
      price: "₹2,499+",
      features: ["Standard definition", "Energy efficient", "Budget friendly"]
    },
    {
      type: "Full HD Display", 
      resolution: "1920x1080",
      price: "₹5,999+",
      features: ["Sharp image quality", "Better color accuracy", "Most popular"]
    },
    {
      type: "4K/Retina Display",
      resolution: "3840x2160",
      price: "₹12,999+", 
      features: ["Ultra-high definition", "Premium quality", "Professional grade"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-500 text-white mb-4 px-4 py-1">
              Screen Replacement Experts
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MacBook & Laptop Screen Replacement in Noida
            </h1>
            <p className="text-xl mb-8">
              MacLap IT Care provides professional screen replacement service with original displays. Get crystal clear visuals 
              restored by expert technicians in Sector 121 Noida.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {CONTACT_INFO.phone1}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-blue-900 hover:bg-gray-100 border-white"
                onClick={() => window.location.href = '/contact'}
              >
                Free Screen Diagnosis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Screen Issues Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Screen Problems We Fix</h2>
            <p className="text-xl text-gray-600">
              Expert repair for all types of display issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {screenIssues.map((issue, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-800 text-sm">{issue}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Devices */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Devices We Service</h2>
            <p className="text-xl text-gray-600">
              Professional screen replacement for all major laptop and MacBook models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportedDevices.map((device) => (
              <Card key={device.brand} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <Monitor className="h-5 w-5 text-blue-600 mr-2" />
                    {device.brand}
                  </h3>
                  <div className="space-y-2">
                    {device.models.map((model, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-xs">{model}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screen Types & Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Screen Types & Pricing</h2>
            <p className="text-xl text-gray-600">
              Choose the right screen quality for your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {screenTypes.map((screen, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${index === 1 ? 'border-blue-600' : ''}`}>
                <CardContent className="p-6 text-center">
                  {index === 1 && <Badge className="bg-blue-600 text-white mb-2">Most Popular</Badge>}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{screen.type}</h3>
                  <p className="text-gray-600 mb-2">{screen.resolution}</p>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{screen.price}</div>
                  <div className="space-y-2">
                    {screen.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Screen Replacement Process</h2>
            <p className="text-xl text-gray-600">
              Professional service with attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairProcess.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Screen Service?</h2>
            <p className="text-xl text-gray-600">
              Quality displays with professional installation and warranty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Original Quality</h3>
                <p className="text-gray-600">
                  Genuine and high-quality compatible screens for perfect visuals
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Quick Service</h3>
                <p className="text-gray-600">
                  Most screen replacements completed within 4-6 hours
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Up to 1 Year Warranty</h3>
                <p className="text-gray-600">
                  Complete warranty on screen and installation service
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Wrench className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Installation</h3>
                <p className="text-gray-600">
                  Professional technicians with years of screen repair experience
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Free Pickup</h3>
                <p className="text-gray-600">
                  Complimentary doorstep pickup and delivery across Noida
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Touch Support</h3>
                <p className="text-gray-600">
                  Touch screen calibration and functionality testing included
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Screen Replacement Today?</h2>
          <p className="text-xl mb-8">
            Quick professional service in Noida. Get your display fixed with original quality screens.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`tel:${CONTACT_INFO.phone1}`}
              className="flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:bg-gray-100"
            >
              <Phone className="h-6 w-6" />
              <span>{CONTACT_INFO.phone1}</span>
            </a>
            <a
              href={`https://wa.me/92${CONTACT_INFO.phone1.replace(/[^0-9]/g, '').slice(2)}`}
              className="flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}