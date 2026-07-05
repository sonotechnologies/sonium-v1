"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { stagger, inView, useReveal } from "./motion-presets";

const FAQS = [
  {
    question: "What exactly is Sonium?",
    answer:
      "Sonium is a dedicated internet wallet. You reserve money specifically for data, then buy bundles from any Nigerian network in seconds. It isn't a bank or a telecom — it's the layer that makes staying online simple and organised.",
  },
  {
    question: "Which networks can I buy data on?",
    answer:
      "All four major Nigerian networks — MTN, Airtel, Glo and 9mobile — from the same wallet, with bundles ranging from 500MB to 100GB and above.",
  },
  {
    question: "Is my reserved money safe?",
    answer:
      "Your balance is ring-fenced for internet purchases and protected with standard bank-grade security. Nothing else can spend it, and every transaction is logged.",
  },
  {
    question: "How fast does data arrive?",
    answer:
      "In seconds. Choose a bundle, enter the number, and the data lands on the line right away — no waiting, no agents.",
  },
  {
    question: "Do I need to fund the wallet first?",
    answer:
      "Yes — you add money to your wallet, and that reserved balance is what you draw from whenever you buy data.",
  },
];

export function FaqSection() {
  const reveal = useReveal();
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-[1200px] px-7">
        <motion.div
          variants={stagger}
          {...inView}
          className="mx-auto max-w-[620px] text-center"
        >
          <motion.span
            variants={reveal}
            className="block font-label text-xs uppercase tracking-[0.24em] text-steel"
          >
            Questions
          </motion.span>
          <motion.h2
            variants={reveal}
            className="mt-3.5 text-[clamp(2rem,4.4vw,3rem)] font-semibold leading-[1.06] tracking-[-0.02em]"
          >
            Frequently asked.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          {...inView}
          className="mx-auto mt-[52px] max-w-[820px] space-y-3"
        >
          {FAQS.map((faq, index) => {
            const open = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                variants={reveal}
                className="overflow-hidden rounded-2xl border border-line bg-white"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-label text-[17px] font-semibold">
                    {faq.question}
                  </span>
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      open ? "bg-mist text-ink" : "bg-mist text-ink"
                    }`}
                  >
                    {open ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-5 text-[15px] leading-[1.7] text-steel">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
