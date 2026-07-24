"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

type LinkItem = {
  label: string;
  title: string;
  href: string;
};

/**
 * Cross-link grid between related content. Connects solutions to their
 * compatible financing models (and vice versa), building a web of intent
 * rather than a dead-end page.
 */
export default function CrossLinks({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: string;
  items: LinkItem[];
}) {
  return (
    <section className="border-t border-white/5 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
              {eyebrow}
            </p>
            <h2 className="text-2xl font-light md:text-3xl">{heading}</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={item.href}
                className="group flex h-full flex-col justify-between rounded-lg border border-white/10 bg-white/[0.03] p-8 backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
              >
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold/70">
                    {item.label}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-medium text-white">
                    {item.title}
                  </h3>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-gold transition-all group-hover:gap-3">
                  View <span>&rarr;</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
