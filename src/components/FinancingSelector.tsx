"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FINANCING_MODELS } from "@/lib/financing";

type Option = { label: string; models: string[] };

const QUESTIONS: { id: string; prompt: string; options: Option[] }[] = [
  {
    id: "capex",
    prompt: "Can you deploy capital up front?",
    options: [
      {
        label: "Yes — capex available",
        models: ["direct-purchase"],
      },
      {
        label: "Prefer zero upfront",
        models: ["lease-to-own", "build-operate-transfer"],
      },
      {
        label: "Not sure yet",
        models: [],
      },
    ],
  },
  {
    id: "ops",
    prompt: "Who should operate the plant?",
    options: [
      {
        label: "We'll run it ourselves",
        models: ["direct-purchase"],
      },
      {
        label: "Seftekra should operate it",
        models: ["build-operate-transfer", "lease-to-own"],
      },
      {
        label: "Flexible",
        models: [],
      },
    ],
  },
  {
    id: "risk",
    prompt: "Who should bear performance risk?",
    options: [
      {
        label: "We'll own the risk",
        models: ["direct-purchase"],
      },
      {
        label: "Seftekra should own it",
        models: ["build-operate-transfer"],
      },
      {
        label: "Shared is fine",
        models: ["lease-to-own"],
      },
    ],
  },
];

/**
 * The decision selector: answers three questions, tallies the model
 * matches, and surfaces the best-fit recommendation. Educates the buyer
 * while pre-qualifying the lead.
 */
export default function FinancingSelector() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const allAnswered = QUESTIONS.every((q) => answers[q.id]);

  // Tally matches across all answered questions
  const scores: Record<string, number> = {};
  Object.entries(answers).forEach(([qid, optionLabel]) => {
    const q = QUESTIONS.find((x) => x.id === qid);
    const opt = q?.options.find((o) => o.label === optionLabel);
    opt?.models.forEach((slug) => {
      scores[slug] = (scores[slug] ?? 0) + 1;
    });
  });

  const maxScore = Math.max(0, ...Object.values(scores));
  const recommended = maxScore > 0
    ? FINANCING_MODELS.filter(
        (m) => scores[m.slug] === maxScore,
      ).sort((a, b) => scores[b.slug] - scores[a.slug])
    : [];

  const handleSelect = (qid: string, label: string) => {
    setAnswers((prev) => ({ ...prev, [qid]: label }));
  };

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
            Find Your Fit
          </p>
          <h2 className="text-3xl font-light md:text-4xl">
            Which model fits <span className="font-bold text-gold">your strategy?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light text-gray-400">
            Three questions. No commitment. We&apos;ll point you at the structure most
            likely to fit your balance sheet.
          </p>
        </motion.div>

        <div className="space-y-6">
          {QUESTIONS.map((q, qi) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: qi * 0.1 }}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-6 backdrop-blur-[10px] md:p-8"
            >
              <p className="mb-4 text-sm font-medium text-white">
                <span className="mr-2 font-bold text-gold">
                  {String(qi + 1).padStart(2, "0")}
                </span>
                {q.prompt}
              </p>
              <div className="flex flex-wrap gap-3">
                {q.options.map((opt) => {
                  const selected = answers[q.id] === opt.label;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleSelect(q.id, opt.label)}
                      className={`rounded-full border px-5 py-2 text-xs font-medium tracking-wide transition-all ${
                        selected
                          ? "border-gold bg-gold text-black"
                          : "border-white/20 text-gray-400 hover:border-gold/50 hover:text-white"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {allAnswered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="mt-8 rounded-lg border border-gold/30 bg-gold/[0.04] p-8 text-center backdrop-blur-[10px]">
                <p className="mb-2 text-xs tracking-[0.2em] uppercase text-gold">
                  {recommended.length > 1 ? "Best Matches" : "Best Match"}
                </p>
                <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
                  {recommended.map((m) => (
                    <Link
                      key={m.slug}
                      href={`/financing/${m.slug}`}
                      className="inline-flex items-center gap-2 font-display text-lg font-medium text-white transition-colors hover:text-gold"
                    >
                      {m.title} <span className="text-gold">&rarr;</span>
                    </Link>
                  ))}
                </div>
                {recommended.length === 0 && (
                  <p className="text-sm font-light text-gray-400">
                    Your answers are flexible — any of the three models could
                    work. Explore them below.
                  </p>
                )}
                <p className="mt-4 text-xs font-light text-gray-500">
                  This is indicative, not advice. We confirm the right structure
                  during feasibility.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
