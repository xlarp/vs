import config from "@/static";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>7fx - throwing.lol</title>
      <meta name="description" content="it's so over" />
      <meta name="theme-color" content={config.colors.pink} />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
