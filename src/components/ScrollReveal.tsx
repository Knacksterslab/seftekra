"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const baseTransition = {
  duration: 0.7,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { ...baseTransition, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
