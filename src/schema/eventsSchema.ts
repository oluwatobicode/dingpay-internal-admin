import { z } from "zod";

export const eventSchema = z
  .object({
    eventName: z
      .string()
      .min(1, "Event name is required")
      .min(3, "Event name must be at least 3 characters"),
    eventDescription: z
      .string()
      .min(1, "Event description is required")
      .min(10, "Description must be at least 10 characters"),
    organizerName: z
      .string()
      .min(1, "Organizer name is required")
      .min(2, "Organizer name must be at least 2 characters"),
    venue: z
      .string()
      .min(1, "Venue is required")
      .min(3, "Venue must be at least 3 characters"),
    startDate: z.string().min(1, "Start date is required"),
    startTime: z.string().min(1, "Start time is required"),
    endDate: z.string().min(1, "End date is required"),
    endTime: z.string().min(1, "End time is required"),
    eventImage: z.any().optional(),

    singleTickets: z.array(
      z.object({
        name: z
          .string()
          .min(1, "Ticket name is required")
          .min(3, "Ticket name must be at least 3 characters"),
        description: z
          .string()
          .min(1, "Ticket description is required")
          .min(10, "Description must be at least 10 characters"),
        pricePerTicket: z.number().min(0, "Price cannot be negative"),
        freeTickets: z.boolean().default(false),
        platformFee: z.boolean().default(true),
        ticketQuantity: z
          .number()
          .min(1, "Quantity must be at least 1")
          .int("Quantity must be a whole number"),
        unlimitedTicket: z.boolean().default(false),
        ticketPerOrder: z
          .number()
          .min(1, "Tickets per order must be at least 1")
          .int("Must be a whole number"),
      })
    ),

    groupTickets: z.array(
      z.object({
        name: z
          .string()
          .min(1, "Group ticket name is required")
          .min(3, "Ticket name must be at least 3 characters"),
        description: z
          .string()
          .min(1, "Group ticket description is required")
          .min(10, "Description must be at least 10 characters"),
        pricePerTicket: z.number().min(0, "Price cannot be negative"),
        freeTickets: z.boolean().default(false),
        platformFee: z.boolean().default(true),
        ticketQuantity: z
          .number()
          .min(1, "Quantity must be at least 1")
          .int("Quantity must be a whole number"),
        unlimitedTicket: z.boolean().default(false),
        groupSize: z
          .number()
          .min(2, "Group size must be at least 2")
          .int("Group size must be a whole number"),
      })
    ),

    questions: z.array(
      z.object({
        question: z.string().default(""),
        compulsory: z.boolean().default(false),
      })
    ),

    supportContactName: z
      .string()
      .min(1, "Support contact name is required")
      .min(3, "Support contact name must be at least 3 characters"),
    supportContactNumber: z
      .string()
      .min(1, "Support contact number is required"),

    supportContactEmail: z
      .string()
      .min(1, "Support contact email is required")
      .email("Please enter a valid email address"),
    promotionalText: z.string().optional(),
    website: z
      .string()
      .url("Please enter a valid URL")
      .optional()
      .or(z.literal("")),
    instagram: z.string().optional(),
    twitter: z.string().optional(),
    tiktok: z.string().optional(),
    linkedin: z.string().optional(),
    facebook: z.string().optional(),
  })
  .refine(
    (data) => {
      const hasSingleTickets = data.singleTickets.length > 0;
      const hasGroupTickets = data.groupTickets.length > 0;
      return hasSingleTickets || hasGroupTickets;
    },
    {
      message: "Please create at least one ticket (single or group)",
      path: ["singleTickets"],
    }
  );

export type EventFormData = z.output<typeof eventSchema>;
export type EventFormSchema = z.input<typeof eventSchema>;
