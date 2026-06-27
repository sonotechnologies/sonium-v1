import { z } from "zod";

export const purchaseSchema = z.object({
  network: z.enum([
    "MTN",
    "AIRTEL",
    "GLO",
    "NINEMOBILE",
  ]),

  bundleName: z
    .string()
    .min(1, "Select a bundle"),

  phoneNumber: z
    .string()
    .min(11, "Enter a valid phone number"),
});

export type PurchaseInput =
  z.infer<typeof purchaseSchema>;