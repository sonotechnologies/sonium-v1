"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SignalBars } from "./signal-bars";
import { stagger, inView, useReveal } from "./motion-presets";

const COLUMNS = [
  {
    heading: "Product",
    links: ["Features", "How it works", "Buy data", "Wallet"],
  },
  { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { heading: "Support", links: ["Help center", "FAQ", "Terms", "Privacy"] },
];

export function Footer() {
  const reveal = useReveal();

  return (
    <footer className="relative overflow-hidden border-t border-line pb-10 pt-16">
      <div className="mx-auto max-w-[1200px] px-7">
        <motion.div
          variants={stagger}
          {...inView}
          className="grid grid-cols-1 gap-9 md:grid-cols-[1.6fr_1fr_1fr_1.4fr]"
        >
          <motion.div variants={reveal}>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-[5px] bg-ink">
                <SignalBars className="h-[15px] text-accent" />
              </span>
              <span className="font-head text-[21px] font-bold tracking-[-0.02em]">
                Sonium
              </span>
            </Link>
            <p className="mt-4 max-w-[30ch] text-sm text-steel">
              Your personal internet wallet. Reserve. Buy. Stay connected.
            </p>
            <div className="mt-[18px] flex max-w-[320px] overflow-hidden rounded-[6px] border border-line">
              <input
                type="email"
                placeholder="you@email.com"
                aria-label="Email address"
                className="h-[46px] flex-1 px-3.5 text-sm outline-none"
              />
              <button
                type="button"
                aria-label="Subscribe"
                className="flex w-[52px] items-center justify-center bg-ink text-white transition-colors hover:bg-graphite"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </motion.div>

          {COLUMNS.map((column) => (
            <motion.div key={column.heading} variants={reveal}>
              <h5 className="font-label text-[13px] uppercase tracking-[0.14em] text-steel">
                {column.heading}
              </h5>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] text-steel transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="watermark mt-12 select-none text-[clamp(90px,18vw,220px)] leading-[0.7]">
          SONIUM
        </div>

        <div className="mt-6 flex flex-wrap justify-between gap-3 border-t border-line pt-6 font-label text-[13px] text-steel">
          <span>© 2026 Sonium. All rights reserved.</span>
          <span>Built in Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
