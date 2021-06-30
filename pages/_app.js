import '@/css/tailwind.css'

import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

import { SEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'
import ScrollToTop from '@/components/ScrollToTop'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

export default function App({ Component, pageProps, router }) {
  const _router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    _router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      _router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [_router.events])
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <LayoutWrapper>
        <Component {...pageProps} key={router.route} />
        <ScrollToTop />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
