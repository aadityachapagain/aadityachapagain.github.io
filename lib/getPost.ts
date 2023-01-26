import type { Post } from '../interfaces'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export const postsHeader: string[] = [
  'title',
  'date',
  'modified',
  'category',
  'slug',
  'summary',
  'tags', 
  'author',
  'status'
]

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // make sure data is of type Post
  const items: Post = {
    slug: data['slug']??realSlug,
    title: data['title'],
    date: data['date'],
    modified: data['modified']??"",
    category: data['category']??"",
    summary: data['summary']??"",
    tags: data['tags']??"",
    author: data['author']??"",
    status: data['status']??"",
    content: content??""
  }

  return items

}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
