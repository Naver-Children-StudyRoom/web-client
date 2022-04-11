import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import Header from 'components/Header/Header'
import configureStore from 'redux/store/configureStore'

import 'styles/global.css'

const store = configureStore()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>온라인 스터디룸</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
