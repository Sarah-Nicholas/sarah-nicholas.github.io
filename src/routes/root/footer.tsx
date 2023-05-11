import {
  Flex,
  HStack,
  Icon,
  Link,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { IconType } from 'react-icons'

import { FaLinkedin, FaTwitter } from 'react-icons/fa'

export function Footer() {
  const bg = useColorModeValue('rgba(255,255,255,0.8)', 'rgba(26, 32, 44, 0.8)')
  return (
    <Flex align='center' px={4} py={2} zIndex={1} bgColor={bg}>
      <Text color='gray.400'>Thank you for visiting my website :)</Text>
      <Spacer />
      <HStack align='bottom'>
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
    <Link href={url} target='_blank'>
      <Icon as={as} boxSize={7} _hover={iconHover} cursor='pointer' focusable />
    </Link>
  )
}

const iconHover = { color: 'gray.400' }
