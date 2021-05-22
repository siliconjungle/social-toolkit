import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}


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
