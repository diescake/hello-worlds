import Head from 'next/head'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="twitter:creator" content="diescake" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
