export type Solution = {
  slug: string;
  number: string;
  label: string;
  title: string;
  tagline: string;
  heroImage: string;
  buyerPersona: string;
  metaDescription: string;
  overview: string[];
  capabilities: { title: string; description: string }[];
  stats: {
    capacity: string;
    payback: string;
    timeline: string;
    lifecycle: string;
  };
  useCases: { title: string; description: string }[];
  process: { step: string; title: string; detail: string }[];
  compatibleModels: string[];
  compatibleStorage?: string[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "utility",
    number: "01",
    label: "Utility",
    title: "City-Scale Renewables",
    tagline: "Grid-scale generation for the utilities powering tomorrow's cities.",
    heroImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80",
    buyerPersona: "For utility planners balancing peak demand with decarbonization mandates.",
    metaDescription:
      "Seftekra develops utility-scale solar and battery storage — from grid interconnection to commissioning — engineered to power tomorrow's cities with clean, dispatchable energy.",
    overview: [
      "Municipalities and utilities face a dual mandate: meet surging peak demand and retire carbon-intensive generation on a fixed timeline. Seftekra originates, engineers, and builds utility-scale solar and storage assets designed to plug directly into the transmission network.",
      "We move projects from greenfield site identification through grid interconnection, environmental permitting, and EPC delivery — coordinating land, grid, and capital so the megawatts show up on schedule.",
      "Every installation is built to utility-grade standards: high-voltage interconnection, SCADA telemetry, and full dispatchability paired with battery storage to shape output around demand.",
    ],
    capabilities: [
      {
        title: "Generation",
        description:
          "Utility-scale solar PV arrays engineered for maximum yield per acre, with single-axis tracking and bifacial modules where the site economics support it.",
      },
      {
        title: "Long-Duration Storage",
        description:
          "Non-lithium storage — Iron-Air, Iron Flow, and Vanadium Flow — that firms generation across hours or days, not just the evening peak. Dispatchable clean power contracts without the critical-mineral exposure.",
      },
      {
        title: "Grid Interconnection",
        description:
          "High-voltage substation design, transformer sizing, and full utility coordination — from feasibility study to energization and metering.",
      },
      {
        title: "SCADA & Telemetry",
        description:
          "Plant-wide monitoring and control systems that report performance to grid operators and integrate with existing utility dispatch infrastructure.",
      },
    ],
    stats: {
      capacity: "10–500 MW",
      payback: "6–9 yrs",
      timeline: "12–24 mo",
      lifecycle: "30+ yrs",
    },
    useCases: [
      {
        title: "Municipal Clean Power",
        description:
          "City-backed procurement of utility-scale generation under a PPA or BOT structure to meet climate action plans.",
      },
      {
        title: "Capacity & Ancillary Services",
        description:
          "Storage assets that earn from grid services, capacity markets, and peak shaving alongside energy arbitrage.",
      },
      {
        title: "Transmission-Scale Generation",
        description:
          "Large-scale PV + storage sited at substations to strengthen the grid and defer costly network upgrades.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Site & Grid Feasibility",
        detail:
          "Land assessment, resource modeling, and grid interconnection feasibility to confirm the project can connect and produce.",
      },
      {
        step: "02",
        title: "Engineering & Permitting",
        detail:
          "Detailed design, environmental review, and full permitting — coordinated with the offtake and grid study timelines.",
      },
      {
        step: "03",
        title: "Financing Structure",
        detail:
          "We structure the capital — direct purchase, PPA, or BOT — to fit the utility's balance sheet and procurement rules.",
      },
      {
        step: "04",
        title: "Construction (EPC)",
        detail:
          "Engineering, procurement, and construction delivered to schedule, with milestone-based commissioning.",
      },
      {
        step: "05",
        title: "Energization",
        detail:
          "Grid synchronization, performance testing, and handover with full as-built documentation and telemetry online.",
      },
      {
        step: "06",
        title: "Operations & Maintenance",
        detail:
          "Lifetime performance monitoring, preventive maintenance, and asset management to protect the yield over decades.",
      },
    ],
    compatibleModels: ["direct-purchase", "build-operate-transfer"],
    compatibleStorage: ["iron-air", "iron-flow", "vanadium-flow"],
  },
  {
    slug: "enterprise",
    number: "02",
    label: "Enterprise",
    title: "Commercial & Industrial",
    tagline: "Behind-the-meter power that cuts costs and carbon at the same time.",
    heroImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80",
    buyerPersona: "For CFOs turning Scope 2 targets into hard operational savings.",
    metaDescription:
      "Commercial and industrial solar and battery storage for enterprises cutting energy costs and carbon. Behind-the-meter generation with optional financing models.",
    overview: [
      "Energy is a line item that compounds — rising tariffs, demand charges, and carbon disclosure obligations all move in the same direction. Seftekra designs behind-the-meter generation and storage that bend that curve.",
      "For factories, warehouses, data centers, and commercial portfolios, we size systems to the load profile: solar to offset daytime consumption, storage to shave peak demand charges, and controls to optimize when power is drawn from the grid.",
      "The result is lower operating cost, hedged energy price risk, and a measurable cut to Scope 2 emissions — often with no upfront capital required through our financing models.",
    ],
    capabilities: [
      {
        title: "Rooftop & Ground-Mount PV",
        description:
          "Solar arrays sized to your roof, parking canopy, or available land, engineered for minimal structural impact and maximum offset.",
      },
      {
        title: "Peak-Shaving Storage",
        description:
          "Battery systems that discharge during your highest-demand intervals, directly reducing demand charges and grid dependence.",
      },
      {
        title: "Load-Profile Optimization",
        description:
          "Energy management controls that time consumption and storage dispatch to the tariff structure that costs you most.",
      },
      {
        title: "Carbon Accounting Integration",
        description:
          "Performance data that maps directly to Scope 2 reporting, ESG disclosures, and internal sustainability targets.",
      },
    ],
    stats: {
      capacity: "100 kW–10 MW",
      payback: "4–7 yrs",
      timeline: "4–9 mo",
      lifecycle: "25+ yrs",
    },
    useCases: [
      {
        title: "Manufacturing Facility",
        description:
          "Ground-mount solar plus storage cutting peak demand charges on a high-load, round-the-clock operation.",
      },
      {
        title: "Logistics & Warehouse",
        description:
          "Rooftop PV across large distribution centers, turning unused roof area into a revenue-generating asset.",
      },
      {
        title: "Corporate Portfolio",
        description:
          "Rolled-out generation across multiple sites under a single financing structure and unified performance reporting.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Energy Audit",
        detail:
          "We analyze your load profile, tariff, and bills to size a system that pays back against your actual energy spend.",
      },
      {
        step: "02",
        title: "System Design",
        detail:
          "Engineering for your site — structural, electrical, and interconnection — with a clear offset and savings forecast.",
      },
      {
        step: "03",
        title: "Financing Selection",
        detail:
          "Direct purchase, lease-to-own, or BOT — chosen to match your capex appetite and accounting treatment.",
      },
      {
        step: "04",
        title: "Installation",
        detail:
          "Minimal-disruption construction coordinated with your operations, commissioned in weeks rather than months.",
      },
      {
        step: "05",
        title: "Commissioning",
        detail:
          "Grid connection, performance verification, and handover with live monitoring dashboards for your team.",
      },
      {
        step: "06",
        title: "Ongoing Performance",
        detail:
          "Monitoring, maintenance, and reporting that keep the savings on track for the full asset life.",
      },
    ],
    compatibleModels: ["direct-purchase", "lease-to-own", "build-operate-transfer"],
    compatibleStorage: ["iron-flow", "vanadium-flow"],
  },
  {
    slug: "residential",
    number: "03",
    label: "Residential",
    title: "Residential Estates",
    tagline: "Turnkey energy independence for premium developments and gated communities.",
    heroImage:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80",
    buyerPersona: "For developers and estate owners selling energy independence as a standard.",
    metaDescription:
      "Turnkey solar and battery storage for high-end residential developments and gated communities. Energy independence engineered into the masterplan from day one.",
    overview: [
      "Premium developments sell a vision of self-sufficiency. Seftekra makes energy independence a built-in standard rather than a retrofit — designed into the masterplan before the first foundation is poured.",
      "For gated communities, luxury estates, and off-grid developments, we engineer generation, storage, and microgrid controls sized to the community's load and resilience expectations.",
      "Owners get lower energy bills, protection against grid outages, and a property that runs on its own power — a feature that appreciates with every rate increase.",
    ],
    capabilities: [
      {
        title: "Community-Scale Generation",
        description:
          "Centralized or distributed solar sized to the estate's combined load, sited to integrate cleanly with the masterplan.",
      },
      {
        title: "Resilient Storage",
        description:
          "Battery capacity sized for multi-hour outages, keeping essential loads — lighting, security, refrigeration — running.",
      },
      {
        title: "Microgrid Controls",
        description:
          "Intelligent distribution that balances generation, storage, and grid supply across the community in real time.",
      },
      {
        title: "Aesthetic Integration",
        description:
          "Arrays and equipment specified to preserve the architectural intent of the development — hidden, flush, or feature-grade.",
      },
    ],
    stats: {
      capacity: "50 kW–5 MW",
      payback: "5–8 yrs",
      timeline: "3–8 mo",
      lifecycle: "25+ yrs",
    },
    useCases: [
      {
        title: "Gated Community",
        description:
          "Shared generation and storage across a residential estate, billed and managed as a community microgrid.",
      },
      {
        title: "Luxury Estate",
        description:
          "Whole-home solar plus battery backup for a single high-end residence prioritizing resilience and autonomy.",
      },
      {
        title: "Off-Grid Development",
        description:
          "Standalone microgrids for remote developments with no reliable grid connection, sized for true independence.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Masterplan Integration",
        detail:
          "We work with the developer's design team to integrate generation and storage into the site plan from the start.",
      },
      {
        step: "02",
        title: "Load & Resilience Modeling",
        detail:
          "Sizing based on projected household load, desired backup duration, and grid reliability at the site.",
      },
      {
        step: "03",
        title: "Financing Structure",
        detail:
          "Developer-funded, lease-to-own, or BOT — structured to how the community will own and pay for the asset.",
      },
      {
        step: "04",
        title: "Build & Integration",
        detail:
          "Construction phased with the development build-out, coordinated with civil and electrical trades.",
      },
      {
        step: "05",
        title: "Commissioning",
        detail:
          "System live and tested, with homeowner-facing monitoring and any billing infrastructure configured.",
      },
      {
        step: "06",
        title: "Lifetime Management",
        detail:
          "Ongoing maintenance, performance guarantees, and support for the community or estate manager.",
      },
    ],
    compatibleModels: ["direct-purchase", "lease-to-own", "build-operate-transfer"],
    compatibleStorage: ["iron-flow"],
  },
  {
    slug: "services",
    number: "04",
    label: "Services",
    title: "Operations & Maintenance",
    tagline: "Lifetime performance tracking and full-stack asset management.",
    heroImage:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&q=80",
    buyerPersona: "For asset owners protecting generation yield over a 25-year horizon.",
    metaDescription:
      "Operations and maintenance for solar and storage assets — performance monitoring, inverter servicing, and full-stack asset management that protects yield for decades.",
    overview: [
      "A solar asset is a 25-to-30-year commitment, and its value lives in the yield it produces every year. Underperformance, undetected faults, and deferred maintenance compound silently into lost revenue.",
      "Seftekra operates generation and storage assets we build — and assets built by others — with monitoring, preventive maintenance, and rapid fault response designed to protect the forecast.",
      "From inverter servicing to panel-level diagnostics and full asset management reporting, we keep the megawatts flowing and the owners informed.",
    ],
    capabilities: [
      {
        title: "Performance Monitoring",
        description:
          "24/7 telemetry with anomaly detection, so underperformance is flagged and investigated before it costs a billing cycle.",
      },
      {
        title: "Preventive Maintenance",
        description:
          "Scheduled servicing — cleaning, torque checks, thermography, and component inspection — to prevent avoidable failures.",
      },
      {
        title: "Inverter & Storage Servicing",
        description:
          "Specialized maintenance for the components most likely to fail: inverters, battery management systems, and power electronics.",
      },
      {
        title: "Asset Management Reporting",
        description:
          "Owner-grade performance, financial, and compliance reporting that translates plant data into portfolio insight.",
      },
    ],
    stats: {
      capacity: "Any size",
      payback: "Yield protection",
      timeline: "Ongoing",
      lifecycle: "25–30 yrs",
    },
    useCases: [
      {
        title: "Owned Asset Protection",
        description:
          "Full O&M for an asset you own outright, ensuring it meets its forecast yield across the asset life.",
      },
      {
        title: "Third-Party Asset Rescue",
        description:
          "Takeover and turnaround for underperforming assets originally built or operated by others.",
      },
      {
        title: "Portfolio Management",
        description:
          "Unified monitoring and reporting across a multi-site generation portfolio, with consolidated financials.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Asset Baseline",
        detail:
          "We establish the current performance baseline — production, availability, and any existing faults or drift.",
      },
      {
        step: "02",
        title: "Monitoring Onboarding",
        detail:
          "Plant connected to our monitoring platform, with alerting thresholds tuned to the asset's expected performance.",
      },
      {
        step: "03",
        title: "Maintenance Planning",
        detail:
          "A preventive maintenance schedule built around the asset's components, climate, and operating profile.",
      },
      {
        step: "04",
        title: "Fault Response",
        detail:
          "Rapid investigation and dispatch when alerts fire, with the goal of minimizing downtime and lost generation.",
      },
      {
        step: "05",
        title: "Performance Reporting",
        detail:
          "Regular owner reports covering production, availability, financials, and any corrective actions taken.",
      },
      {
        step: "06",
        title: "Lifecycle Optimization",
        detail:
          "Long-horizon planning — repowering, component replacement, and performance upgrades as the asset matures.",
      },
    ],
    compatibleModels: ["direct-purchase"],
  },
];

export const getSolution = (slug: string): Solution | undefined =>
  SOLUTIONS.find((s) => s.slug === slug);
