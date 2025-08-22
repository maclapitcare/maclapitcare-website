import { Home, Gem, UserCheck, DollarSign } from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Doorstep Service",
      description: "We come to your location for pickup and delivery service",
      icon: Home
    },
    {
      title: "High Quality Parts",
      description: "We use only genuine and premium quality replacement parts",
      icon: Gem
    },
    {
      title: "Expert Technicians",
      description: "Certified technicians with years of experience in MacBook repair",
      icon: UserCheck
    },
    {
      title: "No Fix No Fee",
      description: "You only pay if we successfully repair your device",
      icon: DollarSign
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Our MacBook & Laptop Repair Service?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for all MacBook and laptop repair needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className={`text-center fade-in-up stagger-${index + 1}`}
            >
              <div className="bg-accent text-accent-foreground rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
