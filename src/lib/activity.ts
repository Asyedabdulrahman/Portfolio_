import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ACTIVITY_DIR = path.join(process.cwd(), "content/activity");

export interface ActivityPost {
  slug: string;
  title: string;
  date: string;
  project: string;
  category: string;
  tags: string[];
  content: string;
}

export function getAllActivities(): ActivityPost[] {
  if (!fs.existsSync(ACTIVITY_DIR)) {
    return [];
  }

  const files = fs.readdirSync(ACTIVITY_DIR);

  const activities = files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(ACTIVITY_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug: file.replace(/\.mdx?$/, ""),
        title: data.title || "Untitled Activity",
        date: data.date || new Date().toISOString().split("T")[0],
        project: data.project || "General",
        category: data.category || "General",
        tags: data.tags || [],
        content,
      } as ActivityPost;
    });

  return activities.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
