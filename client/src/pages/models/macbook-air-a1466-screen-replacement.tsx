import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, MessageCircle, Clock, Shield, Wrench, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function MacBookAirA1466ScreenReplacement() {
  const handleBookService = () => {
    // Service booking logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-600 to-slate-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                MacBook Air A1466 Specialist
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                MacBook Air A1466 Screen Replacement Delhi NCR
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Professional 2017 MacBook Air display replacement with classic design and MagSafe 2 compatibility
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: {CONTACT_INFO.phone1}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white text-gray-900 hover:bg-gray-100 border-white"
                  onClick={handleBookService}
                >
                  Book A1466 Repair
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">A1466 2017 Details</h3>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Model:</span>
                    <span className="font-semibold">MacBook Air 2017</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Display:</span>
                    <span className="font-semibold">13.3" TN LCD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Resolution:</span>
                    <span className="font-semibold">1440x900</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Service Time:</span>
                    <span className="font-semibold text-green-400">Same Day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Warranty:</span>
                    <span className="font-semibold text-green-400">3 Months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Classic Design:</span>
                    <span className="font-semibold text-green-400">MagSafe 2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our A1466 Screen Service?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized in MacBook Air A1466 display replacement with genuine parts and classic design preservation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <CardTitle>Original LCD Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Genuine 13.3" TN LCD display with classic MacBook Air design and reliable performance</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <CardTitle>Classic Design Expert</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Specialized in 2017 MacBook Air with MagSafe 2, USB-A ports, and traditional keyboard design</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <CardTitle>Reliable Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Same-day repair with professional installation maintaining the classic MacBook Air experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-600 to-slate-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Fix Your MacBook Air A1466 Screen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional LCD display replacement with classic design preservation and expert installation
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                className="bg-white text-gray-900 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: {CONTACT_INFO.phone1}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-gray-900 hover:bg-gray-100 border-white"
                onClick={() => window.location.href = `https://wa.me/919211720790?text=Hi, I need MacBook Air A1466 screen replacement service in Delhi NCR`}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}