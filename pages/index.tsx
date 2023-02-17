import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Skilled e-learning landing page</title>
      </Head>
      <main>
        <div className="flex flex-col items-center pt-4">
          <p className="text-lg font-plusjakarta font-extrabold text-[28px] text-vdb">
            skilled
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="flex h-12 w-[140px] flex-row items-center justify-center rounded-full bg-vdb  ">
            <span className="font-plusjakarta font-bold text-white ">
              Get started{" "}
            </span>{" "}
          </button>{" "}
        </div>
      </main>
    </>
  );
}
