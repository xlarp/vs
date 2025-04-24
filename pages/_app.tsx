import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ShootingStarsBackground from "@/components/Stars";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JetBrains_Mono, Khula } from "next/font/google";
import Head from "next/head";

const viewport = {
  viewport: "width=device-width, initial-scale=1.0",
};

const metaDescription = {
  description: "it's so over",
};

const openGraph = {
  title: "proto - xvh.lol",
  description: "it's so over",
  url: "https://xvh.lol",
  type: "website",
};

const twitter = {
  card: "summary_large_image",
  title: "proto - xvh.lol",
  description: "it's so over",
};

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
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>{openGraph.title}</title>
        <meta name="viewport" content={viewport.viewport} />
        <meta name="description" content={metaDescription.description} />

        {/* Open Graph / Discord */}
        <meta property="og:title" content={openGraph.title} />
        <meta property="og:description" content={openGraph.description} />
        <meta property="og:url" content={openGraph.url} />
        <meta property="og:type" content={openGraph.type} />

        {/* Twitter */}
        <meta name="twitter:card" content={twitter.card} />
        <meta name="twitter:title" content={twitter.title} />
        <meta name="twitter:description" content={twitter.description} />
      </Head>
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
