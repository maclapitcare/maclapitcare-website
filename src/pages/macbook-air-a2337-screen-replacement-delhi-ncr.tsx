import { useEffect } from "react";
import ServiceBookingModal from "../components/modals/service-booking-modal";
import ModelNavigation from "../components/layout/model-navigation";

export default function MacBookAirA2337ScreenReplacementDelhiNCR() {

  useEffect(() => {
    document.title = "MacBook Air A2337 Screen Replacement Delhi NCR | M1 2020 | MacLap IT Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook Air A2337 screen replacement service in Delhi NCR. M1 2020 13-inch model repair with warranty. Same-day service available. Call 9211720790");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              MacBook Air A2337 Screen Replacement Delhi NCR
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert screen replacement service for MacBook Air M1 13-inch 2020 (A2337) model. Professional repair with genuine parts and 3-month warranty across Delhi NCR locations.
            </p>
            <ServiceBookingModal>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors cursor-pointer">
                Book Screen Replacement Service
              </button>
            </ServiceBookingModal>
          </div>
        </div>
      </section>

      {/* Popular Google Searches Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular Google Searches</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Screen Issues */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Screen Problems</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Air A2337 screen replacement cost</li>
                  <li>• A2337 cracked screen repair Delhi</li>
                  <li>• MacBook Air M1 display replacement</li>
                  <li>• A2337 Retina screen repair price</li>
                  <li>• MacBook Air 2020 screen repair</li>
                  <li>• A2337 display assembly replacement</li>
                  <li>• MacBook Air 13 inch screen repair</li>
                </ul>
              </div>

              {/* Service Keywords */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Related</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Air A2337 repair Delhi NCR</li>
                  <li>• A2337 service center near me</li>
                  <li>• MacBook Air M1 repair shop</li>
                  <li>• A2337 screen replacement Noida</li>
                  <li>• MacBook Air 2020 repair service</li>
                  <li>• A2337 display repair Gurgaon</li>
                  <li>• MacBook repair shop Ghaziabad</li>
                </ul>
              </div>

              {/* Technical Issues */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Issues</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A2337 black screen problem</li>
                  <li>• MacBook Air M1 display flickering</li>
                  <li>• A2337 dead pixels repair</li>
                  <li>• MacBook Air 2020 color issues</li>
                  <li>• A2337 backlight failure</li>
                  <li>• M1 MacBook Air LCD replacement</li>
                  <li>• A2337 screen lines vertical</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MacBook Screen Replacement by Model */}
      <ModelNavigation serviceType="screen" />


    </div>
  );
}