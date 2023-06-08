import { GalleryImage } from './image'

import src from '../../assets/red-blue-painting.jpeg'
import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Thumbnail(props: Omit<GalleryImage, 'id' | 'src'>) {
  return <GalleryImage src={src} id='acrylic' caption='Acrylic' {...props} />
}

export default function Acrylic() {
  return (
    <Box>
      <LinkBox as={Flex} align='center' ml='5%' color='gray.400'>
        <Icon as={FaAngleLeft} />
        <LinkOverlay as={Link} to='/gallery'>
          Back
        </LinkOverlay>
      </LinkBox>
      <Heading textAlign='center' pb={6}>
        Acrylic
      </Heading>
      <Center>
        <Image
          w='90%'
          src={src}
          alt='Red and orange swirls on left, light blue swirls on right, on a black canvas, with an unpainted diagonal between them'
        />
      </Center>
    </Box>
  )
}
Acrylic.Page = Acrylic
Acrylic.Thumbnail = Thumbnail
