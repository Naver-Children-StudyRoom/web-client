import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from 'components/Header/Header'

import 'styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>온라인 스터디룸</title>
      </Head>
      <Header isLogin={true} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
