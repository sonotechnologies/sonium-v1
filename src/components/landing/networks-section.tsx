import { SignalBars } from "./signal-bars";

const NETWORKS = [
  { name: "MTN", range: "500MB – 100GB", color: "text-[#F5B301]" },
  { name: "Airtel", range: "500MB – 100GB", color: "text-[#E01A22]" },
  { name: "Glo", range: "1GB – 120GB", color: "text-[#12A150]" },
  { name: "9mobile", range: "500MB – 90GB", color: "text-ink" },
];

export function NetworksSection() {
  return (
    <section id="networks" className="px-6 py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[640px] text-center">
          <span className="inline-flex items-center justify-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
            <SignalBars className="h-3.5 text-accent" />
            Supported networks
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.025em]">
            Every major Nigerian network, one wallet
          </h2>
        </div>

        <div className="mt-11 grid grid-cols-2 gap-3.5 md:grid-cols-4">
          {NETWORKS.map((network) => (
            <div
              key={network.name}
              className="flex flex-col gap-3.5 rounded-card border border-line bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(20,23,30,0.3)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-bold">
                  {network.name}
                </span>
                <SignalBars className={`h-5 ${network.color}`} />
              </div>
              <span className="font-mono text-[11px] text-ink-soft">
                {network.range}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
