import { useEffect, useState } from "react";
import ServiceBookingModal from "../components/modals/service-booking-modal";
import ModelNavigation from "../components/layout/model-navigation";
import { CheckCircle, Clock, Shield, Wrench, MapPin, Phone, MessageCircle, Star, Award, ArrowRight, ChevronDown, HelpCircle, Settings } from "lucide-react";
import { CONTACT_INFO } from "../lib/constants";

export default function MacBookAirA3130ScreenReplacementDelhiNCR() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    document.title = "MacBook Air A3130 Screen Replacement Delhi NCR | 15-inch M2 2023 Liquid Retina Display Repair | MacLap IT Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook Air A3130 screen replacement service in Delhi NCR. 15-inch M2 2023 Liquid Retina display repair with up to 3 months warranty. Largest MacBook Air screen. Same-day service, free pickup. Expert technicians. Call 9211720790");
    }

    // Add keywords meta tag
    const setKeywordsTag = () => {
      let keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', 'MacBook Air A3130 screen replacement, 15-inch MacBook Air display repair, A3130 screen repair Delhi NCR, MacBook Air 2023 display replacement, Liquid Retina screen repair, largest MacBook Air screen replacement, A3130 repair service');
    };
    setKeywordsTag();
  }, []);

  const a3130Specifications = [
    { label: "Model", value: "MacBook Air (15-inch, M2, 2023)" },
    { label: "Model Number", value: "A3130" },
    { label: "Display Size", value: "15.3-inch Liquid Retina Display" },
    { label: "Resolution", value: "2880 x 1864 pixels" },
    { label: "Processor", value: "Apple M2 Chip" },
    { label: "Screen Technology", value: "LED-backlit IPS" },
    { label: "Color Support", value: "P3 Wide Color, 1 billion colors" },
    { label: "Brightness", value: "500 nits" },
    { label: "Special Feature", value: "Largest MacBook Air ever made" }
  ];

  const repairProcess = [
    {
      step: 1,
      title: "Free Diagnosis",
      description: "Complete assessment of your MacBook Air A3130 large 15.3-inch Liquid Retina display damage and functionality test",
      time: "30 minutes"
    },
    {
      step: 2, 
      title: "Quote & Approval",
      description: "Transparent pricing quote for A3130 large screen replacement with no hidden charges",
      time: "15 minutes"
    },
    {
      step: 3,
      title: "Screen Replacement",
      description: "Expert replacement of 15.3-inch Liquid Retina display assembly with precision tools and genuine parts",
      time: "3-4 hours"
    },
    {
      step: 4,
      title: "Quality Testing",
      description: "Comprehensive functionality testing including color accuracy, brightness, and large screen calibration",
      time: "45 minutes"
    }
  ];

  const commonIssues = [
    "Cracked or shattered 15.3-inch Liquid Retina display glass",
    "Black screen with backlight visible", 
    "Vertical or horizontal lines on large screen",
    "Dead pixels or color distortion",
    "Flickering or unstable display",
    "Liquid damage causing display malfunction",
    "Backlight failure or dim screen",
    "Large display edge damage"
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Up to 3 Months Warranty",
      description: "Comprehensive warranty on A3130 large screen replacement parts and workmanship"
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Most MacBook Air A3130 screen replacements completed within 3-5 hours"
    },
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Certified specialists with extensive experience in 15-inch MacBook Air repairs"
    },
    {
      icon: MapPin,
      title: "Free Pickup & Delivery",
      description: "Doorstep service across Delhi NCR including Noida, Gurgaon, and Ghaziabad"
    }
  ];

  const faqData = [
    {
      question: "How much does MacBook Air A3130 15-inch screen replacement cost in Delhi NCR?",
      answer: "MacBook Air A3130 screen replacement costs vary based on the large display damage extent and parts required. We offer competitive pricing for 15-inch M2 MacBook Air 2023 screen repairs with transparent quotes. Contact us for instant pricing - we provide the most affordable rates in Delhi NCR with up to 3 months warranty included."
    },
    {
      question: "How long does A3130 15.3-inch Liquid Retina screen replacement take?",
      answer: "MacBook Air A3130 screen replacement typically takes 3-5 hours depending on damage complexity due to the larger display size. Our expert technicians handle 15-inch M2 MacBook Air display assembly replacement efficiently. Most repairs are completed the same day with comprehensive quality testing."
    },
    {
      question: "Is MacBook Air A3130 15-inch display repairable if completely black?",
      answer: "Yes, we can repair MacBook Air A3130 displays with black screen issues. Our technicians diagnose whether it's a display assembly problem, logic board issue, or cable connection fault. We provide complete solutions for 15-inch M2 MacBook Air screen problems with professional repair service."
    },
    {
      question: "Do you use genuine parts for A3130 15-inch Liquid Retina screen replacement?",
      answer: "We use high-quality compatible display assemblies that meet Apple's specifications for MacBook Air A3130. Our 15.3-inch Liquid Retina display replacements provide the same visual quality, color accuracy, and brightness as original screens. All parts come with warranty and are tested for perfect compatibility."
    },
    {
      question: "Can you repair MacBook Air A3130 with liquid damage on the large screen?",
      answer: "Yes, we specialize in liquid damage repair for MacBook Air A3130 models. Our process includes complete assessment, cleaning, and screen replacement if required. 15-inch M2 MacBook Air liquid damage requires immediate attention for best recovery results. Contact us immediately for emergency service."
    },
    {
      question: "Is A3130 screen replacement covered under warranty?",
      answer: "We provide up to 3 months warranty on MacBook Air A3130 screen replacement including parts and workmanship. Our warranty covers display functionality, color accuracy, and brightness for the large 15.3-inch screen. For manufacturing defects in original Apple warranty period, we can guide you through Apple service options."
    }
  ];

  const serviceAreas = [
    "A3130 screen replacement in Noida",
    "15-inch MacBook Air display repair Gurgaon", 
    "A3130 Liquid Retina screen repair Delhi",
    "MacBook Air 2023 screen replacement Ghaziabad",
    "A3130 display assembly replacement Greater Noida",
    "15-inch M2 MacBook Air screen repair Faridabad",
    "A3130 screen replacement Sector 62 Noida",
    "MacBook Air large display repair Cyber City Gurgaon",
    "A3130 screen repair Connaught Place Delhi",
    "15-inch MacBook Air display replacement Indirapuram",
    "A3130 Liquid Retina display repair DLF Phase 1",
    "MacBook Air large screen replacement Vasundhara"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">15-inch MacBook Air</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">A3130 Model</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Largest Ever</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              MacBook Air A3130 Screen Replacement
              <br />
              <span className="text-blue-200">Professional 15-inch Liquid Retina Display Repair Delhi NCR</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Expert screen replacement service for MacBook Air 15-inch M2 2023 (A3130) model - the largest MacBook Air ever made. Professional Liquid Retina display repair with genuine parts and up to 3 months warranty across Delhi NCR locations.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Book A3130 Screen Replacement
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular A3130 15-inch Screen Repair Searches</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Screen Issues */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Wrench className="h-5 w-5 mr-2 text-blue-600" />
                  Screen Problems
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Air A3130 screen replacement cost</li>
                  <li>• A3130 cracked screen repair Delhi</li>
                  <li>• MacBook Air 15 inch display replacement</li>
                  <li>• A3130 Liquid Retina screen repair</li>
                  <li>• MacBook Air 2023 screen repair</li>
                  <li>• A3130 display assembly replacement</li>
                  <li>• MacBook Air 15.3 inch screen repair</li>
                  <li>• A3130 large display panel replacement</li>
                </ul>
              </div>

              {/* Service Keywords */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  Service Related
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Air A3130 repair Delhi NCR</li>
                  <li>• A3130 service center near me</li>
                  <li>• MacBook Air M2 15-inch repair shop</li>
                  <li>• A3130 screen replacement Noida</li>
                  <li>• MacBook Air 2023 repair service</li>
                  <li>• A3130 display repair Gurgaon</li>
                  <li>• MacBook repair shop Ghaziabad</li>
                  <li>• A3130 screen repair Greater Noida</li>
                </ul>
              </div>

              {/* Technical Issues */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-red-600" />
                  Technical Issues
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A3130 black screen problem</li>
                  <li>• MacBook Air M2 flickering display</li>
                  <li>• A3130 screen lines issue</li>
                  <li>• MacBook Air dim screen repair</li>
                  <li>• A3130 backlight not working</li>
                  <li>• MacBook Air display not working</li>
                  <li>• A3130 large screen calibration</li>
                  <li>• A3130 display brightness issues</li>
                </ul>
              </div>

              {/* Brand & Model */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-purple-600" />
                  Model Specific
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Apple MacBook Air A3130 repair</li>
                  <li>• MacBook Air M2 15-inch 2023 service</li>
                  <li>• A3130 screen original replacement</li>
                  <li>• MacBook Air large screen model</li>
                  <li>• A3130 Liquid Retina replacement</li>
                  <li>• MacBook Air M2 chip repair</li>
                  <li>• A3130 compatible screen parts</li>
                  <li>• 15-inch MacBook Air largest display</li>
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
                  <li>• A3130 repair Noida Sector 62</li>
                  <li>• MacBook service Gurgaon Cyber City</li>
                  <li>• A3130 repair Faridabad</li>
                  <li>• MacBook Air repair Indirapuram</li>
                  <li>• A3130 service Vaishali Ghaziabad</li>
                  <li>• MacBook repair Greater Noida</li>
                  <li>• A3130 repair DLF Phase 1</li>
                </ul>
              </div>

              {/* Large Screen Specific */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-teal-600" />
                  Large Screen Service
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 15-inch MacBook Air screen warranty</li>
                  <li>• A3130 large display service quality</li>
                  <li>• MacBook Air biggest screen repair</li>
                  <li>• A3130 professional screen replacement</li>
                  <li>• 15.3-inch display expert technicians</li>
                  <li>• A3130 largest MacBook Air repair</li>
                  <li>• MacBook Air premium screen service</li>
                  <li>• A3130 specialized repair quote</li>
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
              Frequently Asked Questions About A3130 15-inch Screen Replacement
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
              <h3 className="text-xl font-bold mb-2">Need More Information About A3130 15-inch Screen Replacement?</h3>
              <p className="text-blue-100 mb-4">
                Our expert technicians are ready to answer all your MacBook Air A3130 questions
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20have%20questions%20about%20MacBook%20Air%20A3130%2015-inch%20screen%20replacement`}
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

      {/* MacBook Air A3130 Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">MacBook Air A3130 Specifications & Screen Details</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">A3130 Model Specifications</h3>
                <div className="space-y-4">
                  {a3130Specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">{spec.label}</span>
                      <span className="font-semibold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Common A3130 Screen Issues We Fix</h3>
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
              A3130 15-inch Screen Replacement Process
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
                Complete MacBook Air A3130 15-inch screen replacement process typically takes 4-5 hours with quality testing
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start A3130 Repair Process
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
              Why Choose MacLap IT Care for A3130 15-inch Screen Replacement?
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
              A3130 15-inch Screen Replacement Service Areas in Delhi NCR
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
                We provide doorstep MacBook Air A3130 15-inch screen replacement service across all Delhi NCR locations
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20Air%20A3130%2015-inch%20screen%20replacement%20service`}
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