import { useEffect, useState } from "react";
import ServiceBookingModal from "../components/modals/service-booking-modal";
import ModelNavigation from "../components/layout/model-navigation";

export default function MacBookProA1990ScreenReplacementDelhiNCR() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    document.title = "MacBook Pro A1990 Screen Replacement Delhi NCR | 15-inch Touch Bar 2018-2019 | MacLap IT Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook Pro A1990 screen replacement service in Delhi NCR. 15-inch Touch Bar 2018-2019 model repair with warranty. Same-day service available. Call 9211720790");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              MacBook Pro A1990 Screen Replacement Delhi NCR
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert screen replacement service for MacBook Pro 15-inch Touch Bar 2018-2019 (A1990) model. Professional repair with genuine parts and 3-month warranty across Delhi NCR locations.
            </p>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Book Screen Replacement Service
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular Google Searches</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Screen Problems</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Pro A1990 screen replacement cost</li>
                  <li>• A1990 cracked screen repair Delhi</li>
                  <li>• MacBook Pro 15 inch Touch Bar display replacement</li>
                  <li>• A1990 Retina screen repair 2018 2019</li>
                  <li>• MacBook Pro 15-inch screen repair</li>
                  <li>• A1990 display assembly replacement</li>
                  <li>• MacBook Pro 15.4 inch screen repair</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Related</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Pro A1990 repair Delhi NCR</li>
                  <li>• A1990 service center near me</li>
                  <li>• MacBook Pro 15-inch 2018 2019 repair shop</li>
                  <li>• A1990 screen replacement Noida</li>
                  <li>• MacBook Pro Touch Bar repair service</li>
                  <li>• A1990 display repair Gurgaon</li>
                  <li>• MacBook repair shop Ghaziabad</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Issues</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A1990 black screen problem</li>
                  <li>• MacBook Pro 15-inch flickering display</li>
                  <li>• A1990 screen lines issue</li>
                  <li>• MacBook Pro dim screen repair</li>
                  <li>• A1990 AMD Radeon not working</li>
                  <li>• MacBook Pro display not working</li>
                  <li>• A1990 True Tone screen calibration</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Specific</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Apple MacBook Pro A1990 repair</li>
                  <li>• MacBook Pro 15-inch Touch Bar 2018 service</li>
                  <li>• A1990 screen original replacement</li>
                  <li>• MacBook Pro Intel i7 i9 generation</li>
                  <li>• A1990 AMD Radeon Pro graphics repair</li>
                  <li>• MacBook Pro butterfly keyboard repair</li>
                  <li>• A1990 compatible screen parts</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Location Services</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook repair Delhi doorstep</li>
                  <li>• A1990 repair Noida Sector 62</li>
                  <li>• MacBook service Gurgaon Cyber City</li>
                  <li>• A1990 repair Faridabad</li>
                  <li>• MacBook Pro repair Indirapuram</li>
                  <li>• A1990 service Vaishali Ghaziabad</li>
                  <li>• MacBook repair Greater Noida</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost & Warranty</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A1990 screen replacement price list</li>
                  <li>• MacBook Pro 15-inch repair cost Delhi</li>
                  <li>• A1990 screen warranty terms</li>
                  <li>• MacBook Pro Touch Bar service charges</li>
                  <li>• A1990 repair estimate cost</li>
                  <li>• MacBook screen replacement quote</li>
                  <li>• A1990 affordable repair options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceBookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceName="MacBook Pro 15-inch Touch Bar 2018-2019 (A1990) Screen Replacement"
      />

      <ModelNavigation serviceType="screen" />
    </div>
  );
}