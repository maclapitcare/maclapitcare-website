import { Link } from "wouter";
import { Laptop, Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Clock, ChevronDown, MessageCircle } from "lucide-react";
import { SERVICES, LOCATIONS, CONTACT_INFO } from "@/lib/constants";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({
    services: false,
    locations: false,
    quickLinks: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-16">
      <div className="container mx-auto px-4">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary text-primary-foreground rounded-lg p-2">
                <Laptop className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MacLap IT Care</h3>
                <p className="text-sm text-gray-400">Laptop MacBook Repair Experts</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional MacBook and laptop repair services across Delhi NCR with doorstep convenience and expert technicians.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/maclapitcare" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/maclapitcare" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/maclapitcare" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@maclapitcare" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <button 
              onClick={() => toggleSection('services')}
              className="md:cursor-default flex items-center justify-between w-full text-left md:pointer-events-none"
            >
              <h4 className="text-lg font-bold mb-4 md:mb-4">Our Services</h4>
              <ChevronDown className={`md:hidden h-4 w-4 transition-transform ${openSections.services ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-2 text-gray-400 md:block ${openSections.services ? 'block' : 'hidden'}`}>
              {SERVICES.map((service) => (
                <li key={service.path}>
                  <Link href={service.path} className="hover:text-primary transition-colors text-sm md:text-base py-1 block">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <button 
              onClick={() => toggleSection('locations')}
              className="md:cursor-default flex items-center justify-between w-full text-left md:pointer-events-none"
            >
              <h4 className="text-lg font-bold mb-4 md:mb-4">Service Locations</h4>
              <ChevronDown className={`md:hidden h-4 w-4 transition-transform ${openSections.locations ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`md:block ${openSections.locations ? 'block' : 'hidden'}`}>
              {/* MacBook Repair Cities */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-gray-300 mb-2">MacBook Repair</h5>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li><Link href="/macbook-repair-noida-greater-noida" className="hover:text-primary transition-colors py-1 block">MacBook Repair Noida</Link></li>
                  <li><Link href="/macbook-repair-delhi" className="hover:text-primary transition-colors py-1 block">MacBook Repair Delhi</Link></li>
                  <li><Link href="/macbook-repair-gurgaon" className="hover:text-primary transition-colors py-1 block">MacBook Repair Gurgaon</Link></li>
                  <li><Link href="/macbook-repair-ghaziabad" className="hover:text-primary transition-colors py-1 block">MacBook Repair Ghaziabad</Link></li>
                </ul>
              </div>

              {/* Laptop Repair Cities */}
              <div>
                <h5 className="text-sm font-semibold text-gray-300 mb-2">Laptop Repair</h5>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li><Link href="/laptop-repair-noida-greater-noida" className="hover:text-primary transition-colors py-1 block">Laptop Repair Noida</Link></li>
                  <li><Link href="/laptop-repair-delhi-doorstep-service" className="hover:text-primary transition-colors py-1 block">Laptop Repair Delhi</Link></li>
                  <li><Link href="/laptop-repair-gurgaon-gurugram" className="hover:text-primary transition-colors py-1 block">Laptop Repair Gurgaon</Link></li>
                  <li><Link href="/laptop-repair-ghaziabad-vaishali-indirapuram" className="hover:text-primary transition-colors py-1 block">Laptop Repair Ghaziabad</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <button 
              onClick={() => toggleSection('quickLinks')}
              className="md:cursor-default flex items-center justify-between w-full text-left md:pointer-events-none"
            >
              <h4 className="text-lg font-bold mb-4 md:mb-4">Quick Links</h4>
              <ChevronDown className={`md:hidden h-4 w-4 transition-transform ${openSections.quickLinks ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-2 text-gray-400 md:block ${openSections.quickLinks ? 'block' : 'hidden'}`}>
              <li><Link href="/about" className="hover:text-primary transition-colors text-sm md:text-base py-1 block">About Us</Link></li>

              <li><Link href="/macbook-component-pricing" className="hover:text-primary transition-colors text-sm md:text-base py-1 block">Pricing Guide</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors text-sm md:text-base py-1 block">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors text-sm md:text-base py-1 block">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              {/* Phone Numbers with Touch-Friendly Design */}
              <div className="space-y-2">
                <a 
                  href={`tel:${CONTACT_INFO.phone1}`}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors md:p-0 md:hover:bg-transparent"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm md:text-base">{CONTACT_INFO.phone1}</span>
                </a>
                <a 
                  href={`tel:${CONTACT_INFO.phone2}`}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors md:p-0 md:hover:bg-transparent"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm md:text-base">{CONTACT_INFO.phone2}</span>
                </a>
              </div>
              
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transition-colors md:p-0 md:hover:bg-transparent"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm md:text-base break-all">{CONTACT_INFO.email}</span>
              </a>
              
              <div className="flex items-start space-x-2 p-2 rounded-lg md:p-0">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-sm md:text-base">{CONTACT_INFO.address}</span>
              </div>
              
              <div className="flex items-center space-x-2 p-2 rounded-lg md:p-0">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm md:text-base">{CONTACT_INFO.workingHours}</span>
              </div>
              
              <div className="mt-4">
                <a
                  href="https://www.google.com/maps/place/MacLap+IT+Care+-+Laptop+MacBook+Repair+Experts/@28.5989033,77.3890143,17z/data=!3m1!4b1!4m6!3m5!1s0x390cef9df4556c29:0x93c5346dbb4520e8!8m2!3d28.5989033!4d77.3915892!16s%2Fg%2F11trgqp5px?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full text-center md:w-auto"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 pt-6 pb-4">
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              <strong className="text-gray-300">DISCLAIMER:</strong> MacLap IT Care is an independent repair service provider. We are not affiliated with or authorized by Apple Inc. or other manufacturers. Brand names and trademarks are used for identification purposes only. All repairs are performed independently with genuine parts and our warranty coverage.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MacLap IT Care - Laptop MacBook Repair Experts. All rights reserved. | Professional MacBook and Laptop Repair Services in Delhi NCR
          </p>
        </div>
      </div>
    </footer>
  );
}
