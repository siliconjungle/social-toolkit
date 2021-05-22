import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

// Currently this is defaulting to the image size that Facebook uses for featured links.
// For a comprehensive list of image sizes for different social media sites
// Check here: https://sproutsocial.com/insights/social-media-image-sizes-guide/
const FeaturedImage = ({ src, alt }) => {
  return (
    <Image
      loader={myLoader}
      src={src}
      alt={alt}
      width={1200}
      height={630}
      layout="intrinsic"
    />
  )
}

export default FeaturedImage
