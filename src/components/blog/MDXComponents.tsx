import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Typography = {
  h1: ({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h1 className={twMerge("font-serif text-4xl md:text-5xl mt-12 mb-6 text-white", className)} {...props} />
  ),
  h2: ({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h2 className={twMerge("font-serif text-3xl md:text-4xl mt-10 mb-5 text-white/90", className)} {...props} />
  ),
  h3: ({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h3 className={twMerge("font-serif text-2xl md:text-3xl mt-8 mb-4 text-white/80", className)} {...props} />
  ),
  p: ({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => (
    <p className={twMerge("text-base md:text-lg text-white/60 leading-relaxed mb-6", className)} {...props} />
  ),
  ul: ({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>) => (
    <ul className={twMerge("list-disc list-inside mb-6 space-y-2 text-white/60", className)} {...props} />
  ),
  ol: ({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLOListElement>, HTMLOListElement>) => (
    <ol className={twMerge("list-decimal list-inside mb-6 space-y-2 text-white/60", className)} {...props} />
  ),
  li: ({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>) => (
    <li className={twMerge("text-base md:text-lg", className)} {...props} />
  ),
  strong: ({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
    <strong className={twMerge("text-emerald-300 font-semibold", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>) => (
    <blockquote className={twMerge("border-l-4 border-emerald-300/30 pl-6 my-8 italic text-white/70 bg-emerald-300/5 py-4 rounded-r-lg", className)} {...props} />
  ),
  code: ({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
    const isInline = !className || !className.includes("hljs");
    return (
      <code
        className={twMerge(
          isInline 
            ? "bg-white/10 px-1.5 py-0.5 rounded text-emerald-300 text-sm font-mono"
            : "text-sm font-mono bg-transparent", 
          className
        )}
        {...props}
      />
    );
  },
  pre: ({ className, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => (
    <pre className={twMerge("p-6 rounded-2xl bg-gray-900/50 border border-white/10 overflow-x-auto mb-8 font-mono text-sm leading-relaxed hljs", className)} {...props} />
  ),
};

export const MDXComponents = {
  ...Typography,
};
