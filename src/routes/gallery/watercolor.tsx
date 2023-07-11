import { HStack, Image, VStack } from '@chakra-ui/react'
import { GalleryPage, GalleryThumbnail } from './common'

import george from 'assets/watercolor/george.jpeg'
import hut from 'assets/watercolor/hut.jpeg'
import merlin from 'assets/watercolor/merlin.jpeg'
import redHouses from 'assets/watercolor/red-houses.jpeg'
import rhalf from 'assets/watercolor/rhalf.jpeg'
import tentacles from 'assets/watercolor/tentacles.jpeg'
import bengi from 'assets/watercolor/bengi.jpeg'
import butterfly from 'assets/watercolor/butterfly.jpeg'
import guys from 'assets/watercolor/guys.jpeg'
import headInClouds from 'assets/watercolor/head-in-clouds.jpeg'
import jeremy from 'assets/watercolor/jeremy.jpeg'
import matches from 'assets/watercolor/matches.jpeg'
import mrButtons from 'assets/watercolor/mr-buttons.jpeg'
import mrsButtons from 'assets/watercolor/mrs-buttons.jpeg'
import partyPenguin from 'assets/watercolor/party-penguin.jpeg'
import wistfulDuck from 'assets/watercolor/wistful-duck.jpeg'

export function Thumbnail(props: Omit<GalleryThumbnail, 'id' | 'src'>) {
  return (
    <GalleryThumbnail
      src={matches}
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
            src={matches}
            alt='Two blackened matches with red, orange, yellow, and pink flames with smokey blue outlines.'
          />
          <Image
            src={guys}
            alt='An orange fuzzy guy holding a pink fuzzy girl holding a light blue fuzzy guy holding a branch, surrounded by a fluid border of corresponding colors.'
          />
          <Image
            src={george}
            alt='Green and yellow beetle with a red-pink thorax; Named George, the Serious Beetle.'
          />
          <Image
            src={bengi}
            alt='Orange slug with a purple mug on his back with greens growing out.'
          />
          <Image
            src={merlin}
            alt='Purple one-eyed fish with large yellow teeth and fleshy protrusion coming from the top of its head down in front of its face.'
          />
          <Image
            src={mrButtons}
            alt='Pink fuzzball with menacing eyes and long noodly legs and big pink boots; Pink paint splatter across his face and ahead of him. Named Mr. Buttons.'
          />
          <Image
            src={wistfulDuck}
            alt='A white duck wearing an orange hat, with head cocked at an art showing of a nebulous blue & green watercolor painting.'
          />
          <Image
            src={headInClouds}
            alt="Outline of a woman's face with purple, blue, and green clouds covering above her nose."
          />
        </VStack>
        <VStack w='45%'>
          <Image
            src={hut}
            alt='Stone fairy hut with a yellow wood roof that has a red swirl, surrounded by rocks, red trees, and green plants.'
          />
          <Image
            src={partyPenguin}
            alt='Penguin kicking legs forward and throwing arms back, surrounded by fluid orange & pink border.'
          />
          <Image
            src={rhalf}
            alt='Blue rhino beetle with purple horn, and green, yellow, and red segmented legs.'
          />
          <Image
            src={redHouses}
            alt='Red houses on a yellow hill, green hill in the background, and a blue and purple nebula in the sky.'
          />
          <Image
            src={tentacles}
            alt='Pastel rainbow tentacles coming up from below, twisting amongst themselves.'
          />
          <Image
            src={mrsButtons}
            alt='Orange fuzzball (with a bow) with long noodly legs ending in black high heels, walking up rainbow colored steps.'
          />
          <Image
            src={butterfly}
            alt='A minimalistic butterfly with orange watercolor wings.'
          />
          <Image
            src={jeremy}
            alt='A giant squid; orange on top that fades into blue at the tentacles, with bulbous, piercing blue eyes.'
          />
        </VStack>
      </HStack>
    </GalleryPage>
  )
}
Watercolor.Page = Watercolor
Watercolor.Thumbnail = Thumbnail
