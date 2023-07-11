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
          <Image src={lake} alt='' />
          <Image src={hippo} alt='' />
          <Image src={bee} alt='' />
        </VStack>
        <VStack w='45%'>
          <Image src={owl} alt='' />
          <Image src={pig} alt='' />
        </VStack>
      </HStack>
    </GalleryPage>
  )
}
Needlework.Page = Needlework
Needlework.Thumbnail = Thumbnail
