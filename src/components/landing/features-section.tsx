"use client";

import { motion } from "framer-motion";
import { SignalBars } from "./signal-bars";
import { stagger, inView, useReveal } from "./motion-presets";

const NETWORKS = [
  { name: "MTN", color: "#F5B301" },
  { name: "Airtel", color: "#E01A22" },
  { name: "Glo", color: "#12A150" },
  { name: "9mobile", color: "#0a0a0a" },
];

const BUNDLES = [
  { size: "1GB", price: "₦350", selected: false },
  { size: "3GB", price: "₦1,200", selected: true },
  { size: "10GB", price: "₦3,500", selected: false },
];

const HISTORY = [
  { name: "MTN · 3GB", time: "Today", amount: "−₦1,200" },
  { name: "Top-up", time: "Yesterday", amount: "+₦5,000" },
  { name: "Glo · 1GB", time: "Monday", amount: "−₦350" },
];

const RESERVE_METER = [true, true, true, true, true, true, false, false];

export function FeaturesSection() {
  const reveal = useReveal();

  return (
    <section id="networks" className="py-24">
      <div className="mx-auto max-w-[1200px] px-7">
        <motion.div variants={stagger} {...inView} className="max-w-[620px]">
          <motion.span
            variants={reveal}
            className="block font-label text-xs uppercase tracking-[0.24em] text-steel"
          >
            Why Sonium
          </motion.span>
          <motion.h2
            variants={reveal}
            className="mt-3.5 text-[clamp(2rem,4.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em]"
          >
            Built to keep you online.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          {...inView}
          className="mt-[52px] grid grid-cols-1 gap-4 md:grid-cols-6"
        >
          {/* Buy in seconds */}
          <motion.div
            variants={reveal}
            className="rounded-2xl border border-line bg-white p-7 md:col-span-4"
          >
            <h3 className="text-xl">Buy in seconds</h3>
            <p className="mt-2 text-sm text-steel">
              Every network, one flow — pick, choose, done.
            </p>
            <div className="mt-[22px] flex flex-wrap gap-2">
              {NETWORKS.map((net, index) => (
                <span
                  key={net.name}
                  className={`flex items-center gap-[7px] rounded-full border px-3.5 py-[7px] text-[13px] ${
                    index === 0
                      ? "border-accent bg-accent text-ink"
                      : "border-line"
                  }`}
                >
                  <span
                    className="size-[7px] rounded-full"
                    style={{ background: net.color }}
                  />
                  {net.name}
                </span>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {BUNDLES.map((bundle) => (
                <div
                  key={bundle.size}
                  className={`rounded-[10px] border p-3 text-center ${
                    bundle.selected
                      ? "border-accent bg-accent/10"
                      : "border-line"
                  }`}
                >
                  <div className="font-head text-[17px] font-bold">
                    {bundle.size}
                  </div>
                  <div className="font-label text-[11px] text-steel">
                    {bundle.price}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reserved (dark) */}
          <motion.div
            variants={reveal}
            className="rounded-2xl border border-ink bg-ink p-7 text-white md:col-span-2"
          >
            <h3 className="text-xl">Reserved for data</h3>
            <div className="mt-[22px]">
              <div className="font-head text-[38px] font-bold tracking-[-0.02em]">
                ₦5,000
              </div>
              <div className="mt-3.5 flex gap-1">
                {RESERVE_METER.map((filled, index) => (
                  <span
                    key={index}
                    className={`h-2 flex-1 rounded-[2px] ${filled ? "bg-white" : "bg-white/[0.16]"}`}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-white/60">
                62% still held for the month.
              </p>
            </div>
          </motion.div>

          {/* Clear history (mist) */}
          <motion.div
            variants={reveal}
            className="rounded-2xl border border-line bg-mist p-7 md:col-span-3"
          >
            <h3 className="text-xl">Clear history</h3>
            <p className="mt-2 text-sm text-steel">
              Every move, in plain naira.
            </p>
            <div className="mt-[22px]">
              {HISTORY.map((row, index) => (
                <div
                  key={row.name}
                  className={`flex items-center justify-between py-3 ${
                    index > 0 ? "border-t border-line" : ""
                  }`}
                >
                  <span>
                    <span className="block font-label text-sm">{row.name}</span>
                    <span className="block font-label text-[11px] text-steel">
                      {row.time}
                    </span>
                  </span>
                  <span className="font-head text-sm font-semibold">
                    {row.amount}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* All networks */}
          <motion.div
            variants={reveal}
            className="rounded-2xl border border-line bg-white p-7 md:col-span-3"
          >
            <h3 className="text-xl">All four networks</h3>
            <p className="mt-2 text-sm text-steel">
              No juggling apps or agents.
            </p>
            <div className="mt-[22px] grid grid-cols-2 gap-2.5">
              {NETWORKS.map((net) => (
                <div
                  key={net.name}
                  className="flex items-center justify-between rounded-[10px] border border-line p-3.5"
                >
                  <span className="font-head text-[15px] font-bold">
                    {net.name}
                  </span>
                  <span style={{ color: net.color }}>
                    <SignalBars className="h-4" />
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
