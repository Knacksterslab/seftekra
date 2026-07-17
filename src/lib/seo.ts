export const SITE = {
  name: "Seftekra",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://seftekra.com",
  description:
    "Seftekra engineers, builds, and operates premium renewable energy and battery storage infrastructure. From residential estates to city-scale installations.",
  locale: "en_US",
  image: "/opengraph-image.png",
} as const;

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Seftekra Energy",
  url: SITE.url,
  description: SITE.description,
  email: "connect@seftekra.com",
  logo: `${SITE.url}/icon.svg`,
  sameAs: [],
  areaServed: "Worldwide",
  knowsAbout: [
    "Renewable Energy",
    "Battery Storage",
    "Solar Infrastructure",
    "Energy Infrastructure",
    "Real Estate Development",
  ],
} as const;

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  inLanguage: "en",
} as const;
