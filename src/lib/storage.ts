export type StorageChemistry = {
  slug: string;
  number: string;
  label: string;
  title: string;
  tagline: string;
  heroImage: string;
  metaDescription: string;
  // Headline differentiator vs lithium-ion (2–4h)
  durationHours: string;
  // Comparable-specs grid
  stats: {
    duration: string;
    cycleLife: string;
    degradation: string;
    safety: string;
  };
  overview: string[];
  howItWorks: string[];
  idealFor: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
  compatibleSolutions: string[];
  compatibleModels: string[];
};

export const STORAGE_CHEMISTRIES: StorageChemistry[] = [
  {
    slug: "iron-air",
    number: "01",
    label: "Longest Duration",
    title: "Iron-Air",
    tagline: "100-hour duration from earth-abundant iron and air.",
    heroImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1600&q=80",
    metaDescription:
      "Iron-Air batteries — 100-hour long-duration energy storage using reversible rusting of earth-abundant iron. Ideal for multi-day and seasonal grid firming where lithium-ion cannot reach.",
    durationHours: "Up to 100 hours",
    stats: {
      duration: "10–100 h",
      cycleLife: "20+ years",
      degradation: "Minimal — no memory effect",
      safety: "Aqueous, non-flammable",
    },
    overview: [
      "Iron-Air is built for the duration problem lithium-ion was never designed to solve. Where a lithium system discharges over 2 to 4 hours, Iron-Air discharges over up to 100 hours — firming renewable generation across entire multi-day weather events, not just the evening peak.",
      "The chemistry is almost disarmingly simple: iron, air, and water. During discharge, iron rusts; during charge, the rust is converted back to iron. No cobalt, no nickel, no lithium, and no thermal-runaway risk. The active material is among the most abundant and cheapest on the planet.",
      "The trade-off is power density — Iron-Air is a marathon runner, not a sprinter. It is not the right tool for split-second frequency response. It is the right tool when the question is: how do we keep the lights on for three cloudy days in a row.",
    ],
    howItWorks: [
      "An Iron-Air cell reverses the corrosion of iron thousands of times. On discharge, oxygen from the air reacts with the iron electrode, forming iron oxide (rust) and releasing electrical energy. On charge, an applied current drives the reaction backward, reducing the rust back to metallic iron.",
      "Because energy is stored as solid metal rather than in flammable organic electrolytes, the system is inherently safe, runs at low temperatures, and uses no critical minerals. Duration is a function of how much iron is loaded into the cell stack — scale the mass, scale the hours.",
    ],
    idealFor: [
      {
        title: "Multi-Day Firming",
        description:
          "Bridging consecutive low-generation days — the gap lithium-ion's 4-hour duration structurally cannot cover.",
      },
      {
        title: "Seasonal Shifting",
        description:
          "Moving surplus spring generation into high-demand winter weeks at grid scale.",
      },
      {
        title: "Capacity & Resilience",
        description:
          "Providing guaranteed multi-day capacity for capacity markets and resilience-critical loads.",
      },
    ],
    faqs: [
      {
        q: "How is this different from lithium-ion?",
        a: "Lithium-ion is optimized for high power over short durations (2–4 hours). Iron-Air is optimized for low cost over long durations (up to 100 hours). They solve different problems and are often deployed together: lithium for fast response, iron-air for endurance.",
      },
      {
        q: "Is the iron actually reused, or consumed?",
        a: "Reused. The iron electrode is reversibly oxidized and reduced thousands of times across the system's life. It is not consumed the way fuel is — it is a storage medium, not a reactant that's burned.",
      },
      {
        q: "What's the catch?",
        a: "Round-trip efficiency per cycle is lower than lithium-ion, and power density is lower. Iron-Air is not the right choice for high-cycling, fast-discharge applications. It wins decisively on cost-per-stored-kilowatt-hour over long durations.",
      },
    ],
    compatibleSolutions: ["utility"],
    compatibleModels: ["direct-purchase", "build-operate-transfer"],
  },
  {
    slug: "iron-flow",
    number: "02",
    label: "Daily Firming",
    title: "Iron Redox Flow",
    tagline: "Liquid iron electrolyte with independently scalable power and energy.",
    heroImage:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1600&q=80",
    metaDescription:
      "Iron Redox Flow batteries — 8 to 24 hour duration using a liquid iron electrolyte. Decoupled power and energy sizing, long cycle life, and non-flammable chemistry for daily firming and industrial loads.",
    durationHours: "8–24 hours",
    stats: {
      duration: "8–24 h",
      cycleLife: "25+ years",
      degradation: "No capacity fade",
      safety: "Aqueous, non-flammable",
    },
    overview: [
      "Iron Redox Flow splits the difference between lithium-ion's short burst and Iron-Air's extreme endurance — delivering 8 to 24 hours of duration with a chemistry engineered for daily, heavy cycling without degradation.",
      "Energy is stored in tanks of liquid iron electrolyte rather than in solid electrodes. This decouples power from energy: add more electrolyte to get more hours, add more cell stacks to get more power. The two scale independently, which changes how you size the system against an unpredictable load.",
      "Because the active material is a liquid that doesn't degrade and a system that doesn't catch fire, Iron Flow is well suited to behind-the-meter industrial use, daily solar firming, and applications where the asset must cycle hard every single day for decades.",
    ],
    howItWorks: [
      "A redox flow battery stores energy in two tanks of liquid electrolyte separated by an ion-exchange membrane. The electrolytes are pumped through a cell stack where the reaction either charges or discharges the system.",
      "Crucially, the energy capacity is set by the volume of electrolyte in the tanks, while the power rating is set by the size of the cell stack. Want more hours of storage without more power? Add tanks. Want more power without more hours? Add stacks. This decoupling is impossible in a solid-electrode battery.",
    ],
    idealFor: [
      {
        title: "Daily Solar Firming",
        description:
          "Shifting daytime solar generation into the evening and overnight, every day, without degradation.",
      },
      {
        title: "Industrial Peak Management",
        description:
          "Behind-the-meter discharge against demand charges for high-load, round-the-clock operations.",
      },
      {
        title: "Renewables Smoothing",
        description:
          "Absorbing ramps and intermittency on grids with high renewable penetration.",
      },
    ],
    faqs: [
      {
        q: "How does a flow battery differ from a conventional battery?",
        a: "A conventional battery stores energy in solid electrodes built into the cell. A flow battery stores energy in liquid electrolyte held in external tanks, pumped through the cell stack. This separates energy (tanks) from power (stacks) and enables effectively unlimited scaling of duration.",
      },
      {
        q: "Does the electrolyte degrade?",
        a: "No. The iron electrolyte is rebalanced during operation and does not suffer the capacity fade that limits lithium-ion cycle life. A system cycled daily for 25 years still holds its original capacity.",
      },
      {
        q: "How does it compare to Vanadium flow?",
        a: "Iron flow uses a more abundant and lower-cost electrolyte than vanadium, and avoids the temperature sensitivity of vanadium chemistries. Vanadium flow is more mature and offers the longest demonstrated field life. We match the chemistry to the duty cycle and site economics.",
      },
    ],
    compatibleSolutions: ["utility", "enterprise", "residential"],
    compatibleModels: ["direct-purchase", "lease-to-own", "build-operate-transfer"],
  },
  {
    slug: "vanadium-flow",
    number: "03",
    label: "Heavy Cycling",
    title: "Vanadium Redox Flow",
    tagline: "The most mature flow chemistry — 25+ years, zero degradation, fully recyclable.",
    heroImage:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1600&q=80",
    metaDescription:
      "Vanadium Redox Flow batteries — the most mature long-duration chemistry with 25+ year cycle life, no degradation, and a fully recyclable electrolyte. Ideal for heavy-cycling utility-grade storage.",
    durationHours: "4–12 hours",
    stats: {
      duration: "4–12 h",
      cycleLife: "25+ years",
      degradation: "No capacity fade",
      safety: "Aqueous, non-flammable",
    },
    overview: [
      "Vanadium Redox Flow is the longest-proven flow battery chemistry in commercial operation, with field deployments now into their third decade. For utility-grade storage that must cycle hard, every day, with no capacity loss, it remains the benchmark.",
      "Like Iron Flow, energy lives in tanks of liquid electrolyte and scales independently of power. What sets Vanadium apart is that the same element appears on both sides of the membrane — so cross-contamination, the failure mode that kills other flow chemistries, simply does not occur. The electrolyte does not age and is fully recyclable at end of life.",
      "The result is a system that can be discharged deeply and cycled thousands of times without the fade that constrains solid-electrode batteries — the right tool for capacity markets, heavy-cycling arbitrage, and long-horizon utility assets.",
    ],
    howItWorks: [
      "A Vanadium flow battery uses the same element, vanadium, in different oxidation states on each side of an ion-exchange membrane. On charge and discharge, electrons are exchanged between the two electrolytes through the cell stack.",
      "Because both electrolytes are forms of vanadium, any cross-mixing across the membrane causes no permanent damage — the electrolyte can be rebalanced and restored indefinitely. The vanadium itself is not consumed; it is reusable and retains residual value at end of life.",
    ],
    idealFor: [
      {
        title: "Utility-Grade Storage",
        description:
          "Transmission-connected assets for capacity markets, arbitrage, and ancillary services over decades.",
      },
      {
        title: "Heavy Daily Cycling",
        description:
          "Applications that discharge deeply, multiple times per day, where lithium fade would be unacceptable.",
      },
      {
        title: "Long-Horizon Assets",
        description:
          "Projects underwritten over 20–25 years where electrolyte longevity and residual value matter to the financial model.",
      },
    ],
    faqs: [
      {
        q: "Why vanadium specifically?",
        a: "Vanadium is the only element that can exist in four stable oxidation states in solution, allowing it to serve on both sides of the membrane. This eliminates cross-contamination — the failure mode that limits other flow chemistries — and means the electrolyte never permanently degrades.",
      },
      {
        q: "Is vanadium cost a problem?",
        a: "Vanadium is more expensive per kilowatt-hour than iron-based chemistries, but the electrolyte is fully recyclable and retains residual value. For long-horizon, heavy-cycling assets the lifetime cost per delivered kilowatt-hour is highly competitive — and the operational certainty is unmatched.",
      },
      {
        q: "How long has this been deployed?",
        a: "Vanadium flow batteries have been in commercial operation since the early 2000s, with multi-megawatt-hour installations now well into their second decade. It is the most field-proven long-duration flow chemistry available.",
      },
    ],
    compatibleSolutions: ["utility", "enterprise"],
    compatibleModels: ["direct-purchase", "build-operate-transfer"],
  },
];

export const getChemistry = (slug: string): StorageChemistry | undefined =>
  STORAGE_CHEMISTRIES.find((c) => c.slug === slug);
