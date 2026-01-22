import Image from "next/image";
import { SectionHeader } from "../ui";
import FeaturedPost from "./FeaturedPost";
import BlogPostCard from "./BlogPostCard";
import {
  FEATURED_POST,
  RECENT_POSTS,
  JOURNAL_SECTION,
  type BlogPost,
} from "../../constants/BlogPosts";
import { IMAGES } from "../../constants/Images";

interface JournalSectionProps {
  featuredPost?: BlogPost;
  recentPosts?: BlogPost[];
}

/**
 * Journal/Blog section component
 * Features a main article with image and sidebar of recent posts
 * Accepts optional props for CMS integration
 */
export default function JournalSection({
  featuredPost = FEATURED_POST,
  recentPosts = RECENT_POSTS,
}: JournalSectionProps) {
  // Update featured post image with blog placeholder
  const enhancedFeaturedPost = {
    ...featuredPost,
    featuredImage: IMAGES.blogPlaceholder,
  };

  return (
    <section className="relative bg-ivy-dark py-20 md:py-32 overflow-hidden">
      {/* Decorative Leaf - Left side (leaf3) - 336x504 */}
      <div
        className="absolute left-[-35px] md:left-[-70px] top-[80px] md:top-[120px] w-[168px] md:w-[336px] h-[252px] md:h-[504px] pointer-events-none z-10"
      >
        <Image
          src={IMAGES.leaf3}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Decorative Leaf - Right side (leaf4) - 220x330 */}
      <div className="absolute right-[-20px] md:right-[-40px] bottom-[40px] md:bottom-[60px] w-[110px] md:w-[220px] h-[165px] md:h-[330px] pointer-events-none z-10">
        <Image
          src={IMAGES.leaf4}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionHeader title={JOURNAL_SECTION.title} className="mb-16" />

        {/* Divider Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-ivy-gold/50 to-transparent mb-12" />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">
          {/* Featured Post */}
          <FeaturedPost post={enhancedFeaturedPost} />

          {/* Recent Posts Sidebar */}
          <aside className="flex flex-col gap-[30px]">
            {recentPosts.map((post, index) => (
              <BlogPostCard
                key={post.id}
                post={post}
                showDivider={index < recentPosts.length - 1}
              />
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
