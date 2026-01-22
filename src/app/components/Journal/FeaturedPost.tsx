import Image from "next/image";
import Link from "next/link";
import { GoldButton } from "../ui";
import type { BlogPost } from "../../constants/BlogPosts";
import { JOURNAL_SECTION } from "../../constants/BlogPosts";

interface FeaturedPostProps {
  post: BlogPost;
}

/**
 * Featured blog post with large image
 * Used for the main article highlight
 */
export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article className="flex flex-col gap-[30px]">
      {/* Featured Image */}
      {post.featuredImage && (
        <Link href={`/blog/${post.slug}`} className="block relative aspect-[2/1] w-full overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </Link>
      )}

      {/* Post Content */}
      <div className="flex flex-col gap-[30px]">
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-lora font-medium text-2xl md:text-3xl text-ivy-cream hover:text-ivy-gold transition-colors duration-300">
            {post.title}
          </h3>
        </Link>

        <div className="flex flex-col gap-[10px]">
          <span className="font-montserrat font-medium text-base text-ivy-gold uppercase tracking-wide">
            {post.category}
          </span>

          {post.excerpt && (
            <p className="font-lora text-lg text-ivy-cream leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Button - NOT full width */}
        <div>
          <GoldButton as="a" href={`/blog/${post.slug}`}>
            {JOURNAL_SECTION.readArticleText}
          </GoldButton>
        </div>
      </div>
    </article>
  );
}
