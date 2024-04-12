import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts } from "../../lib/getPost";
import markdownToHtml from "../../lib/markdownToHtml";

export default function NotePage({
  allPosts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      {allPosts.length ? (
        allPosts.map(post => (
          <article key={post.slug} className="mb-10">
            <Link
              as={`/posts/${post.slug}`}
              href="/posts/[slug]"
              className="text-lg leading-6 font-bold"
            >
              {post.title}
            </Link>
            <p
              className="mt-2 italic prose text-gray-500"
              dangerouslySetInnerHTML={{ __html: post.summary }}
            ></p>
            <div className="text-gray-400n mt-1.5">
              <time>{distanceToNow(new Date(post.date), true)}</time>
            </div>
          </article>
        ))
      ) : (
        <p>No blog posted yet :/</p>
      )}
    </Container>
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

  return {
    props: { allPosts }
  };
}
