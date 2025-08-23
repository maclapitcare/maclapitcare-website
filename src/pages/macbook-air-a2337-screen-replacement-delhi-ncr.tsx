import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Clock, Shield, Star, CheckCircle, AlertTriangle, Home, MapPin, Wrench, Monitor, Zap, Battery, Laptop } from "lucide-react";
import { Link } from "wouter";
import { CONTACT_INFO } from "@/lib/constants";
import ServiceBookingModal from "@/components/modals/service-booking-modal";

export default function MacBookAirA2337ScreenReplacementDelhiNCR() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"
         title="MacBook Air A2337 Screen Replacement Delhi NCR | M1 2020 Display Repair ₹4,499"
         data-description="Professional MacBook Air A2337 (M1 2020) screen replacement in Delhi NCR. Cracked display, LCD damage repair with genuine parts. Starting ₹4,499 with 6-month warranty. Same-day service available."
    >

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400 rounded-full blur-lg animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-3 py-1 text-xs sm:text-sm font-semibold">
                    <Shield className="w-3 h-3 mr-1" />
                    A2337 Specialists
                  </Badge>
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 text-xs sm:text-sm font-semibold">
                    <Star className="w-3 h-3 mr-1" />
                    4.9/5 Rating
                  </Badge>
                  <Badge className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-3 py-1 text-xs sm:text-sm font-semibold">
                    <Clock className="w-3 h-3 mr-1" />
                    Same Day Service
                  </Badge>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  MacBook Air A2337
                  <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    Screen Replacement
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl text-blue-200 mt-2">
                    M1 2020 • Delhi NCR
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  Professional MacBook Air A2337 screen replacement service. Cracked displays, LCD damage, 
                  dead pixels repair with <span className="font-bold text-cyan-300">genuine M1 compatible parts</span> and 
                  <span className="font-bold text-green-300"> 6-month warranty</span>. Same-day service in Delhi NCR.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl sm:text-3xl font-bold text-cyan-300">₹4,499</div>
                    <div className="text-xs sm:text-sm text-blue-200">Starting Price</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-300">2-4hrs</div>
                    <div className="text-xs sm:text-sm text-blue-200">Repair Time</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-300">15+</div>
                    <div className="text-xs sm:text-sm text-blue-200">Years Exp</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl sm:text-3xl font-bold text-green-300">6M</div>
                    <div className="text-xs sm:text-sm text-blue-200">Warranty</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a
                    href={`tel:+91${CONTACT_INFO.phone1}`}
                    className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-3">
                      <Phone className="w-5 h-5 animate-pulse" />
                      <span className="text-lg">Call: {CONTACT_INFO.phone1}</span>
                    </div>
                  </a>
                  
                  <a
                    href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20Air%20A2337%20screen%20replacement%20in%20Delhi%20NCR`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-3">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-lg">WhatsApp Expert</span>
                    </div>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4 text-sm text-blue-200">
                  <div className="flex items-center space-x-2">
                    <Home className="w-4 h-4" />
                    <span>Doorstep Service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Delhi • Noida • Gurgaon • Ghaziabad</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wrench className="w-4 h-4" />
                    <span>Certified Technicians</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-6">MacBook Air A2337 Model Info</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-blue-200">Model</span>
                      <span className="text-white font-semibold">A2337</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-blue-200">Year</span>
                      <span className="text-white font-semibold">M1 2020</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-blue-200">Screen Size</span>
                      <span className="text-white font-semibold">13.3-inch</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-blue-200">Display Type</span>
                      <span className="text-white font-semibold">Retina IPS</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-blue-200">Resolution</span>
                      <span className="text-white font-semibold">2560 x 1600</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-blue-200">Repair Price</span>
                      <span className="text-cyan-300 font-bold text-xl">₹4,499+</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setIsBookingModalOpen(true)}
                    className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg"
                  >
                    Book A2337 Screen Repair
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A2337 Specific Issues Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                MacBook Air A2337 Common Screen Issues
              </h2>
              <p className="text-xl text-gray-600">
                M1 MacBook Air specific display problems we fix daily
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  M1 MacBook Air A2337 Display Issues
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-red-700">Cracked LCD Panel</h4>
                      <p className="text-sm text-red-600">Physical damage to the LCD causing visible cracks, black spots, or distorted display areas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-red-700">Backlight Failure</h4>
                      <p className="text-sm text-red-600">Screen appears very dim or completely black, but you can still see faint images when using a flashlight</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-red-700">Dead Pixels / Lines</h4>
                      <p className="text-sm text-red-600">Permanent black, white, or colored pixels/lines that don't respond to display changes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-red-700">Color Distortion</h4>
                      <p className="text-sm text-red-600">Incorrect colors, pink/green tints, or color banding issues across the display</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Our A2337 Screen Solutions
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-700">Complete Display Assembly</h4>
                      <p className="text-sm text-green-600">Full LCD panel replacement with proper M1 compatibility and original specifications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-700">Retina Quality Restoration</h4>
                      <p className="text-sm text-green-600">2560x1600 resolution with P3 wide color gamut and 400 nits brightness</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-700">True Tone Calibration</h4>
                      <p className="text-sm text-green-600">Proper True Tone sensor alignment for automatic color temperature adjustment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-700">6-Month Warranty</h4>
                      <p className="text-sm text-green-600">Comprehensive warranty covering display quality, backlight, and color accuracy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model-Specific Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Other MacBook Services
              </h2>
              <p className="text-xl text-gray-600">
                Complete A2337 and other MacBook model services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/macbook-air-a2337-battery-replacement-delhi-ncr">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Battery className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">A2337 Battery Replacement</h3>
                    <p className="text-sm text-gray-600">M1 MacBook Air battery service</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/macbook-air-a2337">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Laptop className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">A2337 Complete Service</h3>
                    <p className="text-sm text-gray-600">All A2337 repairs and upgrades</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/macbook-air-screen-replacement-price-delhi-ncr">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Monitor className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">All MacBook Air Screens</h3>
                    <p className="text-sm text-gray-600">Screen replacement for all models</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Booking Modal */}
      <ServiceBookingModal>
        <Button 
          onClick={() => setIsBookingModalOpen(true)}
          className="hidden"
        >
          Book Service
        </Button>
      </ServiceBookingModal>
    </div>
  );
}