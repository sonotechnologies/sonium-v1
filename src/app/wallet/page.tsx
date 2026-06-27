import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import { DashboardShell } from "@/components/layout/dashboard-shell";

import { WalletClient } from "@/components/wallet/wallet-client";

export default async function WalletPage() {
  const session = await auth();

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email ?? "",
    },

    include: {
      wallet: true,

      transactions: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  const walletBalance = Number(user?.wallet?.balance ?? 0);

  const transactions =
    user?.transactions.map((transaction) => ({
      ...transaction,

      amount: Number(transaction.amount),
    })) ?? [];

  return (
    <DashboardShell>
      <WalletClient
        walletBalance={walletBalance}
        transactions={transactions}
      />
    </DashboardShell>
  );
}