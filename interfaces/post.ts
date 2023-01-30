export enum PostStatus {
  Draft = "draft",
  UnPublished = "unpublished",
  Published = "published"
}

export interface Post {
  slug: string;
  title: string;
  date: Date;
  modified: Date;
  category: Date;
  summary: string;
  tags: string[];
  authors: string[];
  status: PostStatus;
  content?: string;
}
