import { useEffect, useState } from "react";
import ServiceBookingModal from "../components/modals/service-booking-modal";
import ModelNavigation from "../components/layout/model-navigation";
import { CheckCircle, Clock, Shield, Wrench, MapPin, Phone, MessageCircle, Star, Award, ArrowRight, ChevronDown, HelpCircle, Settings, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "../lib/constants";

export default function MacBookAirA1932ScreenReplacementDelhiNCR() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    document.title = "MacBook Air A1932 Screen Replacement Delhi NCR | First Retina Intel 13-inch True Tone Display Repair | MacLap IT Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook Air A1932 screen replacement service in Delhi NCR. First Retina Intel 13.3-inch True Tone display repair 2018-2019 with up to 3 months warranty. Transitional MacBook Air service. Same-day service, free pickup. Expert technicians. Call 9211720790");
    }

    // Add keywords meta tag
    const setKeywordsTag = () => {
      let keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', 'MacBook Air A1932 screen replacement, first Retina MacBook Air display repair, A1932 screen repair Delhi NCR, MacBook Air 2018-2019 display replacement, True Tone screen repair, transitional MacBook Air repair, A1932 repair service');
    };
    setKeywordsTag();
  }, []);

  const a1932Specifications = [
    { label: "Model", value: "MacBook Air (13-inch, 2018-2019)" },
    { label: "Model Number", value: "A1932" },
    { label: "Display Size", value: "13.3-inch Retina (First)" },
    { label: "Resolution", value: "2560 x 1600 pixels" },
    { label: "Processor", value: "Intel Core i5 8th Gen" },
    { label: "Screen Technology", value: "IPS Retina True Tone" },
    { label: "Generation", value: "Transitional Intel MacBook Air" },
    { label: "Historic Feature", value: "First Retina MacBook Air" }
  ];

  const repairProcess = [
    {
      step: 1,
      title: "Free Diagnosis",
      description: "Complete assessment of your MacBook Air A1932 13.3-inch Retina True Tone display damage and functionality test",
      time: "30 minutes"
    },
    {
      step: 2, 
      title: "Quote & Approval",
      description: "Transparent pricing quote for A1932 first Retina Air screen replacement with no hidden charges",
      time: "15 minutes"
    },
    {
      step: 3,
      title: "Screen Replacement",
      description: "Expert replacement of Retina True Tone display assembly with precision tools and calibrated parts",
      time: "3-4 hours"
    },
    {
      step: 4,
      title: "Quality Testing",
      description: "Comprehensive functionality testing including True Tone calibration and Intel system compatibility",
      time: "45 minutes"
    }
  ];

  const commonIssues = [
    "Cracked or shattered 13.3-inch Retina glass",
    "Black screen with True Tone malfunction", 
    "Vertical or horizontal lines on Retina display",
    "Dead pixels or color distortion",
    "Flickering or unstable Retina display",
    "Liquid damage affecting True Tone functionality",
    "Backlight failure or dim Retina screen",
    "Touch ID integration display issues"
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Up to 3 Months Warranty",
      description: "Comprehensive warranty on A1932 first Retina Air screen replacement parts and workmanship"
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Most MacBook Air A1932 Retina screen replacements completed within 3-5 hours"
    },
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Certified specialists with extensive experience in Intel MacBook Air Retina repairs"
    },
    {
      icon: MapPin,
      title: "Free Pickup & Delivery",
      description: "Doorstep service across Delhi NCR including Noida, Gurgaon, and Ghaziabad"
    }
  ];

  const faqData = [
    {
      question: "How much does MacBook Air A1932 first Retina screen replacement cost in Delhi NCR?",
      answer: "MacBook Air A1932 screen replacement costs vary based on Retina display damage extent and True Tone calibration requirements. We offer competitive pricing for first Retina MacBook Air screen repairs with transparent quotes. Contact us for instant pricing - we provide the most affordable rates in Delhi NCR with up to 3 months warranty included."
    },
    {
      question: "How long does A1932 True Tone Retina screen replacement take?",
      answer: "MacBook Air A1932 screen replacement typically takes 3-5 hours due to True Tone calibration requirements. Our expert technicians handle Intel MacBook Air Retina display assembly replacement with precision. Most repairs are completed the same day with comprehensive quality testing and True Tone calibration."
    },
    {
      question: "Is MacBook Air A1932 13.3-inch Retina display repairable if completely black?",
      answer: "Yes, we can repair MacBook Air A1932 displays with black screen issues. Our technicians diagnose whether it's a display assembly problem, logic board issue, or flex cable connection fault. We provide complete solutions for Intel MacBook Air Retina screen problems with professional repair service."
    },
    {
      question: "Do you use genuine parts for A1932 True Tone Retina screen replacement?",
      answer: "We use high-quality compatible display assemblies that meet Apple's specifications for MacBook Air A1932. Our Retina True Tone display replacements provide the same visual quality and functionality as original screens. All parts come with warranty and are tested for perfect compatibility with Intel systems."
    },
    {
      question: "Can you repair MacBook Air A1932 with liquid damage on Retina screen?",
      answer: "Yes, we specialize in liquid damage repair for MacBook Air A1932 models. Our process includes complete assessment, cleaning, and Retina screen replacement if required. Intel MacBook Air liquid damage requires immediate attention for best recovery results. Contact us immediately for emergency service."
    },
    {
      question: "Is A1932 True Tone functionality maintained after screen replacement?",
      answer: "Yes, we ensure True Tone functionality is fully maintained after MacBook Air A1932 screen replacement. Our technicians perform complete True Tone calibration and testing. We provide up to 3 months warranty on A1932 screen replacement including True Tone functionality and color accuracy."
    }
  ];

  const serviceAreas = [
    "A1932 Retina screen replacement in Noida",
    "First Retina MacBook Air display repair Gurgaon", 
    "A1932 True Tone screen repair Delhi",
    "MacBook Air transitional screen replacement Ghaziabad",
    "A1932 display assembly replacement Greater Noida",
    "Intel MacBook Air Retina screen repair Faridabad",
    "A1932 screen replacement Sector 62 Noida",
    "MacBook Air first Retina display repair Cyber City Gurgaon",
    "A1932 screen repair Connaught Place Delhi",
    "Intel MacBook Air display replacement Indirapuram",
    "A1932 True Tone display repair DLF Phase 1",
    "MacBook Air transitional screen replacement Vasundhara"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Intel MacBook Air</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">A1932 Model</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <Sparkles className="h-3 w-3" />
                <span>First Retina</span>
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              MacBook Air A1932 Screen Replacement
              <br />
              <span className="text-indigo-200">Historic First Retina Intel 13-inch True Tone Display Repair Delhi NCR</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Expert screen replacement service for MacBook Air Intel 13.3-inch 2018-2019 (A1932) model - the historic first Retina MacBook Air with True Tone technology. Professional transitional model display repair with compatible parts and up to 3 months warranty across Delhi NCR locations.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Book A1932 Screen Replacement
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular A1932 First Retina Air Repair Searches</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Screen Issues */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Wrench className="h-5 w-5 mr-2 text-indigo-600" />
                  Retina Screen Problems
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Air A1932 screen replacement cost</li>
                  <li>• A1932 cracked Retina screen repair Delhi</li>
                  <li>• MacBook Air 13 inch Retina display replacement</li>
                  <li>• A1932 True Tone screen repair</li>
                  <li>• MacBook Air 2018 2019 screen repair</li>
                  <li>• A1932 display assembly replacement</li>
                  <li>• MacBook Air first Retina screen repair</li>
                  <li>• A1932 IPS Retina panel replacement</li>
                </ul>
              </div>

              {/* Service Keywords */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  Service Related
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Air A1932 repair Delhi NCR</li>
                  <li>• A1932 service center near me</li>
                  <li>• MacBook Air Retina repair shop</li>
                  <li>• A1932 screen replacement Noida</li>
                  <li>• MacBook Air 2018 repair service</li>
                  <li>• A1932 display repair Gurgaon</li>
                  <li>• MacBook repair shop Ghaziabad</li>
                  <li>• A1932 Retina screen repair Greater Noida</li>
                </ul>
              </div>

              {/* Technical Issues */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-red-600" />
                  Technical Issues
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A1932 black screen problem</li>
                  <li>• MacBook Air Retina flickering display</li>
                  <li>• A1932 screen lines issue</li>
                  <li>• MacBook Air dim Retina screen repair</li>
                  <li>• A1932 True Tone not working</li>
                  <li>• MacBook Air display not working</li>
                  <li>• A1932 butterfly keyboard screen calibration</li>
                  <li>• A1932 Retina display brightness issues</li>
                </ul>
              </div>

              {/* Historic First Retina */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-purple-600" />
                  Historic First Retina
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Apple MacBook Air A1932 first Retina repair</li>
                  <li>• MacBook Air Retina 2018 service</li>
                  <li>• A1932 screen original replacement</li>
                  <li>• MacBook Air Intel 8th generation</li>
                  <li>• A1932 Touch ID Retina repair</li>
                  <li>• MacBook Air transitional model repair</li>
                  <li>• A1932 compatible Retina screen parts</li>
                  <li>• First Retina MacBook Air 13-inch repair</li>
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
                  <li>• A1932 repair Noida Sector 62</li>
                  <li>• MacBook service Gurgaon Cyber City</li>
                  <li>• A1932 repair Faridabad</li>
                  <li>• MacBook Air repair Indirapuram</li>
                  <li>• A1932 service Vaishali Ghaziabad</li>
                  <li>• MacBook repair Greater Noida</li>
                  <li>• A1932 repair DLF Phase 1</li>
                </ul>
              </div>

              {/* True Tone Transitional */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-teal-600" />
                  True Tone Transitional
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A1932 True Tone screen warranty</li>
                  <li>• Intel MacBook Air Retina service quality</li>
                  <li>• MacBook Air transitional model repair</li>
                  <li>• A1932 professional Retina replacement</li>
                  <li>• Intel MacBook Air expert technicians</li>
                  <li>• A1932 first generation Retina repair</li>
                  <li>• MacBook Air historic Retina service</li>
                  <li>• A1932 specialized True Tone repair quote</li>
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
              Frequently Asked Questions About A1932 First Retina Air Screen Replacement
            </h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-indigo-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
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
                      <div className="pl-8 border-l-4 border-indigo-500">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Need More Information About A1932 First Retina Air Screen Replacement?</h3>
              <p className="text-indigo-100 mb-4">
                Our expert technicians are ready to answer all your MacBook Air A1932 questions
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20have%20questions%20about%20MacBook%20Air%20A1932%20first%20Retina%20screen%20replacement`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Ask Expert on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MacBook Air A1932 Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">MacBook Air A1932 Specifications & First Retina Screen Details</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">A1932 Model Specifications</h3>
                <div className="space-y-4">
                  {a1932Specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">{spec.label}</span>
                      <span className="font-semibold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Common A1932 Retina Screen Issues We Fix</h3>
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              A1932 First Retina Air Screen Replacement Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {repairProcess.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center relative">
                  <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <div className="text-indigo-600 font-semibold text-sm">{step.time}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Complete MacBook Air A1932 first Retina screen replacement process typically takes 4-5 hours with True Tone calibration
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start A1932 Repair Process
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
              Why Choose MacLap IT Care for A1932 First Retina Air Screen Replacement?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-lg">
                  <div className="bg-indigo-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
              A1932 First Retina Air Screen Replacement Service Areas in Delhi NCR
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

            <div className="text-center mt-8 bg-gradient-to-r from-green-600 to-indigo-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Free Pickup & Delivery Across Delhi NCR</h3>
              <p className="text-green-100 mb-4">
                We provide doorstep MacBook Air A1932 first Retina screen replacement service across all Delhi NCR locations
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20Air%20A1932%20first%20Retina%20screen%20replacement%20service`}
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