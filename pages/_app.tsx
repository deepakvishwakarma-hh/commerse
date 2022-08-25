import '../styles/globals.css'
import store from "../src/redux"
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { subscriberCallback } from "../src/redux/persist"
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// TRANSFER
const theme = extendTheme({
  fonts: {
    body: `'Nunito', sans-serif`,
    heading: `'Playfair Display',  sans-serif`
  }
})

if (typeof window !== undefined) {
  store.subscribe(subscriberCallback)
}

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
