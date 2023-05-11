import { Flex, HStack, Icon, Link, Spacer, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { IconType } from 'react-icons'

import { FaLinkedin, FaTwitter } from 'react-icons/fa'

export function Footer() {
  return (
    // <Box w='full' px={4} py={2}>
    <Flex align='center' px={4} py={2}>
      <Text>Thank you for visiting my website :)</Text>
      <Spacer />
      <HStack>
        <SocialIcon as={FaTwitter} url='https://twitter.com/theroseinator_' />
        <SocialIcon
          as={FaLinkedin}
          url='https://www.linkedin.com/in/sarah-nicholas-82a059187/'
        />
        {/* <Icon as={FaTwitter} boxSize={7} focusable /> */}
        {/* <Icon as={FaLinkedin} boxSize={7} focusable /> */}
      </HStack>
    </Flex>
    // </Box>
  )
}

type SocialIcon = {
  as: IconType
  url: string
}
function SocialIcon({ as, url }: SocialIcon) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link href={url} target='_blank'>
      <Icon
        as={as}
        boxSize={7}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        color={hovered ? 'gray.400' : undefined}
        cursor='pointer'
        focusable
      />
    </Link>
  )
}
