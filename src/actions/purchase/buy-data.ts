"use server";

import { revalidatePath }
  from "next/cache";

import { auth }
  from "@/lib/auth";

import { prisma }
  from "@/lib/prisma";

interface BuyDataInput {
  network: string;
  bundleName: string;
  phoneNumber: string;
  amount: number;
}

export async function buyData(
  input: BuyDataInput
) {
  const session = await auth();

  if (!session?.user?.email) {
    return {
      success: false,
      message:
        "Unauthorized.",
    };
  }

  const user =
    await prisma.user.findUnique({
      where: {
        email:
          session.user.email,
      },

      include: {
        wallet: true,
      },
    });

  if (!user?.wallet) {
    return {
      success: false,
      message:
        "Wallet not found.",
    };
  }

  const currentBalance =
    Number(
      user.wallet.balance
    );

  if (
    currentBalance < input.amount
  ) {
    return {
      success: false,
      message:
        "Insufficient balance.",
    };
  }

  await prisma.$transaction(
    async (tx) => {
      await tx.wallet.update({
        where: {
          id: user.wallet.id,
        },

        data: {
          balance: {
            decrement:
              input.amount,
          },
        },
      });

      await tx.transaction.create({
        data: {
          userId: user.id,

          amount: input.amount,

          type: "PURCHASE",

          status: "SUCCESS",

          reference: crypto.randomUUID(),
        },
      });

      await tx.dataPurchase.create({
        data: {
          userId: user.id,

          network:
            input.network,

          bundleName:
            input.bundleName,

          phoneNumber:
            input.phoneNumber,

          amount: input.amount,

          status: "SUCCESS",
        },
      });
    }
  );

  revalidatePath(
    "/dashboard"
  );

  revalidatePath(
    "/buy-data"
  );

  return {
    success: true,
    message:
      "Data purchased successfully.",
  };
}