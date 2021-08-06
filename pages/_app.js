import '@/css/tailwind.css'
import * as ga from '../lib/ga'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { Provider as AuthProvider } from 'next-auth/client'
import LayoutWrapper from '@/components/LayoutWrapper'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ScrollToTop from '@/components/ScrollToTop'
import Policy from '@/components/Policy'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <AuthProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <LayoutWrapper>
          <Component {...pageProps} />
          <ScrollToTop />
        </LayoutWrapper>
        <Policy />
      </ThemeProvider>
    </AuthProvider>
  )
}
