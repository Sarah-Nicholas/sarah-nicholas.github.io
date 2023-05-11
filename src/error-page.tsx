import { Box, Center, Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.log(error)

  if (isRouteErrorResponse(error)) {
    return <ErrorWrapper error={error} />
  }
  if (error instanceof Error)
    return (
      <ErrorWrapper
        error={{ status: 0, internal: true, statusText: error.message }}
      />
    )

  return <ErrorWrapper />
}

type ErrorResponse = {
  data?: unknown
  error?: Error
  internal: boolean
  status: number
  statusText: string
}
type ErrorWrapper = { error?: ErrorResponse }
function ErrorWrapper({ error }: ErrorWrapper) {
  if (!error) error = { status: 0, internal: true, statusText: 'Unknown Error' }
  const { status, statusText } = error
  return (
    <Center minH='25vh'>
      <Box textAlign='center'>
        <Heading>Oh no!</Heading>
        {status !== 0 && <Text color='gray.400'>Error {status}</Text>}
        <Text mt={10}>{statusText}</Text>
      </Box>
    </Center>
  )
}
