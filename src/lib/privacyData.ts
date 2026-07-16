export type PrivacySection = {
  number: string;
  title: string;
  paragraphs: string[];
  list?: { label?: string; text: string }[];
  contactCard?: boolean;
};

export const INTRO_TEXT =
  'Seftekra Energy ("Seftekra," "we," "us," or "our") is committed to protecting the privacy of our website visitors, partners, and clients. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit project details for evaluation. Please read this policy carefully.';

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    number: "01",
    title: "Information We Collect",
    paragraphs: [
      "We collect various types of information in connection with the services we provide, including:",
    ],
    list: [
      {
        label: "Project Submission Data:",
        text: "When you submit a project for review, we collect your name, email address, phone number, and details regarding the project (including location, grid connection status, and land ownership details).",
      },
      {
        label: "Technical Data:",
        text: "Our servers automatically log data such as your IP address, browser type, operating system, and access times.",
      },
      {
        label: "Usage Data:",
        text: "Information on how you interact with our website, including pages visited and referral URLs.",
      },
    ],
  },
  {
    number: "02",
    title: "How We Use Your Information",
    paragraphs: [
      "Seftekra uses the collected data for the following primary purposes:",
    ],
    list: [
      {
        text: "To evaluate, underwrite, and originate renewable energy projects submitted through our platform.",
      },
      {
        text: "To communicate with you regarding your project submission, partnerships, or service inquiries.",
      },
      {
        text: "To maintain records required for legal, tax, and accounting purposes.",
      },
      {
        text: "To improve our website performance, user experience, and internal analytics.",
      },
    ],
  },
  {
    number: "03",
    title: "Data Sharing & Third Parties",
    paragraphs: [
      "We do not sell your personal information. However, we may share your data with vetted third parties under specific circumstances:",
    ],
    list: [
      {
        label: "Infrastructure Partners:",
        text: "Engineers, EPC (Engineering, Procurement, and Construction) firms, and legal counsel necessary to evaluate and execute your project.",
      },
      {
        label: "Service Providers:",
        text: "Hosting platforms, analytics tools, and CRM software used to operate our business.",
      },
      {
        label: "Legal Compliance:",
        text: "If required to do so by law, subpoena, or government regulation, we may disclose your information to the appropriate authorities.",
      },
    ],
  },
  {
    number: "04",
    title: "Data Security",
    paragraphs: [
      "We implement administrative, technical, and physical security measures designed to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure server hosting, and strict internal access controls. However, no method of transmission over the Internet or electronic storage is 100% secure.",
    ],
  },
  {
    number: "05",
    title: "Your Data Rights",
    paragraphs: [
      "Depending on your location (e.g., under GDPR in the EU or CCPA in California), you may have the right to:",
    ],
    list: [
      { text: "Request access to the personal data we hold about you." },
      { text: "Request the correction or deletion of your personal data." },
      { text: "Object to or restrict our processing of your data." },
      { text: "Withdraw consent to data processing at any time." },
    ],
  },
  {
    number: "06",
    title: "International Transfers",
    paragraphs: [
      "Seftekra operates globally, and your information may be transferred to and processed in countries outside of your jurisdiction, including countries that may not have the same data protection laws. We take steps to ensure that your data is adequately protected during such transfers in accordance with applicable laws.",
    ],
  },
  {
    number: "07",
    title: "Contact Us",
    paragraphs: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our compliance team:",
    ],
    contactCard: true,
  },
];
