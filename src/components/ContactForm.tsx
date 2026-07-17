"use client";

import { type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 4000);
      }
    } catch {
      // silently ignore network errors
    }
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
            <input
              type="hidden"
              name="access_key"
              value={WEB3FORMS_KEY}
            />
            <input
              type="hidden"
              name="subject"
              value="New Project Submission — Seftekra"
            />

            <div className="border-b border-white/20 pb-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-transparent text-sm font-light text-white placeholder:text-gray-600 focus:outline-none"
              />
            </div>
            <div className="border-b border-white/20 pb-2">
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full bg-transparent text-sm font-light text-white placeholder:text-gray-600 focus:outline-none"
              />
            </div>
            <div className="border-b border-white/20 pb-2">
              <textarea
                name="message"
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
