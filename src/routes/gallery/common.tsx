import { PropsWithChildren } from 'react'
import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  LinkBox,
  LinkBoxProps,
  LinkOverlay,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export type GalleryThumbnail = {
  src: string
  id: string
  caption?: string
} & LinkBoxProps
export function GalleryThumbnail({
  src,
  id,
  caption,
  border,
  borderColor: providedBorderColor,
  borderRadius,
  ...props
}: GalleryThumbnail) {
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  return (
    <LinkBox
      border={border || '1px solid'}
      borderColor={providedBorderColor || borderColor}
      borderRadius={borderRadius || 'md'}
      {...props}
    >
      <LinkOverlay as={Link} to={`/gallery/${id}`}>
        <Image src={src} />
      </LinkOverlay>
      <Text textAlign='center' color={textColor} py='2'>
        {caption}
      </Text>
    </LinkBox>
  )
}

type GalleryPage = PropsWithChildren<{ heading: string }>
export function GalleryPage({ heading, children }: GalleryPage) {
  const textColor = useColorModeValue('gray.600', 'gray.400')
  return (
    <Box>
      <LinkBox as={Flex} align='center' ml='5%' color={textColor}>
        <Icon as={FaAngleLeft} />
        <LinkOverlay as={Link} to='/gallery'>
          Back
        </LinkOverlay>
      </LinkBox>
      <Heading textAlign='center' pb={6}>
        {heading}
      </Heading>
      {children}
    </Box>
  )
}
