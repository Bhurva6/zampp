import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
  <title>Zampp</title>
  <link rel="icon" href="https://thumbs.dreamstime.com/b/zampona-vector-icon-isolated-white-background-outline-thin-line-zampona-icon-website-design-mobile-app-development-189431774.jpg" />
  </Head>
   <Component {...pageProps} />
  </>
 
}

export default MyApp

