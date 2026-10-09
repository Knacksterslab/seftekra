"use client";

import { useEffect, type FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { trackLead, captureAttribution, getAttribution } from "@/lib/analytics";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full bg-transparent text-sm font-light text-white placeholder:text-gray-600 focus:outline-none";

/**
 * Consumer lead capture for Seftekra Home. Submits to Web3Forms with its
 * own subject line ("Seftekra Home Lead") so home leads are triaged apart
 * from B2B inquiries, carries ad attribution (utm + click IDs) as hidden
 * fields, and fires Lead conversion events on success.
 */
export default function HomeLeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [attribution, setAttribution] = useState<Record<string, string>>({});

  // Capture campaign attribution on mount (persists via sessionStorage so
  // browsing before submitting doesn't lose the source). Set in state after
  // mount to avoid a server/client hydration mismatch.
  useEffect(() => {
    captureAttribution();
    setAttribution(getAttribution());
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Fail fast with a clear reason if the access key didn't make it into
    // the bundle (stale compile / missing env) instead of a mystery 400.
    if (!String(data.get("access_key") ?? "")) {
      console.error(
        "[HomeLeadForm] NEXT_PUBLIC_WEB3FORMS_KEY is empty in this build — form not configured. Add it to .env.local and fully restart the dev server.",
      );
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = (await res.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (res.ok && result?.success) {
        form.reset();
        setStatus("success");
        trackLead();
      } else {
        // Surface the server's actual rejection reason in the console.
        console.error(
          "[HomeLeadForm] submission rejected:",
          res.status,
          result?.message ?? "no response body",
        );
        setStatus("error");
      }
    } catch (err) {
      console.error("[HomeLeadForm] network failure:", err);
      setStatus("error");
    }
  };

  return (
    <section id="get-started" className="border-t border-white/5 px-6 py-32">
      <div className="mx-auto max-w-xl text-center">
        <ScrollReveal>
          <h2 className="mb-6 text-3xl font-light md:text-4xl">
            Get your home <span className="font-bold">assessed.</span>
          </h2>
          <p className="mb-12 font-light text-gray-400">
            Free, no obligation. We&apos;ll size your system and fix your quote —
            cash or tariff, your choice.
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
                  Assessment Request Received
                </h3>
                <p className="mb-6 text-sm font-light leading-relaxed text-gray-400">
                  Thank you. Our team will call you within 1–2 business days to
                  arrange your site assessment.
                </p>
                <button
                  onClick={() => setStatus("idle")}
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
                <input
                  type="hidden"
                  name="access_key"
                  value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""}
                />
                <input
                  type="hidden"
                  name="subject"
                  value="Seftekra Home Lead"
                />
                <input
                  type="hidden"
                  name="landing_page"
                  value="Seftekra Home (/seftekra-home)"
                />
                {Object.entries(attribution).map(([key, value]) => (
                  <input key={key} type="hidden" name={key} value={value} />
                ))}

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="border-b border-white/20 pb-2">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className={inputClasses}
                    />
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone (e.g. +254…)"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="border-b border-white/20 pb-2">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      className={inputClasses}
                    />
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="City / Area"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="border-b border-white/20 pb-2">
                    <select
                      name="home_status"
                      required
                      defaultValue=""
                      className={`${inputClasses} appearance-none bg-midnight`}
                    >
                      <option value="" disabled>
                        Do you own your home?
                      </option>
                      <option value="Own">I own it</option>
                      <option value="Rent">I rent</option>
                    </select>
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <select
                      name="preferred_path"
                      required
                      defaultValue=""
                      className={`${inputClasses} appearance-none bg-midnight`}
                    >
                      <option value="" disabled>
                        Preferred way to pay
                      </option>
                      <option value="Pay in Full">Pay in full</option>
                      <option value="25% + Tariff">25% deposit + tariff</option>
                      <option value="Not Sure">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <textarea
                  name="notes"
                  rows={2}
                  placeholder="Anything we should know? (optional)"
                  className={`w-full resize-none border-b border-white/20 pb-2 ${inputClasses}`}
                />

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
                    {status === "loading" ? "Sending…" : "Request Free Assessment"}
                  </motion.button>
                  <p className="mt-4 text-xs font-light text-gray-600">
                    No obligation. We&apos;ll call to arrange your assessment —
                    nothing else.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
}
