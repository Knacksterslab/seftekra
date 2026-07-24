import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import type { Solution } from "@/lib/solutions";

/**
 * Clickable solution card used on the /solutions hub. Replaces the
 * homepage's dead-end cards with a real link to the detail page.
 */
export default function SolutionCard({
  solution,
  index,
}: {
  solution: Solution;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <Link
        href={`/solutions/${solution.slug}`}
        className="glass-card group relative flex h-72 flex-col justify-between overflow-hidden rounded-lg p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60"
      >
        <Image
          src={solution.heroImage}
          alt={solution.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-20 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/40 to-transparent" />

        <div className="relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold/70">
            {solution.number} / {solution.label}
          </span>
          <h3 className="mt-3 font-display text-2xl font-medium text-white">
            {solution.title}
          </h3>
        </div>

        <div className="relative z-10">
          <p className="mb-4 text-sm font-light leading-relaxed text-gray-300">
            {solution.tagline}
          </p>
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-gold transition-all group-hover:gap-3">
            Explore <span>&rarr;</span>
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
}
