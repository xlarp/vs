import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ShootingStarsBackground from "@/components/Stars";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JetBrains_Mono, Khula } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
});

export const khula = Khula({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-khula",
  preload: true,
});

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope
            );
          })
          .catch((error) => {
            console.error("ServiceWorker registration failed: ", error);
          });
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>proto - throwing.lol</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* <EmberBackground /> */}
      <ShootingStarsBackground />
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
