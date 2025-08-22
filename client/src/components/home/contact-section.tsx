import FormSubmitContactForm from "@/components/forms/formsubmit-contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Visit MacLap IT Care Service Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Delhi NCR with easy access from Noida, Gurgaon, and Delhi. Free pickup and drop service available.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Service Center Address</h3>
                  <p className="text-gray-700">
                    Shop No. 12, Ground Floor<br />
                    Sector 121, Noida<br />
                    Uttar Pradesh 201307<br />
                    Near City Center Metro Station
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Phone Numbers</h3>
                  <p className="text-gray-700">
                    <a href="tel:+919910248555" className="hover:text-blue-600">+91 99102 48555</a><br />
                    <a href="tel:+919910248556" className="hover:text-blue-600">+91 99102 48556</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Email Address</h3>
                  <p className="text-gray-700">
                    <a href="mailto:Maclapitcare@gmail.com" className="hover:text-blue-600">Maclapitcare@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Working Hours</h3>
                  <p className="text-gray-700">
                    Monday - Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: 11:00 AM - 6:00 PM<br />
                    Emergency service available 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Service Areas Covered</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div>• Noida Sectors 1-168</div>
                <div>• Greater Noida</div>
                <div>• Gurgaon All Sectors</div>
                <div>• Delhi NCR</div>
                <div>• Faridabad</div>
                <div>• Ghaziabad</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <FormSubmitContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
