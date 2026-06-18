import type { MetadataRoute } from "next";
import { posts } from "./data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://berkahryan.com";

  const staticRoutes = [
    "",
    "/company",
    "/crane",
    "/forklift",
    "/portfolio",
    "/blog",
    "/contact",
    "/safety",
  ];

  const staticEntries = staticRoutes.map((route) => {
    let priority = 0.8;
    let changeFrequency: "daily" | "weekly" | "monthly" = "monthly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route === "/crane" || route === "/forklift") {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (route === "/blog") {
      priority = 0.7;
      changeFrequency = "daily";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });

  // Dynamic blog post routes
  const blogEntries = posts.id.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
