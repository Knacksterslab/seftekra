"use client";

import { motion } from "framer-motion";

type Step = {
  step: string;
  title: string;
  detail: string;
};

/**
 * The engagement lifecycle as a horizontal stepper. Tells a procurement
 * team exactly how working with Seftekra works, de-risking the decision.
 */
export default function ProcessStepper({ steps }: { steps: Step[] }) {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
            How We Work
          </p>
          <h2 className="text-3xl font-light md:text-4xl">
            From feasibility to <span className="font-bold text-gold">decades of yield.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-8 backdrop-blur-[10px] transition-colors duration-300 hover:border-gold/30"
            >
              <div className="absolute right-4 top-4 font-display text-5xl font-bold text-white/[0.04] transition-colors duration-300 group-hover:text-gold/10">
                {s.step}
              </div>
              <span className="mb-4 block text-xs font-bold tracking-[0.2em] uppercase text-gold">
                Step {s.step}
              </span>
              <h3 className="mb-3 font-display text-lg font-medium text-white">
                {s.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-gray-400">
                {s.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
