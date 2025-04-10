import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../../lib/getPost";
import distanceToNow from "../../lib/dateRelative";
import markdownToHtml from "../../lib/markdownToHtml";
import Comment from "../../components/comment";

export default function PostPage({
  post
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="bg-[#070717] text-white min-h-screen w-full">
      <Head>
        <title>
          {post.title} | {"Aaditya's Blog"}
        </title>
        <meta name="description" content={`This post is about ${post.tags}.`} />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={`This post is about ${post.tags}.`}
        />
        <meta
          property="og:url"
          content={`https://aadityachapagain.com/${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        {post.tags
          .trim()
          .split(",")
          .map((val: string, idx: number) => {
            return <meta key={idx} name="keywords" content={val} />;
          })}
      </Head>

      <div className="pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8">
        {router.isFallback ? (
          <div className="flex justify-center items-center py-20">
            <div className="fancy-spinner">
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <div className="mb-8">
              <Link
                href="/posts"
                className="inline-flex items-center text-purple-400 hover:text-white transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to all posts
              </Link>
            </div>

            <article className="bg-[#1a1a35] p-8 rounded-lg shadow-md border border-purple-900/30">
              <header>
                <h1 className="text-4xl font-bold">{post.title}</h1>

                <div className="flex mt-4 items-center">
                  <div className="flex items-center space-x-4">
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
                </div>

                {post.tags && (
                  <div className="flex flex-wrap mt-4">
                    {post.tags
                      .trim()
                      .split(",")
                      .filter((val: string) => val.trim() !== "")
                      .map((val: string, idx: number) => (
                        <span
                          key={idx}
                          className="mr-2 mb-2 text-xs bg-purple-900/50 text-purple-300 py-1 px-2 rounded-md"
                        >
                          {val.trim()}
                        </span>
                      ))}
                  </div>
                )}

                <div className="w-full h-0.5 bg-purple-900/50 my-6"></div>

                {post.summary && (
                  <div
                    className="my-6 text-gray-300 text-lg italic"
                    dangerouslySetInnerHTML={{ __html: post.summary }}
                  ></div>
                )}
              </header>

              <div
                className="prose prose-invert prose-purple prose-lg max-w-none text-gray-200 mt-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </article>

            <div className="mt-12 bg-[#1a1a35] p-8 rounded-lg shadow-md border border-purple-900/30">
              <Comment />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");
  const summary = await markdownToHtml(post.summary || "");

  return {
    props: {
      post: {
        ...post,
        content: content,
        summary: summary
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          slug
        }
      };
    }),
    fallback: false
  };
}
