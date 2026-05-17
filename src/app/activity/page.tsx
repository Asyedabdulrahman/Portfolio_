import { getAllActivities } from "@/lib/activity";
import { FilterControls } from "@/components/activity/FilterControls";
import { TimelineFeed } from "@/components/activity/TimelineFeed";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const metadata = {
  title: "Activity Journal | Syed's Portfolio",
  description: "A day-to-day log of my engineering journey, current projects, and technical milestones.",
};

interface ActivityPageProps {
  searchParams: {
    search?: string;
    project?: string;
    category?: string;
  };
}

export default function ActivityPage({ searchParams }: ActivityPageProps) {
  const allActivities = getAllActivities();

  // Extract unique projects and categories
  const uniqueProjects = Array.from(
    new Set(allActivities.map((act) => act.project).filter(Boolean))
  );
  const uniqueCategories = Array.from(
    new Set(allActivities.map((act) => act.category).filter(Boolean))
  );

  const currentSearch = searchParams.search || "";
  const currentProject = searchParams.project || "ALL";
  const currentCategory = searchParams.category || "ALL";

  // Filter posts
  const filteredActivities = allActivities.filter((act) => {
    // Project filter
    if (currentProject !== "ALL" && act.project !== currentProject) {
      return false;
    }
    // Category filter
    if (currentCategory !== "ALL" && act.category !== currentCategory) {
      return false;
    }
    // Search filter (title, description/content, tags)
    if (currentSearch) {
      const query = currentSearch.toLowerCase();
      const matchTitle = act.title.toLowerCase().includes(query);
      const matchProject = act.project.toLowerCase().includes(query);
      const matchCategory = act.category.toLowerCase().includes(query);
      const matchContent = act.content.toLowerCase().includes(query);
      const matchTags = act.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchTitle || matchProject || matchCategory || matchContent || matchTags;
    }
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Import Atom One Dark theme for syntax highlighting of logs */}
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

      <main className="flex-grow pt-36 pb-20">
        <div className="w-[1300px] mx-auto px-4 md:px-8">
          {/* Page Hero Section */}
          <div className="max-w-2xl mb-16">
            <h1 className="font-serif text-5xl md:text-6xl mb-6">
              Activity <span className="text-emerald-300">Journal</span>
            </h1>
            <p className="text-lg text-white/60">
              A day-to-day log documenting my software engineering journey, current builds, learning milestones, and technical breakthroughs.
            </p>
          </div>

          {/* Interactive Search & Filter Panel */}
          <FilterControls
            projects={uniqueProjects}
            categories={uniqueCategories}
            currentSearch={currentSearch}
            currentProject={currentProject}
            currentCategory={currentCategory}
          />

          {/* Vertical Timeline Feed */}
          <TimelineFeed posts={filteredActivities} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
