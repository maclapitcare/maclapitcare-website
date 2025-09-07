import { useEffect, useState } from "react";
import ServiceBookingModal from "../components/modals/service-booking-modal";
import ModelNavigation from "../components/layout/model-navigation";
import { CheckCircle, Clock, Shield, Wrench, MapPin, Phone, MessageCircle, Star, Award, ArrowRight, ChevronDown, HelpCircle, Settings, Zap, Cpu, Monitor, Sparkles, Crown } from "lucide-react";
import { CONTACT_INFO } from "../lib/constants";

export default function MacBookProA2442ScreenReplacementDelhiNCR() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    document.title = "MacBook Pro A2442 Screen Replacement Delhi NCR | 16-inch M1 Pro Max Liquid Retina XDR Display Repair | MacLap IT Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional MacBook Pro A2442 screen replacement service in Delhi NCR. 16-inch M1 Pro/Max Liquid Retina XDR display repair 2021 with up to 3 months warranty. Revolutionary 16-inch MacBook Pro service. Same-day service, free pickup. Expert technicians. Call 9211720790");
    }

    // Add keywords meta tag
    const setKeywordsTag = () => {
      let keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', 'MacBook Pro A2442 screen replacement, 16-inch MacBook Pro display repair, A2442 screen repair Delhi NCR, MacBook Pro M1 Pro Max display replacement, Liquid Retina XDR screen repair, 16-inch MacBook Pro repair, A2442 repair service');
    };
    setKeywordsTag();
  }, []);

  const a2442Specifications = [
    { label: "Model", value: "MacBook Pro (16-inch, 2021)" },
    { label: "Model Number", value: "A2442" },
    { label: "Display Size", value: "16.2-inch Liquid Retina XDR" },
    { label: "Resolution", value: "3456 x 2234 pixels" },
    { label: "Processor", value: "Apple M1 Pro/Max Chip" },
    { label: "Screen Technology", value: "mini-LED Liquid Retina XDR" },
    { label: "Revolutionary Feature", value: "Ultimate 16-inch Pro Display" },
    { label: "Historic Position", value: "Return of 16-inch Excellence" }
  ];

  const repairProcess = [
    {
      step: 1,
      title: "Free Diagnosis",
      description: "Complete assessment of your MacBook Pro A2442 16.2-inch Liquid Retina XDR display damage and mini-LED backlight test",
      time: "30 minutes"
    },
    {
      step: 2, 
      title: "Quote & Approval",
      description: "Transparent pricing quote for A2442 revolutionary 16-inch Pro screen replacement with no hidden charges",
      time: "15 minutes"
    },
    {
      step: 3,
      title: "Screen Replacement",
      description: "Expert replacement of Liquid Retina XDR display assembly with precision tools and mini-LED calibration",
      time: "6-7 hours"
    },
    {
      step: 4,
      title: "Quality Testing",
      description: "Comprehensive functionality testing including XDR calibration and M1 Pro/Max system compatibility",
      time: "45 minutes"
    }
  ];

  const commonIssues = [
    "Cracked or shattered 16.2-inch Liquid Retina XDR glass",
    "Black screen with mini-LED backlight failure", 
    "Vertical or horizontal lines on 16-inch display",
    "Dead pixels or color distortion on XDR display",
    "Flickering or unstable Liquid Retina display",
    "Liquid damage affecting mini-LED functionality",
    "Backlight failure or dim XDR screen",
    "HDR display calibration issues"
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Up to 3 Months Warranty",
      description: "Comprehensive warranty on A2442 revolutionary 16-inch Pro screen replacement parts and workmanship"
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Most MacBook Pro A2442 Liquid Retina XDR screen replacements completed within 6-8 hours"
    },
    {
      icon: Award,
      title: "Expert Technicians",
      description: "Certified specialists with extensive experience in 16-inch MacBook Pro mini-LED repairs"
    },
    {
      icon: MapPin,
      title: "Free Pickup & Delivery",
      description: "Doorstep service across Delhi NCR including Noida, Gurgaon, and Ghaziabad"
    }
  ];

  const faqData = [
    {
      question: "How much does MacBook Pro A2442 16-inch Liquid Retina XDR screen replacement cost in Delhi NCR?",
      answer: "MacBook Pro A2442 screen replacement costs vary based on Liquid Retina XDR display damage extent and mini-LED backlight requirements. We offer competitive pricing for revolutionary 16-inch MacBook Pro screen repairs with transparent quotes. Contact us for instant pricing - we provide the most affordable rates in Delhi NCR with up to 3 months warranty included."
    },
    {
      question: "How long does A2442 16-inch Liquid Retina XDR screen replacement take?",
      answer: "MacBook Pro A2442 screen replacement typically takes 6-8 hours due to complex mini-LED technology and XDR calibration requirements. Our expert technicians handle revolutionary 16-inch MacBook Pro display assembly replacement with precision. Most repairs are completed the same day with comprehensive quality testing."
    },
    {
      question: "Is MacBook Pro A2442 16.2-inch Liquid Retina XDR display repairable if completely black?",
      answer: "Yes, we can repair MacBook Pro A2442 displays with black screen issues. Our technicians diagnose whether it's a display assembly problem, logic board issue, or mini-LED backlight failure. We provide complete solutions for revolutionary 16-inch MacBook Pro screen problems with professional repair service."
    },
    {
      question: "Do you use genuine parts for A2442 Liquid Retina XDR screen replacement?",
      answer: "We use high-quality compatible display assemblies that meet Apple's specifications for MacBook Pro A2442. Our Liquid Retina XDR display replacements provide the same visual quality and functionality as original screens. All parts come with warranty and are tested for perfect compatibility with M1 Pro/Max systems and mini-LED technology."
    },
    {
      question: "Can you repair MacBook Pro A2442 with liquid damage on Liquid Retina XDR screen?",
      answer: "Yes, we specialize in liquid damage repair for MacBook Pro A2442 models. Our process includes complete assessment, cleaning, and Liquid Retina XDR screen replacement if required. Revolutionary 16-inch MacBook Pro liquid damage requires immediate attention for best recovery results. Contact us immediately for emergency service."
    },
    {
      question: "Is A2442 mini-LED functionality maintained after screen replacement?",
      answer: "Yes, we ensure mini-LED functionality is fully maintained after MacBook Pro A2442 screen replacement. Our technicians perform complete XDR calibration and display testing. We provide up to 3 months warranty on A2442 screen replacement including mini-LED functionality and HDR display features."
    }
  ];

  const serviceAreas = [
    "A2442 Liquid Retina XDR screen replacement in Noida",
    "16-inch MacBook Pro display repair Gurgaon", 
    "A2442 mini-LED screen repair Delhi",
    "MacBook Pro revolutionary 16-inch screen replacement Ghaziabad",
    "A2442 display assembly replacement Greater Noida",
    "Liquid Retina XDR MacBook Pro screen repair Faridabad",
    "A2442 screen replacement Sector 62 Noida",
    "MacBook Pro 16-inch display repair Cyber City Gurgaon",
    "A2442 screen repair Connaught Place Delhi",
    "Revolutionary 16-inch MacBook Pro display replacement Indirapuram",
    "A2442 Liquid Retina XDR display repair DLF Phase 1",
    "MacBook Pro 16-inch mini-LED screen replacement Vasundhara"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-rose-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">16-inch MacBook Pro</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">A2442 Model</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <Crown className="h-3 w-3" />
                <span>Ultimate</span>
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              MacBook Pro A2442 Screen Replacement
              <br />
              <span className="text-rose-200">16-inch M1 Pro/Max Liquid Retina XDR Display Repair Delhi NCR</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Expert screen replacement service for MacBook Pro 16-inch 2021 (A2442) model - the ultimate return of the 16-inch form factor with M1 Pro/Max chips and the most stunning Liquid Retina XDR mini-LED technology ever created. Professional 16-inch display repair with compatible parts and up to 3 months warranty across Delhi NCR locations.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Book A2442 Screen Replacement
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Popular A2442 Ultimate 16-inch Pro Repair Searches</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Liquid Retina XDR Issues */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Monitor className="h-5 w-5 mr-2 text-rose-600" />
                  Liquid Retina XDR Problems
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Pro A2442 screen replacement cost</li>
                  <li>• A2442 cracked screen repair Delhi</li>
                  <li>• MacBook Pro 16-inch display replacement</li>
                  <li>• A2442 Liquid Retina XDR screen repair</li>
                  <li>• MacBook Pro 2021 screen repair</li>
                  <li>• A2442 16-inch display replacement</li>
                  <li>• MacBook Pro 16 inch mini-LED screen repair</li>
                  <li>• A2442 ultimate display replacement</li>
                </ul>
              </div>

              {/* Service Keywords */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  Service Related
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• MacBook Pro A2442 repair Delhi NCR</li>
                  <li>• A2442 service center near me</li>
                  <li>• MacBook Pro 16-inch repair shop</li>
                  <li>• A2442 screen replacement Noida</li>
                  <li>• MacBook Pro M1 Pro repair service</li>
                  <li>• A2442 display repair Gurgaon</li>
                  <li>• MacBook repair shop Ghaziabad</li>
                  <li>• A2442 ultimate repair Greater Noida</li>
                </ul>
              </div>

              {/* Technical Issues */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-red-600" />
                  Technical Issues
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A2442 black screen problem</li>
                  <li>• MacBook Pro 16-inch display flickering</li>
                  <li>• A2442 dead pixels repair</li>
                  <li>• MacBook Pro mini-LED color issues</li>
                  <li>• A2442 backlight failure</li>
                  <li>• 16-inch MacBook Pro XDR replacement</li>
                  <li>• A2442 ProMotion display repair</li>
                  <li>• A2442 HDR display calibration issues</li>
                </ul>
              </div>

              {/* Ultimate 16-inch */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Crown className="h-5 w-5 mr-2 text-rose-600" />
                  Ultimate 16-inch
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Apple MacBook Pro A2442 16-inch repair</li>
                  <li>• MacBook Pro ultimate 2021 service</li>
                  <li>• A2442 screen original replacement</li>
                  <li>• MacBook Pro 16-inch form factor repair</li>
                  <li>• A2442 M1 Pro Max screen compatibility</li>
                  <li>• MacBook Pro ultimate 16-inch repair</li>
                  <li>• A2442 compatible screen parts</li>
                  <li>• Ultimate 16-inch MacBook Pro repair</li>
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
                  <li>• A2442 repair Noida Sector 62</li>
                  <li>• MacBook service Gurgaon Cyber City</li>
                  <li>• A2442 repair Faridabad</li>
                  <li>• MacBook Pro repair Indirapuram</li>
                  <li>• A2442 service Vaishali Ghaziabad</li>
                  <li>• MacBook repair Greater Noida</li>
                  <li>• A2442 repair DLF Phase 1</li>
                </ul>
              </div>

              {/* Mini-LED XDR */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-teal-600" />
                  Mini-LED XDR
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• A2442 mini-LED screen warranty</li>
                  <li>• Ultimate 16-inch MacBook Pro service quality</li>
                  <li>• MacBook Pro Liquid Retina XDR repair</li>
                  <li>• A2442 professional screen replacement</li>
                  <li>• Ultimate 16-inch expert technicians</li>
                  <li>• A2442 mini-LED technology repair</li>
                  <li>• MacBook Pro 16-inch XDR screen service</li>
                  <li>• A2442 specialized Liquid Retina repair quote</li>
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
              Frequently Asked Questions About A2442 Ultimate 16-inch Pro Screen Replacement
            </h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-rose-50 to-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-rose-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="h-5 w-5 text-rose-600 flex-shrink-0" />
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
                      <div className="pl-8 border-l-4 border-rose-500">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Need More Information About A2442 Ultimate 16-inch Pro Screen Replacement?</h3>
              <p className="text-rose-100 mb-4">
                Our expert technicians are ready to answer all your MacBook Pro A2442 questions
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20have%20questions%20about%20MacBook%20Pro%20A2442%20ultimate%2016-inch%20screen%20replacement`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Ask Expert on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MacBook Pro A2442 Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">MacBook Pro A2442 Specifications & Ultimate 16-inch Screen Details</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-rose-50 to-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">A2442 Model Specifications</h3>
                <div className="space-y-4">
                  {a2442Specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-700">{spec.label}</span>
                      <span className="font-semibold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Common A2442 Ultimate 16-inch Screen Issues We Fix</h3>
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              A2442 Ultimate 16-inch Pro Screen Replacement Process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {repairProcess.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center relative">
                  <div className="bg-rose-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                  <div className="text-rose-600 font-semibold text-sm">{step.time}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Complete MacBook Pro A2442 ultimate 16-inch screen replacement process typically takes 7-8 hours with mini-LED calibration
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start A2442 Repair Process
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
              Why Choose MacLap IT Care for A2442 Ultimate 16-inch Pro Screen Replacement?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-rose-50 to-white rounded-xl p-6 shadow-lg">
                  <div className="bg-rose-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
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
              A2442 Ultimate 16-inch Pro Screen Replacement Service Areas in Delhi NCR
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

            <div className="text-center mt-8 bg-gradient-to-r from-green-600 to-rose-600 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Free Pickup & Delivery Across Delhi NCR</h3>
              <p className="text-green-100 mb-4">
                We provide doorstep MacBook Pro A2442 ultimate 16-inch screen replacement service across all Delhi NCR locations
              </p>
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20need%20MacBook%20Pro%20A2442%20ultimate%2016-inch%20screen%20replacement%20service`}
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