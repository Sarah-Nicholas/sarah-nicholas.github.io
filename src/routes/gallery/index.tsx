import { Center, Heading, Stack, VStack } from '@chakra-ui/react'
import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom'
import Acrylic from './acrylic'
import Watercolor from './watercolor'
import Needlework from './needlework'

export function Gallery() {
  return (
    <Center flexDirection='column'>
      <Heading pb={6}>Gallery</Heading>
      <Stack
        direction={['column', 'row']}
        align={['center', 'flex-start']}
        mx='2.5%'
      >
        <VStack w={['90%', '50%']}>
          <Acrylic.Thumbnail />
          <Needlework.Thumbnail />
        </VStack>
        <Watercolor.Thumbnail w={['90%', '50%']} />
      </Stack>
    </Center>
  )
}

Gallery.Page = Page
export default Gallery

const PageDictionary: Record<string, () => JSX.Element> = {
  acrylic: Acrylic.Page,
  watercolor: Watercolor.Page,
  needlework: Needlework.Page,
}
export function loader({ params }: LoaderFunctionArgs) {
  console.log(params)
  if (!params.projectId) throw new Error('Invalid path')
  const page = PageDictionary[params.projectId]
  if (!page) throw new Error('Project does not exist')
  return page()
}

export function Page() {
  const page = useLoaderData() as JSX.Element
  return <>{page}</>
}
