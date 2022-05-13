import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'

import Header from '../../components/header'
import PostHeader2 from '../../components/post-header2'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'

import Head from 'next/head'

//import markdownToHtml from '../../lib/markdownToHtml'

export default function Category({ posts, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !category?.slug) {
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
                  {category.title} | Explicit Christian
                </title>
              
              </Head>
              <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            topic={post.topic}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
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
