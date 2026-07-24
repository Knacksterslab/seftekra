import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import LdesExplainer from "@/components/LdesExplainer";
import ChemistryCard from "@/components/ChemistryCard";
import ScrollReveal from "@/components/ScrollReveal";
import CtaBanner from "@/components/CtaBanner";
import { STORAGE_CHEMISTRIES } from "@/lib/storage";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Long-Duration Storage — Seftekra",
  description:
    "Long-duration energy storage from Seftekra: Iron-Air, Iron Redox Flow, and Vanadium Redox Flow batteries — 10 to 100+ hour duration, no degradation, non-flammable. The storage that solves what lithium-ion can't.",
  alternates: { canonical: "/storage" },
  openGraph: {
    title: `${SITE.name} — Long-Duration Storage`,
    description:
      "Iron-Air, Iron Flow, and Vanadium Flow — long-duration storage for the problem lithium-ion can't solve.",
    url: `${SITE.url}/storage`,
  },
};

export default function StorageHub() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Storage"
        title="Beyond the"
        titleAccent="Four-Hour Battery."
        tagline="Long-Duration Energy Storage using three non-lithium chemistries — engineered to discharge for hours or days, cycle for decades without fading, and run without the thermal risk and critical-mineral exposure of conventional batteries."
      />

      <LdesExplainer />

      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
                Three Chemistries
              </p>
              <h2 className="text-3xl font-light md:text-4xl">
                Matched to your <span className="font-bold text-gold">duty cycle.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm font-light text-gray-400">
                Each solves a different duration and cycling profile. We size and
                select the right chemistry — or combination — for the load.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {STORAGE_CHEMISTRIES.map((chemistry, i) => (
              <ChemistryCard
                key={chemistry.slug}
                chemistry={chemistry}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Which chemistry fits your duty cycle?"
        subheading="Tell us your discharge duration, cycling pattern, and site constraints — we'll match the chemistry and size the system during feasibility."
      />
      <Footer />
    </>
  );
}
