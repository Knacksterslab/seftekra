export type HomeProduct = {
  name: string;
  tagline: string;
  buyerPersona: string;
  metaDescription: string;
  stats: {
    capacity: string;
    payback: string;
    timeline: string;
    lifecycle: string;
  };
  overview: string[];
  included: { title: string; description: string }[];
  payPaths: {
    id: string;
    label: string;
    title: string;
    summary: string;
    points: string[];
  }[];
  tariffIncluded: string[];
  valueTimeline: { milestone: string; title: string; description: string }[];
  chemistry: {
    lfpParas: string[];
    ldesPara: string;
  };
  process: { step: string; title: string; detail: string }[];
  faqs: { q: string; a: string }[];
  compatibleModels: string[];
  compatibleSolutions: string[];
};

export const HOME_PRODUCT: HomeProduct = {
  name: "Seftekra Home",
  tagline:
    "Solar and battery storage for your house — from a 25% deposit, paying only for the energy you use.",
  buyerPersona:
    "For homeowners who want lower bills and their own power, without the upfront cost.",
  metaDescription:
    "Seftekra Home — residential solar and LiFePO4 battery storage for individual houses. From a 25% deposit with a fixed energy tariff, maintenance included. Or pay in full and own it from day one.",
  stats: {
    capacity: "3–10 kW solar",
    payback: "Yours in ~5 yrs",
    timeline: "2–4 wk install",
    lifecycle: "25–30+ yrs",
  },
  overview: [
    "Seftekra Home is a complete solar and battery system for a single house — engineered, installed, and serviced by the same team that builds city-scale infrastructure.",
    "Your roof generates power through the day, the battery carries you through the evening and outages, and your grid dependence drops to a fraction of what it was. The system is sized to your home and your usage at a site assessment — the ranges here are indicative, your quote is exact.",
    "Two ways to make it yours: pay in full and own it from day one, or start with a 25% deposit and a fixed tariff on the energy you use, with everything included, until the system is yours.",
  ],
  included: [
    {
      title: "Design & Installation",
      description:
        "Full system design at assessment, professional installation, and grid connection — typically complete within a day or two of arriving on site.",
    },
    {
      title: "All Maintenance",
      description:
        "Scheduled servicing, cleaning, and any repairs for the entire term. If something fails, we fix it. There is no maintenance bill — ever.",
    },
    {
      title: "Monitoring App",
      description:
        "See generation, usage, and savings in real time from your phone. The same telemetry our grid-scale plants run on.",
    },
    {
      title: "Component Replacement",
      description:
        "Inverter, battery, or panel failures are covered and replaced for the full term. You are buying energy, not equipment risk.",
    },
    {
      title: "Performance Guarantee",
      description:
        "Your system is warranted to perform. If it underdelivers, that is our problem to fix — not yours to fund.",
    },
    {
      title: "Insurance-Grade Safety",
      description:
        "Certified install, protected wiring, and a battery chemistry chosen for safety first — installed to the same standard as our utility assets.",
    },
  ],
  payPaths: [
    {
      id: "full",
      label: "Path A",
      title: "Pay in Full",
      summary:
        "The lowest lifetime cost. One payment, and the system is yours from the first day the sun hits it.",
      points: [
        "Single upfront payment at installation",
        "You own the system outright, immediately",
        "All energy it generates is yours, free",
        "Optional service plan available",
      ],
    },
    {
      id: "tariff",
      label: "Path B",
      title: "25% + Fixed Tariff",
      summary:
        "Start with a 25% deposit. Then pay only for the energy your system delivers, at a tariff fixed for your home — until the system becomes yours.",
      points: [
        "25% deposit to start",
        "Fixed tariff on energy used — set at assessment, sized so the system is yours within about five years",
        "Everything included: installation, maintenance, monitoring, replacement",
        "Ownership transfers to you when the term completes",
      ],
    },
  ],
  tariffIncluded: [
    "Installation & grid connection",
    "All maintenance and repairs",
    "Component replacement",
    "Monitoring app & support",
  ],
  valueTimeline: [
    {
      milestone: "Day One",
      title: "Your tariff replaces your bill",
      description:
        "From the day the system is energized, you pay your fixed Seftekra tariff instead of a rising grid bill. Most households pay less from the first month.",
    },
    {
      milestone: "Year 5",
      title: "The system becomes yours",
      description:
        "Your tariff term completes and ownership transfers to you. No balloon payment, no renewal trap — the asset on your roof is simply yours.",
    },
    {
      milestone: "Years 6–30",
      title: "Essentially free energy",
      description:
        "The panels keep generating for 25–30+ years while grid tariffs keep rising. With the term paid off, your energy costs close to nothing — even allowing for one battery replacement along the way, at a fraction of what the system has saved you.",
    },
  ],
  chemistry: {
    lfpParas: [
      "We are deliberate about chemistry — a house and a grid have different jobs. A home needs hours of backup and daily cycling in a compact, wall-mounted package. For that duty cycle, the right choice is lithium iron phosphate (LiFePO4): the lithium chemistry without cobalt or nickel, thermally stable with no runaway risk, and proven across millions of home installations.",
      "It is honest to say this is a lithium battery — and it is the right lithium battery for the job. What we avoid in homes is the same thing we avoid at grid scale: chemistries that trade safety and supply-chain integrity for density.",
    ],
    ldesPara:
      "At grid scale, the duty cycle flips — days of firming, not hours — and we deploy our long-duration chemistries: Iron-Air, Iron Flow, and Vanadium Flow. Same principle at every scale: the chemistry is engineered to the job, never the other way around.",
  },
  process: [
    {
      step: "01",
      title: "Site Assessment",
      detail:
        "We survey your roof, shading, and usage profile — in person or remotely — and model what your home can generate.",
    },
    {
      step: "02",
      title: "Fixed Quote",
      detail:
        "You receive an exact system size and price. On the tariff path, your tariff is fixed here — calculated so the system is yours within about five years.",
    },
    {
      step: "03",
      title: "Installation",
      detail:
        "Certified install, typically one to two days on site. Panels, battery, inverter, and monitoring, integrated with your existing wiring.",
    },
    {
      step: "04",
      title: "Energization",
      detail:
        "System live, app connected, tariff active (or ownership registered, if you paid in full). You watch the first kilowatt-hours roll in.",
    },
    {
      step: "05",
      title: "Ongoing Service",
      detail:
        "We monitor, maintain, and if anything ever fails, we replace it — included for the full term. You just use the power.",
    },
    {
      step: "06",
      title: "Ownership Transfer",
      detail:
        "On the tariff path, the term completes and the system is registered in your name. From that day, the energy is free.",
    },
  ],
  faqs: [
    {
      q: "Is the battery lithium?",
      a: "Yes — lithium iron phosphate (LiFePO4), which is a different chemistry from the conventional lithium-ion used in most electronics and early home batteries. It contains no cobalt or nickel, and it does not have thermal-runaway risk. We chose it deliberately for home duty: safe, long-lived, and compact. At grid scale we deploy iron and vanadium chemistries instead — right chemistry for the job.",
    },
    {
      q: "What happens after five years?",
      a: "On the tariff path, ownership of the system transfers to you when your term completes — registered in your name. The panels keep generating for 25–30+ years, so from that point the energy they produce costs you essentially nothing. The battery is the shorter-lived component — typically 10–15 years — so it may need one replacement in that horizon, at a fraction of what the system will have saved you.",
    },
    {
      q: "How is my tariff calculated?",
      a: "At assessment. We size the system to your roof and usage, then fix a tariff per unit of energy that pays the system off within roughly five years. Your tariff is locked before you commit — it does not float with the grid or change mid-term.",
    },
    {
      q: "Can I just pay in full?",
      a: "Yes. Paying in full is the lowest lifetime cost and you own the system from day one. A service plan covering maintenance and monitoring is available if you want the same hands-off experience.",
    },
    {
      q: "What happens if I move house?",
      a: "Talk to us — the agreement can typically transfer with the system to the new owner as part of the sale, or be settled at closing. We will work with you and your buyer so the system remains an asset, not an obstacle.",
    },
    {
      q: "What if the system underperforms?",
      a: "That risk is ours, not yours. Maintenance, repairs, and component replacement are included for the full term, and the system is warranted to perform. If output drops, fixing it is on Seftekra.",
    },
  ],
  compatibleModels: ["lease-to-own"],
  compatibleSolutions: ["residential"],
};
