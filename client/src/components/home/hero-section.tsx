import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Shield, CheckCircle, Wrench } from "lucide-react";

// Using Unsplash images instead of local assets for better Vercel compatibility

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1654593114209-d915f46be333?fm=jpg&q=80&w=1920&ixlib=rb-4.1.0",
    title: "MacBook Pro Repair",
    description: "Professional MacBook Pro screen & logic board repair with precision tools"
  },
  {
    url: "https://images.unsplash.com/photo-1654778747238-12314fb5a4aa?fm=jpg&q=80&w=1920&ixlib=rb-4.1.0",
    title: "Expert Laptop Service",
    description: "Expert laptop disassembly and component-level repair services"
  },
  {
    url: "https://images.unsplash.com/photo-1654687790317-e0edff2e8196?fm=jpg&q=80&w=1920&ixlib=rb-4.1.0",
    title: "Professional Technicians",
    description: "Skilled technicians performing detailed laptop maintenance"
  },
  {
    url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?fm=jpg&q=80&w=1920&ixlib=rb-4.1.0",
    title: "Circuit Board Repair", 
    description: "Advanced motherboard and circuit board repair expertise"
  },
  {
    url: "https://images.unsplash.com/photo-1620368523635-df9d83338fc1?fm=jpg&q=80&w=1920&ixlib=rb-4.1.0",
    title: "Hardware Components",
    description: "Professional hard drive, SSD and hardware component replacement"
  },
  {
    url: "https://images.unsplash.com/photo-1593687395549-400945fed803?fm=jpg&q=80&w=1920&ixlib=rb-4.1.0",
    title: "Gaming Laptop Repair",
    description: "Gaming laptop motherboard repair and performance optimization"
  }
];

export default function HeroSection() {
  const [formData, setFormData] = useState({
    location: "",
    service: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleBookDiagnosis = async () => {
    if (!formData.phone) {
      alert("Please enter your phone number");
      return;
    }
    
    setIsSubmitting(true);
    
    // FormSubmit.co integration for unlimited submissions
    try {
      const formSubmitData = {
        name: "Quick Booking Request",
        phone: formData.phone,
        location: formData.location || "Not specified",
        device: formData.service || "General Device Repair", 
        service: formData.service || "Quick Diagnosis",
        message: `Quick booking request from hero section - ${formData.service || 'General repair'}`,
        _subject: "New Free Diagnosis Request - MacLap IT Care",
        _captcha: "false"
      };

      const response = await fetch('https://formsubmit.co/ajax/maclapitcare@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formSubmitData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ location: "", service: "", phone: "" });
        
        // Show success message for 3 seconds then redirect
        setTimeout(() => {
          if (typeof window !== "undefined") {
            if(typeof window !== "undefined") { window.location.href = '/contact'; }
          }
        }, 3000);
      } else {
        throw new Error('Failed to submit request');
      }
    } catch (error) {
      console.error('Error sending service request:', error);
      alert('Something went wrong. Please try again or call us directly at 9211720790');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative gradient-bg text-white py-20 overflow-hidden min-h-[80vh]">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-pattern opacity-30"></div>
      
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-black bg-opacity-60 transition-all duration-1000 ease-in-out ${
              index === currentImageIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url('${image.url}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateX(${index === currentImageIndex ? '0%' : index < currentImageIndex ? '-100%' : '100%'})`
            }}
          >
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 text-center z-20">
        <div className="max-w-5xl mx-auto">
          {/* Dynamic title based on current image */}
          <div className="mb-4">
            <span className="inline-block bg-accent/20 backdrop-blur-sm text-accent px-4 py-2 rounded-full text-sm font-semibold border border-accent/30">
              {heroImages[currentImageIndex].title}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up">
            <span className="text-blue-200">Premium Device Repair</span><br />
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              MacBook • Surface • Gaming • iMac • Mac Mini
            </span><br />
            <span className="text-2xl md:text-3xl text-accent">Noida Delhi Gurgaon Doorstep Service</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto fade-in-up stagger-1 text-blue-50">
            {heroImages[currentImageIndex].description}. Professional repair services with 
            free pickup & delivery, genuine parts, and expert technicians across Delhi NCR.
          </p>

          {/* Booking Form */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-4xl mx-auto mb-8 fade-in-up stagger-2 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                <SelectTrigger className="bg-white text-black border-gray-300">
                  <SelectValue placeholder="Select Location" className="text-black" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg z-50">
                  <SelectItem value="noida-sector-121" className="hover:bg-gray-100">Noida Sector 121</SelectItem>
                  <SelectItem value="noida-sector-62" className="hover:bg-gray-100">Noida Sector 62</SelectItem>
                  <SelectItem value="greater-noida" className="hover:bg-gray-100">Greater Noida</SelectItem>
                  <SelectItem value="delhi-ncr" className="hover:bg-gray-100">Delhi NCR</SelectItem>
                  <SelectItem value="gurgaon-sector-49" className="hover:bg-gray-100">Gurgaon Sector 49</SelectItem>
                  <SelectItem value="ghaziabad" className="hover:bg-gray-100">Ghaziabad</SelectItem>
                </SelectContent>
              </Select>

              <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                <SelectTrigger className="bg-white text-black border-gray-300">
                  <SelectValue placeholder="Select Service" className="text-black" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg z-50">
                  <SelectItem value="macbook-screen-replacement" className="hover:bg-gray-100">MacBook Screen Replacement</SelectItem>
                  <SelectItem value="macbook-battery-replacement" className="hover:bg-gray-100">MacBook Battery Replacement</SelectItem>
                  <SelectItem value="macbook-keyboard-repair" className="hover:bg-gray-100">MacBook Keyboard Repair</SelectItem>
                  <SelectItem value="macbook-logic-board-repair" className="hover:bg-gray-100">MacBook Logic Board Repair</SelectItem>
                  <SelectItem value="surface-screen-replacement" className="hover:bg-gray-100">Surface Pro Screen Replacement</SelectItem>
                  <SelectItem value="surface-type-cover-repair" className="hover:bg-gray-100">Surface Type Cover Repair</SelectItem>
                  <SelectItem value="gaming-laptop-cooling" className="hover:bg-gray-100">Gaming Laptop Cooling Fix</SelectItem>
                  <SelectItem value="gaming-laptop-gpu-repair" className="hover:bg-gray-100">Gaming GPU Repair</SelectItem>
                  <SelectItem value="imac-display-repair" className="hover:bg-gray-100">iMac Display Repair</SelectItem>
                  <SelectItem value="mac-mini-upgrade" className="hover:bg-gray-100">Mac Mini RAM/SSD Upgrade</SelectItem>
                  <SelectItem value="laptop-screen-repair" className="hover:bg-gray-100">Laptop Screen Repair</SelectItem>
                  <SelectItem value="laptop-motherboard-repair" className="hover:bg-gray-100">Laptop Motherboard Repair</SelectItem>
                  <SelectItem value="data-recovery-service" className="hover:bg-gray-100">Data Recovery Service</SelectItem>
                </SelectContent>
              </Select>

              <Input
                type="tel"
                placeholder="Your Phone Number"
                className="bg-white text-black border-gray-300"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />

              <Button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Button clicked with form data:", formData);
                  handleBookDiagnosis();
                }}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed w-full"
              >
                {isSubmitting ? "Submitting..." : isSubmitted ? "Request Sent!" : "Book Free Diagnosis"}
              </Button>
            </div>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg max-w-4xl mx-auto mb-6 fade-in-up">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Request sent successfully! We'll call you within 30 minutes. Redirecting to contact page...</span>
              </div>
            </div>
          )}

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-lg fade-in-up stagger-3">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <CheckCircle className="h-6 w-6 text-accent" />
              <span className="text-white font-medium">Free Doorstep Service</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-white font-medium">Up to 1 Year Warranty</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Wrench className="h-6 w-6 text-accent" />
              <span className="text-white font-medium">Expert Technicians</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
