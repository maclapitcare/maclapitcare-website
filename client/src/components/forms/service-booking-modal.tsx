import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Phone, MessageCircle, CheckCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  location: z.string().min(1, "Please select your location"),
  otherLocation: z.string().optional(),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  device: z.string().min(1, "Please select your device type"),
  otherDevice: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your issue")
}).refine((data) => {
  if (data.location === "Other" && !data.otherLocation) {
    return false;
  }
  if (data.device === "Other" && !data.otherDevice) {
    return false;
  }
  return true;
}, {
  message: "Please specify the details when selecting 'Other'",
  path: ["otherLocation"]
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface ServiceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export default function ServiceBookingModal({ isOpen, onClose, serviceName }: ServiceBookingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      location: "",
      mobile: "",
      device: serviceName || "",
      message: "",
      otherLocation: "",
      otherDevice: ""
    }
  });

  const submitBooking = useMutation({
    mutationFn: async (data: BookingFormData) => {
      // Map form data to API schema
      const apiData = {
        name: data.name,
        phone: data.mobile,
        location: data.location === "Other" ? data.otherLocation : data.location,
        deviceModel: data.device === "Other" ? data.otherDevice : data.device,
        serviceType: "Device Repair",
        issueDescription: data.message,
      };

      try {
        return await apiRequest("POST", "/api/service-booking", apiData);
      } catch (error) {
        // Fallback: Direct WhatsApp message
        const message = `New Service Request:
Name: ${apiData.name}
Phone: ${apiData.phone}
Location: ${apiData.location}
Device: ${apiData.deviceModel}
Service: ${apiData.serviceType}
Issue: ${apiData.issueDescription}`;
        
        const whatsappUrl = `https://wa.me/919999878398?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        // Return success to show confirmation
        return { success: true, fallback: true };
      }
    },
    onSuccess: () => {
      setIsSubmitted(true);
      reset();
    },
    onError: (error) => {
      console.error('Error submitting booking:', error);
      alert('Failed to submit request. Please try again or call us directly.');
    }
  });

  const onSubmit = (data: BookingFormData) => {
    submitBooking.mutate(data);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    reset();
    onClose();
  };

  const deviceOptions = [
    "MacBook Pro",
    "MacBook Air", 
    "iMac",
    "Mac Mini",
    "Microsoft Surface Pro",
    "Microsoft Surface Laptop",
    "Microsoft Surface Book",
    "Gaming Laptop (ASUS ROG)",
    "Gaming Laptop (MSI)",
    "Gaming Laptop (Alienware)",
    "Dell Laptop",
    "HP Laptop", 
    "Lenovo Laptop",
    "Acer Laptop",
    "Other"
  ];

  const locationOptions = [
    "Delhi",
    "Noida", 
    "Gurgaon",
    "Ghaziabad",
    "Other"
  ];

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center text-foreground">
                Book Repair Service
              </DialogTitle>
            </DialogHeader>
            <p className="text-center text-muted-foreground -mt-2 mb-4">
              Fill out the form below and we'll get back to you within 30 minutes
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Enter your full name"
                  className={`bg-white text-black border-gray-300${errors.name ? " border-red-500" : ""}`}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Location Field */}
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Select value={watch("location")} onValueChange={(value) => setValue("location", value)}>
                  <SelectTrigger className={`bg-white text-black border-gray-300${errors.location ? " border-red-500" : ""}`}>
                    <SelectValue placeholder="Select your location" className="text-black" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg z-50">
                    {locationOptions.map((location) => (
                      <SelectItem key={location} value={location} className="hover:bg-gray-100">
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.location && (
                  <p className="text-sm text-red-500">{errors.location.message}</p>
                )}
              </div>

              {/* Other Location Field - Show only if "Other" is selected */}
              {watch("location") === "Other" && (
                <div className="space-y-2">
                  <Label htmlFor="otherLocation">Please specify your location *</Label>
                  <Input
                    id="otherLocation"
                    {...register("otherLocation")}
                    placeholder="Enter your specific location"
                    className={`bg-white text-black border-gray-300${errors.otherLocation ? " border-red-500" : ""}`}
                  />
                  {errors.otherLocation && (
                    <p className="text-sm text-red-500">{errors.otherLocation.message}</p>
                  )}
                </div>
              )}

              {/* Mobile Field */}
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  {...register("mobile")}
                  placeholder="Enter 10-digit mobile number"
                  type="tel"
                  maxLength={10}
                  className={`bg-white text-black border-gray-300${errors.mobile ? " border-red-500" : ""}`}
                />
                {errors.mobile && (
                  <p className="text-sm text-red-500">{errors.mobile.message}</p>
                )}
              </div>

              {/* Device Field */}
              <div className="space-y-2">
                <Label htmlFor="device">Device Type *</Label>
                <Select 
                  value={watch("device")}
                  onValueChange={(value) => setValue("device", value)}
                >
                  <SelectTrigger className={`bg-white text-black border-gray-300${errors.device ? " border-red-500" : ""}`}>
                    <SelectValue placeholder="Select your device" className="text-black" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg z-50">
                    {deviceOptions.map((device) => (
                      <SelectItem key={device} value={device} className="hover:bg-gray-100">
                        {device}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.device && (
                  <p className="text-sm text-red-500">{errors.device.message}</p>
                )}
              </div>

              {/* Other Device Field - Show only if "Other" is selected */}
              {watch("device") === "Other" && (
                <div className="space-y-2">
                  <Label htmlFor="otherDevice">Please specify your device *</Label>
                  <Input
                    id="otherDevice"
                    {...register("otherDevice")}
                    placeholder="Enter your specific device model"
                    className={`bg-white text-black border-gray-300${errors.otherDevice ? " border-red-500" : ""}`}
                  />
                  {errors.otherDevice && (
                    <p className="text-sm text-red-500">{errors.otherDevice.message}</p>
                  )}
                </div>
              )}

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message">Issue Description *</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Describe the issue with your device in detail..."
                  rows={4}
                  className={`bg-white text-black border-gray-300${errors.message ? " border-red-500" : ""}`}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={submitBooking.isPending}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  {submitBooking.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </div>
            </form>
          </>
        ) : (
          /* Success Message */
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Request Submitted Successfully!
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your request has been submitted successfully. We will get back to you soon.
              <br />
              <strong>If urgent, you can directly contact us:</strong>
            </p>
            
            {/* Contact Numbers */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-6 border border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="tel:9211720790"
                  className="flex items-center justify-center gap-3 bg-white rounded-lg p-4 hover:shadow-md transition-shadow border"
                >
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-800">Call Now</p>
                    <p className="text-lg font-bold text-blue-600">9211720790</p>
                  </div>
                </a>
                
                <a
                  href="https://wa.me/919211720790"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white rounded-lg p-4 hover:shadow-md transition-shadow border"
                >
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-800">WhatsApp</p>
                    <p className="text-lg font-bold text-green-600">9211720790</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-sm text-blue-700 font-medium">
                  Alternative Number: <span className="font-bold">8750160550</span>
                </p>
              </div>
            </div>

            <Button
              onClick={handleClose}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}