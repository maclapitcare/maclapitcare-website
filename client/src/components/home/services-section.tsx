import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Apple, Laptop, Monitor, CheckCircle, Tablet, HardDrive, Gamepad2, Calendar } from "lucide-react";
import { SPECIALIZED_SERVICES } from "@/lib/constants";
import ServiceBookingModal from "@/components/forms/service-booking-modal";
// Using your original service images from public folder
const macbookRepairImage = "/macbook-space-grey-clean.png";
const imacRepairImage = "/imac-24-yellow.png";
const macMiniImage = "/mac-mini-repair-service.png";
const laptopRepairImage = "/laptop-repair-service.jpg";
const gamingLaptopImage = "/gaming-laptop-repair.png";
const surfaceRepairImage = "/surface-pro-repair.png";

export default function ServicesSection() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleBookService = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsBookingModalOpen(true);
  };
  const mainServices = [
    {
      title: "MacBook Repair",
      description: "Specialized repair services for all MacBook models including screen, battery, keyboard, and logic board repairs.",
      image: macbookRepairImage,
      icon: Apple,
      path: "/macbook-repair-service-delhi-ncr",
      features: ["Screen Replacement", "Battery Replacement", "Keyboard Repair", "Logic Board Repair"],
      price: "Starting ₹2,999"
    },
    {
      title: "iMac Repair",
      description: "Professional iMac repair services including display issues, performance upgrades, and hardware replacements.",
      image: imacRepairImage,
      icon: Monitor,
      path: "/imac-repair-service-delhi-ncr",
      features: ["Display Repair", "SSD Upgrade", "Memory Upgrade", "Power Supply Repair"],
      price: "Starting ₹4,999"
    },
    {
      title: "Mac Mini Repair",
      description: "Complete Mac Mini repair services including performance upgrades and component replacements.",
      image: macMiniImage,
      icon: HardDrive,
      path: "/mac-mini-repair-service-delhi-ncr",
      features: ["Logic Board Repair", "Storage Upgrade", "RAM Expansion", "Port Replacement"],
      price: "Starting ₹3,999"
    },
    {
      title: "Laptop Repair",
      description: "Complete repair solutions for all laptop brands including Dell, HP, Lenovo, Asus, and more.",
      image: laptopRepairImage,
      icon: Laptop,
      path: "/laptop-repair-service-noida-delhi",
      features: ["Motherboard Repair", "Hard Drive Recovery", "RAM Upgrade", "Cooling System Repair"],
      price: "Starting ₹1,499"
    },
    {
      title: "Gaming Laptop",
      description: "Specialized gaming laptop repair and performance optimization for high-end gaming rigs.",
      image: gamingLaptopImage,
      icon: Gamepad2,
      path: "/gaming-laptop-repair-noida-delhi",
      features: ["Graphics Card Repair", "Cooling Optimization", "RAM/SSD Upgrade", "Overheating Fix"],
      price: "Starting ₹3,499"
    },
    {
      title: "Microsoft Surface",
      description: "Expert Surface device repair including Surface Pro, Surface Laptop, and Surface Book models.",
      image: surfaceRepairImage,
      icon: Tablet,
      path: "/surface-repair-service-delhi-ncr",
      features: ["Touch Screen Repair", "Type Cover Issues", "Charging Port Fix", "Performance Upgrade"],
      price: "Starting ₹4,999"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Premium Device Repair Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert repair solutions for MacBook, Surface, Gaming Laptops, iMac, Mac Mini & all laptop brands with genuine parts and warranty
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={service.path} className={`hover:shadow-xl transition-all duration-300 fade-in-up stagger-${index + 1}`}>
              <CardContent className="p-0">
                <div className="relative w-full h-56 bg-gray-50 rounded-t-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} service Delhi NCR - Professional ${service.title.toLowerCase()} repair near me Noida Gurgaon`}
                    className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      console.log(`Image failed to load: ${service.image}`);
                      // Only use fallback if original image fails to load
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300';
                    }}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-4 text-center">
                    {service.price}
                  </p>
                  <p className="text-muted-foreground mb-6 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-3">
                    <Link href={service.path}>
                      <Button variant="outline" className="w-full">
                        Get Quote
                      </Button>
                    </Link>
                    <Button 
                      onClick={() => handleBookService(service.title)}
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Service
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialized Services */}
        <Card className="fade-in-up stagger-4">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold text-foreground text-center mb-8">
              Specialized Repair Services
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {SPECIALIZED_SERVICES.map((service, index) => (
                <div key={service.name} className="text-center group cursor-pointer">
                  <div className="bg-primary/10 group-hover:bg-primary/20 rounded-full p-4 mb-3 mx-auto w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg floating-animation" style={{animationDelay: `${index * 0.1}s`}}>
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                  </div>
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300">{service.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Service Booking Modal */}
      <ServiceBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceName={selectedService}
      />
    </section>
  );
}
