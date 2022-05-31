
import type { GetStaticProps, GetStaticPaths } from "next";


import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostFromSlug, PostMeta, getSlugs } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'

import markdownToHtml from '../../lib/markdownToHtml'
interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}
export default function Post({ post }: { post: MDXPost }){
  
  return (
    <Layout >
      <Container>
        <Header />
        
         
        
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.meta.title} | Explicit Christian
                </title>
                
              </Head>
              <PostHeader
                title={post.meta.title}
               
                coverImage={post.meta.coverImage}
                date={post.meta.date}
                
              />
              <MDXRemote {...post.source}  />
            </article>
          </>
        
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const {content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

