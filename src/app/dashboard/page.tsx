import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import { getDashboardData }
  from "@/actions/wallet/get-dashboard-data";

import { DashboardShell }
  from "@/components/layout/dashboard-shell";

import { DashboardHeader }
  from "@/components/dashboard/dashboard-header";

import { BalanceCard }  
  from "@/components/dashboard/balance-card";

import { BuyDataCard }
  from "@/components/dashboard/buy-data-card";

import { RecentTransactions }
  from "@/components/dashboard/recent-transactions";
import { QuickActions } from "@/components/dashboard/quick-actions";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const data =
    await getDashboardData();

  if (!data) {
    redirect("/login");
  }

  return (
    <DashboardShell>
      <div className="space-y-6">
        <DashboardHeader
          name={session.user.name}
        />

        <BalanceCard
          balance={
            Number(
              data.wallet?.balance ?? 0
            )
          }
        />

        <QuickActions/>

        <RecentTransactions
          transactions={
            data.transactions
          }
        />
      </div>
    </DashboardShell>
  );
}