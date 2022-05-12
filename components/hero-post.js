import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import MoreCategories from '../components/more-categories'
//import Category from '../components/category'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react';
import Category from '../pages/category/[slug]'
import postcss from 'postcss'



export default function HeroPost({
 posts,
  title,
  topic,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {

  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={278}
          width={556}
        />
        </div>
        <div>
          <ul><li><h3 className="mb-4 text-4xl lg:text-6xl leading-tight">{posts.map((post) =>
          <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a className="hover:bg-yellow"> 
          
          {post.topic}
          
        </a>
            </Link>
            )}
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
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  )
}
export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'topic',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}