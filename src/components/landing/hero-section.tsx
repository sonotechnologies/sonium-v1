import {
  ArrowRight,
  Bell,
  CreditCard,
  Settings,
  Wallet,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.08),transparent_35%)]" />

      <div className="mx-auto grid min-h-[92vh] max-w-7xl gap-16 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-5 lg:py-16">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <div className="size-2 rounded-full bg-green-500" />  
            Your Personal Internet Wallet
          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-gray-950 sm:text-6xl">
            Reserve money
            <br />
            for internet.
            <br />
            <span className="text-blue-600">
              Buy data instantly
              <br />
              anytime.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-500">
            Sonium helps you set money aside for data and buy bundles from all
            Nigerian networks in seconds.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 font-semibold text-white shadow-xl shadow-blue-200 transition hover:bg-blue-700">
              Create Free Account
              <ArrowRight className="size-5" />
            </button>

            <button className="h-14 rounded-2xl border border-blue-200 px-8 font-semibold text-blue-700 transition hover:bg-blue-50">
              Explore Features
            </button>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="size-12 rounded-full border-4 border-white bg-gray-300"
                />
              ))}
            </div>

            <div>
              <p className="font-bold text-gray-900">
                Trusted by 1,200+ users
              </p>

              <p className="text-sm text-gray-500">⭐ 4.8/5</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="w-full rounded-[40px] border border-gray-100 bg-white p-6 shadow-2xl shadow-blue-100">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                Good evening, Moshood 👋
              </h3>

              <div className="flex items-center gap-4">
                <Bell className="size-5 text-gray-500" />

                <div className="flex size-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  M
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[32px] bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <p className="text-blue-100">DataBank Balance</p>

              <h2 className="mt-4 text-5xl font-black">₦5,000.00</h2>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-2xl bg-white px-5 py-3 font-semibold text-blue-700">
                  Fund Wallet
                </button>

                <button className="rounded-2xl border border-white/30 px-5 py-3 font-semibold">
                  Wallet Details
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900">
                Quick Actions
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  {
                    icon: CreditCard,
                    title: "Buy Data",
                  },
                  {
                    icon: Wallet,
                    title: "Wallet",
                  },
                  {
                    icon: Bell,
                    title: "Transactions",
                  },
                  {
                    icon: Settings,
                    title: "Settings",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-gray-100 p-5 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <item.icon className="size-5" />
                    </div>

                    <p className="mt-4 font-semibold">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}