"use client";

import { useReducedMotion, type Variants } from "framer-motion";

/** Container: reveals its children in sequence. */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/** Spread onto a container to play once it scrolls into view. */
export const inView = {
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: true, amount: 0.2 },
};

/**
 * Diagonal slide-in from the top-right — collapses to a plain fade when the
 * user prefers reduced motion. It's a hook because it reads that preference.
 */
export function useReveal(): Variants {
  const reduce = useReducedMotion();
  return {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, x: 70, y: -50 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };
}
