import { Home, Shield, Clock, Award, Gem, UserCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Lifetime Warranty",
      description: "Industry-first lifetime warranty on all MacBook repairs with confidence guarantee",
      icon: Shield,
      highlight: "LIFETIME",
      color: "text-green-600"
    },
    {
      title: "Same Day Repair",
      description: "Most MacBook repairs completed within 2-4 hours with quality guarantee",
      icon: Clock,
      highlight: "SAME DAY",
      color: "text-blue-600"
    },
    {
      title: "Free Pickup & Drop",
      description: "Doorstep service across Delhi NCR with professional handling",
      icon: Home,
      highlight: "FREE",
      color: "text-purple-600"
    },
    {
      title: "Genuine Spare Parts",
      description: "Original quality components with Apple specifications and certification",
      icon: Award,
      highlight: "GENUINE",
      color: "text-orange-600"
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
              className={`text-center fade-in-up stagger-${index + 1} bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className={`bg-gradient-to-br from-primary/10 to-primary/20 rounded-full p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              
              <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                {feature.highlight}
              </Badge>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
