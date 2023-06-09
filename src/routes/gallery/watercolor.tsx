import { HStack, Image, VStack } from '@chakra-ui/react'
import { GalleryPage, GalleryThumbnail } from './common'

import george from 'assets/watercolor/george.jpeg'
import hut from 'assets/watercolor/hut.jpeg'
import merlin from 'assets/watercolor/merlin.jpeg'
import redHouses from 'assets/watercolor/red-houses.jpeg'
import rhalf from 'assets/watercolor/rhalf.jpeg'
import tentacles from 'assets/watercolor/tentacles.jpeg'

export function Thumbnail(props: Omit<GalleryThumbnail, 'id' | 'src'>) {
  return (
    <GalleryThumbnail
      src={hut}
      id='watercolor'
      caption='Watercolor'
      {...props}
    />
  )
}

export default function Watercolor() {
  return (
    <GalleryPage heading='Watercolor'>
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
    </GalleryPage>
  )
}
Watercolor.Page = Watercolor
Watercolor.Thumbnail = Thumbnail
