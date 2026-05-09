import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/blog/MDXComponents";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { TagBadge } from "@/components/blog/TagBadge";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Syed's Blog`,
    description: post.description,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
      />
      <style dangerouslySetInnerHTML={{
        __html: `
        .hljs { background: transparent !important; padding: 6px !important; }
        pre code.hljs { background: transparent !important; }
      `}} />
      <Header />

      <main className="flex-grow pt-28 pb-20">
        <article className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-white/40 text-sm font-medium">{post.date}</span>
              <span className="text-white/20">•</span>
              <TagBadge tag={post.category} className="bg-white/5 text-emerald-300 border-white/10" />
            </div>

            <h1 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>

            <div className="prose prose-invert max-w-none">
              <MDXRemote
                source={post.content}
                components={MDXComponents}
                options={{
                  mdxOptions: {
                    rehypePlugins: [rehypeHighlight, rehypeSlug],
                  }
                }}
              />
            </div>

            {/* <div className="mt-20 pt-10 border-t border-white/5">
              <div className="bg-gray-800/30 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                <h4 className="font-serif text-xl mb-4 text-emerald-300">Engineering Standard</h4>
                <p className="text-white/60 text-sm italic">
                  This article reflects SWE III level engineering standards. For deep dives into architectural patterns,
                  refer to the "Reading List" section in the main portfolio.
                </p>
              </div>
            </div> */}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
