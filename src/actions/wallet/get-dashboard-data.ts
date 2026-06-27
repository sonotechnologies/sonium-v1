"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getDashboardData() {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  const [wallet, transactions] =
    await Promise.all([
      prisma.wallet.findUnique({
        where: {
          userId: session.user.id,
        },
      }),

      prisma.transaction.findMany({
        where: {
          userId: session.user.id,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 5,
      }),
    ]);

  return {
  wallet,

  transactions: transactions.map(
    (transaction) => ({
      ...transaction,

      amount:
        transaction.amount.toString(),
    })
  ),
};
}