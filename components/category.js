import CategoryPreview from '../components/category-preview'

export default function Category({ posts }) {
    return (
    <section>
     
      <div className="grid grid-cols-1 md:grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <CategoryPreview
            key={post.slug}
            
            topic={post.topic}
           
            slug={post.slug}
           
          />
        ))}
      </div>
    </section>
  )
}
//
