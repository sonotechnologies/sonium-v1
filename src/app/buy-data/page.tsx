import { DashboardShell } from "@/components/layout/dashboard-shell";

import { BuyDataClient } from "@/components/purchase/buy-data-client";

import { auth } from "@/lib/auth";

import { prisma } from "@/lib/prisma";

export default async function BuyDataPage() {
  const session = await auth();

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email ?? "",
    },

    include: {
      wallet: true,
    },
  });

  const walletBalance = Number(user?.wallet?.balance ?? 0);

  return (
    <DashboardShell>
      <BuyDataClient walletBalance={walletBalance} />
    </DashboardShell>
  );
}