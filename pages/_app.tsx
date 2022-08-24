import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store, { useAppSelector } from "../src/redux"
// TRANSFER
const theme = extendTheme({
  fonts: {
    body: `'Nunito', sans-serif`,
    heading: `'Playfair Display',  sans-serif`
  }
})



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store} >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
