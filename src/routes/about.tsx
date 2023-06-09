import {
  Center,
  Heading,
  Text,
  Box,
  Image,
  Flex,
  Spacer,
  Link,
  Icon,
  List,
  ListItem,
} from '@chakra-ui/react'
import { FaExternalLinkAlt } from 'react-icons/fa'

import sarahNicholasAvatar from '../assets/sarah-nicholas.jpeg'

export default function About() {
  return (
    <Center>
      <Box maxW={['75vw', '60vw']}>
        <Flex align='center'>
          <Heading>About me </Heading>
          <Spacer />
          <Image
            src={sarahNicholasAvatar}
            borderRadius='full'
            alt='Sarah Nicholas'
            boxSize={[100, 125, 150]}
          />
        </Flex>
        <Text pb={2}>
          Sarah Rose Nicholas is an Iowa-based Theatre Design graduate with an
          emphasis on costumes. She has a passion for design and fashion and she
          loves painting, sewing, and just about all other hand crafts. She's
          also passionate about being around plants and nature, and protecting
          the environment.
        </Text>
        <Text pb={2}>
          Her training includes costume design and repair; set design, building,
          painting, and striking; hand and machine sewing; millinery; fashion
          history; and theatre research and dramaturgy.
        </Text>
        <Text pb={2}>
          Her hobbies include painting (acryllic & watercolor); embroidery;
          clothing repair; and keeping up with the latest fashion news and
          drama. She's also very fond of her many plants.
        </Text>
        <Text pb={2}>
          She is open to work (and open to relocate), above all looking for
          creative work and environments, and good people.
        </Text>
        <Text pb={2}>Find her on the internet:</Text>
        <List spacing={1} pl={2} pb={4}>
          <ListItem>
            Twitter:{' '}
            <ExternalLink
              url='https://twitter.com/theroseinator_'
              text='@theroseinator_'
            />
          </ListItem>
          <ListItem>
            BlueSky:{' '}
            <ExternalLink
              url='https://staging.bsky.app/profile/sarahnicholas.net'
              text='@sarahnicholas.net'
            />
          </ListItem>
          <ListItem>
            LinkedIn:{' '}
            <ExternalLink
              url='https://www.linkedin.com/in/sarah-nicholas-82a059187/'
              text='Sarah Nicholas'
            />
          </ListItem>
        </List>

        <Text pb={2}>Contact Sarah for work or design inqueries:</Text>
        <Link fontWeight='semibold' href='mailto:rosiered56@gmail.com'>
          rosiered56@gmail.com
        </Link>
      </Box>
    </Center>
  )
}

type ExternalLink = {
  url: string
  text?: string
}
function ExternalLink({ url, text = url }: ExternalLink) {
  return (
    <Link href={url} isExternal>
      {text}
      <Icon pl={1} as={FaExternalLinkAlt} />
    </Link>
  )
}
