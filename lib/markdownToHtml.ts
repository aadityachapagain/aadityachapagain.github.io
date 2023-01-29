import type { VFileCompatible } from 'vfile'
import { unified } from 'unified'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import rehypeMathJaxSvg from 'rehype-mathjax'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

export default async function markdownToHtml(markdown: VFileCompatible) {
  const result = await unified()
                  .use(remarkParse)
                  .use(remarkGfm)
                  .use(remarkMath)
                  .use(remarkToc)
                  .use(remarkRehype)
                  .use(rehypeMathJaxSvg)
                  .use(rehypeHighlight)
                  .use(rehypeStringify)
                  .process(markdown)

  return String(result)
}
