"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import type { HomeProduct } from "@/lib/seftekraHome";

/**
 * The value arc as a horizontal timeline: Day One (tariff replaces bill)
 * → Year 5 (system is yours) → Years 6–20 (essentially free energy).
 * This is the frame that sells — the payoff of ownership, not the cost.
 */
export default function ValueTimeline({
  milestones,
}: {
  milestones: HomeProduct["valueTimeline"];
}) {
  return (
    <section className="relative overflow-hidden border-y border-white/5 px-6 py-32">
      <div className="sunburst-bg absolute inset-0 z-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
              The Long Game
            </p>
            <h2 className="text-3xl font-light md:text-4xl">
              What ownership <span className="font-bold text-gold">actually feels like.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="absolute left-0 right-0 top-[26px] hidden h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.milestone}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Node */}
                <div className="relative z-10 mx-auto mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gold/40 bg-midnight">
                  <span className="font-display text-xs font-bold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="mb-2 block text-xs font-bold tracking-[0.2em] uppercase text-gold">
                  {m.milestone}
                </span>
                <h3 className="mb-3 font-display text-lg font-medium text-white">
                  {m.title}
                </h3>
                <p className="mx-auto max-w-xs text-sm font-light leading-relaxed text-gray-400">
                  {m.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
