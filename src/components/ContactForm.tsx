"use client";

import { type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="border-t border-white/5 px-6 py-32">
      <div className="mx-auto max-w-xl text-center">
        <ScrollReveal>
          <h2 className="mb-6 text-3xl font-light md:text-4xl">
            Have a project?{" "}
            <span className="font-bold">Let&apos;s build it.</span>
          </h2>
          <p className="mb-12 font-light text-gray-400">
            Whether you have a shovel-ready site, a grid connection, or an
            estate that needs power, Seftekra provides the capital and
            operational expertise.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="border-b border-white/20 pb-2">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full bg-transparent text-sm font-light text-white placeholder:text-gray-600 focus:outline-none"
              />
            </div>
            <div className="border-b border-white/20 pb-2">
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full bg-transparent text-sm font-light text-white placeholder:text-gray-600 focus:outline-none"
              />
            </div>
            <div className="border-b border-white/20 pb-2">
              <textarea
                required
                placeholder="Project Details (Location, Size, Type)"
                rows={2}
                className="w-full resize-none bg-transparent text-sm font-light text-white placeholder:text-gray-600 focus:outline-none"
              />
            </div>

            <div className="pt-6 text-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={sent}
                className="rounded-full bg-gold px-10 py-3 text-sm font-bold tracking-wide text-black transition-colors hover:bg-white disabled:opacity-60"
              >
                {sent ? "Submission Received" : "Submit for Review"}
              </motion.button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
