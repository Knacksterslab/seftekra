"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import type { HomeProduct } from "@/lib/seftekraHome";

/**
 * "Right chemistry for the duty cycle" — explains why Seftekra Home uses
 * LiFePO4 (honestly named as lithium) while the grid-scale business runs
 * LDES chemistries. Keeps the product page and the /storage pillar coherent.
 */
export default function ChemistryChoice({
  chemistry,
}: {
  chemistry: HomeProduct["chemistry"];
}) {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
              The Battery Question
            </p>
            <h2 className="text-3xl font-light md:text-4xl">
              Why iron at grid scale, <span className="font-bold text-gold">LiFePO₄ at home?</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Home duty cycle */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-gold/30 bg-gold/[0.03] p-10 backdrop-blur-[10px]"
          >
            <span className="mb-4 block text-xs font-bold tracking-[0.2em] uppercase text-gold">
              Your Home · Hours of Backup
            </span>
            <h3 className="mb-5 font-display text-2xl font-medium text-white">
              Lithium Iron Phosphate (LiFePO₄)
            </h3>
            <div className="space-y-4">
              {chemistry.lfpParas.map((para, i) => (
                <p key={i} className="text-sm font-light leading-relaxed text-gray-300">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Cobalt-free", "No thermal runaway", "Daily cycling, 10–15 yr life", "Wall-mount compact"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gold/20 bg-gold/[0.06] px-3 py-1 text-xs font-light text-orange-200/80"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* Grid duty cycle */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-10 backdrop-blur-[10px]"
          >
            <span className="mb-4 block text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
              The Grid · Days of Firming
            </span>
            <h3 className="mb-5 font-display text-2xl font-medium text-white">
              Iron-Air, Iron &amp; Vanadium Flow
            </h3>
            <p className="text-sm font-light leading-relaxed text-gray-400">
              {chemistry.ldesPara}
            </p>
            <Link
              href="/storage"
              className="mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-gold transition-all hover:gap-3"
            >
              Explore our long-duration storage <span>&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
