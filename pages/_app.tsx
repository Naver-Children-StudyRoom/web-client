import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>온라인 스터디룸</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
