const networks = [
  {
    name: "MTN",
    logo: "MTN",
    color: "bg-yellow-400 text-black",
  },

  {
    name: "Airtel",
    logo: "A",
    color: "bg-red-500 text-white",
  },

  {
    name: "Glo",
    logo: "GLO",
    color: "bg-green-600 text-white",
  },

  {
    name: "9mobile",
    logo: "9",
    color: "bg-black text-yellow-400",
  },
];

export function NetworksSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            ALL NETWORKS SUPPORTED
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Buy data from all major Nigerian networks
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {networks.map((network) => (
            <div
              key={network.name}
              className="rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mx-auto flex size-20 items-center justify-center rounded-3xl text-xl font-bold ${network.color}`}
              >
                {network.logo}
              </div>

              <p className="mt-5 text-lg font-semibold text-slate-900">
                {network.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}