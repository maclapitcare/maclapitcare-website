import { useEffect, useState } from "react";
import { ChevronDown, Shield, Clock, Wrench, CreditCard, Smartphone, HardDrive, Phone, MessageCircle, CheckCircle, Star, ArrowRight, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT_INFO } from "@/lib/constants";

export default function FAQ() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  useEffect(() => {
    document.title = "MacBook Repair FAQ - Expert Answers to Common Questions | MacLap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get expert answers to MacBook and laptop repair questions. Learn about repair process, warranty, pricing, data safety across Delhi NCR. 15+ years expertise. Call 9211720790");
    }
  }, []);

  const quickFacts = [
    { icon: Clock, title: "2-4 Hours", description: "Average repair time" },
    { icon: Shield, title: "3-6 Months", description: "Comprehensive warranty" },
    { icon: CheckCircle, title: "98% Success", description: "Repair success rate" },
    { icon: Star, title: "5,000+", description: "Happy customers" }
  ];

  const faqCategories = [
    {
      title: "MacBook Repair Basics",
      icon: Wrench,
      gradient: "from-blue-500 to-indigo-600",
      faqs: [
        {
          question: "How long does a typical MacBook repair take at MacLap IT Care?",
          answer: "Most MacBook repairs at MacLap IT Care are completed within 2-4 hours for common issues like screen replacement, battery replacement, or keyboard repair. Complex issues like logic board repair may take 1-2 days depending on parts availability. Our 15+ years of experience ensures efficient diagnosis and repair."
        },
        {
          question: "Do you use genuine Apple parts for MacBook repairs?",
          answer: "MacLap IT Care uses a combination of genuine Apple parts and high-quality OEM alternatives that meet Apple's specifications. We clearly disclose which type of parts we're using for each repair and offer both options when available, allowing you to choose based on your budget and preferences."
        },
        {
          question: "Can MacLap IT Care repair liquid damaged MacBooks?",
          answer: "Yes! MacLap IT Care specializes in liquid damage restoration using professional ultrasonic cleaning and component-level repairs. Our success rate is over 85% for liquid damage cases. We've successfully recovered many liquid-damaged MacBooks that other shops in Delhi NCR considered unrepairable."
        },
        {
          question: "Do you offer free MacBook diagnosis in Delhi NCR?",
          answer: "Absolutely! MacLap IT Care provides completely free diagnosis within 30 minutes for all MacBook and laptop issues across Delhi NCR. There are no consultation charges, and you'll receive a transparent repair estimate before any work begins. You're under no obligation to proceed."
        },
        {
          question: "Which MacBook models can you repair?",
          answer: "MacLap IT Care repairs all MacBook models from 2009 to 2024, including MacBook Air M1/M2/M3, MacBook Pro with Touch Bar, MacBook Pro M1/M2/M3 chips, and legacy Intel models. We maintain extensive inventory of parts for all generations."
        }
      ]
    },
    {
      title: "Warranty & Pricing",
      icon: Shield,
      gradient: "from-green-500 to-emerald-600",
      faqs: [
        {
          question: "What warranty does MacLap IT Care provide on MacBook repairs?",
          answer: "MacLap IT Care provides comprehensive warranty coverage: up to 3 months on screen replacements, 6 months on battery replacements, and 30-90 days on other repairs depending on the service. Our warranty covers both parts and labor for the specific issue addressed."
        },
        {
          question: "How much do MacBook repairs cost at MacLap IT Care?",
          answer: "MacLap IT Care offers transparent pricing: MacBook screen replacement starts from ₹3,499, battery replacement from ₹3,999, keyboard repair from ₹2,999, and logic board repair from ₹8,999. We provide up to 45% savings compared to Apple Store prices with no hidden charges."
        },
        {
          question: "Do you offer discounts on MacBook repairs?",
          answer: "Yes! MacLap IT Care offers 10% student discount with valid college ID, bulk discounts for corporate clients, and seasonal promotional offers. We also provide price matching - if you find a lower quote elsewhere for the same quality service, we'll match it."
        },
        {
          question: "What payment methods does MacLap IT Care accept?",
          answer: "MacLap IT Care accepts all major payment methods including cash, UPI (Google Pay, PhonePe, Paytm), debit/credit cards, and net banking. Payment is due after repair completion and your satisfaction with the service."
        },
        {
          question: "Can I get a repair cost estimate before visiting?",
          answer: "Absolutely! Call MacLap IT Care at 9211720790 or WhatsApp us with your MacBook model and issue description. We'll provide an accurate cost estimate based on our 15+ years of repair experience in Delhi NCR."
        }
      ]
    },
    {
      title: "Data Safety & Security",
      icon: HardDrive,
      gradient: "from-purple-500 to-indigo-600",
      faqs: [
        {
          question: "Is my data safe during MacBook repairs at MacLap IT Care?",
          answer: "Data safety is MacLap IT Care's top priority. We recommend backing up your data before any repair, though most hardware repairs don't affect stored data. Our technicians sign confidentiality agreements, and we use secure diagnostic procedures with 15+ years of trusted service."
        },
        {
          question: "Can MacLap IT Care recover data from damaged MacBooks?",
          answer: "Yes! MacLap IT Care offers professional data recovery services even for severely damaged devices. Our success rate is over 95% for mechanical failures and 85% for liquid damage cases. We can recover photos, documents, emails, and other important files."
        },
        {
          question: "Do I need to provide my MacBook password for repairs?",
          answer: "For most hardware repairs (screen, battery, keyboard), your password isn't needed. For software issues or logic board testing, MacLap IT Care may need limited access to test functionality. We maintain strict confidentiality and work with you to minimize access."
        },
        {
          question: "How does MacLap IT Care protect customer privacy?",
          answer: "MacLap IT Care follows strict privacy protocols: all technicians sign NDAs, we use secure workstations, customer data is never accessed unnecessarily, and all diagnostic procedures follow data protection guidelines established over our 15+ years of service."
        }
      ]
    },
    {
      title: "Service Areas & Process",
      icon: Smartphone,
      gradient: "from-orange-500 to-red-600",
      faqs: [
        {
          question: "Which areas does MacLap IT Care serve for MacBook repair?",
          answer: "MacLap IT Care serves all of Delhi NCR including Noida, Delhi, Gurgaon, Ghaziabad, Faridabad, and Greater Noida. Our main service center is in Noida Sector 121. We offer doorstep pickup and delivery service across these areas."
        },
        {
          question: "Does MacLap IT Care offer doorstep MacBook repair service?",
          answer: "Yes! MacLap IT Care provides doorstep pickup and delivery service across Delhi NCR. Our technician will collect your MacBook from your location, perform repairs at our service center, and deliver it back to you - all at no extra cost."
        },
        {
          question: "Can I track my MacBook repair status at MacLap IT Care?",
          answer: "Absolutely! MacLap IT Care provides regular updates via WhatsApp including photos of the diagnostic process and repair progress. You can also call us anytime at 9211720790 for real-time status updates throughout the repair process."
        },
        {
          question: "What if MacLap IT Care can't fix my MacBook?",
          answer: "MacLap IT Care follows a 'No Fix, No Fee' policy. If we cannot successfully repair your MacBook, you pay nothing for the diagnostic service. In rare cases where a repair fails within warranty, we'll re-repair it free or provide a full refund."
        },
        {
          question: "How do I schedule a MacBook repair with MacLap IT Care?",
          answer: "Schedule easily! Call MacLap IT Care at 9211720790, WhatsApp us, or visit our website. We'll arrange convenient pickup from your location in Delhi NCR or you can visit our Noida service center directly."
        }
      ]
    },
    {
      title: "Express & Emergency Services",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-600",
      faqs: [
        {
          question: "Does MacLap IT Care offer same-day MacBook repair?",
          answer: "Yes! MacLap IT Care offers same-day service for common MacBook issues like screen replacement, battery replacement, or keyboard repair for an additional ₹500. Most same-day repairs are completed within 2-4 hours depending on parts availability."
        },
        {
          question: "Can MacLap IT Care repair MacBooks during weekends?",
          answer: "MacLap IT Care offers emergency repair services during weekends and holidays for urgent MacBook cases. This premium service includes a ₹1,000 convenience charge but ensures your MacBook is repaired when you need it most. Advanced booking required."
        },
        {
          question: "What constitutes an emergency MacBook repair?",
          answer: "Emergency repairs at MacLap IT Care include critical business needs, student exam requirements, important presentations, or any situation where MacBook downtime severely impacts your work or studies. We prioritize these cases and often complete them within 2 hours."
        },
        {
          question: "Do you offer corporate MacBook repair services?",
          answer: "Yes! MacLap IT Care provides dedicated corporate services including bulk repair discounts, priority support, on-site visits for multiple devices, and flexible payment terms. Contact us for customized corporate MacBook repair packages."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              MacBook Repair FAQ
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              Get expert answers from Delhi NCR's most trusted MacBook repair specialists. 
              Over 15 years of experience serving 5,000+ satisfied customers.
            </p>
            
            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {quickFacts.map((fact, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                  <fact.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="font-bold text-lg">{fact.title}</div>
                  <div className="text-sm opacity-80">{fact.description}</div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href={`tel:+91${CONTACT_INFO.phone1}`}
                className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                onMouseEnter={() => setHoveredButton('call')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                  <Phone className={`h-6 w-6 transition-transform duration-300 ${hoveredButton === 'call' ? 'rotate-12' : ''}`} />
                  <span>Call: {CONTACT_INFO.phone1}</span>
                  {hoveredButton === 'call' && <ArrowRight className="h-5 w-5 animate-pulse" />}
                </div>
              </a>
              
              <a
                href={`https://wa.me/91${CONTACT_INFO.phone1}?text=Hi%2C%20I%20have%20MacBook%20repair%20questions`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                onMouseEnter={() => setHoveredButton('whatsapp')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                  <MessageCircle className={`h-6 w-6 transition-transform duration-300 ${hoveredButton === 'whatsapp' ? 'scale-110' : ''}`} />
                  <span>WhatsApp Expert</span>
                  {hoveredButton === 'whatsapp' && <ArrowRight className="h-5 w-5 animate-pulse" />}
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="mb-12 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${category.gradient} p-8`}>
                  <div className="flex items-center text-white">
                    <div className="bg-white/20 rounded-full p-3 mr-4">
                      <category.icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {category.title}
                    </h2>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <Accordion type="single" collapsible className="space-y-6">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                      >
                        <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group">
                          <span className="font-bold text-foreground pr-4 group-hover:text-blue-600 transition-colors duration-300">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <div className="text-muted-foreground leading-relaxed bg-blue-50/50 p-4 rounded-lg border-l-4 border-blue-400">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Still Have Questions?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Our MacBook repair experts at MacLap IT Care are here 24/7 to help with any questions about your device
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
            <a
              href={`tel:+91${CONTACT_INFO.phone1}`}
              className="group relative overflow-hidden bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-black px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredButton('cta-call')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-3">
                <Phone className={`h-7 w-7 transition-transform duration-300 ${hoveredButton === 'cta-call' ? 'rotate-12' : ''}`} />
                <span>Call Expert: {CONTACT_INFO.phone1}</span>
              </div>
            </a>
            
            <a
              href="/contact-laptop-repair-service-noida"
              className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-gray-900 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredButton('cta-contact')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <div className="relative flex items-center space-x-3">
                <MessageCircle className={`h-7 w-7 transition-transform duration-300 ${hoveredButton === 'cta-contact' ? 'scale-110' : ''}`} />
                <span>Get Free Quote</span>
                {hoveredButton === 'cta-contact' && <ArrowRight className="h-6 w-6 animate-pulse" />}
              </div>
            </a>
          </div>
          
          <div className="mt-12 text-lg opacity-80">
            <p>✓ Free diagnosis in 30 minutes  ✓ 15+ years expertise  ✓ 5,000+ happy customers</p>
          </div>
        </div>
      </section>
    </div>
  );
}