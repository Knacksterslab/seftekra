import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SolutionCard from "@/components/SolutionCard";
import ScrollReveal from "@/components/ScrollReveal";
import CtaBanner from "@/components/CtaBanner";
import { SOLUTIONS } from "@/lib/solutions";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Solutions — Seftekra",
  description:
    "End-to-end renewable energy infrastructure from Seftekra: utility-scale solar, commercial & industrial generation, residential estates, and lifetime operations & maintenance.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: `${SITE.name} — Solutions`,
    description:
      "End-to-end renewable energy infrastructure: utility-scale, commercial, residential, and O&M.",
    url: `${SITE.url}/solutions`,
  },
};

export default function SolutionsHub() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Solutions"
        title="End-to-End Energy"
        titleAccent="Infrastructure."
        tagline="High-voltage solutions engineered for maximum yield and total energy independence — from residential estates to city-scale installations."
      >
        <ScrollReveal delay={0.3}>
          <p className="mx-auto mt-10 max-w-xl text-xs font-light uppercase tracking-[0.2em] text-gray-600">
            Four segments. One integrated approach.
          </p>
        </ScrollReveal>
      </PageHero>

      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
          {SOLUTIONS.map((solution, i) => (
            <SolutionCard key={solution.slug} solution={solution} index={i} />
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Not sure which fits?"
        subheading="Tell us about your site, load, and goals — we'll match you to the right segment and structure during feasibility."
      />
      <Footer />
    </>
  );
}
