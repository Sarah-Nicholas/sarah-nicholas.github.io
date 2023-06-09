import { GalleryPage, GalleryThumbnail } from './common'

import redBlueDiagonal from 'assets/acrylic/red-blue-diagonal.jpeg'
import orangeBlueGold from 'assets/acrylic/orange-blue-gold.jpeg'
import vibrantBlack from 'assets/acrylic/vibrant-black.jpeg'
import guy from 'assets/acrylic/guy.jpeg'
import twoSwirls from 'assets/acrylic/two-swirls.jpeg'
import purpleOval from 'assets/acrylic/purple-oval.jpeg'

import { HStack, Image, VStack } from '@chakra-ui/react'

export function Thumbnail(props: Omit<GalleryThumbnail, 'id' | 'src'>) {
  return (
    <GalleryThumbnail
      src={redBlueDiagonal}
      id='acrylic'
      caption='Acrylic'
      {...props}
    />
  )
}

export default function Acrylic() {
  return (
    <GalleryPage heading='Acrylic'>
      <HStack align='flex-start' justify='center'>
        <VStack w='45%'>
          <Image
            src={redBlueDiagonal}
            alt='Red and orange swirls on left, light blue swirls on right, on a black canvas, with an unpainted diagonal between them.'
          />
          <Image
            src={purpleOval}
            alt='Shimmery purple forming an arc across an oval canvas, with muted gold in the background.'
          />
          <Image
            src={orangeBlueGold}
            alt='Intense red-orange covering most of a black canvas, with vibrant blue and gold speckling in from the edges.'
          />
        </VStack>
        <VStack w='45%'>
          <Image
            src={guy}
            alt='Abstract swatches of red and orange forming an bushy-eyebrowed, mustachioed guy with fiery blue eyes.'
          />
          <Image
            src={vibrantBlack}
            alt='Black canvas layered with dark reds and purples, neon blues, pinks, and greens, and metallic blues and purples.'
          />
          <Image
            src={twoSwirls}
            alt='Two paintings textured with scrapered swirls and circles, colored with mixes of reds, blues, yellow, green, and cyan.'
          />
        </VStack>
      </HStack>
    </GalleryPage>
  )
}
Acrylic.Page = Acrylic
Acrylic.Thumbnail = Thumbnail
