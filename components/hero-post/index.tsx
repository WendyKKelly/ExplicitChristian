import type { PostMeta } from "../../lib/api";
import PostHeader3 from "../post-header3";
import Link from "next/link";

export default function HeroPost({ posts }: { posts: PostMeta[] }) {
  return (
    <section>
      {posts.map((post) => (
        <ul>
          <li key={post.slug}>
            <div className="md:grid md:grid-cols-2  text-center md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
              <div>
                <PostHeader3 coverImage={post.coverImage} />
              </div>
              <div className="" >
                <ul>
                  <h3 className=" text-4xl lg:text-6xl leading-relaxed">
                    <li className="" >
                      <Link key={post.topic} href={`/topic/${post.topic}`}>
                        <a className="hover:bg-yellow">{post.topic}</a>
                      </Link>
                    </li>
                    <li>
                      <Link key={post.topic} href={`/topic/toxicity`}>
                        <a className="hover:bg-yellow">ramblings</a>
                      </Link>
                    </li>
                    <li>
                      <Link key={post.topic} href={`/topic/toxicity`}>
                        <a className="hover:bg-yellow">greek or jesus</a>
                      </Link>
                    </li>
                    <li>
                      <Link key={post.topic} href={`/topic/toxicity`}>
                        <a className="hover:bg-yellow">who knows?</a>
                      </Link>
                    </li>
                  </h3>
                </ul>
              </div>
              <div>
                <h3 className="md:text-4xl lg:text-6xl leading-tight ">
                  <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                    <a className="hover:bg-yellow">{post.title}</a>
                  </Link>
                </h3>
              </div>
              <div>
                <p className="hover:bg-yellow">{post.excerpt}</p>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </section>
  );
}
