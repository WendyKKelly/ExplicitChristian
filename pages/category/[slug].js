import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'

import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'

import markdownToHtml from '../../lib/markdownToHtml'

export default function Category({ posts }) {
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
              <PostHeader
                
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

    'slug',
   
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post
       
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
