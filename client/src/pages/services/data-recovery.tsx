import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  HardDrive, 
  Clock, 
  Shield, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  AlertTriangle,
  Database,
  Folder,
  FileText
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function DataRecovery() {
  useEffect(() => {
    document.title = "Laptop Data Recovery Service Noida | SSD HDD Data Recovery ₹4999+ | Maclap IT Care";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional laptop data recovery service Noida from ₹4999+. Recover lost files from SSD, HDD, MacBook, Dell, HP. 95% success rate, liquid damage recovery. Call 9211720790");
    }
  }, []);

  const dataLossScenarios = [
    "Accidental file deletion",
    "Hard drive/SSD failure",
    "Liquid damage to storage",
    "Corrupted operating system", 
    "Virus or malware attack",
    "Partition table corruption",
    "MacBook won't boot",
    "Physical drive damage",
    "Formatted drive recovery",
    "Failed firmware updates"
  ];

  const recoveryServices = [
    {
      type: "SSD Data Recovery",
      description: "Recovery from MacBook SSD and external SSDs",
      price: "₹4,999+",
      success: "95%",
      time: "1-3 days"
    },
    {
      type: "HDD Data Recovery", 
      description: "Traditional hard drive recovery with clean room",
      price: "₹3,999+",
      success: "90%",
      time: "2-5 days"
    },
    {
      type: "Liquid Damage Recovery",
      description: "Data recovery from liquid-damaged devices",
      price: "₹7,999+",
      success: "80%",
      time: "3-7 days"
    },
    {
      type: "RAID Data Recovery",
      description: "Complex RAID and NAS system recovery",
      price: "₹12,999+", 
      success: "85%",
      time: "5-10 days"
    }
  ];

  const recoveryProcess = [
    {
      step: "1",
      title: "Free Evaluation",
      description: "Complete assessment of data loss situation and storage health"
    },
    {
      step: "2", 
      title: "Recovery Quote",
      description: "Detailed recovery plan with transparent pricing"
    },
    {
      step: "3",
      title: "Data Extraction", 
      description: "Professional recovery using specialized tools and clean room"
    },
    {
      step: "4",
      title: "Data Verification",
      description: "Complete verification and secure delivery of recovered files"
    }
  ];

  const storageTypes = [
    { type: "MacBook SSD", models: ["PCIe SSD", "SATA SSD", "Soldered SSD"] },
    { type: "External Drives", models: ["USB Drives", "External HDD", "Portable SSD"] },
    { type: "Memory Cards", models: ["SD Cards", "MicroSD", "CF Cards"] },
    { type: "Legacy Storage", models: ["IDE/PATA", "SCSI Drives", "Floppy Disks"] }
  ];

  const fileTypes = [
    "Documents (PDF, DOC, XLS, PPT)",
    "Photos (JPG, PNG, RAW, HEIC)",
    "Videos (MP4, MOV, AVI, MKV)", 
    "Audio (MP3, WAV, FLAC, AAC)",
    "Archives (ZIP, RAR, 7Z, TAR)",
    "Database Files (SQL, DB, MDB)",
    "Email Files (PST, EML, MBOX)",
    "System Files and Applications"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 text-white mb-4 px-4 py-1">
              Data Recovery Experts
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MacBook Data Recovery Services in Noida
            </h1>
            <p className="text-xl mb-8">
              Professional data recovery from damaged MacBooks, SSDs, and storage devices. 
              Advanced recovery techniques with 95% success rate in Sector 121 Noida.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone1}`}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {CONTACT_INFO.phone1}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-blue-900 hover:bg-gray-100 border-white"
                onClick={() => window.location.href = '/contact'}
              >
                Free Data Recovery Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Loss Scenarios */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Data Loss Situations We Handle</h2>
            <p className="text-xl text-muted-foreground">
              Professional recovery for all types of data loss scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {dataLossScenarios.map((scenario, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <p className="text-foreground">{scenario}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Services & Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Data Recovery Services</h2>
            <p className="text-xl text-muted-foreground">
              Specialized recovery for different storage types and damage levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {recoveryServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500/10 rounded-lg p-3">
                      <HardDrive className="h-8 w-8 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.type}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-primary">{service.price}</div>
                          <div className="text-xs text-muted-foreground">Starting Price</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-600">{service.success}</div>
                          <div className="text-xs text-muted-foreground">Success Rate</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-blue-600">{service.time}</div>
                          <div className="text-xs text-muted-foreground">Recovery Time</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Storage Devices We Recover</h2>
            <p className="text-xl text-muted-foreground">
              Professional recovery for all storage technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storageTypes.map((storage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <HardDrive className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-4 text-center">{storage.type}</h3>
                  <div className="space-y-2">
                    {storage.models.map((model, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{model}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* File Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">File Types We Recover</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive recovery for all file formats and types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {fileTypes.map((fileType, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="text-foreground text-sm">{fileType}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Data Recovery Process</h2>
            <p className="text-xl text-muted-foreground">
              Professional methodology with secure handling of your data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recoveryProcess.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Guarantees */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Data Recovery?</h2>
            <p className="text-xl text-muted-foreground">
              Advanced recovery techniques with confidentiality guarantee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Clean Room Facility</h3>
                <p className="text-muted-foreground">
                  Class 100 clean room for physical drive recovery operations
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Data Confidentiality</h3>
                <p className="text-muted-foreground">
                  Strict confidentiality and secure data handling procedures
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Emergency Service</h3>
                <p className="text-muted-foreground">
                  24/7 emergency data recovery for critical business data
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Folder className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">No Data No Fee</h3>
                <p className="text-muted-foreground">
                  You only pay if we successfully recover your data
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Free Evaluation</h3>
                <p className="text-muted-foreground">
                  Complimentary assessment and recovery possibility analysis
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <HardDrive className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Advanced Tools</h3>
                <p className="text-muted-foreground">
                  Latest recovery software and hardware tools for best results
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Recovery */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency Data Recovery</h2>
          <p className="text-xl mb-8">
            Critical business data lost? We offer 24/7 emergency recovery services with priority handling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div>Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">6-12 Hrs</div>
              <div>Rush Recovery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div>Success Rate</div>
            </div>
          </div>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Emergency Recovery Hotline
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Lost Important Data? We Can Help!</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Professional data recovery in Noida. Free evaluation with no obligation to proceed.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href={`tel:${CONTACT_INFO.phone1}`}
              className="flex items-center space-x-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Phone className="h-6 w-6" />
              <span>{CONTACT_INFO.phone1}</span>
            </a>
            <a
              href={`https://wa.me/92${CONTACT_INFO.phone1.replace(/[^0-9]/g, '').slice(2)}`}
              className="flex items-center space-x-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}