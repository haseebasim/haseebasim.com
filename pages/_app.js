import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(process.env.NEXT_PUBLIC_HJID, process.env.NEXT_PUBLIC_HJSV)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
