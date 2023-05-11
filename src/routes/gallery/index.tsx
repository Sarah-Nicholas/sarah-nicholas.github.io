import { Center, Text } from '@chakra-ui/react'
import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom'
import Painting from './painting'

export function Gallery() {
  return (
    <Center flexDirection='column' pt={10}>
      <Text>Coming Soon</Text>
      <Center
        flexDirection='column'
        w={['80vw', '75vw', '60vw', '50vw', '40vw']}
        mt={12}
      >
        <Text color='gray.400'>Here's a painting to tie you over</Text>
        <Painting.Thumbnail />
      </Center>
    </Center>
  )
}

Gallery.Page = Page
export default Gallery

// function Row({ children }: PropsWithChildren) {
//   return (
//     <Flex direction={['column', 'row']} gap={4} pb={4} px={4}>
//       {children}
//     </Flex>
//   )
// }

const PageDictionary: Record<string, () => JSX.Element> = {
  painting: Painting.Page,
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
