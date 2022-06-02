

import CoverImage from '../components/cover-image'



export default function PostHeader3({ coverImage, }) {
  return (
    <>
      
     
      <div className="hidden md:block md:mb-12">
        
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage  src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
         
        </div>
     
      </div>
    </>
  )
}