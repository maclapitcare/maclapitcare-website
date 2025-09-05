import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertServiceRequestSchema } from "@shared/schema";
import type { InsertServiceRequest } from "@shared/schema";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ServiceBookingModalProps {
  children: React.ReactNode;
}

export default function ServiceBookingModal({ children }: ServiceBookingModalProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<InsertServiceRequest>({
    resolver: zodResolver(insertServiceRequestSchema),
    defaultValues: {
      name: "",
      phone: "",
      deviceModel: "",
      serviceType: "",
      preferredDate: "",
      issueDescription: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertServiceRequest) => {
      const response = await apiRequest("POST", "/api/service-request", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Service Booked Successfully!",
        description: "We will contact you shortly to confirm your appointment.",
      });
      form.reset();
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ["/api/service-requests"] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Book Service",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertServiceRequest) => {
    mutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Book Service</DialogTitle>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Device Model</label>
            <Select 
              value={form.watch("deviceModel")} 
              onValueChange={(value) => form.setValue("deviceModel", value)}
            >
              <SelectTrigger className="text-black bg-white border-gray-300">
                <SelectValue placeholder="Select your device" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="macbook-air-a2337">MacBook Air A2337 (M1)</SelectItem>
                <SelectItem value="macbook-air-a2681">MacBook Air A2681 (M2)</SelectItem>
                <SelectItem value="macbook-pro-a2338">MacBook Pro A2338 (M1)</SelectItem>
                <SelectItem value="macbook-pro-a2442">MacBook Pro A2442 (14" M1 Pro)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
            <Select 
              value={form.watch("serviceType")} 
              onValueChange={(value) => form.setValue("serviceType", value)}
            >
              <SelectTrigger className="text-black bg-white border-gray-300">
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="screen-replacement">Screen Replacement</SelectItem>
                <SelectItem value="battery-replacement">Battery Replacement</SelectItem>
                <SelectItem value="keyboard-replacement">Keyboard Replacement</SelectItem>
                <SelectItem value="logic-board-repair">Logic Board Repair</SelectItem>
                <SelectItem value="trackpad-replacement">Trackpad Replacement</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <Input
              {...form.register("name")}
              placeholder="Your full name"
              className="text-black bg-white border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <Input
              {...form.register("phone")}
              type="tel"
              placeholder="Your phone number"
              className="text-black bg-white border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
            <Input
              {...form.register("preferredDate")}
              type="date"
              className="text-black bg-white border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
            <Textarea
              {...form.register("issueDescription")}
              rows={3}
              placeholder="Describe the issue or any specific requirements"
              className="text-black bg-white border-gray-300"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-600 text-white hover:bg-blue-700"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Booking..." : "Book Service Now"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
