import { Award, Tag, Shield, UserCheck, Apple, Building } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    { title: "ISO Certified", icon: Tag },
    { title: "Govt. Recognized", icon: Award },
    { title: "Up to 1 Year Warranty", icon: Shield },
    { title: "Expert Technicians", icon: UserCheck },
    { title: "Mac Specialists", icon: Apple },
    { title: "MSME Certified", icon: Building }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Certifications & Guarantees</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Certified and trusted by industry standards
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title} 
              className={`text-center fade-in-up stagger-${index + 1}`}
            >
              <div className="bg-white p-4 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow">
                <cert.icon className="h-8 w-8 text-primary mx-auto" />
              </div>
              <p className="font-semibold text-foreground text-sm">{cert.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
