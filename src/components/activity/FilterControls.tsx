"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTransition, useState, useEffect } from "react";

interface FilterControlsProps {
  projects: string[];
  categories: string[];
  currentSearch: string;
  currentProject: string;
  currentCategory: string;
}

export const FilterControls = ({
  projects,
  categories,
  currentSearch,
  currentProject,
  currentCategory,
}: FilterControlsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [searchVal, setSearchVal] = useState(currentSearch);

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      if (searchVal) {
        params.set("search", searchVal);
      } else {
        params.delete("search");
      }
      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
      });
    }, 300);

    return () => clearTimeout(handler);
  }, [searchVal, pathname, router]);

  const handlePillClick = (type: "project" | "category", value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (value === "ALL") {
      params.delete(type);
    } else {
      params.set(type, value);
    }
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className="flex flex-col gap-6 bg-gray-800/40 p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-md mb-12">
      {/* Search Bar */}
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-white/40"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="Search activity logs, code snippets, topics..."
          className="w-full pl-12 pr-4 py-3 bg-gray-900/60 text-white placeholder-white/40 border border-white/15 rounded-2xl focus:outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/10 transition-all font-sans text-sm md:text-base"
        />
        {isPending && (
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-emerald-300 border-t-transparent"></div>
          </div>
        )}
      </div>

      {/* Filter Sections */}
      <div className="flex flex-col gap-4">
        {/* Projects */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold tracking-wider text-white/40 uppercase">
            Filter by Project
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handlePillClick("project", "ALL")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition duration-300 ${
                currentProject === "ALL"
                  ? "bg-emerald-300/10 text-emerald-300 border-emerald-300/30"
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              All Projects
            </button>
            {projects.map((proj) => (
              <button
                key={proj}
                onClick={() => handlePillClick("project", proj)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition duration-300 ${
                  currentProject === proj
                    ? "bg-emerald-300/10 text-emerald-300 border-emerald-300/30"
                    : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {proj}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold tracking-wider text-white/40 uppercase">
            Filter by Category
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handlePillClick("category", "ALL")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition duration-300 ${
                currentCategory === "ALL"
                  ? "bg-emerald-300/10 text-emerald-300 border-emerald-300/30"
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handlePillClick("category", cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition duration-300 ${
                  currentCategory === cat
                    ? "bg-emerald-300/10 text-emerald-300 border-emerald-300/30"
                    : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
