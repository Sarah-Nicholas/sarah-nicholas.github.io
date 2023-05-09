import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

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

function Header() {
  return (
    <Box w='full' px={8} py={4}>
      <Heading>Sarah Nicholas</Heading>
    </Box>
  )
}

function Footer() {
  return (
    <Box w='full' px={4} py={2}>
      <Text>Thank you for visiting my website :)</Text>
    </Box>
  )
}
