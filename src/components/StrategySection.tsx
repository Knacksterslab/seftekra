"use client";

import { motion, type Variants } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { STRATEGIES } from "@/lib/constants";

const cardVariants: Variants = {
  rest: { y: 0 },
  hover: {
    y: -8,
    borderColor: "rgba(255, 255, 255, 0.3)",
    background: "rgba(255, 255, 255, 0.06)",
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)",
    transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] as const },
  },
};

export default function StrategySection() {
  return (
    <section id="models" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl font-light md:text-5xl">
              Engineered for Your{" "}
              <span className="font-bold text-gold">Capital Strategy.</span>
            </h2>
            <p className="mx-auto max-w-2xl font-light text-gray-500">
              Flexible financial models designed to align with your balance sheet and
              long-term energy goals.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STRATEGIES.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 0.15}>
              <motion.div
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-10 backdrop-blur-[10px]"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                <div>
                  <span className="mb-6 block text-xs tracking-[0.2em] uppercase text-gray-500">
                    {s.id} / Model
                  </span>
                  <h4 className="mb-4 text-2xl font-medium text-white">
                    {s.title}
                  </h4>
                  <p className="text-sm font-light leading-relaxed text-gray-400">
                    {s.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-gold/70">
                  {s.label} <span>&rarr;</span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
