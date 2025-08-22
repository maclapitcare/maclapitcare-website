import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, User, Phone, Mail, MapPin, Laptop, MessageSquare, CheckCircle, Loader2, Wrench } from "lucide-react";

interface FormSubmitContactFormProps {
  initialData?: {
    name?: string;
    phone?: string;
    location?: string;
    device?: string;
    service?: string;
    message?: string;
  };
}

export default function FormSubmitContactForm({ initialData }: FormSubmitContactFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FormSubmit.co email endpoint - update with your business email
  const FORM_EMAIL = "maclapitcare@gmail.com"; // Update this with your actual email

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          location: formData.get('location'),
          device: formData.get('device'),
          service: formData.get('service'),
          message: formData.get('message'),
          _subject: "New Contact Form Submission - MacLap IT Care",
          _captcha: "false"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Success!",
          description: "Thank you for your inquiry! We'll contact you shortly.",
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try calling us directly at 9211720790.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 max-w-md mx-auto shadow-lg border border-green-200">
          <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-3">Message Sent Successfully!</h3>
          <p className="text-green-600 mb-6 leading-relaxed">
            Thank you for contacting MacLap IT Care! Our expert team will review your request and get back to you within 2-4 hours.
          </p>
          <div className="bg-white rounded-lg p-4 mb-6 border border-green-200">
            <p className="text-sm text-green-700">
              <strong>What happens next?</strong><br />
              • Our technician will contact you shortly<br />
              • Free diagnosis at your doorstep<br />
              • Transparent pricing before work begins
            </p>
          </div>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Send className="h-4 w-4 mr-2" />
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl border border-blue-100">
      <div className="text-center mb-8">
        <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
          <MessageSquare className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Expert Help Now</h3>
        <p className="text-gray-600">
          Fill out the form below for a free diagnosis and repair quote
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <User className="h-4 w-4 mr-2 text-blue-500" />
                Your Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                defaultValue={initialData?.name || ""}
                placeholder="Enter your full name"
                className="bg-white text-gray-800 border-2 border-gray-200 focus:border-blue-500 rounded-lg px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md focus:shadow-md"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Phone className="h-4 w-4 mr-2 text-blue-500" />
                Phone Number *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                defaultValue={initialData?.phone || ""}
                placeholder="+91 XXXXX XXXXX"
                className="bg-white text-gray-800 border-2 border-gray-200 focus:border-blue-500 rounded-lg px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md focus:shadow-md"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
              <Mail className="h-4 w-4 mr-2 text-blue-500" />
              Email Address (Optional)
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              className="bg-white text-gray-800 border-2 border-gray-200 focus:border-blue-500 rounded-lg px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md focus:shadow-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="location" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                Your Location
              </label>
              <select 
                name="location" 
                defaultValue={initialData?.location || ""}
                className="w-full px-4 py-3 bg-white text-gray-800 border-2 border-gray-200 focus:border-blue-500 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md focus:shadow-md focus:outline-none"
              >
                <option value="">Select your location</option>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Greater Noida">Greater Noida</option>
                <option value="Other Delhi NCR">Other Delhi NCR</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="device" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                <Laptop className="h-4 w-4 mr-2 text-blue-500" />
                Device Type
              </label>
              <select 
                name="device" 
                defaultValue={initialData?.device || ""}
                className="w-full px-4 py-3 bg-white text-gray-800 border-2 border-gray-200 focus:border-blue-500 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md focus:shadow-md focus:outline-none"
              >
                <option value="">Select your device</option>
                <option value="MacBook Pro">MacBook Pro</option>
                <option value="MacBook Air">MacBook Air</option>
                <option value="iMac">iMac</option>
                <option value="Mac Mini">Mac Mini</option>
                <option value="Gaming Laptop">Gaming Laptop</option>
                <option value="Surface Pro/Book">Surface Pro/Book</option>
                <option value="Windows Laptop">Windows Laptop</option>
                <option value="Other">Other Device</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
              <Wrench className="h-4 w-4 mr-2 text-blue-500" />
              Service Required (Optional)
            </label>
            <select 
              name="service" 
              defaultValue={initialData?.service || ""}
              className="w-full px-4 py-3 bg-white text-gray-800 border-2 border-gray-200 focus:border-blue-500 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <option value="">What do you need help with?</option>
              <option value="Screen Repair/Replacement">Screen Repair/Replacement</option>
              <option value="Battery Replacement">Battery Replacement</option>
              <option value="Keyboard Repair">Keyboard Repair</option>
              <option value="Logic Board/Motherboard Repair">Logic Board/Motherboard Repair</option>
              <option value="Trackpad Repair">Trackpad Repair</option>
              <option value="Touch Bar Replacement">Touch Bar Replacement</option>
              <option value="Water Damage Recovery">Water Damage Recovery</option>
              <option value="Data Recovery">Data Recovery</option>
              <option value="General Diagnosis">General Diagnosis</option>
              <option value="Other Issue">Other Issue</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
              <MessageSquare className="h-4 w-4 mr-2 text-blue-500" />
              Additional Details (Optional)
            </label>
            <Textarea
              id="message"
              name="message"
              defaultValue={initialData?.message || ""}
              placeholder="Describe the problem or specific requirements you have..."
              className="bg-white text-gray-800 border-2 border-gray-200 focus:border-blue-500 rounded-lg px-4 py-3 shadow-sm transition-all duration-300 hover:shadow-md focus:shadow-md resize-none"
              rows={4}
            />
          </div>

          {/* Trust Indicators */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                <span>Free Diagnosis</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                <span>Expert Technicians</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                <span>Same Day Service</span>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <div className="flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  Submitting Request...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Send My Request
                </>
              )}
            </div>
          </Button>
        </form>
      
      {/* Contact Info Footer */}
      <div className="mt-6 pt-6 border-t border-blue-200">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3">
            Prefer to call? Our experts are ready to help!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="tel:+919211720790"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>9211720790</span>
            </a>
            <a
              href="https://wa.me/919211720790?text=Hi%2C%20I%20need%20MacBook%2FLaptop%20repair%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}