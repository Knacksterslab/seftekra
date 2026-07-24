import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CapabilityStack from "@/components/CapabilityStack";
import StatsGrid from "@/components/StatsGrid";
import UseCases from "@/components/UseCases";
import ProcessStepper from "@/components/ProcessStepper";
import CrossLinks from "@/components/CrossLinks";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { SOLUTIONS, getSolution } from "@/lib/solutions";
import { getFinancingModel } from "@/lib/financing";
import { getChemistry } from "@/lib/storage";
import { SITE } from "@/lib/seo";

// Prerender known slugs (also required if output: "export" is ever re-enabled).
export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

// Unknown slugs 404 rather than attempting on-demand render.
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};

  return {
    title: `${solution.title} — Seftekra`,
    description: solution.metaDescription,
    alternates: { canonical: `/solutions/${slug}` },
    openGraph: {
      title: `${solution.title} — ${SITE.name}`,
      description: solution.metaDescription,
      url: `${SITE.url}/solutions/${slug}`,
    },
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const compatibleModels = solution.compatibleModels
    .map(getFinancingModel)
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  const compatibleStorage = (solution.compatibleStorage ?? [])
    .map(getChemistry)
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${SITE.name} — ${solution.title}`,
    serviceType: solution.title,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: "Worldwide",
    description: solution.metaDescription,
  };

  return (
    <>
      <JsonLd data={serviceSchema as unknown as Record<string, unknown>} />
      <Navbar />

      <PageHero
        eyebrow={`${solution.number} / ${solution.label}`}
        title={solution.title}
        tagline={solution.tagline}
        persona={solution.buyerPersona}
      />

      {/* Overview / narrative */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
              Overview
            </p>
          </ScrollReveal>
          <div className="space-y-6">
            {solution.overview.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="text-base font-light leading-relaxed text-gray-300 md:text-lg">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CapabilityStack layers={solution.capabilities} />

      <StatsGrid stats={solution.stats} />

      <UseCases cases={solution.useCases} />

      <ProcessStepper steps={solution.process} />

      {compatibleModels.length > 0 && (
        <CrossLinks
          eyebrow="Financing"
          heading={`How to pay for ${solution.title.toLowerCase()}.`}
          items={compatibleModels.map((m) => ({
            label: m.label,
            title: m.title,
            href: `/financing/${m.slug}`,
          }))}
        />
      )}

      {compatibleStorage.length > 0 && (
        <CrossLinks
          eyebrow="Storage"
          heading={`Paired with long-duration storage.`}
          items={compatibleStorage.map((c) => ({
            label: c.label,
            title: `${c.title} — ${c.durationHours}`,
            href: `/storage/${c.slug}`,
          }))}
        />
      )}

      <CtaBanner />
      <Footer />
    </>
  );
}
