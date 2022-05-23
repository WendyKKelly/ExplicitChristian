
import { getPostBySlug, getAllPostTopics } from '../../lib/api'
import Layout from '../../components/layout';

export default function Topic() {
  return <Layout>...</Layout>;
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'topic',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostTopics()

  return {
    paths,
        
    fallback: false,
  };
}

