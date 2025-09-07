import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Laptop, ArrowRight, Star, Shield, Clock, 
  CheckCircle, Phone, MessageCircle, Award, Zap 
} from "lucide-react";
import { Link } from "wouter";
import { CONTACT_INFO } from "@/lib/constants";

export default function MacBookModelSelection() {
  useEffect(() => {
    document.title = "Select Your MacBook Model for Expert Repair | MacLap IT Care Delhi NCR";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Select your MacBook model for expert repair service in Delhi NCR. Pro, Air, M3, M2, M1, Intel models supported. Same-day service, lifetime warranty, free pickup. Call 9211720790");
    }

    // Add keywords meta tag
    const setKeywordsTag = () => {
      let keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', 'MacBook model selection, MacBook Pro repair, MacBook Air repair, M3 MacBook repair, M2 MacBook repair, M1 MacBook repair, Intel MacBook repair, MacBook service center Delhi');
    };
    setKeywordsTag();
  }, []);

  const macbookModels = [
    {
      category: "Latest MacBook Models (2023-2024)",
      models: [
        { 
          name: "MacBook Pro M3", 
          year: "2023-2024", 
          sizes: ["14-inch", "16-inch"],
          link: "/macbook-pro-screen-replacement",
          features: ["M3 Chip", "Liquid Retina XDR", "Up to 22 hours battery"]
        },
        { 
          name: "MacBook Air M3", 
          year: "2024", 
          sizes: ["13-inch", "15-inch"],
          link: "/macbook-air-screen-replacement-price-delhi-ncr",
          features: ["M3 Chip", "Liquid Retina Display", "Up to 18 hours battery"]
        }
      ]
    },
    {
      category: "MacBook M2 Series (2022-2023)",
      models: [
        { 
          name: "MacBook Pro M2", 
          year: "2022-2023", 
          sizes: ["13-inch", "14-inch", "16-inch"],
          link: "/macbook-pro-screen-replacement",
          features: ["M2 Chip", "ProMotion Display", "MagSafe 3"]
        },
        { 
          name: "MacBook Air M2", 
          year: "2022-2023", 
          sizes: ["13-inch", "15-inch"],
          link: "/macbook-air-screen-replacement-price-delhi-ncr",
          features: ["M2 Chip", "Redesigned Body", "MagSafe Charging"]
        }
      ]
    },
    {
      category: "MacBook M1 Series (2020-2021)",
      models: [
        { 
          name: "MacBook Pro M1", 
          year: "2020-2021", 
          sizes: ["13-inch"],
          link: "/macbook-pro-screen-replacement",
          features: ["M1 Chip", "Retina Display", "Touch Bar"]
        },
        { 
          name: "MacBook Air M1", 
          year: "2020-2021", 
          sizes: ["13-inch"],
          link: "/macbook-air-screen-replacement-price-delhi-ncr",
          features: ["M1 Chip", "Fanless Design", "All-day Battery"]
        }
      ]
    },
    {
      category: "Intel MacBook Series (2016-2020)",
      models: [
        { 
          name: "MacBook Pro Intel", 
          year: "2016-2020", 
          sizes: ["13-inch", "15-inch", "16-inch"],
          link: "/macbook-pro-screen-replacement",
          features: ["Intel Core", "Touch Bar", "Thunderbolt 3"]
        },
        { 
          name: "MacBook Air Intel", 
          year: "2018-2020", 
          sizes: ["13-inch"],
          link: "/macbook-air-screen-replacement-price-delhi-ncr",
          features: ["Intel Core", "Retina Display", "Force Touch Trackpad"]
        }
      ]
    },
    {
      category: "Legacy MacBook Models (2010-2017)",
      models: [
        { 
          name: "MacBook Pro Legacy", 
          year: "2012-2015", 
          sizes: ["13-inch", "15-inch"],
          link: "/macbook-pro-screen-replacement",
          features: ["Non-Retina Display", "Optical Drive", "Upgradeable RAM"]
        },
        { 
          name: "MacBook Air Legacy", 
          year: "2010-2017", 
          sizes: ["11-inch", "13-inch"],
          link: "/macbook-air-screen-replacement-price-delhi-ncr",
          features: ["LED Display", "Ultra-Portable", "Solid State Drive"]
        }
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "Industry-first lifetime warranty on all MacBook repairs",
      highlight: "LIFETIME"
    },
    {
      icon: Clock,
      title: "Same Day Repair",
      description: "Most repairs completed within 2-4 hours",
      highlight: "SAME DAY"
    },
    {
      icon: Zap,
      title: "Free Pickup & Drop",
      description: "Doorstep service across Delhi NCR at no extra cost",
      highlight: "FREE"
    },
    {
      icon: Award,
      title: "Genuine Parts Only",
      description: "Original quality components with Apple specifications",
      highlight: "GENUINE"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Badge className="bg-white/20 text-white">Expert Service</Badge>
              <Badge className="bg-white/20 text-white">All Models Supported</Badge>
              <Badge className="bg-white/20 text-white">Lifetime Warranty</Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              MacBook Repair in Delhi NCR<br />
              <span className="text-blue-200">At the Tap of a Button</span>
            </h1>
            
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Select your MacBook model below for expert repair service. We handle all MacBook models from latest M3 to legacy Intel models with same professional expertise.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="flex items-center justify-center space-x-3 bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call: {CONTACT_INFO.phone1}</span>
              </a>
              
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20repair%20service`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Model Selection */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              For the Fastest MacBook Repair
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Select Your Model
            </h3>
            <div className="flex justify-center mb-8">
              <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
            </div>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {macbookModels.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h4 className="text-xl font-bold text-foreground mb-6 text-center">
                  {category.category}
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.models.map((model, modelIndex) => (
                    <Card key={modelIndex} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Laptop className="h-8 w-8 text-primary" />
                            <div>
                              <CardTitle className="text-xl">{model.name}</CardTitle>
                              <p className="text-muted-foreground">{model.year}</p>
                            </div>
                          </div>
                          <ArrowRight className="h-6 w-6 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {model.sizes.map((size, sizeIndex) => (
                              <Badge key={sizeIndex} variant="outline">{size}</Badge>
                            ))}
                          </div>
                          
                          <div className="space-y-2">
                            {model.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <Link href={model.link}>
                            <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                              <span>Get Repair Service</span>
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Should You Trust Us With Your
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              MacBook Repair
            </h3>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    {feature.highlight}
                  </Badge>
                  
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Which Model You Have?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Call our experts for free consultation and model identification
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="flex items-center justify-center space-x-3 bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call: {CONTACT_INFO.phone1}</span>
              </a>
              
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20help%20identifying%20my%20MacBook%20model`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp for Help</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}