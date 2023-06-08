import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  VStack,
} from '@chakra-ui/react'
import { GalleryImage } from './image'

import george from 'assets/watercolor/george.jpeg'
import hut from 'assets/watercolor/hut.jpeg'
import merlin from 'assets/watercolor/merlin.jpeg'
import redHouses from 'assets/watercolor/red-houses.jpeg'
import rhalf from 'assets/watercolor/rhalf.jpeg'
import tentacles from 'assets/watercolor/tentacles.jpeg'
import { Link } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'

export function Thumbnail(props: Omit<GalleryImage, 'id' | 'src'>) {
  return (
    <GalleryImage src={hut} id='watercolor' caption='Watercolor' {...props} />
  )
}

export default function Watercolor() {
  return (
    <Box>
      <LinkBox as={Flex} align='center' ml='5%' color='gray.400'>
        <Icon as={FaAngleLeft} />
        <LinkOverlay as={Link} to='/gallery'>
          Back
        </LinkOverlay>
      </LinkBox>
      <Heading textAlign='center' pb={6}>
        Watercolor
      </Heading>
      <HStack align='flex-start' justify='center'>
        <VStack w='45%'>
          <Image
            src={hut}
            alt='Stone fairy hut with a yellow wood roof that has a red swirl, surrounded by rocks, red trees, and green plants.'
          />
          <Image
            src={george}
            alt='Green and yellow beetle with a red-pink thorax; Named George, the Serious Beetle.'
          />
          <Image
            src={merlin}
            alt='Purple one-eyed fish with large yellow teeth and fleshy protrusion coming from the top of its head down in front of its face.'
          />
        </VStack>
        <VStack w='45%'>
          <Image
            src={redHouses}
            alt='Red houses on a yellow hill, green hill in the background, and a blue and purple nebula in the sky.'
          />
          <Image
            src={rhalf}
            alt='Blue rhino beetle with purple horn, and green, yellow, and red segmented legs.'
          />
          <Image
            src={tentacles}
            alt='Pastel rainbow tentacles coming up from below, twisting amongst themselves.'
          />
        </VStack>
      </HStack>
    </Box>
  )
}
Watercolor.Page = Watercolor
Watercolor.Thumbnail = Thumbnail
