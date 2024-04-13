import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Comment from "../../components/comment";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts, getPostBySlug } from "../../lib/getPost";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";

export default function PostPage({
  post
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Head>
        <title>{post.title} | aaditya&apos;s blog</title>
        <meta
          name="description"
          content={`This post is about ${post.tags} .`}
        />
        <meta property="og:title" content="My Personal blog site." />
        <meta
          property="og:description"
          content={`This post is about ${post.tags} .`}
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

      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <div>
          <article>
            <header>
              <h1 className="text-4xl font-bold">{post.title}</h1>
              <div className="flex mt-4">
                <div className="flex flex-row ml-2 space-x-4 ">
                  <time className="flex text-gray-400">
                    {distanceToNow(new Date(post.date), true)}
                  </time>
                  <span className="text-gray-400">by</span>
                  <span className="text-indigo-400">{post.authors}</span>
                </div>
              </div>
              <div className="flex mt-4 overflow-x-auto">
                {post.tags
                  .trim()
                  .split(",")
                  .filter((val: string) => val.trim() !== "")
                  .map((val: string, idx: number) => {
                    return (
                      <span
                        key={idx}
                        className="mr-2 text-sm bg-gray-200 py-1 px-1.5 rounded-md"
                      >
                        {val}
                      </span>
                    );
                  })}
              </div>
              {/* horizontal line of faded color */}
              <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
              <div
                className="my-4 prose "
                dangerouslySetInnerHTML={{ __html: post.summary }}
              ></div>
            </header>

            <div
              className="prose mt-10 "
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </article>

          <Comment />
        </div>
      )}
    </Container>
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
