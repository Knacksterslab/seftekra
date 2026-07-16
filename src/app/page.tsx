import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import StrategySection from "@/components/StrategySection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CapabilitiesSection />
      <StrategySection />
      <ContactForm />
      <Footer />
    </>
  );
}
