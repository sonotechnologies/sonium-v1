"use client";

import { useState } from "react";

import {
  Eye,
  EyeOff,
  Plus,
} from "lucide-react";

interface Props {
  balance: number;
}

export function BalanceCard({
  balance,
}: Props) {
  const [showBalance, setShowBalance] =
    useState(true);

  const formattedBalance =
    showBalance
      ? `₦${balance.toLocaleString()}.00`
      : "₦••••••";

  return (
    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 p-6 text-white shadow-xl lg:p-8">
      <div className="absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex min-h-[220px] flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-blue-100">
              DataBank Balance
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight transition-all duration-300 lg:text-5xl">
              {formattedBalance}
            </h2>
          </div>

          <button
            type="button"
            onClick={() =>
              setShowBalance(
                !showBalance
              )
            }
            className="rounded-2xl bg-white/10 p-3 backdrop-blur transition hover:bg-white/20 active:scale-95"
          >
            {showBalance ? (
              <EyeOff className="size-5" />
            ) : (
              <Eye className="size-5" />
            )}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-blue-700 shadow-lg transition hover:scale-[1.02] active:scale-[0.98]">
            <Plus className="size-5" />

            Fund Wallet
          </button>

          <p className="hidden text-sm text-blue-100 sm:block">
            Stay connected anytime 
          </p>
        </div>
      </div>
    </div>
  );
}