import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface FormSubmitServiceFormProps {
  initialData?: {
    name?: string;
    phone?: string;
    location?: string;
    deviceModel?: string;
    serviceType?: string;
    preferredDate?: string;
    issueDescription?: string;
  };
}

export default function FormSubmitServiceForm({ initialData }: FormSubmitServiceFormProps) {
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
          location: formData.get('location'),
          deviceModel: formData.get('deviceModel'),
          serviceType: formData.get('serviceType'),
          preferredDate: formData.get('preferredDate'),
          issueDescription: formData.get('issueDescription'),
          _subject: "New Service Request - MacLap IT Care",
          _captcha: "false"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Success!",
          description: "Your service request has been submitted. We'll contact you soon!",
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to submit service request. Please call us at 9211720790.",
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
            <h3 className="text-lg font-semibold text-green-600">Service Request Submitted!</h3>
            <p className="text-gray-600 mt-2">
              Thank you! We've received your service request and will contact you within 24 hours to schedule your repair.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="mt-4"
            >
              Submit Another Request
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book a Service</CardTitle>
        <CardDescription>
          Schedule your MacBook or laptop repair service
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-2">
                Location
              </label>
              <select 
                name="location" 
                defaultValue={initialData?.location || ""}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
                Preferred Date
              </label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                defaultValue={initialData?.preferredDate || ""}
                className="bg-white text-black border-gray-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="deviceModel" className="block text-sm font-medium mb-2">
                Device Model *
              </label>
              <select 
                name="deviceModel" 
                required
                defaultValue={initialData?.deviceModel || ""}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select device model</option>
                <option value="MacBook Pro 14-inch M3">MacBook Pro 14-inch M3</option>
                <option value="MacBook Pro 16-inch M3">MacBook Pro 16-inch M3</option>
                <option value="MacBook Air M2">MacBook Air M2</option>
                <option value="MacBook Air M1">MacBook Air M1</option>
                <option value="MacBook Pro Intel">MacBook Pro Intel</option>
                <option value="iMac 24-inch">iMac 24-inch</option>
                <option value="iMac 27-inch">iMac 27-inch</option>
                <option value="Mac Mini">Mac Mini</option>
                <option value="Gaming Laptop">Gaming Laptop</option>
                <option value="Surface Pro">Surface Pro</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
                Service Type *
              </label>
              <select 
                name="serviceType" 
                required
                defaultValue={initialData?.serviceType || ""}
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select service type</option>
                <option value="Screen Replacement">Screen Replacement</option>
                <option value="Battery Replacement">Battery Replacement</option>
                <option value="Keyboard Repair">Keyboard Repair</option>
                <option value="Logic Board Repair">Logic Board Repair</option>
                <option value="Trackpad Repair">Trackpad Repair</option>
                <option value="Touchbar Replacement">Touchbar Replacement</option>
                <option value="General Diagnosis">General Diagnosis</option>
                <option value="Data Recovery">Data Recovery</option>
                <option value="Complete Overhaul">Complete Overhaul</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="issueDescription" className="block text-sm font-medium mb-2">
              Issue Description *
            </label>
            <Textarea
              id="issueDescription"
              name="issueDescription"
              required
              defaultValue={initialData?.issueDescription || ""}
              placeholder="Please describe the issue with your device in detail..."
              className="bg-white text-black border-gray-300"
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            {isSubmitting ? "Submitting..." : "Book Service"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}