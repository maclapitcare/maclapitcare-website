import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, User, UserCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.8; // pixels per frame

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset scroll when reaching the end (seamless loop)
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll
    animationId = requestAnimationFrame(autoScroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(autoScroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by over 5,000+ satisfied customers across Delhi NCR - 4.9/5 Rating
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white border-2 hover:scale-110 transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white border-2 hover:scale-110 transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Testimonials Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-hidden pb-4 px-16"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* First set of testimonials */}
            {TESTIMONIALS.map((testimonial, index) => (
              <Card 
                key={`first-${testimonial.name}`} 
                className="flex-shrink-0 w-96 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-muted-foreground font-semibold">{testimonial.rating}.0</span>
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">"{testimonial.comment}"</p>
                  
                  {testimonial.service && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100">
                      <p className="text-sm font-medium text-blue-900 mb-1">Service: {testimonial.service}</p>
                      <p className="text-sm text-green-700 font-semibold">✓ {testimonial.savings}</p>
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {TESTIMONIALS.map((testimonial, index) => (
              <Card 
                key={`second-${testimonial.name}`} 
                className="flex-shrink-0 w-96 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-muted-foreground font-semibold">{testimonial.rating}.0</span>
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">"{testimonial.comment}"</p>
                  
                  {testimonial.service && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100">
                      <p className="text-sm font-medium text-blue-900 mb-1">Service: {testimonial.service}</p>
                      <p className="text-sm text-green-700 font-semibold">✓ {testimonial.savings}</p>
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Hover to pause • Use arrows to navigate manually
          </p>
        </div>
      </div>
    </section>
  );
}