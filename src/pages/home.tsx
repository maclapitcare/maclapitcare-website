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
    document.title = "MacBook Repair Delhi NCR | MacBook Pro Air Screen Battery Repair Noida Gurgaon | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert MacBook repair service in Delhi NCR. MacBook Pro & Air screen replacement ₹4999+, battery ₹3999+. Apple certified technicians, genuine parts, 90-day warranty. Free pickup across Noida, Delhi, Gurgaon. Call 9211720790");
    }

    // Add keywords meta tag
    const setKeywordsTag = () => {
      let keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', 'MacBook repair, MacBook Pro repair, MacBook Air repair, Apple service center, laptop repair Delhi, MacBook screen replacement, MacBook battery replacement, Noida laptop repair, Gurgaon MacBook service');
    };
    setKeywordsTag();

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

    setMetaTag('og:title', 'MacBook Repair Delhi NCR | Apple Device Service Center | Maclap IT Care');
    setMetaTag('og:description', 'Delhi NCR\'s top-rated MacBook repair service. Expert technicians, genuine parts, 90-day warranty. Free doorstep pickup & delivery across all locations.');
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
