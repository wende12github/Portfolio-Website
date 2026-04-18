import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data/blog";
import { BLOG_POST_PAGE_COPY } from "@/lib/data/blog-copy";
import { SITE_CONFIG } from "@/lib/constants";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: `${BLOG_POST_PAGE_COPY.notFoundTitle} | ${SITE_CONFIG.title}`,
    };
  }

  return {
    title: `${post.title} | ${SITE_CONFIG.title}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const postsByDate = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const post = postsByDate.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const currentPostIndex = postsByDate.findIndex((item) => item.slug === slug);
  const nextPost =
    postsByDate.length > 1
      ? postsByDate[(currentPostIndex + 1) % postsByDate.length]
      : null;

  const paragraphs = post.content
    ? post.content.split("\n\n").map((line) => line.trim()).filter(Boolean)
    : [];

  return (
    <article className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white px-6 py-8 shadow-lg shadow-gray-200/60 dark:border-gray-700/70 dark:bg-gray-900/95 dark:shadow-black/25 sm:px-10 sm:py-10">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-100 dark:bg-gray-800 dark:text-amber-300 dark:hover:bg-gray-700"
        >
          <ArrowLeft className="h-4 w-4" />
          {BLOG_POST_PAGE_COPY.backToBlog}
        </Link>

        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
          {post.date} • {post.readTime} • {post.author}
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">{post.title}</h1>

        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-2xl sm:h-96">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <p className="mt-8 text-lg leading-8 text-gray-700 dark:text-gray-300">{post.excerpt}</p>

        {paragraphs.length > 0 && (
          <section className="mt-8 space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`${post.slug}-paragraph-${index}`}
                className="text-[1.03rem] leading-8 text-gray-700 dark:text-gray-300"
              >
                {paragraph}
              </p>
            ))}
          </section>
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-gray-800 dark:text-amber-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6 dark:border-gray-700">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 transition-colors hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200"
          >
            <ArrowLeft className="h-4 w-4" />
            {BLOG_POST_PAGE_COPY.allArticles}
          </Link>

          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-95"
            >
              {BLOG_POST_PAGE_COPY.readNext}: {nextPost.title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
