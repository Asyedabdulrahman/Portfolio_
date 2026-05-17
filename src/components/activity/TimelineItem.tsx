import { Card } from "@/components/Card";
import { TagBadge } from "@/components/blog/TagBadge";
import { ActivityPost } from "@/lib/activity";
import { ActivityMDXRenderer } from "./ActivityMDXRenderer";
import { TimelineItemWrapper } from "./TimelineItemWrapper";

interface TimelineItemProps {
  post: ActivityPost;
  index: number;
}

export const TimelineItem = ({ post, index }: TimelineItemProps) => {
  // Format readable date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <TimelineItemWrapper index={index}>
      {/* Date Column (Desktop Only) */}
      <div className="hidden md:flex md:w-40 flex-shrink-0 text-right flex-col pt-8">
        <span className="text-sm font-mono text-white/40 tracking-wider">
          {formattedDate}
        </span>
        <span className="text-xs text-emerald-300/60 font-semibold mt-1">
          {post.category}
        </span>
      </div>

      {/* Timeline Node & Line Track */}
      <div className="flex flex-col items-center relative w-8 flex-shrink-0">
        {/* Track Line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/10 group-last:bottom-[calc(100%-2rem)]"></div>
        {/* Glowing Node Dot */}
        <div className="absolute top-8 w-4 h-4 rounded-full bg-gray-900 border-2 border-emerald-300/40 flex items-center justify-center z-10 shadow-[0_0_12px_rgba(110,231,183,0.4)] group-hover:scale-125 transition-transform duration-300">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
        </div>
      </div>

      {/* Activity Content Card */}
      <div className="flex-grow pb-12">
        <Card className="p-6 md:p-8 hover:border-white/20 transition-all duration-300">
          {/* Card Header Info */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {/* Mobile-only Date */}
            <span className="md:hidden text-xs font-mono text-white/40">
              {formattedDate}
            </span>
            <span className="md:hidden text-white/20">•</span>

            {/* Project Indicator Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-300/5 text-emerald-300 border border-emerald-300/10">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              {post.project}
            </span>

            {/* Category badge for mobile */}
            <span className="md:hidden">
              <TagBadge tag={post.category} className="bg-white/5 text-white/70 border-white/10" />
            </span>
          </div>

          {/* Activity Title */}
          <h3 className="font-serif text-2xl md:text-3xl mb-6 text-white group-hover:text-emerald-300 transition-colors duration-300">
            {post.title}
          </h3>

          {/* Fully-Rendered MDX Content */}
          <div className="mb-8 border-t border-white/5 pt-6">
            <ActivityMDXRenderer source={post.content} />
          </div>

          {/* Activity Tags Footer */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {post.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          )}
        </Card>
      </div>
    </TimelineItemWrapper>
  );
};
