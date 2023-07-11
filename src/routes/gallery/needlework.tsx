import { HStack, Image, VStack } from '@chakra-ui/react'
import { GalleryPage, GalleryThumbnail } from './common'

import bee from 'assets/needlework/bee.jpeg'
import hippo from 'assets/needlework/hippo.jpeg'
import lake from 'assets/needlework/lake.jpeg'
import owl from 'assets/needlework/owl.jpeg'
import pig from 'assets/needlework/pig.jpeg'

export function Thumbnail(props: Omit<GalleryThumbnail, 'id' | 'src'>) {
  return (
    <GalleryThumbnail
      src={lake}
      id='needlework'
      caption='Needlework'
      {...props}
    />
  )
}

export default function Needlework() {
  return (
    <GalleryPage heading='Needlework'>
      <HStack align='flex-start' justify='center'>
        <VStack w='45%'>
          <Image
            src={lake}
            alt='Blue fabric with green hills in the background, a sandy beach in the foreground, felt and bead flowers, and a sailboat in the midground blue water.'
          />
          <Image
            src={hippo}
            alt='Gray fabric with felt ears and a snout shaped like a blushing hippo with a flower crown.'
          />
          <Image
            src={bee}
            alt='A bee on white fabric with a fuzzy punch needle body and straight-stitched wings.'
          />
        </VStack>
        <VStack w='45%'>
          <Image
            src={owl}
            alt='An orange owl with green plummage and yellow eyes, standing on a branch, with a blue background'
          />
          <Image
            src={pig}
            alt='Tan frabric with felt ears and a snout shaped like a pig with a daisy crown.'
          />
        </VStack>
      </HStack>
    </GalleryPage>
  )
}
Needlework.Page = Needlework
Needlework.Thumbnail = Thumbnail
