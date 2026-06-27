import Link from "next/link";

import {
  CheckCircle2,
  Lock,
  Wallet,
  Wifi,
} from "lucide-react";

export function RegisterShowcase() {
  return (
    <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#f5f8ff] via-[#eef4ff] to-[#f8fbff] lg:flex">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_35%)]" />

      <div className="relative flex w-full flex-col justify-between p-12">
        <div>
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
              <Wifi className="size-6" />
            </div>

            <span className="text-3xl font-bold tracking-tight text-slate-900">
              Sonium
            </span>
          </Link>

          <div className="mt-20 max-w-xl">
            <h1 className="text-6xl font-black leading-[1.05] tracking-tight text-slate-950">
              Create your
              <br />

              <span className="text-blue-600">
                Sonium
              </span>{" "}
              account
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              Join thousands of users who trust
              Sonium to keep them connected
              always.
            </p>
          </div>

          <div className="relative mt-16 flex items-center gap-6">
            <div className="relative">
              <div className="flex size-40 items-center justify-center rounded-[40px] bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl shadow-blue-500/30">
                <Wallet className="size-20 text-white" />
              </div>

              <div className="absolute -right-5 -top-5 flex size-16 items-center justify-center rounded-full bg-yellow-400 shadow-lg">
                <div className="size-7 rounded-full bg-yellow-200" />
              </div>
            </div>

            <div className="rounded-[28px] bg-white/90 p-6 shadow-xl backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 className="size-7" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Account created successfully!
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Let&apos;s get you connected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 rounded-[32px] border border-white/60 bg-white/60 p-6 backdrop-blur">
          <div>
            <div className="flex size-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <CheckCircle2 className="size-5" />
            </div>

            <h3 className="mt-4 font-bold text-slate-900">
              Free to use
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              No hidden charges
            </p>
          </div>

          <div>
            <div className="flex size-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Lock className="size-5" />
            </div>

            <h3 className="mt-4 font-bold text-slate-900">
              Safe & Secure
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Your data is protected
            </p>
          </div>

          <div>
            <div className="flex size-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Wifi className="size-5" />
            </div>

            <h3 className="mt-4 font-bold text-slate-900">
              All Networks
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              MTN, Airtel, Glo & 9mobile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}