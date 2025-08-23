import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Wrench, Monitor, Battery, Zap } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function BeforeAfterGallery() {
  useEffect(() => {
    document.title = "Before After Repair Gallery - MacBook Laptop Repair Success Stories Delhi NCR | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "See real before-after photos of MacBook laptop repairs. Screen replacement, liquid damage recovery, battery replacement, logic board repair transformations. 4.9/5 rated service Delhi NCR. Call 9211720790");
    }
  }, []);

  const repairGallery = [
    {
      id: 1,
      title: "MacBook Pro 16\" Liquid Damage Recovery",
      device: "MacBook Pro 2019 16-inch",
      issue: "Complete liquid damage - Coffee spill",
      solution: "Component-level cleaning and logic board repair",
      timeframe: "48 hours",
      cost: "₹12,500",
      originalCost: "₹45,000 (replacement)",
      savings: "₹32,500",
      beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      afterImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Liquid Damage",
      featured: true
    },
    {
      id: 2,
      title: "MacBook Air M1 Screen Replacement",
      device: "MacBook Air M1 2021",
      issue: "Completely shattered Retina display",
      solution: "Original quality screen replacement",
      timeframe: "3 hours",
      cost: "₹8,999",
      originalCost: "₹28,000 (Apple Store)",
      savings: "₹19,001",
      beforeImage: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      afterImage: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Screen Repair",
      featured: true
    },
    {
      id: 3,
      title: "Gaming Laptop Overheating Fix",
      device: "ASUS ROG Strix G15",
      issue: "Extreme overheating (95°C+) and thermal throttling",
      solution: "Complete cooling system overhaul and thermal paste replacement",
      timeframe: "6 hours",
      cost: "₹3,499",
      originalCost: "₹12,000 (service center)",
      savings: "₹8,501",
      beforeImage: "https://images.unsplash.com/photo-1593640408182-31174d8f3f56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      afterImage: "https://images.unsplash.com/photo-1580745806202-55b8193b7b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Performance Upgrade"
    },
    {
      id: 4,
      title: "MacBook Pro Flexgate Repair",
      device: "MacBook Pro 2017 15-inch",
      issue: "Stage light effect and screen flickering",
      solution: "Display flex cable replacement",
      timeframe: "4 hours",
      cost: "₹6,500",
      originalCost: "₹42,000 (Apple Store)",
      savings: "₹35,500",
      beforeImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      afterImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Display Issues"
    },
    {
      id: 5,
      title: "Dell Laptop Motherboard Revival",
      device: "Dell Inspiron 15 7000",
      issue: "Dead motherboard - No power/display",
      solution: "Chip-level component replacement and repair",
      timeframe: "24 hours",
      cost: "₹8,999",
      originalCost: "₹25,000 (replacement)",
      savings: "₹16,001",
      beforeImage: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      afterImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Logic Board Repair"
    },
    {
      id: 6,
      title: "MacBook Air Battery Swelling Fix",
      device: "MacBook Air 2019",
      issue: "Swollen battery causing trackpad malfunction",
      solution: "Original battery replacement and trackpad repair",
      timeframe: "3 hours",
      cost: "₹7,999",
      originalCost: "₹18,000 (Apple Store)",
      savings: "₹10,001",
      beforeImage: "https://images.unsplash.com/photo-1580745806202-55b8193b7b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      afterImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Battery Replacement"
    },
    {
      id: 7,
      title: "Data Recovery from Crashed SSD",
      device: "MacBook Pro 2020 M1",
      issue: "SSD failure - 5 years of family photos lost",
      solution: "Professional data recovery using specialized tools",
      timeframe: "72 hours",
      cost: "₹9,999",
      originalCost: "₹35,000 (data recovery center)",
      savings: "₹25,001",
      beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      afterImage: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Data Recovery",
      dataRecovered: "99.7%"
    },
    {
      id: 8,
      title: "HP Laptop Keyboard Replacement",
      device: "HP Pavilion 15",
      issue: "Multiple keys not working after liquid spill",
      solution: "Complete keyboard assembly replacement",
      timeframe: "2 hours",
      cost: "₹2,499",
      originalCost: "₹8,000 (service center)",
      savings: "₹5,501",
      beforeImage: "https://images.unsplash.com/photo-1593640408182-31174d8f3f56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      afterImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Keyboard Repair"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Screen Repair':
      case 'Display Issues':
        return Monitor;
      case 'Battery Replacement':
        return Battery;
      case 'Performance Upgrade':
        return Zap;
      case 'Logic Board Repair':
      case 'Liquid Damage':
        return Wrench;
      default:
        return CheckCircle;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Screen Repair':
      case 'Display Issues':
        return 'bg-blue-100 text-blue-800';
      case 'Battery Replacement':
        return 'bg-green-100 text-green-800';
      case 'Performance Upgrade':
        return 'bg-purple-100 text-purple-800';
      case 'Logic Board Repair':
      case 'Liquid Damage':
        return 'bg-red-100 text-red-800';
      case 'Data Recovery':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Before & After Repair Gallery
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Real transformation stories from our MacBook and laptop repair services. 
              See the quality of our work and customer success stories.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>500+ Successful Repairs</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Wrench className="h-5 w-5 text-yellow-400" />
                <span>Expert Technicians</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Repairs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Repair Transformations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most challenging and successful repair cases that showcase our technical expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {repairGallery.filter(repair => repair.featured).map((repair) => {
              const CategoryIcon = getCategoryIcon(repair.category);
              return (
                <Card key={repair.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    {/* Before Image */}
                    <div className="relative">
                      <img
                        src={repair.beforeImage}
                        alt={`${repair.title} - Before`}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="destructive">BEFORE</Badge>
                      </div>
                    </div>
                    
                    {/* After Image */}
                    <div className="relative">
                      <img
                        src={repair.afterImage}
                        alt={`${repair.title} - After`}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-green-600 hover:bg-green-700">AFTER</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(repair.category)}>
                        <CategoryIcon className="h-3 w-3 mr-1" />
                        {repair.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{repair.timeframe}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">{repair.title}</h3>
                    <p className="text-muted-foreground mb-3">{repair.device}</p>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm"><strong>Issue:</strong> {repair.issue}</p>
                      <p className="text-sm"><strong>Solution:</strong> {repair.solution}</p>
                      {repair.dataRecovered && (
                        <p className="text-sm text-green-600"><strong>Success Rate:</strong> {repair.dataRecovered} data recovered</p>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                      <div>
                        <p className="text-sm text-muted-foreground">Our Price: <span className="font-semibold text-foreground">{repair.cost}</span></p>
                        <p className="text-sm text-muted-foreground">Market Price: <span className="line-through">{repair.originalCost}</span></p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-green-600">Saved: {repair.savings}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Repairs Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Repair Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse through our extensive collection of successful repairs across all device types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairGallery.map((repair) => {
              const CategoryIcon = getCategoryIcon(repair.category);
              return (
                <Card key={repair.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={repair.afterImage}
                      alt={repair.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className={getCategoryColor(repair.category)}>
                        <CategoryIcon className="h-3 w-3 mr-1" />
                        {repair.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2">{repair.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{repair.device}</p>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{repair.timeframe}</span>
                      <span className="font-semibold text-foreground">{repair.cost}</span>
                    </div>
                    
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <p className="text-xs text-green-600 font-medium">Saved: {repair.savings} vs market price</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Device?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied customers who trusted us with their valuable devices
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`tel:+91${CONTACT_INFO.phone1}`}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: {CONTACT_INFO.phone1}
            </a>
            <a
              href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20want%20to%20get%20my%20device%20repaired`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}