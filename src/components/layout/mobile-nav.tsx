"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Wifi,
  Wallet,
  ReceiptText,
  Settings,
} from "lucide-react";

import { cn } from "@/lib/utils";

const links = [
  {
    label: "Home",
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
    label: "History",
    href: "/transactions",
    icon: ReceiptText,
  },

  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/90 backdrop-blur lg:hidden">
      <div className="grid grid-cols-5">
        {links.map((link) => {
          const Icon = link.icon;

          const active =
            pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center gap-1 py-3 text-xs transition",
                active
                  ? "text-blue-600"
                  : "text-gray-500"
              )}
            >
              <Icon className="size-5" />

              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}