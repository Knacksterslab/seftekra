"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { CAPABILITIES } from "@/lib/constants";

const cardVariants: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.02,
    borderColor: "rgba(255, 215, 0, 0.8)",
    boxShadow: "0 10px 40px rgba(255, 100, 0, 0.35)",
    background: "rgba(20, 10, 0, 0.8)",
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function CapabilitiesSection() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="sunburst-bg absolute inset-0 z-0" />
      <div
        className="pointer-events-none absolute left-1/2 z-0 aspect-square w-[250%] -translate-x-1/2 animate-sun-spin opacity-30"
        style={{
          top: "-120%",
          background:
            "repeating-conic-gradient(rgba(255,200,0,0.04) 0deg 10deg, transparent 10deg 20deg)",
        }}
      />

      <div className="relative z-20 mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="mb-4 text-center text-3xl font-light text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] md:text-5xl">
            End-to-End Energy{" "}
            <span className="font-bold text-gold">Infrastructure.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mx-auto mb-16 max-w-2xl text-center font-light text-orange-200/80">
            High-voltage solutions engineered for maximum yield and total energy
            independence.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <ScrollReveal key={cap.id} delay={i * 0.12}>
              <motion.div
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                className="glass-card relative flex h-64 flex-col justify-between overflow-hidden rounded-lg p-10"
              >
                <Image
                  src={cap.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/30 to-transparent" />

                <div className="relative z-10">
                  <h3 className="mb-4 text-2xl font-medium text-white">
                    {cap.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-gray-300">
                    {cap.description}
                  </p>
                </div>
                <div className="relative z-10 mt-6 animate-pulse-glow text-sm font-bold tracking-wider uppercase">
                  {cap.id} / {cap.label}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
