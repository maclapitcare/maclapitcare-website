import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

interface ServiceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

export default function ServiceBookingModal({ isOpen, onClose, serviceName }: ServiceBookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    device: serviceName || "",
    service: "Screen Replacement",
    location: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      alert("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const submitData = {
        ...formData,
        _subject: `New Service Request - ${serviceName} - MacLap IT Care`,
        _captcha: "false"
      };

      const response = await fetch('https://formsubmit.co/ajax/maclapitcare@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submitData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit request');
      }
      
      alert("Thank you! We'll contact you shortly to schedule your service.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        device: serviceName || "",
        service: "Screen Replacement",
        location: "",
        message: ""
      });
      onClose();
    } catch (error) {
      console.error('Form submission error:', error);
      alert("Sorry, there was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 flex justify-between items-center">
            Book Service
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Device Model</label>
            <Input
              value={formData.device}
              onChange={(e) => handleInputChange("device", e.target.value)}
              placeholder="Your MacBook model"
              className="text-black bg-white border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
            <Select 
              value={formData.service} 
              onValueChange={(value) => handleInputChange("service", value)}
            >
              <SelectTrigger className="text-black bg-white border-gray-300">
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Screen Replacement">Screen Replacement</SelectItem>
                <SelectItem value="Battery Replacement">Battery Replacement</SelectItem>
                <SelectItem value="Keyboard Replacement">Keyboard Replacement</SelectItem>
                <SelectItem value="Logic Board Repair">Logic Board Repair</SelectItem>
                <SelectItem value="Trackpad Replacement">Trackpad Replacement</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
            <Input
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Your full name"
              className="text-black bg-white border-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
            <Input
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              type="tel"
              placeholder="Your phone number"
              className="text-black bg-white border-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <Input
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              type="email"
              placeholder="Your email address"
              className="text-black bg-white border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <Input
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              placeholder="Your location in Delhi NCR"
              className="text-black bg-white border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={3}
              placeholder="Describe the issue or any specific requirements"
              className="text-black bg-white border-gray-300"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-600 text-white hover:bg-blue-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Booking..." : "Book Service Now"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}