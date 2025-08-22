import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

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
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-600">Thank You!</h3>
            <p className="text-gray-600 mt-2">
              Your message has been sent successfully. We'll get back to you soon.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="mt-4"
            >
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>
          Get a free quote for your MacBook or laptop repair
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                defaultValue={initialData?.name || ""}
                placeholder="Enter your name"
                className="bg-white text-black border-gray-300"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                defaultValue={initialData?.phone || ""}
                placeholder="Enter your phone number"
                className="bg-white text-black border-gray-300"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email (Optional)
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black border-gray-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-2">
                Location
              </label>
              <select 
                name="location" 
                defaultValue={initialData?.location || ""}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select location</option>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="device" className="block text-sm font-medium mb-2">
                Device Type
              </label>
              <select 
                name="device" 
                defaultValue={initialData?.device || ""}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select device</option>
                <option value="MacBook">MacBook</option>
                <option value="MacBook Pro">MacBook Pro</option>
                <option value="MacBook Air">MacBook Air</option>
                <option value="iMac">iMac</option>
                <option value="Mac Mini">Mac Mini</option>
                <option value="Gaming Laptop">Gaming Laptop</option>
                <option value="Surface Pro">Surface Pro</option>
                <option value="Other Laptop">Other Laptop</option>
              </select>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">
                Service Needed
              </label>
              <select 
                name="service" 
                defaultValue={initialData?.service || ""}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select service</option>
                <option value="Screen Repair">Screen Repair</option>
                <option value="Battery Replacement">Battery Replacement</option>
                <option value="Keyboard Repair">Keyboard Repair</option>
                <option value="Logic Board Repair">Logic Board Repair</option>
                <option value="Trackpad Repair">Trackpad Repair</option>
                <option value="Touchbar Replacement">Touchbar Replacement</option>
                <option value="General Repair">General Repair</option>
                <option value="Diagnosis">Diagnosis</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message (Optional)
            </label>
            <Textarea
              id="message"
              name="message"
              defaultValue={initialData?.message || ""}
              placeholder="Describe your issue or requirements..."
              className="bg-white text-black border-gray-300"
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}