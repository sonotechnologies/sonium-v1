import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name is required"),

  email: z
    .email("Invalid email"),

  phone: z
    .string()
    .min(11, "Phone number is required"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

export type RegisterInput =
  z.infer<typeof registerSchema>;