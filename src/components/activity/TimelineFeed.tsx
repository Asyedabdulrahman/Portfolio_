import { TimelineItem } from "./TimelineItem";
import { ActivityPost } from "@/lib/activity";

interface TimelineFeedProps {
  posts: ActivityPost[];
}

export const TimelineFeed = ({ posts }: TimelineFeedProps) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-800/20 rounded-3xl border border-white/5 backdrop-blur-sm">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-white/5 rounded-full border border-white/10 text-white/40">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>
        <h4 className="text-lg font-serif text-white/80 mb-2">No activity logs found</h4>
        <p className="text-white/40 max-w-md mx-auto text-sm">
          No daily journal entries matched your current search filters. Try typing a different term or clearing your project/category filters.
        </p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col pl-2 md:pl-0">
      {posts.map((post, idx) => (
        <TimelineItem key={post.slug} post={post} index={idx} />
      ))}
    </div>
  );
};
