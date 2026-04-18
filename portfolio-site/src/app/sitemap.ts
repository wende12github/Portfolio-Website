import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/data/blog";
import type { MetadataRoute } from "next";

// Ensure static export compatibility
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_CONFIG.url;
    const now = new Date();

    const blogUrls: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        ...blogUrls,
    ];
}
