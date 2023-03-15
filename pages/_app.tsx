import "tailwindcss/tailwind.css";
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import type { AppProps } from "next/app";
// import Head from "next/head";
import Header from "../components/header";
import { Auth0Provider } from "@auth0/auth0-react";
import Footer from "../components/footer";
import "../css/main.css";

import {Analytics} from '@vercel/analytics/react';

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <div className="flex flex-col h-screen ">
        <Header />

        <div className="p-4 lg:p-8  inline-block grow ">
          <main className="py-8 px-8 lg:px-0 ">
            <Component {...pageProps} />
          </main>
        </div>

        <Footer />
        <Analytics />
      </div>
    </Auth0Provider>
  );
}
