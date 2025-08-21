import { useEffect } from "react";
import HeroSection from "../components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import LocationsSection from "@/components/home/locations-section";
import WhyChooseUsSection from "@/components/home/why-choose-us";
import TestimonialsSection from "@/components/home/testimonials-section";
import CertificationsSection from "@/components/home/certifications-section";
import LocationMapSection from "@/components/home/location-map-section";
import LocalSearchContent from "@/components/seo/local-search-content";


export default function Home() {
  useEffect(() => {
    // Set page title and meta description for local SEO
    document.title = "MacBook Surface Gaming Laptop Repair Near Me | Mac Mini iMac Service Noida Delhi | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "MacBook Surface Gaming Laptop Mac Mini iMac repair near me Noida Delhi. 4.9/5 rated premium service. Screen ₹2999+, battery ₹1999+, performance upgrade ₹3499+. Expert technicians. Call 9211720790");
    }

    // Add Open Graph meta tags
    const setMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaTag('og:title', 'MacBook Repair Near Me | Laptop Repair Service Noida Delhi');
    setMetaTag('og:description', '4.9/5 rated MacBook laptop repair service in Noida, Delhi, Gurgaun. Free doorstep pickup, genuine parts, expert technicians.');
    if (typeof window !== 'undefined') {
      setMetaTag('og:url', typeof window !== "undefined" ? window.location.href : "");
    }
    setMetaTag('og:image', 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630');
  }, []);

  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <LocationsSection />
      <WhyChooseUsSection />
      <LocalSearchContent />
      <TestimonialsSection />
      <CertificationsSection />
      <LocationMapSection />
    </div>
  );
}
