import Link from "next/link";
import type { BlogPost } from "../../constants/BlogPosts";
import { formatDate } from "../../constants/BlogPosts";

interface BlogPostCardProps {
  post: BlogPost;
  showDivider?: boolean;
}

/**
 * Compact blog post card for sidebar listing
 * Shows title, excerpt, category, and time
 */
export default function BlogPostCard({ post, showDivider = true }: BlogPostCardProps) {
  return (
    <article className="flex flex-col gap-[20px]">
      <Link href={`/blog/${post.slug}`} className="group">
        <div className="flex flex-col gap-3">
          <h3 className="font-lora font-medium text-xl text-ivy-cream group-hover:text-ivy-gold transition-colors duration-300 leading-tight">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="font-lora text-base text-ivy-cream/80 leading-relaxed line-clamp-1">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center justify-between font-montserrat font-medium text-sm">
            <span className="text-ivy-gold uppercase tracking-wide">
              {post.category}
            </span>
            <span className="text-ivy-gray">
              {formatDate(post.publishedAt)}
            </span>
          </div>
        </div>
      </Link>

      {showDivider && (
        <div className="h-px w-full bg-gradient-to-r from-ivy-gold/50 via-ivy-gold/30 to-transparent" />
      )}
    </article>
  );
}
