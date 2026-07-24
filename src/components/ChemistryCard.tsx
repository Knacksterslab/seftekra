import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import type { StorageChemistry } from "@/lib/storage";

/**
 * Clickable chemistry card used on the /storage hub. Mirrors SolutionCard.
 * Leads the headline with duration — the differentiator vs lithium-ion.
 */
export default function ChemistryCard({
  chemistry,
  index,
}: {
  chemistry: StorageChemistry;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.12}>
      <Link
        href={`/storage/${chemistry.slug}`}
        className="glass-card group relative flex h-80 flex-col justify-between overflow-hidden rounded-lg p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60"
      >
        <Image
          src={chemistry.heroImage}
          alt={chemistry.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-20 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/95 via-midnight/50 to-transparent" />

        <div className="relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold/70">
            {chemistry.number} / {chemistry.label}
          </span>
          <h3 className="mt-3 font-display text-2xl font-medium text-white">
            {chemistry.title}
          </h3>
          <p className="mt-2 font-display text-sm font-bold text-gold">
            {chemistry.durationHours}
          </p>
        </div>

        <div className="relative z-10">
          <p className="mb-4 text-sm font-light leading-relaxed text-gray-300">
            {chemistry.tagline}
          </p>
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-gold transition-all group-hover:gap-3">
            Explore <span>&rarr;</span>
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
}
