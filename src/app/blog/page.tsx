import { getAllPosts } from "@/lib/blog";
import { PostCard } from "@/components/blog/PostCard";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const metadata = {
  title: "Blog | Syed's Portfolio",
  description: "Insights on System Design, Frontend Engineering, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header />

      <main className="flex-grow pt-28 pb-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mb-16">
            <h1 className="font-serif text-5xl md:text-6xl mb-6">
              Engineering <span className="text-emerald-300">Insights</span>
            </h1>
            <p className="text-lg text-white/60">
              A collection of technical articles, architectural deep dives, and engineering standards.
              Focused on System Design, Performance, and Scalable Backend Systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20 bg-gray-800/50 rounded-3xl border border-white/5">
              <p className="text-white/40 italic">No posts found yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
