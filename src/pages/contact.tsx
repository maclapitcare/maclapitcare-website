import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield, Award, Users, CheckCircle, Star, Navigation, Building2, Castle, Landmark, Home } from "lucide-react";
import FormSubmitContactForm from "@/components/forms/formsubmit-contact-form";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact MacBook Laptop Repair Experts | Shop 75 Sector 121 Noida | Call 9211720790 | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contact Delhi NCR's top MacBook laptop repair experts at Maclap IT Care. Shop 75 Sector 121 Noida. Call 9211720790 | 8750160550. Free doorstep service, expert technicians, genuine parts.");
    }

    // Pre-fill form if URL parameters are present
    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get('location');
    const service = urlParams.get('service');
    const phone = urlParams.get('phone');
    
    if (location || service || phone) {
      // Form will be pre-filled through initialData prop
    }
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Primary Contact",
      primary: "9211720790",
      secondary: "Main service line (10:30 AM - 8:30 PM)",
      action: "tel:+919211720790",
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Alternative Number",
      primary: "8750160550",
      secondary: "Secondary line (10:30 AM - 8:30 PM)",
      action: "tel:+918750160550",
      color: "bg-green-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      primary: "9211720790",
      secondary: "Instant chat & media sharing",
      action: "https://wa.me/919211720790?text=Hi%2C%20I%20need%20MacBook%2FLaptop%20repair%20service",
      color: "bg-green-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      primary: "Maclapitcare@gmail.com",
      secondary: "Response within 2-4 hours",
      action: "mailto:Maclapitcare@gmail.com",
      color: "bg-red-500"
    }
  ];

  const serviceAreas = [
    {
      city: "Delhi",
      icon: Landmark,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-500"
    },
    {
      city: "Noida", 
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500"
    },
    {
      city: "Gurgaon",
      icon: Castle,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500"
    },
    {
      city: "Ghaziabad",
      icon: Home, 
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500"
    }
  ];

  const faqs = [
    {
      question: "Do you provide free pickup and delivery?",
      answer: "Yes, we provide completely free pickup and delivery services across Delhi NCR for all repair services."
    },
    {
      question: "How long does a typical repair take?",
      answer: "Most repairs are completed within 24-48 hours. Complex repairs like logic board issues may take 3-5 days."
    },
    {
      question: "Do you use genuine parts?",
      answer: "Yes, we only use genuine and high-quality replacement parts. All parts come with warranty."
    },
    {
      question: "What warranty do you provide?",
      answer: "We provide up to 1 year warranty on repairs and replacement parts, depending on the service."
    },
    {
      question: "Do you repair water-damaged devices?",
      answer: "Yes, we specialize in water damage recovery with advanced techniques and have a high success rate."
    }
  ];



  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                <Phone className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Contact Delhi NCR's Top<br />
              <span className="text-blue-200">MacBook Repair Experts</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Get instant support from certified technicians. Free doorstep service, 
              genuine parts, and up to 1-year warranty on all repairs.
            </p>
            
            {/* Quick Contact Buttons */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
              <a
                href="tel:+919211720790"
                className="flex items-center space-x-3 text-white font-semibold relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl border-0 px-8 py-4 rounded-lg text-lg"
                style={{
                  background: 'linear-gradient(90deg, hsl(142, 76%, 36%) 30%, hsl(142, 76%, 46%) 50%, hsl(142, 76%, 36%) 70%)',
                  backgroundSize: '300% 100%',
                  animation: 'autoShine 6s infinite'
                }}
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:w-full transition-all duration-500 transform skew-x-12"></div>
                <Phone className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10 text-white font-semibold">Call: 9211720790</span>
              </a>
              <a
                href="https://wa.me/919211720790?text=Hi%2C%20I%20need%20MacBook%2FLaptop%20repair%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white font-semibold relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl border-0 px-8 py-4 rounded-lg text-lg"
                style={{
                  background: 'linear-gradient(90deg, hsl(145, 63%, 42%) 30%, hsl(145, 80%, 50%) 50%, hsl(145, 63%, 42%) 70%)',
                  backgroundSize: '300% 100%',
                  animation: 'autoShine 8s infinite 1s'
                }}
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:w-full transition-all duration-500 transform skew-x-12"></div>
                <MessageCircle className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10 text-white font-semibold">WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Shield className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Trusted Service</h3>
                  <p className="text-sm opacity-90">5000+ Happy Customers</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Award className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Expert Technicians</h3>
                  <p className="text-sm opacity-90">Certified Professionals</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <CheckCircle className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">Free Doorstep</h3>
                  <p className="text-sm opacity-90">Pickup & Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods & Business Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach our expert team for immediate assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={contact.title} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`${contact.color} text-white rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center`}>
                    <contact.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{contact.title}</h3>
                  {contact.action ? (
                    <a 
                      href={contact.action}
                      target={contact.action.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="block text-primary font-semibold mb-1 hover:underline transition-colors"
                    >
                      {contact.primary}
                    </a>
                  ) : (
                    <p className="text-primary font-semibold mb-1">{contact.primary}</p>
                  )}
                  <p className="text-muted-foreground text-sm">{contact.secondary}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Business Information Card */}
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center space-x-2">
                <MapPin className="h-6 w-6 text-primary" />
                <span>Visit Our Repair Center</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    Shop 75, 1st Floor<br />
                    Opposite Cleo County Society<br />
                    Sector 121 Noida 201301
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Working Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 10:30 AM - 8:30 PM<br />
                    Sunday: Emergency calls only<br />
                    24/7 WhatsApp Support
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Coverage</h4>
                  <p className="text-muted-foreground">
                    Free doorstep service in:<br />
                    Delhi NCR • Noida • Gurgaon<br />
                    Greater Noida • Ghaziabad
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-xl text-muted-foreground">
                Get a quick response for inquiries, repair estimates, or book your free diagnosis
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <FormSubmitContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Service Areas</h2>
            <p className="text-xl text-muted-foreground">
              We provide doorstep repair services across Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {serviceAreas.map((area) => (
              <Card key={area.city} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0">
                <CardContent className="p-6">
                  <div className={`${area.bgColor} text-white rounded-2xl p-6 mb-4 mx-auto w-20 h-20 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    {<area.icon className="h-10 w-10" />}
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">{area.city}</h3>
                  <p className="text-sm text-muted-foreground">Free Pickup & Delivery</p>
                  <div className="mt-3 text-xs text-green-600 font-medium">✓ Same Day Service</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Phone className="h-12 w-12 animate-pulse" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Repair Service</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Urgent MacBook or laptop issue? Get immediate assistance from our expert technicians.
              Same-day service available for critical repairs.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href="tel:+919211720790"
                className="flex items-center space-x-3 bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors"
              >
                <Phone className="h-6 w-6" />
                <span>Emergency: 9211720790</span>
              </a>
              <a
                href="https://wa.me/919211720790?text=EMERGENCY%20-%20I%20need%20urgent%20MacBook%2FLaptop%20repair"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
                <span>WhatsApp Emergency</span>
              </a>
            </div>
            <p className="text-sm mt-6 opacity-90">
              * Emergency service charges may apply for same-day repairs and weekend services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Summary & Social */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Stay Connected</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm opacity-90">+91 92117 20790</p>
                <p className="text-sm opacity-90">+91 87501 60550</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-sm opacity-90">Maclapitcare@gmail.com</p>
                <p className="text-sm opacity-90">Quick response guaranteed</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Follow Us</h3>
                <p className="text-sm opacity-90">@maclapitcare</p>
                <p className="text-sm opacity-90">Latest updates & tips</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2 font-semibold">4.9/5 Rating</span>
              </div>
              <p className="text-lg">Trusted by 5000+ satisfied customers across Delhi NCR</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
