import { ArrowDown, ArrowUp } from "lucide-react";

interface Transaction {
  id: string;
  amount: string;
  type: string;
  status: string;
  createdAt: Date;
}

interface Props {
  transactions: Transaction[];
}

export function RecentTransactions({ transactions }: Props) {
  return (
    <div className="rounded-[32px] bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>

        <button className="text-sm font-medium text-blue-600">View all</button>
      </div>

      <div className="space-y-4">
        {transactions.length === 0 ? (
          <p className="text-sm text-gray-500">No transactions yet.</p>
        ) : (
          transactions.map((transaction) => {
            const isPurchase = transaction.type === "PURCHASE";

            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between rounded-2xl border border-gray-100 p-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex size-12 items-center justify-center rounded-2xl ${
                      isPurchase
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {isPurchase ? (
                      <ArrowUp className="size-5" />
                    ) : (
                      <ArrowDown className="size-5" />
                    )}
                  </div>

                  <div>
                    <p className="font-medium">{transaction.type}</p>

                    <p className="text-sm text-gray-500">
                      {new Date(transaction.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      isPurchase ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {isPurchase ? "-" : "+"}₦
                    {Number(transaction.amount).toLocaleString()}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {transaction.status}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
