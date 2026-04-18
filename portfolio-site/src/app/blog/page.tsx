import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data/blog";
import { BLOG_PAGE_COPY, BLOG_SECTION_COPY } from "@/lib/data/blog-copy";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Blog | ${SITE_CONFIG.title}`,
  description: "Articles, notes, and project insights from Wendmagegn Tajura.",
};

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <header className="mb-12">
        <Link
          href="/#blog"
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-100 dark:bg-gray-800 dark:text-amber-300 dark:hover:bg-gray-700"
        >
          <ArrowLeft className="h-4 w-4" />
          {BLOG_PAGE_COPY.backToMainSection}
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">{BLOG_PAGE_COPY.title}</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {BLOG_PAGE_COPY.subtitle}
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.id}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md shadow-gray-200/60 dark:border-gray-700/70 dark:bg-gray-900/90 dark:shadow-black/25"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-52 w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {post.date} • {post.readTime}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
                <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-700 dark:bg-gray-800 dark:text-amber-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-100 dark:bg-gray-800 dark:text-amber-300 dark:hover:bg-gray-700"
                >
                  {BLOG_SECTION_COPY.readArticleCta}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
