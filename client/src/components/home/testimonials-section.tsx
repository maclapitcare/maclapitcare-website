import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, UserCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let isScrolling = true;
    const scrollSpeed = 1; // Improved scroll speed

    const autoScroll = () => {
      if (scrollContainer && isScrolling) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Calculate the halfway point for seamless reset
        const halfWidth = scrollContainer.scrollWidth / 2;
        
        // Reset scroll when reaching halfway point (where duplicate content starts)
        if (scrollContainer.scrollLeft >= halfWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll after a brief delay
    const startDelay = setTimeout(() => {
      animationId = requestAnimationFrame(autoScroll);
    }, 1000);

    // Pause on hover
    const handleMouseEnter = () => {
      isScrolling = false;
    };

    const handleMouseLeave = () => {
      isScrolling = true;
    };

    // Handle manual scroll interference
    let scrollTimeout: number;
    const handleScroll = () => {
      // Temporarily pause auto-scroll when user manually scrolls
      isScrolling = false;
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        isScrolling = true;
      }, 3000); // Resume after 3 seconds of no manual scrolling
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(animationId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 406; // Card width + gap (400 + 6)
      
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 406; // Card width + gap (400 + 6)
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="h-4 w-4 fill-current text-yellow-500" />
            4.9/5 Customer Rating
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by over 5,000+ satisfied customers across Delhi NCR with expert MacBook and laptop repair services
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white shadow-xl hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </Button>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white shadow-xl hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </Button>

          {/* Testimonials Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 px-16 scroll-smooth"
            style={{ 
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* First set of testimonials */}
            {TESTIMONIALS.map((testimonial, index) => (
              <Card 
                key={`first-${testimonial.name}`} 
                className="flex-shrink-0 w-[400px] bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] rounded-2xl"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Rating Section */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current drop-shadow-sm" />
                      ))}
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                      {testimonial.rating}.0
                    </div>
                  </div>
                  
                  {/* Comment */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg flex-grow italic">
                    "{testimonial.comment}"
                  </p>
                  
                  {/* Service Badge */}
                  {testimonial.service && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl border border-blue-200/50">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <p className="text-sm font-semibold text-blue-900">Service: {testimonial.service}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Customer Info */}
                  <div className="flex items-center pt-4 border-t border-gray-100">
                    <div className="w-16 h-16 rounded-full mr-4 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center ring-4 ring-blue-100 shadow-lg">
                      <UserCheck className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm font-medium">{testimonial.location}</p>
                    </div>
                    <div className="text-green-500">
                      <UserCheck className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {TESTIMONIALS.map((testimonial, index) => (
              <Card 
                key={`second-${testimonial.name}`} 
                className="flex-shrink-0 w-[400px] bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] rounded-2xl"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Rating Section */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current drop-shadow-sm" />
                      ))}
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                      {testimonial.rating}.0
                    </div>
                  </div>
                  
                  {/* Comment */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg flex-grow italic">
                    "{testimonial.comment}"
                  </p>
                  
                  {/* Service Badge */}
                  {testimonial.service && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl border border-blue-200/50">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <p className="text-sm font-semibold text-blue-900">Service: {testimonial.service}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Customer Info */}
                  <div className="flex items-center pt-4 border-t border-gray-100">
                    <div className="w-16 h-16 rounded-full mr-4 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center ring-4 ring-blue-100 shadow-lg">
                      <UserCheck className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm font-medium">{testimonial.location}</p>
                    </div>
                    <div className="text-green-500">
                      <UserCheck className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}