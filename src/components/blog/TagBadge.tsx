import { twMerge } from "tailwind-merge";

interface TagBadgeProps {
  tag: string;
  className?: string;
}

export const TagBadge = ({ tag, className }: TagBadgeProps) => {
  return (
    <span
      className={twMerge(
        "px-3 py-1 text-xs font-medium rounded-full bg-emerald-300/10 text-emerald-300 border border-emerald-300/20",
        className
      )}
    >
      {tag}
    </span>
  );
};
