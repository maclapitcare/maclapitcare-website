import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  location: z.string().optional(),
  deviceModel: z.string().min(1, "Device model is required"),
  serviceType: z.string().min(1, "Service type is required"),
  preferredDate: z.string().optional(),
  issueDescription: z.string().optional(),
}).extend({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  otherLocation: z.string().optional(),
  otherDevice: z.string().optional(),
}).refine((data) => {
  if (data.location === "other" && !data.otherLocation) {
    return false;
  }
  if (data.deviceModel === "other" && !data.otherDevice) {
    return false;
  }
  return true;
}, {
  message: "Please specify the details when selecting 'Other'",
  path: ["otherLocation"]
});

type FormData = z.infer<typeof formSchema>;

export default function ServiceRequestForm() {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      location: "",
      deviceModel: "",
      serviceType: "",
      issueDescription: "",
      preferredDate: "",
      otherLocation: "",
      otherDevice: "",
    },
    mode: "onChange"
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      return await apiRequest("POST", "/api/service-request", data);
    },
    onSuccess: () => {
      toast({
        title: "Service Request Submitted!",
        description: "We've received your request and will contact you shortly to schedule the repair.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit service request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted with data:", data);
    mutation.mutate(data);
  };

  const watchLocation = form.watch("location");
  const watchDevice = form.watch("deviceModel");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} className="bg-white text-black border-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} className="bg-white text-black border-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Location</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value || undefined}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white text-black border-gray-300">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="noida">Noida</SelectItem>
                    <SelectItem value="gurgaon">Gurgaon</SelectItem>
                    <SelectItem value="ghaziabad">Ghaziabad</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="deviceModel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Device Model</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value || undefined}
                >
                  <FormControl>
                    <SelectTrigger className="bg-white text-black border-gray-300">
                      <SelectValue placeholder="Select device" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="macbook-air">MacBook Air</SelectItem>
                    <SelectItem value="macbook-pro">MacBook Pro</SelectItem>
                    <SelectItem value="imac">iMac</SelectItem>
                    <SelectItem value="mac-mini">Mac Mini</SelectItem>
                    <SelectItem value="gaming-laptop">Gaming Laptop</SelectItem>
                    <SelectItem value="surface-pro">Surface Pro</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {watchLocation === "other" && (
          <FormField
            control={form.control}
            name="otherLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specify Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your location" {...field} className="bg-white text-black border-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {watchDevice === "other" && (
          <FormField
            control={form.control}
            name="otherDevice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specify Device</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your device model" {...field} className="bg-white text-black border-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Type</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value || undefined}
              >
                <FormControl>
                  <SelectTrigger className="bg-white text-black border-gray-300">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="screen-replacement">Screen Replacement</SelectItem>
                  <SelectItem value="battery-replacement">Battery Replacement</SelectItem>
                  <SelectItem value="keyboard-repair">Keyboard Repair</SelectItem>
                  <SelectItem value="logic-board-repair">Logic Board Repair</SelectItem>
                  <SelectItem value="liquid-damage">Liquid Damage Repair</SelectItem>
                  <SelectItem value="data-recovery">Data Recovery</SelectItem>
                  <SelectItem value="general-repair">General Repair</SelectItem>
                  <SelectItem value="diagnostic">Diagnostic</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="issueDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe the issue with your device..." 
                  {...field}
                  value={field.value || ""}
                  className="bg-white text-black border-gray-300 min-h-[100px]" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferredDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Service Date (Optional)</FormLabel>
              <FormControl>
                <Input 
                  type="date" 
                  {...field} 
                  value={field.value || ""}
                  className="bg-white text-black border-gray-300" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
        >
          {mutation.isPending ? "Submitting..." : "Submit Service Request"}
        </Button>
      </form>
    </Form>
  );
}