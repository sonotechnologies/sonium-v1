"use server";

import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";
import {
  registerSchema,
  type RegisterInput,
} from "@/lib/validators/auth";

const DEMO_BALANCE = 10000;

export async function registerUser(
  input: RegisterInput
) {
  const validated =
    registerSchema.safeParse(input);

  if (!validated.success) {
    return {
      success: false,
      message: "Invalid form data",
    };
  }

  const { name, email, phone, password } =
    validated.data;

  const existingUser =
    await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { phone },
        ],
      },
    });

  if (existingUser) {
    return {
      success: false,
      message:
        "Email or phone number already exists",
    };
  }

  const passwordHash =
    await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
  data: {
    name,
    email,
    phone,
    passwordHash,

    wallet: {
      create: {
        balance: DEMO_BALANCE,
      },
    },

    transactions: {
      create: {
        amount: DEMO_BALANCE,
        type: "DEPOSIT",
        status: "SUCCESS",
        reference: `WELCOME-${crypto.randomUUID()}`,
      },
    },
  },
});

  return {
    success: true,
    userId: user.id,
  };
}