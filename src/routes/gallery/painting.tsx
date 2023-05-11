import { GalleryImage } from './image'

import src from '../../assets/red-blue-painting.jpeg'
import { Center } from '@chakra-ui/react'

export function Thumbnail() {
  return <GalleryImage src={src} id='painting' />
}

export default function Painting() {
  return <Center>Painting</Center>
}
Painting.Page = Painting
Painting.Thumbnail = Thumbnail
