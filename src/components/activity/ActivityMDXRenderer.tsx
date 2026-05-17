import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/blog/MDXComponents";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

interface ActivityMDXRendererProps {
  source: string;
}

export const ActivityMDXRenderer = ({ source }: ActivityMDXRendererProps) => {
  return (
    <div className="prose prose-invert max-w-none text-white/70">
      <MDXRemote
        source={source}
        components={MDXComponents}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypeHighlight, rehypeSlug],
          },
        }}
      />
    </div>
  );
};
