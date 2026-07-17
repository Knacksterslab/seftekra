import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { SITE, WEBSITE_SCHEMA } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Powering the Next Grid`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "renewable energy",
    "solar infrastructure",
    "battery storage",
    "energy independence",
    "commercial solar",
    "utility-scale solar",
    "BOT",
    "build operate transfer",
    "energy EPC",
    "residential estates solar",
    "Seftekra",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Powering the Next Grid`,
    description: SITE.description,
    images: [{ url: SITE.image, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Powering the Next Grid`,
    description: SITE.description,
    images: [SITE.image],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-midnight text-white">
        <JsonLd data={WEBSITE_SCHEMA as unknown as Record<string, unknown>} />
        {children}
      </body>
    </html>
  );
}
