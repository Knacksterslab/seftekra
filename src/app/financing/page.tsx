import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FinancingSelector from "@/components/FinancingSelector";
import FinancingComparison from "@/components/FinancingComparison";
import ScrollReveal from "@/components/ScrollReveal";
import CtaBanner from "@/components/CtaBanner";
import { FINANCING_MODELS } from "@/lib/financing";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Financing Models — Seftekra",
  description:
    "Three flexible financial models for renewable energy infrastructure: Direct Purchase, Lease-to-Own, and Build, Operate, Transfer. Structured to align with your balance sheet.",
  alternates: { canonical: "/financing" },
  openGraph: {
    title: `${SITE.name} — Financing Models`,
    description:
      "Direct Purchase, Lease-to-Own, and BOT — three structures aligned to your capital strategy.",
    url: `${SITE.url}/financing`,
  },
};

export default function FinancingHub() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Financing"
        title="Engineered for Your"
        titleAccent="Capital Strategy."
        tagline="Flexible financial models designed to align with your balance sheet and long-term energy goals. Own it, lease it, or let us run it for you."
      />

      <FinancingSelector />

      <FinancingComparison models={FINANCING_MODELS} />

      {/* Model cards linking to detail */}
      <section className="border-t border-white/5 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
                The Three Models
              </p>
              <h2 className="text-3xl font-light md:text-4xl">
                Explore each in <span className="font-bold text-gold">detail.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {FINANCING_MODELS.map((m, i) => (
              <ScrollReveal key={m.slug} delay={i * 0.12}>
                <Link
                  href={`/financing/${m.slug}`}
                  className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-10 backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                  <div>
                    <span className="mb-6 block text-xs tracking-[0.2em] uppercase text-gray-500">
                      {m.number} / Model
                    </span>
                    <h3 className="mb-4 font-display text-2xl font-medium text-white">
                      {m.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-gray-400">
                      {m.tagline}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-gold/70 transition-all group-hover:gap-3">
                    {m.label} <span>&rarr;</span>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Which structure fits your balance sheet?"
        subheading="Send us your project details and we'll model the right financing structure during feasibility — direct purchase, lease-to-own, or BOT."
      />
      <Footer />
    </>
  );
}
