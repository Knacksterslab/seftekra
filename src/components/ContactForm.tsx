"use client";

import { type FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setStatus("idle");
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
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="rounded-lg border border-gold/30 bg-gold/[0.04] p-10 backdrop-blur-[10px]"
              >
                <div className="mb-4 text-gold">
                  <svg
                    className="mx-auto h-10 w-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="mb-3 font-display text-xl font-medium text-white">
                  Submission Received
                </h3>
                <p className="mb-6 text-sm font-light leading-relaxed text-gray-400">
                  Thank you for reaching out. Our team will review your project
                  details and respond within 2–3 business days.
                </p>
                <button
                  onClick={resetForm}
                  className="rounded-full border border-gold px-6 py-2 text-xs font-medium tracking-wide text-gold transition-colors hover:bg-gold hover:text-black"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6 text-left"
              >
                <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""} />
                <input type="hidden" name="subject" value="New Project Submission — Seftekra" />

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

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-xs font-light text-red-400/80"
                  >
                    Something went wrong. Please try again or email us directly
                    at connect@seftekra.com.
                  </motion.p>
                )}

                <div className="pt-6 text-center">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={status === "loading"}
                    className="rounded-full bg-gold px-10 py-3 text-sm font-bold tracking-wide text-black transition-colors hover:bg-white disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending…" : "Submit for Review"}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
}
