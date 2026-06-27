"use client";

import Link from "next/link";

export function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg">
            S
          </div>

          <span className="text-2xl font-bold tracking-tight text-gray-900">
            Sonium
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {[
            "Home",
            "Features",
            "How It Works",
            "About",
            "FAQ",
          ].map((item) => (
            <button
              key={item}
              className="text-sm font-semibold text-gray-600 transition hover:text-blue-600"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/login"
            className="rounded-2xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Log in
          </Link>

          <Link
            href="/register"
            className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}