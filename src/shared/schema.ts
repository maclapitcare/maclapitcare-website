import { z } from "zod";

// Service Request Schema for forms
export const insertServiceRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  service: z.string().min(1, "Service selection required"),
  device: z.string().min(1, "Device model required"),
  issue: z.string().optional(),
});

// Contact Form Schema
export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  message: z.string().min(1, "Message is required"),
});

// TypeScript types
export type InsertServiceRequest = z.infer<typeof insertServiceRequestSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;