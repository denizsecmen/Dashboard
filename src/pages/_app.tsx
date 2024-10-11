"use client"
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import  Context  from "./context/context";
export default function App({ Component, pageProps }: AppProps) {
  let [stat, chsatat] = useState("");
  return <>
  <Context.Provider value={[stat,chsatat]}>
      <Component {...pageProps} />
  </Context.Provider>
  </>;
}
