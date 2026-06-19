import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/favicon/"],
      },
    ],
    sitemap: "https://berkahryan.com/sitemap.xml",
    host: "https://berkahryan.com",
  };
}
