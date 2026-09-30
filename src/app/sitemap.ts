import type { MetadataRoute } from "next";
import { games } from "@/data/games";
import { profile } from "@/data/profile";
import { hasLegal } from "@/lib/legal";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...games.flatMap((g) => [
      { url: `${base}/${g.slug}/`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
      { url: `${base}/${g.slug}/support/`, lastModified: now, priority: 0.4 },
      ...(["privacy", "terms"] as const)
        .filter((k) => hasLegal(g.slug, k))
        .map((k) => ({ url: `${base}/${g.slug}/${k}/`, lastModified: now, priority: 0.3 })),
    ]),
  ];
}
