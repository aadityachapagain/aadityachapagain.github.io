import "tailwindcss/tailwind.css";
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/header";
import { Auth0Provider } from "@auth0/auth0-react";
import Footer from "../components/footer";

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
          content="Tech, life, uprising , upbringing, futuristic logbook of aaditya chapagain made with love."
        />
        <meta property="og:title" content="My Personal website." />
        <meta
          property="og:description"
          content="my takes written all over in digital wallpaper."
        />
        <meta property="og:url" content="https://aadityachapagain.com/" />
        <meta property="og:type" content="website" />
        <title>Welcome to Aaditya Chapagain&apos;s notebook!</title>
      </Head>

      <div className="flex flex-col h-screen ">
        <Header />

        <div className="p-4 lg:p-8  inline-block grow ">
          <main className="py-8 px-8 lg:px-0 ">
            <Component {...pageProps} />
          </main>
        </div>

        <Footer />
      </div>
    </Auth0Provider>
  );
}
