import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { SOLUTIONS } from "@/lib/solutions";
import { FINANCING_MODELS } from "@/lib/financing";
import { STORAGE_CHEMISTRIES } from "@/lib/storage";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const solutionPages: MetadataRoute.Sitemap = SOLUTIONS.map((s) => ({
    url: `${SITE.url}/solutions/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const financingPages: MetadataRoute.Sitemap = FINANCING_MODELS.map((m) => ({
    url: `${SITE.url}/financing/${m.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const storagePages: MetadataRoute.Sitemap = STORAGE_CHEMISTRIES.map((c) => ({
    url: `${SITE.url}/storage/${c.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/solutions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...solutionPages,
    {
      url: `${SITE.url}/financing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...financingPages,
    {
      url: `${SITE.url}/storage`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...storagePages,
    {
      url: `${SITE.url}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE.url}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
