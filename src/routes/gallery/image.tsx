import {
  LinkBox,
  LinkOverlay,
  Image,
  Text,
  useColorModeValue,
  LinkBoxProps,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export type GalleryImage = {
  src: string
  id: string
  caption?: string
} & LinkBoxProps
export function GalleryImage({
  src,
  id,
  caption,
  border,
  borderColor: providedBorderColor,
  borderRadius,
  ...props
}: GalleryImage) {
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
