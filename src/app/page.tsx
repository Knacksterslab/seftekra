import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import StrategySection from "@/components/StrategySection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE, ORGANIZATION_SCHEMA } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Powering the Next Grid`,
  description:
    "Seftekra delivers city-scale solar, battery storage, and BOT energy infrastructure for commercial, industrial, and residential estates worldwide.",
  openGraph: {
    title: `${SITE.name} — Powering the Next Grid`,
    description:
      "Seftekra delivers city-scale solar, battery storage, and BOT energy infrastructure for commercial, industrial, and residential estates worldwide.",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={ORGANIZATION_SCHEMA as unknown as Record<string, unknown>}
      />
      <Navbar />
      <Hero />
      <CapabilitiesSection />
      <StrategySection />
      <ContactForm />
      <Footer />
    </>
  );
}
