
import { LoginForm } from "@/components/auth/login-fom";
import {
  ShieldCheck,
  Wifi,
  Globe,
} from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 p-12 text-white lg:flex lg:flex-col">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <span className="text-2xl font-bold">S</span>
            </div>

            <span className="text-3xl font-bold">
              Sonium
            </span>
          </div>

          {/* CONTENT */}
          <div className="mt-24 max-w-md">
            <p className="text-4xl font-light">
              Welcome back!
            </p>

            <h1 className="mt-3 text-6xl font-bold leading-tight">
              Let&apos;s keep you connected.
            </h1>

            <p className="mt-8 text-lg leading-8 text-blue-100">
              Login to your Sonium account and manage your internet wallet.
            </p>
          </div>

          {/* WALLET CARD */}
          <div className="relative mt-16">
            <div className="relative h-[240px] w-[320px] rounded-[36px] bg-gradient-to-br from-blue-400 to-blue-600 p-8 shadow-2xl">
              <div className="absolute inset-0 rounded-[36px] border border-white/20" />

              <div className="relative z-10">
                <div className="h-16 w-24 rounded-2xl bg-white/20 backdrop-blur" />

                <div className="mt-16">
                  <p className="text-sm text-blue-100">
                    Sonium Balance
                  </p>

                  <h2 className="mt-2 text-4xl font-bold">
                    ₦5,000.00
                  </h2>

                  <div className="mt-4 flex items-center gap-2">
                    <div className="size-3 rounded-full bg-green-400" />

                    <span className="text-sm">
                      Available Balance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-10 right-0 rounded-3xl bg-white p-6 text-black shadow-2xl">
              <p className="text-sm text-gray-500">
                Available Balance
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                ₦5,000.00
              </h3>

              <div className="mt-4 flex items-center gap-2">
                <div className="size-3 rounded-full bg-green-500" />

                <span className="text-sm text-green-600">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="mt-auto flex items-center gap-10 pb-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck className="size-5" />
              </div>

              <div>
                <p className="font-semibold">
                  Secure
                </p>

                <p className="text-sm text-blue-100">
                  Bank-grade security
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-white/10">
                <Wifi className="size-5" />
              </div>

              <div>
                <p className="font-semibold">
                  Instant
                </p>

                <p className="text-sm text-blue-100">
                  Buy data instantly
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-white/10">
                <Globe className="size-5" />
              </div>

              <div>
                <p className="font-semibold">
                  Reliable
                </p>

                <p className="text-sm text-blue-100">
                  All networks covered
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-xl rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm lg:p-12">
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-[#101828]">
                Login to your account
              </h1>

              <p className="mt-3 text-lg text-gray-500">
                Enter your details to access your account
              </p>
            </div>

            <LoginForm/>
          </div>
        </div>
      </div>
    </main>
  );
}