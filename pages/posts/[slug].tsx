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
              {post.summary ? (
                <p className="mt-2 text-xl">{post.summary}</p>
              ) : null}
              <time className="flex mt-2 text-gray-400">
                {distanceToNow(new Date(post.date), true)}
              </time>
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

  return {
    props: {
      post: {
        ...post,
        content: content
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
