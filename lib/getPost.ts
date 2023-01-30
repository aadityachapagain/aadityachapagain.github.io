import type { Post } from "../interfaces";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export const postsHeader: string[] = [
  "title",
  "date",
  "modified",
  "category",
  "slug",
  "summary",
  "tags",
  "authors",
  "status"
];

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // make sure data is of type Post
  const items: Post = {
    slug: data["slug"] ?? realSlug,
    title: data["title"].trim(),
    date: data["date"].trim(),
    modified: data["modified"].trim() ?? "",
    category: data["category"].trim() ?? "",
    summary: data["summary"].trim() ?? "",
    tags: data["tags"] ?? "",
    authors:
      data["authors"]
        .trim()
        .split(",")
        .map(items => items.trim()) ?? "",
    status: data["status"].trim() ?? "",
    content: content ?? ""
  };

  return items;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
