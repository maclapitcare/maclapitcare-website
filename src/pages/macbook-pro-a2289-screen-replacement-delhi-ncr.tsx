import { useEffect, useState } from "react";
import ServiceBookingModal from "../components/modals/service-booking-modal";
import ModelNavigation from "../components/layout/model-navigation";
import { CheckCircle, Clock, Shield, Wrench, MapPin, Phone, MessageCircle, Star, Award, ArrowRight, ChevronDown, HelpCircle, Settings, Zap, Cpu, Monitor, Sparkles, Crown, Rocket, Bolt, Gem } from "lucide-react";
import { CONTACT_INFO } from "../lib/constants";

export default function MacBookProA2289ScreenReplacementDelhiNCR() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    document.title = "MacBook Pro A2289 Screen Replacement Delhi NCR | 13-inch Final Intel Touch Bar True Tone Retina Display Repair | MacLap IT Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook Pro A2289 screen replacement service in Delhi NCR. 13-inch Final Intel Touch Bar True Tone Retina display repair 2020 with up to 3 months warranty. Final 13-inch MacBook Pro service. Same-day service, free pickup. Expert technicians. Call 9211720790");
    }

    // Add keywords meta tag
    const setKeywordsTag = () => {
      let keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', 'MacBook Pro A2289 screen replacement, 13-inch MacBook Pro display repair, A2289 screen repair Delhi NCR, MacBook Pro Touch Bar display replacement, True Tone Retina screen repair, 13-inch MacBook Pro repair, A2289 repair service, final MacBook Pro screen replacement, Intel Touch Bar repair');
    };
    setKeywordsTag();
  }, []);

  const a2289Specifications = [
    { label: "Model", value: "MacBook Pro (13-inch, 2020)" },
    { label: "Model Number", value: "A2289" },
    { label: "Display Size", value: "13.3-inch Retina Display" },
    { label: "Resolution", value: "2560 x 1600 pixels" },
    { label: "Processor", value: "Intel Core i5/i7 Quad-core" },
    { label: "Screen Technology", value: "LED-backlit IPS Retina with True Tone" },
    { label: "Final Feature", value: "Touch Bar with True Tone" },
    { label: "Position", value: "Final Intel Touch Bar Model" }
  ];

  const repairProcess = [
    {
      step: 1,
      title: "Free Diagnosis",
      description: "Complete assessment of your MacBook Pro A2289 13.3-inch True Tone Retina display damage and final Touch Bar functionality test",
      time: "30 minutes"
    },
    {
      step: 2, 
      title: "Quote & Approval",
      description: "Transparent pricing quote for A2289 final 13-inch Touch Bar screen replacement with no hidden charges",
      time: "15 minutes"
    },
    {
      step: 3,
      title: "Screen Replacement",
      description: "Expert replacement of True Tone Retina display assembly with precision tools and Intel quad-core system calibration",
      time: "4-5 hours"
    },
    {
      step: 4,
      title: "Quality Testing",
      description: "Comprehensive functionality testing including final Touch Bar calibration and Intel system compatibility verification",
      time: "45 minutes"
    }
  ];

  const commonIssues = [
    "Cracked or shattered 13.3-inch True Tone Retina glass",
    "Black screen with backlight failure", 
    "Vertical or horizontal lines on 13-inch display",
    "Dead pixels or color distortion on final display",
    "Flickering or unstable True Tone Retina display",
    "Final Touch Bar not responding or malfunctioning",
    "True Tone functionality problems",
    "Intel graphics compatibility issues"
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Up to 3 Months Warranty",
      description: "Comprehensive warranty on A2289 final 13-inch Touch Bar screen replacement parts and workmanship"
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Most MacBook Pro A2289 True Tone Retina screen replacements completed within 5-6 hours"
    },
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Certified specialists with extensive experience in final 13-inch MacBook Pro Touch Bar repairs"
    },
    {
      icon: MapPin,
      title: "Free Pickup & Delivery",
      description: "Doorstep service across Delhi NCR including Noida, Gurgaon, and Ghaziabad"
    }
  ];

  const faqData = [
    {
      question: "How much does MacBook Pro A2289 13-inch final Touch Bar True Tone screen replacement cost in Delhi NCR?",
      answer: "MacBook Pro A2289 screen replacement costs vary based on True Tone Retina display damage extent and final Touch Bar compatibility requirements. We offer competitive pricing for final 13-inch MacBook Pro Touch Bar screen repairs with transparent quotes. Contact us for instant pricing - we provide the most affordable rates in Delhi NCR with up to 3 months warranty included."
    },
    {
      question: "How long does A2289 13-inch final Touch Bar True Tone screen replacement take?",
      answer: "MacBook Pro A2289 screen replacement typically takes 5-6 hours due to final Touch Bar integration and Intel quad-core system calibration requirements. Our expert technicians handle final 13-inch MacBook Pro display assembly replacement with precision. Most repairs are completed the same day with comprehensive quality testing."
    },
    {
      question: "Is MacBook Pro A2289 13.3-inch True Tone Retina display repairable if completely black?",
      answer: "Yes, we can repair MacBook Pro A2289 displays with black screen issues. Our technicians diagnose whether it's a display assembly problem, logic board issue, or backlight failure. We provide complete solutions for final 13-inch MacBook Pro Touch Bar screen problems with professional repair service."
    },
    {
      question: "Do you use genuine parts for A2289 final Touch Bar True Tone screen replacement?",
      answer: "We use high-quality compatible display assemblies that meet Apple's specifications for MacBook Pro A2289. Our True Tone Retina display replacements provide the same visual quality and functionality as original screens. All parts come with warranty and are tested for perfect compatibility with Intel systems and final Touch Bar technology."
    },
    {
      question: "Can you repair MacBook Pro A2289 with liquid damage on final Touch Bar True Tone screen?",
      answer: "Yes, we specialize in liquid damage repair for MacBook Pro A2289 models. Our process includes complete assessment, cleaning, and True Tone screen replacement if required. Final 13-inch MacBook Pro Touch Bar liquid damage requires immediate attention for best recovery results. Contact us immediately for emergency service."
    },
    {
      question: "Is A2289 final Touch Bar and True Tone functionality maintained after screen replacement?",
      answer: "Yes, we ensure final Touch Bar and True Tone functionality are fully maintained after MacBook Pro A2289 screen replacement. Our technicians perform complete display calibration and final Touch Bar system testing. We provide up to 3 months warranty on A2289 screen replacement including Touch Bar compatibility and all display features."
    }
  ];

  const serviceAreas = [
    "A2289 final Touch Bar True Tone screen replacement in Noida",
    "13-inch MacBook Pro Touch Bar display repair Gurgaon", 
    "A2289 True Tone Retina screen repair Delhi",
    "MacBook Pro final 13-inch screen replacement Ghaziabad",
    "A2289 display assembly replacement Greater Noida",
    "Final Touch Bar MacBook Pro screen repair Faridabad",
    "A2289 screen replacement Sector 62 Noida",
    "MacBook Pro 13-inch Touch Bar display repair Cyber City Gurgaon",
    "A2289 screen repair Connaught Place Delhi",
    "Final 13-inch MacBook Pro display replacement Indirapuram",
    "A2289 final Touch Bar True Tone display repair DLF Phase 1",
    "MacBook Pro 13-inch Touch Bar screen replacement Vasundhara"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">13-inch MacBook Pro</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">A2289 Model</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <Zap className="h-3 w-3" />
                <span>Final</span>
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              MacBook Pro A2289 Screen Replacement
              <br />
              <span className="text-red-200">13-inch Final Intel Touch Bar True Tone Retina Display Repair Delhi NCR</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Expert screen replacement service for MacBook Pro 13-inch 2020 (A2289) model - the final generation of Intel Touch Bar MacBooks that delivered ultimate performance with stunning 13.3-inch True Tone Retina display and perfected final Touch Bar technology. Final 13-inch display repair with compatible parts and up to 3 months warranty across Delhi NCR locations.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
              <ServiceBookingModal>
                <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  Book A2289 Screen Replacement
                </button>
              </ServiceBookingModal>
              
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular A2289 Final 13-inch Touch Bar Repair Searches</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Final Touch Bar True Tone Issues */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Monitor className="h-5 w-5 mr-2 text-red-600" />
                  Final Touch Bar True Tone Problems
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Pro A2289 screen replacement cost</li>
                  <li>• A2289 cracked screen repair Delhi</li>
                  <li>• MacBook Pro 13-inch Touch Bar display replacement</li>
                  <li>• A2289 True Tone Retina screen repair</li>
                  <li>• MacBook Pro 2020 screen repair</li>
                  <li>• A2289 13-inch display replacement</li>
                  <li>• MacBook Pro final Touch Bar screen repair</li>
                  <li>• A2289 final display replacement</li>
                </ul>
              </div>

              {/* Service Keywords */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  Service Related
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Pro A2289 repair Delhi NCR</li>
                  <li>• A2289 service center near me</li>
                  <li>• MacBook Pro Touch Bar repair shop</li>
                  <li>• A2289 screen replacement Noida</li>
                  <li>• MacBook Pro 2020 repair service</li>
                  <li>• A2289 display repair Gurgaon</li>
                  <li>• MacBook repair shop Ghaziabad</li>
                  <li>• A2289 final repair Greater Noida</li>
                </ul>
              </div>

              {/* Technical Issues */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-red-600" />
                  Technical Issues
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A2289 black screen problem</li>
                  <li>• MacBook Pro Touch Bar flickering display</li>
                  <li>• A2289 screen lines issue</li>
                  <li>• MacBook Pro True Tone not working</li>
                  <li>• A2289 backlight failure</li>
                  <li>• 13-inch MacBook Pro Retina replacement</li>
                  <li>• A2289 Touch Bar calibration issues</li>
                  <li>• A2289 Intel graphics compatibility issues</li>
                </ul>
              </div>

              {/* Final Touch Bar */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-red-600" />
                  Final Touch Bar
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Apple MacBook Pro A2289 13-inch repair</li>
                  <li>• MacBook Pro Touch Bar 2020 service</li>
                  <li>• A2289 screen original replacement</li>
                  <li>• MacBook Pro Intel Touch Bar compatibility</li>
                  <li>• A2289 final Touch Bar screen compatibility</li>
                  <li>• MacBook Pro final repair</li>
                  <li>• A2289 compatible screen parts</li>
                  <li>• Final 13-inch MacBook Pro repair</li>
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
                  <li>• A2289 repair Noida Sector 62</li>
                  <li>• MacBook service Gurgaon Cyber City</li>
                  <li>• A2289 repair Faridabad</li>
                  <li>• MacBook Pro repair Indirapuram</li>
                  <li>• A2289 service Vaishali Ghaziabad</li>
                  <li>• MacBook repair Greater Noida</li>
                  <li>• A2289 repair DLF Phase 1</li>
                </ul>
              </div>

              {/* Quality & Warranty */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-teal-600" />
                  Quality & Warranty
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A2289 screen warranty terms</li>
                  <li>• Final MacBook Pro service quality</li>
                  <li>• MacBook Pro Touch Bar final repair</li>
                  <li>• A2289 final screen replacement</li>
                  <li>• Final 13-inch expert technicians</li>
                  <li>• A2289 Touch Bar technology repair</li>
                  <li>• MacBook Pro 13-inch True Tone screen service</li>
                  <li>• A2289 specialized final Touch Bar repair quote</li>
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
              Frequently Asked Questions About A2289 Final 13-inch Touch Bar Screen Replacement
            </h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-red-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
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
                      <div className="pl-8 border-l-4 border-red-500">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Need More Information About A2289 Final 13-inch Touch Bar Screen Replacement?</h3>
              <p className="text-red-100 mb-4">
                Our expert technicians are ready to answer all your MacBook Pro A2289 questions
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20have%20questions%20about%20MacBook%20Pro%20A2289%20final%2013-inch%20Touch%20Bar%20screen%20replacement`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Ask Expert on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MacBook Pro A2289 Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">MacBook Pro A2289 Specifications & Final 13-inch Touch Bar Screen Details</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">A2289 Model Specifications</h3>
                <div className="space-y-4">
                  {a2289Specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">{spec.label}</span>
                      <span className="font-semibold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Common A2289 Final 13-inch Touch Bar Screen Issues We Fix</h3>
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              A2289 Final 13-inch Touch Bar Screen Replacement Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {repairProcess.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center relative">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <div className="text-red-600 font-semibold text-sm">{step.time}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Complete MacBook Pro A2289 final 13-inch Touch Bar screen replacement process typically takes 6-7 hours with Touch Bar calibration
              </p>
              <ServiceBookingModal>
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                  Start A2289 Repair Process
                </button>
              </ServiceBookingModal>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose MacLap IT Care for A2289 Final 13-inch Touch Bar Screen Replacement?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-lg">
                  <div className="bg-red-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
              A2289 Final 13-inch Touch Bar Screen Replacement Service Areas in Delhi NCR
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

            <div className="text-center mt-8 bg-gradient-to-r from-green-600 to-red-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Free Pickup & Delivery Across Delhi NCR</h3>
              <p className="text-green-100 mb-4">
                We provide doorstep MacBook Pro A2289 final 13-inch Touch Bar screen replacement service across all Delhi NCR locations
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20Pro%20A2289%20final%2013-inch%20Touch%20Bar%20screen%20replacement%20service`}
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

      {/* Model Navigation */}
      <ModelNavigation serviceType="screen" />
    </div>
  );
}