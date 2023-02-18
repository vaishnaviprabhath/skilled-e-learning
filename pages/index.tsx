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
        <div className="pt-4 px-4">
          <div className="flex items-center justify-between  ">
            <div className="">
              <Image
                width={119}
                height={28}
                src="/assets/logo-dark.svg"
                alt="Logo"
              ></Image>
            </div>
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
