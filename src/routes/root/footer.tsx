import {
  Flex,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { IconType } from 'react-icons'

import { FaAt, FaLinkedin, FaTwitter } from 'react-icons/fa'

export function Footer() {
  const bg = useColorModeValue('rgba(255,255,255,0.8)', 'rgba(26, 32, 44, 0.8)')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  return (
    <Flex align='center' px={4} py={2} zIndex={1} bgColor={bg}>
      <Text color={textColor}>Thank you for visiting my website :)</Text>
      <Spacer />
      <HStack alignItems='end'>
        <SocialIcon
          as={FaAt}
          url='https://bsky.app/profile/sarahnicholas.net'
        />
        <SocialIcon as={FaTwitter} url='https://twitter.com/theroseinator_' />
        <SocialIcon
          as={FaLinkedin}
          url='https://www.linkedin.com/in/sarah-nicholas-82a059187/'
        />
      </HStack>
    </Flex>
  )
}

type SocialIcon = {
  as: IconType
  url: string
}
function SocialIcon({ as, url }: SocialIcon) {
  return (
    <LinkBox lineHeight={0}>
      <LinkOverlay href={url} target='_blank'>
        <Icon
          as={as}
          boxSize={7}
          sx={{ '*:hover > &': iconHover }}
          cursor='pointer'
        />
      </LinkOverlay>
    </LinkBox>
  )
}

const iconHover = { color: 'gray.400' }
