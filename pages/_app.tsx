import '../styles/globals.css'
import Provider from "../src/context"
import type { AppProps } from 'next/app'
import ErrorBoundary from '../src/error-boundry'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: `'Nunito', sans-serif`,
    heading: `'Playfair Display',  sans-serif`
  }
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Provider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </ErrorBoundary>
  )
}

export default MyApp
