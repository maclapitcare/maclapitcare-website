import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface ModelNavigationProps {
  serviceType: 'screen' | 'battery' | 'keyboard' | 'trackpad' | 'logic-board';
}

const getModelsForService = (serviceType: string) => {
  const baseModels = [
    {
      name: "MacBook Air A2337",
      year: "M1 2020",
      size: "13.3-inch",
      color: "from-blue-500 to-cyan-500",
      features: ["M1 Chip", "Retina Display", "True Tone"]
    },
    {
      name: "MacBook Pro A2338",
      year: "M1 2020",
      size: "13.3-inch",
      color: "from-green-500 to-emerald-500",
      features: ["M1 Chip", "Retina Display", "Touch Bar"]
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