import type { MetadataRoute } from "next";

// TODO: Replace https://example.com with the real production domain before launch
const BASE_URL = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
