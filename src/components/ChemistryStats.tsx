import ScrollReveal from "./ScrollReveal";

/**
 * Comparable-specs grid for a single chemistry: duration, cycle life,
 * degradation, safety. Mirrors the StatsGrid layout with different fields.
 */
export default function ChemistryStats({
  stats,
}: {
  stats: {
    duration: string;
    cycleLife: string;
    degradation: string;
    safety: string;
  };
}) {
  const items = [
    { label: "Discharge Duration", value: stats.duration },
    { label: "Cycle Life", value: stats.cycleLife },
    { label: "Degradation", value: stats.degradation },
    { label: "Safety Profile", value: stats.safety },
  ];

  return (
    <section className="border-y border-white/5 px-6 py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        {items.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 0.08}>
            <div className="text-center">
              <p className="font-display text-2xl font-bold text-gold md:text-3xl">
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
        Indicative ranges based on chemistry characteristics. Actual sizing and
        performance are confirmed against your specific duty cycle and site.
      </p>
    </section>
  );
}
