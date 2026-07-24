"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

/**
 * The conceptual anchor of the /storage pillar: the "why not lithium-ion"
 * framing. Makes the LDES differentiator explicit rather than implied.
 */
const COMPARISON = [
  {
    label: "Duration",
    ldes: "10–100+ hours",
    li: "2–4 hours",
  },
  {
    label: "Capacity fade",
    ldes: "None — no degradation",
    li: "Progressive, cycle-limited",
  },
  {
    label: "Thermal risk",
    ldes: "Aqueous, non-flammable",
    li: "Thermal runaway possible",
  },
  {
    label: "Critical minerals",
    ldes: "Iron, air, vanadium — abundant",
    li: "Lithium, cobalt, nickel",
  },
  {
    label: "Cycle life",
    ldes: "20–25+ years",
    li: "~10 years",
  },
];

export default function LdesExplainer() {
  return (
    <section className="border-y border-white/5 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
              The Duration Problem
            </p>
            <h2 className="text-3xl font-light md:text-4xl">
              Lithium-ion solved the <span className="font-bold text-gold">first four hours.</span>
              <br className="hidden md:block" />
              We solve the next ninety-six.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-relaxed text-gray-400 md:text-base">
              Conventional batteries discharge for a few hours — enough to cover
              the evening peak. They were never built to bridge multi-day
              weather events, shift energy across seasons, or cycle hard for
              decades without fading. That requires a different category of
              storage entirely.
            </p>
          </div>
        </ScrollReveal>

        <div className="overflow-hidden rounded-lg border border-white/10">
          {/* Header row */}
          <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.03]">
            <div className="p-5 text-xs font-bold tracking-[0.15em] uppercase text-gray-500">
              &nbsp;
            </div>
            <div className="p-5 text-center">
              <span className="block text-xs tracking-[0.2em] uppercase text-gold">
                Seftekra
              </span>
              <span className="font-display text-sm font-medium text-white">
                Long-Duration
              </span>
            </div>
            <div className="p-5 text-center">
              <span className="block text-xs tracking-[0.2em] uppercase text-gray-600">
                Conventional
              </span>
              <span className="font-display text-sm font-medium text-gray-500">
                Lithium-Ion
              </span>
            </div>
          </div>

          {/* Rows */}
          {COMPARISON.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`grid grid-cols-3 border-b border-white/5 last:border-0 ${
                i % 2 === 0 ? "bg-white/[0.01]" : ""
              }`}
            >
              <div className="p-5 text-xs font-medium tracking-[0.1em] uppercase text-gray-500">
                {row.label}
              </div>
              <div className="p-5 text-center text-sm font-light text-white">
                {row.ldes}
              </div>
              <div className="p-5 text-center text-sm font-light text-gray-500">
                {row.li}
              </div>
            </motion.div>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs font-light text-gray-600">
            Lithium-ion remains the right tool for short, high-power discharge.
            Our chemistries are the right tool when the question is endurance.
            Most grid-scale systems use both.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
