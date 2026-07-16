import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyBackground from "@/components/PrivacyBackground";
import TableOfContents from "@/components/TableOfContents";
import ScrollReveal from "@/components/ScrollReveal";
import { PRIVACY_SECTIONS, INTRO_TEXT } from "@/lib/privacyData";

export const metadata: Metadata = {
  title: "Privacy Policy — Seftekra",
  description:
    "Seftekra Energy privacy policy — how we collect, use, and safeguard your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <PrivacyBackground />

      <header className="relative z-10 px-6 pb-20 pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs tracking-[0.3em] uppercase text-gold">
            Legal &amp; Compliance
          </p>
          <h1 className="mb-6 font-display text-4xl font-light tracking-tight md:text-6xl">
            Privacy <span className="font-bold text-gold">Policy</span>
          </h1>
          <p className="text-sm font-light text-gray-500">
            Last Updated: July 16, 2026
          </p>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <aside className="fixed top-32 hidden lg:block lg:w-[220px]">
          <TableOfContents
            items={PRIVACY_SECTIONS.map((s) => ({
              number: s.number,
              title: s.title,
            }))}
          />
        </aside>

        <main className="mx-auto max-w-3xl lg:ml-[300px]">
          <ScrollReveal>
            <div className="mb-12 rounded-lg border border-white/10 bg-white/[0.03] p-8 backdrop-blur-[10px] md:p-12">
              <p className="text-sm leading-relaxed font-light text-gray-300 md:text-base">
                {INTRO_TEXT}
              </p>
            </div>
          </ScrollReveal>

          {PRIVACY_SECTIONS.map((section, i) => (
            <ScrollReveal key={section.number} delay={i * 0.08}>
              <section
                id={`section-${section.number}`}
                className="mb-12 scroll-mt-28"
              >
                <h2 className="mb-4 flex items-center gap-3 font-display text-2xl font-medium">
                  <span className="text-sm font-bold text-gold">
                    {section.number}
                  </span>{" "}
                  {section.title}
                </h2>

                <div className="space-y-4 pl-8 text-sm leading-relaxed font-light text-gray-400 md:text-base">
                  {section.paragraphs.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}

                  {section.list && (
                    <ul className="mt-2 list-none space-y-2">
                      {section.list.map((item, li) => (
                        <li key={li} className="flex gap-2">
                          <span className="mt-[0.35em] block h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                          <span>
                            {item.label && (
                              <strong className="font-medium text-gray-300">
                                {item.label}{" "}
                              </strong>
                            )}
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.contactCard && (
                    <div className="mt-4 rounded-lg border border-white/5 bg-white/[0.03] p-6">
                      <p className="font-medium text-gray-300">
                        Seftekra Energy
                      </p>
                      <p className="text-gray-500">Compliance Department</p>
                      <p className="mt-2 text-gray-500">
                        Email:{" "}
                        <a
                          href="mailto:connect@seftekra.com"
                          className="text-gold hover:underline"
                        >
                          connect@seftekra.com
                        </a>
                      </p>
                    </div>
                  )}

                  {section.number === "05" && (
                    <p className="mt-4">
                      To exercise these rights, please contact us using the
                      information provided below.
                    </p>
                  )}
                </div>
              </section>
            </ScrollReveal>
          ))}
        </main>
      </div>

      <Footer />
    </>
  );
}
