import type { MetadataRoute } from "next";
import { SITE_URL, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/book", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/payment", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/resources", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.7, changeFrequency: "monthly" as const })),
  ];

  return staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
