import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import WitchyQuote from "../components/WitchyQuote";
import Newsletter from "../components/Newsletter";
import { PageHero, Eyebrow } from "../components/Page";
import Footer from "../components/Footer";
import { ALL_POSTS, JOURNAL_PAGE, type BlogPost } from "../constants/BlogPosts";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Journal",
  description:
    "Essays, musings, and magical wisdom from the forest. Thoughts on witchcraft, midlife, and finding magic in the mess.",
  openGraph: {
    url: "/blog",
    title: "Journal | Ivy Spellman",
    description:
      "Essays, musings, and magical wisdom from the forest.",
    type: "website",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Ivy Spellman — cozy witch romcoms about midlife, magic, and the mess in between",
      },
    ],
  },
};

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="jb-feature" data-burst>
      <div>
        <Eyebrow>Latest letter · {post.category}</Eyebrow>
        <h2>{post.title}</h2>
        {post.excerpt && <p>{post.excerpt}</p>}
      </div>
      <span className="jb-ghost" style={{ whiteSpace: "nowrap" }}>
        Read it →
      </span>
    </Link>
  );
}

function PostCard({ post, wide }: { post: BlogPost; wide?: boolean }) {
  // The first card goes double-width when the grid would otherwise leave one orphan on the last row.
  return (
    <Link href={`/blog/${post.slug}`} className={`jb-card${wide ? " wide" : ""}`} data-burst>
      <small>{post.category}</small>
      <h3>{post.title}</h3>
      {post.excerpt && <p className="line-clamp-4">{post.excerpt}</p>}
      <p className="meta">
        {post.publishedAt}
        {post.readingTime ? ` · ${post.readingTime}` : ""}
      </p>
    </Link>
  );
}

/**
 * Journal listing
 */
export default function BlogPage() {
  const [latest, ...rest] = ALL_POSTS;
  return (
    <main className="jb bg-ivy-dark min-h-screen">
      <Navigation />
      <PageHero eyebrow="The journal" title="Letters from" em="the forest" lede={JOURNAL_PAGE.heroSubtitle} ground="teal" />
      <section className="jb-sec jb-ink" style={{ paddingTop: 70 }}>
        <div className="jb-wrap">
          <FeaturedPost post={latest} />
          <div className="jb-postgrid">
            {rest.map((post, i) => (
              <PostCard key={post.id} post={post} wide={i === 0 && rest.length % 3 === 1} />
            ))}
          </div>
        </div>
      </section>
      <WitchyQuote />
      <Newsletter />
      <Footer />
    </main>
  );
}
