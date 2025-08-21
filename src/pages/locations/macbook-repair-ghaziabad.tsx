import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Clock, Shield, Phone, Star, Monitor, Battery, Keyboard, Cpu } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function MacBookRepairGhaziabad() {
  useEffect(() => {
    document.title = "MacBook Repair Ghaziabad Vaishali Indirapuram - Screen, Battery Service | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook repair service in Ghaziabad, Vaishali, Indirapuram. Screen replacement ₹8,999+, battery ₹6,999+, logic board repair ₹12,999+. Doorstep service. 4.9/5 rated. Call 9211720790");
    }
  }, []);

  const ghaziabadAreas = [
    "Vaishali", "Indirapuram", "Raj Nagar", "Kaushambi", "Shipra Mall", "Crossings Republik",
    "Loni", "Sahibabad", "Vijay Nagar", "Govindpuram", "Nehru Nagar", "Mohan Nagar",
    "Ghanta Ghar", "Raj Nagar Extension", "Nyay Khand", "Ahinsa Khand", "Shakti Khand"
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
            <Badge className="bg-white/20 text-white mb-4">Ghaziabad's #1 MacBook Repair Service</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MacBook Repair Ghaziabad
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional MacBook repair service in Ghaziabad, Vaishali, Indirapuram with doorstep pickup and delivery. 
              Expert technicians, genuine parts, and transparent pricing.
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
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20repair%20in%20Ghaziabad`}
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
              MacBook Repair Coverage in Ghaziabad
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide doorstep MacBook repair services across all areas in Ghaziabad including Vaishali and Indirapuram
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {ghaziabadAreas.map((area, index) => (
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
              MacBook Repair Services in Ghaziabad
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
              Why Choose Maclap IT Care for MacBook Repair in Ghaziabad?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "Free Doorstep Service",
                description: "Free pickup and delivery across Ghaziabad NCR"
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

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your MacBook Repaired in Ghaziabad Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional service with doorstep convenience across Vaishali, Indirapuram, and all Ghaziabad locations
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`tel:+91${CONTACT_INFO.phone1}`}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: {CONTACT_INFO.phone1}
            </a>
            <a
              href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20repair%20in%20Ghaziabad`}
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