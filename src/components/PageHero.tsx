import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

/**
 * Reusable inner-page hero. Renders the Seftekra eyebrow + gold-accent
 * title + tagline pattern used across all solution and financing pages.
 */
export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  tagline,
  persona,
  children,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  tagline: string;
  persona?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden px-6 pb-20 pt-40">
      <div className="sunburst-bg absolute inset-0 z-0 opacity-40" />
      <div
        className="pointer-events-none absolute left-1/2 z-0 aspect-square w-[180%] -translate-x-1/2 animate-sun-spin opacity-20"
        style={{
          top: "-80%",
          background:
            "repeating-conic-gradient(rgba(255,200,0,0.04) 0deg 10deg, transparent 10deg 20deg)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
            {eyebrow}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h1 className="mb-6 font-display text-4xl font-light tracking-tight md:text-6xl">
            {title}{" "}
            {titleAccent && (
              <span className="font-bold text-gold">{titleAccent}</span>
            )}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="mx-auto mb-8 max-w-2xl text-base font-light leading-relaxed text-gray-400 md:text-lg">
            {tagline}
          </p>
        </ScrollReveal>
        {persona && (
          <ScrollReveal delay={0.22}>
            <p className="mx-auto max-w-xl text-sm font-light italic text-orange-200/70">
              {persona}
            </p>
          </ScrollReveal>
        )}
        {children}
      </div>
    </header>
  );
}
