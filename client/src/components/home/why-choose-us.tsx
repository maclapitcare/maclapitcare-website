import { 
  Home, Gem, UserCheck, DollarSign, Shield, Clock, 
  Award, Wrench, CheckCircle, Truck, Phone, Settings 
} from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Doorstep Service",
      description: "Free pickup and delivery service across Delhi NCR",
      icon: Home
    },
    {
      title: "Genuine Parts",
      description: "Original Apple certified parts with warranty",
      icon: Gem
    },
    {
      title: "Expert Technicians",
      description: "Certified professionals with 10+ years experience",
      icon: UserCheck
    },
    {
      title: "No Fix No Fee",
      description: "Pay only when your device is successfully repaired",
      icon: DollarSign
    },
    {
      title: "Warranty Protection",
      description: "Up to 6 months warranty on all repairs",
      icon: Shield
    },
    {
      title: "Quick Turnaround",
      description: "Most repairs completed within 24-48 hours",
      icon: Clock
    },
    {
      title: "Certified Service",
      description: "Authorized Apple service center with certifications",
      icon: Award
    },
    {
      title: "Advanced Tools",
      description: "Latest diagnostic equipment and repair tools",
      icon: Wrench
    },
    {
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all services",
      icon: CheckCircle
    },
    {
      title: "Free Diagnostics",
      description: "Complete device diagnosis at no extra cost",
      icon: Settings
    },
    {
      title: "Express Delivery",
      description: "Same-day delivery for urgent repair requests",
      icon: Truck
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support and assistance",
      icon: Phone
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
