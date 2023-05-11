import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export function Header() {
  const bg = useColorModeValue('rgba(255,255,255,0.8)', 'rgba(26, 32, 44, 0.8)')
  return (
    <Flex direction='column' px={8} py={4} bgColor={bg} zIndex={1}>
      <Heading>Sarah Nicholas</Heading>
      <Breadcrumb separator='-'>
        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to='/' end>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to='/gallery'>
            Gallery
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to='/about' end>
            About
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  )
}
