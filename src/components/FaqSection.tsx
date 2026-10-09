import ScrollReveal from "./ScrollReveal";

/**
 * Shared FAQ section using the native details/summary pattern with the
 * gold +/× toggle. Extracted from the financing/storage detail pages so
 * every pillar renders FAQs identically.
 */
export default function FaqSection({
  faqs,
  eyebrow = "Questions",
  heading = "Frequently asked.",
}: {
  faqs: { q: string; a: string }[];
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <section className="border-t border-white/5 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
              {eyebrow}
            </p>
            <h2 className="text-2xl font-light md:text-3xl">{heading}</h2>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <details className="group rounded-lg border border-white/10 bg-white/[0.03] p-6 backdrop-blur-[10px] transition-colors hover:border-gold/30">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium text-white marker:content-['']">
                  {faq.q}
                  <span className="shrink-0 text-gold transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm font-light leading-relaxed text-gray-400">
                  {faq.a}
                </p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
