import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Laptop, Monitor, Wrench } from 'lucide-react';

interface ModelNavigationProps {
  serviceType: 'screen' | 'battery' | 'keyboard' | 'trackpad' | 'logic-board';
}

const getModelsForService = (serviceType: string) => {
  const baseModels = [
    // MacBook Air Models
    {
      name: "MacBook Air A2337",
      year: "M1 2020",
      size: "13.3-inch",
      color: "from-blue-500 to-cyan-500",
      features: ["M1 Chip", "Retina Display", "True Tone"]
    },
    {
      name: "MacBook Air A2681", 
      year: "M2 2022",
      size: "13.6-inch",
      color: "from-purple-500 to-pink-500",
      features: ["M2 Chip", "Liquid Retina", "Notch Design"]
    },
    {
      name: "MacBook Air A3114",
      year: "M3 2024",
      size: "13.6-inch",
      color: "from-cyan-500 to-blue-600",
      features: ["M3 Chip", "Liquid Retina", "WiFi 6E"]
    },
    {
      name: "MacBook Air A2941",
      year: "M2 2023",
      size: "15.3-inch",
      color: "from-pink-500 to-rose-600",
      features: ["M2 Chip", "Large Display", "Six-Speaker Sound"]
    },
    {
      name: "MacBook Air A3115",
      year: "M3 2024",
      size: "15.3-inch",
      color: "from-amber-500 to-orange-600",
      features: ["M3 Chip", "15-inch Display", "Advanced Audio"]
    },
    {
      name: "MacBook Air A1466",
      year: "2017",
      size: "13.3-inch",
      color: "from-gray-500 to-gray-700",
      features: ["Intel i5", "USB-A Ports", "MagSafe 2"]
    },
    
    // MacBook Pro 13-inch Models
    {
      name: "MacBook Pro A2338",
      year: "M1 2020",
      size: "13.3-inch",
      color: "from-gray-700 to-gray-900",
      features: ["M1 Chip", "Touch Bar", "True Tone"]
    },
    {
      name: "MacBook Pro A2686",
      year: "M2 2022", 
      size: "13.3-inch",
      color: "from-slate-600 to-slate-800",
      features: ["M2 Chip", "Touch Bar", "P3 Wide Color"]
    },
    {
      name: "MacBook Pro A1708",
      year: "2017",
      size: "13.3-inch",
      color: "from-emerald-600 to-teal-600",
      features: ["Intel i5", "No Touch Bar", "Flexgate Fix"]
    },
    {
      name: "MacBook Pro A1706",
      year: "2017",
      size: "13.3-inch", 
      color: "from-indigo-600 to-purple-600",
      features: ["Intel i5/i7", "Touch Bar", "OLED Strip"]
    },
    {
      name: "MacBook Pro A2159",
      year: "2019",
      size: "13.3-inch",
      color: "from-green-600 to-emerald-700",
      features: ["Intel i5/i7", "Touch Bar", "Butterfly Keyboard"]
    },
    {
      name: "MacBook Pro A2251",
      year: "2020",
      size: "13.3-inch",
      color: "from-blue-600 to-indigo-700",
      features: ["Intel i5/i7", "Magic Keyboard", "Improved Thermals"]
    },
    
    // MacBook Pro 14-inch Models  
    {
      name: "MacBook Pro A2442",
      year: "M1 Pro/Max 2021",
      size: "14.2-inch",
      color: "from-orange-600 to-red-600",
      features: ["XDR Mini-LED", "1000+ Zones", "1600 nits HDR"]
    },
    {
      name: "MacBook Pro A2992",
      year: "M4 Pro/Max 2024",
      size: "14.2-inch",
      color: "from-red-600 to-pink-700",
      features: ["M4 Pro/Max", "Thunderbolt 5", "Latest Design"]
    },
    {
      name: "MacBook Pro A2918",
      year: "M3 Pro/Max 2023",
      size: "14.2-inch",
      color: "from-violet-600 to-purple-700",
      features: ["M3 Pro/Max", "Space Black", "Advanced GPU"]
    },
    {
      name: "MacBook Pro A2779",
      year: "M2 Pro/Max 2023",
      size: "14.2-inch",
      color: "from-cyan-600 to-blue-700",
      features: ["M2 Pro/Max", "XDR Display", "Enhanced Performance"]
    },
    
    // MacBook Pro 15-inch Models
    {
      name: "MacBook Pro A1707",
      year: "2016",
      size: "15.4-inch",
      color: "from-gray-800 to-black",
      features: ["Intel i7", "Touch Bar", "Radeon Pro"]
    },
    {
      name: "MacBook Pro A1990",
      year: "2018-2019",
      size: "15.4-inch",
      color: "from-slate-700 to-gray-900",
      features: ["Intel i7/i9", "Radeon Pro", "6-Core CPU"]
    },
    
    // MacBook Pro 16-inch Models
    {
      name: "MacBook Pro A2485",
      year: "M1 Pro/Max 2021",
      size: "16.2-inch",
      color: "from-violet-600 to-purple-600",
      features: ["XDR Mini-LED", "2500+ Zones", "Large Format"]
    },
    {
      name: "MacBook Pro A2141",
      year: "2019-2020",
      size: "16-inch",
      color: "from-gray-700 to-slate-800",
      features: ["Intel i7/i9", "Magic Keyboard", "AMD Radeon Pro"]
    },
    {
      name: "MacBook Pro A2780",
      year: "M2 Pro/Max 2023",
      size: "16.2-inch",
      color: "from-purple-600 to-indigo-700",
      features: ["M2 Pro/Max", "XDR Display", "12-Core CPU"]
    },
    {
      name: "MacBook Pro A2991",
      year: "M3 Pro/Max 2023",
      size: "16.2-inch",
      color: "from-indigo-600 to-blue-700",
      features: ["M3 Pro/Max", "Space Black", "40-Core GPU"]
    },
    {
      name: "MacBook Pro A3021",
      year: "M4 Pro/Max 2024",
      size: "16.2-inch",
      color: "from-rose-600 to-pink-700",
      features: ["M4 Pro/Max", "Thunderbolt 5", "Ultimate Performance"]
    },
    
    // Additional 2018-2020 Intel Models
    {
      name: "MacBook Pro A2289",
      year: "2020 Intel",
      size: "13.3-inch",
      color: "from-teal-600 to-cyan-700",
      features: ["Intel i5/i7", "4 Thunderbolt 3", "Magic Keyboard"]
    },
    {
      name: "MacBook Pro A2251",
      year: "2020 Intel",
      size: "13.3-inch",
      color: "from-emerald-600 to-green-700",
      features: ["Intel i5/i7", "2 Thunderbolt 3", "Budget Model"]
    },
    
    // MacBook Air Intel Models  
    {
      name: "MacBook Air A1932",
      year: "2018-2019",
      size: "13.3-inch",
      color: "from-slate-500 to-gray-600",
      features: ["Intel i5", "Retina Display", "T2 Security"]
    },
    {
      name: "MacBook Air A2179",
      year: "2020 Intel",
      size: "13.3-inch",
      color: "from-zinc-500 to-slate-600",
      features: ["Intel i3/i5/i7", "Magic Keyboard", "Scissor Switch"]
    },
    
    // Latest 2024-2025 Models (M4 Generation)
    {
      name: "MacBook Air A3130",
      year: "M4 2025",
      size: "13.6-inch",
      color: "from-sky-500 to-blue-600",
      features: ["M4 Chip", "Latest Design", "Enhanced Performance"]
    },
    {
      name: "MacBook Air A3131",
      year: "M4 2025",
      size: "15.3-inch",
      color: "from-rose-500 to-pink-600",
      features: ["M4 Chip", "Large Display", "Ultimate Portability"]
    }
  ];

  return baseModels.map(model => {
    const modelNumber = model.name.split(' ')[2]; // Extract A2337, A2338, etc.
    const deviceType = model.name.toLowerCase().includes('air') ? 'air' : 'pro';
    const serviceUrl = serviceType === 'logic-board' ? 'logic-board-repair' : `${serviceType}-replacement`;
    
    return {
      ...model,
      url: `/macbook-${deviceType}-${modelNumber.toLowerCase()}-${serviceUrl}-delhi-ncr`
    };
  });
};

const getServiceTitle = (serviceType: string) => {
  switch (serviceType) {
    case 'screen': return 'Screen Replacement';
    case 'battery': return 'Battery Replacement';
    case 'keyboard': return 'Keyboard Replacement';
    case 'trackpad': return 'Trackpad Replacement';
    case 'logic-board': return 'Logic Board Repair';
    default: return 'Repair Services';
  }
};

export default function ModelNavigation({ serviceType }: ModelNavigationProps) {
  const models = getModelsForService(serviceType);
  const serviceTitle = getServiceTitle(serviceType);
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            MacBook {serviceTitle} by Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your exact MacBook model for specialized {serviceTitle.toLowerCase()} service with genuine parts, 
            expert technicians, and professional warranty in Delhi NCR.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {models.map((model, modelIndex) => (
            <Link key={modelIndex} href={model.url}>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-primary transition-all cursor-pointer">
                <div className="text-center">
                  <h4 className="font-semibold text-foreground text-sm">{model.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{serviceTitle}</p>
                </div>
              </div>
            </Link>
          )}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Don't See Your MacBook Model?
            </h3>
            <p className="text-muted-foreground mb-6">
              We repair all MacBook models including older and newer variants. 
              Contact us with your model number and we'll provide exact pricing and service details.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Button size="lg" onClick={() => typeof window !== "undefined" && (window.location.href = 'tel:9211720790')}>
                Call: 9211720790
              </Button>
              <Button size="lg" variant="outline" onClick={() => typeof window !== "undefined" && (window.location.href = 'https://wa.me/919211720790?text=Hi, I need help identifying my MacBook model for repair service')}>
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}