"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import type { HomeProduct } from "@/lib/seftekraHome";

/**
 * The commercial core of Seftekra Home: two purchase paths side by side.
 * Copy rules enforced here: no "2X", no APR math — structure only, with
 * the fixed-at-assessment tariff language and a bridge to Lease-to-Own.
 */
export default function PayStructure({
  payPaths,
  tariffIncluded,
}: {
  payPaths: HomeProduct["payPaths"];
  tariffIncluded: string[];
}) {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
              Two Ways to Own It
            </p>
            <h2 className="text-3xl font-light md:text-4xl">
              Pay for the system, <span className="font-bold text-gold">or pay as you go.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-light text-gray-400">
              Both paths end in the same place: a solar and battery system on
              your roof, owned by you. The difference is when.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {payPaths.map((path, i) => {
            const isTariff = path.id === "tariff";
            return (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative overflow-hidden rounded-lg border p-10 backdrop-blur-[10px] transition-colors duration-300 ${
                  isTariff
                    ? "border-gold/40 bg-gold/[0.04]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {isTariff && (
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                )}

                <span
                  className={`text-xs font-bold tracking-[0.2em] uppercase ${
                    isTariff ? "text-gold" : "text-gray-500"
                  }`}
                >
                  {path.label}
                </span>
                <h3 className="mt-3 mb-4 font-display text-2xl font-medium text-white">
                  {path.title}
                </h3>
                <p className="mb-6 text-sm font-light leading-relaxed text-gray-300">
                  {path.summary}
                </p>

                <ul className="space-y-3">
                  {path.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm font-light text-gray-400">
                      <span className="mt-[0.45em] block h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {isTariff && (
                  <div className="mt-8 rounded-lg border border-white/5 bg-midnight/60 p-5">
                    <p className="mb-3 text-xs font-bold tracking-[0.15em] uppercase text-gray-500">
                      Included in your tariff
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tariffIncluded.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-gold/20 bg-gold/[0.06] px-3 py-1 text-xs font-light text-orange-200/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-10 text-center">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-full border border-gold px-8 py-3 text-sm font-medium tracking-wide text-gold transition-colors hover:bg-gold hover:text-black"
            >
              Get started with an assessment <span>&rarr;</span>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs font-light leading-relaxed text-gray-600">
            The tariff structure is the same principle as our institutional{" "}
            <Link
              href="/financing/lease-to-own"
              className="text-gold/80 underline-offset-4 hover:underline"
            >
              Lease-to-Own model
            </Link>
            , sized for a home. System size, price, and tariff are fixed per
            home at assessment — no obligation until you approve the quote.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
