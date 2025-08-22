import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface ModelNavigationProps {
  serviceType: 'screen' | 'battery' | 'keyboard' | 'trackpad' | 'logic-board';
}

const getModelsForService = (serviceType: string) => {
  const baseModels = [
    // MacBook Pro M4 (2024)
    { name: "MacBook Pro A3186", year: "M4 2024", size: "14-inch", color: "from-purple-500 to-pink-500", features: ["M4 Chip", "Liquid Retina XDR", "120Hz ProMotion"] },
    { name: "MacBook Pro A3401", year: "M4 2024", size: "16-inch", color: "from-purple-500 to-pink-500", features: ["M4 Chip", "Liquid Retina XDR", "120Hz ProMotion"] },
    
    // MacBook Pro M3 (2023-2024)
    { name: "MacBook Pro A2918", year: "M3 2023", size: "14-inch", color: "from-indigo-500 to-purple-500", features: ["M3 Chip", "Liquid Retina XDR", "120Hz ProMotion"] },
    { name: "MacBook Pro A2991", year: "M3 2023", size: "16-inch", color: "from-indigo-500 to-purple-500", features: ["M3 Chip", "Liquid Retina XDR", "120Hz ProMotion"] },
    
    // MacBook Pro M2 (2022-2023)
    { name: "MacBook Pro A2686", year: "M2 2022", size: "13-inch", color: "from-blue-500 to-indigo-500", features: ["M2 Chip", "Retina Display", "Touch Bar"] },
    { name: "MacBook Pro A2779", year: "M2 2023", size: "14-inch", color: "from-blue-500 to-indigo-500", features: ["M2 Chip", "Liquid Retina XDR", "120Hz ProMotion"] },
    { name: "MacBook Pro A2780", year: "M2 2023", size: "16-inch", color: "from-blue-500 to-indigo-500", features: ["M2 Chip", "Liquid Retina XDR", "120Hz ProMotion"] },
    
    // MacBook Pro M1 (2020-2021)
    { name: "MacBook Pro A2338", year: "M1 2020", size: "13-inch", color: "from-green-500 to-blue-500", features: ["M1 Chip", "Retina Display", "Touch Bar"] },
    { name: "MacBook Pro A2442", year: "M1 Pro 2021", size: "14-inch", color: "from-green-500 to-blue-500", features: ["M1 Pro/Max", "Liquid Retina XDR", "120Hz ProMotion"] },
    { name: "MacBook Pro A2485", year: "M1 Pro 2021", size: "16-inch", color: "from-green-500 to-blue-500", features: ["M1 Pro/Max", "Liquid Retina XDR", "120Hz ProMotion"] },
    
    // MacBook Pro Intel (2016-2020) - Popular models
    { name: "MacBook Pro A2251", year: "Intel 2020", size: "13-inch", color: "from-gray-500 to-gray-600", features: ["Intel Core i5", "Retina Display", "Touch Bar"] },
    { name: "MacBook Pro A2141", year: "Intel 2019", size: "16-inch", color: "from-gray-500 to-gray-600", features: ["Intel Core i7", "Retina Display", "Touch Bar"] },
    { name: "MacBook Pro A2159", year: "Intel 2019", size: "13-inch", color: "from-gray-500 to-gray-600", features: ["Intel Core i5", "Retina Display", "Touch Bar"] },
    { name: "MacBook Pro A1990", year: "Intel 2018-2019", size: "15-inch", color: "from-gray-500 to-gray-600", features: ["Intel Core i7", "Retina Display", "Touch Bar"] },
    { name: "MacBook Pro A1989", year: "Intel 2018", size: "13-inch", color: "from-gray-500 to-gray-600", features: ["Intel Core i5", "Retina Display", "Touch Bar"] },
    { name: "MacBook Pro A1706", year: "Intel 2016-2017", size: "13-inch", color: "from-gray-500 to-gray-600", features: ["Intel Core i5", "Retina Display", "Touch Bar"] },
    { name: "MacBook Pro A1707", year: "Intel 2016", size: "15-inch", color: "from-gray-500 to-gray-600", features: ["Intel Core i7", "Retina Display", "Touch Bar"] },
    
    // MacBook Pro Legacy (2012-2015) - Most popular
    { name: "MacBook Pro A1398", year: "Legacy 2012-2015", size: "15-inch", color: "from-amber-500 to-orange-500", features: ["Intel Core i7", "Retina Display", "Classic Design"] },
    { name: "MacBook Pro A1502", year: "Legacy 2013-2015", size: "13-inch", color: "from-amber-500 to-orange-500", features: ["Intel Core i5", "Retina Display", "Classic Design"] },
    { name: "MacBook Pro A1278", year: "Legacy 2012", size: "13-inch", color: "from-amber-500 to-orange-500", features: ["Intel Core i5", "Classic Display", "DVD Drive"] },
    { name: "MacBook Pro A1286", year: "Legacy 2012", size: "15-inch", color: "from-amber-500 to-orange-500", features: ["Intel Core i7", "Classic Display", "DVD Drive"] },
    
    // MacBook Air Models
    { name: "MacBook Air A2337", year: "M1 2020", size: "13-inch", color: "from-cyan-500 to-blue-500", features: ["M1 Chip", "Retina Display", "True Tone"] },
    { name: "MacBook Air A2681", year: "M2 2022", size: "13-inch", color: "from-cyan-500 to-blue-500", features: ["M2 Chip", "Liquid Retina", "MagSafe"] },
    { name: "MacBook Air A3114", year: "M3 2024", size: "15-inch", color: "from-cyan-500 to-blue-500", features: ["M3 Chip", "Liquid Retina", "15-inch Display"] }
  ];

  return baseModels.map(model => {
    const modelNumber = model.name.split(' ')[2]; // Gets A2337, A2338, etc.
    const deviceType = model.name.toLowerCase().includes('air') ? 'air' : 'pro';
    const serviceUrl = serviceType === 'logic-board' ? 'logic-board-repair' : `${serviceType}-replacement`;
    
    return {
      ...model,
      url: `/macbook-${deviceType}-${modelNumber.toLowerCase()}-${serviceUrl}-delhi-ncr`,
      modelNumber
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 max-w-7xl mx-auto">
          {models.map((model, modelIndex) => (
            <Link key={modelIndex} href={model.url}>
              <div className={`p-4 bg-gradient-to-br ${model.color} text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all cursor-pointer`}>
                <div className="text-center">
                  <div className="text-xs font-bold opacity-90 mb-1">{model.modelNumber}</div>
                  <h4 className="font-semibold text-sm leading-tight mb-1">{model.name}</h4>
                  <p className="text-xs opacity-75 mb-2">{model.year} • {model.size}</p>
                  <div className="text-xs bg-white/20 rounded px-2 py-1 inline-block">
                    {serviceTitle}
                  </div>
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