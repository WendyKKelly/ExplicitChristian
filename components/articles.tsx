import Link from "next/link";
import type { PostMeta } from "../lib/api";
import PostHeader from "./post-header"


export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul >
      {posts.map((post) => (
        <li key={post.slug}>
          <div >
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </div>
          <div className="mb-5">
          <PostHeader
                title={post.title}
                topic={post.topic}
                coverImage={post.coverImage}
                date={post.date}
                
              />
        </div>
          <p>{post.excerpt}</p>
          <p >
            
              <Link key={post.topic} href={`/topic/${post.topic}`}>
                {post.topic}
              </Link>
            
          </p>
        </li>
      ))}
    </ul>
  );
}