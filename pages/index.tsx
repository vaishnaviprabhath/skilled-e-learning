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
        <div className="pt-6 ">
          <div className="flex items-center justify-center  ">
            <p className=" font-plusjakarta font-extrabold text-[28px] text-vdb pr-16">
              skilled
            </p>
            <button className="flex-row  h-12 w-[140px] rounded-full bg-vdb  ">
              <span className="font-plusjakarta font-bold text-white ">
                Get started{" "}
              </span>{" "}
            </button>{" "}
          </div>
        </div>
      </main>
    </>
  );
}
