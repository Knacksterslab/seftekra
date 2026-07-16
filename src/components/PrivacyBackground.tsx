"use client";

import { motion } from "framer-motion";

export default function PrivacyBackground() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(ellipse 600px 400px at 20% 30%, rgba(255,215,0,0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 600px 400px at 80% 60%, rgba(255,215,0,0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 600px 400px at 30% 80%, rgba(255,215,0,0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 600px 400px at 20% 30%, rgba(255,215,0,0.06) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </>
  );
}
