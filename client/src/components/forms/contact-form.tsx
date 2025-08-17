import { useState } from "react";
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
import { insertContactSubmissionSchema } from "@shared/schema";

const formSchema = insertContactSubmissionSchema.extend({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
}).omit({ email: true });

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  initialData?: Partial<FormData>;
}

export default function ContactForm({ initialData }: ContactFormProps) {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || "",
      phone: initialData?.phone || "",
      location: initialData?.location || "",
      service: initialData?.service || "",
      message: initialData?.message || "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your inquiry! We'll contact you shortly.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

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
                <FormLabel>Location</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ""}>
                  <FormControl>
                    <SelectTrigger className="bg-white text-black border-gray-300">
                      <SelectValue placeholder="Select location" />
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

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Needed</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ""}>
                  <FormControl>
                    <SelectTrigger className="bg-white text-black border-gray-300">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white border shadow-lg z-50">
                    <SelectItem value="macbook-repair" className="hover:bg-gray-100">MacBook Repair</SelectItem>
                    <SelectItem value="laptop-repair" className="hover:bg-gray-100">Laptop Repair</SelectItem>
                    <SelectItem value="imac-repair" className="hover:bg-gray-100">iMac Repair</SelectItem>
                    <SelectItem value="screen-replacement" className="hover:bg-gray-100">Screen Replacement</SelectItem>
                    <SelectItem value="battery-replacement" className="hover:bg-gray-100">Battery Replacement</SelectItem>
                    <SelectItem value="keyboard-repair" className="hover:bg-gray-100">Keyboard Repair</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Describe your device issue or any additional information..."
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
          className="w-full text-white font-semibold relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl border-0"
          disabled={mutation.isPending}
          style={{
            background: 'linear-gradient(90deg, hsl(142, 76%, 36%) 30%, hsl(142, 76%, 46%) 50%, hsl(142, 76%, 36%) 70%)',
            backgroundSize: '300% 100%',
            animation: 'autoShine 6s infinite'
          }}
        >
          <div className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:w-full transition-all duration-500 transform skew-x-12"></div>
          <span className="relative z-10 text-white font-semibold">
            {mutation.isPending ? "Submitting..." : "Book Free Diagnosis"}
          </span>
        </Button>
      </form>
    </Form>
  );
}
