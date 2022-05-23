
import { getPostData, getAllPostTopics } from '../../lib/api'
import Layout from '../../components/layout';

export default function Topic() {
  return <Layout>{postData.title}
  <br />
  {postData.topic}
  <br />
  {postData.date}</Layout>;
}

export async function getStaticProps({ params }) {
  const topic = getPostData(params.topic);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostTopics()

  return {
    paths,
        
    fallback: false,
  };
}

