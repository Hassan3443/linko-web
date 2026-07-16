import type { MetadataRoute } from "next";

// TODO: Replace https://example.com with the real production domain before launch
const BASE_URL = "https://example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
