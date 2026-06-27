import Link from "next/link";

import {
  Wifi,
  Wallet,
  ReceiptText,
  Settings,
} from "lucide-react";

const actions = [
  {
    title: "Buy Data",
    description:
      "Buy data instantly",
    href: "/buy-data",
    icon: Wifi,
    color:
      "bg-blue-100 text-blue-600",
  },

  {
    title: "Wallet",
    description:
      "View wallet details",
    href: "/wallet",
    icon: Wallet,
    color:
      "bg-green-100 text-green-600",
  },

  {
    title: "Transactions",
    description:
      "View history",
    href: "/wallet",
    icon: ReceiptText,
    color:
      "bg-purple-100 text-purple-600",
  },

  {
    title: "Settings",
    description:
      "Manage account",
    href: "/settings",
    icon: Settings,
    color:
      "bg-orange-100 text-orange-600",
  },
];

export function QuickActions() {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`flex size-14 items-center justify-center rounded-2xl ${action.color}`}
              >
                <Icon className="size-6" />
              </div>

              <h3 className="mt-5 font-semibold">
                {action.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {action.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}