import type { PostMeta } from "../../lib/api";
import PostHeader3 from "../post-header3"
import Link from 'next/link'

export default function HeroPost({ posts }: { posts: PostMeta[] }) {

  return (
    <ul >
      {posts.map((post) => (
        <li key={post.slug}>
          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28 hover:bg-yellow">
        
          <div >
          <PostHeader3
               
                
                coverImage={post.coverImage}
                
                
              />
        </div>
        </div>
        <div>
          <ul><li><h3 className="mb-4 text-4xl lg:text-6xl leading-tight"><ul>

         
          <li><Link as={`/topic/${post.topic}`} href="/topic/[topic]">
              <a className="hover:bg-yellow">{post.topic}</a></Link></li>
          <li><Link key={post.topic} href={`/topic/${post.topic}`}>
                {post.topic}
              </Link></li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          </ul> 
          </h3></li>
          </ul>
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