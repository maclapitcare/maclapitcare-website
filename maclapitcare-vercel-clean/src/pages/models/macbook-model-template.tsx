import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Laptop, Phone, Shield, Clock, CheckCircle, Star, 
  Wrench, Award, Zap, AlertTriangle, Calendar, MapPin
} from "lucide-react";
import ServiceBookingModal from "@/components/forms/service-booking-modal";
import { CONTACT_INFO } from "@/lib/constants";
import { useState } from "react";

interface MacBookModelPageProps {
  modelNumber: string;
  deviceName: string;
  year: string;
  screenSize: string;
  chipset: string;
  serviceType: 'screen' | 'battery' | 'keyboard' | 'trackpad' | 'logic-board';
  price: string;
  originalPrice: string;
  features: string[];
}

export default function MacBookModelPage({
  modelNumber,
  deviceName,
  year,
  screenSize,
  chipset,
  serviceType,
  price,
  originalPrice,
  features
}: MacBookModelPageProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const serviceTitle = {
    'screen': 'Screen Replacement',
    'battery': 'Battery Replacement', 
    'keyboard': 'Keyboard Replacement',
    'trackpad': 'Trackpad Replacement',
    'logic-board': 'Logic Board Repair'
  }[serviceType];

  const savings = parseInt(originalPrice.replace('₹', '').replace(',', '')) - parseInt(price.replace('₹', '').replace(',', ''));

  useEffect(() => {
    document.title = `${deviceName} ${modelNumber} ${serviceTitle} ${price} | Delhi NCR | MacLap IT Care`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", `${deviceName} ${modelNumber} ${serviceTitle.toLowerCase()} in Delhi NCR from ${price}. ${year} model with ${screenSize} display. Same-day service, 3-month warranty. Call 9211720790`);
    }
  }, [modelNumber, deviceName, serviceTitle, price, year, screenSize]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-white/20 text-white border-white/30 mb-4 text-sm px-4 py-2">
                Model: {modelNumber}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {deviceName} {serviceTitle}
            </h1>
            
            <div className="text-xl md:text-2xl mb-8 space-y-2">
              <p className="flex items-center justify-center space-x-2 mb-4">
                <Laptop className="h-6 w-6" />
                <span>{year} • {screenSize} • {chipset}</span>
              </p>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-3xl font-bold">{price}</span>
                <span className="text-xl line-through opacity-70">{originalPrice}</span>
                <Badge className="bg-green-500 text-white text-lg px-3 py-1">
                  Save ₹{savings.toLocaleString()}
                </Badge>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-4"
                onClick={() => setIsBookingModalOpen(true)}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book {serviceTitle}
              </Button>
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="flex items-center space-x-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call: {CONTACT_INFO.phone1}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Model Specifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {deviceName} {modelNumber} Specifications
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional {serviceTitle.toLowerCase()} for your specific model
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Laptop className="h-5 w-5 mr-2 text-primary" />
                    Device Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Model Number:</span>
                      <span className="font-semibold">{modelNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year:</span>
                      <span className="font-semibold">{year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Screen Size:</span>
                      <span className="font-semibold">{screenSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Chipset:</span>
                      <span className="font-semibold">{chipset}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wrench className="h-5 w-5 mr-2 text-primary" />
                    Service Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service Price:</span>
                      <span className="font-bold text-primary text-xl">{price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Original Price:</span>
                      <span className="line-through text-muted-foreground">{originalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">You Save:</span>
                      <span className="font-bold text-green-600">₹{savings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Warranty:</span>
                      <span className="font-semibold">3 Months</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-primary" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              Why Choose MacLap IT Care for {deviceName} {serviceTitle}?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-foreground mb-2">3-Month Warranty</h3>
                <p className="text-sm text-muted-foreground">Complete peace of mind with comprehensive warranty</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Same-Day Service</h3>
                <p className="text-sm text-muted-foreground">Quick turnaround for urgent repairs</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Original Quality</h3>
                <p className="text-sm text-muted-foreground">Only genuine and original quality parts used</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 text-primary rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Doorstep Service</h3>
                <p className="text-sm text-muted-foreground">Free pickup and delivery across Delhi NCR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Fix Your {deviceName}?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional {serviceTitle.toLowerCase()} for {modelNumber} with 3-month warranty
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-4"
                onClick={() => setIsBookingModalOpen(true)}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Service Now
              </Button>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20${serviceTitle.toLowerCase()}%20for%20${deviceName}%20${modelNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Booking Modal */}
      <ServiceBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceName={`${deviceName} ${modelNumber} ${serviceTitle}`}
      />
    </div>
  );
}