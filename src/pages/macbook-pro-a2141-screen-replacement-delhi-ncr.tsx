import { useEffect } from "react";
import ServiceBookingModal from "../components/modals/service-booking-modal";
import ModelNavigation from "../components/layout/model-navigation";

export default function MacBookProA2141ScreenReplacementDelhiNCR() {

  useEffect(() => {
    document.title = "MacBook Pro A2141 Screen Replacement Delhi NCR | Intel 2019-2020 | MacLap IT Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook Pro A2141 screen replacement service in Delhi NCR. Intel 2019-2020 16-inch model repair with warranty. Same-day service available. Call 9211720790");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              MacBook Pro A2141 Screen Replacement Delhi NCR
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert screen replacement service for MacBook Pro Intel 16-inch 2019-2020 (A2141) model. Professional repair with genuine parts and 3-month warranty across Delhi NCR locations.
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
                  <li>• MacBook Pro A2141 screen replacement cost</li>
                  <li>• A2141 cracked screen repair Delhi</li>
                  <li>• MacBook Pro Intel display replacement</li>
                  <li>• A2141 Retina screen repair price</li>
                  <li>• MacBook Pro 2019-2020 screen repair</li>
                  <li>• A2141 16-inch display replacement</li>
                  <li>• MacBook Pro 16 inch screen repair</li>
                </ul>
              </div>

              {/* Service Keywords */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Related</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Pro A2141 repair Delhi NCR</li>
                  <li>• A2141 service center near me</li>
                  <li>• MacBook Pro Intel repair shop</li>
                  <li>• A2141 screen replacement Noida</li>
                  <li>• MacBook Pro 2020 repair service</li>
                  <li>• A2141 display repair Gurgaon</li>
                  <li>• MacBook repair shop Ghaziabad</li>
                </ul>
              </div>

              {/* Technical Issues */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Issues</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A2141 black screen problem</li>
                  <li>• MacBook Pro Intel display flickering</li>
                  <li>• A2141 dead pixels repair</li>
                  <li>• MacBook Pro 16 inch color issues</li>
                  <li>• A2141 backlight failure</li>
                  <li>• Intel MacBook Pro LCD replacement</li>
                  <li>• A2141 6-speaker audio display issues</li>
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