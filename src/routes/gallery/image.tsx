import { LinkBox, LinkOverlay, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function GalleryImage({ src, id }: { src: string; id: string }) {
  return (
    <LinkBox>
      <LinkOverlay as={Link} to={`/gallery/${id}`}>
        <Image src={src} />
      </LinkOverlay>
    </LinkBox>
  )
}
