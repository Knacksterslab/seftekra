export type FinancingModel = {
  slug: string;
  number: string;
  label: string;
  title: string;
  tagline: string;
  metaDescription: string;
  // Comparison-matrix fields (short, scannable values)
  upfront: string;
  ownership: string;
  om: string;
  bestFor: string;
  risk: string;
  roi: string;
  // Long-form content
  howItWorks: string[];
  whoItSuits: string;
  cashFlowExample: { phase: string; detail: string }[];
  faqs: { q: string; a: string }[];
  compatibleSolutions: string[];
};

export const FINANCING_MODELS: FinancingModel[] = [
  {
    slug: "direct-purchase",
    number: "01",
    label: "Maximum ROI",
    title: "Direct Purchase",
    tagline: "Own the infrastructure outright from day one.",
    metaDescription:
      "Direct purchase of solar and storage infrastructure — capital expenditure for maximum long-term ROI. We build it, you own it outright from day one.",
    upfront: "Full capex",
    ownership: "Day one",
    om: "Owner-managed or contracted",
    bestFor: "Capex-rich buyers maximizing return",
    risk: "Owner bears asset risk",
    roi: "Highest",
    howItWorks: [
      "You fund the full system cost up front as a capital expenditure. Seftekra engineers, procures, and constructs the asset to specification, then hands over ownership on commissioning.",
      "From day one, every kilowatt-hour the asset generates belongs to you — no lease payments, no offtake fees, no shared revenue. You capture the full value of the generation plus any available incentives, depreciation, and carbon credits.",
      "Operation and maintenance can be handled in-house, contracted to Seftekra under an O&M agreement, or a hybrid of both — the asset is yours to operate as you see fit.",
    ],
    whoItSuits:
      "Cash-rich buyers who want maximum long-term return and full control of the asset: utilities, corporates with balance-sheet capacity, and owners who intend to hold the asset for its full life.",
    cashFlowExample: [
      {
        phase: "Year 0",
        detail:
          "Full system capex paid at commissioning. Asset recognized on the balance sheet.",
      },
      {
        phase: "Years 1–25",
        detail:
          "Energy savings accrue entirely to the owner, offset by modest O&M cost. Depreciation and incentives improve the after-tax return.",
      },
      {
        phase: "Year 25+",
        detail:
          "Asset continues generating; repowering can extend the useful life well beyond the original payback horizon.",
      },
    ],
    faqs: [
      {
        q: "What exactly do I own?",
        a: "The complete physical infrastructure — modules, inverters, storage, electrical balance, and monitoring systems — plus the right to all energy it produces and any associated incentives or credits assignable to the asset.",
      },
      {
        q: "Who handles maintenance?",
        a: "You choose. Seftekra can operate the asset under an ongoing O&M agreement, you can manage it in-house, or we can hand off to a third party. Ownership is fully decoupled from operations.",
      },
      {
        q: "Is this the cheapest option overall?",
        a: "It has the lowest lifetime cost per kilowatt-hour because there is no financing margin or offtake premium built in. The trade-off is capital deployed up front rather than spread over time.",
      },
    ],
    compatibleSolutions: ["utility", "enterprise", "residential", "services"],
  },
  {
    slug: "lease-to-own",
    number: "02",
    label: "Zero Upfront",
    title: "Lease-to-Own",
    tagline: "Pay through your savings, own at term end.",
    metaDescription:
      "Lease-to-own solar and storage — zero upfront cost. Pay for the system through energy savings over time, with full ownership transferring at term end.",
    upfront: "None",
    ownership: "Transfers at term end",
    om: "Included during lease",
    bestFor: "Buyers preserving capital",
    risk: "Shared during lease term",
    roi: "High",
    howItWorks: [
      "Seftekra funds, builds, and owns the asset at the start. You pay a periodic lease — structured so that, for most systems, it is offset by the energy savings the asset produces.",
      "Over the lease term, the payments retire the capital cost of the system. At term end, ownership of the asset transfers to you, often for a nominal final payment.",
      "Through the term, Seftekra handles operation and maintenance so the asset performs to spec. You get the savings without the capex, and the ownership without the financing friction.",
    ],
    whoItSuits:
      "Buyers who want the asset on their balance sheet eventually but cannot or prefer not to deploy capital now: enterprises managing cash flow, residential developers, and owners who want a single counterpart for build + finance + operate.",
    cashFlowExample: [
      {
        phase: "Year 0",
        detail:
          "No upfront payment. Asset installed and operational at Seftekra's cost.",
      },
      {
        phase: "Lease term",
        detail:
          "Fixed periodic payments, typically offset by energy savings. O&M included. Title remains with Seftekra.",
      },
      {
        phase: "Term end",
        detail:
          "Ownership transfers to the buyer. From here, behavior matches direct purchase — full savings, owner-managed operations.",
      },
    ],
    faqs: [
      {
        q: "Will my payments be higher than my energy savings?",
        a: "Structures are sized so that the combination of energy savings and any available incentives broadly covers the lease payment. We model this against your actual load and tariff before you commit.",
      },
      {
        q: "What happens at the end of the term?",
        a: "Ownership of the asset transfers to you, typically for a pre-agreed nominal payment. From that point the asset is yours outright and the savings accrue without lease payments.",
      },
      {
        q: "Who maintains the system during the lease?",
        a: "Seftekra operates and maintains the asset throughout the lease term, so performance is guaranteed. After transfer, you can continue with an O&M agreement or take operations in-house.",
      },
    ],
    compatibleSolutions: ["enterprise", "residential"],
  },
  {
    slug: "build-operate-transfer",
    number: "03",
    label: "Zero Hassle",
    title: "Build, Operate, Transfer",
    tagline: "We finance, build, and run it — you take ownership at term end.",
    metaDescription:
      "Build, Operate, Transfer (BOT) for solar and storage. Seftekra finances, builds, and operates the plant for a fixed term, then transfers ownership to you.",
    upfront: "None",
    ownership: "Transfers at term end",
    om: "Seftekra throughout term",
    bestFor: "Buyers wanting zero operational burden",
    risk: "Seftekra bears performance risk",
    roi: "Strong",
    howItWorks: [
      "Seftekra finances, builds, and operates the asset for a fixed contract term. You pay only for the energy the plant produces, under a pre-agreed rate — no capital outlay, no operational responsibility.",
      "Through the term, Seftekra carries the asset on its balance sheet and bears the performance risk: if the plant underproduces, that is our problem, not yours.",
      "At term end, ownership transfers to you. From that point the asset generates effectively free energy under your ownership, with optional ongoing O&M support from Seftekra.",
    ],
    whoItSuits:
      "Buyers who want clean energy and a clear path to ownership without deploying capital or building internal operations capacity: utilities, municipalities, and enterprises that prefer an energy-as-a-service contract during the term.",
    cashFlowExample: [
      {
        phase: "Year 0",
        detail:
          "No capital outlay. Plant built and energized at Seftekra's cost and risk.",
      },
      {
        phase: "Contract term",
        detail:
          "You pay a pre-agreed rate for energy produced, typically below grid tariffs. Seftekra handles all O&M and performance.",
      },
      {
        phase: "Transfer",
        detail:
          "Ownership passes to you. The asset then produces at near-zero marginal cost for the remainder of its life.",
      },
    ],
    faqs: [
      {
        q: "How is the energy priced?",
        a: "Under a pre-agreed rate per kilowatt-hour, typically set below your current grid tariff so you save from day one. The rate structure is fixed in the contract, so you are insulated from energy price volatility during the term.",
      },
      {
        q: "Who bears performance risk?",
        a: "During the term, Seftekra does. If the plant underproduces — due to equipment failure, weather, or anything else within our control — that risk sits with us, not you. You pay for what the plant delivers.",
      },
      {
        q: "What condition is the asset in at transfer?",
        a: "The asset is transferred in agreed operating condition, with full performance history and documentation. You can optionally retain Seftekra for ongoing O&M after transfer.",
      },
    ],
    compatibleSolutions: ["utility", "enterprise", "residential"],
  },
];

export const getFinancingModel = (slug: string): FinancingModel | undefined =>
  FINANCING_MODELS.find((m) => m.slug === slug);
