import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface ModelNavigationProps {
  serviceType: 'screen' | 'battery' | 'keyboard' | 'trackpad' | 'logic-board';
}

const getModelsForService = (serviceType: string) => {
  const baseModels = [
    // Original 12 Models: M1, M2, M3, M4 Series
    {
      name: "MacBook Air A2337",
      year: "M1 2020",
      size: "13.3-inch",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "MacBook Pro A2338",
      year: "M1 2020", 
      size: "13.3-inch",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "MacBook Air A2681",
      year: "M2 2022",
      size: "13.6-inch",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "MacBook Pro A2485",
      year: "M2 2022",
      size: "13.3-inch", 
      color: "from-orange-500 to-red-500"
    },
    {
      name: "MacBook Air A1466",
      year: "Intel 2017",
      size: "13.3-inch",
      color: "from-gray-500 to-slate-500"
    },
    {
      name: "MacBook Pro A2442",
      year: "M2 Pro 2023",
      size: "14-inch",
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "MacBook Air A3130",
      year: "M2 15-inch 2023",
      size: "15.3-inch",
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "MacBook Pro A2686",
      year: "M2 Pro 2023",
      size: "16-inch",
      color: "from-emerald-500 to-green-500"
    },
    {
      name: "MacBook Pro A3240",
      year: "M3 2024",
      size: "16-inch",
      color: "from-rose-500 to-pink-500"
    },
    {
      name: "MacBook Pro A3131",
      year: "M2 2023",
      size: "15-inch",
      color: "from-amber-500 to-yellow-500"
    },
    {
      name: "MacBook Pro A2918",
      year: "M3 2023",
      size: "14-inch",
      color: "from-lime-500 to-green-500"
    },
    {
      name: "MacBook Pro A3186",
      year: "M4 2024",
      size: "14-inch",
      color: "from-sky-500 to-blue-500"
    },
    
    // Additional 11 Intel Models (2016-2020) - Touch Bar Era & Intel Transition
    {
      name: "MacBook Pro A1706",
      year: "Intel 2016-2017",
      size: "13.3-inch",
      color: "from-slate-600 to-gray-600"
    },
    {
      name: "MacBook Pro A1707",
      year: "Intel 2016-2017",
      size: "15.4-inch",
      color: "from-stone-600 to-neutral-600"
    },
    {
      name: "MacBook Pro A1708",
      year: "Intel 2017",
      size: "13.3-inch",
      color: "from-zinc-600 to-slate-600"
    },
    {
      name: "MacBook Pro A1989",
      year: "Intel 2018-2019",
      size: "13.3-inch",
      color: "from-gray-600 to-stone-600"
    },
    {
      name: "MacBook Pro A1990",
      year: "Intel 2018-2019",
      size: "15.4-inch",
      color: "from-neutral-600 to-zinc-600"
    },
    {
      name: "MacBook Pro A2159",
      year: "Intel 2019",
      size: "13.3-inch",
      color: "from-slate-700 to-gray-700"
    },
    {
      name: "MacBook Pro A2251",
      year: "Intel 2020",
      size: "13.3-inch",
      color: "from-stone-700 to-neutral-700"
    },
    {
      name: "MacBook Pro A2289",
      year: "Intel 2020",
      size: "13.3-inch",
      color: "from-zinc-700 to-slate-700"
    },
    {
      name: "MacBook Pro A2141",
      year: "Intel 2019-2020",
      size: "16-inch",
      color: "from-gray-700 to-stone-700"
    },
    {
      name: "MacBook Air A1932",
      year: "Intel 2018-2019",
      size: "13.3-inch",
      color: "from-neutral-700 to-zinc-700"
    },
    {
      name: "MacBook Air A2179",
      year: "Intel 2020",
      size: "13.3-inch",
      color: "from-slate-800 to-gray-800"
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
    <section className="py-8 md:py-16 bg-muted/30">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 md:mb-4">
            MacBook {serviceTitle} by Model
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {serviceType === 'battery' 
              ? 'Professional battery replacement for all MacBook models from 2016-2024 with original quality batteries and 6-month warranty'
              : 'Transparent pricing for all MacBook models from 2016-2024 with original quality displays and 3-month warranty'
            }
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3 max-w-7xl mx-auto">
          {models.map((model, modelIndex) => (
            <Link key={modelIndex} href={model.url}>
              <div className="p-2 md:p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-primary transition-all cursor-pointer min-h-[100px] md:min-h-[110px] flex flex-col justify-center">
                <div className="text-center">
                  <h4 className="font-semibold text-foreground text-[10px] md:text-xs leading-tight">{model.name}</h4>
                  <p className="text-[9px] md:text-xs text-muted-foreground mt-1">{model.year}</p>
                  <p className="text-[9px] md:text-xs text-muted-foreground">{model.size}</p>
                  <p className="text-[9px] md:text-xs text-primary font-medium mt-1">{getServiceTitle(serviceType)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-4 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3 md:mb-4">
              Don't See Your MacBook Model?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
              We service all MacBook models. Contact us for a free diagnosis and quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button size="default" className="w-full sm:w-auto" onClick={() => typeof window !== "undefined" && (window.location.href = 'tel:9211720790')}>
                Call: 9211720790
              </Button>
              <Button size="default" variant="outline" className="w-full sm:w-auto" onClick={() => typeof window !== "undefined" && (window.location.href = 'https://wa.me/919211720790')}>
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}