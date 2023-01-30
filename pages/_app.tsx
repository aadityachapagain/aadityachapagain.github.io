import 'tailwindcss/tailwind.css'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import { Auth0Provider } from '@auth0/auth0-react'
import Footer from '../components/footer';

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Tech, life, uprising , upbringing, futuristic logbook made with love."
        />
        <title>Welcome to Aaditya Chapagain's notebook!</title>
      </Head>

      <div className='flex flex-col h-screen '>
        <Header />

        <div className='p-4 lg:p-8  inline-block grow '>
          <main className="py-8 px-8 lg:px-0 ">
            <Component {...pageProps} />
          </main>
        </div>

        <Footer />
      </div>
      
      
    </Auth0Provider>
  )
}
