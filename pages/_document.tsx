import React from "react";
import links from "@/static";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>nya!~</title>
      <meta name="description" content="uwu" />
      <meta name="theme-color" content={links.theme} />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
