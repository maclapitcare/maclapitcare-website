import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, Award, Zap, Wrench } from 'lucide-react';
import ModelNavigation from '@/components/layout/model-navigation';

export default function MacBookProA2159BatteryReplacement() {
  useEffect(() => {
    document.title = "MacBook Pro A2159 Battery Replacement Delhi NCR | Intel 13-inch 2019 | Touch Bar Butterfly Keyboard Battery Service";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MacBook Pro A2159 Intel 13-inch 2019 Touch Bar Butterfly keyboard battery replacement service Delhi NCR. Expert Intel technicians, genuine batteries, 6-month warranty. Call 9211720790");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            MacBook Pro A2159 Battery Service
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            MacBook Pro A2159 Battery Replacement Delhi NCR
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional battery replacement service for MacBook Pro A2159 Intel 13-inch (2019) with Touch Bar and Butterfly keyboard expertise.
          </p>
        </div>

        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">MacBook Pro A2159 Specifications</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Model:</span>
                    <span className="font-semibold">MacBook Pro A2159</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year:</span>
                    <span className="font-semibold">2019 Intel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Screen Size:</span>
                    <span className="font-semibold">13.3-inch Retina</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processor:</span>
                    <span className="font-semibold">Intel Core i5/i7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Keyboard:</span>
                    <span className="font-semibold">Touch Bar + Butterfly</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Battery:</span>
                    <span className="font-semibold">58.2Wh Lithium-polymer</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Battery Service Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Intel Touch Bar model specialist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Butterfly keyboard expert</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>58.2Wh genuine battery replacement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>2019 Intel i5/i7 optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>6-month replacement warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Replace Your A2159 Battery?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Get your MacBook Pro A2159 Intel Touch Bar Butterfly keyboard model battery replaced with genuine parts and professional expertise
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Button size="lg" onClick={() => window.location.href = 'tel:9211720790'}>
                Call Now: 9211720790
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = 'https://wa.me/919211720790?text=Hi, I need MacBook Pro A2159 battery replacement service'}>
                WhatsApp Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <ModelNavigation serviceType="battery" />
      </main>
    </div>
  );
}