"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

type UseCase = { title: string; description: string };

/**
 * Concrete application scenarios. Grounds abstract capabilities in
 * recognizable situations a buyer can map to their own context.
 */
export default function UseCases({
  cases,
  eyebrow = "Applications",
  heading = "Where it ",
  headingAccent = "fits.",
}: {
  cases: UseCase[];
  eyebrow?: string;
  heading?: string;
  headingAccent?: string;
}) {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
              {eyebrow}
            </p>
            <h2 className="text-3xl font-light md:text-4xl">
              {heading} <span className="font-bold text-gold">{headingAccent}</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-8 backdrop-blur-[10px]"
            >
              <span className="mb-4 block font-display text-3xl font-bold text-gold/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-display text-lg font-medium text-white">
                {uc.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-gray-400">
                {uc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
