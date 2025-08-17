import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, MessageCircle, Clock, Shield, Wrench, Star, ArrowRight, CheckCircle, Cpu } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function MacBookProA2338LogicBoardRepair() {
  const handleBookService = () => {
    // Service booking logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                MacBook Pro A2338 Logic Board Expert
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                MacBook Pro A2338 Logic Board Repair Delhi NCR
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Professional M1 chip logic board repair for MacBook Pro A2338 with advanced microsoldering techniques
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                  className="bg-white text-red-900 hover:bg-gray-100"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: {CONTACT_INFO.phone1}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white text-red-900 hover:bg-gray-100 border-white"
                  onClick={handleBookService}
                >
                  Book A2338 Logic Board Repair
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">A2338 Logic Board Details</h3>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Model:</span>
                    <span className="font-semibold">MacBook Pro M1 2020</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Processor:</span>
                    <span className="font-semibold">Apple M1 Chip</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Technology:</span>
                    <span className="font-semibold">5nm Process</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Service Time:</span>
                    <span className="font-semibold text-green-400">2-3 Days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Warranty:</span>
                    <span className="font-semibold text-green-400">6 Months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Data Safety:</span>
                    <span className="font-semibold text-green-400">Guaranteed</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our A2338 Logic Board Service?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized in MacBook Pro A2338 M1 chip logic board repair with advanced microsoldering
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cpu className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>M1 Chip Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Specialized repair of Apple M1 System on Chip with 5nm architecture</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Microsoldering Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advanced BGA rework and component-level repair using precision equipment</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Complete data safety with professional logic board diagnostics and repair</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Repair Your MacBook Pro A2338 Logic Board?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional M1 chip logic board repair with microsoldering expertise
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
                className="bg-white text-red-900 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: {CONTACT_INFO.phone1}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-red-900 hover:bg-gray-100 border-white"
                onClick={() => window.location.href = `https://wa.me/919211720790?text=Hi, I need MacBook Pro A2338 logic board repair service in Delhi NCR`}
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