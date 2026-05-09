import Link from "next/link";
import { Card } from "@/components/Card";
import { TagBadge } from "./TagBadge";
import { BlogPost } from "@/lib/blog";

interface PostCardProps {
  post: BlogPost;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="p-8 hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full group">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-white/40">{post.date}</span>
          <span className="text-white/20">•</span>
          <TagBadge tag={post.category} className="bg-white/5 text-white/70 border-white/10" />
        </div>
        
        <h3 className="font-serif text-2xl mb-3 group-hover:text-emerald-300 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-sm text-white/60 mb-6 flex-grow">
          {post.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {post.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      </Card>
    </Link>
  );
};
