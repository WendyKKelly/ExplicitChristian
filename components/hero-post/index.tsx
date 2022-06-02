import type { PostMeta } from "../../lib/api";
import PostHeader3 from "../post-header3"
import Link from 'next/link'

export default function HeroPost({ posts }: { posts: PostMeta[] }) {

  return (
    <section>
    <ul >
 {posts.map((post) => (
   <li key={post.slug}>
          <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28 hover:bg-yellow">
       
          <div >
          <PostHeader3
               
                
                coverImage={post.coverImage}
                
                
              />
        </div>
        
        <div>
          <ul><li><h3 className="lg:ml-20 md:ml-20 
          md:text-4xl lg:text-6xl leading-tight"><ul>
          <li><Link key={post.topic} href={`/topic/${post.topic}`}>
                {post.topic}
              </Link></li>
          <li><Link key={post.topic} href={`/topic/toxicity`}>
                Toxicity
              </Link></li>
          <li><Link key={post.topic} href={`/topic/toxicity`}>
                Toxicity
              </Link></li>
          <li><Link key={post.topic} href={`/topic/toxicity`}>
                Toxicity
              </Link></li>
          </ul> 
          </h3></li>
          </ul>
          </div>
          </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
          <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a className="hover:bg-yellow">{post.title}</a>
            </Link>
            
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
          </div>
          </div>
          <div>
          <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
          </div>
          </div>
       </li>
       ))}
     </ul>
   </section> 
  );
}