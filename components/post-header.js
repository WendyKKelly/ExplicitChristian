
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import PostCategory from '../components/post-category'

export default function PostHeader({ title, topic, coverImage, date}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <PostCategory>{topic}</PostCategory>
      <div className="hidden md:block md:mb-12">
        
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
         
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
