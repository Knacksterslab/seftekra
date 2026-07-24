import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CrossLinks from "@/components/CrossLinks";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import { FINANCING_MODELS, getFinancingModel } from "@/lib/financing";
import { getSolution } from "@/lib/solutions";
import { SITE } from "@/lib/seo";

export function generateStaticParams() {
  return FINANCING_MODELS.map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const model = getFinancingModel(slug);
  if (!model) return {};

  return {
    title: `${model.title} — Seftekra`,
    description: model.metaDescription,
    alternates: { canonical: `/financing/${slug}` },
    openGraph: {
      title: `${model.title} — ${SITE.name}`,
      description: model.metaDescription,
      url: `${SITE.url}/financing/${slug}`,
    },
  };
}

export default async function FinancingDetailPage({ params }: Props) {
  const { slug } = await params;
  const model = getFinancingModel(slug);
  if (!model) notFound();

  const compatibleSolutions = model.compatibleSolutions
    .map(getSolution)
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: model.faqs.map((f) => ({
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
      <JsonLd data={faqSchema as unknown as Record<string, unknown>} />
      <Navbar />

      <PageHero
        eyebrow={`${model.number} / ${model.label}`}
        title={model.title}
        tagline={model.tagline}
      />

      {/* How it works */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
              How It Works
            </p>
          </ScrollReveal>
          <div className="space-y-6">
            {model.howItWorks.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="text-base font-light leading-relaxed text-gray-300 md:text-lg">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who it suits */}
      <section className="border-y border-white/5 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
              Who It Suits
            </p>
            <p className="text-lg font-light leading-relaxed text-white">
              {model.whoItSuits}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Cash-flow example */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
                Illustrative Cash Flow
              </p>
              <h2 className="text-2xl font-light md:text-3xl">
                How the money moves.
              </h2>
              <p className="mt-3 text-xs font-light text-gray-600">
                Indicative only — actual figures are confirmed per project.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {model.cashFlowExample.map((phase, i) => (
              <ScrollReveal key={phase.phase} delay={i * 0.1}>
                <div className="flex flex-col gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-6 backdrop-blur-[10px] sm:flex-row sm:items-center sm:gap-6">
                  <div className="shrink-0 sm:w-40">
                    <span className="font-display text-sm font-bold tracking-wide text-gold">
                      {phase.phase}
                    </span>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-gray-300">
                    {phase.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
                Questions
              </p>
              <h2 className="text-2xl font-light md:text-3xl">
                Frequently asked.
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {model.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <details className="group rounded-lg border border-white/10 bg-white/[0.03] p-6 backdrop-blur-[10px] transition-colors hover:border-gold/30">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium text-white marker:content-['']">
                    {faq.q}
                    <span className="shrink-0 text-gold transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm font-light leading-relaxed text-gray-400">
                    {faq.a}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {compatibleSolutions.length > 0 && (
        <CrossLinks
          eyebrow="Solutions"
          heading={`Where ${model.title} fits.`}
          items={compatibleSolutions.map((s) => ({
            label: s.label,
            title: s.title,
            href: `/solutions/${s.slug}`,
          }))}
        />
      )}

      <CtaBanner />
      <Footer />
    </>
  );
}
