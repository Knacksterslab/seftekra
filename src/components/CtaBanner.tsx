import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

/**
 * Persistent "Partner With Us" CTA banner. Appears near the bottom of
 * every solution and financing detail page, linking to the homepage form.
 */
export default function CtaBanner({
  heading = "Have a project? Let's build it.",
  subheading = "Whether you have a shovel-ready site, a grid connection, or an estate that needs power, Seftekra provides the capital and operational expertise.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-white/5 px-6 py-32">
      <div className="sunburst-bg absolute inset-0 z-0 opacity-30" />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <ScrollReveal>
          <h2 className="mb-6 text-3xl font-light md:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-sm font-light leading-relaxed text-gray-400 md:text-base">
            {subheading}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-10 py-3 text-sm font-bold tracking-wide text-black transition-all hover:scale-[1.02] hover:bg-white"
          >
            Partner With Us <span>&rarr;</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
