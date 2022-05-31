import Container from '../components/container'
import Articles from '../components/articles'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Subscribe from '../components/Subscribe';



export default function Index({ allPosts }) {
  
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
  const allPosts = getAllPosts([
    'title',
    'topic',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
