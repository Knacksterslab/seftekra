"use client";

import { motion } from "framer-motion";
import CursorGlow from "./CursorGlow";

export default function Hero() {
  return (
    <header className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,215,0,0.06) 0%, rgba(10,10,10,1) 70%)",
        }}
      />

      <div className="scan-line pointer-events-none absolute left-0 z-0 h-[2px] w-full animate-scan bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-60" />

      <CursorGlow />

      <div className="relative z-10 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6 text-5xl font-light tracking-tight md:text-7xl"
        >
          Powering the{" "}
          <span className="font-bold text-gold">Next Grid.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-gray-400 md:text-xl"
        >
          Seftekra engineers, builds, and operates premium renewable energy and
          battery storage infrastructure. From residential estates to city-scale
          installations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center justify-center gap-4 md:flex-row"
        >
          <a
            href="#solutions"
            className="rounded-full border border-gold px-8 py-3 text-sm font-medium tracking-wide text-gold transition-colors hover:bg-gold hover:text-black"
          >
            Explore Solutions
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3 text-sm tracking-wide text-gray-400 transition-colors hover:text-white"
          >
            Partner With Us <span>&rarr;</span>
          </a>
        </motion.div>
      </div>
    </header>
  );
}
