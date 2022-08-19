import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store, { useAppSelector } from "../src/redux"
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
// TRANSFER
const theme = extendTheme({
  fonts: {
    body: `'Nunito', sans-serif`,
    heading: `'Playfair Display', serif`
  }
})


let persistor = persistStore(store)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
