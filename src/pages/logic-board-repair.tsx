import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServiceBookingModal from "@/components/modals/service-booking-modal";
import FormSubmitContactForm from "@/components/forms/formsubmit-contact-form";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function LogicBoardRepair() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              MacBook Logic Board Repair Delhi NCR | MacLap IT Care
            </h1>
            <p className="text-xl mb-8 text-red-100 max-w-4xl mx-auto">
              Professional MacBook logic board repair service for all models. Water damage recovery, component-level repair, no boot issues with 3-month warranty. Advanced diagnostics available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919910248555" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 cta-button"
              >
                <i className="fas fa-phone mr-2"></i>
                Call +91 99102 48555
              </a>
              <ServiceBookingModal>
                <Button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 cta-button">
                  <i className="fas fa-calendar mr-2"></i>
                  Book Logic Board Service
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
              Advanced MacBook Logic Board Repair by MacLap IT Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert component-level logic board repair for all MacBook models including Apple Silicon M1/M2/M3 and Intel architectures.
            </p>
          </div>

          {/* Logic Board Issues We Fix */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Logic Board Issues We Repair</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <i className="fas fa-tint text-4xl text-red-500 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Water Damage</h4>
                <p className="text-gray-600">Liquid spill damage and corrosion repair</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <i className="fas fa-power-off text-4xl text-red-500 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">No Boot Issues</h4>
                <p className="text-gray-600">MacBook not turning on or starting up</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <i className="fas fa-microchip text-4xl text-red-500 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Component Failure</h4>
                <p className="text-gray-600">CPU, GPU, RAM, and controller failures</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <i className="fas fa-thermometer-half text-4xl text-red-500 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Overheating</h4>
                <p className="text-gray-600">Thermal management and cooling issues</p>
              </div>
            </div>
          </div>

          {/* Pricing by Model */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Logic Board Repair Pricing by Model</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">MacBook Air Models</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2337 (M1, 2020)</span>
                    <span className="font-semibold text-red-600">₹8,999 - ₹12,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2681 (M2, 2022)</span>
                    <span className="font-semibold text-red-600">₹9,999 - ₹14,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">A3240 (M3, 2024)</span>
                    <span className="font-semibold text-red-600">₹10,999 - ₹15,999</span>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">MacBook Pro 13"</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2338 (M1, 2020)</span>
                    <span className="font-semibold text-orange-600">₹9,999 - ₹14,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Intel Models</span>
                    <span className="font-semibold text-orange-600">₹8,999 - ₹12,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Touch Bar Models</span>
                    <span className="font-semibold text-orange-600">₹10,999 - ₹15,999</span>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">MacBook Pro 14"/16"</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2442 (14", 2021)</span>
                    <span className="font-semibold text-purple-600">₹12,999 - ₹18,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">A2485 (16", 2021)</span>
                    <span className="font-semibold text-purple-600">₹15,999 - ₹25,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Intel 16" Models</span>
                    <span className="font-semibold text-purple-600">₹12,999 - ₹19,999</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chip Architectures */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Chip Architectures We Service</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <i className="fas fa-memory text-4xl text-red-600 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Apple Silicon (M1/M2/M3)</h4>
                <p className="text-gray-600">Latest Apple Silicon SoC with unified memory architecture</p>
              </div>
              <div className="text-center">
                <i className="fas fa-microchip text-4xl text-blue-600 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Intel Core Processors</h4>
                <p className="text-gray-600">Intel i5, i7, i9 processors with discrete graphics</p>
              </div>
              <div className="text-center">
                <i className="fas fa-cogs text-4xl text-green-600 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Supporting Controllers</h4>
                <p className="text-gray-600">T2 security chip, USB-C controllers, and power management</p>
              </div>
            </div>
          </div>

          {/* Repair Process */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Logic Board Repair Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Advanced Diagnostics</h4>
                <p className="text-sm text-gray-600">Micro-level analysis using professional diagnostic equipment</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Component Analysis</h4>
                <p className="text-sm text-gray-600">Identify failed components and circuit analysis</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Micro Soldering</h4>
                <p className="text-sm text-gray-600">Precision component replacement using advanced tools</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">System Testing</h4>
                <p className="text-sm text-gray-600">Complete functionality and stress testing</p>
              </div>
            </div>
          </div>

          {/* Specialized Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Specialized Logic Board Services</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Water Damage Recovery</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Ultrasonic cleaning and corrosion removal</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Component-level damage assessment</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Data recovery from damaged logic boards</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Prevention of future corrosion</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Performance Optimization</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Thermal paste replacement and cooling optimization</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Power management IC repair and calibration</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Memory controller and RAM issue resolution</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>GPU and graphics processing unit repair</li>
                </ul>
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
                <p className="text-sm text-gray-600">M1, 2020 - Starting ₹8,999</p>
              </Link>
              <Link href="/macbook-air-a2681" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Air A2681</h4>
                <p className="text-sm text-gray-600">M2, 2022 - Starting ₹9,999</p>
              </Link>
              <Link href="/macbook-air-a3240" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Air A3240</h4>
                <p className="text-sm text-gray-600">M3, 2024 - Starting ₹10,999</p>
              </Link>
              <Link href="/macbook-air-a1466-battery-replacement-delhi-ncr" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Air A1466</h4>
                <p className="text-sm text-gray-600">Intel, 2013-2017 - Starting ₹6,999</p>
              </Link>
              <Link href="/macbook-air-a1932-battery-replacement-delhi-ncr" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Air A1932</h4>
                <p className="text-sm text-gray-600">Retina, 2018-2019 - Starting ₹7,499</p>
              </Link>
              <Link href="/macbook-air-a2179-battery-replacement-delhi-ncr" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Air A2179</h4>
                <p className="text-sm text-gray-600">Intel, 2020 - Starting ₹7,999</p>
              </Link>

              {/* MacBook Pro Models */}
              <Link href="/macbook-pro-a2338" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Pro A2338</h4>
                <p className="text-sm text-gray-600">13" M1, 2020 - Starting ₹9,999</p>
              </Link>
              <Link href="/macbook-pro-a2442" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Pro A2442</h4>
                <p className="text-sm text-gray-600">14" M1 Pro, 2021 - Starting ₹12,999</p>
              </Link>
              <Link href="/macbook-pro-a2485" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Pro A2485</h4>
                <p className="text-sm text-gray-600">16" M1 Pro, 2021 - Starting ₹15,999</p>
              </Link>
              <Link href="/macbook-pro-a2686-battery-replacement-delhi-ncr" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Pro A2686</h4>
                <p className="text-sm text-gray-600">13" M2, 2022 - Starting ₹10,999</p>
              </Link>
              <Link href="/macbook-pro-a1706-battery-replacement-delhi-ncr" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Pro A1706</h4>
                <p className="text-sm text-gray-600">13" Touch Bar, 2016-2017 - Starting ₹8,999</p>
              </Link>
              <Link href="/macbook-pro-a1708-battery-replacement-delhi-ncr" className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-900">MacBook Pro A1708</h4>
                <p className="text-sm text-gray-600">13" No Touch Bar, 2016-2017 - Starting ₹7,999</p>
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
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Expert Logic Board Recovery</h3>
              <p className="text-xl text-gray-600 mb-8">
                Advanced component-level logic board repair with micro-soldering expertise. Water damage recovery and performance optimization available.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">Component-Level Repair</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">Water Damage Recovery</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">3-Month Service Warranty</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">Advanced Diagnostics Included</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Request Logic Board Diagnostics</h4>
              <FormSubmitContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
