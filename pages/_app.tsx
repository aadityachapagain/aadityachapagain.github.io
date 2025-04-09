import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import type { AppProps } from "next/app";
import Header from "../components/common/Header";
import { Auth0Provider } from "@auth0/auth0-react";
import Footer from "../components/common/Footer";
import "../css/main.css";

import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    // Check if this is the homepage (index route)
    setIsHomePage(router.pathname === "/");
  }, [router.pathname]);

  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <div
        className={`flex flex-col h-screen relative overflow-x-hidden w-full ${
          isHomePage ? "bg-[#070717]" : "bg-white"
        }`}
      >
        {/* Only show header and custom layout on non-homepage routes */}
        {!isHomePage && <Header />}

        {!isHomePage ? (
          // Standard layout with padding for non-homepage
          <div className="p-4 lg:p-8 inline-block grow mt-20">
            <main className="py-8 px-8 lg:px-0">
              <Component {...pageProps} />
            </main>
          </div>
        ) : (
          // For homepage, render the component directly without wrappers
          <main className="grow">
            <Component {...pageProps} />
          </main>
        )}

        {/* Only show footer on non-homepage routes */}
        {!isHomePage && <Footer />}
        <Analytics />
      </div>
    </Auth0Provider>
  );
}
