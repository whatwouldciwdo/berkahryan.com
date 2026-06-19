import type { MetadataRoute } from "next";
import { posts } from "./data/posts";
import { portfolioProjects } from "./data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://berkahryan.com";
  const now = new Date();

  const staticRoutes: {
    route: string;
    priority: number;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  }[] = [
    { route: "", priority: 1.0, changeFrequency: "daily" },
    { route: "/crane", priority: 0.95, changeFrequency: "weekly" },
    { route: "/forklift", priority: 0.95, changeFrequency: "weekly" },
    { route: "/portfolio", priority: 0.85, changeFrequency: "monthly" },
    { route: "/company", priority: 0.8, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { route: "/safety", priority: 0.75, changeFrequency: "monthly" },
    { route: "/blog", priority: 0.7, changeFrequency: "daily" },
    { route: "/terms", priority: 0.4, changeFrequency: "yearly" },
  ];

  const staticEntries = staticRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // Dynamic blog post routes (Indonesian slugs are canonical)
  const blogEntries = posts.id.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  // Dynamic portfolio detail routes
  const portfolioEntries = portfolioProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...portfolioEntries, ...blogEntries];
}
