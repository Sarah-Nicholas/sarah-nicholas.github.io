import { Center, Heading, Spacer, Text } from '@chakra-ui/react'

import handHoldingFlower from '../assets/hand-holding-flower.jpeg'

export function Home() {
  return (
    <Center
      pos='fixed'
      top={0}
      right={0}
      bottom={0}
      left={0}
      flexDirection='column'
      pt={[28, 36]}
      backgroundImage={handHoldingFlower}
      backgroundAttachment='fixed'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      backgroundPosition='top center'
    >
      <Heading>Welcome!</Heading>
      <Text align='center' w={['75vw', '50vw']}>
        Theatre Design & Miscellaneous Art by Sarah Nicholas
      </Text>
      <Spacer />
    </Center>
  )
}

export default Home
