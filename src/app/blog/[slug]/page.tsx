import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import WitchyQuote from "../../components/WitchyQuote";
import Footer from "../../components/Footer";
import { ALL_POSTS, type BlogPost } from "../../constants/BlogPosts";
import { IMAGES } from "../../constants/Images";

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
    openGraph: {
      title: `${post.title} | Ivy Spellman`,
      description: post.excerpt,
      type: "article",
    },
  };
}

/**
 * Generate static params for all blog posts
 */
export function generateStaticParams() {
  return ALL_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Article Hero Section
 * Full-width featured image with title overlay area below
 */
function ArticleHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative pt-[93px]">
      {/* Featured Image - Fixed 400px height */}
      <div className="relative w-full h-[400px]">
        <Image
          src={post.featuredImage || IMAGES.blogPlaceholder}
          alt={post.title}
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>
    </section>
  );
}

/**
 * Article Header
 * Category, title, date, and reading time
 */
function ArticleHeader({ post }: { post: BlogPost }) {
  return (
    <header className="flex flex-col gap-5 max-w-[754px]">
      {/* Decorative Divider */}
      <Image
        src={IMAGES.headerDivider}
        alt=""
        width={162}
        height={8}
        className="opacity-90"
      />

      {/* Category */}
      <span className="font-montserrat font-medium text-base text-ivy-gold uppercase tracking-wide">
        {post.category}
      </span>

      {/* Title */}
      <h1 className="font-cormorant font-semibold text-4xl md:text-5xl lg:text-[60px] text-ivy-cream leading-tight">
        {post.title}
      </h1>

      {/* Date and Reading Time */}
      <p className="font-lora font-medium text-base text-ivy-cream">
        {post.publishedAt} {post.readingTime && `- ${post.readingTime}`}
      </p>
    </header>
  );
}

/**
 * Article Content
 * Renders the blog post content with proper formatting
 */
function ArticleContent({ content }: { content: string }) {
  // Split content into paragraphs and format
  const paragraphs = content.split("\n\n");

  return (
    <div className="prose prose-invert prose-lg max-w-none">
      {paragraphs.map((paragraph, index) => {
        // Check if it's a heading (starts with ### or ##)
        if (paragraph.startsWith("### ")) {
          return (
            <h3
              key={index}
              className="font-lora font-medium text-2xl md:text-[30px] text-ivy-gold mt-12 mb-6"
            >
              {paragraph.replace("### ", "")}
            </h3>
          );
        }
        if (paragraph.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="font-lora font-medium text-2xl md:text-[30px] text-ivy-gold mt-12 mb-6"
            >
              {paragraph.replace("## ", "")}
            </h2>
          );
        }

        // Check if it's a list
        if (paragraph.startsWith("- ")) {
          const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
          return (
            <ul key={index} className="list-disc list-inside space-y-2 my-6">
              {items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="font-lora text-lg md:text-xl text-ivy-cream leading-relaxed"
                >
                  {item.replace("- ", "")}
                </li>
              ))}
            </ul>
          );
        }

        // Check if it's a bold heading (starts with **)
        if (paragraph.startsWith("**") && paragraph.includes("**\n")) {
          const [heading, ...rest] = paragraph.split("\n");
          const headingText = heading.replace(/\*\*/g, "");
          return (
            <div key={index} className="my-8">
              <h4 className="font-lora font-medium text-xl md:text-2xl text-ivy-cream mb-4">
                {headingText}
              </h4>
              {rest.length > 0 && (
                <p className="font-lora text-lg md:text-xl text-ivy-cream/90 leading-relaxed italic">
                  {rest.join("\n").replace(/\*/g, "")}
                </p>
              )}
            </div>
          );
        }

        // Regular paragraph - handle inline formatting
        const formattedContent = paragraph
          .split(/(\*[^*]+\*|\*\*[^*]+\*\*)/)
          .map((part, partIndex) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={partIndex} className="font-semibold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            if (part.startsWith("*") && part.endsWith("*")) {
              return (
                <em key={partIndex} className="italic">
                  {part.slice(1, -1)}
                </em>
              );
            }
            return part;
          });

        return (
          <p
            key={index}
            className="font-lora text-lg md:text-xl text-ivy-cream leading-relaxed my-6"
          >
            {formattedContent}
          </p>
        );
      })}
    </div>
  );
}

/**
 * Related Article Card
 * Card with full-width image and content below
 */
function RelatedArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-ivy-dark-light border border-[#c6b56f]/50 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.45)] hover:border-ivy-gold transition-colors duration-300"
    >
      {/* Image */}
      <div className="relative w-full h-[180px] md:h-[200px] overflow-hidden">
        <Image
          src={post.featuredImage || IMAGES.blogPlaceholder}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6">
        {/* Category */}
        <span className="font-montserrat font-medium text-sm text-ivy-gold uppercase tracking-wide">
          {post.category}
        </span>

        {/* Title */}
        <h3 className="font-lora font-medium text-lg md:text-xl text-ivy-cream group-hover:text-ivy-gold transition-colors duration-300 leading-tight line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="font-lora text-sm text-ivy-cream/80 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        {/* Date */}
        <p className="font-lora text-sm text-ivy-gray">
          {post.publishedAt}
        </p>
      </div>
    </Link>
  );
}

/**
 * Related Articles Section
 * Shows 3 related articles as cards with books background
 */
function RelatedArticles({ currentPostId }: { currentPostId: string }) {
  // Get 3 random posts that aren't the current one
  const otherPosts = ALL_POSTS.filter((post) => post.id !== currentPostId);
  const relatedPosts = otherPosts.slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="relative py-20 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.booksBackground}
          alt=""
          fill
          className="object-cover object-center"
          quality={90}
        />
      </div>

      <div className="relative z-10 max-w-[1341px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <h2 className="font-cormorant font-semibold text-3xl md:text-5xl lg:text-[60px] text-ivy-cream mb-12 md:mb-16">
          You Might Also Like
        </h2>

        {/* Articles Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <RelatedArticleCard key={post.id} post={post} />
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
    <main className="bg-ivy-dark min-h-screen">
      <Navigation />
      <ArticleHero post={post} />

      {/* Article Body */}
      <article className="bg-ivy-dark py-16 md:py-20">
        <div className="max-w-[886px] mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-12 md:gap-16">
            <ArticleHeader post={post} />

            {post.content ? (
              <ArticleContent content={post.content} />
            ) : (
              <p className="font-lora text-lg text-ivy-cream/70 italic">
                Full article content coming soon...
              </p>
            )}
          </div>
        </div>
      </article>

      <RelatedArticles currentPostId={post.id} />
      <WitchyQuote />
      <Footer />
    </main>
  );
}
