"use client";

import { motion } from "framer-motion";
import type { FinancingModel } from "@/lib/financing";

type Row = {
  label: string;
  key: "upfront" | "ownership" | "om" | "bestFor" | "risk" | "roi";
};

const ROWS: Row[] = [
  { label: "Upfront Cost", key: "upfront" },
  { label: "Ownership", key: "ownership" },
  { label: "Operations & Maintenance", key: "om" },
  { label: "Best For", key: "bestFor" },
  { label: "Risk Held By", key: "risk" },
  { label: "ROI Profile", key: "roi" },
];

/**
 * Comparison matrix across all three financing models. Built mobile-first:
 * a stacked card layout on small screens, a true grid on desktop.
 */
export default function FinancingComparison({
  models,
  highlightedSlug,
}: {
  models: FinancingModel[];
  highlightedSlug?: string;
}) {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
            Side by Side
          </p>
          <h2 className="text-3xl font-light md:text-4xl">
            Compare the <span className="font-bold text-gold">three models.</span>
          </h2>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden overflow-hidden rounded-lg border border-white/10 md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.03]">
                <th className="p-6 text-left text-xs font-bold tracking-[0.15em] uppercase text-gray-500">
                  &nbsp;
                </th>
                {models.map((m) => (
                  <th
                    key={m.slug}
                    className={`p-6 text-left transition-colors ${
                      highlightedSlug === m.slug
                        ? "bg-gold/[0.06]"
                        : ""
                    }`}
                  >
                    <span className="block text-xs font-bold tracking-[0.2em] uppercase text-gold/70">
                      {m.number}
                    </span>
                    <span className="font-display text-lg font-medium text-white">
                      {m.title}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, ri) => (
                <tr
                  key={row.key}
                  className={ri % 2 === 0 ? "bg-white/[0.01]" : ""}
                >
                  <td className="p-6 text-xs font-medium tracking-[0.1em] uppercase text-gray-500">
                    {row.label}
                  </td>
                  {models.map((m) => (
                    <td
                      key={m.slug}
                      className={`p-6 text-sm font-light text-gray-300 transition-colors ${
                        highlightedSlug === m.slug ? "bg-gold/[0.06]" : ""
                      }`}
                    >
                      {m[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="space-y-6 md:hidden">
          {models.map((m) => (
            <div
              key={m.slug}
              className={`rounded-lg border p-6 backdrop-blur-[10px] transition-colors ${
                highlightedSlug === m.slug
                  ? "border-gold/50 bg-gold/[0.04]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <h3 className="mb-4 font-display text-lg font-medium text-white">
                {m.title}
              </h3>
              <dl className="space-y-3">
                {ROWS.map((row) => (
                  <div key={row.key} className="flex justify-between gap-4">
                    <dt className="text-xs uppercase tracking-wide text-gray-500">
                      {row.label}
                    </dt>
                    <dd className="text-right text-sm font-light text-gray-300">
                      {m[row.key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
