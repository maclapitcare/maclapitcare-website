import { MapPin, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function LocationMapSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Our Repair Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Noida Sector 121 with easy access and free parking
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8298276443944!2d77.38901427462796!3d28.598903375746464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef9df4556c29%3A0x93c5346dbb4520e8!2sMacLap%20IT%20Care%20-%20Laptop%20MacBook%20Repair%20Experts!5e0!3m2!1sen!2sin!4v1704286752835!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MacLap IT Care Location"
                className="rounded-lg"
              ></iframe>
              
              {/* Overlay with location info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">MacLap IT Care</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Shop 75, Sector 121 Noida
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/MacLap+IT+Care+-+Laptop+MacBook+Repair+Experts/@28.5989033,77.3890143,17z/data=!3m1!4b1!4m6!3m5!1s0x390cef9df4556c29:0x93c5346dbb4520e8!8m2!3d28.5989033!4d77.3915892!16s%2Fg%2F11trgqp5px?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Navigation className="h-5 w-5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}