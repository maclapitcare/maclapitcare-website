import { useEffect, useState } from "react";
import ServiceBookingModal from "../components/modals/service-booking-modal";
import ModelNavigation from "../components/layout/model-navigation";
import { CheckCircle, Clock, Shield, Wrench, MapPin, Phone, MessageCircle, Star, Award, ArrowRight, ChevronDown, HelpCircle, Settings, Zap, Crown } from "lucide-react";
import { CONTACT_INFO } from "../lib/constants";

export default function MacBookAirA2179ScreenReplacementDelhiNCR() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    document.title = "MacBook Air A2179 Screen Replacement Delhi NCR | Final Intel 13-inch Magic Keyboard True Tone Display Repair | MacLap IT Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook Air A2179 screen replacement service in Delhi NCR. Final Intel 13.3-inch Magic Keyboard True Tone display repair 2020 with up to 3 months warranty. Last Intel MacBook Air service. Same-day service, free pickup. Expert technicians. Call 9211720790");
    }

    // Add keywords meta tag
    const setKeywordsTag = () => {
      let keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', 'MacBook Air A2179 screen replacement, final Intel MacBook Air display repair, A2179 screen repair Delhi NCR, MacBook Air 2020 display replacement, Magic Keyboard screen repair, last Intel MacBook Air repair, A2179 repair service');
    };
    setKeywordsTag();
  }, []);

  const a2179Specifications = [
    { label: "Model", value: "MacBook Air (13-inch, 2020)" },
    { label: "Model Number", value: "A2179" },
    { label: "Display Size", value: "13.3-inch Retina True Tone" },
    { label: "Resolution", value: "2560 x 1600 pixels" },
    { label: "Processor", value: "Intel Core i3/i5/i7 10th Gen" },
    { label: "Screen Technology", value: "IPS Retina True Tone" },
    { label: "Generation", value: "Final Intel MacBook Air" },
    { label: "Historic Feature", value: "Last Intel Air + Magic Keyboard" }
  ];

  const repairProcess = [
    {
      step: 1,
      title: "Free Diagnosis",
      description: "Complete assessment of your MacBook Air A2179 13.3-inch Retina True Tone display damage and Magic Keyboard integration test",
      time: "30 minutes"
    },
    {
      step: 2, 
      title: "Quote & Approval",
      description: "Transparent pricing quote for A2179 final Intel Air screen replacement with no hidden charges",
      time: "15 minutes"
    },
    {
      step: 3,
      title: "Screen Replacement",
      description: "Expert replacement of Retina True Tone display assembly with precision tools and Magic Keyboard integration",
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
    "Black screen with Magic Keyboard malfunction", 
    "Vertical or horizontal lines on final Intel display",
    "Dead pixels or color distortion",
    "Flickering or unstable Retina display",
    "Liquid damage affecting True Tone functionality",
    "Backlight failure or dim Retina screen",
    "Magic Keyboard integration display issues"
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Up to 3 Months Warranty",
      description: "Comprehensive warranty on A2179 final Intel Air screen replacement parts and workmanship"
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Most MacBook Air A2179 Retina screen replacements completed within 3-5 hours"
    },
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Certified specialists with extensive experience in final Intel MacBook Air repairs"
    },
    {
      icon: MapPin,
      title: "Free Pickup & Delivery",
      description: "Doorstep service across Delhi NCR including Noida, Gurgaon, and Ghaziabad"
    }
  ];

  const faqData = [
    {
      question: "How much does MacBook Air A2179 final Intel screen replacement cost in Delhi NCR?",
      answer: "MacBook Air A2179 screen replacement costs vary based on Retina display damage extent and Magic Keyboard integration requirements. We offer competitive pricing for final Intel MacBook Air screen repairs with transparent quotes. Contact us for instant pricing - we provide the most affordable rates in Delhi NCR with up to 3 months warranty included."
    },
    {
      question: "How long does A2179 Magic Keyboard Retina screen replacement take?",
      answer: "MacBook Air A2179 screen replacement typically takes 3-5 hours due to Magic Keyboard integration and True Tone calibration requirements. Our expert technicians handle final Intel MacBook Air display assembly replacement with precision. Most repairs are completed the same day with comprehensive quality testing."
    },
    {
      question: "Is MacBook Air A2179 13.3-inch Retina display repairable if completely black?",
      answer: "Yes, we can repair MacBook Air A2179 displays with black screen issues. Our technicians diagnose whether it's a display assembly problem, logic board issue, or Magic Keyboard flex cable connection fault. We provide complete solutions for final Intel MacBook Air screen problems with professional repair service."
    },
    {
      question: "Do you use genuine parts for A2179 Magic Keyboard Retina screen replacement?",
      answer: "We use high-quality compatible display assemblies that meet Apple's specifications for MacBook Air A2179. Our Retina True Tone display replacements provide the same visual quality and functionality as original screens. All parts come with warranty and are tested for perfect compatibility with final Intel systems and Magic Keyboard."
    },
    {
      question: "Can you repair MacBook Air A2179 with liquid damage on Retina screen?",
      answer: "Yes, we specialize in liquid damage repair for MacBook Air A2179 models. Our process includes complete assessment, cleaning, and Retina screen replacement if required. Final Intel MacBook Air liquid damage requires immediate attention for best recovery results. Contact us immediately for emergency service."
    },
    {
      question: "Is A2179 Magic Keyboard functionality maintained after screen replacement?",
      answer: "Yes, we ensure Magic Keyboard functionality is fully maintained after MacBook Air A2179 screen replacement. Our technicians perform complete integration testing and True Tone calibration. We provide up to 3 months warranty on A2179 screen replacement including Magic Keyboard functionality and display features."
    }
  ];

  const serviceAreas = [
    "A2179 Retina screen replacement in Noida",
    "Final Intel MacBook Air display repair Gurgaon", 
    "A2179 Magic Keyboard screen repair Delhi",
    "MacBook Air final Intel screen replacement Ghaziabad",
    "A2179 display assembly replacement Greater Noida",
    "Last Intel MacBook Air screen repair Faridabad",
    "A2179 screen replacement Sector 62 Noida",
    "MacBook Air final Intel display repair Cyber City Gurgaon",
    "A2179 screen repair Connaught Place Delhi",
    "Final Intel MacBook Air display replacement Indirapuram",
    "A2179 Magic Keyboard display repair DLF Phase 1",
    "MacBook Air last Intel screen replacement Vasundhara"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Intel MacBook Air</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">A2179 Model</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <Crown className="h-3 w-3" />
                <span>Final Intel</span>
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              MacBook Air A2179 Screen Replacement
              <br />
              <span className="text-orange-200">Final Intel 13-inch Magic Keyboard True Tone Display Repair Delhi NCR</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Expert screen replacement service for MacBook Air Intel 13.3-inch 2020 (A2179) model - the historic final Intel MacBook Air with Magic Keyboard and True Tone technology. Professional last Intel model display repair with compatible parts and up to 3 months warranty across Delhi NCR locations.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Book A2179 Screen Replacement
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular A2179 Final Intel Air Repair Searches</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Screen Issues */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Wrench className="h-5 w-5 mr-2 text-orange-600" />
                  Magic Keyboard Screen Problems
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Air A2179 screen replacement cost</li>
                  <li>• A2179 cracked screen repair Delhi</li>
                  <li>• MacBook Air 13 inch 2020 display replacement</li>
                  <li>• A2179 Magic Keyboard screen repair</li>
                  <li>• MacBook Air Intel 2020 screen repair</li>
                  <li>• A2179 display assembly replacement</li>
                  <li>• MacBook Air 10th generation screen repair</li>
                  <li>• A2179 final Intel display replacement</li>
                </ul>
              </div>

              {/* Service Keywords */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  Service Related
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Air A2179 repair Delhi NCR</li>
                  <li>• A2179 service center near me</li>
                  <li>• MacBook Air Magic Keyboard repair shop</li>
                  <li>• A2179 screen replacement Noida</li>
                  <li>• MacBook Air 2020 repair service</li>
                  <li>• A2179 display repair Gurgaon</li>
                  <li>• MacBook repair shop Ghaziabad</li>
                  <li>• A2179 final Intel repair Greater Noida</li>
                </ul>
              </div>

              {/* Technical Issues */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-red-600" />
                  Technical Issues
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A2179 black screen problem</li>
                  <li>• MacBook Air 2020 flickering display</li>
                  <li>• A2179 screen lines issue</li>
                  <li>• MacBook Air dim screen repair</li>
                  <li>• A2179 Iris Plus graphics issues</li>
                  <li>• MacBook Air display not working</li>
                  <li>• A2179 Magic Keyboard screen calibration</li>
                  <li>• A2179 True Tone display issues</li>
                </ul>
              </div>

              {/* Historic Final Intel */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Crown className="h-5 w-5 mr-2 text-purple-600" />
                  Historic Final Intel
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Apple MacBook Air A2179 final Intel repair</li>
                  <li>• MacBook Air final Intel 2020 service</li>
                  <li>• A2179 screen original replacement</li>
                  <li>• MacBook Air 10th generation Intel</li>
                  <li>• A2179 Ice Lake processor repair</li>
                  <li>• MacBook Air Magic Keyboard repair</li>
                  <li>• A2179 compatible screen parts</li>
                  <li>• Last Intel MacBook Air 13-inch repair</li>
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
                  <li>• A2179 repair Noida Sector 62</li>
                  <li>• MacBook service Gurgaon Cyber City</li>
                  <li>• A2179 repair Faridabad</li>
                  <li>• MacBook Air repair Indirapuram</li>
                  <li>• A2179 service Vaishali Ghaziabad</li>
                  <li>• MacBook repair Greater Noida</li>
                  <li>• A2179 repair DLF Phase 1</li>
                </ul>
              </div>

              {/* Magic Keyboard Final */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-teal-600" />
                  Magic Keyboard Final
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A2179 Magic Keyboard screen warranty</li>
                  <li>• Final Intel MacBook Air service quality</li>
                  <li>• MacBook Air last Intel model repair</li>
                  <li>• A2179 professional screen replacement</li>
                  <li>• Final Intel MacBook Air expert technicians</li>
                  <li>• A2179 final generation Intel repair</li>
                  <li>• MacBook Air last Intel screen service</li>
                  <li>• A2179 specialized Magic Keyboard repair quote</li>
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
              Frequently Asked Questions About A2179 Final Intel Air Screen Replacement
            </h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-orange-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
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
                      <div className="pl-8 border-l-4 border-orange-500">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Need More Information About A2179 Final Intel Air Screen Replacement?</h3>
              <p className="text-orange-100 mb-4">
                Our expert technicians are ready to answer all your MacBook Air A2179 questions
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20have%20questions%20about%20MacBook%20Air%20A2179%20final%20Intel%20screen%20replacement`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Ask Expert on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MacBook Air A2179 Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">MacBook Air A2179 Specifications & Final Intel Screen Details</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">A2179 Model Specifications</h3>
                <div className="space-y-4">
                  {a2179Specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">{spec.label}</span>
                      <span className="font-semibold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Common A2179 Final Intel Screen Issues We Fix</h3>
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              A2179 Final Intel Air Screen Replacement Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {repairProcess.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center relative">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <div className="text-orange-600 font-semibold text-sm">{step.time}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Complete MacBook Air A2179 final Intel screen replacement process typically takes 4-5 hours with Magic Keyboard integration
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start A2179 Repair Process
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
              Why Choose MacLap IT Care for A2179 Final Intel Air Screen Replacement?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-lg">
                  <div className="bg-orange-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
              A2179 Final Intel Air Screen Replacement Service Areas in Delhi NCR
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

            <div className="text-center mt-8 bg-gradient-to-r from-green-600 to-orange-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Free Pickup & Delivery Across Delhi NCR</h3>
              <p className="text-green-100 mb-4">
                We provide doorstep MacBook Air A2179 final Intel screen replacement service across all Delhi NCR locations
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20Air%20A2179%20final%20Intel%20screen%20replacement%20service`}
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