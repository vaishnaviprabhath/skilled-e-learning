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
            <Image
              width={119}
              height={28}
              src="/assets/logo-dark.svg"
              alt="Logo"
            ></Image>
            <button className="flex-row  h-12 w-[140px] rounded-full bg-vdb  ">
              <span className="font-plusjakarta font-bold text-white ">
                Get started{" "}
              </span>{" "}
            </button>{" "}
          </div>
          <div className="pt-[38px] ">
            <h1 className="font-plusjakarta font-extrabold text-vdb text-[40px] leading-[50px] ">
              Maximize skill, minimize budget
            </h1>
          </div>

          <div className="pt-[26px]">
            <p className="font-plusjakarta text-grey font-medium text-base leading-[26px]">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
