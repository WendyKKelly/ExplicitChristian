
import Link from 'next/link'

export default function CategoryPreview({

  topic,

  slug,
}) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:bg-yellow">{topic}</a>
        </Link>
      </h3>
    </div>
  )
}
