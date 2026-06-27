import { ArrowRight, Wifi } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-r from-blue-700 to-blue-600 p-8 text-white shadow-2xl lg:p-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-5">
            <div className="flex size-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
              <Wifi className="size-10" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                Stay connected without stress.
              </h2>

              <p className="mt-3 max-w-xl text-lg text-blue-100">
                Join thousands of users who trust Sonium to
                keep them online always.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-white px-8 font-semibold text-blue-700 transition hover:scale-[1.02]"
            >
              Create Free Account
            </Link>

            <Link
              href="/login"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/30 px-8 font-semibold text-white transition hover:bg-white/10"
            >
              Login to Account
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}