import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

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
      color: "from-blue-500 to-indigo-500",
      features: ["M2 Chip", "Liquid Retina", "MagSafe"]
    },
    {
      name: "MacBook Air A3130",
      year: "M2 15-inch 2023",
      size: "15.3-inch",
      color: "from-blue-400 to-cyan-500",
      features: ["M2 Chip", "Liquid Retina", "15-inch Display"]
    },
    {
      name: "MacBook Air A1466",
      year: "Intel 2017",
      size: "13.3-inch",
      color: "from-gray-500 to-blue-500",
      features: ["Intel Processor", "LED Backlit", "Thunderbolt"]
    },
    {
      name: "MacBook Air A1932",
      year: "Intel 2018-2019",
      size: "13.3-inch",
      color: "from-gray-500 to-indigo-500",
      features: ["Intel Processor", "Retina Display", "Touch ID"]
    },
    {
      name: "MacBook Air A2179",
      year: "Intel 2020",
      size: "13.3-inch",
      color: "from-gray-500 to-blue-500",
      features: ["Intel i3/i5/i7", "Retina Display", "Magic Keyboard"]
    },
    
    // MacBook Pro Models
    {
      name: "MacBook Pro A2338",
      year: "M1 2020",
      size: "13.3-inch",
      color: "from-green-500 to-emerald-500",
      features: ["M1 Chip", "Retina Display", "Touch Bar"]
    },
    {
      name: "MacBook Pro A2485",
      year: "M2 2022",
      size: "13.3-inch",
      color: "from-green-500 to-blue-500",
      features: ["M2 Chip", "Retina Display", "Touch Bar"]
    },
    {
      name: "MacBook Pro A2442",
      year: "M2 Pro 2023",
      size: "14-inch",
      color: "from-green-500 to-teal-500",
      features: ["M2 Pro/Max", "Liquid Retina XDR", "ProMotion"]
    },
    {
      name: "MacBook Pro A2686",
      year: "M2 Pro 2023",
      size: "16-inch",
      color: "from-green-500 to-cyan-500",
      features: ["M2 Pro/Max", "Liquid Retina XDR", "ProMotion"]
    },
    {
      name: "MacBook Pro A3240",
      year: "M3 2024",
      size: "16-inch",
      color: "from-green-500 to-purple-500",
      features: ["M3 Chip", "Liquid Retina XDR", "Hardware Ray Tracing"]
    },
    {
      name: "MacBook Pro A3131",
      year: "M2 2023",
      size: "15-inch",
      color: "from-green-500 to-indigo-500",
      features: ["M2 Chip", "Liquid Retina", "15-inch Display"]
    },
    {
      name: "MacBook Pro A2918",
      year: "M3 2023",
      size: "14-inch",
      color: "from-green-500 to-violet-500",
      features: ["M3 Chip", "Liquid Retina XDR", "Hardware Ray Tracing"]
    },
    {
      name: "MacBook Pro A3186",
      year: "M4 2024",
      size: "14-inch",
      color: "from-green-500 to-pink-500",
      features: ["M4 Chip", "Nano-texture Display", "Thunderbolt 5"]
    },
    {
      name: "MacBook Pro A1706",
      year: "Intel 2016-2017",
      size: "13.3-inch",
      color: "from-gray-500 to-green-500",
      features: ["Intel i5/i7", "Retina Display", "Touch Bar"]
    },
    {
      name: "MacBook Pro A1707",
      year: "Intel 2016-2017",
      size: "15.4-inch",
      color: "from-gray-500 to-emerald-500",
      features: ["Intel i7", "Retina Display", "Touch Bar"]
    },
    {
      name: "MacBook Pro A1708",
      year: "Intel 2017",
      size: "13.3-inch",
      color: "from-gray-500 to-green-400",
      features: ["Intel i5/i7", "Retina Display", "Function Keys"]
    },
    {
      name: "MacBook Pro A1989",
      year: "Intel 2018-2019",
      size: "13.3-inch",
      color: "from-gray-500 to-teal-500",
      features: ["Intel i5/i7", "Retina Display", "Touch Bar"]
    },
    {
      name: "MacBook Pro A1990",
      year: "Intel 2018-2019",
      size: "15.4-inch",
      color: "from-gray-500 to-blue-500",
      features: ["Intel i7/i9", "Retina Display", "Touch Bar"]
    },
    {
      name: "MacBook Pro A2159",
      year: "Intel 2019",
      size: "13.3-inch",
      color: "from-gray-500 to-cyan-500",
      features: ["Intel i5/i7", "Retina Display", "Touch Bar"]
    },
    {
      name: "MacBook Pro A2251",
      year: "Intel 2020",
      size: "13.3-inch",
      color: "from-gray-500 to-indigo-500",
      features: ["Intel i5/i7", "Retina Display", "Magic Keyboard"]
    },
    {
      name: "MacBook Pro A2289",
      year: "Intel 2020",
      size: "13.3-inch",
      color: "from-gray-500 to-purple-500",
      features: ["Intel i5/i7", "Retina Display", "Touch Bar"]
    },
    {
      name: "MacBook Pro A2141",
      year: "Intel 2019-2020",
      size: "16-inch",
      color: "from-gray-500 to-slate-500",
      features: ["Intel i7/i9", "Retina Display", "6-Speaker Audio"]
    }
  ];

  return baseModels.map(model => {
    const modelNumber = model.name.split(' ')[2];
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
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Don't See Your MacBook Model?
            </h3>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Button size="lg" onClick={() => typeof window !== "undefined" && (window.location.href = 'tel:9211720790')}>
                Call: 9211720790
              </Button>
              <Button size="lg" variant="outline" onClick={() => typeof window !== "undefined" && (window.location.href = 'https://wa.me/919211720790')}>
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}