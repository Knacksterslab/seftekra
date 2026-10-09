import ScrollReveal from "./ScrollReveal";

/**
 * Comparable-number grid: capacity, payback, timeline, lifecycle.
 * Ranges build credibility without overcommitting to exact figures.
 */
export default function StatsGrid({
  stats,
  footnote = "Indicative ranges. Actual figures depend on site, load profile, and structure — confirmed during feasibility.",
}: {
  stats: {
    capacity: string;
    payback: string;
    timeline: string;
    lifecycle: string;
  };
  footnote?: string;
}) {
  const items = [
    { label: "Capacity", value: stats.capacity },
    { label: "Typical Payback", value: stats.payback },
    { label: "Build Timeline", value: stats.timeline },
    { label: "Asset Lifecycle", value: stats.lifecycle },
  ];

  return (
    <section className="border-y border-white/5 px-6 py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        {items.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 0.08}>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-gold md:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs tracking-[0.15em] uppercase text-gray-500">
                {item.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-xl text-center text-xs font-light text-gray-600">
        {footnote}
      </p>
    </section>
  );
}
