import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Clock, Star } from "lucide-react";

export default function LocalSearchContent() {
  const popularSearches = [
    "MacBook repair near me",
    "MacBook screen replacement Noida",
    "Laptop repair service Sector 121", 
    "MacBook battery replacement near me",
    "Laptop repair Delhi doorstep",
    "MacBook keyboard repair Gurgaon",
    "Laptop screen repair near me",
    "MacBook logic board repair Noida",
    "Laptop motherboard repair Delhi",
    "Data recovery service near me"
  ];

  const serviceLocations = [
    "Noida Sector 121, 62, 63, 135, 137",
    "Delhi - Lajpat Nagar, CP, Karol Bagh",
    "Gurgaon Sector 49, 29, Golf Course Road",
    "Greater Noida, Noida Extension",
    "Ghaziabad, Indirapuram, Vaishali"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Find MacBook & Laptop Repair Services Near You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand you search for "repair near me" - that's why we provide doorstep service 
            across Delhi NCR. No need to travel, we come to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Popular Searches */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Search className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-bold">Popular Local Searches</h3>
              </div>
              <div className="space-y-3">
                {popularSearches.map((search, index) => (
                  <div key={index} className="flex items-center p-2 hover:bg-muted/50 rounded-lg transition-colors">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span className="text-muted-foreground">{search}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Service Coverage */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-bold">Service Coverage Areas</h3>
              </div>
              <div className="space-y-4">
                {serviceLocations.map((location, index) => (
                  <div key={index} className="flex items-start p-3 bg-muted/30 rounded-lg">
                    <Star className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <span className="text-muted-foreground">{location}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="font-semibold text-primary">Same-Day Service Available</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Free pickup and delivery within 2 hours of booking across all covered areas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Local SEO Content */}
        <div className="mt-12 text-center">
          <div className="bg-muted/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Why Choose Local MacBook & Laptop Repair?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Nearby Service</h4>
                <p className="text-sm text-muted-foreground">
                  Local technicians who understand your area and provide quick response.
                </p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Faster Turnaround</h4>
                <p className="text-sm text-muted-foreground">
                  Same-day pickup and delivery because we're right in your neighborhood.
                </p>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Local Reviews</h4>
                <p className="text-sm text-muted-foreground">
                  Trusted by 5000+ customers in your local area with verified reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}