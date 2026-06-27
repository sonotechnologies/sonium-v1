import {
  ShieldCheck,
  Smartphone,
  TimerReset,
  Wifi,
} from "lucide-react";

const features = [
  {
    title: "Fast Purchases",
    description:
      "Buy data bundles in seconds from all networks.",
    icon: Wifi,
    iconBg: "bg-blue-600",
  },

  {
    title: "Transaction History",
    description:
      "Track all your wallet funding and data purchases.",
    icon: TimerReset,
    iconBg: "bg-green-600",
  },

  {
    title: "Secure & Private",
    description:
      "Your account is protected with industry-standard security.",
    icon: ShieldCheck,
    iconBg: "bg-violet-600",
  },

  {
    title: "All Nigerian Networks",
    description:
      "MTN, Airtel, Glo & 9mobile all in one place.",
    icon: Smartphone,
    iconBg: "bg-orange-500",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-[#f7f9ff] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            FEATURES
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need for hassle-free data
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-[32px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`flex size-14 items-center justify-center rounded-2xl text-white ${feature.iconBg}`}
                >
                  <Icon className="size-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}