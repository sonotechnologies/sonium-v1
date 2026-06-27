"use client";

import { useState } from "react";

import {
  ArrowDown,
  ArrowUp,
  Eye,
  EyeOff,
  Plus,
  SlidersHorizontal,
} from "lucide-react";

import type {
  TransactionStatus,
  TransactionType,
} from "@prisma/client";

interface Transaction {
  id: string;

  amount: number;

  type: TransactionType;

  status: TransactionStatus;

  reference: string;

  createdAt: Date;
}

interface Props {
  walletBalance: number;

  transactions: Transaction[];
}

export function WalletClient({
  walletBalance,

  transactions,
}: Props) {
  const [hidden, setHidden] = useState(false);

  function formatAmount(amount: number) {
    return `₦${amount.toLocaleString()}.00`;
  }

  function getTransactionIcon(type: TransactionType) {
    switch (type) {
      case "DEPOSIT":
        return (
          <div className="flex size-12 items-center justify-center rounded-full bg-green-100 text-green-600">
            <ArrowDown className="size-5" />
          </div>
        );

      case "REFUND":
        return (
          <div className="flex size-12 items-center justify-center rounded-full bg-red-100 text-red-500">
            <ArrowDown className="size-5 rotate-45" />
          </div>
        );

      default:
        return (
          <div className="flex size-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <ArrowUp className="size-5" />
          </div>
        );
    }
  }

  function getTransactionTitle(type: TransactionType) {
    switch (type) {
      case "DEPOSIT":
        return "Wallet Funded (Demo)";

      case "REFUND":
        return "Refund";

      default:
        return "Data Purchase";
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Wallet
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your wallet and view transaction history.
        </p>
      </div>

      <div className="rounded-[32px] bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 p-6 text-white shadow-xl lg:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <p className="text-sm text-blue-100">
                DataBank Balance
              </p>

              <button
                onClick={() => setHidden((prev) => !prev)}
                className="rounded-xl bg-white/10 p-2 transition hover:bg-white/20"
              >
                {hidden ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>

            <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
              {hidden
                ? "₦••••••"
                : formatAmount(walletBalance)}
            </h2>

            <div className="mt-4 flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-400" />

              <p className="text-sm text-blue-100">
                Available Balance
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 font-semibold text-blue-700 transition hover:scale-[1.01]">
              <Plus className="size-5" />
              Fund Wallet
            </button>

            <button className="h-14 rounded-2xl border border-white/30 px-6 font-semibold text-white transition hover:bg-white/10">
              Wallet Details
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Transaction History
            </h2>
          </div>

          <div className="flex gap-3">
            <button className="flex h-12 items-center rounded-2xl border border-gray-200 px-4 text-sm font-medium text-gray-600">
              All Transactions
            </button>

            <button className="flex size-12 items-center justify-center rounded-2xl border border-gray-200 text-gray-600">
              <SlidersHorizontal className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-gray-100">
          {transactions.length === 0 ? (
            <div className="flex h-40 items-center justify-center text-gray-500">
              No transactions yet.
            </div>
          ) : (
            <div>
              {transactions.map((transaction) => {
                const positive =
                  transaction.type === "DEPOSIT" ||
                  transaction.type === "REFUND";

                return (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between border-b border-gray-100 px-4 py-5 last:border-b-0"
                  >
                    <div className="flex items-center gap-4">
                      {getTransactionIcon(transaction.type)}

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {getTransactionTitle(transaction.type)}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {new Date(
                            transaction.createdAt,
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p
                        className={`text-lg font-bold ${
                          positive
                            ? "text-green-600"
                            : "text-gray-900"
                        }`}
                      >
                        {positive ? "+" : "-"}
                        {formatAmount(transaction.amount)}
                      </p>

                      <span className="mt-2 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                        Successful
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing {transactions.length} transaction(s)
          </p>

          <div className="flex gap-2">
            <button className="flex size-10 items-center justify-center rounded-xl border border-gray-200 text-gray-400">
              ←
            </button>

            <button className="flex size-10 items-center justify-center rounded-xl border border-blue-600 bg-blue-50 font-semibold text-blue-600">
              1
            </button>

            <button className="flex size-10 items-center justify-center rounded-xl border border-gray-200 text-gray-400">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}