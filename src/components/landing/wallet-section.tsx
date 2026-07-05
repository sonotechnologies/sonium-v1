"use client";

import { motion } from "framer-motion";
import { SignalBars } from "./signal-bars";
import { stagger, inView, useReveal } from "./motion-presets";

const CAPABILITIES = [
  {
    title: "Reserve",
    tag: "Set aside",
    body: "Move money into a balance that's ring-fenced for the internet — nothing else can spend it.",
  },
  {
    title: "Buy data",
    tag: "Seconds",
    body: "Pick a network, choose a bundle, enter a number. Connected before the page reloads.",
  },
  {
    title: "Track",
    tag: "Every ₦",
    body: "See every top-up and purchase itemised in plain naira, whenever you check.",
  },
];

const ACTIVITY = [
  { name: "MTN · 3GB", time: "Today, 14:02", amount: "−₦1,200", credit: false },
  {
    name: "Wallet top-up",
    time: "Yesterday, 09:41",
    amount: "+₦5,000",
    credit: true,
  },
  { name: "Glo · 1GB", time: "Mon, 18:20", amount: "−₦350", credit: false },
];

export function WalletSection() {
  const reveal = useReveal();

  return (
    <section className="py-24">
      <motion.div
        variants={stagger}
        {...inView}
        className="mx-auto grid max-w-[1200px] items-center gap-11 px-7 md:grid-cols-2"
      >
        <motion.div variants={reveal}>
          <span className="font-label text-xs uppercase tracking-[0.24em] text-steel">
            One wallet
          </span>
          <h2 className="mt-3.5 text-[clamp(2rem,4.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em]">
            Everything internet, in one place.
          </h2>
          <div className="mt-6 border-t border-line">
            {CAPABILITIES.map((item) => (
              <div key={item.title} className="border-b border-line py-[22px]">
                <h4 className="flex items-center gap-3 text-[19px]">
                  {item.title}
                  <span className="rounded-full border border-line px-2.5 py-0.5 font-head text-[13px] text-steel">
                    {item.tag}
                  </span>
                </h4>
                <p className="mt-2 max-w-[44ch] text-[15px] text-steel">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={reveal}
          className="rounded-2xl bg-ink p-[26px] text-white"
        >
          <div className="flex items-center justify-between">
            <span className="font-label text-sm text-white/60">
              DataBank · live
            </span>
            <SignalBars className="h-4 text-accent" />
          </div>
          <div className="mt-4 font-head text-[40px] font-bold tracking-[-0.02em]">
            ₦5,000.00
          </div>
          <div className="mt-5">
            {ACTIVITY.map((row) => (
              <div
                key={row.name}
                className="flex items-center justify-between border-t border-white/10 py-3.5"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-[34px] items-center justify-center rounded-lg bg-white/[0.08]">
                    <SignalBars className="h-3.5 text-accent" />
                  </span>
                  <span>
                    <span className="block font-label text-sm">{row.name}</span>
                    <span className="block font-label text-[11px] text-white/50">
                      {row.time}
                    </span>
                  </span>
                </span>
                <span
                  className={`font-head text-sm font-semibold ${row.credit ? "text-accent" : ""}`}
                >
                  {row.amount}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
