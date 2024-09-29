import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Vnavbar from "./vnavbar/vnavbar";
export default function Home() {
  return (
    <>
      <Head>
        <title>Dashbaord Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/bbc8f5073e.js" crossOrigin="anonymous"></script>
        <link 
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <div className={styles.main}>
        <Vnavbar />
      </div>
    </>
  );
}
