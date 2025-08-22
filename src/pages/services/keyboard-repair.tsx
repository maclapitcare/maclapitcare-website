import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Keyboard, Phone, CheckCircle, Star, Users, Trophy, ShieldCheck, MapPin } from "lucide-react";
import ServiceBookingModal from "@/components/forms/service-booking-modal";
import FormSubmitContactForm from "@/components/forms/formsubmit-contact-form";
import Footer from "@/components/layout/footer";
import { CONTACT_INFO } from "@/lib/constants";

export default function KeyboardRepair() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    document.title = "MacBook Keyboard Replacement Service Delhi NCR | MacLap IT Care - Expert Repair";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook keyboard replacement service Delhi NCR by MacLap IT Care. Magic Keyboard, Butterfly mechanism, all models. 3-month warranty. Same-day service available. Call 9211720790");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Advanced Hero Section with Animated Background */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-32 right-1/4 w-28 h-28 bg-white/5 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Keyboard className="w-4 h-4 mr-2" />
                MacBook Keyboard Experts Delhi NCR
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                MacBook Keyboard Replacement Delhi NCR
              </h1>
              
              <p className="text-xl mb-6 text-purple-100 leading-relaxed">
                Professional MacBook keyboard replacement service by <strong>MacLap IT Care</strong>. Magic Keyboard, Butterfly mechanism repair for all models. 3-month warranty with same-day service available.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                  <span>Same Day Service</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <ShieldCheck className="w-5 h-5 mr-2 text-green-300" />
                  <span>3 Month Warranty</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 mr-2 text-green-300" />
                  <span>5000+ Happy Customers</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:+91${CONTACT_INFO.phone1}`}
                  className="inline-flex items-center bg-white text-purple-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call {CONTACT_INFO.phone1}
                </a>
                <a
                  href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi, I need MacBook keyboard replacement service in Delhi NCR`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white font-bold py-4 px-8 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
                  WhatsApp Now
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Quick Service Booking</h3>
                <Button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-6 rounded-xl text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg"
                >
                  <Keyboard className="mr-2 h-5 w-5" />
                  Book Keyboard Service Now
                </Button>

                <ServiceBookingModal
                  isOpen={isBookingModalOpen}
                  onClose={() => setIsBookingModalOpen(false)}
                  serviceName="MacBook Keyboard Replacement"
                />
                <p className="text-center text-purple-100 mt-4 text-sm">
                  Get instant quote • Free pickup & drop • Same-day service available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Quick Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-purple-600">5000+</p>
                <p className="text-gray-600 font-medium">Keyboards Fixed</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-lg">
                <Keyboard className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-green-600">Same Day</p>
                <p className="text-gray-600 font-medium">Service Available</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-yellow-600">3 Month</p>
                <p className="text-gray-600 font-medium">Warranty</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-lg">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-blue-600">15+ Years</p>
                <p className="text-gray-600 font-medium">Experience</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Service Overview */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Complete MacBook Keyboard Services by MacLap IT Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert keyboard replacement for all MacBook models including butterfly mechanism and Magic Keyboard with backlight restoration.
          </p>
        </div>

        {/* Keyboard Issues We Fix */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Keyboard Issues We Repair</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Keyboard className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Sticky Keys</h4>
              <p className="text-gray-600">Keys that stick or feel mushy when pressed</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Unresponsive Keys</h4>
              <p className="text-gray-600">Keys that don't register or work intermittently</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Butterfly Mechanism</h4>
              <p className="text-gray-600">Faulty butterfly switches in older models</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Backlight Issues</h4>
              <p className="text-gray-600">Keyboard backlight not working or uneven</p>
            </div>
          </div>
        </div>

        {/* MacBook Keyboard SEO Keywords Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
              <Keyboard className="w-8 h-8 text-purple-600 mr-3" />
              MacBook Keyboard Replacement Keywords Delhi NCR
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  MacBook Keyboard Service Keywords
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["MacBook keyboard replacement Delhi", "MacBook keyboard repair Noida", "MacBook Magic Keyboard Delhi NCR", "MacBook butterfly keyboard repair", "MacBook keyboard not working Delhi", "MacBook sticky keys repair Noida", "MacBook unresponsive keys Delhi", "MacBook keyboard backlight repair", "MacBook top case replacement Delhi", "MacBook keyboard assembly Noida", "MacBook keyboard cost Delhi NCR", "MacBook keyboard service center", "MacBook keyboard cleaning Delhi", "MacBook Magic Keyboard replacement", "MacBook Pro keyboard repair Delhi", "MacBook Air keyboard replacement Noida", "MacBook keyboard buttons not working", "MacBook keyboard liquid damage repair", "MacBook scissor mechanism repair Delhi", "MacBook keyboard flex cable replacement", "MacBook keyboard spring repair Noida", "MacBook keyboard key cap replacement", "MacBook keyboard membrane repair Delhi", "MacBook keyboard cable repair Noida", "MacBook touchbar keyboard replacement"].map((keyword, index) => (
                    <span key={index} className="bg-white text-gray-700 px-3 py-1 rounded-lg text-sm border border-purple-200 hover:border-purple-400 transition-colors">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Laptop Keyboard Service Keywords
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Laptop keyboard replacement Delhi NCR", "Laptop keyboard repair Noida", "Laptop keyboard not working Delhi", "Laptop keyboard cleaning service", "Laptop keyboard keys replacement Noida", "Laptop keyboard backlight repair Delhi", "Laptop keyboard water damage repair", "Laptop keyboard flex cable replacement", "Laptop keyboard membrane repair Noida", "Laptop keyboard assembly Delhi NCR", "Laptop keyboard button repair Delhi", "Laptop keyboard cable replacement Noida", "Laptop keyboard spring mechanism repair", "Laptop keyboard switch replacement Delhi", "Laptop keyboard cover replacement Noida", "Laptop keyboard bezel repair Delhi", "Laptop keyboard connector repair Noida", "Laptop keyboard circuit repair Delhi", "Laptop keyboard layout repair Noida", "Laptop keyboard language change Delhi", "Laptop keyboard LED repair Noida", "Laptop keyboard film replacement Delhi", "Laptop keyboard dome repair Noida", "Laptop keyboard scissor repair Delhi", "Gaming laptop keyboard replacement Noida"].map((keyword, index) => (
                    <span key={index} className="bg-white text-gray-700 px-3 py-1 rounded-lg text-sm border border-blue-200 hover:border-blue-400 transition-colors">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm">
                MacLap IT Care specializes in all keyboard-related services for MacBooks and laptops in Delhi NCR region
              </p>
            </div>
          </div>
        </div>

        {/* Keyboard Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Keyboard Technologies We Service</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Keyboard className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Magic Keyboard</h4>
              <p className="text-gray-600">Latest scissor mechanism with improved key travel and stability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Butterfly Keyboard</h4>
              <p className="text-gray-600">Thin profile butterfly switches in 2016-2019 MacBook models</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Scissor Mechanism</h4>
              <p className="text-gray-600">Traditional scissor switches in older MacBook models</p>
            </div>
          </div>
        </div>

        {/* Repair Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Keyboard Replacement Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Key Function Test</h4>
              <p className="text-sm text-gray-600">Complete testing of all keys and function shortcuts</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Top Case Removal</h4>
              <p className="text-sm text-gray-600">Professional disassembly and component protection</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">New Keyboard Install</h4>
              <p className="text-sm text-gray-600">Installation of new keyboard assembly with proper alignment</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Backlight Calibration</h4>
              <p className="text-sm text-gray-600">Backlight testing and brightness level calibration</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50 rounded-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Restore Your MacBook Typing Experience</h3>
                <p className="text-xl text-gray-600 mb-8">
                  Professional keyboard replacement service with genuine parts and 3-month warranty. Magic Keyboard and butterfly mechanism expertise.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Complete Keyboard Assembly</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Backlight Functionality</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">3-Month Service Warranty</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">All Keyboard Types Supported</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Request Keyboard Service Quote</h4>
                <FormSubmitContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}