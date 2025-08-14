import { Link } from "wouter";

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Complete Repair Services by MacLap IT Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From screen replacements to logic board repairs, we handle all MacBook issues with professional expertise and genuine parts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Screen Replacement */}
          <div className="bg-gray-50 rounded-xl p-8 service-card border border-gray-200">
            <div className="text-center mb-6">
              <i className="fas fa-desktop text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900">Screen Replacement</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><i className="fas fa-check text-green-600 mr-2"></i>Cracked display repair</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>LCD/LED replacement</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Touch functionality fix</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Color correction</li>
            </ul>
            <p className="text-2xl font-bold text-blue-600 mb-4">Starting ₹3,499</p>
            <Link 
              href="/screen-repair" 
              className="block bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700 cta-button"
            >
              Get Quote
            </Link>
          </div>

          {/* Battery Replacement */}
          <div className="bg-gray-50 rounded-xl p-8 service-card border border-gray-200">
            <div className="text-center mb-6">
              <i className="fas fa-battery-half text-4xl text-green-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900">Battery Replacement</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><i className="fas fa-check text-green-600 mr-2"></i>Poor battery life fix</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Swollen battery replacement</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Charging issues resolution</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Power management optimization</li>
            </ul>
            <p className="text-2xl font-bold text-blue-600 mb-4">Starting ₹2,999</p>
            <Link 
              href="/battery-repair" 
              className="block bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700 cta-button"
            >
              Get Quote
            </Link>
          </div>

          {/* Keyboard Replacement */}
          <div className="bg-gray-50 rounded-xl p-8 service-card border border-gray-200">
            <div className="text-center mb-6">
              <i className="fas fa-keyboard text-4xl text-purple-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900">Keyboard Replacement</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><i className="fas fa-check text-green-600 mr-2"></i>Sticky keys repair</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Unresponsive keys fix</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Butterfly mechanism repair</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Backlight restoration</li>
            </ul>
            <p className="text-2xl font-bold text-blue-600 mb-4">Starting ₹4,999</p>
            <Link 
              href="/keyboard-repair" 
              className="block bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700 cta-button"
            >
              Get Quote
            </Link>
          </div>

          {/* Logic Board Repair */}
          <div className="bg-gray-50 rounded-xl p-8 service-card border border-gray-200">
            <div className="text-center mb-6">
              <i className="fas fa-microchip text-4xl text-red-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900">Logic Board Repair</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><i className="fas fa-check text-green-600 mr-2"></i>Water damage recovery</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Component-level repair</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>No boot issues fix</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Performance optimization</li>
            </ul>
            <p className="text-2xl font-bold text-blue-600 mb-4">Starting ₹8,999</p>
            <Link 
              href="/logic-board-repair" 
              className="block bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700 cta-button"
            >
              Get Quote
            </Link>
          </div>

          {/* Trackpad Replacement */}
          <div className="bg-gray-50 rounded-xl p-8 service-card border border-gray-200">
            <div className="text-center mb-6">
              <i className="fas fa-mouse text-4xl text-orange-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900">Trackpad Replacement</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><i className="fas fa-check text-green-600 mr-2"></i>Unresponsive trackpad fix</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Force Touch restoration</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Click mechanism repair</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Gesture functionality</li>
            </ul>
            <p className="text-2xl font-bold text-blue-600 mb-4">Starting ₹2,999</p>
            <Link 
              href="/trackpad-repair" 
              className="block bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700 cta-button"
            >
              Get Quote
            </Link>
          </div>

          {/* Other Devices */}
          <div className="bg-gray-50 rounded-xl p-8 service-card border border-gray-200">
            <div className="text-center mb-6">
              <i className="fas fa-laptop text-4xl text-indigo-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900">Other Devices</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><i className="fas fa-check text-green-600 mr-2"></i>iMac repair service</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Mac Mini repairs</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Gaming laptop service</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i>Surface device repair</li>
            </ul>
            <p className="text-2xl font-bold text-blue-600 mb-4">Custom Quote</p>
            <Link 
              href="/other-devices" 
              className="block bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700 cta-button"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
