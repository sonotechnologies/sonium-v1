"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Wifi,
  Wallet,
  ReceiptText,
  Settings,
  LogOut,
} from "lucide-react";

import { cn } from "@/lib/utils";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    label: "Buy Data",
    href: "/buy-data",
    icon: Wifi,
  },

  {
    label: "Wallet",
    href: "/wallet",
    icon: Wallet,
  },

  {
    label: "Transactions",
    href: "/transactions",
    icon: ReceiptText,
  },

  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 hidden w-[260px] border-r bg-white lg:flex lg:flex-col">
      <div className="flex items-center gap-3 px-6 py-8">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white">
          D
        </div>

        <div>
          <h2 className="text-xl font-bold">
            DataBank
          </h2>

          <p className="text-sm text-muted-foreground">
            Stay connected
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-2 px-4">
        {links.map((link) => {
          const Icon = link.icon;

          const active =
            pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all",
                active
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <Icon className="size-5" />

              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4">
        <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100">
          <LogOut className="size-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}