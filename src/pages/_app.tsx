import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from 'components/Header/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>온라인 스터디룸</title>
      </Head>
      <Header isLogin={true} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
