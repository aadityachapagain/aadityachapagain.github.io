import type { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Comment from '../../components/comment'
import Container from '../../components/container'
import distanceToNow from '../../lib/dateRelative'
import { getAllPosts, getPostBySlug } from '../../lib/getPost'
import Head from 'next/head'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeMathJaxSvg from 'rehype-mathjax'
import rehypeHighlight from 'rehype-highlight'
import remarkToc from 'remark-toc'
import remarkMdx from 'remark-mdx'


export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Container>
      <Head>
        <title>{post.title} | My awesome blog</title>
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
                {distanceToNow(new Date(post.date))}
              </time>
            </header>

            {/* <div
              className="prose mt-10 "
              dangerouslySetInnerHTML={{ __html: post.content }}
            >
            </div> */}
            <ReactMarkdown
              remarkPlugins={[remarkMath, remarkGfm, remarkRehype, remarkToc, remarkMdx]}
              rehypePlugins={[rehypeMathJaxSvg, rehypeHighlight, ]}
            >
              {post.content??""}
            </ReactMarkdown>
          </article>

          <Comment />
        </div>
      )}
    </Container>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'tags',
    'slug',
    'title',
    'excerpt',
    'date',
    'content',
  ])
  // const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      }
    }),
    fallback: false,
  }
}
