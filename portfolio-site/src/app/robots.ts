import { SITE_CONFIG } from "@/lib/constants";
import type { MetadataRoute } from "next";

// Ensure static export compatibility
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    };
}
