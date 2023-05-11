import { Flex, Spacer } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Header } from './header'
import { Footer } from './footer'

export default function Root() {
  return (
    <Flex direction='column' minH='100vh'>
      <Header />
      <Outlet />
      <Spacer />
      <Footer />
    </Flex>
  )
}
