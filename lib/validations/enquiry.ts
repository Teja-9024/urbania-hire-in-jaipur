import { z } from "zod";

export const tripTypeOptions = [
  { value: "outstation", label: "Outstation Trip" },
  { value: "wedding", label: "Wedding" },
  { value: "corporate", label: "Corporate Travel" },
  { value: "airport", label: "Airport Transfer" },
  { value: "sightseeing", label: "Sightseeing" },
  { value: "school-college", label: "School/College Group" },
  { value: "other", label: "Other" },
] as const;

const tripTypeValues = tripTypeOptions.map((o) => o.value) as [string, ...string[]];

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  pickupCity: z.string().trim().min(2, "Pickup city is required").max(60),
  dropCity: z.string().trim().max(60).optional().or(z.literal("")),
  travelDate: z
    .string()
    .trim()
    .min(1, "Travel date is required")
    .refine((val) => !Number.isNaN(Date.parse(val)), "Enter a valid date"),
  passengers: z
    .coerce.number({ invalid_type_error: "Enter number of passengers" })
    .int()
    .min(1, "At least 1 passenger")
    .max(60, "For groups above 60, please call us directly"),
  tripType: z.enum(tripTypeValues),
  message: z.string().trim().max(500, "Message is too long").optional().or(z.literal("")),
  // Honeypot field — real users never fill this; bots often do.
  website: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
