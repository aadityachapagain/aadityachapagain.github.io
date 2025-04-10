export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  tags: string[];
  coverImage: string;
  content?: string;
}
