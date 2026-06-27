import {
  ArrowRight,
  LockKeyhole,
  Wallet,
  Zap,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Fund your wallet",
    description:
      "Add money to your Sonium wallet using our secure funding options.",
    icon: Wallet,
  },

  {
    id: 2,
    title: "Reserve your balance",
    description:
      "Your money is safely reserved for internet purchases.",
    icon: LockKeyhole,
  },

  {
    id: 3,
    title: "Buy data instantly",
    description:
      "Choose a bundle, enter your number, and get connected in seconds.",
    icon: Zap,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Get connected in 3 simple steps
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative"
              >
                <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute left-1/2 top-0 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg">
                    {step.id}
                  </div>

                  <div className="flex justify-center">
                    <div className="flex size-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                      <Icon className="size-8 text-slate-900" />
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <h3 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index !== steps.length - 1 && (
                  <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 lg:block">
                    <ArrowRight className="size-6 text-blue-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}   