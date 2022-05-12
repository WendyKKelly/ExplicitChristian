import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostCategory from '../../components/post-category'
import Header from '../../components/header'

import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'

import Head from 'next/head'

//import markdownToHtml from '../../lib/markdownToHtml'

export default function Category({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Explicit Christian
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostCategory
                
                topic={post.topic}
                
               
              />
              
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
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
  //const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        //content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
