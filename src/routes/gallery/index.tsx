import { Center, Flex } from '@chakra-ui/react'
import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import Painting from './painting'

export function Gallery() {
  return (
    // <Center>
    <>
      <Row>
        <Painting.Thumbnail />
        <Painting.Thumbnail />
      </Row>
      <Row>
        <Painting.Thumbnail />
        <Painting.Thumbnail />
      </Row>
    </>
    // </Center>
  )
}

Gallery.Page = Page
export default Gallery

function Row({ children }: PropsWithChildren) {
  return (
    <Flex direction={['column', 'row']} gap={4} pb={4} px={4}>
      {children}
    </Flex>
  )
}

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
