import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, Award, Zap, Wrench } from 'lucide-react';
import ModelNavigation from '@/components/layout/model-navigation';

export default function MacBookProA2141BatteryReplacement() {
  useEffect(() => {
    document.title = "MacBook Pro A2141 Battery Replacement Delhi NCR | Intel 16-inch 2019-2020 | Professional Battery Service Noida";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MacBook Pro A2141 Intel 16-inch 2019-2020 battery replacement service Delhi NCR. Expert technicians, genuine batteries, 6-month warranty. Free pickup Noida Gurgaon. Call 9211720790");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            MacBook Pro A2141 Battery Service
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            MacBook Pro A2141 Battery Replacement Delhi NCR
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional battery replacement service for MacBook Pro A2141 Intel 16-inch (2019-2020) with genuine batteries, 
            expert installation, and 6-month warranty in Delhi NCR.
          </p>
        </div>

        {/* Model Specifications */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">MacBook Pro A2141 Specifications</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Model:</span>
                    <span className="font-semibold">MacBook Pro A2141</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year:</span>
                    <span className="font-semibold">2019-2020</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Screen Size:</span>
                    <span className="font-semibold">16-inch Retina Display</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processor:</span>
                    <span className="font-semibold">Intel Core i7/i9</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Battery Capacity:</span>
                    <span className="font-semibold">100Wh Lithium-polymer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Graphics:</span>
                    <span className="font-semibold">AMD Radeon Pro</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Battery Replacement Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Genuine Apple-compatible battery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>100Wh maximum capacity battery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>6-month replacement warranty</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Intel Mac specialists</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Magic Keyboard expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>AMD Radeon Pro optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Process */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Professional A2141 Battery Replacement Process
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Diagnosis & Assessment</h3>
                <p className="text-muted-foreground">Complete battery health analysis and Intel system compatibility check for your A2141</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Installation</h3>
                <p className="text-muted-foreground">Professional battery replacement using specialized tools for A2141 16-inch models</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Testing</h3>
                <p className="text-muted-foreground">Comprehensive testing and calibration for optimal battery performance and large display support</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Issues */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Common A2141 Battery Issues We Fix
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Battery Performance Issues</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Rapid battery drain in 16-inch Intel models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Unexpected shutdowns during professional workloads</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Overheating issues with battery swelling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Power delivery issues to i7/i9 processors</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">System Integration Problems</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Battery not detected by macOS Catalina/Big Sur</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Magic Keyboard power optimization issues</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>AMD Radeon Pro graphics power management errors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Large display thermal management problems</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warranty & Service Details */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Quick Service</h3>
                <p className="text-muted-foreground">Same-day A2141 battery replacement available with advance booking</p>
              </div>
              
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">6-Month Warranty</h3>
                <p className="text-muted-foreground">Comprehensive warranty on A2141 battery replacement and installation service</p>
              </div>
              
              <div className="text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Expert Technicians</h3>
                <p className="text-muted-foreground">Certified professionals specializing in 16-inch Intel MacBook Pro models</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="mb-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Replace Your A2141 Battery?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Get your MacBook Pro A2141 battery replaced by certified experts with genuine parts and professional warranty
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Button size="lg" onClick={() => window.location.href = 'tel:9211720790'}>
                Call Now: 9211720790
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.location.href = 'https://wa.me/919211720790?text=Hi, I need MacBook Pro A2141 battery replacement service'}>
                WhatsApp Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Model Navigation */}
        <ModelNavigation serviceType="battery" />
      </main>
    </div>
  );
}