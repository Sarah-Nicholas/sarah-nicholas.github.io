import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import ErrorPage from './error-page'
import Home from './routes/home'
import About from './routes/about'
import Gallery from './routes/gallery'
import { loader as galleryLoader } from './routes/gallery'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'gallery', element: <Gallery /> },
          {
            path: 'gallery/:projectId',
            element: <Gallery.Page />,
            loader: galleryLoader,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
