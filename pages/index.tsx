import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sample App</title>
      </Head>
      <p className="text-lg font-plusjakarta">Sample text in lg</p>
    </>
  );
}
