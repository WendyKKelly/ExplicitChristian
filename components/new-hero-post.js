return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
        <PostHeader
                title={post.title}
                topic={post.topic}
                coverImage={post.coverImage}
                date={post.date}
                
              />
        </div>
        <div>
          <ul><li><h3 className="mb-4 text-4xl lg:text-6xl leading-tight"><ul>

         
          <li><Link as={`/topic/${topic}`} href="/topic/[topic]">
              <a className="hover:bg-yellow">{topic}</a></Link></li>
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
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:bg-yellow">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
           
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        
        </div>
      </div>
    </section>
  )
}


 <Link href={`/posts/${post.slug}`}><a className="hover:bg-yellow">{post.title}</a></Link>

 
        