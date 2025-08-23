import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServiceBookingModal from "@/components/modals/service-booking-modal";
import FormSubmitContactForm from "@/components/forms/formsubmit-contact-form";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function BatteryRepair() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              MacBook Battery Replacement Delhi NCR | MacLap IT Care
            </h1>
            <p className="text-xl mb-8 text-green-100 max-w-4xl mx-auto">
              Professional MacBook battery replacement service for all models. Poor battery life, swollen battery, charging issues with 3-month warranty. Same-day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919910248555" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 cta-button"
              >
                <i className="fas fa-phone mr-2"></i>
                Call +91 99102 48555
              </a>
              <ServiceBookingModal>
                <Button className="bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 cta-button text-white">
                  <i className="fas fa-calendar mr-2"></i>
                  Book Battery Service
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
              Complete MacBook Battery Services by MacLap IT Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert battery replacement for all MacBook models with original capacity batteries and advanced power management optimization.
            </p>
          </div>

          {/* Battery Issues We Fix */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Battery Issues We Resolve</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <i className="fas fa-battery-empty text-4xl text-red-500 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Poor Battery Life</h4>
                <p className="text-gray-600">Rapid drainage and short usage time</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <i className="fas fa-expand-arrows-alt text-4xl text-red-500 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Swollen Battery</h4>
                <p className="text-gray-600">Battery expansion affecting trackpad</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <i className="fas fa-bolt text-4xl text-red-500 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Charging Issues</h4>
                <p className="text-gray-600">Not charging or slow charging problems</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <i className="fas fa-thermometer-half text-4xl text-red-500 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Overheating</h4>
                <p className="text-gray-600">Battery causing excessive heat generation</p>
              </div>
            </div>
          </div>

          {/* Pricing by Model */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Battery Replacement Pricing by Model</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">MacBook Air Models</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2337 (M1, 2020)</span>
                    <span className="font-semibold text-green-600">₹2,999 - ₹3,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2681 (M2, 2022)</span>
                    <span className="font-semibold text-green-600">₹3,299 - ₹4,299</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">A3240 (M3, 2024)</span>
                    <span className="font-semibold text-green-600">₹3,599 - ₹4,599</span>
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
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">MacBook Pro 14"/16"</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2442 (14", 2021)</span>
                    <span className="font-semibold text-purple-600">₹4,999 - ₹6,499</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2485 (16", 2021)</span>
                    <span className="font-semibold text-purple-600">₹5,499 - ₹7,499</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Intel 16" Models</span>
                    <span className="font-semibold text-purple-600">₹4,499 - ₹5,999</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Battery Specifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Battery Specifications & Features</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <i className="fas fa-battery-full text-4xl text-green-600 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Original Capacity</h4>
                <p className="text-gray-600">High-quality batteries matching original specifications and capacity ratings</p>
              </div>
              <div className="text-center">
                <i className="fas fa-shield-alt text-4xl text-blue-600 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Safety Certified</h4>
                <p className="text-gray-600">CE and RoHS certified batteries with built-in safety protection circuits</p>
              </div>
              <div className="text-center">
                <i className="fas fa-leaf text-4xl text-green-600 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Eco-Friendly</h4>
                <p className="text-gray-600">Environmentally responsible disposal of old batteries and recycling program</p>
              </div>
            </div>
          </div>

          {/* Repair Process */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Battery Replacement Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Battery Health Check</h4>
                <p className="text-sm text-gray-600">Complete battery diagnostics and cycle count analysis</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Safe Removal</h4>
                <p className="text-sm text-gray-600">Professional removal with proper safety protocols</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">New Battery Install</h4>
                <p className="text-sm text-gray-600">Installation of original capacity replacement battery</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Calibration & Testing</h4>
                <p className="text-sm text-gray-600">Battery calibration and power management optimization</p>
              </div>
            </div>
          </div>

          {/* Model-Specific Links */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Find Your MacBook Model</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* MacBook Air Models */}
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
              <Link href="/macbook-air-a1466-battery-replacement-delhi-ncr" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Air A1466</h4>
                <p className="text-sm text-gray-600">Intel, 2013-2017 - Starting ₹1,999</p>
              </Link>
              <Link href="/macbook-air-a1932-battery-replacement-delhi-ncr" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Air A1932</h4>
                <p className="text-sm text-gray-600">Retina, 2018-2019 - Starting ₹2,499</p>
              </Link>
              <Link href="/macbook-air-a2179-battery-replacement-delhi-ncr" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Air A2179</h4>
                <p className="text-sm text-gray-600">Intel, 2020 - Starting ₹2,799</p>
              </Link>

              {/* MacBook Pro Models */}
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
              <Link href="/macbook-pro-a2686-battery-replacement-delhi-ncr" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Pro A2686</h4>
                <p className="text-sm text-gray-600">13" M2, 2022 - Starting ₹3,599</p>
              </Link>
              <Link href="/macbook-pro-a1706-battery-replacement-delhi-ncr" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Pro A1706</h4>
                <p className="text-sm text-gray-600">13" Touch Bar, 2016-2017 - Starting ₹2,799</p>
              </Link>
              <Link href="/macbook-pro-a1708-battery-replacement-delhi-ncr" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Pro A1708</h4>
                <p className="text-sm text-gray-600">13" No Touch Bar, 2016-2017 - Starting ₹2,499</p>
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
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Extend Your MacBook Battery Life</h3>
              <p className="text-xl text-gray-600 mb-8">
                Professional battery replacement service with original capacity batteries and 3-month warranty. Same-day service available.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">Original Capacity Batteries</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">3-Month Warranty Coverage</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">Power Management Optimization</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">Safe Battery Disposal</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Request Battery Service Quote</h4>
              <FormSubmitContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
