import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JetBrains_Mono, Khula } from "next/font/google";

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

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
