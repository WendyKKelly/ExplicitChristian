import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

async function collateTopics() {
  const files = fs.readdirSync(path.join(root, 'data', dataType))
  let allTopics = new Set<string> // to ensure only unique tags are added

  files.map((postSlug) => {
    const source = fs.readFileSync(path.join(root, 'data', dataType, postSlug), 'utf8')
    const { data } = matter(source)

    data.topics.forEach((topic) => allTopic.add(topic))
  })

  return Array.from(allTopics)
}

export async function getTopic() {
  const topics: TopicOptions = {
    blog: await collateTopics('blog'),
		// books: await collateTags('books'),
  }
  return topics
}