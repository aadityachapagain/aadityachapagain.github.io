import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { getAllPosts } from "../../lib/getPost";
import markdownToHtml from "../../lib/markdownToHtml";
import distanceToNow from "../../lib/dateRelative";
import Head from "next/head";

export default function BlogListPage({
  allPosts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="bg-[#070717] text-white min-h-screen w-full">
      <Head>
        <title>Blog | Aaditya Chapagain</title>
        <meta
          name="description"
          content="Blog posts by Aaditya Chapagain on machine learning, web development, and technology"
        />
      </Head>
      
      <div className="pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-purple-400 mb-2">MY WRITINGS</h2>
          <h1 className="text-5xl font-bold">Blog Posts</h1>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {allPosts.length ? (
            <div className="grid gap-10">
              {allPosts.map(post => (
                <article 
                  key={post.slug} 
                  className="bg-[#1a1a35] p-6 rounded-lg shadow-md border border-purple-900/30 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/20"
                >
                  <Link
                    href={`/posts/${post.slug}`}
                    className="text-2xl font-bold hover:text-purple-400 transition duration-300"
                  >
                    {post.title}
                  </Link>
                  
                  <div className="flex items-center mt-3 text-sm space-x-4">
                    <time className="text-purple-300">
                      {distanceToNow(new Date(post.date), true)}
                    </time>
                    {post.authors && (
                      <>
                        <span className="text-gray-400">by</span>
                        <span className="text-purple-400">{post.authors}</span>
                      </>
                    )}
                  </div>
                  
                  {post.tags && (
                    <div className="flex flex-wrap mt-3">
                      {post.tags.split(',')
                        .filter(tag => tag.trim() !== "")
                        .map((tag, idx) => (
                          <span
                            key={idx}
                            className="mr-2 mb-2 text-xs bg-purple-900/50 text-purple-300 py-1 px-2 rounded-md"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                    </div>
                  )}
                  
                  <div
                    className="mt-4 text-gray-300 prose prose-invert prose-purple max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.summary }}
                  ></div>
                  
                  <div className="mt-4">
                    <Link
                      href={`/posts/${post.slug}`}
                      className="inline-block text-purple-400 hover:text-white transition duration-300 border border-purple-500 hover:bg-purple-500 rounded px-4 py-2 text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No blog posts published yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await Promise.all(
    getAllPosts().map(async post => {
      return {
        ...post,
        summary: await markdownToHtml(post.summary)
      };
    })
  );

  // Sort by date (newest first)
  allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    props: { allPosts }
  };
}