import React from "react";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { BlogPost } from "./types";

interface BlogsSectionProps {
  blogPosts: BlogPost[];
}

const Blogs: React.FC<BlogsSectionProps> = ({ blogPosts }) => {
  return (
    <section id="blogs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-purple-400 mb-2">
            MY INSIGHTS & THOUGHTS
          </h2>
          <h3 className="text-5xl font-bold">Blogs.</h3>
        </div>

        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400">
            <p>No blog posts available yet.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href="/posts"
            className="inline-block bg-purple-900/30 hover:bg-purple-800 text-white py-3 px-6 rounded-lg transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
