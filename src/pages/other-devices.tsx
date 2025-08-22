import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ServiceBookingModal from "@/components/modals/service-booking-modal";
import FormSubmitContactForm from "@/components/forms/formsubmit-contact-form";
import { Button } from "@/components/ui/button";

export default function OtherDevices() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              iMac, Gaming Laptop & Surface Repair Delhi NCR | MacLap IT Care
            </h1>
            <p className="text-xl mb-8 text-indigo-100 max-w-4xl mx-auto">
              Professional repair services for iMac, Mac Mini, Gaming Laptops, and Microsoft Surface devices. Screen replacement, hardware upgrades, performance optimization with 3-month warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919910248555" 
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 cta-button"
              >
                <i className="fas fa-phone mr-2"></i>
                Call +91 99102 48555
              </a>
              <ServiceBookingModal>
                <Button className="bg-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-700 cta-button text-white">
                  <i className="fas fa-calendar mr-2"></i>
                  Book Device Service
                </Button>
              </ServiceBookingModal>
            </div>
          </div>
        </div>
      </section>

      {/* Device Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Device Repair Services by MacLap IT Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert repair services for Apple desktops, gaming laptops, and Microsoft Surface devices with specialized technical expertise.
            </p>
          </div>

          {/* Device Categories Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* iMac Services */}
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <i className="fas fa-desktop text-5xl text-blue-600 mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-900">iMac Repair Services</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Models We Service:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-check text-green-600 mr-2"></i>iMac 24-inch M1 (2021) - A2438</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>iMac 27-inch Intel (2020) - A2115</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>iMac Pro 27-inch (2017) - A1862</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>iMac 21.5-inch Intel models</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Common Issues:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Display flickering or dark spots</li>
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Logic board failure</li>
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Hard drive and SSD upgrades</li>
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Overheating and fan issues</li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600 mb-4">Starting ₹4,999</p>
                <p className="text-gray-600">Display repair, SSD upgrade, logic board service</p>
              </div>
            </div>

            {/* Mac Mini Services */}
            <div className="bg-green-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <i className="fas fa-cube text-5xl text-green-600 mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-900">Mac Mini Repair Services</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Models We Service:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Mac Mini M2 (2023) - A2686</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Mac Mini M1 (2020) - A2348</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Mac Mini Intel (2018) - A1993</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Mac Mini Intel older models</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Common Issues:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Won't boot or power on</li>
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Storage upgrade and expansion</li>
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Port connectivity issues</li>
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Performance optimization</li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-green-600 mb-4">Starting ₹3,999</p>
                <p className="text-gray-600">Logic board repair, SSD upgrade, port replacement</p>
              </div>
            </div>
          </div>

          {/* Gaming Laptops & Surface */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Gaming Laptop Services */}
            <div className="bg-red-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <i className="fas fa-gamepad text-5xl text-red-600 mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-900">Gaming Laptop Repair</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Brands We Service:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-check text-green-600 mr-2"></i>ASUS ROG series</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>MSI Gaming laptops</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Dell Alienware series</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>HP Omen and Pavilion Gaming</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Common Issues:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Overheating and thermal throttling</li>
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Gaming display screen replacement</li>
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Keyboard and RGB lighting issues</li>
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Performance upgrades and optimization</li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-red-600 mb-4">Starting ₹3,499</p>
                <p className="text-gray-600">Screen replacement, thermal paste, hardware upgrades</p>
              </div>
            </div>

            {/* Surface Device Services */}
            <div className="bg-purple-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <i className="fas fa-tablet-alt text-5xl text-purple-600 mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-900">Microsoft Surface Repair</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Models We Service:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Surface Pro series (Pro 7, 8, 9)</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Surface Laptop series</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Surface Book series</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Surface Studio models</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Common Issues:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Touchscreen digitizer replacement</li>
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Surface Pen connectivity issues</li>
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Kickstand and hinge repair</li>
                  <li><i className="fas fa-times text-red-500 mr-2"></i>Type Cover connectivity problems</li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600 mb-4">Starting ₹4,499</p>
                <p className="text-gray-600">Touchscreen repair, digitizer replacement, hardware fix</p>
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose MacLap IT Care for Other Devices?</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <i className="fas fa-tools text-4xl text-indigo-600 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Multi-Brand Expertise</h4>
                <p className="text-gray-600">Specialized knowledge across Apple, PC, and Surface ecosystems</p>
              </div>
              <div className="text-center">
                <i className="fas fa-shipping-fast text-4xl text-green-600 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Quick Turnaround</h4>
                <p className="text-gray-600">Fast diagnosis and repair with same-day service options</p>
              </div>
              <div className="text-center">
                <i className="fas fa-shield-alt text-4xl text-blue-600 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Quality Assurance</h4>
                <p className="text-gray-600">3-month warranty on all repairs with quality parts</p>
              </div>
              <div className="text-center">
                <i className="fas fa-wrench text-4xl text-purple-600 mb-4"></i>
                <h4 className="font-bold text-gray-900 mb-2">Advanced Diagnostics</h4>
                <p className="text-gray-600">Professional-grade diagnostic equipment for accurate troubleshooting</p>
              </div>
            </div>
          </div>

          {/* Service Process */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Multi-Device Repair Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Device Assessment</h4>
                <p className="text-sm text-gray-600">Comprehensive evaluation of hardware and software issues</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Technical Diagnosis</h4>
                <p className="text-sm text-gray-600">Advanced diagnostic tools for precise problem identification</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Expert Repair</h4>
                <p className="text-sm text-gray-600">Specialized repair techniques for each device type</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Performance Testing</h4>
                <p className="text-sm text-gray-600">Complete functionality testing and optimization</p>
              </div>
            </div>
          </div>

          {/* Specialized Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Specialized Services We Offer</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Performance Upgrades</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-check text-green-600 mr-2"></i>SSD and hard drive upgrades</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>RAM memory expansion</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Graphics card optimization</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Thermal management improvements</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Display Services</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-check text-green-600 mr-2"></i>4K and gaming display replacement</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Touchscreen digitizer repair</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Color calibration and optimization</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Multiple monitor setup configuration</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Connectivity Solutions</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><i className="fas fa-check text-green-600 mr-2"></i>USB-C and Thunderbolt port repair</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Wi-Fi and Bluetooth connectivity</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Audio jack and speaker repair</li>
                  <li><i className="fas fa-check text-green-600 mr-2"></i>Ethernet and network configuration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Expert Repair for All Your Devices</h3>
              <p className="text-xl text-gray-600 mb-8">
                Professional repair services for iMac, Mac Mini, Gaming Laptops, and Surface devices with multi-brand expertise and 3-month warranty.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">Multi-Brand Expertise</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">Performance Upgrades Available</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">3-Month Service Warranty</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-600 mr-3"></i>
                  <span className="text-gray-700">Advanced Diagnostic Equipment</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Request Device Repair Quote</h4>
              <FormSubmitContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
