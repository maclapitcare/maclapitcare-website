import { useEffect, useState } from "react";
import ServiceBookingModal from "../components/modals/service-booking-modal";
import ModelNavigation from "../components/layout/model-navigation";
import { CheckCircle, Clock, Shield, Wrench, MapPin, Phone, MessageCircle, Star, Award, ArrowRight, ChevronDown, HelpCircle, Settings } from "lucide-react";
import { CONTACT_INFO } from "../lib/constants";

export default function MacBookAirA1466ScreenReplacementDelhiNCR() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    document.title = "MacBook Air A1466 Screen Replacement Delhi NCR | Intel 13-inch TN LCD Display Repair | MacLap IT Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook Air A1466 screen replacement service in Delhi NCR. Intel 13.3-inch TN LCD display repair with up to 3 months warranty. Legacy MacBook Air service. Same-day service, free pickup. Expert technicians. Call 9211720790");
    }

    // Add keywords meta tag
    const setKeywordsTag = () => {
      let keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', 'MacBook Air A1466 screen replacement, Intel MacBook Air display repair, A1466 screen repair Delhi NCR, MacBook Air 2013-2017 display replacement, TN LCD screen repair, legacy MacBook Air repair, A1466 repair service');
    };
    setKeywordsTag();
  }, []);

  const a1466Specifications = [
    { label: "Model", value: "MacBook Air (13-inch, 2013-2017)" },
    { label: "Model Number", value: "A1466" },
    { label: "Display Size", value: "13.3-inch TN LCD" },
    { label: "Resolution", value: "1440 x 900 pixels" },
    { label: "Processor", value: "Intel Core i5/i7" },
    { label: "Screen Technology", value: "TN LCD Panel" },
    { label: "Generation", value: "Legacy Intel MacBook Air" },
    { label: "Production Years", value: "2013-2017" }
  ];

  const repairProcess = [
    {
      step: 1,
      title: "Free Diagnosis",
      description: "Complete assessment of your MacBook Air A1466 13.3-inch TN LCD display damage and functionality test",
      time: "30 minutes"
    },
    {
      step: 2, 
      title: "Quote & Approval",
      description: "Transparent pricing quote for A1466 legacy screen replacement with no hidden charges",
      time: "15 minutes"
    },
    {
      step: 3,
      title: "Screen Replacement",
      description: "Expert replacement of TN LCD display assembly with precision tools and compatible parts",
      time: "2-3 hours"
    },
    {
      step: 4,
      title: "Quality Testing",
      description: "Comprehensive functionality testing including display calibration and legacy system compatibility",
      time: "30 minutes"
    }
  ];

  const commonIssues = [
    "Cracked or shattered 13.3-inch TN LCD glass",
    "Black screen with backlight visible", 
    "Vertical or horizontal lines on screen",
    "Dead pixels or color distortion",
    "Flickering or unstable display",
    "Liquid damage causing display malfunction",
    "Backlight failure or dim screen",
    "Age-related display degradation"
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Up to 3 Months Warranty",
      description: "Comprehensive warranty on A1466 legacy screen replacement parts and workmanship"
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Most MacBook Air A1466 screen replacements completed within 2-4 hours"
    },
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Certified specialists with extensive experience in Intel MacBook Air repairs"
    },
    {
      icon: MapPin,
      title: "Free Pickup & Delivery",
      description: "Doorstep service across Delhi NCR including Noida, Gurgaon, and Ghaziabad"
    }
  ];

  const faqData = [
    {
      question: "How much does MacBook Air A1466 Intel screen replacement cost in Delhi NCR?",
      answer: "MacBook Air A1466 screen replacement costs vary based on display damage extent and parts required. We offer competitive pricing for Intel MacBook Air legacy screen repairs with transparent quotes. Contact us for instant pricing - we provide the most affordable rates in Delhi NCR with up to 3 months warranty included."
    },
    {
      question: "How long does A1466 TN LCD screen replacement take?",
      answer: "MacBook Air A1466 screen replacement typically takes 2-4 hours depending on damage complexity. Our expert technicians handle Intel MacBook Air display assembly replacement efficiently. Most repairs are completed the same day with comprehensive quality testing."
    },
    {
      question: "Is MacBook Air A1466 13.3-inch display repairable if completely black?",
      answer: "Yes, we can repair MacBook Air A1466 displays with black screen issues. Our technicians diagnose whether it's a display assembly problem, logic board issue, or cable connection fault. We provide complete solutions for Intel MacBook Air screen problems with professional repair service."
    },
    {
      question: "Do you use genuine parts for A1466 TN LCD screen replacement?",
      answer: "We use high-quality compatible display assemblies that meet Apple's specifications for MacBook Air A1466. Our TN LCD display replacements provide the same visual quality and functionality as original screens. All parts come with warranty and are tested for perfect compatibility with legacy systems."
    },
    {
      question: "Can you repair MacBook Air A1466 with liquid damage on screen?",
      answer: "Yes, we specialize in liquid damage repair for MacBook Air A1466 models. Our process includes complete assessment, cleaning, and screen replacement if required. Intel MacBook Air liquid damage requires immediate attention for best recovery results. Contact us immediately for emergency service."
    },
    {
      question: "Is A1466 screen replacement covered under warranty?",
      answer: "We provide up to 3 months warranty on MacBook Air A1466 screen replacement including parts and workmanship. Our warranty covers display functionality and compatibility with legacy Intel systems. For manufacturing defects in original Apple warranty period, we can guide you through Apple service options."
    }
  ];

  const serviceAreas = [
    "A1466 screen replacement in Noida",
    "Intel MacBook Air display repair Gurgaon", 
    "A1466 TN LCD screen repair Delhi",
    "MacBook Air legacy screen replacement Ghaziabad",
    "A1466 display assembly replacement Greater Noida",
    "Intel MacBook Air screen repair Faridabad",
    "A1466 screen replacement Sector 62 Noida",
    "MacBook Air legacy display repair Cyber City Gurgaon",
    "A1466 screen repair Connaught Place Delhi",
    "Intel MacBook Air display replacement Indirapuram",
    "A1466 TN LCD display repair DLF Phase 1",
    "MacBook Air legacy screen replacement Vasundhara"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Intel MacBook Air</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">A1466 Model</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Legacy</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              MacBook Air A1466 Screen Replacement
              <br />
              <span className="text-blue-200">Professional Intel 13-inch TN LCD Display Repair Delhi NCR</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Expert screen replacement service for MacBook Air Intel 13.3-inch 2013-2017 (A1466) model - legacy MacBook Air with TN LCD display. Professional display repair with compatible parts and up to 3 months warranty across Delhi NCR locations.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Book A1466 Screen Replacement
              </button>
              
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="flex items-center justify-center space-x-3 bg-green-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call: {CONTACT_INFO.phone1}</span>
              </a>
            </div>

            <div className="flex justify-center items-center space-x-8 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Free Pickup & Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Up to 3 Months Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Same Day Repair</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Google Searches Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular A1466 Intel Screen Repair Searches</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Screen Issues */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Wrench className="h-5 w-5 mr-2 text-blue-600" />
                  Screen Problems
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Air A1466 screen replacement cost</li>
                  <li>• A1466 cracked screen repair Delhi</li>
                  <li>• MacBook Air 2017 display replacement</li>
                  <li>• A1466 LCD screen repair price</li>
                  <li>• MacBook Air Intel screen repair</li>
                  <li>• A1466 display assembly replacement</li>
                  <li>• MacBook Air 13 inch screen repair</li>
                  <li>• A1466 TN LCD panel replacement</li>
                </ul>
              </div>

              {/* Service Keywords */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  Service Related
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Air A1466 repair Delhi NCR</li>
                  <li>• A1466 service center near me</li>
                  <li>• MacBook Air 2017 repair shop</li>
                  <li>• A1466 screen replacement Noida</li>
                  <li>• MacBook Air Intel repair service</li>
                  <li>• A1466 display repair Gurgaon</li>
                  <li>• MacBook repair shop Ghaziabad</li>
                  <li>• A1466 screen repair Greater Noida</li>
                </ul>
              </div>

              {/* Technical Issues */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-red-600" />
                  Technical Issues
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A1466 black screen problem</li>
                  <li>• MacBook Air flickering display</li>
                  <li>• A1466 screen lines issue</li>
                  <li>• MacBook Air dim screen repair</li>
                  <li>• A1466 backlight not working</li>
                  <li>• MacBook Air display not working</li>
                  <li>• A1466 screen replacement guide</li>
                  <li>• A1466 display brightness issues</li>
                </ul>
              </div>

              {/* Legacy & Model */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-purple-600" />
                  Legacy Model
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Apple MacBook Air A1466 repair</li>
                  <li>• MacBook Air Intel 2017 service</li>
                  <li>• A1466 screen original replacement</li>
                  <li>• MacBook Air legacy model repair</li>
                  <li>• A1466 TN display replacement</li>
                  <li>• MacBook Air older generation</li>
                  <li>• A1466 compatible screen parts</li>
                  <li>• Intel MacBook Air 13-inch repair</li>
                </ul>
              </div>

              {/* Location Based */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-orange-600" />
                  Location Services
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook repair Delhi doorstep</li>
                  <li>• A1466 repair Noida Sector 62</li>
                  <li>• MacBook service Gurgaon Cyber City</li>
                  <li>• A1466 repair Faridabad</li>
                  <li>• MacBook Air repair Indirapuram</li>
                  <li>• A1466 service Vaishali Ghaziabad</li>
                  <li>• MacBook repair Greater Noida</li>
                  <li>• A1466 repair DLF Phase 1</li>
                </ul>
              </div>

              {/* Intel Legacy Service */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-teal-600" />
                  Intel Legacy Service
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A1466 legacy screen warranty</li>
                  <li>• Intel MacBook Air service quality</li>
                  <li>• MacBook Air older model repair</li>
                  <li>• A1466 professional screen replacement</li>
                  <li>• Intel MacBook Air expert technicians</li>
                  <li>• A1466 vintage MacBook repair</li>
                  <li>• MacBook Air legacy screen service</li>
                  <li>• A1466 specialized repair quote</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions About A1466 Intel Screen Replacement
            </h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                        openFAQ === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <div className="pl-8 border-l-4 border-blue-500">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Need More Information About A1466 Intel Screen Replacement?</h3>
              <p className="text-blue-100 mb-4">
                Our expert technicians are ready to answer all your MacBook Air A1466 questions
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20have%20questions%20about%20MacBook%20Air%20A1466%20Intel%20screen%20replacement`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Ask Expert on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MacBook Air A1466 Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">MacBook Air A1466 Specifications & Screen Details</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">A1466 Model Specifications</h3>
                <div className="space-y-4">
                  {a1466Specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">{spec.label}</span>
                      <span className="font-semibold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Common A1466 Screen Issues We Fix</h3>
                <div className="space-y-3">
                  {commonIssues.map((issue, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process Timeline */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              A1466 Intel Screen Replacement Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {repairProcess.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center relative">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <div className="text-blue-600 font-semibold text-sm">{step.time}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Complete MacBook Air A1466 Intel screen replacement process typically takes 3-4 hours with quality testing
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start A1466 Repair Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose MacLap IT Care for A1466 Intel Screen Replacement?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg">
                  <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              A1466 Intel Screen Replacement Service Areas in Delhi NCR
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-lg border-l-4 border-green-500">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-green-600" />
                    <span className="text-gray-900 font-medium text-sm">{area}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Free Pickup & Delivery Across Delhi NCR</h3>
              <p className="text-green-100 mb-4">
                We provide doorstep MacBook Air A1466 Intel screen replacement service across all Delhi NCR locations
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20Air%20A1466%20Intel%20screen%20replacement%20service`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Book Pickup on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Booking Modal */}
      <ServiceBookingModal>
        <></>
      </ServiceBookingModal>

      {/* Model Navigation */}
      <ModelNavigation serviceType="screen" />
    </div>
  );
}