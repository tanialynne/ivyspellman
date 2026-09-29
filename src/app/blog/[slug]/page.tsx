import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import WitchyQuote from "../../components/WitchyQuote";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import { ALL_POSTS } from "../../constants/BlogPosts";
import { PageHero, SectionHead } from "../../components/Page";

/**
 * Generate metadata for individual blog posts
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = ALL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Ivy Spellman`,
      description: post.excerpt,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: toISODate(post.publishedAt),
      authors: ["Ivy Spellman"],
      images: [
        {
          url: "/og/default.jpg",
          width: 1200,
          height: 630,
          alt: "Ivy Spellman — cozy witch romcoms about midlife, magic, and the mess in between",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Ivy Spellman`,
      description: post.excerpt,
      images: ["/og/default.jpg"],
    },
  };
}

// "August 20, 2026" -> "2026-08-20" for schema and article:published_time.
function toISODate(d: string): string | undefined {
  const t = new Date(d);
  return isNaN(t.getTime()) ? undefined : t.toISOString().slice(0, 10);
}

/**
 * Generate static params for all blog posts
 */
export function generateStaticParams() {
  return ALL_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

/**
 * Article body. Paragraphs split on blank lines; "## "/"### " headings, "- " lists,
 * a bold first line as a subhead, and "---" as a sparkle divider.
 */
function ArticleContent({ content }: { content: string }) {
  return (
    <div className="jb-prose">
      {content.split("\n\n").map((block, i) => {
        const t = block.trim();
        if (t === "---") return <hr key={i} />;
        if (t.startsWith("### ")) return <h3 key={i}>{t.slice(4)}</h3>;
        if (t.startsWith("## ")) return <h2 key={i}>{t.slice(3)}</h2>;
        if (t.startsWith("- ")) {
          return (
            <ul key={i}>
              {t.split("\n").filter((l) => l.startsWith("- ")).map((l, j) => (
                <li key={j}>{inline(l.slice(2))}</li>
              ))}
            </ul>
          );
        }
        if (t.startsWith("**") && t.includes("**\n")) {
          const [heading, ...rest] = t.split("\n");
          return (
            <div key={i}>
              <h4>{heading.replace(/\*\*/g, "")}</h4>
              {rest.length > 0 && <p>{inline(rest.join(" "))}</p>}
            </div>
          );
        }
        return <p key={i}>{inline(t)}</p>;
      })}
    </div>
  );
}

function RelatedArticles({ currentPostId }: { currentPostId: string }) {
  const relatedPosts = ALL_POSTS.filter((post) => post.id !== currentPostId).slice(0, 3);
  if (relatedPosts.length === 0) return null;
  return (
    <section className="jb-sec jb-teal" data-stars="10">
      <div className="jb-wrap">
        <SectionHead eyebrow="From the journal" title="Keep" em="reading" />
        <div className="jb-postgrid">
          {relatedPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="jb-card" data-burst>
              <small>{post.category}</small>
              <h3>{post.title}</h3>
              {post.excerpt && <p className="line-clamp-3">{post.excerpt}</p>}
              <p className="meta">{post.publishedAt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Single Blog Post Page
 * Dynamic route for individual journal entries
 */
export default async function SingleBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = ALL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="jb bg-ivy-dark min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BlogPosting",
                "@id": `https://www.ivyspellman.com/blog/${post.slug}#post`,
                headline: post.title,
                description: post.excerpt,
                url: `https://www.ivyspellman.com/blog/${post.slug}`,
                datePublished: toISODate(post.publishedAt),
                author: { "@id": "https://www.ivyspellman.com/#person" },
                publisher: { "@id": "https://www.ivyspellman.com/#person" },
                image: "https://www.ivyspellman.com/og/default.jpg",
                inLanguage: "en-US",
                isPartOf: { "@id": "https://www.ivyspellman.com/#website" },
                articleSection: post.category,
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ivyspellman.com" },
                  { "@type": "ListItem", position: 2, name: "Journal", item: "https://www.ivyspellman.com/blog" },
                  { "@type": "ListItem", position: 3, name: post.title, item: `https://www.ivyspellman.com/blog/${post.slug}` },
                ],
              },
            ],
          }),
        }}
      />
      <Navigation />
      <PageHero
        center
        eyebrow={post.category}
        title={post.title}
        ground="plum"
        stars={16}
        lede={
          <p className="jb-lede">
            {post.publishedAt}
            {post.readingTime ? ` · ${post.readingTime}` : ""}
          </p>
        }
      />
      <article className="jb-sec jb-ink" style={{ paddingTop: 80 }}>
        <div className="jb-wrap">
          {post.content ? (
            <ArticleContent content={post.content} />
          ) : (
            <p className="jb-prose italic">Full article coming soon.</p>
          )}
        </div>
      </article>
      <RelatedArticles currentPostId={post.id} />
      <WitchyQuote />
      <Newsletter />
      <Footer />
    </main>
  );
}
