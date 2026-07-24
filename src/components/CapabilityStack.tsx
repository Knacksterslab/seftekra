"use client";

import { motion, type Variants } from "framer-motion";

type Layer = {
  title: string;
  description: string;
};

const layerVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

/**
 * The capability stack: an integrated system diagram that reveals
 * layer-by-layer on scroll. Makes "end-to-end infrastructure" visible
 * rather than just claimed.
 */
export default function CapabilityStack({ layers }: { layers: Layer[] }) {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
            Integrated Stack
          </p>
          <h2 className="text-3xl font-light md:text-4xl">
            One system, <span className="font-bold text-gold">engineered whole.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light text-gray-400">
            Every layer is designed to work with the next — from the grid down to the foundation.
          </p>
        </motion.div>

        <div className="space-y-3">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              custom={i}
              variants={layerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative flex items-center gap-6 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-6 backdrop-blur-[10px] transition-colors duration-300 hover:border-gold/40 md:p-8"
            >
              {/* Depth indicator — wider bars for higher layers */}
              <div className="hidden shrink-0 md:block">
                <div
                  className="h-1 rounded-full bg-gradient-to-r from-gold to-gold/20"
                  style={{ width: `${100 - i * 12}px` }}
                />
              </div>

              <div className="flex-1">
                <div className="mb-1 flex items-center gap-3">
                  <span className="text-xs font-bold tabular-nums text-gold/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-medium text-white">
                    {layer.title}
                  </h3>
                </div>
                <p className="text-sm font-light leading-relaxed text-gray-400">
                  {layer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
