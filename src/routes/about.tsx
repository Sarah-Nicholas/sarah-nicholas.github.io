import { Center, Heading, Text, Box, Button } from '@chakra-ui/react'

export default function About() {
  return (
    <Center>
      <Box maxW={['75vw', '60vw', '50vw']}>
        <Heading>About me</Heading>
        <Text pb={2}>My name is Sarah 'OboeDaddy' Nicholas</Text>
        <Text pb={2}>
          I am an Iowa-based Theatre Design graduate with an emphasis on
          Costumes. I love painting and sewing and other hand crafts.
        </Text>
        <Text pb={2}>
          Find me on Twitter at @theroseinator_ or on BlueSky at
          @sarahnicholas.net
        </Text>
        <Text pb={2}>
          Contact me{' '}
          <Button
            variant='link'
            onClick={() => window.open('mailto:rosiered56@gmail.com')}
          >
            here
          </Button>
        </Text>
      </Box>
    </Center>
  )
}
