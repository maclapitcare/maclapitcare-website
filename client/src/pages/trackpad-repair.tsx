import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServiceBookingModal from "@/components/modals/service-booking-modal";
import ContactForm from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function TrackpadRepair() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              MacBook Trackpad Repair Delhi NCR | MacLap IT Care
            </h1>
            <p className="text-xl mb-8 text-orange-100 max-w-4xl mx-auto">
              Professional MacBook trackpad replacement service for all models. Unresponsive trackpad, Force Touch issues, click mechanism repair with 3-month warranty. Same-day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919910248555" 
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 cta-button"
              >
                <i className="fas fa-phone mr-2"></i>
                Call +91 99102 48555
              </a>
              <ServiceBookingModal>
                <Button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 cta-button">
                  <i className="fas fa-calendar mr-2"></i>
                  Book Trackpad Service
                </Button>
              </ServiceBookingModal>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete MacBook Trackpad Services by MacLap IT Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert trackpad replacement for all MacBook models including Force Touch technology and multi-touch gesture functionality.
            </p>
          </div>

          {/* Trackpad Issues We Fix */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trackpad Issues We Repair</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <i className="fas fa-hand-pointer text-4xl text-red-500 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Unresponsive Trackpad</h4>
                <p className="text-gray-600">Trackpad not responding to touch or clicks</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <i className="fas fa-mouse text-4xl text-red-500 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Click Mechanism</h4>
                <p className="text-gray-600">Physical click not working or feeling stuck</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <i className="fas fa-compress text-4xl text-red-500 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Force Touch Issues</h4>
                <p className="text-gray-600">Force Touch not registering pressure levels</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <i className="fas fa-hand-paper text-4xl text-red-500 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Gesture Problems</h4>
                <p className="text-gray-600">Multi-touch gestures not working properly</p>
              </div>
            </div>
          </div>

          {/* Pricing by Model */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trackpad Replacement Pricing by Model</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">MacBook Air Models</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2337 (M1, 2020)</span>
                    <span className="font-semibold text-orange-600">₹2,999 - ₹3,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2681 (M2, 2022)</span>
                    <span className="font-semibold text-orange-600">₹3,299 - ₹4,299</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">A3240 (M3, 2024)</span>
                    <span className="font-semibold text-orange-600">₹3,599 - ₹4,599</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">MacBook Pro 13"</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2338 (M1, 2020)</span>
                    <span className="font-semibold text-blue-600">₹3,299 - ₹4,299</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Intel Models</span>
                    <span className="font-semibold text-blue-600">₹2,999 - ₹3,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Touch Bar Models</span>
                    <span className="font-semibold text-blue-600">₹3,499 - ₹4,499</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">MacBook Pro 14"/16"</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2442 (14", 2021)</span>
                    <span className="font-semibold text-green-600">₹4,999 - ₹6,499</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2485 (16", 2021)</span>
                    <span className="font-semibold text-green-600">₹5,499 - ₹7,499</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Intel 16" Models</span>
                    <span className="font-semibold text-green-600">₹4,499 - ₹5,999</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trackpad Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trackpad Technologies We Service</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <i className="fas fa-magic text-4xl text-orange-600 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Force Touch Trackpad</h4>
                <p className="text-gray-600">Pressure-sensitive trackpad with haptic feedback and Force Click</p>
              </div>
              <div className="text-center">
                <i className="fas fa-hand-spock text-4xl text-blue-600 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Multi-Touch Trackpad</h4>
                <p className="text-gray-600">Large glass surface supporting various gesture controls</p>
              </div>
              <div className="text-center">
                <i className="fas fa-mouse-pointer text-4xl text-green-600 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Traditional Click Trackpad</h4>
                <p className="text-gray-600">Physical click mechanism in older MacBook models</p>
              </div>
            </div>
          </div>

          {/* Repair Process */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Trackpad Replacement Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Function Testing</h4>
                <p className="text-sm text-gray-600">Complete trackpad functionality and gesture testing</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Careful Removal</h4>
                <p className="text-sm text-gray-600">Safe removal with battery and cable protection</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">New Trackpad Install</h4>
                <p className="text-sm text-gray-600">Installation of replacement trackpad with proper alignment</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Calibration & Testing</h4>
                <p className="text-sm text-gray-600">Force Touch calibration and gesture functionality testing</p>
              </div>
            </div>
          </div>

          {/* Trackpad Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trackpad Features We Restore</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Gesture Controls</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Two-finger scrolling and zooming</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Three-finger drag and Mission Control</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Four-finger desktop switching</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Pinch-to-zoom functionality</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Force Touch Features</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Pressure-sensitive drawing and selection</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Force Click for Quick Look and previews</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Variable speed scrubbing in videos</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Haptic feedback customization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Model-Specific Links */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Find Your MacBook Model</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/macbook-air-a2337" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Air A2337</h4>
                <p className="text-sm text-gray-600">M1, 2020 - Starting ₹2,999</p>
              </Link>
              <Link href="/macbook-air-a2681" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Air A2681</h4>
                <p className="text-sm text-gray-600">M2, 2022 - Starting ₹3,299</p>
              </Link>
              <Link href="/macbook-air-a3240" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Air A3240</h4>
                <p className="text-sm text-gray-600">M3, 2024 - Starting ₹3,599</p>
              </Link>
              <Link href="/macbook-pro-a2338" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Pro A2338</h4>
                <p className="text-sm text-gray-600">13" M1, 2020 - Starting ₹3,299</p>
              </Link>
              <Link href="/macbook-pro-a2442" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Pro A2442</h4>
                <p className="text-sm text-gray-600">14" M1 Pro, 2021 - Starting ₹4,999</p>
              </Link>
              <Link href="/macbook-pro-a2485" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Pro A2485</h4>
                <p className="text-sm text-gray-600">16" M1 Pro, 2021 - Starting ₹5,499</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Restore Your MacBook Trackpad Functionality</h3>
              <p className="text-xl text-gray-600 mb-8">
                Professional trackpad replacement service with Force Touch technology and 3-month warranty. Multi-touch gesture restoration included.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">Force Touch Technology</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">Multi-Touch Gesture Support</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">3-Month Service Warranty</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">Haptic Feedback Calibration</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Request Trackpad Service Quote</h4>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
