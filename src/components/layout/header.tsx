import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Laptop, Menu, Phone, Apple, Monitor, MapPin, Wrench, Info, Users, MessageCircle, HelpCircle } from "lucide-react";
import { SERVICES, LOCATIONS, CONTACT_INFO } from "@/lib/constants";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-primary text-primary-foreground rounded-lg p-2">
              <Laptop className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MacLap IT Care</h1>
              <p className="text-xs text-gray-600">Laptop MacBook Repair Experts</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 data-[state=open]:text-blue-600 font-medium">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-72 bg-white border border-gray-200 shadow-lg rounded-lg">
                    <div className="p-4 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900 text-sm">Our Services</h3>
                      <p className="text-xs text-gray-600 mt-1">Professional repair solutions</p>
                    </div>
                    <div className="max-h-80 overflow-y-auto p-2">
                      <div className="space-y-1">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            className="flex items-center space-x-3 p-3 hover:bg-blue-100 rounded-md transition-colors text-gray-800 hover:text-blue-700 group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                              <service.icon className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="font-medium text-sm">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 border-t border-gray-100 bg-gray-50 rounded-b-lg">
                      <div className="text-center">
                        <p className="text-xs text-gray-600">Need help choosing?</p>
                        <Link 
                          href="/contact" 
                          className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Contact our experts
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 data-[state=open]:text-blue-600 font-medium">Locations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-4 bg-white border border-gray-200 shadow-lg rounded-lg">
                    <div className="space-y-2">
                      {LOCATIONS.map((loc) => (
                        <Link
                          key={loc.path}
                          href={loc.path}
                          className="flex items-center space-x-3 p-2 hover:bg-blue-100 rounded-md transition-colors text-gray-800 hover:text-blue-700 group"
                        >
                          <MapPin className="h-4 w-4 text-blue-600 group-hover:text-blue-700" />
                          <span className="font-medium">{loc.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  href="/about" 
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location === '/about' ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  About
                </Link>
              </NavigationMenuItem>





              <NavigationMenuItem>
                <Link 
                  href="/macbook-component-pricing" 
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location === '/macbook-component-pricing' ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  Pricing
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  href="/faq" 
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location === '/faq' ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  FAQ
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link 
                  href="/contact" 
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location === '/contact' ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Phone and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="tel:+919211720790"
                className="flex items-center space-x-2 text-blue-600 font-bold hover:text-blue-700 transition-colors bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg"
              >
                <Phone className="h-4 w-4" />
                <span>9211720790</span>
              </a>
              <a
                href="https://wa.me/919211720790"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold transition-colors shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden relative">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm bg-white border-l-2 border-gray-200 shadow-xl">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>Mobile navigation menu for Maclap IT Care website</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-lg p-2">
                        <Laptop className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="font-bold text-gray-900">MacLap IT Care</h2>
                        <p className="text-xs text-gray-600">Expert Repair Services</p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Content */}
                  <div className="flex-1 py-6 overflow-y-auto">
                    <div className="space-y-8">
                      {/* Services Section */}
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <Wrench className="h-5 w-5 text-blue-600" />
                          <h3 className="font-bold text-lg text-gray-900">Services</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          {SERVICES.map((service) => (
                            <Link
                              key={service.path}
                              href={service.path}
                              className="flex items-center space-x-3 p-3 hover:bg-blue-50 rounded-lg transition-colors duration-150 group"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="bg-blue-50 p-2 rounded-md group-hover:bg-blue-100 transition-colors duration-150">
                                <service.icon className="h-4 w-4 text-blue-600" />
                              </div>
                              <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-150">{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Locations Section */}
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <MapPin className="h-5 w-5 text-blue-600" />
                          <h3 className="font-bold text-lg text-gray-900">Locations</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          {LOCATIONS.map((loc) => (
                            <Link
                              key={loc.path}
                              href={loc.path}
                              className="flex items-center space-x-3 p-3 hover:bg-blue-50 rounded-lg transition-colors duration-150 group"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="bg-blue-50 p-2 rounded-md group-hover:bg-blue-100 transition-colors duration-150">
                                <MapPin className="h-4 w-4 text-blue-600" />
                              </div>
                              <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-150">{loc.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Quick Links */}
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <Info className="h-5 w-5 text-blue-600" />
                          <h3 className="font-bold text-lg text-gray-900">Quick Links</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          <Link
                            href="/about"
                            className="flex items-center space-x-3 p-3 hover:bg-blue-50 rounded-lg transition-colors duration-150 group"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="bg-blue-50 p-2 rounded-md group-hover:bg-blue-100 transition-colors duration-150">
                              <Users className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-150">About Us</span>
                          </Link>
                          <Link
                            href="/macbook-component-pricing"
                            className="flex items-center space-x-3 p-3 hover:bg-blue-50 rounded-lg transition-colors duration-150 group"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="bg-blue-50 p-2 rounded-md group-hover:bg-blue-100 transition-colors duration-150">
                              <Monitor className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-150">Pricing</span>
                          </Link>
                          <Link
                            href="/contact"
                            className="flex items-center space-x-3 p-3 hover:bg-blue-50 rounded-lg transition-colors duration-150 group"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="bg-blue-50 p-2 rounded-md group-hover:bg-blue-100 transition-colors duration-150">
                              <MessageCircle className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-150">Contact</span>
                          </Link>
                          <Link
                            href="/faq"
                            className="flex items-center space-x-3 p-3 hover:bg-blue-50 rounded-lg transition-colors duration-150 group"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="bg-blue-50 p-2 rounded-md group-hover:bg-blue-100 transition-colors duration-150">
                              <HelpCircle className="h-4 w-4 text-blue-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-150">FAQ</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-6 border-t border-gray-200 space-y-4">
                    {/* Call Button */}
                    <Button 
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 transition-colors duration-200 shadow-lg" 
                      size="lg" 
                      onClick={() => {
                        if(typeof window !== "undefined") {
                          window.location.href = `tel:${CONTACT_INFO.phone1}`;
                        }
                        setIsOpen(false);
                      }}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      <div className="flex flex-col items-start">
                        <span className="text-xs opacity-90">Call Now</span>
                        <span className="font-bold">{CONTACT_INFO.phone1}</span>
                      </div>
                    </Button>
                    
                    {/* WhatsApp Button */}
                    <Button 
                      variant="outline"
                      className="w-full bg-green-50 hover:bg-green-100 border-green-200 text-green-700 hover:text-green-800 transition-colors duration-200" 
                      size="lg"
                      onClick={() => {
                        typeof window !== "undefined" && window.open(`https://wa.me/${CONTACT_INFO.phone1.replace(/\s+/g, '')}?text=Hi! I need repair service for my device.`, '_blank');
                        setIsOpen(false);
                      }}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      <div className="flex flex-col items-start">
                        <span className="text-xs opacity-90">WhatsApp</span>
                        <span className="font-medium">Quick Message</span>
                      </div>
                    </Button>

                    {/* Business Hours */}
                    <div className="text-center text-xs text-gray-500 py-2">
                      <p className="font-medium">Business Hours</p>
                      <p>Mon-Sun: 10:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
