import Container from '../components/container'
import Articles from '../components/articles'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts, PostMeta } from '../lib/api'
import Head from 'next/head'
import Subscribe from '../components/Subscribe';



export default function Home({ posts }: { posts: PostMeta[] }) {
  
  return (
    <>
      <Layout>
        <Head>
          <title>Explicit Christian</title>
        </Head>
        <Container>
          <Intro />
          
          <Articles posts={posts} />
          <Subscribe />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}