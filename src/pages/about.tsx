import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, MapPin, Clock, Shield, Star, Phone, Wrench, Users, Target, Trophy, Zap, Heart } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About MacLap IT Care - 15+ Years MacBook Repair Excellence | Trusted Since 2009";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "About MacLap IT Care - Over 15 years of laptop and MacBook repair excellence across Delhi NCR. Started in Delhi 2009, now Noida-based Mac experts with 5,000+ satisfied customers, certified technicians, and genuine parts.");
    }
  }, []);

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "5,000+", label: "Happy Customers" },
    { number: "4", label: "Major Cities Served" },
    { number: "98%", label: "Customer Satisfaction" }
  ];

  const services = [
    { title: "MacBook Repair", description: "Complete MacBook repair services for all models from 2009 to 2024" },
    { title: "Logic Board Repair", description: "Advanced motherboard and logic board repair with micro-soldering expertise" },
    { title: "Screen Replacement", description: "Genuine LCD/LED screen replacement for all laptop brands" },
    { title: "Battery Replacement", description: "Original battery replacement with extended warranty coverage" },
    { title: "Data Recovery", description: "Professional data recovery from damaged hard drives and SSDs" },
    { title: "Hardware Upgrades", description: "RAM, SSD, and component upgrades for enhanced performance" }
  ];

  const achievements = [
    {
      title: "Industry Pioneer",
      description: "Among the first specialized MacBook repair centers in Delhi NCR, established when Apple products were just gaining popularity in India.",
      icon: Trophy
    },
    {
      title: "Technical Mastery",
      description: "Our technicians have mastered repair techniques for over 200+ laptop models from Apple, Dell, HP, Lenovo, ASUS, and more.",
      icon: Wrench
    },
    {
      title: "Customer Trust",
      description: "Built lasting relationships with customers through transparent pricing, reliable service, and genuine care for their technology needs.",
      icon: Heart
    },
    {
      title: "Innovation Leader",
      description: "Continuously investing in latest diagnostic tools, repair equipment, and training to stay ahead of technology evolution.",
      icon: Zap
    }
  ];

  const expertise = [
    "MacBook Pro (2009-2024) - All generations including M1, M2, M3 chips",
    "MacBook Air (2010-2024) - Complete model range coverage",
    "iMac Desktop Repair - 21.5\" and 27\" models, including Retina displays", 
    "Mac Mini Repair - All generations from 2009 to latest M-series",
    "Corporate Laptop Services - Dell Latitude, HP EliteBook, Lenovo ThinkPad",
    "Gaming Laptop Repair - ASUS ROG, MSI Gaming, Dell Alienware series",
    "Ultrabook Services - Microsoft Surface, HP Spectre, Dell XPS series",
    "Legacy System Support - Older models with discontinued parts sourcing"
  ];

  const qualityStandards = [
    {
      title: "Genuine Parts Guarantee",
      description: "We source authentic parts directly from authorized distributors and maintain strict quality control standards. Every component comes with manufacturer warranty and quality certification.",
      icon: Shield
    },
    {
      title: "Certified Technicians",
      description: "Our repair specialists undergo continuous training and certification programs. They possess deep knowledge of hardware architecture, micro-soldering techniques, and advanced diagnostics.",
      icon: Award
    },
    {
      title: "Advanced Diagnostics",
      description: "State-of-the-art diagnostic equipment helps us identify root causes quickly and accurately. We provide detailed reports before any repair work begins.",
      icon: Target
    },
    {
      title: "Quality Assurance",
      description: "Every repaired device undergoes comprehensive testing including stress tests, thermal monitoring, and performance benchmarks before delivery to customers.",
      icon: Star
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About MacLap IT Care
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Over 15 years of dedicated service excellence in laptop and MacBook repair across Delhi NCR. 
              Since 2009, we've evolved from laptop specialists to become Delhi NCR's leading Mac repair experts.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-accent" />
                <span>Trusted Since 2009</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-accent" />
                <span>5,000+ Repairs Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-accent" />
                <span>98% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-primary mb-3">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Legacy Story */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Legacy of Excellence</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                MacLap IT Care was founded in 2009 in Delhi by Mr. Puneet Jain and Sonu Yadav with a revolutionary vision: to provide world-class laptop repair services that match international standards while remaining accessible to Indian consumers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground mb-4">The Beginning (2009)</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  When laptops were becoming mainstream in India, we recognized the urgent need for specialized repair services. Traditional computer repair shops lacked the expertise and tools required for these sophisticated machines. Our founders, Mr. Puneet Jain and Sonu Yadav, with extensive experience in electronics engineering and technology services, established MacLap IT Care in Delhi to bridge this critical gap, starting with comprehensive laptop repair services.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Initially focusing on all laptop brands, we later shifted our operations to Noida for better accessibility. As MacBooks gained popularity, we expanded our expertise to become specialists in Apple products. Today, we're recognized as Delhi NCR's leading Mac repair experts while continuing to serve all laptop brands with the same dedication.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-2xl font-bold text-foreground mb-6">Milestones in Our Journey</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full p-1 mt-1">
                      <div className="w-2 h-2"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">2009</div>
                      <div className="text-muted-foreground">Founded in Delhi with laptop repair specialization</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full p-1 mt-1">
                      <div className="w-2 h-2"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">2012</div>
                      <div className="text-muted-foreground">Shifted operations to Noida and expanded MacBook services</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full p-1 mt-1">
                      <div className="w-2 h-2"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">2015</div>
                      <div className="text-muted-foreground">Launched doorstep service across Delhi NCR</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full p-1 mt-1">
                      <div className="w-2 h-2"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">2018</div>
                      <div className="text-muted-foreground">Became recognized Mac repair experts in Delhi NCR</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full p-1 mt-1">
                      <div className="w-2 h-2"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">2021</div>
                      <div className="text-muted-foreground">Introduced M1 MacBook repair expertise</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary text-primary-foreground rounded-full p-1 mt-1">
                      <div className="w-2 h-2"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">2024</div>
                      <div className="text-muted-foreground">Achieved 5,000+ satisfied customers milestone</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-10 rounded-2xl">
              <h3 className="text-3xl font-bold text-foreground mb-6 text-center">What MacLap IT Care Does</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={service.title} className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-bold text-foreground mb-3">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Key Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Over 15 years, we've built a reputation that extends far beyond repair services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={achievement.title} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-4">
                      <achievement.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">{achievement.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Technical Expertise</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive knowledge across all major laptop brands and models
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertise.map((skill, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Quality Standards</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every aspect of our service is designed to exceed industry standards and customer expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {qualityStandards.map((standard, index) => (
              <Card key={standard.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 rounded-full p-4">
                      <standard.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">{standard.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{standard.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Delhi NCR Coverage</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive doorstep service across the National Capital Region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { city: "Noida", areas: "All sectors including Greater Noida, Noida Extension, and surrounding areas" },
              { city: "Delhi", areas: "Central Delhi, South Delhi, North Delhi, East Delhi, West Delhi coverage" },
              { city: "Gurgaon", areas: "DLF phases, Cyber City, Golf Course Road, Sohna Road, and Manesar" },
              { city: "Ghaziabad", areas: "Vaishali, Indirapuram, Kaushambi, Raj Nagar, and adjoining regions" }
            ].map((location) => (
              <Card key={location.city} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full p-4 mb-6 mx-auto w-16 h-16 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{location.city}</h3>
                  <p className="text-muted-foreground">{location.areas}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="hover:shadow-xl transition-all">
                <CardContent className="p-10">
                  <div className="bg-primary/10 rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    To provide world-class laptop and MacBook repair services that combine technical excellence with genuine customer care, making advanced technology accessible and reliable for everyone in Delhi NCR.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe that every customer deserves transparent pricing, honest diagnostics, and repairs that exceed manufacturer standards, delivered with the convenience of doorstep service.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all">
                <CardContent className="p-10">
                  <div className="bg-accent/10 rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                    <Star className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">Our Vision</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    To become India's most trusted and preferred laptop repair service provider, recognized for innovation, reliability, and customer satisfaction across all major cities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We envision a future where technology repairs are stress-free, transparent, and accessible to all, supported by cutting-edge diagnostic capabilities and unmatched technical expertise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience 15+ Years of Excellence</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join over 5,000 satisfied customers who have trusted MacLap IT Care for their laptop repair needs. 
            Discover why we're Delhi NCR's preferred choice for MacBook and laptop services.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="tel:+919211720790"
              className="flex items-center space-x-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg transition-colors font-semibold text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>Call: +91 92117 20790</span>
            </a>
            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6" />
              <span className="text-lg">Mon-Sat: 9 AM - 8 PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}