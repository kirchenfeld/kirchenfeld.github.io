import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>INNOSCOUT WEBSITE V1.1</title>
      </Head>
      <Component {...pageProps} />
    </>
)
}

export default MyApp
