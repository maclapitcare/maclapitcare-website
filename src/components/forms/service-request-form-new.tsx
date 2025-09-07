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
import { insertServiceRequestSchema } from "@shared/schema";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  location: z.string().min(1, "Please select your location"),
  deviceModel: z.string().min(1, "Please select your device"),
  serviceType: z.string().min(1, "Please select service type"),
  message: z.string().min(10, "Please provide a detailed description"),
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

export default function ServiceRequestFormNew() {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      location: "",
      deviceModel: "",
      serviceType: "",
      message: "",
      otherLocation: "",
      otherDevice: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      // Map form data to API schema  
      const apiData = {
        name: data.name,
        phone: data.phone,
        location: data.location === "other" ? data.otherLocation : data.location,
        deviceModel: data.deviceModel === "other" ? data.otherDevice : data.deviceModel,
        serviceType: data.serviceType || "Service Request",
        issueDescription: data.message,
      };
      return await apiRequest("POST", "/api/service-request", apiData);
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name *</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} data-testid="input-name" className="bg-white text-black border-gray-300" />
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
              <FormLabel>Mobile Number *</FormLabel>
              <FormControl>
                <Input placeholder="Enter your mobile number" {...field} data-testid="input-phone" className="bg-white text-black border-gray-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger data-testid="select-location" className="bg-white text-black border-gray-300">
                    <SelectValue placeholder="Select your location" className="text-black" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white border shadow-lg z-50">
                  <SelectItem value="delhi" className="hover:bg-gray-100">Delhi</SelectItem>
                  <SelectItem value="noida" className="hover:bg-gray-100">Noida</SelectItem>
                  <SelectItem value="gurgaon" className="hover:bg-gray-100">Gurgaon</SelectItem>
                  <SelectItem value="ghaziabad" className="hover:bg-gray-100">Ghaziabad</SelectItem>
                  <SelectItem value="other" className="hover:bg-gray-100">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Other Location Field - Show only if "other" is selected */}
        {form.watch("location") === "other" && (
          <FormField
            control={form.control}
            name="otherLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Please specify your location *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your specific location" {...field} data-testid="input-other-location" className="bg-white text-black border-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="deviceModel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Device Selection</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger data-testid="select-device" className="bg-white text-black border-gray-300">
                    <SelectValue placeholder="Select your device type" className="text-black" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white border shadow-lg z-50">
                  <SelectItem value="macbook-air" className="hover:bg-gray-100">MacBook Air</SelectItem>
                  <SelectItem value="macbook-pro" className="hover:bg-gray-100">MacBook Pro</SelectItem>
                  <SelectItem value="mac-mini" className="hover:bg-gray-100">Mac Mini</SelectItem>
                  <SelectItem value="imac" className="hover:bg-gray-100">iMac</SelectItem>
                  <SelectItem value="microsoft-surface" className="hover:bg-gray-100">Microsoft Surface</SelectItem>
                  <SelectItem value="windows-laptop" className="hover:bg-gray-100">Windows Laptop</SelectItem>
                  <SelectItem value="gaming-laptop" className="hover:bg-gray-100">Gaming Laptop</SelectItem>
                  <SelectItem value="chromebook" className="hover:bg-gray-100">Chromebook</SelectItem>
                  <SelectItem value="other" className="hover:bg-gray-100">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Other Device Field - Show only if "other" is selected */}
        {form.watch("deviceModel") === "other" && (
          <FormField
            control={form.control}
            name="otherDevice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Please specify your device *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your specific device model" {...field} data-testid="input-other-device" className="bg-white text-black border-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Describe your device issue and any specific requirements..."
                  {...field}
                  data-testid="textarea-message"
                  className="bg-white text-black border-gray-300"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90"
          disabled={mutation.isPending}
          data-testid="button-submit"
        >
          {mutation.isPending ? "Submitting Request..." : "Submit Service Request"}
        </Button>
      </form>
    </Form>
  );
}