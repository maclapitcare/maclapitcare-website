import { Link } from "wouter";
import { Monitor, Battery, Keyboard, Cpu, Mouse, Laptop, Check } from "lucide-react";

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
              <div className="flex justify-center mb-4">
                <Monitor className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Screen Replacement</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Cracked display repair</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />LCD/LED replacement</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Touch functionality fix</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Color correction</li>
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
              <div className="flex justify-center mb-4">
                <Battery className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Battery Replacement</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Poor battery life fix</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Swollen battery replacement</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Charging issues resolution</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Power management optimization</li>
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
              <div className="flex justify-center mb-4">
                <Keyboard className="w-16 h-16 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Keyboard Replacement</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Sticky keys repair</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Unresponsive keys fix</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Butterfly mechanism repair</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Backlight restoration</li>
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
              <div className="flex justify-center mb-4">
                <Cpu className="w-16 h-16 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Logic Board Repair</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Water damage recovery</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Component-level repair</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />No boot issues fix</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Performance optimization</li>
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
              <div className="flex justify-center mb-4">
                <Mouse className="w-16 h-16 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Trackpad Replacement</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Unresponsive trackpad fix</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Force Touch restoration</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Click mechanism repair</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Gesture functionality</li>
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
              <div className="flex justify-center mb-4">
                <Laptop className="w-16 h-16 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Other Devices</h3>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />iMac repair service</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Mac Mini repairs</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Gaming laptop service</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />Surface device repair</li>
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
