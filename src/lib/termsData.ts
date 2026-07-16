export type TermSection = {
  number: string;
  title: string;
  paragraphs: string[];
  list?: { label?: string; text: string }[];
  contactCard?: boolean;
};

export const INTRO_TEXT =
  'Welcome to Seftekra Energy ("Seftekra," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website, our project submission portal, and our infrastructure development services. By accessing our website or submitting a project for evaluation, you agree to be bound by these Terms. If you do not agree, please do not use our services.';

export const TERMS_SECTIONS: TermSection[] = [
  {
    number: "01",
    title: "Scope of Services",
    paragraphs: [
      "Seftekra is an energy and real estate infrastructure company specializing in the origination, engineering, construction, and management of renewable energy assets. Our services include, but are not limited to:",
    ],
    list: [
      {
        text: "City-scale, commercial, industrial, and residential solar and battery storage installations.",
      },
      {
        text: "Flexible financial models including Direct Purchase, Lease-to-Own, and Build, Operate, Transfer (BOT).",
      },
      {
        text: "Long-term Operations & Maintenance (O&M) and asset management.",
      },
    ],
  },
  {
    number: "02",
    title: "Project Submissions & Evaluation",
    paragraphs: [
      "When you submit project details (e.g., land location, grid connection status, energy requirements) to Seftekra for evaluation, you acknowledge the following:",
    ],
    list: [
      {
        label: "Accuracy of Information:",
        text: "You are responsible for the accuracy and completeness of all submitted data.",
      },
      {
        label: "No Guarantee of Funding:",
        text: "Submitting a project does not guarantee that Seftekra will finance, build, or partner on the project.",
      },
      {
        label: "Title and Authority:",
        text: "You represent and warrant that you have the legal authority and ownership rights to submit the project for evaluation.",
      },
    ],
  },
  {
    number: "03",
    title: "Construction & Operational Risk",
    paragraphs: [
      "Infrastructure development carries inherent risks. Seftekra utilizes tier-1 hardware and proven engineering practices, but you acknowledge that:",
    ],
    list: [
      {
        text: "Construction timelines may be impacted by forces majeure, supply chain delays, weather, or local regulatory permitting processes.",
      },
      {
        text: "Energy generation yields may fluctuate based on weather conditions, grid availability, and natural hardware degradation over time.",
      },
      {
        text: "Seftekra is not liable for lost revenue due to grid outages or acts of nature beyond our reasonable control.",
      },
    ],
  },
  {
    number: "04",
    title: "Intellectual Property",
    paragraphs: [
      "All content on this website, including text, graphics, logos, engineering methodologies, and proprietary software, is the property of Seftekra Energy and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from our content without prior written consent.",
    ],
  },
  {
    number: "05",
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, Seftekra, its directors, employees, or affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business interruption, arising out of or in connection with your use of our website or services.",
    ],
  },
  {
    number: "06",
    title: "Indemnification",
    paragraphs: [
      "You agree to defend, indemnify, and hold harmless Seftekra from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your submission of inaccurate or misleading project information.",
    ],
  },
  {
    number: "07",
    title: "Governing Law & Dispute Resolution",
    paragraphs: [
      "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Seftekra Energy is registered, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms shall first be attempted to be resolved through good-faith negotiations. If unresolved, the dispute shall be submitted to binding arbitration.",
    ],
  },
  {
    number: "08",
    title: "Contact Us",
    paragraphs: [
      "If you have any questions or concerns regarding these Terms of Service, please contact our legal team:",
    ],
    contactCard: true,
  },
];
