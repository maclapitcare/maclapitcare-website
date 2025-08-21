import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin } from "lucide-react";

export default function LocationsSection() {
  const locations = [
    {
      name: "Noida",
      description: "Expert repair services in Noida and Greater Noida with free pickup",
      path: "/locations/noida"
    },
    {
      name: "Ghaziabad",
      description: "Quality repair services in Ghaziabad with doorstep convenience",
      path: "/locations/ghaziabad"
    },
    {
      name: "Delhi",
      description: "Comprehensive MacBook and laptop repair services across all Delhi regions",
      path: "/locations/delhi"
    },
    {
      name: "Gurgaon",
      description: "Professional laptop repair services throughout Gurgaon and surrounding areas",
      path: "/locations/gurgaon"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Service Locations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Providing doorstep repair services across Delhi NCR
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <Card 
              key={location.path} 
              className={`text-center hover:shadow-lg transition-all duration-300 fade-in-up stagger-${index + 1}`}
            >
              <CardContent className="p-6">
                <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{location.name}</h3>
                <p className="text-muted-foreground mb-4">{location.description}</p>
                <Link href={location.path}>
                  <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                    Service Areas
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
