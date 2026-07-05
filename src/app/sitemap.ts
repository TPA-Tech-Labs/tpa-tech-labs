import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        { path: "", priority: 1, changeFrequency: "weekly" as const },
        { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/products", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/work", priority: 0.7, changeFrequency: "monthly" as const },
        { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
        { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
        { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
        { path: "/schedule", priority: 0.9, changeFrequency: "yearly" as const },
        { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
        { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
        { path: "/security", priority: 0.4, changeFrequency: "yearly" as const },
    ].map(({ path, priority, changeFrequency }) => ({
        url: `${SITE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
    }));

    const blogRoutes: MetadataRoute.Sitemap = Object.entries(BLOG_POSTS).map(
        ([slug, post]) => ({
            url: `${SITE_URL}/blog/${slug}`,
            lastModified: new Date(post.date),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        })
    );

    return [...staticRoutes, ...blogRoutes];
}
