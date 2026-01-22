import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import WitchyQuote from "../components/WitchyQuote";
import Footer from "../components/Footer";
import { ALL_POSTS, JOURNAL_PAGE, type BlogPost } from "../constants/BlogPosts";
import { IMAGES } from "../constants/Images";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Essays, musings, and magical wisdom from the forest. Thoughts on witchcraft, midlife, and finding magic in the mess.",
  openGraph: {
    title: "Journal | Ivy Spellman",
    description:
      "Essays, musings, and magical wisdom from the forest.",
    type: "website",
  },
};

/**
 * Journal Hero Section
 * Background image with decorative frame, leaves, title and description
 */
function JournalHero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.aboutBackground}
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Decorative Double Frame Border */}
      <div className="absolute top-[100px] left-[20px] right-[20px] bottom-[40px] md:top-[93px] md:left-[50px] md:right-[50px] md:bottom-[40px] border border-ivy-cream/50 pointer-events-none" />
      <div className="absolute top-[112px] left-[32px] right-[32px] bottom-[52px] md:top-[111px] md:left-[68px] md:right-[68px] md:bottom-[58px] border border-ivy-cream/50 pointer-events-none" />

      {/* Decorative Leaf Elements - Left side */}
      <div className="absolute left-0 bottom-[20px] md:bottom-[40px] w-[82px] md:w-[163px] h-[123px] md:h-[245px] pointer-events-none z-20">
        <Image src={IMAGES.leaf1} alt="" fill className="object-contain" />
      </div>

      {/* Decorative Leaf Elements - Right side */}
      <div className="absolute right-0 bottom-[20px] md:bottom-[40px] w-[82px] md:w-[163px] h-[123px] md:h-[245px] pointer-events-none z-20">
        <Image src={IMAGES.leaf2} alt="" fill className="object-contain" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-12 md:px-20 lg:px-[120px] py-32 w-full">
        <div className="flex flex-col items-center text-center max-w-[650px] mx-auto gap-[30px]">
          {/* Star Ornament */}
          <Image
            src={IMAGES.starOrnament}
            alt=""
            width={68}
            height={68}
            className="opacity-90"
          />

          <div className="flex flex-col gap-5">
            <h1 className="font-cormorant font-semibold text-4xl md:text-5xl lg:text-[60px] text-ivy-gold leading-none">
              {JOURNAL_PAGE.heroTitle}
            </h1>

            <p className="font-lora font-medium text-lg md:text-xl text-ivy-cream leading-relaxed">
              {JOURNAL_PAGE.heroSubtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Blog Article Card for listing page
 * Horizontal layout with image on left, content on right
 */
function BlogArticleCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col md:flex-row gap-6 md:gap-8 group">
      {/* Article Image */}
      <Link
        href={`/blog/${post.slug}`}
        className="relative w-full md:w-[300px] lg:w-[400px] aspect-[4/3] flex-shrink-0 overflow-hidden"
      >
        <Image
          src={post.featuredImage || IMAGES.blogPlaceholder}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </Link>

      {/* Article Content */}
      <div className="flex flex-col gap-4 justify-center">
        {/* Category */}
        <span className="font-montserrat font-medium text-sm text-ivy-gold uppercase tracking-wide">
          {post.category}
        </span>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h2 className="font-lora font-medium text-xl md:text-2xl text-ivy-cream group-hover:text-ivy-gold transition-colors duration-300 leading-tight">
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="font-lora text-base text-ivy-cream/80 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        )}

        {/* Meta and Link */}
        <div className="flex items-center justify-between mt-2">
          <span className="font-montserrat text-sm text-ivy-gray">
            {post.publishedAt}
          </span>

          <Link
            href={`/blog/${post.slug}`}
            className="font-lora font-medium text-base text-ivy-cream underline decoration-ivy-gold underline-offset-4 hover:text-ivy-gold transition-colors duration-300"
          >
            Read Article
          </Link>
        </div>
      </div>
    </article>
  );
}

/**
 * Blog Articles Grid Section
 * Lists all blog posts with dividers
 */
function BlogArticlesGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="bg-ivy-dark py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 mb-16">
          <Image
            src={IMAGES.headerDivider}
            alt=""
            width={162}
            height={8}
            className="opacity-90"
          />
          <h2 className="font-cormorant font-semibold text-3xl md:text-[40px] text-ivy-cream text-center">
            {JOURNAL_PAGE.sectionTitle}
          </h2>
        </div>

        {/* Articles List */}
        <div className="flex flex-col gap-12">
          {posts.map((post, index) => (
            <div key={post.id}>
              <BlogArticleCard post={post} />
              {index < posts.length - 1 && (
                <div className="h-px w-full bg-gradient-to-r from-transparent via-ivy-gold/30 to-transparent mt-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Journal/Blog Listing Page
 * Displays all journal entries
 */
export default function BlogPage() {
  return (
    <main className="bg-ivy-dark min-h-screen">
      <Navigation />
      <JournalHero />
      <BlogArticlesGrid posts={ALL_POSTS} />
      <WitchyQuote />
      <Footer />
    </main>
  );
}
