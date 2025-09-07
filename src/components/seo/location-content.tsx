import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

interface LocationContentProps {
  location: string;
  areas: string[];
  landmarks: string[];
  searchTerms: string[];
}

export default function LocationContent({ location, areas, landmarks, searchTerms }: LocationContentProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            MacBook & Laptop Repair Services in {location}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional doorstep repair services covering all areas in {location}. 
            We come to you with genuine parts and expert technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Areas */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-bold">Service Areas in {location}</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {areas.map((area, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {area}
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>

          {/* Popular Searches */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-bold">Popular Searches</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {searchTerms.map((term, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    {term}
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>

          {/* Nearby Landmarks */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-bold">Near Popular Landmarks</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {landmarks.map((landmark, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {landmark}
                  </li>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Need MacBook or Laptop Repair in {location}?
            </h3>
            <p className="text-lg mb-6">
              Free doorstep pickup and delivery. Call now for same-day service!
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="tel:+919211720790"
                className="flex items-center space-x-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <Phone className="h-6 w-6" />
                <span>Call: 9211720790</span>
              </a>
              <a
                href="https://wa.me/919211720790?text=Hi%2C%20I%20need%20laptop%20repair%20service%20in%20{location}"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <span>💬</span>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}