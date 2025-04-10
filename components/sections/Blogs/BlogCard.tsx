import React from "react";
import Link from "next/link";
import { BlogPost } from "./types";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-[#1a1a35] rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-purple-500/20 border border-purple-900/30 h-full flex flex-col">
      {post.coverImage && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.coverImage}
            alt={`Cover image for ${post.title}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-3">
          <span className="text-xs text-gray-400">{post.date}</span>
          <span className="mx-2 text-gray-500">•</span>
          <span className="text-xs text-purple-400">{post.author}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
        <div
          className="text-gray-300 mb-4 line-clamp-3 prose prose-sm prose-invert"
          dangerouslySetInnerHTML={{ __html: post.summary }}
        />
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-md bg-purple-900/30 text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 pt-0">
        <Link
          href={`/posts/${post.slug}`}
          className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
