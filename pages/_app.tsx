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
import { FullscreenHexLoader } from "../components/common/HexLoader";

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialLoadTimer = setTimeout(() => {
      setIsHomePage(router.pathname === "/");
      setIsLoading(false);
    }, 400);

    // Clean up the timer
    return () => clearTimeout(initialLoadTimer);
  }, [router.pathname]);

  // Add loading state for route changes
  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => {
      // Add a slight delay for route changes too
      setTimeout(() => {
        setIsHomePage(router.pathname === "/");
        setIsLoading(false);
      }, 300);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      {/* Show loading screen while loading */}
      {isLoading && <FullscreenHexLoader />}

      <div
        className={`flex flex-col h-screen relative overflow-x-hidden w-full ${
          isHomePage ? "bg-[#070717]" : "bg-white"
        } ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        {/* Only show header and custom layout on non-homepage routes */}
        {!isHomePage && <Header />}

        {!isHomePage ? (
          // Standard layout with padding for non-homepage
          <div className="inline-block grow">
            <main className="lg:px-0">
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
