"use client";

import { motion } from "framer-motion";
import { stagger, inView, useReveal } from "./motion-presets";

const STATS = [
  { value: "1,200+", label: "People connected" },
  { value: "₦8M+", label: "Data delivered" },
  { value: "4.8★", label: "Average rating" },
  { value: "4", label: "Networks supported" },
];

export function StatsSection() {
  const reveal = useReveal();

  return (
    <section className="bg-mist py-[70px]">
      <motion.div
        variants={stagger}
        {...inView}
        className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-10 px-7 md:grid-cols-4"
      >
        {STATS.map((stat) => (
          <motion.div key={stat.label} variants={reveal}>
            <div className="font-display text-[clamp(3rem,6vw,4.5rem)] leading-none tracking-[-0.01em]">
              {stat.value}
            </div>
            <div className="mt-2 font-label text-sm text-steel">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
