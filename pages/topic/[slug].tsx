import type { GetStaticProps, GetStaticPaths } from "next";
import { getAllPosts, PostMeta } from '../../lib/api'
import Head from "next/head";
import Articles from '../../components/articles';

export default function TopicPage({
  slug,
  posts,
}: {
  slug: string;
  posts: PostMeta[];
}) {
  return (
    <>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <h1>Tag: {slug}</h1>
     
      <Articles posts={posts} />
      
    </>
  );
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter((post) => post.meta.topic.includes(slug));

  return {
    props: {
      slug,
      posts: posts.map((post) => post.meta),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const topic = new Set(posts.map((post) => post.meta.topic).flat());
  const paths = Array.from(topic).map((topic) => ({ params: { slug: topic } }));

  return {
    paths,
    fallback: false,
  };
};