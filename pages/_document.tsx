import config from "@/static";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="jolts" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="it's so over" />
        <meta name="theme-color" content={config.colors.main} />
      </Head>
      <body className="bg-[#000000]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
