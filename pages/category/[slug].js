import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'

import Header from '../../components/header'
import PostHeader2 from '../../components/post-header2'
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
              <PostHeader2
               
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
  const category = getPostBySlug(params.slug, [
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
      category: {
        ...post,
        //content,
      },
    },
  }
}

export async function getStaticPaths() {
  const category = getAllPosts(['slug'])

  return {
    paths: category.map((category) => {
      return {
        params: {
          slug: category.slug,
        },
      }
    }),
    fallback: false,
  }
}
