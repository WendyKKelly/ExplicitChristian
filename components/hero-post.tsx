import type { PostMeta } from "../lib/api";
import PostHeader from "./post-header"
import Link from 'next/link'

export default function HeroPost({ posts }: { posts: PostMeta[] }) {

  return (
    <ul >
      {posts.map((post) => (
        <li key={post.slug}>
          <div className="">
          <div  >
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <PostHeader
                title={post.title}
                topic={post.topic}
                coverImage={post.coverImage}
                date={post.date}
                
              />
        </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
        
          
            
              <Link key={post.topic} href={`/topic/${post.topic}`}>
                {post.topic}
              </Link>
            
          </h3>
          </div>
          <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
          </div>
        </li>
      ))}
    </ul>
    
  );
}