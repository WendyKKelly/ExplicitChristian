import Link from "next/link";
import type { PostMeta } from "../lib/api";


export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul >
      {posts.map((post) => (
        <li key={post.slug}>
          <div >
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </div>
          <p>{post.excerpt}</p>
          <p >
            {post.topic.map((topic) => (
              <Link key={topic} href={`/topic/${topic}`}>
                {topic}
              </Link>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
}