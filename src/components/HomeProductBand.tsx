import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

/**
 * Homepage intro band for Seftekra Home — the individual housing product.
 * Sits between StrategySection and ContactForm, bridging the B2B story
 * to the consumer product.
 */
export default function HomeProductBand() {
  return (
    <section className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-lg border border-gold/25 bg-gold/[0.03] p-10 backdrop-blur-[10px] md:p-14">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-bold tracking-[0.25em] uppercase text-gold">
                  Introducing
                </p>
                <h2 className="mb-3 font-display text-3xl font-light text-white md:text-4xl">
                  Seftekra <span className="font-bold text-gold">Home.</span>
                </h2>
                <p className="text-sm font-light leading-relaxed text-gray-400 md:text-base">
                  Solar and battery storage for your house — from a 25% deposit,
                  paying only for the energy you use, with everything included.
                  The same engineering team behind our grid-scale
                  infrastructure, sized for your roof.
                </p>
              </div>

              <Link
                href="/seftekra-home"
                className="shrink-0 rounded-full bg-gold px-8 py-3 text-sm font-bold tracking-wide text-black transition-all hover:scale-[1.02] hover:bg-white"
              >
                Explore Seftekra Home <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
