"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SignalBars } from "./signal-bars";

const NAV_LINKS = [
  { label: "How it works", href: "#how" },
  { label: "Networks", href: "#networks" },
  { label: "FAQ", href: "#faq" },
  { label: "Pricing", href: "/pricing" },
];

export function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-7">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <span className="flex size-9 items-center justify-center rounded-[5px] bg-ink">
            <SignalBars className="h-[15px] text-accent" />
          </span>
          <span className="font-head text-[21px] font-bold tracking-[-0.02em]">
            Sonium
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-steel transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <a
            href="/login"
            className="hidden text-[15px] text-steel transition-colors hover:text-ink md:inline"
          >
            Log in
          </a>
          <Link
            href="/register"
            className="hidden h-11 items-center rounded-[4px] bg-accent px-5 text-sm text-ink transition-colors hover:bg-accent-hover md:flex"
          >
            Create account
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex size-11 items-center justify-center rounded-[4px] border border-line text-ink md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-7 py-4 md:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 text-[15px] text-steel"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center rounded-[4px] border border-line text-sm text-white"
            >
              Log in
            </Link>
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center rounded-[4px] bg-accent text-sm text-ink"
            >
              Create account
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
