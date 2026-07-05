"use client";

import { motion } from "framer-motion";
import { stagger, inView, useReveal } from "./motion-presets";

const STEPS = [
  {
    number: "01",
    title: "Create your account",
    body: "Sign up in under a minute — no paperwork, no waiting.",
  },
  {
    number: "02",
    title: "Reserve your balance",
    body: "Add money and set it aside for the internet. It stays ring-fenced until you spend it on data.",
  },
  {
    number: "03",
    title: "Buy data anytime",
    body: "Choose a network and bundle, enter your number, and you're connected in seconds.",
  },
];

export function HowItWorks() {
  const reveal = useReveal();

  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-[1200px] px-7">
        <motion.div variants={stagger} {...inView} className="max-w-[620px]">
          <motion.span
            variants={reveal}
            className="block font-label text-xs uppercase tracking-[0.24em] text-steel"
          >
            Get started
          </motion.span>
          <motion.h2
            variants={reveal}
            className="mt-3.5 text-[clamp(2rem,4.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em]"
          >
            Set up in minutes.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          {...inView}
          className="mt-[52px] border-t border-line"
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={reveal}
              className="grid grid-cols-[auto_1fr] items-start gap-6 border-b border-line py-[34px]"
            >
              <span className="font-display text-[56px] leading-[0.8] text-fog">
                {step.number}
              </span>
              <div>
                <h3 className="text-[22px]">{step.title}</h3>
                <p className="mt-2 max-w-[52ch] text-[15px] text-steel">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
