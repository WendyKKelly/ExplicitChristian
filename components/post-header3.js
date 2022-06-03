

import CoverImage from '../components/cover-image'



export default function PostHeader3({ coverImage, }) {
  return (
    <>
      
     
      
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage  src={coverImage} height={620} width={1240} />
      </div>
    
    </>
  )
}
