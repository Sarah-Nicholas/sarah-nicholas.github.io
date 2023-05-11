import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <Box w='full' px={8} py={4}>
      <Heading>Sarah Nicholas</Heading>
      {/* <NavLink to='/' end>
        Home
      </NavLink> */}
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
    </Box>
  )
}
