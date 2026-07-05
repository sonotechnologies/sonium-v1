"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { inView, useReveal } from "./motion-presets";

export function CTASection() {
  const reveal = useReveal();

  return (
    <section className="px-7 pb-24 pt-5">
      <motion.div
        variants={reveal}
        {...inView}
        className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[22px] bg-ink px-10 py-20 text-center text-white"
      >
        <span
          className="pointer-events-none absolute bottom-[-14%] left-1/2 -translate-x-1/2 select-none font-display leading-[0.8] tracking-[-0.02em] text-[clamp(120px,20vw,240px)]"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.08)",
          }}
        >
          ONLINE
        </span>

        <div className="relative z-10">
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
            Stop running
            <br />
            out of data.
          </h2>
          <p className="mx-auto mt-4.5 max-w-[48ch] text-[18px] text-white/[0.66]">
            Reserve money for the internet today and stay connected on every
            Nigerian network — no last-minute scramble.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/register"
              className="flex h-[52px] items-center rounded-[4px] bg-accent px-6 text-[15px] text-white transition-colors hover:bg-accent-hover"
            >
              Create free account
            </Link>
            <Link
              href="/login"
              className="flex h-[52px] items-center gap-2 rounded-[4px] border border-white/35 px-6 text-[15px] text-white transition-colors hover:bg-white/10"
            >
              Log in
              <ArrowRight className="size-[18px]" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
