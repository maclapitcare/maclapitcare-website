import { Link } from "wouter";

export default function MacBookModelsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            MacBook Model-Specific Repair Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert repair services tailored for each MacBook model. Find your exact model for precise service information and pricing.
          </p>
        </div>

        {/* MacBook Air Models */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <i className="fas fa-laptop mr-3 text-blue-600"></i>
            MacBook Air Models
          </h3>
          <div className="model-grid">
            {/* MacBook Air M1 A2337 */}
            <div className="bg-gray-50 rounded-xl p-6 service-card border border-gray-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=80" 
                  alt="MacBook Air M1" 
                  className="w-20 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">MacBook Air M1</h4>
                  <p className="text-sm text-gray-600">Model: A2337 (2020)</p>
                  <p className="text-sm text-blue-600 font-semibold">Starting from ₹3,499</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Screen Replacement:</span>
                  <span className="font-semibold">₹3,499 - ₹4,999</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Battery Replacement:</span>
                  <span className="font-semibold">₹2,999 - ₹3,999</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Keyboard Replacement:</span>
                  <span className="font-semibold">₹4,999 - ₹6,999</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Link 
                  href="/macbook-air-a2337" 
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-semibold hover:bg-blue-700 cta-button"
                >
                  View Details
                </Link>
                <a 
                  href="#quote" 
                  className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg text-center text-sm font-semibold hover:bg-blue-50 cta-button"
                >
                  Get Quote
                </a>
              </div>
            </div>

            {/* MacBook Air M2 A2681 */}
            <div className="bg-gray-50 rounded-xl p-6 service-card border border-gray-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=80" 
                  alt="MacBook Air M2" 
                  className="w-20 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">MacBook Air M2</h4>
                  <p className="text-sm text-gray-600">Model: A2681 (2022)</p>
                  <p className="text-sm text-blue-600 font-semibold">Starting from ₹3,999</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Screen Replacement:</span>
                  <span className="font-semibold">₹3,999 - ₹5,499</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Battery Replacement:</span>
                  <span className="font-semibold">₹3,299 - ₹4,299</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Keyboard Replacement:</span>
                  <span className="font-semibold">₹5,499 - ₹7,499</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Link 
                  href="/macbook-air-a2681" 
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-semibold hover:bg-blue-700 cta-button"
                >
                  View Details
                </Link>
                <a 
                  href="#quote" 
                  className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg text-center text-sm font-semibold hover:bg-blue-50 cta-button"
                >
                  Get Quote
                </a>
              </div>
            </div>

            {/* MacBook Air M3 A3240 */}
            <div className="bg-gray-50 rounded-xl p-6 service-card border border-gray-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=80" 
                  alt="MacBook Air M3" 
                  className="w-20 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">MacBook Air M3</h4>
                  <p className="text-sm text-gray-600">Model: A3240 (2024)</p>
                  <p className="text-sm text-blue-600 font-semibold">Starting from ₹4,499</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Screen Replacement:</span>
                  <span className="font-semibold">₹4,499 - ₹5,999</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Battery Replacement:</span>
                  <span className="font-semibold">₹3,599 - ₹4,599</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Keyboard Replacement:</span>
                  <span className="font-semibold">₹5,999 - ₹7,999</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Link 
                  href="/macbook-air-a3240" 
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-semibold hover:bg-blue-700 cta-button"
                >
                  View Details
                </Link>
                <a 
                  href="#quote" 
                  className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg text-center text-sm font-semibold hover:bg-blue-50 cta-button"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MacBook Pro Models */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <i className="fas fa-laptop-code mr-3 text-blue-600"></i>
            MacBook Pro Models
          </h3>
          <div className="model-grid">
            {/* MacBook Pro M1 A2338 */}
            <div className="bg-gray-50 rounded-xl p-6 service-card border border-gray-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=80" 
                  alt="MacBook Pro M1" 
                  className="w-20 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">MacBook Pro M1</h4>
                  <p className="text-sm text-gray-600">Model: A2338 (13-inch, 2020)</p>
                  <p className="text-sm text-blue-600 font-semibold">Starting from ₹3,999</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Screen Replacement:</span>
                  <span className="font-semibold">₹3,999 - ₹5,499</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Battery Replacement:</span>
                  <span className="font-semibold">₹3,299 - ₹4,299</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Trackpad Replacement:</span>
                  <span className="font-semibold">₹2,999 - ₹3,999</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Link 
                  href="/macbook-pro-a2338" 
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-semibold hover:bg-blue-700 cta-button"
                >
                  View Details
                </Link>
                <a 
                  href="#quote" 
                  className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg text-center text-sm font-semibold hover:bg-blue-50 cta-button"
                >
                  Get Quote
                </a>
              </div>
            </div>

            {/* MacBook Pro M1 Pro/Max A2442 */}
            <div className="bg-gray-50 rounded-xl p-6 service-card border border-gray-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=80" 
                  alt="MacBook Pro 14-inch" 
                  className="w-20 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">MacBook Pro M1 Pro/Max</h4>
                  <p className="text-sm text-gray-600">Model: A2442 (14-inch, 2021)</p>
                  <p className="text-sm text-blue-600 font-semibold">Starting from ₹5,999</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Screen Replacement:</span>
                  <span className="font-semibold">₹5,999 - ₹7,999</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Battery Replacement:</span>
                  <span className="font-semibold">₹4,999 - ₹6,499</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Logic Board Repair:</span>
                  <span className="font-semibold">₹8,999 - ₹15,999</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Link 
                  href="/macbook-pro-a2442" 
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-semibold hover:bg-blue-700 cta-button"
                >
                  View Details
                </Link>
                <a 
                  href="#quote" 
                  className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg text-center text-sm font-semibold hover:bg-blue-50 cta-button"
                >
                  Get Quote
                </a>
              </div>
            </div>

            {/* MacBook Pro M1 Pro/Max A2485 */}
            <div className="bg-gray-50 rounded-xl p-6 service-card border border-gray-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=80" 
                  alt="MacBook Pro 16-inch" 
                  className="w-20 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">MacBook Pro M1 Pro/Max</h4>
                  <p className="text-sm text-gray-600">Model: A2485 (16-inch, 2021)</p>
                  <p className="text-sm text-blue-600 font-semibold">Starting from ₹6,999</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Screen Replacement:</span>
                  <span className="font-semibold">₹6,999 - ₹9,999</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Battery Replacement:</span>
                  <span className="font-semibold">₹5,499 - ₹7,499</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Logic Board Repair:</span>
                  <span className="font-semibold">₹12,999 - ₹25,999</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Link 
                  href="/macbook-pro-a2485" 
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-semibold hover:bg-blue-700 cta-button"
                >
                  View Details
                </Link>
                <a 
                  href="#quote" 
                  className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg text-center text-sm font-semibold hover:bg-blue-50 cta-button"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Model?</h3>
          <p className="text-gray-600 mb-6">We repair all MacBook models from 2015 onwards. Contact us for specialized service on older or unlisted models.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919910248555" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 cta-button"
            >
              <i className="fas fa-phone mr-2"></i>
              Call +91 99102 48555
            </a>
            <a 
              href="https://wa.me/919910248555" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 cta-button"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
