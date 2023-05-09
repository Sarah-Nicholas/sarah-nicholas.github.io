import { Box, Button, Center, Text } from '@chakra-ui/react'
export default function Index() {
  return (
    <Center h='80vh'>
      <Box textAlign='center'>
        <Text>I am Sarah</Text>
        <Text>Contact me at my email</Text>
        <Button onClick={() => window.open('mailto:rosiered56@gmail.com')}>
          Contact
        </Button>
      </Box>
    </Center>
  )
}
