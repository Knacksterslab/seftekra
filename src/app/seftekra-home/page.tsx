import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import StatsGrid from "@/components/StatsGrid";
import UseCases from "@/components/UseCases";
import PayStructure from "@/components/PayStructure";
import ValueTimeline from "@/components/ValueTimeline";
import ChemistryChoice from "@/components/ChemistryChoice";
import ProcessStepper from "@/components/ProcessStepper";
import FaqSection from "@/components/FaqSection";
import CrossLinks from "@/components/CrossLinks";
import HomeLeadForm from "@/components/HomeLeadForm";
import StickyCta from "@/components/StickyCta";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { HOME_PRODUCT } from "@/lib/seftekraHome";
import { getSolution } from "@/lib/solutions";
import { getFinancingModel } from "@/lib/financing";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Seftekra Home — Solar & Battery for Your House",
  description: HOME_PRODUCT.metaDescription,
  alternates: { canonical: "/seftekra-home" },
  openGraph: {
    title: `${SITE.name} Home — Solar & Battery for Your House`,
    description: HOME_PRODUCT.metaDescription,
    url: `${SITE.url}/seftekra-home`,
  },
};

export default function SeftekraHomePage() {
  const p = HOME_PRODUCT;

  const crossLinkItems = [
    ...p.compatibleModels
      .map(getFinancingModel)
      .filter((m): m is NonNullable<typeof m> => Boolean(m))
      .map((m) => ({
        label: `Financing · ${m.label}`,
        title: m.title,
        href: `/financing/${m.slug}`,
      })),
    ...p.compatibleSolutions
      .map(getSolution)
      .filter((s): s is NonNullable<typeof s> => Boolean(s))
      .map((s) => ({
        label: `Solutions · ${s.label}`,
        title: s.title,
        href: `/solutions/${s.slug}`,
      })),
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${SITE.name} Home`,
    serviceType: "Residential Solar and Battery Energy System",
    category: "Home Energy",
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: "Worldwide",
    description: p.metaDescription,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema as unknown as Record<string, unknown>} />
      <JsonLd data={faqSchema as unknown as Record<string, unknown>} />
      <Navbar />

      <PageHero
        eyebrow="Seftekra Home"
        title="Your Roof."
        titleAccent="Your Power."
        tagline={p.tagline}
        persona={p.buyerPersona}
      />

      {/* Overview */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
              Overview
            </p>
          </ScrollReveal>
          <div className="space-y-6">
            {p.overview.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="text-base font-light leading-relaxed text-gray-300 md:text-lg">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatsGrid
        stats={p.stats}
        footnote="Indicative. Panels: 25–30+ years. Battery: typically 10–15 years — replacement included during the tariff term."
      />

      <UseCases
        cases={p.included}
        eyebrow="What's Included"
        heading="Everything, "
        headingAccent="included."
      />

      <PayStructure payPaths={p.payPaths} tariffIncluded={p.tariffIncluded} />

      <ValueTimeline milestones={p.valueTimeline} />

      <ChemistryChoice chemistry={p.chemistry} />

      <ProcessStepper steps={p.process} />

      <FaqSection
        faqs={p.faqs}
        eyebrow="Home Owner Questions"
        heading="Before you ask us."
      />

      <HomeLeadForm />

      {crossLinkItems.length > 0 && (
        <CrossLinks
          eyebrow="Same Principles"
          heading="The institutional story behind your home system."
          items={crossLinkItems}
        />
      )}

      <Footer />
      <StickyCta />
    </>
  );
}
