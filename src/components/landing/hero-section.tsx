"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SignalBars } from "./signal-bars";
import { stagger, inView, useReveal } from "./motion-presets";

const NETWORKS = ["MTN", "Airtel", "Glo", "9mobile"];
const RESERVE_METER = [
  true,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  false,
  false,
];

export function HeroSection() {
  const reveal = useReveal();

  return (
    <section className="relative overflow-hidden">
      <div className="watermark pointer-events-none absolute right-[-2%] top-[2%] z-0 text-[clamp(140px,22vw,300px)]">
        DATA
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-12 px-7 pb-10 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-[52px]">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span
            variants={reveal}
            className="block font-label text-xs uppercase tracking-[0.24em] text-steel"
          >
            The internet wallet · Nigeria
          </motion.span>
          <motion.h1
            variants={reveal}
            className="mt-5 font-serif text-[clamp(3rem,7.5vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.02em]"
          >
            Never run out
            <br />
            <em className="font-medium italic text-accent">of data</em> again.
          </motion.h1>
          <motion.p
            variants={reveal}
            className="mt-6 max-w-[40ch] text-[19px] leading-relaxed text-steel"
          >
            Set money aside for the internet, then buy bundles on MTN, Airtel,
            Glo and 9mobile in seconds. One wallet, ring-fenced for staying
            online.
          </motion.p>
          <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/register"
              className="flex h-[52px] items-center gap-2 rounded-[4px] bg-accent px-6 text-[15px] text-white transition-colors hover:bg-accent-hover"
            >
              Create free account
              <ArrowRight className="size-[18px]" />
            </Link>
            <a
              href="#how"
              className="flex h-[52px] items-center rounded-[4px] border border-line px-6 text-[15px] text-ink transition-colors hover:border-ink"
            >
              See how it works
            </a>
          </motion.div>
          <motion.div
            variants={reveal}
            className="mt-9 flex items-center gap-4 font-label text-sm text-steel"
          >
            <span>
              <b className="font-head text-ink">1,200+</b> people connected
            </span>
            <span className="h-5 w-px bg-line" />
            <span>
              ★ <b className="font-head text-ink">4.8</b> average rating
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="show"
          className="rounded-[14px] border border-line bg-white p-6 shadow-[0_30px_60px_-34px_rgba(10,10,10,0.3)]"
        >
          <div className="flex items-center justify-between">
            <span className="font-grotesque text-base font-semibold">
              Good evening, Moshood
            </span>
            <span className="flex size-[34px] items-center justify-center rounded-full bg-ink font-label text-[13px] text-white">
              M
            </span>
          </div>
          <div className="mt-5 rounded-[11px] border border-line bg-mist p-[22px]">
            <span className="flex items-center gap-2 font-label text-[11px] uppercase tracking-[0.16em] text-steel">
              <SignalBars className="h-3 text-accent" /> Reserved for data
            </span>
            <div className="mt-3 font-head text-[42px] font-bold tracking-[-0.02em]">
              ₦5,000<span className="text-steel">.00</span>
            </div>
            <div className="mt-4 flex gap-1">
              {RESERVE_METER.map((filled, index) => (
                <span
                  key={index}
                  className={`h-2 flex-1 rounded-[2px] ${filled ? "bg-ink" : "bg-fog"}`}
                />
              ))}
            </div>
            <p className="mt-2.5 font-label text-xs text-steel">
              ₦1,200 used this month · 62% still reserved
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <button className="h-[46px] rounded-lg bg-accent text-sm text-white">
              Buy data
            </button>
            <button className="h-[46px] rounded-lg border border-line text-sm text-ink transition-colors hover:border-ink">
              Add money
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={reveal}
        {...inView}
        className="border-y border-line"
      >
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-7 py-6">
          <span className="font-label text-[13px] uppercase tracking-[0.14em] text-steel">
            Buy data on
          </span>
          {NETWORKS.map((name) => (
            <span
              key={name}
              className="font-head text-[19px] font-bold text-steel/70"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
